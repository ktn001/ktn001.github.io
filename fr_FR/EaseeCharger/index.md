---
layout : default
title : EaseeCharger
---

# Plugin "EaseeCharger" pour Jeedom

Le plugin **EaseeCharger** permet d'intégrer des chargeurs `Easee` pour véhicules électriques dans une instance Jeedom.

Des informations sur les chargeurs `Easee` sont disponibles sur le site [Easee](https://easee.com)

# Installation et configuration du plugin
{: .num}
![Configuration du plugin](/images/EaseeCharger/plugin_configuration.png)

## Installation du plugin
{: .num}

Le plugin s'installe de manière standard depuis le market de Jeedom. Après l'avoir installé, il faut l'activer puis lancer l'installation des dépendances.

## Configuration du plugin
{: .num}

**Démon**
: Les configurations du démon:
    + ***Port***
    : Numéro du port TCP utilisé pour la communication entre Jeedom et le démon. Le port 34739 est configuré par défaut, un autre port peut être défini en cas de conflit avec un autre plugin ou logiciel qui utilise le même port.

    + ***Debug étendu***
    : Le module Python du démon qui assure la communication avec le cloud Easee envoi des "ping" toutes les 5 secondes pour maintenir la connection. Chaque "ping", et ses réponses, génèrent 5 messages de log de niveau `debug`. Ces messages de log sont supprimés lorsque l'option **Debug étendu** n'est pas activée.

**Sécurité**   
:   
    + ***Log non sécurisé***
    : Les données sensibles (password, token, etc...) sont remplacées dans les logs par des `********`. L'option "**Log non sécurisé**" désactive le remplacement et laisse les données sensibles en clair dans les logs.

## Configuration du heartbeat
{: .num}

Il arrive que le flux de données en provenance du cloud Easse soit interrompu sans que la connection ne soit interrompue. Le deamon ne 
ne détecte pas ce genre de situation qu'il ne peut donc pas gérer.

Pour contourner ce problème, un heartbeat est automatiquement configuré lors de l'activation du plugin. Le deamon est redémarrer
automatiquement par le heartbeat lorsque le deamon n'a pas remonté de données dans Jeedom depuis plus de 15 minutes.

# Les comptes
{: .num}

Un compte permet d'accéder au cloud Easee pour gérer un ou plusieurs chargeurs. Un compte doit être déclaré dans le plugin avant de pouvoir créer un équipement chargeur qui sera géré via ce compte.

## Création d'un compte
{: .num}

1. Sur la page de gestion du plugin, cliquer sur l'icône de création d'un compte:  
![Icone de création de compte](/images/EaseeCharger/icone_creation_compte.png)

1. Saisir le nom du compte  
![Saisie nom su compte](/images/EaseeCharger/saisie_nom_compte.png)  
  > :bulb: Une fois enregistré, le nom du compte ne peut plus être modifié.

1. Saisir le login et le password pour se connecter au cloud et activer le compte  
  ![Login_password](/images/EaseeCharger/saisie_login_password.png)

1. Cliquer sur `Valider`.   
  > :bulb: Le login et le password sont vérifiés à l'enregistrement uniquement si le compte est activé.

## Fonctionnement des comptes
{: .num}

### Désactivation d'un compte
{: .num}

Lorsqu'un compte est désactivé, tous les chargeurs qui utilisent ce compte pour communiquer avec le serveur Easee sont également désactivés. Les chargeurs doivent être réactivés manuellement lorsque le compte est réactivé.

### Suppression d'un compte
{: .num}

Un compte ne peut pas être supprimé s'il est utilisé par au moins un chargeur.

### Modification du login ou du password
{: .num}

Le démon n'est pas notifié lorsque le login ou le password d'un compte est modifié. Il faut donc relancer le démon chaque fois que le login ou le password est modifié.

# Les chargeurs
{: .num}

## Création d'un chargeur
{: .num}

> :bulb: Un compte doit avoir été créé avant la création d'un chargeur

1. Sur la page de gestion du plugin, cliquer sur l'icône de création d'un chargeur:  
   ![Icone de création de chargeur](/images/EaseeCharger/icone_creation_chargeur.png)

1. Saisir le nom du chargeur  
   ![Saisie nom du chargeur](/images/EaseeCharger/saisie_nom_chargeur.png)

1. Paramétrer le chargeur  
   Un chargeur est un équipement Jeedom. En plus des options de base (nom, objet, catégorie, option) des équipements, les configurations suivantes doivent être définies:

   ![paramétrage du chargeur](/images/EaseeCharger/parametrage_chargeur.png)

   + **Compte**  
      Le compte qui doit être utilisé pour communiquer avec le serveur Easee

   + **N° de série**  
      Le numéro de série tel qu'il doit être saisi, par exemple, dans l'app Easee pour smartphone.

   + **Widget parsonalisé**   
      Ne pas utiliser le wigdet standard de Jeedom mias le widget spécifique pour les équipements EaseeCharger.

   + **Couleur**  
      Couleur du chargeur. Permet de définir l'icône du chargeur.

1. Cliquer sur `Valider`.   

## Le widget personalisé


## Les commandes
{: .num}

Les chargeurs sont créés avec les commandes suivantes:

| Nom | Type | Sous type | Description |
| --- | ---- | --------- | ----------- |
| Etat | info | numeric | Etat du chargeur:<br>&nbsp;1: déconnecté<br>&nbsp;2: En Attente<br>&nbsp;3: En charge<br>&nbsp;4: Charge terminée<br>&nbsp;5: Prêt |
| Pause ON | action | other | Met la charge en pause |
| Pause OFF | action | other | Relance la charge |
| En pause | info | binary | La charge est en pause |
| Câble verrouillé en permanance | info | binary | Le verrouillage permanent du câble est activé |
| Câble verrouillé | info | binary | Le câble est verrouillé |
| Etat du verrouillage | info | numeric | Combinaison de *Câble verrouillé en permanence* et *Câble verrouillé* pour le widget |
| Verrouillage permanent ON | action | other | Activation du verrouillage permanent |
| Verrouillage permanent OFF| action | other | Désactivation du verrouillage permanent |
| Branché | info | binary | Véhicule branché |
| Puissance | info | numeric | Puissance de la charge en cours |
| Courant phase 1 | info | numeric | Courant phase 1 |
| Courant phase 2 | info | numeric | Courant phase 2 |
| Courant phase 3 | info | numeric | Courant phase 3 |
| Tension phase 1 | info | numeric | Tension phase 1 |
| Tension phase 2 | info | numeric | Tension phase 2 |
| Tension phase 3 | info | numeric | Tension phase 3 |
| Signal wifi | info | numeric | Force du signal wifi (0 si communication via le réseau cellulaire) |
| Signal cellulaire | info | numeric | Force du signal cellulaire (0 si communication via le réseau wifi) |

+ Le bouton ![créer les commandes manquantes](/images/EaseeCharger/btn_creer_cmds.png) permet de recréer les commandes qui ont été supprimées.
+ Le bouton ![Reconfigurer les commandes](/images/EaseeCharger/btn_reconfig_cmds.png) reconfigure les commandes avec les valeurs par défaut. 

## Les widget
{: .num}

### Etat du chargeur
{: .num}

Le widget par défaut pour l'état du serveur présente les six situations suivantes:

![debranche](/images/EaseeCharger/etat_0.png)
![attente](/images/EaseeCharger/etat_1.png)
![recharge](/images/EaseeCharger/etat_2.png)
![termine](/images/EaseeCharger/etat_3.png)
![erreur](/images/EaseeCharger/etat_4.png)
![pret](/images/EaseeCharger/etat_5.png)

Les options facultatives **notext : 1** et **noimage : 1** permettent de supprimer l'affichage du texte et de l'image:

![option notext](/images/EaseeCharger/widget_etat_option_notext.png)

donne

![pret notext](/images/EaseeCharger/etat_5_notext.png)

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
        <img src="/images/EaseeCharger/widget_lock_0_d_color.png"/>
        <img src="/images/EaseeCharger/widget_lock_0_l_color.png"/>
      </td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_0_d_bw.png"/>
        <img src="/images/EaseeCharger/widget_lock_0_l_bw.png"/>
      </td>
    </tr>
    <tr>
      <td>oui</td>
      <td>non</td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_1_d_color.png"/>
        <img src="/images/EaseeCharger/widget_lock_1_l_color.png"/>
      </td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_1_d_bw.png"/>
        <img src="/images/EaseeCharger/widget_lock_1_l_bw.png"/>
      </td>
    </tr>
    <tr>
      <td>non</td>
      <td>oui</td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_2_d_color.png"/>
        <img src="/images/EaseeCharger/widget_lock_2_l_color.png"/>
      </td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_2_d_bw.png"/>
        <img src="/images/EaseeCharger/widget_lock_2_l_bw.png"/>
      </td>
    </tr>
    <tr>
      <td>oui</td>
      <td>oui</td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_3_d_color.png"/>
        <img src="/images/EaseeCharger/widget_lock_3_l_color.png"/>
      </td>
      <td style="text-align:center">
        <img src="/images/EaseeCharger/widget_lock_3_d_bw.png"/>
        <img src="/images/EaseeCharger/widget_lock_3_l_bw.png"/>
      </td>
    </tr>
  </tbody>
</table>

### Mise en pause de la charge
{: .num}

![pause](/images/EaseeCharger/btn_pause.png) : Mise en pause le la charge

![continue](/images/EaseeCharger/btn_continue.png) : Reprendre une charge qui a été mise en pause
