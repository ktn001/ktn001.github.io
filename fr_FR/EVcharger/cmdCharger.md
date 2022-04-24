---
layout: default
title: EVcharger
---

# Description des commandes
{: .num}

Liste de toutes les commandes (info et action) qui peuvent être attribuées à un chargeur. Ces commandes peuvent ne pas être implémentées pour certains modèles de chargeur.

## État du véhicule
{: .num}

**Connecté**

> | *logicalId:* connected | *type:* info | *subType:* binary |
>
> Cette info indique si un véhicule est connecté au chargeur.

**Etat**

> | *logicalId:* state | *type:* info | *subType:* numeric |
>
> Cette info numérique indique l'état du véhicule connecté au chargeur.
>
> | valeur | texte | description | widget |
> | --- | --- | --- | --- |
> | 1 | Débranché | Aucun véhicule n'est connecté au chargeur | ![](/images/EVcharger/compact_1.png) |
> | 2 | En attente | Véhicule branché, en attente de charge | ![](/images/EVcharger/compact_2.png) |
> | 3 | Recharge | Véhicule branché, charge en cours | ![](/images/EVcharger/compact_3.png) |
> | 4 | Terminé | Véhicule branché, charge terminée | ![](/images/EVcharger/compact_4.png) |
> | 5 | Erreur | Erreur | ![](/images/EVcharger/compact_5.png) |
> | 6 | Prêt | Chargeur prêt | ![](/images/EVcharger/compact_6.png) |

## Connection du câble au chargeur
{: .num}
Ces commandes sont prévues pour les chargeurs qui n'ont pas de câble attaché mais un connecteur.

**Câble verrouillé**

> *logicalId:* cable_locked | *type:* info | *subType:* binary |
>
> Cette info indique si le câble branché au chargeur est verrouillé ou non.

**Câble verrouillé en permanence**

> *logicalId:* cable_locked_permanently | *type:* info | *subType:* binary |
> 
> Cette info indique si le câble est verrouillé même lorsque qu'il n'est pas branché à un véhicule en charge.

**Verrouillage permanent ON**

> *logicalId:* cable_lock | *type:* action | *subType:* other |
> 
> Cette action active le verrouillage permanent du câble.

**Verrouillage permanent OFF**

> *logicalId:* cable_unlock | *type:* action | *subType:* other |
>
> Cette action désactive le verrouillage permanent du câble.

**Etat du verrouillage**

> *logicalId:* cable_state | *type:* info | *subType:* numeric |
>
> Cette info est le résultat du calcul   
> `cable_locked + 2 * cable_locked_permanently`
> 
> Elle est utilisée pour l'affichage du widget *EVcharger/Cable_lock* qui commande l'activation et la désactivation du verrouillage permanent.
>
> | Valeur | Etat | widget |
> | --- | --- |--- |
> | 0 | Câble déverouillé<br>Verrouillage permanent désactivé | ![](/images/EVcharger/widget_lock_0_d_color.png) ![](/images/EVcharger/widget_lock_0_d_bw.png) ![](/images/EVcharger/widget_lock_0_l_color.png) ![](/images/EVcharger/widget_lock_0_l_bw.png)<br> |
> | 1 | Câble verouillé<br>Verrouillage permanent désactivé | ![](/images/EVcharger/widget_lock_1_d_color.png) ![](/images/EVcharger/widget_lock_1_d_bw.png) ![](/images/EVcharger/widget_lock_1_l_color.png) ![](/images/EVcharger/widget_lock_1_l_bw.png)<br> |
> | 2 | Câble déverouillé<br>Verrouillage permanent activé | ![](/images/EVcharger/widget_lock_2_d_color.png) ![](/images/EVcharger/widget_lock_2_d_bw.png) ![](/images/EVcharger/widget_lock_2_l_color.png) ![](/images/EVcharger/widget_lock_2_l_bw.png)<br> |
> | 3 | Câble verouillé<br>Verrouillage permanent activé | ![](/images/EVcharger/widget_lock_3_d_color.png) ![](/images/EVcharger/widget_lock_3_d_bw.png) ![](/images/EVcharger/widget_lock_3_l_color.png) ![](/images/EVcharger/widget_lock_3_l_bw.png)<br> |

## Mesures électriques
{: .num}

**Puissance**

> *logicalId:* power | *type:* info | *subType:* numeric |
>
> Puissance de charge

**Tension phase #**

> *logicalId:* voltage_1, voltage_2 et voltage_3 | *type:* info | *subType:* numeric |
>
> Tension électrique pour chacune des trois phases.

**Courant phase #**

> *logicalId:* current_1, current_2 et current_3 | *type:* info | *subType:* numeric |
>
> Courant électrique pour chacune des trois phases.

# Configuration des commandes
{: .num}

Les commandes sont définies de manière globale dans le fichier `core/config/cmd.config.ini`. Les paramètres de configuration peuvent être redéfinis pour le modèle dans le fichier `core/config/<model>/cmd.config.ini`.

Une description des commandes définies dans le fichier global se trouve à la page <a href="cmdCharger.html" target="_blank">Cmd des chargeurs</a>

## Syntaxe du fichier de configuration des commandes
{: .num}

Les fichiers de configuration des commandes sont subdivisés en sections dont le nom est le *logicalId* d'une commande ou le nom d'un groupe de commandes.

##### Exemple d'une section définissaant une commande
```
[power]
required = no
type = info
subType = numeric
name = Puissance
order = 8
display::graphStep = 1
unite = kW
rounding = 2
```

### Les paramètres de définition de commandes
{: .num}

