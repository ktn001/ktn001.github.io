---
layout : default
title : devolo_cpl
lang: fr_FR
---

# PLugin "devolo_cpl" pour Jeedom

Le plugin permet d'intégrer les équipements CPL de Devolo dans Jeedom

> :bulb: Attention si vous partagez des fichiers de logs, les passwords des
appareils peuvent y figurer en clair!

# Appareils compatibles
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

Dans la version actuelle du plugin, la seule utilité de configurer ces appareils
dans Jeedom est d'en documenter l'existance. Ils seront probablement pris en compte
dans une version future lors de la visualisation des vitesses de transfert entre les
appareils.

Des templates sont prévus dans le plugin pour les modèles suivants:

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
    + ***Nom des équipements sans l'objet***
    : Si cette option est sélectionnée, les noms des équipement dans les tableaux
      et graphiques ne seront pas affichés sous la forme `[<objet>][<équipement>]`mais
      `<équipement>`.

**Base de données**
: Configuration de la gestion des données:
    + ***Rétention***
    : Durée pendant laquelle les informations des débits CPL sont conservées en base
      de données.

**Démon**
: Configuration du démon:
    + ***Port***
    : Numéro du port TCP utilisé pour la communication entre Jeedom et le démon.
      Le port 34741 est configuré par défaut. Un autre port peut être défini en
      cas de conflit avec un autre plugin ou logiciel qui utilise le même port.

    + ***Version devolo_plc_api***
    : Version du module python à utiliser pour la communication avec les appareils.   
      Sauf en cas de contre-indication, veuillez utiliser la dernière version.  
      Merci d'ouvrir un sujet sur le forum Jeedom si un passage sur une ancienne version est nécessaire.

## Lancement du démon
{: .num}
Après avoir installé les dépendances et effectué la configuration du plugin,
il faut lancer le démon.

# Configuration des équipements
{: .num}

Les équipements pour les appareils manageables peuvent être créés automatiquement
à condition qu'ils se trouvent dans le même réseau que le serveur jeedom et qu'ils
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

![Icone Ajouter](/images/devolo_cpl/icones_gestion_plugin.png)

Il faut saisir le nom du nouvel équipement avant d'accéder à la page de
configuration de l'équipement.

![équipement non configuré](/images/devolo_cpl/equipement_non_configure.png)

Il faut alors
+ Sélectionner le type d'équipement. La liste des paramètres spécifiques sera
  adaptée en function du type déquipement sélectionné.
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
+ Saisir le password.
+ Configurer le nom du réseau CPL (optionnel si vous n'avez qu'un seul réseau CPL)
+ Activer l'équipement.
+ Faire les configurations habituelles pour les équipements Jeedom.
+ Sélectionner `Surveillance Offline` si l'on veux avoir un message d'erreur lorsque
  l'équipement n'est pas atteignable (en veille par exemple).

## Les commandes
{: .num}

Les commandes des équipements sont créées ou supprimées automatiquement lorsque
le modèle de l'équipement est modifié. Les commandes sont créées pour les
modèles manageables et supprimées pour les modèles non manageables.

