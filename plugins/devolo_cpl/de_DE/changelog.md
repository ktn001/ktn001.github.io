---
layout: default
title : devolo_cpl
plugin : devolo_cpl
lang: de_DE
---

# Versionshinweise

### **11.05.2026 stabil**
+ **05.05.2026 Beta** in die stabile Version übergegangen

### 05.05.2026 Beta
+ Python-Modul „devolo_plc_api“: Update von Version 1.4.1 auf 1.5.1
Diese neue Version enthält eine Behandlung von Timeouts bei der Verbindung zu Geräten.

### **04.05.2026 stabil**
+ **04.05.2026 Beta** in die stabile Version übergegangen

### 04.05.2026 Beta
+ Einige kleinere, hauptsächlich kosmetische Verbesserungen.

### 29.04.2026 Beta
+ Behebung eines JS-Fehlers im Modal „macInfos“

### 27.04.2026 Beta
+ Einige kleinere, hauptsächlich kosmetische Verbesserungen an den Widgets.

### 21.04.2026 Beta
+ Neue Befehle für die Durchsatzinformationen zwischen PLC-Geräten

### **18.04.2026 – stabil**
+ **12.04.2026 Beta** in die stabile Version übergegangen

### 12.04.2026 Beta
+ Beseitigung der Abhängigkeiten von jQuery. Der Jeedom-Kern benötigt jedoch weiterhin jQuery für den Betrieb auf Mobilgeräten.

### **25.07.2025 stabil**
+ Erzwingung der Version 1.4.1 des Moduls „devolo_plc_api“ (das Plugin muss für die Version 1.5.1 angepasst und getestet werden)

### **16.03.2025 – stabile Version**
+ Protokollbereinigung

### **11.03.2025 – stabil**
+ **10.03.2025 Beta** in die stabile Version übergegangen

### 10.03.2025 Beta
+ Aktualisierung der Übersetzungen

### 10.03.2025 Beta
+ Behebung eines Fehlers (Magic 2 LAN DINrail)

### 20.02.2025 Beta
+ Hinzufügen einer Option zum Plugin, um Passwörter und andere sensible Daten in den Protokollen zu verbergen

### **04.01.2025 – stabil**
+ Die Synchronisierungs-Protokolldatei wurde umbenannt, damit sie auf der Konfigurationsseite des Plugins angezeigt wird

### **02.01.2025 – stabil**
+ Behebung eines Fehlers, der zu einer Fehlermeldung in den Protokollen führte

### **24.10.2024 stabil**
+ Löschen der Datei „plugin_info/packages.json“

### **23.10.2024 – stabile Version**
+ **4.9.2024 Beta** in die stabile Version überführt

### 04.09.2024 Beta (bis)
+ Übersetzung des Plugins in folgende Sprachen:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### 04.09.2024 Beta
+ Das Plugin enthält keine modifizierten Versionen des Python-Moduls „devolo_plc_api“ mehr. Das unmodifizierte Modul wird nun installiert.
mit den Abhängigkeiten in einer virtuellen Python-Umgebung.
+ Die Abhängigkeiten müssen nach der Aktualisierung des Plugins neu installiert werden
+ Diese Version ist mit Debian 12 kompatibel

### 05.10.2023 Beta
+ Hinzufügen einer Ausnahmebehandlung im Daemon.
Diese Ergänzung könnte zu zahlreichen Fehlermeldungen führen. Ich freue mich auf Ihr Feedback dazu.

### 19.09.2023 Beta
+ Die Liste der mit dem WLAN verbundenen Geräte wird alle 15 Sekunden aktualisiert (zuvor alle Minuten).

### **29.08.2023 stabil**
+ Die „Offline“-Überwachung war in einigen Fällen nicht deaktiviert

### **25.08.2023 – stabil**
+ Behebung eines Fehlers, der Meldungen in `http.error` verursachte.

### **20.08.2023 – stabile Version**
+ **15.08.2023 Beta** in die stabile Version übergegangen

