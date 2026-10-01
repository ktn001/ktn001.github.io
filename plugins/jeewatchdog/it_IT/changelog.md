---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: it_IT
---

# Note di rilascio

### 01/10/2026 BETA
+ Riscrittura del codice di configurazione di Shelly
  + Si passa da un metodo *brutale*, che ridefiniva tutto, a un metodo *raffinato*, che ridefinisce solo ciò che deve essere modificato.
+ Shelly viene (ri)configurato automaticamente dopo ogni salvataggio dell'apparecchiatura Jeedom.
+ Il pulsante <**Configura l'interruttore**> viene rinominato <**Forza la configurazione dell'interruttore**>. Il colore passa dal verde all'arancione.
+ Il cron del kick viene attivato/disattivato tramite eqLogic.
+ Shelly viene disattivato automaticamente prima della rimozione di un dispositivo

### **21/09/2026 STABILE**
+ La versione beta del 17/09/2026 è passata allo stato stabile.

### 17/09/2026 BETA
+ Aggiunta di un pulsante nella pagina di configurazione del dispositivo per aprire una nuova scheda nella pagina di amministrazione di Shelly.
+ **Sperimentale:** Aggiunto il supporto per *Shelly Power Strip*.

### 15/09/2026 BETA
+ Prima versione.
