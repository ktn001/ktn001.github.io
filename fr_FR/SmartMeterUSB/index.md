---
layout : default
title : SmartMeterUSB
---

# PLugin "SmartMeterUSB" pour Jeedom

Ce plugin permet de remonter, via MQTT, les informations transmises par votre compter via le port P1 et un convertisseur MBUS<->USB.

Le convertisseur doit être un MBUS **Slave**. Le plugin a été testé avec ce [convertisseur](https://fr.aliexpress.com/item/1005006212611801.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.2.7aafXfI0XfI0dD&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=c8572017-9a80-4506-a93f-0c04706d9496&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:c8572017-9a80-4506-a93f-0c04706d9496,tpp_buckets:668%232846%238107%231934&pdp_npi=4%40dis%21CHF%219.07%217.62%21%21%2110.44%218.77%21%402103871e17243213075876658ecc43%2112000036302876309%21rec%21CH%21748220648%21X&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A).
Le plugin utilise le module Python [smartmeter-datacollector](https://github.com/scs/smartmeter-datacollector), le projet donne ce type de [convertisseur](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/) comme exemple de convertisseur pouvant être utilisé.

#Compteurs compatibles
{: .NUM}

Les compteur suivants sont indiqué comme étant compatible avec le module python *smartmeter-datacollector* et donc intégrés dans le plugin:
* Landis+Gyr E360 (pas testé dans le plugin)
* Landis+Gyr E450 (testé dans le plugin)
* Landis+Gyr E570 (pas testé dans le plugin)
* Iskraemeco AM550 (pas testé dans le plugin)
* Kamstrup OMNIPOWER avec HAN-NVE (pas testé dans le plugin)

Tout retour d'information sur l'utilisation de l'un des compteurs qui n'a pas été testé dans le plugin sera le bienvenu.

# Installation et configuration du plugin
{: .num}

## Prérequis
{: .num}

Le plugin [**MQTT Manager**](https://market.jeedom.com/index.php?v=d&p=market_display&id=4213) doit être installé et fonctionel.

> :bulb: Le plugin ne supporte pas encore la communication en SSL avec le brocker MQTT

## Installation
{: .num}

Le plugin s'installe de manière standard depuis le market.

## Configuration
{: .num}

Après installation et activation du plugin, l’installation des dépendances devrait débuter sauf si la gestion automatique a été
désactivée au préalable. Dans ce cas, il faudra cliquer sur le bouton **Relancer** pour initier cette phase d’installation.

Il est recommandé de laisser les deux options **Création auto des compteurs** et **Création auto des commandes** sélectionnées.
Les équipements **Compteur** et leurs commandes seront ainsi créés automatiquement.

