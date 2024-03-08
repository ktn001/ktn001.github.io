---
layout : default
title : volvocars
---

# PLugin "volvocars" pour Jeedom

En préparation...

# Les commandes
{: .num}

## Les actions
{: .num}

## Les infos
{: .num}

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
				door_fl_state<br>
				door_fr_state<br>
				door_rl_state<br>
				door_rr_state<br>
				hood_state<br>
				tail_state<br>
				tank_state<br>
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
				win_fl_state<br>
				win_fr_state<br>
				win_rl_state<br>
				win_rr_state<br>
				roof_state<br>
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
				door_fl_open<br>
				door_fr_open<br>
				door_rl_open<br>
				door_rr_open<br>
				win_fl_open<br>
				win_fr_open<br>
				win_rl_open<br>
				win_rr_open<br>
				hood_open<br>
				roof_open<br>
				tail_open<br>
				tank_open<br>
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
				door_fl_closed<br>
				door_fr_closed<br>
				door_rl_closed<br>
				door_rr_closed<br>
				win_fl_closed<br>
				win_fr_closed<br>
				win_rl_closed<br>
				win_rr_closed<br>
				hood_closed<br>
				roof_closed<br>
				tail_closed<br>
				tank_closed<br>
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
	
		<!-- ---------------- -->
		<!-- Moteur thermique -->
		<!-- ---------------- -->
		<tr>
			<td class="subtitle" colspan="6">MOTEUR THERMIQUE</td>
		</tr>
	
		<tr>
			<td>consommation carburant</td>
			<td>conso_fuel</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne calculée par le véhicule</td>
		</tr>
		<tr>
			<td>consommation carburant (trajet)</td>
			<td>conso_fuel_trip</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne depuis de début du trajet automtique</td>
		</tr>
		<tr>
			<td>carburant</td>
			<td>fuel_amount</td>
			<td>fuel</td>
			<td>numérique</td>
			<td>l</td>
			<td>Quantité de carburant restant</td>
		</tr>
		<tr>
			<td>autonomie themique</td>
			<td>fuelAutonomy</td>
			<td>statistics</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Autonomie avec le carburant restant</td>
		</tr>
	
		<!-- HUILE -->
		<tr>
			<td rowspan="5">niveau d'huile</td>
			<td rowspan="5">oil_level</td>
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
			<td rowspan="3">coolant_level</td>
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
			<td>conso_electric</td>
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
				<td rowspan="3">washer_fluid_level</td>
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
				<td rowspan='2'>al_washer_fluid</td>
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
				<td rowspan="3">brake_fluid_level</td>
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
					tyre_fl<br>
					tyre_fr<br>
					tyre_rl<br>
					tyre_rr
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
					al_brakeLight_l<br>
					al_brakeLight_r<br>
					al_brakeLight_c<br>
					al_daytimeRunningLight_l<br>
					al_daytimeRunningLight_r<br>
					al_fogLight_f<br>
					al_fogLight_r<br>
					al_hazardLights<br>
					al_highBeam_l<br>
					al_highBeam_r<br>
					al_lowBeam_l<br>
					al_lowBeam_r<br>
					al_positionLight_fl<br>
					al_positionLight_fr<br>
					al_positionLight_rl<br>
					al_positionLight_rr<br>
					al_registrationPlateLight<br>
					al_reverseLights<br>
					al_sideMarkLights<br>
					al_turnIndication_fl<br>
					al_turnIndication_fr<br>
					al_turnIndication_rl<br>
					al_turnIndication_rr
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
	</tbody>
</table>

## TITRE 2
{: .num}

<style>
table.commandes {
	font-size: 10px;
}
</style>




















