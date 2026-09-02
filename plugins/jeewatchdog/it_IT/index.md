---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: it_IT
img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
img05: 05_configure_Wifi.png
img06: 06_configure_Wifi_static.png
img07: 07_menu_authentication.png
img08: 08_set_passord.png
---
# Plugin {{page.plugin}} ({{page.pluginId}}) per Jeedom

Il plugin {{page.plugin}} gestisce un dispositivo esterno che deve ricevere regolarmente un segnale di funzionamento
di Jeedom. Se per un certo periodo non viene rilevato alcun segnale di attività, l'apparecchiatura esterna si spegne
spegnere Jeedom per alcuni secondi per forzare un riavvio.

È prevista una modalità `manutenzione` per evitare un'interruzione dell'alimentazione quando un
È prevista un'indisponibilità di Jeedom.

# Apparecchiature esterne
{: .num}

Per il momento, sono disponibili solo i dispositivi basati su [**Shelly plus
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (il supporto di [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) è prevista a breve)

## Schema di cablaggio dell'apparecchiatura
{: .num}

Il dispositivo di monitoraggio può essere configurato per interrompere l'alimentazione USB o a 220 V~

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

Ho realizzato un impianto con i seguenti componenti:
* [Due porte USB-C](https://de.aliexpress.com/item/1005009033490471.html)
* [Un interruttore](https://de.aliexpress.com/item/1005012383637177.html)
* [Una presa da 220 V](https://de.aliexpress.com/item/1005012625139658.html)
* [Un cavo da 220 V](https://de.aliexpress.com/item/1005011606233857.html)
* [Un dispositivo](https://de.aliexpress.com/item/1005006900224809.html) (modello 58-80-26)
* Uno Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Preconfigurazione di Shelly
{: .num}

Una volta completato il cablaggio, è possibile alimentare lo Shelly e configurare un indirizzo IP fisso e
imposta una password (la password non è obbligatoria ma è vivamente consigliata). Il resto della
La configurazione verrà effettuata dal plugin {{page.plugin}}

> :bulb: Non alimentare Jeedom tramite questo dispositivo prima di aver completato la configurazione di
> le apparecchiature nel plugin

### Configurazione del Wi-Fi
{: .num}

Per configurare il WiFi di Shelly, è necessario
1. Accenderlo.
1. Connettersi al proprio access point (SSID: "Shelly...-...")
1. Apri la pagina WBhttp://192.168.33.1
1. Fare clic su `Impostazioni` nel menu a sinistra
1. Fare clic su `Wi-Fi` nella parte centrale della pagina
1. Nel pannello `Impostazioni Wi-Fi 1`
   * Selezionare la rete Wi-Fi e inserire la password

{% include image.html img=page.img05 %}

   * Se non si dispone di un DHCP con un indirizzo IP riservato per lo Shelly
      + Selezionare `IP statico`
      + Inserire le informazioni di configurazione di rete

{% include image.html img=page.img06 %}

1. Fare clic su "Salva impostazioni"

**È possibile riconnettersi alla rete Wi-Fi.**

### Configurazione della password di amministratore
1. Apri la pagina web al nuovo indirizzo di Shelly
1. Fare clic su `Impostazioni` nel menu a sinistra
1. Fare clic su `Autenticazione` nella parte centrale della pagina (sotto **Impostazioni dispositivo**)

{% include image.html img=page.img07 %}
1. Selezionare `Abilita protezione con password del dispositivo`
1. Inserisci una password

{% include image.html img=page.img08 %}
1. Fare clic su `Salva impostazioni`

# Configurazione del plugin
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
