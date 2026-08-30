---
layout : default
pluginId : defauts
plugin : Défauts
lang: en_US
---
# "{{page.plugin}}" plugin for Jeedom.
The **{{page.plugin}}** plugin detects faults by verifying the consistency between a status and a measurement.

# Some examples:
{: .num}

- A light is on but no power is being consumed (defective bulb or incorrect feedback signal).
- A light is off but is consuming more than 1 watt (faulty feedback).
- The pump is running but there is no flow.

The plugin can also report faults when a measured value deviates too far from a setpoint.

# Plugin Configuration
{: .num}

The plugin requires no configuration; you just need to activate it.

{% include image.html img="01_config_plugin.png" %}

# Equipment
{: .num}

A **{{page.plugin}}** device allows you to monitor the consistency of multiple combinations of states and values. Information
indicates for each of these monitoring tasks whether the current status is consistent or not.

In addition, a **default** alert is triggered when a monitoring system detects an inconsistency. This alert remains active
until it is cleared, even if the inconsistency disappears.

## Design
{: .num}

**{{page.plugin}}** devices are created on the plugin page, which can be accessed via the `plugins` ==> `Monitoring` ==> `{{page.plugin}}` menu.
The device is configured with three commands:
+ A **default** command, of the "info" type, that indicates whether an inconsistency is or has been detected by one of the equipment's monitoring systems.
+ An **Acknowledgment** command, of the action type, used to acknowledge detected faults.
+ A **history** command, of the "info" type, that displays the most recent detected anomalies.

## Setup
{: .num}

### Equipment
{: .num}

In addition to the standard settings, the device has two parameters that allow you to configure how **Auto Acknowledgment** works:
* **Auto Acknowledgment**
Specifies whether faults should be automatically acknowledged or not.
* **Timelines** *(visible only if auto-acknowledgment is enabled)*
Waiting times
   
### Consistency checks
{: .num}

The `Monitoring` panel allows you to manage equipment monitoring. The `Add Monitoring` button adds a consistency check to the equipment.

#### Consistency checks have several parameters:
{: .num}

{% include image.html img="02_config_surveillance.png" %}
* ***Name:*** Name of the monitoring system.
* ***Status:*** Binary data to monitor.
* ***Measurement:*** Digital data to monitor.
* ***Limit:*** Value that must be reached by the measurement when the status is 1 (inconsistency if this value is not reached. There is also an inconsistency if this value is reached while the status is 0).
* ***Delay:*** The time it takes to reach the limit after a state change.
* ***Invert:*** Invert the monitoring. The measurement must be greater than the threshold when the status is 0.
* ***En:*** Active monitoring when the status is 1.
* ***Excluded:*** Active monitoring when the status is 0.
* ***Display:*** Displaying information.
* ***Inverted display:*** Inverts the display value (shows a green icon when everything is working properly and a red icon when there is a fault).
* ***Log:*** Logging of information.

### Setpoint monitoring
{: .num}

{% include image.html img="03_config_setpoint.png" %}
* ***Name:*** Name of the monitoring system.
* ***Status:*** Binary information used to control the operation of the monitoring system.
* ***Measurement:*** Digital data; a fault will be reported if the value of this measurement deviates too far from the setpoint value.
* ***Setting:*** Digital input, the value the device must reach.
* ***Limit:*** A fault is reported if the absolute value of the difference between the setpoint and the measured value exceeds this limit.
* ***Timeout:*** The period, in seconds, during which monitoring is disabled after a change in the ***state***.
* ***En:*** Monitoring is enabled when the ***status*** is 1 if this option is enabled.
* ***Off:*** Monitoring is enabled when the ***status*** is 0 if this option is enabled.
* ***Log:*** Logging of information.

### A Brief History
{: .num}

{% include image.html img="04_history.png" %}

The *history* command and its widget allow you to view the last five faults that occurred. The number of events listed is configurable.

A retention period for the listed events can be configured. Events that occurred before the retention period expires are removed from the list. Thus, events that occurred more than 2 days ago are removed from the list if the retention period is set to 2 days.

#### The history has several parameters:
{: .num}

{% include image.html img="config_histo.png" %}

* ***Name:*** History name.
* ***Size:***  Number of history entries displayed in the widget (up to 5)
* ***Retention:*** The length of time an entry is retained in the history. This duration can be expressed in minutes, hours, or days
* ***Date format:*** Date format in the history.
The following formats are supported (Please submit a request via the Jeedom forum to add other formats):

| format | example |
    | ------ | ------- |
| dd-mm HH:MM:SS | 02-06 17:35:40 |
| dd/mm HH:MM:SS | 06/02 17:35:40 |
| dd/mm/yy HH:MM:SS | 06/02/21 5:35:40 PM |
| dd mmm yyyy HH:MM:SS | June 2, 2021 5:35:40 PM |

* ***Display:*** Indicates whether the widget should be displayed or not.

# Examples
{: .num}

| Step | Device widget (color) | Device widget (black/white) | Notes |
| :---- | :----:  | :----: | :---- |
| Initial Status: | ![](/images/defaults/initial_default.png "Initial State") | ![](/images/defaults/initial_default_bw.png "Initial State") | No faults; all monitoring systems are in normal condition. |
| 1<sup>First</sup> monitoring of abnormal conditions | ![](/images/defauts/defauts_premier_defaut.png) | ![](/images/defauts/defauts_premier_defaut_bw.png) | The fault icon indicates that an anomaly has occurred that has not been acknowledged. |
| Clearing a Fault | ![](/images/faults/faults_cleared.png) | ![](/images/faults/faults_cleared_bw.png) | The fault was cleared by clicking the icon (or through auto-clearance). The fault icon indicates that the fault is still present. |
| 2<sup>nd</sup> error |![](/images/errors/second_error.png) | ![](/images/errors/second_error_bw.png) | The error icon indicates that there is a new error. |
| Cleared Alarms |![](/images/alarms/alarms_unresolved_alarms.png) | ![](/images/alarms/alarms_unresolved_alarms_bw.png) | The alarm icon indicates that there has been at least one alarm that has not been acknowledged. |
| Back to normal: | ![](/images/defaults/initial_state.png "Initial state") | ![](/images/defaults/initial_state_bw.png "Initial state") | The anomalies have been acknowledged and have disappeared. |
