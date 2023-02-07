---
layout : default
title : devolo_cpl
---

# PLugin "devolo_cpl" pour Jeedom

Le plugin permet d'intégrer les équipements CPL de Devolo dans Jeedom

< :bulb: Attention si vous partagez des fichier de log. Les passwords de appareils peuvent y figurer en clair

# Installation et configuration du plugin
{: .num}
![Configuratin du plugin](/images/devolo_cpl/configuration_plugin.png)

## Installation du plugin
{: .num}

Le plugin s'installe de manière standard depuis le market de Jeedom. Après l'avoir installé, il faut l'activer puis lancer l'installation des dépendances

## Configuration du plugin
{: .num}
**Plugin**
: Configuration globale du plugin:
    + ***Pays***
    : Le pays dans lequel de trouvent les équipement Devolo. Ce paramètre sert à sélectioner les images des appareils avec le bon type de prises.

**Démon**
: Configuration du démon:
    + ***Port***
    : Numéro du port TCP utilisé pour la communication entre Jeedom et le démon. Le port 34741 est configuré par défaut. Un autre port peut être défini en cas de conflit avec un autre plugin ou logiciel qui utilise le même port.

## Lancement du démon
{: .num}
Après avoir installé les dépendances et effectué la configuration du plugin, il faut lancer le démon.

# Configuration des équipements
{: .num}

## La méthode automatique
{: .num}

> :bulb: Il n'y a pas encore eu de test en ce sens, mais il est fort probable que les équipements qui ne se touvent pas dans le même LAN (ou subnet) que Jeedom ne puissent pas être détectés. Si ceci se confirme, il faudra créer les équipements manuellement.

> :bulb: Les appareils en mode `veille` ne peuvent pas être détectés. Il faut les `réveiller` en branchant un appareil allumé au port RJ45 ou créer l'équipement manuellement.

Sur la page de gestion du plugin, cliquer sur l'icône `synchronisation`: 

![Icone de synchronisation](/images/devolo_cpl/icones_gestion_plugin.png)

Un équipement Jeedom est automatiquement créé pour chaque appareil détecté.

+ Le n° de série de l'appareil est configuré dans Jeedom. S'il existe déjà un équipement avec ce numéro de série, le programme de synchonisation ne crée pas un nouvel équipement mais met à jour l'équipement existant.
+ Le nom de l'équipement est le nom configuré dans l'appareil ou le n° de série s'il n'y a pas de nom configuré.
+ L'adress IP de l'appareil est renseignée dans l'équipement Jeedom.
+ Le type d'appareil est renseigné dans l'équipement Jeedom et l'image de l'équipement est sélectionnée en tenant compte du pays configuré pour le plugin.
+ Les commandes de l'équipement sont créées.

## La méthode manuelle
{: .num}

Sur la page de gestion du plugin, cliquer sur l'icône `Ajouter`: 

![Icone de synchronisation](/images/devolo_cpl/icones_gestion_plugin.png)

Il faut saisir le nom du nouvel équipement avant d'accéder à la page de configuration de l'équipement.

![équipement non configuré](/images/devolo_cpl/equipement_non_configure.png)

Il faut
+ Saisir le numéro de série de l'appareil
+ Saisir l'adresse IP de l'appareil
+ Sélectioner le type d'appareil

> :bulb: Le n° de série doit être unique mais le plugin ne vérifie pas, pour le moment, s'il y a un autre équipement configuré avec le même n° de série.

![équipement configuré](/images/devolo_cpl/equipement_configure.png)

## Finalisation de la configuration
{: .num}

Après avoir créé un équipement automatiquement ou manuellement, il faut
+ Sasir le password.
+ L'activer.
+ Faire les configurations habituelles pour les équipements Jeedom.

### Utilisation
{: .num}

Une fois l'équipement configuré, vous pouvez:
+ Activer les LEDS.
+ Désactiver les LEDS.
+ C'est tout pour le moment... mais ça viendra.
