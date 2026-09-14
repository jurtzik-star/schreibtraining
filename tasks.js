/* ============================================================
   tasks.js
   Aufgaben-Pool und Bewertungsraster (Rubrics) für die App.

   NEUE AUFGABE HINZUFÜGEN:
   Einfach ein weiteres Objekt in TASKS einfügen (id muss eindeutig
   sein, format muss "DTZ_B1", "TELC_B2_BERUF" oder "TELC_DTB_B2" sein
   – oder ein neues Format zuerst unten bei RUBRICS ergänzen).
   ============================================================ */

const RUBRICS = {
  DTZ_B1: {
    label: "Deutsch-Test für Zuwanderer (DTZ) B1 – Schreiben",
    niveauziel: "B1",
    kriterien: [
      {
        key: "aufgabenbewältigung",
        label: "Aufgabenbewältigung",
        beschreibung:
          "Wurden alle vorgegebenen Punkte inhaltlich passend und ausreichend ausführlich behandelt?"
      },
      {
        key: "kommunikative_gestaltung",
        label: "Kommunikative Gestaltung",
        beschreibung:
          "Ist der Text verständlich aufgebaut, mit passender Anrede/Grußformel, logischer Reihenfolge und der für Brief/E-Mail üblichen Form?"
      },
      {
        key: "formale_richtigkeit",
        label: "Formale Richtigkeit",
        beschreibung:
          "Wortschatz, Grammatik, Rechtschreibung und Satzbau auf B1-Niveau; einfache und etwas komplexere Sätze korrekt verbunden."
      }
    ]
  },
  TELC_B2_BERUF: {
    label: "telc Zertifikat Beruf B2 – Schreiben",
    niveauziel: "B2",
    kriterien: [
      {
        key: "aufgabenerfüllung",
        label: "Inhaltliche Angemessenheit / Aufgabenerfüllung",
        beschreibung:
          "Wurden alle Leitpunkte behandelt, inhaltlich stimmig und mit angemessener Ausführlichkeit (ca. 200 Wörter)?"
      },
      {
        key: "kohärenz_register",
        label: "Kohärenz und Register",
        beschreibung:
          "Logischer, gut verknüpfter Textaufbau (Konnektoren), passendes Register für einen formellen beruflichen Text, angemessene Anrede/Gruß."
      },
      {
        key: "wortschatz",
        label: "Wortschatzspektrum und -beherrschung",
        beschreibung:
          "Vielfältiger, präziser, berufsbezogener Wortschatz; korrekte Wortwahl."
      },
      {
        key: "grammatik",
        label: "Strukturenspektrum und -beherrschung (Grammatik)",
        beschreibung:
          "Variantenreiche Satzstrukturen (Nebensätze, Passiv, Konjunktiv II u. Ä.) und ihre korrekte Anwendung."
      }
    ]
  },
  TELC_DTB_B2: {
    label: "Deutsch-Test für den Beruf (DTB) B2 – Schreiben",
    niveauziel: "B2",
    kriterien: [
      {
        key: "aufgabenerfüllung",
        label: "Inhaltliche Angemessenheit / Aufgabenerfüllung",
        beschreibung:
          "Wurden bei der E-Mail alle Punkte der Teamleitung umgesetzt bzw. beim Forumsbeitrag die eigene Meinung klar begründet und mit Beispielen belegt?"
      },
      {
        key: "kohärenz_register",
        label: "Kohärenz und Register",
        beschreibung:
          "Logischer, in sinnvolle Abschnitte gegliederter Text; bei der E-Mail durchgehend angemessene, höfliche Sprache gegenüber dem Kunden (Anrede, formelles Register)."
      },
      {
        key: "wortschatz",
        label: "Wortschatzspektrum und -beherrschung",
        beschreibung:
          "Vielfältiger, präziser, berufsbezogener Wortschatz; korrekte Wortwahl."
      },
      {
        key: "grammatik",
        label: "Strukturenspektrum und -beherrschung (Grammatik)",
        beschreibung:
          "Variantenreiche Satzstrukturen (Nebensätze, Passiv, Konjunktiv II u. Ä.) und ihre korrekte Anwendung."
      }
    ]
  }
};

