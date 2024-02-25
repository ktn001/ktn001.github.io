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
			<th>Nom</th>
			<th>LogicalId</th>
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
			<td class="subtitle" colspan="5">GLOBALES</td>
		</tr>
		<tr>
			<td rowspan="3">Disponibilité</td>
			<td rowspan="3">availability</td>
			<td rowspan="3">texte</td>
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
			<td rowspan="5">raison indisponibilité</td>
			<td rowspan="5">unavailableReason</td>
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
			<td>""</td>
			<td>Le véhicule est disponible</td>
		</tr>
		<tr>
			<td>"UNSPECIFIED"</td>
			<td>Information indisponible</td>
		</tr>
		<tr>
			<td>odomètre</td>
			<td>odometer</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Kilométrage du véhicule</td>
		</tr>
	
		<!-- ------------ -->
		<!-- LOCALISATION -->
		<!-- ------------ -->
		<tr>
			<td class="subtitle" colspan="5">LOCALISATION</td>
		</tr>
	
		<!-- -------- -->
		<!-- OUVRANTS -->
		<!-- -------- -->
		<tr>
			<td class="subtitle" colspan="5">OUVRANTS</td>
		</tr>
		<tr>
			<td rowspan="3">Verrouillé</td>
			<td rowspan="3">locked</td>
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
			<td rowspan="4">
				état porte avant gauche<br>
				état porte avant droite<br>
				état porte arrière gauche<br>
				état porte arrière droite<br>
				état vitre avant gauche<br>
				état vitre avant droite<br>
				état vitre arrière gauche<br>
				état vitre arrière droite<br>
				état capot<br>
				état toit<br>
				état hayon<br>
				état trappe<br>
			</td>
			<td rowspan="4">
				door_fl_state<br>
				door_fr_state<br>
				door_rl_state<br>
				door_rr_state<br>
				win_fl_state<br>
				win_fr_state<br>
				win_rl_state<br>
				win_rr_state<br>
				hood_state<br>
				roof_state<br>
				tail_state<br>
				tank_state<br>
			</td>
			<td rowspan="4">texte</td>
			<td>CLOSED</td>
			<td>fermé</td>
		</tr>
		<tr>
			<td>AJAR</td>
			<td>entre-ouvert</td>
		</tr>
		<tr>
			<td>OPEN</td>
			<td>ouvert</td>
		</tr>
		<tr>
			<td>UNSPECIFIED</td>
			<td>Information indisponible</td>
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
			<td class="subtitle" colspan="5">MOTEUR THERMIQUE</td>
		</tr>
	
		<tr>
			<td>consommation carburant</td>
			<td>conso_fuel</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne calculée par le véhicule</td>
		</tr>
		<tr>
			<td>consommation carburant (trajet)</td>
			<td>conso_fuel_trip</td>
			<td>numérique</td>
			<td>l/100Km</td>
			<td>consommation moyenne depuis de début du trajet automtique</td>
		</tr>
		<tr>
			<td>carburant</td>
			<td>fuel_amount</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Autonomie avec le carburant restant</td>
		</tr>
		<tr>
			<td>autonomie themique</td>
			<td>fuelAutonomy</td>
			<td>numérique</td>
			<td>Km</td>
			<td>Autonomie avec le carburant restant</td>
		</tr>
	
		<!-- HUILE -->
		<tr>
			<td rowspan="5">niveau d'huile</td>
			<td rowspan="5">oil_level</td>
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
			<td rowspan='2'>binaire</td>
			<td>0</td>
			<td>Le niveau est normal</td>
		</tr>
		<tr>
			<td>1</td>
			<td>Alerte (voir la commande <i>coolant_level</i> pour plus de détails)</td>
		</tr>
	
		<!-- ------ -->
		<!-- WASHER -->
		<!-- ------ -->
		<tr>
			<td class="subtitle" colspan="5">LAVE-VITRES</td>
		</tr>
		<tbody>
			<tr>
				<td rowspan="3">Niveau lave-vitres</td>
				<td rowspan="3">washer_fluid_level</td>
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
				<td class="subtitle" colspan="5">LIQUIDE DE FREIN</td>
			</tr>
			</tbody>
			<tr>
				<td rowspan="3">Niveau liquide de frein</td>
				<td rowspan="3">brake_fluid_level</td>
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
				<td class="subtitle" colspan="5">PRESSION PNEUS</td>
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
				<td class="subtitle" colspan="5">ECLAIRAGES</td>
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




















