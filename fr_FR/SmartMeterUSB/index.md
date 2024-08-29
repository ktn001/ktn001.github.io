---
layout : default
title : SmartMeterUSB
plugin : SmartMeterUSB
lang : fr_FR
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# Plugin "SmartMeterUSB" pour Jeedom

Ce plugin permet de remonter, via MQTT, les informations transmises par votre
compteur via le port P1 et un convertisseur MBUS<=>USB.

Le convertisseur doit être du type **MBUS Slave**. Le plugin a été testé avec
ce [convertisseur](https://fr.aliexpress.com/item/1005006212611801.html?spm=a2g0o.detail.pcDetailTopMoreOtherSeller.2.7aafXfI0XfI0dD&gps-id=pcDetailTopMoreOtherSeller&scm=1007.40050.354490.0&scm_id=1007.40050.354490.0&scm-url=1007.40050.354490.0&pvid=c8572017-9a80-4506-a93f-0c04706d9496&_t=gps-id:pcDetailTopMoreOtherSeller,scm-url:1007.40050.354490.0,pvid:c8572017-9a80-4506-a93f-0c04706d9496,tpp_buckets:668%232846%238107%231934&pdp_npi=4%40dis%21CHF%219.07%217.62%21%21%2110.44%218.77%21%402103871e17243213075876658ecc43%2112000036302876309%21rec%21CH%21748220648%21X&utparam-url=scene%3ApcDetailTopMoreOtherSeller%7Cquery_from%3A).   
Le plugin utilise le logiciel du projet Python [smartmeter-datacollector](https://github.com/scs/smartmeter-datacollector),
la page wiki de ce projet donne ce type de [convertisseur](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/)
comme exemple de convertisseur pouvant être utilisé.

# Compteurs compatibles
{: .num}

Les compteurs suivants sont indiqués comme étant reconnus par le projet python
*smartmeter-datacollector*. Il sont donc intégrés dans le plugin:
* Landis+Gyr E360 (pas testé dans le plugin)
* Landis+Gyr E450 (testé dans le plugin)
* Landis+Gyr E570 (pas testé dans le plugin)
* Iskraemeco AM550 (pas testé dans le plugin)
* Kamstrup OMNIPOWER avec HAN-NVE (pas testé dans le plugin)

> :bulb: D'autres type de compteurs pourront être intégrés dans le plugin lorsqu'ils
seront reconnus par le module *smartmeter-datacollector*.

Tout retour d'information sur l'utilisation de l'un des compteurs qui n'a pas été
testé dans le plugin sera le bienvenu.

# Convertisseurs mbus <=> USB
{: .num}

Le convertisseur doit être un module MBUS **Slave**. Voici quelques exemples:

+ [convertisseur avec puce PL23036L](https://fr.aliexpress.com/item/1005006206253270.html)
  + Convertisseur utilisé, avec un compteur E570, lors du développement du plugin
+ [convertisseur avec puce PL23031A](https://fr.aliexpress.com/item/1005006212611801.html)
  + Ce modèle est très semblable au précédent mais équipé d'une puce différente
+ [Zeta M-Bus Salve](https://zeta-eng.ch/produkte/interfaces/zeta-usb-interfaces/m-bus-slave/)
  + Module proposé dans le wike du projet *smartmeter-datacollector*
+ [DYKB-Convertisseur USB vers MBUS](https://fr.aliexpress.com/item/1005004540180026.html)
  + Convertisseur référencé par un utilisateur dans les discutions du projet *smartmeter-datacollectot*
  + Test prévu prochainement avec le plugin Jeedom et un compteur E450.

Toute information, remontée via le forum Jeedom, sur l'utilisation de convetisseur est la bienvennue.
Meric d'indiquer le type de convertisseur et de compteur utilisé.

# Installation et configuration du plugin
{: .num}

## Prérequis
{: .num}

Le plugin [**MQTT Manager**](https://market.jeedom.com/index.php?v=d&p=market_display&id=4213)
doit être installé et fonctionel.

> :bulb: Le plugin ne supporte pas encore la communication en SSL avec le brocker MQTT

## Installation
{: .num}

Le plugin s'installe de manière standard depuis le market.

Après installation et activation du plugin, l’installation des dépendances devrait
débuter sauf si la gestion automatique a été désactivée au préalable. Dans ce cas,
il faudra cliquer sur le bouton **Relancer** pour initier cette phase d’installation.

## Configuration
{: .num}

Il est recommandé de laisser les deux options **Création auto des compteurs** et
**Création auto des commandes** sélectionnées. Les équipements **Compteur** et leurs
commandes seront ainsi créés automatiquement.

![Configuration]({{ imagesPath }}/configuration_plugin.png)

Les configurations sous **Plages horaire** permettent de définir les valeurs
que prendra la commande **Tarif** selon la plage horaire active. 

# Configuration des convertisseurs USB
{: .num}

## Déterminer le nom du device 
{: .num}

La principale difficulté est de déterminer le device qui est associé au convertisseur
USB.

Pour ceci, je vous propose les étapes suivantes:
1 Connecter le convertisseur sur un port USB du serveur Jeedom
1. Redémarrer l'OS du serveur Jeedom
1. Après de reboot, il est possible que les clés UBS (clé zigbee par exemple) aie
   changé de device. Il faut donc vérifier si les plugins qui utilisent un device UBS
   fonctionnent encore et, le cas échéant, modifier leurs configurations.
1. Voir la liste des device USB
   + Se connecter en ssh
   + Lancer la commande `ls /dev/ttyUSB*`
   + Noter la liste des devices trouvés
1. Déconnecter le convertisseur
1. Voir le device qui a été supprimé
   + Se connecter en ssh
   + Lancer la commande `ls /dev/ttyUSB*`
   + Noter le nom du device qui a disparu
1. Reconnecter le convertisseur sur le même port USB

## Configuration d'un convertisseur
{: .num}

Cliquer sur le bouton `Ajouter un convertisseur`

![Configuration convertisseur]({{ imagesPath }}/configuration_convertisseur.png)

+ Sélectionner le type de compteur
+ Saisir le device USB
+ ...
+ (Re)lancer le démon

# Création des équipements *Compteurs* et de leurs commandes
{: .num}

Si l'option *Création auto des compteur* du plugin est désactivée, les compteurs
devront être créés manuellement. Cette création manuel est réservée au experts.

Un compteur est créé automatiquement lorsque le brocker MQTT transmet une mesure
avec un n° de compteur pour lequel il n'a a pas d'équipement Jeedom.

Une fois le compteur créé, vous pouvez:
+ Modifier son nom et tout les paramètres standard des équipements Jeedom
+ Sélectionner le type de compteur (modifiera l'image de léquipement)
+ Activer l'équipement

> :warning: Ne pas modifier le Numéro du compteur. Ce numéro permet d'identifier l'équipement
  lors de la réception de mesure.

Une fois l'équipement activé, les commande seront créées au rythme des messages reçus du
brocker MQTT.
