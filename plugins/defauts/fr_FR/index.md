---
layout : default
pluginId : defauts
plugin : Défauts
lang: fr_FR
img01: 01_config_plugin.png
img02: 02_config_surveillance.png
img03: 03_config_consigne.png
img04: 04_historique.png
img05: 05_config_histo.png
img06: 06_defauts_initial.png
img07: 07_defauts_initial_bw.png
img08: 08_defauts_premier_defaut.png
img09: 09_defauts_premier_defaut_bw.png
img10: 10_defauts_acquitte.png
img11: 11_defauts_acquitte_bw.png
img12: 12_defauts_deuxieme_defaut.png
img13: 13_defauts_deuxieme_defaut_bw.png
img14: 14_defauts_plus_de_defaut_pas_acquitte.png
img15: 15_defauts_plus_de_defaut_pas_acquitte_bw.png
---
# Plugin "{{page.plugin}}" pour Jeedom.
Le plugin **{{page.plugin}}** permet de détecter des défauts en vérifiant la cohérence entre un état et une mesure.

# Quelques exemples:
{: .num}

- Une lampe allumée mais pas de consommation (ampoule défectueuse ou mauvais signal de retour).
- Une lampe éteinte mais consomation de plus de 1 watt (mauvais état de retour).
- Une pompe enclenchée mais pas de débit.

Le plugin peut aussi remonter des défaut lorsque la valeur d'une mesure s'écarte trop d'une consigne.

# Configuration du plugin
{: .num}

Le plugin ne nécessite aucune configuration, il faut juste l’activer.

{% include image.html img=page.img01 %}

# Les équipements
{: .num}

Un équipement **{{page.plugin}}** permet de surveiller la cohérence de plusieurs combinaisons d'état et de valeur. Une info
indique pour chacune de ces surveillances si la situation actuelle est cohérente ou non.

De plus, une info **défaut** est activée lorsqu'une surveillance détecte une incohérence. Cette info reste activée
jusqu'à ce qu'elle soit acquittée même si l'incohérence disparaît.

## Création
{: .num}

Les équipements **{{page.plugin}}** sont créés sur la page du plugin qui est atteignable via le menu `plugins`==> `Monitoring` ==> `{{page.plugin}}`.
L'équipement est créé avec trois commandes:
+ Une commande **defaut**, de type info, qui indique si une incohérence est ou a été détectée par une des surveillances de l'équipement.
+ Une commande **Acquittement**, de type action, pour acquitter les défauts détectés.
+ Une commande **historique**, de type info, qui permet d'afficher les dernières anomalies détectées.

## Configuration
{: .num}

### De l'équipement
{: .num}

Outre les configurations habituelles, l'équipement a deux paramêtres permettant de définir le fonctionnement de l'**Auto acquittement**:
* **Auto Acquittement**\
   indique si les défauts doivent être acquittés automatiqeuement ou non.
* **Délais** *(visible uniquement si l'auto acquittement est activé)*\
   Le délais d'attente

### Des surveillances de cohérence
{: .num}

Le panneau `surveillances` permet de géger les surveillances de l'équipement. Le bouton `Ajouter une surveillance` ajoute une surveillance de cohérence à l'équipement.

#### Les surveillances de cohérence ont plusieurs paramètres:
{: .num}

{% include image.html img=page.img02 %}
* ***Nom :*** Nom de la surveillance.
* ***Etat :*** Info binaire à surveiller.
* ***Mesure :*** Info numérique à surveiller.
* ***Limite :*** Valeur dant être atteinte pas le mesure lorsque l'état est à 1 (incohérence si cette valeur n'est pas atteinte. Il y a aussi incohérence si cette valeur est atteinte alors que l'état est à 0.
* ***Temporisation :*** Délais pour atteindre la limite après changement d'état.
* ***Inverser :*** Inversion de la surveillance. La mesure doit être supérieure à la limite lorsque l'état est à 0.
* ***En :*** Surveillance active lorsque l'état est à 1.
* ***Hors :*** Surveillance active lorsque l'état est à 0.
* ***Afficher :*** Affichage de l'info.
* ***Affichage inversé :*** Inversion de la valeur pour l'affichage (permet d'avoir une icône verte si tout va bien et rouge en cas de défaut).
* ***Historiser :*** Historisation de l'info.

### Des surveillances de consigne
{: .num}

