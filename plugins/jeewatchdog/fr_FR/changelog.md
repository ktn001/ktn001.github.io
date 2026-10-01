---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: fr_FR
---

# Release notes

### 01/10/2026 bis BETA
+ Correction d'un bug qui bloquait la création d'un équipement

### 01/10/2026 BETA
+ Réécriture du code de configuration du Shelly
  + On passe d'une méthode *bourrin* qui redéfinissait tout à une méthode *en finesse* qui redéfini uniquement ce qui doit être modifié.
+ Le Shelly est (re)congiguré automatiquement après chaque sauvegarde de l'équipement Jeedom.
+ Le bouton <**Configurer le switch**> est renommé <**Forcer la configuration du switch**>. Il passe du vert à l'orange.
+ Le cron du kick est activé/désactivé avec l'eqLogic. 
+ Le Shelly est déconfiguré automatiquement avant la suppression d'un équipement

### **21/09/2026 STABLE**
+ Beta du 17/09/2026 passée en stable.

### 17/09/2026 BETA
+ Ajout d'un bouton sur la page de configuration de l'équipement pour ouvrir un nouvel onglet sur la page dd'administration du Shelly.
+ **Expérimental:** Ajout du support du *Shelly Power Strip*.

### 15/09/2026 BETA
+ Première version.
