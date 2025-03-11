---
layout : default
title : SmartMeterUSB
plugin : SmartMeterUSB
lang : en_US
---

The plugin integrates Devolo PLC equipment into Jeedom

> :bulb: Be careful, if you share log files, the device passwords
may appear in plain text!

# Compatible devices
{: .num}

## Manageable devices
{: .num}

The plugin uses the python module [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
The documentation for this module states that it is compatible with the following devices:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN triple
+ Magic 2 LAN DINrail
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repeater 5400
+ Repeater 3000
+ Repeater 1200
+ Repeater ac+
+ Repeater ac
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wifi
+ dLAN 550 WiFi

## Non-manageable devices
{: .num}

Devolo and third-party devices that are not included in the list of manageable devices
can be configured in the plugin. These devices are
*non-manageable* devices.

Devices for *non-manageable* devices have no commands. No action
can be performed on these devices, and no status can be reported back to
Jeedom.

In the current version of the plugin, the only use for configuring these devices
in Jeedom is to document their existence. They will probably be taken into account
in a future version when viewing transfer speeds between devices.
devices.

Templates are provided in the plugin for the following models:

+ DL1200 LAN
+ DL550 LAN
+ others

# Installing and configuring the plugin
{: .num}
Plugin configuration](/images/devolo_cpl/configuration_plugin.png)

## Plugin installation
{: .num}

The plugin is installed as standard from the Jeedom market. Once installed
then launch the installation of dependencies

## Plugin configuration
{: .num}
**Plugin**
Global plugin configuration:
    + ***Country***
    The country in which the Devolo equipment is located. This parameter is used
      to select images of devices with the correct plug type.
    + ***Equipment name without object*** : If this option is selected, images of devices with the correct plug type will be displayed.
    If this option is selected, device names in tables and graphs will not be
      and graphics will not be displayed as `[<object>][<equipment>]`but as `<equipment>`.
      `<equipment>`.

**Database**
Configuration of data management:
    + ***Retention***
    Duration for which PLC flow information is stored in the database.
      database.

**Demon**
Demon configuration:
    + ***Port***
    TCP port number used for communication between Jeedom and the daemon.
      The default port is 34741. Another port can be defined in case of
      conflict with another plugin or software that uses the same port.

    + ***Version devolo_plc_api***
    Version of python module to be used for device communication.
      Unless otherwise indicated, please use the latest version.
      Please open a topic on the Jeedom forum if you need to switch to an older version.

## Start daemon
{: .num}
After installing the dependencies and configuring the plugin,
you need to launch the daemon.

# Equipment configuration
{: .num}

Equipment for manageable devices can be created automatically
provided they are on the same network as the jeedom server and are not
are not in standby mode. Otherwise, they will have to be created manually in the same way as non-manageable
devices.

## The automatic method
{: .num}

On the plugin management page, click on the `synchronization` icon:

![Synchronization icon](/images/devolo_cpl/icones_gestion_plugin.png)

A Jeedom device is automatically created for each detected device.

+ The device serial number is configured in Jeedom. If a device with this
  with this serial number, the synchronization program does not create a new
  but updates the existing device.
+ The device name is the name configured in the device, or the serial
  if there is no configured name.
+ The device IP address is entered in the Jeedom device.
+ The device type is set in the Jeedom device and the device image is
  is selected, taking into account the country configured for the plugin.
+ Device commands are created.

## The manual method
{: .num}

On the plugin management page, click on the `Add` icon:

![Add icon](/images/devolo_cpl/icones_gestion_plugin.png)

Enter the name of the new device before accessing the device configuration page.
configuration page.

![equipment not configured](/images/devolo_cpl/equipement_non_configure.png)

You must then
+ Select the equipment type. The list of specific parameters will be
  depending on the type of equipment selected.
