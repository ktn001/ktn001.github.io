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
# Plugin {{page.plugin}} ({{page.pluginId}}) for Jeedom

> :warning: The plugin is currently in development and is therefore not yet available on the market

The {{page.plugin}} plugin manages an external device that must receive a status check periodically
from Jeedom. If no signal is received for a certain period of time, the external device shuts down
Cut the power to Jeedom for a few seconds to force a restart.

A `maintenance` mode is provided to prevent a power outage when a
Jeedom is scheduled to be unavailable.

# External equipment
{: .num}

The plugin is designed to work with the following devices:

+ [Shelly Plus 1](https://www.shelly.com/fr/products/shelly-plus-1-x1)
+ [Shelly 1 Gen3](https://www.shelly.com/fr/products/shelly-1-gen3)
+ [Shelly 1 Mini Gen3](https://www.shelly.com/fr/products/shelly-1-mini-gen3)
+ [Shelly 1 Gen4](https://www.shelly.com/fr/products/shelly-1-gen4)
+ [Shelly 1 Mini Gen4 ](https://www.shelly.com/fr/products/shelly-1-mini-gen4)

> :bulb: The plugin has been tested with a **Shelly Plus 1** and a **Shelly Gen4**. Any feedback
Experience with other devices is welcome.

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
1. Proceed to the Wi-Fi setup described below.
1. The access point will be disabled after 5 minutes. You will then need to repeat this
Procedure if Wi-Fi has not been configured.

> :bulb: You can also use the *Shelly Smart Control* app to connect via
> Bluetooth and enable the AP.

### Wi-Fi Setup
{: .num}

To set up the Shelly's Wi-Fi, you need to
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

# Creating and Configuring a Device

You can configure a device from the **plugins → Monitoring → jeewatchdog** menu. The
The **Add** button lets you create a new device; clicking on a device opens its page
setup.

{% include image.html img=page.img10 %}

In addition to the standard Jeedom configuration settings, a few specific settings must be
must be configured:

+ ***Equipment Model***\
The Shelly device model.
+ ***Switch IP address***\
Shelly's IP address (a DNS name is also accepted).
+ ***Password***\
Shelly password
+ ***Maximum Inactivity Time***\
Power to the Jeedom will be cut off for a few seconds if Jeedom does not send a *kick* during this
timeout. This duration is expressed in minutes.
+ ***Shut-off time***\
Duration, in seconds, of the power outage.
+ ***Kick Trigger***\
Specifies whether the Kick should be sent to Shelly via a **cron** job and a **scenario**. See explanations
below
+ ***Configure Switch Button***\
Button to send the configuration to Shelly. The device must have been backed up beforehand
Click this button.

> :warning: Don't forget to click the **Configure Switch** button after saving
> the device if a watchdog setting has been changed.

# Commands
{: .num}

The following two commands are created for each device:

1. *LogicalId*: **{{page.maintenance}}**\
*type*: **{{page.info}}**\
*subtype*: **{{page.binary}}**\
Indicates the position of the maintenance switch.

1. *LogicalId*: **{{page.kick}}**\
*type*: **{{page.action}}**\
*subtype*: **{{page.other}}**\
Command to send a message to Shelly to reset the counter.

# The Kick Trigger
{: .num}

Kicks can be triggered by a cron job or a scenario

## Cron
{: .num}

The plugin creates a cron job that will trigger a Kick at regular intervals. The frequency of this cron job depends on the
Value of the **Max Inactivity Time** parameter:

<table>
<tr><td>1 minute</td><td>If <b>max time</b> <= 10 minutes</td></tr>
<tr><td>3 minutes</td><td>If 10 minutes < <b>max time</b> <= 15 minutes</td></tr>
<tr><td>5 minutes</td><td>If 15 minutes < <b>max time</b> <= 30 minutes</td></tr>
<tr><td>10 minutes</td><td>If 30 minutes < <b>max time</b></td></tr>
</table>
	
## The Scenario
{: .num}

Using a scenario allows you to run tests to verify more precisely whether Jeedom
works properly when you send a kick.

Here is an example of a scenario that will send a trigger only if a Zigbee device has been activated:

{% include image.html img=page.img11 %}

This scenario will run periodically (every 3 minutes, for example) and immediately after the
Starting Jeedom.

{% include image.html img=page.img12 %}

<!--
vim: textwidth=100 colorcolumn=101
-->
