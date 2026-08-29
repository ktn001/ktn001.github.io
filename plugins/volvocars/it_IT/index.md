---
layout : default
pluginId : volvocars
plugin : Volvo
lang: it_IT
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# Plugin "volvocars" per Jeedom

Il plugin **volvocars** consente a Jeedom di interagire con la vostra auto Volvo utilizzando
le API di Volvocars.

Grazie a @Xav-74, mi sono ispirato molto al suo plugin **My BMW** per il widget e il pannello.

# Principio
{: .num}

Questo plugin interagisce con le API di Volvocars tramite il cloud; pertanto, questo plugin
richiede una connessione a Internet. È inoltre necessario che il vostro veicolo sia accessibile in
l'app Volvo Cars.

La documentazione delle API indica che queste sono disponibili per tutti i modelli compresi tra
Dal 2015 al 2022. Tuttavia, sembra che questa documentazione non sia aggiornata e che i modelli successivi
2022 sono disponibili anche tramite queste API. Il plugin è stato sviluppato utilizzando un XC40
elettrica del 2023.

# Modelli compatibili
{: .num}

+ ***Modelli confermati compatibili con il plugin:***
    + XC40 elettrica (2023)
    + XC60 ibrida (2022)
+ ***Modelli confermati come parzialmente compatibili con il plugin:***
+ ***Modelli confermati incompatibili con il plugin:***

# Le chiavi API vcc
{: .num}
Oltre all'account Volvo ID che utilizzi nell'app Volvo Cars, ti servirà una chiave API VCC
personale.

È necessario generare una chiave API VCC (VCC API Key) sul sito
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} seguendo
questa procedura:

1. Clicca su **Registrati**:
{% include image.html img="sign_up_volvodev.png" %}
1. Selezionare l'account da associare al nuovo account developper.volvocars:
{% include image.html img="select_login_asoc.png" %}
1. Inserisci nome utente e password per il sito selezionato al punto precedente
{% include image.html img="sign_in_volvodev.png" %}
1. Clicca sul tuo nome utente e poi su **Le tue applicazioni API**
{% include image.html img="open_api_applications.png" %}
1. Inserisci un nome per l'applicazione che stai per creare, quindi fai clic su **Crea**. Se hai
In presenza di più istanze Jeedom, si consiglia di creare un'applicazione per ciascuna istanza in
in cui il plug-in sarà
installato:
{% include image.html img="create_application.png" %}
1. La tua nuova app è stata creata con un paio di chiavi API VCC. Potrai sempre tornare indietro
in questa pagina per recuperare la tua chiave.
{% include image.html img="vcc_keys.png" %}

# Installazione e configurazione del plugin
{: .num}

## Installazione del plugin
{: .num}
Il plugin si installa in modo standard dal market di Jeedom.

Se l'installazione dei file dipendenti non è stata avviata automaticamente dopo l'installazione del plugin,
Avviatelo manualmente. Una volta installate le dipendenze, assicuratevi che il daemon sia in esecuzione.

## Configurazione del plugin
{: .num}

{% include image.html img="configuration_plugin.png" %}
+ ***Chiave API VCC***
: Inserisci la chiave VCC-API-key che hai generato sul sito developer.volvocars.com.

+ ***Utilizzare il widget del plugin***
: Seleziona questa opzione per utilizzare il widget del plugin nelle dashboard.
{% include image.html img="widget_electrique.png" -%}
{% include image.html img="widget_hybrid.png" -%}
{% include image.html img="widget_thermique.png" %}

+ ***Comandi da creare per gli elementi apribili***
: Le API di Volvocars restituiscono informazioni di tipo testo relative allo stato delle aperture.
Questo testo è memorizzato in un comando **\*_state** dell'apparecchio.
Verranno inoltre creati i comandi binari **\*_open** e **\*_closed** se l'opzione **Aperto**
o **Chiuso** è attivata.
: I comandi **\*_open** o **\*_closed** esistenti non vengono eliminati quando
l'opzione corrispondente è disattivata.

Una volta installato il plugin, è necessario creare un account.

# Gli account
{: .num}
{% include image.html img="no_account.png" %}

Fare clic su *Aggiungi*

{% include image.html img="nom_account.png" %}

Inserire il nome dell'account, quindi fare clic su *OK*

{% include image.html img="edit_account.png" %}

