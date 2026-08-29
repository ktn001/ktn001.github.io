---
layout : default
pluginId : volvocars
plugin : Volvo
lang: es_ES
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# Complemento «volvocars» para Jeedom

El complemento **volvocars** permite a Jeedom interactuar con tu vehículo Volvo utilizando
las API de Volvocars.

Gracias a @Xav-74. Me he inspirado mucho en su plugin **My BMW** para el widget y el panel.

# Principio
{: .num}

Este complemento interactúa con las API de Volvocars a través de la nube. Por lo tanto, este complemento
requiere una conexión a Internet. Además, es necesario que tu vehículo esté disponible en
la aplicación de Volvo Cars.

La documentación de las API indica que están disponibles para todos los modelos entre
De 2015 a 2022. Pero parece que esta documentación no está actualizada y que los modelos posteriores a
2022 también están disponibles a través de estas API. El complemento se ha desarrollado utilizando un XC40
eléctrica de 2023.

# Modelos compatibles
{: .num}

+ ***Modelos confirmados como compatibles con el complemento:***
    + XC40 eléctrico (2023)
    + XC60 híbrido (2022)
+ ***Modelos cuya compatibilidad parcial con el complemento ha sido confirmada:***
+ ***Modelos confirmados como incompatibles con el complemento:***

# Las claves API de VCC
{: .num}
Además de la cuenta Volvo ID que utilizas en la aplicación Volvo Cars, necesitarás una clave API VCC
personal.

Debes generar una clave API VCC (VCC API Key) en la página web
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} siguiendo
este procedimiento:

1. Haz clic en **Registrarse**:
{% include image.html img="sign_up_volvodev.png" %}
1. Selecciona la cuenta que se asociará a tu nueva cuenta developper.volvocars:
{% include image.html img="select_login_asoc.png" %}
1. Introduce tu nombre de usuario y contraseña para el sitio web seleccionado en el punto anterior
{% include image.html img="sign_in_volvodev.png" %}
1. Haz clic en tu nombre de usuario y, a continuación, en **Tus aplicaciones API**
{% include image.html img="open_api_applications.png" %}
1. Introduce un nombre para la aplicación que vas a crear y, a continuación, haz clic en **Crear**. Si tienes
Si se tienen varias instancias de Jeedom, se recomienda crear una aplicación para cada instancia en
en la que se instalará el complemento
instalado:
{% include image.html img="create_application.png" %}
1. Tu nueva aplicación se crea con un par de claves API de VCC. Siempre podrás volver
en esta página para recuperar tu clave.
{% include image.html img="vcc_keys.png" %}

# Instalación y configuración del complemento
{: .num}

## Instalación del complemento
{: .num}
El complemento se instala de forma estándar desde el mercado de Jeedom.

Si la instalación de los archivos dependientes no se ha iniciado automáticamente tras instalar el complemento,
Ejecútalo manualmente. Una vez instaladas las dependencias, asegúrate de que el daemon esté en marcha.

## Configuración del complemento
{: .num}

{% include image.html img="configuration_plugin.png" %}
+ ***Clave VCC API***
: Introduce la clave VCC-API-key que has generado en la página web developer.volvocars.com.

+ ***Utilizar el widget del plugin***
: Selecciona esta opción para utilizar el widget del plugin en los paneles de control.
{% include image.html img="widget_electrique.png" -%}
{% include image.html img="widget_hybrid.png" -%}
{% include image.html img="widget_thermique.png" %}

+ ***Comandos que hay que crear para las ventanas***
: Las API de Volvocars devuelven información de tipo texto sobre el estado de las ventanas.
Este texto se guarda en un comando **\*_state** del equipo.
También se crearán los comandos binarios **\*_open** y **\*_closed** si se selecciona la opción **Abierto**
o **Cerrado** está activada.
: Los comandos **\*_open** o **\*_closed** existentes no se eliminan cuando
la opción correspondiente está desactivada.

Una vez instalado el complemento, hay que crear una cuenta.

# Las cuentas
{: .num}
{% include image.html img="no_account.png" %}

Haz clic en *Añadir*

{% include image.html img="nombre_cuenta.png" %}

Introduce el nombre de la cuenta y haz clic en *Aceptar*

{% include image.html img="edit_account.png" %}

Introduce el nombre de usuario y la contraseña de tu cuenta VolvoId y, a continuación, haz clic en *Aceptar*

{% include image.html img="edit_otp.png" %}

Introduce el código que Volvo te ha enviado por correo electrónico y, a continuación, haz clic en *Aceptar*.

