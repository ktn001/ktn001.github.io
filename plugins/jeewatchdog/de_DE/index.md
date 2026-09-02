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

Derzeit sind nur Geräte kompatibel, die auf einem [**Shelly plus] basieren
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (Support für [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) ist in Kürze geplant)

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

### WLAN-Einrichtung
{: .num}

Um das WLAN des Shelly zu konfigurieren, müssen Sie
1. Das Gerät einschalten.
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

# Einrichtung des Plugins
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
