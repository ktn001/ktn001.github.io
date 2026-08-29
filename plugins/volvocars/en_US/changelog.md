---
layout: default
title : Volvo cars
plugin : volvocars
lang: en_US
---

# Release Notes

### **2026/06/12**
+ Fixing a PHP 8 warning. Thanks @bernard-dandrea

### **2026/03/26**
+ Release of the stable version on March 24, 2026, following the beta version

### 2026/03/24
+ Display CollectDate and valueDate when the mouse hovers over the "info" commands on the widget for the panel

### **2026/03/23**
+ Changes to the connection API flow following an update at Volvo

### **2026/03/19**
+ Release of the stable version of the beta from March 11, 2026

### March 11, 2026 beta
+ Displaying CollectDate and valueDate when the mouse hovers over the "info" commands on the dashboard widget

### **2026/03/10**
+  Migration from "energy" API V1 to V2

### 2025/03/24
+ Configuration correction and creation of the 'timeToRun' command

### 2025/03/23
+ Attempt to fix a bug that occurs when the combustion engine starts.

### 2025/03/22
+ Added three commands to start/stop the internal combustion engine.
  + *engineStart* to start.
  + *engineStop* to stop.
  + *timeToRun* to set the runtime (from 1 to 15 minutes).

+ These commands are created only if the *commands* endpoint returns **ENGINE_START** and **ENGINE_STOP**
+ **Synchronization must be initiated after updating the plugin to create these commands**

**My Volvo is 100% electric, so I haven’t had a chance to test these commands. I look forward to hearing your feedback.**

### **2024/11/28**
+ Release of the stable version on November 26, 2024, following the beta phase

### 2024/11/26
+ Correction for vehicles without a sunroof:
  + The `roofState`, `roofOpen`, and `roofClosed` commands for a vehicle will be removed when the plugin is updated if
The value of the `roofState` command is not **CLOSED**, **OPEN**, or **AJAR**.

### **2024/11/16** 
+ Release of the stable version on November 13, 2024

### November 13, 2024 beta
+ Bug fixes
+ Creation of the **allDoorsClosed** and **allWinsClosed** commands.
   + These two commands are automatically added to existing vehicles when the plugin is updated.
+ Dashboard widget

### **2024/11/06**
+ Added a plugin configuration setting for the personal access key to the volvocars APIs.
**IMPORTANT** A key must be generated on the developers.volvocars website. The procedure has not yet been described in the documentation.
For more information on the plugin, please check out this [Community thread](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
to create your own key.

### **2024/11/05** 
* Fixed a bug that prevented the token for the first account from being saved

### **2024/11/04** 
+ Release of the stable version of the beta on November 4, 2024

### November 4, 2024 beta
+ Implementation of two-factor authentication for Volvocars accounts
**WARNING:**
You must edit and then save the accounts to enable two-factor authentication.

### **2024/10/15**
+ Fixed a bug on the dashboard related to vehicles with internal combustion engines.

### **2024/10/10**
+ Release of the stable version on October 9, 2024

### October 9, 2024 beta (bis)
+ Added an option **visible on the panel** in the vehicle configuration

### October 9, 2024 beta
+ Commands directly linked to an endpoint cannot be deleted. They would be recreated.
automatically upon receiving information relayed via an endpoint.
+ Fixed a bug in command sorting

### October 8, 2024 beta
+ First official beta version