### 15.08.2023 Beta
+ Neues Plugin-Level: 13
  + Aktivierung der `Offline`-Benachrichtigungen für alle Geräte des Plugins.
  + Hinzufügen eines Befehls vom Typ „info online“ für alle vorhandenen Geräte.
+ Neue Option zum (De-)Aktivieren von Benachrichtigungen, wenn ein Gerät offline ist.

### **14.07.2023 stabil**
+ devolo_plv_api
  + Hinzufügung der Version 1.3.2, die ein potenzielles Speicherleck behebt
  + Entfernung der Version 1.1.0
  + Entfernung der Version 1.2.0
+ Neues Plugin, Stufe: 12
  + Aktivierung von devolo_plc_api 1.3.2

### **14.06.2023 stabil**
+ **13.06.2023 Beta** – nun als stabile Version verfügbar

### 13.06.2023 Beta
+ Behebung eines Fehlers im Widget „dashboard/action/j_h_m“

### 11.06.2023 Beta
+ Mit dem mobilen Widget zur Konfiguration der Aktivierungszeit von WifiGuest können Sie den Wert ändern.

### 09.06.2023 Beta
+ Neues Plugin, Level: 11
  + Neue Widgets für die verbleibende Zeit bis zur Deaktivierung des Gast-WLANs.
    + Die Aktivierungsdauer des Gast-WLANs kann noch nicht über das
Widget für mobile Geräte.

### 26.05.2023 Beta
+ Neues Plugin-Level: 10.
  + Konfiguration für die Verwendung der Version 1.3.1 von devolo_plc_api
  + Erstellung von Befehlen für die Verwaltung des Gast-WLANs
    + Mit dem Befehl `guest_duration` (logicalId *guest_duration*) kann die Zeit in Minuten festgelegt werden, nach der
bei dem das Gäste-WLAN deaktiviert wird. Der Wert 0 bedeutet, dass das WLAN nicht deaktiviert werden soll.
+ Optimierung des Synchronisationsskripts
+ Die Synchronisationsprotokolle befinden sich nicht mehr im Verzeichnis „devolo_cpl_out“, sondern im Verzeichnis „devolo_synchronize“

### **23.05.2023 – stabile Version**
+ **23.04.2023 Beta** in die stabile Version übernommen

### 23.04.2023 Beta
+ Mindestversion von Protobuf: 4.21.12
  + Die Abhängigkeiten müssen nach dem Update neu installiert werden

### 18.04.2023 Beta
+ Neues Plugin, Stufe: 9.
  + Konfiguration für die Verwendung der Version 1.3.0 von devolo_plc_api
+ Begrenzung der Eingabe von MAC-Adressen auf 30 Zeichen
+ Hinzufügung der Version 1.3.0 des Moduls „devolo_plc_api“ (die Versionen 1.1.0 und 1.2.0 sind weiterhin verfügbar)

### 17.04.2023 Beta
+ Neues Plugin, Stufe: 8.
  + Erstellung einer Tabelle `devolo_connection` zur Speicherung des Verlaufs der
WLAN-Verbindungen.
  + Erstellung einer Tabelle `devolo_macinfo` für die Konfiguration der MAC-Adressen.
+ Protokollierung der Verbindungshistorie von WLAN-Kunden
+ Neuer Reiter im Panel für Diagramme zum Verlauf der WLAN-Verbindungen.
  
### 15.04.2023 Beta
+ Korrektur der Anzeige der Gerätebilder.

### 14.04.2023 Beta
+ Das Modul *requests* wurde zu den Abhängigkeiten hinzugefügt.

### 09.03.2023 Beta
+ Neues Plugin, Stufe: 7.
  + Aktivierung des Bedienfelds
 
+ Einrichtung des Plugins
  + Mit einer neuen Option kann festgelegt werden, ob die Namen der Geräte angezeigt werden sollen
