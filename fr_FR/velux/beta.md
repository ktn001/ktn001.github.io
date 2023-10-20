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
  La fenêtre du Velux se ferme automatiquement en cas de pluie mais la fenêtre peut être réouverte (par Jeedom, par la
  télécommande Velux ou par tout autre équipement de contrôle) au bout d'un certain temps même si la pluie n'a pas cessé.
  <br>
  **Il est donc important de configurer une information *pluie* fiable qui bloquera l'ouverture de la fenêtre.**

# Equipement Velux
{: .num}

## Définition
{: .num}

Un équipement Velux regroupe une fenêtre et un volet roulant Velux (tous deux doivent être des équipements
du plugin hkControl) pour en assurer la cohérence des mouvements afin d'éviter que le volet roulant soit déplacé dans
la partie inférieure lorsque la fenêtre est ouverte.

## Fonctionnement de base
{: .num}

L'équipement effectue les actions suivantes:
+ Déplacement libre du volet roulant dans le partie supérieure.
+ Déplacement libre du volet roulant sur toute la longueur lorsque la fenêtre est suffisamment fermée pour le permettre.
+ Si le volet roulant doit être déplacé dans le partie inférieure alors que le fenêtre est ouverte, le plugin effectue
  les actions suivantes:
   1. Fermeture de la fenêtre pour permettre le mouvement du volet roulant.
   2. Déplacement du volet roulant à la position voulue.
   3. Repositionnement de la fenêtre à sa position initiale.

Le plugin se met en pause s'il détecte qu'un mouvement a été lancé ou interrompu via une action externe (action
sur l'équipement HkControle, utilisation de la télécommande ou utilisation de l'app "Velux Active" par exemple).
La durée de cette mise en pause est d'une heure par défaut mais une durée différente peut être configurée.

## La pluie
{: .num}

En cas de détection de pluie, la fenêtre du Velux se ferme automatiquement. Malheureusement, la fenêtre peut être
réouverte au bout d'un certain temps même si la pluie n'a pas cessé. Ceci ne dépend pas de jeedom mais du
firmware qui se trouve dans le système de contrôle de Velux.

Malheureusement, l'information de détection de pluie ne fait pas partie des informations fournies par Velux via le
protocole homekit.

Une formule peut/doit être définie dans la configuration de la commande `pluie` pour indiquer au plugin s'il pleut.
Le plugin ferme la fenêtre pour que son ouverture soit, au maximun, celle qui correspond à la position d'aération.
(fenêtre fermée mais poignée ouverte pour permettre la ventilation).

Je pense utiliser l'info 'pluie' du plugin 'weather' pour définir qu'il pleut si la valeur de cette infos dépasse
un seuil.   
*Toute suggestion sur le forum Jeedom pour améliorer la détection de pluie est la bienvenue.*

## Positions prédéfinies.
{: .num}

Des commandes avec des positions de fenêtre et/ou volet roulant prédéfinies peuvent être ajoutées à volonter. Ces
commandes pourront être utilisées pour positionner les équipements en une seule action.

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

On est ensuite dirigé vers la page de configuration de l'équipement.

## Configuration d'un équipement
{: .num}

![configuration équipement](/images/velux/configurationEquipement.png)

Outre les paramètres habituels des équipements Jeedom sur lesquels on de reviendra pas ici, il y a quatre paramètres
spécifiques aux équipements Velux.

La procédure pour configurer les deux paramètres de positions limites seront vus plus loin. Leur valeur ne
peut pas être déterminée tant que l'équipement n'est pas fonctionnel.

Pour que l'équipement puisse fonctionner, il faut définir les équipements HkControl qui y seront associés.
Selon les cas, on définira une fenêtre et un volet roulant ou juste une fenêtre (on peut aussi définir juste un
volet roulant mais je ne vois pas l'utilité d'un volet sans fenêtre :upside_down_face:).

### Association des équipements hkControl
{: .num}

La procédure pour associer une fenêtre ou un volet roulant est la même. Je ne vais donc d'écrire ici ques
l'association d'une fenêtre.

1. Cliquer sur le bouton `Sélection d'une fenêtre`.   
   ![bouton sélection fenêtre](/images/velux/btnSelectionFenetre.png)
1. Sélectionner l'équipement HkControl de la fenêtre.
1. Sélectionner les 5 commandes de l'équipement hkControle qui seront associées aux commandes de l'équipement
   Velux.   
   ![Sélection hkContro](/images/velux/selectionEqHkControle.png)   
   *Le bouton `supprimer` permet de supprimer une association qui a été configurée prélablement. Les données de
   sélection des commandes sont conservées pour faciliter une réassociation avec un équipement Velux (le même 
   ou un autre).*
1. Cliquer sur `Valider`.
1. Sauvegarder l'équipement.

### Vérification de l'association des équipements hkControl
{: .num}

