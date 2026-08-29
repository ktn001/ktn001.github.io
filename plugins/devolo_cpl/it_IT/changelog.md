---
layout: default
title : devolo_cpl
plugin : devolo_cpl
lang: it_IT
---

# Note di rilascio

### **11/05/2026 stabile**
+ **05/05/2026 beta** passata alla versione stabile

### 05/05/2026 beta
+ Modulo Python devolo_plc_api: aggiornamento dalla versione 1.4.1 alla 1.5.1
Questa nuova versione include la gestione dei timeout durante la connessione ai dispositivi.

### **04/05/2026 stabile**
+ **04/05/2026 beta** passata alla versione stabile

### 04/05/2026 beta
+ Alcuni miglioramenti minori, per lo più di natura estetica.

### 29/04/2026 beta
+ Correzione di un bug JS nel modal macInfos

### 27/04/2026 beta
+ Alcuni miglioramenti minori, essenzialmente di natura estetica, per i widget.

### 21/04/2026 beta
+ Nuovi comandi per le informazioni sulla velocità di trasmissione tra i dispositivi PLC

### **18/04/2026 stabile**
+ **12/04/2026 beta** passata alla versione stabile

### 12/04/2026 beta
+ Rimozione delle dipendenze da jQuery. Tuttavia, il core di Jeedom necessita ancora di jQuery per il funzionamento su dispositivi mobili.

### **25/07/2025 stabile**
+ Forzatura della versione 1.4.1 del modulo devolo_plc_api (il plugin deve essere adattato e testato per la versione 1.5.1)

### **16/03/2025 stabile**
+ Pulizia dei log

### **11/03/2025 stabile**
+ **10/03/2025 beta** passata alla versione stabile

### 10/03/2025 beta
+ Aggiornamento delle traduzioni

### 10/03/2025 beta
+ Correzione di un bug (Magic 2 LAN DINrail)

### 20/02/2025 beta
+ Aggiunta di un'opzione al plugin per nascondere le password e altri dati sensibili nei log

### **04/01/2025 stabile**
+ File di log della sincronizzazione rinominato affinché compaia nella pagina di configurazione del plugin

### **2025/01/02 stabile**
+ Correzione di un bug relativo a un messaggio di errore nei log

### **24/10/2024 stabile**
+ Eliminazione del file plugin_info/packages.json

### **23/10/2024 versione stabile**
+ **4 settembre 2024 beta** passata alla versione stabile

### 04/09/2024 beta (bis)
+ Traduzione del plugin nelle seguenti lingue:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### 04/09/2024 beta
+ Il plugin non include più versioni modificate del modulo Python devolo_plc_api. Ora viene installato il modulo non modificato
con le dipendenze in un ambiente virtuale Python.
+ Dopo l'aggiornamento del plugin, è necessario reinstallare le dipendenze
+ Questa versione è compatibile con Debian 12

### 05/10/2023 beta
+ Aggiunta di una gestione delle eccezioni nel daemon.
Questa aggiunta potrebbe causare molti messaggi di errore. Attendo i vostri riscontri in merito.

### 19/09/2023 versione beta
+ L'elenco dei dispositivi connessi al Wi-Fi viene aggiornato ogni 15 secondi (in precedenza ogni minuto)

### **29/08/2023 versione stabile**
+ In alcuni casi il monitoraggio "offline" non era disattivato

### **25/08/2023 stabile**
+ Correzione di un bug che generava messaggi in `http.error`.

### **20/08/2023 versione stabile**
+ **15/08/2023 beta** passata alla versione stabile

### 15 agosto 2023 beta
+ Nuovo plugin: livello 13
  + Attivazione degli avvisi `offline` su tutti i dispositivi del plugin.
  + Aggiunta di un comando di tipo info `online` su tutte le apparecchiature esistenti.
+ Nuova opzione per (dis)attivare gli avvisi quando un dispositivo è offline.

### **14/07/2023 stabile**
+ devolo_plv_api
  + Aggiunta la versione 1.3.2 che risolve un potenziale problema di perdita di memoria
  + Rimozione della versione 1.1.0
  + Rimozione della versione 1.2.0
+ Nuovo plugin: livello 12
  + Attivazione di devolo_plc_api 1.3.2

### **14/06/2023 stabile**
+ **13/06/2023 beta** passata alla versione stabile

### 13/06/2023 beta
+ Correzione di un bug nel widget dashboard/action/j_h_m

### 11/06/2023 beta
+ Il widget mobile per la configurazione del tempo di attivazione di WifiGuest consente di modificare il valore.

### 9 giugno 2023 beta
+ Nuovo plugin: livello 11
  + Nuovi widget per il tempo rimanente prima dello spegnimento del Wi-Fi per gli ospiti.
    + La durata di attivazione del Wi-Fi per gli ospiti non può ancora essere modificata tramite il
widget per dispositivi mobili.

### 26/05/2023 beta
+ Nuovo plugin: livello 10.
  + Configurazione per l'utilizzo della versione 1.3.1 di devolo_plc_api
  + Creazione dei comandi per la gestione del Wi-Fi per gli ospiti
    + Il comando `durata guest` (logicalId *guest_duration*) consente di definire il tempo, in minuti, dopo
in cui la rete Wi-Fi per gli ospiti verrà disattivata. Il valore 0 indica che la rete Wi-Fi non deve essere disattivata.
+ Ottimizzazione dello script di sincronizzazione
+ I log delle sincronizzazioni non si trovano più in "devolo_cpl_out" ma in "devolo_synchronize"

