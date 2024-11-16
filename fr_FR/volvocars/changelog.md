---
layout: default
title : volvocars
lang: fr_FR
---

# Release notes

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
