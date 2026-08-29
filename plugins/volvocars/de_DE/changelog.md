---
layout: default
title : Volvo-Fahrzeuge
plugin : volvocars
lang: de_DE
---

# Versionshinweise

### **2026/06/12**
+ Behebung einer PHP-8-Warnung. Danke, @bernard-dandrea

### **2026/03/26**
+ Umstellung der Beta-Version vom 24.03.2026 auf die stabile Version

### 2026/03/24
+ Anzeige von „CollectDate“ und „valueDate“ beim Bewegen des Mauszeigers über die „Info“-Schaltflächen des Widgets für das Panel

### **2026/03/23**
+ Änderung des API-Verbindungsablaufs aufgrund einer Änderung bei Volvo

### **2026/03/19**
+ Umstellung der Beta-Version vom 11.03.2026 auf die stabile Version

### 11.03.2026 Beta
+ Anzeige von „CollectDate“ und „valueDate“ beim Bewegen des Mauszeigers über die „Info“-Schaltflächen des Widgets für das Dashboard

### **2026/03/10**
+  Umstellung der „energy“-API von Version 1 auf Version 2

### 2025/03/24
+ Korrektur der Konfiguration und Erstellung des Befehls „timeToRun“

### 2025/03/23
+ Versuch, einen Fehler beim Starten des Verbrennungsmotors zu beheben.

### 2025/03/22
+ Hinzufügen von drei Befehlen zum Starten/Stoppen des Verbrennungsmotors.
  + *engineStart* zum Starten.
  + *engineStop* zum Anhalten.
  + *timeToRun* zur Festlegung der Laufzeit (von 1 bis 15 Minuten).

+ Diese Befehle werden nur erstellt, wenn der Endpunkt *commands* **ENGINE_START** und **ENGINE_STOP** zurückgibt.
+ **Nach der Aktualisierung des Plugins muss eine Synchronisierung gestartet werden, um diese Befehle zu erstellen**

**Mein Volvo ist zu 100 % elektrisch. Daher hatte ich keine Gelegenheit, diese Bedienelemente zu testen. Ich freue mich auf euer Feedback.**

### **2024/11/28**
+ Umstellung der Beta-Version auf die stabile Version vom 26.11.2024

### 2024/11/26
+ Anpassung für Fahrzeuge ohne Schiebedach:
  + Die Befehle `roofState`, `roofOpen` und `roofClosed` eines Fahrzeugs werden beim Update des Plugins entfernt, wenn
Der Wert des Befehls `roofState` ist weder **CLOSED**, **OPEN** noch **AJAR**.

### **2024/11/16** 
+ Umstellung der Beta-Version auf die stabile Version am 13.11.2024

### 13.11.2024 Beta
+ Fehlerbehebungen
+ Erstellung der Befehle **allDoorsClosed** und **allWinsClosed**.
   + Diese beiden Befehle werden beim Aktualisieren des Plugins automatisch zu den bestehenden Fahrzeugen hinzugefügt.
+ Widget für Dashboards

### **2024/11/06**
+ Hinzufügen einer Konfigurationsoption im Plugin für den persönlichen Zugangsschlüssel zu den Volvocars-APIs.
**ACHTUNG** Auf der Website developers.volvocars muss ein Schlüssel generiert werden. Da das Verfahren in der Dokumentation noch nicht beschrieben ist
Was das Plugin betrifft, schau dir doch bitte diesen [Beitrag in der Community](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn) an.
um Ihren eigenen Schlüssel zu erstellen.

### **2024/11/05** 
* Behebung eines Fehlers, der die Speicherung des Tokens des ersten Kontos verhinderte

### **2024/11/04** 
+ Umstellung der Beta-Version vom 04.11.2024 auf die stabile Version

### 04.11.2024 Beta
+ Implementierung der Zwei-Faktor-Authentifizierung für Volvocars-Konten
**ACHTUNG:**
Um die Zwei-Faktor-Authentifizierung zu aktivieren, müssen die Konten bearbeitet und anschließend gespeichert werden.

### **2024/10/15**
+ Behebung eines Fehlers im Dashboard, der Fahrzeuge mit Verbrennungsmotor betraf.

### **2024/10/10**
+ Umstellung der Beta-Version auf die stabile Version vom 09.10.2024

### 09.10.2024 Beta (bis)
+ Hinzufügen einer Option **auf dem Bedienfeld sichtbar** in der Fahrzeugkonfiguration

### 09.10.2024 Beta
+ Befehle, die direkt mit einem Endpunkt verknüpft sind, können nicht gelöscht werden. Sie würden neu erstellt werden.
automatisch beim Empfang einer über einen Endpunkt übermittelten Information.
+ Behebung eines Fehlers bei der Sortierung von Bestellungen

### 08.10.2024 Beta
+ Erste offizielle Beta-Version
