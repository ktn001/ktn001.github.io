---
layout : default
pluginId : devolo_cpl
plugin : devolo_cpl
lang: pt_PT
---
# Plugin «devolo_cpl» para o Jeedom

O plugin permite integrar os dispositivos PLC da Devolo no Jeedom

> :bulb: Atenção: se partilhar ficheiros de registo, as palavras-passe dos
os dispositivos podem aparecer ali de forma visível!

# Dispositivos compatíveis
{: .num}

## Os dispositivos controláveis
{: .num}

O plugin utiliza o módulo Python [devolo_plc_api](https://pypi.org/project/devolo-plc-api/).
A documentação deste módulo indica que é compatível com os seguintes dispositivos:

+ Magic 2 WiFi next
+ Magic 2 WiFi 2-1
+ Magic 2 LAN triplo
+ Magic 2 LAN DINrail
+ Magic 2 LAN 1-1
+ Magic 1 WiFi mini
+ Magic 1 WiFi 2-1
+ Magic 1 LAN 1-1
+ Repetidor 5400
+ Repetidor 3000
+ Repetidor 1200
+ Repetidor AC+
+ Repetidor AC
+ dLAN 1200+ WiFi ac
+ dLAN 550+ Wi-Fi
+ dLAN 550 WiFi

## Os dispositivos não geríveis
{: .num}

Os dispositivos, da Devolo ou de outras marcas, que não constam da lista de dispositivos
Os dispositivos controláveis podem ser configurados no plugin. Estes dispositivos são
*não gerenciável*.

Os equipamentos para dispositivos *não controláveis* não têm comando. Nenhuma ação
não pode, portanto, ser realizada nestes dispositivos e nenhum estado pode ser transmitido para
Jeedom.

Na versão atual do plugin, a única utilidade de configurar estes dispositivos
no Jeedom consiste em documentar a sua existência. Provavelmente serão tidos em conta
numa versão futura, ao visualizar as velocidades de transferência entre os
aparelhos.

O plugin inclui modelos para os seguintes tipos:

+ DL1200 LAN
+ DL550 LAN
+ outros

# Instalação e configuração do plugin
{: .num}


## Instalação do plugin
{: .num}

O plugin instala-se de forma padrão a partir da loja do Jeedom. Depois de o ter
Depois de instalado, é necessário ativá-lo e, em seguida, iniciar a instalação das dependências

## Configuração do plugin
{: .num}

{% include image.html img="configuration_plugin.png" %}

+ **Plugin**
: Configuração geral do plugin:
    + ***País***
: O país onde se encontram os equipamentos Devolo. Esta configuração serve para
selecionar as imagens dos aparelhos com o tipo correto de tomadas.
    + ***Nomes dos equipamentos sem o objeto***
: Se esta opção for selecionada, os nomes dos equipamentos nas tabelas
e os gráficos não serão apresentados no formato `[<objeto>][<equipamento>]`, mas sim
`<equipamento>`.

+ **Base de dados**
: Configuração da gestão de dados:
    + ***Retenção***
: Período durante o qual as informações relativas aos débitos PLC são mantidas na base de dados
de dados.

+ **Demónio**
: Configuração do daemon:
    + ***Porta***
: Número da porta TCP utilizada para a comunicação entre o Jeedom e o daemon.
A porta 34741 está configurada por predefinição. É possível definir outra porta em
em caso de conflito com outro plugin ou software que utilize a mesma porta.

+ **Registos**
: Configuração dos registos
    + ***Discreto***
: Os dados sensíveis (palavras-passe, etc.) são removidos dos registos.
> :warning: Os dados sensíveis (ainda) não são suprimidos dos registos do daemon! Os dados sensíveis (palavras-passe, etc.) são suprimidos dos registos.
    + ***Depuração completa***
: Os registos dos módulos Python do daemon não são colocados no modo de depuração se esta opção não estiver
ativada. A ativação desta opção pode tornar os registos do daemon muito detalhados se o plugin
é colocado no modo «debug».

+ **Informações sobre velocidades**
    + ***Fluxo ascendente***
: Indica se devem ser criados comandos para os fluxos de saída da rede PLC (para os
(outros equipamentos).
    + ***Fluxos descendentes***
: Indica se devem ser criados comandos para controlar os fluxos PLC descendentes
(provenientes de outros equipamentos).

## Início do serviço
{: .num}
Depois de instalar as dependências e configurar o plugin,
É necessário iniciar o serviço.

# Configuração dos equipamentos
{: .num}

Os equipamentos para os dispositivos gerenciáveis podem ser criados automaticamente
desde que se encontrem na mesma rede que o servidor Jeedom e que
não estejam em modo de espera. Caso contrário, será necessário criá-los manualmente, tal como os aparelhos
não gerenciáveis.

## O método automático
{: .num}

Na página de gestão do plugin, clique no ícone «sincronização»:

{% include image.html img="icones_gestion_plugin.png" %}

É criado automaticamente um equipamento Jeedom para cada dispositivo detetado.

+ O número de série do dispositivo está configurado no Jeedom. Se já existir um
equipamento com este número de série, o programa de sincronização não cria
não se trata de um novo equipamento, mas sim de uma atualização do equipamento existente.
+ O nome do equipamento é o nome configurado no aparelho ou o n.º de
série, caso não haja nenhum nome configurado.
+ O endereço IP do dispositivo está configurado no equipamento Jeedom.
+ O tipo de dispositivo é indicado no equipamento Jeedom e a imagem de
O equipamento é selecionado tendo em conta o país configurado para o plugin.
+ Os comandos do equipamento foram criados.

## O método manual
{: .num}

Na página de gestão do plugin, clique no ícone «Adicionar»:

{% include image.html img="icones_gestion_plugin.png" %}

É necessário introduzir o nome do novo equipamento antes de aceder à página de
configuração do equipamento.

{% include image.html img="equipamento_não_configurado.png" %}

É necessário, portanto,
+ Selecione o tipo de equipamento. A lista de parâmetros específicos será
adaptada em função do tipo de equipamento selecionado.
+ Introduza o número de série do aparelho. *(Se não souber o n.º
de série, pode introduzir qualquer texto.)*
+ Introduza o endereço MAC do dispositivo.
+ Introduza o endereço IP do dispositivo. *(Apenas para dispositivos gerenciáveis)*
+ Selecione o tipo de dispositivo. *(Apenas para dispositivos gerenciáveis)*

> :bulb: O número de série deve ser único, mas, por enquanto, o plugin não verifica isso.

##### Equipamento controlável:
{% include image.html img="equipement_manageable_configure.png" %}

##### Equipamento não gerenciável:
{% include image.html img="equipement_non_manageable_configure.png" %}

## Conclusão da configuração
{: .num}

Depois de criar um equipamento automaticamente ou manualmente, é necessário
+ Introduza a palavra-passe.
+ Configurar o nome da rede PLC (opcional, caso tenha apenas uma rede PLC)
+ Ativar o equipamento.
+ Efetuar as configurações habituais para os equipamentos Jeedom.
+ Selecione «Monitorização Offline» se pretender receber uma mensagem de erro quando
o equipamento não está acessível (por exemplo, em modo de espera).

# Os comandos
{: .num}

Os comandos que não sejam de débito são criados ou eliminados automaticamente
quando o modelo do equipamento é alterado. São criados comandos para os modelos
gerenciáveis e eliminadas para os modelos não gerenciáveis.

Os dispositivos não comunicam as suas alterações de estado em tempo real. Os
os comandos do tipo «info» (com exceção do comando «locate») foram atualizados
a cada minuto através de um cron. As informações relativas a um dispositivo também são
atualizadas quando é enviado um comando para o dispositivo através do daemon ou quando
O comando «refresh» está ativado.

## Atualizar
{: .num}

O comando «refresh» envia uma mensagem ao daemon para que este interroga o dispositivo
conforme o seu estado. Os comandos do tipo «informações» são atualizados de forma assíncrona
quando o dispositivo responde ao pedido do daemon.

## LEDs
{: .num}

+ Os comandos de ação com os `logicalId` `leds_on` e `leds_off` permitem
ativar/desativar os LEDs do aparelho.
+ O comando com o logicalId `leds` indica se os LEDs estão ligados ou não.
Esta informação é atualizada com os dados recebidos do dispositivo.

## Localizar
{: .num}

+ O comando `locate_on` ativa a localização do dispositivo, fazendo
Deixe o LED CPL do aparelho a piscar durante dois minutos.
+ O comando `locate_off` desativa a localização antes do fim do prazo de validade
em dois minutos.
+ Os dispositivos não devolvem informações que indiquem se a localização está
ativa ou não. A informação `locate` deve, portanto, simular o estado do dispositivo:
    + O valor é definido como 1 quando a função é ativada por `locate_on`.
    + A informação volta automaticamente a 0 após 2 minutos.
    + A informação é zerada antes do fim dos dois minutos se o comando
A função `locate_off` está ativada.
    + O estado da informação não é alterado se a localização estiver ativada ou
desativada por outro software que não o plugin (pelo Devolo Cockpit, por
(exemplo).

## Versões de firmware
{: .num}

+ O comando info `firmware` indica a versão do firmware instalado em
o aparelho.
+ O comando `update_available` indica se existe uma atualização do firmware
está disponível.
+ O comando info `next_firmware` indica a versão disponível para uma atualização.
Esta informação fica em branco se o dispositivo estiver atualizado.

> :bulb: Como os meus dispositivos estão todos atualizados, ainda não consegui testá-los devidamente
os comandos `update_available` e `next_firmware`. Partilhem as vossas experiências
através do [fórum](https://community.jeedom.com) (não se esqueça da etiqueta
`plugin-devolo_cpl`) será bem-vindo.

## Ativação/desativação do Wi-Fi para convidados
{: .num}

+ Os comandos `guest_on` e `guest_off` permitem ativar e desativar
O Wi-Fi Guest dos dispositivos Devolo. No caso das redes Wi-Fi mesh, a ativação ou a
A desativação do Wi-Fi para convidados num dispositivo reflete-se nos outros dispositivos
da rede mesh.
+ O comando `guest_duration` permite configurar o período de tempo durante o qual
O Wi-Fi para convidados deve estar ativado. Passado esse período, o dispositivo Devolo
desativará o Wi-Fi para convidados. Se o valor deste comando for 0, o Wi-Fi para convidados não
não será desativado automaticamente.

O período durante o qual o Wi-Fi para convidados deve permanecer ativado é expresso em minutos.

O widget **Devolo_cpl/J_h_m** apresenta este valor no formato
`<dias> <horas>:<minutos>` (`<horas>:<minutos>` se dias = 0)

##### Widget e janela pop-up do painel de controlo:
{% include image.html img="widget_dashboard.png" %} {% include image.html img="popup_j_h_m_dashboard.png" %}

##### Widget e janela pop-up no telemóvel:
{% include image.html img="widget_mobile.png" %} {% include image.html img="popup_j_h_m_mobile.png" %}
+ O comando info `guest_remaining` indica o tempo restante até à desativação
da rede Wi-Fi para convidados. Este tempo é registado em minutos.

O widget **Devolo_cpl/J_h_m** apresenta este valor no formato
`<dias> <horas>:<minutos>` (`<horas>:<minutos>` se dias = 0)

## Online
{: .num}

+ O comando `online` é uma informação binária que indica se o equipamento está online ou não.

## Os caudais
{: .num}

+ É possível criar comandos para controlar o débito dos fluxos entre os equipamentos PLC. Ver informações mais abaixo.

# As velocidades de transmissão PLC
{: .num}

Os débitos PLC são recolhidos dos dispositivos a cada 5 minutos. Os valores são
são registadas na base de dados e são conservadas durante o período de retenção
configurada na página de configuração do plugin.

{% include image.html img="icones_gestion_plugin.png" %}

Um clique no ícone «Redes PLC» abre uma janela modal com a apresentação das velocidades da rede PLC.

{% include image.html img="modal_CPL_rates.png" %}

## As redes
{: .num}

Se tiver configurado nomes de rede diferentes nas definições das
equipamentos, o modal conterá um separador para cada uma dessas redes. Isto permite,
por exemplo, ter uma tabela com os débitos entre equipamentos DLan e
outro para os equipamentos Magic.

## Os caudais
{: .num}

As linhas da tabela representam os dispositivos de origem e as colunas, os
destinos.

Na imagem acima, temos, portanto, um fluxo de 833 Mbps de *cplphil* para
*cplbureau* e 850 Mbps no sentido inverso.

Os caudais são medidos a cada 5 minutos. A hora é apresentada no canto inferior direito
O modal indica a hora em que os consumos apresentados foram registados.

## Controlo de caudais
{: .num}

### Criação de comandos
{: .num}

Se a opção correspondente tiver sido ativada na configuração do plugin, serão apresentados botões para
a criação de comandos de débito para os fluxos ascendentes e descendentes é apresentada em
a página de gestão das encomendas de um equipamento.

{% include image.html img="btn_cmd_debit.png" %}

Ao clicar nestes botões, é adicionado um comando à lista de comandos do equipamento.
O logicalId do novo comando é `rate_upload` (velocidades de saída) ou
`rate_download` (velocidade de descarregamento).

{% include image.html img="novos_comandos.png" %}

Deve, então, introduzir um nome para o comando e verificar se o equipamento de destino
(**Fluxo para:** ou **Fluxo de:**) proposto está correto antes de guardar o equipamento.

### Verificação da coerência dos comandos
{: .num}

O botão «Comandos de fluxo» abre uma janela pop-up com uma lista das inconsistências nos
configurações dos controlos de caudal.

{% include image.html img="icones_gestion_plugin.png" %}

{% include image.html img="check_debitCmds.png" %}

### Observações
{: .num}

+ **Redundância:**\
Uma ordem de débito no valor de A para B será redundante em relação à ordem de débito
descer de A para B.

+ **Fluxo entre equipamentos não controlável**\
Estes fluxos não podem ser medidos.

+ **Fluxo entre um equipamento gerenciável e um não gerenciável**\
Os comandos de caudal do equipamento não gerenciável são preenchidos com os valores
informações enviadas a partir do dispositivo controlável

# As ligações Wi-Fi
{: .num}

Os endereços MAC dos clientes Wi-Fi ligados aos pontos de acesso dos equipamentos Devolo são
registadas no plugin Jeedom, que mantém um histórico dessas ligações.

## Endereços MAC aleatórios
{: .num}

> :bulb: Um endereço MAC cujo segundo carácter seja **2**, **6**, **A** ou **E** é um endereço aleatório.

Alguns dispositivos utilizam um endereço MAC aleatório em vez do seu endereço MAC
física. Uma vez que o endereço MAC aleatório muda em cada ligação, é
não é possível obter um histórico das ligações destes dispositivos. **Estas moradas são
sendo, por isso, ignoradas pelo plugin, que não regista quaisquer dados relativos às mesmas.**

Alguns destes dispositivos podem ser configurados para utilizar um endereço fixo
quando se ligam a determinadas redes Wi-Fi. Assim, é possível fazer
de modo a que estes dispositivos utilizem sempre o mesmo endereço MAC quando se
ligue-se a um dos seus pontos de acesso Devolo, mantendo as vantagens de
a utilização de um endereço MAC aleatório ao ligar-se a outros dispositivos
redes.


## Pesquisa do fornecedor por um endereço MAC
{: .num}

O site [macvendors.com](https://macvendors.com) permite descobrir qual é o fabricante
de um dispositivo ou da sua interface de rede a partir do endereço MAC.

O plugin acede à API deste site para identificar o fabricante dos dispositivos que foram
ligados às interfaces Wi-Fi dos equipamentos Devolo.

O acesso à API deve respeitar um intervalo mínimo de um segundo entre duas chamadas para
respeitar o limite de dois acessos por segundo para os acessos livres. No entanto, o plugin não verifica
não o número de acessos durante um dia para garantir que o limite de 1 000 acessos por dia é
respeitada.

## Associação de nomes a endereços MAC
{: .num}

{% include image.html img="icones_gestion_plugin.png" %}

O botão «Endereços MAC» na página de gestão do plugin abre uma janela modal para
gestão dos endereços MAC dos equipamentos que se ligaram à rede Wi-Fi.

{% include image.html img="config_mac.png" %}

Os nomes aqui associados aos endereços MAC serão utilizados em vez dos endereços MAC
os gráficos.

# O painel
{: .num}

O painel está acessível através do menu **Página inicial**

{% include image.html img="menu_accueil.png" %}

O painel contém duas *guias*:
* Uma funcionalidade denominada «Velocidades PLC» para o histórico das velocidades entre os equipamentos PLC
* Um elemento denominado «WiFi» para o histórico das ligações dos clientes Wi-Fi

## Velocidade de transmissão PLC
{: .num}

Ao abrir, o separador apresenta um gráfico do histórico dos caudais entre
dois aparelhos.

{% include image.html img="panel_debits_CPL.png" %}

É possível:
+ Para adicionar um gráfico através do botão «Adicionar um gráfico»
+ Alterar a origem e o destino através dos seletores «de» e «para»
e, em seguida, clicando no botão «OK».

Deixo-vos descobrir as outras funcionalidades do gráfico.

## As ligações Wi-Fi
{: .num}

Este separador permite visualizar o histórico das ligações Wi-Fi a um ponto de acesso (AP):

{% include image.html img="panel_wifi_AP.png" %}

Este separador também permite visualizar o histórico das ligações Wi-Fi de um equipamento Wi-Fi (cliente):

{% include image.html img="panel_wifi_client.png" %}

