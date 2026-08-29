---
layout : default
pluginId : defauts
plugin : Défauts
lang: it_IT
---
# Plugin "{{page.plugin}}" per Jeedom.
Il plugin **{{page.plugin}}** consente di rilevare i guasti verificando la coerenza tra uno stato e una misurazione.

# Alcuni esempi:
{: .num}

- Una lampada è accesa ma non consuma energia (lampadina difettosa o segnale di ritorno errato).
- Una lampada spenta ma con un consumo superiore a 1 watt (errore di feedback).
- La pompa è in funzione ma non c'è flusso.

Il plugin può anche segnalare un guasto quando il valore di una misurazione si discosta eccessivamente da un valore di riferimento.

# Configurazione del plugin
{: .num}

Il plugin non richiede alcuna configurazione, basta semplicemente attivarlo.

{% include image.html img="config_plugin.png" %}

# Le apparecchiature
{: .num}

Un dispositivo **{{page.plugin}}** consente di monitorare la coerenza di diverse combinazioni di stati e valori. Informazioni
indica, per ciascuno di questi controlli, se la situazione attuale è coerente o meno.

Inoltre, quando un sistema di monitoraggio rileva un'incongruenza, viene attivato un avviso **di errore**. Tale avviso rimane attivo
fino a quando non viene assolta, anche se l'incoerenza scompare.

## Creazione
{: .num}

I dispositivi **{{page.plugin}}** vengono creati nella pagina del plugin, accessibile tramite il menu `plugins`==> `Monitoring` ==> `{{page.plugin}}`.
Il sistema è dotato di tre comandi:
+ Un comando **predefinito**, di tipo informativo, che indica se è stata rilevata o è stata rilevata un'incongruenza da uno dei sistemi di monitoraggio dell'apparecchiatura.
+ Un comando **Conferma**, di tipo azione, per confermare i guasti rilevati.
+ Un comando **storico**, di tipo informativo, che consente di visualizzare le ultime anomalie rilevate.

## Configurazione
{: .num}

### Apparecchiature
{: .num}

Oltre alle configurazioni standard, l'apparecchiatura dispone di due parametri che consentono di definire il funzionamento della funzione **Auto conferma**:
* **Autoconferma**
indica se i guasti devono essere azzerati automaticamente o meno.
* **Tempi** *(visibili solo se è attivata la conferma automatica)*
I tempi di attesa
   
### Controlli di coerenza
{: .num}

Il pannello "Monitoraggi" consente di gestire i monitoraggi dell'apparecchiatura. Il pulsante "Aggiungi un monitoraggio" aggiunge un monitoraggio di coerenza all'apparecchiatura.

#### I controlli di coerenza hanno diversi parametri:
{: .num}

