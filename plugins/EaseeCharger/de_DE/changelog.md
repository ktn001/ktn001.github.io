---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: de_DE
---
# Versionshinweise

**WICHTIG**

Zur Erinnerung: Wenn keine Informationen zum Update vorliegen, bedeutet dies, dass dieses ausschließlich
Aktualisierung von Dokumentationen, Übersetzungen oder Texten.

### 13/11/2026
+ Die Funktionen zur Token-Verwaltung wurden überarbeitet und aktualisiert (keine Änderungen bei
(der Benutzer).
+ Der Daemon wurde neu geschrieben. Er verwendet nicht mehr das Modul *signalrcore*, sondern *pyeasee*. Eine
Es wird eine Verbesserung der Stabilität erwartet.
+ Der Name der Protokolldatei des Daemons lautet nicht mehr *EaseeCharger_daemon.out*, sondern *EaseeCharger_daemon*
+ Die logicalId der Befehle mit den aus der Cloud übermittelten Informationen wurden geändert. Die logicalId lautet
Jetzt die ID der Meldung, die über Signalr aus der Cloud übermittelt wurde.
+ Die aus der Cloud übermittelten Informationen, deren Wert ein Code ist, werden dupliziert:
  +  Eine Steuerung mit dem aus der Cloud abgerufenen numerischen Code
  +  Ein Befehl mit Klartext. Dieser Text wird in die Sprache der Jeedom-Benutzeroberfläche übersetzt.

### 17/01/2025
+ Umstellung der Beta-Version vom 12.01.2025 auf die stabile Version

### 12.01.2025 (Beta)
+ Verbesserung der Kommunikation zwischen Daemon und Jeedom
+ Korrektur der Token-Speicherung im Cache

### 12.01.2025 (Beta)
+ Fehlerbehebung
 
### 31.12.2024 (Beta)
+ Neuprogrammierung eines Großteils des Codes
+ Core-Version 4.4.9 oder höher erforderlich
+ Kompatibel mit Debian 12
+ Verwendet die jQuery-Funktion nicht mehr

### 11/11/2024
+ Behebung eines Fehlers bei der Installation der Abhängigkeiten

### 09/11/2024
+ Der Daemon läuft in einer Python-venv

### 28/07/2024
+ Umstellung von früheren Beta-Versionen auf die stabile Version
+ Aktualisierung der Befehle bei der Aktualisierung des Plugins

### 28.07.24 (Beta)
+ Überarbeitung der Erstellung und Aktualisierung von Bestellungen.
Es wird empfohlen, die Befehle über die Schaltfläche „Befehle aktualisieren“ auf der
Bestellseite für jedes Ladegerät

### 26.07.2024 (Beta)
+ Korrektur von Widgets
+ Neugestaltung der Bestellseite

### 24/07/2024
+ Einrichtung eines Heartbeats bei der Aktivierung des Plugins

### 1/7/2023
+ Änderung der URLs für die Easee-APIs

### 17/10/2022
+ Angabe, ob die Verbindung zur Cloud über WLAN oder Mobilfunk hergestellt wird

### 14/10/2022
* Umstellung auf Stallhaltung
* Transparenz der Widget-Kacheln für die Sichtbarkeit des Hintergrunddiagramms
* Schaltflächen im Geräte-Widget zum Starten und Stoppen

### 30.09.2022 (Beta)
* Der Daemon-Port wird bei der Aktivierung des Plugins nicht mehr auf den Standardwert zurückgesetzt
* Eine Klasse wurde im PHP-Code umbenannt
* Informationen zur Qualität von WLAN- und Mobilfunk-Signalen
* Erstellung eines Widgets für EaseeCharger-Geräte (ohne die Pause-Taste der
(Last)

### 24.08.2022 (Beta)
* Der Daemon-Port wird bei der Aktivierung des Plugins nicht mehr auf den Standardwert zurückgesetzt

### 21.08.2022 (Beta)
* Hinzufügen eines Zählers für Neustarts durch den Watcher.

### 21.08.2022 (Beta)
* Hinzufügen eines Watchers, um die Verbindungen des Daemons nach einer nicht gemeldeten Trennung wiederherzustellen.

### 18.08.2022 (Beta)
* Erstveröffentlichung
