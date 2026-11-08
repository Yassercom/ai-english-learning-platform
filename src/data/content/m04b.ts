import type { RawLesson } from "../types";

export const m04b: RawLesson[] = [
  {
    id: "4-4",
    t: "Probability",
    fr: "Probabilités",
    cat: "Mathematics",
    goal: "Parler de hasard, de distributions et de probabilités conditionnelles avec le vocabulaire correct.",
    w: `probability|probabilité|prah-buh-BIL-uh-tee
event|événement|ih-VENT
outcome|issue, résultat possible|OWT-kum
sample space|espace d'échantillonnage|SAM-pl spays
random variable|variable aléatoire|RAN-dum VER-ee-uh-bl
distribution|distribution, loi|dis-truh-BYOO-shn
normal distribution|loi normale|NOR-ml dis-truh-BYOO-shn
uniform|uniforme|YOO-nuh-form
mean|moyenne|meen
expected value|espérance|ik-SPEK-tid VAL-yoo
variance|variance|VER-ee-uns
standard deviation|écart-type|STAN-derd dee-vee-AY-shn
independent|indépendant|in-dih-PEN-dunt
conditional probability|probabilité conditionnelle|kun-DISH-nl prah-buh-BIL-uh-tee
Bayes' theorem|théorème de Bayes|bayz THEE-rum
likelihood|vraisemblance|LIKE-lee-hood
prior|a priori|PRIE-er
posterior|a posteriori|pah-STIR-ee-er
coin toss|lancer de pièce|koyn tahs
die (plural: dice)|dé|die (dice)
odds|cotes, chances|ahdz
to occur|se produire|too uh-KER
joint probability|probabilité conjointe|joynt prah-buh-BIL-uh-tee
random|aléatoire|RAN-dum
likely|probable|LIKE-lee`,
    x: `What is the probability of getting heads?|Quelle est la probabilité d'obtenir face ?
The probability is one half.|La probabilité est un demi.
The two events are independent.|Les deux événements sont indépendants.
It is very likely to rain tomorrow.|Il est très probable qu'il pleuve demain.
The chance of winning is one in a hundred.|La chance de gagner est de une sur cent.
The data follows a normal distribution.|Les données suivent une loi normale.
The mean is ten and the standard deviation is two.|La moyenne est dix et l'écart-type est deux.
Given that it is cloudy, what is the probability of rain?|Sachant qu'il y a des nuages, quelle est la probabilité de pluie ?
The model outputs a probability for each class.|Le modèle donne une probabilité pour chaque classe.
It is unlikely, but not impossible.|C'est peu probable, mais pas impossible.`,
    d: [
      ["Rolling a die", `Teacher: What is the probability of rolling a six? || Quelle est la probabilité d'obtenir un six ?
Student: There are six equally likely outcomes, so it is one in six. || Il y a six issues également probables, donc c'est une chance sur six.
Teacher: And rolling an even number? || Et obtenir un nombre pair ?
Student: Three outcomes out of six: one half. || Trois issues sur six : un demi.`],
      ["Conditional probability", `Omar: What does P of A given B mean? || Que signifie P de A sachant B ?
Sara: It is the probability of A, if we already know that B occurred. || C'est la probabilité de A, si l'on sait déjà que B s'est produit.
Omar: Like the probability of rain, given dark clouds? || Comme la probabilité de pluie, sachant qu'il y a des nuages sombres ?
Sara: Exactly. Bayes' theorem lets us update our belief. || Exactement. Le théorème de Bayes permet de mettre à jour notre croyance.`],
    ],
    c: {
      en: "Probability measures how likely an event is, using a number between zero and one. Zero means impossible, and one means certain. A random variable takes different values with different probabilities, and its distribution describes them. The mean, or expected value, is the average result in the long run, and the standard deviation measures how spread out the values are. Two events are independent if one does not change the probability of the other. Conditional probability, written P(A | B), is the probability of A given B. Bayes' theorem links the prior belief and new evidence to give the posterior.",
      fr: "La probabilité mesure la vraisemblance d'un événement avec un nombre entre zéro et un. Zéro signifie impossible et un signifie certain. Une variable aléatoire prend différentes valeurs avec différentes probabilités et sa distribution les décrit. La moyenne, ou espérance, est le résultat moyen à long terme et l'écart-type mesure la dispersion des valeurs. Deux événements sont indépendants si l'un ne modifie pas la probabilité de l'autre. La probabilité conditionnelle, notée P(A | B), est la probabilité de A sachant B. Le théorème de Bayes relie la croyance a priori et les nouvelles preuves pour donner l'a posteriori.",
    },
    da: `Probability: 7ssab l-ihtimal bin 0 w 1. 0 = mostahil, 1 = mou2akkad. Ma yimkench ykoun ihtimal 1.5 wla -0.2.
Given (sachant que): P(A | B) = ihtimal A ila 3rfna dija B w9a3. L-ihtimal kat-tbeddel 7asab l-ma3louma.
Independent: 7adathin mostaqillin = awel ma kay2atterch f t-tani. Lanc pièce dyal 3am-s ma kay2atterch 3la lanc dyal lyoum.`,
    r: {
      t: "Why Bayes' theorem is useful",
      en: "Suppose a medical test detects a rare disease. The test is accurate, but the disease affects only one person in a thousand. If your test is positive, is it certain that you are ill? Bayes' theorem shows that the answer is no. Because the disease is rare, many positive results are false alarms. The prior probability, which is the chance of the disease before the test, is very small. The test evidence increases it, but not to certainty. This kind of reasoning is essential in AI systems that make decisions under uncertainty.",
      fr: "Supposons qu'un test médical détecte une maladie rare. Le test est précis, mais la maladie touche seulement une personne sur mille. Si votre test est positif, est-il certain que vous êtes malade ? Le théorème de Bayes montre que la réponse est non. Comme la maladie est rare, beaucoup de résultats positifs sont de fausses alertes. La probabilité a priori, c'est-à-dire la chance d'avoir la maladie avant le test, est très petite. Le résultat du test l'augmente, mais pas jusqu'à la certitude. Ce type de raisonnement est essentiel dans les systèmes d'IA qui prennent des décisions dans l'incertitude.",
    },
    s: "Expliquez à voix haute avec 4 phrases la probabilité d'obtenir un nombre impair avec un dé : « There are … equally likely outcomes. … of them are odd. So the probability is … »",
    p: { tip: "« Probability » : accent sur « BIL » (prah-buh-BIL-uh-tee), 5 syllabes. « Variance » : VER-ee-uns. « Deviation » : dee-vee-AY-shn. « Odds » rime avec « gods ».", words: "probability,variance,independent,distribution,likelihood,posterior" },
    q: [
      ["What is the probability of an impossible event?", ["1", "0.5", "0", "−1"], 2, "Impossible = 0 ; certain = 1."],
      ["P(A | B) is read…", ["A and B", "the probability of A given B", "A or B", "A divided by B"], 1, "« A given B » : A sachant B."],
      ["Which statistic measures spread?", ["mean", "standard deviation", "median", "maximum"], 1, "L'écart-type mesure la dispersion."],
    ],
    rq: [
      ["How common is the disease in the text?", ["One in a thousand", "One in two", "Everyone"], 0, "« only one person in a thousand »."],
      ["Why are many positive results false alarms?", ["The disease is rare", "The test is broken", "Doctors are tired"], 0, "« Because the disease is rare »."],
    ],
    f: ["The probability to get six is one sixth.", "The probability of getting a six is one sixth.", "On dit « probability of + verbe-ing »."],
  },
  {
    id: "4-5",
    t: "Statistics and Optimization",
    fr: "Statistiques et optimisation",
    cat: "Mathematics",
    goal: "Décrire un échantillon, une corrélation et expliquer la descente de gradient en anglais.",
    w: `sample|échantillon|SAM-pl
population|population|pah-pyuh-LAY-shn
median|médiane|MEE-dee-un
mode|mode (valeur la plus fréquente)|mohd
percentile|centile|per-SEN-tyle
quartile|quartile|KWOR-tyle
outlier|valeur aberrante|OWT-lie-er
histogram|histogramme|HIS-tuh-gram
skewed|asymétrique|skyood
correlation|corrélation|kor-uh-LAY-shn
causation|causalité|kaw-ZAY-shn
covariance|covariance|koh-VER-ee-uns
confidence interval|intervalle de confiance|KAHN-fuh-duns IN-ter-vl
estimate|estimation, estimer|ES-tuh-mit
least squares|moindres carrés|leest skwairz
objective function|fonction objectif|ub-JEK-tiv FUNK-shn
loss function|fonction de perte|laws FUNK-shn
constraint|contrainte|kun-STRAYNT
gradient descent|descente de gradient|GRAY-dee-unt dih-SENT
learning rate|taux d'apprentissage|LER-ning rayt
convex|convexe|kahn-VEKS
convergence|convergence|kun-VER-jns
saddle point|point-selle|SAD-l poynt
stochastic|stochastique|stuh-KAS-tik
batch|lot (de données)|bach`,
    x: `We collected a sample of one thousand students.|Nous avons collecté un échantillon de mille étudiants.
There is an outlier in the data.|Il y a une valeur aberrante dans les données.
The median is more robust than the mean.|La médiane est plus robuste que la moyenne.
Correlation does not imply causation.|Corrélation n'implique pas causalité.
The two variables are strongly correlated.|Les deux variables sont fortement corrélées.
We want to minimize the loss function.|Nous voulons minimiser la fonction de perte.
The learning rate is too high.|Le taux d'apprentissage est trop élevé.
The algorithm has converged.|L'algorithme a convergé.
The loss decreases at each iteration.|La perte diminue à chaque itération.
The function is convex, so there is one global minimum.|La fonction est convexe, donc il y a un seul minimum global.`,
    d: [
      ["Outliers", `Sara: The mean salary looks very high. || Le salaire moyen paraît très élevé.
Omar: There is an outlier: one person earns a million. || Il y a une valeur aberrante : une personne gagne un million.
Sara: Use the median instead. It is more robust. || Utilise plutôt la médiane. Elle est plus robuste.
Omar: Good idea. Let me also draw a histogram. || Bonne idée. Je dessine aussi un histogramme.`],
      ["Learning rate", `Student: My loss is increasing instead of decreasing. || Ma perte augmente au lieu de diminuer.
Teacher: What is your learning rate? || Quel est ton taux d'apprentissage ?
Student: One point zero. || Un virgule zéro.
Teacher: That is too high. The steps are too large. Try zero point zero one. || C'est trop élevé. Les pas sont trop grands. Essaie zéro virgule zéro un.`],
    ],
    c: {
      en: "Statistics helps us learn about a population from a sample. The mean, the median and the mode describe the center of the data, while the variance describes the spread. An outlier is a value very different from the others, and the median is less sensitive to outliers than the mean. A correlation shows that two variables change together, but it does not prove causation. In optimization, we define a loss function that measures the error of a model, and we look for parameters that minimize it. Gradient descent repeats small steps against the gradient. The learning rate controls the size of each step.",
      fr: "Les statistiques nous aident à apprendre sur une population à partir d'un échantillon. La moyenne, la médiane et le mode décrivent le centre des données, tandis que la variance décrit la dispersion. Une valeur aberrante est très différente des autres et la médiane y est moins sensible que la moyenne. Une corrélation montre que deux variables évoluent ensemble, mais ne prouve pas la causalité. En optimisation, on définit une fonction de perte qui mesure l'erreur d'un modèle et on cherche les paramètres qui la minimisent. La descente de gradient répète de petits pas contre le gradient. Le taux d'apprentissage contrôle la taille de chaque pas.",
    },
    da: `Mean vs median: mean = l-moyenne (jam3 / 3dad). Median = l-qima li f l-wast mnin kay-tsallaf. Ila kayn salaire kbir bzzaf, l-median dyal-ha a7san.
Correlation ≠ causation: ila zouj hajat kayt-kharkou m3a ba3d, ma ya3nich waa7da hiya sabab t-tanya. (Bhal ice-cream w sharq chams.)
Learning rate: tul l-khotwa. Ila kbir bzzaf, tfout l-minimum. Ila sghir bzzaf, ghadi t-tul bzzaf.`,
    r: {
      t: "Gradient descent in one paragraph",
      en: "Gradient descent is the most important optimization method in machine learning. First, the model starts with random parameters. Then it measures the loss on a batch of data. Next, it computes the gradient, which shows how the loss changes when each parameter changes. Finally, it updates each parameter by a small step in the opposite direction. The size of the step depends on the learning rate. If the rate is too small, training is slow. If it is too large, the loss may oscillate or even increase. When the loss no longer decreases, we say that the algorithm has converged.",
      fr: "La descente de gradient est la méthode d'optimisation la plus importante en apprentissage automatique. D'abord, le modèle commence avec des paramètres aléatoires. Ensuite, il mesure la perte sur un lot de données. Puis il calcule le gradient, qui montre comment la perte change quand chaque paramètre change. Enfin, il met à jour chaque paramètre par un petit pas dans la direction opposée. La taille du pas dépend du taux d'apprentissage. Si le taux est trop petit, l'entraînement est lent. S'il est trop grand, la perte peut osciller ou même augmenter. Quand la perte ne diminue plus, on dit que l'algorithme a convergé.",
    },
    s: "Expliquez à voix haute la descente de gradient en 5 étapes (« First, … Then, … Next, … Finally, … ») puis dites ce qui se passe si le learning rate est trop grand.",
    p: { tip: "« Median » : MEE-dee-un. « Percentile » : per-SEN-tyle. « Stochastic » : stuh-KAS-tik, accent sur « KAS ». « Convex » : kahn-VEKS. « Correlation » : kor-uh-LAY-shn.", words: "correlation,median,stochastic,convergence,convex,percentile" },
    q: [
      ["Which statistic is robust to outliers?", ["mean", "median", "maximum", "sum"], 1, "La médiane ne change presque pas avec une valeur extrême."],
      ["If the learning rate is too large, the loss may…", ["converge faster always", "oscillate or increase", "become zero", "disappear"], 1, "Les pas trop grands dépassent le minimum."],
      ["Correlation between two variables…", ["proves causation", "does not prove causation", "means they are equal", "is always negative"], 1, "Corrélation n'implique pas causalité."],
    ],
    rq: [
      ["What does gradient descent update?", ["The parameters", "The data", "The computer"], 0, "« updates each parameter »."],
      ["When has the algorithm converged?", ["When the loss no longer decreases", "When it starts", "When the gradient is large"], 0, "« When the loss no longer decreases »."],
    ],
    f: ["The datas are correct.", "The data are correct. (or: The data is correct.)", "« Data » n'a pas de pluriel « datas » ; en anglais académique, « data are » et « data is » sont tous deux acceptés."],
  },
];
