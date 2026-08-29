---
layout: default
title : devolo_cpl
plugin : devolo_cpl
lang: pt_PT
---

# Notas de lançamento

### **11/05/2026 estável**
+ **05/05/2026 beta** passou para a versão estável

### 05/05/2026 beta
+ Módulo Python devolo_plc_api: atualização da versão 1.4.1 para a 1.5.1
Esta nova versão inclui um tratamento dos tempos de espera durante as ligações aos dispositivos.

### **04/05/2026 estável**
+ **04/05/2026 beta** passou para a versão estável

### 04/05/2026 beta
+ Algumas melhorias menores, essencialmente de natureza estética.

### 29/04/2026 beta
+ Correção de um erro de JavaScript no modal macInfos

### 27/04/2026 beta
+ Algumas melhorias menores, essencialmente de carácter estético, nos widgets.

### 21/04/2026 beta
+ Novos comandos para as informações de débito entre os equipamentos PLC

### **18/04/2026 estável**
+ **12/04/2026 beta** passou para a versão estável

### 12/04/2026 beta
+ Eliminação das dependências do jQuery. No entanto, o núcleo do Jeedom ainda necessita do jQuery para funcionar em dispositivos móveis.

### **25/07/2025 estável**
+ Forçar a versão 1.4.1 do módulo devolo_plc_api (o plugin deve ser adaptado e testado para a versão 1.5.1)

### **16/03/2025 estável**
+ Limpeza dos registos

### **11/03/2025 estável**
+ **10/03/2025 beta** passou para a versão estável

### 10/03/2025 beta
+ Atualização das traduções

### 10/03/2025 beta
+ Correção de um erro (Magic 2 LAN DINrail)

### 20/02/2025 beta
+ Adicionada uma opção ao plugin para ocultar palavras-passe e outros dados sensíveis nos registos

### **04/01/2025 estável**
+ O ficheiro de registo da sincronização foi renomeado para que apareça na página de configuração do plugin

### **02/01/2025 estável**
+ Correção de um bug relacionado com uma mensagem de erro nos registos

### **24/10/2024 estável**
+ Eliminação do ficheiro plugin_info/packages.json

### **23/10/2024 estável**
+ **4 de setembro de 2024, versão beta** passada para a versão estável

### 04/09/2024 beta (bis)
+ Tradução do plugin para os seguintes idiomas:
  + de_DE
  + en_US
  + es_ES
  + it_IT
  + pt_PT

### 04/09/2024 beta
+ O plugin já não inclui versões modificadas do módulo Python devolo_plc_api. O módulo não modificado está agora instalado
com as dependências num ambiente virtual Python.
+ As dependências têm de ser reinstaladas após a atualização do plugin
+ Esta versão é compatível com o Debian 12

### 05/10/2023 beta
+ Adicionar um tratamento de exceções no daemon.
Esta alteração poderá causar muitas mensagens de erro. Aguardo os vossos comentários sobre este assunto.

### 19/09/2023 beta
+ A lista de dispositivos ligados ao Wi-Fi é atualizada a cada 15 segundos (antes, era a cada minuto)

### **29/08/2023 estável**
+ A monitorização «offline» não estava desativada em alguns casos

### **25/08/2023 estável**
+ Correção de um erro que gerava mensagens em `http.error`.

### **20 de agosto de 2023 - versão estável**
+ **15/08/2023 beta** passou para a versão estável

### 15/08/2023 beta
+ Novo plugin: nível 13
  + Ativação dos alertas «offline» em todos os dispositivos do plugin.
  + Adicionar um comando do tipo «info online» a todos os equipamentos existentes.
+ Nova opção para (des)ativar os alertas quando um equipamento estiver offline.

### **14/07/2023 estável**
+ devolo_plv_api
  + Adicionada a versão 1.3.2, que corrige um risco de fuga de memória
  + Remoção da versão 1.1.0
  + Remoção da versão 1.2.0
+ Novo plugin: nível 12
  + Ativação do devolo_plc_api 1.3.2

### **14/06/2023 estável**
+ **13/06/2023 beta** passou para a versão estável

### 13/06/2023 beta
+ Correção de um erro no widget dashboard/action/j_h_m

### 11/06/2023 beta
+ O widget móvel para a configuração do tempo de ativação do WifiGuest permite alterar o valor.

### 09/06/2023 beta
+ Novo plugin: nível 11
  + Novos widgets para o tempo restante até ao desligamento do Wi-Fi para convidados.
    + A duração de ativação do Wi-Fi para convidados ainda não pode ser alterada através do
widget para dispositivos móveis.

### 26/05/2023 beta
+ Novo plugin: nível 10.
  + Configuração para utilizar a versão 1.3.1 do devolo_plc_api
  + Criação de comandos para a gestão da rede Wi-Fi para convidados
    + O comando `durée guest` (logicalId *guest_duration*) permite definir o tempo, em minutos, após
