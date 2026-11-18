---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : de_DE

img01: 01_plugin_configuration.png
img02: 02_icone_creation_compte.png
img03: 03_saisie_login_password.png
img04: 04_icone_creation_chargeur.png
img05: 05_saisie_nom_chargeur.png
img06: 06_parametrage_chargeur.png
img07: 07_btn_reconfig_cmds.png
img08: 08_etat_0.png
img09: 09_etat_1.png
img10: 10_etat_2.png
img11: 11_etat_3.png
img12: 12_etat_4.png
img13: 13_etat_5.png
img14: 14_widget_etat_option_notext.png
img15: 15_etat_5_notext.png
img16: 16_widget_lock_0_d_bw.png
img17: 17_widget_lock_0_d_color.png
img18: 18_widget_lock_0_l_bw.png
img19: 19_widget_lock_0_l_color.png
img20: 20_widget_lock_1_d_bw.png
img21: 21_widget_lock_1_d_color.png
img22: 22_widget_lock_1_l_bw.png
img23: 23_widget_lock_1_l_color.png
img24: 24_widget_lock_2_d_bw.png
img25: 25_widget_lock_2_d_color.png
img26: 26_widget_lock_2_l_bw.png
img27: 27_widget_lock_2_l_color.png
img28: 28_widget_lock_3_d_bw.png
img29: 29_widget_lock_3_d_color.png
img30: 30_widget_lock_3_l_bw.png
img31: 31_widget_lock_3_l_color.png
img32: 32_btn_continue.png
img33: 33_btn_pause.png

action: action
info: info
other: other
binary: binary
numeric: numeric
---

# Plugin „EaseeCharger“ für Jeedom

Mit dem Plugin **EaseeCharger** lassen sich `Easee`-Ladegeräte für Elektrofahrzeuge in
eine Jeedom-Instanz.

