---
layout: default
title : devolo_cpl
plugin : devolo_cpl
lang: en_US
---

# Release Notes

### **May 11, 2026, stable**
+ **May 5, 2026 beta** has been released as a stable version

### May 5, 2026 beta
+ Python module devolo_plc_api: update from version 1.4.1 to 1.5.1
This new version includes handling of timeouts when connecting to devices.

### **May 4, 2026 (stable)**
+ **May 4, 2026 beta** moved to stable

### May 4, 2026 beta
+ A few minor, mostly cosmetic improvements.

### April 29, 2026 beta
+ Fixed a JavaScript bug in the macInfos modal

### April 27, 2026 beta
+ A few minor, mostly cosmetic improvements to the widgets.

### April 21, 2026 beta
+ New commands for throughput information between PLC devices

### **April 18, 2026 (stable)**
+ **April 12, 2026 beta** moved to stable

### April 12, 2026 beta
+ Removal of dependencies on jQuery. However, the Jeedom core still requires jQuery to function on mobile devices.

### **July 25, 2025 stable**
+ Forcing version 1.4.1 of the devolo_plc_api module (the plugin must be adapted and tested for version 1.5.1)

### **March 16, 2025, stable**
+ Cleaning logs

### **March 11, 2025 (stable)**
+ **March 10, 2025 beta** moved to stable

### March 10, 2025 beta
+ Translation Update

### March 10, 2025 beta
+ Bug fix (Magic 2 LAN DINrail)

### February 20, 2025 beta
+ Added an option to the plugin to hide passwords and other sensitive data in the logs

### **January 4, 2025, stable**
+ Synchronization log file renamed so that it appears on the plugin's configuration page

### **January 2, 2025 (stable)**
+ Fixed a bug causing an error message in the logs

### **October 24, 2024, stable**
+ Deleting the plugin_info/packages.json file

### **October 23, 2024 (stable)**
+ **September 4, 2024 beta** released as stable

### September 4, 2024 beta (bis)
+ Translation of the plugin into the following languages:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### September 4, 2024 beta
+ The plugin no longer includes modified versions of the devolo_plc_api Python module. The unmodified module is now installed
with dependencies in a Python virtual environment.
+ Dependencies must be reinstalled after updating the plugin
+ This version is compatible with Debian 12

### October 5, 2023 beta
+ Added exception handling to the daemon.
This addition may cause a lot of error messages. I look forward to your feedback on this.

### September 19, 2023 beta
+ The list of devices connected to the Wi-Fi network is refreshed every 15 seconds (previously every minute)

### **August 29, 2023 (stable)**
+ "Offline" monitoring was not disabled in some cases

### **August 25, 2023 (stable)**
+ Fixed a bug that caused messages to appear in `http.error`.

### **August 20, 2023 (stable)**
+ **August 15, 2023 beta** moved to stable

### August 15, 2023 beta
+ New plugin level: 13
  + Enable `offline` alerts on all devices using the plugin.
  + Add an `online` info command of type `info` to all existing devices.
+ New option to enable or disable alerts when a device is offline.

### **July 14, 2023 (stable)**
+ devolo_plv_api
  + Added version 1.3.2, which fixes a potential memory leak
  + Removal of Version 1.1.0
  + Removal of version 1.2.0
+ New plugin level: 12
  + Enabling devolo_plc_api 1.3.2

### **June 14, 2023 (stable)**
+ **June 13, 2023 beta** released as stable

### June 13, 2023 beta
+ Fixed a bug in the dashboard/action/j_h_m widget

### June 11, 2023 beta
+ The mobile widget for configuring the WifiGuest activation time allows you to change the value.

### June 9, 2023 beta
+ New plugin level: 11
  + New widgets showing the time remaining until the guest Wi-Fi turns off.
    + The activation duration for guest Wi-Fi cannot yet be changed via the
widget for mobile devices.

### May 26, 2023 (beta)
+ New plugin level: 10.
  + Configuration for using version 1.3.1 of devolo_plc_api
  + Creating commands for managing the guest Wi-Fi
    + The `duration guest` command (logicalId *guest_duration*) allows you to set the time, in minutes, after
