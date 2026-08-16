# Schreibtraining – Übungs-App für Textproduktion

Eine kleine Web-App für die Prüfungsvorbereitung: Teilnehmende bearbeiten
Schreibaufgaben (aktuell DTZ B1 und telc Zertifikat Beruf B2), bekommen
sofort eine automatische, KI-gestützte Rückmeldung mit Lob und konkreten
Tipps – und du als Lehrkraft siehst sowohl den Originaltext als auch die
Bewertung in einem Google-Formular/-Sheet.

## Wie die App aufgebaut ist

```
index.html      – Struktur der Seite
style.css       – Design
app.js          – Ablauflogik (Auswahl → Schreiben → Bewertung → Anzeige)
tasks.js        – Aufgaben-Pool + Bewertungskriterien (hier erweiterbar!)
config.js       – DEINE Einstellungen (Worker-URL, Formular-IDs, Kurse)
worker/worker.js – Cloudflare Worker, der die KI-Bewertung übernimmt
```

Die Bewertung läuft nicht direkt im Browser, weil dein Anthropic-API-Key
dabei sonst für jede/n Besucher:in der Seite im Quellcode sichtbar wäre.
Stattdessen ruft die App einen kleinen, kostenlosen **Cloudflare Worker**
auf, der den Key sicher verwahrt und die Anfrage an Claude weiterleitet.

Es gibt drei Einrichtungsschritte, danach läuft alles automatisch.

---

## Schritt 0: Anthropic-API-Zugang prüfen/anlegen

Ein Claude.ai-Abo (Pro/Max) reicht **nicht** aus – du brauchst einen
separaten API-Zugang:

1. Gehe zu **https://console.anthropic.com** und logge dich ein (ggf. neues
   Konto anlegen – das ist unabhängig von einem Claude.ai-Abo).
2. Unter **Billing** eine Zahlungsmethode hinterlegen und ein kleines
   Guthaben aufladen (für eine Klasse reichen ein paar Euro für sehr viele
   Bewertungen).
3. **Empfehlung:** Unter Billing gleich ein monatliches Ausgabenlimit
   (Spending Limit) setzen, z. B. 5–10 €, als Sicherheitsnetz.
4. Unter **API Keys** einen neuen Key erzeugen und sicher zwischenspeichern
   (wird gleich im Cloudflare Worker gebraucht, ist danach nicht mehr
   einsehbar).

---

## Schritt 1: Cloudflare Worker einrichten (Bewertungs-Proxy)

1. Kostenloses Konto auf **https://dash.cloudflare.com** anlegen (der
   kostenlose Plan reicht für dieses Projekt locker aus).
2. Im Dashboard: **Workers & Pages → Create → Create Worker**.
3. Einen Namen vergeben, z. B. `schreibtraining-bewertung`, dann **Deploy**.
4. Danach **Edit code** öffnen und den kompletten Inhalt von
   `worker/worker.js` aus diesem Projekt einfügen (vorhandenen
   Beispielcode ersetzen). **Save and deploy**.
5. Zurück in den Worker-Einstellungen: **Settings → Variables and Secrets**
   → folgende Einträge als **Secret** (nicht als normale Variable!)
   hinzufügen:
   - `ANTHROPIC_API_KEY` = dein Key aus Schritt 0
   - `APP_SECRET` = ein selbst ausgedachtes, langes Zufallspasswort
     (z. B. per Passwortgenerator erzeugen)
   - `ALLOWED_ORIGIN` = die spätere GitHub-Pages-Adresse, z. B.
     `https://DEINBENUTZERNAME.github.io`
   - optional `MODEL`, falls du ein anderes Claude-Modell als den
     Standard nutzen willst (siehe Kommentar oben in `worker.js`)
6. Die Worker-URL findest du oben auf der Worker-Übersichtsseite, z. B.
   `https://schreibtraining-bewertung.deinname.workers.dev`.

---

## Schritt 2: Google Formular erstellen (für deine Einsicht)

1. Neues Formular auf **https://forms.google.com** anlegen, z. B.
   „Schreibtraining – Einsendungen".
2. Folgende Fragen anlegen (Typ jeweils **Kurzantwort** bzw. bei
   Text/Bewertung **Langantwort/Absatz**), in dieser Reihenfolge:
   1. Name (Kurzantwort)
   2. Kurs/Gruppe (Kurzantwort oder Dropdown, z. B. BSK-B1+, BSK-B2, B1.1 Oberndorf)
   3. Aufgabe (Kurzantwort)
   4. Text der/des Lernenden (Absatz)
   5. Gesamteinschätzung (Absatz)
   6. Bewertungsdetails (Absatz)
   - Bei keiner dieser Fragen "Erforderlich" aktivieren, sonst kann die
     automatische Übermittlung fehlschlagen, falls mal ein Feld leer bleibt.
