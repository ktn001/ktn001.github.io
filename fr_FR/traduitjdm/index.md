---
layout: default
---
# Documentation de "*traduitjdm*"

---
> *traduitjdm* est un programme, en Python, d'aide à la traduction des plugins de [Jeedom](http://jeedom.com)   
> Le programme peut être téléchargé depuis la page [release_note](release_notes.html)

# Introduction
{: .num}
{% raw %}
Les textes dans les interfaces Jeedom peuvent être affichés en diverses langues selon le contexte. Les textes devant être affichés en différentes langues doivent être marqués sous la forme `{{texte à afficher}}` ou `__("texte à afficher".__FILE__)`. Les traductions de ces textes sont configurées dans des fichiers placés dans le répertoire `core/i18n` du plugin.

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
  --noexclude           Pas d'exclusion de fichiers et répertoires 
  -f source1[,source2 ...], --force source1[,source2 ...]
                        Ordre de priorité des sources de traduction. Les
                        sources sont "precedent"s et "core"
  plugin                Le plugin à traduire
```
## Les options en détail
{: .num}

**Langues**:
: Aucune langue n'est définie par défaut.
: Les langues cible des traductions peuvent être indiquées via l'option `-l` ou `--langues` de la ligne de commande ou en mettant la liste des langues dans le paramètre `langues` du fichier de configuration.
: La listes des langues confgurée dans le fichier de configuration est ignorée si l'option `-l` ou `--langues` est utilisée.

**Verbose**:
: Par défaut, le mode verbose est désactivé.
: Il peut être activé en utilisant l'option `-v` ou `--verbose` dans la ligne de commande ou en mettaant le paramètre `verbose` à `True` dans le fichier de configuration.L'activation du mode verbose dans le fichier de configuration peut être désactivé lors d'une exécution avec l'option `--noverbose`.
: L'activation du mode `debug` (option `-d`) force le mode `verbose`. Le mode `debug` est essentiellement prévu pour le développement du script, les informations affichées lorsque ce mode est activé peuvent changer selon les besoins du développement.

**Couleur**:
: Par défaut, les messages d'erreur et de warning sont affichés en couleurs.
: La colorisation de ces messages peut être désactivée avec l'option `--nocolor` de la ligne de commande ou en mettant le paramèetre `color` à `False` dans le fichier de configuration. Si la colorisation est désactivée dans le fichier de configuration, il est possible de la réactivé lors d'une exécution avec l'option `-C` ou `--color`.

**Backup:**
: Par défaut, la sauvegarde des anciens fichiers de traduction est désactivée.
: La sauvegarde des anciennes version des fichiers de configuration peut être activée avec l'option `-b` ou `--backup` dans la ligne de commande ou en mettant le paramètre `backup` à `True` dans le fichier de configuration. Si la sauvegarde est activéei dans le fichier de configuration, il est possible de la désactier lors d'une exécution avec l'option `--nobackup`.
: 
: Lorsque la sauvegarde est activée:
: + Les fichiers nommés `<langue>.json.bck.5` sont supprimés
: + Les fichiers nommés `<langue>.json.bck.N` sont renommés `<langue>.json.bck.<N+1>` (N valant de 1 à 4)
: + Les fichiers nommés `<langue>.json.bck` sont renommés `<langue>.json.bck.1`
: + Les fichiers nommés `<langue>.json` sont renommés `<langue>.json.bck`

**Purge:**
: Par défaut, la purge des textes qui ne sont pas/plus dans le code source du plugin n'est pas activée.
: La purge des anciens texte peut être activée avec l'option `-p` ou `--purge` dans le ligne de commande ou en mettant le paramètre `purge` à `True` dans le fichier de configuration. Si la purge est activée dans le fichier de configuration, il est possible de la désactiver lors d'une exécution avec l'option `--nopurge`.
:
: La purge élimie les textes qui se trouvent dans la dernière version des fichiers de traduction mais n'ont pas été trouvés dans le code du plugin. Le risque est que des textes qui auraient été ajouté manuellement pourcontourné un cas particulier non reconnus pas tradiutjdn soient éliminés.

**Indentation:**
: Par défaut, les indentations dans les fichiers de traduction sont de quatre caractères d'espacement.
: On peut utiliser des tabulations pour les indentation avec l'option `-t` ou `--tab` dans la ligne de commande ou en mettant le paramètre `tab` à `True` dans le fichier de configuration. Si l'utilisation de tabulation est ectivée dans le fichier de configuration, il est possible de la désactiver lors d'une exécution avec l'option `--notab`.

**Répertoire Jeedom:**
: Par défaut, Jeedom est installé dans le répertoire `/var/www/html` et le plugin à trduire doit se trouver dans le répertoire `plugins` est dans le répertoire de base de l'installation Jeedom.
: Le chemine d'accès à Jeedom, et au plugin à traduire, peut être redéfini avec l'option `-j` ou `--JeeDir` dans la ligne de commande ou en dèfimissant le paramètre `JeedomDir` dans le fichier de configuration.

**Exclusion de fichiers source:**
: Par défaut, aucun fichier ou répertoire n'est exclus.
: L'option `-x` ou `--exclude` de la ligne de commande et le paramètre `exclude` dans le fichier de configuraion permettent d'indiquer une liste de fichiers ou répertoires à exclure de la recherche de textes à traduire. Il est possible de désactiver des exclusions définies dans le fichier de configuration n utilisant l'option `--noexclude`.

# Le fichier de configuration
{: .num}

Le fichier de configuration par défaut est le fichier `../etc/tradtuitjdm.cfg` (relatif au répartoire où se trouve `traduitjdm`.
> Si traduitjmd se trouve dans `/home/jeedom/traduitjdm/bin`, le fichier de config par défaut sera `/home/jeedom/traduitjdm/etc/traduitjdm.conf`

> `traduitjdm` retourne un message d'erreur et termine son exécution s'il ne trouve pas le fichier de configuration. Dans ce cas, on peut:
> + Utiliser l'option `--noconfig`
> + Créer un fichier de configuration vide
> + Utiliser l'option `-c <configFile>` pour indiquer le nom d'un fichier de configuration autre que le fichier par défaut.

Le caractère `#` marque le début d'un commentaire qui se termine à la fin de la ligne.