1. Ouvrir la page de configuration des commandes de l'équipement Velux.
1. Cliquer sur le bouton `Tester` de la commande `w:identity` (`s:identify` pour tester le volet roulant).   
   ![test identify](/images/velux/cmdIdentify.png)   
    + La fenêtre (ou le volet roulant) doit effectuer quelques mouvements.
1. Cliquer sur le bouton `Tester` de la commande `w:target_action` (`s:target_action` pour tester le volet roulant).   
   ![test TargetAction](/images/velux/cmdTargetAction.png)   
1. Si la fenêtre (ou le volet roulant) est ouverte, choissir un valeur plutôt proche de zéro, dans le cas
   contraire choisir une valeur proche de cent (Le but est d'avoir un mouvement assez long).
    + La fenêtre (ou le volet roulant) doit bouger vers la position cible.
    + la commande `w:target_info` (ou `s:target_info`) doit prendre la valeur de la position choisie.
    + Durant le mouvement, la commande `w:state` (ou `s:state`) doit prendre une valeur différente de 2 (0 ou 1).
    + La fenêtre (ou le volet roulant) doit s'arrêter à la position choisie.
    + Après l'arrêt de l'équipement, la commande `w:position` (ou `s:position`) prend la valeur de la position
      de l'équipement.
    + La valeur de la commande `w:state` (ou `s:state`) doit être passée à 2.   
   ![résultat test TargetAction](/images/velux/cmdsTarget.png)   

### Configuration de la durée de pause
{: .num}

L'équipement se met en pause en cas de détection d'un mouvement qui n'a pas été déclenché par le plugin. Par défaut,
la durée de cette pause est de 60 minutes. Il est possible de modifier cette durée en modifiant la configuration
de la commande `pause` (saisir la durée en minutes):

![Durée pause](/images/velux/cmdPause.png)   
    
### Configuration de la pluie
{: .num}

La commande `pluie` est importante pour éviter l'ouverture de la fenêtre en cas de pluie. Il est de la **responsabilité
de l'utilisateur** de déterminer une bonne configuration pour déterminer s'il pleut ou non.

L'exemple si dessous utilise la commande `pluie` du plugin `weather` et défini qu'il pleut si la valeur de cette
commande est supérieure à 0,2. **Ceci n'est qu'un exemple!**

*Toute suggestion sur le forum Jeedom pour améliorer la détection de pluie est la bienvenue.*

La formule permettant de définir s'il pleut ou non doit être déclarée le champ `calcul` de la commande `rain`.

![config pluie](/images/velux/cmdRain.png)

La valeur retournée par le calcul peut être une chaîne de caractères, un numérique ou un boolean. Les valeurs
`'0'`, `0` et `false` signifient qu'il ne pleut pas. Dans tous les autres cas, on considère qu'il pleut.

### Configuration des positions limites
{: .num}

![positions limites](/images/velux/positionsLimites.png)

#### Position ventilation
{: .num}

Cette position est la position à laquelle la fenêtre est fermée mais la poignée est ouverte pour permettre la ventilation.

Pour le plugin, cette limite est:
  + L'ouverture maximale lorsqu'il pleut.
  + L'ouverture de la fenêtre au dela de laquelle le volet roulant ne peut pas être déplacer dans la partie inféfieure.

Cette valeur limite peut être déterminée en utilisant la télécommande ou l'app *Velux actve* pour positionner la fenêtre
dans cette position. Il suffit alors de relever la valeur de la commande `w:position` puis de la saisir dans la 
configuration de l'équipement `Velux`.

#### Limite volet roulant
{: .num}

Cette limite la limite entre la partie inférieur et la partie supérieur de la course du volet roulant. Le Volet roulant
peut être déplacé librment si sa position actuelle et la position cible sont toutes deux en deça de cette limite. Le plugin
s'assurera que la fenêtre est fermée (position égale ou inférieur à la position de ventilation) avant de déplacer le volet
roulant dans le partie inférieure.

Pour déterminé cette limite, il faut
1. Ouvrir complèetement le volet roulant.
1. Ouvrir complètement la fenêtre.
1. Fermer le volet roulant et interrompre le mouvement juste avant qu'il ne touche la fenêtre ouverte.
1. Relever la valeur de la commande `s:position` et le saisir dans la page de configuration de l'équipement `Velux`.

## Ajout d'une commande de positions prédéfinies
{: .num}

Le bouton `ajouter une commande "cible"` sur la page de configuration des commandes permet d'ajouter une commande
de type action qui permettra de positionner la fenêtre et/ou le volet roulant à une position préconfigurée.

![bouton ajout cmd cible](/images/velux/btnAjoutCmdCible.png)

Après avoir créé la commande, il faut lui donner un nom et définir la position cible de la fenêtre et ou du volet
roulant.

![commande cible](/images/velux/cmdCible.png)

