---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : pt_PT

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

# Plugin «EaseeCharger» para o Jeedom

O plugin **EaseeCharger** permite integrar carregadores `Easee` para veículos elétricos em
uma instância do Jeedom.

Estão disponíveis informações sobre os carregadores «Easee» no site [Easee](https://easee.com)

# Instalação e configuração do plugin
{: .num}
{% include image.html img=page.img01 %}

## Instalação do plugin
{: .num}

O plugin instala-se normalmente a partir da loja do Jeedom. Depois de o instalar, é necessário
Ative-a e, em seguida, inicie a instalação das dependências.

## Configuração do plugin
{: .num}

**Demónio**
: Configurações do daemon:
    + ***Porta***
: Número da porta TCP utilizada para a comunicação entre o Jeedom e o daemon. A porta 34739 é
configurado por predefinição; é possível definir outra porta em caso de conflito com outro plugin ou
software que utiliza a mesma porta.

    + ***Depuração avançada***
: O módulo Python do daemon que assegura a comunicação com a nuvem Easee e envia os «pings»
a cada 5 segundos para manter a ligação. Cada «ping», e as respetivas respostas, geram 5
mensagens de registo de nível `debug`. Estas mensagens de registo são eliminadas quando a opção **Debug**
A função «**extensa**» não está ativada.

**Segurança**
: + ***Log não seguro***
: Os dados sensíveis (palavras-passe, tokens, etc.) são substituídos nos registos por
`********`. A opção «**Registo não seguro**» desativa a substituição e mantém os dados
dados sensíveis a céu aberto nos registos.

## Configuração do heartbeat
{: .num}

Por vezes, o fluxo de dados proveniente da nuvem Easse é interrompido sem que a ligação
não seja interrompida. O daemon não deteta este tipo de situação, pelo que não a consegue gerir.

Para contornar este problema, é automaticamente configurado um «heartbeat» aquando da ativação do
plugin. O daemon é reiniciado automaticamente pelo heartbeat quando o daemon não responde
de dados no Jeedom há mais de 15 minutos.

# As contas
{: .num}

Uma conta permite aceder à nuvem Easee para gerir um ou mais carregadores. É necessário criar uma conta
declarado no plugin antes de poder criar um equipamento de carregamento que será gerido através desta conta.

## Criação de uma conta
{: .num}

1. Na página de gestão do plugin, clique no ícone de criação de uma conta:\
{% include image.html img=page.img02 %}

1. Introduza o nome da conta, o nome de utilizador e a palavra-passe para iniciar sessão na nuvem e ativar a conta\
{% include image.html img=page.img03 %}

1. Clique em «Validar».
  > :bulb: O nome de utilizador e a palavra-passe são verificados no momento do registo apenas se a conta for
ativada.

## Funcionamento das contas
{: .num}

### Eliminação de uma conta
{: .num}

Uma conta não pode ser eliminada se estiver a ser utilizada por, pelo menos, um utilizador.

### Alteração do nome de utilizador ou da palavra-passe
{: .num}

É criado um novo token, que é automaticamente transmitido ao daemon.

# Os carregadores
{: .num}

## Criação de um carregador
{: .num}

> :bulb: É necessário ter criado uma conta antes de criar um carregador

1. Na página de gestão do plugin, clique no ícone para criar um carregador:\
{% include image.html img=page.img04 %}

1. Introduza o nome do carregador\
{% include image.html img=page.img05 %}

1. Configurar o carregador\
Um carregador é um equipamento Jeedom. Para além das opções básicas (nome, objeto, categoria, opção)
Para os equipamentos, devem ser definidas as seguintes configurações:

{% include image.html img=page.img06 %}

   + **Conta**\
A conta que deve ser utilizada para comunicar com o servidor Easee.

   + **N.º de série**\
O número de série tal como deve ser introduzido, por exemplo, na aplicação Easee para smartphone.

   + **Widget personalizado**\
Não utilize o widget padrão do Jeedom, mas sim o widget específico para os equipamentos
EaseeCharger.

   + **Cor**\
Cor do carregador. Permite definir a imagem do carregador.

1. Clique em «Validar».

## Os comandos
{: .num}

Os carregadores são criados com os seguintes comandos:

| Nome | Tipo | Subtipo | Descrição |
| --- | ---- | --------- | ----------- |
| atualizar | {{page.action}} | {{page.other}} | Atualiza todas as informações |
| Pausar ON | {{page.action}} | {{page.other}} | Coloca a carga em pausa |
| Pausa OFF | {{page.action}} | {{page.other}} | Reiniciar o carregamento |
| Em pausa | {{page.info}} | {{page.binary}} | Indica se a carga está em pausa |
| Bloqueio permanente ON | {{page.action}} | {{page.other}} | Ativação do bloqueio permanente |
| Bloqueio permanente DESLIGADO | {{page.action}} | {{page.other}} | Desativação do bloqueio permanente |
| Estado do bloqueio | {{page.info}} | {{page.numeric}} | código que indica se o cabo está bloqueado e se o bloqueio é permanente |
| Conectado | {{page.info}} | {{page.binary}} | Veículo conectado |

Serão criados outros comandos do tipo *infos* aquando da receção dos dados da nuvem através do
daemon. Os comandos assim criados ficarão visíveis, acompanhados de uma descrição, no separador
**Comandos** para a configuração do carregador. O logicalId destes comandos é o identificador
dados digitais recebidos da nuvem.

O valor de alguns destes comandos é um código ao qual correspondem diferentes estados. Para estes
informações, é criado um segundo comando com o logicalId **`<id>::txt`**. O valor deste
O segundo comando será um texto correspondente ao estado.


+ O botão {% include image.html img=page.img07 %} reconfigura os comandos com os valores por
padrão.
{: .hide}

## Os widgets
{: .num}

### Estado do carregador
{: .num}

O widget predefinido para o estado do carregador apresenta as seguintes seis situações:

{% include image.html img=page.img08 %}
{% include image.html img=page.img09 %}
{% include image.html img=page.img00 %}
{% include image.html img=page.img11 %}
{% include image.html img=page.img12 %}
{% include image.html img=page.img13 %}

As opções opcionais **notext: 1** e **noimage: 1** permitem ocultar a exibição do
texto e imagem:

{% include image.html img=page.img14 %}

proporciona

{% include image.html img="etat_5_notext.png" %}

### Bloqueio do cabo
{: .num}

O widget de bloqueio do cabo permite ativar ou desativar o bloqueio permanente e indica se o cabo está bloqueado e se o bloqueio permanente está ativado.

A tabela seguinte mostra os diferentes ícones consoante o estado do bloqueio e o tema da interface WEB:

<table style=" width:700px">
  <thead>
    <tr>
      <th rowspan="2">Câble<br>verrouillé</th>
      <th rowspan="2">Verrouillage<br>permanent</th>
<th colspan="2" style="text-align:center">Ícones coloridos</th>
</tr>
    <tr>
<th style="text-align:center">sim</th>
<th style="text-align:center">não</th>
</tr>
</thead>
  <tbody>
    <tr>
<td>não</td>
<td>não</td>
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
<td>sim</td>
<td>não</td>
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
<td>não</td>
<td>sim</td>
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
<td>sim</td>
<td>sim</td>
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

### Suspensão do carregamento
{: .num}

{% include image.html img=page.img33 %}: Pausar o carregamento

{% include image.html img=page.img32 %}: Retomar uma tarefa que foi colocada em pausa
