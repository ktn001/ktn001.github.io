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
		<th>sousType</th>
		<th>valeurs</th>
		<th>Description</th>
	</tr>
	</thead>
	<tbody>

	<!-- --- -->
	<!-- OIL -->
	<!-- --- -->

	<tr>
		<td class="subtitle" colspan="5">HUILE</td>
	</tr>
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

	<!-- ------- -->
	<!-- COOLANT -->
	<!-- ------- -->
	<tr>
		<td class="subtitle" colspan="5">LIQUIDE DE REFROIDISSEMENT</td>
	</tr>
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
	</tbody>
	<tr>
		<td rowspan="3">Niveau lave-vitres</td>
		<td rowspan="3">washer_fluid_level</td>
		<td rowspan="3">texte</td>
		<td>"UNSPECIFIED"<br>(à confirmer)</td>
		<td>Information indisponible</td>
	</tr>
	<tr>
		<td>"NO_WARNING"</td>
		<td>Niveau normal</td>
	</tr>
	<tr>
		<td>"TOO_LOW"<br>(à confirmer)</td>
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






















