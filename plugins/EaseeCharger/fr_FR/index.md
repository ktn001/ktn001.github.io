---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : fr_FR

img01: 01_plugin_configuration.png
img02: 02_icone_creation_compte.png
img03: 03_saisie_login_password.png
img04: 04_icone_creation_chargeur.png
img05: 05_saisie_nom_chargeur.png
img06: 06_parametrage_chargeur.png
img07: 07_btn_reconfig_cmds.png
img08: 08_etat_0.png
img09: 09_etat_1.png
img10: 10_etat_2.png
img11: 11_etat_3.png
img12: 12_etat_4.png
img13: 13_etat_5.png
img14: 14_widget_etat_option_notext.png
img15: 15_etat_5_notext.png
img16: 16_widget_lock_0_d_bw.png
img17: 17_widget_lock_0_d_color.png
img18: 18_widget_lock_0_l_bw.png
img19: 19_widget_lock_0_l_color.png
img20: 20_widget_lock_1_d_bw.png
img21: 21_widget_lock_1_d_color.png
img22: 22_widget_lock_1_l_bw.png
img23: 23_widget_lock_1_l_color.png
img24: 24_widget_lock_2_d_bw.png
img25: 25_widget_lock_2_d_color.png
img26: 26_widget_lock_2_l_bw.png
img27: 27_widget_lock_2_l_color.png
img28: 28_widget_lock_3_d_bw.png
img29: 29_widget_lock_3_d_color.png
img30: 30_widget_lock_3_l_bw.png
img31: 31_widget_lock_3_l_color.png
img32: 32_btn_continue.png
img33: 33_btn_pause.png

action: action
info: info
other: other
binary: binary
numeric: numeric
---

# Plugin "EaseeCharger" pour Jeedom

Le plugin **EaseeCharger** permet d'intégrer des chargeurs `Easee` pour véhicules électriques dans
une instance Jeedom.

