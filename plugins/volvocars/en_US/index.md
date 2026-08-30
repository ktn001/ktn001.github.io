---
layout : default
pluginId : volvocars
plugin : Volvo
lang: en_US
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# "volvocars" plugin for Jeedom

The **volvocars** plugin allows Jeedom to interact with your Volvo vehicle using
the Volvocars APIs.

Thanks to @Xav-74—I drew a lot of inspiration from his **My BMW** plugin for the widget and the panel.

# Principle
{: .num}

This plugin interacts with the Volvocars APIs via the cloud. Therefore, this plugin
requires an internet connection. Your vehicle must also be accessible in
the Volvo Cars app.

The API documentation states that they are available for all models between
2015 to 2022. However, it appears that this documentation is not up to date and that models released after
2022 features are also available via these APIs. The plugin was developed using an XC40
Electrical Systems of 2023.

# Compatible models
{: .num}

+ ***Models confirmed to be compatible with the plugin:***
    + XC40 Electric (2023)
    + XC60 Hybrid (2022)
+ ***Models confirmed to be partially compatible with the plugin:***
+ ***Models confirmed to be incompatible with the plugin:***

# VCC API keys
{: .num}
In addition to the Volvo ID account you use in the Volvo Cars app, you'll need a VCC API key
for the home.

You must generate a VCC API key on the website
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} by following
this procedure:

1. Click **Sign up**:\
{% include image.html img="sign_up_volvodev.png" %}
1. Select the account that will be associated with your new developper.volvocars account:\
{% include image.html img="select_login_asoc.png" %}
1. Enter your username and password for the site selected in the previous step\
{% include image.html img="sign_in_volvodev.png" %}
1. Click on your login name, then click **Your API applications**\
{% include image.html img="open_api_applications.png" %}
1. Enter a name for the app you're about to create, then click **Create**. If you have
If you have multiple Jeedom instances, it is recommended that you create an app for each instance in
in which the plugin will be
Installed:\
{% include image.html img="create_application.png" %}
1. Your new app is created using a pair of VCC API keys. You can always come back
on this page to retrieve your key.\
{% include image.html img="vcc_keys.png" %}

# Installing and configuring the plugin
{: .num}

## Installing the plugin
{: .num}
The plugin installs in the standard way from the Jeedom Market.

If the installation of the dependencies did not start automatically after the plugin was installed,
Start it manually. Once the dependencies are installed, make sure the daemon is running.

## Plugin Configuration
{: .num}

{% include image.html img="configuration_plugin.png" %}
+ ***VCC API Key***
: Enter the VCC-API-key you generated on the developer.volvocars.com website.

+ ***Use the plugin's widget***
: Select this option to use the plugin's widget in dashboards.
{% include image.html img="widget_electrique.png" -%}
{% include image.html img="widget_hybrid.png" -%}
{% include image.html img="widget_thermique.png" %}

+ ***Commands to create for the windows***
: The Volvocars APIs return information of the text type regarding the status of the doors and windows.
This text is stored in a **\*_state** command for the device.\
Binary commands **\*_open** and **\*_closed** will also be created if the **Open** option
or **Closed** is enabled.
: Existing **\*_open** or **\*_closed** commands are not removed when
The corresponding option is turned off.

Once the plugin is installed, you'll need to create an account.

# Accounts
{: .num}
{% include image.html img="no_account.png" %}

Click *Add*

{% include image.html img="account_name.png" %}

Enter the account name, then click *OK*

{% include image.html img="edit_account.png" %}

Enter your VolvoID account username and password, then click *OK*

{% include image.html img="edit_otp.png" %}

Enter the code that Volvo sent you by email, then click *OK*.

You must enter the code to obtain a token that the plugin will use to
Authenticate access to the Volvocars APIs. This token will be automatically renewed before it expires.