Es necesario introducir el código para obtener un token que el complemento utilizará para
autenticar el acceso a las API de Volvocars. Este token se renovará automáticamente antes de que caduque.

El token se puede perder si
   + Todos los vehículos asociados a la cuenta están desactivados durante un periodo determinado.
   + El complemento lleva desactivado más de un tiempo determinado.
   + Jeedom lleva un tiempo sin funcionar.
   + Se ha restaurado una copia de seguridad de Jeedom.

En estos casos, hay que abrir la ficha de la cuenta y guardarla. Esto reiniciará el proceso.
para introducir un nuevo código enviado por correo electrónico y obtener así un nuevo token.

Según la documentación de las API, un token caducado puede renovarse automáticamente hasta 7 días después de su caducidad. Pero no he podido comprobarlo. Dado que los tokens tienen una validez de 30 minutos y se renuevan 15 minutos antes de su caducidad, una interrupción de menos de 15 minutos no debería tener ninguna consecuencia.

{% include image.html img="no_car.png" %}

# Los vehículos
{: .num}

Los dispositivos Jeedom para los vehículos asociados a una cuenta se crean automáticamente (o se configuran
(actualizada) al sincronizar la cuenta

## Sincronización de una cuenta (creación de vehículos)
{: .num}

+ Haz clic en el botón **Sincronización**
+ Selecciona la cuenta que quieres sincronizar
+ El nuevo vehículo se añade a la lista de vehículos

  > :bulb: En algunos casos, el sitio web del proveedor de imágenes puede bloquear el acceso realizado mediante un script.
En ese caso, se mostrará el logotipo de Volvo en lugar de la imagen del vehículo. La imagen del vehículo deberá
se puede cargar manualmente desde la página de configuración del vehículo.

{% include image.html img="with_car.png" %}

## Configuración del vehículo
{: .num}

{% include image.html img="configuration_vehicle.png" %}

+ **Configuración general**

Estos parámetros son los parámetros estándar de los dispositivos Jeedom. No se detallarán aquí.

+ **Parámetros del vehículo**

Estos parámetros se rellenan automáticamente al sincronizar la cuenta. La edición de estos parámetros está desactivada por defecto, ya que los usuarios no deberían modificarlos.

Si es necesario, se puede habilitar la edición de estos parámetros haciendo clic en el botón «Editar».

+ **Configuración de alertas**

   + *Autonomía eléctrica*
El valor del comando `al_electricAutonomy` pasa a **1** cuando la autonomía eléctrica es inferior a
hasta ese límite.

   + *Autosuficiencia térmica*
El valor de la orden `al_fuelAutonomy` pasa a **1** cuando la autonomía del motor térmico es inferior a
hasta ese límite.

+ **Parámetros de localización**

Se pueden configurar las coordenadas GPS de dos ubicaciones. Se crearán dos comandos para cada una de estas ubicaciones:
  + `distanceSite#`: Distancia entre la instalación y el vehículo
  + `presenceSite#`: valor binario que indica si hay alguien en las instalaciones

Los parámetros:
  + *Nombre*
Si se cambia el nombre de un sitio, los dos comandos asociados también cambiarán de nombre si sus nombres contienen el antiguo.
nombre del sitio web
  + *Coordenadas GPS*
Las coordenadas GPS del emplazamiento
  + *Distancia máxima (en m)*
Distancia máxima (en metros) entre el vehículo y el recinto para que el vehículo aparezca como presente en el recinto.
  + *Obtener coordenadas GPS*
Dos botones que permiten introducir automáticamente las coordenadas GPS del lugar:
       + `Jeedom`: Recupera las coordenadas GPS de Jeedom que se han introducido en la configuración de Jeedom.
       + `Vehículo`: Obtiene la posición actual del vehículo
  
+ **Descripción**

Información libre

+ **Imagen**

Imagen del vehículo que se utilizará en el panel. Si no se ha podido recuperar la imagen del vehículo durante
En cuanto a la sincronización de la cuenta, se sustituirá por un logotipo de Volvo y un botón «Recuperar una imagen».
del vehículo (consulta más abajo el procedimiento para recuperar la imagen manualmente).

+ **Datos sin procesar**

Este botón abre una ventana emergente con los datos tal y como los proporcionan las API. Esta información puede
que pueden resultar útiles para el análisis en caso de que surja algún problema.

# Recuperación manual de la imagen
{: .num}

+ Si no se ha podido cargar la imagen del vehículo, aparecerán el logotipo de Volvo y el botón «Recuperar una imagen del vehículo»:

{% include image.html img="no_image.png" %}

+ Haz clic en el botón «Obtener una imagen del vehículo»
   + El logotipo se sustituye por una imagen del vehículo
   + El botón «Recuperar una imagen del vehículo» ya no aparece:
   + Se ha marcado un área para pegar allí la imagen del vehículo

{% include image.html img="image_ready.png" %}

+ Utiliza el menú contextual (¡SIN ATAJOS DE TECLADO!) para copiar la imagen.

{% include image.html img="copy_image.png" %}

+ Utiliza el menú contextual (¡SIN ATAJOS DE TECLADO!) para pegar la imagen en
la zona prevista para ello.

{% include image.html img="paste_image.png" %}

+ La imagen se envía al complemento
+ Ya no se muestra el área destinada a recibir una copia de la imagen.

{% include image.html img="image_uploaded.png" %}

# Los mandos
{: .num}

## Las acciones
{: .num}

El complemento puede enviar al vehículo los siguientes comandos

+ **desbloquear**
Desbloqueo del vehículo
+ **cerradura**
Bloqueo del vehículo
+ **lockReduced**
Bloqueo en modo de alarma reducida
+ **climStart**
Puesta en marcha del aire acondicionado
+ **climStop**
Apagado del aire acondicionado
+ **bip**
Klaxonne
+ **flash**
Las luces de intermitencia del vehículo parpadean.
+ **honk_flash**
Ejecución simultánea de los comandos *honk* y *flash*

Los controles que se activan realmente en el complemento para un vehículo dependen de
las funciones del vehículo que se transmiten a través de las API (puntos finales *comandos*).

## Noticias
{: .num}

  > :bulb: Los comandos de tipo *info* no se crean al crear el vehículo. Se crean
de forma dinámica tras la activación del vehículo, en función de los datos recibidos de las API.

<table class="comandos">
<thead>
<tr>
<th style='min-width:150px'>Nombre</th>
<th>LogicalId</th>
<th>Punto final de la API</th>
<th>Subtipo</th>
<th>Valores/Unidad</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>

		<!-- -------- -->
<!-- GLOBALES -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">GLOBALES</td>
</tr>
<tr>
<td rowspan="4">Disponibilidad</td>
<td rowspan="4">disponibilidad</td>
<td rowspan="4">accesibilidad</td>
<td rowspan="4">texto</td>
<td>«DISPONIBLE»</td>
<td>El vehículo está conectado</td>
</tr>
<tr>
<td>«NO DISPONIBLE»</td>
<td>El vehículo está desconectado</td>
</tr>
<tr>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>«QUOTA_OUT»</td>
<td>Se ha alcanzado el límite de llamadas a la API</td>
</tr>
<tr>
<td rowspan="5">motivo de la indisponibilidad</td>
<td rowspan="5">motivo de indisponibilidad</td>
<td rowspan="5">accesibilidad</td>
<td rowspan="5">texto</td>
<td>«NO_INTERNET»</td>
<td>Sin conexión a Internet</td>
</tr>
<tr>
<td>«POWER_SAVING_MODE»</td>
<td>Vehículo en modo de espera</td>
</tr>
<tr>
<td>«CAR_IN_USE»</td>
<td>Manual de uso del vehículo</td>
</tr>
<tr>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>""</td>
<td>El vehículo está disponible</td>
</tr>
<tr>
<td>cuentakilómetros</td>
<td>cuentakilómetros</td>
<td>cuentakilómetros</td>
<td>digital</td>
<td>Km</td>
<td>Kilometraje del vehículo</td>
</tr>
<tr>
<td rowspan="12">servicio</td>
<td rowspan="12">servicio</td>
<td rowspan="12">diagnósticos</td>
<td rowspan="12">texto</td>
<td>"NO_WARNING"</td>
<td>No hay que realizar ninguna tarea</td>
</tr>
<tr>
<td>«REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE»</td>
<td>El plazo para este servicio está a punto de vencerse</td>
</tr>
<tr>
<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
<td>El tiempo de funcionamiento del motor antes de la puesta en servicio está a punto de agotarse</td>
</tr>
<tr>
<td>«DISTANCE_DRIVEN_ALMOST_TIME_FOR_SERVICE»</td>
<td>Próximamente se alcanzará el límite de kilometraje para una revisión</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
<td>Se ha superado el plazo de prestación del servicio</td>
</tr>
<tr>
<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
<td>Tiempo de funcionamiento del motor antes de la puesta en servicio transcurrido</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
<td>Kilometraje para un servicio alcanzado</td>
</tr>
<tr>
<td>«REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE»</td>
<td>Se ha superado el plazo de prestación del servicio</td>
</tr>
<tr>
<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
<td>Se ha superado el tiempo de funcionamiento del motor antes de la puesta en servicio</td>
</tr>
<tr>
<td>«DISTANCIA RECORRIDA CON EL SERVICIO VENCIDO».</td>
<td>Kilometraje para un servicio superado</td>
</tr>
<tr>
<td>«UNKNOWN_WARNING»</td>
<td>Alerta desconocida</td>
</tr>
<tr>
<td>«SIN ESPECIFICAR»</td>
<td>indeterminado</td>
</tr>
<tr>
<td rowspan="5">Motivo de la solicitud</td>
<td rowspan="5">serviceTrigger</td>
<td rowspan="5">diagnósticos</td>
<td rowspan="5">texto</td>
<td>CALENDAR_TIME</td>
<td>Tiempo transcurrido desde la última prestación del servicio</td>
</tr>
<tr>
<td>«DISTANCIA»</td>
<td>Distancia recorrida desde el último servicio</td>
</tr>
<tr>
<td>"ENGIME_HOURS"</td>
<td>Tiempo de funcionamiento del motor</td>
</tr>
<tr>
<td>«SIN ESPECIFICAR»</td>
<td>Sin especificar</td>
</tr>
<tr>
<td>«DESCONOCIDO»</td>
<td>Desconocido</td>
</tr>
<tr>
<td>Horas de funcionamiento del motor antes de la revisión</td>
<td>engineHoursToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Horario</td>
<td>Tiempo de funcionamiento del motor hasta el próximo mantenimiento</td>
</tr>
<tr>
<td>Distancia antes del servicio</td>
<td>distanceToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Kilómetros</td>
<td>Distancia hasta la próxima parada</td>
</tr>
<td>Días antes del servicio</td>
<td>timeToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Días</td>
<td>Número de días con el servicio.<br>La API de volvocars devuelve un número de días o un número de meses.
El complemento convierte el número de meses en número de días. Por lo tanto, puede haber un error de 30 días.</td>
<tr>
</tr>
	
		<!-- ------------ -->
<!-- LOCALIZACIÓN -->
		<!-- ------------ -->
<tr>
<td class="subtitle" colspan="6">UBICACIÓN</td>
</tr>
<tr>
<td>posición</td>
<td>posición</td>
<td>alquiler</td>
<td>coordenadas GPS</td>
<td>&lt;latitud&gt;,&lt;longitud&gt;</td>
<td>posición del vehículo</td>
</tr>
<tr>
<td>distancia &lt;nombre_sitio_1&gt;</td>
<td>distanceSite1</td>
<td></td>
<td>digital</td>
<td>contador</td>
<td>Distancia entre el vehículo y el emplazamiento 1</td>
</tr>
<tr>
<td rowspan="2">presencia &lt;nombre_sitio_1&gt;</td>
<td rowspan="2">presenceSite1</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>El vehículo no se encuentra en la ubicación 1</td>
</tr>
<tr>
<td>1</td>
<td>El vehículo se encuentra en la ubicación 1</td>
</tr>
<tr>
<td>a distancia &lt;nombre_sitio_2&gt;</td>
<td>distanceSite2</td>
<td></td>
<td>digital</td>
<td>contador</td>
<td>Distancia entre el vehículo y el emplazamiento 1</td>
</tr>
<tr>
<td rowspan="2">presencia &lt;nombre_sitio_2&gt;</td>
<td rowspan="2">presenceSite2</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>El vehículo no se encuentra en la página 2</td>
</tr>
<tr>
<td>1</td>
<td>El vehículo se encuentra en la ubicación 2</td>
</tr>
	
		<!-- -------- -->
<!-- SISTEMAS DE APERTURA -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">VENTANAS Y PUERTAS</td>
</tr>
<tr>
<td rowspan="3">Bloqueado</td>
<td rowspan="3">bloqueado</td>
<td rowspan="3">puertas</td>
<td rowspan="3">texto</td>
<td>BLOQUEADO</td>
<td>Bloquear el vehículo</td>
</tr>
<tr>
<td>DESBLOQUEADO</td>
<td>Desbloquear vehículo</td>
</tr>
<tr>
<td>SIN ESPECIFICAR</td>
<td>Información no disponible</td>
</tr>
<tr>
<td rowspan="8">
estado de la puerta delantera izquierda<br>
estado de la puerta delantera derecha<br>
estado de la puerta trasera izquierda<br>
estado de la puerta trasera derecha<br>
estado de la cubierta <br>
estado del portón trasero<br>
estado de la trampilla<br>
</td>
<td rowspan="8">
doorFlState<br>
doorFrState<br>
doorRlState<br>
doorRrState<br>
hoodState<br>
tailState<br>
tankState<br>
</td>
<td rowspan="8">
puertas
</td>
<td rowspan="12">
texto
</td>
<td rowspan="3">CERRADO</td>
<td rowspan="3">cerrado</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">AJAR</td>
<td rowspan="3">entreabierto</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">ABRIR</td>
<td rowspan="3">abierto</td>
</tr>
<tr>
</tr>
<tr>
<td rowspan="4">
estado de la luneta delantera izquierda<br>
estado de la luneta delantera derecha<br>
Estado de la luneta trasera izquierda <br>
Estado de la luneta trasera derecha <br>
estado del tejado<br>
</td>
<td rowspan="4">
winFlState<br>
winFrState<br>
winRlState<br>
winRrState<br>
roofState<br>
</td>
<td rowspan="4">ventanas</td>
</tr>
<tr>
<td rowspan="3">NO ESPECIFICADO</td>
<td rowspan="3">Información no disponible</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="2">
puerta delantera izquierda abierta<br>
puerta delantera derecha abierta<br>
puerta trasera izquierda abierta<br>
puerta trasera derecha abierta<br>
ventanilla delantera izquierda abierta<br>
ventanilla delantera derecha abierta<br>
ventanilla trasera izquierda abierta<br>
ventanilla trasera derecha abierta<br>
capó abierto<br>
techo abierto<br>
portón trasero abierto<br>
trampilla abierta<br>
</td>
<td rowspan="2">
doorFlOpen<br>
doorFrOpen<br>
doorRlOpen<br>
doorRrOpen<br>
winFlOpen<br>
winFrOpen<br>
winRlOpen<br>
winRrOpen<br>
hoodOpen<br>
roofOpen<br>
tailOpen<br>
tankOpen<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>no está abierto</td>
</tr>
<tr>
<td>1</td>
<td>abierto</td>
</tr>
<tr>
<td rowspan="2">
puerta delantera izquierda cerrada<br>
puerta delantera derecha cerrada<br>
puerta trasera izquierda cerrada<br>
puerta trasera derecha cerrada<br>
ventanilla delantera izquierda cerrada<br>
ventanilla delantera derecha cerrada<br>
ventanilla trasera izquierda cerrada<br>
ventanilla trasera derecha cerrada<br>
tapa cerrada<br>
techo cerrado<br>
portón trasero cerrado<br>
compuerta cerrada<br>
</td>
<td rowspan="2">
doorFlClosed<br>
doorFrClosed<br>
doorRlClosed<br>
doorRrClosed<br>
winFlClosed<br>
winFrClosed<br>
winRlClosed<br>
winRrClosed<br>
hoodClosed<br>
roofClosed<br>
tailClosed<br>
tankClosed<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>no cerrado</td>
</tr>
<tr>
<td>1</td>
<td>abierto</td>
</tr>
<tr>
<td rowspan="2">Puertas cerradas</td>
<td rowspan="2">allDoorsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>una puerta, el capó o el maletero no están cerrados</td>
</tr>
<tr>
<td>1</td>
<td>Todas las puertas, así como el capó y el maletero, están cerrados</td>
</tr>
<tr>
<td rowspan="2">Ventanas cerradas</td>
<td rowspan="2">allWinsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>Una ventana o el tejado no están cerrados</td>
</tr>
<tr>
<td>1</td>
<td>Todas las ventanas y el tejado están cerrados</td>
</tr>
	
		<!-- ---------------- -->
<!-- Motor térmico -->
		<!-- ---------------- -->
<tr>
<td class="subtitle" colspan="6">MOTOR TÉRMICO</td>
</tr>
	
<tr>
<td rowspan="2">motor en funcionamiento</td>
<td rowspan="2">engineON</td>
<td rowspan="2">engine_status</td>
<td rowspan="2">binario</td>
<td>0</td>
<td>motor parado</td>
</tr>
<tr>
<td>1</td>
<td>motor en marcha</td>
</tr>
<tr>
<td>consumo de combustible</td>
<td>consoFuel</td>
<td>estadísticas</td>
<td>digital</td>
<td>l/100 km</td>
<td>consumo medio calculado por el vehículo</td>
</tr>
<tr>
<td>consumo de combustible (trayecto)</td>
<td>consoFuelTrip</td>
<td>estadísticas</td>
<td>digital</td>
<td>l/100 km</td>
<td>consumo medio desde el inicio del recorrido automático</td>
</tr>
<tr>
<td>combustible</td>
<td>fuelAmount</td>
<td>combustible</td>
<td>digital</td>
<td>l</td>
<td>Cantidad de combustible restante</td>
</tr>
<tr>
<td>autonomía térmica</td>
<td>fuelAutonomy</td>
<td>estadísticas</td>
<td>digital</td>
<td>Km</td>
<td>Autonomía con el combustible restante</td>
</tr>
<tr>
<td rowspan="2">Autonomía de combustible reducida</td>
<td rowspan="2">al_fuelAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binario</td>
<td>0</td>
<td>Autonomía de combustible suficiente</td>
</tr>
<tr>
<td>1</td>
<td>Autonomía con poco combustible</td>
</tr>
	
<!-- ACEITE -->
<tr>
<td rowspan="5">nivel de aceite</td>
<td rowspan="5">oilLevel</td>
<td rowspan="5">diagnóstico del motor</td>
<td rowspan="5">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nivel normal</td>
</tr>
<tr>
<td>"SERVICIO_NECESARIO"</td>
<td>Requiere un servicio</td>
</tr>
<tr>
<td>«TOO_LOW»</td>
<td>Nivel bajo</td>
</tr>
<tr>
<td>«TOO_HIGH»</td>
<td>Nivel superior</td>
</tr>
<tr>
<td rowspan='2'>alerta de aceite</td>
<td rowspan='2'>al_oil</td>
<td rowspan='2'></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>El nivel de aceite es normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulta el comando <i>oil_level</i> para obtener más detalles)</td>
</tr>
	
