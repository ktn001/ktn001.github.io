---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: pt_PT
---

# Notas de lançamento

### 01/10/2026 bis BETA
+ Correção de um erro que impedia a criação de um equipamento

### 01/10/2026 BETA
+ Reescrita do código de configuração do Shelly
  + Passamos de um método *bruto*, que redefinia tudo, para um método *sutil*, que redefine apenas o que deve ser alterado.
+ O Shelly é (re)configurado automaticamente após cada gravação do equipamento Jeedom.
+ O botão <**Configurar o interruptor**> passa a chamar-se <**Forçar a configuração do interruptor**>. A cor muda de verde para laranja.
+ O cron do kick é ativado/desativado com o eqLogic.
+ O Shelly é automaticamente desativado antes da remoção de um dispositivo

### **21/09/2026 ESTÁVEL**
+ A versão beta de 17/09/2026 passou para a versão estável.

### 17/09/2026 BETA
+ Adicionar um botão na página de configuração do equipamento para abrir um novo separador na página de administração do Shelly.
+ **Experimental:** Adicionado suporte para o *Shelly Power Strip*.

### 15/09/2026 BETA
+ Primeira versão.
