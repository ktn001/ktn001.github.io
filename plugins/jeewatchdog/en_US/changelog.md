---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: en_US
---

# Release Notes

### October 1, 2026 (BETA)
+ Fixed a bug that prevented the creation of a device

### October 1, 2026 BETA
+ Rewriting the Shelly configuration code
  + We're moving from a *brute-force* method that redefined everything to a *subtle* method that redefines only what needs to be changed.
+ The Shelly is automatically (re)configured after each backup of the Jeedom equipment.
+ The <**Configure Switch**> button is renamed <**Force Switch Configuration**>. It changes from green to orange.
+ The kick's cron job is enabled/disabled using eqLogic.
+ The Shelly is automatically deconfigured before a device is deleted

### **September 21, 2026 STABLE**
+ The beta version released on September 17, 2026, has been moved to the stable branch.

### September 17, 2026 BETA
+ Added a button to the device configuration page to open a new tab to the Shelly administration page.
+ **Experimental:** Added support for the *Shelly Power Strip*.

### September 15, 2026 BETA
+ First version.
