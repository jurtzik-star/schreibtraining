/* ============================================================
   tasks.js
   Aufgaben-Pool und Bewertungsraster (Rubrics) für die App.

   NEUE AUFGABE HINZUFÜGEN:
   Einfach ein weiteres Objekt in TASKS einfügen (id muss eindeutig
   sein, format muss "DTZ_B1" oder "TELC_B2_BERUF" sein – oder ein
   neues Format zuerst unten bei RUBRICS ergänzen).
   ============================================================ */

const RUBRICS = {
  DTZ_B1: {
    label: "Deutsch-Test für Zuwanderer (DTZ) B1 – Schreiben",
    niveauziel: "B1",
    kriterien: [
      {
        key: "aufgabenbewaeltigung",
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
        key: "aufgabenerfuellung",
        label: "Inhaltliche Angemessenheit / Aufgabenerfüllung",
        beschreibung:
          "Wurden alle Leitpunkte behandelt, inhaltlich stimmig und mit angemessener Ausführlichkeit (ca. 200 Wörter)?"
      },
      {
        key: "koharenz_register",
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
  }
};

const TASKS = [
  // ---------------- DTZ B1 ----------------
  {
    id: "b1-dtz-001",
    format: "DTZ_B1",
    formatLabel: "DTZ B1 – Schreiben",
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

  // ---------------- telc B2 Beruf ----------------
  {
    id: "b2-telc-001",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    title: "Formelle E-Mail: Beschwerde über eine Lieferung",
    situation:
      "Ihre Firma hat eine Bestellung erhalten, die nicht der Bestellung entspricht (falsche Menge, beschädigte Ware o. Ä.). Schreiben Sie eine formelle E-Mail an den Lieferanten.",
    punkte: [
      "Beschreiben Sie das Problem konkret.",
      "Erklären Sie die Folgen für Ihr Unternehmen.",
      "Fordern Sie eine konkrete Lösung (Ersatzlieferung, Gutschrift o. Ä.).",
      "Setzen Sie eine angemessene Frist."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Formelles Register, klare Struktur mit Einleitung, Hauptteil, Schluss."
  },
  {
    id: "b2-telc-002",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    title: "Stellungnahme: Homeoffice-Regelung im Unternehmen",
    situation:
      "Ihr Unternehmen überlegt, die Möglichkeit für Homeoffice einzuschränken. Die Geschäftsführung bittet die Mitarbeitenden um eine schriftliche Stellungnahme.",
    punkte: [
      "Nennen Sie Vor- und Nachteile von Homeoffice aus Ihrer Sicht.",
      "Beziehen Sie sich auf konkrete Erfahrungen aus Ihrem Arbeitsalltag.",
      "Machen Sie einen konstruktiven Vorschlag für eine Regelung.",
      "Formulieren Sie eine klare abschließende Position."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Sachlich-formeller Ton, gut strukturierte Argumentation mit Konnektoren."
  },
  {
    id: "b2-telc-003",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    title: "Formelle E-Mail: Terminverschiebung für ein Projektmeeting",
    situation:
      "Ein wichtiges Projektmeeting mit einem Geschäftspartner steht an, aber Sie können den vorgeschlagenen Termin nicht wahrnehmen. Schreiben Sie eine E-Mail an den Geschäftspartner.",
    punkte: [
      "Erklären Sie höflich, warum der Termin nicht passt.",
      "Schlagen Sie mindestens zwei alternative Termine vor.",
      "Betonen Sie die Wichtigkeit des Treffens für die Zusammenarbeit.",
      "Bitten Sie um eine kurze Bestätigung."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Diplomatisches, professionelles Register."
  },
  {
    id: "b2-telc-004",
    format: "TELC_B2_BERUF",
    formatLabel: "telc Zertifikat Beruf B2 – Schreiben",
    title: "Stellungnahme: Weiterbildungsangebote im Betrieb",
    situation:
      "Ihr Betrieb plant, das interne Weiterbildungsbudget zu kürzen. Der Betriebsrat bittet um eine schriftliche Meinungsäußerung der Belegschaft.",
    punkte: [
      "Beschreiben Sie, welche Bedeutung Weiterbildung für Sie persönlich hat.",
      "Nennen Sie mögliche negative Folgen der Kürzung für den Betrieb.",
      "Schlagen Sie eine alternative Lösung vor (z. B. andere Einsparungen).",
      "Fassen Sie Ihre Position abschließend klar zusammen."
    ],
    minWords: 180,
    maxWords: 220,
    hinweis: "Argumentativer Aufbau, gehobenes Register, Bezug zu eigenen beruflichen Erfahrungen."
  }
];

// Für Node/Browser-Kompatibilität (falls später als Modul genutzt)
if (typeof module !== "undefined") {
  module.exports = { TASKS, RUBRICS };
}
