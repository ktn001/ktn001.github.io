---
layout : default
pluginId : devolo_cpl
plugin : devolo_cpl
lang: it_IT
---
# Plugin "devolo_cpl" per Jeedom

Il plugin consente di integrare i dispositivi PLC di Devolo in Jeedom

> :bulb: Attenzione: se condividete i file di log, le password dei
gli apparecchi possono essere indicati in chiaro!

# Dispositivi compatibili
{: .num}

## Dispositivi gestibili
{: .num}

Il plugin utilizza il modulo Python [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
La documentazione di questo modulo specifica che è compatibile con i seguenti dispositivi:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN triplo
+ Magic 2 LAN su guida DIN
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Ripetitore 5400
+ Ripetitore 3000
+ Ripetitore 1200
+ Ripetitore AC+
+ Ripetitore AC
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wi-Fi
+ dLAN 550 WiFi

## Dispositivi non gestibili
{: .num}

I dispositivi, Devolo o di altre marche, che non figurano nell'elenco dei dispositivi
I dispositivi gestibili possono essere configurati nel plugin. Questi dispositivi sono
*non gestibile*.

Le apparecchiature per i dispositivi *non gestibili* non dispongono di comandi. Nessuna azione
non può quindi essere eseguita su questi dispositivi e non è possibile segnalare alcuno stato in
Jeedom.

Nella versione attuale del plugin, l'unico motivo per configurare questi dispositivi
in Jeedom è quello di documentarne l'esistenza. Probabilmente ne verrà tenuta conto
in una versione futura, durante la visualizzazione delle velocità di trasferimento tra i
dispositivi.

Nel plugin sono previsti modelli per le seguenti tipologie:

+ DL1200 LAN
+ DL550 LAN
+ altro

# Installazione e configurazione del plugin
{: .num}


## Installazione del plugin
{: .num}

Il plugin si installa in modo standard dal market di Jeedom. Dopo averlo
Una volta installato, è necessario attivarlo e quindi avviare l'installazione delle dipendenze

## Configurazione del plugin
{: .num}

{% include image.html img="configuration_plugin.png" %}

+ **Plugin**
: Configurazione generale del plugin:
    + ***Paese***
: Il Paese in cui si trovano le apparecchiature Devolo. Questo parametro serve
per selezionare le immagini dei dispositivi con il tipo di presa corretto.
    + ***Nomi delle apparecchiature senza l'oggetto***
: Se questa opzione è selezionata, i nomi delle apparecchiature nelle tabelle
e i grafici non verranno visualizzati nel formato `[<oggetto>][<apparecchio>]`, ma
`<apparecchiature>`.

+ **Banca dati**
: Configurazione della gestione dei dati:
    + ***Ritenzione***
: Periodo di tempo durante il quale le informazioni relative ai flussi PLC vengono conservate nel database
dei dati.

+ **Demone**
: Configurazione del demone:
    + ***Porta***
: Numero della porta TCP utilizzata per la comunicazione tra Jeedom e il demone.
La porta 34741 è configurata per impostazione predefinita. È possibile impostare un'altra porta in
in caso di conflitto con un altro plugin o software che utilizza la stessa porta.

+ **Registri**
: Configurazione dei log
    + ***Discreto***
: I dati sensibili (password, ecc.) vengono rimossi dai log.
> :warning: I dati sensibili non sono (ancora) stati rimossi dai log del demone! I dati sensibili (password, ...) vengono rimossi dai log.
    + ***Debug completo***
: I log dei moduli Python del demone non vengono impostati in modalità debug se questa opzione non è
attivata. L'attivazione di questa opzione può rendere i log del demone molto dettagliati se il plugin
è impostato in modalità "debug".

+ **Informazioni sulla velocità di trasmissione**
: 
    + ***Flusso ascendente***
: Indica se devono essere creati dei comandi per la trasmissione dei flussi PLC in uscita (verso i
altre apparecchiature).
    + ***Flussi discendenti***
: Indica se devono essere creati dei comandi per la trasmissione dei flussi PLC in uscita
(provenienti da altre apparecchiature).

## Avvio del servizio
{: .num}
Dopo aver installato i file ausiliari e aver configurato il plugin,
è necessario avviare il servizio.

# Configurazione delle apparecchiature
{: .num}

È possibile creare automaticamente le configurazioni per i dispositivi gestibili
a condizione che si trovino nella stessa rete del server Jeedom e che
non siano in standby. In caso contrario, sarà necessario crearli manualmente come i dispositivi
non gestibili.

## Il metodo automatico
{: .num}

Nella pagina di gestione del plugin, cliccare sull'icona `sincronizzazione`:

{% include image.html img="icones_gestion_plugin.png" %}

Per ogni dispositivo rilevato viene creato automaticamente un dispositivo Jeedom.

+ Il numero di serie del dispositivo è configurato in Jeedom. Se ne esiste già uno
per i dispositivi con questo numero di serie, il programma di sincronizzazione non crea
non si tratta di un nuovo impianto, ma di un aggiornamento di quello esistente.
+ Il nome dell'apparecchio è quello configurato nel dispositivo oppure il n. di
serie se non è stato configurato alcun nome.
+ L'indirizzo IP del dispositivo è stato inserito nell'apparecchiatura Jeedom.
+ Il tipo di dispositivo è specificato nell'apparecchiatura Jeedom e l'immagine di
L'attrezzatura viene selezionata tenendo conto del Paese configurato per il plugin.
+ I comandi delle apparecchiature sono stati creati.

## Il metodo manuale
{: .num}

Nella pagina di gestione del plugin, clicca sull'icona `Aggiungi`:

{% include image.html img="icones_gestion_plugin.png" %}

È necessario inserire il nome del nuovo dispositivo prima di accedere alla pagina di
configurazione dell'apparecchiatura.

{% include image.html img="equipement_non_configure.png" %}

È quindi necessario
+ Selezionare il tipo di apparecchiatura. Verrà visualizzato l'elenco dei parametri specifici
adattata in base al tipo di apparecchiatura selezionata.
+ Inserire il numero di serie dell'apparecchio. *(Se non si conosce il n.
di serie, è possibile inserire un testo a scelta.)*
+ Inserire l'indirizzo MAC del dispositivo.
+ Inserire l'indirizzo IP del dispositivo. *(Solo per dispositivi gestibili)*
+ Selezionare il tipo di dispositivo. *(Solo per dispositivi gestibili)*

