---
layout : default
title : SmartMeterUSB
plugin : SmartMeterUSB
lang : en_US
---

# Release notes

### 2024/09/24 beta (bis)
+ Translation of the plugin into the following languages:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### 2024/09/24 beta
+ The plugin no longer integrates modified versions of the devolo_plc_api python module. The unmodified module is now installed
  with dependencies in a phyton virtual environment.
+ Dependencies must be reinstalled after plugin update.
+ This version is compatible with Debian 12

### 2023/10/05 beta
+ Exception handling added to daemon.
  This may cause a lot of error messages. I'm waiting for your feedback on this.

### 2023/09/19 beta
+ The list of devices connected to WiFi is now updated every 15 seconds (previously every minute).

### **2023/08/29 stable**
+ Offline monitoring not disabled in some cases

### **2023/08/25 stable**
+ Fixed a bug that generated messages in `http.error`.

### **2023/08/20 stable**
+ **2023/08/15 beta** changed to stable

### 2023/08/15 beta
+ New pluginlevel: 13
  + Activation of `offline` alerts on all plugin devices.
  + Add `online` info command on all existing devices.
+ New option to (de)activate alerts when equipment is offline.

### **2023/07/14 stable**
+ devolo_plv_api
  + Added version 1.3.2, which corrects a memory leak risk.
  + Deletes version 1.1.0
  + Deletion of version 1.2.0
+ New pluginlevel: 12
  + Activation of devolo_plc_api 1.3.2

### **2023/06/14 stable**
+ **2023/06/13 beta** upgraded to stable

### 2023/06/13 beta
+ Fixed dashboard/action/j_h_m widget bug

### 2023/06/11 beta
+ Mobile widget for configuring WifiGuest activation time allows value to be modified.

### 2023/06/09 beta
+ New pluginlevel: 11
  + New widgets for time remaining before wifi guest shutdown.
    + Wifi guest activation time cannot yet be modified via the
      widget for mobile devices.

### 2023/05/26 beta
+ New pluginlevel: 10.
  + Configuration to use devolo_plc_api version 1.3.1.
  + Creation of commands for wifi guest management
    + The `guest_duration` command (logicalId *guest_duration*) defines the time, in minutes, after which the wifi guest will be deactivated.
      wifi guest will be deactivated. A value of 0 indicates that wifi should not be disabled.
+ Synchronization script optimization
+ Synchronization logs are no longer in "devolo_cpl_out" but in "devolo_synchronize".

### **2023/05/23 stable**
+ **2023/04/23 beta** changed to stable

### 2023/04/23 beta
+ Min. protobuf version: 4.21.12
  + Dependencies must be reinstalled after update

### 2023/04/18 beta
+ New pluginlevel: 9.
  + Configuration to use devolo_plc_api version 1.3.0
+ mac address name entry limited to 30 characters
+ Added devolo_plc_api version 1.3.0 (versions 1.1.0 and 1.2.0 are still available)

### 2023/04/17 beta
+ New pluginlevel: 8.
  + Creation of a `devolo_connection` table to record the history of Wifi
    connections.
  + Creation of a `devolo_macinfo` table for mac address configurations.
+ Recording of Wifi client connection history.
+ New tab in panel for WiFi connection history graphs.

### 2023/04/15 beta
+ Fixed display of equipment images.

### 2023/04/14 beta
+ Added *requests* module to dependencies.

### 2023/03/09 beta
+ New pluginlevel: 7.
  + Panel activation

+ Plugin configuration
  + A new option lets you define whether the display of equipment names
    in tables and graphs should be displayed with or without object names:
     + `[<object_name>][<equipment_name>]`
     + `<equipment_name>`
  + The plugin now contains a *panel*. This *panel* can be enabled or disabled
    on the plugin configuration page.
  + Interface
    + New *panel* for displaying flow graphs between PLC devices.

### 2023/03/04 beta
+ New pluginlevel: 6.
  + Command sorting for existing devices.
  + Creation of three commands for firmware versions and availability for
    existing devices.
+ Functionality
  + Firmware version feedback and information if an update is available.

+ Interface
  + Modified display of equipment names in throughput table.
  + Improved order management in case of equipment model change.
    equipment.

+ Code
  + Improvements.
  + Bug corrections.
  + Removal of unnecessary files.
  + Equipment mac addresses are filled in on first sync.

### 2023/02/24 beta
+ New pluginlevel: 5.
   + (Re)creation of flow table.

+ Uninstall
   + Flow table no longer deleted.

+ Bug fix
   + Rate table was deleted when plugin was deactivated.

### 2023/02/22 beta

+ Update or installation:
   + New pluginLevel: 4.
   + Flow retention initialized to one week.
   + Flow recording table created in DB.

+ Uninstall
   + PLC flow rate table deleted.

+ Equipment configuration
   + New `Network` parameter.

+ Interface:
   + Data rate table.

### 2023/02/18 beta

+ dependencies:
   + *importlib-metadata* python module added.
> :bulb: Dependencies installation must be restarted after plugin update.

+ devolo_plc_api module:
   + Upgrade to version 1.2.0
   + Version 1.2.0 is a modified version for python 3.7 compatibility.
   + An option in the plugin configuration page allows you to revert to version 1.1.0 if necessary.
   + Please open a topic on the Jeedom forum if you need to go back to version 1.1.0.

### 2023/2/14 beta bis
+ Indication of dependent module versions.

### 2023/02/14 beta
+ Device localization.
+ Some bug fixes.

### 2023/02/12 beta
+ Distinction between *manageable* and *unmanageable* devices.
+ Added DL550 and DL1200 models without non-manageable Wifi.
+ Mac address added to device configuration.
+ Some bug fixes.

### 2023/02/08 beta
+ Added logging for error analysis when detecting DL550s.

### 2023/02/07 beta
+ Fixed bug in country selection.

### 2023/02/07 beta
First release for
+ Validate automatic device detection.
+ Validate images.
+ Validate sending of commands to turn LEDs on or off.
