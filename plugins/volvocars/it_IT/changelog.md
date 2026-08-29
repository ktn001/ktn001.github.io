---
layout: default
title : Volvocars
plugin : volvocars
lang: it_IT
---

# Note di rilascio

### **2026/06/12**
+ Risoluzione di un errore di avvviso in PHP 8. Grazie @bernard-dandrea

### **2026/03/26**
+ Passaggio alla versione stabile della versione beta del 24/03/2026

### 2026/03/24
+ Visualizzazione di CollectDate e valueDate al passaggio del mouse sui comandi "info" del widget per il pannello

### **2026/03/23**
+ Modifica del flusso delle API di connessione a seguito di una modifica da parte di Volvo

### **2026/03/19**
+ Passaggio alla versione stabile della versione beta dell'11/03/2026

### 11/03/2026 beta
+ Visualizzazione di CollectDate e valueDate al passaggio del mouse sui comandi "info" del widget per la dashboard

### **2026/03/10**
+  Passaggio dall'API "energy" dalla versione V1 alla versione V2

### 2025/03/24
+ Correzione della configurazione e creazione del comando 'timeToRun'

### 2025/03/23
+ Tentativo di correzione di un bug all'avvio del motore termico.

### 2025/03/22
+ Aggiunta di tre comandi per avviare/spegnere il motore termico.
  + *engineStart* per avviare.
  + *engineStop* per arrestare.
  + *timeToRun* per impostare la durata di funzionamento (da 1 a 15 minuti).

+ Questi comandi vengono creati solo se l'endpoint *commands* restituisce **ENGINE_START** e **ENGINE_STOP**
+ **Dopo l'aggiornamento del plugin è necessario avviare una sincronizzazione per creare questi comandi**

**La mia Volvo è al 100% elettrica. Non ho quindi avuto modo di provare questi comandi. Attendo i vostri commenti.**

### **2024/11/28**
+ Passaggio alla versione stabile dalla versione beta del 26/11/2024

### 2024/11/26
+ Correzione per i veicoli senza tetto apribile:
  + I comandi `roofState`, `roofOpen` e `roofClosed` di un veicolo verranno rimossi durante l'aggiornamento del plugin se
il valore del comando `roofState` non è **CLOSED**, **OPEN** o **AJAR**.

### **2024/11/16** 
+ Passaggio alla versione stabile dalla versione beta del 13/11/2024

### 13/11/2024 beta
+ Correzioni di bug
+ Creazione dei comandi **allDoorsClosed** e **allWinsClosed**.
   + Questi due comandi vengono aggiunti automaticamente ai veicoli esistenti al momento dell'aggiornamento del plugin.
+ Widget per le dashboard

### **2024/11/06**
+ Aggiunta di un parametro di configurazione del plugin per la chiave personale di accesso alle API di Volvocars.
**ATTENZIONE** È necessario generare una chiave sul sito developers.volvocars. La procedura non è ancora descritta nella documentazione
Per quanto riguarda il plugin, vi invito a consultare questo [argomento sulla Community](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
per creare la propria chiave.

### **2024/11/05** 
* Correzione di un bug che impediva la registrazione del token del primo account

### **2024/11/04** 
+ Passaggio alla versione stabile della versione beta del 4 novembre 2024

### 04/11/2024 beta
+ Implementazione dell'autenticazione a due fattori per gli account Volvocars
**ATTENZIONE:**
È necessario modificare e salvare gli account per avviare l'autenticazione a due fattori.

### **2024/10/15**
+ Correzione di un bug nel pannello relativo ai veicoli con motore a combustione interna.

### **2024/10/10**
+ Passaggio alla versione stabile dalla versione beta del 09/10/2024

### 09/10/2024 beta (bis)
+ Aggiunta di un'opzione **visibile sul pannello** nella configurazione dei veicoli

### 09/10/2024 beta
+ I comandi collegati direttamente a un endpoint non possono essere eliminati. Verrebbero ricreati
automaticamente alla ricezione di un'informazione trasmessa tramite un endpoint.
+ Correzione di un bug nell'ordinamento degli ordini

### 08/10/2024 beta
+ Prima versione beta ufficiale
