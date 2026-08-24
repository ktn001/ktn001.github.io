---
layout : default
title : defectos
lang: es_ES
---


# Complemento «Fallos» para Jeedom

El complemento **Faltas** permite detectar fallos comprobando la coherencia entre un estado y una medición.

# Algunos ejemplos:
{: .num}

- una lámpara encendida pero sin consumo (bombilla defectuosa o señal de retorno errónea).
- Una lámpara apagada, pero con un consumo superior a 1 vatio (fallo en el circuito de retorno).
- La bomba está en marcha, pero no hay caudal.

El complemento también puede notificar fallos cuando el valor de una medición se desvía demasiado de un valor de referencia.

# Configuración del complemento
{: .num}
El complemento no requiere ninguna configuración, solo hay que activarlo.

![Página de configuración del complemento](/images/defauts/config_plugin.png)

# Los equipos
{: .num}
Un equipo **Defectos** permite supervisar la coherencia de varias combinaciones de estados y valores. Información
indica, para cada una de estas monitorizaciones, si la situación actual es coherente o no.

Además, se activa un aviso **por error** cuando un sistema de supervisión detecta una inconsistencia. Este aviso permanece activo
hasta que se resuelva, aunque desaparezca la incoherencia.

## Creación
{: .num}
Los equipos **de fallos** se crean en la página del complemento, a la que se puede acceder a través del menú «Complementos» ==> «Supervisión» ==> «Fallos».
El equipo se configura mediante tres controles:
+ Un comando **por defecto**, de tipo informativo, que indica si se ha detectado o se ha detectado alguna inconsistencia por parte de uno de los sistemas de supervisión del equipo.
+ Un comando **Confirmación**, de tipo acción, para confirmar los fallos detectados.
+ Un comando **histórico**, de tipo informativo, que permite visualizar las últimas anomalías detectadas.

## Configuración
{: .num}
### Equipos
{: .num}
Además de las configuraciones habituales, el equipo cuenta con dos parámetros que permiten definir el funcionamiento de la **confirmación automática**:
* **Autocomprobación**
indica si los fallos deben confirmarse automáticamente o no.
* **Plazos** *(visible solo si la confirmación automática está activada)*
Los plazos de espera
   
### Comprobaciones de coherencia
{: .num}
El panel «Supervisiones» permite gestionar las supervisiones del equipo. El botón «Añadir una supervisión» añade una supervisión de coherencia al equipo.

#### Las comprobaciones de coherencia tienen varios parámetros:
{: .num}
![Configuración de una supervisión de coherencia](/images/defauts/config_surveillance.png)
* ***Nombre:*** Nombre de la supervisión.
* ***Estado:*** Información binaria que hay que vigilar.
* ***Medida:*** Información digital que hay que vigilar.
* ***Límite:*** Valor que debe alcanzar la medición cuando el estado es 1 (se produce una incoherencia si no se alcanza este valor. También se produce una incoherencia si se alcanza este valor cuando el estado es 0).
* ***Retardo:*** Plazos para alcanzar el límite tras un cambio de estado.
* ***Invertir:*** Inversión de la supervisión. El valor debe ser superior al límite cuando el estado es 0.
* ***En:*** Vigilancia activa cuando el estado es 1.
* ***Excepto:*** Vigilancia activa cuando el estado es 0.
* ***Mostrar:*** Visualización de la información.
* ***Visualización invertida:*** Inversión del valor que se muestra (permite que aparezca un icono verde si todo va bien y uno rojo en caso de fallo).
* ***Archivar:*** Archivo de la información.

