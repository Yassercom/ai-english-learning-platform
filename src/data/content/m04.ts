import type { RawLesson } from "../types";

export const m04: RawLesson[] = [
  {
    id: "4-1",
    t: "Numbers, Algebra and Functions",
    fr: "Nombres, algèbre et fonctions",
    cat: "Mathematics",
    goal: "Lire et dire des formules simples en anglais et décrire une fonction.",
    w: `real number|nombre réel|reel NUM-ber
fraction|fraction|FRAK-shn
decimal|décimal|DES-uh-ml
exponent|exposant|EK-spoh-nunt
square root|racine carrée|skwair root
equation|équation|ih-KWAY-zhn
unknown|inconnue|un-NOHN
to solve|résoudre|too sahlv
formula|formule|FOR-myuh-luh
coefficient|coefficient|koh-uh-FISH-nt
constant|constante|KAHN-stunt
linear function|fonction linéaire|LIN-ee-er FUNK-shn
slope|pente|slohp
intercept|ordonnée à l'origine|IN-ter-sept
polynomial|polynôme|pah-lee-NOH-mee-ul
logarithm|logarithme|LAW-guh-rih-dhm
inequality|inéquation|in-ih-KWAH-luh-tee
to substitute|remplacer, substituer|too SUB-stih-toot
to simplify|simplifier|too SIM-pluh-fie
to evaluate|évaluer, calculer|too ih-VAL-yoo-ayt
sum|somme|sum
product|produit|PRAH-dukt
ratio|rapport, ratio|RAY-shoh
absolute value|valeur absolue|AB-suh-loot VAL-yoo
variable|variable|VER-ee-uh-bl`,
    x: `Solve the equation for x.|Résous l'équation pour x.
x squared plus two x equals eight.|x au carré plus deux x égale huit.
Substitute x with three.|Remplace x par trois.
The slope of the line is two.|La pente de la droite est deux.
Simplify the fraction.|Simplifie la fraction.
The function grows exponentially.|La fonction croît de façon exponentielle.
Let f of x equal two x plus one.|Soit f de x égal à deux x plus un.
What is the value of f of three?|Quelle est la valeur de f de trois ?
The sum of these numbers is ten.|La somme de ces nombres est dix.
It is a ratio of three to one.|C'est un rapport de trois pour un.`,
    d: [
      ["Reading a formula aloud", `Teacher: How do you say y = 2x + 1? || Comment dit-on y = 2x + 1 ?
Student: y equals two x plus one. || y égale deux x plus un.
Teacher: What is the slope? || Quelle est la pente ?
Student: Two. And the intercept is one. || Deux. Et l'ordonnée à l'origine est un.`],
      ["Solving an equation", `Omar: Let's solve two x plus four equals ten. || Résolvons deux x plus quatre égale dix.
Sara: First, subtract four from both sides. || D'abord, soustrais quatre des deux côtés.
Omar: So two x equals six. Then divide by two. || Donc deux x égale six. Puis divise par deux.
Sara: x equals three. Substitute to check. || x égale trois. Remplace pour vérifier.`],
    ],
    c: {
      en: "Algebra uses letters to represent unknown numbers. An equation says that two expressions are equal, and to solve it means to find the value of the unknown. A function takes an input and gives one output; we write f(x). A linear function has the form y = ax + b, where a is the slope and b is the intercept. An exponent shows repeated multiplication: x squared means x times x. The inverse of an exponential is the logarithm. In AI, functions describe models: the model receives input x and produces a prediction f(x).",
      fr: "L'algèbre utilise des lettres pour représenter des nombres inconnus. Une équation dit que deux expressions sont égales ; la résoudre signifie trouver la valeur de l'inconnue. Une fonction prend une entrée et donne une seule sortie ; on écrit f(x). Une fonction linéaire a la forme y = ax + b, où a est la pente et b l'ordonnée à l'origine. Un exposant indique une multiplication répétée : x squared signifie x fois x. L'inverse d'une exponentielle est le logarithme. En IA, les fonctions décrivent les modèles : le modèle reçoit une entrée x et produit une prédiction f(x).",
    },
    da: `Comment lire: « x² » = « x squared », « x³ » = « x cubed », « √x » = « the square root of x ». Kteb-hom w 9ra-hom b s-sout.
Function: bhal ma9ina: kat-dkhel 7aja (x), kat-khrej 7aja (f(x)). L-modèle d l-IA = fonction kbira.
Slope: mo3amil l-mayl (lli kat-bin 9ed-ash l-khat kaytla3). Intercept: fin l-khat kay9ta3 l-mehwar y.`,
    r: {
      t: "Why functions matter in AI",
      en: "A machine learning model is a mathematical function. For a simple model that predicts house prices, the input x is the size of the house and the output y is the price. A linear model assumes that y equals a times x plus b. During training, the computer tries many values of a and b until the predictions are close to the real prices. The numbers a and b are called parameters. Large models, such as language models, have billions of parameters, but the idea is the same: a function that learns from examples.",
      fr: "Un modèle d'apprentissage automatique est une fonction mathématique. Pour un modèle simple qui prédit des prix de maisons, l'entrée x est la taille de la maison et la sortie y est le prix. Un modèle linéaire suppose que y égale a fois x plus b. Pendant l'entraînement, l'ordinateur essaie de nombreuses valeurs de a et b jusqu'à ce que les prédictions soient proches des vrais prix. Les nombres a et b s'appellent des paramètres. Les grands modèles, comme les modèles de langage, ont des milliards de paramètres, mais l'idée est la même : une fonction qui apprend à partir d'exemples.",
    },
    s: "Lisez à voix haute : « y equals three x minus two », « x squared plus y squared equals one », « the square root of sixteen is four », « f of x equals x cubed ».",
    p: { tip: "« Equation » : ih-KWAY-zhn (« ti » se prononce « zh »). « Exponent » : accent sur « EK ». « Logarithm » : LAW-guh-rih-dhm. « Coefficient » : 4 syllabes, accent sur « FISH ».", words: "equation,exponent,logarithm,coefficient,polynomial,intercept" },
    q: [
      ["How do you read x²?", ["x two", "x squared", "x double", "x power one"], 1, "x² = x squared ; x³ = x cubed."],
      ["In y = 4x + 7, the slope is…", ["7", "4", "11", "x"], 1, "Dans y = ax + b, a est la pente."],
      ["To « solve an equation » means to…", ["draw it", "find the value of the unknown", "delete the numbers", "round the result"], 1, "Résoudre = trouver l'inconnue."],
    ],
    rq: [
      ["In the house price model, what is the input?", ["The size of the house", "The price", "The parameters"], 0, "« the input x is the size of the house »."],
      ["What are a and b called?", ["Parameters", "Outputs", "Errors"], 0, "« The numbers a and b are called parameters »."],
    ],
    f: ["The sum of three and four are seven.", "The sum of three and four is seven.", "Le sujet est « the sum » (singulier) → « is »."],
  },
  {
    id: "4-2",
    t: "Linear Algebra: Vectors and Matrices",
    fr: "Algèbre linéaire : vecteurs et matrices",
    cat: "Mathematics",
    goal: "Décrire vecteurs, matrices et opérations de base, qui sont le langage de l'apprentissage profond.",
    w: `vector|vecteur|VEK-ter
matrix (plural: matrices)|matrice|MAY-triks (MAY-truh-seez)
scalar|scalaire|SKAY-ler
tensor|tenseur|TEN-ser
dimension|dimension|duh-MEN-shn
shape|forme (dimensions)|shayp
row|ligne|roh
column|colonne|KAH-lum
dot product|produit scalaire|daht PRAH-dukt
matrix multiplication|produit matriciel|MAY-triks mul-tuh-plih-KAY-shn
transpose|transposée|TRANS-pohz
identity matrix|matrice identité|eye-DEN-tuh-tee MAY-triks
inverse|inverse|IN-vers
determinant|déterminant|dih-TER-muh-nunt
eigenvalue|valeur propre|EYE-gun-val-yoo
eigenvector|vecteur propre|EYE-gun-vek-ter
linear combination|combinaison linéaire|LIN-ee-er kahm-buh-NAY-shn
norm|norme|norm
orthogonal|orthogonal|or-THAH-guh-nl
element-wise|terme à terme|EL-uh-munt wise
diagonal|diagonale|die-AG-uh-nl
square matrix|matrice carrée|skwair MAY-triks
rank|rang|rank
to multiply|multiplier|too MUL-tuh-plie
to add|additionner|too ad`,
    x: `A vector is a list of numbers.|Un vecteur est une liste de nombres.
This matrix has three rows and two columns.|Cette matrice a trois lignes et deux colonnes.
The shape of the tensor is three by four.|La forme du tenseur est trois par quatre.
Take the dot product of the two vectors.|Calcule le produit scalaire des deux vecteurs.
Multiply the matrix by the vector.|Multiplie la matrice par le vecteur.
The two vectors are orthogonal.|Les deux vecteurs sont orthogonaux.
The shapes must match.|Les formes doivent correspondre.
Transpose the matrix.|Transpose la matrice.
Apply the function element-wise.|Applique la fonction terme à terme.
Not every matrix has an inverse.|Toutes les matrices n'ont pas d'inverse.`,
    d: [
      ["Matrix shapes", `Student: I get an error: the shapes do not match. || J'ai une erreur : les formes ne correspondent pas.
Teacher: What are the shapes? || Quelles sont les formes ?
Student: A is three by two and B is three by two. || A est trois par deux et B est trois par deux.
Teacher: To multiply, the columns of A must equal the rows of B. Transpose B. || Pour multiplier, les colonnes de A doivent égaler les lignes de B. Transpose B.`],
      ["Explaining the dot product", `Omar: What is the dot product? || Qu'est-ce que le produit scalaire ?
Sara: Multiply the matching elements, then add everything. || Multiplie les éléments correspondants, puis additionne tout.
Omar: So one, two, three dot four, five, six equals thirty-two. || Donc un, deux, trois scalaire quatre, cinq, six égale trente-deux.
Sara: Exactly. One times four, plus two times five, plus three times six. || Exactement. Un fois quatre, plus deux fois cinq, plus trois fois six.`],
    ],
    c: {
      en: "Linear algebra is the language of data in AI. A scalar is one number, a vector is a list of numbers, a matrix is a table of numbers with rows and columns, and a tensor is a generalization with more dimensions. The shape tells you the size of each dimension. The dot product multiplies matching elements of two vectors and adds the results. Matrix multiplication is repeated dot products, and it is the main operation inside a neural network. To multiply two matrices, the number of columns of the first must equal the number of rows of the second.",
      fr: "L'algèbre linéaire est le langage des données en IA. Un scalaire est un nombre, un vecteur est une liste de nombres, une matrice est un tableau de nombres avec des lignes et des colonnes et un tenseur est une généralisation avec plus de dimensions. La forme (shape) indique la taille de chaque dimension. Le produit scalaire multiplie les éléments correspondants de deux vecteurs et additionne les résultats. Le produit matriciel est une répétition de produits scalaires et c'est l'opération principale dans un réseau de neurones. Pour multiplier deux matrices, le nombre de colonnes de la première doit égaler le nombre de lignes de la seconde.",
    },
    da: `Vector / matrix / tensor: vector = lista (1 dimension), matrix = jdwal (2 dimensions), tensor = jdwal b 3 dimensions wla aktar. Image mlowna = tensor.
« Shape »: « (3, 2) » = 3 lignes w 2 colonnes. Kat-9ra: « three by two ». Hadi mouchkil lkbir f l-code (shape mismatch).
Dot product: darb l-3anaser l-mtqabila w jam3 n-natija. Natija = raqm wa7ed (scalar).`,
    r: {
      t: "Everything is a tensor",
      en: "In deep learning, all data is converted into numbers. A sentence becomes a list of numbers, a black and white image becomes a matrix of pixel values, and a color image becomes a tensor with three channels: red, green and blue. A neural network then multiplies these tensors by matrices of parameters. Modern graphics processors are designed to do these multiplications very fast. This is why linear algebra is so important: if you understand shapes and matrix multiplication, you can understand how information moves through a network.",
      fr: "En apprentissage profond, toutes les données sont converties en nombres. Une phrase devient une liste de nombres, une image en noir et blanc devient une matrice de valeurs de pixels et une image en couleur devient un tenseur avec trois canaux : rouge, vert et bleu. Un réseau de neurones multiplie ensuite ces tenseurs par des matrices de paramètres. Les processeurs graphiques modernes sont conçus pour faire ces multiplications très rapidement. C'est pourquoi l'algèbre linéaire est si importante : si vous comprenez les formes et le produit matriciel, vous pouvez comprendre comment l'information circule dans un réseau.",
    },
    s: "Décrivez à voix haute : « This matrix has two rows and three columns. Its shape is two by three. The transpose has shape three by two. » Puis lisez « A times B equals C ».",
    p: { tip: "« Matrix » : MAY-triks (comme « day »). Pluriel « matrices » : MAY-truh-seez. « Eigenvalue » vient de l'allemand : EYE-gun-val-yoo. « Vector » : VEK-ter, pas « vec-tor » à la française.", words: "matrix,vector,tensor,dimension,determinant,orthogonal" },
    q: [
      ["A is 3×2 and B is 2×4. What is the shape of A·B?", ["3×4", "2×2", "4×3", "Impossible"], 0, "Colonnes de A (2) = lignes de B (2) ; résultat = lignes de A × colonnes de B = 3×4."],
      ["The dot product of two vectors gives…", ["a matrix", "a vector", "a scalar", "a tensor"], 2, "Le produit scalaire donne un seul nombre."],
      ["A colour image is usually a tensor with…", ["one channel", "three channels", "no channel", "ten channels"], 1, "Rouge, vert, bleu : trois canaux."],
    ],
    rq: [
      ["What is a black and white image in the text?", ["A matrix of pixel values", "A sentence", "A scalar"], 0, "« a matrix of pixel values »."],
      ["Why are GPUs mentioned?", ["They multiply matrices fast", "They store words", "They print images"], 0, "« designed to do these multiplications very fast »."],
    ],
    f: ["The matrix have three row.", "The matrix has three rows.", "« has » avec un sujet singulier, et pluriel (rows) après « three »."],
  },
  {
    id: "4-3",
    t: "Calculus: Derivatives and Gradients",
    fr: "Analyse : dérivées et gradients",
    cat: "Mathematics",
    goal: "Expliquer en anglais ce qu'est une dérivée et un gradient, et pourquoi ils servent à entraîner un modèle.",
    w: `derivative|dérivée|dih-RIV-uh-tiv
to differentiate|dériver|too dif-uh-REN-shee-ayt
rate of change|taux de variation|rayt uv chaynj
limit|limite|LIM-it
integral|intégrale|IN-tuh-grul
partial derivative|dérivée partielle|PAR-shul dih-RIV-uh-tiv
gradient|gradient|GRAY-dee-unt
chain rule|règle de dérivation en chaîne|chayn rool
minimum|minimum|MIN-uh-mum
maximum|maximum|MAK-suh-mum
local minimum|minimum local|LOH-kl MIN-uh-mum
global minimum|minimum global|GLOH-bl MIN-uh-mum
tangent line|tangente|TAN-junt line
curve|courbe|kerv
continuous|continu|kun-TIN-yoo-us
differentiable|dérivable|dif-uh-REN-shuh-bl
second derivative|dérivée seconde|SEK-und dih-RIV-uh-tiv
area under the curve|aire sous la courbe|AIR-ee-uh UN-der thuh kerv
to approach|s'approcher de|too uh-PROHCH
to increase|augmenter|too in-KREES
to decrease|diminuer|too dih-KREES
steep|raide, abrupt|steep
flat|plat|flat
point|point|poynt
direction|direction|duh-REK-shn`,
    x: `The derivative measures the rate of change.|La dérivée mesure le taux de variation.
Differentiate the function with respect to x.|Dérive la fonction par rapport à x.
The slope of the tangent is zero at the minimum.|La pente de la tangente est nulle au minimum.
The gradient points in the direction of steepest increase.|Le gradient pointe dans la direction de plus forte augmentation.
Move in the opposite direction.|Déplace-toi dans la direction opposée.
The function is not differentiable at this point.|La fonction n'est pas dérivable en ce point.
Apply the chain rule.|Applique la règle de dérivation en chaîne.
The curve is very steep here.|La courbe est très raide ici.
As x approaches zero, the value approaches one.|Quand x tend vers zéro, la valeur tend vers un.
The integral gives the area under the curve.|L'intégrale donne l'aire sous la courbe.`,
    d: [
      ["What is a derivative?", `Student: What does the derivative tell us? || Qu'est-ce que la dérivée nous dit ?
Teacher: It tells us how fast the function changes at a point. || Elle nous dit à quelle vitesse la fonction change en un point.
Student: So a large derivative means a steep curve? || Donc une grande dérivée signifie une courbe raide ?
Teacher: Yes. And zero means the curve is flat there. || Oui. Et zéro signifie que la courbe est plate à cet endroit.`],
      ["Going downhill", `Omar: Why do we use the gradient in training? || Pourquoi utilise-t-on le gradient pendant l'entraînement ?
Sara: It shows the direction in which the error increases fastest. || Il montre la direction dans laquelle l'erreur augmente le plus vite.
Omar: So we move in the opposite direction? || Donc on va dans la direction opposée ?
Sara: Exactly. Step by step, we go downhill. || Exactement. Pas à pas, on descend la colline.`],
    ],
    c: {
      en: "Calculus studies change. The derivative of a function at a point is the slope of its tangent line, which shows how fast the output changes when the input changes. If a function has several variables, we compute a partial derivative for each variable, and together they form the gradient. The gradient points in the direction of the steepest increase. At a minimum or a maximum, the derivative is zero. The chain rule tells us how to differentiate a function inside another function, and it is the mathematical basis of backpropagation in neural networks.",
      fr: "L'analyse étudie le changement. La dérivée d'une fonction en un point est la pente de sa tangente, qui montre à quelle vitesse la sortie change quand l'entrée change. Si une fonction a plusieurs variables, on calcule une dérivée partielle pour chaque variable, et ensemble elles forment le gradient. Le gradient pointe dans la direction de la plus forte augmentation. À un minimum ou un maximum, la dérivée est nulle. La règle de dérivation en chaîne indique comment dériver une fonction à l'intérieur d'une autre fonction, et c'est la base mathématique de la rétropropagation dans les réseaux de neurones.",
    },
    da: `Derivative: sor3at t-tghyir. Ila l-courbe wa9fa (steep), l-derivative kbira. Ila 7a9ida (flat), l-derivative = 0.
Gradient: sahm kay-chir l-jiha li f-ha l-khata2 (error) kay-zid b sor3a. Bach n-nqes l-khata2, kan-mchiw f jiha l-3akssiya.
Chain rule: ila 3ndek fonction f dakhil fonction, kat-darbo l-derivées. Hadi hiya asas backpropagation.`,
    r: {
      t: "How a model learns on a hill",
      en: "Imagine that you are standing on a foggy mountain and you want to reach the valley. You cannot see far, but you can feel the slope under your feet. You take one step in the direction where the ground goes down the most. Then you feel the slope again and take another step. This is the idea behind training a model. The mountain is the error, the slope is the gradient, and each step improves the parameters a little. The process stops when the ground is flat, which means the derivative is close to zero.",
      fr: "Imaginez que vous êtes sur une montagne dans le brouillard et que vous voulez atteindre la vallée. Vous ne voyez pas loin, mais vous sentez la pente sous vos pieds. Vous faites un pas dans la direction où le sol descend le plus. Puis vous sentez de nouveau la pente et faites un autre pas. C'est l'idée de l'entraînement d'un modèle. La montagne est l'erreur, la pente est le gradient et chaque pas améliore un peu les paramètres. Le processus s'arrête quand le sol est plat, ce qui veut dire que la dérivée est proche de zéro.",
    },
    s: "Expliquez à voix haute l'analogie de la montagne dans le brouillard avec vos propres mots : « Imagine you are on a mountain. The gradient shows … We go in the opposite direction … »",
    p: { tip: "« Derivative » : dih-RIV-uh-tiv, accent sur « RIV ». « Differentiate » : 5 syllabes. « Gradient » : GRAY-dee-unt. « Integral » : accent sur la 1re syllabe en nom (IN-tuh-grul).", words: "derivative,gradient,differentiate,minimum,tangent,integral" },
    q: [
      ["At a minimum, the derivative is…", ["very large", "negative", "zero", "undefined"], 2, "La pente de la tangente est nulle au minimum."],
      ["The gradient points toward the…", ["steepest increase", "steepest decrease", "minimum", "origin"], 0, "Le gradient pointe vers la plus forte augmentation ; on va dans le sens opposé pour descendre."],
      ["The chain rule is the basis of…", ["backpropagation", "data cleaning", "sorting", "encryption"], 0, "La rétropropagation applique la règle en chaîne."],
    ],
    rq: [
      ["In the analogy, what is the mountain?", ["The error", "The data", "The computer"], 0, "« The mountain is the error »."],
      ["When does the process stop?", ["When the ground is flat", "When it rains", "After one step"], 0, "« when the ground is flat »."],
    ],
    f: ["The derivative are zero at the minimum.", "The derivative is zero at the minimum.", "« derivative » est singulier → « is »."],
  },
];