which will disable the guest Wi-Fi. A value of 0 indicates that Wi-Fi should not be disabled.
+ Optimizing the synchronization script
+ The synchronization logs are no longer in "devolo_cpl_out" but in "devolo_synchronize"

### **May 23, 2023 (stable)**
+ **April 23, 2023 beta** moved to stable

### April 23, 2023 beta
+ Minimum Protobuf version: 4.21.12
  + Dependencies must be reinstalled after an update

### April 18, 2023 beta
+ New plugin level: 9.
  + Configuration for using version 1.3.0 of devolo_plc_api
+ Limit the entry of MAC address names to 30 characters
+ Added version 1.3.0 of the devolo_plc_api module (versions 1.1.0 and 1.2.0 are still available)

### April 17, 2023 beta
+ New plugin level: 8.
  + Create a `devolo_connection` table to store the history of
Wi-Fi connections.
  + Creation of a `devolo_macinfo` table for MAC address configurations.
+ Logging the connection history of Wi-Fi clients
+ New tab in the dashboard for graphs showing WiFi connection history.
  
### April 15, 2023 beta
+ Fixed the display of device images.

### April 14, 2023 beta
+ Added the *requests* module to the dependencies.

### March 9, 2023 beta
+ New plugin level: 7.
  + Panel Activation
 
+ Plugin Configuration
  + A new option lets you choose whether to display the names of devices
in tables and charts should be displayed with or without object names:
     + `[<object_name>][<device_name>]`
     + `<device_name>`
  + The plugin now includes a *panel*. This *panel* can be enabled or disabled
on the plugin's configuration page.
  + Interface
    + New *panel* for displaying graphs of data transfer rates between PLC devices.

### March 4, 2023 beta
+ New plugin level: 6.
  + Sorting commands for existing devices.
  + Creation of three commands for firmware versions and availability for
existing equipment.

+ Features
  + List of firmware versions and information on whether an update is available.

+ Interface
  + Change to how device names are displayed in the flow rate table.
  + Improved command management in the event of a model change for a
equipment.

+ code
  + Improvement.
  + Bug fixes.
  + Deleting unnecessary files.
  + The MAC addresses of the devices are entered during the first sync.

### February 24, 2023 (beta)
+ New plugin level: 5.
   + (Re)creation of the flow rate table.

+ Uninstallation
   + The flow rate table is no longer deleted.

+ Bug fix
   + The flow rate table was removed when the plugin was deactivated.

### February 22, 2023 (beta)

+ Update or installation:
   + New plugin Level: 4.
   + The retention period for data traffic is set to one week.
   + The table for recording flow rates has been created in the database.

+ Uninstallation
   + Removal of the PLC power ratings table.

+ Device Setup
   + New `Network` setting.

+ Interface:
   + Flow Rate Comparison Chart.

### February 18, 2023 beta

+ dependencies:
   + Adding the Python module *importlib-metadata*
> :bulb: You'll need to rerun the dependency installation after updating the plugin.

+ devolo_plc_api module:
   + Update to Version 1.2.0
   + Version 1.2.0 is a modified version designed to be compatible with Python 3.7.
   + An option on the plugin's configuration page allows you to revert to version 1.1.0 if necessary.
   + Please start a thread on the Jeedom forum if you need to roll back to version 1.1.0.

### February 14, 2023 beta bis
+ List of versions for dependent modules.

### February 14, 2023 beta
+ Device location.
+ A few bug fixes.

### February 12, 2023 beta
+ Distinguishing between *manageable* and *non-manageable* devices.
+ Added the DL550 and DL1200 models, which are non-Wi-Fi and non-manageable.
+ Add the MAC address to the device settings.
+ A few bug fixes.

### February 8, 2023 beta
+ Added logging for error analysis during DL550 detection.

### February 7, 2023 beta
+ Fixed a bug in the country selection.

### February 7, 2023 beta
First version for
+ Enable automatic device detection.
+ Validate the images.
+ Confirm the command to turn the LEDs on or off.
