---
layout : default
title : devolo_cpl
---

# PLugin "devolo_cpl" pour Jeedom

Le plugin permet d'intégrer les équipements CPL de Devolo dans Jeedom

> :bulb: Attention si vous partagez des fichiers de logs, les passwords des
appareils peuvent y figurer en clair!

# Appareils compatibles ou non
{: .num}

## Les appareils manageables
{: .num}

Le plugin utilise le module python [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
La documentation de ce module précise qu'il est compatible avec les appareils suivants:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN triple
+ Magic 2 DinRail
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repeater 5400
+ Repeater 3000
+ Repeater 1200
+ Repeater ac+
+ Repeater ac
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wifi
+ dLAN 550 WiFi

## Les appareils non manageables
{: .num}

Les appareils, Devolo ou d'autres marques, qui ne sont pas dans la liste des appareilss
manageables peuvent être configurés dans le plugin. Ces appareils sont des appareils
*non manageable*.

Les équipements pour les appareils *non manageable* n'ont pas de commande. Aucune action
ne peut donc être effectuée sur ces appareils et aucun statut ne peut être remonté dans
Jeedom.

Dans la version actuelle du plugin, la seule utilité de configurer ces appareilis
dans Jeedom est d'en documenter l'existance. Ils seront probablement pris en compte
dans une version future lors de la visualisation des vitesses de transfert entre les
appareils.

Des templates sont prévus dans le plugin pour les modèles suvants:

+ DL1200 LAN
+ DL550 LAN
+ autres

# Installation et configuration du plugin
{: .num}
![Configuration du plugin](/images/devolo_cpl/configuration_plugin.png)

## Installation du plugin
{: .num}

Le plugin s'installe de manière standard depuis le market de Jeedom. Après l'avoir
installé, il faut l'activer puis lancer l'installation des dépendances

## Configuration du plugin
{: .num}
**Plugin**
: Configuration globale du plugin:
    + ***Pays***
    : Le pays dans lequel de trouvent les équipement Devolo. Ce paramètre sert
      à sélectioner les images des appareils avec le bon type de prises.

**Démon**
: Configuration du démon:
    + ***Port***
    : Numéro du port TCP utilisé pour la communication entre Jeedom et le démon.
      Le port 34741 est configuré par défaut. Un autre port peut être défini en
      cas de conflit avec un autre plugin ou logiciel qui utilise le même port.

## Lancement du démon
{: .num}
Après avoir installé les dépendances et effectué la configuration du plugin,
il faut lancer le démon.

# Configuration des équipements
{: .num}

Les équipements pour les appareils manageables peuvent être créé automatiquements
a condition qu'ils se trouvent dans le même réseau que le serveur jeedom et qu'ils
ne soient pas en veille. Sinon, il faudra les créer manuellement comme les appareils
non manageables.

## La méthode automatique
{: .num}

Sur la page de gestion du plugin, cliquer sur l'icône `synchronisation`: 

![Icone de synchronisation](/images/devolo_cpl/icones_gestion_plugin.png)

Un équipement Jeedom est automatiquement créé pour chaque appareil détecté.

+ Le n° de série de l'appareil est configuré dans Jeedom. S'il existe déjà un
  équipement avec ce numéro de série, le programme de synchonisation ne crée
  pas un nouvel équipement mais met à jour l'équipement existant.
+ Le nom de l'équipement est le nom configuré dans l'appareil ou le n° de
  série s'il n'y a pas de nom configuré.
+ L'adress IP de l'appareil est renseignée dans l'équipement Jeedom.
+ Le type d'appareil est renseigné dans l'équipement Jeedom et l'image de
  l'équipement est sélectionnée en tenant compte du pays configuré pour le plugin.
+ Les commandes de l'équipement sont créées.

## La méthode manuelle
{: .num}

Sur la page de gestion du plugin, cliquer sur l'icône `Ajouter`: 

![Icone de synchronisation](/images/devolo_cpl/icones_gestion_plugin.png)

Il faut saisir le nom du nouvel équipement avant d'accéder à la page de
configuration de l'équipement.

![équipement non configuré](/images/devolo_cpl/equipement_non_configure.png)

Il faut
+ Saisir le numéro de série de l'appareil. *(Si vous ne connaissez pas de n°
  de série, vous pouvez saisir un texte quelquonque.)*
+ Saisir l'adresse mac de l'appareil.
+ Saisir l'adresse IP de l'appareil. *(Uniquement pour les appareils manageables)*
+ Sélectionner le type d'appareil. *(Uniquement pour les appareils manageables)*

> :bulb: Le n° de série doit être unique mais, pour le moment, le plugin ne le vérifie pas.

##### Equipement manageable:
![équipement manageable_configuré](/images/devolo_cpl/equipement_manageable_configure.png)

##### Equipement non manageable:
![équipement non manageable_configuré](/images/devolo_cpl/equipement_non_manageable_configure.png)

## Finalisation de la configuration
{: .num}

Après avoir créé un équipement automatiquement ou manuellement, il faut
+ Sasir le password.
+ L'activer.
+ Faire les configurations habituelles pour les équipements Jeedom.

## Les commandes
{: .num}

Les commandes des équipements sont créées ou supprimées automatiquement lorsque
le modèle de l'équipement est modifié. Les commandes sont créées pour les
modèles manageables et supprimées pour les modèles non manageables.

Les appareils ne remontent pas leurs changement d'état en temps réel. Les
commandes de type info (à l'exceptions de la commande locate) sont mise à jour
toutes les 5 minutes via un cron. Les infos pour un appareil sont égalements
actualisées lorsqu'une commande est envoyée à l'appareil via le deamon ou lorsque
la commande refresh est activée.

### Leds
{: .num}

+ Les commandes action avec le logicalId `leds_on` et `leds_off` permettent
  d'activer/désactiver les leds de l'appareil.
+ La commande avec le logicalId `leds` indique si les leds sont activée ou non.
  Cette info est mise à jour avec les information remontées de l'appareil.

### Locate
{: .num}

+ La commande action `locate_on` active la localisation de l'appareil en faisant
  clignoter drant deux minutes la led CPL de l'appareil.
+ La commande action `locate_off` désactive la localisation avant l'expiration des
  deux minutes.
+ Les appareils ne retournent pas d'information indiquant si la lacalisation est
  active ou pas. L'info `locate` doit donc émuler l'état de l'appareil:
    + L'info est mis à 1 lors de l'activation par `locate_on`.
    + L'info repasse automatiquement à 0 après 2 minutes.
    + L'info est mise à 0 avant l'expiration des deux minutes si la commande `locate_off`
      est activée.
    + L'état de l'info n'est pas modifié si la localisation est activée ou
      désactivée par un autre logiciel que le plugin (par Devolo cockpit par exemple).
