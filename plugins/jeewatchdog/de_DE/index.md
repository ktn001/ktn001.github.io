---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: de_DE

img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
img05: 05_configure_Wifi.png
img06: 06_configure_Wifi_static.png
img07: 07_menu_authentication.png
img08: 08_set_passord.png
img09: 09_configuration_plugin.png
img10: 10_configuration_equipement.png
img11: 11_scenario.png
img12: 12_declenchement_scenario.png

action: action
binary: binary
info: info
kick: kick
maintenance: maintenance
other: other
---
# Plugin {{page.plugin}} ({{page.pluginId}}) für Jeedom

> :warning: Das Plugin befindet sich derzeit in der Entwicklung und ist daher noch nicht im Market verfügbar

Das Plugin {{page.plugin}} verwaltet ein externes Gerät, das regelmäßig ein Lebenszeichen empfangen muss
von Jeedom. Wenn über einen bestimmten Zeitraum kein Lebenszeichen empfangen wird, schaltet sich das externe Gerät ab
die Stromversorgung von Jeedom für einige Sekunden unterbrechen, um einen Neustart zu erzwingen.

Es ist ein `Wartungsmodus` vorgesehen, um zu verhindern, dass die Stromversorgung unterbrochen wird, wenn eine
Es ist mit einer Unterbrechung des Jeedom-Dienstes zu rechnen.

# Externe Geräte
{: .num}

Das Plugin ist für die Verwendung mit folgenden Geräten vorgesehen:

