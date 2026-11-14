---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: fr_FR
---
# Release notes

**IMPORTANT**

Pour rappel s’il n’y a pas d’information sur la mise à jour, c’est que celle-ci concerne uniquement
de la mise à jour de documentation, de traduction ou de texte.

### 14/11/2026 (Beta)
+ Ajout d'un champ "Commentaire" dans la page de configuration de l'équipement.

### 13/11/2026 (Beta)
+ Les fonctions de gestion des token ont étés revue et mises à jour. Pas de changement visible pour
  l'utilisateur.
+ Le deamon a été réécrit. Il n'utilise plus le module *signalrcore* mais *pyeasee*. Une
  ammélioration de la stabilité est attendue.
+ Le nom du fichier de log du daemon n'est plus *EaseeCharger_daemon.out* mais *EaseeCharger_daemon*
+ Les logicalId des commandes avec les infos remontées du cloud ont été changés. Le logicalId est
maintenant l'id de l'observation remontée du cloud via signalr.
+ Nombreuses nouvelles commandes créées dynamiquement lors de la réception d'infos du cloud.
+ Les informations remontées du cloud dont la valeur est un code sont dédoublées:
  +  Une commande avec le code némérique remonté du cloud
  +  Une commande avec le texte en clair. Ce texte est traduit dans le langue de l'interface jeedom.

### 17/01/2025
+ Passage de la beta du 12/01/2025 en stable

### 12/01/2025 (Beta)
+ Ammélioration de la communication deamon => jeedom
+ Correction enregistrement token en cache

### 12/01/2025 (Beta)
+ Correction de bug
 
### 31/12/2024 (Beta)
+ Réécriture d'une bonne partie du code
+ Core version 4.4.9 ou supérieure requise
+ Compatible Debian 12
+ N'utilise plus function Jquery

### 11/11/2024
+ Correction de bug dans l'installation des dépendances

### 09/11/2024
+ Le daemon tourne dans un venv python

### 28/07/2024
+ Passage en stable des betas précédentes
+ Mise à jour des commandes lors de la mise à jour du plugin

### 28/07/24 (Beta)
+ Refonte de la création et de la mise à jour des commandes.   
  Il est conseillé de mettre les commandes à jour via le bouton `Mettre à jour les commandes` sur la
  page des commandes de chaque Chargeur 

### 26/07/2024 (Beta)
+ Correction de widgets
+ Refonte de la page des commandes

### 24/07/2024
+ Configuration d'un heartbeat lors de l'activation du plugin

### 1/7/2023
+ Changement d'url pour les APIs Easee

### 17/10/2022
+ Info indiquant si la communication avec le cloud est en wifi ou cellulaire

### 14/10/2022
* Passage en stable
* Transparence des tuiles du widget pour visibilité du graphique de fond
* Boutons sur le widget des équipements pour la mise en/hors pause

### 30/09/2022 (Beta)
* Le port de démon n'est plus réinitialisé à la valeur par defaut lors de l'activation de plugin
* Une class a été renommée dans le code php
* Infos pour la qualité des signeaux wifi et cellulaire
* Création d'un widget pour les équipements EaseeCharger (sans le bouton de mise en pause de la
  charge)

### 24/08/2022 (Beta)
* La port de démon n'est plus réinitialisé à la valeur par defaut lors de l'activation de plugin

### 21/08/2022 (Beta)
* Ajout d'un d'un compteur de redémarrages par le watcher.

### 21/08/2022 (Beta)
* Ajout d'un watcher pour relancer les connections du daemon après déconnoction non signalée.

### 18/08/2022 (Beta)
* Première publication
