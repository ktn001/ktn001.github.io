---
layout : default
title : velux
---

# PLugin "velux" pour Jeedom

Ce plugin permet de gérer de manière coordonnée un volet roulant et une fenêtre Velux.

> :bulb: Attention ce plugin nécessite l'installation du plugin hkControl

Ce plugin n'actionne pas directement les fenêtres et volets roulants. Il agit sur les équipements du 
plugin hkControl. Il est donc nécessaire que le plugin hkControl soit configuré correctement pour pouvoir
actionner les fenêtres et volets roulants Velux avant d'installer ce plugin.

> :warning: **Attention à la pluie**  
  La fenêtre du Velux se ferme automatiquement en cas de pluie mais le plugin peut la réouvrir, sur commande
  d'un scénario par exemple, au bout d'un certain temps même si la pluie n'a pas cessé.  
  <br>
  **Il est donc important de configurer une information *pluie* fiable qui bloquera l'ouverture de la fenêtre.**

# Equipement Velux
{: .num}

## Définition
{: .num}

Un équipement Velux regroupe une fenêtre et un store roulant Velux (tous deux doivent être des équipements
du plugin hkControl) pour en assurer la cohérence des mouvements afin d'éviter que les store soit déplacé dans
la partie inférieure lorsque la fenêtre est ouverte.

## Fonctionnement de base
{: .num}

L'équipement effecue les actions suivantes:
+ Déplacement libre du store dans le partie supérieure.
+ Déplacement libre du store sur toute la longueur lorsque la fenêtre est suffisamment fermée pour le permettre.
+ Si le store doit être déplacé dans le partie inférieure alors que le fenêtre est ouverte, le plugin effectue
  les actions suivantes:
   1. Fermeture de la fenêtre pour permettre le mouvement du store.
   2. Déplacement du store à la position voulue.
   3. Repositionnement de la fenêtre à se position initiale.

Le plugin se met en pause s'il détecte qu'un mouvement a été lancé ou interrompu via une acion externe (action
sur l'équipement HkControle, utilisation de la télécommande, utilistation de l'app "Velux Active" par exemple).
Le durée de cette mise en pause est d'une heure par défaut mais une durée différente peut être configurée.

## La pluie
{: .num}

En cas de détection de pluie, la fenêtre du Velux se ferme automatiquement. Malheureusement, la fenêtre peut être
réouverte au bout d'un certain temps même si la pluie n'a pas cessé. Ceci ne dépend pas de jeedom mais du
firmware qui se trouve dans le système de control de Velux.

Malheureusement, l'information de détection de pluie ne fait pas partie des information fournies par Vlux via le
protocole homekit.

Une formule peut/doit être définie dans la configuration de la commande "pluie" pour indiquer au plugin s'il pleut.
Le plugin ferme la fenêtre pour que sont ouverture soit, au maximun, celle qui correspond à la position d'aération.
(fenêtre fermée mais poignée ouverte pour permettre la ventilation).

Je pense utiliser l'info 'pluie' du plugin 'waether' pour définir qu'il pleut si la valeur de cette infos dépasse
un seuil.   
*Toute suggestion sur le forum Jeedom pour améliorer la détection de pluie est la bienvenue.*

## Positions prédéfinies.
{: .num}

Des commandes avec des positions de fenêtre et/ou volet roulant peuvent être ajoutées à volonter. Ces commandes
pourront alors, par exemple, être utilisées pour positionner les équipements en une seule commande.

# Installation et configuration du plugin
{: .num}

Le plugin ne nécessite aucune configuration. Il faut juste l'installer depuis le Market Jeedom puis l'activer.

![Configuration du plugin](/images/velux/configurationPlugin.png)

# Gestion des équipements
{: .num}

## Prérequis
{: .num}

Avant de créer un équipement Velux, Il faut vérifier que les équipements de la fenêtre et du volet roulant
sont bien configurés et fonctionnels dans le plugin **hkControl**.

## Création d'un équipement
{: .num}

Pour créer un équipement Velux, il faut se rendre sur la page du plugin et cliquer sur `Ajouter`. Il faut alors
saisir le nom du nouvel équipement dans le popup qui s'ouvre.

![Ajout équipement](/images/velux/ajoutEquipement.png)
![Nom équipement](/images/velux/nomEquipement.png)

