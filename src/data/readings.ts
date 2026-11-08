import type { Q } from "./types";

export type ReadingType = "article" | "science" | "paper" | "doc";

export interface Reading {
  id: string;
  type: ReadingType;
  level: string;
  title: string;
  reference: string; // source / référence exacte
  url?: string;
  note: string; // nature du texte
  summary: string; // résumé en français
  en: string;
  fr: string;
  vocab: [string, string][];
  questions: Q[];
}

export const READING_TYPES: Record<ReadingType, { label: string; desc: string }> = {
  article: { label: "Articles courts (débutant)", desc: "Textes originaux écrits pour cette application, en anglais simple." },
  science: { label: "Articles scientifiques simplifiés", desc: "Explications simplifiées d'idées issues de publications réelles (référence indiquée)." },
  paper: { label: "Résumés de publications", desc: "Résumés pédagogiques de publications réelles. Lisez toujours l'article original pour les détails." },
  doc: { label: "Documentation technique", desc: "Paraphrases pédagogiques de pages de documentation officielle (lien vers la source)." },
};

const ORIGINAL = "Texte pédagogique original, écrit pour AI English Lab.";
const SIMPLIFIED = "Texte simplifié écrit pour AI English Lab, d'après la publication citée. Ce n'est pas une traduction de l'article.";
const PARA = "Extrait adapté et abrégé de la documentation officielle (formulations proches de l'original). Pour le texte exact et à jour, consultez la page officielle.";