<!-- REFRIGERANTE -->
<tr>
<td rowspan="3">nivel del líquido refrigerante</td>
<td rowspan="3">nivelDeRefrigerante</td>
<td rowspan="3">diagnóstico del motor</td>
<td rowspan="3">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nivel normal</td>
</tr>
<tr>
<td>«TOO_LOW»</td>
<td>Nivel bajo</td>
</tr>
<tr>
<td rowspan='2'>Alerta de líquido refrigerante</td>
<td rowspan='2'>al_coolant</td>
<td rowspan='2'></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>El nivel es normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulta el comando <i>coolant_level</i> para obtener más detalles)</td>
</tr>
	
		<!-- ----------------- -->
<!-- Motor eléctrico -->
		<!-- ----------------- -->
<tr>
<td class="subtitle" colspan="6">MOTOR ELÉCTRICO</td>
</tr>
<tr>
<td>consumo eléctrico</td>
<td>consoElectric</td>
<td>estadísticas</td>
<td>digital</td>
<td>kW/100 km</td>
<td>Consumo medio calculado por el vehículo</td>
</tr>
<tr>
<td>Autonomía eléctrica</td>
<td>electricAutonomy</td>
<td>estadísticas</td>
<td>digital</td>
<td>Km</td>
<td>Autonomía con la carga restante</td>
</tr>
<tr>
<td rowspan="2">Baja autonomía eléctrica</td>
<td rowspan="2">al_electricAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binario</td>
<td>0</td>
<td>Autonomía eléctrica suficiente</td>
</tr>
<tr>
<td>1</td>
<td>Baja autonomía eléctrica</td>
</tr>
<tr>
<td>nivel de carga de la batería</td>
<td>batteryLevel</td>
<td>recharge_status</td>
<td>digital</td>
<td>%</td>
<td>Porcentaje de carga de la batería</td>
</tr>
<tr>
<td rowspan="6">Estado de la carga</td>
<td rowspan="6">estado de carga</td>
<td rowspan="6">estado_de_recarga</td>
<td rowspan="6">texto</td>
<td>"CHARGING_SYSTEM_CHARGING"</td>
<td>Cargando</td>
<td></td>
</tr>
<tr>
<td>«CHARGING_SYSTEM_IDLE»</td>
<td>Sistema de recarga en espera</td>
</tr>
<tr>
<td>«CHARGING_SYSTEM_DONE»</td>
<td>Recarga completada</td>
</tr>
<tr>
<td>«CHARGING_SYSTEM_FAULT»</td>
<td>Error en el sistema de recarga</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_SCHEDULED"</td>
<td>Recarga programada</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_UNSPECIFIED"</td>
<td>Estado indeterminado</td>
</tr>
<tr>
<td>Tiempo de carga restante</td>
<td>chargingRemainingTime</td>
<td>recharge_status</td>
<td>digital</td>
<td>minutos</td>
<td>Tiempo estimado hasta que finalice la recarga</td>
</tr>
<tr>
<td>Hora de finalización de la carga</td>
<td>chargingEndTime</td>
<td></td>
<td>texto</td>
<td>jj HH:MM</td>
<td>Hora prevista de finalización de la carga</td>
</tr>
<tr>
<td rowspan="5">Estado del enchufe</td>
<td rowspan="5">connectorStatus</td>
<td rowspan="5">estado_de_recarga</td>
<td rowspan="5">texto</td>
<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
<td>Conectada a una toma de corriente de CA</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
<td>Conectada a un terminal de CC</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_DISCONNECTED"</td>
<td>Desconectada</td>
</tr>
<tr>
<td>«CONNECTION_STATUS_FAULT»</td>
<td>Confusión</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
<td>Estado indeterminado</td>
</tr>
	
		<!-- ------ -->
