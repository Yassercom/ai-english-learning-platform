import type { RawLesson } from "../types";

export const m03: RawLesson[] = [
  {
    id: "3-1",
    t: "First Steps in Python: Variables and Types",
    fr: "Premiers pas en Python : variables et types",
    cat: "Python",
    goal: "Lire et expliquer en anglais un petit programme Python avec variables, types et affichage.",
    w: `variable|variable|VER-ee-uh-bl
value|valeur|VAL-yoo
to assign|affecter|too uh-SYNE
integer|entier|IN-tuh-jer
float|nombre à virgule flottante|floht
string|chaîne de caractères|string
boolean|booléen|BOO-lee-un
data type|type de données|DAY-tuh type
operator|opérateur|AH-puh-ray-ter
expression|expression|ik-SPRESH-n
comment|commentaire|KAH-ment
statement|instruction|STAYT-munt
keyword|mot réservé|KEE-werd
syntax|syntaxe|SIN-taks
indentation|indentation|in-den-TAY-shn
script|script|skript
interpreter|interpréteur|in-TER-pruh-ter
editor|éditeur|EH-duh-ter
to run|exécuter|too run
to print|afficher|too print
to convert|convertir|too kun-VERT
quotation marks|guillemets|kwoh-TAY-shn marks
case-sensitive|sensible à la casse|kays SEN-suh-tiv
result|résultat|rih-ZULT
to define|définir|too dih-FINE`,
    x: `Let's declare a variable called age.|Déclarons une variable appelée age.
Assign the value ten to x.|Affecte la valeur dix à x.
This line prints the result.|Cette ligne affiche le résultat.
What is the type of this variable?|Quel est le type de cette variable ?
Convert the string to an integer.|Convertis la chaîne en entier.
You forgot the quotation marks.|Tu as oublié les guillemets.
Python is case-sensitive.|Python est sensible à la casse.
Add a comment to explain the code.|Ajoute un commentaire pour expliquer le code.
Run the script and check the output.|Exécute le script et vérifie la sortie.
Mind the indentation.|Fais attention à l'indentation.`,
    d: [
      ["Reading a first program", `Teacher: Look at this line: age = 20. What does it do? || Regardez cette ligne : age = 20. Que fait-elle ?
Student: It assigns the value twenty to the variable age. || Elle affecte la valeur vingt à la variable age.
Teacher: Correct. What is the type of age? || Exact. Quel est le type de age ?
Student: It is an integer. || C'est un entier.`],
      ["Fixing a mistake", `Omar: My program doesn't work. || Mon programme ne marche pas.
Sara: You wrote Print with a capital P. Python is case-sensitive. || Tu as écrit Print avec un P majuscule. Python est sensible à la casse.
Omar: Oh, I see. Now it prints the result. || Ah, je vois. Maintenant il affiche le résultat.
Sara: Great. Add a comment so you remember why. || Super. Ajoute un commentaire pour t'en souvenir.`],
    ],
    c: {
      en: "Python is a popular programming language because its syntax is simple and readable. A variable is a name that stores a value. You assign a value with the equals sign: age = 20. Every value has a data type. An integer is a whole number, a float has decimals, a string is text between quotation marks, and a boolean is either True or False. The function print() displays a result on the screen. Python is case-sensitive, and it uses indentation to organize code. Comments start with the # symbol and explain the code for humans.",
      fr: "Python est un langage de programmation populaire car sa syntaxe est simple et lisible. Une variable est un nom qui stocke une valeur. On affecte une valeur avec le signe égal : age = 20. Chaque valeur a un type de données. Un entier est un nombre sans décimales, un float a des décimales, une chaîne est du texte entre guillemets et un booléen est soit True soit False. La fonction print() affiche un résultat à l'écran. Python est sensible à la casse et utilise l'indentation pour organiser le code. Les commentaires commencent par le symbole # et expliquent le code aux humains.",
    },
    da: `Variable: « sandouq » 3andou smiya w fih qima. « age = 20 » = « 7ett 20 f sandouq smito age ». Machi barawat l-mosawat f r-riyadiyat: « = » f Python = « assignation ».
String: ay nass bin guillemets: "salam". 20 ≠ "20": l-awwal raqm, t-tani nass.
Indentation: l-fragh f lawwal dial s-satr (4 espaces) kay-3ni l-code dakhil bloc. Ila nsiti-h, Python kay3ti IndentationError.`,
    r: {
      t: "Why Python is popular in AI",
      en: "Python was created by Guido van Rossum and first released in 1991. Its code looks almost like English, so beginners can read it easily. For example, print('Hello') shows a message. Python is also free and has thousands of libraries for data science and artificial intelligence. Because of this, researchers can test new ideas in a few lines of code. Companies also use Python to build real products. If you are new to programming, Python is a good first language, but you need to practice every day.",
      fr: "Python a été créé par Guido van Rossum et publié pour la première fois en 1991. Son code ressemble presque à de l'anglais, donc les débutants peuvent le lire facilement. Par exemple, print('Hello') affiche un message. Python est aussi gratuit et possède des milliers de bibliothèques pour la science des données et l'intelligence artificielle. Pour cette raison, les chercheurs peuvent tester de nouvelles idées en quelques lignes de code. Les entreprises utilisent aussi Python pour construire de vrais produits. Si vous débutez en programmation, Python est un bon premier langage, mais il faut pratiquer chaque jour.",
    },
    s: "Lisez ce code à voix haute en anglais : « x equals five. y equals x plus three. Print y. » Puis expliquez ce qu'il affiche : « The program prints eight. »",
    p: { tip: "« Integer » : IN-tuh-jer (le « g » se prononce « j »). « Boolean » : BOO-lee-un. « Syntax » : accent sur la 1re syllabe, SIN-taks. Le « = » se lit « equals ».", words: "integer,boolean,syntax,variable,interpreter,indentation" },
    q: [
      ["What does x = 5 do?", ["Compares x and 5", "Assigns the value 5 to x", "Prints 5", "Deletes x"], 1, "En Python, = est l'affectation ; la comparaison s'écrit ==."],
      ["Which value is a string?", ["42", "3.14", "\"hello\"", "True"], 2, "Une chaîne est entourée de guillemets."],
      ["What is the data type of 3.14?", ["integer", "float", "string", "boolean"], 1, "Un nombre à virgule est un float."],
    ],
    rq: [
      ["Who created Python?", ["Guido van Rossum", "Linus Torvalds", "Alan Turing"], 0, "« created by Guido van Rossum »."],
      ["Why can beginners read Python easily?", ["It looks almost like English", "It has no libraries", "It is very old"], 0, "« Its code looks almost like English »."],
    ],
    f: ["Print(\"Hello\") don't work.", "Print(\"Hello\") doesn't work. (In Python, write print in lowercase.)", "Avec « it/he/she », on utilise « doesn't ». Et print s'écrit en minuscules."],
  },
  {
    id: "3-2",
    t: "Control Flow: Conditions and Loops",
    fr: "Structures de contrôle : conditions et boucles",
    cat: "Python",
    goal: "Expliquer en anglais if/else, for et while, et lire une boucle à voix haute.",
    w: `condition|condition|kun-DISH-n
if statement|instruction if (si)|if STAYT-munt
else|sinon|els
loop|boucle|loop
for loop|boucle for|for loop
while loop|boucle while|wile loop
iteration|itération|ih-tuh-RAY-shn
to iterate|itérer, parcourir|too IT-uh-rayt
range|plage, intervalle|raynj
to break|interrompre (la boucle)|too brayk
to continue|passer à l'itération suivante|too kun-TIN-yoo
true / false|vrai / faux|troo / fawls
equal to|égal à|EE-kwul too
not equal to|différent de|nat EE-kwul too
greater than|supérieur à|GRAY-ter than
less than|inférieur à|les than
logical operator|opérateur logique|LAH-juh-kl AH-puh-ray-ter
nested|imbriqué|NES-tid
block|bloc de code|blahk
counter|compteur|KOWN-ter
infinite loop|boucle infinie|IN-fuh-nit loop
to repeat|répéter|too rih-PEET
to skip|sauter, ignorer|too skip
to check|vérifier|too chek
to stop|arrêter|too stahp`,
    x: `If the number is greater than zero, print positive.|Si le nombre est supérieur à zéro, affiche positif.
Otherwise, print negative.|Sinon, affiche négatif.
The loop repeats ten times.|La boucle se répète dix fois.
Use a for loop to iterate over the list.|Utilise une boucle for pour parcourir la liste.
The while loop stops when the counter reaches five.|La boucle while s'arrête quand le compteur atteint cinq.
You created an infinite loop.|Tu as créé une boucle infinie.
Use break to leave the loop.|Utilise break pour quitter la boucle.
Skip the empty values.|Ignore les valeurs vides.
Is x equal to y?|x est-il égal à y ?
Check both conditions with and.|Vérifie les deux conditions avec and.`,
    d: [
      ["Explaining an if statement", `Teacher: Read this code aloud. || Lisez ce code à voix haute.
Student: If age is greater than or equal to eighteen, print adult. || Si age est supérieur ou égal à dix-huit, afficher adult.
Student: Else, print minor. || Sinon, afficher minor.
Teacher: Perfect. What happens if age is seventeen? || Parfait. Que se passe-t-il si age vaut dix-sept ?`],
      ["Debugging a loop", `Omar: My program never stops! || Mon programme ne s'arrête jamais !
Sara: Show me the while loop. You never change the counter. || Montre-moi la boucle while. Tu ne modifies jamais le compteur.
Omar: Oh! It's an infinite loop. || Oh ! C'est une boucle infinie.
Sara: Add one to the counter at each iteration. || Ajoute un au compteur à chaque itération.`],
    ],
    c: {
      en: "Programs make decisions with conditions. An if statement runs a block of code only when a condition is true. You can add elif for another condition and else for all other cases. Loops repeat code. A for loop iterates over a sequence, for example for i in range(5). A while loop repeats as long as a condition is true, so you must change something inside the loop, otherwise it becomes an infinite loop. The keyword break stops the loop immediately, and continue skips to the next iteration. Logical operators and, or and not combine conditions.",
      fr: "Les programmes prennent des décisions avec des conditions. Une instruction if exécute un bloc de code seulement quand une condition est vraie. On peut ajouter elif pour une autre condition et else pour tous les autres cas. Les boucles répètent du code. Une boucle for parcourt une séquence, par exemple for i in range(5). Une boucle while se répète tant qu'une condition est vraie : il faut donc changer quelque chose dans la boucle, sinon elle devient infinie. Le mot-clé break arrête immédiatement la boucle et continue passe à l'itération suivante. Les opérateurs logiques and, or et not combinent des conditions.",
    },
    da: `== vs =: « = » kat7ett qima, « == » kat9arn (wach mtsawyin?). « if x == 5 » machi « if x = 5 ».
range(5): kay3ti 0,1,2,3,4 — machi 1 l 5! Python kay-bda mn zero.
Elif = « else if » = « w ila la, w ila »: kayt9ddm men l-ordre. Awwal condition s-sa7i7a hiya li katt-nfedh.`,
    r: {
      t: "A loop that counts",
      en: "Imagine you want to print the numbers from one to three. Without a loop, you must write three lines. With a for loop, you write only two: for number in range(1, 4), then print(number) inside the block. The computer repeats the second line three times. Note that range(1, 4) stops before four. Loops are very important in AI, because a model learns by repeating the same calculation thousands of times on different examples. Each complete pass over the data is often called an epoch.",
      fr: "Imaginez que vous voulez afficher les nombres de un à trois. Sans boucle, il faut écrire trois lignes. Avec une boucle for, on n'en écrit que deux : for number in range(1, 4), puis print(number) dans le bloc. L'ordinateur répète la deuxième ligne trois fois. Notez que range(1, 4) s'arrête avant quatre. Les boucles sont très importantes en IA, car un modèle apprend en répétant le même calcul des milliers de fois sur différents exemples. Chaque passage complet sur les données s'appelle souvent une époque (epoch).",
    },
    s: "Lisez à voix haute : « for i in range three, print i » et expliquez : « The loop repeats three times and prints zero, one, two. » Puis expliquez un if/else de votre choix.",
    p: { tip: "« Loop » : le « oo » est long (comme « soupe »). « Iteration » : ih-tuh-RAY-shn, accent sur « RAY ». « Break » rime avec « take ». « Else » : els (le « e » est court).", words: "iteration,infinite,counter,condition,range,logical" },
    q: [
      ["How many times does for i in range(5) repeat?", ["4", "5", "6", "Infinite"], 1, "range(5) donne 0, 1, 2, 3, 4 : cinq itérations."],
      ["Which keyword stops a loop immediately?", ["continue", "skip", "break", "stop"], 2, "break quitte la boucle ; continue passe à l'itération suivante."],
      ["Which operator checks equality?", ["=", "==", "!=", ":="], 1, "== compare ; = affecte."],
    ],
    rq: [
      ["Why does range(1, 4) not print 4?", ["It stops before four", "It is a bug", "Four is forbidden"], 0, "« range(1, 4) stops before four »."],
      ["What is an epoch?", ["A complete pass over the data", "A type of error", "A Python library"], 0, "« Each complete pass over the data … epoch »."],
    ],
    f: ["If x = 5, print yes.", "If x == 5, print yes.", "Pour comparer, on utilise « == » ; « = » sert à affecter une valeur."],
  },
];