3. Die `entry.XXXXXXXXX`-IDs herausfinden:
   - Rechts oben auf die drei Punkte → **Vorausgefüllten Link abrufen**.
   - Bei jeder Frage irgendetwas eintragen (z. B. „TEST1", „TEST2" …), dann
     unten auf **Link abrufen** bzw. **Link kopieren**.
   - Die kopierte URL in die Adressleiste eines Browsertabs einfügen (oder
     in einen Texteditor) – darin stehen die IDs, z. B.
     `...&entry.111111111=TEST1&entry.222222222=TEST2...`
   - Jede `entry.XXXXXXXXX`-Nummer der passenden Frage in `config.js`
     eintragen (siehe Schritt 3).
4. Die "Formular senden"-URL besorgen: Vorschau öffnen (Augensymbol),
   die URL aus der Adresszeile kopieren und am Ende `viewform` durch
   `formResponse` ersetzen.
5. Unter **Antworten** in Google Forms kannst du die Ergebnisse direkt
   ansehen oder mit einem verknüpften Google Sheet exportieren (Symbol
   oben rechts im Antworten-Tab).

**Kurzer Datenschutz-Hinweis:** Hier werden Namen und selbst verfasste
Texte deiner Teilnehmenden über Google (Formular) und Anthropic (KI-
Bewertung) verarbeitet. Informiere deine Teilnehmenden kurz darüber (z. B.
mündlich oder in einem Satz auf der Startseite) und hole bei Bedarf ihr
Einverständnis ein. Falls dir das zu heikel ist, kannst du in `config.js`
auch nur Kursname + Kürzel statt vollem Namen abfragen.

---

## Schritt 3: `config.js` ausfüllen

Öffne `config.js` in diesem Projekt und trage ein:

- `WORKER_URL` → die Worker-Adresse aus Schritt 1.6
- `APP_SECRET` → **exakt** dasselbe Passwort wie im Worker-Secret aus
  Schritt 1.5
- `GOOGLE_FORM_ACTION_URL` → die `formResponse`-URL aus Schritt 2.4
- `GOOGLE_FORM_ENTRY_IDS` → die sechs `entry.XXXXXXXXX`-IDs aus Schritt 2.3
- `KURSE` → passe die Liste deiner Kurse/Gruppen bei Bedarf an

---

## Schritt 4: Auf GitHub Pages veröffentlichen

1. Neues (privates oder öffentliches) Repository auf GitHub anlegen, z. B.
   `schreibtraining`.
2. Alle Dateien aus diesem Projekt-Ordner hochladen (der Ordner `worker/`
   wird **nicht** mit veröffentlicht, der Code liegt ja schon in
   Cloudflare – du kannst ihn im Repo lassen, das schadet nicht, oder
   weglassen).
3. **Settings → Pages** → als Quelle den Branch `main` und Ordner `/root`
   auswählen → Speichern.
4. Nach ein bis zwei Minuten ist die App unter
   `https://DEINBENUTZERNAME.github.io/schreibtraining/` erreichbar.
5. Falls du die GitHub-Pages-Adresse erst jetzt kennst: Trage sie noch als
   `ALLOWED_ORIGIN` im Cloudflare Worker ein (Schritt 1.5).

---

## Testen

1. Seite öffnen, Name + Kurs eingeben.
2. Eine Aufgabe auswählen, kurzen Testtext (mind. 20 Wörter) eintragen.
3. Auf „Text abgeben & bewerten lassen" klicken – nach ein paar Sekunden
   sollte die Rückmeldung erscheinen.
4. Im Google Formular unter „Antworten" prüfen, ob der Testeintrag mit
   Text und Bewertung angekommen ist.
5. Seite neu laden, ohne den Text vorher abzugeben, um zu prüfen, dass der
   Entwurf über `localStorage` automatisch gespeichert bleibt.

**Fehlersuche:** Öffne bei Problemen die Entwicklerkonsole im Browser
(F12 → Konsole). Fehlermeldungen von `fetch` oder dem Worker erscheinen
dort. Häufigste Ursachen: `APP_SECRET` stimmt nicht überein, `ALLOWED_ORIGIN`
im Worker passt nicht zur tatsächlichen GitHub-Pages-Adresse, oder die
`entry.XXXXXXXXX`-IDs sind falsch zugeordnet.

---

## Aufgaben erweitern

In `tasks.js` einfach ein neues Objekt in das `TASKS`-Array einfügen
(gleiche Struktur wie die vorhandenen Beispiele). Neue Prüfungsformate
lassen sich durch einen zusätzlichen Eintrag in `RUBRICS` ergänzen.

## Kosten

Die Cloudflare-Worker-Nutzung ist im kostenlosen Plan für dieses
Nutzungsvolumen inbegriffen. Die einzigen laufenden Kosten sind die
Anthropic-API-Aufrufe (typischerweise Bruchteile eines Cents pro
Bewertung) – das eingangs empfohlene Ausgabenlimit schützt vor Überraschungen.
