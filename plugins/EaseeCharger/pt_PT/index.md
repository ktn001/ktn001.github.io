---
layout : default
plugin : EaseeCharger
pluginId : EaseeCharger
lang : pt_PT
---

# Plugin «EaseeCharger» para o Jeedom

O plugin **EaseeCharger** permite integrar carregadores `Easee` para veículos elétricos numa instância do Jeedom.

Estão disponíveis informações sobre os carregadores «Easee» no site [Easee](https://easee.com)

# Instalação e configuração do plugin
{: .num}
{% include image.html img="plugin_configuration.png" %}

## Instalação do plugin
{: .num}

O plugin instala-se de forma padrão a partir da loja do Jeedom. Após a instalação, é necessário ativá-lo e, em seguida, iniciar a instalação das dependências.

## Configuração do plugin
{: .num}

**Demónio**
: Configurações do daemon:
    + ***Porta***
: Número da porta TCP utilizada para a comunicação entre o Jeedom e o daemon. A porta 34739 está configurada por predefinição; é possível definir outra porta em caso de conflito com outro plugin ou software que utilize a mesma porta.

    + ***Depuração avançada***
: O módulo Python do daemon que assegura a comunicação com a nuvem Easee envia «pings» a cada 5 segundos para manter a ligação. Cada «ping», e as respetivas respostas, geram 5 mensagens de registo de nível `debug`. Estas mensagens de registo são eliminadas quando a opção **Debug alargado** não está ativada.

**Segurança**
: + ***Log não seguro***
: Os dados sensíveis (palavras-passe, tokens, etc.) são substituídos nos registos por `********`. A opção «**Registo não seguro**» desativa a substituição e mantém os dados sensíveis à vista nos registos.

## Configuração do heartbeat
{: .num}

Por vezes, o fluxo de dados proveniente da nuvem Easse é interrompido sem que a ligação
não seja interrompida. O daemon não deteta este tipo de situação, pelo que não a consegue gerir.

Para contornar este problema, é configurado automaticamente um «heartbeat» aquando da ativação do plugin. O daemon é reiniciado
automaticamente através do heartbeat quando o daemon não enviar dados para o Jeedom há mais de 15 minutos.

# As contas
{: .num}

Uma conta permite aceder à nuvem Easee para gerir um ou mais carregadores. É necessário registar uma conta no plugin antes de poder criar um equipamento de carregamento que será gerido através dessa conta.

## Criação de uma conta
{: .num}

1. Na página de gestão do plugin, clique no ícone de criação de uma conta:\
{% include image.html img="icone_creation_compte.png" %}

1. Introduzir o nome da conta\
{% include image.html img="saisie_nom_compte.png" %}\
  > :bulb: Depois de registado, o nome da conta já não pode ser alterado.

1. Introduza o nome de utilizador e a palavra-passe para iniciar sessão na nuvem e ativar a conta\
{% include image.html img="saisie_login_password.png" %}

1. Clique em «Validar».\
  > :bulb: O nome de utilizador e a palavra-passe só são verificados no momento do registo se a conta estiver ativada.

## Funcionamento das contas
{: .num}

### Desativação de uma conta
{: .num}

Quando uma conta é desativada, todos os carregadores que utilizam essa conta para comunicar com o servidor Easee são igualmente desativados. Os carregadores têm de ser reativados manualmente quando a conta for reativada.

### Eliminação de uma conta
{: .num}

Uma conta não pode ser eliminada se estiver a ser utilizada por, pelo menos, um utilizador.

### Alteração do nome de utilizador ou da palavra-passe
{: .num}

O daemon não é notificado quando o nome de utilizador ou a palavra-passe de uma conta são alterados. Por isso, é necessário reiniciar o daemon sempre que o nome de utilizador ou a palavra-passe forem alterados.

# Os carregadores
{: .num}

## Criação de um carregador
{: .num}

> :bulb: É necessário ter criado uma conta antes de criar um carregador

1. Na página de gestão do plugin, clique no ícone para criar um carregador:\
{% include image.html img="icone_creation_chargeur.png" %}

1. Introduza o nome do carregador\
{% include image.html img="saisie_nom_chargeur.png" %}

1. Configurar o carregador\
Um carregador é um equipamento Jeedom. Para além das opções básicas (nome, objeto, categoria, opção) dos equipamentos, devem ser definidas as seguintes configurações:

{% include image.html img="configuração_carregador.png" %}

   + **Conta**\
A conta que deve ser utilizada para comunicar com o servidor Easee

   + **N.º de série**\
O número de série tal como deve ser introduzido, por exemplo, na aplicação Easee para smartphone.

   + **Widget personalizado**\
Não utilize o widget padrão do Jeedom, mas sim o widget específico para os equipamentos EaseeCharger.

   + **Cor**\
Cor do carregador. Permite definir o ícone do carregador.

1. Clique em «Validar».

## O widget personalizado


## Os comandos
{: .num}

Os carregadores são criados com os seguintes comandos:

| Nome | Tipo | Subtipo | Descrição |
| --- | ---- | --------- | ----------- |
| Estado | info | numérico | Estado do carregador:<br>&nbsp;1: desligado<br>&nbsp;2: Em espera<br>&nbsp;3: A carregar<br>&nbsp;4: Carregamento concluído<br>&nbsp;5: Pronto |
| Pausa ON | ação | outro | Coloca a carga em pausa |
| Pausa OFF | ação | outro | Reiniciar a carga |
| Em pausa | info | binário | A carga está em pausa |
| Cabo bloqueado permanentemente | info | binary | O bloqueio permanente do cabo está ativado |
| Cabo bloqueado | info | binary | O cabo está bloqueado |
| Estado do bloqueio | info | numérico | Combinação de *Cabo bloqueado permanentemente* e *Cabo bloqueado* para o widget |
| Bloqueio permanente ON | ação | outro | Ativação do bloqueio permanente |
| Bloqueio permanente DESLIGADO | ação | outro | Desativação do bloqueio permanente |
| Na moda | info | binário | Veículo na moda |
| Potência | info | numérico | Potência da carga atual |
| Corrente da fase 1 | informação | numérica | Corrente da fase 1 |
| Corrente da fase 2 | info | numérico | Corrente da fase 2 |
| Corrente da fase 3 | info | numérico | Corrente da fase 3 |
| Tensão da fase 1 | informação | numérico | Tensão da fase 1 |
| Tensão da fase 2 | informação | numérico | Tensão da fase 2 |
| Tensão da fase 3 | informação | numérico | Tensão da fase 3 |
| Sinal Wi-Fi | informação | numérico | Intensidade do sinal Wi-Fi (0 se a comunicação for feita através da rede móvel) |
| Sinal de telemóvel | info | numeric | Intensidade do sinal de telemóvel (0 se a comunicação for feita através da rede Wi-Fi) |

+ O botão {% include image.html img="btn_creer_cmds.png" %} permite recriar os comandos que foram eliminados.
+ O botão {% include image.html img="btn_reconfig_cmds.png" %} reconfigura os comandos com os valores predefinidos.

## Os widgets
{: .num}

### Estado do carregador
{: .num}

O widget predefinido para o estado do servidor apresenta as seguintes seis situações:

{% include image.html img="etat_0.png" %}
{% include image.html img="etat_1.png" %}
{% include image.html img="etat_2.png" %}
{% include image.html img="etat_3.png" %}
{% include image.html img="etat_4.png" %}
{% include image.html img="etat_5.png" %}

As opções opcionais **notext: 1** e **noimage: 1** permitem ocultar a exibição do texto e da imagem:

{% include image.html img="widget_etat_option_notext.png" %}

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
{% include image.html img="widget_lock_0_d_color.png" %}
{% include image.html img="widget_lock_0_l_color.png" %}
</td>
      <td style="text-align:center">
{% include image.html img="widget_lock_0_d_bw.png" %}
{% include image.html img="widget_lock_0_l_bw.png" %}
</td>
</tr>
    <tr>
<td>sim</td>
<td>não</td>
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
<td>não</td>
<td>sim</td>
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
<td>sim</td>
<td>sim</td>
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

### Suspensão do carregamento
{: .num}

{% include image.html img="btn_pause.png" %}: Pausar o carregamento

{% include image.html img="btn_continue.png" %}: Retomar uma tarefa que foi colocada em pausa