<!-- LAVADORA -->
		<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LIMPIACRISTALES</td>
</tr>
<tbody>
<tr>
<td rowspan="3">Nivel de limpieza de cristales</td>
<td rowspan="3">washerFluidLevel</td>
<td rowspan="3">diagnósticos</td>
<td rowspan="3">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nivel normal</td>
</tr>
<tr>
<td>«TOO_LOW»</td>
<td>Nivel bajo</td>
</tr>
<tr>
<td rowspan='2'>alerta de lavaparabrisas</td>
<td rowspan='2'>al_washerFluid</td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>El nivel es normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulta el comando <i>washer_fluid_level</i> para obtener más detalles)</td>
</tr>
		
			<!-- ------ -->
<!-- BRAKE -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LÍQUIDO DE FRENOS</td>
</tr>
</tbody>
<tr>
<td rowspan="3">Nivel del líquido de frenos</td>
<td rowspan="3">Nivel de líquido de frenos</td>
<td rowspan="3">frenos</td>
<td rowspan="3">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nivel normal</td>
</tr>
<tr>
<td>«TOO_LOW»</td>
<td>Nivel bajo</td>
</tr>
<tr>
<td rowspan='2'>alerta de líquido de frenos</td>
<td rowspan='2'>al_brake_fluid</td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>El nivel es normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulta el comando <i>brake_fluid_fluid_level</i> para obtener más detalles)</td>
</tr>
		
			<!-- ---- -->
