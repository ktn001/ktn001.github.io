---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: en_US
---
# Release Notes

**IMPORTANT**

As a reminder, if there is no information about the update, it means that it applies only to
documentation updates, translations, or text revisions.

### 13/11/2026
+ The token management features have been reviewed and updated. No visible changes for
the user.
+ The daemon has been rewritten. It no longer uses the *signalrcore* module but *pyeasee* instead. A
Improved stability is expected.
+ The name of the daemon's log file is no longer *EaseeCharger_daemon.out* but *EaseeCharger_daemon*
+ The logicalIDs of the commands containing data retrieved from the cloud have been changed. The logicalID is
Now the observation ID is retrieved from the cloud via SignalR.
+ Many new commands are dynamically created when information is received from the cloud.
+ Information retrieved from the cloud, where the value is a code, is duplicated:
  +  A command using the numeric code retrieved from the cloud
  +  A command with plain text. This text is translated into the language of the Jeedom interface.

### 17/01/2025
+ Release of the beta version from January 12, 2025, as a stable release

### January 12, 2025 (Beta)
+ Improvements to communication between Daemon and Jeedom
+ Fix for cached token registration

### January 12, 2025 (Beta)
+ Bug fix
 
### 12/31/2024 (Beta)
+ Rewriting a large portion of the code
+ Core version 4.4.9 or later required
+ Compatible with Debian 12
+ No longer uses the jQuery function

### 11/11/2024
+ Bug fix in dependency installation

### 09/11/2024
+ The daemon runs in a Python venv

### 28/07/2024
+ Previous beta versions have been released as stable versions
+ Updating commands when updating the plugin

### 07/28/24 (Beta)
+ Redesign of the creation and updating of commands.
We recommend updating the commands using the `Update Commands` button on the
Order page for each Charger

### July 26, 2024 (Beta)
+ Widget fixes
+ Redesign of the command page

### 24/07/2024
+ Configuring a heartbeat when the plugin is activated

### 1/7/2023
+ URL change for Easee APIs

### 17/10/2022
+ Information indicating whether communication with the cloud is via Wi-Fi or cellular

### 14/10/2022
* Switching to stable
* Transparency of the widget tiles to show the background graph
* Buttons on the devices widget for pausing and resuming

### September 30, 2022 (Beta)
* The daemon port is no longer reset to its default value when the plugin is activated
* A class has been renamed in the PHP code
* Tips for Improving Wi-Fi and Cell Phone Signal Quality
* Creating a widget for EaseeCharger devices (without the pause button on the
(load)

### August 24, 2022 (Beta)
* The daemon port is no longer reset to its default value when the plugin is activated

### August 21, 2022 (Beta)
* Added a restart counter by the watcher.

### August 21, 2022 (Beta)
* Added a watcher to restart the daemon's connections after an unreported disconnection.

### August 18, 2022 (Beta)
* First published