The token may be lost if
   + All vehicles associated with the account are deactivated for a certain period of time.
   + The plugin has been disabled for more than a certain amount of time.
   + Jeedom has been down for quite some time.
   + A Jeedom backup has been restored.

In these cases, you need to open the account settings and save them. This will restart the process.
to enter a new code sent by email and then obtain a new token.

According to the API documentation, an expired token can be automatically renewed up to 7 days after it expires. However, I haven’t been able to verify this. Since tokens are valid for 30 minutes and are renewed 15 minutes before they expire, an outage lasting less than 15 minutes shouldn’t have any consequences.

{% include image.html img="no_car.png" %}

# Vehicles
{: .num}

Jeedom devices for vehicles associated with an account are automatically created (or updated)
(up to date) when syncing the account

## Synchronizing an account (creating vehicles)
{: .num}

+ Click the **Synchronization** button
+ Select the account to sync
+ The new vehicle is added to the list of vehicles

  > :bulb: In some cases, the image provider's website may block access attempts made by a script.
In this case, the Volvo logo will be displayed in place of the vehicle image. The vehicle image must
can be entered manually from the vehicle's configuration page.

{% include image.html img="with_car.png" %}

## Vehicle Configuration
{: .num}

{% include image.html img="configuration_vehicle.png" %}

+ **General Settings**

These settings are the standard settings for Jeedom devices. They will not be covered in detail here.

+ **Vehicle Settings**

These settings are filled in automatically when the account is synchronized. Editing these settings is disabled by default because they should not be modified by users.

If necessary, you can enable editing of these settings by clicking the `Edit` button

+ **Alert Settings**

   + *Electrical self-sufficiency*\
The value of the `al_electricAutonomy` command changes to **1** when the electric range is less than
at this limit.

   + *Thermal self-sufficiency*\
The value of the `al_fuelAutonomy` command changes to **1** when the thermal engine's range is less than
at this limit.

+ **Location Settings**

The GPS coordinates for two locations can be configured. Two commands will be created for each of these locations:
  + `distanceSite#`: Distance between the site and the vehicle
  + `presenceSite#`: a binary value indicating whether someone is on site

Settings:
  + *Name*\
If a site is renamed, the two associated commands will also be renamed if their names contain the old name
website name
  + *GPS coordinates*\
The site's GPS coordinates
  + *Maximum distance (in m)*\
Maximum distance (in meters) between the vehicle and the location for the vehicle to be marked as present at the location.
  + *Get GPS coordinates*\
Two buttons that automatically enter the site's GPS coordinates:
       + `Jeedom`: Retrieves the GPS coordinates from Jeedom that were entered in the Jeedom configuration.
       + `Vehicle`: Retrieves the vehicle's current location

+ **Description**

Open-source information

+ **Image**

