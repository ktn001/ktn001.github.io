---
layout : default
pluginId : volvocars
plugin : Volvo
lang: pt_PT
---
{% capture imagesPath %}/images/{{ page.lang }}/{{ page.plugin }}{% endcapture %}
# Plugin «volvocars» para o Jeedom

O plugin **volvocars** permite que o Jeedom interaja com o seu veículo Volvo utilizando
as APIs da Volvocars.

Obrigado ao @Xav-74. Inspirei-me bastante no seu plugin **My BMW** para o widget e o painel.

# Princípio
{: .num}

Este plugin interage com as APIs da Volvocars através da nuvem. Por conseguinte, este plugin
requer uma ligação à Internet. É também necessário que o seu veículo esteja acessível em
a aplicação da Volvo Cars.

A documentação das APIs indica que estas estão disponíveis para todos os modelos entre
2015 a 2022. No entanto, parece que esta documentação não está atualizada e que os modelos posteriores
2022 também estão disponíveis através destas APIs. O plugin foi desenvolvido utilizando um XC40
elétrica de 2023.

# Modelos compatíveis
{: .num}

+ ***Modelos confirmados como compatíveis com o plugin:***
    + XC40 elétrico (2023)
    + XC60 híbrido (2022)
+ ***Modelos confirmados como parcialmente compatíveis com o plugin:***
+ ***Modelos confirmados como incompatíveis com o plugin:***

# As chaves API vcc
{: .num}
Para além da conta Volvo ID que utiliza na aplicação Volvo Cars, vai precisar de uma chave API VCC
pessoal.

