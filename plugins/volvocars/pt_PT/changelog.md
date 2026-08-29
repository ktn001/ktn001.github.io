---
layout: default
title : Volvocars
plugin : volvocars
lang: pt_PT
---

# Notas de lançamento

### **2026/06/12**
+ Resolução de um aviso do PHP 8. Obrigado, @bernard-dandrea

### **2026/03/26**
+ Transição da versão beta para a versão estável em 24/03/2026

### 2026/03/24
+ Exibição de CollectDate e valueDate ao passar o rato sobre os comandos «info» do widget do painel

### **2026/03/23**
+ Alteração do fluxo das APIs de ligação na sequência de uma alteração na Volvo

### **2026/03/19**
+ Transição da versão beta para a versão estável, de 11/03/2026

### 11/03/2026 beta
+ Exibição de CollectDate e valueDate ao passar o rato sobre os comandos «info» do widget do painel de controlo

### **2026/03/10**
+  Transição da API «energy» da versão 1 para a versão 2

### 2025/03/24
+ Correção da configuração e criação do comando «timeToRun»

### 2025/03/23
+ Tentativa de correção de um erro no arranque do motor térmico.

### 2025/03/22
+ Adicionadas três comandos para ligar/desligar o motor térmico.
  + *engineStart* para iniciar.
  + *engineStop* para parar.
  + *timeToRun* para definir a duração do funcionamento (de 1 a 15 minutos).

+ Estes comandos só são criados se o endpoint *commands* devolver **ENGINE_START** e **ENGINE_STOP**
+ **É necessário iniciar uma sincronização após a atualização do plugin para criar estes comandos**

**O meu Volvo é 100% elétrico. Por isso, não tive oportunidade de testar estes comandos. Aguardo os vossos comentários.**

### **2024/11/28**
+ Transição da versão beta para a versão estável em 26/11/2024

### 2024/11/26
+ Correção para veículos sem teto de abrir:
  + Os comandos `roofState`, `roofOpen` e `roofClosed` de um veículo serão eliminados aquando da atualização do plugin se
o valor do comando `roofState` não é **CLOSED**, **OPEN** ou **AJAR**.

### **2024/11/16** 
+ Transição da versão beta para a versão estável em 13/11/2024

### 13/11/2024 beta
+ Correções de erros
+ Criação dos comandos **allDoorsClosed** e **allWinsClosed**.
   + Estes dois comandos são automaticamente adicionados aos veículos existentes aquando da atualização do plugin.
+ Widget para painéis de controlo

### **2024/11/06**
+ Adicionada uma opção de configuração do plugin para a chave pessoal de acesso às APIs da Volvocars.
**ATENÇÃO** É necessário gerar uma chave no site developers.volvocars. O procedimento ainda não está descrito na documentação
Sobre o plugin, convido-vos a consultar este [tópico na Comunidade](https://community.jeedom.com/t/le-plugin-volvo-ne-fonctionnera-quune-partie-de-la-journee/133401/2?u=ktn)
para criar a sua própria chave.

### **2024/11/05** 
* Correção de um erro que impedia o registo do token da primeira conta

### **2024/11/04** 
+ Transição da versão beta para a versão estável em 04/11/2024

### 04/11/2024 beta
+ Implementação da autenticação em duas fases nas contas Volvocars
**ATENÇÃO:**
É necessário editar e, em seguida, guardar as contas para ativar a autenticação em duas etapas.

### **2024/10/15**
+ Correção de um erro no painel que afetava os veículos com motor térmico.

### **2024/10/10**
+ Passagem da versão beta para a versão estável em 09/10/2024

### 09/10/2024 beta (bis)
+ Adicionar uma opção **visível no painel** na configuração dos veículos

### 09/10/2024 beta
+ Os comandos diretamente associados a um endpoint não podem ser eliminados. Seriam recriados
automaticamente ao receber uma informação transmitida através de um ponto de extremidade.
+ Correção de um erro na ordenação dos pedidos

### 08/10/2024 beta
+ Primeira versão beta oficial