Image of the vehicle to be used in the panel. If the vehicle image could not be retrieved during
When the account is synced, it will be replaced by a Volvo logo and a "Retrieve Image" button
of the vehicle` (see below for instructions on how to manually retrieve the image).

+ **Raw data**

This button opens a pop-up window displaying the data as provided by the APIs. This information can
be useful for analysis in the event of a problem.

# Manual image retrieval
{: .num}

+ If the vehicle image could not be loaded, the Volvo logo and the `Retrieve a vehicle image` button are displayed:

{% include image.html img="no_image.png" %}

+ Click the `Get a picture of the vehicle` button\
   + The logo is replaced by an image of the vehicle
   + The `Retrieve a Vehicle Image` button is no longer displayed:\
   + An area is marked for pasting the image of the vehicle

{% include image.html img="image_ready.png" %}

+ Use the context menu (NO KEYBOARD SHORTCUT!) to copy the image.

{% include image.html img="copy_image.png" %}

+ Use the context menu (NO KEYBOARD SHORTCUT!) to paste the image into
the designated area.

{% include image.html img="paste_image.png" %}

+ The image is sent to the plugin
+ The area designated for receiving a copy of the image is no longer displayed.

{% include image.html img="image_uploaded.png" %}

# Commands
{: .num}

## Actions
{: .num}

The plugin can send the following commands to the vehicle

+ **unlock**\
Unlocking the vehicle
+ **lock**\
Vehicle Locking
+ **lockReduced**\
Locking with reduced alarm mode
+ **climStart**\
Starting the air conditioning
+ **climStop**\
Air conditioning shut-off
+ **honk**\
Klaxonne
+ **flash**\
The vehicle's turn signals are flashing.
+ **honk_flash**\
Simultaneous execution of the *honk* and *flash* commands

The commands that are actually enabled in the plugin for a vehicle depend on
vehicle features that are reported via APIs (endpoint *commands*).

## News
{: .num}

  > :bulb: *info* commands are not created when the vehicle is created. They are created
dynamically after the vehicle is activated, based on data received from APIs.

<TABLE class="commands">
<thead>
<tr>
<th style='min-width:150px'>Name</th>
<th>LogicalId</th>
<th>API endpoint</th>
<th>SubType</th>
<th>Values/Unit</th>
<th>Description</th>
</tr>
</thead>
<tbody>

		<!-- -------- -->
<!-- GLOBAL -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">GLOBAL</td>
</tr>
<tr>
<td rowspan="4">Availability</td>
<td rowspan="4">availability</td>
<td rowspan="4">accessibility</td>
<td rowspan="4">text</td>
<td>"AVAILABLE"</td>
<td>The vehicle is connected</td>
</tr>
<tr>
<td>"NOT AVAILABLE"</td>
<td>The vehicle is disconnected</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"QUOTA_OUT"</td>
<td>The API call quota has been reached</td>
</tr>
<tr>
<td rowspan="5">reason for unavailability</td>
<td rowspan="5">unavailableReason</td>
<td rowspan="5">accessibility</td>
<td rowspan="5">text</td>
<td>"NO_INTERNET"</td>
<td>No internet</td>
</tr>
<tr>
<td>"POWER_SAVING_MODE"</td>
<TD>Vehicle in standby mode</TD>
</tr>
<tr>
<td>"CAR_IN_USE"</td>
<td>Vehicle User Guide</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>""</td>
<td>The vehicle is available</td>
</tr>
<tr>
<td>odometer</td>
<td>odometer</td>
<td>odometer</td>
<td>digital</td>
<td>Km</td>
<td>Vehicle mileage</td>
</tr>
<tr>
<td rowspan="12">service</td>
<td rowspan="12">service</td>
<td rowspan="12">diagnostics</td>
<td rowspan="12">text</td>
<td>"NO_WARNING"</td>
<td>No service required</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE"</td>
<td>Service deadline approaching</td>
</tr>
<tr>
<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
<td>Motor operating time before service is almost up</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_ALMOST_TIME_FOR_SERVICE"</td>
<td>Mileage limit for a service will soon be reached</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
<td>Service deadline reached</td>
</tr>
<tr>
<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
<td>Motor runtime before service has elapsed</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
<td>Mileage for a service reached</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE"</td>
<td>Service deadline exceeded</td>
</tr>
<tr>
<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
<td>Motor runtime before service exceeded</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_OVERDUE_FOR_SERVICE."</td>
<td>Mileage limit exceeded</td>
</tr>
<tr>
<td>"UNKNOWN_WARNING"</td>
<td>Unknown alert</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>undetermined</td>
</tr>
<tr>
<td rowspan="5">Reason for service</td>
<td rowspan="5">serviceTrigger</td>
<td rowspan="5">diagnostics</td>
<td rowspan="5">text</td>
<td>CALENDAR_TIME</td>
<td>Time elapsed since the last service</td>
</tr>
<tr>
<td>"DISTANCE"</td>
<td>Distance traveled since last service</td>
</tr>
<tr>
<td>"ENGIME_HOURS"</td>
<td>Motor operating time</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Not specified</td>
</tr>
<tr>
<td>"UNKNOWN"</td>
<td>Unknown</td>
</tr>
<tr>
<td>Engine Hours Before Service</td>
<td>engineHoursToService</td>
<td>diagnostics</td>
<td>digital</td>
<td>Hours</td>
<td>Motor operating time before the next service</td>
</tr>
<tr>
<td>Distance Before Service</td>
<td>distanceToService</td>
<td>diagnostics</td>
<td>digital</td>
<td>Kilometers</td>
<td>Distance to the next service stop</td>
</tr>
<td>Days Before Service</td>
<td>timeToService</td>
<td>diagnostics</td>
<td>digital</td>
<td>Days</td>
<td>Number of days the service has been active.<br>The volvocars API returns either a number of days or a number of months.
The plugin converts the number of months into the number of days. Therefore, there may be an error of 30 days.</td>
<tr>
</tr>
	
		<!-- ------------ -->
<!-- LOCALIZATION -->
		<!-- ------------ -->
<tr>
<td class="subtitle" colspan="6">LOCATION</td>
</tr>
<tr>
<td>position</td>
<td>position</td>
<td>rental</td>
<td>GPS coordinates</td>
<td>&lt;latitude&gt;,&lt;longitude&gt;</td>
<td>vehicle location</td>
</tr>
<tr>
<td>distance &lt;site_name_1&gt;</td>
<td>distanceSite1</td>
<td></td>
<td>digital</td>
<td>meter</td>
<td>Distance between the vehicle and Site 1</td>
</tr>
<tr>
<td rowspan="2">website &lt;site_name_1&gt;</td>
<td rowspan="2">presenceSite1</td>
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>The vehicle is not on site 1</td>
</tr>
<tr>
<td>1</td>
<td>The vehicle is at location 1</td>
</tr>
<tr>
<td>distance &lt;site_name_2&gt;</td>
<td>distanceSite2</td>
<td></td>
<td>digital</td>
<td>meter</td>
<td>Distance between the vehicle and Site 1</td>
</tr>
<tr>
<td rowspan="2">presence &lt;site_name_2&gt;</td>
<td rowspan="2">presenceSite2</td>
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>The vehicle is not on site 2</td>
</tr>
<tr>
<td>1</td>
<td>The vehicle is at Site 2</td>
</tr>
	
		<!-- -------- -->
<!-- OPENINGS -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">WINDOWS AND DOORS</td>
</tr>
<tr>
<td rowspan="3">Locked</td>
<td rowspan="3">locked</td>
<td rowspan="3">doors</td>
<td rowspan="3">text</td>
<td>LOCKED</td>
<td>Lock Vehicle</td>
</tr>
<tr>
<td>UNLOCKED</td>
<td>Unlock Vehicle</td>
</tr>
<tr>
<td>UNSPECIFIED</td>
<td>Information not available</td>
</tr>
<tr>
<td rowspan="8">
Status of left front door<BR>
Condition of the right front port <BR>
Left rear door status <BR>
Condition of the right rear port <BR>
hood status <br>
Tailgate status <br>
hatch status<br>
</td>
<td rowspan="8">
doorFlState<br>
doorFrState<br>
doorRlState<br>
doorRrState<br>
hoodState<br>
tailState<br>
tankState<br>
</td>
<td rowspan="8">
doors
</td>
<td rowspan="12">
text
</td>
<td rowspan="3">CLOSED</td>
<td rowspan="3">closed</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">AJAR</td>
<td rowspan="3">partially open</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">OPEN</td>
<td rowspan="3">open</td>
</tr>
<tr>
</tr>
<tr>
<td rowspan="4">
Condition of left front window<br>
Condition of right front window<br>
Condition of left rear window<br>
Condition of the rear right window <br>
Roof Condition<br>
</td>
<td rowspan="4">
winFlState<br>
winFrState<br>
winRlState<br>
winRrState<br>
roofState<br>
</td>
<td rowspan="4">Windows</td>
</tr>
<tr>
<td rowspan="3">UNSPECIFIED</td>
<td rowspan="3">Information not available</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="2">
Left front door open<BR>
Right front port open<BR>
Left rear port open<BR>
Right rear port open<BR>
Left front window open<br>
Right front window open<br>
Left rear window open<br>
Right rear window open<br>
open hood<br>
open roof<br>
Tailgate open<br>
open hatch<br>
</td>
<td rowspan="2">
doorFlOpen<br>
doorFrOpen<br>
doorRlOpen<br>
doorRrOpen<br>
winFlOpen<br>
winFrOpen<br>
winRlOpen<br>
winRrOpen<br>
hoodOpen<br>
roofOpen<br>
tailOpen<br>
tankOpen<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>not open</td>
</tr>
<tr>
<td>1</td>
<td>open</td>
</tr>
<tr>
<td rowspan="2">
Left front port closed<BR>
Right front port closed<BR>
Left rear port closed<BR>
Right rear port closed<BR>
Left front window closed<br>
Right front window closed<br>
Left rear window closed<br>
Right rear window closed<br>
Hood Closed<br>
closed roof<br>
Tailgate closed<br>
Hatch Closed<br>
</td>
<td rowspan="2">
doorFlClosed<br>
doorFrClosed<br>
doorRlClosed<br>
doorRrClosed<br>
winFlClosed<br>
winFrClosed<br>
winRlClosed<br>
winRrClosed<br>
hoodClosed<br>
roofClosed<br>
tailClosed<br>
tankClosed<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>not closed</td>
</tr>
<tr>
<td>1</td>
<td>open</td>
</tr>
<tr>
<TD rowspan="2">Ports Closed</TD>
<td rowspan="2">allDoorsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<TD>A port, hood, or trunk is not closed</TD>
</tr>
<tr>
<td>1</td>
<TD>All doors, as well as the hood and trunk, are closed</TD>
</tr>
<tr>
<td rowspan="2">Windows closed</td>
<td rowspan="2">allWinsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>A window or the roof is not closed</td>
</tr>
<tr>
<td>1</td>
<td>All windows and the roof are closed</td>
</tr>
	
		<!-- ---------------- -->
<!-- Internal combustion engine -->
		<!-- ---------------- -->
<tr>
<td class="subtitle" colspan="6">INternal Combustion Engine</td>
</tr>
	
<tr>
<td rowspan="2">motor in operation</td>
<td rowspan="2">engineON</td>
<td rowspan="2">engine_status</td>
<td rowspan="2">binary</td>
<td>0</td>
<td>motor stopped</td>
</tr>
<tr>
<td>1</td>
<td>motor running</td>
</tr>
<tr>
<td>fuel consumption</td>
<td>consoFuel</td>
<td>statistics</td>
<td>digital</td>
<td>l/100 km</td>
<td>Average fuel consumption calculated by the vehicle</td>
</tr>
<tr>
<td>fuel consumption (trip)</td>
<td>consoFuelTrip</td>
<td>statistics</td>
<td>digital</td>
<td>l/100 km</td>
<td>Average fuel consumption since the start of the automatic trip</td>
</tr>
<tr>
<td>fuel</td>
<td>fuelAmount</td>
<td>fuel</td>
<td>digital</td>
<td>l</td>
<td>Amount of fuel remaining</td>
</tr>
<tr>
<td>thermal autonomy</td>
<td>fuelAutonomy</td>
<td>statistics</td>
<td>digital</td>
<td>Km</td>
<td>Range on remaining fuel</td>
</tr>
<tr>
<td rowspan="2">Low fuel range</td>
<td rowspan="2">al_fuelAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binary</td>
<td>0</td>
<td>Sufficient fuel range</td>
</tr>
<tr>
<td>1</td>
<td>Low fuel range</td>
</tr>
	
<!-- OIL -->
<tr>
<td rowspan="5">oil level</td>
<td rowspan="5">oilLevel</td>
<td rowspan="5">engine_dignostics</td>
<td rowspan="5">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normal level</td>
</tr>
<tr>
<td>"SERVICE_REQUIRED"</td>
<td>Requires a service</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Low Level</td>
</tr>
<tr>
<td>"TOO_HIGH"</td>
<td>Top Level</td>
</tr>
<tr>
<td rowspan='2'>oil alert</td>
<td rowspan='2'>al_oil</td>
<td rowspan='2'></td>
<td rowspan='2'>binary</td>
<td>0</td>
<td>The oil level is normal</td>
</tr>
<tr>
<td>1</td>
<TD>Alert (see the <I>oil_level</I> command for more details)</TD>
</tr>
	
<!-- COOLANT -->
<tr>
<td rowspan="3">coolant level</td>
<td rowspan="3">coolantLevel</td>
<td rowspan="3">engine_dignostics</td>
<td rowspan="3">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normal level</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Low Level</td>
</tr>
<tr>
<td rowspan='2'>coolant alert</td>
<td rowspan='2'>al_coolant</td>
<td rowspan='2'></td>
<td rowspan='2'>binary</td>
<td>0</td>
<td>The level is normal</td>
</tr>
<tr>
<td>1</td>
<TD>Alert (see the <I>coolant_level</I> command for more details)</TD>
</tr>
	
		<!-- ----------------- -->
<!-- Electric motor -->
		<!-- ----------------- -->
<tr>
<td class="subtitle" colspan="6">ELECTRIC MOTOR</td>
</tr>
<tr>
<td>electricity consumption</td>
<td>consoElectric</td>
<td>statistics</td>
<td>digital</td>
<td>kW/100 km</td>
<td>Average fuel consumption calculated by the vehicle</td>
</tr>
<tr>
<td>Electric Range</td>
<td>electricAutonomy</td>
<td>statistics</td>
<td>digital</td>
<td>Km</td>
<td>Battery life with remaining charge</td>
</tr>
<tr>
<td rowspan="2">Low battery life</td>
<td rowspan="2">al_electricAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binary</td>
<td>0</td>
<td>Sufficient battery life</td>
</tr>
<tr>
<td>1</td>
<td>Low battery life</td>
</tr>
<tr>
<TD>battery charge level</TD>
<td>batteryLevel</td>
<td>recharge_status</td>
<td>digital</td>
<td>%</td>
<TD>Battery charge percentage</TD>
</tr>
<tr>
<td rowspan="6">Charge status</td>
<td rowspan="6">chargingStatus</td>
<td rowspan="6">recharge_status</td>
<td rowspan="6">text</td>
<td>"CHARGING_SYSTEM_CHARGING"</td>
<td>Loading...</td>
<td></td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_IDLE"</td>
<td>Standby charging system</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_DONE"</td>
<td>Charging complete</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_FAULT"</td>
<td>Charging system error</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_SCHEDULED"</td>
<td>Scheduled Recharge</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_UNSPECIFIED"</td>
<td>Status: Undetermined</td>
</tr>
<tr>
<td>Remaining charging time</td>
<td>chargingRemainingTime</td>
<td>recharge_status</td>
<td>digital</td>
<td>minutes</td>
<td>Estimated time remaining until charging is complete</td>
</tr>
<tr>
<td>Charge End Time</td>
<td>chargingEndTime</td>
<td></td>
<td>text</td>
<td>jj HH:MM</td>
<td>Estimated end time of charging</td>
</tr>
<tr>
<td rowspan="5">Socket status</td>
<td rowspan="5">connectorStatus</td>
<td rowspan="5">recharge_status</td>
<td rowspan="5">text</td>
<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
<td>Connected to an AC outlet</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
<td>Connected to a DC terminal</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_DISCONNECTED"</td>
<td>Unplugged</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_FAULT"</td>
<td>Misleading</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
<td>Status: Undetermined</td>
</tr>
	
		<!-- ------ -->
<!-- WASHER -->
		<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">WINDOW CLEANER</td>
</tr>
<tbody>
<tr>
<td rowspan="3">Window-cleaning level</td>
<td rowspan="3">washerFluidLevel</td>
<td rowspan="3">diagnostics</td>
<td rowspan="3">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normal level</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Low Level</td>
</tr>
<tr>
<td rowspan='2'>Window-cleaning alert</td>
<td rowspan='2'>al_washerFluid</td>
<td rowspan='2'>binary</td>
<td>0</td>
<td>The level is normal</td>
</tr>
<tr>
<td>1</td>
<TD>Alert (see the <I>washer_fluid_level</I> command for more details)</TD>
</tr>
		
			<!-- ------ -->
<!-- BRAKE -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">BRAKE FLUID</td>
</tr>
</tbody>
<tr>
<td rowspan="3">Brake fluid level</td>
<td rowspan="3">brakeFluidLevel</td>
<td rowspan="3">brakes</td>
<td rowspan="3">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normal level</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Low Level</td>
</tr>
<tr>
<td rowspan='2'>brake fluid warning</td>
<td rowspan='2'>al_brake_fluid</td>
<td rowspan='2'>binary</td>
<td>0</td>
<td>The level is normal</td>
</tr>
<tr>
<td>1</td>
<TD>Alert (see the <I>brake_fluid_level</I> command for more details)</TD>
</tr>
		
			<!-- ---- -->
<!-- TYRE -->
			<!-- ---- -->
<tr>
<td class="subtitle" colspan="6">TIRE PRESSURE</td>
</tr>
<tr>
<td rowspan="5">
left front tire<br>
front right tire<br>
left rear tire<br>
right rear tire
</td>
<td rowspan="5">
tyreFl<br>
tyreFr<br>
tyreRl<br>
tyreRr
</td>
<td rowspan="5">tire</td>
<td rowspan="5">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Normal pressure</td>
</tr>
<tr>
<td>"VERY_LOW_PRESSURE"</td>
<td>Very low pressure</td>
</tr>
<tr>
<td>"LOW_PRESSURE"</td>
<td>Low pressure</td>
</tr>
<tr>
<td>"HIGH_PRESSURE"</td>
<td>High pressure</td>
</tr>
<tr>
<td rowspan='2'>tire alert</td>
<td rowspan='2'>al_tyre</td>
<td rowspan="2"></td>
<td rowspan='2'>binary</td>
<td>0</td>
<td>Pressure levels are normal</td>
</tr>
<tr>
<td>1</td>
<TD>Alert (see the <I>tyre_*</I> commands for more details)</TD>
</tr>
		
			<!-- ------ -->
<!-- LIGHTS -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LIGHTING</td>
</tr>
<tr>
<td rowspan="3">
Left brake light<br>
Right brake light<br>
center brake light<br>
left daytime light<br>
daylight saving time<br>
front fog lights<br>
rear fog lights<br>
hazard lights<br>
Left turn signal<br>
straight ahead<br>
Left turn signal<br>
Right turn signal<br>
Left front position light<br>
Right front position light<br>
Left rear position light<br>
Right rear taillight<br>
stove top <br>
Fire recedes<br>
side lights<br>
front left turn signal <br>
front right turn signal <br>
Left rear turn signal <br>
right rear turn signal
</td>
<td rowspan="3">
al_brakeLightL<br>
al_brakeLightR<br>
al_brakeLightC<br>
al_daytimeRunningLightL<br>
al_daytimeRunningLightR<br>
al_fogLightF<br>
al_fogLightR<br>
al_hazardLights<br>
al_highBeamL<br>
al_highBeamR<br>
al_lowBeamL<br>
al_lowBeamR<br>
al_positionLightFl<br>
al_positionLightFr<br>
al_positionLightRl<br>
al_positionLightRr<br>
al_registrationPlateLight<br>
al_reverseLights<br>
al_sideMarkLights<br>
al_turnIndicationFl<br>
al_turnIndicationFr<br>
al_turnIndicationRl<br>
al_turnIndicationRr
</td>
<td rowspan="3">warnings</td>
<td rowspan="3">text</td>
<td>"UNSPECIFIED"</td>
<td>Information not available</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>No defects</td>
</tr>
<tr>
<td>"FAILURE"</td>
<td>Error</td>
</tr>
<tr>
<td rowspan="2">light bulb alert</td>
<td rowspan="2">al_light</td>
<td rowspan="2"></td>
<td rowspan="2">binary</td>
<td>0</td>
<td>No faulty light bulbs</td>
</tr>
<tr>
<td>1</td>
<TD>Default (see lighting commands for more details)</TD>
</tr>

			<!-- ------ -->
<!-- PLUGIN -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">PLUGIN</td>
</tr>
<tr>
<td>messages for wigget</td>
<td>msg2wigget</td>
<td></td>
<td>text</td>
<td>json</td>
<td>Messages regarding the operation of the panel widget</td>
</tr>
</tbody>
</table>

# The Volvocars API endpoints
{: .num}

This plugin uses three volvocars APIs. Each of these APIs provides access to endpoints, each of which provides a
set of information. The action and information tables above indicate which endpoint is provided
the information associated with each of the plugin's "info" or "action" commands.

Volvo limits the number of daily API calls to 10,000 per VCC-API key. To comply with this limit while
To ensure up-to-date information with minimal delay, the plugin does not access all endpoints at the same frequency.
The vehicle's location, for example, is updated every minute to allow for a certain level of responsiveness when
The vehicle arrives at home, whereas the brake fluid level is checked only once every 60 minutes.

## Endpoints
{: .num}

<table class="endpoint">
<thead>
<tr>
<th rowspan=2>API</th>
<th rowspan=2>endpoint</th>
<th rowspan=2>frequency</th>
<th colspan=3 style="text-align:center">Number of daily calls</th>
</tr>
<th>any vehicle</th>
<th>internal combustion engine</th>
<th>electric motor</th>
<tr>
</tr>
</thead>
<tbody>
<tr>
<td rowspan=15>Connected vehicle</td>
<td>brakes</td>
<td>60 min.</td>
<td>24</td>
</tr>
<tr>
<TD>command-accessibility</TD>
<td>5 min.</td>
<td>288</td>
</tr>
<tr>
<TD>commands<SUP>1</SUP></TD>
<td>0</td>
</tr>
<tr>
<td>details<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>diagnostics</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>doors</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>engine</td>
<td>15 min.</td>
<td></td>
<td>96</td>
</tr>
<tr>
<td>engine-status</td>
<td>5 min.</td>
<td></td>
<td>288</td>
</tr>
<tr>
<td>fuel</td>
<td>30 min.</td>
<td></td>
<td>48</td>
</tr>
<tr>
<td>odometer</td>
<td>15 min.</td>
<td>96</td>
</tr>
<tr>
<td>statistics</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>tires</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>vehicles<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>warnings</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>Windows</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>Rentals</td>
<td>rental</td>
<td>1 min.</td>
<td>1,440</td>
</tr>
<tr>
<td>Energy</td>
<td>recharge-status</td>
<td>5 min.</td>
<td></td>
<td></td>
<td>288</td>
</tr>
<tr>
<th>Total</th>
<th></th>
<th></th>
<th>3672</th>
<th>432</th>
<th>288</th>
</tr>
</tbody>
</table>
<sup>1</sup> Endpoint called when synchronizing an account.

So there are:
+ 4,104 calls per day for a gas-powered vehicle.
+ 3,960 calls per day for an electric vehicle.
+ 4,392 calls per day for a hybrid vehicle.

In addition, there are calls made when sending a command, performing a refresh, or synchronizing the vehicles associated with an account.