Inserire il nome utente e la password dell'account VolvoId, quindi fare clic su *OK*

{% include image.html img="edit_otp.png" %}

Inserisci il codice che Volvo ti ha inviato via e-mail, quindi clicca su *OK*.

È necessario inserire il codice per ottenere un token che verrà utilizzato dal plugin per
autenticare l'accesso alle API di Volvocars. Questo token verrà rinnovato automaticamente prima della scadenza.

Il token potrebbe andare perso se
   + I veicoli associati all'account sono tutti disattivati per un certo periodo.
   + Il plugin è disattivato da più di un certo periodo di tempo.
   + Jeedom è inattivo da più di un certo periodo di tempo.
   + È stato ripristinato un backup di Jeedom.

In questi casi, è necessario aprire la scheda dell'account e salvarla. In questo modo la procedura verrà riavviata
per inserire un nuovo codice inviato via e-mail e ottenere un nuovo token.

Secondo la documentazione delle API, un token scaduto può essere rinnovato automaticamente fino a 7 giorni dopo la scadenza. Tuttavia, non ho potuto verificarlo. Dato che i token hanno una validità di 30 minuti e vengono rinnovati 15 minuti prima della scadenza, un'interruzione di durata inferiore a 15 minuti non dovrebbe avere conseguenze.

{% include image.html img="no_car.png" %}

# I veicoli
{: .num}

