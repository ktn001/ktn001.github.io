---
layout : default
title : SmartMeterUSB
---

# SmartMeterUSB” plugin for Jeedom

This plugin enables you to upload, via MQTT, the information transmitted by your meter via port P1 and an MBUS<->USB converter.

The converter must be of the **MBUS Slave** type. Le plugin a été testé avec ce [convertisseur](https://fr.aliexpress.com/item/1005006212611801.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.2.7aafXfI0XfI0dD&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=c8572017-9a80-4506-a93f-0c04706d9496&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:c8572017-9a80-4506-a93f-0c04706d9496,tpp_buckets:668%232846%238107%231934&pdp_npi=4%40dis%21CHF%219.07%217.62%21%21%2110.44%218.77%21%402103871e17243213075876658ecc43%2112000036302876309%21rec%21CH%21748220648%21X&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A).   
The plugin uses the Python module [smartmeter-datacollector](https://github.com/scs/smartmeter-datacollector), the wiki page for this module gives this type of [converter](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/) as an example of a converter that can be used.

#Compatible counters
{: .NUM}

The following counters are indicated as being recognized by the *smartmeter-datacollector* python module. They are therefore integrated into the plugin:
* Landis+Gyr E360 (not tested in the plugin)
* Landis+Gyr E450 (tested in the plugin)
* Landis+Gyr E570 (not tested in the plugin)
* Iskraemeco AM550 (not tested in the plugin)
* Kamstrup OMNIPOWER with HAN-NVE (not tested in the plugin)

> bulb: Other types of meters may be integrated into the plugin once they are recognized by the *smartmeter-datacollector* module.

We welcome any feedback on the use of counters that have not been tested in the plugin.

# Installing and configuring the plugin
{: .num}

## Prerequisites
{: .num}

The plugin [**MQTT Manager**](https://market.jeedom.com/index.php?v=d&p=market_display&id=4213) must be installed and working.

> :bulb: The plugin does not yet support SSL communication with the MQTT brocker.

## Installation
{: .num}

The plugin is installed as standard from the market.

## Configuration
{: .num}

Once the plugin has been installed and activated, the installation of dependencies should begin, unless automatic management has been
deactivated beforehand. In this case, click on the **Relaunch** button to initiate the installation phase.

We recommend that you leave the two options **Auto creation of counters** and **Auto creation of commands** selected.
The **Counter** devices and their controls will then be created automatically.

Translated with DeepL.com (free version)