em que a rede Wi-Fi para convidados será desativada. O valor 0 indica que a rede Wi-Fi não deve ser desativada.
+ Otimização do script de sincronização
+ Os registos das sincronizações já não se encontram em «devolo_cpl_out», mas sim em «devolo_synchronize»

### **23/05/2023 estável**
+ **23/04/2023 beta** passou para a versão estável

### 23/04/2023 beta
+ Versão mínima do Protobuf: 4.21.12
  + As dependências têm de ser reinstaladas após a atualização

### 18/04/2023 beta
+ Novo plugin, nível: 9.
  + Configuração para utilizar a versão 1.3.0 do devolo_plc_api
+ Limitação da introdução dos nomes dos endereços MAC a 30 caracteres
+ Adicionada a versão 1.3.0 do módulo devolo_plc_api (as versões 1.1.0 e 1.2.0 continuam disponíveis)

### 17/04/2023 beta
+ Novo plugin: nível 8.
  + Criação de uma tabela `devolo_connection` para registar o histórico das
ligações Wi-Fi.
  + Criação de uma tabela `devolo_macinfo` para as configurações dos endereços MAC.
+ Registo do histórico de ligações dos clientes Wi-Fi
+ Nova secção no painel para os gráficos do histórico de ligações Wi-Fi.
  
### 15/04/2023 beta
+ Correção da exibição das imagens dos equipamentos.

### 14/04/2023 beta
+ Adicionar o módulo *requests* às dependências.

### 09/03/2023 beta
+ Novo plugin: nível 7.
  + Ativação do painel
 
+ Configuração do plugin
  + Uma nova opção permite definir se os nomes dos equipamentos são apresentados
nas tabelas e gráficos devem ser apresentados com ou sem os nomes dos objetos:
     + `[<nome_do_objeto>][<nome_do_equipamento>]`
     + `<nome_do_equipamento>`
  + O plugin inclui agora um *painel*. Este *painel* pode ser ativado ou desativado
na página de configuração do plugin.
  + Interface
    + Novo *painel* para a visualização de gráficos dos caudais entre os equipamentos PLC.

### 04/03/2023 beta
+ Novo plugin: nível 6.
  + Classificação dos comandos dos equipamentos existentes.
  + Criação de três comandos para as versões e disponibilidade do firmware para
os equipamentos existentes.

+ Funcionalidade
  + Atualização das versões do firmware e informação sobre a disponibilidade de atualizações.

+ Interface
  + Alteração da forma como os nomes dos equipamentos são apresentados na tabela de caudais.
  + Melhoria na gestão de encomendas em caso de alteração do modelo de um
equipamento.

+ código
  + Melhoria.
  + Correções de erros.
  + Eliminação de ficheiros desnecessários.
  + Os endereços MAC dos equipamentos são registados logo na primeira sincronização.

### 24/02/2023 beta
+ Novo plugin: nível 5.
   + (Re)criação da tabela de caudais.

+ Desinstalação
   + A tabela de caudais já não é suprimida.

+ Correção de erros
   + A tabela de caudais foi eliminada quando o plugin foi desativado.

### 22/02/2023 beta

+ Atualização ou instalação:
   + Novo plugin Nível: 4.
   + O período de retenção dos dados de tráfego é inicialmente definido para uma semana.
   + A tabela para o registo dos débitos foi criada na base de dados.

+ Desinstalação
   + Eliminação da tabela de velocidades PLC.

+ Configuração dos equipamentos
   + nova configuração «Rede».

+ Interface:
   + Tabela de apresentação dos caudais.

### 18/02/2023 beta

+ dependências:
   + Adicionar o módulo Python *importlib-metadata*
> :bulb: A instalação das dependências deve ser reiniciada após a atualização do plugin.

+ módulo devolo_plc_api:
   + Atualização para a versão 1.2.0
   + A versão 1.2.0 é uma versão modificada para ser compatível com o Python 3.7.
   + Uma opção na página de configuração do plugin permite regressar à versão 1.1.0, caso seja necessário.
   + Por favor, crie um tópico no fórum do Jeedom caso precise de voltar à versão 1.1.0.

### 14/02/2023 beta bis
+ Indicação das versões dos módulos dependentes.

### 14/02/2023 beta
+ Localização dos dispositivos.
+ Algumas correções de erros.

### 12/02/2023 beta
+ Distinção entre dispositivos *gerenciáveis* e *não gerenciáveis*.
+ Adicionados os modelos DL550 e DL1200 sem Wi-Fi e não gerenciáveis.
+ Adicionar o endereço MAC nas configurações dos equipamentos.
+ Algumas correções de erros.

### 08/02/2023 beta
+ Adicionada funcionalidade de registo para análise de erros durante a deteção dos DL550.

### 07/02/2023 beta
+ Correção de um erro na seleção do país.

### 07/02/2023 beta
Primeira versão para
+ Confirmar a deteção automática dos dispositivos.
+ Validar as imagens.
+ Confirmar o envio do comando para ligar ou desligar os LEDs dos aparelhos.