Des informations sur les chargeurs `Easee` sont disponibles sur le site [Easee](https://easee.com)

# Installation et configuration du plugin
{: .num}
{% include image.html img=page.img01 %}

## Installation du plugin
{: .num}

Le plugin s'installe de manière standard depuis le market de Jeedom. Après l'avoir installé, il faut
l'activer puis lancer l'installation des dépendances.

## Configuration du plugin
{: .num}

**Démon**
: Les configurations du démon:
    + ***Port***
    : Numéro du port TCP utilisé pour la communication entre Jeedom et le démon. Le port 34739 est
      configuré par défaut, un autre port peut être défini en cas de conflit avec un autre plugin ou
      logiciel qui utilise le même port.

    + ***Debug étendu***
    : Le module Python du démon qui assure la communication avec le cloud Easee envoi des "ping"
      toutes les 5 secondes pour maintenir la connection. Chaque "ping", et ses réponses, génèrent 5
      messages de log de niveau `debug`. Ces messages de log sont supprimés lorsque l'option **Debug
      étendu** n'est pas activée.

**Sécurité**
: + ***Log non sécurisé***
    : Les données sensibles (password, token, etc...) sont remplacées dans les logs par des
      `********`. L'option "**Log non sécurisé**" désactive le remplacement et laisse les données
      sensibles en clair dans les logs.

## Configuration du heartbeat
{: .num}

Il arrive que le flux de données en provenance du cloud Easse soit interrompu sans que la connection
ne soit interrompue. Le deamon ne détecte pas ce genre de situation qu'il ne peut donc pas gérer.

Pour contourner ce problème, un heartbeat est automatiquement configuré lors de l'activation du
plugin. Le deamon est redémarrer automatiquement par le heartbeat lorsque le deamon n'a pas remonté
de données dans Jeedom depuis plus de 15 minutes.

# Les comptes
{: .num}

Un compte permet d'accéder au cloud Easee pour gérer un ou plusieurs chargeurs. Un compte doit être
déclaré dans le plugin avant de pouvoir créer un équipement chargeur qui sera géré via ce compte.

## Création d'un compte
{: .num}

1. Sur la page de gestion du plugin, cliquer sur l'icône de création d'un compte:\
{% include image.html img=page.img02 %}

1. Saisir un nom de compte, le login et le password pour se connecter au cloud et activer le compte\
  {% include image.html img=page.img03 %}

1. Cliquer sur `Valider`.
  > :bulb: Le login et le password sont vérifiés à l'enregistrement uniquement si le compte est
    activé.

## Fonctionnement des comptes
{: .num}

### Suppression d'un compte
{: .num}

Un compte ne peut pas être supprimé s'il est utilisé par au moins un chargeur.

### Modification du login ou du password
{: .num}

Un nouveau token est crée et automatiquement transmis au daemon.

# Les chargeurs
{: .num}

## Création d'un chargeur
{: .num}

> :bulb: Un compte doit avoir été créé avant la création d'un chargeur

1. Sur la page de gestion du plugin, cliquer sur l'icône de création d'un chargeur:\
   {% include image.html img=page.img04 %}

1. Saisir le nom du chargeur\
   {% include image.html img=page.img05 %}

1. Paramétrer le chargeur\
   Un chargeur est un équipement Jeedom. En plus des options de base (nom, objet, catégorie, option)
   des équipements, les configurations suivantes doivent être définies:

   {% include image.html img=page.img06 %}

   + **Compte**\
      Le compte qui doit être utilisé pour communiquer avec le serveur Easee.

   + **N° de série**\
      Le numéro de série tel qu'il doit être saisi, par exemple, dans l'app Easee pour smartphone.

   + **Widget parsonalisé**\
      Ne pas utiliser le wigdet standard de Jeedom mais le widget spécifique pour les équipements
      EaseeCharger.

   + **Couleur**\
      Couleur du chargeur. Permet de définir l'image du chargeur.

1. Cliquer sur `Valider`.

## Les commandes
{: .num}

Les chargeurs sont créés avec les commandes suivantes:

| Nom | Type | Sous type | Description |
| --- | ---- | --------- | ----------- |
| refresh | {{page.action}} | {{page.other}} | Refraîchit toutes les informations |
| Pause ON | {{page.action}} | {{page.other}} | Met la charge en pause |
| Pause OFF | {{page.action}} | {{page.other}} | Relance la charge |
| En pause | {{page.info}} | {{page.binary}} | Indique si la charge est en pause |
| Verrouillage permanent ON | {{page.action}} | {{page.other}} | Activation du verrouillage permanent |
| Verrouillage permanent OFF| {{page.action}} | {{page.other}} | Désactivation du verrouillage permanent |
| Etat du verrouillage | {{page.info}} | {{page.numeric}} | codei qui indique si le cacble est vérouillé et s'il l'est en parmanence |
| Branché | {{page.info}} | {{page.binary}} | Véhicule branché |

D'autres commandes de type *infos* seront créés lors de la réception des données du cloud via le
daemon. Les commandes ainsi créées seront visibles, avec une description, dans l'onglet
**Commandes** de la configuration du chargeur. Le logicalId de ces commande est l'identifiant
numérique reçu du cloud.

la valeur des certaines de ces commandes est un code auquel correspondent différents états. Pour ces
informations, une deuxième commande est créée avec le logicalId **`<id>::txt`**. La valeur de cette
deuxième commande sera un texte correspondant à l'état.


+ Le bouton {% include image.html img=page.img07 %} reconfigure les commandes avec les valeurs par
défaut.
{: .hide}

## Les widget
{: .num}

### Etat du chargeur
{: .num}

Le widget par défaut pour l'état du chargeur présente les six situations suivantes:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img00 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

Les options facultatives **notext : 1** et **noimage : 1** permettent de supprimer l'affichage du
texte et de l'image:

{% include image.html img=page.img14 %}

donne

{% include image.html img="etat_5_notext.png" %}

### Verrouillage du câble
{: .num}

Le widget du verrouillage du câble permet d'activer ou désactiver le verrouillage permanent et indique si le câble est verrouillé et si le verrouillage permanent est activé.

Le tableau suivant montre les différentes icônes en fonction de l'état du verrouillage et du thème de l'interface WEB:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
      <th colspan="2" style="text-align:center">Icônes colorées</th>
    </tr>
    <tr>
      <th style="text-align:center">oui</th>
      <th style="text-align:center">non</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>non</td>
      <td>non</td>
      <td style="text-align:center">
        {% include image.html img=page.img17 %}
        {% include image.html img=page.img19 %}
      </td>
      <td style="text-align:center">
        {% include image.html img=page.img16 %}
        {% include image.html img=page.img18 %}
      </td>
    </tr>
    <tr>
      <td>oui</td>
      <td>non</td>
      <td style="text-align:center">
        {% include image.html img=page.img21 %}
        {% include image.html img=page.img23 %}
      </td>
      <td style="text-align:center">
        {% include image.html img=page.img20 %}
        {% include image.html img=page.img22 %}
      </td>
    </tr>
    <tr>
      <td>non</td>
      <td>oui</td>
      <td style="text-align:center">
        {% include image.html img=page.img25 %}
        {% include image.html img=page.img27 %}
      </td>
      <td style="text-align:center">
        {% include image.html img=page.img24 %}
        {% include image.html img=page.img26 %}
      </td>
    </tr>
    <tr>
      <td>oui</td>
      <td>oui</td>
      <td style="text-align:center">
        {% include image.html img=page.img29 %}
        {% include image.html img=page.img31 %}
      </td>
      <td style="text-align:center">
        {% include image.html img=page.img28 %}
        {% include image.html img=page.img30 %}
      </td>
    </tr>
  </tbody>
</table>

### Mise en pause de la charge
{: .num}

{% include image.html img=page.img33 %} : Mise en pause le la charge

{% include image.html img=page.img32 %} : Reprendre une charge qui a été mise en pause
