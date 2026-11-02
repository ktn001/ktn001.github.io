---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : it_IT
---

# Plugin "EaseeCharger" per Jeedom

Il plugin **EaseeCharger** consente di integrare i caricabatterie `Easee` per veicoli elettrici in un'istanza Jeedom.

Maggiori informazioni sui caricabatterie `Easee` sono disponibili sul sito [Easee](https://easee.com)

# Installazione e configurazione del plugin
{: .num}
{% include image.html img="plugin_configuration.png" %}

## Installazione del plugin
{: .num}

Il plugin si installa in modo standard dal market di Jeedom. Dopo averlo installato, è necessario attivarlo e quindi avviare l'installazione delle dipendenze.

## Configurazione del plugin
{: .num}

**Demone**
: Configurazioni del demone:
    + ***Porta***
: Numero della porta TCP utilizzata per la comunicazione tra Jeedom e il demone. La porta 34739 è configurata di default; è possibile impostare un'altra porta in caso di conflitto con un altro plugin o software che utilizza la stessa porta.

    + ***Debug esteso***
: Il modulo Python del daemon che gestisce la comunicazione con il cloud Easee invia dei "ping" ogni 5 secondi per mantenere la connessione. Ogni "ping", e le relative risposte, generano 5 messaggi di log di livello `debug`. Questi messaggi di log vengono eliminati quando l'opzione **Debug esteso** non è attivata.

**Sicurezza**
: + ***Log non protetto***
: I dati sensibili (password, token, ecc.) vengono sostituiti nei log con `********`. L'opzione "**Log non protetto**" disattiva la sostituzione e lascia i dati sensibili in chiaro nei log.

## Configurazione dell'heartbeat
{: .num}

A volte il flusso di dati proveniente dal cloud Easse viene interrotto senza che la connessione
non venga interrotta. Il daemon non rileva questo tipo di situazione e quindi non è in grado di gestirla.

Per ovviare a questo problema, all'attivazione del plugin viene configurato automaticamente un heartbeat. Il daemon viene riavviato
automaticamente tramite l'heartbeat quando il daemon non ha inviato dati a Jeedom da più di 15 minuti.

# Gli account
{: .num}

Un account consente di accedere al cloud Easee per gestire uno o più caricabatterie. È necessario registrare un account nel plugin prima di poter creare un dispositivo caricabatterie che verrà gestito tramite tale account.

## Creazione di un account
{: .num}

1. Nella pagina di gestione del plugin, clicca sull'icona per la creazione di un account:\
{% include image.html img="icone_creation_compte.png" %}

1. Inserire il nome dell'account\
{% include image.html img="inserimento_nome_account.png" %}\
  > :bulb: Una volta registrato, il nome dell'account non può più essere modificato.

1. Inserire nome utente e password per accedere al cloud e attivare l'account\
{% include image.html img="saisie_login_password.png" %}

1. Fare clic su `Conferma`.\
  > :bulb: Il nome utente e la password vengono verificati al momento della registrazione solo se l'account è attivato.

## Funzionamento degli account
{: .num}

### Disattivazione di un account
{: .num}

Quando un account viene disattivato, vengono disattivati anche tutti i caricabatterie che utilizzano quell'account per comunicare con il server Easee. I caricabatterie devono essere riattivati manualmente una volta riattivato l'account.

### Eliminazione di un account
{: .num}

Un account non può essere eliminato se è utilizzato da almeno un caricatore.

### Modifica delle credenziali di accesso o della password
{: .num}

Il demone non riceve alcuna notifica quando vengono modificati il nome utente o la password di un account. È quindi necessario riavviare il demone ogni volta che il nome utente o la password vengono modificati.

# I caricabatterie
{: .num}

## Creazione di un caricabatterie
{: .num}

> :bulb: È necessario aver creato un account prima di poter creare un caricatore

1. Nella pagina di gestione del plugin, clicca sull'icona per creare un caricatore:\
{% include image.html img="icone_creation_chargeur.png" %}

1. Inserire il nome del caricabatterie\
{% include image.html img="inserimento_nome_caricatore.png" %}

1. Configurazione del caricabatterie\
Un caricabatterie è un dispositivo Jeedom. Oltre alle opzioni di base (nome, oggetto, categoria, opzione) dei dispositivi, è necessario definire le seguenti configurazioni:

{% include image.html img="configurazione_caricatore.png" %}

   + **Account**\
L'account da utilizzare per comunicare con il server Easee

   + **Numero di serie**\
Il numero di serie così come deve essere inserito, ad esempio, nell'app Easee per smartphone.

   + **Widget personalizzato**\
Non utilizzare il widget standard di Jeedom, ma il widget specifico per i dispositivi EaseeCharger.

   + **Colore**\
Colore del caricatore. Consente di impostare l'icona del caricatore.

1. Fare clic su `Conferma`.

## Il widget personalizzato


## I comandi
{: .num}

I caricatori vengono creati con i seguenti comandi:

| Nome | Tipo | Sottotipo | Descrizione |
| --- | ---- | --------- | ----------- |
| Stato | info | numeric | Stato del caricabatterie:<br>&nbsp;1: scollegato<br>&nbsp;2: In attesa<br>&nbsp;3: In carica<br>&nbsp;4: Carica completata<br>&nbsp;5: Pronto |
| Pausa ON | azione | altro | Mette in pausa il carico |
| Pausa OFF | azione | altro | Riavvia la ricarica |
| In pausa | info | binary | Il caricamento è in pausa |
| Cavo bloccato in modo permanente | info | binary | Il blocco permanente del cavo è attivato |
| Cavo bloccato | info | binary | Il cavo è bloccato |
| Stato di blocco | info | numerico | Combinazione di *Cavo bloccato in modo permanente* e *Cavo bloccato* per il widget |
| Blocco permanente ON | azione | altro | Attivazione del blocco permanente |
| Blocco permanente OFF | azione | altro | Disattivazione del blocco permanente |
| Connesso | info | binario | Veicolo connesso |
| Potenza | info | numeric | Potenza del carico attuale |
| Corrente fase 1 | info | numerico | Corrente fase 1 |
| Corrente fase 2 | info | numerico | Corrente fase 2 |
| Corrente fase 3 | info | numerico | Corrente fase 3 |
| Tensione fase 1 | info | numerico | Tensione fase 1 |
| Tensione fase 2 | info | numerico | Tensione fase 2 |
| Tensione fase 3 | info | numerico | Tensione fase 3 |
| Segnale Wi-Fi | info | numerico | Potenza del segnale Wi-Fi (0 se la comunicazione avviene tramite rete cellulare) |
| Segnale cellulare | info | numeric | Potenza del segnale cellulare (0 se la comunicazione avviene tramite rete Wi-Fi) |

+ Il pulsante {% include image.html img="btn_creer_cmds.png" %} consente di ricreare i comandi che sono stati eliminati.
+ Il pulsante {% include image.html img="btn_reconfig_cmds.png" %} riconfigura i comandi con i valori predefiniti.

## I widget
{: .num}

### Stato del caricabatterie
{: .num}

Il widget predefinito per lo stato del server mostra le sei seguenti situazioni:

{% include image.html img="etat_0.png" %}
{% include image.html img="etat_1.png" %}
{% include image.html img="etat_2.png" %}
{% include image.html img="etat_3.png" %}
{% include image.html img="etat_4.png" %}
{% include image.html img="etat_5.png" %}

Le opzioni facoltative **notext: 1** e **noimage: 1** consentono di nascondere la visualizzazione del testo e dell'immagine:

{% include image.html img="widget_etat_option_notext.png" %}

fornisce

{% include image.html img="etat_5_notext.png" %}

### Blocco del cavo
{: .num}

Il widget di blocco del cavo consente di attivare o disattivare il blocco permanente e indica se il cavo è bloccato e se il blocco permanente è attivo.

La tabella seguente mostra le diverse icone in base allo stato del blocco e al tema dell'interfaccia web:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
<th colspan="2" style="text-align:center">Icone colorate</th>
</tr>
    <tr>
<th style="text-align:center">sì</th>
<th style="text-align:center">no</th>
</tr>
</thead>
  <tbody>
    <tr>
<td>no</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_color.png" %}
{% include image.html img="widget_lock_0_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_bw.png" %}
{% include image.html img="widget_lock_0_l_bw.png" %}
</td>
</tr>
    <tr>
<td>sì</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_color.png" %}
{% include image.html img="widget_lock_1_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_bw.png" %}
{% include image.html img="widget_lock_1_l_bw.png" %}
</td>
</tr>
    <tr>
<td>no</td>
<td>sì</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_color.png" %}
{% include image.html img="widget_lock_2_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_bw.png" %}
{% include image.html img="widget_lock_2_l_bw.png" %}
</td>
</tr>
    <tr>
<td>sì</td>
<td>sì</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_color.png" %}
{% include image.html img="widget_lock_3_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_bw.png" %}
{% include image.html img="widget_lock_3_l_bw.png" %}
</td>
</tr>
</tbody>
</table>

### Sospensione della ricarica
{: .num}

{% include image.html img="btn_pause.png" %}: Metti in pausa la ricarica

{% include image.html img="btn_continue.png" %}: Riprendere un carico che è stato messo in pausa
