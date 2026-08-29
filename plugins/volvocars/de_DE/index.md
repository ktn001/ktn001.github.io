---
layout : default
pluginId : volvocars
plugin : Volvo
lang: de_DE
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# „volvocars“-Plugin für Jeedom

Das Plugin **volvocars** ermöglicht es Jeedom, mit Ihrem Volvo-Fahrzeug zu interagieren, indem es
Die Volvocars-APIs.

Vielen Dank an @Xav-74. Ich habe mich bei der Entwicklung des Widgets und des Panels stark von seinem Plugin **My BMW** inspirieren lassen.

# Prinzip
{: .num}

Dieses Plugin kommuniziert über die Cloud mit den Volvocars-APIs. Daher ist dieses Plugin
erfordert eine Internetverbindung. Außerdem muss Ihr Fahrzeug in
die Volvo Cars App.

In der API-Dokumentation wird angegeben, dass diese für alle Modelle zwischen
2015 bis 2022. Es scheint jedoch, dass diese Dokumentation nicht auf dem neuesten Stand ist und dass die Modelle nach
2022 sind ebenfalls über diese APIs verfügbar. Das Plugin wurde unter Verwendung eines XC40 entwickelt.
Elektromobilität im Jahr 2023.

# Kompatible Modelle
{: .num}

+ ***Bestätigte Modelle, die mit dem Plugin kompatibel sind:***
    + XC40 Elektro (2023)
    + XC60 Hybrid (2022)
+ ***Modelle, deren teilweise Kompatibilität mit dem Plugin bestätigt wurde:***
+ ***Bestätigte Modelle, die mit dem Plugin nicht kompatibel sind:***

# Die vcc-API-Schlüssel
{: .num}
Neben dem Volvo ID-Konto, das Sie in der VolvoCars-App verwenden, benötigen Sie einen VCC-API-Schlüssel
für den privaten Gebrauch.

Sie müssen auf der Website einen VCC-API-Schlüssel (VCC API Key) generieren
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} weiterlesen
dieses Verfahren:

1. Klicken Sie auf **„Sign up“**:
{% include image.html img="sign_up_volvodev.png" %}
1. Wählen Sie das Konto aus, das mit Ihrem neuen Konto „developper.volvocars“ verknüpft werden soll:
{% include image.html img="select_login_asoc.png" %}
1. Geben Sie Ihren Benutzernamen und Ihr Passwort für die im vorherigen Schritt ausgewählte Website ein
{% include image.html img="sign_in_volvodev.png" %}
1. Klicken Sie auf Ihren Benutzernamen und anschließend auf **Ihre API-Anwendungen**
{% include image.html img="open_api_applications.png" %}
1. Geben Sie einen Namen für die Anwendung ein, die Sie erstellen möchten, und klicken Sie dann auf **Create**. Wenn Sie
Bei mehreren Jeedom-Instanzen empfiehlt es sich, für jede Instanz eine eigene App in
in der das Plugin
installiert:
{% include image.html img="create_application.png" %}
1. Ihre neue App wird mit einem Paar VCC-API-Schlüsseln erstellt. Sie können jederzeit zurückkehren.
auf dieser Seite, um Ihren Schlüssel abzurufen.
{% include image.html img="vcc_keys.png" %}

# Installation und Konfiguration des Plugins
{: .num}

## Installation des Plugins
{: .num}
Das Plugin lässt sich standardmäßig über den Jeedom-Market installieren.

Falls die Installation der Abhängigkeiten nach der Installation des Plugins nicht automatisch gestartet wurde,
Starten Sie ihn manuell. Sobald die Abhängigkeiten installiert sind, stellen Sie sicher, dass der Daemon gestartet ist.

## Einrichtung des Plugins
{: .num}

{% include image.html img="configuration_plugin.png" %}
+ ***VCC-API-Schlüssel***
: Geben Sie den VCC-API-Schlüssel ein, den Sie auf der Website developer.volvocars.com generiert haben.

+ ***Das Widget des Plugins verwenden***
: Wählen Sie diese Option aus, um das Widget des Plugins in den Dashboards zu verwenden.
{% include image.html img="widget_electrique.png" -%}
{% include image.html img="widget_hybrid.png" -%}
{% include image.html img="widget_thermique.png" %}

+ ***Zu erstellende Befehle für die Flügel***
: Die Volvocars-APIs geben den Status der Fenster und Türen als Textinformation zurück.
Dieser Text wird in einem **\*_state**-Befehl des Geräts gespeichert.
Es werden außerdem die binären Befehle **\*_open** und **\*_closed** erstellt, wenn die Option **Offen**
oder **Geschlossen** ist aktiviert.
: Die vorhandenen Befehle **\*_open** oder **\*_closed** werden nicht gelöscht, wenn
Die entsprechende Option ist deaktiviert.

Sobald das Plugin installiert ist, muss ein Konto erstellt werden.

# Die Konten
{: .num}
{% include image.html img="no_account.png" %}

Klicken Sie auf *Hinzufügen*

{% include image.html img="nom_account.png" %}

Geben Sie den Kontonamen ein und klicken Sie dann auf *OK*

{% include image.html img="edit_account.png" %}

