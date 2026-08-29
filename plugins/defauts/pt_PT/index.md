---
layout : default
pluginId : defauts
plugin : Défauts
lang: pt_PT
---

# Plugin «{{page.plugin}}» para o Jeedom.
O plugin **{{page.plugin}}** permite detetar falhas, verificando a coerência entre um estado e uma medição.

# Alguns exemplos:
{: .num}

- uma lâmpada acesa, mas sem consumo (lâmpada avariada ou sinal de retorno incorreto).
- Uma lâmpada apagada, mas com um consumo superior a 1 watt (falha no circuito de retorno).
- A bomba está ligada, mas não há caudal.

O plugin também pode comunicar falhas quando o valor de uma medição se desvia demasiado de um valor de referência.

# Configuração do plugin
{: .num}

O plugin não requer qualquer configuração, basta ativá-lo.

{% include image.html img="config_plugin.png" %}

# Os equipamentos
{: .num}

Um equipamento **{{page.plugin}}** permite monitorizar a coerência de várias combinações de estado e valor. Uma informação
indica, para cada uma destas monitorizações, se a situação atual é coerente ou não.

Além disso, é ativada uma notificação **de falha** quando um sistema de monitorização deteta uma inconsistência. Esta notificação permanece ativada
até que seja absolvida, mesmo que a incoerência desapareça.

## Criação
{: .num}

Os equipamentos **{{page.plugin}}** são criados na página do plugin, acessível através do menu `plugins` ==> `Monitorização` ==> `{{page.plugin}}`.
O equipamento foi concebido com três comandos:
+ Um comando **padrão**, do tipo «info», que indica se foi ou está a ser detetada uma inconsistência por um dos sistemas de monitorização do equipamento.
+ Um comando **Confirmação**, do tipo ação, para confirmar as falhas detetadas.
+ Um comando **histórico**, do tipo informativo, que permite visualizar as últimas anomalias detetadas.

## Configuração
{: .num}

### Equipamento
{: .num}

Para além das configurações habituais, o equipamento dispõe de dois parâmetros que permitem definir o funcionamento da **confirmação automática**:
* **Autoconfirmação**
indica se as falhas devem ser confirmadas automaticamente ou não.
* **Prazos** *(visíveis apenas se a confirmação automática estiver ativada)*
Os prazos de espera
   
### Verificações de coerência
{: .num}

O painel «Monitorizações» permite gerir as monitorizações do equipamento. O botão «Adicionar uma monitorização» adiciona uma monitorização de coerência ao equipamento.

#### As verificações de coerência têm vários parâmetros:
{: .num}

{% include image.html img="config_surveillance.png" %}
* ***Nome:*** Nome da monitorização.
* ***Estado:*** Informação binária a monitorizar.
* ***Medida:*** Informação digital a monitorizar.
* ***Limite:*** Valor que deve ser atingido pela medição quando o estado estiver em 1 (ocorre uma incoerência se este valor não for atingido. Também ocorre uma incoerência se este valor for atingido quando o estado estiver em 0).
* ***Temporização:*** Prazos para atingir o limite após uma alteração de estado.
* ***Inverter:*** Inversão da monitorização. O valor deve ser superior ao limite quando o estado estiver em 0.
* ***Em:*** Monitorização ativa quando o estado é 1.
* ***Exceção:*** Monitorização ativa quando o estado é 0.
* ***Exibir:*** Exibição da informação.
* ***Exibição invertida:*** Inversão do valor apresentado (permite que apareça um ícone verde se tudo estiver bem e vermelho em caso de avaria).
* ***Registar no histórico:*** Registo da informação no histórico.

### Monitorização de valores de referência
{: .num}

