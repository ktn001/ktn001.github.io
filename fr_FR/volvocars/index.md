---
layout : default
title : volvocars
plugin : volvocars
lang: fr_FR
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# PLugin "volvocars" pour Jeedom

Le plugin **volvocars** permet à Jeedom d'interagir avec votre véhicule Volvo en utilisants
 les API volvocars.

Merci à @Xav-74, Je me suis beaucoup inspiré de son plugin **My BMW** pour le widwet et le panel.

# Principe
{: .num}

Ce plugin interagit avec les API Volvocars au travers le cloud, Par conséquent, ce plugins
nécessite une connection internet. Il faut aussi que votre véhicule soit accessible dans
l'app Volvo Cars.

La documentation des APIs indique qu'elles sont disponnibles pour tous les modèles entre de
2015 à 2022. Mais il semble que cette documentation ne soit pas à jour et que les modèles post
2022 sont aussi disponibles via ces API. Le plugin a été dévoloppé en utilisant un XC40
électrique de 2023.

# Modèles compatibles
{: .num}

+ ***Modèles confirmés compatibles avec le plugin:***
    + XC40 électrique (2023)
    + XC60 hybrid (2022)
+ ***Modèles confirmés partiellement compatibles avec le plugin:***
+ ***Modèles confirmés incompatibles avec le plugin:***

# Les clés API vcc
{: .num}
Outre le compte Volvo ID que vous utilisez dnas l'app volvocars, vous aurez besoin d'une clé API vcc
personnelle.

Vous devez générer une Clé API vcc (VCC API Key) sur le site
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} en suivant
cette procédure:

1. Cliquez sur **Sign up**:   
    ![sign up]({{ imagesPath }}/sign_up_volvodev.png)
1. Selectionnez le compte qui sera associé à votre nouveau compte developper.volvocars:   
    ![select_login_asoc]({{ imagesPath }}/select_login_asoc.png)   
1. Saisissez votre login/password pour le site sélectionné au point précédent   
    ![sign_in]({{ imagesPath }}/sign_in_volvodev.png)
1. Cliquez sur votre nom de login puis sur **Your API applications**   
    ![open_api_app]({{ imagesPath }}/open_api_applications.png)
1. Saisissez un nom pour l'application que vous allez créer puis cliquez sur **Create**. Si vous avez
    plusieurs instances Jeedom, il est conseillé de créer une application pour chaque instance dans
    laquelle le plugon sera
   installé:   
    ![create_application]({{ imagesPath }}/create_application.png)
1. Votre nouvelle application est créée avec un couple de VCC API Keys. Vous pourrez toujours revenir
   sur cette page pour récupérer votre clé.   
    ![cles_vcc]({{ imagesPath }}/vcc_keys.png)

# Installation et configuration du plugin
{: .num}

![Configuration du plugin]({{ imagesPath }}/configuration_plugin.png)

## Installation du plugin
{: .num}
Le plugin s’installe de manière standard depuis le market de Jeedom.

Si l'installation des dépendances n'a pas été lancée automatiquement après l'installation du plugin,
lancez là manuellement. Une fois les dépendances installées, assurez-vous que le daemon est démarré.

## Configuration du plugin
{: .num}

+ ***Clé VCC API***
: Saisissez la clé VCC-API-key que vous avez généré sur le site developer.volvocars.com.

+ ***Utiliser le widget du plugin***
: Sélectionnez cette option pour utiliser le widget du plugin dans les dashboards.

![widget_Electrique]({{ imagesPath }}/widget_electrique.png)
![widget_Hybrid]({{ imagesPath }}/widget_hybrid.png)
![widget_Thermique]({{ imagesPath }}/widget_thermique.png)

+ ***Commandes à créer pour les ouvrants***
: Les API volvocars retournent une information de type text pour l'état des ouvrants.
Ce texte est enregistré dans une commande **\*_state** de l'équipement.  
Des commandes binaires **\*_open** et **\*_closed** seront également créées si l'option **Ouvert**
ou **Fermé** est activée.
: Les commandes **\*_open** ou **\*_closed** existantes ne sont pas supprimées lorsque
l'option correspondante est désactivée.

Une fois le plugin installé, il faut créer un account.

