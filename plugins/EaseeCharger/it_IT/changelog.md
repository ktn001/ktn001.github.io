---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: it_IT
---
# Note di rilascio

**IMPORTANTE**

Ricordiamo che, se non sono disponibili informazioni sull'aggiornamento, significa che esso riguarda esclusivamente
aggiornamento della documentazione, traduzione o testo.

### 13/11/2026
+ Le funzioni di gestione dei token sono state riviste e aggiornate (nessuna modifica per
(l'utente).
+ Il daemon è stato riscritto. Non utilizza più il modulo *signalrcore*, ma *pyeasee*. Una
Si prevede un miglioramento della stabilità.
+ Il nome del file di log del daemon non è più *EaseeCharger_daemon.out* ma *EaseeCharger_daemon*
+ I logicalId degli ordini con le informazioni provenienti dal cloud sono stati modificati. Il logicalId è
ora l'ID dell'osservazione recuperato dal cloud tramite SignalR.
+ Le informazioni provenienti dal cloud il cui valore è un codice vengono duplicate:
  +  Un comando con il codice numerico recuperato dal cloud
  +  Un comando con testo in chiaro. Questo testo viene tradotto nella lingua dell'interfaccia Jeedom.

### 17/01/2025
+ Passaggio dalla versione beta del 12/01/2025 alla versione stabile

### 12/01/2025 (Beta)
+ Miglioramento della comunicazione tra Daemon e Jeedom
+ Correzione della memorizzazione del token nella cache

### 12/01/2025 (Beta)
+ Correzione di un bug
 
### 31/12/2024 (Beta)
+ Riscrittura di gran parte del codice
+ È richiesta la versione 4.4.9 o superiore di Core
+ Compatibile con Debian 12
+ Non utilizza più la funzione jQuery

### 11/11/2024
+ Correzione di un bug nell'installazione delle dipendenze

### 09/11/2024
+ Il daemon viene eseguito in un ambiente Python (venv)

### 28/07/2024
+ Passaggio alla versione stabile dalle precedenti versioni beta
+ Aggiornamento dei comandi durante l'aggiornamento del plugin

### 28/07/24 (Beta)
+ Riorganizzazione della creazione e dell'aggiornamento degli ordini.
Si consiglia di aggiornare i comandi tramite il pulsante `Aggiorna i comandi` sulla
pagina dei comandi di ciascun caricatore

### 26/07/2024 (Beta)
+ Correzione dei widget
+ Riorganizzazione della pagina degli ordini

### 24/07/2024
+ Configurazione di un heartbeat all'attivazione del plugin

### 1/7/2023
+ Modifica dell'URL per le API Easee

### 17/10/2022
+ Informazioni che indicano se la comunicazione con il cloud avviene tramite Wi-Fi o rete cellulare

### 14/10/2022
* Passaggio alla versione stabile
* Trasparenza delle tessere del widget per rendere visibile il grafico di sfondo
* Pulsanti sul widget delle apparecchiature per mettere in pausa/riprendere la riproduzione

### 30/09/2022 (Beta)
* La porta del demone non viene più reimpostata al valore predefinito all'attivazione del plugin
* Una classe è stata rinominata nel codice PHP
* Informazioni sulla qualità dei segnali Wi-Fi e di rete mobile
* Creazione di un widget per i dispositivi EaseeCharger (senza il pulsante di pausa della
carico)

### 24/08/2022 (Beta)
* La porta del demone non viene più reimpostata al valore predefinito all'attivazione del plugin

### 21/08/2022 (Beta)
* Aggiunta di un contatore dei riavvii da parte del watcher.

### 21/08/2022 (Beta)
* Aggiunta di un watcher per riavviare le connessioni del daemon in caso di disconnessione non segnalata.

### 18/08/2022 (Beta)
* Prima pubblicazione
