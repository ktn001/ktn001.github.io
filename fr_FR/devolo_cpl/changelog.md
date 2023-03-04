---
layout: default
title : devolo_cpl
---

# Release notes

### 2023/03/04 beta
+ Nouveau pluginlevel: 6.
  + Tris des commandes des équipements existants.
  + Création de trois commandes pour les versions et disponibilités de firmware pour
    les équipements éxistants.

+ Fonctionnalité
  + Remontée des versions des firmwares et information si un update est disponible.

+ Interface
  + Modificaton de l'affichage des noms des équipements dans le tableau des débits.
  + Amélioration de la gestion des commandes en cas de changement de modèle d'un
    équipement.

+ code
  + Amélioration.
  + Corrections de bugs.
  + Suppression de fichiers inutiles.
  + Les mac adresses des équipements sont renseignées dès la première synchro.

### 2023/02/24 beta
+ Nouveau pluginlevel: 5.
   + (Re)création de la table des débits.

+ Désinstallation
   + La table des débits n'est plus supprimée.

+ Correction de bug
   + La table des débits était supprimée lors de la désactivation du plugin.

### 2023/02/22 beta

+ Mise à jour ou installation:
   + Nouveau pluginLevel: 4.
   + La rétention des débits est initialisée à une semaine.
   + La table pour l'enregistrement des débits est créée dans la DB.

+ Désinstallation
   + Suppression de la table des débits CPL.

+ Configuration des équipements
   + nouveau paramètre `Réseau`.

+ Interface:
   + Tableau de présentation des débits.

### 2023/02/18 beta

+ dépendances:
   + Ajout du module python *importlib-metadata*
> :bulb: L'installation des dépendances doit être relancée après mise à jour du plugin.

+ module devolo_plc_api:
   + Passage à la version 1.2.0
   + La version 1.2.0 est une version modifiée pour être compatible python 3.7.
   + Une option dans la page de configuration du plugin permet de revenir à la version 1.1.0 en cas de nécessité.
   + Merci d'ouvrir un sujet sur le forum Jeedom si vous devez repasser à la version 1.1.0.

### 2023/2/14 beta bis
+ Indication des versions des modules dépendants.

### 2023/02/14 beta
+ Localisation des appareils.
+ Quelques corrections de bugs.

### 2023/02/12 beta
+ Distinction des appareils *manageables* et *non manageables*.
+ Ajout des modèles DL550 et DL1200 sans Wifi non manageables.
+ Ajout de l'adresse mac dans les configurationis des équipements.
+ Quelques corrections de bugs.

### 2023/02/08 beta
+ Ajout de logging pour analyse erreurs lors de la détection des DL550.

### 2023/02/07 beta
+ Correction d'un bug dans la sélection du pays.

### 2023/02/07 beta
Première version pour
+ Valider la détection automatique des appareils.
+ Valider les images.
+ Valider l'envoi de commande pour allumer ou éteindre les LEDS des appareils.
