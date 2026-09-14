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
img09: 09_configuration_plugin.png
img10: 10_configuration_equipement.png
img11: 11_scenario.png
img12: 12_declenchement_scenario.png

action: action
binary: binary
info: info
kick: kick
maintenance: maintenance
other: other
---
# Complemento {{page.plugin}} ({{page.pluginId}}) para Jeedom

> :warning: El complemento está en fase de desarrollo y, por lo tanto, aún no está disponible en el Market

El complemento {{page.plugin}} gestiona un dispositivo externo que debe recibir periódicamente una señal de funcionamiento
de Jeedom. Si no se recibe ninguna señal de actividad durante un tiempo determinado, el equipo externo se apaga
desconectar la alimentación de Jeedom durante unos segundos para forzar un reinicio.

Se ha previsto un modo «mantenimiento» para evitar que se produzca un corte de suministro eléctrico cuando una
Se prevé una interrupción del servicio de Jeedom.

# Equipos externos
{: .num}

El complemento está diseñado para funcionar con los siguientes dispositivos:

+ [Shelly plus 1](https://www.shelly.com/fr/products/shelly-plus-1-x1)
+ [Shelly 1 Gen3](https://www.shelly.com/fr/products/shelly-1-gen3)
+ [Shelly 1 Mini Gen3](https://www.shelly.com/fr/products/shelly-1-mini-gen3)
+ [Shelly 1 Gen4](https://www.shelly.com/fr/products/shelly-1-gen4)
+ [Shelly 1 Mini Gen4 ](https://www.shelly.com/fr/products/shelly-1-mini-gen4)

> :bulb: El complemento se ha probado con un **Shelly Plus 1** y un **Shelly Gen4**. Cualquier comentario
Se agradece cualquier experiencia con otros dispositivos.

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

### Activación del punto de acceso
{: .num}

Comprueba si tienes una red WiFi cuyo SSID sea del tipo `Shelly<YYY>-<MAC>` (<YYY> corresponde a
del modelo Shelly, <MAC> es la dirección MAC del Shelly).

Si has encontrado una red para tu Shelly, el punto de acceso ya está activado y puedes
Ir a la configuración de la red Wi-Fi

Si no has encontrado esta red, probablemente sea porque la versión del firmware es la 2.0.0
(o más) y tu Shelly es un Gen4. En ese caso, Zigbee está activado por defecto y el acceso
El punto de acceso está desactivado. Puede activar el punto de acceso siguiendo estos pasos:
1. Pulsa el botón físico situado en la parte trasera del Shelly y **mantenlo pulsado durante 10 segundos**.
segundos**
1. Al soltar el botón, el LED se apaga durante 2 o 3 segundos y, a continuación, parpadea rápidamente.
1. Vuelve a pulsar el botón físico **durante exactamente 5 segundos**
1. El LED parpadea lentamente, lo que indica que la red Wi-Fi «Shelly<yyy>-<MAC>» está visible
1. Pasa a la configuración de la red WiFi que se describe a continuación.
1. El punto de acceso se desactivará al cabo de 5 minutos. Entonces tendrás que volver a realizar este
Procedimiento a seguir si no se ha configurado la red Wi-Fi.

> :bulb: También es posible utilizar la aplicación *Shelly Smart Control* para conectarse a través de
> Bluetooth y activar el punto de acceso.

### Configuración del WiFi
{: .num}

Para configurar la conexión Wi-Fi del Shelly, hay que
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

# Instalación y configuración del complemento
{: .num}

El complemento se instala fácilmente a través del Market. No tiene dependencias ni procesos en segundo plano y no requiere ningún
Configuración. Basta con activarla tras la instalación.

{% include image.html img=page.img09 %}

# Creación y configuración de un dispositivo

La configuración de un dispositivo se realiza desde el menú **plugins → Monitoring → jeewatchdog**. El
El botón **Añadir** permite crear un nuevo dispositivo; al hacer clic en un dispositivo, se abre su página de
configuración.

{% include image.html img=page.img10 %}

Además de los parámetros de configuración estándar de Jeedom, hay que configurar algunos parámetros específicos
deben configurarse:

+ ***Modelo de equipo***\
El modelo del dispositivo Shelly.
+ ***Dirección IP del conmutador***\
Dirección IP del Shelly (también se acepta un nombre DNS).
+ ***Contraseña***\
Contraseña de Shelly
+ ***Tiempo máximo de inactividad***\
La alimentación de Jeedom se interrumpirá durante unos segundos si Jeedom no ha enviado un *kick* durante ese
tiempo de espera. Esta duración se expresa en minutos.
+ ***Tiempo de desconexión***\
Duración, expresada en segundos, del corte de suministro eléctrico.
+ ***Activador del Kick***\
Indica si el Kick debe enviarse al Shelly mediante un **cron** y un **escenario**. Ver explicaciones
más abajo
+ ***Botón «Configurar el interruptor»***\
Botón para enviar la configuración al Shelly. El dispositivo debe haberse guardado previamente
haz clic en este botón.

> :warning: No olvides hacer clic en el botón **Configurar el interruptor** después de guardar
> el equipo si se ha modificado algún parámetro del watchdog.

# Los mandos
{: .num}

Se crean los dos comandos siguientes para cada dispositivo:

1. *LogicalId*: **{{page.maintenance}}**\
*tipo*: **{{page.info}}**\
*subtipo*: **{{page.binary}}**\
Indica la posición del interruptor de mantenimiento.

1. *LogicalId*: **{{page.kick}}**\
*tipo*: **{{page.action}}**\
*subtipo*: **{{page.other}}**\
Comando para enviar un mensaje al Shelly con el fin de reiniciar el contador.

# El activador de Kick
{: .num}

Los Kicks pueden activarse mediante un cron o un escenario

## El cron
{: .num}

El complemento crea una tarea programada que activará un Kick periódicamente. La frecuencia de esta tarea programada depende de la
Valor del parámetro **Tiempo máximo de inactividad**:

<table>
<tr><td>1 minuto</td><td>Si <b>tiempo máximo</b> <= 10 minutos</td></tr>
<tr><td>3 minutos</td><td>Si son 10 minutos < <b>tiempo máximo</b> <= 15 minutos</td></tr>
<tr><td>5 minutos</td><td>Si son 15 minutos < <b>tiempo máximo</b> <= 30 minutos</td></tr>
<tr><td>10 minutos</td><td>Si 30 minutos < <b>tiempo máximo</b></td></tr>
</table>
	
## El escenario
{: .num}

El uso de un escenario permite realizar pruebas para comprobar con mayor precisión si Jeedom
funciona correctamente al enviar un comando.

A continuación se muestra un ejemplo de escenario que solo enviará una señal si se ha podido activar un dispositivo Zigbee:

{% include image.html img=page.img11 %}

Este escenario se ejecutará periódicamente (por ejemplo, cada 3 minutos) e inmediatamente después de que el
Inicio de Jeedom.

{% include image.html img=page.img12 %}

<!--
vim: textwidth=100 colorcolumn=101
-->