I dispositivi Jeedom per i veicoli associati a un account vengono creati automaticamente (o aggiornati
(aggiornato) durante la sincronizzazione dell'account

## Sincronizzazione di un account (creazione dei veicoli)
{: .num}

+ Fare clic sul pulsante **Sincronizzazione**
+ Seleziona l'account da sincronizzare
+ Il nuovo veicolo viene aggiunto all'elenco dei veicoli

  > :bulb: In alcuni casi, il sito che ospita l'immagine potrebbe bloccare gli accessi effettuati tramite uno script.
In questo caso, al posto dell'immagine del veicolo verrà visualizzato il logo Volvo. L'immagine del veicolo dovrà
deve essere caricata manualmente dalla pagina di configurazione del veicolo.

{% include image.html img="with_car.png" %}

## Configurazione del veicolo
{: .num}

{% include image.html img="configuration_vehicle.png" %}

+ **Impostazioni generali**

Queste impostazioni sono quelle standard delle apparecchiature Jeedom. Non verranno descritte in dettaglio in questa sede.

+ **Impostazioni del veicolo**

Questi parametri vengono compilati automaticamente durante la sincronizzazione dell'account. La modifica di questi parametri è disabilitata per impostazione predefinita, poiché non dovrebbero essere modificati dagli utenti.

Se necessario, è possibile sbloccare la modifica di questi parametri cliccando sul pulsante `Modifica`

+ **Impostazioni degli avvisi**

   + *Autonomia elettrica*
Il valore del comando `al_electricAutonomy` diventa **1** quando l'autonomia elettrica è inferiore
a questo limite.

   + *Autonomia termica*
Il valore del comando `al_fuelAutonomy` passa a **1** quando l'autonomia del motore termico è inferiore
a questo limite.

+ **Impostazioni di localizzazione**

È possibile configurare le coordinate GPS di due siti. Per ciascuno di questi siti verranno creati due comandi:
  + `distanceSite#`: Distanza tra il sito e il veicolo
  + `presenceSite#`: valore binario che indica se l'utente è presente sul sito

Le impostazioni:
  + *Nome*
Se si rinomina un sito, anche i due comandi associati verranno rinominati se i loro nomi contengono il nome precedente
nome del sito
  + *Coordinate GPS*
Le coordinate GPS del sito
  + *Distanza massima (in m)*
Distanza massima (in metri) tra il veicolo e il sito affinché il veicolo risulti presente sul sito.
  + *Recupera coordinate GPS*
Due pulsanti che consentono di inserire automaticamente le coordinate GPS del sito:
       + `Jeedom`: Recupera le coordinate GPS di Jeedom che sono state inserite nella configurazione di Jeedom.
       + `Veicolo`: Recupera la posizione attuale del veicolo
  
+ **Descrizione**

Informazioni libere

+ **Immagine**

Immagine del veicolo che verrà utilizzata nel pannello. Se non è stato possibile recuperare l'immagine del veicolo durante
della sincronizzazione dell'account, verrà sostituita da un logo Volvo e da un pulsante "Recupera immagine"
del veicolo` (vedere più avanti per la procedura di recupero manuale dell'immagine).

+ **Dati grezzi**

Questo pulsante apre una finestra pop-up con i dati forniti dalle API. Queste informazioni possono
possono essere utili per l'analisi in caso di problemi.

# Recupero manuale dell'immagine
{: .num}

+ Se non è stato possibile caricare l'immagine del veicolo, vengono visualizzati il logo Volvo e il pulsante `Recupera un'immagine del veicolo`:

{% include image.html img="no_image.png" %}

+ Fare clic sul pulsante "Recupera un'immagine del veicolo"
   + Il logo viene sostituito da un'immagine del veicolo
   + Il pulsante "Recupera un'immagine del veicolo" non viene più visualizzato:
   + È contrassegnata un'area in cui incollare l'immagine del veicolo

{% include image.html img="image_ready.png" %}

+ Utilizza il menu contestuale (NESSUNA SCORCIATOIA DA TASTIERA!) per copiare l'immagine.

{% include image.html img="copy_image.png" %}

+ Utilizzare il menu contestuale (NESSUNA SCORCIATOIA DA TASTIERA!) per incollare l'immagine in
l'area prevista a tale scopo.

{% include image.html img="paste_image.png" %}

+ L'immagine viene inviata al plugin
+ L'area destinata alla ricezione di una copia dell'immagine non viene più visualizzata.

{% include image.html img="image_uploaded.png" %}

# I comandi
{: .num}

## Le azioni
{: .num}

Il plugin può inviare al veicolo i seguenti comandi

+ **sblocca**
Sblocco del veicolo
+ **serratura**
Blocco del veicolo
+ **lockReduced**
Blocco con modalità di allarme ridotto
+ **climStart**
Avvio del climatizzatore
+ **climStop**
Spegnimento del climatizzatore
+ **bip**
Klaxonne
+ **flash**
Le luci di posizione del veicolo lampeggiano.
+ **honk_flash**
Esecuzione simultanea dei comandi *honk* e *flash*

I comandi effettivamente attivati nel plugin per un veicolo dipendono
funzionalità del veicolo trasmesse tramite le API (endpoint *commands*).

## Notizie
{: .num}

  > :bulb: I comandi di tipo *info* non vengono creati al momento della creazione del veicolo. Vengono creati
in modo dinamico dopo l'accensione del veicolo, in base ai dati ricevuti dalle API.

<table class="commandes">
<thead>
<tr>
<th style='min-width:150px'>Nome</th>
<th>LogicalId</th>
<th>Endpoint API</th>
<th>Sottotipo</th>
<th>Valori/Unità</th>
<th>Descrizione</th>
</tr>
</thead>
<tbody>

		<!-- -------- -->
<!-- GLOBALI -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">GENERALI</td>
</tr>
<tr>
<td rowspan="4">Disponibilità</td>
<td rowspan="4">disponibilità</td>
<td rowspan="4">accessibilità</td>
<td rowspan="4">testo</td>
<td>"DISPONIBILE"</td>
<td>Il veicolo è connesso</td>
</tr>
<tr>
<td>"NON DISPONIBILE"</td>
<td>Il veicolo è disconnesso</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"QUOTA_OUT"</td>
<td>È stato raggiunto il limite di chiamate API</td>
</tr>
<tr>
<td rowspan="5">motivo dell'indisponibilità</td>
<td rowspan="5">motivo di indisponibilità</td>
<td rowspan="5">accessibilità</td>
<td rowspan="5">testo</td>
<td>"NO_INTERNET"</td>
<td>Nessuna connessione a Internet</td>
</tr>
<tr>
<td>"POWER_SAVING_MODE"</td>
<td>Veicolo in modalità standby</td>
</tr>
<tr>
<td>"CAR_IN_USE"</td>
<td>Guida all'uso del veicolo</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>""</td>
<td>Il veicolo è disponibile</td>
</tr>
<tr>
<td>contachilometri</td>
<td>contachilometri</td>
<td>contachilometri</td>
<td>digitale</td>
<td>Km</td>
<td>Chilometraggio del veicolo</td>
</tr>
<tr>
<td rowspan="12">servizio</td>
<td rowspan="12">servizio</td>
<td rowspan="12">diagnostica</td>
<td rowspan="12">testo</td>
<td>"NO_WARNING"</td>
<td>Nessun intervento da effettuare</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE"</td>
<td>Il termine per un servizio sta per scadere</td>
</tr>
<tr>
<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
<td>Il tempo di funzionamento del motore prima della messa in servizio sta per scadere</td>
</tr>
<tr>
<td>"DISTANZA_PERCORSA_TEMPO_RIMANENTE_PER_LA_MANUTENZIONE"</td>
<td>Chilometraggio per un servizio che sarà presto raggiunto</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
<td>Scadenza del servizio raggiunta</td>
</tr>
<tr>
<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
<td>Tempo di funzionamento del motore prima della messa in servizio trascorso</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
<td>Chilometraggio per un servizio raggiunto</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE"</td>
<td>Tempo di attesa per un servizio superato</td>
</tr>
<tr>
<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
<td>Tempo di funzionamento del motore prima della messa in servizio superato</td>
</tr>
<tr>
<td>"DISTANZA PERCORSA E MANUTENZIONE IN RITARDO."</td>
<td>Chilometraggio per un servizio superato</td>
</tr>
<tr>
<td>"UNKNOWN_WARNING"</td>
<td>Avviso sconosciuto</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>indeterminato</td>
</tr>
<tr>
<td rowspan="5">Motivo della richiesta</td>
<td rowspan="5">serviceTrigger</td>
<td rowspan="5">diagnostica</td>
<td rowspan="5">testo</td>
<td>CALENDAR_TIME</td>
<td>Tempo trascorso dall'ultimo servizio</td>
</tr>
<tr>
<td>"DISTANZA"</td>
<td>Distanza percorsa dall'ultimo servizio</td>
</tr>
<tr>
<td>"ENGIME_HOURS"</td>
<td>Tempo di funzionamento del motore</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Non specificato</td>
</tr>
<tr>
<td>"UNKNOWN"</td>
<td>Sconosciuto</td>
</tr>
<tr>
<td>Ore di funzionamento del motore prima della manutenzione</td>
<td>engineHoursToService</td>
<td>diagnostica</td>
<td>digitale</td>
<td>Orari</td>
<td>Tempo di funzionamento del motore prima della prossima manutenzione</td>
</tr>
<tr>
<td>Distanza prima dell'assistenza</td>
<td>distanceToService</td>
<td>diagnostica</td>
<td>digitale</td>
<td>Chilometri</td>
<td>Distanza fino al prossimo servizio</td>
</tr>
<td>Giorni prima dell'attivazione del servizio</td>
<td>timeToService</td>
<td>diagnostica</td>
<td>digitale</td>
<td>Giorni</td>
<td>Numero di giorni di utilizzo del servizio.<br>L'API volvocars restituisce un numero di giorni o un numero di mesi.
Il plugin converte il numero di mesi in numero di giorni. È quindi possibile che si verifichi un errore di 30 giorni.</td>
<tr>
</tr>
	
		<!-- ------------ -->
<!-- LOCALIZZAZIONE -->
		<!-- ------------ -->
<tr>
<td class="subtitle" colspan="6">POSIZIONE</td>
</tr>
<tr>
<td>posizione</td>
<td>posizione</td>
<td>affitto</td>
<td>coordinate GPS</td>
<td>&lt;latitudine&gt;,&lt;longitudine&gt;</td>
<td>posizione del veicolo</td>
</tr>
<tr>
<td>a distanza &lt;nome_sito_1&gt;</td>
<td>distanceSite1</td>
<td></td>
<td>digitale</td>
<td>contatore</td>
<td>Distanza tra il veicolo e il sito 1</td>
</tr>
<tr>
<td rowspan="2">presenza &lt;nome_sito_1&gt;</td>
<td rowspan="2">presenceSite1</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>Il veicolo non si trova nel sito 1</td>
</tr>
<tr>
<td>1</td>
<td>Il veicolo si trova nel sito 1</td>
</tr>
<tr>
<td>a distanza &lt;nome_sito_2&gt;</td>
<td>distanceSite2</td>
<td></td>
<td>digitale</td>
<td>contatore</td>
<td>Distanza tra il veicolo e il sito 1</td>
</tr>
<tr>
<td rowspan="2">presenza &lt;nom_site_2&gt;</td>
<td rowspan="2">presenceSite2</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>Il veicolo non si trova nel sito 2</td>
</tr>
<tr>
<td>1</td>
<td>Il veicolo si trova nel sito 2</td>
</tr>
	
		<!-- -------- -->
<!-- SERRAMENTI -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">SERRAMENTI</td>
</tr>
<tr>
<td rowspan="3">Bloccato</td>
<td rowspan="3">bloccato</td>
<td rowspan="3">porte</td>
<td rowspan="3">testo</td>
<td>BLOCCATO</td>
<td>Blocca veicolo</td>
</tr>
<tr>
<td>UNLOCKED</td>
<td>Sblocco veicolo</td>
</tr>
<tr>
<td>NON SPECIFICATO</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td rowspan="8">
stato della porta anteriore sinistra<br>
stato della porta anteriore destra<br>
stato della porta posteriore sinistra<br>
stato della porta posteriore destra<br>
stato del cofano<br>
stato portellone<br>
stato del portello<br>
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
porte
</td>
<td rowspan="12">
testo
</td>
<td rowspan="3">CHIUSO</td>
<td rowspan="3">chiuso</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">AJAR</td>
<td rowspan="3">a battente</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">OPEN</td>
<td rowspan="3">aperto</td>
</tr>
<tr>
</tr>
<tr>
<td rowspan="4">
stato del parabrezza anteriore sinistro<br>
condizioni del parabrezza anteriore destro<br>
stato del finestrino posteriore sinistro<br>
condizioni del finestrino posteriore destro<br>
stato del tetto<br>
</td>
<td rowspan="4">
winFlState<br>
winFrState<br>
winRlState<br>
winRrState<br>
roofState<br>
</td>
<td rowspan="4">finestre</td>
</tr>
<tr>
<td rowspan="3">NON SPECIFICATO</td>
<td rowspan="3">Informazioni non disponibili</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="2">
porta anteriore sinistra aperta<br>
porta anteriore destra aperta<br>
portiera posteriore sinistra aperta<br>
portiera posteriore destra aperta<br>
finestrino anteriore sinistro aperto<br>
finestrino anteriore destro aperto<br>
finestrino posteriore sinistro aperto<br>
finestrino posteriore destro aperto<br>
coperchio aperto<br>
tetto apribile<br>
portellone aperto<br>
sportello aperto<br>
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
<td rowspan="2">binario</td>
<td>0</td>
<td>non aperto</td>
</tr>
<tr>
<td>1</td>
<td>aperto</td>
</tr>
<tr>
<td rowspan="2">
porta anteriore sinistra chiusa<br>
porta anteriore destra chiusa<br>
portiera posteriore sinistra chiusa<br>
portiera posteriore destra chiusa<br>
finestrino anteriore sinistro chiuso<br>
finestrino anteriore destro chiuso<br>
finestrino posteriore sinistro chiuso<br>
finestrino posteriore destro chiuso<br>
coperchio chiuso<br>
tetto chiuso<br>
portellone chiuso<br>
sportello chiuso<br>
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
<td rowspan="2">binario</td>
<td>0</td>
<td>non chiuso</td>
</tr>
<tr>
<td>1</td>
<td>aperto</td>
</tr>
<tr>
<td rowspan="2">Porte chiuse</td>
<td rowspan="2">allDoorsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>una porta, il cofano o il bagagliaio non è chiuso</td>
</tr>
<tr>
<td>1</td>
<td>Tutte le portiere, il cofano e il bagagliaio sono chiusi</td>
</tr>
<tr>
<td rowspan="2">Finestre chiuse</td>
<td rowspan="2">allWinsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>Una finestra o il tetto non sono chiusi</td>
</tr>
<tr>
<td>1</td>
<td>Tutte le finestre e il tetto sono chiusi</td>
</tr>
	
		<!-- ---------------- -->
<!-- Motore termico -->
		<!-- ---------------- -->
<tr>
<td class="subtitle" colspan="6">MOTORE TERMICO</td>
</tr>
	
<tr>
<td rowspan="2">motore in funzione</td>
<td rowspan="2">engineON</td>
<td rowspan="2">engine_status</td>
<td rowspan="2">binario</td>
<td>0</td>
<td>motore spento</td>
</tr>
<tr>
<td>1</td>
<td>motore in funzione</td>
</tr>
<tr>
<td>consumo di carburante</td>
<td>consoFuel</td>
<td>statistiche</td>
<td>digitale</td>
<td>l/100 km</td>
<td>consumo medio calcolato dal veicolo</td>
</tr>
<tr>
<td>consumo di carburante (percorso)</td>
<td>consoFuelTrip</td>
<td>statistiche</td>
<td>digitale</td>
<td>l/100 km</td>
<td>Consumo medio dall'inizio del percorso automatico</td>
</tr>
<tr>
<td>carburante</td>
<td>fuelAmount</td>
<td>combustibile</td>
<td>digitale</td>
<td>l</td>
<td>Quantità di carburante rimanente</td>
</tr>
<tr>
<td>autonomia termica</td>
<td>fuelAutonomy</td>
<td>statistiche</td>
<td>digitale</td>
<td>Km</td>
<td>Autonomia con il carburante rimanente</td>
</tr>
<tr>
<td rowspan="2">Bassa autonomia del carburante</td>
<td rowspan="2">al_fuelAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binario</td>
<td>0</td>
<td>Autonomia di carburante sufficiente</td>
</tr>
<tr>
<td>1</td>
<td>Bassa autonomia del carburante</td>
</tr>
	
<!-- OLIO -->
<tr>
<td rowspan="5">livello dell'olio</td>
<td rowspan="5">oilLevel</td>
<td rowspan="5">diagnostica del motore</td>
<td rowspan="5">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Livello normale</td>
</tr>
<tr>
<td>"SERVICE_REQUIRED"</td>
<td>Richiede un servizio</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Livello basso</td>
</tr>
<tr>
<td>"TOO_HIGH"</td>
<td>Livello superiore</td>
</tr>
<tr>
<td rowspan='2'>allarme olio</td>
<td rowspan='2'>al_oil</td>
<td rowspan='2'></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Il livello dell'olio è normale</td>
</tr>
<tr>
<td>1</td>
<td>Avviso (vedere il comando <i>oil_level</i> per ulteriori dettagli)</td>
</tr>
	
<!-- LIQUIDO DI RAFFREDDAMENTO -->
<tr>
<td rowspan="3">livello del liquido di raffreddamento</td>
<td rowspan="3">coolantLevel</td>
<td rowspan="3">diagnostica del motore</td>
<td rowspan="3">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Livello normale</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Livello basso</td>
</tr>
<tr>
<td rowspan='2'>avviso liquido di raffreddamento</td>
<td rowspan='2'>al_coolant</td>
<td rowspan='2'></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Il livello è normale</td>
</tr>
<tr>
<td>1</td>
<td>Avviso (vedere il comando <i>coolant_level</i> per ulteriori dettagli)</td>
</tr>
	
		<!-- ----------------- -->
<!-- Motore elettrico -->
		<!-- ----------------- -->
<tr>
<td class="subtitle" colspan="6">MOTORE ELETTRICO</td>
</tr>
<tr>
<td>consumo elettrico</td>
<td>consoElectric</td>
<td>statistiche</td>
<td>digitale</td>
<td>kW/100 km</td>
<td>Consumo medio calcolato dal veicolo</td>
</tr>
<tr>
<td>Autonomia elettrica</td>
<td>electricAutonomy</td>
<td>statistiche</td>
<td>digitale</td>
<td>Km</td>
<td>Autonomia con la carica residua</td>
</tr>
<tr>
<td rowspan="2">Bassa autonomia elettrica</td>
<td rowspan="2">al_electricAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binario</td>
<td>0</td>
<td>Autonomia elettrica sufficiente</td>
</tr>
<tr>
<td>1</td>
<td>Bassa autonomia elettrica</td>
</tr>
<tr>
<td>livello di carica della batteria</td>
<td>batteryLevel</td>
<td>recharge_status</td>
<td>digitale</td>
<td>%</td>
<td>Percentuale di carica della batteria</td>
</tr>
<tr>
<td rowspan="6">Stato di carica</td>
<td rowspan="6">stato di ricarica</td>
<td rowspan="6">stato_ricarica</td>
<td rowspan="6">testo</td>
<td>"CHARGING_SYSTEM_CHARGING"</td>
<td>Ricarica in corso</td>
<td></td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_IDLE"</td>
<td>Sistema di ricarica in standby</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_DONE"</td>
<td>Ricarica completata</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_FAULT"</td>
<td>Errore nel sistema di ricarica</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_SCHEDULED"</td>
<td>Ricarica programmata</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_UNSPECIFIED"</td>
<td>Stato indeterminato</td>
</tr>
<tr>
<td>Tempo di ricarica rimanente</td>
<td>chargingRemainingTime</td>
<td>recharge_status</td>
<td>digitale</td>
<td>minuti</td>
<td>Tempo stimato per il completamento della ricarica</td>
</tr>
<tr>
<td>Ora di fine ricarica</td>
<td>chargingEndTime</td>
<td></td>
<td>testo</td>
<td>jj HH:MM</td>
<td>Ora prevista di fine ricarica</td>
</tr>
<tr>
<td rowspan="5">Stato della presa</td>
<td rowspan="5">connectorStatus</td>
<td rowspan="5">stato_ricarica</td>
<td rowspan="5">testo</td>
<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
<td>Collegata a una presa CA</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
<td>Collegata a un terminale CC</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_DISCONNECTED"</td>
<td>Disconnessa</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_FAULT"</td>
<td>Errore</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
<td>Stato indeterminato</td>
</tr>
	
		<!-- ------ -->
<!-- LAVATRICE -->
		<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LAVAVETRI</td>
</tr>
<tbody>
<tr>
<td rowspan="3">Livello lavavetri</td>
<td rowspan="3">washerFluidLevel</td>
<td rowspan="3">diagnostica</td>
<td rowspan="3">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Livello normale</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Livello basso</td>
</tr>
<tr>
<td rowspan='2'>avviso lavavetri</td>
<td rowspan='2'>al_washerFluid</td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Il livello è normale</td>
</tr>
<tr>
<td>1</td>
<td>Avviso (vedere il comando <i>washer_fluid_level</i> per ulteriori dettagli)</td>
</tr>
		
			<!-- ------ -->
<!-- BRAKE -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LIQUIDO FRENI</td>
</tr>
</tbody>
<tr>
<td rowspan="3">Livello del liquido dei freni</td>
<td rowspan="3">brakeFluidLevel</td>
<td rowspan="3">freni</td>
<td rowspan="3">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Livello normale</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Livello basso</td>
</tr>
<tr>
<td rowspan='2'>avviso liquido dei freni</td>
<td rowspan='2'>al_brake_fluid</td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Il livello è normale</td>
</tr>
<tr>
<td>1</td>
<td>Avviso (vedere il comando <i>brake_fluid_fluid_level</i> per ulteriori dettagli)</td>
</tr>
		
			<!-- ---- -->
<!-- TYRE -->
			<!-- ---- -->
<tr>
<td class="subtitle" colspan="6">PRESSIONE DEGLI PNEUMATICI</td>
</tr>
<tr>
<td rowspan="5">
pneumatico anteriore sinistro<br>
pneumatico anteriore destro<br>
pneumatico posteriore sinistro<br>
pneumatico posteriore destro
</td>
<td rowspan="5">
tyreFl<br>
tyreFr<br>
tyreRl<br>
tyreRr
</td>
<td rowspan="5">pneumatico</td>
<td rowspan="5">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Pressione normale</td>
</tr>
<tr>
<td>"VERY_LOW_PRESSURE"</td>
<td>Pressione molto bassa</td>
</tr>
<tr>
<td>"LOW_PRESSURE"</td>
<td>Pressione bassa</td>
</tr>
<tr>
<td>"HIGH_PRESSURE"</td>
<td>Pressione elevata</td>
</tr>
<tr>
<td rowspan='2'>avviso pneumatici</td>
<td rowspan='2'>al_tyre</td>
<td rowspan="2"></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Le pressioni sono nella norma</td>
</tr>
<tr>
<td>1</td>
<td>Avviso (vedere i comandi <i>tyre_*</i> per ulteriori dettagli)</td>
</tr>
		
			<!-- ------ -->
<!-- LUCI -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">ILLUMINAZIONE</td>
</tr>
<tr>
<td rowspan="3">
luce dei freni sinistra<br>
luce freno destra<br>
luce di stop centrale<br>
luce diurna sinistra<br>
luce diurna a destra<br>
fari antinebbia anteriori<br>
fari antinebbia posteriori<br>
luci di emergenza<br>
luci di posizione sinistra<br>
semaforo, strada diritta<br>
luci anabbaglianti a sinistra<br>
luci anabbaglianti a destra<br>
luce di posizione anteriore sinistra<br>
luce di posizione anteriore destra<br>
luce di posizione posteriore sinistra<br>
luce di posizione posteriore destra<br>
piastra di accensione<br>
il fuoco si sta allontanando<br>
luci laterali<br>
spia anteriore sinistra lampeggiante<br>
spia anteriore destra lampeggiante<br>
lampeggiante posteriore sinistro<br>
lampeggiante posteriore destro
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
al_turnIndicazioneRr
</td>
<td rowspan="3">avvisi</td>
<td rowspan="3">testo</td>
<td>"UNSPECIFIED"</td>
<td>Informazioni non disponibili</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nessun difetto</td>
</tr>
<tr>
<td>"FAILURE"</td>
<td>Errore</td>
</tr>
<tr>
<td rowspan="2">avviso lampade</td>
<td rowspan="2">al_light</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>Nessuna lampada difettosa</td>
</tr>
<tr>
<td>1</td>
<td>Impostazione predefinita (vedere i comandi delle luci per ulteriori dettagli)</td>
</tr>

			<!-- ------ -->
<!-- PLUGIN -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">PLUGIN</td>
</tr>
<tr>
<td>messaggi per wigget</td>
<td>msg2wigget</td>
<td></td>
<td>testo</td>
<td>json</td>
<td>Messaggi relativi al funzionamento del widget del pannello</td>
</tr>
</tbody>
</table>

# Gli endpoint delle API di Volvocars
{: .num}

Questo plugin utilizza tre API di volvocars. Ciascuna di queste API consente di accedere a endpoint che forniscono ciascuno un
insieme di informazioni. Le tabelle delle azioni e delle informazioni sopra riportate indicano quale endpoint viene fornito
le informazioni associate a ciascuno dei comandi "info" o "azione" del plugin.

Volvo limita il numero di accessi giornalieri alle API a 10'000 per chiave VCC-API. Per rispettare tale limite pur
per garantire informazioni aggiornate in tempi rapidi, il plugin non accede a tutti gli endpoint con la stessa frequenza.
La posizione del veicolo, ad esempio, viene aggiornata ogni minuto per garantire una certa reattività quando
il veicolo arriva a casa mentre il livello del liquido dei freni viene controllato solo ogni 60 minuti.

## I dispositivi terminali
{: .num}

<table class="endpoint">
<thead>
<tr>
<th rowspan=2>API</th>
<th rowspan=2>endpoint</th>
<th rowspan=2>frequenza</th>
<th colspan=3 style="text-align:center">Numero di chiamate giornaliere</th>
</tr>
<th>qualsiasi veicolo</th>
<th>motore termico</th>
<th>motore elettrico</th>
<tr>
</tr>
</thead>
<tbody>
<tr>
<td rowspan=15>Veicolo connesso</td>
<td>freni</td>
<td>60 min.</td>
<td>24</td>
</tr>
<tr>
<td>accessibilità ai comandi</td>
<td>5 min.</td>
<td>288</td>
</tr>
<tr>
<td>comandi<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>dettagli<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>diagnostica</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>porte</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>motore</td>
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
<td>combustibile</td>
<td>30 min.</td>
<td></td>
<td>48</td>
</tr>
<tr>
<td>contachilometri</td>
<td>15 min.</td>
<td>96</td>
</tr>
<tr>
<td>statistiche</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>pneumatici</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>veicoli<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>avvisi</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>Windows</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>Affitti</td>
<td>affitto</td>
<td>1 min.</td>
<td>1'440</td>
</tr>
<tr>
<td>Energia</td>
<td>stato-ricarica</td>
<td>5 min.</td>
<td></td>
<td></td>
<td>288</td>
</tr>
<tr>
<th>Totale</th>
<th></th>
<th></th>
<th>3672</th>
<th>432</th>
<th>288</th>
</tr>
</tbody>
</table>
<sup>1</sup> Endpoint chiamato durante la sincronizzazione di un account.

Ci sono quindi:
+ 4104 chiamate al giorno per un veicolo a combustione interna.
+ 3.960 chiamate al giorno per un veicolo elettrico.
+ 4392 chiamate al giorno per un veicolo ibrido.

A ciò si aggiungono le chiamate effettuate durante l'invio di un ordine, un aggiornamento o una sincronizzazione dei veicoli associati a un account.

