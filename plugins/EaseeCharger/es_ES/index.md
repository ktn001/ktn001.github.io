---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : es_ES
---

# Complemento «EaseeCharger» para Jeedom

El complemento **EaseeCharger** permite integrar cargadores `Easee` para vehículos eléctricos en una instancia de Jeedom.

En la página web de [Easee](https://easee.com) hay información disponible sobre los cargadores «Easee».

# Instalación y configuración del complemento
{: .num}
{% include image.html img="plugin_configuration.png" %}

## Instalación del complemento
{: .num}

El complemento se instala de forma estándar desde el mercado de Jeedom. Una vez instalado, hay que activarlo y, a continuación, iniciar la instalación de las dependencias.

## Configuración del complemento
{: .num}

**Demonio**
: Configuraciones del demonio:
    + ***Puerto***
: Número del puerto TCP utilizado para la comunicación entre Jeedom y el demonio. El puerto 34739 está configurado por defecto, pero se puede definir otro puerto en caso de conflicto con otro complemento o programa que utilice el mismo puerto.

    + ***Depuración avanzada***
: El módulo Python del demonio que se encarga de la comunicación con la nube de Easee envía «pings» cada 5 segundos para mantener la conexión. Cada «ping», y sus respuestas, generan 5 mensajes de registro de nivel `debug`. Estos mensajes de registro se eliminan cuando la opción **Depuración ampliada** no está activada.

**Seguridad**
: + ***Inicio de sesión no seguro***
: Los datos confidenciales (contraseñas, tokens, etc.) se sustituyen en los registros por `********`. La opción «**Registro no seguro**» desactiva esta sustitución y deja los datos confidenciales a la vista en los registros.

## Configuración del «heartbeat»
{: .num}

A veces, el flujo de datos procedente de la nube de Easse se interrumpe sin que la conexión
no se interrumpa. El daemon no detecta este tipo de situaciones, por lo que no puede gestionarlas.

Para solucionar este problema, se configura automáticamente un «heartbeat» al activar el complemento. El daemon se reinicia.
automáticamente mediante el «heartbeat» cuando el daemon lleva más de 15 minutos sin enviar datos a Jeedom.

# Las cuentas
{: .num}

Una cuenta permite acceder a la nube de Easee para gestionar uno o varios cargadores. Es necesario registrar una cuenta en el complemento antes de poder crear un dispositivo de carga que se gestionará a través de dicha cuenta.

## Creación de una cuenta
{: .num}

1. En la página de gestión del complemento, haz clic en el icono para crear una cuenta:\
{% include image.html img="icone_creation_compte.png" %}

1. Introduce el nombre de la cuenta\
{% include image.html img="saisie_nom_compte.png" %}\
  > :bulb: Una vez registrado, el nombre de la cuenta ya no se puede modificar.

1. Introduce el nombre de usuario y la contraseña para conectarte a la nube y activar la cuenta\
{% include image.html img="saisie_login_password.png" %}

1. Haz clic en «Validar».\
  > :bulb: El nombre de usuario y la contraseña solo se comprueban al registrarse si la cuenta está activada.

## Funcionamiento de las cuentas
{: .num}

### Desactivación de una cuenta
{: .num}

Cuando se desactiva una cuenta, todos los cargadores que utilizan esa cuenta para comunicarse con el servidor de Easee también se desactivan. Los cargadores deben reactivarse manualmente cuando se reactive la cuenta.

### Eliminación de una cuenta
{: .num}

No se puede eliminar una cuenta si la está utilizando al menos un usuario.

### Modificación del nombre de usuario o de la contraseña
{: .num}

El demonio no recibe ninguna notificación cuando se modifica el nombre de usuario o la contraseña de una cuenta. Por lo tanto, es necesario reiniciar el demonio cada vez que se modifique el nombre de usuario o la contraseña.

# Los cargadores
{: .num}

## Creación de un cargador
{: .num}

> :bulb: Es necesario haber creado una cuenta antes de crear un cargador

1. En la página de gestión del complemento, haz clic en el icono para crear un cargador:\
{% include image.html img="icone_creation_chargeur.png" %}

1. Introduce el nombre del cargador\
{% include image.html img="introducir_nombre_cargador.png" %}

1. Configurar el cargador\
Un cargador es un dispositivo de Jeedom. Además de las opciones básicas (nombre, objeto, categoría, opción) de los dispositivos, deben definirse las siguientes configuraciones:

{% include image.html img="configuración_cargador.png" %}

   + **Cuenta**\
La cuenta que se debe utilizar para comunicarse con el servidor Easee

   + **N.º de serie**\
El número de serie tal y como debe introducirse, por ejemplo, en la aplicación Easee para smartphone.

   + **Widget personalizado**\
No utilices el widget estándar de Jeedom, sino el widget específico para los dispositivos EaseeCharger.

   + **Color**\
Color del cargador. Permite definir el icono del cargador.

1. Haz clic en «Validar».

## El widget personalizado


## Los mandos
{: .num}

Los cargadores se crean con los siguientes comandos:

| Nombre | Tipo | Subtipo | Descripción |
| --- | ---- | --------- | ----------- |
| Estado | información | numérico | Estado del cargador:<br>&nbsp;1: desconectado<br>&nbsp;2: en espera<br>&nbsp;3: cargando<br>&nbsp;4: carga finalizada<br>&nbsp;5: listo |
| Pausa ON | acción | otro | Pone la carga en pausa |
| Pausa OFF | acción | otro | Reiniciar la carga |
| En pausa | info | binario | La carga está en pausa |
| Cable bloqueado permanentemente | información | binario | El bloqueo permanente del cable está activado |
| Cable bloqueado | información | binario | El cable está bloqueado |
| Estado del bloqueo | información | numérico | Combinación de *Cable bloqueado permanentemente* y *Cable bloqueado* para el widget |
| Bloqueo permanente activado | acción | otro | Activación del bloqueo permanente |
| Bloqueo permanente desactivado | acción | otro | Desactivación del bloqueo permanente |
| Conectado | información | binario | Vehículo conectado |
| Potencia | información | numérico | Potencia de la carga actual |
| Corriente de fase 1 | información | numérico | Corriente de fase 1 |
| Corriente de fase 2 | información | numérico | Corriente de fase 2 |
| Corriente de fase 3 | información | numérico | Corriente de fase 3 |
| Tensión de la fase 1 | información | numérico | Tensión de la fase 1 |
| Tensión de la fase 2 | información | numérico | Tensión de la fase 2 |
| Tensión de la fase 3 | información | numérico | Tensión de la fase 3 |
| Señal wifi | información | numérico | Intensidad de la señal wifi (0 si la comunicación se realiza a través de la red móvil) |
| Señal móvil | información | numérico | Intensidad de la señal móvil (0 si la comunicación se realiza a través de la red wifi) |

+ El botón {% include image.html img="btn_creer_cmds.png" %} permite volver a crear los comandos que se han eliminado.
+ El botón {% include image.html img="btn_reconfig_cmds.png" %} reconfigura los comandos con los valores predeterminados.

## Los widgets
{: .num}

### Estado del cargador
{: .num}

El widget predeterminado para el estado del servidor muestra las seis situaciones siguientes:

{% include image.html img="etat_0.png" %}
{% include image.html img="etat_1.png" %}
{% include image.html img="etat_2.png" %}
{% include image.html img="etat_3.png" %}
{% include image.html img="etat_4.png" %}
{% include image.html img="etat_5.png" %}

Las opciones opcionales **notext: 1** y **noimage: 1** permiten ocultar el texto y la imagen:

{% include image.html img="widget_etat_option_notext.png" %}

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
{% include image.html img="widget_lock_0_d_color.png" %}
{% include image.html img="widget_lock_0_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_bw.png" %}
{% include image.html img="widget_lock_0_l_bw.png" %}
</td>
</tr>
    <tr>
<td>sí</td>
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
<td>sí</td>
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
<td>sí</td>
<td>sí</td>
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

### Pausa de la carga
{: .num}

{% include image.html img="btn_pause.png" %}: Poner en pausa la carga

{% include image.html img="btn_continue.png" %}: Reanudar una carga que se ha puesto en pausa
