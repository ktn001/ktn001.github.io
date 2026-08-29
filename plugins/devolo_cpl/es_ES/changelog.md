---
layout: default
title : devolo_cpl
plugin : devolo_cpl
lang: es_ES
---

# Notas de la versión

### **11 de mayo de 2026, versión estable**
+ **05/05/2026 beta** pasada a versión estable

### 5 de mayo de 2026, versión beta
+ Módulo Python devolo_plc_api: actualización de la versión 1.4.1 a la 1.5.1
Esta nueva versión incluye un tratamiento de los tiempos de espera durante la conexión a los dispositivos.

### **4 de mayo de 2026, versión estable**
+ **4 de mayo de 2026, versión beta**, ahora en versión estable

### 4 de mayo de 2026, versión beta
+ Algunas mejoras menores, principalmente de carácter estético.

### 29/04/2026 beta
+ Se ha corregido un error de JS en la ventana modal «macInfos»

### 27 de abril de 2026, versión beta
+ Algunas mejoras menores, principalmente de carácter estético, en los widgets.

### 21 de abril de 2026, versión beta
+ Nuevos comandos para la información sobre el caudal entre los dispositivos PLC

### **18/04/2026 estable**
+ **12/04/2026 beta** pasada a versión estable

### 12 de abril de 2026, versión beta
+ Se han eliminado las dependencias de jQuery. Sin embargo, el núcleo de Jeedom sigue necesitando jQuery para funcionar en dispositivos móviles.

### **25/07/2025 estable**
+ Forzar la versión 1.4.1 del módulo devolo_plc_api (el complemento debe adaptarse y probarse para la versión 1.5.1)

### **16/03/2025 estable**
+ Limpieza de los registros

### **11 de marzo de 2025, versión estable**
+ **10/03/2025 beta** pasada a versión estable

### 10 de marzo de 2025, versión beta
+ Actualización de traducciones

### 10 de marzo de 2025, versión beta
+ Corrección de un error (Magic 2 LAN DINrail)

### 20/02/2025 beta
+ Se ha añadido una opción al complemento para ocultar las contraseñas y otros datos confidenciales en los registros

### **4 de enero de 2025, versión estable**
+ Se ha cambiado el nombre del archivo de registro de la sincronización para que aparezca en la página de configuración del complemento

### **2 de enero de 2025, versión estable**
+ Se ha corregido un error relacionado con un mensaje de error en los registros

### **24/10/2024 estable**
+ Eliminación del archivo plugin_info/packages.json

### **23/10/2024 estable**
+ **4 de septiembre de 2024, versión beta**, ahora en versión estable

### 4 de septiembre de 2024, versión beta (bis)
+ Traducción del complemento a los siguientes idiomas:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### 4 de septiembre de 2024, versión beta
+ El complemento ya no incluye versiones modificadas del módulo Python devolo_plc_api. Ahora se instala el módulo sin modificar.
con las dependencias en un entorno virtual de Python.
+ Las dependencias deben reinstalarse tras actualizar el complemento
+ Esta versión es compatible con Debian 12

### 5 de octubre de 2023, versión beta
+ Se ha añadido un tratamiento de excepciones en el demonio.
Esta incorporación podría provocar muchos mensajes de error. Espero vuestros comentarios al respecto.

### 19 de septiembre de 2023, versión beta
+ La lista de dispositivos conectados a la red WiFi se actualiza cada 15 segundos (antes lo hacía cada minuto).

### **29/08/2023 estable**
+ En algunos casos, la vigilancia «offline» no se había desactivado

### **25/08/2023 estable**
+ Se ha corregido un error que generaba mensajes en `http.error`.

### **20/08/2023, versión estable**
+ **15/08/2023 beta** pasada a versión estable

### 15 de agosto de 2023, versión beta
+ Nuevo plugin: nivel 13
  + Activación de las alertas «offline» en todos los dispositivos del complemento.
  + Incorporación de un comando de información `online` en todos los dispositivos existentes.
+ Nueva opción para (des)activar las alertas cuando un dispositivo está desconectado.

### **14 de julio de 2023, versión estable**
+ devolo_plv_api
  + Se ha añadido la versión 1.3.2, que corrige un posible fallo de fuga de memoria
  + Eliminación de la versión 1.1.0
  + Eliminación de la versión 1.2.0
+ Nuevo plugin: nivel 12
  + Activación de devolo_plc_api 1.3.2

### **14 de junio de 2023, versión estable**
+ **13/06/2023 beta** pasada a versión estable

### 13 de junio de 2023, versión beta
+ Corrección de un error en el widget dashboard/action/j_h_m

### 11 de junio de 2023, versión beta
+ El widget móvil para configurar el horario de activación de WifiGuest permite modificar el valor.

### 9 de junio de 2023, versión beta
+ Nuevo plugin: nivel 11
  + Nuevos widgets que muestran el tiempo que queda antes de que se desconecte la red wifi para invitados.
    + La duración de la activación de la red Wi-Fi para invitados aún no se puede modificar a través del
widget para dispositivos móviles.

### 26 de mayo de 2023, versión beta
+ Nuevo plugin: nivel 10.
  + Configuración para utilizar la versión 1.3.1 de devolo_plc_api
  + Creación de comandos para la gestión de la red wifi para invitados
    + El comando `duración guest` (logicalId *guest_duration*) permite definir el tiempo, en minutos, tras el cual
