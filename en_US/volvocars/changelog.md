---
layout : default
title : SmartMeterUSB
plugin : SmartMeterUSB
lang : en_US
---

# Release note

### 2025/03/22
+ Three commands to start/stop the fuel engine.
  + *engineStart* to start.
  + *engineStop* to stop.
  + *timeToRun* to define the run time (from 1 to 15 minutes).

+ These commands are only created if endpoint *commands* find **ENGINE_START** and **ENGINE_STOP**.
+ **A synchronization must be launched after plugin update to create these commands**.

**My Volvo is 100% electric. So I haven't had a chance to test these controls. I look forward to hearing from you.**

### **2024/11/28**
+ Beta version of 2024/11/26 now stable.

### 2024/11/26
+ Correction for vehicles without sunroof:
  + A vehicle's `roofState`, `roofOpen` and `roofClosed` commands will be removed when the plugin is updated if
    the value of the `roofState` command is not **CLOSED**, **OPEN** or **AJAR**.

### **2024/11/16**
+ Beta version of 2024/11/13 now stable.

### 2024/11/13 
+ Bug fixes
+ Creation of **allDoorsClosed** and **allWinsClosed** commands.
   + These two commands are automatically added to existing vehicles when the plugin is updated.
+ Widget for Dashboard 

### **2024/11/06**
+ Add a plugin configuration parameter for the personal volvocars API access key.
  **WARNING** A key must be generated on developers.volvocars. As the procedure is not yet described in the plugin documentation,
  I leave you to consult this [Cummunity topic](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
  to create your own key.

### **2024/11/05**
+ Fixed a bug that blocked registration of the first account's token

### **2024/11/04**
+ Beta version of 2024/11/04 now stable.

### 2024/11/04 beta
+ Implementation of 2-phase authentication for Volvocars accounts.     
  **WARNING:**
  Accounts must be edited and saved to launch 2-phase authentication.

### **2024/10/15**
+ Fixed a bug on the panel that affected vehicles with internal combustion engines.

### **2024/10/10**
+ Beta version of 2024/10/09 now stable.

### 2024/10/09 beta (bis)
+ Addition of a **visible on panel** option in vehicle configuration.

### 2024/10/09 beta
+ Commands directly linked to an endpoint cannot be deleted. They would be recreated
  automatically on receipt of information from an endpoint.
+ bug fix in commandis sorting.

### 2024/10/08 beta
+ First official beta version
