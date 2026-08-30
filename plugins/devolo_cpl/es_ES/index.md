---
layout : default
pluginId : devolo_cpl
plugin : devolo_cpl
lang: es_ES
img01: 01_configuration_plugin.png
img02: 02_icones_gestion_plugin.png
img03: 03_equipement_non_configure.png
img04: 04_equipement_manageable_configure.png
img05: 05_equipement_non_manageable_configure.png
img06: 06_widget_dashboard.png
img07: 07_widget_mobile.png
img08: 08_popup_j_h_m_dashboard.png
img09: 09_popup_j_h_m_mobile.png
img10: 10_modal_CPL_rates.png
img11: 11_btn_cmd_debit.png
img12: 12_nouvelles_commandes.png
img13: 13_check_debitCmds.png
img14: 14_config_mac.png
img15: 15_menu_accueil.png
img16: 16_panel_debits_CPL.png
img17: 17_panel_wifi_AP.png
img18: 18_panel_wifi_client.png
---
# Complemento «devolo_cpl» para Jeedom

El complemento permite integrar los dispositivos PLC de Devolo en Jeedom

> :bulb: Ten cuidado si compartes archivos de registro, las contraseñas de los
¡Los dispositivos pueden aparecer ahí sin encriptar!

# Dispositivos compatibles
{: .num}

## Los dispositivos controlables
{: .num}

