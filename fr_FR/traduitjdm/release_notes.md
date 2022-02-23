---
layout: default
---
# Release Notes
---
#### v1.0.2 (14/2/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.2.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.2.zip)
- Corrections de l'aide pour l'option `--noexclude`
- La version retournée par l'option `-v` n'a pas été mise à jour

---
#### v1.0.1 (14/2/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.1.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.1.zip)
- Corrections dans le fichier d'exemple de configuration
- La version retournée par l'option `-v` n'a pas été mise à jour

---
#### v1.0.0 (14/2/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v1.0.0.zip)
- Possibilité d'exclure des fichiers ou répertoires pour la recherche de textes à traduire
- Refonte des optionis de la ligne de commande
    - options courtes et longues
    - Les options `-c` et `-C` sont inversées
    - L'usage de l'option `-f` est modifié
    - La syntyxe de la liste des langues fournie avec l'option `-l` est modifiée
    - Ajout de nouvelles options permettant de désactiver des options configurées dans le fichier de configuration
- Amélioration du fichier de configuration (voir le fichier `etc/traduitjdm.cfg.exemple`)

---
#### v0.10.3 (12/2/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.3.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.3.zip)

---
#### v0.10.2 (11/2/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.2.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.2.zip)

- Correction de bug (les textes `__('...'),__FILE__` n'étaient plus pris en compte).

---
#### v0.10.1 (7/1/2022)

- Ammélioration de la recherche pour les functions `__()` de php: Les textes peuvent contenir des `\"`ou `\'`

---
#### v0.10.0 (5/1/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.10.0.zip)

- Traitement des quotes et double quotes dans les textes à traduire.

---
#### v0.9.0 (4/1/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.9.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.9.0.zip)

- Ajout de l'option `-t` pour indenter les fichiers json avec des tabulations au lieu de 4 espaces.

---
#### v0.8.1 (4/1/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.8.1.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.8.1.zip)

- Correction d'un bug en relation avec l'option `-p`

---
#### v0.8.0 (3/1/2022)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.8.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.8.0.zip)

- Ajout le l'option `-p` pour purger les textes qui ne sont plus dans le code du plugin

---
#### v0.7.0 (1/11/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.7.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.7.0.zip)

- Recherche de textes à traduire dans les fichiers *\*.json*

---
#### v0.6.1 (9/9/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.6.1.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.6.1.zip)

- Amélioration d'une regex

---
#### v0.6.0 (7/9/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.6.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.6.0.zip)

- Amélioration de la recherche des textes à traduire
- Recherche des textes à traduire dans les fichiers (\*.php, \*.js et \*.html). Avant, on cherchait uniquemen dans \*php et \*.js.
- On ne cherche pas de textes à tratuire dans le répertoire *docs*

---
#### v0.5.0 (21/08/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.5.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.5.0.zip)

- Le répertoire "core/i18n" du plugin est créé s'il n'existe pas encore
- Quelques corrections de texte

---
#### v0.4.0 (01/05/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.4.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.4.0.zip)

- Sélection interractive si le core propose plusieurs traductions pour un même texte.
- Pas de recherche de traduction dans le core pour "fr_FR". En français, la traduction est le texte lui-même.
- Affichage en couleur (peut être désactivé avec l'option -c).
- Utilisation d'un fichier pour définir le plugin et les langues cibles sans avoir à les indiquer dans la ligne de commande.

---
#### v0.3.1 (01/05/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.3.1.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.3.1.zip)

- Détection de texte à traduire de longueur 0.

---
#### v0.3.0 (29/04/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.3.0.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.3.0.zip)

- Reprise des texte du core.

---
#### v0.2.2 (29/04/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.2.2.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.2.2.zip)

Correction d'un bug

---
#### v0.2.1 (27/04/2021)
- Suppression d'un message de traçage.

---
#### v0.2.0 (27/04/2021)
- Modification de la structure du code.
- Vérification de la langue demandée via l'option *-l \<langue>*.
- Les textes traduits précédemment sont conservés.

---
#### v0.1.1 (24/04/2021)
[tgz](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.1.1.tar.gz) [zip](https://github.com/ktn001/traduitjdm/archive/refs/tags/v0.1.1.zip)

- Correction d'une erreur de syntaxe.

---
#### v0.1.0 (24/04/2021)
- Le fichier génére un nouveau fichier de traduction sans tenir compte d'un fichier existant.
- Le fichier générer contient la liste des textes trouvés mais sans traduction.