Informationen zu den `Easee`-Ladegeräten finden Sie auf der Website von [Easee](https://easee.com)

# Installation und Konfiguration des Plugins
{: .num}
{% include image.html img=page.img01 %}

## Installation des Plugins
{: .num}

Das Plugin lässt sich standardmäßig über den Jeedom-Market installieren. Nach der Installation müssen Sie
Aktivieren Sie diese Option und starten Sie anschließend die Installation der Abhängigkeiten.

## Einrichtung des Plugins
{: .num}

**Dämon**
: Die Konfigurationen des Daemons:
    + ***Anschluss***
: Nummer des TCP-Ports, der für die Kommunikation zwischen Jeedom und dem Daemon verwendet wird. Der Port 34739 ist
Standardmäßig konfiguriert; bei Konflikten mit einem anderen Plugin kann ein anderer Port festgelegt werden oder
Software, die denselben Port nutzt.

    + ***Erweitertes Debugging***
: Das Python-Modul des Daemons, das die Kommunikation mit der Easee-Cloud sicherstellt und „Pings“ sendet
alle 5 Sekunden, um die Verbindung aufrechtzuerhalten. Jeder „Ping“ und seine Antworten erzeugen 5
Protokollmeldungen der Stufe `debug`. Diese Protokollmeldungen werden unterdrückt, wenn die Option **Debug**
Erweitert** ist nicht aktiviert.

**Sicherheit**
: + ***Unsicheres Protokoll***
: Sensible Daten (Passwörter, Tokens usw.) werden in den Protokollen durch
`********`. Die Option „**Unsicheres Protokoll**“ deaktiviert die Ersetzung und belässt die Daten unverändert
sensible Daten im Klartext in den Protokollen.

## Einrichtung des Heartbeats
{: .num}

Es kommt vor, dass der Datenfluss aus der Easse-Cloud unterbrochen wird, ohne dass die Verbindung
unterbrochen wird. Der Daemon erkennt solche Situationen nicht und kann sie daher auch nicht bewältigen.

Um dieses Problem zu umgehen, wird bei der Aktivierung des
Plugin. Der Daemon wird automatisch durch den Heartbeat neu gestartet, wenn der Daemon nicht wieder online ist.
Daten in Jeedom seit mehr als 15 Minuten.

# Die Konten
{: .num}

Mit einem Konto können Sie auf die Easee-Cloud zugreifen, um ein oder mehrere Ladegeräte zu verwalten. Ein Konto muss
muss im Plugin deklariert werden, bevor ein Ladegerät angelegt werden kann, das über dieses Konto verwaltet wird.

## Konto erstellen
{: .num}

1. Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol zum Erstellen eines Kontos:\
{% include image.html img=page.img02 %}

1. Geben Sie einen Kontonamen, den Benutzernamen und das Passwort ein, um sich bei der Cloud anzumelden und das Konto zu aktivieren\
{% include image.html img=page.img03 %}

1. Klicken Sie auf „Bestätigen“.
  > :bulb: Benutzername und Passwort werden bei der Registrierung nur dann überprüft, wenn das Konto
aktiviert.

## Funktionsweise der Konten
{: .num}

### Konto löschen
{: .num}

Ein Konto kann nicht gelöscht werden, wenn es von mindestens einem Auflader genutzt wird.

### Änderung des Benutzernamens oder des Passworts
{: .num}

Ein neues Token wird erstellt und automatisch an den Daemon übermittelt.

# Ladegeräte
{: .num}

## Erstellen eines Ladeprogramms
{: .num}

> :bulb: Vor der Erstellung eines Ladegeräts muss ein Konto angelegt worden sein

1. Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol zum Erstellen eines Ladegeräts:\
{% include image.html img=page.img04 %}

1. Geben Sie den Namen des Ladegeräts ein\
{% include image.html img=page.img05 %}

1. Ladegerät einrichten\
Ein Ladegerät ist ein Jeedom-Gerät. Zusätzlich zu den grundlegenden Optionen (Name, Objekt, Kategorie, Option)
Für die Geräte müssen folgende Konfigurationen festgelegt werden:

{% include image.html img=page.img06 %}

   + **Konto**\
Das Konto, das für die Kommunikation mit dem Easee-Server verwendet werden soll.

   + **Seriennummer**\
Die Seriennummer, wie sie beispielsweise in der Easee-App für Smartphones eingegeben werden muss.

   + **Individuell angepasstes Widget**\
Verwenden Sie nicht das Standard-Widget von Jeedom, sondern das spezielle Widget für Geräte.
EaseeCharger.

   + **Farbe**\
Farbe des Ladegeräts. Hiermit lässt sich das Bild des Ladegeräts festlegen.

1. Klicken Sie auf „Bestätigen“.

## Die Befehle
{: .num}

Die Ladevorgänge werden mit den folgenden Befehlen erstellt:

| Name | Typ | Untertyp | Beschreibung |
| --- | ---- | --------- | ----------- |
| Aktualisieren | {{page.action}} | {{page.other}} | Alle Informationen aktualisieren |
| Pause EIN | {{page.action}} | {{page.other}} | Versetzt den Ladevorgang in den Pausenmodus |
| Pause AUS | {{page.action}} | {{page.other}} | Ladevorgang fortsetzen |
| In Pause | {{page.info}} | {{page.binary}} | Zeigt an, ob sich der Verbraucher in der Pause befindet |
| Dauerhafte Sperre EIN | {{page.action}} | {{page.other}} | Dauerhafte Sperre aktivieren |
| Permanente Sperre AUS | {{page.action}} | {{page.other}} | Deaktivierung der permanenten Sperre |
| Verriegelungsstatus | {{page.info}} | {{page.numeric}} | Code, der angibt, ob das Kabel verriegelt ist und ob dies dauerhaft der Fall ist |
| Vernetzt | {{page.info}} | {{page.binary}} | Vernetztes Fahrzeug |

Weitere Befehle vom Typ *infos* werden beim Empfang der Daten aus der Cloud über den
Daemon. Die so erstellten Befehle werden zusammen mit einer Beschreibung auf der Registerkarte
**Befehle** zur Konfiguration des Ladegeräts. Die logicalId dieser Befehle ist die Kennung
digitale Daten aus der Cloud.

Der Wert einiger dieser Befehle ist ein Code, dem verschiedene Zustände zugeordnet sind. Für diese
Informationen: Es wird ein zweiter Befehl mit der logicalId **`<id>::txt`** erstellt. Der Wert dieses
Der zweite Befehl ist ein Text, der dem Status entspricht.


+ Die Schaltfläche {% include image.html img=page.img07 %} konfiguriert die Befehle mit den Standardwerten neu
Standard.
{: .hide}

## Die Widgets
{: .num}

### Status des Ladegeräts
{: .num}

Das Standard-Widget für den Ladestatus zeigt die folgenden sechs Zustände an:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img10 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

Mit den optionalen Optionen **notext: 1** und **noimage: 1** kann die Anzeige des
Text und Bild:

{% include image.html img=page.img14 %}

bietet

{% include image.html img="etat_5_notext.png" %}

### Kabelarretierung
{: .num}

Mit dem Widget „Kabelsperre“ können Sie die permanente Sperre aktivieren oder deaktivieren. Es zeigt an, ob das Kabel gesperrt ist und ob die permanente Sperre aktiviert ist.

Die folgende Tabelle zeigt die verschiedenen Symbole je nach Verriegelungsstatus und Design des Web-Interfaces:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
<th colspan="2" style="text-align:center">Farbige Symbole</th>
</tr>
    <tr>
<th style="text-align:center">ja</th>
<th style="text-align:center">nein</th>
</tr>
</thead>
  <tbody>
    <tr>
<td>nein</td>
<td>nein</td>
      <td style="text-align:center">
{% include image.html img=page.img17 %}
{% include image.html img=page.img19 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img16 %}
{% include image.html img=page.img18 %}
</td>
</tr>
    <tr>
<td>ja</td>
<td>nein</td>
      <td style="text-align:center">
{% include image.html img=page.img21 %}
{% include image.html img=page.img23 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img20 %}
{% include image.html img=page.img22 %}
</td>
</tr>
    <tr>
<td>nein</td>
<td>ja</td>
      <td style="text-align:center">
{% include image.html img=page.img25 %}
{% include image.html img=page.img27 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img24 %}
{% include image.html img=page.img26 %}
</td>
</tr>
    <tr>
<td>ja</td>
<td>ja</td>
      <td style="text-align:center">
{% include image.html img=page.img29 %}
{% include image.html img=page.img31 %}
</td>
      <td style="text-align:center">
{% include image.html img=page.img28 %}
{% include image.html img=page.img30 %}
</td>
</tr>
</tbody>
</table>

### Ladevorgang unterbrechen
{: .num}

{% include image.html img=page.img33 %}: Laden unterbrechen

{% include image.html img=page.img32 %}: Einen pausierten Auftrag wieder aufnehmen