{% include image.html img="config_consigne.png" %}
* ***Nome:*** Nome da monitorização.
* ***Estado:*** Informação binária utilizada para controlar o funcionamento da vigilância.
* ***Medição:*** Informação digital; será sinalizada uma falha se o valor desta medição estiver demasiado distante do valor de referência.
* ***Instrução:*** Informação digital, valor que o dispositivo deve atingir.
* ***Limite:*** É registada uma falha se o valor absoluto da diferença entre o valor de referência e a medição for superior a este limite.
* ***Tempo de inspiração:*** Período, em segundos, durante o qual a monitorização fica desativada após uma alteração do ***estado***.
* ***Em:*** A monitorização é ativada quando o ***estado*** estiver em 1, caso esta opção esteja ativada.
* ***Ausente:*** A monitorização é ativada quando o ***estado*** é 0, caso esta opção esteja ativada.
* ***Registar no histórico:*** Registo da informação no histórico.

### Um pouco de história
{: .num}

{% include image.html img="historique.png" %}

O comando *histórico* e o respetivo widget permitem visualizar as últimas cinco falhas ocorridas. O número de eventos listados é configurável.

É possível configurar um período de retenção para os eventos listados. Os eventos que ocorreram antes do período de retenção são removidos da lista. Assim, os eventos que ocorreram há mais de 2 dias são removidos da lista se o período de retenção for de 2 dias.

#### O histórico tem vários parâmetros:
{: .num}

{% include image.html img="config_histo.png" %}

* ***Nome:*** Nome do histórico.
* ***Tamanho:***  Número de registos do histórico apresentados no widget (máximo de 5)
* ***Retenção:*** Período de retenção de um registo no histórico. Este período pode ser expresso em minutos, horas ou dias
* ***Formato da data:*** Formato da data no histórico.
Estão disponíveis os seguintes formatos (enviem um pedido através do fórum do Jeedom para a adição de outros formatos):

| formato | exemplo |
    | ------ | ------- |
| dd-mm HH:MM:SS | 02-06 17:35:40 |
| dd/mm HH:MM:SS | 02/06 17:35:40 |
| dd/mm/aa HH:MM:SS | 02/06/21 17:35:40 |
| dd mmm aaaa HH:MM:SS | 02 de junho de 2021 17:35:40 |

* ***Mostrar:*** Indica se o widget deve ser exibido ou não.

# Exemplos
{: .num}

| Etapa | Widget do equipamento (a cores) | Widget do equipamento (preto/branco) | Observações |
| :---- | :----:  | :----: | :---- |
| Situação inicial: | ![](/images/defauts/defauts_initial.png «Estado inicial») | ![](/images/defauts/defauts_initial_bw.png «Estado inicial») | Sem falhas, os sistemas de monitorização estão em estado normal. |
| 1<sup>primeira</sup> monitorização em estado anormal | ![](/images/defauts/defauts_premier_defaut.png) | ![](/images/defauts/defauts_premier_defaut_bw.png) | O ícone de falha indica que ocorreu uma anomalia que não foi confirmada. |
| Confirmação da resolução da avaria | ![](/images/defauts/defauts_acquitte.png) | ![](/images/defauts/defauts_acquitte_bw.png) | A avaria foi confirmada como resolvida através de um clique no ícone (ou por confirmação automática). O ícone de avaria indica que a anomalia ainda está presente. |
| 2<sup>ª</sup> anomalia |![](/images/defauts/defauts_deuxieme_defaut.png) | ![](/images/defauts/defauts_deuxieme_defaut_bw.png) | O ícone de anomalia indica que existe uma nova anomalia. |
| Eliminação de anomalias |![](/images/defauts/defauts_plus_de_defaut_pas_acquitte.png) | ![](/images/defauts/defauts_plus_de_defaut_pas_acquitte_bw.png) | O ícone de falha indica que ocorreu pelo menos uma anomalia que não foi confirmada. |
| Regresso ao normal: | ![](/images/defauts/defauts_initial.png "Estado inicial") | ![](/images/defauts/defauts_initial_bw.png "Estado inicial") | As anomalias foram resolvidas e desapareceram. |