Le fichier est subdivisé en sections (Actuellement seule la section `global` est reconnue). Chaque section commence par une ligne contenant le nom de la section entre des crochets `[global]`.  
Dans chaques section, on a des lignes de définition de paramètre sous la forme `parametre = valeur`. Voir le contenu du fichier `etc/traduitjdm.cfg.exemple` pour la liste des paramèetre reconnus et la syntaxes de valeurs correspondantes.

# Principe de fonctionnement
{: .num}
## Recherche des textes à traduire
{: .num}
**traduitjdm** commence par constuire une lise des textes à traduire en cherchant les textes dans le code du plugin puis en y ajoutant les textes trouvés lors d'exécutions précédentes qui se trouvent dans le fichier de traduction existant. Les textes resultants d'exécution précédentes peuvent être explus s'ils ne se trouvent plus dans le code du plusgin en utilisant l'option `--purge`.

## Recherche de traductions
{: .num}
**traduitjdm** va chercher des traductions dans plusieurs sources pour chaque texte à traduire:
1. Dans la dernière version du fichier de traduction.
    Les traductions se trouvant dans ce fichier sont soit la traduction telle qu'elle a été déterminée lors de la dernière exécution, soit un texte modifié après exécution en éditant le fichier.
2. Dans le **core** de Jeedom.
    Les traductions définies dans le *core* de Jeedom sont récupérées.

Les textes traduits par la fonction `__('texte',__FILE__)` dans les scripts php doivent être encadrés par des quotes ou double quotes (`'` ou `"`). De plus, ils ne doivent pas contenir le caractère d'encadrement.

## Sélection des traductions
{: .num}
Pour chaque texte à traduire une traduction sera reprise de l'une des soures de traduction dans l'ordre de piorité suivant:
1. Traduction trouvée dans la version précédente.
1. Traduction trouvée dans le core.
1. Si aucune traduction n'a été trouvée, on garde le texte en français comme proposition de traduction.

L'option `-f core` force l'usage de la traduction trouvée dans le core en priorité
