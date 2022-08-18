---
layout : default
title : EaseeCharger
---

# Plugin "EaseeCharger" pour Jeedom

Le plugin **EaseeCharger** permet d'intégrer un chargeur `Easee` pour véhicules électriques dans une instance Jeedom.

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
    : Numéro du port TCP utilisé pour la communication entre Jedon et le démon. Le port 34739 est configuré par défaut un autre port peut être défini en cas de conflit avec un autre plugin ou logiciel qui utilise le même port.

    + ***Debug étendu***
    : Le module Python du démon qui assure la communication avec le cloud Easee est très verbeux lorsqu'il est en mode `debug`.
    : Par défaut, le niveau de log de ce module est celui du plugin mais il sera à `info` si le niveau de log du plugin est `debug` et que l'option "**Debug étendu**" n'est pas activée.

**Sécurité**   
:   
    + ***Log non sécurisé***
    : Les données sensibles (password, token, etc...) sont remplacées dans les logs par des `********`. L'option "**Log non sécurisé**" désactive de remplacement et laisse les données sensenbles en clair dans les logs.

# Les comptes
{: .num}

Un compte permet d'accéder au cloud Easee pour gérer un ou plusieurs chargeurs. Un compte doit être déclaré dans le plugin avant de pouvoir créer un équipement chargeur qui sera géré via ce compte.

## Création d'un compte
{: .num}

1. Sur la page de gestion du plugin, cliquer sur l'icône de création d'un comptes:  
![Icone de création de compte](/images/EaseeCharger/icone_creation_compte.png)

1. Saisir le nom du compte  
![Saisie nom su compte](/images/EaseeCharger/saisie_nom_compte.png)  
  > :bulb: Une fois enregistré, le nom du compte ne peux plus être modifié.

1. Saisir le login et le password pour se connecter au cloud et activer le compte  
  ![Login_password](/images/EaseeCharger/saisie_login_password.png)

1. Cliquer sur `Valider`.   
  > :bulb: Le login et le password sont vérifiés à l'enregistrement uniquement si le compte est activé.

## Fonctionnement des comptes
{: .num}

### Désactivation d'un compte
{: .num}

Lorsqu'un compte est désactivé, tous les chargeurs qui utilise ce compte pour communiquer avec le serveur Easee sont également déasactivés. Les chargeurs doivent être réactiveés manuellement lorsque le compte est réactivé.

### Suppression d'un compte
{: .num}

Un compte ne peut pas être supprimé s'il est utilisé par au moins un chargeur.

### Modification du login ou du password
{: .num}

Le démon n'est pas notifié lorsque le login ou le password d'un compte est modifé. Il faut donc relancer le démon chaque fois que le login ou le password est modifié.

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
   Un chargeur est un équipement Jeedom. En plus des options de base (nom, objet, catégorie, option) des équipements, les configuration suivantes doivent être définies:

   ![paramétrage du chargeur](/images/EaseeCharger/parametrage_chargeur.png)

   + **Compte**  
      Le compte qui doit être utilisé pour communiquer avec le serveur Easee

   + **N° de série**  
      Le numéro de série tel qu'il doit être saisi, par exemple, dans l'app Easee pour smartphone.

   + **Couleur**  
      Couleur du chargeur. Permet de définir l'icon du chargeur.

1. Cliquer sur `Valider`.   

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
| Etat du verrouillage | info | numeric | Combinaison de *Câble verrouiller en permanance* et *Câble verrouillé* pour le widget |
| Verrouillage permanent ON | action | other | Activation du verrouillage permanent |
| Verrouillage permanent OFF| action | other | Désctivation du verrouillage permanent |
| Branché | info | binary | Véhicule branché |
| Puissance | info | numeric | Puissance de la charge en cours |
| Courant phase 1 | info | numeric | Courant phase 1 |
| Courant phase 2 | info | numeric | Courant phase 2 |
| Courant phase 3 | info | numeric | Courant phase 3 |
| Tension phase 1 | info | numeric | Tension phase 1 |
| Tension phase 2 | info | numeric | Tension phase 2 |
| Tension phase 3 | info | numeric | Tension phase 3 |

+ Le bouton ![créer les commandes manquantes](/images/EaseeCharger/btn_creer_cmds.png) permet de recréer les commandes qui ont été supprimées.
+ Le bouton ![Reconfigurer les commandes](/images/EaseeCharger/btn_reconfig_cmds.png) reconfigure les commandes avec les valeurs par défaut. 

## Les widget
{: .num}

### Etat du chargeur
{: .num}

Le widget pas défaut pour l'état du serveur présente les six situations suivantes:

![debranche](/images/EaseeCharger/etat_0.png)
![attente](/images/EaseeCharger/etat_1.png)
![recharge](/images/EaseeCharger/etat_2.png)
![termine](/images/EaseeCharger/etat_3.png)
![erreur](/images/EaseeCharger/etat_4.png)
![pret](/images/EaseeCharger/etat_5.png)

Les option facultatives **notext : 1** et **noimage : 1** permettent de supprimer l'affichage du texte et de l'image:

![option notext](/images/EaseeCharger/widget_etat_option_notext.png)

donne

![pret notext](/images/EaseeCharger/etat_5_notext.png)

### Verrouillage du câble
{: .num}

Le widget du vérouillage du câble permet d'activer ou désactiver le vérouillage permanent et indique si le câble est vérouillé et si le vérouillage permanent est activé.

Le tableau suivant montre les différente icônes en fonction de l'état du vérouillage et du thème de l'interface WEB:

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

### Mise en pose de la charge
{: .num}

![pause](/images/EaseeCharger/btn_pause.png) : Mise en pause le la charge

![continue](/images/EaseeCharger/btn_continue.png) : Preprendre une charge qui a été mise en pause
