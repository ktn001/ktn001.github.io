---
layout : default
title : EaseeCharger
plugin : EaseeCharger
lang: pt_PT
---
# Notas de lançamento

**IMPORTANTE**

Lembre-se de que, se não houver informações sobre a atualização, isso significa que esta diz respeito apenas a
atualização de documentação, tradução ou texto.

### 13/11/2026
+ As funções de gestão de tokens foram revistas e atualizadas. Não há alterações visíveis para
o utilizador.
+ O daemon foi reescrito. Já não utiliza o módulo *signalrcore*, mas sim o *pyeasee*. Um
Espera-se uma melhoria na estabilidade.
+ O nome do ficheiro de registo do daemon já não é *EaseeCharger_daemon.out*, mas sim *EaseeCharger_daemon*
+ Os logicalId dos comandos com as informações recebidas da nuvem foram alterados. O logicalId é
agora o ID da observação enviada da nuvem através do SignalR.
+ As informações recebidas da nuvem cujo valor é um código são duplicadas:
  +  Um comando com o código numérico recuperado da nuvem
  +  Um comando com texto em claro. Este texto é traduzido para o idioma da interface do Jeedom.

### 17/01/2025
+ Passagem da versão beta de 12/01/2025 para a versão estável

### 12/01/2025 (Beta)
+ Melhoria da comunicação entre o daemon e o Jeedom
+ Correção do registo do token na cache

### 12/01/2025 (Beta)
+ Correção de erros
 
### 31/12/2024 (Beta)
+ Reescrita de grande parte do código
+ É necessária a versão 4.4.9 ou superior do Core
+ Compatível com o Debian 12
+ Já não utiliza a função jQuery

### 11/11/2024
+ Correção de um erro na instalação das dependências

### 09/11/2024
+ O daemon está a ser executado num ambiente virtual de Python (venv)

### 28/07/2024
+ Transição das versões beta anteriores para a versão estável
+ Atualização dos comandos durante a atualização do plugin

### 28/07/24 (Beta)
+ Reestruturação do processo de criação e atualização de encomendas.
Recomenda-se atualizar os comandos através do botão «Atualizar comandos» na
página de comandos de cada carregador

### 26/07/2024 (Beta)
+ Correção de widgets
+ Reestruturação da página de encomendas

### 24/07/2024
+ Configuração de um heartbeat aquando da ativação do plugin

### 1/7/2023
+ Alteração do URL das APIs Easee

### 17/10/2022
+ Informação que indica se a comunicação com a nuvem é feita por Wi-Fi ou rede móvel

### 14/10/2022
* Transição para o modo estável
* Transparência dos mosaicos do widget para permitir a visibilidade do gráfico de fundo
* Botões no widget dos equipamentos para ativar/desativar a pausa

### 30/09/2022 (Beta)
* A porta do daemon já não é reinicializada para o valor predefinido quando o plugin é ativado
* Uma classe foi renomeada no código PHP
* Informações sobre a qualidade dos sinais Wi-Fi e de rede móvel
* Criação de um widget para os dispositivos EaseeCharger (sem o botão de pausa da
carga)

### 24/08/2022 (Beta)
* A porta do daemon já não é reinicializada para o valor predefinido quando o plugin é ativado

### 21/08/2022 (Beta)
* Adicionar um contador de reinicializações pelo watcher.

### 21/08/2022 (Beta)
* Adicionar um observador para reiniciar as ligações do daemon após uma desconexão não sinalizada.

### 18/08/2022 (Beta)
* Primeira publicação