en el que se desactivará la red wifi para invitados. El valor 0 indica que la red wifi no debe desactivarse.
+ Optimización del script de sincronización
+ Los registros de sincronización ya no se encuentran en «devolo_cpl_out», sino en «devolo_synchronize».

### **23/05/2023 estable**
+ **23/04/2023 beta** pasada a versión estable

### 23 de abril de 2023, versión beta
+ Versión mínima de Protobuf: 4.21.12
  + Las dependencias deben reinstalarse tras la actualización

### 18 de abril de 2023, versión beta
+ Nuevo plugin: nivel 9.
  + Configuración para utilizar la versión 1.3.0 de devolo_plc_api
+ Limitación de la introducción de nombres de direcciones MAC a 30 caracteres
+ Se ha añadido la versión 1.3.0 del módulo devolo_plc_api (las versiones 1.1.0 y 1.2.0 siguen estando disponibles)

### 17 de abril de 2023, versión beta
+ Nuevo plugin: nivel 8.
  + Creación de una tabla `devolo_connection` para registrar el historial de
conexiones Wi-Fi.
  + Creación de una tabla `devolo_macinfo` para las configuraciones de las direcciones MAC.
+ Registro del historial de conexiones de los clientes Wi-Fi
+ Nueva pestaña en el panel para los gráficos del historial de conexiones Wi-Fi.
  
### 15 de abril de 2023, versión beta
+ Se ha corregido la visualización de las imágenes de los dispositivos.

### 14 de abril de 2023, versión beta
+ Se ha añadido el módulo *requests* a las dependencias.

### 9 de marzo de 2023, versión beta
+ Nuevo plugin: nivel 7.
  + Activación del panel
 
+ Configuración del complemento
  + Una nueva opción permite definir si se muestran los nombres de los dispositivos
en las tablas y gráficos deben mostrarse con o sin los nombres de los objetos:
     + `[<nombre_objeto>][<nombre_equipo>]`
     + `<nombre_del_dispositivo>`
  + El complemento ahora incluye un *panel*. Este *panel* se puede activar o desactivar
en la página de configuración del complemento.
  + Interfaz
    + Nuevo *panel* para visualizar gráficos de los caudales entre los dispositivos PLC.

### 4 de marzo de 2023, versión beta
+ Nuevo plugin: nivel 6.
  + Clasificación de los mandos de los equipos existentes.
  + Creación de tres comandos para las versiones y la disponibilidad del firmware para
los equipos existentes.

+ Funcionalidad
  + Actualización de las versiones de firmware e información sobre si hay alguna actualización disponible.

+ Interfaz
  + Modificación de la forma en que se muestran los nombres de los dispositivos en la tabla de caudales.
  + Mejora de la gestión de los pedidos en caso de cambio de modelo de un
equipos.

+ código
  + Mejora.
  + Corrección de errores.
  + Eliminación de archivos innecesarios.
  + Las direcciones MAC de los dispositivos se registran desde la primera sincronización.

### 24/02/2023 beta
+ Nuevo plugin: nivel 5.
   + (Re)creación de la tabla de caudales.

+ Desinstalación
   + La tabla de caudales ya no se ha eliminado.

+ Corrección de errores
   + La tabla de caudales se eliminaba al desactivar el complemento.

### 22/02/2023 beta

+ Actualización o instalación:
   + Nuevo plugin. Nivel: 4.
   + El periodo de retención de los caudales se establece inicialmente en una semana.
   + Se ha creado la tabla para registrar los caudales en la base de datos.

+ Desinstalación
   + Eliminación de la tabla de velocidades de la tecnología PLC.

+ Configuración de los dispositivos
   + nuevo parámetro «Red».

+ Interfaz:
   + Tabla de presentación de caudales.

### 18/02/2023 beta

+ dependencias:
   + Incorporación del módulo de Python *importlib-metadata*
> :bulb: Hay que volver a ejecutar la instalación de las dependencias tras actualizar el complemento.

+ módulo devolo_plc_api:
   + Actualización a la versión 1.2.0
   + La versión 1.2.0 es una versión modificada para que sea compatible con Python 3.7.
   + Una opción de la página de configuración del complemento permite volver a la versión 1.1.0 en caso de que sea necesario.
   + Por favor, abre un tema en el foro de Jeedom si tienes que volver a la versión 1.1.0.

### 14 de febrero de 2023, versión beta bis
+ Indicación de las versiones de los módulos dependientes.

### 14 de febrero de 2023, versión beta
+ Localización de los dispositivos.
+ Algunas correcciones de errores.

### 12 de febrero de 2023, versión beta
+ Distinción entre dispositivos «gestionables» y «no gestionables».
+ Se han añadido los modelos DL550 y DL1200 sin wifi y no gestionables.
+ Incorporación de la dirección MAC en la configuración de los dispositivos.
+ Algunas correcciones de errores.

### 8 de febrero de 2023, versión beta
+ Se ha añadido un registro para analizar los errores que se producen al detectar los DL550.

### 7 de febrero de 2023, versión beta
+ Se ha corregido un error en la selección del país.

### 7 de febrero de 2023, versión beta
Primera versión para
+ Confirmar la detección automática de dispositivos.
+ Validar las imágenes.
+ Confirma el envío del comando para encender o apagar los LED de los dispositivos.
