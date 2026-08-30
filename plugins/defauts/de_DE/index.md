---
layout : default
pluginId : defauts
plugin : Défauts
lang: de_DE
img01: 01_config_plugin.png
img02: 02_config_surveillance.png
img03: 03_config_consigne.png
img04: 04_historique.png
img05: 05_config_histo.png
img06: 06_defauts_initial.png
img07: 07_defauts_initial_bw.png
img08: 08_defauts_premier_defaut.png
img09: 09_defauts_premier_defaut_bw.png
img10: 10_defauts_acquitte.png
img11: 11_defauts_acquitte_bw.png
img12: 12_defauts_deuxieme_defaut.png
img13: 13_defauts_deuxieme_defaut_bw.png
img14: 14_defauts_plus_de_defaut_pas_acquitte.png
img15: 15_defauts_plus_de_defaut_pas_acquitte_bw.png
---
# Plugin „{{page.plugin}}“ für Jeedom.
Das Plugin **{{page.plugin}}** ermöglicht die Erkennung von Fehlern, indem es die Übereinstimmung zwischen einem Status und einem Messwert überprüft.

# Einige Beispiele:
{: .num}

- Die Lampe leuchtet, verbraucht aber keinen Strom (defekte Glühbirne oder fehlerhaftes Rückmeldesignal).
- Eine Lampe ist ausgeschaltet, verbraucht aber mehr als 1 Watt (fehlerhafter Rückmeldungszustand).
- Die Pumpe ist eingeschaltet, es fließt jedoch kein Wasser.

Das Plugin kann auch Fehler melden, wenn der Messwert zu stark von einem Sollwert abweicht.

# Einrichtung des Plugins
{: .num}

Das Plugin erfordert keine Konfiguration, es muss lediglich aktiviert werden.

{% include image.html img=page.img01 %}

# Die Geräte
{: .num}

Mit dem Modul **{{page.plugin}}** lässt sich die Konsistenz mehrerer Kombinationen aus Zuständen und Werten überwachen. Eine Info
gibt für jede dieser Überwachungen an, ob die aktuelle Situation konsistent ist oder nicht.

Außerdem wird eine **Fehler**-Meldung ausgelöst, wenn eine Überwachung eine Unstimmigkeit feststellt. Diese Meldung bleibt aktiv.
bis sie freigesprochen wird, auch wenn die Unstimmigkeit behoben ist.

## Entwicklung
{: .num}

Die Geräte **{{page.plugin}}** werden auf der Plugin-Seite erstellt, die über das Menü `Plugins` ==> `Überwachung` ==> `{{page.plugin}}` erreichbar ist.
Das Gerät verfügt über drei Bedienelemente:
+ Ein **Standard**-Befehl vom Typ „Info“, der angibt, ob von einer der Überwachungsfunktionen des Geräts eine Inkonsistenz erkannt wird oder wurde.
+ Ein Befehl vom Typ „**Quittierung**“ (Aktion), um die erkannten Fehler zu quittieren.
+ Ein **Verlaufs**-Befehl vom Typ „Info“, mit dem die zuletzt erkannten Störungen angezeigt werden können.

## Konfiguration
{: .num}

### Ausstattung
{: .num}

Neben den üblichen Einstellungen verfügt das Gerät über zwei Parameter, mit denen die Funktionsweise der **automatischen Quittierung** festgelegt werden kann:
* **Automatische Quittierung**\
Gibt an, ob Fehler automatisch quittiert werden sollen oder nicht.
* **Fristen** *(nur sichtbar, wenn die automatische Quittierung aktiviert ist)*\
Wartezeiten

### Konsistenzprüfungen
{: .num}

Über das Panel „Überwachungen“ können Sie die Überwachungen der Geräte verwalten. Mit der Schaltfläche „Überwachung hinzufügen“ fügen Sie eine Konsistenzüberwachung für das Gerät hinzu.

#### Die Konsistenzüberprüfungen umfassen mehrere Parameter:
{: .num}

{% include image.html img=page.img02 %}
* ***Name:*** Name der Überwachung.
* ***Status:*** Binäre Information, die überwacht werden muss.
* ***Maßnahme:*** Digitale Daten im Blick behalten.
* ***Grenzwert:*** Der Wert, der vom Messwert erreicht werden muss, wenn der Status 1 ist (Inkonsistenz, wenn dieser Wert nicht erreicht wird. Eine Inkonsistenz liegt auch vor, wenn dieser Wert erreicht wird, während der Status 0 ist).
* ***Verzögerung:*** Zeit, die benötigt wird, um nach einem Zustandswechsel den Grenzwert zu erreichen.
* ***Umkehren:*** Umkehrung der Überwachung. Der Messwert muss über dem Grenzwert liegen, wenn der Status 0 ist.
* ***En:*** Aktive Überwachung, wenn der Status auf 1 gesetzt ist.
* ***Ausgenommen:*** Aktive Überwachung, wenn der Status auf 0 steht.
* ***Anzeigen:*** Informationen anzeigen.
* ***Invertierte Anzeige:*** Umkehrung des Wertes für die Anzeige (sodass bei ordnungsgemäßem Betrieb ein grünes Symbol und bei einem Fehler ein rotes Symbol angezeigt wird).
* ***Protokollieren:*** Protokollierung der Informationen.

### Überwachung der Sollwerte
{: .num}

