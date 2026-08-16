/* ============================================================
   config.js
   HIER TRÄGST DU DEINE PERSÖNLICHEN EINSTELLUNGEN EIN.
   Diese Datei ist die einzige, die du nach der Einrichtung des
   Cloudflare Workers und des Google-Formulars anpassen musst.
   Eine ausführliche Anleitung dazu steht in README.md.
   ============================================================ */

const CONFIG = {
  // 1) Die URL deines Cloudflare Workers (Schritt "Worker deployen" in README.md)
  //    Beispiel: "https://schreibtraining-bewertung.deinname.workers.dev"
  WORKER_URL: "https://schreibtraining-bewertung.jurtzik.workers.dev",
  // 2) Ein selbst gewähltes, langes Zufalls-Passwort. Muss EXAKT mit dem
  //    APP_SECRET übereinstimmen, das du als Umgebungsvariable im
  //    Cloudflare Worker hinterlegst. Schützt den Worker vor fremder
  //    Nutzung (kein vollständiger Schutz, aber verhindert zufälligen Missbrauch).
  APP_SECRET: "Z3SKGkgo2qkvCbqQTg06D86RcKlrCB174vyn4BRgdbo",

  // 3) Die "Formular-Antworten senden"-URL deines Google Formulars.
  //    Findest du z. B., indem du dir im Formular-Editor unter den drei
  //    Punkten "Vorschau" öffnest und dort die URL kopierst, dann am Ende
  //    "viewform" durch "formResponse" ersetzt.
  //    Beispiel: "https://docs.google.com/forms/d/e/1FAIpQLSc.../formResponse"
  GOOGLE_FORM_ACTION_URL: "https://docs.google.com/forms/d/e/1FAIpQLScNGNkLz1d6RChcahFZMxhBfU5jLNGMXmL-uHkl6HUgmCVOJw/formResponse",

  // 4) Die entry.XXXXXXXXX-IDs der einzelnen Formularfelder.
  //    Anleitung zum Herausfinden dieser IDs steht in README.md.
  GOOGLE_FORM_ENTRY_IDS: {
    name: "entry.1602534441",
    kurs: "entry.524476248",
    aufgabe: "entry.602638220",
    text: "entry.1524497925",
    gesamteinschaetzung: "entry.2090252352",
    bewertungDetails: "entry.1275389670"
  },

  // 5) Auswahlliste der Kurse/Gruppen, die im Dropdown der App erscheinen.
  //    Einfach anpassen/erweitern.
  KURSE: ["B1 Oberndorf (KL T. Jurtzik)", "BSK-B1+ Rottweil (KL T. Jurtzik)", "BSK-B2 Rottweil (KL H. Aminah)"]
};