Geben Sie den Benutzernamen und das Passwort Ihres VolvoID-Kontos ein und klicken Sie dann auf *OK*

{% include image.html img="edit_otp.png" %}

Geben Sie den Code ein, den Volvo Ihnen per E-Mail zugesandt hat, und klicken Sie dann auf *OK*.

Die Eingabe des Codes ist erforderlich, um ein Token zu erhalten, das vom Plugin verwendet wird, um
Sich bei den Volvocars-APIs authentifizieren. Dieses Token wird vor Ablauf automatisch erneuert.

Das Token kann verloren gehen, wenn
   + Die mit dem Konto verknüpften Fahrzeuge sind für einen bestimmten Zeitraum alle deaktiviert.
   + Das Plugin ist seit längerer Zeit deaktiviert.
   + Jeedom ist seit längerer Zeit nicht mehr erreichbar.
   + Ein Jeedom-Backup wurde wiederhergestellt.

In diesen Fällen müssen Sie die Bearbeitung des Kontos öffnen und speichern. Dadurch wird der Vorgang neu gestartet.
um einen neuen, per E-Mail gesendeten Code einzugeben und anschließend ein neues Token zu erhalten.

Laut der API-Dokumentation kann ein abgelaufenes Token bis zu 7 Tage nach seinem Ablauf automatisch verlängert werden. Ich konnte dies jedoch nicht überprüfen. Da die Token eine Gültigkeitsdauer von 30 Minuten haben und 15 Minuten vor ihrem Ablauf verlängert werden, sollte ein Ausfall von weniger als 15 Minuten keine Auswirkungen haben.

{% include image.html img="no_car.png" %}

# Fahrzeuge
{: .num}

