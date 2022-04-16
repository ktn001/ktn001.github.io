---
layout: default
title: EVcharger
---

# Introduction
{: .num}

Liste de toutes les commandes (info et action) qui peuvent être attribuées à un chargeur. Ces commandes peuvent ne pas être implémentées pour certains modèles de chargeur.

# État du véhicule
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

# Connection du câble au chargeur
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

# Mesures électriques
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


