---
layout : default
title : Fehler
lang: de_DE
---


# Plugin „Fehler“ für Jeedom

Das Plugin **Fehler** ermöglicht die Erkennung von Fehlern, indem es die Konsistenz zwischen einem Status und einem Messwert überprüft.

# Einige Beispiele:
{: .num}

- Eine Lampe leuchtet, aber es wird kein Strom verbraucht (defekte Glühbirne oder fehlerhaftes Rückmeldesignal).
- Eine Lampe ist ausgeschaltet, verbraucht aber mehr als 1 Watt (fehlerhafter Rückmeldungszustand).
- Die Pumpe ist eingeschaltet, es fließt jedoch kein Wasser.

Das Plugin kann auch Fehler melden, wenn der Messwert zu stark von einem Sollwert abweicht.

# Einrichtung des Plugins
{: .num}
Das Plugin erfordert keine Konfiguration, es muss lediglich aktiviert werden.

![Konfigurationsseite des Plugins](/images/defauts/config_plugin.png)

# Die Geräte
{: .num}
Mit einer **Fehler**-Funktion lässt sich die Konsistenz verschiedener Zustands- und Wertekombinationen überwachen. Eine Info
gibt für jede dieser Überwachungen an, ob die aktuelle Situation konsistent ist oder nicht.

Außerdem wird eine **Fehler**-Meldung ausgelöst, wenn eine Überwachung eine Unstimmigkeit feststellt. Diese Meldung bleibt aktiv.
bis sie freigesprochen wird, auch wenn die Inkonsistenz verschwindet.

## Entwicklung
{: .num}
Die **Fehler**-Einträge werden auf der Plugin-Seite erstellt, die über das Menü `Plugins` ==> `Monitoring` ==> `Fehler` erreichbar ist.
Das Gerät verfügt über drei Bedienelemente:
+ Ein **Standard**-Befehl vom Typ „Info“, der angibt, ob von einer der Überwachungsfunktionen des Geräts eine Inkonsistenz festgestellt wurde oder wird.
+ Ein Befehl vom Typ „**Quittierung**“ (Aktion), um erkannte Fehler zu quittieren.
+ Ein **Verlaufs**-Befehl vom Typ „Info“, mit dem die zuletzt erkannten Störungen angezeigt werden können.

## Konfiguration
{: .num}
### Ausstattung
{: .num}
Neben den üblichen Einstellungen verfügt das Gerät über zwei Parameter, mit denen die Funktionsweise der **automatischen Quittierung** festgelegt werden kann:
* **Automatische Quittierung**
Gibt an, ob Fehler automatisch quittiert werden sollen oder nicht.
* **Fristen** *(nur sichtbar, wenn die automatische Quittierung aktiviert ist)*
Wartezeiten
   
### Konsistenzprüfungen
{: .num}
Über das Panel „Überwachungen“ können Sie die Überwachungen der Geräte verwalten. Mit der Schaltfläche „Überwachung hinzufügen“ fügen Sie eine Konsistenzüberwachung für das Gerät hinzu.

#### Die Konsistenzüberwachung umfasst mehrere Parameter:
{: .num}
![Einrichtung einer Konsistenzüberwachung](/images/defauts/config_surveillance.png)
* ***Name:*** Name der Überwachung.
* ***Status:*** Binäre Information muss überwacht werden.
* ***Maßnahme:*** Digitale Daten im Blick behalten.
* ***Grenzwert:*** Der Wert, der vom Messwert erreicht werden muss, wenn der Status 1 ist (Inkonsistenz, wenn dieser Wert nicht erreicht wird. Eine Inkonsistenz liegt auch vor, wenn dieser Wert erreicht wird, während der Status 0 ist).
* ***Verzögerungszeit:*** Zeit, die benötigt wird, um nach einer Zustandsänderung den Grenzwert zu erreichen.
* ***Umkehren:*** Umkehrung der Überwachung. Der Messwert muss über dem Grenzwert liegen, wenn der Status 0 ist.
* ***En:*** Aktive Überwachung, wenn der Status auf 1 gesetzt ist.
* ***Ausgenommen:*** Aktive Überwachung, wenn der Status auf 0 steht.
* ***Anzeigen:*** Informationen anzeigen.
* ***Invertierte Anzeige:*** Umkehrung des Anzeigewerts (sorgt dafür, dass bei ordnungsgemäßem Betrieb ein grünes Symbol und bei einer Störung ein rotes Symbol angezeigt wird).
* ***Protokollieren:*** Protokollierung der Informationen.

