---
layout: default
title : Volvocars
plugin : volvocars
lang: es_ES
---

# Notas de la versión

### **2026/06/12**
+ Solución a un aviso de PHP 8. Gracias, @bernard-dandrea

### **2026/03/26**
+ La versión beta del 24 de marzo de 2026 pasa a ser estable

### 2026/03/24
+ Visualización de CollectDate y valueDate al pasar el ratón por encima de los controles «info» del widget del panel

### **2026/03/23**
+ Modificación del flujo de las API de conexión tras un cambio en Volvo

### **2026/03/19**
+ La versión beta del 11 de marzo de 2026 pasa a ser estable

### 11 de marzo de 2026, versión beta
+ Visualización de CollectDate y valueDate al pasar el ratón por encima de los controles «info» del widget del panel de control

### **2026/03/10**
+  Transición de la API «energy» de la versión 1 a la versión 2

### 2025/03/24
+ Corrección de la configuración y creación del comando «timeToRun»

### 2025/03/23
+ Intento de corregir un error al arrancar el motor térmico.

### 2025/03/22
+ Se han añadido tres mandos para arrancar y parar el motor térmico.
  + *engineStart* para arrancar.
  + *engineStop* para detener.
  + *timeToRun* para definir la duración del funcionamiento (de 1 a 15 minutos).

+ Estos comandos solo se crean si el punto final *commands* devuelve **ENGINE_START** y **ENGINE_STOP**
+ **Es necesario iniciar una sincronización tras actualizar el complemento para crear estos comandos**

**Mi Volvo es 100 % eléctrico, así que no he podido probar estos mandos. Espero vuestros comentarios.**

### **2024/11/28**
+ La versión beta del 26 de noviembre de 2024 pasa a ser estable

### 2024/11/26
+ Corrección para los vehículos sin techo corredizo:
  + Los comandos `roofState`, `roofOpen` y `roofClosed` de un vehículo se eliminarán al actualizar el complemento si
El valor del comando `roofState` no es **CLOSED**, **OPEN** ni **AJAR**.

### **2024/11/16** 
+ La versión beta del 13 de noviembre de 2024 pasa a ser estable

### 13 de noviembre de 2024, versión beta
+ Corrección de errores
+ Creación de los comandos **allDoorsClosed** y **allWinsClosed**.
   + Estos dos comandos se añaden automáticamente a los vehículos existentes al actualizar el complemento.
+ Widget para los paneles de control

### **2024/11/06**
+ Se ha añadido un parámetro de configuración del complemento para la clave personal de acceso a las API de Volvocars.
**ATENCIÓN** Es necesario generar una clave en la página web developers.volvocars. El procedimiento aún no se ha descrito en la documentación.
del complemento, os invito a consultar este [tema en la comunidad](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
para crear tu propia clave.

### **2024/11/05** 
* Se ha corregido un error que impedía guardar el token de la primera cuenta

### **2024/11/04** 
+ La versión beta del 4 de noviembre de 2024 pasa a ser estable

### 4 de noviembre de 2024, versión beta
+ Implementación de la autenticación en dos fases para las cuentas de Volvocars
**ATENCIÓN:**
Es necesario editar y guardar las cuentas para activar la autenticación en dos pasos.

### **2024/10/15**
+ Se ha corregido un error en el panel relacionado con los vehículos con motor de combustión.

### **2024/10/10**
+ La versión beta del 9 de octubre de 2024 pasa a ser estable

### 09/10/2024 beta (bis)
+ Se ha añadido una opción **visible en el panel** en la configuración de los vehículos

### 9 de octubre de 2024, versión beta
+ Los comandos vinculados directamente a un punto final no se pueden eliminar. Se volverían a crear.
automáticamente al recibir una notificación enviada a través de un punto final.
+ Se ha corregido un error en la ordenación de los pedidos

### 8 de octubre de 2024, versión beta
+ Primera versión beta oficial
