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

Pour le moment, seuls les équipements réalisés autour d'un [**Shelly plus
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (le support de [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) est prévu prochainement)

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

### Configuration du WiFi
{: .num}

Pour configurer WiFi du Shelly, il faut
1. Le mettre sous tension.
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

# Configuration du plugin
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