### **23/05/2023 versione stabile**
+ **23/04/2023 beta** passata alla versione stabile

### 23/04/2023 beta
+ Versione minima di Protobuf: 4.21.12
  + Dopo l'aggiornamento, è necessario reinstallare le dipendenze

### 18/04/2023 beta
+ Nuovo plugin: livello 9.
  + Configurazione per l'utilizzo della versione 1.3.0 di devolo_plc_api
+ Limitazione della lunghezza dei nomi degli indirizzi MAC a 30 caratteri
+ Aggiunta della versione 1.3.0 del modulo devolo_plc_api (le versioni 1.1.0 e 1.2.0 sono ancora disponibili)

### 17/04/2023 beta
+ Nuovo plugin, livello: 8.
  + Creazione di una tabella `devolo_connection` per registrare la cronologia delle
connessioni Wi-Fi.
  + Creazione di una tabella `devolo_macinfo` per le configurazioni degli indirizzi MAC.
+ Registrazione della cronologia delle connessioni dei clienti Wi-Fi
+ Nuova scheda nel pannello per i grafici relativi alla cronologia delle connessioni Wi-Fi.
  
### 15/04/2023 beta
+ Correzione della visualizzazione delle immagini dei dispositivi.

### 14/04/2023 beta
+ Aggiunta del modulo *requests* nelle dipendenze.

### 9 marzo 2023 beta
+ Nuovo plugin: livello 7.
  + Attivazione del pannello
 
+ Configurazione del plugin
  + Una nuova opzione consente di impostare se visualizzare i nomi dei dispositivi
nelle tabelle e nei grafici devono essere visualizzati con o senza i nomi degli oggetti:
     + `[<nome_oggetto>][<nome_apparecchio>]`
     + `<nome_dispositivo>`
  + Il plugin ora contiene un *pannello*. Questo *pannello* può essere attivato o disattivato
nella pagina di configurazione del plugin.
  + Interfaccia
    + Nuovo *pannello* per la visualizzazione dei grafici relativi alla velocità di trasmissione tra i dispositivi PLC.

### 4 marzo 2023 beta
+ Nuovo plugin: livello 6.
  + Classificazione dei comandi delle apparecchiature esistenti.
  + Creazione di tre comandi per le versioni e la disponibilità del firmware per
gli impianti esistenti.

+ Funzionalità
  + Aggiornamento delle versioni del firmware e informazioni sulla disponibilità di eventuali aggiornamenti.

+ Interfaccia
  + Modifica della visualizzazione dei nomi dei dispositivi nella tabella delle portate.
  + Miglioramento della gestione degli ordini in caso di cambio di modello di un
apparecchiature.

+ codice
  + Miglioramento.
  + Correzioni di bug.
  + Eliminazione dei file non necessari.
  + Gli indirizzi MAC dei dispositivi vengono registrati sin dalla prima sincronizzazione.

### 24/02/2023 beta
+ Nuovo plugin: livello 5.
   + (Ri)creazione della tabella delle portate.

+ Disinstallazione
   + La tabella delle portate non viene più eliminata.

+ Correzione di un bug
   + La tabella delle portate è stata rimossa al momento della disattivazione del plugin.

### 22/02/2023 versione beta

+ Aggiornamento o installazione:
   + Nuovo plugin Livello: 4.
   + La conservazione dei dati sul traffico è impostata inizialmente su una settimana.
   + La tabella per la registrazione delle portate è stata creata nel database.

+ Disinstallazione
   + Eliminazione della tabella delle velocità PLC.

+ Configurazione delle apparecchiature
   + nuova impostazione `Rete`.

+ Interfaccia:
   + Tabella riassuntiva delle portate.

### 18/02/2023 beta

+ dipendenze:
   + Aggiunta del modulo Python *importlib-metadata*
> :bulb: L'installazione delle dipendenze deve essere riavviata dopo l'aggiornamento del plugin.

+ modulo devolo_plc_api:
   + Aggiornamento alla versione 1.2.0
   + La versione 1.2.0 è una versione modificata per garantire la compatibilità con Python 3.7.
   + Un'opzione nella pagina di configurazione del plugin consente di tornare alla versione 1.1.0 in caso di necessità.
   + Se dovete tornare alla versione 1.1.0, vi preghiamo di aprire una discussione sul forum Jeedom.

### 14/02/2023 beta bis
+ Indicazione delle versioni dei moduli dipendenti.

### 14/02/2023 beta
+ Posizione dei dispositivi.
+ Alcune correzioni di bug.

### 12/02/2023 beta
+ Distinzione tra dispositivi *gestibili* e *non gestibili*.
+ Aggiunta dei modelli DL550 e DL1200 senza Wi-Fi e non gestibili.
+ Aggiunta dell'indirizzo MAC nelle impostazioni dei dispositivi.
+ Alcune correzioni di bug.

### 8 febbraio 2023 beta
+ Aggiunta della registrazione per l'analisi degli errori durante il rilevamento dei DL550.

### 7 febbraio 2023 beta
+ Correzione di un bug nella selezione del Paese.

### 7 febbraio 2023 beta
Prima versione per
+ Confermare il rilevamento automatico dei dispositivi.
+ Conferma le immagini.
+ Confermare l'invio del comando per accendere o spegnere i LED dei dispositivi.
