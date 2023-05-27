---
layout: default
title : devolo_cpl
---

# Release notes

### 2023/??/??
+ Nouveau pluginlevel: 9.
  + Configuration pour utiliser la version 1.3.1 de devolo_plc_api 
+ Ajout d'une option de plugin pour limiter le loglevel debug
+ Optimisation du script de synchonisation
+ Les logs des synchronisation ne sont plus dans "devolo_cpl_out" mais dans "devolo_synchroniez"

### 2023/05/23 stable
+ **2023/04/23 beta** passée en stable

### 2023/04/23 beta
+ Version min de protobuf: 4.21.12
  + Les dépendances doivent être réinstallées après mise à jour

### 2023/04/18 beta
+ Nouveau pluginlevel: 9.
  + Configuration pour utiliser la version 1.3.0 de devolo_plc_api 
+ Limitation de la saisie des noms des adresses mac à 30 caractères
+ Ajout de la version 1.3.0 du module devolo_plc_api (les versions 1.1.0 et 1.2.0 sont toujours disponibles)

### 2023/04/17 beta
+ Nouveau pluginlevel: 8.
  + Création d'une table `devolo_connection` pour enregistrer l'historique des
    connections Wifi.
  + Création d'une table `devolo_macinfo` pour les configurations des adresses mac.
+ Enregistrement de l'historique des connections de clients Wifi
+ Nouveau tab dans le panel pour les graphiques des historiques de connections WiFi.
  
### 2023/04/15 beta
+ Correction de l'affichage des images des équipements.

### 2023/04/14 beta
+ Ajout du module *requests* dans les dépendances.

### 2023/03/09 beta
+ Nouveau pluginlevel: 7.
  + Activation du panel
 
+ Configuration du plugin
  + Une nouvelle option permet de définir si l'affichage des noms des équipements
    dans les tableaux et graphiques doivent être affichés avec ou sans les noms d'objets:
     + `[<nom_objet>][<nom_équipement>]`
     + `<nom_équipement>`
  + Le plugin contient maintenant un *panel*. Ce *panel* peut être activé ou désactivé
    sur la page de configuration du plugin.
  + Interface
    + Nouveau *panel* pour l'affichage de graphiques des débits entre les équipements CPL.

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
