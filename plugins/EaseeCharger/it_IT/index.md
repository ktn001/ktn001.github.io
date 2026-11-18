---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : it_IT

img01: 01_plugin_configuration.png
img02: 02_icone_creation_compte.png
img03: 03_saisie_login_password.png
img04: 04_icone_creation_chargeur.png
img05: 05_saisie_nom_chargeur.png
img06: 06_parametrage_chargeur.png
img07: 07_btn_reconfig_cmds.png
img08: 08_etat_0.png
img09: 09_etat_1.png
img10: 10_etat_2.png
img11: 11_etat_3.png
img12: 12_etat_4.png
img13: 13_etat_5.png
img14: 14_widget_etat_option_notext.png
img15: 15_etat_5_notext.png
img16: 16_widget_lock_0_d_bw.png
img17: 17_widget_lock_0_d_color.png
img18: 18_widget_lock_0_l_bw.png
img19: 19_widget_lock_0_l_color.png
img20: 20_widget_lock_1_d_bw.png
img21: 21_widget_lock_1_d_color.png
img22: 22_widget_lock_1_l_bw.png
img23: 23_widget_lock_1_l_color.png
img24: 24_widget_lock_2_d_bw.png
img25: 25_widget_lock_2_d_color.png
img26: 26_widget_lock_2_l_bw.png
img27: 27_widget_lock_2_l_color.png
img28: 28_widget_lock_3_d_bw.png
img29: 29_widget_lock_3_d_color.png
img30: 30_widget_lock_3_l_bw.png
img31: 31_widget_lock_3_l_color.png
img32: 32_btn_continue.png
img33: 33_btn_pause.png

action: action
info: info
other: other
binary: binary
numeric: numeric
---

# Plugin "EaseeCharger" per Jeedom

Il plugin **EaseeCharger** consente di integrare i caricabatterie `Easee` per veicoli elettrici in
un'istanza di Jeedom.