Tem de gerar uma chave API VCC (VCC API Key) no site
[https://developer.volvocars.com/](https://developer.volvocars.com/){:target="_blank"} seguindo
este procedimento:

1. Clique em **Inscrever-se**:
{% include image.html img="sign_up_volvodev.png" %}
1. Selecione a conta que será associada à sua nova conta developper.volvocars:
{% include image.html img="select_login_asoc.png" %}
1. Introduza o seu nome de utilizador e palavra-passe para o site selecionado no ponto anterior
{% include image.html img="sign_in_volvodev.png" %}
1. Clique no seu nome de utilizador e, em seguida, em **As suas aplicações API**
{% include image.html img="open_api_applications.png" %}
1. Introduza um nome para a aplicação que vai criar e, em seguida, clique em **Criar**. Se tiver
No caso de várias instâncias do Jeedom, é aconselhável criar uma aplicação para cada instância em
em que o plug-in será
instalado:
{% include image.html img="create_application.png" %}
1. A sua nova aplicação é criada com um par de chaves API VCC. Poderá sempre voltar
nesta página para obter a sua chave.
{% include image.html img="vcc_keys.png" %}

# Instalação e configuração do plugin
{: .num}

## Instalação do plugin
{: .num}
O plugin instala-se de forma padrão a partir da loja do Jeedom.

Se a instalação dos dependentes não tiver sido iniciada automaticamente após a instalação do plugin,
Execute-o manualmente. Depois de instalar as dependências, certifique-se de que o daemon está em execução.

## Configuração do plugin
{: .num}

{% include image.html img="configuration_plugin.png" %}
+ ***Chave VCC API***
: Introduza a chave VCC-API-key que gerou no site developer.volvocars.com.

+ ***Utilizar o widget do plugin***
: Selecione esta opção para utilizar o widget do plugin nos painéis de controlo.
{% include image.html img="widget_electrique.png" -%}
{% include image.html img="widget_hybrid.png" -%}
{% include image.html img="widget_thermique.png" %}

+ ***Comandos a criar para as aberturas***
: As APIs da Volvocars devolvem informação do tipo texto sobre o estado das aberturas.
Este texto está guardado num comando **\*_state** do equipamento.
Serão também criados comandos binários **\*_open** e **\*_closed** se a opção **Aberto**
ou **Fechado** está ativada.
: Os comandos **\*_open** ou **\*_closed** existentes não são eliminados quando
a opção correspondente está desativada.

Depois de instalar o plugin, é necessário criar uma conta.

# As contas
{: .num}
{% include image.html img="no_account.png" %}

Clique em *Adicionar*

{% include image.html img="nom_account.png" %}

Introduza o nome da conta e clique em *OK*

{% include image.html img="edit_account.png" %}

Introduza o nome de utilizador e a palavra-passe da conta VolvoId e, em seguida, clique em *OK*

{% include image.html img="edit_otp.png" %}

Introduza o código que a Volvo lhe enviou por e-mail e, em seguida, clique em *OK*.

É necessário introduzir o código para obter um token que será utilizado pelo plugin para
autenticar os seus acessos às APIs da Volvocars. Este token será renovado automaticamente antes do seu prazo de validade terminar.

O token poderá ser perdido se
   + Os veículos associados à conta ficam todos desativados durante um determinado período.
   + O plugin está desativado há mais de um determinado período de tempo.
   + O Jeedom está inativo há já algum tempo.
   + Foi restaurado um backup do Jeedom.

Nestes casos, é necessário abrir a edição da conta e guardá-la. Isto reiniciará o procedimento
para introduzir um novo código enviado por e-mail e, em seguida, obter um novo token.

De acordo com a documentação das APIs, um token expirado pode ser renovado automaticamente até 7 dias após a sua expiração. Mas não consegui verificar isso. Uma vez que os tokens têm uma validade de 30 minutos e são renovados 15 minutos antes da sua expiração, uma interrupção de menos de 15 minutos não deverá ter qualquer consequência.

{% include image.html img="no_car.png" %}

# Os veículos
{: .num}

Os dispositivos Jeedom para os veículos associados a uma conta são criados automaticamente (ou configurados
(atualizado) durante a sincronização da conta

## Sincronização de uma conta (criação de veículos)
{: .num}

+ Clique no botão **Sincronização**
+ Selecionar a conta a sincronizar
+ O novo veículo é adicionado à lista de veículos

  > :bulb: Em alguns casos, o site fornecedor da imagem pode bloquear os acessos efetuados por um script.
Nesse caso, o logótipo da Volvo será exibido no lugar da imagem do veículo. A imagem do veículo deverá
deve ser carregada manualmente a partir da página de configuração do veículo.

{% include image.html img="with_car.png" %}

## Configuração do veículo
{: .num}

{% include image.html img="configuration_vehicle.png" %}

+ **Parâmetros gerais**

Estas configurações são as configurações padrão dos equipamentos Jeedom. Não serão detalhadas aqui.

+ **Parâmetros do veículo**

Estes parâmetros são preenchidos automaticamente durante a sincronização da conta. A edição destes parâmetros está desativada por predefinição, uma vez que não devem ser alterados pelos utilizadores.

Se necessário, é possível ativar a edição destes parâmetros clicando no botão «Editar»

+ **Parâmetros de alertas**

   + *Autonomia elétrica*
O valor do comando `al_electricAutonomy` passa a **1** quando a autonomia elétrica é inferior
até este limite.

   + *Autonomia térmica*
O valor da ordem `al_fuelAutonomy` passa para **1** quando a autonomia do motor térmico é inferior
até este limite.

+ **Parâmetros de localização**

É possível configurar as coordenadas GPS de dois locais. Serão criados dois comandos para cada um desses locais:
  + `distanceSite#`: Distância entre o local e o veículo
  + `presenceSite#`: valor binário que indica se está no local

Os parâmetros:
  + *Nome*
Se um site for renomeado, os dois comandos associados também serão renomeados se os seus nomes contiverem o nome antigo
nome do site
  + *Coordenadas GPS*
As coordenadas GPS do local
  + *Distância máxima (em m)*
Distância máxima (em metros) entre o veículo e o local para que o veículo seja considerado presente no local.
  + *Obter coordenadas GPS*
Dois botões que permitem introduzir automaticamente as coordenadas GPS do local:
       + `Jeedom`: Recuperar as coordenadas GPS do Jeedom que foram introduzidas na configuração do Jeedom.
       + `Veículo`: Obtém a posição atual do veículo
  
+ **Descrição**

Informação livre

+ **Imagem**

Imagem do veículo que será utilizada no painel. Se não for possível recuperar a imagem do veículo durante
No que diz respeito à sincronização da conta, esta será substituída por um logótipo da Volvo e por um botão «Recuperar uma imagem»
do veículo` (ver mais abaixo o procedimento para a recuperação manual da imagem).

+ **Dados brutos**

Este botão abre uma janela pop-up com os dados tal como são fornecidos pelas API. Estas informações podem
poderem ser úteis para análise em caso de problema.

# Recuperação manual da imagem
{: .num}

+ Se não for possível carregar a imagem do veículo, são apresentados o logótipo da Volvo e o botão «Recuperar uma imagem do veículo»:

{% include image.html img="no_image.png" %}

+ Clique no botão «Obter uma imagem do veículo»
   + O logótipo é substituído por uma imagem do veículo
   + O botão «Recuperar uma imagem do veículo» já não é apresentado:
   + Está marcada uma área para onde se deve copiar a imagem do veículo

{% include image.html img="image_ready.png" %}

+ Utilize o menu contextual (SEM ATALHO DE TECLADO!) para copiar a imagem.

{% include image.html img="copy_image.png" %}

+ Utilize o menu contextual (SEM ATALHO DE TECLADO!) para colar a imagem em
na área prevista para o efeito.

{% include image.html img="paste_image.png" %}

+ A imagem é enviada para o plugin
+ A área destinada à receção de uma cópia da imagem já não é apresentada.

{% include image.html img="image_uploaded.png" %}

# Os comandos
{: .num}

## As ações
{: .num}

O plugin pode enviar os seguintes comandos ao veículo

+ **desbloquear**
Destravamento do veículo
+ **fecho**
Bloqueio do veículo
+ **lockReduced**
Bloqueio no modo de alarme reduzido
+ **climStart**
Arranque do ar condicionado
+ **climStop**
Desligamento do ar condicionado
+ **buzina**
Klaxonne
+ **flash**
Os pisca-pisca do veículo estão a piscar.
+ **honk_flash**
Execução simultânea dos comandos *honk* e *flash*

Os comandos efetivamente ativados no plugin para um veículo dependem
funcionalidades do veículo que são transmitidas pelas API (endpoint *commands*).

## Notícias
{: .num}

  > :bulb: Os comandos do tipo *info* não são criados aquando da criação do veículo. São criados
dinamicamente após a ativação do veículo, com base nos dados recebidos das APIs.

<table class="comandos">
<thead>
<tr>
<th style='min-width:150px'>Nome</th>
<th>LogicalId</th>
<th>Ponto de extremidade da API</th>
<th>Subtipo</th>
<th>Valores/Unidade</th>
<th>Descrição</th>
</tr>
</thead>
<tbody>

		<!-- -------- -->
<!-- GLOBAL -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">GERAIS</td>
</tr>
<tr>
<td rowspan="4">Disponibilidade</td>
<td rowspan="4">disponibilidade</td>
<td rowspan="4">acessibilidade</td>
<td rowspan="4">texto</td>
<td>"DISPONÍVEL"</td>
<td>O veículo está ligado</td>
</tr>
<tr>
<td>"INDISPONÍVEL"</td>
<td>O veículo está desligado</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"QUOTA_OUT"</td>
<td>A quota de chamadas à API foi atingida</td>
</tr>
<tr>
<td rowspan="5">motivo da indisponibilidade</td>
<td rowspan="5">motivo da indisponibilidade</td>
<td rowspan="5">acessibilidade</td>
<td rowspan="5">texto</td>
<td>"NO_INTERNET"</td>
<td>Sem Internet</td>
</tr>
<tr>
<td>"POWER_SAVING_MODE"</td>
<td>Veículo em modo de espera</td>
</tr>
<tr>
<td>"CAR_IN_USE"</td>
<td>Manual de utilização do veículo</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>""</td>
<td>O veículo está disponível</td>
</tr>
<tr>
<td>odómetro</td>
<td>contador de quilómetros</td>
<td>contador de quilómetros</td>
<td>digital</td>
<td>Km</td>
<td>Quilometragem do veículo</td>
</tr>
<tr>
<td rowspan="12">serviço</td>
<td rowspan="12">serviço</td>
<td rowspan="12">diagnósticos</td>
<td rowspan="12">texto</td>
<td>"NO_WARNING"</td>
<td>Não é necessário efetuar qualquer intervenção</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_ALMOST_TIME_FOR_SERVICE"</td>
<td>Prazo para um serviço prestes a terminar</td>
</tr>
<tr>
<td>"ENGINE_HOURS_ALMOST_TIME_FOR_SERVICE"</td>
<td>Tempo de funcionamento do motor antes da manutenção a terminar em breve</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_ALMOST_TIME_FOR_SERVICE"</td>
<td>Quilometragem para um serviço prestes a ser atingida</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_TIME_FOR_SERVICE"</td>
<td>Prazo para a prestação de um serviço atingido</td>
</tr>
<tr>
<td>"ENGINE_HOURS_TIME_FOR_SERVICE"</td>
<td>Tempo de funcionamento do motor antes do início do serviço</td>
</tr>
<tr>
<td>"DISTANCE_DRIVEN_TIME_FOR_SERVICE"</td>
<td>Quilometragem para um serviço atingido</td>
</tr>
<tr>
<td>"REGULAR_MAINTENANCE_OVERDUE_FOR_SERVICE"</td>
<td>Prazo de atendimento excedido</td>
</tr>
<tr>
<td>"ENGINE_HOURS_OVERDUE_FOR_SERVICE"</td>
<td>Tempo de funcionamento do motor antes da entrada em serviço excedido</td>
</tr>
<tr>
<td>"DISTÂNCIA_PERCORRIDA_EM ATRASO_PARA_MANUTENÇÃO."</td>
<td>Quilometragem para um serviço ultrapassado</td>
</tr>
<tr>
<td>"UNKNOWN_WARNING"</td>
<td>Alerta desconhecido</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>indeterminado</td>
</tr>
<tr>
<td rowspan="5">Motivo do serviço</td>
<td rowspan="5">serviceTrigger</td>
<td rowspan="5">diagnósticos</td>
<td rowspan="5">texto</td>
<td>CALENDAR_TIME</td>
<td>Tempo decorrido desde a última prestação de serviço</td>
</tr>
<tr>
<td>"DISTÂNCIA"</td>
<td>Distância percorrida desde a última manutenção</td>
</tr>
<tr>
<td>"ENGIME_HOURS"</td>
<td>Tempo de funcionamento do motor</td>
</tr>
<tr>
<td>"UNSPECIFIED"</td>
<td>Não especificado</td>
</tr>
<tr>
<td>"DESCONHECIDO"</td>
<td>Desconhecido</td>
</tr>
<tr>
<td>Horas de funcionamento do motor antes da manutenção</td>
<td>engineHoursToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Horário</td>
<td>Tempo de funcionamento do motor até à próxima manutenção</td>
</tr>
<tr>
<td>Distância até ao início do serviço</td>
<td>distanceToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Quilómetros</td>
<td>Distância até ao próximo serviço</td>
</tr>
<td>Dias antes do serviço</td>
<td>timeToService</td>
<td>diagnósticos</td>
<td>digital</td>
<td>Dias</td>
<td>Número de dias com o serviço.<br>A API da VolvoCars devolve ou um número de dias ou um número de meses.
O plugin converte o número de meses em número de dias. Por isso, pode haver um erro de 30 dias.</td>
<tr>
</tr>
	
		<!-- ------------ -->
<!-- LOCALIZAÇÃO -->
		<!-- ------------ -->
<tr>
<td class="subtitle" colspan="6">LOCALIZAÇÃO</td>
</tr>
<tr>
<td>posição</td>
<td>posição</td>
<td>aluguer</td>
<td>coordenadas GPS</td>
<td>&lt;latitude&gt;,&lt;longitude&gt;</td>
<td>posição do veículo</td>
</tr>
<tr>
<td>distância &lt;nome_do_site_1&gt;</td>
<td>distanceSite1</td>
<td></td>
<td>digital</td>
<td>contador</td>
<td>Distância entre o veículo e o local 1</td>
</tr>
<tr>
<td rowspan="2">presença &lt;nome_do_site_1&gt;</td>
<td rowspan="2">presenceSite1</td>
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>O veículo não se encontra no local 1</td>
</tr>
<tr>
<td>1</td>
<td>O veículo encontra-se no local 1</td>
</tr>
<tr>
<td>distância &lt;nome_do_site_2&gt;</td>
<td>distanceSite2</td>
<td></td>
<td>digital</td>
<td>contador</td>
<td>Distância entre o veículo e o local 1</td>
</tr>
<tr>
<td rowspan="2">presença &lt;nome_site_2&gt;</td>
<td rowspan="2">presenceSite2</td>
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>O veículo não se encontra no local 2</td>
</tr>
<tr>
<td>1</td>
<td>O veículo está no local 2</td>
</tr>
	
		<!-- -------- -->
<!-- SISTEMAS DE ABERTURA -->
		<!-- -------- -->
<tr>
<td class="subtitle" colspan="6">SISTEMAS DE ABERTURA</td>
</tr>
<tr>
<td rowspan="3">Bloqueado</td>
<td rowspan="3">bloqueado</td>
<td rowspan="3">portas</td>
<td rowspan="3">texto</td>
<td>BLOQUEADO</td>
<td>Bloquear veículo</td>
</tr>
<tr>
<td>DESBLOQUEADO</td>
<td>Desbloquear veículo</td>
</tr>
<tr>
<td>NÃO ESPECIFICADO</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td rowspan="8">
estado da porta dianteira esquerda<br>
estado da porta dianteira direita<br>
estado da porta traseira esquerda<br>
estado da porta traseira direita<br>
estado da tampa <br>
estado da porta traseira<br>
estado da porta da caldeira<br>
</td>
<td rowspan="8">
doorFlState<br>
doorFrState<br>
doorRlState<br>
doorRrState<br>
hoodState<br>
tailState<br>
tankState<br>
</td>
<td rowspan="8">
portas
</td>
<td rowspan="12">
texto
</td>
<td rowspan="3">FECHADO</td>
<td rowspan="3">fechado</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">AJAR</td>
<td rowspan="3">meia-aberta</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="3">ABRIR</td>
<td rowspan="3">aberto</td>
</tr>
<tr>
</tr>
<tr>
<td rowspan="4">
estado do vidro dianteiro esquerdo<br>
estado do vidro dianteiro direito<br>
estado do vidro traseiro esquerdo<br>
estado do vidro traseiro direito<br>
estado do telhado<br>
</td>
<td rowspan="4">
winFlState<br>
winFrState<br>
winRlState<br>
winRrState<br>
roofState<br>
</td>
<td rowspan="4">janelas</td>
</tr>
<tr>
<td rowspan="3">NÃO ESPECIFICADO</td>
<td rowspan="3">Informação indisponível</td>
</tr>
<tr>
</tr>
<tr>
</tr>
<tr>
<td rowspan="2">
porta dianteira esquerda aberta<br>
porta dianteira direita aberta<br>
porta traseira esquerda aberta<br>
porta traseira direita aberta<br>
vidro dianteiro esquerdo aberto<br>
janela dianteira direita aberta<br>
janela traseira esquerda aberta<br>
janela traseira direita aberta<br>
tampa aberta<br>
teto aberto<br>
porta traseira aberta<br>
porta aberta<br>
</td>
<td rowspan="2">
doorFlOpen<br>
doorFrOpen<br>
doorRlOpen<br>
doorRrOpen<br>
winFlOpen<br>
winFrOpen<br>
winRlOpen<br>
winRrOpen<br>
hoodOpen<br>
roofOpen<br>
tailOpen<br>
tankOpen<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>não está aberto</td>
</tr>
<tr>
<td>1</td>
<td>aberto</td>
</tr>
<tr>
<td rowspan="2">
porta dianteira esquerda fechada<br>
porta dianteira direita fechada<br>
porta traseira esquerda fechada<br>
porta traseira direita fechada<br>
vidro dianteiro esquerdo fechado<br>
vidro dianteiro direito fechado<br>
vidro traseiro esquerdo fechado<br>
janela traseira direita fechada<br>
tampa fechada<br>
teto fechado<br>
porta traseira fechada<br>
porta fechada<br>
</td>
<td rowspan="2">
doorFlClosed<br>
doorFrClosed<br>
doorRlClosed<br>
doorRrClosed<br>
winFlClosed<br>
winFrClosed<br>
winRlClosed<br>
winRrClosed<br>
hoodClosed<br>
roofClosed<br>
tailClosed<br>
tankClosed<br>
</td>
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>não está fechado</td>
</tr>
<tr>
<td>1</td>
<td>aberto</td>
</tr>
<tr>
<td rowspan="2">Portas fechadas</td>
<td rowspan="2">allDoorsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>uma porta, o capô ou a bagageira não está fechada</td>
</tr>
<tr>
<td>1</td>
<td>Todas as portas, bem como o capô e a bagageira, estão fechadas</td>
</tr>
<tr>
<td rowspan="2">Janelas fechadas</td>
<td rowspan="2">allWinsClosed</td>§
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>Uma janela ou o telhado não está fechado</td>
</tr>
<tr>
<td>1</td>
<td>Todas as janelas e o telhado estão fechados</td>
</tr>
	
		<!-- ---------------- -->
<!-- Motor térmico -->
		<!-- ---------------- -->
<tr>
<td class="subtitle" colspan="6">MOTOR TÉRMICO</td>
</tr>
	
<tr>
<td rowspan="2">motor em funcionamento</td>
<td rowspan="2">engineON</td>
<td rowspan="2">engine_status</td>
<td rowspan="2">binário</td>
<td>0</td>
<td>motor parado</td>
</tr>
<tr>
<td>1</td>
<td>motor em funcionamento</td>
</tr>
<tr>
<td>consumo de combustível</td>
<td>consoFuel</td>
<td>estatísticas</td>
<td>digital</td>
<td>l/100 km</td>
<td>consumo médio calculado pelo veículo</td>
</tr>
<tr>
<td>consumo de combustível (trajeto)</td>
<td>consoFuelTrip</td>
<td>estatísticas</td>
<td>digital</td>
<td>l/100 km</td>
<td>consumo médio desde o início do percurso automático</td>
</tr>
<tr>
<td>combustível</td>
<td>fuelAmount</td>
<td>combustível</td>
<td>digital</td>
<td>l</td>
<td>Quantidade de combustível restante</td>
</tr>
<tr>
<td>autonomia térmica</td>
<td>fuelAutonomy</td>
<td>estatísticas</td>
<td>digital</td>
<td>Km</td>
<td>Autonomia com o combustível restante</td>
</tr>
<tr>
<td rowspan="2">Autonomia reduzida com combustível</td>
<td rowspan="2">al_fuelAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binário</td>
<td>0</td>
<td>Autonomia de combustível suficiente</td>
</tr>
<tr>
<td>1</td>
<td>Autonomia reduzida com combustível</td>
</tr>
	
<!-- ÓLEO -->
<tr>
<td rowspan="5">nível de óleo</td>
<td rowspan="5">oilLevel</td>
<td rowspan="5">diagnóstico do motor</td>
<td rowspan="5">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nível normal</td>
</tr>
<tr>
<td>"SERVICE_REQUIRED"</td>
<td>Requer um serviço</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Nível baixo</td>
</tr>
<tr>
<td>"TOO_HIGH"</td>
<td>Nível superior</td>
</tr>
<tr>
<td rowspan='2'>alerta de óleo</td>
<td rowspan='2'>al_oil</td>
<td rowspan='2'></td>
<td rowspan='2'>binário</td>
<td>0</td>
<td>O nível de óleo está normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulte o comando <i>oil_level</i> para mais detalhes)</td>
</tr>
	
<!-- FLUIDO DE ARREFECIMENTO -->
<tr>
<td rowspan="3">nível do líquido de arrefecimento</td>
<td rowspan="3">coolantLevel</td>
<td rowspan="3">diagnóstico do motor</td>
<td rowspan="3">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nível normal</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Nível baixo</td>
</tr>
<tr>
<td rowspan='2'>alerta de líquido de arrefecimento</td>
<td rowspan='2'>al_coolant</td>
<td rowspan='2'></td>
<td rowspan='2'>binário</td>
<td>0</td>
<td>O nível está normal</td>
</tr>
<tr>
<td>1</td>
<td>Aviso (consulte o comando <i>coolant_level</i> para mais detalhes)</td>
</tr>
	
		<!-- ----------------- -->
<!-- Motor elétrico -->
		<!-- ----------------- -->
<tr>
<td class="subtitle" colspan="6">MOTOR ELÉCTRICO</td>
</tr>
<tr>
<td>consumo de energia</td>
<td>consoElectric</td>
<td>estatísticas</td>
<td>digital</td>
<td>kW/100 km</td>
<td>Consumo médio calculado pelo veículo</td>
</tr>
<tr>
<td>Autonomia elétrica</td>
<td>electricAutonomy</td>
<td>estatísticas</td>
<td>digital</td>
<td>Km</td>
<td>Autonomia com a carga restante</td>
</tr>
<tr>
<td rowspan="2">Baixa autonomia elétrica</td>
<td rowspan="2">al_electricAutonomy</td>
<td rowspan="2"/>
<td rowspan="2">binário</td>
<td>0</td>
<td>Autonomia elétrica suficiente</td>
</tr>
<tr>
<td>1</td>
<td>Baixa autonomia elétrica</td>
</tr>
<tr>
<td>nível de carga da bateria</td>
<td>batteryLevel</td>
<td>recharge_status</td>
<td>digital</td>
<td>%</td>
<td>Percentagem de carga da bateria</td>
</tr>
<tr>
<td rowspan="6">Estado da carga</td>
<td rowspan="6">estado de carregamento</td>
<td rowspan="6">recharge_status</td>
<td rowspan="6">texto</td>
<td>"CHARGING_SYSTEM_CHARGING"</td>
<td>A carregar</td>
<td></td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_IDLE"</td>
<td>Sistema de recarga em espera</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_DONE"</td>
<td>Carregamento concluído</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_FAULT"</td>
<td>Erro no sistema de recarga</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_SCHEDULED"</td>
<td>Recarga programada</td>
</tr>
<tr>
<td>"CHARGING_SYSTEM_UNSPECIFIED"</td>
<td>Estado indeterminado</td>
</tr>
<tr>
<td>Tempo de carregamento restante</td>
<td>chargingRemainingTime</td>
<td>recharge_status</td>
<td>digital</td>
<td>minutos</td>
<td>Tempo estimado até ao fim do carregamento</td>
</tr>
<tr>
<td>Hora de fim de carregamento</td>
<td>chargingEndTime</td>
<td></td>
<td>texto</td>
<td>jj HH:MM</td>
<td>Hora prevista para o fim do carregamento</td>
</tr>
<tr>
<td rowspan="5">Estado da tomada</td>
<td rowspan="5">connectorStatus</td>
<td rowspan="5">recharge_status</td>
<td rowspan="5">texto</td>
<td>"CONNECTION_STATUS_CONNECTED_AC"</td>
<td>Ligado a uma tomada de corrente alternada</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_CONNECTED_DC"</td>
<td>Ligada a um terminal de corrente contínua</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_DISCONNECTED"</td>
<td>Desligada</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_FAULT"</td>
<td>Equívoco</td>
</tr>
<tr>
<td>"CONNECTION_STATUS_UNSPECIFIED"</td>
<td>Estado indeterminado</td>
</tr>
	
		<!-- ------ -->
<!-- MÁQUINA DE LAVAR -->
		<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LAVADOR DE JANELAS</td>
</tr>
<tbody>
<tr>
<td rowspan="3">Nível de lavagem de vidros</td>
<td rowspan="3">washerFluidLevel</td>
<td rowspan="3">diagnósticos</td>
<td rowspan="3">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nível normal</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Nível baixo</td>
</tr>
<tr>
<td rowspan='2'>alerta de lavagem de vidros</td>
<td rowspan='2'>al_washerFluid</td>
<td rowspan='2'>binário</td>
<td>0</td>
<td>O nível está normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulte o comando <i>washer_fluid_level</i> para mais detalhes)</td>
</tr>
		
			<!-- ------ -->
<!-- BRAKE -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">LÍQUIDO DE TRAVÕES</td>
</tr>
</tbody>
<tr>
<td rowspan="3">Nível do líquido dos travões</td>
<td rowspan="3">nível do líquido dos travões</td>
<td rowspan="3">travões</td>
<td rowspan="3">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Nível normal</td>
</tr>
<tr>
<td>"TOO_LOW"</td>
<td>Nível baixo</td>
</tr>
<tr>
<td rowspan='2'>alerta de líquido dos travões</td>
<td rowspan='2'>al_brake_fluid</td>
<td rowspan='2'>binário</td>
<td>0</td>
<td>O nível está normal</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulte o comando <i>brake_fluid_fluid_level</i> para mais detalhes)</td>
</tr>
		
			<!-- ---- -->
<!-- TYRE -->
			<!-- ---- -->
<tr>
<td class="subtitle" colspan="6">PRESSÃO DOS PNEUS</td>
</tr>
<tr>
<td rowspan="5">
pneu dianteiro esquerdo<br>
pneu dianteiro direito<br>
pneu traseiro esquerdo<br>
pneu traseiro direito
</td>
<td rowspan="5">
tyreFl<br>
tyreFr<br>
tyreRl<br>
tyreRr
</td>
<td rowspan="5">pneu</td>
<td rowspan="5">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Pressão normal</td>
</tr>
<tr>
<td>"VERY_LOW_PRESSURE"</td>
<td>Pressão muito baixa</td>
</tr>
<tr>
<td>"LOW_PRESSURE"</td>
<td>Pressão baixa</td>
</tr>
<tr>
<td>"HIGH_PRESSURE"</td>
<td>Pressão elevada</td>
</tr>
<tr>
<td rowspan='2'>alerta de pneus</td>
<td rowspan='2'>al_tyre</td>
<td rowspan="2"></td>
<td rowspan='2'>binário</td>
<td>0</td>
<td>As pressões estão normais</td>
</tr>
<tr>
<td>1</td>
<td>Alerta (consulte os comandos <i>tyre_*</i> para mais detalhes)</td>
</tr>
		
			<!-- ------ -->
<!-- LUZES -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">ILUMINAÇÃO</td>
</tr>
<tr>
<td rowspan="3">
luz de travão esquerda<br>
luz de travão direita<br>
luz de travão central<br>
luz diurna esquerda<br>
luz de dia direita<br>
faróis de nevoeiro dianteiros<br>
luzes de nevoeiro traseiras<br>
luzes de emergência<br>
luz de direção esquerda<br>
sinal de luz em linha reta<br>
luz de cruzamento esquerda<br>
luzes de cruzamento à direita<br>
luz de posição dianteira esquerda<br>
luz de posição dianteira direita<br>
luz de posição traseira esquerda<br>
luz de posição traseira direita<br>
placa de incêndio<br>
incêndio recua<br>
luzes laterais<br>
pisca-pisca dianteiro esquerdo<br>
pisca-pisca dianteiro direito<br>
pisca-pisca traseiro esquerdo<br>
luz de pisca traseira direita
</td>
<td rowspan="3">
al_brakeLightL<br>
al_brakeLightR<br>
al_brakeLightC<br>
al_daytimeRunningLightL<br>
al_daytimeRunningLightR<br>
al_fogLightF<br>
al_fogLightR<br>
al_hazardLights<br>
al_highBeamL<br>
al_highBeamR<br>
al_lowBeamL<br>
al_lowBeamR<br>
al_positionLightFl<br>
al_positionLightFr<br>
al_positionLightRl<br>
al_positionLightRr<br>
al_registrationPlateLight<br>
al_reverseLights<br>
al_sideMarkLights<br>
al_turnIndicationFl<br>
al_turnIndicationFr<br>
al_turnIndicationRl<br>
al_turnIndicationRr
</td>
<td rowspan="3">avisos</td>
<td rowspan="3">texto</td>
<td>"UNSPECIFIED"</td>
<td>Informação indisponível</td>
</tr>
<tr>
<td>"NO_WARNING"</td>
<td>Sem falhas</td>
</tr>
<tr>
<td>"FALHA"</td>
<td>Erro</td>
</tr>
<tr>
<td rowspan="2">alerta de lâmpadas</td>
<td rowspan="2">al_light</td>
<td rowspan="2"></td>
<td rowspan="2">binário</td>
<td>0</td>
<td>Nenhuma lâmpada avariada</td>
</tr>
<tr>
<td>1</td>
<td>Padrão (consulte os comandos de iluminação para mais detalhes)</td>
</tr>

			<!-- ------ -->
<!-- PLUGIN -->
			<!-- ------ -->
<tr>
<td class="subtitle" colspan="6">PLUGIN</td>
</tr>
<tr>
<td>mensagens para o Wigget</td>
<td>msg2wigget</td>
<td></td>
<td>texto</td>
<td>json</td>
<td>Mensagens relativas ao funcionamento do widget do painel</td>
</tr>
</tbody>
</table>

# Os endpoints das APIs da Volvocars
{: .num}

Este plugin utiliza três APIs da Volvocars. Cada uma destas APIs dá acesso a pontos de extremidade que fornecem, cada um, um
conjunto de informações. As tabelas de ações e informações acima indicam qual o endpoint fornecido
a informação associada a cada um dos comandos «info» ou «action» do plugin.

A Volvo limita o número de acessos diários às APIs a 10 000 por chave VCC-API. Para respeitar este limite e, ao mesmo tempo,
Para garantir informações atualizadas sem grande demora, o plugin não acede a todos os endpoints com a mesma frequência.
A posição do veículo é, por exemplo, atualizada de minuto a minuto para permitir uma certa capacidade de resposta quando
O veículo chega a casa, enquanto o nível do líquido dos travões só é verificado a cada 60 minutos.

## Os terminais
{: .num}

<table class="endpoint">
<thead>
<tr>
<th rowspan=2>API</th>
<th rowspan=2>ponto final</th>
<th rowspan=2>frequência</th>
<th colspan=3 style="text-align:center">Número de chamadas diárias</th>
</tr>
<th>qualquer veículo</th>
<th>motor térmico</th>
<th>motor elétrico</th>
<tr>
</tr>
</thead>
<tbody>
<tr>
<td rowspan=15>Veículo conectado</td>
<td>travões</td>
<td>60 min.</td>
<td>24</td>
</tr>
<tr>
<td>acessibilidade de comandos</td>
<td>5 min.</td>
<td>288</td>
</tr>
<tr>
<td>comandos<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>detalhes<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>diagnósticos</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>portas</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>motor</td>
<td>15 min.</td>
<td></td>
<td>96</td>
</tr>
<tr>
<td>engine-status</td>
<td>5 min.</td>
<td></td>
<td>288</td>
</tr>
<tr>
<td>combustível</td>
<td>30 min.</td>
<td></td>
<td>48</td>
</tr>
<tr>
<td>contador de quilómetros</td>
<td>15 min.</td>
<td>96</td>
</tr>
<tr>
<td>estatísticas</td>
<td>10 min.</td>
<td>144</td>
</tr>
<tr>
<td>pneus</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>veículos<sup>1</sup></td>
<td>0</td>
</tr>
<tr>
<td>avisos</td>
<td>30 min.</td>
<td>48</td>
</tr>
<tr>
<td>Windows</td>
<td>2 min.</td>
<td>720</td>
</tr>
<tr>
<td>Arrendamento</td>
<td>aluguer</td>
<td>1 min.</td>
<td>1'440</td>
</tr>
<tr>
<td>Energia</td>
<td>recharge-status</td>
<td>5 min.</td>
<td></td>
<td></td>
<td>288</td>
</tr>
<tr>
<th>Total</th>
<th></th>
<th></th>
<th>3672</th>
<th>432</th>
<th>288</th>
</tr>
</tbody>
</table>
<sup>1</sup> Endpoint chamado durante a sincronização de uma conta.

Portanto, temos:
+ 4104 chamadas por dia para um veículo a combustão.
+ 3960 chamadas por dia para um veículo elétrico.
+ 4392 chamadas por dia para um veículo híbrido.

A isto acrescentam-se as chamadas efetuadas aquando do envio de um pedido, de uma atualização ou de uma sincronização dos veículos associados a uma conta.

