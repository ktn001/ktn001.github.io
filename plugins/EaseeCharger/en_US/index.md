---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : en_US

img01: 01_plugin_configuration.png
img02: 02_icone_creation_compte.png
img03: 03_saisie_login_password.png
img04: 04_icone_creation_chargeur.png
img05: 05_saisie_nom_chargeur.png
img06: 06_parametrage_chargeur.png
img07: 07_btn_reconfig_cmds.png
img08: 08_etat_0.png
img09: 09_etat_1.png
img10: 10_etat_2.png
img11: 11_etat_3.png
img12: 12_etat_4.png
img13: 13_etat_5.png
img14: 14_widget_etat_option_notext.png
img15: 15_etat_5_notext.png
img16: 16_widget_lock_0_d_bw.png
img17: 17_widget_lock_0_d_color.png
img18: 18_widget_lock_0_l_bw.png
img19: 19_widget_lock_0_l_color.png
img20: 20_widget_lock_1_d_bw.png
img21: 21_widget_lock_1_d_color.png
img22: 22_widget_lock_1_l_bw.png
img23: 23_widget_lock_1_l_color.png
img24: 24_widget_lock_2_d_bw.png
img25: 25_widget_lock_2_d_color.png
img26: 26_widget_lock_2_l_bw.png
img27: 27_widget_lock_2_l_color.png
img28: 28_widget_lock_3_d_bw.png
img29: 29_widget_lock_3_d_color.png
img30: 30_widget_lock_3_l_bw.png
img31: 31_widget_lock_3_l_color.png
img32: 32_btn_continue.png
img33: 33_btn_pause.png

action: action
info: info
other: other
binary: binary
numeric: numeric
---

# "EaseeCharger" plugin for Jeedom

The **EaseeCharger** plugin allows you to integrate `Easee` chargers for electric vehicles into
a Jeedom instance.

