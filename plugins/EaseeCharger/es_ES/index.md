---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : es_ES

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

# Complemento «EaseeCharger» para Jeedom

El complemento **EaseeCharger** permite integrar cargadores `Easee` para vehículos eléctricos en
una instancia de Jeedom.

En la página web de [Easee](https://easee.com) hay información disponible sobre los cargadores «Easee».

# Instalación y configuración del complemento
{: .num}
{% include image.html img=page.img01 %}

## Instalación del complemento
{: .num}

El complemento se instala de forma estándar desde el mercado de Jeedom. Una vez instalado, hay que
Actívalo y, a continuación, inicia la instalación de las dependencias.

## Configuración del complemento
{: .num}

**Demonio**
: Configuraciones del demonio:
    + ***Puerto***
: Número del puerto TCP utilizado para la comunicación entre Jeedom y el demonio. El puerto 34739 es
configurado por defecto; se puede definir otro puerto en caso de conflicto con otro complemento o
software que utiliza el mismo puerto.

    + ***Depuración avanzada***
: El módulo Python del demonio que se encarga de la comunicación con la nube de Easee envía «pings»
cada 5 segundos para mantener la conexión. Cada «ping», y sus respuestas, generan 5
mensajes de registro de nivel `debug`. Estos mensajes de registro se eliminan cuando se activa la opción **Debug**
**Ampliada** no está activada.

**Seguridad**
: + ***Inicio de sesión no seguro***
: Los datos confidenciales (contraseñas, tokens, etc.) se sustituyen en los registros por
`********`. La opción «**Registro no seguro**» desactiva la sustitución y deja los datos
datos sensibles que aparecen sin cifrar en los registros.

## Configuración del «heartbeat»
{: .num}

A veces, el flujo de datos procedente de la nube de Easse se interrumpe sin que la conexión
no se interrumpa. El daemon no detecta este tipo de situaciones, por lo que no puede gestionarlas.

Para solucionar este problema, se configura automáticamente un «heartbeat» al activar el
. El demonio se reinicia automáticamente mediante el «heartbeat» cuando el demonio no ha respondido.
de datos en Jeedom desde hace más de 15 minutos.

# Las cuentas
{: .num}

Una cuenta permite acceder a la nube de Easee para gestionar uno o varios cargadores. Es necesario tener una cuenta
que debe declararse en el complemento antes de poder crear un dispositivo de carga que se gestione a través de esta cuenta.

## Creación de una cuenta
{: .num}

1. En la página de gestión del complemento, haz clic en el icono para crear una cuenta:\
{% include image.html img=page.img02 %}

1. Introduce el nombre de la cuenta, el nombre de usuario y la contraseña para conectarte a la nube y activar la cuenta\
{% include image.html img=page.img03 %}

1. Haz clic en «Validar».
  > :bulb: El nombre de usuario y la contraseña solo se comprueban al registrarse si la cuenta es
activada.

## Funcionamiento de las cuentas
{: .num}

### Eliminación de una cuenta
{: .num}

No se puede eliminar una cuenta si la está utilizando al menos un usuario.

### Modificación del nombre de usuario o de la contraseña
{: .num}

Se crea un nuevo token y se envía automáticamente al daemon.

# Los cargadores
{: .num}

## Creación de un cargador
{: .num}

> :bulb: Es necesario haber creado una cuenta antes de crear un cargador

1. En la página de gestión del complemento, haz clic en el icono para crear un cargador:\
{% include image.html img=page.img04 %}

1. Introduce el nombre del cargador\
{% include image.html img=page.img05 %}

1. Configurar el cargador\
Un cargador es un dispositivo de Jeedom. Además de las opciones básicas (nombre, objeto, categoría, opción)
Para los equipos, deben definirse las siguientes configuraciones:

{% include image.html img=page.img06 %}

   + **Cuenta**\
La cuenta que se debe utilizar para comunicarse con el servidor Easee.

   + **N.º de serie**\
El número de serie tal y como debe introducirse, por ejemplo, en la aplicación Easee para smartphone.

   + **Widget personalizado**\
No utilices el widget estándar de Jeedom, sino el widget específico para los dispositivos.
EaseeCharger.

   + **Color**\
Color del cargador. Permite definir la imagen del cargador.

1. Haz clic en «Validar».

## Los mandos
{: .num}

Los cargadores se crean con los siguientes comandos:

| Nombre | Tipo | Subtipo | Descripción |
| --- | ---- | --------- | ----------- |
| actualizar | {{page.action}} | {{page.other}} | Actualiza toda la información |
| Pausa ON | {{page.action}} | {{page.other}} | Pone la carga en pausa |
| Pausa OFF | {{page.action}} | {{page.other}} | Reanudar la carga |
| En pausa | {{page.info}} | {{page.binary}} | Indica si la carga está en pausa |
| Bloqueo permanente activado | {{page.action}} | {{page.other}} | Activación del bloqueo permanente |
| Bloqueo permanente desactivado | {{page.action}} | {{page.other}} | Desactivación del bloqueo permanente |
| Estado del bloqueo | {{page.info}} | {{page.numeric}} | código que indica si el cable está bloqueado y si lo está de forma permanente |
| Conectado | {{page.info}} | {{page.binary}} | Vehículo conectado |

Se crearán otros comandos de tipo *infos* al recibir los datos de la nube a través del
daemon. Los comandos creados de este modo aparecerán, junto con una descripción, en la pestaña
**Comandos** de configuración del cargador. El logicalId de estos comandos es el identificador
datos digitales recibidos desde la nube.

El valor de algunos de estos comandos es un código al que corresponden diferentes estados. Para estos
información, se crea un segundo comando con el logicalId **`<id>::txt`**. El valor de este
La segunda orden será un texto que refleje el estado.


+ El botón {% include image.html img=page.img07 %} reconfigura los controles con los valores por defecto
por defecto.
{: .hide}

## Los widgets
{: .num}

### Estado del cargador
{: .num}

El widget predeterminado para el estado del cargador muestra las seis situaciones siguientes:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img10 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

Las opciones opcionales **notext: 1** y **noimage: 1** permiten eliminar la visualización del
texto e imagen:

{% include image.html img=page.img14 %}

ofrece

{% include image.html img="etat_5_notext.png" %}

### Bloqueo del cable
{: .num}

El widget de bloqueo del cable permite activar o desactivar el bloqueo permanente e indica si el cable está bloqueado y si el bloqueo permanente está activado.

La siguiente tabla muestra los distintos iconos en función del estado del bloqueo y del tema de la interfaz web:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
<th colspan="2" style="text-align:center">Iconos de colores</th>
</tr>
    <tr>
<th style="text-align:center">sí</th>
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
<td>sí</td>
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
<td>sí</td>
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
<td>sí</td>
<td>sí</td>
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

### Pausa de la carga
{: .num}

{% include image.html img=page.img33 %}: Pausa en la carga

{% include image.html img=page.img32 %}: Reanudar una tarea que se había puesto en pausa