export const READINGS: Reading[] = [
  {
    id: "a1",
    type: "article",
    level: "A1–A2",
    title: "What is Artificial Intelligence?",
    reference: "AI English Lab (texte original)",
    note: ORIGINAL,
    summary: "L'IA désigne des programmes qui font des tâches qui demandent de l'intelligence humaine : reconnaître une image, comprendre une phrase, jouer à un jeu. Elle apprend souvent à partir d'exemples.",
    en: "Artificial intelligence, or AI, is a part of computer science. An AI program can do tasks that usually need human intelligence. For example, it can recognize a face in a photo, translate a sentence or play chess. Most modern AI systems learn from examples. They look at many pictures or texts and find patterns. AI is already in our phones: it helps with maps, music and spelling. But AI is not magic. It can make mistakes, and people must check important results.",
    fr: "L'intelligence artificielle, ou IA, est une partie de l'informatique. Un programme d'IA peut effectuer des tâches qui demandent habituellement de l'intelligence humaine. Par exemple, il peut reconnaître un visage sur une photo, traduire une phrase ou jouer aux échecs. La plupart des systèmes d'IA modernes apprennent à partir d'exemples. Ils regardent de nombreuses images ou de nombreux textes et trouvent des motifs. L'IA est déjà dans nos téléphones : elle aide pour les cartes, la musique et l'orthographe. Mais l'IA n'est pas magique. Elle peut faire des erreurs et les gens doivent vérifier les résultats importants.",
    vocab: [["task", "tâche"], ["to recognize", "reconnaître"], ["pattern", "motif"], ["mistake", "erreur"], ["to check", "vérifier"]],
    questions: [
      ["How do most modern AI systems learn?", ["From examples", "From magic", "From sleeping"], 0, "« Most modern AI systems learn from examples »."],
      ["What should people do with important AI results?", ["Check them", "Ignore them", "Delete them"], 0, "« people must check important results »."],
    ],
  },
  {
    id: "a2",
    type: "article",
    level: "A2",
    title: "How Does a Recommendation System Work?",
    reference: "AI English Lab (texte original)",
    note: ORIGINAL,
    summary: "Un système de recommandation propose des films, des vidéos ou des produits. Il compare vos choix passés à ceux d'autres personnes, puis prédit ce que vous aimerez.",
    en: "When a video app suggests a new video, it uses a recommendation system. First, the system collects data: what you watch, how long you watch and what you like. Then it compares your behavior with the behavior of millions of other users. If people similar to you liked a video, the system predicts that you may like it too. Recommendation systems are useful, but they can also keep you in a bubble of similar content. For this reason, good systems try to show some variety.",
    fr: "Quand une application vidéo vous suggère une nouvelle vidéo, elle utilise un système de recommandation. D'abord, le système collecte des données : ce que vous regardez, combien de temps et ce que vous aimez. Ensuite, il compare votre comportement à celui de millions d'autres utilisateurs. Si des personnes semblables à vous ont aimé une vidéo, le système prédit que vous pourriez l'aimer aussi. Les systèmes de recommandation sont utiles, mais ils peuvent aussi vous garder dans une bulle de contenus semblables. Pour cette raison, les bons systèmes essaient de montrer de la variété.",
    vocab: [["to suggest", "suggérer"], ["behavior", "comportement"], ["similar", "semblable"], ["bubble", "bulle"], ["variety", "variété"]],
    questions: [
      ["What data does the system collect?", ["What you watch and like", "Your bank password", "Your address only"], 0, "Première partie du texte."],
      ["What is one risk of recommendation systems?", ["A bubble of similar content", "Electricity cuts", "Slow printers"], 0, "« a bubble of similar content »."],
    ],
  },
  {
    id: "a3",
    type: "article",
    level: "A2–B1",
    title: "What Is a Neural Network? A Simple Explanation",
    reference: "AI English Lab (texte original)",
    note: ORIGINAL,
    summary: "Un réseau de neurones est composé de couches de petites unités qui transforment des nombres. En s'entraînant, il ajuste ses poids pour faire de meilleures prédictions.",
    en: "A neural network is a mathematical model with layers. Each layer contains small units called neurons. A neuron receives numbers, multiplies each number by a weight, adds the results and sends the output to the next layer. At the beginning, the weights are random, so the predictions are bad. During training, the network compares its predictions with the correct answers and changes the weights a little. After many examples, the predictions become much better. A network with many layers is called a deep network, and learning with such networks is called deep learning.",
    fr: "Un réseau de neurones est un modèle mathématique composé de couches. Chaque couche contient de petites unités appelées neurones. Un neurone reçoit des nombres, multiplie chacun par un poids, additionne les résultats et envoie la sortie à la couche suivante. Au début, les poids sont aléatoires, donc les prédictions sont mauvaises. Pendant l'entraînement, le réseau compare ses prédictions aux bonnes réponses et modifie un peu les poids. Après de nombreux exemples, les prédictions deviennent bien meilleures. Un réseau à nombreuses couches s'appelle un réseau profond, et l'apprentissage avec de tels réseaux s'appelle l'apprentissage profond.",
    vocab: [["layer", "couche"], ["weight", "poids"], ["output", "sortie"], ["random", "aléatoire"], ["deep learning", "apprentissage profond"]],
    questions: [
      ["What does a neuron do with each input number?", ["Multiplies it by a weight", "Deletes it", "Prints it"], 0, "« multiplies each number by a weight »."],
      ["What changes during training?", ["The weights", "The computer", "The answers"], 0, "« changes the weights a little »."],
    ],
  },
  {
    id: "s1",
    type: "science",
    level: "B1",
    title: "Dropout: Teaching a Network Not to Memorize",
    reference: "Srivastava, Hinton, Krizhevsky, Sutskever & Salakhutdinov. « Dropout: A Simple Way to Prevent Neural Networks from Overfitting ». Journal of Machine Learning Research, 15, 1929–1958 (2014).",
    url: "https://jmlr.org/papers/v15/srivastava14a.html",
    note: SIMPLIFIED,
    summary: "Le dropout désactive aléatoirement des neurones pendant l'entraînement. Le réseau ne peut plus se reposer sur quelques neurones et généralise mieux : c'est une façon simple de réduire le surapprentissage.",
    en: "Large neural networks can memorize their training data, which is called overfitting. The authors describe a simple technique called dropout. During training, each neuron is temporarily removed with some probability, so every training step uses a slightly different network. Because a neuron can never depend on a specific partner, it must learn more useful and general features. At test time, the whole network is used. The authors report improvements on tasks from several fields, such as vision and speech, and show that dropout is easy to add to many models.",
    fr: "Les grands réseaux de neurones peuvent mémoriser leurs données d'entraînement : c'est le surapprentissage. Les auteurs décrivent une technique simple appelée dropout. Pendant l'entraînement, chaque neurone est temporairement retiré avec une certaine probabilité, de sorte que chaque pas d'entraînement utilise un réseau légèrement différent. Comme un neurone ne peut jamais dépendre d'un partenaire précis, il doit apprendre des caractéristiques plus utiles et plus générales. Au moment du test, le réseau entier est utilisé. Les auteurs rapportent des améliorations sur des tâches de plusieurs domaines, comme la vision et la parole, et montrent que le dropout est facile à ajouter à de nombreux modèles.",
    vocab: [["to memorize", "mémoriser"], ["overfitting", "surapprentissage"], ["probability", "probabilité"], ["feature", "caractéristique"], ["to depend on", "dépendre de"]],
    questions: [
      ["What does dropout do during training?", ["It temporarily removes neurons", "It deletes the data", "It adds layers"], 0, "Chaque neurone est retiré avec une probabilité."],
      ["Is the whole network used at test time?", ["Yes", "No, half of it", "No, never"], 0, "« At test time, the whole network is used »."],
    ],
  },
  {
    id: "s2",
    type: "science",
    level: "B1–B2",
    title: "Residual Connections: Making Very Deep Networks Trainable",
    reference: "He, Zhang, Ren & Sun. « Deep Residual Learning for Image Recognition ». IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016. arXiv:1512.03385.",
    url: "https://arxiv.org/abs/1512.03385",
    note: SIMPLIFIED,
    summary: "Les connexions résiduelles ajoutent l'entrée d'un bloc à sa sortie. Cela rend l'entraînement de réseaux très profonds beaucoup plus facile et a amélioré la reconnaissance d'images.",
    en: "Researchers observed that making a network deeper does not always make it better: very deep networks were sometimes harder to train. The authors propose residual learning. Instead of asking a block of layers to learn a complete transformation, they let the block learn only a correction, called a residual, and add it to the original input through a skip connection. This makes optimization easier. With this idea, the authors trained networks with more than one hundred layers and obtained excellent results in image classification. Residual connections are now used in many architectures, including Transformers.",
    fr: "Des chercheurs ont observé que rendre un réseau plus profond ne l'améliore pas toujours : les réseaux très profonds étaient parfois plus difficiles à entraîner. Les auteurs proposent l'apprentissage résiduel. Au lieu de demander à un bloc de couches d'apprendre une transformation complète, ils laissent le bloc apprendre seulement une correction, appelée résidu, et l'ajoutent à l'entrée d'origine par une connexion résiduelle. Cela facilite l'optimisation. Avec cette idée, les auteurs ont entraîné des réseaux de plus de cent couches et obtenu d'excellents résultats en classification d'images. Les connexions résiduelles sont aujourd'hui utilisées dans de nombreuses architectures, y compris les Transformers.",
    vocab: [["deeper", "plus profond"], ["to propose", "proposer"], ["skip connection", "connexion résiduelle"], ["optimization", "optimisation"], ["to obtain", "obtenir"]],
    questions: [
      ["What does a block learn in residual learning?", ["Only a correction (residual)", "The whole image", "Nothing"], 0, "Le bloc apprend un résidu ajouté à l'entrée."],
      ["Which tasks improved?", ["Image classification", "Typing speed", "Printing"], 0, "« excellent results in image classification »."],
    ],
  },
  {
    id: "s3",
    type: "science",
    level: "B2",
    title: "Gender Shades: Testing AI for Different Groups",
    reference: "Buolamwini & Gebru. « Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification ». Proceedings of Machine Learning Research, 81 (Conference on Fairness, Accountability and Transparency), 2018.",
    url: "https://proceedings.mlr.press/v81/buolamwini18a.html",
    note: SIMPLIFIED,
    summary: "L'étude montre que des systèmes commerciaux de classification de genre avaient des taux d'erreur très différents selon la couleur de peau et le genre. Elle insiste sur l'évaluation par sous-groupes.",
    en: "The authors evaluated commercial systems that classify the gender of a face. They built a new test set with balanced skin tones and genders. The results showed large differences in error rates between groups, with the highest errors for darker-skinned women. The study argues that reporting only one average accuracy can hide serious problems, so systems should be tested on subgroups. The paper also shows the importance of diverse datasets and transparency in how AI products are evaluated.",
    fr: "Les auteurs ont évalué des systèmes commerciaux qui classent le genre d'un visage. Ils ont construit un nouvel ensemble de test avec des teintes de peau et des genres équilibrés. Les résultats ont montré de grandes différences de taux d'erreur entre les groupes, avec les erreurs les plus élevées pour les femmes à la peau foncée. L'étude soutient que rapporter une seule précision moyenne peut cacher de sérieux problèmes, donc les systèmes devraient être testés sur des sous-groupes. L'article montre aussi l'importance de jeux de données diversifiés et de la transparence dans l'évaluation des produits d'IA.",
    vocab: [["error rate", "taux d'erreur"], ["balanced", "équilibré"], ["subgroup", "sous-groupe"], ["to hide", "cacher"], ["diverse", "diversifié"]],
    questions: [
      ["What can a single average accuracy hide?", ["Serious problems for some groups", "The size of the dataset", "The date"], 0, "Idée centrale de l'étude."],
      ["What should systems be tested on?", ["Subgroups", "Only one image", "Nothing"], 0, "« systems should be tested on subgroups »."],
    ],
  },
  {
    id: "p1",
    type: "paper",
    level: "B2",
    title: "Attention Is All You Need",
    reference: "Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser & Polosukhin. Advances in Neural Information Processing Systems 30 (NeurIPS 2017). arXiv:1706.03762.",
    url: "https://arxiv.org/abs/1706.03762",
    note: SIMPLIFIED,
    summary: "Les auteurs introduisent le Transformer, un modèle de traduction fondé uniquement sur l'attention, sans récurrence ni convolution. Il est plus parallélisable, s'entraîne plus vite et obtient d'excellents résultats en traduction automatique.",
    en: "The dominant sequence models were based on recurrent or convolutional networks. In this paper, the authors propose a new architecture, the Transformer, based only on attention mechanisms. Attention allows the model to relate every word of a sentence to every other word, regardless of distance. Because it removes recurrence, the Transformer can process all positions in parallel, which makes training faster. On two machine translation tasks, English to German and English to French, the model reaches strong results while requiring less training time than previous approaches. The authors also suggest that the architecture could be applied to other tasks.",
    fr: "Les modèles de séquences dominants reposaient sur des réseaux récurrents ou convolutifs. Dans cet article, les auteurs proposent une nouvelle architecture, le Transformer, fondée uniquement sur des mécanismes d'attention. L'attention permet au modèle de relier chaque mot d'une phrase à tous les autres, quelle que soit la distance. Comme elle supprime la récurrence, le Transformer peut traiter toutes les positions en parallèle, ce qui accélère l'entraînement. Sur deux tâches de traduction automatique, de l'anglais vers l'allemand et vers le français, le modèle atteint de très bons résultats tout en nécessitant moins de temps d'entraînement que les approches précédentes. Les auteurs suggèrent aussi que l'architecture pourrait être appliquée à d'autres tâches.",
    vocab: [["recurrent", "récurrent"], ["attention mechanism", "mécanisme d'attention"], ["regardless of", "quelle que soit"], ["in parallel", "en parallèle"], ["previous approaches", "approches précédentes"]],
    questions: [
      ["What is the Transformer based on?", ["Only attention mechanisms", "Recurrent networks", "Databases"], 0, "« based only on attention mechanisms »."],
      ["Why is training faster?", ["Positions are processed in parallel", "There is less data", "It uses no GPU"], 0, "Pas de récurrence → parallélisation."],
    ],
  },
  {
    id: "p2",
    type: "paper",
    level: "B2",
    title: "ImageNet Classification with Deep Convolutional Neural Networks",
    reference: "Krizhevsky, Sutskever & Hinton. Advances in Neural Information Processing Systems 25 (NeurIPS 2012).",
    note: SIMPLIFIED,
    summary: "Les auteurs entraînent un grand réseau convolutif (AlexNet) sur GPU pour la compétition ImageNet 2012 et réduisent fortement le taux d'erreur par rapport aux méthodes précédentes. Ils utilisent notamment ReLU, le dropout et l'augmentation de données.",
    en: "The authors trained a large deep convolutional neural network to classify about 1.2 million images from the ImageNet dataset into one thousand categories. The network has several convolutional layers followed by fully connected layers. To make training faster, they used a non-saturating activation function, ReLU, and an efficient implementation on graphics processors. To reduce overfitting, they used data augmentation and a regularization method called dropout. On the ImageNet 2012 competition, their model achieved a much lower error rate than the other entries. This result strongly increased interest in deep learning for computer vision.",
    fr: "Les auteurs ont entraîné un grand réseau de neurones convolutif profond pour classer environ 1,2 million d'images du jeu ImageNet en mille catégories. Le réseau comporte plusieurs couches convolutives suivies de couches entièrement connectées. Pour accélérer l'entraînement, ils ont utilisé une fonction d'activation non saturante, ReLU, et une implémentation efficace sur processeurs graphiques. Pour réduire le surapprentissage, ils ont utilisé l'augmentation de données et une méthode de régularisation appelée dropout. À la compétition ImageNet 2012, leur modèle a obtenu un taux d'erreur bien plus faible que les autres participants. Ce résultat a fortement accru l'intérêt pour l'apprentissage profond en vision par ordinateur.",
    vocab: [["to classify", "classer"], ["entry (competition)", "participation"], ["non-saturating", "non saturante"], ["graphics processor", "processeur graphique"], ["error rate", "taux d'erreur"]],
    questions: [
      ["How many categories does the dataset have?", ["One thousand", "Ten", "One million"], 0, "« one thousand categories »."],
      ["Which method reduced overfitting?", ["Data augmentation and dropout", "Deleting images", "Using fewer layers only"], 0, "Voir le texte."],
    ],
  },
  {
    id: "p3",
    type: "paper",
    level: "C1",
    title: "Denoising Diffusion Probabilistic Models",
    reference: "Ho, Jain & Abbeel. Advances in Neural Information Processing Systems 33 (NeurIPS 2020). arXiv:2006.11239.",
    url: "https://arxiv.org/abs/2006.11239",
    note: SIMPLIFIED,
    summary: "Les auteurs montrent que des modèles de diffusion peuvent générer des images de grande qualité : on ajoute progressivement du bruit à une image, puis on entraîne un réseau à inverser ce processus étape par étape.",
    en: "This paper presents high-quality image synthesis using diffusion probabilistic models. A diffusion model has two processes. In the forward process, small amounts of noise are added to an image step by step until only noise remains. In the reverse process, a neural network is trained to remove the noise step by step and to recover an image. The authors show a connection between this training objective and denoising score matching, and they obtain strong sample quality on standard image datasets. The work helped to make diffusion models one of the main approaches to image generation.",
    fr: "Cet article présente la synthèse d'images de haute qualité avec des modèles probabilistes de diffusion. Un modèle de diffusion comporte deux processus. Dans le processus direct, de petites quantités de bruit sont ajoutées à une image pas à pas jusqu'à ce qu'il ne reste que du bruit. Dans le processus inverse, un réseau de neurones est entraîné à retirer le bruit pas à pas et à retrouver une image. Les auteurs montrent un lien entre cet objectif d'entraînement et le « denoising score matching », et obtiennent une forte qualité d'échantillons sur des jeux de données d'images standards. Ce travail a contribué à faire des modèles de diffusion l'une des principales approches de génération d'images.",
    vocab: [["image synthesis", "synthèse d'images"], ["forward process", "processus direct"], ["to recover", "retrouver"], ["objective", "objectif"], ["sample quality", "qualité des échantillons"]],
    questions: [
      ["What happens in the forward process?", ["Noise is added step by step", "Noise is removed", "The image is deleted"], 0, "Du bruit est ajouté progressivement."],
      ["What does the neural network learn to do?", ["Remove noise step by step", "Add more noise", "Print images"], 0, "Processus inverse."],
    ],
  },
  {
    id: "p4",
    type: "paper",
    level: "B2",
    title: "Random Forests",
    reference: "Breiman, L. Machine Learning, 45(1), 5–32 (2001). doi:10.1023/A:1010933404324.",
    url: "https://doi.org/10.1023/A:1010933404324",
    note: SIMPLIFIED,
    summary: "Breiman décrit les forêts aléatoires : un ensemble d'arbres de décision entraînés sur des échantillons aléatoires des données et des variables. L'erreur de généralisation dépend de la force de chaque arbre et de leur corrélation.",
    en: "A random forest is a combination of tree predictors. Each tree depends on the values of a random vector that is sampled independently, and all trees in the forest have the same distribution. The author shows that, as the number of trees becomes large, the generalization error converges, so the forest does not overfit more when trees are added. The error depends on the strength of each individual tree and on the correlation between trees. Random forests give accurate results and are fairly robust to noise.",
    fr: "Une forêt aléatoire est une combinaison de prédicteurs sous forme d'arbres. Chaque arbre dépend des valeurs d'un vecteur aléatoire échantillonné indépendamment, et tous les arbres de la forêt ont la même distribution. L'auteur montre que, lorsque le nombre d'arbres devient grand, l'erreur de généralisation converge : la forêt ne surapprend donc pas davantage quand on ajoute des arbres. L'erreur dépend de la force de chaque arbre et de la corrélation entre les arbres. Les forêts aléatoires donnent des résultats précis et sont assez robustes au bruit.",
    vocab: [["predictor", "prédicteur"], ["independently", "indépendamment"], ["generalization error", "erreur de généralisation"], ["strength", "force"], ["fairly robust", "assez robuste"]],
    questions: [
      ["What happens to generalization error when many trees are added?", ["It converges", "It explodes", "It disappears"], 0, "« the generalization error converges »."],
      ["What does the error depend on?", ["Strength of trees and correlation between them", "The color of data", "The name of the author"], 0, "Fin du texte."],
    ],
  },
  {
    id: "d1",
    type: "doc",
    level: "A2–B1",
    title: "Python Tutorial: More on Lists",
    reference: "Python Software Foundation, The Python Tutorial — « Data Structures », docs.python.org/3.",
    url: "https://docs.python.org/3/tutorial/datastructures.html",
    note: PARA,
    summary: "La documentation décrit les méthodes des listes : append, extend, insert, remove, pop, sort, reverse… Elle précise ce que chaque méthode renvoie et si elle modifie la liste.",
    en: "The list data type has some more methods. list.append(x) adds an item to the end of the list. list.extend(iterable) extends the list by appending all the items from the iterable. list.insert(i, x) inserts an item at a given position. list.remove(x) removes the first item whose value is equal to x and raises a ValueError if there is no such item. list.pop([i]) removes the item at the given position and returns it; if no index is specified, it removes and returns the last item. list.sort() sorts the items of the list in place.",
    fr: "Le type de données liste possède d'autres méthodes. list.append(x) ajoute un élément à la fin de la liste. list.extend(iterable) étend la liste en ajoutant tous les éléments de l'itérable. list.insert(i, x) insère un élément à une position donnée. list.remove(x) retire le premier élément dont la valeur est égale à x et lève une ValueError s'il n'y en a pas. list.pop([i]) retire l'élément à la position donnée et le renvoie ; si aucun indice n'est précisé, elle retire et renvoie le dernier élément. list.sort() trie les éléments de la liste sur place.",
    vocab: [["to append", "ajouter à la fin"], ["iterable", "itérable"], ["to raise", "lever (une exception)"], ["in place", "sur place"], ["to return", "renvoyer"]],
    questions: [
      ["What does list.pop() do without an index?", ["Removes and returns the last item", "Sorts the list", "Adds an item"], 0, "« removes and returns the last item »."],
      ["What error does remove raise if the item is missing?", ["ValueError", "TypeError", "None"], 0, "« raises a ValueError »."],
    ],
  },
  {
    id: "d2",
    type: "doc",
    level: "B1",
    title: "scikit-learn: Cross-validation",
    reference: "scikit-learn user guide — « Cross-validation: evaluating estimator performance », scikit-learn.org.",
    url: "https://scikit-learn.org/stable/modules/cross_validation.html",
    note: PARA,
    summary: "Le guide explique pourquoi on ne doit pas évaluer un modèle sur les données qui ont servi à l'entraîner, et comment la validation croisée à k partitions estime mieux la performance de généralisation.",
    en: "Learning the parameters of a prediction function and testing it on the same data is a methodological mistake: a model that would just repeat the labels of the samples that it has just seen would have a perfect score but would fail to predict anything useful on yet-unseen data. This situation is called overfitting. To avoid it, it is common practice to hold out part of the available data as a test set. In k-fold cross-validation, the training set is split into k smaller sets. The model is trained on k−1 folds and validated on the remaining fold, and the performance is the average of the values computed in the loop.",
    fr: "Apprendre les paramètres d'une fonction de prédiction et la tester sur les mêmes données est une erreur méthodologique : un modèle qui répéterait simplement les étiquettes des échantillons qu'il vient de voir aurait un score parfait mais ne parviendrait à rien prédire d'utile sur des données encore jamais vues. Cette situation s'appelle le surapprentissage. Pour l'éviter, il est courant de mettre de côté une partie des données disponibles comme ensemble de test. Dans la validation croisée à k partitions, l'ensemble d'entraînement est divisé en k plus petits ensembles. Le modèle est entraîné sur k−1 partitions et validé sur la partition restante, et la performance est la moyenne des valeurs calculées dans la boucle.",
    vocab: [["methodological mistake", "erreur méthodologique"], ["yet-unseen data", "données encore jamais vues"], ["to hold out", "mettre de côté"], ["fold", "partition"], ["remaining", "restant"]],
    questions: [
      ["Why is testing on the training data a mistake?", ["The model could just repeat labels and fail on new data", "It is too fast", "It needs more memory"], 0, "Première phrase."],
      ["How is the final cross-validation performance computed?", ["As the average over folds", "As the best fold", "As the first fold"], 0, "« the average of the values »."],
    ],
  },
  {
    id: "d3",
    type: "doc",
    level: "B1–B2",
    title: "PyTorch Tutorial: Tensors",
    reference: "PyTorch documentation — « Learn the Basics: Tensors », pytorch.org/tutorials.",
    url: "https://pytorch.org/tutorials/beginner/basics/tensorqs_tutorial.html",
    note: PARA,
    summary: "Le tutoriel présente les tenseurs : structure de données centrale de PyTorch, proche des tableaux NumPy, qui peut s'exécuter sur GPU. Il montre comment les créer, consulter leurs attributs et les déplacer sur un accélérateur.",
    en: "Tensors are a specialized data structure that are very similar to arrays and matrices. In PyTorch, we use tensors to encode the inputs and outputs of a model, as well as the model's parameters. Tensors are similar to NumPy's arrays, except that tensors can run on GPUs or other hardware accelerators. Tensor attributes describe their shape, data type and the device on which they are stored. By default, tensors are created on the CPU. We need to explicitly move tensors to the accelerator, and keep in mind that copying large tensors across devices can be expensive in terms of time and memory.",
    fr: "Les tenseurs sont une structure de données spécialisée, très proche des tableaux et des matrices. Dans PyTorch, on utilise des tenseurs pour encoder les entrées et les sorties d'un modèle, ainsi que les paramètres du modèle. Les tenseurs ressemblent aux tableaux de NumPy, sauf qu'ils peuvent s'exécuter sur des GPU ou d'autres accélérateurs matériels. Les attributs d'un tenseur décrivent sa forme, son type de données et l'appareil sur lequel il est stocké. Par défaut, les tenseurs sont créés sur le CPU. Il faut déplacer explicitement les tenseurs vers l'accélérateur, en gardant à l'esprit que copier de gros tenseurs entre appareils peut être coûteux en temps et en mémoire.",
    vocab: [["to encode", "encoder"], ["hardware accelerator", "accélérateur matériel"], ["attribute", "attribut"], ["by default", "par défaut"], ["explicitly", "explicitement"]],
    questions: [
      ["Where are tensors created by default?", ["On the CPU", "On the GPU", "On the cloud"], 0, "« By default, tensors are created on the CPU »."],
      ["What can be expensive?", ["Copying large tensors across devices", "Writing comments", "Importing modules"], 0, "Dernière phrase."],
    ],
  },
];
