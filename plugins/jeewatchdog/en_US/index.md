---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: en_US
img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
img05: 05_configure_Wifi.png
img06: 06_configure_Wifi_static.png
img07: 07_menu_authentication.png
img08: 08_set_passord.png
img09: 09_configuration_plugin.png
---
# Plugin {{page.plugin}} ({{page.pluginId}}) for Jeedom

> :warning: The plugin is currently in development and is therefore not yet available on the market

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

### Enabling the access point
{: .num}

Check to see if you have a Wi-Fi network with an SSID like `Shelly<YYY>-<MAC>` (<YYY> corresponds to
for the Shelly model, <MAC> is the Shelly's MAC address).

If you've found a network for your Shelly, the access point is already enabled, and you can
Go to Wi-Fi settings

If you can't find this network, it's probably because the firmware version is 2.0.0
(or more) and your Shelly is a Gen4. In this case, Zigbee is enabled by default, and access
The access point is disabled. You can enable the access point by following these steps:

1. Press the physical button on the back of the Shelly and **hold it down for 10
seconds**
1. When you release the button, the LED turns off for 2 to 3 seconds and then flashes rapidly.
1. Press the physical button again **for exactly 5 seconds**
1. The LED flashes slowly, indicating that the `Shelly<yyy>-<MAC>` Wi-Fi network is visible

> :bulb: You can also use the *Shelly Smart Control* app to connect via
> Bluetooth and enable the AP.

### Wi-Fi Setup
{: .num}

To set up the Shelly's Wi-Fi, you need to
1. Turn it on.
1. Connect to your access point (SSID: "Shelly...-...")
1. Open the WB page at http://192.168.33.1
1. Click `Settings` in the menu on the left
1. Click `Wi-Fi` in the center of the page
1. In the `Wi-Fi 1 settings` panel
   * Select the Wi-Fi network and enter the password

{% include image.html img=page.img05 %}

   * If you don't have a DHCP server with a reserved IP address for Shelly
      + Select `Static IP`
      + Enter network configuration information

{% include image.html img=page.img06 %}

1. Click "Save settings"

**You can reconnect to your Wi-Fi network.**

### Setting the administrator password
1. Open the web page at Shelly's new address
1. Click `Settings` in the menu on the left
1. Click `Authentication` in the center of the page (under **Device Settings**)

{% include image.html img=page.img07 %}
1. Select `Enable password-protected device`
1. Enter a password

{% include image.html img=page.img08 %}
1. Click `Save Settings`

# Installing and configuring the plugin
{: .num}

The plugin can be easily installed via the Market. It has no dependencies or daemons and requires no
Setup. Just activate it after installation.

{% include image.html img=page.img09 %}


<!--
vim: textwidth=100 colorcolumn=101
-->