{% include image.html img=page.img03 %}
* ***Name:*** Name der Überwachung.
* ***Status:*** Binäre Information, die zur Steuerung des Überwachungsbetriebs verwendet wird.
* ***Messwert:*** Digitale Anzeige; ein Fehler wird gemeldet, wenn der Messwert zu stark vom Sollwert abweicht.
* ***Vorgabe:*** Digitaler Wert, den das Gerät erreichen muss.
* ***Grenzwert:*** Ein Fehler wird gemeldet, wenn der Absolutwert der Differenz zwischen dem Sollwert und dem Messwert diesen Grenzwert überschreitet.
* ***Temposiration:*** Zeitraum in Sekunden, während dessen die Überwachung nach einer Änderung des ***Status*** deaktiviert ist.
* ***En:*** Die Überwachung wird aktiviert, wenn der ***Status*** auf 1 steht, sofern diese Option aktiviert ist.
* ***Abwesenheit:*** Die Überwachung wird aktiviert, wenn der ***Status*** auf 0 steht, sofern diese Option aktiviert ist.
* ***Protokollieren:*** Protokollierung der Informationen.

### Ein Blick in die Geschichte
{: .num}

{% include image.html img=page.img04 %}

Mit dem Befehl *Verlauf* und dem dazugehörigen Widget können die fünf zuletzt aufgetretenen Störungen angezeigt werden. Die Anzahl der aufgelisteten Ereignisse ist konfigurierbar.

Die Aufbewahrungsdauer der aufgelisteten Ereignisse kann konfiguriert werden. Ereignisse, die vor Ablauf der Aufbewahrungsdauer aufgetreten sind, werden aus der Liste entfernt. So werden beispielsweise Ereignisse, die vor mehr als zwei Tagen aufgetreten sind, aus der Liste entfernt, wenn die Aufbewahrungsdauer zwei Tage beträgt.

#### Der Verlauf verfügt über mehrere Einstellungen:
{: .num}

{% include image.html img=page.img05 %}

* ***Name:*** Name des Verlaufs.
* ***Größe:***  Anzahl der im Widget angezeigten Protokolleinträge (maximal 5)
* ***Aufbewahrungsdauer:*** Dauer, für die ein Eintrag im Verlauf gespeichert bleibt. Diese Dauer kann in Minuten, Stunden oder Tagen angegeben werden
* ***Datumsformat:*** Format der Datumsangabe im Verlauf.\
Die folgenden Formate sind möglich (Bitte stellen Sie im Jeedom-Forum eine Anfrage, falls Sie weitere Formate hinzufügen möchten):

| Format | Beispiel |
    | ------ | ------- |
| tt-mm HH:MM:SS | 06.02. 17:35:40 |
| TT/MM HH:MM:SS | 02.06. 17:35:40 |
| TT/MM/JJ HH:MM:SS | 02.06.21 17:35:40 |
| tt mmm aaaa HH:MM:SS | 02. Juni 2021 17:35:40 |

* ***Anzeigen:*** Gibt an, ob das Widget angezeigt werden soll oder nicht.

# Beispiele
{: .num}

<table>
<thead>
<tr>
<th style="text-align: left">Schritt</th>
<th style="text-align: center">Geräte-Widget (Farbe)</th>
<th style="text-align: center">Geräte-Widget (schwarz/weiß)</th>
<th style="text-align: left">Anmerkungen</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ausgangssituation:</td>
<td style="text-align:center;">{% include image.html img=page.img06 %}</td>
<td style="text-align:center;">{% include image.html img=page.img07 %}</td>
<td>Keine Störung, die Überwachungssysteme sind im Normalzustand.</td>
</tr>
<tr>
<td>1<sup>Überwachung</sup>bei Störzuständen</td>
<td style="text-align:center;">{% include image.html img=page.img08 %}</td>
<td style="text-align:center;">{% include image.html img=page.img09 %}</td>
<td>Das Fehlersymbol zeigt an, dass eine Störung aufgetreten ist, die noch nicht quittiert wurde.</td>
</tr>
<tr>
<td>1<sup>Stufe</sup>Fehlerquittierung</td>
<td style="text-align:center;">{% include image.html img=page.img10 %}</td>
<td style="text-align:center;">{% include image.html img=page.img11 %}</td>
<td>Der Fehler wurde durch einen Klick auf das Symbol (oder durch automatische Quittierung) quittiert. Das Fehlersymbol zeigt an, dass die Störung weiterhin besteht.</td>
</tr>
<tr>
<td>2<sup>.</sup> Störung</td>
<td style="text-align:center;">{% include image.html img=page.img12 %}</td>
<td style="text-align:center;">{% include image.html img=page.img13 %}</td>
<td>Das Fehlersymbol zeigt an, dass eine neue Störung vorliegt</td>
</tr>
<tr>
<td>Behebung der Fehler</td>
<td style="text-align:center;">{% include image.html img=page.img14 %}</td>
<td style="text-align:center;">{% include image.html img=page.img15 %}</td>
<td>Das Fehler-Symbol zeigt an, dass mindestens eine Störung aufgetreten ist, die noch nicht quittiert wurde.</td>
</tr>
<tr>
<td>Behebung der Fehler</td>
<td style="text-align:center;">{% include image.html img=page.img06 %}</td>
<td style="text-align:center;">{% include image.html img=page.img07 %}</td>
<td>Das Fehler-Symbol zeigt an, dass mindestens eine Störung aufgetreten ist, die noch nicht quittiert wurde.</td>
</tr>
</tbody>
</table>
