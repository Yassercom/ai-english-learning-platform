import type { RawLesson } from "../types";

export const m03b: RawLesson[] = [
  {
    id: "3-3",
    t: "Functions, Modules and Reading Documentation",
    fr: "Fonctions, modules et lecture de documentation",
    cat: "Python",
    goal: "Définir et appeler une fonction, importer un module et comprendre une page de documentation Python.",
    w: `function|fonction|FUNK-shn
to define|définir|too dih-FINE
to call|appeler|too kawl
parameter|paramètre|puh-RAM-uh-ter
argument|argument|AR-gyoo-munt
return value|valeur de retour|rih-TERN VAL-yoo
to return|renvoyer|too rih-TERN
default value|valeur par défaut|dih-FAWLT VAL-yoo
optional|facultatif|AHP-shn-ul
docstring|chaîne de documentation|DAHK-string
module|module|MAH-jool
package|paquet, package|PAK-ij
library|bibliothèque|LIE-brer-ee
to import|importer|too im-PORT
scope|portée|skohp
local variable|variable locale|LOH-kl VER-ee-uh-bl
global variable|variable globale|GLOH-bl VER-ee-uh-bl
built-in|intégré|BILT-in
signature|signature|SIG-nuh-cher
usage|utilisation|YOO-sij
deprecated|obsolète|DEP-ruh-kay-tid
to raise|lever (une exception)|too rayz
reference|référence|REF-runs
version added|version d'ajout|VER-zhn AD-id
see also|voir aussi|see AWL-soh`,
    x: `Define a function that adds two numbers.|Définis une fonction qui additionne deux nombres.
Call the function with two arguments.|Appelle la fonction avec deux arguments.
The function returns the average.|La fonction renvoie la moyenne.
This parameter is optional.|Ce paramètre est facultatif.
The default value is zero.|La valeur par défaut est zéro.
Import the module at the top of the file.|Importe le module en haut du fichier.
Let me check the documentation.|Laisse-moi consulter la documentation.
It raises a ValueError if the input is empty.|Elle lève une ValueError si l'entrée est vide.
This function is deprecated.|Cette fonction est obsolète.
Is there an example of usage?|Y a-t-il un exemple d'utilisation ?`,
    d: [
      ["Writing a function", `Teacher: Write a function called square. || Écrivez une fonction appelée square.
Student: It takes one parameter, x, and returns x times x. || Elle prend un paramètre, x, et renvoie x fois x.
Teacher: How do you call it? || Comment l'appelle-t-on ?
Student: square(4) returns sixteen. || square(4) renvoie seize.`],
      ["Reading the docs", `Omar: What does the round function do? || Que fait la fonction round ?
Sara: Let's read the documentation. It says: returns the number rounded to a given precision. || Lisons la documentation. Elle dit : renvoie le nombre arrondi à une précision donnée.
Omar: Is the second parameter optional? || Le deuxième paramètre est-il facultatif ?
Sara: Yes. The default value is none, so it returns an integer. || Oui. La valeur par défaut est none, donc elle renvoie un entier.`],
    ],
    c: {
      en: "A function is a reusable block of code. You define a function with the keyword def, give it a name and, optionally, parameters. When you call the function, you pass arguments, and the function can return a value. Variables created inside a function are local, so they exist only there; this is called scope. A module is a Python file with useful code, and a package is a folder of modules. You import them with the import statement. When you read official documentation, look first at the signature, which shows the name and the parameters, then the description, then the examples.",
      fr: "Une fonction est un bloc de code réutilisable. On définit une fonction avec le mot-clé def, on lui donne un nom et, éventuellement, des paramètres. Quand on appelle la fonction, on passe des arguments et la fonction peut renvoyer une valeur. Les variables créées dans une fonction sont locales : elles n'existent que là ; c'est la portée. Un module est un fichier Python contenant du code utile et un package est un dossier de modules. On les importe avec l'instruction import. Quand vous lisez la documentation officielle, regardez d'abord la signature, qui montre le nom et les paramètres, puis la description, puis les exemples.",
    },
    da: `Parameter vs argument: parameter = smiya f t3rif d l-fonction (def f(x)). Argument = qima li kat3iyet-ha melli kat-appeli (f(5)). Bzzaf d n-nass kay-khelto-hom.
Return vs print: print kat-affichi 3la l-ecran, return kat3ti l-qima l-l-code li 3ayyet l-fonction. Mouhim bzzaf.
Documentation: ma t9rach kolchi. Choof l-signature (smiya + paramètres), men ba3d l-description, men ba3d l-exemples.`,
    r: {
      t: "Reading Python documentation: str.split",
      en: "This text is a simplified explanation of the official Python documentation for the split method of strings. The method returns a list of the words in a string. By default, it uses spaces as separators. The optional parameter sep lets you choose another separator, for example a comma. A second optional parameter, maxsplit, limits the number of splits. For example, 'a,b,c'.split(',') returns a list with three items. The official page is in the Python 3 standard library documentation, in the section Built-in Types (docs.python.org).",
      fr: "Ce texte est une explication simplifiée de la documentation officielle de Python pour la méthode split des chaînes. La méthode renvoie une liste des mots d'une chaîne. Par défaut, elle utilise les espaces comme séparateurs. Le paramètre facultatif sep permet de choisir un autre séparateur, par exemple une virgule. Un second paramètre facultatif, maxsplit, limite le nombre de découpages. Par exemple, 'a,b,c'.split(',') renvoie une liste de trois éléments. La page officielle se trouve dans la documentation de la bibliothèque standard Python 3, section Built-in Types (docs.python.org).",
    },
    s: "Lisez la signature à voix haute : « def greet, open parenthesis, name, comma, greeting equals Hello, close parenthesis. » Puis expliquez : « The function has one required parameter and one optional parameter. »",
    p: { tip: "« Parameter » : accent sur « RAM » (puh-RAM-uh-ter). « Argument » : AR-gyoo-munt. « Module » : MAH-jool (le « d » devient « j »). « Deprecated » : DEP-ruh-kay-tid.", words: "function,parameter,argument,module,optional,deprecated" },
    q: [
      ["In def add(a, b): …, a and b are…", ["arguments", "parameters", "modules", "values returned"], 1, "Dans la définition, ce sont des paramètres ; ce que l'on passe à l'appel s'appelle les arguments."],
      ["What does return do?", ["Prints on screen", "Sends a value back to the caller", "Deletes the function", "Imports a module"], 1, "return renvoie une valeur à l'appelant."],
      ["What does « optional parameter » mean?", ["You must provide it", "You can omit it", "It is deprecated", "It is an error"], 1, "Optional = facultatif ; il a souvent une valeur par défaut."],
    ],
    rq: [
      ["What does str.split return?", ["A list of words", "A number", "A file"], 0, "« returns a list of the words »."],
      ["What is the default separator?", ["Spaces", "Commas", "Nothing"], 0, "« By default, it uses spaces »."],
    ],
    f: ["I called the function with two parameters.", "I called the function with two arguments.", "Au moment de l'appel, on passe des arguments ; les paramètres sont dans la définition."],
  },
  {
    id: "3-4",
    t: "Python Data Structures",
    fr: "Structures de données en Python",
    cat: "Python",
    goal: "Décrire et manipuler listes, tuples, dictionnaires et ensembles, et expliquer leurs différences.",
    w: `list|liste|list
tuple|tuple|TUP-ul
dictionary|dictionnaire|DIK-shuh-nair-ee
set|ensemble|set
key|clé|kee
value|valeur|VAL-yoo
index|indice|IN-deks
slice|tranche (sous-liste)|slice
element / item|élément|EL-uh-munt / EYE-tum
length|longueur|length
to append|ajouter à la fin|too uh-PEND
to insert|insérer|too in-SERT
to remove|retirer|too rih-MOOV
to sort|trier|too sort
to reverse|inverser|too rih-VERS
to unpack|dépaqueter|too un-PAK
mutable|modifiable|MYOO-tuh-bl
immutable|non modifiable|ih-MYOO-tuh-bl
ordered|ordonné|OR-derd
unique|unique|yoo-NEEK
empty|vide|EMP-tee
nested|imbriqué|NES-tid
list comprehension|liste en compréhension|list kum-prih-HEN-shn
membership|appartenance|MEM-ber-ship
to look up|rechercher|too look up`,
    x: `Append a new item to the list.|Ajoute un nouvel élément à la liste.
The first index is zero.|Le premier indice est zéro.
Use a dictionary to store keys and values.|Utilise un dictionnaire pour stocker des clés et des valeurs.
A tuple is immutable.|Un tuple n'est pas modifiable.
A set contains only unique items.|Un ensemble contient uniquement des éléments uniques.
How long is the list?|Quelle est la longueur de la liste ?
Sort the list in descending order.|Trie la liste par ordre décroissant.
Look up the value by its key.|Recherche la valeur grâce à sa clé.
Is this item in the list?|Cet élément est-il dans la liste ?
Take a slice of the first three items.|Prends une tranche des trois premiers éléments.`,
    d: [
      ["List or dictionary?", `Omar: I want to store students and their grades. || Je veux stocker des étudiants et leurs notes.
Sara: Use a dictionary. The name is the key and the grade is the value. || Utilise un dictionnaire. Le nom est la clé et la note est la valeur.
Omar: And how do I look up a grade? || Et comment je cherche une note ?
Sara: grades["Omar"] returns his grade. || grades["Omar"] renvoie sa note.`],
      ["Understanding an error", `Teacher: Why does this code fail? || Pourquoi ce code échoue-t-il ?
Student: Because a tuple is immutable. We can't change an item. || Parce qu'un tuple n'est pas modifiable. On ne peut pas changer un élément.
Teacher: What can you use instead? || Que peut-on utiliser à la place ?
Student: A list, because it is mutable. || Une liste, car elle est modifiable.`],
    ],
    c: {
      en: "Python has four main built-in data structures. A list is an ordered and mutable collection: you can append, insert, remove or sort items. Each item has an index, and the first index is zero. A tuple is similar but immutable, so you cannot change it after creation. A dictionary stores pairs of keys and values, and you look up a value by its key. A set stores unique items, without duplicates and without order. A list comprehension is a short way to create a new list from an old one. Choosing the right structure makes code clearer and faster.",
      fr: "Python possède quatre structures de données principales intégrées. Une liste est une collection ordonnée et modifiable : on peut ajouter, insérer, retirer ou trier des éléments. Chaque élément a un indice, et le premier indice est zéro. Un tuple est similaire mais non modifiable : on ne peut pas le changer après sa création. Un dictionnaire stocke des paires de clés et de valeurs, et on cherche une valeur grâce à sa clé. Un ensemble stocke des éléments uniques, sans doublons et sans ordre. Une liste en compréhension est une façon courte de créer une nouvelle liste à partir d'une ancienne. Choisir la bonne structure rend le code plus clair et plus rapide.",
    },
    da: `Index men zero: awwal 3onsor = index 0, machi 1. « fruits[0] » = awwal fakiha. Akhir 3onsor = index -1.
Mutable / immutable: mutable = t9der tbeddel-ha (list). Immutable = ma t9derch (tuple, string). « Immutable » = « 7ajra », ma kat-tbeddelch.
Dictionnaire: bhal l-qamous: l-kelma (key) w ma3nahha (value). Key ma kat-t3awedch (unique).`,
    r: {
      t: "Why dictionaries are fast",
      en: "Suppose you have a list of one million names and you want to find one. Python must check the names one by one, which can take time. A dictionary works differently. It uses a method called hashing to compute the position of each key directly. Therefore, looking up a key in a dictionary usually takes almost the same time, even when the dictionary is very large. This is why dictionaries are used everywhere in Python programs, for example to count words in a text or to store the settings of a model.",
      fr: "Supposons que vous ayez une liste d'un million de noms et que vous vouliez en trouver un. Python doit vérifier les noms un par un, ce qui peut prendre du temps. Un dictionnaire fonctionne différemment. Il utilise une méthode appelée hachage pour calculer directement la position de chaque clé. Par conséquent, chercher une clé dans un dictionnaire prend généralement presque le même temps, même quand le dictionnaire est très grand. C'est pourquoi les dictionnaires sont utilisés partout dans les programmes Python, par exemple pour compter les mots d'un texte ou stocker les paramètres d'un modèle.",
    },
    s: "Décrivez à voix haute un dictionnaire de votre choix : « I have a dictionary of countries. The keys are the names. The values are the capitals. To look up Morocco, I use the key Morocco. »",
    p: { tip: "« Dictionary » : DIK-shuh-nair-ee, 4 syllabes. « Tuple » : TUP-ul ou TOO-pul (les deux existent). « Mutable » : MYOO-tuh-bl. « Index » : IN-deks, accent sur IN.", words: "dictionary,tuple,mutable,immutable,element,comprehension" },
    q: [
      ["Which structure cannot be changed after creation?", ["list", "dictionary", "tuple", "set"], 2, "Le tuple est immutable."],
      ["What is the index of the first item in a list?", ["0", "1", "-1", "first"], 0, "Python commence à zéro."],
      ["Which structure removes duplicates automatically?", ["list", "set", "tuple", "string"], 1, "Un set ne garde que des éléments uniques."],
    ],
    rq: [
      ["What method does a dictionary use to find keys fast?", ["Hashing", "Sorting", "Printing"], 0, "« a method called hashing »."],
      ["What is one use of dictionaries in the text?", ["Counting words", "Drawing pictures", "Sending emails"], 0, "« to count words in a text »."],
    ],
    f: ["The list have five elements.", "The list has five elements.", "Sujet singulier « the list » → « has »."],
  },
  {
    id: "3-5",
    t: "Objects, Errors and Debugging",
    fr: "Objets, erreurs et débogage",
    cat: "Python",
    goal: "Comprendre les classes et objets, lire un message d'erreur et expliquer comment déboguer.",
    w: `class|classe|klas
object|objet|AHB-jekt
instance|instance|IN-stuns
attribute|attribut|AT-ruh-byoot
method|méthode|METH-ud
constructor|constructeur|kun-STRUK-ter
inheritance|héritage|in-HAIR-uh-tuns
exception|exception|ik-SEP-shn
error message|message d'erreur|ER-er MES-ij
traceback|trace d'appels|TRAYS-bak
syntax error|erreur de syntaxe|SIN-taks ER-er
runtime error|erreur d'exécution|RUN-time ER-er
logic error|erreur de logique|LAH-jik ER-er
to debug|déboguer|too dee-BUG
breakpoint|point d'arrêt|BRAYK-poynt
to handle|gérer|too HAN-dl
to catch|attraper|too kach
to fail|échouer|too fayl
to reproduce|reproduire|too ree-pruh-DOOS
unit test|test unitaire|YOO-nit test
assertion|assertion|uh-SER-shn
fix|correctif, correction|fiks
workaround|contournement|WERK-uh-round
NumPy|NumPy (bibliothèque numérique)|NUM-pie
pandas|pandas (bibliothèque de données)|PAN-duz`,
    x: `Read the error message carefully.|Lis attentivement le message d'erreur.
The traceback shows where the error happened.|La trace montre où l'erreur s'est produite.
I can't reproduce the bug.|Je n'arrive pas à reproduire le bogue.
Let's add a breakpoint here.|Ajoutons un point d'arrêt ici.
Print the variable to see its value.|Affiche la variable pour voir sa valeur.
The test fails because of a typo.|Le test échoue à cause d'une faute de frappe.
Handle the exception with try and except.|Gère l'exception avec try et except.
This method belongs to the class.|Cette méthode appartient à la classe.
Create an instance of the class.|Crée une instance de la classe.
I found a workaround.|J'ai trouvé un contournement.`,
    d: [
      ["Reading a traceback", `Teacher: What does the error message say? || Que dit le message d'erreur ?
Student: It says: ZeroDivisionError, division by zero. || Il dit : ZeroDivisionError, division par zéro.
Teacher: Which line caused it? || Quelle ligne l'a causée ?
Student: The traceback shows line twelve. We divide by the length of an empty list. || La trace montre la ligne douze. On divise par la longueur d'une liste vide.`],
      ["Pair debugging", `Omar: The function returns None instead of a number. || La fonction renvoie None au lieu d'un nombre.
Sara: Did you forget the return statement? || Tu as oublié l'instruction return ?
Omar: Yes! I only printed the result. || Oui ! J'ai seulement affiché le résultat.
Sara: Add return, then run the unit test again. || Ajoute return, puis relance le test unitaire.`],
    ],
    c: {
      en: "In object-oriented programming, a class is a blueprint and an object is an instance of that class. A class has attributes, which store data, and methods, which are functions that belong to the class. The constructor, named __init__ in Python, creates the object. When a program fails, Python shows an error message and a traceback. A syntax error means the code is written incorrectly; a runtime error happens while the program runs; a logic error gives a wrong result without any message. To debug, reproduce the problem, read the message, print variables or use a breakpoint, fix the code and run a test.",
      fr: "En programmation orientée objet, une classe est un plan et un objet est une instance de cette classe. Une classe a des attributs, qui stockent des données, et des méthodes, qui sont des fonctions appartenant à la classe. Le constructeur, nommé __init__ en Python, crée l'objet. Quand un programme échoue, Python affiche un message d'erreur et une trace. Une erreur de syntaxe signifie que le code est mal écrit ; une erreur d'exécution se produit pendant l'exécution ; une erreur de logique donne un mauvais résultat sans aucun message. Pour déboguer, reproduisez le problème, lisez le message, affichez les variables ou utilisez un point d'arrêt, corrigez le code et lancez un test.",
    },
    da: `Class vs object: class = « plan » dial dar (blueprint), object = dar li tbnat 3la had l-plan. Mn class wa7da t9der tkhllq bzzaf d l-objects (instances).
Error messages: matkhafch mn l-ahmar! L-message kay9ol lik chnou w fin (ligne). 9ra akhir satr mn traceback lowel.
Syntax error vs logic error: syntax = l-code ma-ktoubch mzyan (Python ma kay-chghlch). Logic = l-code kay-chghl walakin n-natija ghalta — hadi l-as3ab.`,
    r: {
      t: "Rubber duck debugging",
      en: "Many programmers talk to a small rubber duck on their desk when they cannot find a bug. They explain their code to the duck, line by line, in simple words. This technique is called rubber duck debugging. While you explain, you often notice a mistake that you did not see before, because speaking forces you to think slowly and clearly. The same method works with a friend or a classmate. It is also excellent English practice: you describe what each line does, what you expect and what really happens.",
      fr: "Beaucoup de programmeurs parlent à un petit canard en caoutchouc posé sur leur bureau quand ils ne trouvent pas un bogue. Ils expliquent leur code au canard, ligne par ligne, avec des mots simples. Cette technique s'appelle le débogage du canard en caoutchouc. En expliquant, on remarque souvent une erreur qu'on n'avait pas vue, car parler oblige à penser lentement et clairement. La même méthode fonctionne avec un ami ou un camarade. C'est aussi un excellent entraînement en anglais : on décrit ce que fait chaque ligne, ce qu'on attend et ce qui se passe vraiment.",
    },
    s: "Faites du « rubber duck debugging » en anglais : expliquez à voix haute un petit code de 3 lignes : « This line creates a list. This line loops over it. I expect … but I get … »",
    p: { tip: "« Exception » : ik-SEP-shn, accent sur « SEP ». « Debug » : dee-BUG. « Traceback » : TRAYS-bak. « Instance » : IN-stuns. Le « x » de « exception » se prononce « ks ».", words: "exception,traceback,constructor,inheritance,breakpoint,assertion" },
    q: [
      ["A class is…", ["an instance of an object", "a blueprint for objects", "a type of error", "a file"], 1, "La classe est le plan ; l'objet est l'instance."],
      ["Which error gives a wrong result without any message?", ["syntax error", "logic error", "import error", "name error"], 1, "Une erreur de logique ne déclenche pas d'exception."],
      ["What should you do first when you debug?", ["Rewrite everything", "Reproduce the problem and read the message", "Delete the file", "Ask for the answer"], 1, "Reproduire puis lire le message est la première étape."],
    ],
    rq: [
      ["Why does explaining code help?", ["It forces you to think clearly", "It makes code faster", "It deletes bugs"], 0, "« speaking forces you to think slowly and clearly »."],
      ["Who can replace the rubber duck?", ["A classmate", "A printer", "A cable"], 0, "« a friend or a classmate »."],
    ],
    f: ["The program have a bug in the line five.", "The program has a bug in line five.", "Singulier → « has » ; et on dit « in line five » sans article."],
  },
];