> :bulb: Il numero di serie deve essere univoco, ma al momento il plugin non lo verifica.

##### Dispositivi gestibili:
{% include image.html img="equipement_manageable_configure.png" %}

##### Apparecchiature non gestibili:
{% include image.html img="equipement_non_manageable_configure.png" %}

## Completamento della configurazione
{: .num}

Dopo aver creato un dispositivo in modo automatico o manuale, è necessario
+ Inserisci la password.
+ Configurare il nome della rete PLC (facoltativo se si dispone di una sola rete PLC)
+ Attivare l'apparecchiatura.
+ Effettuare le configurazioni standard per i dispositivi Jeedom.
+ Selezionare `Monitoraggio offline` se si desidera ricevere un messaggio di errore quando
il dispositivo non è raggiungibile (ad esempio, in modalità standby).

# I comandi
{: .num}

I comandi diversi da quelli relativi alla portata vengono creati o eliminati automaticamente
quando il modello dell'apparecchio viene modificato. Vengono creati i comandi per i modelli
gestibili e rimosse per i modelli non gestibili.

I dispositivi non segnalano i cambiamenti di stato in tempo reale. I
i comandi di tipo info (ad eccezione del comando locate) sono stati aggiornati
ogni minuto tramite un cron. Le informazioni relative a un dispositivo sono inoltre
aggiornate quando viene inviato un comando al dispositivo tramite il daemon o quando
il comando refresh è attivato.

## Aggiorna
{: .num}

Il comando refresh invia un messaggio al daemon affinché interroghi il dispositivo
in base al loro stato. I comandi di tipo informativo vengono aggiornati in modo asincrono
quando il dispositivo risponde alla richiesta del daemon.

## LED
{: .num}

+ I comandi action con logicalId `leds_on` e `leds_off` consentono di
per accendere/spegnere i LED del dispositivo.
+ Il comando con logicalId `leds` indica se i LED sono accesi o spenti.
Questa informazione viene aggiornata con i dati trasmessi dal dispositivo.

## Individua
{: .num}

+ Il comando `locate_on` attiva la localizzazione del dispositivo eseguendo
Far lampeggiare per due minuti il LED PLC del dispositivo.
+ Il comando `locate_off` disattiva la localizzazione prima della scadenza
in due minuti.
+ I dispositivi non restituiscono informazioni che indichino se la localizzazione è
attiva o meno. L'informazione `locate` deve quindi emulare lo stato del dispositivo:
    + Il valore viene impostato a 1 al momento dell'attivazione tramite `locate_on`.
    + Il conteggio torna automaticamente a 0 dopo 2 minuti.
    + Il valore viene azzerato prima della scadenza dei due minuti se il comando
`locate_off` è attivata.
    + Lo stato dell'informazione non viene modificato se la localizzazione è attivata o
disattivata da un software diverso dal plugin (ad esempio da Devolo Cockpit)
(esempio).

