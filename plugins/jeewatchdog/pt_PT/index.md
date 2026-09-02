---
layout : default
pluginId : jeewatchdog
plugin : JeeWatchdog
lang: pt_PT
img01: 01_shema_shelly_usb.png
img02: 02_shema_shelly_220.png
img03: 03_boitier_ouvert.png
img04: 04_boitier_ferme.png
---
# Plugin {{page.plugin}} ({{page.pluginId}}) para o Jeedom

O plugin {{page.plugin}} gere um equipamento externo que deve receber regularmente um sinal de funcionamento
da Jeedom. Se não for recebido qualquer sinal de atividade durante um determinado período de tempo, o equipamento externo desliga-se
desligar a alimentação do Jeedom durante alguns segundos para forçar um reinício.

Está previsto um modo «manutenção» para evitar uma falha de alimentação quando uma
Está prevista uma indisponibilidade do Jeedom.

# Equipamento externo
{: .num}

Por enquanto, apenas os equipamentos baseados no [**Shelly plus
1**](https://www.shelly.com/fr/products/shelly-plus-1-x1) (o suporte do [**Shelly 1
Gen4**](https://www.shelly.com/fr/products/shelly-1-gen4) está prevista para breve)

## Esquema de ligações do equipamento
{: .num}

O equipamento de vigilância pode ser configurado para cortar a alimentação USB ou de 220 V~

{% include image.html img=page.img01 -%}
{%- include image.html img=page.img02 %}

Construí um equipamento com os seguintes componentes:
* [Duas portas USB-C](https://de.aliexpress.com/item/1005009033490471.html)
* [Um interruptor](https://de.aliexpress.com/item/1005012383637177.html)
* [Um conector de 220 V](https://de.aliexpress.com/item/1005012625139658.html)
* [Um cabo de 220 V](https://de.aliexpress.com/item/1005011606233857.html)
* [Uma caixa](https://de.aliexpress.com/item/1005006900224809.html) (o modelo 58-80-26)
* Um Shelly

{% include image.html img=page.img03 -%}
{%- include image.html img=page.img04 %}

## Pré-configuração do Shelly
{: .num}

Assim que a instalação elétrica estiver pronta, pode ligar o Shelly à corrente e configurar-lhe um endereço IP fixo e
defina uma palavra-passe (a palavra-passe não é obrigatória, mas é altamente recomendada). O resto da
A configuração será efetuada pelo plugin {{page.plugin}}

> :bulb: Não ligue o Jeedom a este equipamento antes de ter concluído a configuração de
> o equipamento no plugin

# Configuração do plugin
{: .num}


<!--
vim: textwidth=100 colorcolumn=101
-->