Les appareils ne remontent pas leurs changement d'état en temps réel. Les
commandes de type info (à l'exceptions de la commande locate) sont mise à jour
toutes les minutes via un cron. Les infos pour un appareil sont égalements
actualisées lorsqu'une commande est envoyée à l'appareil via le deamon ou lorsque
la commande refresh est activée.

### Refresh
{: .num}

La commande refresh envois un message au deamon pour qu'il interroge l'appareil
sur sont état. Les commandes de type infos sont mise à jour de manière asynchrone
lorsque l'appareil répond à la demande du deamon.

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
+ La commande action `locate_off` désactive la localisation avant l'expiration
  des deux minutes.
+ Les appareils ne retournent pas d'information indiquant si la lacalisation est
  active ou pas. L'info `locate` doit donc émuler l'état de l'appareil:
    + L'info est mis à 1 lors de l'activation par `locate_on`.
    + L'info repasse automatiquement à 0 après 2 minutes.
    + L'info est mise à 0 avant l'expiration des deux minutes si la commande
      `locate_off` est activée.
    + L'état de l'info n'est pas modifié si la localisation est activée ou
      désactivée par un autre logiciel que le plugin (par Devolo cockpit par
      exemple).

### Les versions de firmware
{: .num}

+ La commande info `firmware` indique la version du firmware installé dans
  l'appareil.
+ La commande info `update_available` indique si une mise à jour du firmware
  est disponible.
+ La commande info `next_firmware` indique la version disponible pour un upgrade.
  Cette info et vide si l'appareil est à jour.

> :bulb: Mes appareils étant tous à jour, je n'ai pas encore pu tester correctement
  les commandes `update_available` et `next_firmware`. Tous retour d'expérience
  via le [forum](https://community.jeedom.com) (ne pas oublier l'étiquette
  `plugin-devolo_cpl`) sera le bienvenu.

### Activation/désactivation du WiFi guest
{: .num}

+ Les commandes action `guest_on` et `guest_off` permettent d'activer et de désactiver
  le Wifi Guest des appareils Devolo. Dans le cas des Wifi mesh, l'actication ou la 
  désactivation du Wifi Guest d'un appareil est répercuté sur les autres appareils
  du réseau mesh.
+ La commande action `guest_duration` permet de configurer la durée durant laquelle
  le WiFi guest doit être activé. Une fois cette durée écoulée, l'appareil Devolo
  désactivera le Wifi guest. Si la valeur de cette commande est 0, le Wifi guest ne
  sera pas désctivé automatiquement.   

  La durée durant laquelle le WiFi guest doit être activé est exprimée en minute.

  Le widget **Devolo_cpl/J_h_m** affiche cette valeur au format
  `<jours> <heures>:<minute>` (`<heures>:<minutes>` si jours = 0)

  ##### Widget et popup dashboard:
  ![widget dashboard](/images/devolo_cpl/widget_dashboard.png) ![popup dashboard](/images/devolo_cpl/popup_j_h_m_dashboard.png)

  ##### Widget et popup mobile:
  ![widget dashboard](/images/devolo_cpl/widget_mobile.png) ![popup dashboard](/images/devolo_cpl/popup_j_h_m_mobile.png)
+ La commande info `guest_remaining` indique le temps restant avant la désactivation
  du WiFi guest. Cette durée en enregistrée en minutes.

  Le widget **Devolo_cpl/J_h_m** affiche cette valeur au format
  `<jours> <heures>:<minute>` (`<heures>:<minutes>` si jours = 0)

### Online
{: .num}

+ La commande `online` est une info binaire qui indique si l'équipement est online ou non.

# Les débits CPL
{: .num}

Les débit CPL sont remontés des appareils toutes le 5 minutes. Le valeurs sont
enregistrées dans la base de données et sont conservées durant la période le rétention
configurée sur la page de configuration du plugin.

![Icone réseaux CPL](/images/devolo_cpl/icones_gestion_plugin.png)

Un click sur l'icône `Réseaux CPL` ouvre un modal de présentation des débits CPL.

![modal CPL rates](/images/devolo_cpl/modal_CPL_rates.png)

## Les réseaux
{: .num}

Si vous avez configuré différents noms de réseaux dans le paramétrage des
équipements, le modal contiendra un tab pour chacun de ces réseaux. Ceci permet,
par exemple, d' avoir un tableau pour les débits entre des équipements DLan et
un autre pour les équipements Magic.

## Les débits
{: .num}

Les lignes du tableau représenteint les appareils source et les colonnes, les
destinations.

Dans l'image ci-dessus, nous avons donc un flux 833 Mbps de *cplphil* verss
*cplbureau* et de 850 Mbps dans le senrsc inverse.

Les débits sont relevés toutes les 5 minutes. L'heure affichée en bas à droites
du modal indique l'heure à laquelle les débits affichés ont été relevés.

# Les connections WiFi
{: .num}

Les adresses mac des client Wifi connectés aux point d'accès des équipement Devolo sont
remontées dans le plugin Jeedom qui conserve un historique de ces connections.

## Les adresses mac aléatoires
{: .num}

> :bulb: Une adresse mac dont le deuxième caractère est `2`, `6`, `A` ou `E` est une adresse aléatoire.

Certains appareils utilisent une adresse mac aléatoire plutôt que leur adresse mac
physique. Vu que l'adresse mac aléatoire change lors de chaque connection, il est
impossible d'avoir un historique des connections de ces appareils. **Ces adresses sont
donc ignorées par le plugin qui n'enregistre aucune donnée les concernant.**

Certains de ces appareils peuvent être configurés pour utiliser une adresse fixe
lorsqu'ils se connectent à certains réseaux WiFi. Il vous est donc possible de faire
en sorte que ces appareils utilisent toujours la même adresse mac lorsqu'ils se
connectent à un de vos pointis d'accès Devolo tout en conservant les avantages de
l'utilisation d'une adresse mac aléatoire lorsque vous vous connectez à d'autres
réseaux.

Cette [page](https://support.plume.com/hc/fr/articles/360052070714-Comment-d%C3%A9sactiver-les-adresses-MAC-al%C3%A9atoires-sur-Android-10-)
exlique comment configurer un Android pour qu'il utilise son adresse fixe lorsqu'il
ce connecte sur votre réseau.

## Recherche du vendeur pour une adresse MAC
{: .num}

Le site [macvendors.com](https://macvendors.com) permet de trouver quel est le fabriquant
d'un appareil ou de son interface réseau à partir de l'adresse mac.

Le plugin accède à l'API de ce site pour trouver le fabricant des appareils qui se sont
connectés aux interfaces Wifi des équipement Devolo.

L'accès à l'API se fait en respectant un délai minimum d'une seconde entre deux appels pour
respecter la limite de deux accès secondes pour les accès libres. Par contre, le plugin ne vérifie pas le nombre d'accès durant une journée pour s'assurer que que limite de 1000
accès par jour est respectée.

## Association de noms aux adresses mac
{: .num}

![Icone adress](/images/devolo_cpl/icones_gestion_plugin.png)

Le bouton `Adresses mac` de la page de gestion du plugin ouvre un modal pour
gestion des adresses mac des équipements qui se sont connectés au réseaux Wifi.

![Config MAC](/images/devolo_cpl/config_mac.png)

Les noms associés ici aux adresses mac seront utilisés en lieu et place des adresse mac
les graphiques.i9

# Le panel
{: .num}

Le panel est accessible via le menu **Accueil**

![Menu accueil](/images/devolo_cpl/menu_accueil.png)

Le panel ne contient deux *tabs*:
* Un nommé `Débits CPL` pour l'historique des débits entre les équipements CPL
* Un nommé `WiFi` pour l'historique des connections de clients Wifi

## Débit CPL
{: .num}

A son ouverture, le tab présente un graphique de l'historique des débits entre
deux appareils.

![panel Débits CPL](/images/devolo_cpl/panel_debits_CPL.png)

Il est possible:
+ D'ajouter u graphique via le bouton `Ajouter un graphique`
+ De changer la source et la destination via les sélecteur `de` et `vers`
  puis en cliquant sur le bouton `OK`.

Je vous laiss découvrir les autres fonctionalités du graphique.

## Les connections WiFi
{: .num}

Ce tab permet de visualiser l'historique des connections WiFi à un point d'accès (AP):

![panel WiFi AP](/images/devolo_cpl/panel_wifi_AP.png)

Ce tab permet également de visualiser l'historique des connections WiFi d'une équipement Wifi (client):

![panel WiFi client](/images/devolo_cpl/panel_wifi_client.png)