{% include image.html img="config_surveillance.png" %}
* ***Nome:*** Nome del sistema di sorveglianza.
* ***Stato:*** Informazioni binarie da monitorare.
* ***Misura:*** Dati digitali da monitorare.
* ***Limite:*** Valore che deve essere raggiunto dalla misurazione quando lo stato è 1 (incoerenza se tale valore non viene raggiunto. Si verifica un'incoerenza anche se tale valore viene raggiunto mentre lo stato è 0).
* ***Temporizzazione:*** Tempi necessari per raggiungere il limite dopo un cambiamento di stato.
* ***Invertire:*** Inversione del monitoraggio. Il valore misurato deve essere superiore al limite quando lo stato è 0.
* ***In:*** Monitoraggio attivo quando lo stato è 1.
* ***Esclusi:*** Monitoraggio attivo quando lo stato è 0.
* ***Visualizza:*** Visualizzazione delle informazioni.
* ***Visualizzazione invertita:*** Inversione del valore visualizzato (consente di visualizzare un'icona verde se tutto funziona correttamente e rossa in caso di guasto).
* ***Archiviazione:*** Archiviazione delle informazioni.

### Monitoraggio dei valori di setpoint
{: .num}

{% include image.html img="config_consigne.png" %}
* ***Nome:*** Nome del sistema di sorveglianza.
* ***Stato:*** Informazione binaria utilizzata per controllare il funzionamento del sistema di sorveglianza.
* ***Misura:*** Informazioni digitali; verrà segnalato un guasto se il valore di questa misura si discosta eccessivamente dal valore di riferimento.
* ***Istruzioni:*** Dato numerico, valore che il sistema deve raggiungere.
* ***Limite:*** Viene segnalato un guasto se il valore assoluto della differenza tra il valore di soglia e la misura è superiore a tale limite.
* ***Tempo di spegnimento:*** Intervallo di tempo, espresso in secondi, durante il quale il monitoraggio rimane disattivato dopo un cambiamento dello ***stato***.
* ***In:*** Il monitoraggio è attivato quando lo ***stato*** è pari a 1, se questa opzione è abilitata.
* ***Assente:*** Il monitoraggio è attivo quando lo ***stato*** è pari a 0, se questa opzione è abilitata.
* ***Archiviazione:*** Archiviazione delle informazioni.

### Cronologia
{: .num}

{% include image.html img="historique.png" %}

Il comando *cronologia* e il relativo widget consentono di visualizzare gli ultimi cinque guasti verificatisi. Il numero di eventi elencati è configurabile.

È possibile configurare un periodo di conservazione degli eventi elencati. Gli eventi verificatisi prima del termine del periodo di conservazione vengono rimossi dall'elenco. Pertanto, gli eventi verificatisi più di 2 giorni fa vengono rimossi dall'elenco se il periodo di conservazione è di 2 giorni.

#### La cronologia presenta diversi parametri:
{: .num}

{% include image.html img="config_histo.png" %}

* ***Nome:*** Nome della cronologia.
* ***Dimensioni:***  Numero di voci della cronologia visualizzate nel widget (massimo 5)
* ***Periodo di conservazione:*** Durata di conservazione di una voce nella cronologia. Tale durata può essere espressa in minuti, ore o giorni
* ***Formato data:*** Formato della data nella cronologia.
Sono disponibili i seguenti formati (per richiedere l'aggiunta di altri formati, invia una richiesta tramite il forum di Jeedom):

| formato | esempio |
    | ------ | ------- |
| gg-mm HH:MM:SS | 02-06 17:35:40 |
| gg/mm HH:MM:SS | 02/06 17:35:40 |
| gg/mm/aa HH:MM:SS | 02/06/21 17:35:40 |
| gg mmm aaaa HH:MM:SS | 02 giugno 2021 17:35:40 |

* ***Visualizza:*** Indica se il widget deve essere visualizzato o meno.

# Esempi
{: .num}

| Fase | Widget dell'apparecchiatura (colore) | Widget dell'apparecchiatura (bianco/nero) | Osservazioni |
| :---- | :----:  | :----: | :---- |
| Situazione iniziale: | ![](/images/defauts/defauts_initial.png "Stato iniziale") | ![](/images/defauts/defauts_initial_bw.png "Stato iniziale") | Nessun guasto, i sistemi di monitoraggio sono in condizioni normali. |
| 1<sup> primo</sup> monitoraggio in caso di stato anomalo | ![](/images/defauts/defauts_premier_defaut.png) | ![](/images/defauts/defauts_premier_defaut_bw.png) | L'icona di errore indica che si è verificata un'anomalia che non è stata risolta. |
| Conferma di risoluzione del guasto | ![](/images/defauts/defauts_acquitte.png) | ![](/images/defauts/defauts_acquitte_bw.png) | Il guasto è stato confermato risolto cliccando sull'icona (o tramite la conferma automatica). L'icona del guasto indica che l'anomalia è ancora presente. |
| 2<sup>°</sup> errore |![](/images/errori/errore_secondo_errore.png) | ![](/images/errori/errore_secondo_errore_bw.png) | L'icona di errore indica che si è verificato un nuovo errore. |
| Risoluzione degli errori |![](/images/errori/errori_errori_non_risolti.png) | ![](/images/errori/errori_errori_non_risolti_bw.png) | L'icona di errore indica che si è verificato almeno un errore che non è stato risolto. |
| Ritorno alla normalità: | ![](/images/defauts/defauts_initial.png "Stato iniziale") | ![](/images/defauts/defauts_initial_bw.png "Stato iniziale") | Gli errori sono stati risolti e sono scomparsi. |