Die Jeedom-Geräte für die mit einem Konto verknüpften Fahrzeuge werden automatisch erstellt (oder
(aktuell) bei der Synchronisierung des Kontos

## Synchronisierung eines Kontos (Anlegen von Fahrzeugen)
{: .num}

+ Klicken Sie auf die Schaltfläche **Synchronisierung**
+ Wählen Sie das zu synchronisierende Konto aus
+ Das neue Fahrzeug wird zur Fahrzeugliste hinzugefügt

  > :bulb: In manchen Fällen kann die Website des Bildanbieters den Zugriff durch ein Skript blockieren.
In diesem Fall wird anstelle des Fahrzeugbildes das Volvo-Logo angezeigt. Das Fahrzeugbild muss
muss manuell über die Konfigurationsseite des Fahrzeugs geladen werden.

{% include image.html img="with_car.png" %}

## Fahrzeugkonfiguration
{: .num}

{% include image.html img="configuration_vehicle.png" %}

+ **Allgemeine Einstellungen**

Diese Einstellungen sind die Standardeinstellungen für Jeedom-Geräte. Sie werden hier nicht näher erläutert.

+ **Fahrzeugeinstellungen**

Diese Einstellungen werden bei der Synchronisierung des Kontos automatisch ausgefüllt. Die Bearbeitung dieser Einstellungen ist standardmäßig deaktiviert, da sie vom Benutzer nicht geändert werden sollten.

Bei Bedarf können Sie die Bearbeitung dieser Einstellungen freischalten, indem Sie auf die Schaltfläche „Bearbeiten“ klicken.

+ **Alarmeinstellungen**

   + *Elektrische Autonomie*
Der Wert des Befehls `al_electricAutonomy` wechselt auf **1**, wenn die elektrische Reichweite geringer ist
an dieser Grenze.

   + *Wärmeautarkie*
Der Wert des Befehls `al_fuelAutonomy` wechselt zu **1**, wenn die Reichweite des Verbrennungsmotors geringer ist
an dieser Grenze.

+ **Standort-Einstellungen**

Die GPS-Koordinaten von zwei Standorten können konfiguriert werden. Für jeden dieser Standorte werden zwei Befehle erstellt:
  + `distanceSite#`: Entfernung zwischen Standort und Fahrzeug
  + `presenceSite#`: Binärwert, der angibt, ob sich das Gerät am Standort befindet

Die Einstellungen:
  + *Name*
Wenn eine Website umbenannt wird, werden auch die beiden zugehörigen Befehle umbenannt, sofern ihre Namen den alten Namen enthalten.
Name der Website
  + *GPS-Koordinaten*
Die GPS-Koordinaten des Standorts
  + *Max. Reichweite (in m)*
Maximale Entfernung (in Metern) zwischen dem Fahrzeug und dem Standort, damit das Fahrzeug als am Standort anwesend angezeigt wird.
  + *GPS-Koordinaten abrufen*
Zwei Schaltflächen, mit denen die GPS-Koordinaten des Standorts automatisch eingegeben werden können:
       + `Jeedom`: Ruft die GPS-Koordinaten von Jeedom ab, die in der Jeedom-Konfiguration eingegeben wurden.
       + `Fahrzeug`: Ruft die aktuelle Position des Fahrzeugs ab
  
+ **Beschreibung**

Freie Informationen

+ **Bild**

Bild des Fahrzeugs, das im Panel verwendet wird. Wenn das Bild des Fahrzeugs nicht abgerufen werden konnte, während
Nach der Synchronisierung des Kontos wird es durch ein Volvo-Logo und eine Schaltfläche „Bild abrufen“ ersetzt.
des Fahrzeugs` (siehe weiter unten für die Vorgehensweise zum manuellen Abrufen des Bildes).

+ **Rohdaten**

Diese Schaltfläche öffnet ein Popup-Fenster mit den Daten, wie sie von den APIs bereitgestellt werden. Diese Informationen können
können bei der Analyse im Falle eines Problems hilfreich sein.

# Manuelles Abrufen des Bildes
{: .num}

+ Wenn das Fahrzeugbild nicht geladen werden konnte, werden das Volvo-Logo und die Schaltfläche „Fahrzeugbild abrufen“ angezeigt:

{% include image.html img="no_image.png" %}

+ Klicken Sie auf die Schaltfläche „Fahrzeugbild abrufen“
   + Das Logo wird durch ein Bild des Fahrzeugs ersetzt
   + Die Schaltfläche „Fahrzeugbild abrufen“ wird nicht mehr angezeigt:
   + Ein Bereich ist markiert, in den das Bild des Fahrzeugs kopiert werden soll

{% include image.html img="image_ready.png" %}

+ Verwenden Sie das Kontextmenü (KEINE TASTATURKURZBEFEHLE!), um das Bild zu kopieren.

{% include image.html img="copy_image.png" %}

+ Verwenden Sie das Kontextmenü (KEINE TASTATURKURZBEFEHLE!), um das Bild einzufügen in
das dafür vorgesehene Feld.

{% include image.html img="paste_image.png" %}

+ Das Bild wird an das Plugin gesendet
+ Der Bereich, in dem eine Kopie des Bildes angezeigt werden sollte, wird nicht mehr angezeigt.

{% include image.html img="image_uploaded.png" %}

# Die Befehle
{: .num}

## Die Maßnahmen
{: .num}

Das Plugin kann folgende Befehle an das Fahrzeug senden

+ **Entsperren**
Entriegelung des Fahrzeugs
+ **Schloss**
Fahrzeugverriegelung
+ **lockReduced**
Sperren im reduzierten Alarmmodus
+ **climStart**
Einschalten der Klimaanlage
+ **climStop**
Abschaltung der Klimaanlage
+ **Hup**
Klaxonne
+ **Flash**
Die Blinker des Fahrzeugs blinken.
+ **honk_flash**
Gleichzeitige Ausführung der Befehle *honk* und *flash*

Welche Befehle im Plugin für ein Fahrzeug tatsächlich aktiviert sind, hängt ab von
Fahrzeugfunktionen, die über die APIs (Endpunkte *Befehle*) übermittelt werden.

## Aktuelles
{: .num}

  > :bulb: Befehle vom Typ *info* werden beim Anlegen des Fahrzeugs nicht erstellt. Sie werden erst
dynamisch nach dem Starten des Fahrzeugs auf der Grundlage der von den APIs empfangenen Daten.

<table class="commandes">
<thead>
<tr>
<th style='min-width:150px'>Name</th>
<th>LogicalId</th>
<th>API-Endpunkt</th>
<th>Untertyp</th>
<th>Werte/Einheit</th>
<th>Beschreibung</th>
</tr>
</thead>
<tbody>

		<!-- -------- -->
<!-- GLOBALES -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">ALLGEMEINES</td>
</tr>
<tr>
<td rowspan="4">Verfügbarkeit</td>
<td rowspan="4">Verfügbarkeit</td>
<td rowspan="4">Barrierefreiheit</td>
<td rowspan="4">Text</td>
<td>„VERFÜGBAR“</td>
<td>Das Fahrzeug ist verbunden</td>
</tr>
<tr>
<td>„NICHT VERFÜGBAR“</td>
<td>Das Fahrzeug ist nicht verbunden</td>
</tr>
<tr>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"QUOTA_OUT"</td>
<td>Das API-Aufrufkontingent wurde erreicht</td>
</tr>
<tr>
<td rowspan="5">Grund für die Nichtverfügbarkeit</td>
<td rowspan="5">unavailableReason</td>
<td rowspan="5">Barrierefreiheit</td>
<td rowspan="5">Text</td>
<td>„NO_INTERNET“</td>
<td>Kein Internet</td>
</tr>
<tr>
<td>"POWER_SAVING_MODE"</td>
<td>Fahrzeug im Standby-Modus</td>
</tr>
<tr>
<td>"CAR_IN_USE"</td>
<td>Anleitung zur Fahrzeugbedienung</td>
</tr>
<tr>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>""</td>
<td>Das Fahrzeug ist verfügbar</td>
</tr>
<tr>
<td>Kilometerzähler</td>
<td>Kilometerzähler</td>
<td>Kilometerzähler</td>
<td>Digital</td>
<td>km</td>
<td>Kilometerstand des Fahrzeugs</td>
</tr>
<tr>
<td rowspan="12">Dienst</td>
<td rowspan="12">Dienst</td>
<td rowspan="12">Diagnose</td>
<td rowspan="12">Text</td>
<td>"NO_WARNING"</td>
<td>Keine Wartungsarbeiten erforderlich</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE"</td>
<td>Frist für einen Service läuft bald ab</td>
</tr>
<tr>
<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
<td>Die Betriebszeit des Motors vor der Inbetriebnahme läuft bald ab</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_ALMOST_TIME_FOR_SERVICE"</td>
<td>Kilometerstand für eine bald fällige Wartung</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
<td>Frist für eine Dienstleistung abgelaufen</td>
</tr>
<tr>
<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
<td>Laufzeit des Motors vor Inbetriebnahme abgelaufen</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
<td>Kilometerstand bei Erreichen einer Wartungsintervall</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE"</td>
<td>Frist für eine Dienstleistung überschritten</td>
</tr>
<tr>
<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
<td>Die Betriebszeit des Motors vor der Inbetriebnahme wurde überschritten</td>
</tr>
<tr>
<td>„DISTANCE_DRIVEN_OVERDUE_FOR_SERVICE.“</td>
<td>Kilometerstand für eine überschrittene Wartung</td>
</tr>
<tr>
<td>"UNKNOWN_WARNING"</td>
<td>Unbekannte Warnmeldung</td>
</tr>
<tr>
<td>„UNSPECIFIED“</td>
<td>unbestimmt</td>
</tr>
<tr>
<td rowspan="5">Grund für den Service</td>
<td rowspan="5">serviceTrigger</td>
<td rowspan="5">Diagnose</td>
<td rowspan="5">Text</td>
<td>CALENDAR_TIME</td>
<td>Zeit seit der letzten Wartung</td>
</tr>
<tr>
<td>„DISTANCE“</td>
<td>Zurückgelegte Strecke seit dem letzten Service</td>
</tr>
<tr>
<td>"ENGIME_HOURS"</td>
<td>Laufzeit des Motors</td>
</tr>
<tr>
<td>„UNSPECIFIED“</td>
<td>Nicht angegeben</td>
</tr>
<tr>
<td>„UNKNOWN“</td>
<td>Unbekannt</td>
</tr>
<tr>
<td>Betriebsstunden des Motors vor Inbetriebnahme</td>
<td>engineHoursToService</td>
<td>Diagnose</td>
<td>Digital</td>
<td>Öffnungszeiten</td>
<td>Betriebszeit des Motors bis zur nächsten Wartung</td>
</tr>
<tr>
<td>Entfernung vor der Wartung</td>
<td>distanceToService</td>
<td>Diagnose</td>
<td>Digital</td>
<td>Kilometer</td>
<td>Entfernung bis zur nächsten Tankstelle</td>
</tr>
<td>Tage bis zur Inbetriebnahme</td>
<td>timeToService</td>
<td>Diagnose</td>
<td>Digital</td>
<td>Tage</td>
<td>Anzahl der Tage, an denen der Dienst genutzt wurde.<br>Die volvocars-API gibt entweder eine Anzahl von Tagen oder eine Anzahl von Monaten zurück.
Das Plugin rechnet die Anzahl der Monate in die Anzahl der Tage um. Daher kann es zu einer Abweichung von 30 Tagen kommen.</td>
<tr>
</tr>
	
		<!-- ------------ -->
<!-- LOKALISIERUNG -->
		<!-- ------------ -->
<tr>
<td class="subtitle" colspan="6">STANDORT</td>
</tr>
<tr>
<td>Stellung</td>
<td>Stellung</td>
<td>Vermietung</td>
<td>GPS-Koordinaten</td>
<td>&lt;Breitengrad&gt;,&lt;Längengrad&gt;</td>
<td>Fahrzeugposition</td>
</tr>
<tr>
<td>Entfernung &lt;Name_der_Website_1&gt;</td>
<td>distanceSite1</td>
<td></td>
<td>Digital</td>
<td>Zähler</td>
<td>Entfernung zwischen dem Fahrzeug und Standort 1</td>
</tr>
<tr>
<td rowspan="2">Webpräsenz &lt;Name_der_Website_1&gt;</td>
<td rowspan="2">presenceSite1</td>
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Das Fahrzeug befindet sich nicht auf dem Gelände 1</td>
</tr>
<tr>
<td>1</td>
<td>Das Fahrzeug befindet sich auf Standort 1</td>
</tr>
<tr>
<td>Entfernung &lt;Name_der_Website_2&gt;</td>
<td>distanceSite2</td>
<td></td>
<td>Digital</td>
<td>Zähler</td>
<td>Entfernung zwischen dem Fahrzeug und Standort 1</td>
</tr>
<tr>
<td rowspan="2">Webseite &lt;Name_der_Website_2&gt;</td>
<td rowspan="2">presenceSite2</td>
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Das Fahrzeug befindet sich nicht auf dem Gelände 2</td>
</tr>
<tr>
<td>1</td>
<td>Das Fahrzeug befindet sich auf Standort 2</td>
</tr>
	
		<!-- -------- -->
<!-- FENSTER UND TÜREN -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">FENSTER UND TÜREN</td>
</tr>
<tr>
<td rowspan="3">Gesperrt</td>
<td rowspan="3">gesperrt</td>
<td rowspan="3">Türen</td>
<td rowspan="3">Text</td>
<td>GESPERRT</td>
<td>Fahrzeug verriegeln</td>
</tr>
<tr>
<td>UNLOCKED</td>
<td>Fahrzeug entriegeln</td>
</tr>
<tr>
<td>UNSPECIFIED</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td rowspan="8">
Zustand der linken Vordertür<br>
Zustand der rechten Vordertür<br>
Zustand der hinteren linken Tür<br>
Zustand der rechten hinteren Tür<br>
Zustand der Motorhaube<br>
Status Heckklappe<br>
Status der Klappe<br>
</td>
<td rowspan="8">
doorFlState<br>
doorFrState<br>
doorRlState<br>
doorRrState<br>
hoodState<br>
tailState<br>
tankState<br>
</td>
<td rowspan="8">
Türen
</td>
<td rowspan="12">
Text
</td>
<td rowspan="3">GESCHLOSSEN</td>
<td rowspan="3">geschlossen</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">AJAR</td>
<td rowspan="3">halb offen</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">OPEN</td>
<td rowspan="3">offen</td>
</tr>
<tr>
</tr>
<tr>
<td rowspan="4">
Zustand der linken Frontscheibe<br>
Zustand der rechten Frontscheibe<br>
Zustand der linken Heckscheibe<br>
Zustand der rechten Heckscheibe<br>
Zustand des Daches<br>
</td>
<td rowspan="4">
winFlState<br>
winFrState<br>
winRlState<br>
winRrState<br>
roofState<br>
</td>
<td rowspan="4">Windows</td>
</tr>
<tr>
<td rowspan="3">UNSPECIFIED</td>
<td rowspan="3">Keine Informationen verfügbar</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="2">
Vordere linke Tür offen<br>
Rechte Vordertür offen<br>
linke Hintertür offen<br>
Rechte Hintertür offen<br>
Linkes vorderes Fenster offen<br>
Rechte Frontscheibe offen<br>
linkes Heckfenster offen<br>
Rechtes hinteres Fenster offen<br>
Motorhaube geöffnet<br>
offenes Dach<br>
Heckklappe offen<br>
Klappe offen<br>
</td>
<td rowspan="2">
doorFlOpen<br>
doorFrOpen<br>
doorRlOpen<br>
doorRrOpen<br>
winFlOpen<br>
winFrOpen<br>
winRlOpen<br>
winRrOpen<br>
hoodOpen<br>
roofOpen<br>
tailOpen<br>
tankOpen<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>nicht geöffnet</td>
</tr>
<tr>
<td>1</td>
<td>offen</td>
</tr>
<tr>
<td rowspan="2">
Vordertür links geschlossen<br>
Rechte Vordertür geschlossen<br>
linke Hintertür geschlossen<br>
Rechte Hintertür geschlossen<br>
Vordere linke Scheibe geschlossen<br>
Rechte Frontscheibe geschlossen<br>
linkes Heckfenster geschlossen<br>
Rechte Heckscheibe geschlossen<br>
geschlossene Haube<br>
geschlossenes Dach<br>
Heckklappe geschlossen<br>
Klappe geschlossen<br>
</td>
<td rowspan="2">
doorFlClosed<br>
doorFrClosed<br>
doorRlClosed<br>
doorRrClosed<br>
winFlClosed<br>
winFrClosed<br>
winRlClosed<br>
winRrClosed<br>
hoodClosed<br>
roofClosed<br>
tailClosed<br>
tankClosed<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>nicht geschlossen</td>
</tr>
<tr>
<td>1</td>
<td>offen</td>
</tr>
<tr>
<td rowspan="2">Geschlossene Türen</td>
<td rowspan="2">allDoorsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Eine Tür, die Motorhaube oder der Kofferraum ist nicht geschlossen</td>
</tr>
<tr>
<td>1</td>
<td>Alle Türen sowie die Motorhaube und der Kofferraum sind geschlossen</td>
</tr>
<tr>
<td rowspan="2">Fenster geschlossen</td>
<td rowspan="2">allWinsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Ein Fenster oder das Dach ist nicht geschlossen</td>
</tr>
<tr>
<td>1</td>
<td>Alle Fenster sowie das Dach sind geschlossen</td>
</tr>
	
		<!-- ---------------- -->
<!-- Verbrennungsmotor -->
		<!-- ---------------- -->
<tr>
<td class="subtitle" colspan="6">VERBRENNUNGSMOTOR</td>
</tr>
	
<tr>
<td rowspan="2">Motor in Betrieb</td>
<td rowspan="2">engineON</td>
<td rowspan="2">engine_status</td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Motor im Stillstand</td>
</tr>
<tr>
<td>1</td>
<td>Motor läuft</td>
</tr>
<tr>
<td>Kraftstoffverbrauch</td>
<td>consoFuel</td>
<td>Statistiken</td>
<td>Digital</td>
<td>l/100 km</td>
<td>vom Fahrzeug berechneter Durchschnittsverbrauch</td>
</tr>
<tr>
<td>Kraftstoffverbrauch (Fahrt)</td>
<td>consoFuelTrip</td>
<td>Statistiken</td>
<td>Digital</td>
<td>l/100 km</td>
<td>Durchschnittsverbrauch seit Beginn der automatischen Fahrt</td>
</tr>
<tr>
<td>Kraftstoff</td>
<td>fuelAmount</td>
<td>Heizöl</td>
<td>Digital</td>
<td>l</td>
<td>Verbleibende Kraftstoffmenge</td>
</tr>
<tr>
<td>thermische Autonomie</td>
<td>fuelAutonomy</td>
<td>Statistiken</td>
<td>Digital</td>
<td>km</td>
<td>Reichweite mit verbleibendem Kraftstoff</td>
</tr>
<tr>
<td rowspan="2">Geringe Reichweite mit Kraftstoff</td>
<td rowspan="2">al_fuelAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binär</td>
<td>0</td>
<td>Ausreichende Kraftstoffreichweite</td>
</tr>
<tr>
<td>1</td>
<td>Geringe Reichweite bei Kraftstoffbetrieb</td>
</tr>
	
<!-- ÖL -->
<tr>
<td rowspan="5">Ölstand</td>
<td rowspan="5">Ölstand</td>
<td rowspan="5">Motor-Diagnose</td>
<td rowspan="5">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normaler Pegel</td>
</tr>
<tr>
<td>"SERVICE_REQUIRED"</td>
<td>Erfordert einen Dienst</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Niedriger Füllstand</td>
</tr>
<tr>
<td>„TOO_HIGH“</td>
<td>Obere Ebene</td>
</tr>
<tr>
<td rowspan='2'>Ölwarnung</td>
<td rowspan='2'>al_oil</td>
<td rowspan='2'></td>
<td rowspan='2'>binär</td>
<td>0</td>
<td>Der Ölstand ist normal</td>
</tr>
<tr>
<td>1</td>
<td>Warnung (weitere Informationen finden Sie unter dem Befehl <i>oil_level</i>)</td>
</tr>
	
<!-- KÜHLMITTEL -->
<tr>
<td rowspan="3">Kühlmittelstand</td>
<td rowspan="3">coolantLevel</td>
<td rowspan="3">engine_dignostics</td>
<td rowspan="3">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normaler Pegel</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Niedriger Füllstand</td>
</tr>
<tr>
<td rowspan='2'>Kühlmittelwarnung</td>
<td rowspan='2'>al_coolant</td>
<td rowspan='2'></td>
<td rowspan='2'>binär</td>
<td>0</td>
<td>Der Füllstand ist normal</td>
</tr>
<tr>
<td>1</td>
<td>Warnung (weitere Informationen finden Sie unter dem Befehl <i>coolant_level</i>)</td>
</tr>
	
		<!-- ----------------- -->
<!-- Elektromotor -->
		<!-- ----------------- -->
<tr>
<td class="subtitle" colspan="6">ELEKTROMOTOR</td>
</tr>
<tr>
<td>Stromverbrauch</td>
<td>consoElectric</td>
<td>Statistiken</td>
<td>Digital</td>
<td>kW/100 km</td>
<td>Vom Fahrzeug berechneter Durchschnittsverbrauch</td>
</tr>
<tr>
<td>Reichweite im Elektrobetrieb</td>
<td>electricAutonomy</td>
<td>Statistiken</td>
<td>Digital</td>
<td>km</td>
<td>Reichweite bei verbleibender Ladung</td>
</tr>
<tr>
<td rowspan="2">Geringe elektrische Reichweite</td>
<td rowspan="2">al_electricAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binär</td>
<td>0</td>
<td>Ausreichende elektrische Reichweite</td>
</tr>
<tr>
<td>1</td>
<td>Geringe elektrische Reichweite</td>
</tr>
<tr>
<TD>Ladezustand der Batterie</TD>
<td>batteryLevel</td>
<td>recharge_status</td>
<td>Digital</td>
<td>%</td>
<TD>Ladezustand der Batterie in Prozent</TD>
</tr>
<tr>
<td rowspan="6">Ladezustand</td>
<td rowspan="6">Ladezustand</td>
<td rowspan="6">Ladezustand</td>
<td rowspan="6">Text</td>
<td>"CHARGING_SYSTEM_CHARGING"</td>
<td>Wird geladen</td>
<td></td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_IDLE"</td>
<td>Ladesystem im Standby-Modus</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_DONE"</td>
<td>Aufladen abgeschlossen</td>
</tr>
<tr>
<td>„CHARGING_SYSTEM_FAULT“</td>
<td>Fehler beim Ladesystem</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_SCHEDULED"</td>
<td>Geplantes Aufladen</td>
</tr>
<tr>
<td>„CHARGING_SYSTEM_UNSPECIFIED“</td>
<td>Status unbestimmt</td>
</tr>
<tr>
<td>Verbleibende Ladezeit</td>
<td>Ladezeit verbleibend</td>
<td>recharge_status</td>
<td>Digital</td>
<td>Minuten</td>
<td>Voraussichtliche Zeit bis zum Ende des Ladevorgangs</td>
</tr>
<tr>
<td>Ladeende</td>
<td>chargingEndTime</td>
<td></td>
<td>Text</td>
<td>jj HH:MM</td>
<td>Voraussichtliche Ladeendezeit</td>
</tr>
<tr>
<td rowspan="5">Status der Steckdose</td>
<td rowspan="5">connectorStatus</td>
<td rowspan="5">Ladezustand</td>
<td rowspan="5">Text</td>
<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
<td>An eine Wechselstromsteckdose angeschlossen</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
<td>An einen DC-Anschluss angeschlossen</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_DISCONNECTED"</td>
<td>Vom Netz getrennt</td>
</tr>
<tr>
<td>„CONNECTION_STATUS_FAULT“</td>
<td>Irrtum</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
<td>Status unbestimmt</td>
</tr>
	
		<!-- ------ -->
<!-- WASCHMASCHINE -->
		<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">FENSTERREINIGER</td>
</tr>
<tbody>
<tr>
<td rowspan="3">Fensterputz-Stufe</td>
<td rowspan="3">Waschflüssigkeitsstand</td>
<td rowspan="3">Diagnose</td>
<td rowspan="3">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normaler Pegel</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Niedriger Füllstand</td>
</tr>
<tr>
<td rowspan='2'>Fensterputz-Alarm</td>
<td rowspan='2'>al_washerFluid</td>
<td rowspan='2'>binär</td>
<td>0</td>
<td>Der Füllstand ist normal</td>
</tr>
<tr>
<td>1</td>
<td>Warnmeldung (weitere Informationen finden Sie unter dem Befehl <i>washer_fluid_level</i>)</td>
</tr>
		
			<!-- ------ -->
<!-- BRAKE -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">BREMSFLÜSSIGKEIT</td>
</tr>
</tbody>
<tr>
<td rowspan="3">Bremsflüssigkeitsstand</td>
<td rowspan="3">Bremsflüssigkeitsstand</td>
<td rowspan="3">Bremsen</td>
<td rowspan="3">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normaler Pegel</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Niedriger Füllstand</td>
</tr>
<tr>
<td rowspan='2'>Bremsflüssigkeitswarnung</td>
<td rowspan='2'>al_brake_fluid</td>
<td rowspan='2'>binär</td>
<td>0</td>
<td>Der Füllstand ist normal</td>
</tr>
<tr>
<td>1</td>
<td>Warnung (weitere Details finden Sie unter dem Befehl <i>brake_fluid_fluid_level</i>)</td>
</tr>
		
			<!-- ---- -->
<!-- TYRE -->
			<!-- ---- -->
<tr>
<td class="subtitle" colspan="6">REIFENDRUCK</td>
</tr>
<tr>
<td rowspan="5">
Reifen vorne links<br>
Reifen vorne rechts<br>
linker Hinterreifen<br>
Reifen hinten rechts
</td>
<td rowspan="5">
tyreFl<br>
tyreFr<br>
tyreRl<br>
tyreRr
</td>
<td rowspan="5">Reifen</td>
<td rowspan="5">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normaler Druck</td>
</tr>
<tr>
<td>"VERY_LOW_PRESSURE"</td>
<td>Sehr niedriger Druck</td>
</tr>
<tr>
<td>„LOW_PRESSURE“</td>
<td>Niedriger Druck</td>
</tr>
<tr>
<td>„HIGH_PRESSURE“</td>
<td>Hoher Druck</td>
</tr>
<tr>
<td rowspan='2'>Reifenwarnung</td>
<td rowspan='2'>al_tyre</td>
<td rowspan="2"></td>
<td rowspan='2'>binär</td>
<td>0</td>
<td>Die Druckwerte sind normal</td>
</tr>
<tr>
<td>1</td>
<td>Warnung (weitere Details finden Sie unter den Befehlen <i>tyre_*</i>)</td>
</tr>
		
			<!-- ------ -->
<!-- BELEUCHTUNG -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">BELEUCHTUNG</td>
</tr>
<tr>
<td rowspan="3">
Bremslicht links<br>
Bremslicht rechts<br>
Zentrales Bremslicht<br>
linkes Taglicht<br>
Rechte Tageslichtbeleuchtung<br>
Nebelscheinwerfer<br>
Nebelschlussleuchten<br>
Warnblinklicht<br>
Blinker links <br>
Ampel: Geradeaus <br>
linkes Abblendlicht<br>
Abblendlicht rechts<br>
vordere linke Positionsleuchte<br>
Rechtes vorderes Positionslicht<br>
linkes Rücklicht<br>
Rechte hintere Positionsleuchte<br>
Kochfeld<br>
Feuer zieht sich zurück<br>
Seitenleuchten<br>
Blinker vorne links<br>
Blinker vorne rechts<br>
linker hinterer Blinker<br>
rechtes Rückblinklicht
</td>
<td rowspan="3">
al_brakeLightL<br>
al_brakeLightR<br>
al_brakeLightC<br>
al_daytimeRunningLightL<br>
al_daytimeRunningLightR<br>
al_fogLightF<br>
al_fogLightR<br>
al_hazardLights<br>
al_highBeamL<br>
al_highBeamR<br>
al_lowBeamL<br>
al_lowBeamR<br>
al_positionLightFl<br>
al_positionLightFr<br>
al_positionLightRl<br>
al_positionLightRr<br>
al_registrationPlateLight<br>
al_reverseLights<br>
al_sideMarkLights<br>
al_turnIndicationFl<br>
al_turnIndicationFr<br>
al_turnIndicationRl<br>
al_turnIndicationRr
</td>
<td rowspan="3">Warnungen</td>
<td rowspan="3">Text</td>
<td>„UNSPECIFIED“</td>
<td>Keine Informationen verfügbar</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Kein Fehler</td>
</tr>
<tr>
<td>„FAILURE“</td>
<td>Fehler</td>
</tr>
<tr>
<td rowspan="2">Lampenwarnung</td>
<td rowspan="2">al_light</td>
<td rowspan="2"></td>
<td rowspan="2">binär</td>
<td>0</td>
<td>Keine defekte Lampe</td>
</tr>
<tr>
<td>1</td>
<td>Standard (weitere Informationen finden Sie unter „Lichtsteuerung“)</td>
</tr>

			<!-- ------ -->
<!-- PLUGIN -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">PLUGIN</td>
</tr>
<tr>
<td>Nachrichten für Wigget</td>
<td>msg2wigget</td>
<td></td>
<td>Text</td>
<td>json</td>
<td>Meldungen zum Betrieb des Panel-Widgets</td>
</tr>
</tbody>
</table>

# Die Endpunkte der Volvocars-APIs
{: .num}

Dieses Plugin nutzt drei Volvocars-APIs. Jede dieser APIs bietet Zugriff auf Endpunkte, die jeweils eine
Informationssammlung. Die obigen Tabellen mit Aktionen und Informationen zeigen an, welcher Endpunkt bereitgestellt wird
die Informationen, die jedem Befehl „info“ oder jeder Aktion des Plugins zugeordnet sind.

Volvo begrenzt die Anzahl der täglichen API-Zugriffe auf 10'000 pro VCC-API-Schlüssel. Um diese Grenze einzuhalten und gleichzeitig
Um zeitnah aktuelle Informationen zu erhalten, greift das Plugin nicht bei allen Endpunkten mit derselben Häufigkeit darauf zu.
Die Position des Fahrzeugs wird beispielsweise jede Minute aktualisiert, um eine gewisse Reaktionsfähigkeit zu gewährleisten, wenn
Das Fahrzeug kommt zu Hause an, während der Bremsflüssigkeitsstand erst alle 60 Minuten überprüft wird.

## Die Endpunkte
{: .num}

<table class="endpoint">
<thead>
<tr>
<th rowspan=2>API</th>
<th rowspan=2>Endpunkt</th>
<th rowspan=2>Frequenz</th>
<th colspan=3 style="text-align:center">Anzahl der Anrufe pro Tag</th>
</tr>
<th>jedes Fahrzeug</th>
<th>Verbrennungsmotor</th>
<th>Elektromotor</th>
<tr>
</tr>
</thead>
<tbody>
<tr>
<td rowspan=15>Vernetztes Fahrzeug</td>
<td>Bremsen</td>
<td>60 Min.</td>
<td>24</td>
</tr>
<tr>
<td>Befehlsbarrierefreiheit</td>
<td>5 Min.</td>
<td>288</td>
</tr>
<tr>
<td>Befehle<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>Details<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>Diagnose</td>
<td>10 Min.</td>
<td>144</td>
</tr>
<tr>
<td>Türen</td>
<td>2 Min.</td>
<td>720</td>
</tr>
<tr>
<td>Engine</td>
<td>15 Min.</td>
<td></td>
<td>96</td>
</tr>
<tr>
<td>engine-status</td>
<td>5 Min.</td>
<td></td>
<td>288</td>
</tr>
<tr>
<td>Heizöl</td>
<td>30 Min.</td>
<td></td>
<td>48</td>
</tr>
<tr>
<td>Kilometerzähler</td>
<td>15 Min.</td>
<td>96</td>
</tr>
<tr>
<td>Statistiken</td>
<td>10 Min.</td>
<td>144</td>
</tr>
<tr>
<td>Reifen</td>
<td>30 Min.</td>
<td>48</td>
</tr>
<tr>
<td>Fahrzeuge<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>Warnungen</td>
<td>30 Min.</td>
<td>48</td>
</tr>
<tr>
<td>Windows</td>
<td>2 Min.</td>
<td>720</td>
</tr>
<tr>
<td>Vermietung</td>
<td>Vermietung</td>
<td>1 Min.</td>
<td>1'440</td>
</tr>
<tr>
<td>Energie</td>
<td>Ladestatus</td>
<td>5 Min.</td>
<td></td>
<td></td>
<td>288</td>
</tr>
<tr>
<th>Gesamt</th>
<th></th>
<th></th>
<th>3672</th>
<th>432</th>
<th>288</th>
</tr>
</tbody>
</table>
<sup>1</sup> Endpunkt, der bei der Synchronisierung eines Kontos aufgerufen wird.

Es gibt also:
+ 4.104 Anrufe pro Tag für ein Fahrzeug mit Verbrennungsmotor.
+ 3.960 Anrufe pro Tag für ein Elektrofahrzeug.
+ 4.392 Anrufe pro Tag für ein Hybridfahrzeug.

Hinzu kommen die Aufrufe beim Absenden einer Bestellung, bei einer Aktualisierung oder bei einer Synchronisierung der mit einem Konto verknüpften Fahrzeuge.