+ Enter the device serial number. *(If you don't know the serial
  (If you don't know the serial number, you can enter any text you like.)
+ Enter device mac address.
+ Enter device IP address. *(For manageable devices only)* + Select device type.
+ Select device type. *(For manageable devices only)* + Select device type.

> :bulb: The serial number must be unique, but for the moment, the plugin doesn't check this.

##### Manageable equipment:
![manageable_equipment_configured](/images/devolo_cpl/manageable_equipment_configure.png)

##### Non-manageable equipment:
![unmanageable_equipment_configured](/images/devolo_cpl/equipement_non_manageable_configure.png)

## Finalize configuration
{: .num}

After creating a device automatically or manually, you must
+ Enter password.
+ Configure the PLC network name (optional if you have only one PLC network).
+ Activate the device.
+ Make the usual settings for Jeedom equipment.
+ Select `Offline monitoring` if you want to get an error message when the
  equipment is unreachable (in standby mode, for example).

# Commands
{: .num}

Equipment commands are created or deleted automatically when the
the equipment model is modified. Commands are created for manageable
manageable models and deleted for non-manageable models.

Devices do not report their status changes in real time. The
info commands (with the exception of the locate command) are updated
every minute via a cron. Device info is also updated
updated when a command is sent to the device via the deamon or when the
the refresh command is activated.

### Refresh
{: .num}

The refresh command sends a message to the deamon asking the device
about its status. Info commands are updated asynchronously
when the device responds to the deamon request.

### Leds
{: .num}

+ Action commands with logicalId `leds_on` and `leds_off` are used to
  activate/deactivate the device's LEDs.
+ The command with logicalId `leds` indicates whether the leds are activated or not.
  This info is updated with information from the device.

### Locate
{: .num}

+ The `locate_on` action command activates device localization by flashing
  flashing for two minutes.
+ The `locate_off` command deactivates localization before the two-minute
  two minutes have elapsed.
+ Devices do not return information indicating whether localization is
  active or not. The `locate` info must therefore emulate the state of the device:
    + The info is set to 1 when activated by `locate_on`.
    + Info automatically returns to 0 after 2 minutes.
    + Info is set to 0 before two minutes have elapsed if the `locate_off` command is used.
      `locate_off` command is activated.
    + Info status is not modified if localization is enabled or disabled
      deactivated by software other than the plugin (e.g. Devolo cockpit).
      for example).

### Firmware versions
{: .num}

+ The `firmware` command indicates the firmware version installed in the
  the device.
+ The info command `update_available` indicates whether a firmware update is available.
  is available.
+ The info command `next_firmware` indicates the version available for upgrade.
  This info is empty if the device is up to date.

> :bulb: As my devices are all up to date, I haven't yet been able to test the `update_available` commands properly.
  the `update_available` and `next_firmware` commands. Any feedback
  via the [forum](https://community.jeedom.com) (don't forget the tag
  `plugin-devolo_cpl`) will be most welcome.

### WiFi guest activation/deactivation
{: .num}

+ The `guest_on` and `guest_off` action commands enable and disable
  Wifi Guest on Devolo devices. In the case of Wifi mesh, activating or deactivating the
  deactivation of a device's Wifi Guest is passed on to the other devices
  in the mesh network.
+ The `guest_duration` action command is used to set the duration for which the
  WiFi guest must be activated. Once this time has elapsed, the Devolo device will
  will deactivate WiFi guest. If the value of this command is 0, WiFi guest will not be
  automatically deactivated.

  The time during which WiFi guest must be activated is expressed in minutes.

  The **Devolo_cpl/J_h_m** widget displays this value in the format
  `<days> <hours>:<minutes>` (`<hours>:<minutes>` if days = 0)

  ##### Widget and popup dashboard:
  ![widget dashboard](/images/devolo_cpl/widget_dashboard.png) ![popup dashboard](/images/devolo_cpl/popup_j_h_m_dashboard.png)

  ##### Widget and mobile popup:
  ![widget dashboard](/images/devolo_cpl/widget_mobile.png) ![popup dashboard](/images/devolo_cpl/popup_j_h_m_mobile.png)
+ The info command `guest_remaining` indicates the time remaining before WiFi guest
  WiFi guest. This time is recorded in minutes.

  The **Devolo_cpl/J_h_m** widget displays this value in the format
  `<days> <hours>:<minutes>` (`<hours>:<minutes>` if days = 0)

### Online
{: .num}

+ The `online` command is a binary info that indicates whether the equipment is online or not.

# PLC data rates
{: .num}

PLC data rates are reported by devices every 5 minutes. The values are
stored in the database and are retained for the retention period
configured on the plugin configuration page.

PLC network icon](/images/devolo_cpl/icones_gestion_plugin.png)

