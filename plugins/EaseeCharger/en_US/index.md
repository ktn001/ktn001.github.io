---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : en_US
---

# "EaseeCharger" plugin for Jeedom

The **EaseeCharger** plugin allows you to integrate `Easee` chargers for electric vehicles into a Jeedom instance.

Information about `Easee` chargers is available on the [Easee](https://easee.com) website

# Installing and configuring the plugin
{: .num}
{% include image.html img="plugin_configuration.png" %}

## Installing the plugin
{: .num}

The plugin installs in the standard way from the Jeedom Market. After installing it, you must activate it and then run the dependency installation.

## Plugin Configuration
{: .num}

**Demon**
: Daemon settings:
    + ***Port***
: The TCP port number used for communication between Jeedom and the daemon. Port 34739 is the default setting; a different port can be specified if there is a conflict with another plugin or software that uses the same port.

    + ***Extended Debugging***
: The Python module of the daemon that handles communication with the Easee cloud sends "pings" every 5 seconds to maintain the connection. Each "ping," and its responses, generate 5 `debug`-level log messages. These log messages are suppressed when the **Extended Debug** option is not enabled.

**Security**
: + ***Unsecured log***
: Sensitive data (passwords, tokens, etc.) is replaced with `********` in the logs. The "**Unsecured Log**" option disables this replacement and leaves sensitive data in plain text in the logs.

## Heartbeat Configuration
{: .num}

Sometimes the data stream from the Easse cloud is interrupted without the connection
is not interrupted. The daemon does not detect this type of situation and therefore cannot handle it.

To work around this issue, a heartbeat is automatically configured when the plugin is activated. The daemon is restarted
automatically via the heartbeat if the daemon hasn't reported any data to Jeedom for more than 15 minutes.

# Accounts
{: .num}

An account provides access to the Easee cloud to manage one or more chargers. An account must be registered in the plugin before you can create a charger device that will be managed through that account.

## Create an Account
{: .num}

1. On the plugin's management page, click the icon to create an account:\
{% include image.html img="icone_creation_compte.png" %}

1. Enter the account name\
{% include image.html img="enter_account_name.png" %}\
  > :bulb: Once registered, the account name cannot be changed.

1. Enter your username and password to log in to the cloud and activate your account\
{% include image.html img="saisie_login_password.png" %}

1. Click `Submit`.\
  > :bulb: The username and password are verified during registration only if the account is activated.

## How Accounts Work
{: .num}

### Deactivating an account
{: .num}

When an account is deactivated, all chargers that use that account to communicate with the Easee server are also deactivated. The chargers must be manually reactivated once the account is reactivated.

### Deleting an account
{: .num}

An account cannot be deleted if it is being used by at least one charger.

### Changing Your Login or Password
{: .num}

The daemon is not notified when an account's username or password is changed. Therefore, you must restart the daemon every time the username or password is changed.

# Chargers
{: .num}

## Creating a charger
{: .num}

> :bulb: An account must be created before creating a charger

1. On the plugin's management page, click the icon to create a charger:\
{% include image.html img="icone_creation_chargeur.png" %}

1. Enter the name of the charger\
{% include image.html img="enter_charger_name.png" %}

1. Configure the charger\
A charger is a Jeedom device. In addition to the basic device options (name, object, category, option), the following settings must be configured:

{% include image.html img="loader_settings.png" %}

   + **Account**\
The account that must be used to communicate with the Easee server

   + **Serial Number**\
The serial number as it should be entered, for example, in the Easee smartphone app.

   + **Custom widget**\
Do not use the standard Jeedom widget; instead, use the specific widget for EaseeCharger devices.

   + **Color**\
Charger color. Allows you to set the charger icon.

1. Click `Confirm`.

## The Custom Widget


## Commands
{: .num}

Loaders are created using the following commands:

| Name | Type | Subtype | Description |
| --- | ---- | --------- | ----------- |
| Status | info | numeric | Charger status:<br>&nbsp;1: Disconnected<br>&nbsp;2: On hold<br>&nbsp;3: Charging<br>&nbsp;4: Charging complete<br>&nbsp;5: Ready |
| Pause ON | action | other | Pauses the load |
| Pause OFF | action | other | Resume charging |
| Paused | info | binary | Loading is paused |
| Cable permanently locked | info | binary | Permanent cable lock is enabled |
| Locked cable | info | binary | The cable is locked |
| Lock Status | info | numeric | Combination of *Cable Permanently Locked* and *Cable Locked* for the widget |
| Permanent Lock ON | action | other | Enable Permanent Lock |
| Permanent Lock OFF | action | other | Disable Permanent Lock |
| Connected | info | binary | Connected Vehicle |
| Power | info | numeric | Current load power |
| Phase 1 Current | info | numeric | Phase 1 Current |
| Phase 2 Current | info | numeric | Phase 2 Current |
| Phase 3 Current | info | numeric | Phase 3 Current |
| Phase 1 Voltage | info | numeric | Phase 1 Voltage |
| Phase 2 Voltage | info | numeric | Phase 2 Voltage |
| Phase 3 Voltage | info | numeric | Phase 3 Voltage |
| Wi-Fi signal | info | numeric | Wi-Fi signal strength (0 if communicating via the cellular network) |
| Cellular signal | info | numeric | Cellular signal strength (0 if communicating via Wi-Fi) |

+ The {% include image.html img="btn_creer_cmds.png" %} button allows you to recreate commands that have been deleted.
+ The {% include image.html img="btn_reconfig_cmds.png" %} button resets the commands to their default values.

## Widgets
{: .num}

### Charger Status
{: .num}

The default widget for server status displays the following six scenarios:

{% include image.html img="etat_0.png" %}
{% include image.html img="etat_1.png" %}
{% include image.html img="etat_2.png" %}
{% include image.html img="etat_3.png" %}
{% include image.html img="etat_4.png" %}
{% include image.html img="etat_5.png" %}

The optional parameters **notext: 1** and **noimage: 1** allow you to hide the text and image:

{% include image.html img="widget_etat_option_notext.png" %}

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
{% include image.html img="widget_lock_0_d_color.png" %}
{% include image.html img="widget_lock_0_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_bw.png" %}
{% include image.html img="widget_lock_0_l_bw.png" %}
</td>
</tr>
    <tr>
<td>yes</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_color.png" %}
{% include image.html img="widget_lock_1_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_bw.png" %}
{% include image.html img="widget_lock_1_l_bw.png" %}
</td>
</tr>
    <tr>
<td>no</td>
<td>yes</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_color.png" %}
{% include image.html img="widget_lock_2_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_bw.png" %}
{% include image.html img="widget_lock_2_l_bw.png" %}
</td>
</tr>
    <tr>
<td>yes</td>
<td>yes</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_color.png" %}
{% include image.html img="widget_lock_3_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_bw.png" %}
{% include image.html img="widget_lock_3_l_bw.png" %}
</td>
</tr>
</tbody>
</table>

### Pausing the charge
{: .num}

{% include image.html img="btn_pause.png" %}: Pause charging

{% include image.html img="btn_continue.png" %} : Resume a load that has been paused
