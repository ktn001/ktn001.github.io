---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: es_ES
---

# Notas de la versión

### 20/10/2026 BETA
+ Se ha corregido un error menor que se producía al ejecutar un «kick» mientras se reescribía un script en Shelly.
+ El comando «mantenimiento» pasa a llamarse «mantenimiento (físico)».
+ Creación de un botón virtual de mantenimiento en Shelly
+ Revisión del código de configuración/desconfiguración de Shelly

### 01/10/2026 a BETA
+ Se ha corregido un error que impedía crear un dispositivo

### 01/10/2026 BETA
+ Reescritura del código de configuración de Shelly
  + Pasamos de un método *bruto*, que redefinía todo, a un método *sutil*, que solo redefine lo que hay que modificar.
+ El Shelly se (re)configura automáticamente cada vez que se guarda la configuración del equipo Jeedom.
+ El botón <**Configurar el interruptor**> pasa a llamarse <**Forzar la configuración del interruptor**>. Cambia de color de verde a naranja.
+ El cron del kick se activa/desactiva con el eqLogic.
+ El Shelly se desconfigura automáticamente antes de eliminar un dispositivo

### **21/09/2026 ESTABLE**
+ La versión beta del 17/09/2026 ha pasado a ser estable.

### 17/09/2026 BETA
+ Se ha añadido un botón en la página de configuración del dispositivo para abrir una nueva pestaña en la página de administración de Shelly.
+ **Experimental:** Se ha añadido compatibilidad con el *Shelly Power Strip*.

### 15/09/2026 BETA
+ Primera versión.