**calcul**
: Formule de calcul. Ce paramètre est utilisé pour les commandes des types infos dont la valeur ne provient pas directement d'un équipement mais est le résultat d'un calcul.
: Une info de l'équipement peut être utilisée dans le calcul en indiquant son *logicalid* entre deux *#*
: **exemple**: `calcul = #cable_locked# + 2 * #cable_locked_permanently#`

**display::graphStep**
: Le graphique de l'historique sera afficher en *escalier* si ce paramètre est à *1*

**displayName**
: Le nom de la commande ne sera pas affiché dans le widget si ce paramèetre est à *0*

**group**
: Le groupe auquel cette commande appartient. Voir plus bas comment les paramètres du groupe sont repris dans la configuration de la commande.

**name**
: Le nom de la commande. (Aucune gestion multilingue n'est implémentée pour le moment).

**order**
: Position de la commande dans la liste des commandes. Ce paramètre influence la position du wigdet dans la tuile de l'équipement.

**required**
: Ce paramètre doit avoir une des trois valeur suivantes:
	+ ***yes***
	: Commande obligatoire pour le modèle

	+ ***optional***
	: Commande optionnelle pour le modèle

	+ ***no***
	: Commande pas implémentée pour le modèle

**rounding**
: Arrondissement (nombre de chiffre apès la virgule) de la valeur.

**Source**
: Valable uniquement pour les commandes de type *info*.
: Ce paramètre doit avoir une des valeurs suivantes:
	+ ***deamon***
	: L'info sera mise à jour par le deamon.

	+ ***calcul***
	: La valeur de l'info est la résultat d'un calcul

	+ ***info***
	: L'info reprend la valeur d'une info d'un équipement tiers

**subType**
: Sous-type de la commande

**template**
: texte

**type**
: type (*info* ou *action*) de la commande.

**unite**
: Unité de la mesure

**value**
: Le *logicalId* de la commande de type *info* qui est associé à l'*action*

**visible**
: Indique si le widget est visible ou non.

### Les groupes de commandes
{: .num}

Des commandes qui partagent un certains nombre de paramètres peuvent être rassemblées dans un groupe. Les paramètres du groupe seront repris comme paramètres des commandes s'ils ne sont pas redéfinis dans la commande.

Les groupes sont définis dans des section comme les commandes sauf que le nom de la section de sera pas un logicalId mais la chaine de caractères `group:` suivie du nom du groupe. Les commandes qui appartiennent au groupe doivent avoir le paramètre `group` dont la valeur est le nom du groupe.

##### Exemple de group de commandes

```
[group:voltage]
required = no
type=info
subType = numeric
unite = V
rounding = 0

[voltage_1]
group = voltage
name = tension phase 1
order = 12

[voltage_2]
group = voltage
name = tension phase 2
order = 13

[voltage_3]
group = voltage
name = tension phase 3
order = 14
```
On pourra redéfinir le paramètre `required` du groupe *voltage* à `yes` pour que le trois commandes *voltage_#* soient créées. Si le modèle de chargeur n'est pas triphasé mais monophasé, il faudra définir le paramètre `required` à `yes` uniquement pour la commande *voltage_1*.

## Ordre de priorité dans la recherche des paramètres
{: .num}

Nous avons vu plus haut que les paramètres d'une commande peuvent être définis ua niveau de plugin ou du model et soit spécifiquement pour la commande ou pour un groupe de commande.

Nous avons donc (par ordre de priorité):

1. Paramètre de commande dans le fichier du modèle.
1. Paramètre de commande dans le fichier du plugin.
1. Paramètre de groupe dans le fichier du modèle.
1. Paramètre de groupe dans le fichier du plugin.

## Outil de diagnostique
{: .num}

L'utilitaire `core/ressources/showCmds` permet de visualiser les configurations des commandes:

##### Options de l'utilitaire:
```
$ ./ressources/bin/showCmds -h

usage:
~~~~~~
        showCmds [-h] [-c command] -m model

   -h         : Cette aide
   -c command : Le logicalId d'une commande
   -m model   : Le modèle
```

##### Exemple pour la commande *voltage_1* des chargeur *easee*:
```
$ ./ressources/bin/showCmds -m easee -c voltage_1

LogicalId: voltage_1       GROUP: voltage
    Parametre            |Valeur finale             |Commande modele           |Commande Plugin           |Groupe modele             |Groupe plugin            
    ~~~~~~~~~            |~~~~~~~~~~~~~             |~~~~~~~~~~~~~~~           |~~~~~~~~~~~~~~~           |~~~~~~~~~~~~~             |~~~~~~~~~~~~~            
    group                |voltage                   |-                         |voltage                   |-                         |-                        
    name                 |tension phase 1           |-                         |tension phase 1           |-                         |-                        
    order                |12                        |-                         |12                        |-                         |-                        
    required             |optional                  |-                         |-                         |optional                  |no                       
    rounding             |0                         |-                         |-                         |-                         |0                        
    source               |daemon                    |-                         |-                         |-                         |daemon                   
    subType              |numeric                   |-                         |-                         |-                         |numeric                  
    type                 |info                      |-                         |-                         |-                         |info                     
    unite                |V                         |-                         |-                         |-                         |V       
```

On constate que:
+ *group*, *name* et *order* sont définis au niveau de la commande dans le fichier *core/config/cmd.config.ini*
+ La valeur retenu pour *required* est *optional* qui est définie au niveau du groupe dans le fichier *core/config/easee/cmd.config.ini*
+ *rounding*, *source*, *subType*, *type* et *unite* sont définis au niveau du groupe dans le fichier *core/config/cmd.config.ini*
