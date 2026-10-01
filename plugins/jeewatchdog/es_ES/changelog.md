---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: es_ES
---

# Notas de la versión

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
