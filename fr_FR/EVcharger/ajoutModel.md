---
layout: default
title: EVcharger
---
# Introduction
{: .num}

Le plugin **EVchargerVE** est conçu de manière à ce que l'on puisse y intégrer divers types de bornes de charge. Cette documentation décrit la procédure pour ajouter le support d'un modeèle de borne.

A terme, un développeur devrait pouvoir ajouter le support d'un medèle de borne puis faire un PM dans github pour demander l'intégration des modifications dans la branche beta puis master du plugin.

Merci d'informer `ktn` via le forum de la communauté Jeedom si vous désirez intégrer un nouveau type de chargeur. Ceci permettra d'éviter que deux personnes effectuent l'intégration d'un même modèle de borne sans coordination.
# Création du modèle
{: .num}

## Nom du modèle
{: .num}

Un nom unique doit être choisi pour le modèle de chargeur à intégrer. La liste des modèles déjà intégrés peut être déterminée en consultant le fichier `core/config/models.ini` du plugin. Le nom de chaque section de ce fichier correspond à un modèle. Il faut donc choisir un nom de modèle qui ne corresponde pas à une section existante.

Le premier caratère du nom du modèle ne doit pas être `_`. Dans ce tuto, le nom du modèle sera représenté par `<model>` et les exemples seront basés sur la création du modèle nommé `virtual`

Une fois le nom défini, il faut éditer le fichier `core/config/model.ini` pour y ajouter une section dont le nom sera le nom du modèle. Cette section contiendra la définition du paramèetre `label` qui sera le nom du modèle qui sera affiché dans l'interface utilisateur.

{% raw %}
```
[virtual]
label = "{{Virtuel}}"
```
{% endraw %}

## Les images
{: .num}

Les images des accounts et chargeurs du modèle sont placées dans le répertoire `desktop/img/<plugin>`. Nous allons donc créer un répertoire  `desktop/img/virtual`.

### Images des accounts
{: .num}
Un choix de différentes images d'account peut être proposé à l'utilisateur. Les fichiers image des accounts doivent être placés dans le répertoire `desktop/img/<model>` et respecter les règles suivantes:

 + Le nom du fichier doit être `account.png` (s'il n'y en a qu'un seul) ou `account_XXX.png` (`XXX` est une chaîne de caractères quelquonques)
 + La hauteur de l'image doit être égale à la largeur (100x100 pixels par exemple).
 + Le fond de l'image doit être transparent
 + L'image doit être bien visible dans les différents thèmes de Jeedom.

> :bulb: Le fichier `desktop/img/_template/account_template.xcf` peut être utilisé comme base pour la création d'une nouvelle image (avec *gimp* par exemple).

### Images des chargeurs
{: .num}
Un choix de différentes images de chargeurs peut être proposé à l'utilisateur. Les fichiers image des chargeurs doivent être placés dans le répertoire `desktop/img/<model>` et respecter les règles suivantes:

 + Le nom du fichier doit être `charger.png` (s'il n'y en a qu'un seul) ou `charger_XXX.png` (`XXX` est une chaîne de caractères quelquonques)
 + Le rapport largeur/hauteur doit être de 3/4 (300x400 pixels par exemple)
 + Le fond de l'image doit être transparent
 + L'image doit être bien visible dans les différents thèmes de Jeedom.

## Les classes PHP des accounts
{: .num}

Les classes PHP `<model>` et `<model>Cmd` doivent être créés et intégrées dans le code du plugin.

### Déclaration des classes
{: .num}

Nous allons commencer par créer les classes sans y intégrer de code spécifque au nouveau modèle (ça viendra plus tard...).

+ La classe `<model>` doit étendre la classe `EVcharger_account`
+ La classe `<model>Cmd` doit étendre la classe `EVcharger_accountCmd`

Ces deux classes doivent être déclarées dans le fichier `core/class/EVcharger_<model>.class.php`.

##### Exemple pour le modèle ***virtual***:
```
class EVcharger_account_virtual extends EVcharger_account {
}

class EVcharger_account_virtualCmd extends EVcharger_accountCmd  {
}
```

> :bulb: Le fichier `core/class/EVcharger_account__template.class.php` peut être copié en `/core/class/EVcharger_account_<model>.class.pp`. Le fichier ainsi créé doit alors être édité pour y modifier le nom des deux classes qui y sont déclarées.

### Intégration des classes dans le code du plugin
{: .num}

Editer le fichier `core/class/EVcharger_account.class.php` pour y ajouter `require_once __DIR__ . '/EVcharger_account_<model>.class.php';`

##### Exemple pour le modèle ***virtual***:
```
...
}

require_once __DIR__ . '/EVcharger_account_easee.class.php';
require_once __DIR__ . '/EVcharger_account_virtual.class.php';
```
# Test de l'intégration du modèle
{: .num}

## Activation du modèle
{: .num}

+ Ouvir la page de configuration du plugin et vérifier que le modèle est bien listé.
+ Activer le modèle et sauvegarder la modification

![Activation du Modèle](/images/EVcharger/test1/ModelActivation.png)

## Ajout d'un compte
{: .num}

+ Ouvrir la page de configuration des équipements du plugin.
+ Cliquer sur *Ajouter et compte*.
+ Saisir un nom de compte (*Atest* par exemple) et sélectionner le modèle.     
   ![Nom et modèle du compte](/images/EVcharger/test1/NameModelAccount.png)
+ Vérifier si les images de compte peuvent être sélectionnées.   
   ![Images du compte](/images/EVcharger/test1/SelectAccountImage.png)
+ Sauvegarder le compte.

## Ajout d'un chargeur
{: .num}
+ Revenir sur la page de configuration des équipements du plugin.
+ Cliquer sur *Ajouter un chargeur*.
+ Saisir un nom de chargeur (*Ctest* par exemple) et sélectionner le modèle.     
   ![Nom et modèle du chargeur](/images/EVcharger/test1/NameModelCharger.png)
+ Vérifier si le compte créé ci-dessus peut être associé au chargeur.
+ Vérifier si les images de chargeur peuvent être sélectionnées.   
   ![Images du chargeur](/images/EVcharger/test1/SelectChargerImage.png)

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
	+ **yes**
	: Commande obligatoire pour le modèle

	+ **optional**
	: Commande optionnelle pour le modèle

	+ **no**
	: Commende pas implémentée pour le modèle

**rounding**
: Arrondissement (nombre de chiffre apès la virgule) de la valeur.

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
