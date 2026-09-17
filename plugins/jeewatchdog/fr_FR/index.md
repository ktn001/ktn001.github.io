---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: fr_FR

img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
img05: 05_configure_Wifi.png
img06: 06_configure_Wifi_static.png
img07: 07_menu_authentication.png
img08: 08_set_passord.png
img09: 09_configuration_plugin.png
img10: 10_configuration_equipement.png
img11: 11_scenario.png
img12: 12_declenchement_scenario.png

action: action
binary: binary
info: info
kick: kick
maintenance: maintenance
other: other
---
# Plugin {{page.plugin}} ({{page.pluginId}}) pour Jeedom

> :warning: Le plugin est en cours de préparation et donc pas encore disponible sur le market

Le plugin {{page.plugin}} gère un équipement externe qui doit recevoir régulièrement un signe de vie
de Jeedom. Si aucun signe de vie n'est reçue durant un certain temps, l'équipement externe coupe
l'alimentation de Jeedom durant quelques secondes pour forcer un redémarrage.

Un mode `maintenance` est prévu pour éviter d'avoir une coupure de l'alimentation lorsque une
indisponibilité de Jeedom est prévue.

# L'équipement externe
{: .num}

Le plugin est prévu pour fonctionner avec les appareils suivants:

+ [Shelly plus 1](https://www.shelly.com/fr/products/shelly-plus-1-x1)
+ [Shelly 1 Gen3](https://www.shelly.com/fr/products/shelly-1-gen3)
+ [Shelly 1 Mini Gen3](https://www.shelly.com/fr/products/shelly-1-mini-gen3)
+ [Shelly 1 Gen4](https://www.shelly.com/fr/products/shelly-1-gen4)
+ [Shelly 1 Mini Gen4 ](https://www.shelly.com/fr/products/shelly-1-mini-gen4)

> :bulb: Le plugin a été testé avec un **Shelly plus 1** et un **Shelly Gen4**. Tout retour
d'expérience avec les autres appareils est le bienvenu.

## Schéma de câblage de l'équipement
{: .num}

L'équipement de watchdog peut être prévu pour couper une alimentation USB ou 220V~

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

J'ai réalisé un équipement avec les composants suivants:
* [Deux ports USB-c](https://de.aliexpress.com/item/1005009033490471.html) 
* [Un interrupteur](https://de.aliexpress.com/item/1005012383637177.html)
* [Un connecteur 220V](https://de.aliexpress.com/item/1005012625139658.html)
* [Un câble 220V](https://de.aliexpress.com/item/1005011606233857.html)
* [Un boitier](https://de.aliexpress.com/item/1005006900224809.html) (le modèle 58-80-26)
* Un Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Préconfiguration du Shelly
{: .num}

Une fois le câblage prêt, vous pouvez alimenter le Shelly et y configurer une adresse IP fixe et
fixe un password (le password n'est pas obligatoire mais fortement recommandé). Le reste de la
configuration sera effectué par le plugin {{page.plugin}}

> :bulb: Ne pas alimenter Jeedom via cet équipement avant d'avoir terminé la configuration de
> l'équipement dans le plugin

### Activation de l'access-point
{: .num}

Vérifiez si vous avez un réseau WiFi dont le SSID est du genre `Shelly<YYY>-<MAC>` (<YYY> correspond
au modèle Shelly, <MAC> est l'adresse MAC du Shelly).

Si vous avez trouver un réseau pour votre Shelly, l'access-point est déjà activé et vous pouvez
passer à la configuration du Wifi

Si vous n'avez pas trouver ce réseau, c'est probablement parce que la version du firmware est 2.0.0
(ou plus) et que votre Shelly est un Gen4. Dans ce cas, le zigbee est activé par défaut et l'access
point est désactivé. Vous pouvez avtier l'access-point avec la procédure suivante:
1. Appuyez sur le bouton physique à l'arrière du Shelly et **maintenez-le enfoncé durant pendant 10
secondes**
1. Lorsque vous relâchez le bouton, la LED s'étteint 2 à 3 secondes puis clignote rapidement.
1. Appuyez à nouveau sur le bouton physique **durant exactement 5 secondes**
1. La Led clignote lentement que le réseau WiFI `Shelly<yyy>-<MAC>` est visible
1. Passer à la configuration du WiFi décrit ci-dessous.
1. L'access point sera désactiver au bout de 5 minutes. Vous devrez alors recommencer cette
procédure si le Wifi n'a pas été configuré.

> :bulb: Il est aussi possible d'utiliser l'app *Shelly smart control* pour se connecter via
> bluetooth et activer l'AP.

### Configuration du WiFi
{: .num}

Pour configurer WiFi du Shelly, il faut
1. Se connecter à son access point (SSID: "Shelly...-...")  
1. Ouvrir la page WB http://192.168.33.1
1. Cliquer sur `Settings` dans le menu à gauche
1. Cliquer sur `Wifi` dans la partie centrale de la page
1. Dans le panneau `Wi-Fi 1 settings`
   * Sélectionner le réseau Wifi et saisir le Password

      {% include image.html img=page.img05 %}

   * Si vous n'avez pas un DHCP avec une adresse IP réservée pour le Shelly
      + Sélectionner `Static IP`
      + Saisir les informations de configuration réseau

      {% include image.html img=page.img06 %}

1. Cliquer sur "Save settings"

**Vous pouvez vous reconnecter à votre réseau wifi.**

### Configuration du password d'administration
1. Ouvrir la page WEB à la nouvelle adresse du Shelly
1. Cliquer sur `Settings` dans le menu à gauche
1. Cliquer sur `Authentication` dans la partie centrale de la page (sous **Device Settings**)

   {% include image.html img=page.img07 %}
1. Sélectionner `Enable password protected device`
1. Saisir un password

   {% include image.html img=page.img08 %}
1. Cliquer sur `Save Settings`

# Installation et configuration du plugin
{: .num}

Le plugin s'installe simplement via le market. Il n'a ni dépendance ni démon et ne nécessite aucun
paramétrage. Il suffit de l'activer après l'installation.

{% include image.html img=page.img09 %}

# Création et configuration d'un équipement

La configuration d'un équipement se fait à partir du menu **plugins → Monitoring → jeewatchdog**. Le
bouton **Ajouter** permet de créer un nouvel équipement, un click sur un équipement ouvre sa page de
configuration.

{% include image.html img=page.img10 %}

Outre les iparamètres standard de configuation Jeedom, quelques paramètreis spécifiques doivents
être configurés:

+ ***Modèle d'équipement***\
Le modèle de l'appareil Shelly.

+ ***Adresse IP du switch***\
Adresse IP du Shelly (un nom DNS est aussi accepté).\
Le bouton <i class="fas fa-external-link-alt"></i> à droite de la saisie permet d'ouvrir la page
d'administration du Shelly

+ ***Mot de passe***\
Password du shelly

+ ***Temps max d'inactivé***\
L'alimentation du jeedom sera coupée quelques secondes si Jeedom n'y pas envoyé de *kick* durant ce
délai. Cette durée est exprimée en minutes.

+ ***Temp de coupure***\
Durée, exprimée en secondes, de la coupure de l'alimentation.

+ ***Déclencheur du Kick***\
Indique si le Kick doit être envoyé au Shelly par un **cron** et un **scénario**. Voir explications
plus bas

+ ***Bouton configurer le switch***\
Bouton pour envoyer la configuration au Shelly. L'équipement doit avoir été sauvegardé avant
de cliquer sur ce bouton.

> :warning: Ne pas oublier de clicker sur le bouton **Configurer le switch** après avoir sauvegardé
> l'équipement si un paramètre du watchdog a été modifié. 

# Les commandes
{: .num}

Les deux commandes suivantes sont créées pour chaque équipement:

1. *LogicalId*: **{{page.maintenance}}**\
*type*: **{{page.info}}**\
*sous-type*: **{{page.binary}}**\
Indique la position de l'interrupteur de maintenance.

1. *LogicalId*: **{{page.kick}}**\
*type*: **{{page.action}}**\
*sous-type*: **{{page.other}}**\
Commande pour envoyer un message au Shelly pour réinitialiser sous compteur.

# Le déclencheur de Kick
{: .num}

Les Kicks peuvent être déclenchés par un cron ou un scénario

## Le cron
{: .num}

Le plugin créé un cron qui déclenchera régulièrement un Kick. La fréquence de ce cron dépend de la
valeur du paramètre **Temps max d'inactivité**:

<table>
<tr><td>1 minute</td><td>Si <b>temps max</b> <= 10 minutes</td></tr>
<tr><td>3 minutes</td><td>Si 10 minutes < <b>temps max</b> <= 15 minutes</td></tr>
<tr><td>5 minutes</td><td>Si 15 minutes < <b>temps max</b> <= 30 minutes</td></tr>
<tr><td>10 minutes</td><td>Si 30 minutes < <b>temps max</b></td></tr>
</table>
	
## Le scénario
{: .num}

L'utilisation d'un scénario permet d'effectuer des tests pour vérifier plus précisément si jeedom
fonctionne correctement avec d'envoyer un kick.

Voici un exemple de scénarion qui n'enverra un kick que si un équipement zigbee a pu être activé:

{% include image.html img=page.img11 %}

Ce scénario sera lancé régulièrement (toutes les 3 minutes par exemple) et immédiatement après le
démarrage de Jeedom.

{% include image.html img=page.img12 %}

<!--
vim: textwidth=100 colorcolumn=101
-->
