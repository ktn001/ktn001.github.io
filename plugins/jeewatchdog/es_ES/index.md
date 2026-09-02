---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: es_ES
img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
img05: 05_configure_Wifi.png
img06: 06_configure_Wifi_static.png
img07: 07_menu_authentication.png
img08: 08_set_passord.png
---
# Complemento {{page.plugin}} ({{page.pluginId}}) para Jeedom

El complemento {{page.plugin}} gestiona un dispositivo externo que debe recibir periódicamente una señal de funcionamiento
de Jeedom. Si no se recibe ninguna señal de actividad durante un tiempo determinado, el equipo externo se apaga
desconectar la alimentación de Jeedom durante unos segundos para forzar un reinicio.

Se ha previsto un modo «mantenimiento» para evitar que se produzca un corte de suministro eléctrico cuando una
Se prevé una interrupción del servicio de Jeedom.

# Equipos externos
{: .num}

Por el momento, solo los dispositivos basados en un [**Shelly plus
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (el soporte de [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) está previsto para próximamente)

## Esquema de cableado del equipo
{: .num}

El equipo de vigilancia puede configurarse para cortar la alimentación USB o de 220 V~

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

He montado un equipo con los siguientes componentes:
* [Dos puertos USB-C](https://de.aliexpress.com/item/1005009033490471.html)
* [Un interruptor](https://de.aliexpress.com/item/1005012383637177.html)
* [Un conector de 220 V](https://de.aliexpress.com/item/1005012625139658.html)
* [Un cable de 220 V](https://de.aliexpress.com/item/1005011606233857.html)
* [Una caja](https://de.aliexpress.com/item/1005006900224809.html) (el modelo 58-80-26)
* Un Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Preconfiguración del Shelly
{: .num}

Una vez que el cableado esté listo, puedes conectar el Shelly a la corriente y configurarle una dirección IP fija y
establece una contraseña (la contraseña no es obligatoria, pero se recomienda encarecidamente). El resto de la
La configuración se realizará mediante el complemento {{page.plugin}}

> :bulb: No conectes Jeedom a este equipo hasta que hayas terminado de configurar
> los dispositivos en el complemento

### Configuración del WiFi
{: .num}

Para configurar la conexión Wi-Fi del Shelly, hay que
1. Conéctalo a la corriente.
1. Conectarse a su punto de acceso (SSID: «Shelly...-...»)
1. Abrir la página de WBhttp://192.168.33.1
1. Haz clic en «Configuración» en el menú de la izquierda
1. Haz clic en «Wifi» en la parte central de la página
1. En el panel «Configuración de Wi-Fi 1»
   * Selecciona la red wifi e introduce la contraseña

{% include image.html img=page.img05 %}

   * Si no dispones de un DHCP con una dirección IP reservada para el Shelly
      + Selecciona «IP estática»
      + Introducir la información de configuración de red

{% include image.html img=page.img06 %}

1. Haz clic en «Guardar configuración»

**Puedes volver a conectarte a tu red wifi.**

### Configuración de la contraseña de administrador
1. Abrir la página web con la nueva dirección de Shelly
1. Haz clic en «Configuración» en el menú de la izquierda
1. Haz clic en «Autenticación» en la parte central de la página (debajo de **Configuración del dispositivo**)

{% include image.html img=page.img07 %}
1. Selecciona «Habilitar dispositivo protegido con contraseña»
1. Introducir una contraseña

{% include image.html img=page.img08 %}
1. Haz clic en «Guardar configuración»

# Configuración del complemento
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
