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

# Configurations
{: .num}

## Configurations du modèle
{: .num}

+ Créer un répertoire `core/config/<model>`.
: `mkdir core/config/virtual`
+ Créer et éditer le fichier `core/config/<model>/config.ini`
: Ce fichier doit contenir une section nommée *charger* avec le paramèetre *identifiant*
: Ce paramètre indique quel est la configuration des équipements *EVcharger_charger_<model>* qui permet d'identifier le chargeur dans les API du chargeur lorsque qu'un même copte est utilisé pour gérer plusieurs chageurs.
##### Exemple pour le modèle *Easee*:
    ```
    [charger]
    identifiant = serial
    ```

## Configuration de l'account
{: .num}

### Panneau de configuration
{: .num}

Le panneau de configuration des comptes permet la saisie des configurations standards de Jeedom. 

##### Config compte générique:
  ![Config compte générique](/images/EVcharger/configCompteVirtual.png)

Les comptes pour certains modèles peuvent nécessité des paramètres suplémentaires (login, password et url par exemple pour les compte Easee).

La saisie de ces paramètres peut être ajoutée au panneau de config des comptes en créant le fichier `desktop/php/<model>/account_params.inc.php`. Cefichier contiendra, ou générera, les code HTML pour la saisie des paramètres spécifiques.

##### Code pour la saisie des paramètres des comptes Easee
```
<div class='form-group'>
  <label class="col-sm-3 control-label">{{Login}}</label>
  <div class="col-sm-7">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="login" placeholder="{{user}}"/>
  </div>
</div>
<div class='form-group'>
  <label class="col-sm-3 control-label">{{Password}}</label>
  <div class="col-sm-7">
    <div class="input-group" style="display:flex">
      <input type="password" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="password" placeholder="{{password}}"/>
      <button class="btn btn-outline-secondary show-txt" type="button"><i class="fas fa-eye"></i></button>
      <button class="btn btn-outline-secondary hide-txt" type="button" style="display:none"><i class="fas fa-eye-slash"></i></button>
    </div>
  </div>
</div>
<div class='form-group'>
  <label class="col-sm-3 control-label">{{URL}}</label>
  <div class="col-sm-7">
    <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="url" placeholder="https://api.easee.cloud"/>
  </div>
</div>
```

> :bulb: Les buttons de class *show-txt* et *hide-txt* rendent le password lisible ou non.

> :bulb: Les configurations nommées *password* sont automatiquement encryptées dans la base de donnée.

## Configuration du chargeur
{: .num}

### Panneau de configuration
{: .num}

Le panneau de configuration des chargeurs permet la saisie des configurations standards de Jeedom et des paramètre génériques valables pour tous les modèles de chargeurs (la position GPS du chargeur et le compte associé par exemple).

##### Config chargeur générique:
  ![Config chargeur générique](/images/EVcharger/configChargeurVirtual.png)

Certains modèles de chargeurs peuvent nécessité l'ajout de paramètres spécifique. Le numéro se série des chargeurs Easee par exemple.

Dans ce cas, il faut:
1. Créer un répertoire `desktop/php/<model>`
1. Créer un fichier nommé `desktop/php/<model>/charger_params.inc.php`. Ce fichier doit contenir, ou générer, les tag HTML pour la saisie des configuration spécifiques.
##### Code pour la saisie du numéro de série:
    ```
    <div class='form-group'>
      <label class="col-sm-3 control-label">{{N° de série}}</label>
      <div class="col-sm-7">
        <input type="text" class="eqLogicAttr form-control" data-l1key="configuration" data-l2key="serial" placeholder="{{N° du chargeur}}"/>
      </div>
    </div>
    ```

##### Config chargeur avec numéro de série:
  ![Config chargeur avec numéro de série](/images/EVcharger/configChargeurEasee.png)

### Configuration des commandes des chargeurs
{: .num}

+ Se placer dans le répertoire créer.
: `cd core/config/virtual`
+ Créer un fichier de configuration des commandes avec les sections vides
: `egrep '(^\[)|(^\s*$)' ../cmd.config.ini > cmd.config.ini`
+ Editer le fichier `core/config/<model>/cmd.config.ini
: Voir *Configuration des commandes" sur la page [Cmd des chargeurs](cmdCharger.html)

Pour vérifier les configurations, allez sur la page des commandes du chargeur créé plus haut et utilisez:
+ Le bouton **Créer les commandes manquante** pour créer les commandes.
+ Le bouton **Reconfigurer les commandes** pour mettre à jour les commandes existantes.
+ Les commandes qui n'ont pas le paramètre *required* à **yes** peuvent être supprimées puis recréées. Le chargeur doit être sauvegarder entre la suppression des commande et leurs recréations.
+ Il est aussi possible de supprimer le chargeur puis de la recréer. Les commandes seront créées avec la chargeur.

# Code d'exécution des commandes de type "*action*"
{: .num}

## Les commandes ayant "*cmd*" comme destination
{: .num}

Les commandes ayant le paramètre *destination* à **cmd** sont traitées par le 'core' du plugin.

## Les commandes ayant "*charger*" comme destination
{: .num}

Une méthode nommée `execute_<logicalId>` doit être créée dans la classe `EVcharger_account_<model>`. Cette méthode prend la commande en argument et doit envoyer l'instrauction au chargeur (via le deamon, les API, ...) pour qu'il effectue l'opération demandées.

##### Exemple pour l'execution de *cable_lock* (dans *core/class/EVcharger_account_easee.class.php*)
```
class EVcharger_account_easee extends EVcharger_account {
  ...
  ...
  private function sendRequest($path, $data = '', $token='' ) {
    //
    // Envoi de la requête au cloud Easee 
    //
  }
  ...
  ...
  public function execute_cable_lock($cmd) {
    $serial = $cmd->getEqLogic()->getConfiguration("serial");
    $path = '/api/chargers/' . $serial . '/commands/lock_state';
    $data = array ( 'state' => 'true');
    $this->sendRequest($path, $data);
  }
  ...
  ...
}
```