const TASKS = [
  // ---------------- DTZ B1 ----------------
  {
    id: "b1-dtz-001",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "E-Mail an den Vermieter: Heizungsausfall",
    situation:
      "Seit zwei Tagen funktioniert die Heizung in Ihrer Wohnung nicht mehr. Sie schreiben eine E-Mail an Ihren Vermieter / Ihre Vermieterin.",
    punkte: [
      "Beschreiben Sie das Problem genau.",
      "Erklären Sie, seit wann das Problem besteht.",
      "Bitten Sie um eine schnelle Reparatur.",
      "Schlagen Sie einen Termin vor, an dem jemand vorbeikommen kann."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Denken Sie an eine passende Anrede und Grußformel."
  },
  {
    id: "b1-dtz-002",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "Brief an eine Freundin/einen Freund: Umzug",
    situation:
      "Sie sind vor Kurzem in eine neue Stadt gezogen. Schreiben Sie einen Brief an eine gute Freundin / einen guten Freund.",
    punkte: [
      "Erzählen Sie, warum Sie umgezogen sind.",
      "Beschreiben Sie die neue Wohnung/Stadt.",
      "Berichten Sie, was Ihnen bisher schwerfällt.",
      "Laden Sie die Person zu Besuch ein."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Nutzen Sie eine persönliche, freundliche Anrede."
  },
  {
    id: "b1-dtz-003",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "E-Mail an die Schule Ihres Kindes: Entschuldigung",
    situation:
      "Ihr Kind konnte drei Tage nicht zur Schule gehen, weil es krank war. Schreiben Sie eine E-Mail an die Klassenlehrerin / den Klassenlehrer.",
    punkte: [
      "Erklären Sie den Grund für das Fehlen.",
      "Nennen Sie den Zeitraum genau.",
      "Fragen Sie nach dem verpassten Unterrichtsstoff.",
      "Bedanken Sie sich für das Verständnis."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, auch wenn es um ein persönliches Thema geht."
  },
  {
    id: "b1-dtz-004",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "E-Mail an den Arbeitgeber: Urlaubsantrag",
    situation:
      "Sie möchten im nächsten Monat eine Woche Urlaub nehmen. Schreiben Sie eine E-Mail an Ihre Chefin / Ihren Chef.",
    punkte: [
      "Nennen Sie den gewünschten Zeitraum.",
      "Begründen Sie kurz Ihren Wunsch.",
      "Schlagen Sie vor, wer Sie in dieser Zeit vertreten könnte.",
      "Bitten Sie um eine Rückmeldung."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Achten Sie auf eine höfliche, formelle Sprache."
  },
  {
    id: "b1-dtz-005",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "Drei Dinge, die ich erledigen sollte",
    situation:
      "Sie haben in letzter Zeit einiges liegen lassen: Dinge, die Sie eigentlich tun sollten, müssten oder könnten - die Sie aber (noch) nicht tun wollen oder können. Wählen Sie EINE der beiden Möglichkeiten: Schreiben Sie einen Ich-Text darüber ODER schreiben Sie eine informelle Nachricht an eine gute Freundin / einen guten Freund.",
    punkte: [
      "Nennen Sie drei Dinge, die Sie tun sollten, müssten oder könnten.",
      "Erklären Sie zu jedem Punkt kurz, warum Sie es (noch) nicht getan haben.",
      "Bei der Nachricht an eine Freundin/einen Freund: Bitten Sie höflich um Hilfe oder einen Rat bei mindestens einem der Punkte.",
      "Beim Ich-Text: Beschreiben Sie, wie Sie sich dabei fühlen und was Sie sich vornehmen."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Nutzen Sie Modalverben wie sollen, müssen, können, wollen, um Pflicht, Möglichkeit und Wunsch zu unterscheiden."
  },
  {
    id: "b1-dtz-006",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "Rat einholen: Auslandssemester",
    situation:
      "Sie überlegen, ein Austauschsemester im Ausland zu machen, sind sich aber noch unsicher. Schreiben Sie eine informelle Nachricht an eine gute Freundin / einen guten Freund, die/der bereits im Ausland studiert hat.",
    punkte: [
      "Erklären Sie, warum Sie über ein Auslandssemester nachdenken.",
      "Fragen Sie, was die Person an Ihrer Stelle tun würde.",
      "Bitten Sie höflich um konkrete Tipps zur Vorbereitung (z. B. Bewerbung, Sprache, Finanzierung).",
      "Fragen Sie, ob sich ein Telefonat oder Treffen einrichten ließe, um mehr zu erfahren."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Nutzen Sie höfliche Formulierungen mit Konjunktiv II (könntest du, würdest du, hättest du Zeit) beim Bitten und Fragen."
  },
  {
    id: "b1-dtz-007",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "Eine schwierige Situation in der WG",
    situation:
      "Sie wohnen in einer Wohngemeinschaft (WG). Eine Mitbewohnerin / ein Mitbewohner feiert regelmäßig laute Partys bis spät in die Nacht, wodurch Sie schlecht schlafen können. Schreiben Sie eine freundliche, aber klare Nachricht an diese Person.",
    punkte: [
      "Beschreiben Sie die Situation und wie sie Sie beeinträchtigt.",
      "Erklären Sie höflich, warum Ihnen das Thema wichtig ist, ohne die Person zu verletzen.",
      "Machen Sie einen konkreten, konstruktiven Vorschlag für die Zukunft (z. B. feste Uhrzeit, Vorwarnung).",
      "Betonen Sie, dass Ihnen ein gutes Verhältnis zueinander wichtig ist."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Achten Sie auf einen freundlichen, aber bestimmten Ton – höfliche Formulierungen statt direkter Vorwürfe."
  },
  {
    id: "bskb1p-dtz-001",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    title: "E-Mail an die Beratungsstelle: Anerkennung meines Abschlusses",
    situation:
      "Sie haben im Ausland eine Berufsausbildung abgeschlossen und möchten wissen, ob und wie dieser Abschluss in Deutschland anerkannt werden kann. Schreiben Sie eine E-Mail an die zuständige Beratungsstelle.",
    punkte: [
      "Stellen Sie sich kurz vor und nennen Sie Ihren Beruf bzw. Abschluss.",
      "Erklären Sie, warum Ihnen die Anerkennung wichtig ist.",
      "Fragen Sie, welche Unterlagen Sie einreichen müssen.",
      "Bitten Sie um einen Termin für ein Beratungsgespräch."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, mit passender Anrede (z. B. Sehr geehrte Damen und Herren) und Grußformel."
  },

  // ---------------- DTZ B1 – kapitelweise (Schreibfahrplan B1, Kap. 1–6) ----------------
  // Freischaltung erfolgt Kapitel für Kapitel: aktiv auf true setzen, sobald
  // das Kapitel im Unterricht behandelt wurde. Mit ?vorschau=1 lassen sich
  // alle Aufgaben schon vorab ansehen (siehe app.js). Pro Kapitel eine
  // formelle Aufgabe (Sie-Anrede, an eine Institution/ein Unternehmen) und
  // eine informelle (an eine bekannte Person) – analog zur Aufgabe-A/B-
  // Struktur der echten DTZ-Prüfung, bei der TN in der Prüfung nur eine
  // bearbeiten, hier zum Üben aber beide. Je 4 Punkte, wie im echten Test.
  // Handlungsfeld-Tags nach dem BAMF-Rahmencurriculum für Integrationskurse.
  {
    id: "b1-dtz-k1-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 1,
    register: "formell",
    handlungsfeld: "Aus- und Weiterbildung",
    title: "Anfrage an das Auslandsamt",
    situation:
      "Sie überlegen, ein Auslandssemester zu machen (z. B. über Erasmus+), und schreiben eine E-Mail an das Akademische Auslandsamt Ihrer Schule.",
    punkte: [
      "Erklären Sie, warum Sie sich für ein Auslandssemester interessieren.",
      "Fragen Sie nach den Voraussetzungen und der Bewerbungsfrist.",
      "Fragen Sie nach Fördermöglichkeiten (z. B. einem Stipendium).",
      "Bitten Sie um einen Termin für ein Beratungsgespräch."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, mit passender Anrede (z. B. Sehr geehrte Damen und Herren) und Grußformel."
  },
  {
    id: "b1-dtz-k1-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 1,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte · übergreifend",
    title: "Eine neue Bekanntschaft",
    situation:
      "Sie haben auf einer Party jemanden kennengelernt und möchten sich noch einmal verabreden. Schreiben Sie eine Nachricht an diese Person.",
    punkte: [
      "Bedanken Sie sich für den netten Abend.",
      "Schlagen Sie Termin und Ort für ein Treffen vor.",
      "Fragen Sie nach einem gemeinsamen Interesse.",
      "Schlagen Sie eine konkrete gemeinsame Aktivität vor."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Informeller, freundlicher Ton, wie bei einer Nachricht an eine neue Bekanntschaft."
  },
  {
    id: "b1-dtz-k2-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "formell",
    handlungsfeld: "Einkaufen",
    title: "Anfrage an die Theaterkasse",
    situation:
      "Sie möchten mit einer kleinen Gruppe (z. B. Kolleg:innen) ins Theater gehen und schreiben eine E-Mail an die Theaterkasse.",
    punkte: [
      "Nennen Sie das Stück und den gewünschten Termin.",
      "Fragen Sie nach verfügbaren Plätzen für eine Gruppe.",
      "Fragen Sie, ob es einen Gruppenrabatt gibt.",
      "Bitten Sie um eine schnelle Rückmeldung."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, klare und knappe Fragen."
  },
  {
    id: "b1-dtz-k2-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "informell",
    handlungsfeld: "Umgang mit Dissens & Konflikten · übergreifend",
    title: "Eine Absage klären",
    situation:
      "Sie müssen eine Verabredung zum zweiten Mal verschieben, und Ihre Freundin/Ihr Freund ist darüber etwas enttäuscht. Schreiben Sie eine Nachricht an diese Person.",
    punkte: [
      "Entschuldigen Sie sich und erklären Sie den Grund.",
      "Gehen Sie auf die Enttäuschung ein (z. B. Verständnis zeigen).",
      "Schlagen Sie einen neuen, verbindlichen Termin vor.",
      "Machen Sie einen kleinen Vorschlag, um es wiedergutzumachen."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Nutzen Sie höfliche Formulierungen, um sich zu entschuldigen und die Enttäuschung anzusprechen."
  },
  {
    id: "b1-dtz-k3-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "formell",
    handlungsfeld: "Gefühle, Haltungen & Meinungen · übergreifend",
    title: "Anfrage an einen Verein",
    situation:
      "Sie interessieren sich für ein Ehrenamt in einem Verein oder einer Bürgerinitiative in Ihrer Stadt. Schreiben Sie eine E-Mail an den Verein.",
    punkte: [
      "Erklären Sie, warum Ihnen das Thema wichtig ist.",
      "Fragen Sie, wie man sich engagieren kann.",
      "Nennen Sie einen Zeitpunkt, an dem Sie Zeit hätten.",
      "Fragen Sie, ob vorher ein persönliches Kennenlernen möglich ist."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller, aber freundlicher Ton, da Sie sich an einen Verein wenden."
  },
  {
    id: "b1-dtz-k3-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "informell",
    handlungsfeld: "Wohnen",
    title: "Bitte um Unterstützung",
    situation:
      "In Ihrer Nachbarschaft wird eine kleine Aktion organisiert (z. B. ein Hoffest oder eine Sammlung), und Sie bitten eine Nachbarin/einen Nachbarn um Hilfe.",
    punkte: [
      "Beschreiben Sie die Aktion kurz.",
      "Bitten Sie konkret um Unterstützung (Zeit, Sachen oder Geld).",
      "Nennen Sie, bis wann Sie eine Antwort brauchen.",
      "Bedanken Sie sich schon einmal im Voraus."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Beschreiben Sie die Aktion konkret und formulieren Sie Ihre Bitte klar."
  },
  {
    id: "b1-dtz-k4-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 4,
    register: "formell",
    handlungsfeld: "Mobilität",
    title: "Anfrage bei einer Unterkunft",
    situation:
      "Sie möchten mit Freund:innen einen Kurzurlaub in der Natur machen und schreiben eine E-Mail an eine Unterkunft (z. B. Ferienhaus oder Pension).",
    punkte: [
      "Nennen Sie den gewünschten Zeitraum und die Personenzahl.",
      "Fragen Sie nach Verfügbarkeit und Preis.",
      "Fragen Sie, ob Haustiere oder Fahrräder erlaubt sind.",
      "Bitten Sie um eine schnelle Rückmeldung."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, mit konkreten Angaben zu Zeitraum und Personenzahl."
  },
  {
    id: "b1-dtz-k4-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 4,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte · übergreifend",
    title: "Rückmeldung zur Unterkunft",
    situation:
      "Sie waren in einer Unterkunft, die Ihnen eine Freundin/ein Freund empfohlen hat. Schreiben Sie dieser Person eine Rückmeldung.",
    punkte: [
      "Bedanken Sie sich für den Tipp.",
      "Beschreiben Sie kurz, wie es war.",
      "Sagen Sie, ob Sie die Unterkunft weiterempfehlen würden.",
      "Schlagen Sie vor, gemeinsam noch einmal hinzufahren."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Bedanken Sie sich zuerst, bevor Sie Ihre Rückmeldung geben."
  },
  {
    id: "b1-dtz-k5-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 5,
    register: "formell",
    handlungsfeld: "Ämter und Behörden",
    title: "Anfrage beim Konsulat",
    situation:
      "Sie brauchen für ein Familiendokument (z. B. eine Geburtsurkunde) eine amtliche Bestätigung aus Ihrem Heimatland und schreiben eine E-Mail an das zuständige Konsulat.",
    punkte: [
      "Erklären Sie, welches Dokument Sie benötigen und warum.",
      "Fragen Sie, welche Unterlagen Sie dafür einreichen müssen.",
      "Fragen Sie nach der Bearbeitungsdauer.",
      "Bitten Sie um einen Termin."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, mit passender Anrede und Grußformel."
  },
  {
    id: "b1-dtz-k5-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 5,
    register: "informell",
    handlungsfeld: "Umgang mit der Migrationssituation · übergreifend",
    title: "Neuigkeiten für die Familie",
    situation:
      "Sie haben eine wichtige Neuigkeit (z. B. Umzug oder neue Arbeit) und schreiben einem Familienmitglied.",
    punkte: [
      "Erzählen Sie die Neuigkeit.",
      "Erklären Sie kurz, warum Sie sich so entschieden haben.",
      "Fragen Sie nach der Meinung der Person.",
      "Laden Sie die Person ein, Sie bald zu besuchen."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Persönliche, familiäre Anrede und Grußformel."
  },
  {
    id: "b1-dtz-k6-1",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 6,
    register: "formell",
    handlungsfeld: "Arbeit",
    title: "Anfrage für eine Weihnachtsfeier",
    situation:
      "Sie organisieren die Weihnachtsfeier für Ihre Abteilung und schreiben eine E-Mail an ein Restaurant, um einen Tisch zu reservieren.",
    punkte: [
      "Nennen Sie Datum, Uhrzeit und Personenzahl.",
      "Fragen Sie nach einem passenden Menü (auch für Vegetarier:innen).",
      "Fragen Sie nach den Kosten pro Person.",
      "Bitten Sie um eine schriftliche Bestätigung."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Formeller Ton, mit allen wichtigen Angaben für die Reservierung."
  },
  {
    id: "b1-dtz-k6-2",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
    kurse: ["B1 Oberndorf (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 6,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte · übergreifend",
    title: "Einladung zur Feier",
    situation:
      "Sie feiern mit Kolleg:innen oder Nachbar:innen eine Feier und laden jemanden ein.",
    punkte: [
      "Laden Sie die Person herzlich ein.",
      "Nennen Sie Ort und Uhrzeit.",
      "Fragen Sie, ob sie etwas mitbringen möchte.",
      "Bitten Sie um eine Rückmeldung bis zu einem bestimmten Datum."
    ],
    minWords: 80,
    maxWords: 150,
    hinweis: "Herzliche Einladung mit konkreten Angaben zu Ort und Uhrzeit."
  },

  // ---------------- telc B2 Beruf – kapitelweise (Schreibfahrplan, BSK-B1+ Kap. 1–3) ----------------
  // Format-Annahme (mit Thomas noch nicht anhand einer echten Prüfungsvorlage
  // belegt, siehe Hinweis im Schreibfahrplan-Artefakt): analog zur bereits
  // umgestellten Sprech-Prüfung nutzt BSK-B1+ hier telc Zertifikat Beruf B2
  // statt DTZ B1, da die DTZ-B1-Inhalte sprachlich nicht mehr zum Kursniveau
  // passten. Pro Kapitel eine formelle E-Mail/ein Brief (Sie) und eine
  // informelle, aber arbeitsbezogene Nachricht an eine Kollegin/einen
  // Kollegen (du) – etwas kürzerer Umfang als bei vollem B2 (Brückenkurs).
  {
    id: "bskb1p-telc-k1-1",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: true,
    kapitel: 1,
    register: "formell",
    handlungsfeld: "Berufliche Aus-/Fort-/Weiterbildung",
    title: "Anfrage bei einer Weiterbildungseinrichtung",
    situation:
      "Sie überlegen, sich beruflich weiterzubilden, und schreiben eine E-Mail an eine Weiterbildungseinrichtung (z. B. eine Kammer oder Akademie).",
    punkte: [
      "Beschreiben Sie kurz Ihre berufliche Situation und Ihr Ziel.",
      "Fragen Sie nach passenden Kursangeboten und deren Dauer.",
      "Fragen Sie nach den Kosten und möglichen Fördermöglichkeiten.",
      "Bitten Sie um eine Beratung, gerne auch telefonisch."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Formelles Register, passende Anrede und Grußformel."
  },
  {
    id: "bskb1p-telc-k1-2",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: true,
    kapitel: 1,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte am Arbeitsplatz",
    title: "Rat von einer Kollegin/einem Kollegen",
    situation:
      "Sie überlegen sich weiterzubilden und schreiben einer erfahrenen Kollegin/einem erfahrenen Kollegen eine kurze Nachricht.",
    punkte: [
      "Erzählen Sie, welche Weiterbildung Sie interessiert.",
      "Fragen Sie nach ihrer/seiner Meinung dazu.",
      "Fragen Sie, ob sie/er selbst schon Erfahrung damit hat.",
      "Bitten Sie um einen Tipp, worauf Sie achten sollten."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Kollegialer, aber respektvoller Ton (du, aber am Arbeitsplatz)."
  },
  {
    id: "bskb1p-telc-k2-1",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "formell",
    handlungsfeld: "Arbeitssuche und Bewerbung",
    title: "Nachfrage zum Bewerbungsstatus",
    situation:
      "Sie haben sich vor einigen Wochen beworben und noch keine Rückmeldung erhalten. Schreiben Sie eine E-Mail an die Personalabteilung.",
    punkte: [
      "Erinnern Sie höflich an Ihre Bewerbung (Datum, Stelle).",
      "Fragen Sie nach dem aktuellen Stand des Verfahrens.",
      "Bieten Sie an, fehlende Unterlagen nachzureichen.",
      "Bitten Sie um eine Rückmeldung bis zu einem bestimmten Datum."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Höflich-bestimmter Ton, ohne ungeduldig zu wirken."
  },
  {
    id: "bskb1p-telc-k2-2",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte am Arbeitsplatz",
    title: "Frust nach einer Absage",
    situation:
      "Sie haben wieder eine Absage bekommen und schreiben einer guten Freundin/einem guten Freund darüber.",
    punkte: [
      "Erzählen Sie von der Absage und wie es Ihnen damit geht.",
      "Erklären Sie, was Sie schon versucht haben.",
      "Fragen Sie nach einem Rat oder einer Empfehlung.",
      "Schlagen Sie vor, sich bald zu treffen und darüber zu sprechen."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Persönlicher, informeller Ton."
  },
  {
    id: "bskb1p-telc-k3-1",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "formell",
    handlungsfeld: "Arbeitsantritt",
    title: "Fragen vor dem ersten Arbeitstag",
    situation:
      "Sie haben eine neue Stelle bekommen und schreiben vor dem ersten Arbeitstag eine E-Mail an Ihre neue Führungskraft.",
    punkte: [
      "Bedanken Sie sich für die Zusage.",
      "Fragen Sie nach organisatorischen Details (Uhrzeit, Ansprechperson, Kleidung).",
      "Fragen Sie, ob Sie etwas mitbringen oder vorbereiten sollen.",
      "Drücken Sie Ihre Vorfreude auf die neue Stelle aus."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Formeller, freundlicher Ton."
  },
  {
    id: "bskb1p-telc-k3-2",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    kurse: ["BSK-B1+ Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "informell",
    handlungsfeld: "Gestaltung sozialer Kontakte am Arbeitsplatz",
    title: "Hilfe für eine neue Kollegin/einen neuen Kollegen",
    situation:
      "Eine neue Kollegin/ein neuer Kollege wirkt am ersten Tag etwas unsicher. Schreiben Sie ihr/ihm eine kurze Nachricht.",
    punkte: [
      "Heißen Sie die Person willkommen.",
      "Bieten Sie konkret Ihre Hilfe an.",
      "Erklären Sie kurz eine wichtige Regel oder Gewohnheit im Team.",
      "Schlagen Sie vor, gemeinsam Mittag zu essen."
    ],
    minWords: 120,
    maxWords: 180,
    hinweis: "Warmherziger, kollegialer Ton."
  },

  // ---------------- telc DTB B2 – kapitelweise (Schreibfahrplan, BSK-B2 Kap. 1–8) ----------------
  // Format bestätigt anhand eines echten Modelltests (telc "Deutsch-Test für
  // den Beruf B2"): pro Kapitel eine formelle E-Mail-Antwort auf eine von der
  // Teamleitung delegierte Kundenreklamation, plus – wie beim B1-Aufgabenpaar
  // – BEIDE Forumsthemen (A und B), nicht nur eins wie in der echten Prüfung.
  // Die Forumsbeiträge nutzen ein festes 4-Punkte-Gerüst (Meinung, zwei
  // Argumente, ein Beispiel, ein Gegenargument) statt inhaltlicher
  // Detailpunkte. Ersetzt die vier früheren, generischen telc-B2-Aufgaben.
  {
    id: "bskb2-dtb-k1-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: true,
    kapitel: 1,
    register: "formell",
    handlungsfeld: "Arbeitssuche und Bewerbung",
    title: "Beschwerde nach einer Berufsberatung",
    situation:
      "Eine Teilnehmerin/ein Teilnehmer hat sich über eine Berufsberatung in Ihrem Unternehmen beschwert (unpünktlich, wenig hilfreich). Ihre Teamleitung leitet die E-Mail an Sie weiter und bittet Sie um eine Antwort.",
    punkte: [
      "Entschuldigen Sie sich im Namen des Unternehmens.",
      "Erklären Sie einen möglichen Grund für den schlechten Ablauf.",
      "Bieten Sie einen neuen, kostenlosen Beratungstermin an.",
      "Erklären Sie, was Sie künftig verbessern werden."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k1-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: true,
    kapitel: 1,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Praktika für Schüler:innen",
    situation:
      "Im internen Firmenforum wird diskutiert: „Praktika für Schüler:innen – sinnvolle Investition oder nur zusätzlicher Aufwand?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k1-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: true,
    kapitel: 1,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Nachwuchswerbung an Schulen",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sollten Unternehmen aktiv an Schulen für sich werben?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k2-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "formell",
    handlungsfeld: "Arbeitsalltag: Außenkontakte",
    title: "Beschwerde nach einer Unternehmensbesichtigung",
    situation:
      "Eine Besuchergruppe beschwert sich über eine Unternehmensbesichtigung (Verspätung, schlechte Organisation). Ihre Teamleitung bittet Sie um eine Antwort.",
    punkte: [
      "Entschuldigen Sie sich für den schlechten Ablauf.",
      "Erklären Sie einen möglichen Grund (z. B. eine kurzfristige Terminkollision).",
      "Bieten Sie einen neuen Besichtigungstermin an.",
      "Bieten Sie eine kleine Wiedergutmachung an (z. B. Informationsmaterial, kleines Präsent)."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k2-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Großraumbüro oder Einzelbüro?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Großraumbüro oder Einzelbüro – was ist besser für die Produktivität?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k2-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 2,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Mehr Homeoffice-Tage?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sollten Firmen mehr Homeoffice-Tage anbieten?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k3-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "formell",
    handlungsfeld: "Arbeitssuche und Bewerbung",
    title: "Beschwerde einer Bewerberin/eines Bewerbers",
    situation:
      "Eine Bewerberin/ein Bewerber beschwert sich, seit Wochen keine Rückmeldung erhalten zu haben, obwohl eine feste Frist genannt wurde. Ihre Teamleitung bittet um eine höfliche, erklärende Antwort.",
    punkte: [
      "Entschuldigen Sie sich für die Verzögerung.",
      "Nennen Sie einen Grund (z. B. eine ungewöhnlich hohe Bewerberzahl).",
      "Teilen Sie den aktuellen Stand des Verfahrens mit.",
      "Nennen Sie ein konkretes neues Datum für die Rückmeldung."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k3-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Anonymisierte Bewerbungen?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Anonymisierte Bewerbungen – ja oder nein?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k3-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 3,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Sind Einstellungstests aussagekräftig?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sind Einstellungstests wirklich aussagekräftig?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k4-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 4,
    register: "formell",
    handlungsfeld: "Arbeitsantritt",
    title: "Beschwerde über eine falsche Auskunft",
    situation:
      "Ein Kunde beschwert sich, von einer neuen Mitarbeiterin/einem neuen Mitarbeiter am Empfang falsch informiert worden zu sein. Ihre Teamleitung bittet Sie um eine Antwort.",
    punkte: [
      "Entschuldigen Sie sich für die falsche Auskunft.",
      "Erklären Sie den Grund (z. B. die Einarbeitungsphase der Mitarbeiterin/des Mitarbeiters).",
      "Liefern Sie die richtige Information nach.",
      "Bieten Sie eine kleine Geste des Entgegenkommens an."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k4-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 4,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Fester Mentor für neue Kolleg:innen?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Braucht jede neue Kollegin/jeder neue Kollege einen festen Mentor?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k4-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 4,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Wie lange sollte die Probezeit dauern?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Wie lange sollte eine Probezeit dauern?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k5-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 5,
    register: "formell",
    handlungsfeld: "Arbeitsalltag: innerbetriebliche Kommunikation",
    title: "Beschwerde über widersprüchliche Auskünfte",
    situation:
      "Ein Kunde beschwert sich, von zwei verschiedenen Abteilungen widersprüchliche Auskünfte erhalten zu haben. Ihre Teamleitung bittet um eine klärende Antwort.",
    punkte: [
      "Entschuldigen Sie sich für die Verwirrung.",
      "Erklären Sie den Grund (z. B. eine Lücke in der internen Kommunikation).",
      "Geben Sie die richtige, verbindliche Auskunft.",
      "Kündigen Sie eine Verbesserung an (z. B. eine feste Ansprechperson)."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k5-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 5,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Kernarbeitszeit oder Vertrauensarbeitszeit?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Feste Kernarbeitszeiten oder komplette Vertrauensarbeitszeit – was ist besser?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k5-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 5,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Private Handynutzung am Arbeitsplatz",
    situation:
      "Im internen Firmenforum wird diskutiert: „Private Handynutzung am Arbeitsplatz – wo sind die Grenzen?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k6-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 6,
    register: "formell",
    handlungsfeld: "Regularien am Arbeitsplatz",
    title: "Beschwerde über eine falsche Bestellung",
    situation:
      "Ein Kunde beschwert sich, dass durch einen internen Fehler im Ablauf die falsche Menge/Ausführung geliefert wurde. Ihre Teamleitung bittet Sie um eine Antwort.",
    punkte: [
      "Entschuldigen Sie sich für den Fehler.",
      "Erklären Sie kurz, wo der Fehler im Ablauf entstanden ist.",
      "Bieten Sie eine Lösung an (Austausch oder Gutschrift).",
      "Beschreiben Sie, wie der Ablauf künftig verbessert wird."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k6-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 6,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Mehr Digitalisierung der Arbeitsabläufe?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sollten Arbeitsabläufe stärker digitalisiert und automatisiert werden?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k6-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 6,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Feste Checklisten oder mehr Freiraum?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Feste Checklisten oder mehr Freiraum bei der Aufgabenerledigung – was funktioniert besser?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k7-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 7,
    register: "formell",
    handlungsfeld: "Regularien am Arbeitsplatz",
    title: "Beschwerde über ein defektes Produkt",
    situation:
      "Ein Kunde beschwert sich über ein defektes Produkt. Ihre Teamleitung leitet die Beschwerde weiter und bittet Sie um eine Antwort.",
    punkte: [
      "Entschuldigen Sie sich für den Mangel.",
      "Erklären Sie einen möglichen Grund für den Defekt.",
      "Bieten Sie eine Lösung an (Ersatz, Reparatur oder Rückerstattung).",
      "Nennen Sie eine Maßnahme zur Qualitätsverbesserung."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k7-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 7,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Wie viel Kontrolle braucht gute Qualität?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Wie viel Kontrolle braucht gute Qualität wirklich?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k7-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 7,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Kund:innen in die Qualitätssicherung einbeziehen?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sollten Kund:innen direkt in die Qualitätssicherung einbezogen werden?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k8-1",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 8,
    register: "formell",
    handlungsfeld: "Arbeitsalltag: Außenkontakte",
    title: "Beschwerde über eine verspätete Lieferung",
    situation:
      "Ein Kunde beschwert sich über eine deutlich verspätete Lieferung. Ihre Teamleitung bittet Sie, dem Kunden zu antworten.",
    punkte: [
      "Entschuldigen Sie sich für die Verspätung.",
      "Erklären Sie einen Grund (z. B. einen Lieferengpass).",
      "Nennen Sie einen neuen, verbindlichen Liefertermin.",
      "Bieten Sie eine Wiedergutmachung an (z. B. einen Rabatt)."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, angemessene Anrede/Gruß gegenüber dem Kunden."
  },
  {
    id: "bskb2-dtb-k8-2",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 8,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema A): Eigene Kundenkontakte pro Abteilung?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Sollte jede Abteilung eigene Kundenkontakte pflegen dürfen?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  },
  {
    id: "bskb2-dtb-k8-3",
    format: "TELC_DTB_B2",
    formatLabel: "Deutsch-Test für den Beruf B2 – Schreiben",
    kurse: ["BSK-B2 Rottweil (KL T. Jurtzik)"],
    aktiv: false,
    kapitel: 8,
    register: "meinung",
    handlungsfeld: "Realisierung von Gefühlen/Haltungen/Meinungen",
    title: "Forumsbeitrag (Thema B): Feste Bearbeitungsfristen für Aufträge?",
    situation:
      "Im internen Firmenforum wird diskutiert: „Feste Bearbeitungsfristen für Aufträge – realistisch oder zu starr?“ Schreiben Sie Ihre Meinung.",
    punkte: [
      "Nennen Sie Ihre Meinung zum Thema.",
      "Nennen Sie mindestens zwei Argumente.",
      "Bringen Sie ein Beispiel aus der Praxis.",
      "Gehen Sie kurz auf ein Gegenargument ein."
    ],
    minWords: 150,
    maxWords: 200,
    hinweis: "Gliedern Sie Ihren Text in sinnvolle Abschnitte."
  }
];

// Für Node/Browser-Kompatibilität (falls später als Modul genutzt)
if (typeof module !== "undefined") {
  module.exports = { TASKS, RUBRICS };
}