On arrive alors sur la page de configuration de l'équipement

## Configuration d'un équipement
{: .num}

![configuration équipement](/images/velux/configurationEquipement.png)

Outre les paramètres habituels des équipements Jeedom sur lesquels on de reviendra pas ici, on a 4 paramètres
spécifiques aux équipements Velux.

La procédure pour configurer les deux paramètres de positions limites seront vus plus loin. Leurs valaurs ne
peut pas être déterminée tant que l'équipement n'est pas fonctionnels.

Pour que l'équipement soit fonctionnel, Il faut définir les équipements HkControl qui y seront associés.
Selon les cas, définira une fenêtre et un volet roulant ou juste une fenêtre (on peut aussi définir juste un
volet roulant mais je ne vois pas l'utilité d'un volet sans fenêtre :upside_down_face:).

### Association des équipements hkControl
{: .num}

La procédure pour associer une fenêtre ou un volet roulant est la même. Je ne vais donc d'écrire ici que l'
association d'une fenêtre.

1. Cliquer su le bouton `Sélection d'une fenêtre`   
   ![bouton sélection fenêtre](/images/velux/btnSelectionFenetre.png)
1. Sélectionner l'équipement HkControl de la fenêtre
1. Sélectionner les 5 commandes de l'équipement hkControle qui seront associées au commande de l'équipement
   Velux.   
   ![Sélection hkContro](/images/velux/selectionEqHkControle.png)   
   *Le bouton `supprimer` permet de supprimer une association qui a été configurée prélablement. Les données de
   sélection des commandes sont conservées pour faciliter une réassociation avec un équipement Velux (le même 
   ou un autre).*
1. Cliquer sur `Valider`.
1. Sauvegarder l'équipement.

### Vérification de l'association des équipements hkControl
{: .num}

1. Ouvrir la page de configuration des commandes de l'équipement Velux
1. Cliquer sur le bouton `Tester` de la commande `w:identity`(s:identify` pour tester le volet roulant).   
   ![test identify](/images/velux/cmdIdentify.png)   
    + La fenêtre (ou le volet roulant) doit effectuer quelques mouvements
1. Cliquer sur le bouton `Tester` de la commande `w:target_action` (`s:target_action` pour tester le volet roulant).   
   ![test TargetAction](/images/velux/cmdTargetAction.png)   
1. Si la fenêtre (ou le volet roulant) est ouverte, choissir un valeur plutôt proche de zéro, dans le cas
   contraire choisir une valeur proche de cent (Le but est d'avoir un mouvement assez long).
    + La fenêtre (ou le volet roulant) doit bouger vers la position cible.
    + la commande `w:target_info` (ou s_target_info) doit prendre la valeur choisie.
    + Durant le mouvement, la commande `w_state` (ou `s:state`) doit prendre une valeur différente de 2 (0 ou 1).
    + La fenêtre (ou le volet roulant doit s'arrêter à la position choisie).
    + Après l'arrêt de l'équipement, la commande `w:position` (ou `s:position`) prend la valeur de la position
      de l'équipement
    + La valeur de la commande `w_state` (ou `s:state`) doit être 2.   
   ![résultat test TargetAction](/images/velux/cmdsTarget.png)   

### Configuration de la durée de pause
{: .num}

L'équipement se met en pause en cas de détection d'un mouvement qui n'a pas été déclenché par le plugin. Par défaut,
la durée de cette pause est de 60 minutes. Il est possible de modifier cette durée en modifiant la configuration
de la commande `pause` (saisir la durée en minutes):

![Durée pause](/images/velux/cmdPause.png)   
    
### Configuration de la pluie
{: .num}

La commande `pluie` est importante pour éviter l'ouverture de la fenêtre en cas de pluie. Il est de la responsabilité
de l'utilisateur de déterminer une bonne configuration pour déterminer s'il pleut ou non.

L'exemple si dessous utilise la commande "pluie" du plugin `waether` et défini qu'il pleut si la valeur de cette
commande est supérieure à 0,2. **Ceci n'est qu'un exemple**

*Toute suggestion sur le forum Jeedom pour améliorer la détection de pluie est la bienvenue.*

La formule permettant de définir s'il pleut ou non doit être déclarée le champ `calcul`de la commande `rain`.