### Supervisión de valores de consigna
{: .num}
![Configuración de la supervisión de valores de consigna](/images/defauts/config_consigne.png)
* ***Nombre:*** Nombre de la supervisión.
* ***Estado:*** Información binaria utilizada para controlar el funcionamiento de la vigilancia.
* ***Medida:*** Información digital; se señalará un fallo si el valor de esta medida se aleja demasiado del valor de consigna.
* ***Consigna:*** Dato numérico, valor que debe alcanzar la vivienda.
* ***Límite:*** Se notifica un fallo si el valor absoluto de la diferencia entre el valor de referencia y la medición es superior a este límite.
* ***Tempo de inspiración:*** Periodo, en segundos, durante el cual se desactiva la supervisión tras un cambio de ***estado***.
* ***En:*** La supervisión se activa cuando el ***estado*** es 1, si esta opción está activada.
* ***Fuera de casa:*** La supervisión se activa cuando el ***estado*** es 0, si esta opción está activada.
* ***Archivar:*** Archivo de la información.

### Un poco de historia
{: .num}
![historial](/images/defauts/historique.png)

El comando «histórico» y su widget permiten ver los cinco últimos fallos que se han producido. El número de eventos que aparecen en la lista se puede configurar.

Se puede configurar el periodo de retención de los eventos que aparecen en la lista. Los eventos que se hayan producido antes de que finalice dicho periodo se eliminan de la lista. Así, los eventos que se hayan producido hace más de dos días se eliminan de la lista si el periodo de retención es de dos días.

#### El historial tiene varios parámetros:
{: .num}

![configuración del historial](/images/defauts/config_histo.png)

* ***Nombre:*** Nombre del historial.
* ***Tamaño:***  Número de entradas del historial que se muestran en el widget (5 como máximo)
* ***Retención:*** Tiempo durante el que se conserva una entrada en el historial. Este tiempo puede expresarse en minutos, horas o días.
* ***Formato de fecha:*** Formato de la fecha en el historial.
Son compatibles los siguientes formatos (solicita la incorporación de otros formatos a través del foro de Jeedom):

| formato | ejemplo |
    | ------ | ------- |
| dd-mm HH:MM:SS | 02-06 17:35:40 |
| dd/mm HH:MM:SS | 02/06 17:35:40 |
| dd/mm/aa HH:MM:SS | 02/06/21 17:35:40 |
| dd mmm aaaa HH:MM:SS | 2 de junio de 2021 17:35:40 |

* ***Mostrar:*** Indica si el widget debe mostrarse o no.

# Ejemplos
{: .num}

| Etapa | Widget del equipo (color) | Widget del equipo (blanco/negro) | Observaciones |
| :---- | :----:  | :----: | :---- |
| Situación inicial: | ![](/images/defauts/defauts_initial.png «Estado inicial») | ![](/images/defauts/defauts_initial_bw.png «Estado inicial») | No hay fallos. Los sistemas de supervisión se encuentran en estado normal. |
| 1<sup>era</sup> de vigilancia en estado anómalo | ![](/images/defauts/defauts_premier_defaut.png) | ![](/images/defauts/defauts_premier_defaut_bw.png) | El icono de fallo indica que se ha producido una anomalía que no ha sido confirmada. |
| Confirmación de la resolución del fallo | ![](/images/defauts/defauts_acquitte.png) | ![](/images/defauts/defauts_acquitte_bw.png) | El fallo se ha confirmado haciendo clic en el icono (o mediante la confirmación automática). El icono de fallo indica que la anomalía sigue presente. |
| 2<sup>ª</sup> anomalía |![](/images/defauts/defauts_deuxieme_defaut.png) | ![](/images/defauts/defauts_deuxieme_defaut_bw.png) | El icono de fallo indica que hay una nueva anomalía. |
| Desaparición de las anomalías |![](/images/defauts/defauts_plus_de_defaut_pas_acquitte.png) | ![](/images/defauts/defauts_plus_de_defaut_pas_acquitte_bw.png) | El icono de fallo indica que se ha producido al menos una anomalía que no se ha resuelto. |
| Vuelta a la normalidad: | ![](/images/defauts/defauts_initial.png «Estado inicial») | ![](/images/defauts/defauts_initial_bw.png «Estado inicial») | Las anomalías se han resuelto y han desaparecido. |
