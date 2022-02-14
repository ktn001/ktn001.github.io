---
layout: default
---
# Documentation de "*traduitjdm*"

*traduitjdm* est un programme, en Python, d'aide à la traduction des plugins de [Jeedom](http://jeedom.com)

Le programme peut être téléchargé depuis la page [release_note](release_notes.html)

# Introduction
{: .num}
{% raw %}
Les textes dans les interfaces Jeedom peuvent être affichés en diverses langues selon le context. Pour celà, les textes devant pouvoir être affichés en différentes langues doivent être marqués sous la forme `{{texte à afficher}}` ou `__("texte à afficher".__FILE__)`. Les traductions de ces textes sont configurées dans des fichiers placés dans le répertoire `core/i18n` du plugin.

Le but de **traduitjdm** est de chercher les occurrences `{{texte à afficher}}` et `__("texte à afficher",__FILE__)` dans le code d'un plugin et de créer les fichiers de traductions dans `core/i18n`.
{% endraw %}

# Syntaxe de "*traduitjdm*"
{: .num}
```
usage: traduitjdm [-h] [-V] [-L] [-v | --noverbose] [-d] [-C | --nocolor]
                  [-b | --nobackup] [-p | --nopurge] [-t | --notab]
                  [-c ConfigFile | --noconfig] [-j JeedomDir | --noJeedomDir]
                  [-l langues[,langues ...]] [-x EXCLUDE | --noexclude]
                  [-f source1[,source2 ...]]
                  [plugin]

Génération de fichiers de traduction pour les plugins Jeedom

infos:
  -h, --help            Affiche cette aide et quitte
  -V, --version         Affiche la version du programme et quitte
  -L, --langues-connues
                        Affiche la liste des langues reconnues et quitte

Traduction:
  -v, --verbose         Un peu de babillage
  --noverbose           Pas de babillage
  -d, --debug           Un peu plus de babillage
  -C, --color           Active l'affichage en couleur
  --nocolor             Désactive l'affichage en couleur
  -b, --backup          Les fichiers existants sont renommés avec l'extension
                        ".bck"
  --nobackup            Pa de suavegarde des fichiers existants
  -p, --purge           Retire les textes qui ne sont pas/plus trouvés dans le
                        code
  --nopurge             Pas de purge des traductions existantes
  -t, --tab             Utilisation de tabulations pour les indentations
                        (sinon, les indentations sont de 4 espaces)
  --notab               Les indentations sont de 4 espaces)
  -c ConfigFile, --config ConfigFile
                        Fichier de configuration
                        ('/home/chris/traduitjdm/etc/traduitjdm.cfg' par
                        défaut)
  --noconfig            Ignore le fichier de config
  -j JeedomDir, --JeeDir JeedomDir
                        Répertoire d'installation de Jeedom
  --noJeedomDir         Force l'utilisation de '/var/www/html'
  -l langues[,langues ...], --langues langues[,langues ...]
                        Liste des langues cibles
  -x EXCLUDE, --exclude EXCLUDE
                        Fichiers ou répertoires à exclure des traductions
  --noexclude           Fichiers ou répertoires à exclure des traductions
  -f source1[,source2 ...], --force source1[,source2 ...]
                        Ordre de priorité des sources de traduction. Les
                        sources sont "precedent"s et "core"
  plugin                Le plugin à traduire
```

# Principe de fonctionnement
{: .num}
## Recherche des textes à traduire
{: .num}
**traduitjdm** commence par constuire une lise des textes à traduire en cherchant les textes dans le code du plugin puis en y ajoutant les textes trouvés lors d'exécutions précédentes qui se trouvent dans le fichier de traduction existant.

## Recherche de traductions
{: .num}
**traduitjdm** va chercher des traductions dans plusieurs sources pour chaque texte à traduire:
1. Dans la dernière version du fichier de traduction.
    Les traductions se trouvant dans ce fichier sont soit la traduction telle qu'elle a été déterminée lors de la dernière exécution, soit un texte modifié après exécution en éditant le fichier.
2. Dans le **core** de Jeedom.
    Les traductions définies dans le *core* de Jeedom sont récupérées.

Les textes traduits par la fonction `__('texte',__FILE__)` dans les scripts phpdoivent être encdrés par des quotes ou double quotes (`'` ou `"`). De plus, ils ne doivent pas contenir le caractère d'encadrement. 

## Sélection des traductions
{: .num}
Pour chaque texte à traduire une traduction sera reprise de l'une des soures de traduction dans l'ordre de piorité suivant:

1. Traduction trouvée dans la version précédente.
1. Traduction trouvée dans le core.
1. Si aucune traduction n'a été trouvée, on garde le texte en français comme proposition de traduction.

L'option `-f core` force l'usage de la traduction trouvée dans le core en priorité 
