---
layout : default
title : SmartMeterUSB
plugin : SmartMeterUSB
lang : en_US
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# "SmartMeterUSB" plugin for Jeedom

This plugin allows you to upload, via MQTT, the information transmitted by your
meter via port P1 and an MBUS<=>USB converter.

The converter must be of the **MBUS Slave** type. The plugin has been tested with
ce [convertisseur](https://fr.aliexpress.com/item/1005006212611801.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.2.7aafXfI0XfI0dD&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=c8572017-9a80-4506-a93f-0c04706d9496&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:c8572017-9a80-4506-a93f-0c04706d9496,tpp_buckets:668%232846%238107%231934&pdp_npi=4%40dis%21CHF%219.07%217.62%21%21%2110.44%218.77%21%402103871e17243213075876658ecc43%2112000036302876309%21rec%21CH%21748220648%21X&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A).
The plugin uses software from the Python project [smartmeter-datacollector](https://github.com/scs/smartmeter-datacollector),
The wiki page for this project gives this type of [converter](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/)
as an example of a converter that can be used.

# Compatible counters
{: .num}

The following counters are indicated as being recognized by the python project
*smartmeter-datacollector*. They are therefore integrated into the plugin:
* Landis+Gyr E360 (not tested in the plugin)
* Landis+Gyr E450 (tested in the plugin)
* Landis+Gyr E570 (not tested in the plugin)
* Iskraemeco AM550 (not tested in the plugin)
* Kamstrup OMNIPOWER with HAN-NVE (not tested in the plugin)

> :bulb: Other types of meter can be integrated into the plugin when they are
recognized by the *smartmeter-datacollector* module.

Any feedback on the use of counters not tested in the plugin will be welcome.
tested in the plugin will be most welcome.

# mbus <=> USB converters
{: .num}

The converter must be a **Slave** MBUS module. Here are a few examples:

+ [converter with PL23036L chip](https://fr.aliexpress.com/item/1005006206253270.html)
  + Converter used, with an E570 counter, when developing the plugin
+ [converter with PL23031A chip](https://fr.aliexpress.com/item/1005006212611801.html)
  + This model is very similar to the previous one, but equipped with a different chip
+ [Zeta M-Bus Salve](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/)
  + Module proposed in the *smartmeter-datacollector* project wike.
+ [DYKB-USB to MBUS converter](https://fr.aliexpress.com/item/1005004540180026.html)
  + Converter referenced by a user in *smartmeter-datacollectot* project discussions
  + Scheduled test with Jeedom plugin and an E450 meter.

We welcome any information on the use of convetisseur via the Jeedom forum.
Please indicate the type of converter and meter used.

# Installing and configuring the plugin
{: .num}


## Prerequisites
{: .num}

The plugin [**MQTT Manager**](https://market.jeedom.com/index.php?v=d&p=market_display&id=4213)
must be installed and working.

> :bulb: The plugin does not yet support SSL communication with the MQTT brocker.

## Installation
{: .num}

The plugin is installed as standard from the market.

Once the plugin has been installed and activated, the installation of dependencies should begin.
unless automatic management has been deactivated beforehand. In this case, click on the
click on the **Relaunch** button to initiate the installation phase.

## Configuration
{: .num}

It is recommended to leave the two options **Auto creation of counters** and **Auto creation of orders**.
**Auto-create commands** selected. The **Counter** devices and their
commands will be created automatically.

![Configuration]({{ imagesPath }}/configuration_plugin.png)

The configurations under **Time Ranges** are used to define the values
the **Price** command according to the active time slot.

# USB converter configuration
{: .num}

## Set device name 
{: .num}

The main difficulty is to determine which device is associated with the
USB CONVERTER.

To do this, I suggest the following steps:
1 Connect the converter to a USB port on the Jeedom server
1. Restart the Jeedom server OS
1. After reboot, it is possible that the UBS keys (zigbee key for example) have
   changed device. You should therefore check whether plugins that use a UBS
   device are still working and, if necessary, change their configuration.
1. See the list of USB devices
   + Connect via ssh
   + Run `ls /dev/ttyUSB*` command
   + Note the list of devices found
1. Disconnect converter
1. View the device that has been deleted
   + Connect via ssh
   + Run `ls /dev/ttyUSB*` command
   + Note the name of the device that has disappeared
1. Reconnect converter to same USB port

## Converter configuration
{: .num}

Click on `Add a converter` button

![Converter configuration]({{ imagesPath }}/configuration_convertisseur.png)

+ Select counter type.
+ Enter USB device.
+ Leave *baurate* empty so that the daemon uses its default value.
+ Enter the encript key if your supplier has configured encript information.
  (You'll need to ask your supplier for this key).
+ (Re)launch the daemon.

# Creation of *Counters* devices and their commands
{: .num}

If the plugin's *Auto creation of counters* option is disabled, the counters
must be created manually. This manual creation is reserved for experts.

A counter is created automatically when the MQTT brocker transmits a measurement
with a counter number for which there is no Jeedom equipment.

Once the counter has been created, you can:
+ Modify its name and all standard Jeedom parameters.
+ Select the meter type (this will change the device image)
+ Activate the device

> warning: Do not modify the meter number. This number is used to identify the device
  when receiving measurements.

Once the device has been activated, commands will be created according to the messages received from the
MQTT brocker.

Translated with DeepL.com (free version)