El complemento utiliza el módulo de Python [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
La documentación de este módulo indica que es compatible con los siguientes dispositivos:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN triple
+ Magic 2 LAN DINrail
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repetidor 5400
+ Repeater 3000
+ Repetidor 1200
+ Repetidor AC+
+ Repetidor de CA
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wi-Fi
+ dLAN 550 WiFi

## Los dispositivos no gestionables
{: .num}

Los dispositivos, ya sean de Devolo o de otras marcas, que no figuran en la lista de dispositivos
Los dispositivos gestionables se pueden configurar en el complemento. Estos dispositivos son
*no gestionable*.

Los equipos para dispositivos *no gestionables* no tienen control. No se realiza ninguna acción.
por lo tanto, no se puede llevar a cabo en estos dispositivos y no se puede transmitir ningún estado a
Jeedom.

En la versión actual del complemento, la única utilidad de configurar estos dispositivos
en Jeedom consiste en documentar su existencia. Probablemente se tendrán en cuenta
en una versión futura, al visualizar las velocidades de transferencia entre los
dispositivos.

El complemento incluye plantillas para los siguientes modelos:

+ DL1200 LAN
+ DL550 LAN
+ otros

# Instalación y configuración del complemento
{: .num}


## Instalación del complemento
{: .num}

El complemento se instala de forma estándar desde el mercado de Jeedom. Una vez instalado,
Una vez instalado, hay que activarlo y, a continuación, iniciar la instalación de los componentes necesarios

## Configuración del complemento
{: .num}

{% include image.html img=img01 %}

+ **Complemento**
: Configuración general del complemento:
    + ***País***
: El país en el que se encuentran los dispositivos Devolo. Este parámetro sirve para
seleccionar las imágenes de los dispositivos con el tipo de enchufes adecuado.
    + ***Nombres de los dispositivos sin el objeto***
: Si se selecciona esta opción, los nombres de los equipos en las tablas
y los gráficos no se mostrarán en el formato `[<objeto>][<equipo>]`, sino
`<equipamiento>`.

+ **Base de datos**
: Configuración de la gestión de datos:
    + ***Retención***
: Tiempo durante el cual se conservan en la base de datos los datos de tráfico de la red PLC
de datos.

+ **Demonio**
: Configuración del demonio:
    + ***Puerto***
: Número del puerto TCP utilizado para la comunicación entre Jeedom y el demonio.
El puerto 34741 está configurado de forma predeterminada. Se puede definir otro puerto en
en caso de conflicto con otro complemento o programa que utilice el mismo puerto.

+ **Registros**
: Configuración de los registros
    + ***Discreto***
: Los datos confidenciales (contraseñas, etc.) se eliminan de los registros.
> :warning: ¡Los datos confidenciales (todavía) no se han eliminado de los registros del demonio! Los datos confidenciales (contraseñas, etc.) se eliminan de los registros.
    + ***Depuración completa***
: Los registros de los módulos de Python del demonio no se ponen en modo de depuración si esta opción no está
activada. Al activar esta opción, los registros del demonio pueden volverse muy detallados si el complemento
se pone en modo «depuración».

+ **Información sobre velocidades**
    + ***Flujo ascendente***
: Indica si se deben crear comandos para los flujos de salida de la red PLC ascendente (hacia los
otros equipos).
    + ***Flujos descendentes***
: Indica si se deben crear comandos para los flujos PLC descendentes.
(procedentes de otros equipos).

## Inicio del demonio
{: .num}
Una vez instaladas las dependencias y realizada la configuración del complemento,
Hay que iniciar el demonio.

# Configuración de los dispositivos
{: .num}

Los equipos para los dispositivos gestionables se pueden crear automáticamente
siempre que se encuentren en la misma red que el servidor Jeedom y que
no estén en modo de espera. De lo contrario, habrá que crearlos manualmente, al igual que los dispositivos
no gestionables.

## El método automático
{: .num}

En la página de configuración del complemento, haz clic en el icono «sincronización»:

{% include image.html img=img02 %}

Se crea automáticamente un equipo Jeedom para cada dispositivo detectado.

+ El número de serie del dispositivo se configura en Jeedom. Si ya existe un
En los dispositivos con este número de serie, el programa de sincronización no crea
No se trata de un nuevo equipo, sino de una actualización del equipo ya existente.
+ El nombre del equipo es el nombre configurado en el dispositivo o el n.º de
serie si no hay ningún nombre configurado.
+ La dirección IP del dispositivo se ha introducido en el equipo Jeedom.
+ El tipo de dispositivo se indica en el equipo Jeedom y la imagen de
El equipo se selecciona teniendo en cuenta el país configurado para el complemento.
+ Se han creado los controles del equipo.

## El método manual
{: .num}

En la página de gestión del complemento, haz clic en el icono «Añadir»:

{% include image.html img=img02 %}

Hay que introducir el nombre del nuevo dispositivo antes de acceder a la página de
configuración del equipo.

{% include image.html img=img03 %}

Entonces hay que
+ Selecciona el tipo de equipo. La lista de parámetros específicos será
adaptada en función del tipo de equipo seleccionado.
+ Introduce el número de serie del dispositivo. *(Si no conoces el n.º
de serie, puedes introducir cualquier texto.)*
+ Introduce la dirección MAC del dispositivo.
+ Introduce la dirección IP del dispositivo. *(Solo para dispositivos gestionables)*
+ Selecciona el tipo de dispositivo. *(Solo para dispositivos gestionables)*

> :bulb: El número de serie debe ser único, pero, por el momento, el complemento no lo comprueba.

##### Equipos gestionables:
{% include image.html img=img04 %}

##### Equipos no gestionables:
{% include image.html img=img05 %}

## Finalización de la configuración
{: .num}

Después de crear un dispositivo de forma automática o manual, hay que
+ Introduce la contraseña.
+ Configurar el nombre de la red PLC (opcional si solo tienes una red PLC)
+ Activar el equipo.
+ Realizar las configuraciones habituales para los dispositivos Jeedom.
+ Selecciona «Supervisión sin conexión» si quieres que aparezca un mensaje de error cuando
No se puede acceder al dispositivo (por ejemplo, si está en modo de espera).

# Los mandos
{: .num}

Los comandos que no sean de caudal se crean o se eliminan automáticamente
cuando se modifica el modelo del equipo. Se crean los comandos para los modelos
gestionables y eliminadas en los modelos no gestionables.

Los dispositivos no notifican sus cambios de estado en tiempo real. Los
Se han actualizado los comandos de información (a excepción del comando «locate»)
cada minuto mediante un cron. La información de un dispositivo también está
se actualizan cuando se envía un comando al dispositivo a través del daemon o cuando
La orden «refresh» está activada.

## Actualizar
{: .num}

El comando «refresh» envía un mensaje al daemon para que consulte el dispositivo
según su estado. Las órdenes de tipo «info» se actualizan de forma asíncrona
cuando el dispositivo responde a la solicitud del daemon.

## LEDs
{: .num}

+ Los comandos de acción con los `logicalId` `leds_on` y `leds_off` permiten
activar/desactivar los leds del aparato.
+ El comando con el logicalId `leds` indica si los leds están encendidos o apagados.
Esta información se actualiza con los datos que envía el dispositivo.

## Localizar
{: .num}

+ El comando `locate_on` activa la localización del dispositivo al ejecutar
Deja que el LED CPL del dispositivo parpadee durante dos minutos.
+ El comando `locate_off` desactiva la localización antes de que caduque
en dos minutos.
+ Los dispositivos no devuelven información que indique si la localización es
esté activada o no. Por lo tanto, la información de `locate` debe emular el estado del dispositivo:
    + El indicador se establece en 1 al activarse mediante `locate_on`.
    + La información vuelve automáticamente a 0 al cabo de 2 minutos.
    + La información se pone a 0 antes de que transcurran los dos minutos si el comando
`locate_off` está activada.
    + El estado de la información no cambia si la localización está activada o
desactivada por otro software distinto del complemento (por Devolo Cockpit, por
(ejemplo).

## Versiones de firmware
{: .num}

+ El comando de información `firmware` muestra la versión del firmware instalado en
el dispositivo.
+ El comando de información `update_available` indica si hay alguna actualización del firmware
está disponible.
+ El comando de información `next_firmware` indica la versión disponible para una actualización.
Esta información está vacía si el dispositivo está actualizado.

> :bulb: Como todos mis dispositivos están actualizados, todavía no he podido probarlo como es debido
los comandos `update_available` y `next_firmware`. ¿Alguna experiencia al respecto?
a través del [foro](https://community.jeedom.com) (no olvides la etiqueta
`plugin-devolo_cpl`) será bienvenido.

## Activación/desactivación de la red WiFi para invitados
{: .num}

+ Los comandos `guest_on` y `guest_off` permiten activar y desactivar
la red Wi-Fi para invitados de los dispositivos Devolo. En el caso de las redes Wi-Fi en malla, la activación o la
La desactivación del Wi-Fi para invitados en un dispositivo se aplica también al resto de dispositivos
de la red en malla.
+ El comando `guest_duration` permite configurar el tiempo durante el cual
La red WiFi para invitados debe estar activada. Una vez transcurrido este tiempo, el dispositivo Devolo
desactivará la red Wi-Fi para invitados. Si el valor de este comando es 0, la red Wi-Fi para invitados no
no se desactivará automáticamente.

El tiempo durante el que debe estar activada la red WiFi para invitados se expresa en minutos.

El widget **Devolo_cpl/J_h_m** muestra este valor en el formato
`<días> <horas>:<minutos>` (`<horas>:<minutos>` si días = 0)

##### Widget y ventana emergente del panel de control:
{% include image.html img=img06 %} {% include image.html img=img08 %}

##### Widget y ventana emergente para móviles:
{% include image.html img=img07 %} {% include image.html img=img09 %}
+ El comando de información `guest_remaining` indica el tiempo que queda antes de la desactivación
de la red WiFi para invitados. Esta duración se registra en minutos.

El widget **Devolo_cpl/J_h_m** muestra este valor en el formato
`<días> <horas>:<minutos>` (`<horas>:<minutos>` si días = 0)

## En línea
{: .num}

+ El comando «online» es una información binaria que indica si el equipo está conectado o no.

## Los caudales
{: .num}

+ Se pueden crear comandos para controlar el caudal de los flujos entre los dispositivos PLC. Consulta la información más abajo.

# Las velocidades de la tecnología PLC
{: .num}

Los datos de velocidad de la red PLC se recogen de los dispositivos cada 5 minutos. Los valores son
se almacenan en la base de datos y se conservan durante el periodo de retención
configurada en la página de configuración del complemento.

{% include image.html img=img02 %}

Al hacer clic en el icono «Redes PLC», se abre una ventana emergente con información sobre las velocidades de la red PLC.

{% include image.html img=img10 %}

## Las redes
{: .num}

Si has configurado diferentes nombres de red en los ajustes de
equipos, el modal contendrá una pestaña para cada una de estas redes. Esto permite,
por ejemplo, disponer de una tabla con los caudales entre los equipos DLan y
otro para los dispositivos Magic.

## Los caudales
{: .num}

Las filas de la tabla representan los dispositivos fuente y las columnas, los
destinos.

En la imagen anterior, vemos un flujo de 833 Mbps de *cplphil* hacia
*cplbureau* y de 850 Mbps en el sentido inverso.

Los caudales se registran cada 5 minutos. La hora aparece en la esquina inferior derecha.
El modo indica la hora a la que se registraron los caudales mostrados.

## Los controles de caudal
{: .num}

### Creación de comandos
{: .num}

Si se ha activado la opción correspondiente en la configuración del complemento, aparecerán botones para
La creación de órdenes de débito para los flujos ascendentes y descendentes se muestra en
la página de gestión de comandos de un equipo.

{% include image.html img=img11 %}

Al hacer clic en estos botones, se añade un comando a la lista de comandos del equipo.
El logicalId del nuevo comando es `rate_upload` (velocidades de salida) o
`rate_download` (velocidad de descarga).

{% include image.html img=img12 %}

A continuación, debes introducir un nombre para el comando y comprobar si el dispositivo de destino
(**Flujo hacia:** o **Flujo desde:**) propuesto es correcto antes de guardar el equipo.

### Comprobación de la coherencia de los comandos
{: .num}

El botón «Controles de caudal» abre una ventana emergente con una lista de las inconsistencias en los
configuraciones de los controles de caudal.

{% include image.html img=img02 %}

{% include image.html img=img13 %}

### Observaciones
{: .num}

+ **Redundancia:**\
Una orden de transferencia por el importe de A a B será redundante con la orden de transferencia
descendiendo hacia B desde A.

+ **Flujo entre equipos no gestionable**\
Estos flujos no se pueden medir.

+ **Flujo entre un equipo gestionable y uno no gestionable**\
Los controles de caudal de los equipos no gestionables se completan con los valores
informes enviados desde el dispositivo gestionable

# Las conexiones WiFi
{: .num}

Las direcciones MAC de los clientes Wi-Fi conectados a los puntos de acceso de los dispositivos Devolo son
que se registran en el complemento de Jeedom, el cual conserva un historial de dichas conexiones.

## Direcciones MAC aleatorias
{: .num}

> :bulb: Una dirección MAC cuyo segundo carácter sea **2**, **6**, **A** o **E** es una dirección aleatoria.

Algunos dispositivos utilizan una dirección MAC aleatoria en lugar de su dirección MAC
física. Dado que la dirección MAC aleatoria cambia en cada conexión, es
No es posible obtener un historial de las conexiones de estos dispositivos. **Estas direcciones son
por lo que el complemento las ignora y no registra ningún dato sobre ellas.**

Algunos de estos dispositivos se pueden configurar para utilizar una dirección fija
cuando se conectan a determinadas redes wifi. Por lo tanto, puedes
para que estos dispositivos utilicen siempre la misma dirección MAC cuando se
conéctate a uno de tus puntos de acceso Devolo sin renunciar a las ventajas de
el uso de una dirección MAC aleatoria al conectarse a otros dispositivos
redes.


## Búsqueda del vendedor por una dirección MAC
{: .num}

La página web [macvendors.com](https://macvendors.com) permite averiguar cuál es el fabricante
de un dispositivo o de su interfaz de red a partir de la dirección MAC.

El complemento accede a la API de esta web para identificar el fabricante de los dispositivos que se han
conectados a las interfaces Wi-Fi de los dispositivos Devolo.

El acceso a la API debe realizarse respetando un intervalo mínimo de un segundo entre dos llamadas para
Respeta el límite de dos segundos por acceso para los accesos libres. Sin embargo, el complemento no comprueba
no el número de accesos a lo largo del día para asegurarse de que no se supere el límite de 1000 accesos diarios
se ha respetado.

## Asignación de nombres a direcciones MAC
{: .num}

{% include image.html img=img02 %}

El botón «Direcciones MAC» de la página de gestión del complemento abre una ventana modal para
gestión de las direcciones MAC de los dispositivos que se han conectado a la red wifi.

{% include image.html img=img14 %}

Los nombres asociados aquí a las direcciones MAC se utilizarán en lugar de las direcciones MAC.
los gráficos.

# El panel
{: .num}

Se puede acceder al panel a través del menú **Inicio**

{% include image.html img=img15 %}

El panel contiene dos *pestañas*:
* Una entrada llamada «Velocidades PLC» para el historial de velocidades entre los dispositivos PLC
* Una entrada llamada «WiFi» para el historial de conexiones de los clientes WiFi

## Velocidad de conexión PLC
{: .num}

Al abrirla, la pestaña muestra un gráfico con el historial de caudales entre
dos dispositivos.

{% include image.html img=img16 %}

Es posible:
+ Añadir un gráfico mediante el botón «Añadir un gráfico»
+ Cambiar el origen y el destino mediante los selectores «de» y «a»
y, a continuación, haciendo clic en el botón «Aceptar».

Os dejo que descubráis el resto de funciones del gráfico.

## Las conexiones WiFi
{: .num}

Esta pestaña permite visualizar el historial de conexiones Wi-Fi a un punto de acceso (AP):

{% include image.html img=img17 %}

Esta pestaña también permite visualizar el historial de conexiones Wi-Fi de un dispositivo Wi-Fi (cliente):

{% include image.html img=img18 %}