in Tabellen und Diagrammen sollen mit oder ohne Objektnamen angezeigt werden:
     + `[<Objektname>][<Gerätename>]`
     + `<Gerätename>`
  + Das Plugin enthält nun ein *Panel*. Dieses *Panel* kann aktiviert oder deaktiviert werden
auf der Konfigurationsseite des Plugins.
  + Benutzeroberfläche
    + Neues *Panel* zur Anzeige von Durchsatzdiagrammen zwischen PLC-Geräten.

### 04.03.2023 Beta
+ Neues Plugin, Level: 6.
  + Sortierung der Befehle für die vorhandenen Geräte.
  + Einrichtung von drei Bestellungen für Firmware-Versionen und -Verfügbarkeiten für
die vorhandenen Anlagen.

+ Funktionalität
  + Anzeige der Firmware-Versionen und Informationen darüber, ob ein Update verfügbar ist.

+ Benutzeroberfläche
  + Änderung der Anzeige der Gerätenamen in der Durchflussübersicht.
  + Verbesserung der Auftragsabwicklung bei einem Modellwechsel eines
Ausrüstung.

+ Code
  + Verbesserung.
  + Fehlerbehebungen.
  + Löschen unnötiger Dateien.
  + Die MAC-Adressen der Geräte werden bereits bei der ersten Synchronisierung erfasst.

### 24.02.2023 Beta
+ Neues Plugin, Stufe: 5.
   + (Neu-)Erstellung der Durchflussmengentabelle.

+ Deinstallation
   + Die Durchflussmengentabelle wird nicht mehr gelöscht.

+ Fehlerbehebung
   + Die Durchflussmengentabelle wurde beim Deaktivieren des Plugins gelöscht.

### 22.02.2023 Beta

+ Aktualisierung oder Installation:
   + Neues Plugin: Stufe 4.
   + Die Speicherdauer der Durchflussdaten ist standardmäßig auf eine Woche eingestellt.
   + Die Tabelle zur Erfassung der Durchflussmengen wird in der Datenbank angelegt.

+ Deinstallation
   + Entfernung der Tabelle mit den PLC-Übertragungsraten.

+ Konfiguration der Geräte
   + neue Einstellung „Netzwerk“.

+ Schnittstelle:
   + Übersichtstabelle der Durchflussmengen.

### 18.02.2023 Beta

+ Abhängigkeiten:
   + Hinzufügen des Python-Moduls *importlib-metadata*
> :bulb: Die Installation der Abhängigkeiten muss nach der Aktualisierung des Plugins erneut gestartet werden.

+ Modul devolo_plc_api:
   + Umstellung auf Version 1.2.0
   + Die Version 1.2.0 ist eine angepasste Version, die mit Python 3.7 kompatibel ist.
   + Über eine Option auf der Konfigurationsseite des Plugins können Sie bei Bedarf zur Version 1.1.0 zurückkehren.
   + Bitte eröffnen Sie einen Thread im Jeedom-Forum, falls Sie auf Version 1.1.0 zurückkehren müssen.

### 14.02.2023 Beta bis
+ Angabe der Versionen der abhängigen Module.

### 14.02.2023 Beta
+ Standort der Geräte.
+ Einige Fehlerbehebungen.

### 12.02.2023 Beta
+ Unterscheidung zwischen *verwaltbaren* und *nicht verwaltbaren* Geräten.
+ Hinzufügung der nicht verwaltbaren Modelle DL550 und DL1200 ohne WLAN.
+ Hinzufügen der MAC-Adresse in den Geräteeinstellungen.
+ Einige Fehlerbehebungen.

### 08.02.2023 Beta
+ Hinzufügen von Protokollierung zur Fehleranalyse bei der Erkennung der DL550.

### 07.02.2023 Beta
+ Behebung eines Fehlers bei der Länderauswahl.

### 07.02.2023 Beta
Erste Version für
+ Die automatische Geräteerkennung bestätigen.
+ Bilder bestätigen.
+ Bestätigen Sie den Befehl, um die LEDs der Geräte ein- oder auszuschalten.