Maggiori informazioni sui caricabatterie `Easee` sono disponibili sul sito [Easee](https://easee.com)

# Installazione e configurazione del plugin
{: .num}
{% include image.html img=page.img01 %}

## Installazione del plugin
{: .num}

Il plugin si installa in modo standard dal market di Jeedom. Una volta installato, è necessario
attivarla e quindi avviare l'installazione dei pacchetti dipendenti.

## Configurazione del plugin
{: .num}

**Demone**
: Configurazioni del demone:
    + ***Porta***
: Numero della porta TCP utilizzata per la comunicazione tra Jeedom e il demone. La porta 34739 è
configurato di default, è possibile impostare un'altra porta in caso di conflitto con un altro plugin o
software che utilizza la stessa porta.

    + ***Debug esteso***
: Il modulo Python del daemon che garantisce la comunicazione con il cloud Easee invia dei "ping"
ogni 5 secondi per mantenere la connessione. Ogni "ping", e le relative risposte, generano 5
messaggi di log di livello `debug`. Questi messaggi di log vengono eliminati quando è attiva l'opzione **Debug**
estesa** non è attivata.

**Sicurezza**
: + ***Log non protetto***
: I dati sensibili (password, token, ecc.) vengono sostituiti nei log con
`********`. L'opzione "**Log non protetto**" disattiva la sostituzione e lascia i dati
dati sensibili in chiaro nei log.

## Configurazione dell'heartbeat
{: .num}

A volte il flusso di dati proveniente dal cloud Easse viene interrotto senza che la connessione
non venga interrotta. Il daemon non rileva questo tipo di situazione e quindi non è in grado di gestirla.

Per ovviare a questo problema, all'attivazione del
plugin. Il daemon viene riavviato automaticamente tramite heartbeat quando il daemon non ha inviato alcun segnale
dei dati in Jeedom da oltre 15 minuti.

# Gli account
{: .num}

Un account consente di accedere al cloud Easee per gestire uno o più caricabatterie. È necessario disporre di un account
dichiarato nel plugin prima di poter creare un dispositivo di ricarica che verrà gestito tramite questo account.

## Creazione di un account
{: .num}

1. Nella pagina di gestione del plugin, clicca sull'icona per la creazione di un account:\
{% include image.html img=page.img02 %}

1. Inserire il nome dell'account, il nome utente e la password per accedere al cloud e attivare l'account\
{% include image.html img=page.img03 %}

1. Fare clic su `Conferma`.
  > :bulb: Il nome utente e la password vengono verificati al momento della registrazione solo se l'account è
attivata.

## Funzionamento degli account
{: .num}

### Eliminazione di un account
{: .num}

Un account non può essere eliminato se è utilizzato da almeno un caricatore.

### Modifica delle credenziali di accesso o della password
{: .num}

Viene creato un nuovo token, che viene automaticamente trasmesso al daemon.

# I caricabatterie
{: .num}

## Creazione di un caricabatterie
{: .num}

> :bulb: È necessario aver creato un account prima di poter creare un caricatore

1. Nella pagina di gestione del plugin, clicca sull'icona per creare un caricatore:\
{% include image.html img=page.img04 %}

1. Inserire il nome del caricabatterie\
{% include image.html img=page.img05 %}

1. Configurazione del caricabatterie\
Un caricabatterie è un dispositivo Jeedom. Oltre alle opzioni di base (nome, oggetto, categoria, opzione)
Per le apparecchiature, è necessario definire le seguenti configurazioni:

{% include image.html img=page.img06 %}

   + **Account**\
L'account da utilizzare per comunicare con il server Easee.

   + **Numero di serie**\
Il numero di serie così come deve essere inserito, ad esempio, nell'app Easee per smartphone.

   + **Widget personalizzato**\
Non utilizzare il widget standard di Jeedom, ma il widget specifico per i dispositivi
EaseeCharger.

   + **Colore**\
Colore del caricatore. Consente di definire l'immagine del caricatore.

1. Fare clic su `Conferma`.

## I comandi
{: .num}

I caricatori vengono creati con i seguenti comandi:

| Nome | Tipo | Sottotipo | Descrizione |
| --- | ---- | --------- | ----------- |
| aggiorna | {{page.action}} | {{page.other}} | Aggiorna tutte le informazioni |
| Metti in pausa | {{page.action}} | {{page.other}} | Mette in pausa la ricarica |
| Pausa OFF | {{page.action}} | {{page.other}} | Riavvia la ricarica |
| In pausa | {{page.info}} | {{page.binary}} | Indica se il carico è in pausa |
| Blocco permanente ON | {{page.action}} | {{page.other}} | Attivazione del blocco permanente |
| Blocco permanente OFF| {{page.action}} | {{page.other}} | Disattivazione del blocco permanente |
| Stato di blocco | {{page.info}} | {{page.numeric}} | codice che indica se il cavo è bloccato e se lo è in modo permanente |
| Connesso | {{page.info}} | {{page.binary}} | Veicolo connesso |

Altri comandi di tipo *infos* verranno creati al momento della ricezione dei dati dal cloud tramite il
daemon. I comandi così creati saranno visibili, con una descrizione, nella scheda
**Comandi** per la configurazione del caricabatterie. Il logicalId di questi comandi è l'identificatore
dati digitali ricevuti dal cloud.

il valore di alcuni di questi comandi è un codice a cui corrispondono diversi stati. Per questi
informazioni, viene creato un secondo comando con il logicalId **`<id>::txt`**. Il valore di questo
Il secondo comando sarà un testo corrispondente allo stato.


+ Il pulsante {% include image.html img=page.img07 %} riconfigura i comandi con i valori predefiniti
impostazione predefinita.
{: .hide}

## I widget
{: .num}

### Stato del caricabatterie
{: .num}

Il widget predefinito per lo stato del caricabatterie mostra le seguenti sei situazioni:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img10 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

Le opzioni facoltative **notext: 1** e **noimage: 1** consentono di nascondere la visualizzazione del
testo e immagine:

{% include image.html img=page.img14 %}

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
{% include image.html img=page.img17 %}
{% include image.html img=page.img19 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img16 %}
{% include image.html img=page.img18 %}
</td>
</tr>
    <tr>
<td>sì</td>
<td>no</td>
      <td style="text-align:center">
{% include image.html img=page.img21 %}
{% include image.html img=page.img23 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img20 %}
{% include image.html img=page.img22 %}
</td>
</tr>
    <tr>
<td>no</td>
<td>sì</td>
      <td style="text-align:center">
{% include image.html img=page.img25 %}
{% include image.html img=page.img27 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img24 %}
{% include image.html img=page.img26 %}
</td>
</tr>
    <tr>
<td>sì</td>
<td>sì</td>
      <td style="text-align:center">
{% include image.html img=page.img29 %}
{% include image.html img=page.img31 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img28 %}
{% include image.html img=page.img30 %}
</td>
</tr>
</tbody>
</table>

### Sospensione della ricarica
{: .num}

{% include image.html img=page.img33 %}: Messa in pausa durante la ricarica

{% include image.html img=page.img32 %}: Riprendere un carico che è stato messo in pausa