<!-- TYRE -->
			<!-- ---- -->
<tr>
<td class="subtitle" colspan="6">PRESIÓN DE LOS NEUMÁTICOS</td>
</tr>
<tr>
<td rowspan="5">
neumático delantero izquierdo<br>
neumático delantero derecho<br>
neumático trasero izquierdo<br>
neumático trasero derecho
</td>
<td rowspan="5">
tyreFl<br>
tyreFr<br>
tyreRl<br>
tyreRr
</td>
<td rowspan="5">neumático</td>
<td rowspan="5">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Presión normal</td>
</tr>
<tr>
<td>«VERY_LOW_PRESSURE»</td>
<td>Presión muy baja</td>
</tr>
<tr>
<td>«LOW_PRESSURE»</td>
<td>Presión baja</td>
</tr>
<tr>
<td>«HIGH_PRESSURE»</td>
<td>Presión alta</td>
</tr>
<tr>
<td rowspan='2'>alerta de neumáticos</td>
<td rowspan='2'>al_tyre</td>
<td rowspan="2"></td>
<td rowspan='2'>binario</td>
<td>0</td>
<td>Las presiones son normales</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulta los comandos <i>tyre_*</i> para obtener más detalles)</td>
</tr>
		
			<!-- ------ -->
<!-- LUCES -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">ILUMINACIÓN</td>
</tr>
<tr>
<td rowspan="3">
luz de freno izquierda<br>
luz de freno derecha<br>
luz de freno central<br>
luz diurna izquierda<br>
luz diurna directa<br>
luces antiniebla delanteras<br>
luces antiniebla traseras<br>
luces de emergencia<br>
luz de giro a la izquierda<br>
luz de carretera<br>
luz de cruce izquierda<br>
luz de cruce derecha<br>
luz de posición delantera izquierda<br>
luz de posición delantera derecha<br>
luz de posición trasera izquierda<br>
luz de posición trasera derecha<br>
placa de fuego<br>
El fuego retrocede<br>
luces laterales<br>
luz intermitente delantera izquierda<br>
intermitente delantero derecho<br>
intermitente trasero izquierdo<br>
luz intermitente trasera derecha
</td>
<td rowspan="3">
al_brakeLightL<br>
al_brakeLightR<br>
al_brakeLightC<br>
al_daytimeRunningLightL<br>
al_daytimeRunningLightR<br>
al_fogLightF<br>
al_fogLightR<br>
al_hazardLights<br>
al_highBeamL<br>
al_highBeamR<br>
al_lowBeamL<br>
al_lowBeamR<br>
al_positionLightFl<br>
al_positionLightFr<br>
al_positionLightRl<br>
al_positionLightRr<br>
al_registrationPlateLight<br>
al_reverseLights<br>
al_sideMarkLights<br>
al_turnIndicationFl<br>
al_turnIndicationFr<br>
al_turnIndicationRl<br>
al_turnIndicationRr
</td>
<td rowspan="3">advertencias</td>
<td rowspan="3">texto</td>
<td>«SIN ESPECIFICAR»</td>
<td>Información no disponible</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Sin fallos</td>
</tr>
<tr>
<td>«FAILURE»</td>
<td>Error</td>
</tr>
<tr>
<td rowspan="2">alerta de lámparas</td>
<td rowspan="2">al_light</td>
<td rowspan="2"></td>
<td rowspan="2">binario</td>
<td>0</td>
<td>No hay ninguna lámpara defectuosa</td>
</tr>
<tr>
<td>1</td>
<td>Por defecto (consulta los comandos de luces para más detalles)</td>
</tr>

			<!-- ------ -->