## Versioni del firmware
{: .num}

+ Il comando info `firmware` indica la versione del firmware installato in
il dispositivo.
+ Il comando info `update_available` indica se è disponibile un aggiornamento del firmware
è disponibile.
+ Il comando info `next_firmware` indica la versione disponibile per l'aggiornamento.
Questo campo è vuoto se il dispositivo è aggiornato.

> :bulb: Dato che i miei dispositivi sono tutti aggiornati, non ho ancora potuto testarli correttamente
i comandi `update_available` e `next_firmware`. Qualsiasi feedback
tramite il [forum](https://community.jeedom.com) (non dimenticare l'etichetta
`plugin-devolo_cpl`) sarà ben accetto.

## Attivazione/disattivazione del Wi-Fi per gli ospiti
{: .num}

+ I comandi `guest_on` e `guest_off` consentono di attivare e disattivare
il Wi-Fi Guest dei dispositivi Devolo. Nel caso delle reti Wi-Fi mesh, l'attivazione o la
la disattivazione del Wi-Fi ospite su un dispositivo si riflette sugli altri dispositivi
della rete mesh.
+ Il comando `guest_duration` consente di configurare la durata durante la quale
Il WiFi per gli ospiti deve essere attivato. Una volta trascorso questo periodo, il dispositivo Devolo
disattiverà il Wi-Fi ospite. Se il valore di questo comando è 0, il Wi-Fi ospite non
non verrà disattivato automaticamente.

La durata per cui il WiFi ospite deve rimanere attivo è espressa in minuti.

Il widget **Devolo_cpl/J_h_m** visualizza questo valore nel formato
`<giorni> <ore>:<minuti>` (`<ore>:<minuti>` se giorni = 0)

##### Widget e popup nella dashboard:
{% include image.html img="widget_dashboard.png" %} {% include image.html img="popup_j_h_m_dashboard.png" %}

##### Widget e popup per dispositivi mobili:
{% include image.html img="widget_mobile.png" %} {% include image.html img="popup_j_h_m_mobile.png" %}
+ Il comando info `guest_remaining` indica il tempo rimanente prima della disattivazione
del WiFi per gli ospiti. Questa durata è espressa in minuti.

Il widget **Devolo_cpl/J_h_m** visualizza questo valore nel formato
`<giorni> <ore>:<minuti>` (`<ore>:<minuti>` se giorni = 0)

## Online
{: .num}

+ Il comando `online` è un'informazione binaria che indica se l'apparecchio è online o meno.

## Le portate
{: .num}

+ È possibile creare comandi per la regolazione della portata dei flussi tra i dispositivi PLC. Vedi informazioni più sotto.

# Velocità di trasmissione PLC
{: .num}

I dati relativi alla velocità della rete PLC vengono raccolti dai dispositivi ogni 5 minuti. I valori sono
registrate nel database e conservate per il periodo di conservazione
configurata nella pagina di configurazione del plugin.

{% include image.html img="icones_gestion_plugin.png" %}

Cliccando sull'icona `Reti PLC` si apre una finestra modale che mostra le velocità di trasmissione PLC.

{% include image.html img="modal_CPL_rates.png" %}

## Le reti
{: .num}

Se avete configurato diversi nomi di rete nelle impostazioni delle
apparecchiature, il modulo conterrà una scheda per ciascuna di queste reti. Ciò consente di,
ad esempio, disporre di una tabella che indichi le velocità di trasmissione tra i dispositivi DLAN e
un altro per i dispositivi Magic.

## Le portate
{: .num}

Le righe della tabella rappresentano i dispositivi sorgente e le colonne, i
destinazioni.

Nell'immagine sopra riportata, abbiamo quindi un flusso di 833 Mbps da *cplphil* verso
*cplbureau* e 850 Mbps in senso inverso.

I valori di portata vengono rilevati ogni 5 minuti. L'ora è visualizzata in basso a destra
Il termine "modale" indica l'ora in cui sono state rilevate le portate visualizzate.

## I comandi di portata
{: .num}

### Creazione dei comandi
{: .num}

Se l'opzione corrispondente è stata attivata nella configurazione del plugin, i pulsanti per
la creazione dei comandi di flusso per i flussi ascendenti e discendenti viene visualizzata su
la pagina di gestione degli ordini di un dispositivo.

{% include image.html img="btn_cmd_debit.png" %}

Cliccando su questi pulsanti si aggiunge un comando all'elenco dei comandi dell'apparecchio.
Il logicalId del nuovo comando è `rate_upload` (velocità di upload) oppure
`rate_download` (velocità di download).

{% include image.html img="nouvelles_commandes.png" %}