### Überwachung der Sollwerte
{: .num}
![Einrichtung einer Sollwertüberwachung](/images/defauts/config_consigne.png)
* ***Name:*** Name der Überwachung.
* ***Status:*** Binäre Information, die zur Steuerung des Überwachungsbetriebs verwendet wird.
* ***Messwert:*** Digitale Anzeige; es wird ein Fehler gemeldet, wenn der Messwert zu stark vom Sollwert abweicht.
* ***Vorgabe:*** Digitale Angabe, Wert, den die Hütte erreichen muss.
* ***Grenzwert:*** Ein Fehler wird gemeldet, wenn der Absolutwert der Differenz zwischen dem Sollwert und dem Messwert diesen Grenzwert überschreitet.
* ***Temposiration:*** Zeitraum in Sekunden, während dessen die Überwachung nach einer Änderung des ***Status*** deaktiviert ist.
* ***En:*** Die Überwachung wird aktiviert, wenn der ***Status*** auf 1 gesetzt ist, sofern diese Option aktiviert ist.
* ***Abwesenheit:*** Die Überwachung wird aktiviert, wenn der ***Status*** auf 0 steht, sofern diese Option aktiviert ist.
* ***Protokollieren:*** Protokollierung der Informationen.

### Ein Blick in die Geschichte
{: .num}
![Verlauf](/images/defauts/historique.png)

Mit dem Befehl *Verlauf* und dem dazugehörigen Widget lassen sich die letzten fünf aufgetretenen Störungen anzeigen. Die Anzahl der angezeigten Ereignisse ist konfigurierbar.

Die Aufbewahrungsdauer der aufgelisteten Ereignisse kann konfiguriert werden. Ereignisse, die vor Ablauf der Aufbewahrungsdauer aufgetreten sind, werden aus der Liste entfernt. So werden beispielsweise Ereignisse, die vor mehr als zwei Tagen aufgetreten sind, aus der Liste entfernt, wenn die Aufbewahrungsdauer zwei Tage beträgt.

#### Der Verlauf verfügt über mehrere Einstellungen:
{: .num}

![Konfiguration des Verlaufs](/images/defauts/config_histo.png)

* ***Name:*** Name des Verlaufs.
* ***Größe:***  Anzahl der im Widget angezeigten Protokolleinträge (maximal 5)
* ***Aufbewahrungsdauer:*** Dauer, für die ein Eintrag im Verlauf gespeichert bleibt. Diese Dauer kann in Minuten, Stunden oder Tagen angegeben werden.
* ***Datumsformat:*** Format der Datumsangabe im Verlauf.
Folgende Formate sind möglich (bitte stellen Sie im Jeedom-Forum eine Anfrage, um weitere Formate hinzuzufügen):

| Format | Beispiel |
    | ------ | ------- |
| tt-mm HH:MM:SS | 02.06. 17:35:40 |
| tt/mm HH:MM:SS | 02.06. 17:35:40 |
| TT/MM/JJ HH:MM:SS | 02.06.21 17:35:40 |
| tt mmm aaaa HH:MM:SS | 02. Juni 2021 17:35:40 |

* ***Anzeigen:*** Gibt an, ob das Widget angezeigt werden soll oder nicht.

# Beispiele
{: .num}

| Stufe | Geräte-Widget (farbig) | Geräte-Widget (schwarz/weiß) | Anmerkungen |
| :---- | :----:  | :----: | :---- |
| Ausgangssituation: | ![](/images/defauts/defauts_initial.png „Ausgangszustand“) | ![](/images/defauts/defauts_initial_bw.png „Ausgangszustand“) | Keine Störung, die Überwachungsfunktionen befinden sich im Normalzustand. |
| 1<sup>Erste</sup> Überwachung bei abnormalem Zustand | ![](/images/defauts/defauts_premier_defaut.png) | ![](/images/defauts/defauts_premier_defaut_bw.png) | Das Fehler-Symbol zeigt an, dass eine Störung aufgetreten ist, die noch nicht quittiert wurde. |
| Quittierung des Fehlers | ![](/images/defauts/defauts_acquitte.png) | ![](/images/defauts/defauts_acquitte_bw.png) | Der Fehler wurde durch einen Klick auf das Symbol (oder durch automatische Quittierung) quittiert. Das Fehlersymbol zeigt an, dass die Störung weiterhin besteht. |
| 2<sup>. </sup> Fehler |![](/images/defauts/defauts_deuxieme_defaut.png) | ![](/images/defauts/defauts_deuxieme_defaut_bw.png) | Das Fehlersymbol zeigt an, dass ein neuer Fehler vorliegt. |
| Behebung von Störungen |![](/images/defauts/defauts_plus_de_defaut_pas_acquitte.png) | ![](/images/defauts/defauts_plus_de_defaut_pas_acquitte_bw.png) | Das Fehler-Symbol zeigt an, dass mindestens eine Störung aufgetreten ist, die noch nicht quittiert wurde. |
| Zurück zum Normalzustand: | ![](/images/defauts/defauts_initial.png „Ausgangszustand“) | ![](/images/defauts/defauts_initial_bw.png „Ausgangszustand“) | Die Störungen wurden quittiert und sind behoben. |