Clicking on the "PLC networks" icon opens a modal displaying PLC rates.

![modal CPL rates](/images/devolo_cpl/modal_CPL_rates.png)

## Networks
{: .num}

If you have configured different network names in the equipment settings
the modal will contain a tab for each of these networks. This allows,
for example, to have one table for data rates between DLan devices and
another for Magic equipment.

## Data rates
{: .num}

The rows of the table represent the source devices and the columns the
destinations.

In the image above, for example, we have an 833 Mbps flow from *cplphil* to *cplbureau*.
*and 850 Mbps in the opposite direction.

Data rates are recorded every 5 minutes. The time displayed on the bottom right
of the modal indicates the time at which the data rates displayed were taken.

# WiFi connections
{: .num}

The mac addresses of WiFi clients connected to Devolo access points are uploaded to the
Jeedom plugin, which keeps a history of these connections.

## Random mac addresses
{: .num}

> :bulb: A Mac address whose second character is `2`, `6`, `A` or `E` is a random address.

Some devices use a random mac address rather than their physical mac address.
address. Since the random mac address changes with each connection, it's impossible to
connection history of these devices. **These addresses are
These addresses are therefore ignored by the plugin, which records no data about them.

Some of these devices can be configured to use a fixed address
when connecting to certain WiFi networks. You can therefore
devices to always use the same mac address when connecting to one of your
to one of your Devolo access points, while retaining the advantages of using a
using a random mac address when connecting to other networks.
networks.

This [page](https://support.plume.com/hc/fr/articles/360052070714-Comment-d%C3%A9sactiver-les-adresses-MAC-al%C3%A9atoires-sur-Android-10-)
explains how to configure an Android device to use its fixed address when
connects to your network.

## Vendor search for MAC address
{: .num}

The [macvendors.com](https://macvendors.com) site lets you find out which manufacturer
of a device or its network interface from its MAC address.

The plugin accesses this site's API to find the manufacturer of devices that have connected
connected to the Wifi interfaces of Devolo equipment.

The API is accessed with a minimum delay of one second between two calls, in order to
the two-second limit for free access. However, the plugin does not check the number of accesses per day to ensure that the limit of 1000
accesses per day is respected.

## Naming mac addresses
{: .num}

![Address icon](/images/devolo_cpl/icones_gestion_plugin.png)

The `Mac addresses` button on the plugin management page opens a modal for
managing the MAC addresses of devices connected to the Wifi network.

Config MAC](/images/devolo_cpl/config_mac.png)

The names associated with mac addresses here will be used instead of mac addresses in
graphics.

# The panel
{: .num}

The panel is accessible via the **Home** menu

![Home menu](/images/devolo_cpl/menu_accueil.png)

The panel contains only two *tabs*:
* one called `PLC data rates` for historical data rates between PLC devices
* One called `WiFi` for the history of Wifi client connections

## PLC throughput
{: .num}

When the tab is opened, it displays a graph of historical data rates between
two devices.

![panel PLC data rates](/images/devolo_cpl/panel_debits_CPL.png)

You can:
+ add a graph via the `Add a graph` button
+ change the source and destination via the `from` and `to` selectors
  then click on the `OK` button.

I'll leave you to discover the other functions of the graphic.

## WiFi connections
{: .num}

This tab displays the history of WiFi connections to an access point (AP):

![panel WiFi AP](/images/devolo_cpl/panel_wifi_AP.png)

This tab also displays the WiFi connection history of a WiFi device (client):

![panel WiFi client](/images/devolo_cpl/panel_wifi_client.png)

