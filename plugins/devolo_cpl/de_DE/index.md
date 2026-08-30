---
layout : default
pluginId : devolo_cpl
plugin : devolo_cpl
lang: de_DE
---
# Plugin „devolo_cpl“ für Jeedom

Das Plugin ermöglicht die Integration von Devolo-Powerline-Geräten in Jeedom

> :bulb: Achtung: Wenn Sie Log-Dateien weitergeben, dürfen die Passwörter der
Geräte können dort im Klartext aufgeführt werden!

# Kompatible Geräte
{: .num}

## Verwaltbare Geräte
{: .num}

Das Plugin nutzt das Python-Modul [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
In der Dokumentation zu diesem Modul wird angegeben, dass es mit den folgenden Geräten kompatibel ist:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN Triple
+ Magic 2 LAN DIN-Schiene
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repeater 5400
+ Repeater 3000
+ Repeater 1200
+ Repeater AC+
+ AC-Repeater
+ dLAN 1200+ WiFi ac
+ dLAN 550+ WLAN
+ dLAN 550 WiFi

## Nicht verwaltbare Geräte
{: .num}

Geräte von Devolo oder anderen Marken, die nicht in der Geräteliste aufgeführt sind
Die steuerbaren Geräte können im Plugin konfiguriert werden. Bei diesen Geräten handelt es sich um
*nicht verwaltbar*.

Geräte für *nicht verwaltbare* Geräte verfügen über keine Steuerung. Keine Aktion
kann daher auf diesen Geräten nicht durchgeführt werden, und es kann kein Status an
Jeedom.

In der aktuellen Version des Plugins besteht der einzige Sinn darin, diese Geräte zu konfigurieren
in Jeedom besteht darin, deren Existenz zu dokumentieren. Sie werden wahrscheinlich berücksichtigt werden
in einer zukünftigen Version bei der Anzeige der Übertragungsgeschwindigkeiten zwischen den
Geräte.

Das Plugin enthält Vorlagen für die folgenden Modelle:

+ DL1200 LAN
+ DL550 LAN
+ Sonstiges

# Installation und Konfiguration des Plugins
{: .num}


## Installation des Plugins
{: .num}

Das Plugin lässt sich standardmäßig über den Jeedom-Market installieren. Nachdem man es
Nach der Installation muss es aktiviert und anschließend die Installation der Abhängigkeiten gestartet werden

## Einrichtung des Plugins
{: .num}

{% include image.html img="configuration_plugin.png" %}

+ **Plugin**
: Allgemeine Konfiguration des Plugins:
    + ***Land***
: Das Land, in dem sich die Devolo-Geräte befinden. Diese Einstellung dient dazu,
die Bilder der Geräte mit den passenden Steckdosen auszuwählen.
    + ***Bezeichnungen der Geräte ohne Objekt***
: Wenn diese Option ausgewählt ist, werden die Namen der Geräte in den Tabellen
und Grafiken werden nicht in der Form `[<Objekt>][<Gerät>]` angezeigt, sondern
`<Ausstattung>`.

+ **Datenbank**
: Konfiguration der Datenverwaltung:
    + ***Speicherung***
: Zeitraum, während dessen die Informationen zu den PLC-Datenraten in der Datenbank gespeichert bleiben
Daten.

+ **Dämon**
: Konfiguration des Daemons:
    + ***Anschluss***
: Nummer des TCP-Ports, der für die Kommunikation zwischen Jeedom und dem Daemon verwendet wird.
Standardmäßig ist Port 34741 konfiguriert. Ein anderer Port kann festgelegt werden, indem
im Falle eines Konflikts mit einem anderen Plugin oder einer anderen Software, die denselben Port nutzt.

+ **Protokolle**
: Konfiguration der Protokolle
    + ***Diskret***
: Sensible Daten (Passwörter usw.) werden aus den Protokollen entfernt.
> :warning: Sensible Daten werden (noch) nicht aus den Protokollen des Daemons entfernt! Sensible Daten (Passwörter usw.) werden aus den Protokollen entfernt.
    + ***Vollständiges Debugging***
: Die Protokolle der Python-Module des Daemons werden nicht in den Debug-Modus versetzt, wenn diese Option nicht
aktiviert. Die Aktivierung dieser Option kann dazu führen, dass die Protokolle des Daemons sehr ausführlich ausfallen, wenn das Plugin
wird in den „Debug“-Modus versetzt.

+ **Informationen zur Datenübertragungsrate**
    + ***Aufwärtsströmung***
: Gibt an, ob Befehle für den abgehenden Powerline-Datenfluss (zu den
sonstige Geräte).
    + ***Abwärtsströme***
: Gibt an, ob Befehle für den absteigenden Powerline-Datenfluss erstellt werden sollen
(von anderen Geräten).

## Start des Daemons
{: .num}
Nachdem Sie die Abhängigkeiten installiert und die Konfiguration des Plugins vorgenommen haben,
Der Daemon muss gestartet werden.

# Konfiguration der Geräte
{: .num}

Geräte für verwaltbare Geräte können automatisch angelegt werden
vorausgesetzt, sie befinden sich im selben Netzwerk wie der Jeedom-Server und sie
befinden sich nicht im Standby-Modus. Andernfalls müssen sie wie die Geräte manuell angelegt werden
nicht verwaltbar.

## Die automatische Methode
{: .num}

Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol „Synchronisierung“:

{% include image.html img="icones_gestion_plugin.png" %}

Für jedes erkannte Gerät wird automatisch ein Jeedom-Gerät angelegt.

+ Die Seriennummer des Geräts wird in Jeedom konfiguriert. Falls bereits ein
Bei Geräten mit dieser Seriennummer erstellt das Synchronisationsprogramm keine
Es handelt sich nicht um eine neue Anlage, sondern um eine Modernisierung der bestehenden Anlage.
+ Der Name des Geräts ist der im Gerät konfigurierte Name oder die Nummer
Seriennummer, falls kein Name konfiguriert ist.
+ Die IP-Adresse des Geräts ist im Jeedom-System hinterlegt.
+ Der Gerätetyp wird in der Jeedom-Ausstattung angegeben und das Bild von
Die Auswahl der Geräte erfolgt unter Berücksichtigung des für das Plugin konfigurierten Landes.
+ Die Befehle für die Geräte wurden erstellt.

## Die manuelle Methode
{: .num}

Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol „Hinzufügen“:

{% include image.html img="icones_gestion_plugin.png" %}

Geben Sie den Namen des neuen Geräts ein, bevor Sie die Seite
Konfiguration der Geräte.

{% include image.html img="equipement_non_configure.png" %}

Dann muss man
+ Wählen Sie den Gerätetyp aus. Die Liste der spezifischen Parameter wird
angepasst an die Art der ausgewählten Geräte.
+ Geben Sie die Seriennummer des Geräts ein. *(Falls Sie die Seriennummer nicht kennen
(Standardmäßig können Sie einen beliebigen Text eingeben.)*
+ Geben Sie die MAC-Adresse des Geräts ein.
+ Geben Sie die IP-Adresse des Geräts ein. *(Nur für verwaltbare Geräte)*
+ Gerätetyp auswählen. *(Nur für verwaltbare Geräte)*

> :bulb: Die Seriennummer muss eindeutig sein, wird vom Plugin derzeit jedoch nicht überprüft.

##### Verwaltbare Geräte:
{% include image.html img="equipement_manageable_configure.png" %}

##### Nicht verwaltbare Geräte:
{% include image.html img="equipement_non_manageable_configure.png" %}

## Abschluss der Konfiguration
{: .num}

Nachdem Sie ein Gerät automatisch oder manuell angelegt haben, müssen Sie
+ Geben Sie das Passwort ein.
+ Den Namen des PLC-Netzwerks konfigurieren (optional, wenn Sie nur ein PLC-Netzwerk haben)
+ Gerät einschalten.
+ Nehmen Sie die üblichen Konfigurationen für die Jeedom-Geräte vor.
+ Wählen Sie „Offline-Überwachung“, wenn Sie eine Fehlermeldung erhalten möchten, wenn
Das Gerät ist nicht erreichbar (z. B. im Standby-Modus).

# Die Befehle
{: .num}

Befehle, die keine Durchflussbefehle sind, werden automatisch erstellt oder gelöscht
wenn das Gerätemodell geändert wird. Die Befehle werden für die Modelle erstellt
verwaltbar und bei nicht verwaltbaren Modellen entfernt.

Die Geräte melden ihre Zustandsänderungen nicht in Echtzeit. Die
Befehle vom Typ „info“ (mit Ausnahme des Befehls „locate“) wurden aktualisiert
jede Minute über einen Cron-Job. Die Informationen zu einem Gerät sind ebenfalls
aktualisiert, wenn über den Daemon ein Befehl an das Gerät gesendet wird oder wenn
Der Befehl „refresh“ ist aktiviert.

## Aktualisieren
{: .num}

Der Befehl „refresh“ sendet eine Nachricht an den Daemon, damit dieser das Gerät abfragt.
je nach Status. Befehle vom Typ „Info“ werden asynchron aktualisiert
wenn das Gerät auf die Anfrage des Daemons reagiert.

## LEDs
{: .num}

+ Die Befehle „action“ mit den LogicalIDs `leds_on` und `leds_off` ermöglichen
die LEDs des Geräts ein- und ausschalten.
+ Der Befehl mit der logicalId `leds` gibt an, ob die LEDs eingeschaltet sind oder nicht.
Diese Information wird anhand der vom Gerät übermittelten Daten aktualisiert.

## Standort
{: .num}

+ Der Befehl `locate_on` aktiviert die Ortung des Geräts, indem er
Die PLC-LED des Geräts blinkt zwei Minuten lang.
+ Der Befehl `locate_off` deaktiviert die Standortbestimmung vor Ablauf der Frist
in zwei Minuten.
+ Die Geräte geben keine Informationen darüber zurück, ob die Ortung
aktiv oder nicht. Die `locate`-Information muss daher den Status des Geräts nachbilden:
    + Der Wert wird bei der Aktivierung durch `locate_on` auf 1 gesetzt.
    + Die Anzeige springt nach 2 Minuten automatisch auf 0 zurück.
    + Der Wert wird vor Ablauf der zwei Minuten auf 0 gesetzt, wenn der Befehl
`locate_off` ist aktiviert.
    + Der Status der Information ändert sich nicht, wenn die Lokalisierung aktiviert ist oder
durch eine andere Software als das Plugin deaktiviert (durch Devolo Cockpit durch
Beispiel).

## Firmware-Versionen
{: .num}

+ Der Befehl `firmware` zeigt die Version der installierten Firmware an in
das Gerät.
+ Der Befehl `update_available` gibt an, ob ein Firmware-Update verfügbar ist
ist verfügbar.
+ Der Befehl `next_firmware` zeigt die für ein Upgrade verfügbare Version an.
Dieses Feld ist leer, wenn das Gerät auf dem neuesten Stand ist.

> :bulb: Da alle meine Geräte auf dem neuesten Stand sind, konnte ich das noch nicht richtig testen
Die Befehle `update_available` und `next_firmware`. Alle Erfahrungsberichte
über das [Forum](https://community.jeedom.com) (das Tag nicht vergessen
`plugin-devolo_cpl`) ist willkommen.

## Aktivieren/Deaktivieren des Gast-WLANs
{: .num}

+ Mit den Befehlen `guest_on` und `guest_off` können Sie
Das WLAN-Gastnetz der Devolo-Geräte. Bei WLAN-Mesh-Systemen ist die Aktivierung oder die
Die Deaktivierung des WLAN-Gastnetzwerks auf einem Gerät wirkt sich auch auf die anderen Geräte aus
des Mesh-Netzwerks.
+ Mit dem Befehl `guest_duration` lässt sich die Dauer festlegen, während der
Das Gast-WLAN muss aktiviert sein. Nach Ablauf dieser Zeit wird das Devolo-Gerät
deaktiviert das Gast-WLAN. Wenn der Wert dieses Befehls 0 ist, wird das Gast-WLAN nicht
wird nicht automatisch deaktiviert.

Die Dauer, für die das Gäste-WLAN aktiviert sein soll, wird in Minuten angegeben.

Das Widget **Devolo_cpl/J_h_m** zeigt diesen Wert im Format
`<Tage> <Stunden>:<Minuten>` (`<Stunden>:<Minuten>`, wenn Tage = 0)

##### Widget und Popup im Dashboard:
{% include image.html img="widget_dashboard.png" %} {% include image.html img="popup_j_h_m_dashboard.png" %}

##### Widget und Popup für Mobilgeräte:
{% include image.html img="widget_mobile.png" %} {% include image.html img="popup_j_h_m_mobile.png" %}
+ Der Befehl „info guest_remaining“ zeigt die verbleibende Zeit bis zur Deaktivierung an
des Gäste-WLANs. Diese Dauer wird in Minuten erfasst.

Das Widget **Devolo_cpl/J_h_m** zeigt diesen Wert im Format
`<Tage> <Stunden>:<Minuten>` (`<Stunden>:<Minuten>`, wenn Tage = 0)

## Online
{: .num}

+ Der Befehl `online` ist ein binärer Wert, der angibt, ob das Gerät online ist oder nicht.

## Durchflussmengen
{: .num}

+ Es können Befehle zur Steuerung der Datenübertragungsrate zwischen PLC-Geräten erstellt werden. Siehe Informationen weiter unten.

# Die Übertragungsraten bei Powerline-Kommunikation
{: .num}

Die PLC-Daten werden alle 5 Minuten von den Geräten übermittelt. Die Werte lauten
werden in der Datenbank gespeichert und während der Aufbewahrungsfrist aufbewahrt
auf der Konfigurationsseite des Plugins eingerichtet.

{% include image.html img="icones_gestion_plugin.png" %}

Ein Klick auf das Symbol „Powerline-Netzwerke“ öffnet ein Modalfenster mit einer Übersicht über die Powerline-Übertragungsraten.

{% include image.html img="modal_CPL_rates.png" %}

## Netzwerke
{: .num}

Wenn Sie in den Einstellungen verschiedene Netzwerknamen konfiguriert haben,
Geräte: Das Modul enthält für jedes dieser Netzwerke eine Registerkarte. Dies ermöglicht,
zum Beispiel eine Tabelle mit den Durchsatzraten zwischen DLAN-Geräten und
ein weiteres für Magic-Geräte.

## Durchflussmengen
{: .num}

Die Zeilen der Tabelle stellen die Quellgeräte dar, die Spalten hingegen die
Reiseziele.

Auf dem obigen Bild sehen wir also einen Datenfluss von 833 Mbit/s von *cplphil* zu
*cplbureau* und 850 Mbit/s in umgekehrter Richtung.

Die Durchflussmengen werden alle 5 Minuten erfasst. Die Uhrzeit wird unten rechts angezeigt.
Der Modus „Zeit“ gibt den Zeitpunkt an, zu dem die angezeigten Durchflussmengen gemessen wurden.

## Durchflussregelung
{: .num}

### Erstellung von Befehlen
{: .num}

Wenn die entsprechende Option in der Plugin-Konfiguration aktiviert wurde, werden Schaltflächen für
Die Erstellung von Durchflussbefehlen für Aufwärts- und Abwärtsströme wird angezeigt unter
die Seite zur Verwaltung der Aufträge eines Geräts.

{% include image.html img="btn_cmd_debit.png" %}

Ein Klick auf diese Schaltfläche fügt einen Befehl zur Befehlsliste des Geräts hinzu.
Die logicalId des neuen Befehls lautet `rate_upload` (Ausgangsdatenraten) oder
`rate_download` (Eingangsbandbreite).

{% include image.html img="nouvelles_commandes.png" %}

Sie müssen dann einen Namen für den Befehl eingeben und überprüfen, ob das Zielgerät
(**Datenstrom zu:** oder **Datenstrom von:**) ist korrekt, bevor Sie das Gerät speichern.

### Überprüfung der Konsistenz der Befehle
{: .num}

Die Schaltfläche „Durchflusssteuerung“ öffnet ein Popup-Fenster mit einer Liste der Unstimmigkeiten in den
Einstellungen für die Durchflussregelung.

{% include image.html img="icones_gestion_plugin.png" %}

{% include image.html img="check_debitCmds.png" %}

### Anmerkungen
{: .num}

+ **Redundanz:**\
Ein Lastschriftauftrag über den Betrag von A an B würde sich mit dem Lastschriftauftrag überschneiden
von A nach B hinab.

+ **Nicht steuerbare Stromflüsse zwischen Geräten**\
Diese Ströme lassen sich nicht messen.

+ **Datenfluss zwischen einem verwaltbaren und einem nicht verwaltbaren Gerät**\
Die Durchflusssteuerungen der nicht verwaltbaren Geräte werden mit den folgenden Werten belegt
Meldungen vom steuerbaren Gerät

# WLAN-Verbindungen
{: .num}

Die MAC-Adressen der WLAN-Clients, die mit den Access Points der Devolo-Geräte verbunden sind, lauten
werden im Jeedom-Plugin protokolliert, das einen Verlauf dieser Verbindungen speichert.

## Zufällige MAC-Adressen
{: .num}

> :bulb: Eine MAC-Adresse, deren zweites Zeichen **2**, **6**, **A** oder **E** ist, ist eine zufällige Adresse.

Manche Geräte verwenden eine zufällige MAC-Adresse anstelle ihrer eigenen MAC-Adresse
physikalisch. Da sich die zufällige MAC-Adresse bei jeder Verbindung ändert, ist es
Es ist nicht möglich, einen Verbindungsverlauf dieser Geräte abzurufen. **Diese Adressen sind
und werden daher vom Plugin ignoriert, das keine Daten zu ihnen aufzeichnet.**

Einige dieser Geräte können so konfiguriert werden, dass sie eine feste Adresse verwenden
wenn sie sich mit bestimmten WLAN-Netzwerken verbinden. Sie haben somit die Möglichkeit,
damit diese Geräte immer dieselbe MAC-Adresse verwenden, wenn sie
Verbinden Sie sich mit einem Ihrer Devolo-Zugangspunkte und profitieren Sie dabei weiterhin von den Vorteilen von
die Verwendung einer zufälligen MAC-Adresse, wenn Sie eine Verbindung zu anderen Geräten herstellen
Netzwerke.


## Suche nach dem Anbieter anhand einer MAC-Adresse
{: .num}

Auf der Website [macvendors.com](https://macvendors.com) kann man herausfinden, wer der Hersteller ist
eines Geräts oder seiner Netzwerkschnittstelle anhand der MAC-Adresse.

Das Plugin greift auf die API dieser Website zu, um den Hersteller der Geräte zu ermitteln, die
die mit den WLAN-Schnittstellen der Devolo-Geräte verbunden sind.

Der Zugriff auf die API erfolgt unter Einhaltung einer Mindestpause von einer Sekunde zwischen zwei Aufrufen, um
Die Begrenzung auf zwei Zugriffe pro Sekunde für freie Zugriffe muss eingehalten werden. Das Plugin überprüft jedoch nicht,
nicht die Anzahl der Zugriffe pro Tag, um sicherzustellen, dass das Limit von 1000 Zugriffen pro Tag eingehalten wird
eingehalten.

## Zuordnung von Namen zu MAC-Adressen
{: .num}

{% include image.html img="icones_gestion_plugin.png" %}

Die Schaltfläche „MAC-Adressen“ auf der Verwaltungsseite des Plugins öffnet ein Modalfenster, um
Verwaltung der MAC-Adressen der Geräte, die sich mit dem WLAN-Netzwerk verbunden haben.

{% include image.html img="config_mac.png" %}

Die hier den MAC-Adressen zugeordneten Namen werden anstelle der MAC-Adressen verwendet.
die Grafiken.

# Das Panel
{: .num}

Das Panel ist über das Menü **Startseite** zugänglich.

{% include image.html img="menu_accueil.png" %}

Das Panel enthält zwei *Registerkarten*:
* Ein Eintrag namens „Powerline-Übertragungsraten“ für den Verlauf der Übertragungsraten zwischen den Powerline-Geräten
* Ein Eintrag namens „WiFi“ für den Verlauf der WLAN-Verbindungen

## Powerline-Übertragungsrate
{: .num}

Beim Öffnen zeigt die Registerkarte ein Diagramm des Durchflussverlaufs zwischen
zwei Geräte.

{% include image.html img="panel_debits_CPL.png" %}

Folgendes ist möglich:
+ Fügen Sie über die Schaltfläche „Grafik hinzufügen“ eine Grafik hinzu
+ Ändern der Quelle und des Ziels über die Auswahlfelder „von“ und „nach“
und anschließend auf die Schaltfläche „OK“ klicken.

Entdecken Sie selbst die weiteren Funktionen der Grafik.

## WLAN-Verbindungen
{: .num}

Auf dieser Registerkarte können Sie den Verlauf der WLAN-Verbindungen zu einem Zugangspunkt (AP) anzeigen:

{% include image.html img="panel_wifi_AP.png" %}

Auf dieser Registerkarte können Sie außerdem den Verlauf der WLAN-Verbindungen eines WLAN-Geräts (Clients) einsehen:

{% include image.html img="panel_wifi_client.png" %}

