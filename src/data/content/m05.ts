import type { RawLesson } from "../types";

export const m05: RawLesson[] = [
  {
    id: "5-1",
    t: "Data Collection and Types of Data",
    fr: "Collecte et types de données",
    cat: "Data Science",
    goal: "Décrire un jeu de données, ses variables et ses sources en anglais.",
    w: `dataset|jeu de données|DAY-tuh-set
data point|point de données|DAY-tuh poynt
observation|observation|ahb-zer-VAY-shn
feature|variable explicative, caractéristique|FEE-cher
label|étiquette, cible|LAY-bl
structured data|données structurées|STRUK-cherd DAY-tuh
unstructured data|données non structurées|un-STRUK-cherd DAY-tuh
categorical|catégoriel|kat-uh-GOR-uh-kl
numerical|numérique|noo-MEH-ruh-kl
ordinal|ordinal|OR-duh-nl
nominal|nominal|NAH-muh-nl
continuous|continu|kun-TIN-yoo-us
discrete|discret|dih-SKREET
survey|enquête, sondage|SER-vay
sensor|capteur|SEN-ser
web scraping|extraction de données web|web SKRAY-ping
source|source|sors
sampling|échantillonnage|SAM-pling
bias|biais|BIE-us
missing value|valeur manquante|MIS-ing VAL-yoo
time series|série temporelle|tyme SEER-eez
metadata|métadonnées|MEH-tuh-day-tuh
raw data|données brutes|raw DAY-tuh
to collect|collecter|too kuh-LEKT
to record|enregistrer|too rih-KORD`,
    x: `Where does this dataset come from?|D'où vient ce jeu de données ?
The dataset has ten thousand rows and twenty features.|Le jeu de données a dix mille lignes et vingt variables.
Which column is the label?|Quelle colonne est la cible ?
This feature is categorical.|Cette variable est catégorielle.
How was the data collected?|Comment les données ont-elles été collectées ?
The survey has two hundred responses.|L'enquête a deux cents réponses.
Some values are missing.|Certaines valeurs sont manquantes.
The sample is biased.|L'échantillon est biaisé.
Is this data public or private?|Ces données sont-elles publiques ou privées ?
We need more data.|Nous avons besoin de plus de données.`,
    d: [
      ["Describing a dataset", `Professor: Tell me about your dataset. || Parlez-moi de votre jeu de données.
Student: It contains fifty thousand reviews from an online store. || Il contient cinquante mille avis d'une boutique en ligne.
Professor: Is it structured? || Est-il structuré ?
Student: Partly. The ratings are numerical, but the reviews are unstructured text. || En partie. Les notes sont numériques, mais les avis sont du texte non structuré.`],
      ["Questioning the source", `Omar: Our model works well for young users only. || Notre modèle marche bien seulement pour les jeunes utilisateurs.
Sara: How was the data collected? || Comment les données ont-elles été collectées ?
Omar: By an online survey. || Par une enquête en ligne.
Sara: Then the sample is biased. Older people rarely answer online surveys. || Alors l'échantillon est biaisé. Les personnes âgées répondent rarement aux enquêtes en ligne.`],
    ],
    c: {
      en: "Data science starts with data. A dataset is a collection of observations, and each observation has features, which are its measured properties, and sometimes a label, which is the value we want to predict. Data can be structured, such as a table, or unstructured, such as text, images and audio. Numerical features can be continuous, like height, or discrete, like the number of children. Categorical features can be nominal, like color, or ordinal, like a rating from one to five. Data can come from surveys, sensors, databases and web scraping. Always ask who collected the data and whether the sample is biased.",
      fr: "La science des données commence par les données. Un jeu de données est une collection d'observations ; chaque observation a des variables (features), qui sont ses propriétés mesurées, et parfois une cible (label), qui est la valeur que l'on veut prédire. Les données peuvent être structurées, comme un tableau, ou non structurées, comme du texte, des images et de l'audio. Les variables numériques peuvent être continues, comme la taille, ou discrètes, comme le nombre d'enfants. Les variables catégorielles peuvent être nominales, comme la couleur, ou ordinales, comme une note de un à cinq. Les données peuvent venir d'enquêtes, de capteurs, de bases de données et d'extraction web. Demandez toujours qui a collecté les données et si l'échantillon est biaisé.",
    },
    da: `Feature vs label: feature = lma3lomat li 3ndna (l-3omr, l-ta7n...). Label = chnou bghina nt-tanabba2 bih (taman d dar). Feature = lmodkhal, label = lmokhraj.
Nominal vs ordinal: nominal = bla tartib (loun: a7mar, azraq). Ordinal = fih tartib (1 ... 5 njoum).
Bias: ila l-3ayyina ma-tmatalch l-kol (bhal sondage f internet gher l-chabab) = l-natija ghalta. Hadi nokta mouhimma.`,
    r: {
      t: "Data is never neutral",
      en: "In 2016, researchers noticed that some image datasets contained mostly photos from a few countries. A model trained on these photos recognized weddings from Europe and North America well, but made more mistakes with weddings from other regions. The problem was not the algorithm. It was the data. This example shows why data scientists must study the source, the collection method and the missing groups before training any model. A larger dataset is not always a better dataset, if it still represents only a part of the world.",
      fr: "En 2016, des chercheurs ont remarqué que certains jeux de données d'images contenaient surtout des photos de quelques pays. Un modèle entraîné sur ces photos reconnaissait bien les mariages d'Europe et d'Amérique du Nord, mais faisait plus d'erreurs avec les mariages d'autres régions. Le problème n'était pas l'algorithme. C'était les données. Cet exemple montre pourquoi les data scientists doivent étudier la source, la méthode de collecte et les groupes absents avant d'entraîner un modèle. Un jeu de données plus grand n'est pas toujours meilleur s'il ne représente toujours qu'une partie du monde.",
    },
    s: "Présentez à voix haute un jeu de données imaginaire (ex. des étudiants) : « My dataset has … rows. The features are … The label is … Some values are missing because … »",
    p: { tip: "« Categorical » : kat-uh-GOR-uh-kl. « Discrete » : dih-SKREET (« discreet » a la même prononciation). « Bias » : BIE-us. « Metadata » : MEH-tuh-day-tuh ou MEH-tuh-dah-tuh.", words: "dataset,categorical,discrete,sensor,survey,metadata" },
    q: [
      ["In a house price model, the price is the…", ["feature", "label", "survey", "sensor"], 1, "La valeur à prédire est la cible (label)."],
      ["A customer rating from 1 to 5 stars is…", ["nominal", "ordinal", "continuous", "unstructured"], 1, "Les étoiles ont un ordre : ordinal."],
      ["Which data is unstructured?", ["A spreadsheet", "A set of emails", "A table of ages", "A list of IDs"], 1, "Le texte libre n'est pas rangé en colonnes."],
    ],
    rq: [
      ["What was the real problem in the wedding example?", ["The data", "The algorithm", "The computer"], 0, "« The problem was not the algorithm. It was the data »."],
      ["Is a larger dataset always better?", ["Yes", "No, not if it represents only part of the world", "Only in 2016"], 1, "Voir la dernière phrase."],
    ],
    f: ["The informations are in the dataset.", "The information is in the dataset.", "« Information » est indénombrable : pas de pluriel, verbe au singulier."],
  },
  {
    id: "5-2",
    t: "Data Cleaning and Preprocessing",
    fr: "Nettoyage et prétraitement des données",
    cat: "Data Science",
    goal: "Décrire les étapes de nettoyage d'un jeu de données et les justifier.",
    w: `data cleaning|nettoyage de données|DAY-tuh KLEE-ning
duplicate|doublon|DOO-pluh-kut
to impute|imputer (remplacer)|too im-PYOOT
to drop|supprimer, retirer|too drahp
noise|bruit|noyz
inconsistent|incohérent|in-kun-SIS-tunt
normalization|normalisation|nor-muh-luh-ZAY-shn
standardization|standardisation|stan-der-duh-ZAY-shn
scaling|mise à l'échelle|SKAY-ling
encoding|encodage|en-KOH-ding
one-hot encoding|encodage one-hot|wun-haht en-KOH-ding
feature engineering|ingénierie des variables|FEE-cher en-juh-NIR-ing
feature selection|sélection de variables|FEE-cher sih-LEK-shn
to filter|filtrer|too FIL-ter
to merge|fusionner|too merj
to group|regrouper|too groop
to aggregate|agréger|too AG-rih-gayt
to reshape|remodeler|too ree-SHAYP
to parse|analyser (texte)|too pars
to rename|renommer|too ree-NAYM
typo|faute de frappe|TIE-poh
data leakage|fuite de données (statistique)|DAY-tuh LEE-kij
threshold|seuil|THRESH-hohld
valid|valide|VAL-id
format|format|FOR-mat`,
    x: `First, we remove the duplicates.|D'abord, nous supprimons les doublons.
We fill the missing values with the median.|Nous remplissons les valeurs manquantes avec la médiane.
Drop the rows with too many missing values.|Supprime les lignes avec trop de valeurs manquantes.
The dates are in different formats.|Les dates sont dans des formats différents.
We scale all features between zero and one.|Nous mettons toutes les variables à l'échelle entre zéro et un.
Convert categories into numbers with one-hot encoding.|Convertis les catégories en nombres avec l'encodage one-hot.
There is a typo in this column name.|Il y a une faute de frappe dans ce nom de colonne.
Merge the two tables on the user ID.|Fusionne les deux tables sur l'identifiant utilisateur.
Group the data by country.|Regroupe les données par pays.
Be careful: this causes data leakage.|Attention : cela cause une fuite de données.`,
    d: [
      ["Dirty data", `Sara: Look, the age column has negative values. || Regarde, la colonne âge a des valeurs négatives.
Omar: Those are errors. We should drop them or impute them. || Ce sont des erreurs. On devrait les supprimer ou les imputer.
Sara: I prefer to impute with the median. || Je préfère imputer avec la médiane.
Omar: Fine. Then we standardize the numerical features. || D'accord. Ensuite on standardise les variables numériques.`],
      ["Explaining preprocessing", `Professor: Why do you scale the features? || Pourquoi mettez-vous les variables à l'échelle ?
Student: Because salary is in thousands and age is below one hundred. || Parce que le salaire est en milliers et l'âge est en dessous de cent.
Student: Without scaling, the model gives too much weight to salary. || Sans mise à l'échelle, le modèle donne trop de poids au salaire.
Professor: Correct. And where do you compute the mean? || Exact. Et où calculez-vous la moyenne ?
Student: On the training set only, to avoid data leakage. || Sur l'ensemble d'entraînement seulement, pour éviter la fuite de données.`],
    ],
    c: {
      en: "Real data is messy. Data cleaning means finding and fixing problems such as duplicates, typos, inconsistent formats and missing values. For missing values, you can drop the rows or impute a value, for example the mean or the median. Preprocessing prepares the data for a model. Scaling puts features on similar ranges: normalization usually rescales values between zero and one, and standardization gives them a mean of zero and a standard deviation of one. Categorical features must be encoded as numbers, for instance with one-hot encoding. Be careful with data leakage: compute statistics only on the training data.",
      fr: "Les données réelles sont désordonnées. Le nettoyage consiste à trouver et corriger des problèmes comme les doublons, les fautes de frappe, les formats incohérents et les valeurs manquantes. Pour les valeurs manquantes, on peut supprimer les lignes ou imputer une valeur, par exemple la moyenne ou la médiane. Le prétraitement prépare les données pour un modèle. La mise à l'échelle place les variables sur des plages similaires : la normalisation ramène généralement les valeurs entre zéro et un, et la standardisation leur donne une moyenne de zéro et un écart-type de un. Les variables catégorielles doivent être encodées en nombres, par exemple avec l'encodage one-hot. Attention à la fuite de données : calculez les statistiques uniquement sur les données d'entraînement.",
    },
    da: `Impute: 3ammar l-qima l-nakissa b qima ma3qoula (l-moyenne wla l-median). Hit ila 7ayyedti l-ligne kamla, kat-khssr data.
Normalization vs standardization: normalization = kat7ett l-qiyam bin 0 w 1. Standardization = moyenne 0 w écart-type 1. Zouj kay-3awnou l-modèle.
Data leakage: ila tsta3mel ma3louma men test f training, l-natija ghadi tban mzyana walakin hiya kadba. « Test set » mamnou3 yt-chouf 9bel ma tkmel.`,
    r: {
      t: "80 percent of the work",
      en: "Data scientists often say that they spend most of their time cleaning data, not building models. This is not a waste. A model can only learn from the data that it receives. If the data contains errors, the model will learn these errors, a principle often summarized as garbage in, garbage out. A good data scientist writes each cleaning step in code, so that another person can repeat it. Every decision should be documented: why did we drop these rows, and why did we choose the median? Such notes make a project more trustworthy.",
      fr: "Les data scientists disent souvent qu'ils passent la plupart de leur temps à nettoyer les données, pas à construire des modèles. Ce n'est pas du temps perdu. Un modèle ne peut apprendre que des données qu'il reçoit. Si les données contiennent des erreurs, le modèle apprendra ces erreurs, un principe souvent résumé par « garbage in, garbage out » (déchets en entrée, déchets en sortie). Un bon data scientist écrit chaque étape de nettoyage dans le code afin qu'une autre personne puisse la répéter. Chaque décision doit être documentée : pourquoi avons-nous supprimé ces lignes, et pourquoi avons-nous choisi la médiane ? Ces notes rendent un projet plus fiable.",
    },
    s: "Expliquez à voix haute à un collègue comment vous nettoieriez un fichier contenant des doublons, des dates mal écrites et des valeurs manquantes : « First, I would … Then, … Finally, … because … »",
    p: { tip: "« Duplicate » (nom) : DOO-pluh-kut ; (verbe) : DOO-pluh-kayt. « Noise » : noyz. « Standardization » : 6 syllabes, accent sur « ZAY ». « Threshold » : THRESH-hohld (le « h » est prononcé).", words: "duplicate,normalization,threshold,aggregate,inconsistent,leakage" },
    q: [
      ["To impute a missing value means to…", ["delete the column", "fill it with a reasonable estimate", "copy the row", "ignore the model"], 1, "Imputer = remplacer par une valeur estimée."],
      ["Standardization gives features…", ["a mean of 0 and standard deviation of 1", "values between 0 and 1 only", "only integers", "random values"], 0, "Standardisation : moyenne 0, écart-type 1."],
      ["What is data leakage?", ["Losing a file", "Using information from the test set during training", "A power cut", "A copy of the dataset"], 1, "La fuite : le modèle « voit » des informations qu'il ne devrait pas voir."],
    ],
    rq: [
      ["What does « garbage in, garbage out » mean?", ["Bad data gives bad results", "Clean the office", "Delete old files"], 0, "Des données mauvaises produisent un mauvais modèle."],
      ["Why should cleaning steps be written in code?", ["So that others can repeat them", "To make the code longer", "To hide mistakes"], 0, "« so that another person can repeat it »."],
    ],
    f: ["We dropped the missing values rows.", "We dropped the rows with missing values.", "L'ordre des mots : « rows with missing values », pas une accumulation de noms."],
  },
  {
    id: "5-3",
    t: "Exploratory Analysis and Visualization",
    fr: "Analyse exploratoire et visualisation",
    cat: "Data Science",
    goal: "Choisir un graphique, le décrire et en tirer une conclusion en anglais.",
    w: `exploratory analysis|analyse exploratoire|ik-SPLOR-uh-tor-ee uh-NAL-uh-sis
summary statistics|statistiques descriptives|SUM-uh-ree stuh-TIS-tiks
scatter plot|nuage de points|SKAT-er plaht
bar chart|diagramme en barres|bar chart
line chart|courbe|line chart
box plot|boîte à moustaches|bahks plaht
heatmap|carte de chaleur|HEET-map
pie chart|diagramme circulaire|pie chart
pattern|motif, schéma|PAT-ern
insight|information utile, éclairage|IN-site
legend|légende|LEJ-und
axis label|étiquette d'axe|AK-sis LAY-bl
title|titre|TIE-tl
to plot|tracer|too plaht
to visualize|visualiser|too VIZH-oo-uh-lize
to compare|comparer|too kum-PAIR
dashboard|tableau de bord|DASH-bord
cluster|groupe, amas|KLUS-ter
seasonality|saisonnalité|see-zuh-NAL-uh-tee
spike|pic soudain|spike
gap|écart, lacune|gap
misleading|trompeur|mis-LEE-ding
scale|échelle|skayl
range|étendue, plage|raynj
overview|aperçu|OH-ver-vyoo`,
    x: `Let's plot the data first.|Traçons d'abord les données.
This scatter plot shows a positive correlation.|Ce nuage de points montre une corrélation positive.
There is a clear upward trend.|Il y a une nette tendance à la hausse.
I notice a sudden spike in March.|Je remarque un pic soudain en mars.
The points form two distinct clusters.|Les points forment deux groupes distincts.
The y-axis does not start at zero.|L'axe y ne commence pas à zéro.
That chart is misleading.|Ce graphique est trompeur.
Add a title and axis labels.|Ajoute un titre et des étiquettes d'axes.
A box plot shows the median and the outliers.|Une boîte à moustaches montre la médiane et les valeurs aberrantes.
What insight can we draw from this graph?|Quelle information utile peut-on tirer de ce graphique ?`,
    d: [
      ["Choosing a chart", `Omar: Which chart should I use to compare sales by country? || Quel graphique dois-je utiliser pour comparer les ventes par pays ?
Sara: A bar chart. It is clear for categories. || Un diagramme en barres. C'est clair pour des catégories.
Omar: And for sales over time? || Et pour les ventes dans le temps ?
Sara: A line chart. You can see the trend and the seasonality. || Une courbe. On voit la tendance et la saisonnalité.`],
      ["Presenting a plot", `Student: This scatter plot compares study time and exam score. || Ce nuage de points compare le temps d'étude et la note d'examen.
Student: There is a positive correlation, but also two outliers. || Il y a une corrélation positive, mais aussi deux valeurs aberrantes.
Professor: What can we conclude? || Que peut-on conclure ?
Student: That study time is associated with higher scores, but we cannot prove causation. || Que le temps d'étude est associé à de meilleures notes, mais on ne peut pas prouver la causalité.`],
    ],
    c: {
      en: "Exploratory data analysis, or EDA, means looking at the data before modeling. You compute summary statistics and you create visualizations to discover patterns, clusters, trends and outliers. Choose the right chart: a bar chart compares categories, a line chart shows change over time, a scatter plot shows the relationship between two numerical variables, a histogram shows a distribution, and a box plot shows the median and the outliers. A good chart has a clear title, labeled axes and a legend. Beware of misleading charts, for example when the axis does not start at zero.",
      fr: "L'analyse exploratoire des données, ou EDA, consiste à regarder les données avant de modéliser. On calcule des statistiques descriptives et on crée des visualisations pour découvrir des motifs, des groupes, des tendances et des valeurs aberrantes. Choisissez le bon graphique : un diagramme en barres compare des catégories, une courbe montre l'évolution dans le temps, un nuage de points montre la relation entre deux variables numériques, un histogramme montre une distribution et une boîte à moustaches montre la médiane et les valeurs aberrantes. Un bon graphique a un titre clair, des axes étiquetés et une légende. Méfiez-vous des graphiques trompeurs, par exemple quand l'axe ne commence pas à zéro.",
    },
    da: `Quel graphique: Catégories = bar chart. Temps = line chart. Relation bin zouj mtghayyirat = scatter plot. Distribution = histogram.
Misleading chart: ila l-mehwar ma-kaybdach mn 0, l-far9 kay-dhhar kbir 3la ghayr l-7a9i9a. Dima choof l-axes.
Insight: machi gher raqm; hiya fahm mofid men l-data (mital: « l-mabi3at kat-zid f ramadan »).`,
    r: {
      t: "Anscombe's quartet",
      en: "In 1973, the statistician Francis Anscombe created four small datasets. They have almost the same mean, the same variance and the same correlation. If you only look at the summary statistics, they seem identical. But when you plot them, they look completely different: one is a line, one is a curve, one has an outlier and one has a vertical pattern. This famous example teaches a simple lesson: always visualize your data. Numbers can hide important patterns, and a graph can reveal them in a few seconds.",
      fr: "En 1973, le statisticien Francis Anscombe a créé quatre petits jeux de données. Ils ont presque la même moyenne, la même variance et la même corrélation. Si l'on regarde seulement les statistiques descriptives, ils semblent identiques. Mais quand on les trace, ils sont complètement différents : l'un est une droite, l'autre une courbe, un autre a une valeur aberrante et un autre a un motif vertical. Cet exemple célèbre enseigne une leçon simple : visualisez toujours vos données. Les nombres peuvent cacher des motifs importants, et un graphique peut les révéler en quelques secondes.",
    },
    s: "Choisissez un graphique que vous connaissez (météo, football, bourse). Décrivez-le à voix haute en 5 phrases : « This chart shows … The highest point is … There is a trend … One insight is … »",
    p: { tip: "« Exploratory » : accent sur « SPLOR » (ik-SPLOR-uh-tor-ee). « Seasonality » : see-zuh-NAL-uh-tee. « Heatmap » : HEET-map. « Scatter » : le « a » est ouvert comme dans « cat ».", words: "exploratory,seasonality,cluster,legend,misleading,insight" },
    q: [
      ["Which chart is best to show change over time?", ["Pie chart", "Line chart", "Box plot", "Table"], 1, "La courbe montre la tendance dans le temps."],
      ["A misleading chart can be caused by…", ["a clear title", "an axis that does not start at zero", "a legend", "a large dataset"], 1, "Un axe tronqué exagère les différences."],
      ["What does a scatter plot show?", ["The relationship between two numerical variables", "A list of names", "A percentage of one total", "A map"], 0, "Chaque point = une observation avec deux valeurs."],
    ],
    rq: [
      ["What is the lesson of Anscombe's quartet?", ["Always visualize your data", "Never use means", "Datasets are always identical"], 0, "« always visualize your data »."],
      ["In what year did Anscombe create the datasets?", ["1973", "1999", "2010"], 0, "« In 1973 »."],
    ],
    f: ["This graph show a upward trend.", "This graph shows an upward trend.", "3e personne → « shows » ; devant une voyelle → « an »."],
  },
];