<!-- PLUGIN -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">PLUGIN</td>
</tr>
<tr>
<td>mensajes para wigget</td>
<td>msg2wigget</td>
<td></td>
<td>texto</td>
<td>json</td>
<td>Mensajes sobre el funcionamiento del widget del panel</td>
</tr>
</tbody>
</table>

# Los puntos finales de las API de Volvocars
{: .num}

Este complemento utiliza tres API de VolvoCars. Cada una de estas API da acceso a puntos finales que proporcionan, cada uno de ellos, un
conjunto de datos. Las tablas de acciones y de información anteriores indican qué punto final proporciona
la información asociada a cada uno de los comandos «info» o «acción» del complemento.

Volvo limita el número de accesos diarios a las API a 10 000 por clave VCC-API. Para respetar este límite y, al mismo tiempo,
Para disponer de información actualizada sin demasiada demora, el complemento no accede a todos los puntos finales con la misma frecuencia.
La posición del vehículo, por ejemplo, se actualiza cada minuto para permitir cierta capacidad de respuesta cuando
El vehículo llega a casa, mientras que el nivel del líquido de frenos solo se comprueba cada 60 minutos.

## Los dispositivos finales
{: .num}

<table class="endpoint">
<thead>
<tr>
<th rowspan=2>API</th>
<th rowspan=2>punto final</th>
<th rowspan=2>frecuencia</th>
<th colspan=3 style="text-align:center">Número de llamadas diarias</th>
</tr>
<th>cualquier vehículo</th>
<th>motor térmico</th>
<th>motor eléctrico</th>
<tr>
</tr>
</thead>
<tbody>
<tr>
<td rowspan=15>Vehículo conectado</td>
<td>frenos</td>
<td>60 min.</td>
<td>24</td>
</tr>
<tr>
<td>accesibilidad de los comandos</td>
<td>5 min.</td>
<td>288</td>
</tr>
<tr>
<td>comandos<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>detalles<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>diagnósticos</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>puertas</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>motor</td>
<td>15 min.</td>
<td></td>
<td>96</td>
</tr>
<tr>
<td>engine-status</td>
<td>5 min.</td>
<td></td>
<td>288</td>
</tr>
<tr>
<td>combustible</td>
<td>30 min.</td>
<td></td>
<td>48</td>
</tr>
<tr>
<td>cuentakilómetros</td>
<td>15 min.</td>
<td>96</td>
</tr>
<tr>
<td>estadísticas</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>neumáticos</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>vehículos<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>advertencias</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>Windows</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>Alquiler</td>
<td>alquiler</td>
<td>1 min.</td>
<td>1'440</td>
</tr>
<tr>
<td>Energía</td>
<td>estado-de-recarga</td>
<td>5 min.</td>
<td></td>
<td></td>
<td>288</td>
</tr>
<tr>
<th>Total</th>
<th></th>
<th></th>
<th>3672</th>
<th>432</th>
<th>288</th>
</tr>
</tbody>
</table>
<sup>1</sup> Punto final al que se accede al sincronizar una cuenta.

Así pues, hay:
+ 4104 llamadas al día por un vehículo de combustión.
+ 3.960 llamadas al día para un vehículo eléctrico.
+ 4392 llamadas al día para un vehículo híbrido.

A esto hay que añadir las llamadas que se realizan al enviar un pedido, al actualizar la página o al sincronizar los vehículos asociados a una cuenta.

