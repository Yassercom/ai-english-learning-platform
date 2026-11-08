import type { RawLesson } from "../types";

export const m06: RawLesson[] = [
  {
    id: "6-1",
    t: "What Is Machine Learning?",
    fr: "Qu'est-ce que l'apprentissage automatique ?",
    cat: "ML",
    goal: "Définir le machine learning et distinguer les trois grandes familles d'apprentissage.",
    w: `machine learning|apprentissage automatique|muh-SHEEN LER-ning
artificial intelligence|intelligence artificielle|ar-tuh-FISH-ul in-TEL-uh-juns
model|modèle|MAH-dl
training|entraînement|TRAY-ning
to train|entraîner|too trayn
prediction|prédiction|prih-DIK-shn
to predict|prédire|too prih-DIKT
supervised learning|apprentissage supervisé|SOO-per-vyzd LER-ning
unsupervised learning|apprentissage non supervisé|un-SOO-per-vyzd LER-ning
reinforcement learning|apprentissage par renforcement|ree-in-FORS-munt LER-ning
labeled data|données étiquetées|LAY-bld DAY-tuh
training data|données d'entraînement|TRAY-ning DAY-tuh
inference|inférence (utilisation du modèle)|IN-fer-uns
hyperparameter|hyperparamètre|hie-per-puh-RAM-uh-ter
rule-based|à base de règles|rool-bayst
task|tâche|task
feedback|retour, rétroaction|FEED-bak
reward|récompense|rih-WORD
agent|agent|AY-junt
environment|environnement|in-VIE-run-munt
experience|expérience|ik-SPIR-ee-uns
performance|performance|per-FOR-muns
semi-supervised|semi-supervisé|SEM-ee SOO-per-vyzd
to improve|améliorer, s'améliorer|too im-PROOV
example|exemple|ig-ZAM-pl`,
    x: `The model learns from examples.|Le modèle apprend à partir d'exemples.
We train the model on labeled data.|Nous entraînons le modèle sur des données étiquetées.
This is a supervised learning problem.|C'est un problème d'apprentissage supervisé.
The model makes a prediction for each image.|Le modèle fait une prédiction pour chaque image.
We don't have labels, so we use unsupervised learning.|Nous n'avons pas d'étiquettes, donc nous utilisons l'apprentissage non supervisé.
The agent receives a reward.|L'agent reçoit une récompense.
The performance improves with more data.|La performance s'améliore avec plus de données.
What task do you want to solve?|Quelle tâche voulez-vous résoudre ?
Training takes several hours.|L'entraînement prend plusieurs heures.
Once trained, the model is used for inference.|Une fois entraîné, le modèle est utilisé pour l'inférence.`,
    d: [
      ["Types of learning", `Student: What is the difference between supervised and unsupervised learning? || Quelle est la différence entre apprentissage supervisé et non supervisé ?
Teacher: In supervised learning, every example has a label. || En apprentissage supervisé, chaque exemple a une étiquette.
Student: And in unsupervised learning? || Et en non supervisé ?
Teacher: There are no labels. The model looks for structure in the data. || Il n'y a pas d'étiquettes. Le modèle cherche une structure dans les données.`],
      ["Choosing an approach", `Omar: I want to predict house prices. || Je veux prédire des prix de maisons.
Sara: Do you have past prices? || As-tu des prix passés ?
Omar: Yes, for ten thousand houses. || Oui, pour dix mille maisons.
Sara: Then it is supervised learning. The prices are the labels. || Alors c'est de l'apprentissage supervisé. Les prix sont les étiquettes.`],
    ],
    c: {
      en: "Machine learning is a part of artificial intelligence in which computers learn patterns from data instead of following only fixed rules. A model is trained on examples and then makes predictions on new data. There are three main families. In supervised learning, the training data has labels, and the model learns to predict them. In unsupervised learning, there are no labels, and the model finds structure, for example groups. In reinforcement learning, an agent acts in an environment and learns from rewards. The use of a trained model on new data is called inference.",
      fr: "L'apprentissage automatique est une partie de l'intelligence artificielle dans laquelle les ordinateurs apprennent des motifs à partir de données au lieu de suivre uniquement des règles fixes. Un modèle est entraîné sur des exemples puis fait des prédictions sur de nouvelles données. Il existe trois grandes familles. En apprentissage supervisé, les données d'entraînement ont des étiquettes et le modèle apprend à les prédire. En apprentissage non supervisé, il n'y a pas d'étiquettes et le modèle trouve une structure, par exemple des groupes. En apprentissage par renforcement, un agent agit dans un environnement et apprend à partir de récompenses. L'utilisation d'un modèle entraîné sur de nouvelles données s'appelle l'inférence.",
    },
    da: `AI vs ML: AI = l-mijal l-kbir (7asoub dkiy). ML = tariqa mn turuq AI: l-machine kat-t3lem mn l-data, ma-kat-t3tich 9awa3id kolha.
Supervised / unsupervised: supervised = 3ndek l-jawab (label) — kat3lem l-machine b l-modal. Unsupervised = ma 3ndekch jawab, l-machine kat-lqa tajammo3at bola7dha.
Training vs inference: training = l-modèle kay-t3lem (ta9il, kay-akhod weqt). Inference = kat-sta3mlo men ba3d bach t-tnabba2.`,
    r: {
      t: "Arthur Samuel and the checkers program",
      en: "In 1959, the American researcher Arthur Samuel used the phrase machine learning to describe a computer program that played checkers. The program played thousands of games against itself and slowly improved. Samuel did not write every winning strategy by hand; he let the program discover which moves were good. This idea is still the heart of machine learning: instead of programming all the rules, we give examples, or experience, and the computer improves its performance on a task.",
      fr: "En 1959, le chercheur américain Arthur Samuel a utilisé l'expression « machine learning » pour décrire un programme informatique qui jouait aux dames. Le programme a joué des milliers de parties contre lui-même et s'est lentement amélioré. Samuel n'a pas écrit à la main chaque stratégie gagnante ; il a laissé le programme découvrir quels coups étaient bons. Cette idée est toujours au cœur de l'apprentissage automatique : au lieu de programmer toutes les règles, on donne des exemples, ou de l'expérience, et l'ordinateur améliore sa performance sur une tâche.",
    },
    s: "Expliquez à voix haute la différence entre supervisé, non supervisé et par renforcement en 3 phrases avec un exemple pour chacun : « In supervised learning, … For example, … »",
    p: { tip: "« Machine » : muh-SHEEN (le « ch » se prononce « sh »). « Intelligence » : in-TEL-uh-juns. « Reinforcement » : ree-in-FORS-munt. « Environment » : in-VIE-run-munt (le « n » du milieu est faible).", words: "machine,supervised,reinforcement,environment,inference,hyperparameter" },
    q: [
      ["Which type of learning uses labeled data?", ["Supervised", "Unsupervised", "Random", "None"], 0, "Supervisé = exemples avec bonnes réponses."],
      ["In reinforcement learning, an agent learns from…", ["labels", "rewards", "pictures only", "rules"], 1, "L'agent maximise des récompenses cumulées."],
      ["Inference means…", ["training a model", "using a trained model on new data", "collecting labels", "cleaning data"], 1, "L'inférence : phase d'utilisation du modèle."],
    ],
    rq: [
      ["In what year did Arthur Samuel use the phrase machine learning?", ["1959", "1989", "2009"], 0, "« In 1959 »."],
      ["How did the checkers program improve?", ["By playing against itself", "By reading books", "By being rewritten"], 0, "« played thousands of games against itself »."],
    ],
    f: ["The model learn from the examples.", "The model learns from the examples.", "3e personne du singulier : learn → learns."],
  },
  {
    id: "6-2",
    t: "Regression and Classification",
    fr: "Régression et classification",
    cat: "ML",
    goal: "Distinguer prédire un nombre et prédire une catégorie, et décrire une régression linéaire et logistique.",
    w: `regression|régression|rih-GRESH-n
classification|classification|klas-uh-fuh-KAY-shn
linear regression|régression linéaire|LIN-ee-er rih-GRESH-n
logistic regression|régression logistique|luh-JIS-tik rih-GRESH-n
target|variable cible|TAR-git
predictor|variable prédictive|prih-DIK-ter
residual|résidu|rih-ZIJ-oo-ul
to fit|ajuster|too fit
best-fit line|droite d'ajustement|best-fit line
decision boundary|frontière de décision|dih-SIZH-n BOWN-duh-ree
binary|binaire|BIE-nuh-ree
multiclass|multiclasse|MUL-tee-klas
classifier|classifieur|KLAS-uh-fie-er
sigmoid function|fonction sigmoïde|SIG-moyd FUNK-shn
probability score|score de probabilité|prah-buh-BIL-uh-tee skor
to assign|attribuer|too uh-SYNE
category|catégorie|KAT-uh-gor-ee
spam filter|filtre anti-spam|spam FIL-ter
to estimate|estimer|too ES-tuh-mayt
relationship|relation|rih-LAY-shn-ship
to extrapolate|extrapoler|too ik-STRAP-uh-layt
to interpolate|interpoler|too in-TER-puh-layt
prediction error|erreur de prédiction|prih-DIK-shn ER-er
numeric|numérique|noo-MEH-rik
outcome|résultat|OWT-kum`,
    x: `We want to predict a number, so this is regression.|Nous voulons prédire un nombre, donc c'est de la régression.
We want to predict a category, so this is classification.|Nous voulons prédire une catégorie, donc c'est de la classification.
The line fits the data well.|La droite s'ajuste bien aux données.
The residuals are small.|Les résidus sont petits.
The classifier assigns each email to a class.|Le classifieur attribue chaque e-mail à une classe.
Logistic regression outputs a probability.|La régression logistique donne une probabilité.
If the probability is above zero point five, we predict spam.|Si la probabilité dépasse zéro virgule cinq, nous prédisons spam.
Be careful when you extrapolate.|Faites attention quand vous extrapolez.
The target variable is the price.|La variable cible est le prix.
The model separates the two classes.|Le modèle sépare les deux classes.`,
    d: [
      ["Regression or classification?", `Teacher: Predicting tomorrow's temperature: regression or classification? || Prédire la température de demain : régression ou classification ?
Student: Regression, because the output is a number. || Régression, car la sortie est un nombre.
Teacher: And predicting whether it will rain? || Et prédire s'il va pleuvoir ?
Student: Classification, with two classes: rain or no rain. || Classification, avec deux classes : pluie ou pas de pluie.`],
      ["Reading a model output", `Omar: The model says zero point eight for spam. || Le modèle dit zéro virgule huit pour spam.
Sara: That is a probability score. What is your threshold? || C'est un score de probabilité. Quel est ton seuil ?
Omar: Zero point five. || Zéro virgule cinq.
Sara: Then the email is classified as spam. || Alors l'e-mail est classé comme spam.`],
    ],
    c: {
      en: "Supervised learning has two main tasks. In regression, the target is a number, such as a price or a temperature. In classification, the target is a category, such as spam or not spam. Linear regression fits a line to the data by minimizing the residuals, which are the differences between predictions and real values. Despite its name, logistic regression is used for classification: it applies a sigmoid function to produce a probability between zero and one. If the probability is above a threshold, often 0.5, the model predicts the positive class. Extrapolating far outside the training range is risky.",
      fr: "L'apprentissage supervisé a deux tâches principales. En régression, la cible est un nombre, comme un prix ou une température. En classification, la cible est une catégorie, comme spam ou non spam. La régression linéaire ajuste une droite aux données en minimisant les résidus, qui sont les différences entre prédictions et valeurs réelles. Malgré son nom, la régression logistique sert à la classification : elle applique une fonction sigmoïde pour produire une probabilité entre zéro et un. Si la probabilité dépasse un seuil, souvent 0,5, le modèle prédit la classe positive. Extrapoler loin en dehors de la plage d'entraînement est risqué.",
    },
    da: `Regression vs classification: regression = jaweb raqm (taman, 7ara). Classification = jaweb fi2a (spam wla la, qotta wla kelb). Sou2al wa7ed: « wach l-jawab raqm wla fi2a? ».
Logistic regression: smitha « regression » walakin kat-dir classification! L-sigmoid kat7awwel ay raqm l ihtimal bin 0 w 1.
Extrapolate: tkhmen 3la qiyam khariej l-data li t3almti 3liha. Khatir. Modèle li t3lem 3la maisons mn 50 l 200 m² ma-3ndouch 7a9 y-9ol chi 7aja 3la 1000 m².`,
    r: {
      t: "Francis Galton and regression",
      en: "The word regression has a surprising origin. In the 1880s, the British scientist Francis Galton studied the heights of parents and children. He observed that very tall parents tended to have children who were tall, but usually a little less tall than their parents. The children's heights moved back toward the average. Galton called this regression toward the mean. Later, statisticians used the word regression for all methods that fit a line between variables, and machine learning inherited the name.",
      fr: "Le mot régression a une origine surprenante. Dans les années 1880, le scientifique britannique Francis Galton a étudié la taille des parents et des enfants. Il a observé que les parents très grands avaient tendance à avoir des enfants grands, mais généralement un peu moins grands que leurs parents. La taille des enfants revenait vers la moyenne. Galton a appelé cela régression vers la moyenne. Plus tard, les statisticiens ont utilisé le mot régression pour toutes les méthodes qui ajustent une droite entre des variables, et l'apprentissage automatique a hérité du nom.",
    },
    s: "Dites à voix haute 3 exemples de régression et 3 exemples de classification : « Predicting the price of a car is … because the output is … Detecting spam is … because the output is … »",
    p: { tip: "« Regression » : rih-GRESH-n (le « ss » devient « sh »). « Residual » : rih-ZIJ-oo-ul. « Classifier » : KLAS-uh-fie-er. « Sigmoid » : SIG-moyd. « Binary » : BIE-nuh-ree.", words: "regression,logistic,residual,classifier,binary,extrapolate" },
    q: [
      ["Predicting the price of a car is…", ["classification", "regression", "clustering", "reinforcement"], 1, "Le prix est un nombre continu : régression."],
      ["Logistic regression is mainly used for…", ["classification", "drawing", "sorting", "cleaning"], 0, "Malgré son nom, elle sert à classer."],
      ["Residuals are…", ["the features", "differences between predictions and real values", "the labels", "the parameters"], 1, "Résidu = valeur réelle − prédiction."],
    ],
    rq: [
      ["What did Galton study?", ["Heights of parents and children", "Weather", "Computers"], 0, "Première phrases après 1880s."],
      ["Where did children's heights tend to move?", ["Toward the average", "Far from the average", "To zero"], 0, "« moved back toward the average »."],
    ],
    f: ["The model predict a probability of zero point eight.", "The model predicts a probability of zero point eight.", "« The model » = it → verbe avec -s."],
  },
];
