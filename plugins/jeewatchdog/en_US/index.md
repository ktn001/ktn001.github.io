---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: en_US
img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
---
# Plugin {{page.plugin}} ({{page.pluginId}}) for Jeedom

The {{page.plugin}} plugin manages an external device that must receive a status check periodically
from Jeedom. If no signal is received for a certain period of time, the external device shuts down
Cut the power to Jeedom for a few seconds to force a restart.

A `maintenance` mode is provided to prevent a power outage when a
Jeedom is scheduled to be unavailable.

# External equipment
{: .num}

For now, only devices built around a [**Shelly plus
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (support for [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) is coming soon)

## Equipment Wiring Diagram
{: .num}

The watchdog device can be configured to cut off a USB or 220V~ power supply

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

I built a system using the following components:
* [Two USB-C ports](https://de.aliexpress.com/item/1005009033490471.html)
* [A switch](https://de.aliexpress.com/item/1005012383637177.html)
* [A 220V connector](https://de.aliexpress.com/item/1005012625139658.html)
* [A 220V cable](https://de.aliexpress.com/item/1005011606233857.html)
* [A box](https://de.aliexpress.com/item/1005006900224809.html) (model 58-80-26)
* A Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Shelly Preconfiguration
{: .num}

Once the wiring is complete, you can power on the Shelly and configure a static IP address for it, and
Set a password (a password is not required but is strongly recommended). The rest of the
Configuration will be performed by the {{page.plugin}} plugin

> :bulb: Do not power Jeedom through this device until you have finished configuring
> Equipment in the plugin

# Plugin Configuration
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