# Les accounts
{: .num}
![Pas d'account]({{ imagesPath }}/no_account.png)

Cliquer sur *Ajouter*

![nom account]({{ imagesPath }}/nom_account.png)

Saisir le nom du compte puis cliquer sur *OK*

![Edit account]({{ imagesPath }}/edit_account.png)

Saisir le login et le password du compte VolvoId puis cliquer sur *OK*

![Edit OTP]({{ imagesPath }}/edit_otp.png)

Saisir le code que Volvo vous a envoyé par email puis cliquer sur *OK*.

La saisie du code est nécessaire pour l'obtention d'un token qui sera utilisé par le plugin pour
authentifier ses accès aux API Volvocars. Ce token sera automatiquement renouvelé avant son expiration.

Le token pourra être perdu si
   + Les véhicules associés à l'account sont tous désactivés durant une certaine période.
   + Le plugin est désactivé durant plus d'un certain temps.
   + Jeedom est arrêté durant plus d'un certain temps.
   + Une sauvegarde de Jeedom est restaurée.

Dans ces cas, il faut ouvrir l'édition de l'account et le sauvegarder. Ceci relancera la procédure
pour saisir un nouveau code envoyé par email puis obtenir un nouveau token.

Selon la documentation des APIs, un token expiré peut être renouvelé automatiquement jusqu'à 7 jours après sont expiration. Mais je n'ai pas pu le vérifier. Vu que les tokens ont un validité de 30 minutes et sont renouvelés 15 minutes avant leur expiration, un arrêt de moins de 15 minute ne devrait as avoir de conséquence.

![No car]({{ imagesPath }}/no_car.png)

# Les véhicules
{: .num}

Les équipements jeedom pour les véhicules associés à un account sont automatiquement créés (ou mis
à jour) lors de la synchronisation de l'account

## Synchronisation d'un account (création des véhicules)
{: .num}

+ Cliquer sure le bouton **Synchronisation**
+ Sélectionner l'account à synchroniser
+ Le nouveau véhicule est ajouté à la liste des véhicules

  > :bulb: Dans certains cas, le site fournisseur d'image peut bloquer les accès effectués par un script.
     Dans ce cas, le logo Volvo sera affiché à la place de l'image du véhicule. L'image du véhicule devra
     être chargée manuellement depuis la page de configuration du véhicule.

![With car]({{ imagesPath }}/with_car.png)

## Configuration du véhicule
{: .num}

![configuration véhicule]({{ imagesPath }}/configuration_vehicle.png)

+ **Paramètres généraux**

    Ces paramètres sont les paramètres standards des équipements Jeedom. Ils ne seront pas détaillés ici.

+ **Paramètres du véhicule**

   Ces paramètres sont renseignés automatiquement lors de la synchronisation de l'account. D'édition des ces paramètres est désactivée par défaut car ils ne devraient pas être modifiés par l'utilisateurs.

   En cas de nécessité, il est possible de débloquer l'édition de ces paramèetres en cliquant sur le bouton `Editer`

+ **Paramètres d'alertes**

   + *Automomie électriques*   
     La valeur de la commande `al_electricAutonomy` passe à **1** lorsque l'autonomie électrique est inférieur
     à cette limite.

   + *Automomie thermique*   
     La valeur de la commande `al_fuelAutonomy` passe à **1** lorsque l'autonomie du moteur themique est inférieur
     à cette limite.

+ **Paramètres de localisation**

  Les coordonnées GPS de deux site peuvent être configurée. Deux commandes seront créées pour chacun de ces sites:
  + `distanceSite#` : Distance entre la site et la véhicule
  + `presenceSite#` : binaire qui indique est sur le site

  Les paramètres:
  + *Nom*   
    Si l'on renomme un site les deux commandes associées seront aussi renommée si leurs noms contiennent l'ancien
    nom du site
  + *Coordonées GPS*   
    Les coordonnées GPS du site
  + *Distance max (en m)*   
    Distance maximum (en mètres) entre le véhicule et le site pour que le véhicule soit indiqué présent sur le site.
  + *Récupérer coordonnées GPS*   
    Deux boutons permettant de renseigner automatiquement les coordonnées GPS du site:
       + `Jeedom` : Récupèere les coordonnées GPS de Jeedom qui ont été renseignées dans la config de Jeedom.
       + `Véhicule` : Récupère la position actuelle du véhicule 
  
+ **Description**

   Info libre

+ **Image**

   Image du véhicule qui sera utilisée dans le panel. Si l'image du véhicule n'a pas pu être récupérée lors
   de la synchronisation de l'account, elle sera remplacée par un logo Volvo et un bouton `Récupérer une image
   du véhicule` (voir plus bas pour la procédure de récupération manuelle de l'image).

+ **Données brutes**

   Ce bouton ouvre un popup avec les données tels qu'elles sont fournies par les API. Ces infomations peuvent
   être utiles pour analyse en cas de problème.

# Récupération manuelle de l'image
{: .num}

+ Si l'image du véhicule n'a pas pu être chargée, le logo Volvo et le bouton `Récupérer une image du véhicule` sont affichés:

   ![no image]({{ imagesPath }}/no_image.png)

+ Cliquer sur le bouton `Récupérer une image du véhicule`   
   + Le logo est remplacé par une image du véhicule
   + Le bouton `Récupérer une image du véhicule` n'est plus affiché:   
   + Une zone est marquée pour y copier l'image du véhicule

   ![image_ready]({{ imagesPath }}/image_ready.png)

+ Utiliser le menu contextuel (PAS DE RACCOURCI CLAVIER!) pour copier l'image.

   ![copy_image]({{ imagesPath }}/copy_image.png)

+ Utiliser le menu contextuel (PAS DE RACCOURCI CLAVIER!) pour coller l'image dans
  la zone prévue à cet effet.

   ![paste_image]({{ imagesPath }}/paste_image.png)

+ L'image est envoyée au plugin
+ La zone prévue pour la réception d'une copie de l'image n'est pla affichée.

   ![image_uploaded]({{ imagesPath }}/image_uploaded.png)

# Les commandes
{: .num}

## Les actions
{: .num}

Le plugin peut envoyer au véhicule les commandes suivantes

+ **unlock**   
  Déverrouillage du véhicule
+ **lock**   
  Verrouillage du véhicule
+ **lockReduced**   
  Verrouillage avec le mode alarme réduit
+ **climStart**   
  Démarrage de la climatisation
+ **climStop**   
  Arrêt de la climatisation
+ **honk**   
  Klaxonne
+ **flash**   
  Les clignotants du véhicule clignotent.
+ **honk_flash**   
  Exécution simultanée des commandes *honk* et *flash*

Les commandes effectivement activées dans le plugin pour un véhicule dépendent
des fonctionnalités du véhicule qui sont remontées par les API (endpoint *commands*).

## Les infos
{: .num}

  > :bulb: Les commandes de type *info* ne sont pas créée lors de la création du véhicule. Elles sont créées
    dynamiquement après l'activation du véhicule en fonction de données reçues des API.

<table class="commandes">
	<thead>
		<tr>
			<th style='min-width:150px'>Nom</th>
			<th>LogicalId</th>
			<th>API endpoint</th>
			<th>SousType</th>
			<th>Valeurs/Unité</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>

		<!-- -------- -->
		<!-- GLOBALES -->
		<!-- -------- -->
		<tr>
			<td class="subtitle" colspan="6">GLOBALES</td>
		</tr>
		<tr>
			<td rowspan="4">Disponibilité</td>
			<td rowspan="4">availability</td>
			<td rowspan="4">accessibility</td>
			<td rowspan="4">texte</td>
			<td>"AVAILABLE"</td>
			<td>Le véhicule est connecté</td>
		</tr>
		<tr>
			<td>"UNAVALAIBLE"</td>
			<td>Le véhicule est déconnecté</td>
		</tr>
		<tr>
			<td>"UNSPECIFIED"</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td>"QUOTA_OUT"</td>
			<td>Le quota d'appels API a été atteint</td>
		</tr>
		<tr>
			<td rowspan="5">raison indisponibilité</td>
			<td rowspan="5">unavailableReason</td>
			<td rowspan="5">accessibility</td>
			<td rowspan="5">texte</td>
			<td>"NO_INTERNET"</td>
			<td>Pas d'internet</td>
		</tr>
		<tr>
			<td>"POWER_SAVING_MODE"</td>
			<td>Véhicule en mode veille</td>
		</tr>
		<tr>
			<td>"CAR_IN_USE"</td>
			<td>Véhicule cours d'utilisation</td>
		</tr>
		<tr>
			<td>"UNSPECIFIED"</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td>""</td>
			<td>Le véhicule est disponible</td>
		</tr>
		<tr>
			<td>odomètre</td>
			<td>odometer</td>
			<td>odometer</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Kilométrage du véhicule</td>
		</tr>
		<tr>
			<td rowspan="12">service</td>
			<td rowspan="12">service</td>
			<td rowspan="12">diagnostics</td>
			<td rowspan="12">texte</td>
			<td>"NO_WARNING"</td>
			<td>Pas de service à effectuer</td>
		</tr>
		<tr>
			<td>"REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE"</td>
			<td>Délai pour un service bientôt atteint</td>
		</tr>
		<tr>
			<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
			<td>Temps de fonctionnement du moteur avant service bientôt écoulé</td>
		</tr>
		<tr>
			<td>"DISTANCE_DRIVEN_ALMOST_TIME_FOR_SERVICE"</td>
			<td>Kilométrage pour un service bientôt atteint</td>
		</tr>
		<tr>
			<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
			<td>Délai pour un service atteint</td>
		</tr>
		<tr>
			<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
			<td>Temps de fonctionnement du moteur avant service écoulé</td>
		</tr>
		<tr>
			<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
			<td>Kilométrage pour un service atteint</td>
		</tr>
		<tr>
			<td>"REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE"</td>
			<td>Délai pour un service dépassé</td>
		</tr>
		<tr>
			<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
			<td>Temps de fonctionnement du moteur avant service dépassé</td>
		</tr>
		<tr>
			<td>"DISTANCE_DRIVEN_OVERDUE_FOR_SERVICE."</td>
			<td>Kilométrage pour un service dépassé</td>
		</tr>
		<tr>
			<td>"UNKNOWN_WARNING"</td>
			<td>Alerte inconnue</td>
		</tr>
		<tr>
			<td>"UNSPECIFIED"</td>
			<td>indéterminé</td>
		</tr>
		<tr>
			<td rowspan="5">Raison du service</td>
			<td rowspan="5">serviceTrigger</td>
			<td rowspan="5">diagnostics</td>
			<td rowspan="5">texte</td>
			<td>CALENDAR_TIME</td>
			<td>Délai depuis dernier service écoulé</td>
		</tr>
		<tr>
			<td>"DISTANCE"</td>
			<td>Distance parcourue depuis dernier service</td>
		</tr>
		<tr>
			<td>"ENGIME_HOURS"</td>
			<td>Temps de fonctionnement du moteur</td>
		</tr>
		<tr>
			<td>"UNSPECIFIED"</td>
			<td>Non spécifié</td>
		</tr>
		<tr>
			<td>"UNKNOWN"</td>
			<td>Inconnu</td>
		</tr>
		<tr>
			<td>Heures moteur avant service</td>
			<td>engineHoursToService</td>
			<td>diagnostics</td>
			<td>numérique</td>
			<td>Heures</td>
			<td>Temps de fonctionnement du moteur avant le prochain service</td>
		</tr>
		<tr>
			<td>Distance avant service</td>
			<td>distanceToService</td>
			<td>diagnostics</td>
			<td>numérique</td>
			<td>Kilomètres</td>
			<td>Distance avant le prochain service</td>
		</tr>
			<td>Jours avant service</td>
			<td>timeToService</td>
			<td>diagnostics</td>
			<td>numérique</td>
			<td>Jours</td>
			<td>Nombre de jours avec le service.<br>L'API volvocars retourne soit un nombre de jours soit un nombre de mois.
				Le plugin convertit le nombre de mois en nombre de jour. Il peut donc y avoir une erreur de 30 jours.</td>
		<tr>
		</tr>
	
		<!-- ------------ -->
		<!-- LOCALISATION -->
		<!-- ------------ -->
		<tr>
			<td class="subtitle" colspan="6">LOCALISATION</td>
		</tr>
		<tr>
			<td>position</td>
			<td>position</td>
			<td>location</td>
			<td>coordonnées GPS</td>
			<td>&lt;lattitude&gt;,&lt;longitude&gt;</td>
			<td>position du véhicule</td>
		</tr>
		<tr>
			<td>distance &lt;nom_site_1&gt;</td>
			<td>distanceSite1</td>
			<td></td>
			<td>numérique</td>
			<td>mètre</td>
			<td>Distance entre le véhicule et le site 1</td>
		</tr>
		<tr>
			<td rowspan="2">présence &lt;nom_site_1&gt;</td>
			<td rowspan="2">presenceSite1</td>
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>Le véhicule n'est pas sur le site 1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Le véhicule est sur le site 1</td>
		</tr>
		<tr>
			<td>distance &lt;nom_site_2&gt;</td>
			<td>distanceSite2</td>
			<td></td>
			<td>numérique</td>
			<td>mètre</td>
			<td>Distance entre le véhicule et le site 1</td>
		</tr>
		<tr>
			<td rowspan="2">présence &lt;nom_site_2&gt;</td>
			<td rowspan="2">presenceSite2</td>
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>Le véhicule n'est pas sur le site 2</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Le véhicule est sur le site 2</td>
		</tr>
	
		<!-- -------- -->
		<!-- OUVRANTS -->
		<!-- -------- -->
		<tr>
			<td class="subtitle" colspan="6">OUVRANTS</td>
		</tr>
		<tr>
			<td rowspan="3">Verrouillé</td>
			<td rowspan="3">locked</td>
			<td rowspan="3">doors</td>
			<td rowspan="3">text</td>
			<td>LOCKED</td>
			<td>Véhicule Verrouiller</td>
		</tr>
		<tr>
			<td>UNLOCKED</td>
			<td>Véhicule Déverrouiller</td>
		</tr>
		<tr>
			<td>UNSPECIFIED</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td rowspan="8">
				état porte avant gauche<br>
				état porte avant droite<br>
				état porte arrière gauche<br>
				état porte arrière droite<br>
				état capot<br>
				état hayon<br>
				état trappe<br>
			</td>
			<td rowspan="8">
				doorFlState<br>
				doorFrState<br>
				doorRlState<br>
				doorRrState<br>
				hoodState<br>
				tailState<br>
				tankState<br>
			</td>
			<td rowspan="8">
				doors
			</td>
			<td rowspan="12">
				texte
			</td>
			<td rowspan="3">CLOSED</td>
			<td rowspan="3">fermé</td>
		</tr>
		<tr>
		</tr>
		<tr>
		</tr>
		<tr>
			<td rowspan="3">AJAR</td>
			<td rowspan="3">entre-ouvert</td>
		</tr>
		<tr>
		</tr>
		<tr>
		</tr>
		<tr>
			<td rowspan="3">OPEN</td>
			<td rowspan="3">ouvert</td>
		</tr>
		<tr>
		</tr>
		<tr>
			<td rowspan="4">
				état vitre avant gauche<br>
				état vitre avant droite<br>
				état vitre arrière gauche<br>
				état vitre arrière droite<br>
				état toit<br>
			</td>
			<td rowspan="4">
				winFlState<br>
				winFrState<br>
				winRlState<br>
				winRrState<br>
				roofState<br>
			</td>
			<td rowspan="4">windows</td>
		</tr>
		<tr>
			<td rowspan="3">UNSPECIFIED</td>
			<td rowspan="3">Information indisponible</td>
		</tr>
		<tr>
		</tr>
		<tr>
		</tr>
		<tr>
			<td rowspan="2">
				porte avant gauche ouverte<br>
				porte avant droite ouverte<br>
				porte arrière gauche ouverte<br>
				porte arrière droite ouverte<br>
				vitre avant gauche ouverte<br>
				vitre avant droite ouverte<br>
				vitre arrière gauche ouverte<br>
				vitre arrière droite ouverte<br>
				capot ouvert<br>
				toit ouvert<br>
				hayon ouvert<br>
				trappe ouverte<br>
			</td>
			<td rowspan="2">
				doorFlOpen<br>
				doorFrOpen<br>
				doorRlOpen<br>
				doorRrOpen<br>
				winFlOpen<br>
				winFrOpen<br>
				winRlOpen<br>
				winRrOpen<br>
				hoodOpen<br>
				roofOpen<br>
				tailOpen<br>
				tankOpen<br>
			</td>
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>pas ouvert</td>
		</tr>
		<tr>
			<td>1</td>
			<td>ouvert</td>
		</tr>
		<tr>
			<td rowspan="2">
				porte avant gauche fermée<br>
				porte avant droite fermée<br>
				porte arrière gauche fermée<br>
				porte arrière droite fermée<br>
				vitre avant gauche fermée<br>
				vitre avant droite fermée<br>
				vitre arrière gauche fermée<br>
				vitre arrière droite fermée<br>
				capot fermé<br>
				toit fermé<br>
				hayon fermé<br>
				trappe fermée<br>
			</td>
			<td rowspan="2">
				doorFlClosed<br>
				doorFrClosed<br>
				doorRlClosed<br>
				doorRrClosed<br>
				winFlClosed<br>
				winFrClosed<br>
				winRlClosed<br>
				winRrClosed<br>
				hoodClosed<br>
				roofClosed<br>
				tailClosed<br>
				tankClosed<br>
			</td>
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>pas fermé</td>
		</tr>
		<tr>
			<td>1</td>
			<td>ouvert</td>
		</tr>
		<tr>
			<td rowspan="2">Portes fermées</td>
			<td rowspan="2">allDoorsClosed</td>§
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>une porte, le capot ou le coffre n'est pas fermé</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Toutes les portes ainsi que le capot et le coffre sont fermés</td>
		</tr>
		<tr>
			<td rowspan="2">Fenêtres fermées</td>
			<td rowspan="2">allWinsClosed</td>§
			<td rowspan="2"></td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>Une fenêtre ou le toit n'est pas fermé</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Toutes les fenêtres ainsi que le toit sont fermés</td>
		</tr>
	
		<!-- ---------------- -->
		<!-- Moteur thermique -->
		<!-- ---------------- -->
		<tr>
			<td class="subtitle" colspan="6">MOTEUR THERMIQUE</td>
		</tr>
	
		<tr>
			<td rowspan="2">moteur en service</td>
			<td rowspan="2">engineON</td>
			<td rowspan="2">engine_status</td>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>moteur à l'arrêt</td>
		</tr>
		<tr>
			<td>1</td>
			<td>moteur en marche</td>
		</tr>
		<tr>
			<td>consommation carburant</td>
			<td>consoFuel</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne calculée par le véhicule</td>
		</tr>
		<tr>
			<td>consommation carburant (trajet)</td>
			<td>consoFuelTrip</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne depuis de début du trajet automtique</td>
		</tr>
		<tr>
			<td>carburant</td>
			<td>fuelAmount</td>
			<td>fuel</td>
			<td>numérique</td>
			<td>l</td>
			<td>Quantité de carburant restant</td>
		</tr>
		<tr>
			<td>autonomie thermique</td>
			<td>fuelAutonomy</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Autonomie avec le carburant restant</td>
		</tr>
		<tr>
			<td rowspan="2">Autonomie fuel faible</td>
			<td rowspan="2">al_fuelAutonomy</td>
			<td rowspan="2"/>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>Autonomie fuel suffisante</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Autonomie fuel faible</td>
		</tr>
	
		<!-- HUILE -->
		<tr>
			<td rowspan="5">niveau d'huile</td>
			<td rowspan="5">oilLevel</td>
			<td rowspan="5">engine_dignostics</td>
			<td rowspan="5">texte</td>
			<td>"UNSPECIFIED"</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td>"NO_WARNING"</td>
			<td>Niveau normal</td>
		</tr>
		<tr>
			<td>"SERVICE_REQUIRED"</td>
			<td>Nécessite un service</td>
		</tr>
		<tr>
			<td>"TOO_LOW"</td>
			<td>Niveau bas</td>
		</tr>
		<tr>
			<td>"TOO_HIGH"</td>
			<td>Niveau haut</td>
		</tr>
		<tr>
			<td rowspan='2'>alerte huile</td>
			<td rowspan='2'>al_oil</td>
			<td rowspan='2'></td>
			<td rowspan='2'>binaire</td>
			<td>0</td>
			<td>Le niveau d'huile est normal</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Alerte (voir la commande <i>oil_level</i> pour plus de détails)</td>
		</tr>
	
		<!-- COOLANT -->
		<tr>
			<td rowspan="3">niveau liquide de refroidissement</td>
			<td rowspan="3">coolantLevel</td>
			<td rowspan="3">engine_dignostics</td>
			<td rowspan="3">texte</td>
			<td>"UNSPECIFIED"</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td>"NO_WARNING"</td>
			<td>Niveau normal</td>
		</tr>
		<tr>
			<td>"TOO_LOW"</td>
			<td>Niveau bas</td>
		</tr>
		<tr>
			<td rowspan='2'>alerte liquide de refroidissement</td>
			<td rowspan='2'>al_coolant</td>
			<td rowspan='2'></td>
			<td rowspan='2'>binaire</td>
			<td>0</td>
			<td>Le niveau est normal</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Alerte (voir la commande <i>coolant_level</i> pour plus de détails)</td>
		</tr>
	
		<!-- ----------------- -->
		<!-- Moteur électrique -->
		<!-- ----------------- -->
		<tr>
			<td class="subtitle" colspan="6">MOTEUR ELECTRIQUE</td>
		</tr>
		<tr>
			<td>consommation électrique</td>
			<td>consoElectric</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>kW/100Km</td>
			<td>Consomation moyenne calculé par le véhicule</td>
		</tr>
		<tr>
			<td>Autonomie électrique</td>
			<td>electricAutonomy</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Autonomie avec la charge restante</td>
		</tr>
		<tr>
			<td rowspan="2">Autonomie électrique faible</td>
			<td rowspan="2">al_electricAutonomy</td>
			<td rowspan="2"/>
			<td rowspan="2">binaire</td>
			<td>0</td>
			<td>Autonomie électrique suffisante</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Autonomie électrique faible</td>
		</tr>
		<tr>
			<td>niveau charge batterie</td>
			<td>batteryLevel</td>
			<td>recharge_status</td>
			<td>numérique</td>
			<td>%</td>
			<td>Pourcentage de charge de la batterie</td>
		</tr>
		<tr>
			<td rowspan="6">Etat de la charge</td>
			<td rowspan="6">chargingStatus</td>
			<td rowspan="6">recharge_status</td>
			<td rowspan="6">texte</td>
			<td>"CHARGING_SYSTEM_CHARGING"</td>
			<td>Recharge en cours</td>
			<td></td>
		</tr>
		<tr>
			<td>"CHARGING_SYSTEM_IDLE"</td>
			<td>Système de recharge en attente</td>
		</tr>
		<tr>
			<td>"CHARGING_SYSTEM_DONE"</td>
			<td>Recharge terminée</td>
		</tr>
		<tr>
			<td>"CHARGING_SYSTEM_FAULT"</td>
			<td>Système de recharge en erreur</td>
		</tr>
		<tr>
			<td>"CHARGING_SYSTEM_SCHEDULED"</td>
			<td>Recharge programmée</td>
		</tr>
		<tr>
			<td>"CHARGING_SYSTEM_UNSPECIFIED"</td>
			<td>Etat indéterminé</td>
		</tr>
		<tr>
			<td>Temps de charge restant</td>
			<td>chargingRemainingTime</td>
			<td>recharge_status</td>
			<td>numérique</td>
			<td>minutes</td>
			<td>Temps estimé avant fin de recharge</td>
		</tr>
		<tr>
			<td>Heure fin de charge</td>
			<td>chargingEndTime</td>
			<td></td>
			<td>texte</td>
			<td>jj HH:MM</td>
			<td>Heure de fin de charge prévue</td>
		</tr>
		<tr>
			<td rowspan="5">Etat de la prise</td>
			<td rowspan="5">connectorStatus</td>
			<td rowspan="5">recharge_status</td>
			<td rowspan="5">texte</td>
			<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
			<td>Branchée à une borne AC</td>
		</tr>
		<tr>
			<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
			<td>Branchée à une borne DC</td>
		</tr>
		<tr>
			<td>"CONNECTION_STATUS_DISCONNECTED"</td>
			<td>Débranchée</td>
		</tr>
		<tr>
			<td>"CONNECTION_STATUS_FAULT"</td>
			<td>Prise en erreur</td>
		</tr>
		<tr>
			<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
			<td>Etat indéterminé</td>
		</tr>
	
		<!-- ------ -->
		<!-- WASHER -->
		<!-- ------ -->
		<tr>
			<td class="subtitle" colspan="6">LAVE-VITRES</td>
		</tr>
		<tbody>
			<tr>
				<td rowspan="3">Niveau lave-vitres</td>
				<td rowspan="3">washerFluidLevel</td>
				<td rowspan="3">diagnostics</td>
				<td rowspan="3">texte</td>
				<td>"UNSPECIFIED"</td>
				<td>Information indisponible</td>
			</tr>
			<tr>
				<td>"NO_WARNING"</td>
				<td>Niveau normal</td>
			</tr>
			<tr>
				<td>"TOO_LOW"</td>
				<td>Niveau bas</td>
			</tr>
			<tr>
				<td rowspan='2'>alerte lave-vitres</td>
				<td rowspan='2'>al_washerFluid</td>
				<td rowspan='2'>binaire</td>
				<td>0</td>
				<td>Le niveau est normal</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alerte (voir la commande <i>washer_fluid_level</i> pour plus de détails)</td>
			</tr>
		
			<!-- ------ -->
			<!-- BRAKE -->
			<!-- ------ -->
			<tr>
				<td class="subtitle" colspan="6">LIQUIDE DE FREIN</td>
			</tr>
			</tbody>
			<tr>
				<td rowspan="3">Niveau liquide de frein</td>
				<td rowspan="3">brakeFluidLevel</td>
				<td rowspan="3">brakes</td>
				<td rowspan="3">texte</td>
				<td>"UNSPECIFIED"</td>
				<td>Information indisponible</td>
			</tr>
			<tr>
				<td>"NO_WARNING"</td>
				<td>Niveau normal</td>
			</tr>
			<tr>
				<td>"TOO_LOW"</td>
				<td>Niveau bas</td>
			</tr>
			<tr>
				<td rowspan='2'>alerte liquide de frein</td>
				<td rowspan='2'>al_brake_fluid</td>
				<td rowspan='2'>binaire</td>
				<td>0</td>
				<td>Le niveau est normal</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alerte (voir la commande <i>brake_fluid_fluid_level</i> pour plus de détails)</td>
			</tr>
		
			<!-- ---- -->
			<!-- TYRE -->
			<!-- ---- -->
			<tr>
				<td class="subtitle" colspan="6">PRESSION PNEUS</td>
			</tr>
			<tr>
				<td rowspan="5">
					pneu avant gauche<br>
					pneu avant droit<br>
					pneu arrière gauche<br>
					pneu arrière droit
				</td>
				<td rowspan="5">
					tyreFl<br>
					tyreFr<br>
					tyreRl<br>
					tyreRr
				</td>
				<td rowspan="5">tyre</td>
				<td rowspan="5">texte</td>
				<td>"UNSPECIFIED"</td>
				<td>Information indisponible</td>
			</tr>
			<tr>
				<td>"NO_WARNING"</td>
				<td>Pression normale</td>
			</tr>
			<tr>
				<td>"VERY_LOW_PRESSURE"</td>
				<td>Pression très basse</td>
			</tr>
			<tr>
				<td>"LOW_PRESSURE"</td>
				<td>Pression basse</td>
			</tr>
			<tr>
				<td>"HIGH_PRESSURE"</td>
				<td>Pression élevée</td>
			</tr>
			<tr>
				<td rowspan='2'>alerte pneus</td>
				<td rowspan='2'>al_tyre</td>
				<td rowspan="2"></td>
				<td rowspan='2'>binaire</td>
				<td>0</td>
				<td>Les pressions sont normales</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Alerte (voir les commandes <i>tyre_*</i> pour plus de détails)</td>
			</tr>
		
			<!-- ------ -->
			<!-- LIGHTS -->
			<!-- ------ -->
			<tr>
				<td class="subtitle" colspan="6">ECLAIRAGES</td>
			</tr>
			<tr>
				<td rowspan="3">
					feu frein gauche<br>
					feu frein droite<br>
					feu frein central<br>
					feu jour gauche<br>
					feu jour droit<br>
					feux brouillard avant<br>
					feux brouillard arrière<br>
					feux détresse<br>
					feu route gauche<br>
					feu route droite<br>
					feu croisement gauche<br>
					feu croisement droite<br>
					feu position avant gauche<br>
					feu position avant droite<br>
					feu position arrière gauche<br>
					feu position arrière droit<br>
					feu plaque<br>
					feu recule<br>
					feux latéraux<br>
					clignotant avant gauche<br>
					clignotant avant droit<br>
					clignotant arrière gauche<br>
					clignotant arrière droit
				</td>
				<td rowspan="3">
					al_brakeLightL<br>
					al_brakeLightR<br>
					al_brakeLightC<br>
					al_daytimeRunningLightL<br>
					al_daytimeRunningLightR<br>
					al_fogLightF<br>
					al_fogLightR<br>
					al_hazardLights<br>
					al_highBeamL<br>
					al_highBeamR<br>
					al_lowBeamL<br>
					al_lowBeamR<br>
					al_positionLightFl<br>
					al_positionLightFr<br>
					al_positionLightRl<br>
					al_positionLightRr<br>
					al_registrationPlateLight<br>
					al_reverseLights<br>
					al_sideMarkLights<br>
					al_turnIndicationFl<br>
					al_turnIndicationFr<br>
					al_turnIndicationRl<br>
					al_turnIndicationRr
				</td>
				<td rowspan="3">warnings</td>
				<td rowspan="3">texte</td>
				<td>"UNSPECIFIED"</td>
				<td>Information indisponible</td>
			</tr>
			<tr>
				<td>"NO_WARNING"</td>
				<td>Pas de défaut</td>
			</tr>
			<tr>
				<td>"FAILURE"</td>
				<td>Défaut</td>
			</tr>
			<tr>
				<td rowspan="2">alerte lampes</td>
				<td rowspan="2">al_light</td>
				<td rowspan="2"></td>
				<td rowspan="2">binaire</td>
				<td>0</td>
				<td>Pas de lampe défectueuse</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Défaut (voir les commandes de feux pour plus de détails)</td>
			</tr>

			<!-- ------ -->
			<!-- PLUGIN -->
			<!-- ------ -->
			<tr>
				<td class="subtitle" colspan="6">PLUGIN</td>
			</tr>
			<tr>
				<td>messages pour wigget</td>
				<td>msg2wigget</td>
				<td></td>
				<td>texte</td>
				<td>json</td>
				<td>Messages pour le fonctionnement du widget du panel</td>
			</tr>
	</tbody>
</table>

# Les endpoints des API volvocars
{: .num}

Ce plugin utilise trois APIs volvocars. Chacune de ces API donne accès à des endpoints qui fournissent chacun uni
ensemble d'informations. Les tableaux des actions et des infos ci-dessus indiquent quel endpoint fourni
l'information associée chacune des commandes info ou action du plugin.

Volvo limite le nombre d'accès quotidien aux APIs à 10'000 par clé VCC-API. Pour respecter cette limite tout en
ayant des infos actualisées sans trop de délai, le plugin n'accède pas à tous les endpoints à la même fréquence.
La position du vhéhicule est, par exemple, mise à jour chaque minute pour permettre une certaine réactivité lorsque
le véhicule arrive au domicile alors que le niveau du liquide de frein ne l'est que toutes les 60 minutes.

## Les endpoints
{: .num}

<table class="endpoint">
	<thead>
		<tr>
			<th rowspan=2>API</th>
			<th rowspan=2>endpoint</th>
			<th rowspan=2>fréquence</th>
			<th colspan=3 style="text-align:center">Nombre d'appels quotidien</th>
		</tr>
			<th>tout véhicule</th>
			<th>moteur thermique</th>
			<th>moteur électrique</th>
		<tr>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td rowspan=15>Connected-vehicle</td>
			<td>brakes</td>
			<td>60 min.</td>
			<td>24</td>
		</tr>
		<tr>
			<td>command-accessibility</td>
			<td>5 min.</td>
			<td>288</td>
		</tr>
		<tr>
			<td>commands<sup>1</sup></td>
			<td>0</td>
		</tr>
		<tr>
			<td>details<sup>1</sup></td>
			<td>0</td>
		</tr>
		<tr>
			<td>diagnostics</td>
			<td>10 min.</td>
			<td>144</td>
		</tr>
		<tr>
			<td>doors</td>
			<td>2 min.</td>
			<td>720</td>
		</tr>
		<tr>
			<td>engine</td>
			<td>15 min.</td>
			<td></td>
			<td>96</td>
		</tr>
		<tr>
			<td>engine-status</td>
			<td>5 min.</td>
			<td></td>
			<td>288</td>
		</tr>
		<tr>
			<td>fuel</td>
			<td>30 min.</td>
			<td></td>
			<td>48</td>
		</tr>
		<tr>
			<td>odometer</td>
			<td>15 min.</td>
			<td>96</td>
		</tr>
		<tr>
			<td>statistics</td>
			<td>10 min.</td>
			<td>144</td>
		</tr>
		<tr>
			<td>tyres</td>
			<td>30 min.</td>
			<td>48</td>
		</tr>
		<tr>
			<td>vehicles<sup>1</sup></td>
			<td>0</td>
		</tr>
		<tr>
			<td>warnings</td>
			<td>30 min.</td>
			<td>48</td>
		</tr>
		<tr>
			<td>windows</td>
			<td>2 min.</td>
			<td>720</td>
		</tr>
		<tr>
			<td>Location</td>
			<td>location</td>
			<td>1 min.</td>
			<td>1'440</td>
		</tr>
		<tr>
			<td>Energy</td>
			<td>recharge-status</td>
			<td>5 min.</td>
			<td></td>
			<td></td>
			<td>288</td>
		</tr>
		<tr>
			<th>Total</th>
			<th></th>
			<th></th>
			<th>3672</th>
			<th>432</th>
			<th>288</th>
		</tr>
	</tbody>
</table>
<sup>1</sup> Endpoint appelé lors de la synchronisation d'un account.

Il y a donc:
+ 4104 appels par jour pour un véhicule thermique.
+ 3960 appels par jour pour un véhicule électrique.
+ 4392 appels par jour pour un véhicule hybride.

A ceci, s'ajoutent les appels lors de l'envoi d'une commande, d'un refresh ou d'une synchronisation des véhicules associés à un compte.