Information about `Easee` chargers is available on the [Easee](https://easee.com) website

# Installing and configuring the plugin
{: .num}
{% include image.html img=page.img01 %}

## Installing the plugin
{: .num}

The plugin installs in the standard way from the Jeedom Market. After installing it, you need to
Enable it, then start installing the dependencies.

## Plugin Configuration
{: .num}

**Demon**
: Daemon settings:
    + ***Port***
: The TCP port number used for communication between Jeedom and the daemon. Port 34739 is
Set by default; another port can be specified in case of a conflict with another plugin or
software that uses the same port.

    + ***Extended Debugging***
: The Python module of the daemon that handles communication with the Easee cloud sends "pings"
every 5 seconds to maintain the connection. Each "ping," and its responses, generate 5
`debug`-level log messages. These log messages are suppressed when the **Debug** option is enabled.
Extended** is not enabled.

**Security**
: + ***Unsecured log***
: Sensitive data (passwords, tokens, etc.) is replaced in the logs with
`********`. The "**Unsecured Log**" option disables replacement and leaves the data
sensitive information appearing in plain text in the logs.

## Heartbeat Configuration
{: .num}

Sometimes the data stream from the Easse cloud is interrupted without the connection
is not interrupted. The daemon does not detect this type of situation and therefore cannot handle it.

To work around this issue, a heartbeat is automatically configured when the
plugin. The daemon is automatically restarted by the heartbeat if the daemon has not reported back
data in Jeedom for more than 15 minutes.

# Accounts
{: .num}

An account provides access to the Easee cloud to manage one or more chargers. An account must be
must be declared in the plugin before you can create a charger device that will be managed through this account.

## Create an Account
{: .num}

1. On the plugin's management page, click the icon to create an account:\
{% include image.html img=page.img02 %}

1. Enter an account name, username, and password to log in to the cloud and activate the account\
{% include image.html img=page.img03 %}

1. Click `Confirm`.
  > :bulb: The username and password are verified during registration only if the account is
enabled.

## How Accounts Work
{: .num}

### Deleting an account
{: .num}

An account cannot be deleted if it is being used by at least one charger.

### Changing Your Login or Password
{: .num}

A new token is created and automatically sent to the daemon.

# Chargers
{: .num}

## Creating a charger
{: .num}

> :bulb: An account must be created before creating a charger

1. On the plugin's management page, click the icon to create a charger:\
{% include image.html img=page.img04 %}

1. Enter the name of the charger\
{% include image.html img=page.img05 %}

1. Configure the charger\
A charger is a Jeedom device. In addition to the basic options (name, object, category, option)
For the equipment, the following configurations must be set:

{% include image.html img=page.img06 %}

   + **Account**\
The account that must be used to communicate with the Easee server.

   + **Serial Number**\
The serial number as it should be entered, for example, in the Easee smartphone app.

   + **Custom widget**\
Do not use the standard Jeedom widget; use the specific widget for devices instead
EaseeCharger.

   + **Color**\
Charger color. Allows you to set the charger's image.

1. Click `Confirm`.

## Commands
{: .num}

Loaders are created using the following commands:

| Name | Type | Subtype | Description |
| --- | ---- | --------- | ----------- |
| refresh | {{page.action}} | {{page.other}} | Refreshes all information |
| Pause ON | {{page.action}} | {{page.other}} | Pauses the load |
| Pause OFF | {{page.action}} | {{page.other}} | Resume charging |
| On pause | {{page.info}} | {{page.binary}} | Indicates whether the load is on pause |
| Permanent Lock ON | {{page.action}} | {{page.other}} | Enable Permanent Lock |
| Permanent Lock OFF| {{page.action}} | {{page.other}} | Disable Permanent Lock |
| Lock Status | {{page.info}} | {{page.numeric}} | codei, which indicates whether the cable is locked and, if so, whether it is permanently locked |
| Connected | {{page.info}} | {{page.binary}} | Connected Vehicle |

Other *info* commands of type *infos* will be created when data is received from the cloud via the
daemon. The commands created this way will be visible, along with a description, in the tab
**Commands** for configuring the charger. The logicalId for these commands is the identifier
digital data received from the cloud.

The value of some of these commands is a code that corresponds to different states. For these
information, a second command is created with the logicalId **`<ID>::txt`**. The value of this
The second command will be a text corresponding to the status.


+ The {% include image.html img=page.img07 %} button reconfigures the commands with the default values
default.
{: .hide}

## Widgets
{: .num}

### Charger Status
{: .num}

The default widget for the charger status displays the following six scenarios:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img10 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

The optional options **notext: 1** and **noimage: 1** allow you to hide the display of the
text and image:

{% include image.html img=page.img14 %}

provides

{% include image.html img="etat_5_notext.png" %}

### Cable Lock
{: .num}

The cable lock widget lets you enable or disable permanent locking and indicates whether the cable is locked and whether permanent locking is enabled.

The following table shows the different icons based on the lock status and the WEB interface theme:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
<th colspan="2" style="text-align:center">Colorful icons</th>
</tr>
    <tr>
<th style="text-align:center">yes</th>
<th style="text-align:center">no</th>
</tr>
</thead>
  <tbody>
    <tr>
<td>no</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img=page.img17 %}
{% include image.html img=page.img19 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img16 %}
{% include image.html img=page.img18 %}
</td>
</tr>
    <tr>
<td>yes</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img=page.img21 %}
{% include image.html img=page.img23 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img20 %}
{% include image.html img=page.img22 %}
</td>
</tr>
    <tr>
<td>no</td>
<td>yes</td>
      <td style="text-align:center">
{% include image.html img=page.img25 %}
{% include image.html img=page.img27 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img24 %}
{% include image.html img=page.img26 %}
</td>
</tr>
    <tr>
<td>yes</td>
<td>yes</td>
      <td style="text-align:center">
{% include image.html img=page.img29 %}
{% include image.html img=page.img31 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img28 %}
{% include image.html img=page.img30 %}
</td>
</tr>
</tbody>
</table>

### Pausing the charge
{: .num}

{% include image.html img=page.img33 %}: Pausing the charge

{% include image.html img=page.img32 %}: Resume a load that has been paused