A questo punto è necessario inserire un nome per il comando e verificare se il dispositivo di destinazione
(**Flusso verso:** o **Flusso da:**) proposto sia corretto prima di salvare l'apparecchiatura.

### Verifica della coerenza dei comandi
{: .num}

Il pulsante `Controlli di flusso` apre una finestra pop-up con un elenco delle incongruenze presenti nei
configurazioni dei comandi di portata.

{% include image.html img="icones_gestion_plugin.png" %}

{% include image.html img="check_debitCmds.png" %}

### Note
{: .num}

+ **Ridondanza:**
Un comando di addebito per l'importo da A a B sarà ridondante rispetto al comando di addebito
scendendo da A verso B.

+ **Flusso tra dispositivi non gestibile**
Questi flussi non possono essere misurati.

+ **Flusso tra un dispositivo gestibile e uno non gestibile**
I comandi di portata delle apparecchiature non gestibili vengono impostati con i valori
dati inviati dal dispositivo gestibile

# Connessioni Wi-Fi
{: .num}

Gli indirizzi MAC dei client Wi-Fi connessi agli access point dei dispositivi Devolo sono
registrate nel plugin Jeedom, che conserva una cronologia di tali connessioni.

## Indirizzi MAC casuali
{: .num}

> :bulb: Un indirizzo MAC il cui secondo carattere è **2**, **6**, **A** o **E** è un indirizzo casuale.

Alcuni dispositivi utilizzano un indirizzo MAC casuale anziché il proprio indirizzo MAC
fisica. Poiché l'indirizzo MAC casuale cambia ad ogni connessione, è
non è possibile ottenere una cronologia delle connessioni di questi dispositivi. **Questi indirizzi sono
quindi ignorate dal plugin, che non registra alcun dato relativo a esse.**

Alcuni di questi dispositivi possono essere configurati per utilizzare un indirizzo fisso
quando si connettono a determinate reti Wi-Fi. È quindi possibile
in modo che questi dispositivi utilizzino sempre lo stesso indirizzo MAC quando si
si connettono a uno dei vostri punti di accesso Devolo, mantenendo i vantaggi di
l'utilizzo di un indirizzo MAC casuale quando ci si connette ad altri dispositivi
reti.


## Ricerca del venditore in base a un indirizzo MAC
{: .num}

Il sito [macvendors.com](https://macvendors.com) permette di scoprire chi è il produttore
di un dispositivo o della sua interfaccia di rete in base all'indirizzo MAC.

Il plugin accede all'API di questo sito per individuare il produttore dei dispositivi che si sono
collegati alle interfacce Wi-Fi dei dispositivi Devolo.

L'accesso all'API deve avvenire rispettando un intervallo minimo di un secondo tra due chiamate per
rispettare il limite di due accessi al secondo per gli accessi liberi. Tuttavia, il plugin non verifica
non il numero di accessi effettuati in un giorno per garantire che il limite di 1000 accessi al giorno sia
rispettata.

## Associazione dei nomi agli indirizzi MAC
{: .num}

{% include image.html img="icones_gestion_plugin.png" %}

Il pulsante `Indirizzi MAC` nella pagina di gestione del plugin apre una finestra modale per
gestione degli indirizzi MAC dei dispositivi che si sono connessi alla rete Wi-Fi.

{% include image.html img="config_mac.png" %}

I nomi qui associati agli indirizzi MAC saranno utilizzati al posto degli indirizzi MAC
i grafici.

# Il pannello
{: .num}

Il pannello è accessibile tramite il menu **Home**

{% include image.html img="menu_accueil.png" %}

Il pannello contiene due *schede*:
* Una voce denominata "Velocità PLC" per la cronologia delle velocità tra i dispositivi PLC
* Un elemento denominato `WiFi` per la cronologia delle connessioni dei client Wi-Fi

## Velocità di trasmissione PLC
{: .num}

All'apertura, la scheda mostra un grafico della cronologia delle portate tra
due dispositivi.

{% include image.html img="panel_debits_CPL.png" %}

È possibile:
+ Aggiungere un grafico tramite il pulsante `Aggiungi un grafico`
+ Modifica della fonte e della destinazione tramite i selettori `da` e `a`
quindi facendo clic sul pulsante `OK`.

Vi invito a scoprire le altre funzionalità del grafico.

## Connessioni Wi-Fi
{: .num}

Questa scheda consente di visualizzare la cronologia delle connessioni Wi-Fi a un punto di accesso (AP):

{% include image.html img="panel_wifi_AP.png" %}

Questa scheda consente inoltre di visualizzare la cronologia delle connessioni Wi-Fi di un dispositivo Wi-Fi (client):

{% include image.html img="panel_wifi_client.png" %}

