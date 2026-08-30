---
layout : default
pluginId : devolo_cpl
plugin : devolo_cpl
lang: en_US
img01: 01_configuration_plugin.png
img02: 02_icones_gestion_plugin.png
img03: 03_equipement_non_configure.png
img04: 04_equipement_manageable_configure.png
img05: 05_equipement_non_manageable_configure.png
img06: 06_widget_dashboard.png
img07: 07_widget_mobile.png
img08: 08_popup_j_h_m_dashboard.png
img09: 09_popup_j_h_m_mobile.png
img10: 10_modal_CPL_rates.png
img11: 11_btn_cmd_debit.png
img12: 12_nouvelles_commandes.png
img13: 13_check_debitCmds.png
img14: 14_config_mac.png
img15: 15_menu_accueil.png
img16: 16_panel_debits_CPL.png
img17: 17_panel_wifi_AP.png
img18: 18_panel_wifi_client.png
---
# "devolo_cpl" plugin for Jeedom

The plugin allows you to integrate Devolo PLC devices into Jeedom

> :bulb: Be careful if you share log files—the passwords for the
Devices may be listed in plain text!

# Compatible devices
{: .num}

## Manageable devices
{: .num}

The plugin uses the Python module [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
The documentation for this module specifies that it is compatible with the following devices:

+ Magic 2 WiFi Next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN Triple
+ Magic 2 LAN DIN rail
+ Magic 2 LAN 1-1
+ Magic 1 WiFi Mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repeater 5400
+ Repeater 3000
+ Repeater 1200
+ AC+ Repeater
+ AC repeater
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wi-Fi
+ dLAN 550 WiFi

## Unmanaged devices
{: .num}

Devices—whether from Devolo or other brands—that are not included in the device list
Manageable devices can be configured in the plugin. These devices are
*not manageable*.

Devices for *unmanageable* devices have no commands. No action
cannot therefore be performed on these devices, and no status can be reported to
Jeedom.

In the current version of the plugin, the only reason to configure these devices
in Jeedom is to document their existence. They will likely be taken into account
in a future version when viewing transfer speeds between the
devices.

The plugin includes templates for the following models:

+ DL1200 LAN
+ DL550 LAN
+ other

# Installing and configuring the plugin
{: .num}


## Installing the plugin
{: .num}

The plugin installs in the standard way from the Jeedom Market. After installing it
Once installed, you need to activate it and then run the installation of the dependencies

## Plugin Configuration
{: .num}

{% include image.html img=img01 %}

+ **Plugin**
: General plugin settings:
    + ***Country***
: The country where the Devolo devices are located. This setting is used
to select images of devices with the correct type of outlets.
    + ***Device names without the "object" prefix***
: If this option is selected, the names of the devices in the tables
and graphics will not be displayed in the format `[<object>][<device>]` but
`<equipment>`.

+ **Database**
: Configuring data management:
    + ***Retention***
: The length of time that PLC traffic data is retained in the database
data.

+ **Demon**
: Daemon configuration:
    + ***Port***
: TCP port number used for communication between Jeedom and the daemon.
Port 34741 is configured by default. Another port can be set by
in case of a conflict with another plugin or software that uses the same port.

+ **Logs**
: Log Configuration
    + ***Discreet***
: Sensitive data (passwords, etc.) is redacted from the logs.
> :warning: Sensitive data has not (yet) been stripped from the daemon's logs! Sensitive data (passwords, etc.) is stripped from the logs.
    + ***Full Debug***
: The daemon's Python module logs are not set to debug mode unless this option is
enabled. Enabling this option may cause the daemon's logs to become very verbose if the plugin
is set to "debug" mode.

+ **Speed Information**
    + ***Upstream flow***
: Indicates whether commands should be created to limit the upstream PLC power (toward the
other equipment).
    + ***Downstream Flows***
: Indicates whether commands should be created for the downstream PLC data streams
(from other devices).

## Launching the daemon
{: .num}
After installing the dependencies and configuring the plugin,
You need to start the daemon.

# Device Setup
{: .num}

Equipment for manageable devices can be created automatically
provided that they are on the same network as the Jeedom server and that they
are not in standby mode. Otherwise, you'll have to create them manually, just like the devices
unmanageable.

## The automatic method
{: .num}

On the plugin's settings page, click the `synchronization` icon:

{% include image.html img=img02 %}

A Jeedom device is automatically created for each detected device.

+ The device's serial number is configured in Jeedom. If there is already a
For devices with this serial number, the synchronization program does not create
Not new equipment, but an update to existing equipment.
+ The device name is the name configured in the device or the number
serial number if no name has been configured.
+ The device's IP address is entered in the Jeedom system.
+ The device type is specified in the Jeedom equipment, and the image of
The equipment is selected based on the country configured for the plugin.
+ The device commands have been created.

## The manual method
{: .num}

On the plugin management page, click the `Add` icon:

{% include image.html img=img02 %}

You must enter the name of the new device before accessing the page
equipment setup.

{% include image.html img=img03 %}

You must then
+ Select the type of equipment. The list of specific settings will be
tailored to the type of equipment selected.
+ Enter the device's serial number. *(If you don't know the serial number
(by default, you can enter any text.)*
+ Enter the device's MAC address.
+ Enter the device's IP address. *(For managed devices only)*
+ Select the device type. *(For manageable devices only)*

> :bulb: The serial number must be unique, but for now, the plugin doesn't check for it.

##### Manageable devices:
{% include image.html img=img04 %}

##### Unmanageable equipment:
{% include image.html img=img05 %}

## Finalizing the configuration
{: .num}

After creating a device automatically or manually, you must
+ Enter the password.
+ Set the PLC network name (optional if you have only one PLC network)
+ Turn on the device.
+ Perform the standard configuration steps for Jeedom devices.
+ Select `Offline Monitoring` if you want to receive an error message when
The device is unreachable (e.g., in standby mode).

# Commands
{: .num}

Commands other than flow rate commands are created or deleted automatically
when the equipment model is changed. Commands are created for the models
manageable ones and removed for non-manageable models.

Devices do not report status changes in real time. The
Info-type commands (with the exception of the locate command) have been updated
every minute via a cron job. The information for a device is also
updated when a command is sent to the device via the daemon or when
The refresh command is enabled.

## Refresh
{: .num}

The refresh command sends a message to the daemon so that it can query the device
based on their status. Information-type commands are updated asynchronously
when the device responds to the daemon's request.

## LEDs
{: .num}

+ The action commands with the logicalIDs `leds_on` and `leds_off` allow you to
to turn the device's LEDs on or off.
+ The command with the logicalId `leds` indicates whether the LEDs are on or off.
This information is updated with data reported by the device.

## Locate
{: .num}

+ The `locate_on` action command makes the device's location feature active by doing
The device's PLC LED will flash for two minutes.
+ The `locate_off` action disables location tracking before it expires
in two minutes.
+ The devices do not return information indicating whether the location is
whether it is active or not. The `locate` information must therefore reflect the device's status:
    + The flag is set to 1 when activated by `locate_on`.
    + The information automatically resets to 0 after 2 minutes.
    + The status is reset to 0 before the two minutes expire if the command
`locate_off` is enabled.
    + The status of the information is not changed if location is enabled or
disabled by software other than the plugin (by Devolo Cockpit, by
(example).

## Firmware versions
{: .num}

+ The `firmware` info command displays the version of the firmware installed in
the device.
+ The `update_available` command indicates whether a firmware update is available
is available.
+ The `next_firmware` command shows the version available for an upgrade.
This field is empty if the device is up to date.

> :bulb: Since all my devices are up to date, I haven't been able to test it properly yet
The `update_available` and `next_firmware` commands. Any feedback?
via the [forum](https://community.jeedom.com) (don't forget the tag
`plugin-devolo_cpl`) would be greatly appreciated.

## Enable/disable guest Wi-Fi
{: .num}

+ The `guest_on` and `guest_off` actions are used to turn on and turn off
Devolo devices' Guest Wi-Fi. In the case of Wi-Fi mesh systems, enabling or
Disabling Guest Wi-Fi on one device affects the other devices
mesh network.
+ The `guest_duration` action command allows you to configure the duration during which
Guest Wi-Fi must be enabled. Once this time has elapsed, the Devolo device
will disable guest Wi-Fi. If the value of this command is 0, guest Wi-Fi will not
will not be automatically disabled.

The duration for which the guest Wi-Fi should be enabled is expressed in minutes.

The **Devolo_cpl/J_h_m** widget displays this value in the format
`<days> <hours>:<minutes>` (`<hours>:<minutes>` if days = 0)

##### Dashboard widgets and pop-ups:
{% include image.html img=img06 %} {% include image.html img=img08 %}

##### Mobile widgets and pop-ups:
{% include image.html img=img07 %} {% include image.html img=img09 %}
+ The `guest_remaining` info command shows the time remaining before deactivation
for the guest Wi-Fi. This duration is recorded in minutes.

The **Devolo_cpl/J_h_m** widget displays this value in the format
`<days> <hours>:<minutes>` (`<hours>:<minutes>` if days = 0)

## Online
{: .num}

+ The `online` command is a binary value that indicates whether the device is online or not.

## Data Rates
{: .num}

+ Commands for controlling the data flow between PLC devices can be created. See below for more information.

# Powerline Communication (PLC) Data Rates
{: .num}

Powerline communication (PLC) data is retrieved from the devices every 5 minutes. The values are
stored in the database and retained for the retention period
configured on the plugin's settings page.

{% include image.html img=img02 %}

Clicking the `Powerline Networks` icon opens a modal window displaying powerline speeds.

{% include image.html img=img10 %}

## Networks
{: .num}

If you have configured different network names in the settings for
equipment, the modal will contain a tab for each of these networks. This allows,
For example, having a table showing the data transfer rates between DLAN devices and
another one for Magic devices.

## Data Rates
{: .num}

The rows of the table represent the source devices, and the columns represent the
destinations.

In the image above, we have an 833 Mbps stream from *cplphil* to
*cplbureau* and 850 Mbps in the reverse direction.

Flow rates are recorded every 5 minutes. The time is displayed in the lower right corner.
The "Modal" field indicates the time at which the displayed flow rates were recorded.

## Flow controls
{: .num}

### Creating Commands
{: .num}

If the corresponding option has been enabled in the plugin's settings, buttons for
The creation of flow rate commands for upstream and downstream flows is displayed on
the equipment command management page.

{% include image.html img=img11 %}

Clicking these buttons adds a command to the device's list of commands.
The logicalId of the new command is `rate_upload` (outgoing data rates) or
`rate_download` (download speed).

{% include image.html img=img12 %}

You must then enter a name for the command and verify that the target device
(**Flow to:** or **Flow from:**) is correct before saving the device.

### Checking the Consistency of Commands
{: .num}

The `Flow Commands` button opens a popup with a list of inconsistencies in the
flow control commands.

{% include image.html img=img02 %}

{% include image.html img=img13 %}

### Notes
{: .num}

+ **Redundancy:**\
A debit command for the amount from A to B will be redundant with the debit command
going down from A to B.

+ **Unmanaged data flow between devices**\
These flows cannot be measured.

+ **Data flow between a manageable device and a non-manageable device**\
The flow rate commands for unmanageable equipment are set to the values
data retrieved from the manageable device

# Wi-Fi Connections
{: .num}

The MAC addresses of Wi-Fi clients connected to Devolo access points are
logged in the Jeedom plugin, which maintains a history of these connections.

## Random MAC addresses
{: .num}

> :bulb: A MAC address whose second character is **2**, **6**, **A**, or **E** is a random address.

Some devices use a random MAC address instead of their own MAC address
physical. Since the random MAC address changes with every connection, it is
It is impossible to view a history of connections for these devices. **These addresses are
and are therefore ignored by the plugin, which does not record any data about them.**

Some of these devices can be configured to use a static IP address
when they connect to certain Wi-Fi networks. This means you can
so that these devices always use the same MAC address when they
connect to one of your Devolo access points while retaining the benefits of
Using a random MAC address when connecting to other devices
networks.


## Search for the vendor based on a MAC address
{: .num}

The [macvendors.com](https://macvendors.com) website helps you find out who the manufacturer is
of a device or its network interface based on the MAC address.

The plugin accesses this site's API to identify the manufacturer of the devices that have
connected to the Wi-Fi interfaces of Devolo devices.

Access to the API requires a minimum delay of one second between calls to
Adhere to the two-second limit for free access. However, the plugin does not check
not the number of accesses during a day to ensure that the limit of 1,000 accesses per day is
complied with.

## Mapping Names to MAC Addresses
{: .num}

{% include image.html img=img02 %}

The `MAC Addresses` button on the plugin's management page opens a modal to
Management of MAC addresses for devices that have connected to the Wi-Fi network.

{% include image.html img=img14 %}

The names associated here with the MAC addresses will be used in place of the MAC addresses
graphs.

# The panel
{: .num}

The panel can be accessed via the **Home** menu

{% include image.html img=img15 %}

The panel contains two *tabs*:
* A feature called `Powerline Speeds` for viewing the history of data transfer rates between powerline devices
* A variable named `WiFi` for the history of Wi-Fi client connections

## Powerline Communication Speed
{: .num}

When opened, the tab displays a graph showing the flow rate history between
two devices.

{% include image.html img=img16 %}

It is possible to:
+ To add a chart using the `Add a Chart` button
+ To change the source and destination using the `from` and `to` selectors
and then clicking the `OK` button.

I'll let you explore the other features of the graph.

## Wi-Fi Connections
{: .num}

This tab lets you view the history of Wi-Fi connections to an access point (AP):

{% include image.html img=img17 %}

This tab also allows you to view the Wi-Fi connection history for a Wi-Fi device (client):

{% include image.html img=img18 %}

