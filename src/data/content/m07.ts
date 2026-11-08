import type { RawLesson } from "../types";

export const m07: RawLesson[] = [
  {
    id: "7-1",
    t: "Neural Network Basics",
    fr: "Bases des réseaux de neurones",
    cat: "DL",
    goal: "Décrire l'architecture d'un réseau de neurones : couches, poids, biais, fonctions d'activation.",
    w: `neural network|réseau de neurones|NOOR-ul NET-werk
neuron / unit|neurone / unité|NOOR-on / YOO-nit
layer|couche|LAY-er
input layer|couche d'entrée|IN-poot LAY-er
hidden layer|couche cachée|HID-n LAY-er
output layer|couche de sortie|OWT-poot LAY-er
weight|poids|wayt
bias|biais (paramètre)|BIE-us
activation function|fonction d'activation|ak-tuh-VAY-shn FUNK-shn
ReLU|ReLU (unité linéaire rectifiée)|REH-loo
softmax|softmax|SAWFT-maks
forward pass|passe avant|FOR-werd pas
deep network|réseau profond|deep NET-werk
fully connected layer|couche entièrement connectée|FUL-ee kuh-NEK-tid LAY-er
feedforward|à propagation avant|FEED-for-werd
non-linearity|non-linéarité|nahn-lin-ee-AIR-uh-tee
perceptron|perceptron|per-SEP-tron
architecture|architecture|AR-kuh-tek-cher
depth|profondeur|depth
width|largeur|width
logits|logits (sorties brutes)|LOH-jits
to propagate|propager|too PRAH-puh-gayt
to activate|activer|too AK-tuh-vayt
connection|connexion|kuh-NEK-shn
weighted sum|somme pondérée|WAY-tid sum`,
    x: `The network has three hidden layers.|Le réseau a trois couches cachées.
Each neuron computes a weighted sum of its inputs.|Chaque neurone calcule une somme pondérée de ses entrées.
Then it applies an activation function.|Puis il applique une fonction d'activation.
We use ReLU in the hidden layers.|Nous utilisons ReLU dans les couches cachées.
The softmax turns the outputs into probabilities.|Le softmax transforme les sorties en probabilités.
The weights are the learnable parameters.|Les poids sont les paramètres apprenables.
How many parameters does the model have?|Combien de paramètres le modèle a-t-il ?
The input flows through the layers.|L'entrée traverse les couches.
Without non-linearity, the network is just a linear model.|Sans non-linéarité, le réseau n'est qu'un modèle linéaire.
The network is deeper than the previous one.|Le réseau est plus profond que le précédent.`,
    d: [
      ["What does a neuron do?", `Student: What happens inside a neuron? || Que se passe-t-il dans un neurone ?
Teacher: It multiplies each input by a weight and adds a bias. || Il multiplie chaque entrée par un poids et ajoute un biais.
Student: And then? || Et ensuite ?
Teacher: It applies an activation function, such as ReLU. || Il applique une fonction d'activation, comme ReLU.`],
      ["Describing an architecture", `Omar: My network has an input layer of seven hundred eighty-four units. || Mon réseau a une couche d'entrée de sept cent quatre-vingt-quatre unités.
Sara: How many hidden layers? || Combien de couches cachées ?
Omar: Two, with one hundred twenty-eight neurons each. The output layer has ten units with softmax. || Deux, avec cent vingt-huit neurones chacune. La couche de sortie a dix unités avec softmax.
Sara: That sounds like a digit classifier. || On dirait un classifieur de chiffres.`],
    ],
    c: {
      en: "A neural network is a model made of layers of simple units called neurons. The input layer receives the data, one or more hidden layers transform it, and the output layer gives the prediction. Each neuron computes a weighted sum of its inputs, adds a bias and applies an activation function. Without a non-linear activation function, such as ReLU, a deep network would behave like a single linear model. For classification, the last layer often uses softmax to produce probabilities. The weights and biases are the parameters that the network learns during training. A deep network has many hidden layers.",
      fr: "Un réseau de neurones est un modèle constitué de couches d'unités simples appelées neurones. La couche d'entrée reçoit les données, une ou plusieurs couches cachées les transforment et la couche de sortie donne la prédiction. Chaque neurone calcule une somme pondérée de ses entrées, ajoute un biais et applique une fonction d'activation. Sans fonction d'activation non linéaire, comme ReLU, un réseau profond se comporterait comme un seul modèle linéaire. Pour la classification, la dernière couche utilise souvent softmax pour produire des probabilités. Les poids et les biais sont les paramètres que le réseau apprend pendant l'entraînement. Un réseau profond a de nombreuses couches cachées.",
    },
    da: `Weight vs bias: weight = ahammiyat kol input (chhal kay-2ather). Bias = qima tabita katt-zad. Zouj kay-t3almo.
Activation function: bla-ha, ay 3adad d layers = layer wa7da (linear). ReLU = « ila negative, 7ett 0; ila positive, khelli-ha ».
Softmax: kat7awwel l-arqam (logits) l-ihtimalat li jam3ha 1. L-akbar ihtimal = jawab l-modèle.`,
    r: {
      t: "From the perceptron to deep learning",
      en: "The first artificial neuron, the perceptron, was proposed by Frank Rosenblatt in 1958. It could learn to separate simple patterns. However, in 1969, a book by Marvin Minsky and Seymour Papert showed that one perceptron cannot solve some simple problems, and interest in neural networks fell for many years. Later, researchers connected many neurons in several layers and found a way to train them. With more data and faster hardware, these deep networks began to win international competitions in the 2010s. Today they power translation, speech recognition and image analysis.",
      fr: "Le premier neurone artificiel, le perceptron, a été proposé par Frank Rosenblatt en 1958. Il pouvait apprendre à séparer des motifs simples. Cependant, en 1969, un livre de Marvin Minsky et Seymour Papert a montré qu'un seul perceptron ne peut pas résoudre certains problèmes simples, et l'intérêt pour les réseaux de neurones a chuté pendant de nombreuses années. Plus tard, des chercheurs ont connecté de nombreux neurones en plusieurs couches et ont trouvé comment les entraîner. Avec plus de données et un matériel plus rapide, ces réseaux profonds ont commencé à gagner des compétitions internationales dans les années 2010. Aujourd'hui, ils alimentent la traduction, la reconnaissance vocale et l'analyse d'images.",
    },
    s: "Dessinez un petit réseau (2 entrées, 3 neurones cachés, 1 sortie) et décrivez-le à voix haute : « The input layer has … The hidden layer has … Each neuron … The output layer … »",
    p: { tip: "« Neural » : NOOR-ul (en américain, « neu » = « noo »). « Bias » : BIE-us. « Weight » rime avec « late ». « Softmax » : SAWFT-maks. « Perceptron » : per-SEP-tron.", words: "neural,weight,activation,hidden,architecture,perceptron" },
    q: [
      ["A neuron computes…", ["a weighted sum plus bias, then an activation", "only a sum", "a database query", "an image"], 0, "z = Σ w·x + b, puis a = f(z)."],
      ["Why do we need non-linear activation functions?", ["To make the network linear", "To let the network learn complex patterns", "To reduce the data", "To print results"], 1, "Sans non-linéarité, plusieurs couches équivalent à une seule."],
      ["Softmax is typically used…", ["in hidden layers only", "in the output layer for classification", "to clean data", "to split data"], 1, "Elle donne une distribution de probabilités."],
    ],
    rq: [
      ["Who proposed the perceptron?", ["Frank Rosenblatt", "Alan Turing", "Guido van Rossum"], 0, "« proposed by Frank Rosenblatt in 1958 »."],
      ["Why did interest fall after 1969?", ["A single perceptron could not solve some simple problems", "Computers were illegal", "Nobody had data"], 0, "Voir le livre de Minsky et Papert."],
    ],
    f: ["The network have three hidden layer.", "The network has three hidden layers.", "Singulier → has ; « three » est suivi d'un pluriel."],
  },
  {
    id: "7-2",
    t: "Training Neural Networks: Backpropagation and Optimizers",
    fr: "Entraînement : rétropropagation et optimiseurs",
    cat: "DL",
    goal: "Expliquer en anglais comment un réseau apprend : perte, rétropropagation, optimiseurs, époques.",
    w: `backpropagation|rétropropagation|bak-prah-puh-GAY-shn
loss|perte|laws
cross-entropy|entropie croisée|kraws-EN-truh-pee
optimizer|optimiseur|AHP-tuh-mie-zer
mini-batch|mini-lot|MIN-ee-bach
epoch|époque (passage complet)|EP-uk
batch size|taille de lot|bach size
momentum|momentum (élan)|moh-MEN-tum
Adam|Adam (optimiseur)|AD-um
vanishing gradient|gradient qui disparaît|VAN-ish-ing GRAY-dee-unt
exploding gradient|gradient qui explose|ik-SPLOH-ding GRAY-dee-unt
gradient clipping|écrêtage du gradient|GRAY-dee-unt KLIP-ing
weight initialization|initialisation des poids|wayt ih-nish-uh-luh-ZAY-shn
to update|mettre à jour|too UP-dayt
iteration|itération|ih-tuh-RAY-shn
loss curve|courbe de perte|laws kerv
to diverge|diverger|too die-VERJ
to backpropagate|rétropropager|too bak-PRAH-puh-gayt
learning rate schedule|planification du taux d'apprentissage|LER-ning rayt SKEJ-ool
plateau|plateau|pla-TOH
to stabilize|se stabiliser|too STAY-buh-lize
random seed|graine aléatoire|RAN-dum seed
step|pas, étape|step
noisy|bruité|NOY-zee
smooth|lisse|smooth`,
    x: `The loss decreases at each epoch.|La perte diminue à chaque époque.
We train for fifty epochs with a batch size of thirty-two.|Nous entraînons pendant cinquante époques avec une taille de lot de trente-deux.
Backpropagation computes the gradient of the loss.|La rétropropagation calcule le gradient de la perte.
The optimizer updates the weights.|L'optimiseur met à jour les poids.
The loss is not decreasing.|La perte ne diminue pas.
The training diverged after ten steps.|L'entraînement a divergé après dix pas.
Lower the learning rate.|Diminue le taux d'apprentissage.
Adam usually works well by default.|Adam fonctionne généralement bien par défaut.
The loss curve is very noisy.|La courbe de perte est très bruitée.
Set a random seed for reproducibility.|Fixe une graine aléatoire pour la reproductibilité.`,
    d: [
      ["A loss that explodes", `Student: My loss became NaN after a few steps. || Ma perte est devenue NaN après quelques pas.
Teacher: The training diverged. What is your learning rate? || L'entraînement a divergé. Quel est ton taux d'apprentissage ?
Student: One. || Un.
Teacher: Way too high. Try zero point zero zero one, and use gradient clipping. || Beaucoup trop élevé. Essaie zéro virgule zéro zéro un, et utilise l'écrêtage du gradient.`],
      ["Explaining backpropagation", `Professor: How does the network learn? || Comment le réseau apprend-il ?
Student: First, a forward pass computes the prediction and the loss. || D'abord, une passe avant calcule la prédiction et la perte.
Student: Then backpropagation computes the gradient for each weight. || Ensuite la rétropropagation calcule le gradient de chaque poids.
Student: Finally, the optimizer updates the weights to reduce the loss. || Enfin l'optimiseur met à jour les poids pour réduire la perte.`],
    ],
    c: {
      en: "Training a neural network is a loop. First, a forward pass computes the prediction for a mini-batch of examples. Second, the loss function, for example cross-entropy, measures the error. Third, backpropagation uses the chain rule to compute the gradient of the loss with respect to every weight, moving backward through the layers. Fourth, an optimizer such as SGD or Adam updates the weights using the gradient and the learning rate. One complete pass over the training data is an epoch. If the gradients become too small, we have a vanishing gradient problem; if they become too large, training can diverge.",
      fr: "Entraîner un réseau de neurones est une boucle. Premièrement, une passe avant calcule la prédiction pour un mini-lot d'exemples. Deuxièmement, la fonction de perte, par exemple l'entropie croisée, mesure l'erreur. Troisièmement, la rétropropagation utilise la règle de la chaîne pour calculer le gradient de la perte par rapport à chaque poids, en remontant à travers les couches. Quatrièmement, un optimiseur comme SGD ou Adam met à jour les poids en utilisant le gradient et le taux d'apprentissage. Un passage complet sur les données d'entraînement est une époque. Si les gradients deviennent trop petits, on a un problème de gradient qui disparaît ; s'ils deviennent trop grands, l'entraînement peut diverger.",
    },
    da: `Epoch vs batch vs iteration: epoch = marra wa7da 3la l-data kamla. Batch = joz2 sghir mn l-data (mital 32 swar). Iteration = tahdith wa7ed l-awzan (b batch wa7ed).
Backpropagation: l-khata2 kay-rjja3 mn l-akhir l-lawwal, w kol weight kay3raf chhal howa mas2oul 3la l-khata2.
NaN loss: l-loss tweldat « machi raqm » = l-training infajar. Ghalaban learning rate kbir bzzaf.`,
    r: {
      t: "The 1986 breakthrough",
      en: "Backpropagation was known in different forms before 1986, but a paper by David Rumelhart, Geoffrey Hinton and Ronald Williams, published in the journal Nature in 1986, showed clearly that it could train neural networks with hidden layers to learn useful internal representations. The idea was powerful but, at that time, computers were slow and datasets were small. Only decades later, with large datasets and GPUs, did deep learning become practical at scale. This story shows that a good idea sometimes needs the right technology to succeed.",
      fr: "La rétropropagation était connue sous différentes formes avant 1986, mais un article de David Rumelhart, Geoffrey Hinton et Ronald Williams, publié dans la revue Nature en 1986, a montré clairement qu'elle pouvait entraîner des réseaux de neurones à couches cachées pour apprendre des représentations internes utiles. L'idée était puissante mais, à cette époque, les ordinateurs étaient lents et les jeux de données petits. Ce n'est que des décennies plus tard, avec de grands jeux de données et des GPU, que l'apprentissage profond est devenu praticable à grande échelle. Cette histoire montre qu'une bonne idée a parfois besoin de la bonne technologie pour réussir.",
    },
    s: "Expliquez à voix haute les 4 étapes d'une itération d'entraînement avec first / second / third / fourth, puis dites ce que vous feriez si la perte devient NaN.",
    p: { tip: "« Backpropagation » : bak-prah-puh-GAY-shn, accent sur « GAY ». « Epoch » : EP-uk (américain). « Optimizer » : AHP-tuh-mie-zer. « Vanishing » : VAN-ish-ing.", words: "backpropagation,epoch,optimizer,momentum,vanishing,diverge" },
    q: [
      ["One epoch is…", ["one update of the weights", "one complete pass over the training data", "one layer", "one neuron"], 1, "Epoch = parcours complet des données."],
      ["What does backpropagation compute?", ["The gradient of the loss for each weight", "The final accuracy", "The data labels", "The batch size"], 0, "Gradients pour mettre à jour les poids."],
      ["If the loss becomes NaN, a likely cause is…", ["a very high learning rate", "a very small dataset", "too many classes", "a wrong title"], 0, "Pas trop grands → divergence."],
    ],
    rq: [
      ["In which journal was the 1986 paper published?", ["Nature", "Science News", "The Times"], 0, "« published in the journal Nature in 1986 »."],
      ["Why did deep learning wait decades?", ["Computers were slow and datasets small", "Nobody liked it", "It was illegal"], 0, "« computers were slow and datasets were small »."],
    ],
    f: ["The loss don't decrease since ten epochs.", "The loss hasn't decreased for ten epochs.", "Present perfect avec « for + durée » ; et « loss » est singulier : hasn't."],
  },
  {
    id: "7-3",
    t: "Regularization and Hyperparameters",
    fr: "Régularisation et hyperparamètres",
    cat: "DL",
    goal: "Présenter les techniques qui évitent le surapprentissage et expliquer comment régler un modèle.",
    w: `dropout|dropout (abandon aléatoire)|DRAHP-owt
weight decay|décroissance des poids|wayt dih-KAY
L2 regularization|régularisation L2|el-TOO reg-yuh-luh-ruh-ZAY-shn
batch normalization|normalisation par lot|bach nor-muh-luh-ZAY-shn
data augmentation|augmentation de données|DAY-tuh awg-men-TAY-shn
hyperparameter search|recherche d'hyperparamètres|hie-per-puh-RAM-uh-ter serch
random search|recherche aléatoire|RAN-dum serch
checkpoint|point de sauvegarde|CHEK-poynt
to freeze|geler|too freez
to fine-tune|affiner|too fine-TOON
pre-trained|pré-entraîné|pree-TRAYND
transfer learning|apprentissage par transfert|TRANS-fer LER-ning
to shuffle|mélanger|too SHUF-l
ablation study|étude d'ablation|ab-LAY-shn STUD-ee
reproducibility|reproductibilité|ree-pruh-doo-suh-BIL-uh-tee
patience|patience (nombre d'époques)|PAY-shns
to prune|élaguer|too proon
to penalize|pénaliser|too PEE-nl-ize
large-scale|à grande échelle|larj-skayl
ablation|ablation|ab-LAY-shn
configuration|configuration|kun-fig-yuh-RAY-shn
default|par défaut|dih-FAWLT
trial|essai|TRIE-ul
budget|budget|BUJ-it
robustness|robustesse|roh-BUST-nis`,
    x: `We use a dropout rate of zero point five.|Nous utilisons un taux de dropout de zéro virgule cinq.
Dropout randomly turns off neurons during training.|Le dropout désactive aléatoirement des neurones pendant l'entraînement.
We apply data augmentation to the images.|Nous appliquons de l'augmentation de données aux images.
Shuffle the data before each epoch.|Mélange les données avant chaque époque.
We fine-tune a pre-trained model.|Nous affinons un modèle pré-entraîné.
Freeze the first layers and train the last ones.|Gèle les premières couches et entraîne les dernières.
Save a checkpoint every epoch.|Sauvegarde un point de contrôle à chaque époque.
We tried twenty configurations.|Nous avons essayé vingt configurations.
Random search is often better than grid search.|La recherche aléatoire est souvent meilleure que la recherche par grille.
An ablation study shows what each part contributes.|Une étude d'ablation montre ce que chaque partie apporte.`,
    d: [
      ["Reducing overfitting", `Student: My network overfits the training images. || Mon réseau surapprend les images d'entraînement.
Teacher: Do you use data augmentation? || Utilises-tu l'augmentation de données ?
Student: No. || Non.
Teacher: Add random flips and rotations, and try a dropout layer. || Ajoute des retournements et rotations aléatoires, et essaie une couche de dropout.`],
      ["Transfer learning", `Omar: I only have five hundred images. Can I still train a good model? || Je n'ai que cinq cents images. Puis-je quand même entraîner un bon modèle ?
Sara: Yes, use transfer learning. Start from a pre-trained model. || Oui, utilise l'apprentissage par transfert. Pars d'un modèle pré-entraîné.
Omar: Do I train all the layers? || Dois-je entraîner toutes les couches ?
Sara: Freeze the early layers and fine-tune the last ones. || Gèle les premières couches et affine les dernières.`],
    ],
    c: {
      en: "Deep networks have many parameters, so they can easily overfit. Regularization techniques reduce this risk. Dropout randomly turns off a fraction of the neurons during training, so the network cannot depend on one neuron. Weight decay, or L2 regularization, penalizes large weights. Data augmentation creates new training examples by changing existing ones, for instance by flipping or rotating an image. Batch normalization stabilizes training. When the dataset is small, transfer learning is very useful: you start from a pre-trained model and fine-tune it. Hyperparameters, such as the learning rate and the batch size, are chosen by search, and random search often works well.",
      fr: "Les réseaux profonds ont beaucoup de paramètres et peuvent donc facilement surapprendre. Les techniques de régularisation réduisent ce risque. Le dropout désactive aléatoirement une fraction des neurones pendant l'entraînement, de sorte que le réseau ne peut pas dépendre d'un seul neurone. La décroissance des poids, ou régularisation L2, pénalise les grands poids. L'augmentation de données crée de nouveaux exemples d'entraînement en modifiant des exemples existants, par exemple en retournant ou en tournant une image. La normalisation par lot stabilise l'entraînement. Quand le jeu de données est petit, l'apprentissage par transfert est très utile : on part d'un modèle pré-entraîné et on l'affine. Les hyperparamètres, comme le taux d'apprentissage et la taille de lot, sont choisis par recherche, et la recherche aléatoire fonctionne souvent bien.",
    },
    da: `Parameters vs hyperparameters: parameters = l-modèle howa li kay-t3lemhom (weights). Hyperparameters = nta li kat-khtarhom 9bel (learning rate, batch size, dropout).
Dropout: f l-training kan-tfiw neurones 3chwa2iyan. L-modèle ma ykhellich 3la neurone wa7ed. F l-test, kolchi khdam.
Transfer learning: ma-tbdach men zero. Khod modèle t3lem 3la mil-yon swar, w 3lem-o ghir joz2 sghir dyalek. Ytwafer weqt w data.`,
    r: {
      t: "Why transfer learning changed practice",
      en: "Training a large model from scratch needs huge datasets and expensive computers. Transfer learning offers a shortcut. Researchers first train a model on a very large dataset, for example millions of general images. The first layers of this model learn simple features such as edges and textures, which are useful for almost any image task. A student can download this pre-trained model, replace the last layer and fine-tune it on a small dataset of medical or agricultural images. This approach often gives good results with little data and a normal laptop, which makes AI available to many more people.",
      fr: "Entraîner un grand modèle à partir de zéro demande d'énormes jeux de données et des ordinateurs coûteux. L'apprentissage par transfert offre un raccourci. Des chercheurs entraînent d'abord un modèle sur un très grand jeu de données, par exemple des millions d'images générales. Les premières couches de ce modèle apprennent des caractéristiques simples comme les contours et les textures, utiles pour presque toute tâche d'image. Un étudiant peut télécharger ce modèle pré-entraîné, remplacer la dernière couche et l'affiner sur un petit jeu d'images médicales ou agricoles. Cette approche donne souvent de bons résultats avec peu de données et un ordinateur portable normal, ce qui rend l'IA accessible à beaucoup plus de personnes.",
    },
    s: "Imaginez que votre modèle surapprend. Dites à voix haute au moins trois solutions avec : « I would try … Another option is … It might also help to … »",
    p: { tip: "« Dropout » : DRAHP-owt. « Augmentation » : awg-men-TAY-shn. « Checkpoint » : CHEK-poynt. « Reproducibility » : 7 syllabes, accent sur « BIL ». « Penalize » : PEE-nl-ize.", words: "dropout,augmentation,checkpoint,pre-trained,reproducibility,configuration" },
    q: [
      ["What does dropout do?", ["Removes the dataset", "Randomly turns off neurons during training", "Increases the learning rate", "Saves the model"], 1, "Réduit la co-adaptation des neurones."],
      ["Transfer learning is useful when…", ["we have a lot of data", "we have little data", "we have no computer", "we have no model"], 1, "On réutilise ce qu'un modèle a déjà appris."],
      ["Which is a hyperparameter?", ["A weight", "The learning rate", "A prediction", "A pixel"], 1, "Les hyperparamètres sont choisis avant l'entraînement."],
    ],
    rq: [
      ["What do the first layers of a pre-trained model learn?", ["Simple features like edges", "Medical diagnoses", "Names"], 0, "« simple features such as edges and textures »."],
      ["What do you replace for a new task?", ["The last layer", "The computer", "The data"], 0, "« replace the last layer »."],
    ],
    f: ["I fine-tuned a pre-train model.", "I fine-tuned a pre-trained model.", "Adjectif participial : pre-trained (avec -ed)."],
  },
];
