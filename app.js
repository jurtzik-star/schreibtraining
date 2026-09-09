/* ============================================================
   app.js
   Steuert den Ablauf der App: Auswahl → Schreiben (mit Autosave in
   localStorage) → Absenden an den Cloudflare Worker zur KI-Bewertung
   → Anzeige des Feedbacks → Übermittlung von Text + Bewertung an das
   Google Formular (für die Lehrkraft).
   ============================================================ */

(function () {
  "use strict";

  const LS_KEY_PREFIX = "schreibtraining_draft_";
  const LS_KEY_PROFILE = "schreibtraining_profile";

  // ---------- Dynamische Fußzeile ----------
  // Basis: "Lern-App Schreibtraining, erstellt von Thomas Jurtzik"
  // Mit Kurs: "..., Kurs: <Kurs>. erstellt von Thomas Jurtzik"
  // Mit Aufgabe: "..., Kurs: <Kurs>, <Aufgabe>. erstellt von Thomas Jurtzik"
  const FOOTER_APP_NAME = "Schreibtraining";
  function updateFooterText() {
    const footerEl = document.getElementById("appFooter");
    if (!footerEl) return;
    if (!state.kurs) {
      footerEl.textContent = "Lern-App " + FOOTER_APP_NAME + ", erstellt von Thomas Jurtzik";
      return;
    }
    let text = "Lern-App " + FOOTER_APP_NAME + ", Kurs: " + state.kurs;
    if (state.task) text += ", " + state.task.title;
    text += ". erstellt von Thomas Jurtzik";
    footerEl.textContent = text;
  }

  // Deep-Linking: erlaubt anderen Apps (z. B. der B1-Lern-App), per Link
  // direkt auf eine bestimmte Aufgabe zu verweisen und den Namen mitzugeben,
  // z. B. schreibtraining.jurtzik-lernapps.de/?name=Anna+Muster&taskId=b1-dtz-005
  const urlParams = new URLSearchParams(window.location.search);
  const deepLink = {
    name: urlParams.get("name") || "",
    kurs: urlParams.get("kurs") || "",
    taskId: urlParams.get("taskId") || ""
  };

  const state = {
    name: "",
    kurs: "",
    format: null,
    task: null
  };

  // ---------- Elemente ----------
  const el = {
    stepIntro: document.getElementById("step-intro"),
    stepSelect: document.getElementById("step-select"),
    stepWrite: document.getElementById("step-write"),
    stepLoading: document.getElementById("step-loading"),
    stepFeedback: document.getElementById("step-feedback"),
    stepError: document.getElementById("step-error"),

    inputName: document.getElementById("input-name"),
    inputKurs: document.getElementById("input-kurs"),
    btnStart: document.getElementById("btn-start"),

    selectFormat: document.getElementById("select-format"),
    selectTask: document.getElementById("select-task"),
    taskDetails: document.getElementById("task-details"),
    btnToWrite: document.getElementById("btn-to-write"),

    writeTaskSummary: document.getElementById("write-task-summary"),
    inputText: document.getElementById("input-text"),
    wordCountDisplay: document.getElementById("word-count-display"),
    autosaveHint: document.getElementById("autosave-hint"),
    btnBackSelect: document.getElementById("btn-back-select"),
    btnSubmit: document.getElementById("btn-submit"),

    feedbackContent: document.getElementById("feedback-content"),
    btnNewTask: document.getElementById("btn-new-task"),

    errorMessage: document.getElementById("error-message"),
    btnRetry: document.getElementById("btn-retry")
  };

  function showStep(step) {
    [el.stepIntro, el.stepSelect, el.stepWrite, el.stepLoading, el.stepFeedback, el.stepError].forEach((s) =>
      s.classList.add("hidden")
    );
    step.classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function wordCount(text) {
    return (text.trim().match(/\S+/g) || []).length;
  }

  // ---------- Initiales Setup ----------
  function initIntro() {
    // Profil aus localStorage vorbefüllen
    const saved = JSON.parse(localStorage.getItem(LS_KEY_PROFILE) || "{}");
    if (saved.name) el.inputName.value = saved.name;

    el.inputKurs.innerHTML = "";
    (CONFIG.KURSE || []).forEach((k) => {
      const opt = document.createElement("option");
      opt.value = k;
      opt.textContent = k;
      el.inputKurs.appendChild(opt);
    });
    if (saved.kurs) el.inputKurs.value = saved.kurs;

    // Werte aus einem Deep-Link (z. B. von der B1-Lern-App) haben Vorrang
    // vor gespeicherten Werten, da sie den aktuellsten Stand widerspiegeln.
    if (deepLink.name) el.inputName.value = deepLink.name;
    if (deepLink.kurs && (CONFIG.KURSE || []).includes(deepLink.kurs)) {
      el.inputKurs.value = deepLink.kurs;
    }
  }

  function initFormatOptions() {
    const formats = [...new Set(TASKS.map((t) => t.format))];
    el.selectFormat.innerHTML = "";
    formats.forEach((f) => {
      const opt = document.createElement("option");
      opt.value = f;
      opt.textContent = RUBRICS[f] ? RUBRICS[f].label : f;
      el.selectFormat.appendChild(opt);
    });
    populateTaskOptions();
  }

  function populateTaskOptions() {
    const format = el.selectFormat.value;
    const filtered = TASKS.filter((t) => t.format === format);
    el.selectTask.innerHTML = "";
    filtered.forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t.id;
      opt.textContent = t.title;
      el.selectTask.appendChild(opt);
    });
    renderTaskDetails();
  }

  function renderTaskDetails() {
    const task = TASKS.find((t) => t.id === el.selectTask.value);
    if (!task) {
      el.taskDetails.innerHTML = "";
      return;
    }
    el.taskDetails.innerHTML = `
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.situation)}</p>
      <ul>${task.punkte.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      <p><em>Empfohlener Umfang: ca. ${task.minWords}–${task.maxWords} Wörter. ${escapeHtml(task.hinweis || "")}</em></p>
    `;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  // ---------- Draft Autosave ----------
  function draftKey(taskId) {
    return LS_KEY_PREFIX + taskId;
  }

  function saveDraft() {
    if (!state.task) return;
    localStorage.setItem(draftKey(state.task.id), el.inputText.value);
    el.autosaveHint.textContent = "Automatisch gespeichert ✓";
    setTimeout(() => (el.autosaveHint.textContent = ""), 1500);
  }

  function loadDraft(taskId) {
    return localStorage.getItem(draftKey(taskId)) || "";
  }

  // ---------- Direkt zu einer Aufgabe springen (Auswahl -> Schreiben) ----------
  // Ausgelagert, damit sowohl der "Aufgabe bearbeiten"-Button als auch ein
  // Deep-Link (?taskId=...) denselben Weg nutzen können.
  function goToWrite(task) {
    if (!task) return;
    state.format = task.format;
    state.task = task;

    el.writeTaskSummary.innerHTML = `
      <h3>${escapeHtml(task.title)}</h3>
      <p>${escapeHtml(task.situation)}</p>
      <ul>${task.punkte.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul>
      <p><em>Empfohlener Umfang: ca. ${task.minWords}–${task.maxWords} Wörter. ${escapeHtml(task.hinweis || "")}</em></p>
    `;
    el.inputText.value = loadDraft(task.id);
    updateWordCount();
    updateFooterText();
    showStep(el.stepWrite);
  }

  // ---------- Event Listener ----------
  // Ausgelagert, damit sowohl der "Los geht's"-Button als auch ein
  // Deep-Link mit bekanntem Namen (?name=...) automatisch denselben
  // Ablauf anstoßen können, ohne dass extra geklickt werden muss.
  function startFlow() {
    state.name = el.inputName.value.trim();
    state.kurs = el.inputKurs.value;
    if (!state.name) {
      alert("Bitte gib deinen Namen ein.");
      return;
    }
    localStorage.setItem(LS_KEY_PROFILE, JSON.stringify({ name: state.name, kurs: state.kurs }));
    updateFooterText();
    initFormatOptions();

    // Deep-Link mit bekannter Aufgabe: Auswahlschritt überspringen und
    // direkt mit dem Schreiben beginnen.
    const linkedTask = deepLink.taskId ? TASKS.find((t) => t.id === deepLink.taskId) : null;
    if (linkedTask) {
      el.selectFormat.value = linkedTask.format;
      populateTaskOptions();
      el.selectTask.value = linkedTask.id;
      renderTaskDetails();
      goToWrite(linkedTask);
    } else {
      if (deepLink.taskId) {
        console.warn(`Deep-Link: Aufgabe "${deepLink.taskId}" wurde nicht gefunden.`);
      }
      showStep(el.stepSelect);
    }
  }

  el.btnStart.addEventListener("click", startFlow);

  el.selectFormat.addEventListener("change", populateTaskOptions);
  el.selectTask.addEventListener("change", renderTaskDetails);

  el.btnToWrite.addEventListener("click", () => {
    const task = TASKS.find((t) => t.id === el.selectTask.value);
    goToWrite(task);
  });

  el.btnBackSelect.addEventListener("click", () => {
    state.task = null;
    updateFooterText();
    showStep(el.stepSelect);
  });

  function updateWordCount() {
    const n = wordCount(el.inputText.value);
    el.wordCountDisplay.textContent = `${n} Wörter`;
  }

  let autosaveTimer = null;
  el.inputText.addEventListener("input", () => {
    updateWordCount();
    clearTimeout(autosaveTimer);
    autosaveTimer = setTimeout(saveDraft, 800);
  });

  el.btnSubmit.addEventListener("click", async () => {
    const text = el.inputText.value.trim();
    if (wordCount(text) < 20) {
      alert("Dein Text scheint noch sehr kurz zu sein. Bitte schreib etwas mehr, bevor du abgibst.");
      return;
    }
    showStep(el.stepLoading);
    try {
      const feedback = await requestGrading(text, state.task, RUBRICS[state.format]);
      renderFeedback(feedback);
      showStep(el.stepFeedback);
      // Entwurf nach erfolgreicher Abgabe aufräumen
      localStorage.removeItem(draftKey(state.task.id));
      submitToGoogleForm(text, feedback).catch((e) => console.warn("Google-Formular-Übermittlung fehlgeschlagen:", e));
    } catch (err) {
      console.error(err);
      el.errorMessage.textContent =
        "Die Bewertung konnte nicht erstellt werden. Bitte prüfe deine Internetverbindung und versuche es erneut. (" +
        (err && err.message ? err.message : "Unbekannter Fehler") +
        ")";
      showStep(el.stepError);
    }
  });

  el.btnRetry.addEventListener("click", () => showStep(el.stepWrite));

  el.btnNewTask.addEventListener("click", () => {
    state.task = null;
    updateFooterText();
    showStep(el.stepSelect);
  });

  // ---------- KI-Bewertung anfordern ----------
  async function requestGrading(text, task, rubric) {
    const response = await fetch(CONFIG.WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-App-Secret": CONFIG.APP_SECRET
      },
      body: JSON.stringify({ text, aufgabe: task, rubric })
    });

    if (!response.ok) {
      const errBody = await response.text().catch(() => "");
      throw new Error(`Server antwortete mit Status ${response.status}. ${errBody}`);
    }
    const data = await response.json();
    if (!data.feedback) {
      throw new Error("Antwort enthielt kein Feedback.");
    }
    return data.feedback;
  }

  // ---------- Feedback rendern ----------
  function renderFeedback(feedback) {
    const rubric = RUBRICS[state.format];
    let html = "";

    html += `<div class="feedback-block gesamt"><h3>Gesamteinschätzung</h3><p>${escapeHtml(
      feedback.gesamteinschätzung || ""
    )}</p></div>`;

    if (Array.isArray(feedback.stärken) && feedback.stärken.length) {
      html += `<div class="feedback-block"><h3>💪 Das ist dir schon gut gelungen</h3><ul>${feedback.stärken
        .map((s) => `<li>${escapeHtml(s)}</li>`)
        .join("")}</ul></div>`;
    }

    if (Array.isArray(feedback.verbesserungstipps) && feedback.verbesserungstipps.length) {
      html += `<div class="feedback-block tipps"><h3>🎯 Konkrete Tipps zur Verbesserung</h3><ul>${feedback.verbesserungstipps
        .map((s) => `<li>${escapeHtml(s)}</li>`)
        .join("")}</ul></div>`;
    }

    if (feedback.kriterien && rubric) {
      html += `<div class="feedback-block"><h3>Bewertung nach Kriterien (${escapeHtml(rubric.label)})</h3>`;
      rubric.kriterien.forEach((k) => {
        const kf = feedback.kriterien[k.key];
        if (!kf) return;
        html += `<div class="kriterium">
          <span class="kriterium-label">${escapeHtml(k.label)}</span>
          <span class="kriterium-einschaetzung">${escapeHtml(kf.einschätzung || "")}</span>
          <p>${escapeHtml(kf.kommentar || "")}</p>
        </div>`;
      });
      html += `</div>`;
    }

    if (feedback.wortanzahl_hinweis) {
      html += `<div class="feedback-block"><p><em>${escapeHtml(feedback.wortanzahl_hinweis)}</em></p></div>`;
    }

    el.feedbackContent.innerHTML = html;
  }

  // ---------- Bewertungsdetails als lesbaren Klartext aufbereiten ----------
  // (statt rohem JSON.stringify, damit im Google-Sheet keine geschweiften/
  // eckigen Klammern, Anführungszeichen und Kommas als Formatierungs-"Müll"
  // erscheinen - stattdessen ein normal lesbarer Text mit Zeilenumbrüchen)
  function formatBewertungDetails(feedback, rubric) {
    const lines = [];
    if (Array.isArray(feedback.stärken) && feedback.stärken.length) {
      lines.push("Stärken:");
      feedback.stärken.forEach((s) => lines.push(`- ${s}`));
      lines.push("");
    }
    if (Array.isArray(feedback.verbesserungstipps) && feedback.verbesserungstipps.length) {
      lines.push("Verbesserungstipps:");
      feedback.verbesserungstipps.forEach((s) => lines.push(`- ${s}`));
      lines.push("");
    }
    if (feedback.kriterien && rubric) {
      lines.push("Bewertung nach Kriterien:");
      rubric.kriterien.forEach((k) => {
        const kf = feedback.kriterien[k.key];
        if (!kf) return;
        lines.push(`${k.label}: ${kf.einschätzung || ""}`);
        if (kf.kommentar) lines.push(`  ${kf.kommentar}`);
      });
      lines.push("");
    }
    if (feedback.wortanzahl_hinweis) {
      lines.push(`Wortanzahl-Hinweis: ${feedback.wortanzahl_hinweis}`);
    }
    return lines.join("\n").trim();
  }

  // ---------- Übermittlung an Google Formular ----------
  async function submitToGoogleForm(text, feedback) {
    if (!CONFIG.GOOGLE_FORM_ACTION_URL || CONFIG.GOOGLE_FORM_ACTION_URL.includes("DEINE-FORM-ID")) {
      console.warn("Google-Formular ist noch nicht konfiguriert (config.js).");
      return;
    }
    const ids = CONFIG.GOOGLE_FORM_ENTRY_IDS;
    const rubric = RUBRICS[state.format];
    const bewertungDetails = formatBewertungDetails(feedback, rubric);

    const formData = new URLSearchParams();
    formData.append(ids.name, state.name);
    formData.append(ids.kurs, state.kurs);
    formData.append(ids.aufgabe, `[${state.task.formatLabel}] ${state.task.title}`);
    formData.append(ids.text, text);
    formData.append(ids.gesamteinschaetzung, feedback.gesamteinschätzung || "");
    formData.append(ids.bewertungDetails, bewertungDetails);

    // Kurse mit eigenem, separatem Formular (siehe config.js) bekommen ihre
    // Einsendungen dorthin; alle anderen Kurse nutzen weiterhin das
    // geteilte Formular als Fallback.
    const actionUrl =
      (CONFIG.GOOGLE_FORM_ACTION_URL_BY_KURS && CONFIG.GOOGLE_FORM_ACTION_URL_BY_KURS[state.kurs]) ||
      CONFIG.GOOGLE_FORM_ACTION_URL;

    // no-cors: wir bekommen keine lesbare Antwort, aber die Übermittlung
    // an Google Forms funktioniert damit zuverlässig cross-origin.
    await fetch(actionUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString()
    });
  }

  // ---------- Start ----------
  initIntro();
  updateFooterText();

  // Kommt man mit einem Namen per Deep-Link an (z. B. aus der B1-Lern-App,
  // wo der Name schon eingegeben wurde), muss nicht extra auf "Los geht's"
  // geklickt werden - es geht direkt weiter (bei bekannter Aufgabe sogar
  // direkt zum Schreiben, sonst zur Aufgabenauswahl).
  if (deepLink.name) {
    startFlow();
  }
})();
