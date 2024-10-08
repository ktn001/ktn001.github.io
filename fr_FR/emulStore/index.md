---
layout : default
title : emulStore
lang: fr_FR
---

# Plugin "emulStore" pour Jeedom

Le plugin **emulstore** permet de simuler un store roulant pour des tests de plugin, scénario, etc... dans Jeedom.

# Installation et activation du plugin
{: .num}

Le plugin s'installe simplement depuis le market Jeedom. Après installation, il faut juste l'activer.

![Page de configuration de plugin](/images/emulStore/config_plugin.png)

# Création d'un store émulé
{: .num}

   + Cliquer sur ajouter

   ![Ajout d'un store émulé](/images/emulStore/ajout_store.png)

   + Saisir le nom de l'équipement

   ![Nom du store émulé](/images/emulStore/nom_equipement.png)

   + Paramétrer le Store

   ![Configuration du store émulé](/images/emulStore/config_equipement.png)

L'équipement est créé:

![Store émulé](/images/emulStore/equipement.png)

# Fonctionnement des commandes
{: .num}

## Lorsque le store est à l'arrêt
{: .num}

  * A la réception d'une commande **ouvrir** ou **fermer**
     * Le store s'ouvre ou se ferme. :smile:
     * Si le store est complètement fermé, il y aura une attente du temps de décollage configuré avant qu'il ne commence à monter.
     * L'info **puissance** prend la valeur configurée pour la montée ou la descente du store.


## Lorsque le store est en mouvement
{: .num}

  * A la réception d'une commande **ouvrir**, **stop** ou **fermer**
     * Le store s'arrête.
     * La puissance est mise à zéro.
