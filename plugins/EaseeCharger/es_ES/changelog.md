---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: es_ES
---
# Notas de la versión

**IMPORTANTE**

Recuerda que, si no hay información sobre la actualización, es porque esta solo afecta a
actualización de documentación, traducción o texto.

### 14/11/2026 (Beta)
+ Se ha añadido un campo «Comentario» en la página de configuración del equipo.

### 13/11/2026 (Beta)
+ Se han revisado y actualizado las funciones de gestión de tokens. No hay cambios visibles para
el usuario.
+ Se ha reescrito el daemon. Ya no utiliza el módulo *signalrcore*, sino *pyeasee*. Una
Se espera una mejora de la estabilidad.
+ El nombre del archivo de registro del daemon ya no es *EaseeCharger_daemon.out*, sino *EaseeCharger_daemon*
+ Se han modificado los logicalId de los comandos con la información recibida de la nube. El logicalId es
ahora el ID de la observación se transmite desde la nube a través de SignalR.
+ Se crean dinámicamente numerosos comandos nuevos al recibir información de la nube.
+ La información procedente de la nube cuyo valor es un código se duplica:
  +  Un comando con el código numérico recuperado de la nube
  +  Un comando con texto sin cifrar. Este texto se traduce al idioma de la interfaz de Jeedom.

### 17/01/2025
+ Pasar de la versión beta del 12/01/2025 a la versión estable

### 12/01/2025 (Beta)
+ Mejora de la comunicación entre Daemon y Jeedom
+ Corrección del almacenamiento del token en la caché

### 12/01/2025 (Beta)
+ Corrección de errores
 
### 31/12/2024 (Beta)
+ Reescritura de gran parte del código
+ Se requiere la versión 4.4.9 o superior de Core
+ Compatible con Debian 12
+ Ya no utiliza la función jQuery

### 11/11/2024
+ Corrección de un error en la instalación de las dependencias

### 09/11/2024
+ El daemon se ejecuta en un entorno virtual de Python

### 28/07/2024
+ Transición de las versiones beta anteriores a la versión estable
+ Actualización de los comandos al actualizar el complemento

### 28/07/24 (Beta)
+ Rediseño del proceso de creación y actualización de pedidos.
Se recomienda actualizar los comandos mediante el botón «Actualizar comandos» de la
página de controles de cada cargador

### 26/07/2024 (Beta)
+ Corrección de widgets
+ Rediseño de la página de pedidos

### 24/07/2024
+ Configuración de un «heartbeat» al activar el complemento

### 1/7/2023
+ Cambio de URL para las API de Easee

### 17/10/2022
+ Información que indica si la conexión con la nube es por wifi o por red móvil

### 14/10/2022
* Cambio a modo estable
* Transparencia de los mosaicos del widget para que se vea el gráfico de fondo
* Botones en el widget de equipos para poner en pausa y reanudar

### 30/09/2022 (Beta)
* El puerto del demonio ya no se restablece a su valor por defecto al activar el complemento
* Se ha cambiado el nombre de una clase en el código PHP
* Información sobre la calidad de las señales wifi y de telefonía móvil
* Creación de un widget para los dispositivos EaseeCharger (sin el botón de pausa de la
carga)

### 24/08/2022 (Beta)
* El puerto del demonio ya no se restablece a su valor por defecto al activar el complemento

### 21/08/2022 (Beta)
* Incorporación de un contador de reinicios por parte del «watcher».

### 21/08/2022 (Beta)
* Se ha añadido un observador para reiniciar las conexiones del demonio tras una desconexión no notificada.

### 18/08/2022 (Beta)
* Primera publicación
