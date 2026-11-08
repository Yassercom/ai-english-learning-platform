import type { RawLesson } from "../types";

export const m06b: RawLesson[] = [
  {
    id: "6-3",
    t: "Training, Overfitting and Validation",
    fr: "Entraînement, surapprentissage et validation",
    cat: "ML",
    goal: "Expliquer pourquoi on sépare les données et comment détecter et éviter le surapprentissage.",
    w: `training set|ensemble d'entraînement|TRAY-ning set
validation set|ensemble de validation|val-uh-DAY-shn set
test set|ensemble de test|test set
overfitting|surapprentissage|OH-ver-fit-ing
underfitting|sous-apprentissage|UN-der-fit-ing
generalization|généralisation|jen-ruh-luh-ZAY-shn
bias-variance tradeoff|compromis biais-variance|BIE-us VER-ee-uns TRAYD-awf
cross-validation|validation croisée|kraws val-uh-DAY-shn
fold|pli, partition|fohld
regularization|régularisation|reg-yuh-luh-ruh-ZAY-shn
hyperparameter tuning|réglage des hyperparamètres|hie-per-puh-RAM-uh-ter TOO-ning
grid search|recherche par grille|grid serch
early stopping|arrêt précoce|ER-lee STAH-ping
complexity|complexité|kum-PLEK-suh-tee
to memorize|mémoriser|too MEM-uh-rize
unseen data|données jamais vues|un-SEEN DAY-tuh
to split|diviser|too split
held-out|mis de côté|held-owt
to tune|régler|too toon
baseline|référence de base|BAYS-line
learning curve|courbe d'apprentissage|LER-ning kerv
capacity|capacité (du modèle)|kuh-PAS-uh-tee
penalty|pénalité|PEN-ul-tee
simple|simple|SIM-pl
gap|écart|gap`,
    x: `Split the data into training, validation and test sets.|Divise les données en ensembles d'entraînement, de validation et de test.
The model memorizes the training data.|Le modèle mémorise les données d'entraînement.
It performs well on training data but poorly on new data.|Il fonctionne bien sur les données d'entraînement mais mal sur de nouvelles données.
This is a case of overfitting.|C'est un cas de surapprentissage.
The model is too simple. It underfits.|Le modèle est trop simple. Il sous-apprend.
We use five-fold cross-validation.|Nous utilisons une validation croisée à cinq partitions.
Don't touch the test set until the end.|Ne touche pas à l'ensemble de test avant la fin.
Add regularization to reduce overfitting.|Ajoute de la régularisation pour réduire le surapprentissage.
Let's stop training early.|Arrêtons l'entraînement plus tôt.
What is your baseline?|Quelle est votre référence de base ?`,
    d: [
      ["Detecting overfitting", `Teacher: Your training accuracy is ninety-nine percent. || Votre précision d'entraînement est de quatre-vingt-dix-neuf pour cent.
Student: But the validation accuracy is only seventy percent. || Mais la précision de validation n'est que de soixante-dix pour cent.
Teacher: This gap shows overfitting. The model memorizes the examples. || Cet écart montre un surapprentissage. Le modèle mémorise les exemples.
Student: Should I add regularization? || Dois-je ajouter de la régularisation ?`],
      ["Explaining data splits", `Omar: Why do we need three sets? || Pourquoi faut-il trois ensembles ?
Sara: We train on the training set and tune on the validation set. || On entraîne sur l'ensemble d'entraînement et on règle sur l'ensemble de validation.
Omar: And the test set? || Et l'ensemble de test ?
Sara: We use it once, at the end, to measure real performance on unseen data. || On l'utilise une seule fois, à la fin, pour mesurer la vraie performance sur des données jamais vues.`],
    ],
    c: {
      en: "The goal of machine learning is generalization: good performance on unseen data. To measure it, we split the data into a training set, a validation set and a test set. The model learns from the training set, we tune hyperparameters on the validation set, and we keep the test set for a final evaluation. Overfitting happens when the model memorizes the training data, including its noise, so training performance is high but validation performance is low. Underfitting happens when the model is too simple. Regularization, more data, early stopping and cross-validation help to find a good balance.",
      fr: "Le but de l'apprentissage automatique est la généralisation : de bonnes performances sur des données jamais vues. Pour la mesurer, on divise les données en un ensemble d'entraînement, un ensemble de validation et un ensemble de test. Le modèle apprend sur l'ensemble d'entraînement, on règle les hyperparamètres sur l'ensemble de validation et on garde l'ensemble de test pour une évaluation finale. Le surapprentissage se produit quand le modèle mémorise les données d'entraînement, y compris leur bruit : la performance d'entraînement est élevée mais la performance de validation est faible. Le sous-apprentissage se produit quand le modèle est trop simple. La régularisation, plus de données, l'arrêt précoce et la validation croisée aident à trouver un bon équilibre.",
    },
    r: {
      t: "The student who memorized the answers",
      en: "Imagine two students before an exam. The first student memorizes the answers of last year's exam. The second student understands the course. If the new exam has the same questions, the first student gets a perfect grade. But if the questions are different, he fails. The second student succeeds in both cases. An overfitted model behaves like the first student: it is excellent on the examples it has seen and weak on new ones. That is why we always evaluate a model on data that it has never seen.",
      fr: "Imaginez deux étudiants avant un examen. Le premier étudiant mémorise les réponses de l'examen de l'an dernier. Le second comprend le cours. Si le nouvel examen a les mêmes questions, le premier obtient une note parfaite. Mais si les questions sont différentes, il échoue. Le second réussit dans les deux cas. Un modèle en surapprentissage se comporte comme le premier étudiant : il est excellent sur les exemples qu'il a vus et faible sur les nouveaux. C'est pourquoi on évalue toujours un modèle sur des données qu'il n'a jamais vues.",
    },
    da: `Overfitting: l-modèle « 7afed » l-imtihan b ghayr ma yfhem. Mzyan f training, khayeb f l-jdid. Bhal talib li 7afed jawabat 3am lli fat.
3lach 3 sets: train = t-t3lem, validation = t-tbdil l-réglages, test = l-imtihan n-nihai (ma-tchoufouch 9bel!). Ila stta3mlti test bzzaf mrrat, ghadi t-dkhel chiy mn-ou f l-modèle.
Bias-variance: modèle bseet bzzaf = bias kbir (underfit). Modèle m3a9ed bzzaf = variance kbira (overfit). Khassek tawazun.`,
    s: "Expliquez à voix haute l'overfitting avec l'histoire de l'étudiant (ou un autre exemple) en 5 phrases : « Imagine … He memorizes … On new questions … This is like … »",
    p: { tip: "« Overfitting » : OH-ver-fit-ing, accent sur « OH ». « Validation » : val-uh-DAY-shn. « Generalization » : 6 syllabes, accent sur « ZAY ». « Regularization » : reg-yuh-luh-ruh-ZAY-shn.", words: "overfitting,validation,generalization,regularization,baseline,complexity" },
    q: [
      ["High training accuracy and low validation accuracy suggest…", ["underfitting", "overfitting", "a perfect model", "a bug in the printer"], 1, "Grand écart train/validation = surapprentissage."],
      ["The test set should be used…", ["many times during tuning", "only at the end", "never", "instead of training"], 1, "Le test set sert à l'évaluation finale unique."],
      ["Which technique helps reduce overfitting?", ["Regularization", "Using a smaller dataset", "Training longer without checks", "Removing the validation set"], 0, "La régularisation pénalise la complexité."],
    ],
    rq: [
      ["Who behaves like an overfitted model?", ["The student who memorizes answers", "The student who understands", "The teacher"], 0, "Le premier étudiant."],
      ["What do we use to evaluate a model?", ["Unseen data", "Training data only", "Nothing"], 0, "« data that it has never seen »."],
    ],
    f: ["The model is overfitted on the training data since long time.", "The model has been overfitting the training data for a long time.", "« Since » demande un point de départ ; on utilise « for + durée » avec le present perfect."],
  },
  {
    id: "6-4",
    t: "Evaluation Metrics",
    fr: "Métriques d'évaluation",
    cat: "ML",
    goal: "Choisir et expliquer une métrique : précision, rappel, F1, matrice de confusion, erreur quadratique.",
    w: `accuracy|exactitude|AK-yuh-ruh-see
precision|précision|prih-SIZH-n
recall|rappel|REE-kawl
F1 score|score F1|ef-WUN skor
confusion matrix|matrice de confusion|kun-FYOO-zhn MAY-triks
true positive|vrai positif|troo PAH-zuh-tiv
false positive|faux positif|fawls PAH-zuh-tiv
true negative|vrai négatif|troo NEG-uh-tiv
false negative|faux négatif|fawls NEG-uh-tiv
ROC curve|courbe ROC|ar-oh-SEE kerv
AUC|aire sous la courbe ROC|ay-yoo-SEE
mean squared error|erreur quadratique moyenne|meen skwaird ER-er
mean absolute error|erreur absolue moyenne|meen AB-suh-loot ER-er
R-squared|coefficient de détermination|ar-SKWAIRD
imbalanced dataset|jeu de données déséquilibré|im-BAL-unst DAY-tuh-set
metric|métrique|MEH-trik
benchmark|banc d'essai de référence|BENCH-mark
trade-off|compromis|TRAYD-awf
to evaluate|évaluer|too ih-VAL-yoo-ayt
error rate|taux d'erreur|ER-er rayt
sensitivity|sensibilité|sen-suh-TIV-uh-tee
specificity|spécificité|spes-uh-FIS-uh-tee
to misclassify|mal classer|too mis-KLAS-uh-fie
positive class|classe positive|PAH-zuh-tiv klas
cutoff|seuil de coupure|KUT-awf`,
    x: `The accuracy is ninety-five percent.|L'exactitude est de quatre-vingt-quinze pour cent.
Accuracy is misleading on imbalanced data.|L'exactitude est trompeuse sur des données déséquilibrées.
We have many false negatives.|Nous avons beaucoup de faux négatifs.
Recall measures how many real positives we find.|Le rappel mesure combien de vrais positifs nous trouvons.
Precision measures how many predicted positives are correct.|La précision mesure combien de positifs prédits sont corrects.
There is a trade-off between precision and recall.|Il y a un compromis entre précision et rappel.
The F1 score combines precision and recall.|Le score F1 combine précision et rappel.
Let's look at the confusion matrix.|Regardons la matrice de confusion.
The mean squared error is very high.|L'erreur quadratique moyenne est très élevée.
Which metric matters most for this problem?|Quelle métrique compte le plus pour ce problème ?`,
    d: [
      ["Why accuracy is not enough", `Student: My model has ninety-nine percent accuracy! || Mon modèle a quatre-vingt-dix-neuf pour cent d'exactitude !
Teacher: How many positive cases are there? || Combien de cas positifs y a-t-il ?
Student: Only one percent. || Seulement un pour cent.
Teacher: Then a model that always says no also has ninety-nine percent. Check recall. || Alors un modèle qui dit toujours non a aussi quatre-vingt-dix-neuf pour cent. Vérifie le rappel.`],
      ["Medical screening", `Doctor: For cancer screening, which error is worse? || Pour le dépistage du cancer, quelle erreur est la pire ?
Student: A false negative, because a sick patient is not detected. || Un faux négatif, car un patient malade n'est pas détecté.
Doctor: So which metric should we prioritize? || Alors quelle métrique devons-nous privilégier ?
Student: Recall, even if precision decreases a little. || Le rappel, même si la précision baisse un peu.`],
    ],
    c: {
      en: "To evaluate a classifier, we use a confusion matrix, which counts true positives, false positives, true negatives and false negatives. Accuracy is the proportion of correct predictions, but it is misleading when classes are imbalanced. Precision is the proportion of predicted positives that are truly positive. Recall is the proportion of real positives that the model finds. There is often a trade-off: improving one lowers the other. The F1 score is a balance of both. For regression, we use errors such as the mean squared error and the mean absolute error. The best metric depends on the cost of each type of mistake.",
      fr: "Pour évaluer un classifieur, on utilise une matrice de confusion qui compte les vrais positifs, faux positifs, vrais négatifs et faux négatifs. L'exactitude est la proportion de prédictions correctes, mais elle est trompeuse quand les classes sont déséquilibrées. La précision est la proportion de positifs prédits qui sont réellement positifs. Le rappel est la proportion de vrais positifs que le modèle trouve. Il y a souvent un compromis : améliorer l'un diminue l'autre. Le score F1 est un équilibre des deux. Pour la régression, on utilise des erreurs comme l'erreur quadratique moyenne et l'erreur absolue moyenne. La meilleure métrique dépend du coût de chaque type d'erreur.",
    },
    r: {
      t: "The accuracy trap",
      en: "A hospital builds a model to detect a rare disease that affects one patient in a hundred. The first version always predicts that the patient is healthy. Its accuracy is ninety-nine percent, which looks excellent, but it never finds a sick patient: its recall is zero. This is the accuracy trap. When one class is rare, accuracy hides the real problem. Data scientists should look at precision, recall and the confusion matrix, and discuss with experts which errors are the most dangerous in real life.",
      fr: "Un hôpital construit un modèle pour détecter une maladie rare qui touche un patient sur cent. La première version prédit toujours que le patient est en bonne santé. Son exactitude est de quatre-vingt-dix-neuf pour cent, ce qui semble excellent, mais elle ne trouve jamais un patient malade : son rappel est nul. C'est le piège de l'exactitude. Quand une classe est rare, l'exactitude cache le vrai problème. Les data scientists devraient regarder la précision, le rappel et la matrice de confusion, et discuter avec des experts des erreurs les plus dangereuses dans la vraie vie.",
    },
    da: `Precision vs recall: precision = men l-li 9olt « positif », chhal sa7i7? Recall = men l-positifs l-7a9i9iyin, chhal ljit? Zouj mkhtalfin. Mital: alarm. Precision 3ali = ma-kay3ayet-ch bla sabab. Recall 3ali = ma-kayfoutch chi hajja.
False positive / false negative: false positive = ghalat b « iwa » (nadhar l-mara7). False negative = ghalat b « la » (ma-lqa-ch l-maradh).
Accuracy: ma-t-tqich bih ila l-classes mkhtalfin f l-3adad. Dima choof l-confusion matrix.`,
    s: "Expliquez à voix haute un exemple où le rappel est plus important que la précision (maladie, sécurité) puis un exemple inverse (filtre anti-spam). Utilisez : « In this case, a false … is worse than a false … »",
    p: { tip: "« Precision » : prih-SIZH-n. « Accuracy » : AK-yuh-ruh-see. « Recall » (nom, ML) : REE-kawl, accent sur « REE ». « Specificity » : spes-uh-FIS-uh-tee. « Metric » : MEH-trik.", words: "accuracy,precision,recall,sensitivity,specificity,benchmark" },
    q: [
      ["Recall measures…", ["how many predicted positives are correct", "how many real positives are found", "the overall percent correct", "the loss"], 1, "Rappel = TP / (TP + FN)."],
      ["Why can accuracy be misleading?", ["It is slow to compute", "With imbalanced classes a trivial model scores high", "It is always low", "It needs labels"], 1, "Classe majoritaire = score élevé sans utilité."],
      ["For cancer screening we usually prioritize…", ["precision only", "recall", "model size", "training speed"], 1, "On veut éviter les faux négatifs."],
    ],
    rq: [
      ["What is the recall of the first model?", ["Zero", "Ninety-nine percent", "Fifty percent"], 0, "« it never finds a sick patient: its recall is zero »."],
      ["What should data scientists discuss with experts?", ["Which errors are the most dangerous", "The color of the charts", "The price of computers"], 0, "Dernière phrase."],
    ],
    f: ["The accuracy of the model are high.", "The accuracy of the model is high.", "Le sujet est « accuracy » (singulier) → « is »."],
  },
  {
    id: "6-5",
    t: "Classic Algorithms: Trees, Neighbors, Clusters",
    fr: "Algorithmes classiques : arbres, voisins, groupes",
    cat: "ML",
    goal: "Décrire en anglais le fonctionnement des arbres de décision, des forêts aléatoires, de k-NN et de k-means.",
    w: `decision tree|arbre de décision|dih-SIZH-n tree
leaf|feuille|leef
split|séparation (nœud)|split
random forest|forêt aléatoire|RAN-dum FOR-ist
ensemble|ensemble (de modèles)|ahn-SAHM-bl
bagging|agrégation bootstrap|BAG-ing
boosting|boosting, renforcement|BOO-sting
k-nearest neighbors|k plus proches voisins|kay NEER-ist NAY-berz
support vector machine|machine à vecteurs de support|suh-PORT VEK-ter muh-SHEEN
naive Bayes|Bayes naïf|nie-EEV bayz
clustering|regroupement (clustering)|KLUS-ter-ing
k-means|k-moyennes|kay-meenz
centroid|centroïde|SEN-troyd
dimensionality reduction|réduction de dimension|duh-men-shuh-NAL-uh-tee rih-DUK-shn
PCA|analyse en composantes principales|pee-see-AY
feature importance|importance des variables|FEE-cher im-POR-tns
to vote|voter|too voht
distance|distance|DIS-tuns
kernel|noyau|KER-nl
margin|marge|MAR-jin
hyperplane|hyperplan|HIE-per-playn
interpretable|interprétable|in-TER-pruh-tuh-bl
black box|boîte noire|blak bahks
robust|robuste|roh-BUST
neighbor|voisin|NAY-ber`,
    x: `A decision tree asks a series of yes-or-no questions.|Un arbre de décision pose une série de questions oui ou non.
Each leaf gives a final prediction.|Chaque feuille donne une prédiction finale.
A random forest combines many trees.|Une forêt aléatoire combine de nombreux arbres.
The trees vote and the majority wins.|Les arbres votent et la majorité l'emporte.
K-nearest neighbors looks at the closest examples.|Les k plus proches voisins regardent les exemples les plus proches.
K-means groups similar points into clusters.|K-means regroupe des points similaires en clusters.
How many clusters do you want?|Combien de clusters voulez-vous ?
Which features are the most important?|Quelles variables sont les plus importantes ?
This model is easy to interpret.|Ce modèle est facile à interpréter.
Neural networks are often called black boxes.|Les réseaux de neurones sont souvent appelés des boîtes noires.`,
    d: [
      ["Why a random forest?", `Student: My decision tree overfits. || Mon arbre de décision surapprend.
Teacher: Try a random forest. It trains many trees on random subsets of the data. || Essaie une forêt aléatoire. Elle entraîne de nombreux arbres sur des sous-ensembles aléatoires.
Student: How does it predict? || Comment prédit-elle ?
Teacher: Each tree votes, and we take the majority. This reduces variance. || Chaque arbre vote et on prend la majorité. Cela réduit la variance.`],
      ["Customer segmentation", `Manager: Can we find groups of similar customers? || Peut-on trouver des groupes de clients similaires ?
Analyst: Yes, with k-means. We have no labels, so it is unsupervised. || Oui, avec k-means. Nous n'avons pas d'étiquettes, c'est donc non supervisé.
Manager: How do you choose the number of groups? || Comment choisissez-vous le nombre de groupes ?
Analyst: We test several values and compare the results. || Nous testons plusieurs valeurs et comparons les résultats.`],
    ],
    r: {
      t: "The wisdom of the crowd",
      en: "In 1906, a statistician named Francis Galton visited a fair where visitors guessed the weight of an ox. About eight hundred people took part. Most individual guesses were wrong, but the average of all guesses was very close to the real weight. This idea, that many imperfect opinions can give a good answer, is the basis of ensemble methods. A random forest combines hundreds of decision trees, each slightly different, and uses their majority vote. The result is usually more accurate and more stable than a single tree.",
      fr: "En 1906, un statisticien nommé Francis Galton a visité une foire où les visiteurs devinaient le poids d'un bœuf. Environ huit cents personnes ont participé. La plupart des estimations individuelles étaient fausses, mais la moyenne de toutes les estimations était très proche du poids réel. Cette idée, que de nombreuses opinions imparfaites peuvent donner une bonne réponse, est la base des méthodes d'ensemble. Une forêt aléatoire combine des centaines d'arbres de décision, chacun légèrement différent, et utilise leur vote majoritaire. Le résultat est généralement plus précis et plus stable qu'un arbre seul.",
    },
    c: {
      en: "Classic machine learning offers many algorithms. A decision tree splits the data with simple questions until each leaf gives a prediction; it is easy to interpret but can overfit. A random forest is an ensemble of many trees, and the final prediction is the majority vote. K-nearest neighbors classifies a point by looking at the labels of its k closest neighbors. A support vector machine finds the boundary with the largest margin between classes. K-means is an unsupervised method that groups points around centroids. Dimensionality reduction, such as PCA, reduces the number of features while keeping most of the information.",
      fr: "L'apprentissage automatique classique offre de nombreux algorithmes. Un arbre de décision sépare les données avec des questions simples jusqu'à ce que chaque feuille donne une prédiction ; il est facile à interpréter mais peut surapprendre. Une forêt aléatoire est un ensemble de nombreux arbres, et la prédiction finale est le vote majoritaire. Les k plus proches voisins classent un point en regardant les étiquettes de ses k voisins les plus proches. Une machine à vecteurs de support trouve la frontière avec la plus grande marge entre les classes. K-means est une méthode non supervisée qui regroupe les points autour de centroïdes. La réduction de dimension, comme l'ACP, diminue le nombre de variables tout en gardant l'essentiel de l'information.",
    },
    da: `Random forest: bzzaf d l-arbres, kol wa7ed kay-sawt, w kan-akhdo l-aktaria. « Ra2y l-jama3a » a7san mn ra2y wa7ed.
k-NN: l-point l-jdid kay-akhod nafs l-classe dyal l-jirane l-9rab lih. Bhal « 9ol liya chkoun jirank, n9ol lik chkoun nta ».
k-means vs k-NN: ismhoum bhal bhal walakin machi nafs chay! k-means = unsupervised (grouping). k-NN = supervised (classification).`,
    s: "Choisissez un algorithme de la leçon et expliquez-le à voix haute à un débutant en 5 phrases, sans formule : « A decision tree is like … It asks … At the end … The advantage is … The disadvantage is … »",
    p: { tip: "« Ensemble » en ML : ahn-SAHM-bl (comme en français). « Naive » : nie-EEV. « Kernel » : KER-nl (comme « colonel »). « Centroid » : SEN-troyd. « Neighbor » : NAY-ber, le « gh » est muet.", words: "ensemble,kernel,centroid,hyperplane,interpretable,neighbor" },
    q: [
      ["How does a random forest make a prediction?", ["By majority vote of many trees", "By one deep tree", "By sorting", "By random guess"], 0, "Les arbres votent."],
      ["K-means is…", ["supervised", "unsupervised", "reinforcement", "a database"], 1, "Pas d'étiquettes : non supervisé."],
      ["A black box model is…", ["easy to interpret", "hard to interpret", "a hardware component", "a deleted model"], 1, "Boîte noire : difficile d'expliquer ses décisions."],
    ],
    rq: [
      ["What did the average of guesses show?", ["It was close to the real weight", "It was far from the real weight", "It was zero"], 0, "« very close to the real weight »."],
      ["What does a random forest combine?", ["Hundreds of decision trees", "Photos", "Databases"], 0, "Idée de l'ensemble."],
    ],
    f: ["K-means are an unsupervised algorithm.", "K-means is an unsupervised algorithm.", "K-means est un nom d'algorithme au singulier : « is »."],
  },
];
