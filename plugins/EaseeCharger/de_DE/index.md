---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : de_DE
---

# Plugin „EaseeCharger“ für Jeedom

Das Plugin **EaseeCharger** ermöglicht die Integration von `Easee`-Ladegeräten für Elektrofahrzeuge in eine Jeedom-Instanz.

Informationen zu den `Easee`-Ladegeräten finden Sie auf der Website von [Easee](https://easee.com)

# Installation und Konfiguration des Plugins
{: .num}
{% include image.html img="plugin_configuration.png" %}

## Installation des Plugins
{: .num}

Das Plugin lässt sich standardmäßig über den Jeedom-Market installieren. Nach der Installation muss es aktiviert und anschließend die Installation der Abhängigkeiten gestartet werden.

## Einrichtung des Plugins
{: .num}

**Dämon**
: Die Konfigurationen des Daemons:
    + ***Anschluss***
: Nummer des TCP-Ports, der für die Kommunikation zwischen Jeedom und dem Daemon verwendet wird. Standardmäßig ist Port 34739 konfiguriert; bei Konflikten mit einem anderen Plugin oder einer anderen Software, die denselben Port nutzt, kann ein anderer Port festgelegt werden.

    + ***Erweitertes Debugging***
: Das Python-Modul des Daemons, das die Kommunikation mit der Easee-Cloud gewährleistet, sendet alle 5 Sekunden einen „Ping“, um die Verbindung aufrechtzuerhalten. Jeder „Ping“ und seine Antworten erzeugen 5 Protokollmeldungen der Stufe `debug`. Diese Protokollmeldungen werden gelöscht, wenn die Option **Erweitertes Debugging** nicht aktiviert ist.

**Sicherheit**
: + ***Unsicheres Protokoll***
: Sensible Daten (Passwörter, Tokens usw.) werden in den Protokollen durch `********` ersetzt. Die Option „**Unsicheres Protokoll**“ deaktiviert diese Ersetzung und lässt sensible Daten im Klartext in den Protokollen stehen.

## Einrichtung des Heartbeats
{: .num}

Es kommt vor, dass der Datenfluss aus der Easse-Cloud unterbrochen wird, ohne dass die Verbindung
unterbrochen wird. Der Daemon erkennt solche Situationen nicht und kann sie daher auch nicht bewältigen.

Um dieses Problem zu umgehen, wird bei der Aktivierung des Plugins automatisch ein Heartbeat eingerichtet. Der Daemon wird neu gestartet.
automatisch per Heartbeat, wenn der Daemon seit mehr als 15 Minuten keine Daten an Jeedom übermittelt hat.

# Die Konten
{: .num}

Mit einem Konto können Sie auf die Easee-Cloud zugreifen, um ein oder mehrere Ladegeräte zu verwalten. Ein Konto muss im Plugin registriert werden, bevor Sie ein Ladegerät anlegen können, das über dieses Konto verwaltet wird.

## Konto erstellen
{: .num}

1. Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol zum Erstellen eines Kontos:\
{% include image.html img="icone_creation_compte.png" %}

1. Geben Sie den Namen des Kontos ein\
{% include image.html img="saisie_nom_compte.png" %}\
  > :bulb: Sobald das Konto registriert ist, kann der Name nicht mehr geändert werden.

1. Geben Sie den Benutzernamen und das Passwort ein, um sich bei der Cloud anzumelden und das Konto zu aktivieren\
{% include image.html img="saisie_login_password.png" %}

1. Klicken Sie auf „Bestätigen“.\
  > :bulb: Benutzername und Passwort werden bei der Registrierung nur dann überprüft, wenn das Konto aktiviert ist.

## Funktionsweise der Konten
{: .num}

### Deaktivierung eines Kontos
{: .num}

Wenn ein Konto deaktiviert wird, werden alle Ladegeräte, die dieses Konto für die Kommunikation mit dem Easee-Server nutzen, ebenfalls deaktiviert. Die Ladegeräte müssen manuell wieder aktiviert werden, sobald das Konto reaktiviert wird.

### Konto löschen
{: .num}

Ein Konto kann nicht gelöscht werden, wenn es von mindestens einem Auflader genutzt wird.

### Änderung des Benutzernamens oder des Passworts
{: .num}

Der Daemon wird nicht benachrichtigt, wenn der Benutzername oder das Passwort eines Kontos geändert wird. Daher muss der Daemon jedes Mal neu gestartet werden, wenn der Benutzername oder das Passwort geändert wird.

# Ladegeräte
{: .num}

## Erstellen eines Ladeprogramms
{: .num}

> :bulb: Vor der Erstellung eines Ladegeräts muss ein Konto angelegt worden sein

1. Klicken Sie auf der Verwaltungsseite des Plugins auf das Symbol zum Erstellen eines Ladegeräts:\
{% include image.html img="icone_creation_chargeur.png" %}

1. Geben Sie den Namen des Ladegeräts ein\
{% include image.html img="saisie_nom_chargeur.png" %}

1. Ladegerät einrichten\
Ein Ladegerät ist ein Jeedom-Gerät. Zusätzlich zu den grundlegenden Optionen (Name, Objekt, Kategorie, Option) für Geräte müssen die folgenden Konfigurationen festgelegt werden:

{% include image.html img="parametrage_chargeur.png" %}

   + **Konto**\
Das Konto, das für die Kommunikation mit dem Easee-Server verwendet werden soll

   + **Seriennummer**\
Die Seriennummer, wie sie beispielsweise in der Easee-App für Smartphones eingegeben werden muss.

   + **Individuell angepasstes Widget**\
Verwenden Sie nicht das Standard-Widget von Jeedom, sondern das spezielle Widget für EaseeCharger-Geräte.

   + **Farbe**\
Farbe des Ladegeräts. Hiermit können Sie das Symbol des Ladegeräts festlegen.

1. Klicken Sie auf „Bestätigen“.

## Das benutzerdefinierte Widget


## Die Befehle
{: .num}

Die Ladevorgänge werden mit den folgenden Befehlen erstellt:

| Name | Typ | Untertyp | Beschreibung |
| --- | ---- | --------- | ----------- |
| Status | Info | numerisch | Status des Ladegeräts:<br>&nbsp;1: getrennt<br>&nbsp;2: Im Standby-Modus<br>&nbsp;3: Wird geladen<br>&nbsp;4: Ladevorgang abgeschlossen<br>&nbsp;5: Bereit |
| Pause ON | Aktion | Sonstiges | Versetzt den Verbraucher in den Pausenmodus |
| Pause AUS | Aktion | Sonstiges | Ladevorgang fortsetzen |
| Pause | Info | Binär | Der Ladevorgang wurde unterbrochen |
| Kabel dauerhaft gesperrt | Info | Binary | Die dauerhafte Kabelsperre ist aktiviert |
| Gesperrtes Kabel | Info | Binary | Das Kabel ist gesperrt |
| Verriegelungsstatus | Info | Numerisch | Kombination aus *Kabel dauerhaft verriegelt* und *Kabel verriegelt* für das Widget |
| Dauerhafte Sperre EIN | Aktion | Sonstiges | Aktivierung der dauerhaften Sperre |
| Permanente Sperre AUS | Aktion | Sonstiges | Deaktivierung der permanenten Sperre |
| Trend | Info | Binary | Trendiges Fahrzeug |
| Leistung | Info | numerisch | Aktuelle Lastleistung |
| Strom Phase 1 | Info | Numerisch | Strom Phase 1 |
| Strom Phase 2 | Info | Numerisch | Strom Phase 2 |
| Strom Phase 3 | Info | Numerisch | Strom Phase 3 |
| Spannung Phase 1 | Info | numerisch | Spannung Phase 1 |
| Spannung Phase 2 | Info | numerisch | Spannung Phase 2 |
| Spannung Phase 3 | Info | numerisch | Spannung Phase 3 |
| WLAN-Signal | Info | numerisch | WLAN-Signalstärke (0 bei Kommunikation über das Mobilfunknetz) |
| Mobilfunkempfang | Info | Numerisch | Stärke des Mobilfunkempfangs (0 bei Verbindung über das WLAN-Netzwerk) |

+ Mit der Schaltfläche {% include image.html img="btn_creer_cmds.png" %} können Sie gelöschte Befehle wiederherstellen.
+ Die Schaltfläche {% include image.html img="btn_reconfig_cmds.png" %} setzt die Befehle auf die Standardwerte zurück.

## Die Widgets
{: .num}

### Status des Ladegeräts
{: .num}

Das Standard-Widget für den Serverstatus zeigt die folgenden sechs Zustände an:

{% include image.html img="etat_0.png" %}
{% include image.html img="etat_1.png" %}
{% include image.html img="etat_2.png" %}
{% include image.html img="etat_3.png" %}
{% include image.html img="etat_4.png" %}
{% include image.html img="etat_5.png" %}

Mit den optionalen Optionen **notext: 1** und **noimage: 1** können die Anzeige des Textes und des Bildes unterdrückt werden:

{% include image.html img="widget_etat_option_notext.png" %}

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
{% include image.html img="widget_lock_0_d_color.png" %}
{% include image.html img="widget_lock_0_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_bw.png" %}
{% include image.html img="widget_lock_0_l_bw.png" %}
</td>
</tr>
    <tr>
<td>ja</td>
<td>nein</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_color.png" %}
{% include image.html img="widget_lock_1_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_1_d_bw.png" %}
{% include image.html img="widget_lock_1_l_bw.png" %}
</td>
</tr>
    <tr>
<td>nein</td>
<td>ja</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_color.png" %}
{% include image.html img="widget_lock_2_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_2_d_bw.png" %}
{% include image.html img="widget_lock_2_l_bw.png" %}
</td>
</tr>
    <tr>
<td>ja</td>
<td>ja</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_color.png" %}
{% include image.html img="widget_lock_3_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_3_d_bw.png" %}
{% include image.html img="widget_lock_3_l_bw.png" %}
</td>
</tr>
</tbody>
</table>

### Ladevorgang unterbrechen
{: .num}

{% include image.html img="btn_pause.png" %}: Ladevorgang anhalten

{% include image.html img="btn_continue.png" %} : Einen angehaltenen Vorgang fortsetzen
