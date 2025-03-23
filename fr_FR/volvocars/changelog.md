---
layout: default
title : volvocars
lang: fr_FR
---

# Release notes

### 2025/03/23
+ Tentative de correction d'un bug au démarrage du du moteur thermique.

### 2025/03/22
+ Ajout de trois commandes pour démarrer/arrêter le moteur thermique. 
  + *engineStart* pour démmarer.
  + *engineStop* pour arrêter.
  + *timeToRun* pour définir la durée de fnctionnement (de 1 à 15 minutes).

+ Ces commande ne sont créées que si le endpoint *commands* retroune **ENGINE_START** et **ENGINE_STOP**
+ **Une synchronisation doit être lancée après la mise à jour du plugin pour créer ces commandes**

**Ma Volvo est 100% électrique. Je n'ai donc pas eu la possibilité des tester ces commandes. J'attends vos retours.**

### **2024/11/28**
+ Passage en stable de la version beta du 2024/11/26

### 2024/11/26
+ Correction pour les véhicules sans toit ouvrant:
  + Les commandes `roofState`, `roofOpen` et `roofClosed` d'un véhicule seront supprimées lors de la mise à jour du plugin si
    la valeur de la commande `roofState` n'est pas **CLOSED**, **OPEN** ou **AJAR**.

### **2024/11/16** 
+ Passage en stable de la version beta du 2024/11/13

### 2024/11/13 beta
+ Corrections de bugs
+ Création des commandes **allDoorsClosed** et **allWinsClosed**.
   + Ces deux commandes sont automatiquement ajoutées aux véhicules existants lors de la mise à jour du plugin.
+ Widget pour les dashboard

### **2024/11/06**
+ Ajout d'un paramètre de configuration du plugin pour la clè personnelle d'accès aux API volvocars.
  **ATTENTION** Une clé doit être générée sur le site developers.volvocars. La procédure n'étant pas encore décrite dans la documentation
  du plugin, je vous laisse consulter ce [sujet sur la Cummunity](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
  pour créer votre propre clé.

### **2024/11/05** 
* Correction d'un bug qui bloquait l'enregistrement du token du premier account

### **2024/11/04** 
+ Passage en stable de la version beta du 2024/11/04

### 2024/11/04 beta
+ Implémentation de l'authentification 2 phases des comptes Volvocars    
  **ATTENTION:**
  Il est nécessaire d'éditer puis de sauvegarder les accounts pour lancer l'authentification 2 phase.

### **2024/10/15**
+ Correction d'un bug sur le panel qui concernait les véhicules avec un moteur thermique.

### **2024/10/10**
+ Passage en stable de la version beta du 2024/10/09

### 2024/10/09 beta (bis)
+ Ajout d'une option **visible sur le panel** dans la configuration des véhicules

### 2024/10/09 beta
+ Les commandes directement liée à un endpoint ne peuvent pas être supprimées. Elle seraient recréées
  automatiquement à la réception d'une info remontée via un endpoint.
+ Correction d'un bug dans le tri des commandes

### 2024/10/08 beta
+ Première version beta officielle
