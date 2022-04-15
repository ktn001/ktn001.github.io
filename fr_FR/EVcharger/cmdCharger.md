---
layout: default
title: EVcharger
---
# Introduction
{: .num}

# État du véhicule
{: .num}

# Connection du câble
{: .num}
Ces commandes sont prévues pour les chargeurs qui n'ont pas de câble attaché mais un connecteur.

**Câble verrouillé**

> *LogicalId:* cable_locked
>
> Cette info indique si le câble branché au chargeur est verrouillé ou non.

**Câble verrouillé en permanence**

> *LogicalId:* cable_locked_permanently
> 
> Cette info indique si le câble est verrouillé même lorsque qu'il n'est pas branché à un véhicule en charge.

**Verrouillage permanent ON**

> *LogicalId:* cable_lock
> 
> Cette action active le verrouillage permanent du câble.

**Verrouillage permanent OFF**

> *LogicalId:* cable_unlock
>
> Cette action désactive le verrouillage permanent du câble.

**Etat du verrouillage**

> *LogicalId:* cable_state
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

# mesures électriques
{: .num}

**Puissance**

> *logicalId:* power
>
> Puissance de charge

**Tension phase #**

> *logicalId:* voltage_1, voltage_2 et voltage_3
>
> Tension électrique pour chacune des trois phases.

**Courant phase #**

> *logicalId:* current_1, current_2 et current_3
>
> Courant électrique pour chacune des trois phases.


