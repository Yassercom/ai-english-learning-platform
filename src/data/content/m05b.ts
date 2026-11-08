import type { RawLesson } from "../types";

export const m05b: RawLesson[] = [
  {
    id: "5-4",
    t: "Statistical Inference and Hypothesis Testing",
    fr: "Inférence statistique et tests d'hypothèses",
    cat: "Data Science",
    goal: "Formuler une hypothèse, interpréter une p-value et décrire un test A/B.",
    w: `hypothesis|hypothèse|hie-PAH-thuh-sis
null hypothesis|hypothèse nulle|nul hie-PAH-thuh-sis
alternative hypothesis|hypothèse alternative|awl-TER-nuh-tiv hie-PAH-thuh-sis
significance level|seuil de signification|sig-NIF-ih-kuns LEV-l
p-value|valeur p|PEE-val-yoo
to reject|rejeter|too rih-JEKT
statistically significant|statistiquement significatif|stuh-TIS-tik-lee sig-NIF-ih-kunt
test statistic|statistique de test|test stuh-TIS-tik
t-test|test t|TEE-test
chi-square test|test du khi-deux|kie-skwair test
A/B test|test A/B|ay-BEE test
control group|groupe témoin|kun-TROHL groop
treatment group|groupe traité|TREET-munt groop
effect size|taille d'effet|ih-FEKT size
sample size|taille d'échantillon|SAM-pl size
margin of error|marge d'erreur|MAR-jin uv ER-er
Type I error|erreur de type I|tipe wun ER-er
Type II error|erreur de type II|tipe too ER-er
power|puissance (statistique)|POW-er
to infer|inférer, déduire|too in-FER
to generalize|généraliser|too JEN-ruh-lize
randomization|randomisation|ran-duh-muh-ZAY-shn
to replicate|reproduire (une étude)|too REP-luh-kayt
confounding variable|variable de confusion|kun-FOWN-ding VER-ee-uh-bl
evidence|preuve, indice|EV-uh-duns`,
    x: `Our null hypothesis is that there is no difference.|Notre hypothèse nulle est qu'il n'y a pas de différence.
The p-value is below zero point zero five.|La valeur p est inférieure à zéro virgule zéro cinq.
We reject the null hypothesis.|Nous rejetons l'hypothèse nulle.
The result is statistically significant.|Le résultat est statistiquement significatif.
The sample size is too small.|La taille d'échantillon est trop petite.
We ran an A/B test on the website.|Nous avons fait un test A/B sur le site web.
Users were randomly assigned to two groups.|Les utilisateurs ont été répartis aléatoirement en deux groupes.
The effect is significant but very small.|L'effet est significatif mais très faible.
There may be a confounding variable.|Il peut y avoir une variable de confusion.
Can we replicate this result?|Peut-on reproduire ce résultat ?`,
    d: [
      ["Interpreting a p-value", `Student: The p-value is zero point zero three. || La valeur p est zéro virgule zéro trois.
Professor: What does that mean? || Qu'est-ce que cela signifie ?
Student: If the null hypothesis were true, such a result would be unlikely. || Si l'hypothèse nulle était vraie, un tel résultat serait peu probable.
Professor: Good. So what do we decide? || Bien. Alors que décidons-nous ?`],
      ["Planning an A/B test", `Omar: We want to test a new button color. || Nous voulons tester une nouvelle couleur de bouton.
Sara: Divide the users randomly into a control group and a treatment group. || Divise les utilisateurs aléatoirement en un groupe témoin et un groupe traité.
Omar: How many users do we need? || De combien d'utilisateurs avons-nous besoin ?
Sara: It depends on the effect size we want to detect. || Cela dépend de la taille d'effet que nous voulons détecter.`],
    ],
    c: {
      en: "Inference means drawing conclusions about a population from a sample. In a hypothesis test, we start with a null hypothesis, which usually says that there is no effect or no difference, and an alternative hypothesis. We compute a test statistic and a p-value: the probability of seeing a result at least as extreme as ours, if the null hypothesis is true. If the p-value is smaller than the significance level, often 0.05, we reject the null hypothesis. A small p-value does not prove that the effect is large or important. Randomization, a control group and a large enough sample size make an experiment more reliable.",
      fr: "L'inférence consiste à tirer des conclusions sur une population à partir d'un échantillon. Dans un test d'hypothèse, on commence par une hypothèse nulle, qui dit généralement qu'il n'y a pas d'effet ou pas de différence, et une hypothèse alternative. On calcule une statistique de test et une valeur p : la probabilité d'observer un résultat au moins aussi extrême que le nôtre si l'hypothèse nulle est vraie. Si la valeur p est inférieure au seuil de signification, souvent 0,05, on rejette l'hypothèse nulle. Une petite valeur p ne prouve pas que l'effet est grand ou important. La randomisation, un groupe témoin et une taille d'échantillon suffisante rendent une expérience plus fiable.",
    },
    da: `P-value: machi « ihtimal an l-fard-iya s-sahiha ». Hiya ihtimal tchouf natija bhal hadi (wla aktar) ila l-null hypothesis hiya s-sa7iha.
Null hypothesis: dima kat9ol « ma kayn la far9 la ta2thir ». Ila p < 0.05, kan-rfdou-ha. Ma-kan9olch « kan-9bel l-hypothèse alternative b l-yaqin ».
A/B test: kat9sem n-nass 3chwa2iyan l zouj jam3at: A (l-ma3ruf) w B (jdid), w kat9arn l-natija.`,
    r: {
      t: "Why p-values are often misunderstood",
      en: "In 2016, the American Statistical Association published a statement about p-values because many scientists used them incorrectly. The statement explains that a p-value does not measure the probability that the hypothesis is true. It also says that a conclusion should not depend only on whether a p-value passes the threshold of 0.05. Researchers should report the effect size, the sample size and the uncertainty. This is one reason why replication, repeating an experiment to check the result, is so important in science.",
      fr: "En 2016, l'American Statistical Association a publié une déclaration sur les valeurs p parce que beaucoup de scientifiques les utilisaient incorrectement. La déclaration explique qu'une valeur p ne mesure pas la probabilité que l'hypothèse soit vraie. Elle dit aussi qu'une conclusion ne devrait pas dépendre uniquement du fait qu'une valeur p passe le seuil de 0,05. Les chercheurs devraient rapporter la taille d'effet, la taille d'échantillon et l'incertitude. C'est l'une des raisons pour lesquelles la réplication, répéter une expérience pour vérifier le résultat, est si importante en science.",
    },
    s: "Expliquez à voix haute un test A/B imaginaire : « We want to compare … We split the users into … The null hypothesis is … If the p-value is below 0.05, we … »",
    p: { tip: "« Hypothesis » : hie-PAH-thuh-sis, accent sur « PAH » ; le pluriel est « hypotheses » (hie-PAH-thuh-seez). « Significant » : sig-NIF-ih-kunt. « Evidence » : EV-uh-duns.", words: "hypothesis,significant,randomization,evidence,replicate,confounding" },
    q: [
      ["If p < 0.05 and α = 0.05, we usually…", ["accept the alternative as certain", "reject the null hypothesis", "stop the experiment", "double the sample"], 1, "On rejette H0 ; cela ne rend pas H1 certaine."],
      ["What is a control group?", ["The group that gets the new treatment", "The group that does not get the treatment", "A group of statisticians", "The largest group"], 1, "Le groupe témoin sert de référence."],
      ["A p-value measures…", ["the probability that the hypothesis is true", "the probability of such a result if H0 is true", "the size of the effect", "the sample size"], 1, "C'est la probabilité du résultat sous H0."],
    ],
    rq: [
      ["Who published the statement about p-values?", ["The American Statistical Association", "A video game company", "A school"], 0, "Première phrase du texte."],
      ["What should researchers also report?", ["Effect size and uncertainty", "Only the p-value", "Nothing"], 0, "« report the effect size, the sample size and the uncertainty »."],
    ],
    f: ["The result is significative.", "The result is significant.", "L'adjectif anglais est « significant » (faux ami : « significatif »)."],
  },
  {
    id: "5-5",
    t: "Tools, Pipelines and Communicating Results",
    fr: "Outils, pipelines et communication des résultats",
    cat: "Data Science",
    goal: "Décrire un flux de travail data, utiliser le vocabulaire des notebooks et présenter des résultats à un public non technique.",
    w: `notebook|carnet interactif (notebook)|NOHT-book
DataFrame|DataFrame (tableau de données pandas)|DAY-tuh-fraym
spreadsheet|tableur|SPRED-sheet
report|rapport|rih-PORT
stakeholder|partie prenante|STAYK-hohl-der
key finding|résultat clé|kee FINE-ding
recommendation|recommandation|rek-uh-mun-DAY-shn
reproducible|reproductible|ree-pruh-DOO-suh-bl
version control|gestion de versions|VER-zhn kun-TROHL
workflow|flux de travail|WERK-floh
pipeline|chaîne de traitement|PIPE-line
ETL (extract, transform, load)|ETL (extraire, transformer, charger)|EE-tee-EL
data warehouse|entrepôt de données|DAY-tuh WER-hows
SQL join|jointure SQL|ES-kyoo-EL joyn
to automate|automatiser|too AW-tuh-mayt
to document|documenter|too DAH-kyuh-ment
storytelling|narration (de données)|STOR-ee-tel-ing
takeaway|point à retenir|TAYK-uh-way
limitation|limite, limitation|lim-ih-TAY-shn
assumption|hypothèse de travail|uh-SUMP-shn
reliable|fiable|rih-LIE-uh-bl
to summarize|résumer|too SUM-uh-rize
audience|public|AW-dee-uns
jargon|jargon|JAR-gun
actionable|exploitable, concret|AK-shuh-nuh-bl`,
    x: `I wrote the analysis in a notebook.|J'ai écrit l'analyse dans un notebook.
Load the CSV file into a DataFrame.|Charge le fichier CSV dans un DataFrame.
Is the analysis reproducible?|L'analyse est-elle reproductible ?
Our pipeline runs every night.|Notre pipeline s'exécute chaque nuit.
Let me summarize the key findings.|Laissez-moi résumer les résultats clés.
Avoid jargon with a non-technical audience.|Évitez le jargon avec un public non technique.
My recommendation is to launch the new version.|Ma recommandation est de lancer la nouvelle version.
This study has several limitations.|Cette étude a plusieurs limites.
We assume that the data is representative.|Nous supposons que les données sont représentatives.
The main takeaway is simple.|Le point principal à retenir est simple.`,
    d: [
      ["Explaining a pipeline", `Manager: How does your pipeline work? || Comment fonctionne votre pipeline ?
Analyst: First, it extracts the data from the database. || D'abord, il extrait les données de la base de données.
Analyst: Then it cleans and transforms the data, and loads the result into a warehouse. || Ensuite il nettoie et transforme les données, puis charge le résultat dans un entrepôt.
Manager: Is it automated? || Est-ce automatisé ?
Analyst: Yes, it runs every night. || Oui, il s'exécute chaque nuit.`],
      ["Presenting to non-experts", `Student: Our model predicts which customers will leave. || Notre modèle prédit quels clients vont partir.
Manager: What should we do with this information? || Que devons-nous faire de cette information ?
Student: My recommendation is to offer a discount to the top ten percent at risk. || Ma recommandation est d'offrir une réduction aux dix pour cent les plus à risque.
Manager: Clear and actionable. What are the limitations? || Clair et concret. Quelles sont les limites ?`],
    ],
    r: {
      t: "Telling a story with data",
      en: "A data scientist must be able to explain results to people who are not experts. A good presentation has three parts. First, state the question that you wanted to answer. Second, show the most important evidence with one or two clear charts. Third, give a recommendation and mention the limitations honestly. Avoid jargon and long lists of numbers. A manager rarely needs to know every technical detail, but must know what the result means and what decision to take. The best analysis is useless if nobody understands it.",
      fr: "Un data scientist doit pouvoir expliquer les résultats à des personnes qui ne sont pas expertes. Une bonne présentation comporte trois parties. D'abord, énoncez la question à laquelle vous vouliez répondre. Ensuite, montrez les preuves les plus importantes avec un ou deux graphiques clairs. Enfin, donnez une recommandation et mentionnez honnêtement les limites. Évitez le jargon et les longues listes de chiffres. Un responsable a rarement besoin de connaître chaque détail technique, mais doit savoir ce que le résultat signifie et quelle décision prendre. La meilleure analyse est inutile si personne ne la comprend.",
    },
    c: {
      en: "A data science project follows a workflow: collect data, clean it, explore it, build a model, evaluate it and communicate the results. Many people work in notebooks, where code, charts and explanations are in the same document. Libraries such as pandas store tables in a DataFrame. For repeated tasks, engineers build a pipeline that extracts, transforms and loads the data automatically. Good practice includes version control and documentation, so that the work is reproducible. Finally, communication matters: summarize the key findings, give a clear recommendation, avoid jargon and explain the limitations of your analysis.",
      fr: "Un projet de science des données suit un flux de travail : collecter les données, les nettoyer, les explorer, construire un modèle, l'évaluer et communiquer les résultats. Beaucoup travaillent dans des notebooks, où le code, les graphiques et les explications sont dans le même document. Des bibliothèques comme pandas stockent les tableaux dans un DataFrame. Pour les tâches répétées, les ingénieurs construisent un pipeline qui extrait, transforme et charge les données automatiquement. Les bonnes pratiques incluent la gestion de versions et la documentation, afin que le travail soit reproductible. Enfin, la communication compte : résumez les résultats clés, donnez une recommandation claire, évitez le jargon et expliquez les limites de votre analyse.",
    },
    da: `Pipeline: sar-sra d l-khidma: data tkhrej mn mkan, tt-nqa, ttbeddel, tt7ett f mkan akhor — kolchi automatic, bla ma tdir b yeddik kol marra.
Reproducible: wa7ed akhor y9der ydir nafs l-khidma w ylqa nafs n-natija. Bach hadchi, kteb l-code w l-versions.
Jargon: klimat tiqniya li ghir l-khbra'a kay-fhmou-ha. Mea l-mudir, 9ol « the model predicts which customers will leave », machi « the classifier minimizes cross-entropy ».`,
    s: "Entraînez-vous : présentez à voix haute un résultat à un manager en 4 phrases : « We wanted to answer … The main finding is … My recommendation is … One limitation is … »",
    p: { tip: "« Reproducible » : ree-pruh-DOO-suh-bl. « Stakeholder » : STAYK-hohl-der. « Workflow » : WERK-floh. « Jargon » : JAR-gun. « Pipeline » : PIPE-line (accent sur PIPE).", words: "stakeholder,reproducible,pipeline,limitation,actionable,recommendation" },
    q: [
      ["What does ETL stand for?", ["Extract, Transform, Load", "Evaluate, Test, Launch", "Encode, Train, Learn", "Export, Transfer, Link"], 0, "ETL : extraire, transformer, charger."],
      ["Why is a notebook useful?", ["It combines code, charts and explanations", "It makes a computer faster", "It stores videos", "It replaces a database"], 0, "Notebook = document interactif tout-en-un."],
      ["With a non-technical audience you should…", ["use a lot of jargon", "avoid jargon and give a clear recommendation", "show only code", "skip the conclusion"], 1, "Adaptez-vous au public."],
    ],
    rq: [
      ["How many parts does a good presentation have?", ["Three", "Five", "Ten"], 0, "« three parts »."],
      ["What should you mention honestly?", ["The limitations", "Your salary", "The weather"], 0, "« mention the limitations honestly »."],
    ],
    f: ["The analysis is reproductible.", "The analysis is reproducible.", "Orthographe : « reproducible » (-ible), pas « reproductible »."],
  },
];