{% include image.html img=page.img03 %}
* ***Nom :*** Nom de la surveillance.
* ***Etat :*** Info binaire utilisée pour controler le fonctonnement de lasurveillance.
* ***Mesure :*** Info numérique, un defaut sera signalé si la valeur de cette mesure est trop distante de la valeur de la consigne.
* ***Consigne :*** Info numérique, valeur que la masure doit atteindre.
* ***Limite :*** Un défaut est remonté si la valeur absolue de la différence entre la cngne et la mesure est supérieur à cette limite.
* ***Temposiration :*** Période, en secondes, durant laquelle la surveillance est désactivée après un changement de l'***état***.
* ***En :*** La surveillance est activée lorsque l'***état*** est à 1 si cette option est activée.
* ***Hors :*** La surveillance est activée lorsque l'***état*** est à 0 si cette option est activée.
* ***Historiser :*** Historisation de l'info.

### De l'historique
{: .num}

{% include image.html img=page.img04 %}

La commande *historique* et son widget permettent de voir les cinq derniers défauts qui se sont produits. Le nombre d'événements listés est configurable.

Une durée de rétention des events listés peut-être configurée. Les events qui se sont produit avant la durée de rétention sont retiré de la liste. Ainsi les events qui se sont produit il y a plus de 2 jours sont retirés de la liste si la rétention est de 2 jours.

#### L'historique a plusieurs paramètres:
{: .num}

{% include image.html img=page.img05 %}

* ***Nom :*** Nom de l'historique.
* ***Taille :***  Nombre d'entrées de l'historique affichées dans le widget (5 au maximum)
* ***Rétention :*** Durée de rétention d'une entrée dans l'historique. Cette durée peut être exprimée en minutes, heures ou jours
* ***Format date :*** Format de la date dans l'historique.\
Les formats suivants sont possibles (Faites une demande via le forum de Jeedom pour l'ajout d'autres formats):

    | format | exemple |
    | ------ | ------- |
    | jj-mm HH:MM:SS | 02-06 17:35:40 |
    | jj/mm HH:MM:SS | 02/06 17:35:40 |
    | jj/mm/aa HH:MM:SS | 02/06/21 17:35:40 |
    | jj mmm aaaa HH:MM:SS | 02 Jun 2021 17:35:40 |

* ***Afficher :*** Indique si le widget doit être affiché ou non.

# Exemples
{: .num}

<table>
  <thead>
    <tr>
      <th style="text-align: left">Etape</th>
      <th style="text-align: center">Widget de l’équipement (couleur)</th>
      <th style="text-align: center">Widget de l’équipement (noir/blanc)</th>
      <th style="text-align: left">Observations</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Situation de départ:</td>
      <td style="text-align:center;">{% include image.html img=page.img06 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img07 %}</td>
      <td>Pas de défaut, Les surveillances sont en état normal.</td>
    </tr>
    <tr>
      <td>1<sup>ière</sup>surveillance en en état anormal</td>
      <td style="text-align:center;">{% include image.html img=page.img08 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img09 %}</td>
      <td>L'icône de défaut indique qu'il y a eu une anomalie qui n'a pas été acquittée.</td>
    </tr>
    <tr>
      <td>1<sup>ière</sup>Acquittement du défaut</td>
      <td style="text-align:center;">{% include image.html img=page.img10 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img11 %}</td>
      <td>Le défaut a été acquitté pas un clic sur l'icône (ou par l'auto-acquittement). L'Icône de défaut indique que l'anomalie est toujours présente.</td>
    </tr>
    <tr>
      <td>2<sup>ième</sup> anomalie</td>
      <td style="text-align:center;">{% include image.html img=page.img12 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img13 %}</td>
      <td>L'icône de défaut indique qu'il y a une nonvelle anomalie</td>
    </tr>
    <tr>
      <td>Disparition des anomalies</td>
      <td style="text-align:center;">{% include image.html img=page.img14 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img15 %}</td>
      <td>L'icône de défaut indique qu'il y a eu au moins une anomalie qui n'a pas été acquittée.</td>
    </tr>
    <tr>
      <td>Disparition des anomalies</td>
      <td style="text-align:center;">{% include image.html img=page.img06 %}</td>
      <td style="text-align:center;">{% include image.html img=page.img07 %}</td>
      <td>L'icône de défaut indique qu'il y a eu au moins une anomalie qui n'a pas été acquittée.</td>
    </tr>
  </tbody>
</table>