+ [Shelly plus 1](https://www.shelly.com/fr/products/shelly-plus-1-x1)
+ [Shelly 1 Gen3](https://www.shelly.com/fr/products/shelly-1-gen3)
+ [Shelly 1 Mini Gen3](https://www.shelly.com/fr/products/shelly-1-mini-gen3)
+ [Shelly 1 Gen4](https://www.shelly.com/fr/products/shelly-1-gen4)
+ [Shelly 1 Mini Gen4 ](https://www.shelly.com/fr/products/shelly-1-mini-gen4)

> :bulb: Das Plugin wurde mit einem **Shelly Plus 1** und einem **Shelly Gen4** getestet. Jegliches Feedback
Erfahrungen mit anderen Geräten sind willkommen.

## Schaltplan der Anlage
{: .num}

Das Watchdog-Gerät kann so konfiguriert werden, dass es eine USB- oder 220-V~-Stromversorgung unterbricht.

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

Ich habe eine Anlage mit den folgenden Komponenten aufgebaut:
* [Zwei USB-C-Anschlüsse](https://de.aliexpress.com/item/1005009033490471.html)
* [Ein Schalter](https://de.aliexpress.com/item/1005012383637177.html)
* [Ein 220-V-Stecker](https://de.aliexpress.com/item/1005012625139658.html)
* [Ein 220-V-Kabel](https://de.aliexpress.com/item/1005011606233857.html)
* [Ein Gehäuse](https://de.aliexpress.com/item/1005006900224809.html) (Modell 58-80-26)
* Ein Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Vorkonfiguration des Shelly
{: .num}

Sobald die Verkabelung fertig ist, können Sie den Shelly mit Strom versorgen und eine feste IP-Adresse konfigurieren sowie
Legen Sie ein Passwort fest (das Passwort ist nicht obligatorisch, wird jedoch dringend empfohlen). Der Rest der
Die Konfiguration erfolgt über das Plugin {{page.plugin}}

> :bulb: Schalten Sie Jeedom erst dann über dieses Gerät ein, wenn Sie die Konfiguration von
> die Geräte im Plugin

### Aktivierung des Access-Points
{: .num}

Überprüfen Sie, ob Sie über ein WLAN-Netzwerk verfügen, dessen SSID etwa wie folgt lautet: `Shelly<YYY>-<MAC>` (<YYY> steht für
nach dem Shelly-Modell (<MAC> ist die MAC-Adresse des Shelly).

Wenn Sie ein Netzwerk für Ihr Shelly-Gerät gefunden haben, ist der Access-Point bereits aktiviert und Sie können
Zur WLAN-Konfiguration wechseln

Wenn Sie dieses Netzwerk nicht gefunden haben, liegt das wahrscheinlich daran, dass die Firmware-Version 2.0.0 ist.
(oder mehr) und Ihr Shelly ist ein Gen4. In diesem Fall ist Zigbee standardmäßig aktiviert und der Zugriff
Der Access Point ist deaktiviert. Sie können den Access Point mit dem folgenden Verfahren aktivieren:
1. Drücken Sie die physische Taste auf der Rückseite des Shelly und **halten Sie sie 10 Sekunden lang gedrückt**
Sekunden**
1. Wenn Sie die Taste loslassen, erlischt die LED für 2 bis 3 Sekunden und blinkt anschließend schnell.
1. Drücken Sie die physische Taste erneut **genau 5 Sekunden lang**
1. Die LED blinkt langsam, solange das WLAN-Netzwerk „Shelly<yyy>-<MAC>“ sichtbar ist
1. Fahren Sie mit der unten beschriebenen WLAN-Konfiguration fort.
1. Der Access Point wird nach 5 Minuten deaktiviert. Sie müssen diesen Vorgang dann erneut durchführen.
Vorgehensweise, falls das WLAN noch nicht konfiguriert wurde.

> :bulb: Es ist auch möglich, die App *Shelly Smart Control* zu verwenden, um eine Verbindung über
> Bluetooth aktivieren und den AP einschalten.

### WLAN-Einrichtung
{: .num}

Um das WLAN des Shelly zu konfigurieren, müssen Sie
1. Mit dem eigenen Access Point verbinden (SSID: „Shelly...-...“)
1. Die WB-Seite öffnen: http://192.168.33.1
1. Klicken Sie im Menü auf der linken Seite auf „Einstellungen“
1. Klicken Sie im mittleren Bereich der Seite auf „WLAN“
1. Im Bereich „Wi-Fi 1 settings“
   * Wählen Sie das WLAN-Netzwerk aus und geben Sie das Passwort ein

{% include image.html img=page.img05 %}

   * Falls Sie keinen DHCP-Server mit einer für Shelly reservierten IP-Adresse haben
      + Wählen Sie „Static IP“ aus
      + Netzwerkkonfigurationsdaten eingeben

{% include image.html img=page.img06 %}

1. Klicken Sie auf „Einstellungen speichern“

**Sie können sich wieder mit Ihrem WLAN-Netzwerk verbinden.**

### Einrichtung des Administrator-Passworts
1. Die Webseite unter der neuen Adresse von Shelly öffnen
1. Klicken Sie im Menü auf der linken Seite auf „Einstellungen“
1. Klicken Sie im mittleren Bereich der Seite (unter **Geräteeinstellungen**) auf „Authentifizierung“

{% include image.html img=page.img07 %}
1. Wählen Sie „Passwortgeschütztes Gerät aktivieren“ aus
1. Passwort eingeben

{% include image.html img=page.img08 %}
1. Klicken Sie auf „Einstellungen speichern“

# Installation und Konfiguration des Plugins
{: .num}

Das Plugin lässt sich ganz einfach über den Market installieren. Es hat weder Abhängigkeiten noch einen Daemon und erfordert keinerlei
Einrichtung. Nach der Installation muss es lediglich aktiviert werden.

{% include image.html img=page.img09 %}

# Erstellung und Konfiguration eines Geräts

Die Konfiguration eines Geräts erfolgt über das Menü **Plugins → Monitoring → jeewatchdog**. Das
Mit der Schaltfläche **Hinzufügen** können Sie ein neues Gerät erstellen. Ein Klick auf ein Gerät öffnet dessen Seite
Konfiguration.

{% include image.html img=page.img10 %}

Neben den Standardkonfigurationsparametern von Jeedom müssen einige spezifische Parameter
müssen konfiguriert werden:

+ ***Ausstattungsvariante***\
Das Modell des Shelly-Geräts.
+ ***IP-Adresse des Switches***\
IP-Adresse des Shelly (ein DNS-Name wird ebenfalls akzeptiert).
+ ***Passwort***\
Passwort für Shelly
+ ***Maximale Inaktivitätszeit***\
Die Stromversorgung des Jeedom wird für einige Sekunden unterbrochen, wenn Jeedom während dieser Zeit keinen *Kick* gesendet hat
Verzögerungszeit. Diese Dauer wird in Minuten angegeben.
+ ***Abschaltzeit***\
Dauer der Stromunterbrechung in Sekunden.
+ ***Kick-Auslöser***\
Gibt an, ob der Kick über einen **Cron** und ein **Szenario** an Shelly gesendet werden soll. Siehe Erläuterungen
weiter unten
+ ***Schaltfläche „Switch konfigurieren“***\
Schaltfläche zum Senden der Konfiguration an den Shelly. Das Gerät muss zuvor gespeichert worden sein.
Klicken Sie auf diese Schaltfläche.

> :warning: Vergessen Sie nicht, nach dem Speichern auf die Schaltfläche **Schalter konfigurieren** zu klicken
> das Gerät, falls eine Watchdog-Einstellung geändert wurde.

# Die Befehle
{: .num}

Für jedes Gerät werden die folgenden beiden Befehle erstellt:

1. *LogicalId*: **{{page.maintenance}}**\
*Typ*: **{{page.info}}**\
*Untertyp*: **{{page.binary}}**\
Zeigt die Position des Wartungsschalters an.

1. *LogicalId*: **{{page.kick}}**\
*Typ*: **{{page.action}}**\
*Untertyp*: **{{page.other}}**\
Befehl zum Senden einer Nachricht an Shelly, um den Zähler zurückzusetzen.

# Der Kick-Auslöser
{: .num}

Kicks können über einen Cron-Job oder ein Szenario ausgelöst werden

## Der Cron
{: .num}

Das Plugin erstellt einen Cron-Job, der regelmäßig einen Kick auslöst. Die Häufigkeit dieses Cron-Jobs hängt von der
Wert des Parameters **Maximale Inaktivitätszeit**:

<table>
<tr><td>1 Minute</td><td>Wenn <b>maximale Zeit</b> <= 10 Minuten</td></tr>
<tr><td>3 Minuten</td><td>Wenn 10 Minuten < <b>maximale Zeit</b> <= 15 Minuten</td></tr>
<tr><td>5 Minuten</td><td>Wenn 15 Minuten < <b>maximale Zeit</b> <= 30 Minuten</td></tr>
<tr><td>10 Minuten</td><td>Wenn 30 Minuten < <b>Maximale Zeit</b></td></tr>
</table>
	
## Das Szenario
{: .num}

Mithilfe eines Szenarios lassen sich Tests durchführen, um genauer zu überprüfen, ob Jeedom
funktioniert einwandfrei, wenn man einen Kick sendet.

Hier ist ein Beispiel für ein Szenario, bei dem nur dann ein Signal gesendet wird, wenn ein Zigbee-Gerät aktiviert werden konnte:

{% include image.html img=page.img11 %}

Dieses Szenario wird regelmäßig (beispielsweise alle 3 Minuten) und unmittelbar nach dem
Jeedom starten.

{% include image.html img=page.img12 %}

<!--
vim: textwidth=100 colorcolumn=101
-->
