import type { RawLesson } from "../types";

export const m12: RawLesson[] = [
  {
    id: "12-1",
    t: "Reading a Scientific Paper",
    fr: "Lire un article scientifique",
    cat: "Research & Ethics",
    goal: "Repérer la structure d'un article, lire efficacement un abstract et évaluer les affirmations.",
    w: `abstract|résumé (d'article)|AB-strakt
introduction|introduction|in-truh-DUK-shn
related work|travaux connexes|rih-LAY-tid werk
methodology|méthodologie|meth-uh-DAH-luh-jee
experiment|expérience|ik-SPER-uh-munt
results|résultats|rih-ZULTS
discussion|discussion|dis-KUSH-n
conclusion|conclusion|kun-KLOO-zhn
limitation|limite|lim-uh-TAY-shn
future work|travaux futurs|FYOO-cher werk
reference|référence|REF-runs
peer review|évaluation par les pairs|peer rih-VYOO
preprint|prépublication|PREE-print
arXiv|arXiv (archive de prépublications)|AR-kive
journal|revue scientifique|JER-nl
conference|conférence|KAHN-fer-uns
proceedings|actes (de conférence)|PROH-see-dingz
contribution|contribution|kahn-truh-BYOO-shn
novelty|nouveauté|NAH-vl-tee
to propose|proposer|too pruh-POHZ
to outperform|surpasser|too owt-per-FORM
supplementary material|matériel supplémentaire|sup-luh-MEN-tuh-ree muh-TEER-ee-ul
to skim|parcourir rapidement|too skim
figure|figure|FIG-yer
claim|affirmation|klaym`,
    x: `In this paper, we propose a new method.|Dans cet article, nous proposons une nouvelle méthode.
The main contribution is a faster algorithm.|La principale contribution est un algorithme plus rapide.
Our model outperforms the baseline.|Notre modèle surpasse la référence.
The results are shown in Table two.|Les résultats sont montrés dans le Tableau deux.
The authors acknowledge several limitations.|Les auteurs reconnaissent plusieurs limites.
This is a preprint, so it is not peer-reviewed yet.|C'est une prépublication, donc elle n'est pas encore évaluée par les pairs.
Let me skim the abstract first.|Laisse-moi d'abord parcourir le résumé.
Is the claim supported by evidence?|L'affirmation est-elle soutenue par des preuves ?
See the supplementary material for details.|Voir le matériel supplémentaire pour les détails.
I'd like to discuss the experimental setup.|J'aimerais discuter du dispositif expérimental.`,
    d: [
      ["How to read a paper", `Student: I find research papers very difficult. || Je trouve les articles de recherche très difficiles.
Professor: Don't read from the first word to the last. Start with the abstract. || Ne lisez pas du premier au dernier mot. Commencez par le résumé.
Student: And then? || Et ensuite ?
Professor: Look at the figures, the results and the conclusion. Then read the method in detail. || Regardez les figures, les résultats et la conclusion. Puis lisez la méthode en détail.`],
      ["Journal club discussion", `Omar: The paper claims a ten percent improvement. || L'article affirme une amélioration de dix pour cent.
Sara: Compared to which baseline? || Par rapport à quelle référence ?
Omar: An older model from 2018. || Un modèle plus ancien de 2018.
Sara: Then I'd like to see a comparison with more recent methods. || Alors j'aimerais voir une comparaison avec des méthodes plus récentes.`],
    ],
    c: {
      en: "Most scientific papers have the same structure: abstract, introduction, related work, methodology, experiments, results, discussion and conclusion. Do not read in a linear way. First, read the title and the abstract, which summarize the problem, the method and the main results. Then look at the figures and tables. Next, read the introduction to understand the contribution and the conclusion to see the limitations. Read the method only when you need the details. A critical reader asks: what is the claim, what is the evidence, what is the baseline, and are the experiments fair? Preprints on arXiv are not peer-reviewed, so be careful.",
      fr: "La plupart des articles scientifiques ont la même structure : résumé, introduction, travaux connexes, méthodologie, expériences, résultats, discussion et conclusion. Ne lisez pas de façon linéaire. D'abord, lisez le titre et le résumé, qui résument le problème, la méthode et les principaux résultats. Ensuite, regardez les figures et les tableaux. Puis lisez l'introduction pour comprendre la contribution et la conclusion pour voir les limites. Lisez la méthode seulement quand vous avez besoin des détails. Un lecteur critique demande : quelle est l'affirmation, quelle est la preuve, quelle est la référence de comparaison, et les expériences sont-elles équitables ? Les prépublications sur arXiv ne sont pas évaluées par les pairs, soyez donc prudent.",
    },
    da: `Abstract: moulakhkhas men 150-250 klima. Ila ma-3jebkch l-abstract, 3adatan ma-kaynch 3lach tkmmel l-maqal. 9rah lowel dima.
Baseline: l-modèle li kay-9arnouh bih. Ila ma-kaynch baseline mzyan, « 10% a7sen » ma-ykhssouch ma3na.
Preprint: maqal ma-t9bbelch men l-mohakkimin (peer review). Mouhim bach t-3rf l-far9 bin maqal « confirmed » w maqal jdid.`,
    r: {
      t: "Adam: a method for stochastic optimization",
      en: "In 2014, Diederik Kingma and Jimmy Ba posted a paper on arXiv called Adam: A Method for Stochastic Optimization, later presented at the ICLR conference in 2015. The paper proposes an optimizer that adapts the learning rate for each parameter using estimates of the first and second moments of the gradients. The authors compare Adam with other optimizers on several tasks and show that it works well in practice. Today Adam is one of the most used optimizers in deep learning, which makes the paper a good example of a clear contribution with a practical impact. The paper also gives mathematical analysis, which advanced readers can study.",
      fr: "En 2014, Diederik Kingma et Jimmy Ba ont posté sur arXiv un article intitulé Adam: A Method for Stochastic Optimization, présenté ensuite à la conférence ICLR en 2015. L'article propose un optimiseur qui adapte le taux d'apprentissage pour chaque paramètre à l'aide d'estimations des moments d'ordre un et deux des gradients. Les auteurs comparent Adam à d'autres optimiseurs sur plusieurs tâches et montrent qu'il fonctionne bien en pratique. Aujourd'hui, Adam est l'un des optimiseurs les plus utilisés en apprentissage profond, ce qui fait de cet article un bon exemple de contribution claire avec un impact pratique. L'article donne aussi une analyse mathématique, que les lecteurs avancés peuvent étudier.",
    },
    s: "Choisissez un article que vous connaissez (même fictif) et résumez-le à voix haute en 5 phrases : « The paper is about … The authors propose … They evaluate it on … The main result is … One limitation is … »",
    p: { tip: "« Abstract » (nom) : AB-strakt, accent sur la 1re syllabe. « Methodology » : meth-uh-DAH-luh-jee. « Proceedings » : proh-SEE-dingz. « Journal » : JER-nl. « Contribution » : kahn-truh-BYOO-shn. « Novelty » : NAH-vl-tee.", words: "abstract,methodology,proceedings,contribution,novelty,outperform" },
    q: [
      ["Where should you start when reading a paper?", ["Title and abstract", "The last reference", "The middle of the method", "The acknowledgments"], 0, "Vue d'ensemble d'abord."],
      ["A baseline is…", ["a method used for comparison", "the title", "a figure", "a journal"], 0, "Référence de comparaison."],
      ["A preprint is…", ["a paper not yet peer-reviewed", "a printed book", "a journal", "a reference"], 0, "Pas encore évalué par les pairs."],
    ],
    rq: [
      ["What does Adam adapt?", ["The learning rate for each parameter", "The number of layers", "The dataset"], 0, "Texte, 2e phrase."],
      ["Where was Adam presented?", ["ICLR 2015", "A newspaper", "A concert"], 0, "« presented at the ICLR conference in 2015 »."],
    ],
    f: ["The authors proposes a new method.", "The authors propose a new method.", "Sujet pluriel (the authors) → propose sans -s."],
  },
  {
    id: "12-2",
    t: "Academic Writing: Abstracts, Methods and Results",
    fr: "Rédaction académique : résumés, méthodes et résultats",
    cat: "Research & Ethics",
    goal: "Rédiger des phrases claires, prudentes et correctes dans un texte scientifique.",
    w: `to describe|décrire|too dih-SKRIBE
hedging|atténuation (précautions de langage)|HEJ-ing
passive voice|voix passive|PAS-iv vois
to demonstrate|démontrer|too DEM-un-strayt
significantly|de façon significative|sig-NIF-ih-kunt-lee
furthermore|de plus|FER-dher-mor
in contrast|en revanche|in KAHN-trast
consequently|par conséquent|KAHN-suh-kwent-lee
to conclude|conclure|too kun-KLOOD
plagiarism|plagiat|PLAY-juh-rizm
to paraphrase|reformuler|too PAIR-uh-frayz
acknowledgments|remerciements|ik-NAH-lij-munts
coherent|cohérent|koh-HIR-unt
concise|concis|kun-SISE
thesis|mémoire, thèse|THEE-sis
dissertation|mémoire (universitaire)|dis-er-TAY-shn
to proofread|relire et corriger|too PROOF-reed
draft|brouillon|draft
to revise|réviser, remanier|too rih-VIZE
reviewer comments|commentaires des relecteurs|rih-VYOO-er KAH-ments
rebuttal|réponse aux critiques|rih-BUT-l
to submit|soumettre|too sub-MIT
formatting|mise en forme|FOR-mat-ing
to suggest|suggérer|too sug-JEST
appear|sembler, apparaître|uh-PEER`,
    x: `This paper presents a novel approach to image classification.|Cet article présente une approche nouvelle de la classification d'images.
The data were collected from three hospitals.|Les données ont été collectées dans trois hôpitaux.
The results suggest that the method is effective.|Les résultats suggèrent que la méthode est efficace.
The difference is statistically significant.|La différence est statistiquement significative.
Furthermore, the model is faster.|De plus, le modèle est plus rapide.
In contrast, the baseline fails on small images.|En revanche, la référence échoue sur les petites images.
It appears that the effect depends on the size of the dataset.|Il semble que l'effet dépende de la taille du jeu de données.
Please proofread the draft before you submit it.|Merci de relire le brouillon avant de le soumettre.
We thank the reviewers for their helpful comments.|Nous remercions les relecteurs pour leurs commentaires utiles.
We paraphrase the source and cite it.|Nous reformulons la source et la citons.`,
    d: [
      ["Improving a sentence", `Student: I wrote: Our model is the best in the world. || J'ai écrit : Notre modèle est le meilleur du monde.
Professor: That is too strong. You need evidence and hedging. || C'est trop fort. Il faut des preuves et de l'atténuation.
Student: How about: Our model outperforms the baseline on three datasets? || Que diriez-vous de : Notre modèle surpasse la référence sur trois jeux de données ?
Professor: Better. You can add: which suggests that it is effective. || Mieux. Vous pouvez ajouter : ce qui suggère qu'il est efficace.`],
      ["Avoiding plagiarism", `Omar: Can I copy this paragraph and change a few words? || Puis-je copier ce paragraphe en changeant quelques mots ?
Sara: No, that is plagiarism. Paraphrase it with your own words and cite the source. || Non, c'est du plagiat. Reformule avec tes propres mots et cite la source.
Omar: What if I use an AI tool? || Et si j'utilise un outil d'IA ?
Sara: You are still responsible. Check the facts, cite real sources and follow your university's rules. || Tu restes responsable. Vérifie les faits, cite de vraies sources et suis les règles de ton université.`],
    ],
    c: {
      en: "Academic writing is clear, precise and careful. A good abstract states the problem, the method, the main results and the conclusion in a few sentences. In the methods section, authors often use the passive voice, as in the data were collected. In the results, they report numbers without exaggeration. Scientists use hedging verbs such as suggest, appear and may, because evidence rarely proves something completely. Linking words, such as furthermore, in contrast and consequently, make the text coherent. Plagiarism, which means using someone else's words or ideas without credit, is a serious offense: paraphrase, cite the source and proofread your final draft.",
      fr: "L'écriture académique est claire, précise et prudente. Un bon résumé présente le problème, la méthode, les principaux résultats et la conclusion en quelques phrases. Dans la section des méthodes, les auteurs utilisent souvent la voix passive, comme dans the data were collected. Dans les résultats, ils rapportent des nombres sans exagération. Les scientifiques utilisent des verbes d'atténuation comme suggest, appear et may, car les preuves démontrent rarement quelque chose complètement. Les mots de liaison, comme furthermore, in contrast et consequently, rendent le texte cohérent. Le plagiat, c'est-à-dire utiliser les mots ou idées de quelqu'un d'autre sans le mentionner, est une faute grave : reformulez, citez la source et relisez votre version finale.",
    },
    da: `Passive voice: f methods kan9olo « the data were collected » (tjem3at l-ma3lomat) machi « we collected the data »: l-fi3l machi l-fa3il howa l-mouhim. Walakin ma-t-khdem-ch l-passive f koll jomla.
Hedging: « suggest / may / appear » = « kay-7ayyel / ymken ». Mn l-amana l-3ilmiya ma t9olch « this proves ». 9ol « this suggests ».
Plagiarism: nsakh bla dikr l-masdar = sariqa 3ilmiya. Kayn tarjama? Ktbha b klamek, w dkor l-masdar. W AI ma-kay-3fik-ch mn l-mas2ouliya.`,
    r: {
      t: "Model Cards for Model Reporting",
      en: "In 2019, a group of researchers including Margaret Mitchell and Timnit Gebru published a paper called Model Cards for Model Reporting at the FAT* conference. They proposed that every machine learning model should come with a short document, a model card, that describes what the model is for, how it was evaluated and where it may fail. The card includes the intended use, the evaluation data and results for different groups of people. The idea is good scientific writing applied to AI products: be clear, give evidence and be honest about limitations. Many organizations now publish model cards for their models.",
      fr: "En 2019, un groupe de chercheurs dont Margaret Mitchell et Timnit Gebru a publié un article intitulé Model Cards for Model Reporting à la conférence FAT*. Ils ont proposé que chaque modèle d'apprentissage automatique soit accompagné d'un court document, une fiche de modèle, qui décrit à quoi sert le modèle, comment il a été évalué et où il peut échouer. La fiche inclut l'usage prévu, les données d'évaluation et les résultats pour différents groupes de personnes. L'idée est une bonne écriture scientifique appliquée aux produits d'IA : être clair, donner des preuves et être honnête sur les limites. De nombreuses organisations publient maintenant des fiches de modèle pour leurs modèles.",
    },
    s: "Lisez à voix haute un abstract de 4 phrases que vous écrivez (invention libre) : « Problem: … Method: … Results: … Conclusion: … » Utilisez au moins un verbe d'atténuation (suggest, appear, may).",
    p: { tip: "« Plagiarism » : PLAY-juh-rizm. « Acknowledgments » : ik-NAH-lij-munts. « Coherent » : koh-HIR-unt. « Dissertation » : dis-er-TAY-shn. « Rebuttal » : rih-BUT-l. « Furthermore » : FER-dher-mor.", words: "plagiarism,acknowledgments,coherent,dissertation,rebuttal,furthermore" },
    q: [
      ["Which sentence uses appropriate hedging?", ["The results suggest that the method is effective.", "The results prove that the method is perfect.", "This is the best method ever.", "Everybody agrees."], 0, "Suggest = prudence scientifique."],
      ["Plagiarism is…", ["using others' words or ideas without credit", "a type of citation", "a statistical test", "a software license"], 0, "Faute grave académique."],
      ["The passive voice in methods is used to…", ["focus on the action and data", "make sentences longer", "hide the results", "show emotion"], 0, "« The data were collected »."],
    ],
    rq: [
      ["What does a model card describe?", ["What the model is for and where it may fail", "The price of the model", "The weather"], 0, "Texte, 2e phrase."],
      ["What does the idea apply to AI?", ["Good scientific writing", "Cooking", "Painting"], 0, "Avant-dernière phrase."],
    ],
    f: ["The results proves that our model is the better.", "The results suggest that our model is better.", "Sujet pluriel → suggest ; et on évite « prove » sans preuve forte ; « the better » est incorrect ici."],
  },
  {
    id: "12-3",
    t: "AI Ethics: Bias, Fairness and Privacy",
    fr: "Éthique de l'IA : biais, équité et vie privée",
    cat: "Research & Ethics",
    goal: "Discuter des risques éthiques des systèmes d'IA avec un vocabulaire précis et argumenté.",
    w: `bias|biais|BIE-us
fairness|équité|FAIR-nis
discrimination|discrimination|dis-krim-uh-NAY-shn
data protection|protection des données|DAY-tuh pruh-TEK-shn
informed consent|consentement éclairé|in-FORMD kun-SENT
harm|préjudice, dommage|harm
stereotype|stéréotype|STER-ee-uh-type
marginalized|marginalisé|MAR-juh-nl-ized
audit|audit|AW-dit
impact assessment|évaluation d'impact|IM-pakt uh-SES-munt
responsible AI|IA responsable|rih-SPAHN-suh-bl ay-EYE
dual use|double usage|DOO-ul yoos
environmental impact|impact environnemental|in-vie-run-MEN-tl IM-pakt
carbon footprint|empreinte carbone|KAR-bn FUT-print
automation|automatisation|aw-tuh-MAY-shn
misinformation|désinformation|mis-in-fer-MAY-shn
human oversight|supervision humaine|HYOO-mun OH-ver-site
anonymization|anonymisation|uh-nah-nuh-muh-ZAY-shn
protected group|groupe protégé|pruh-TEK-tid groop
unequal|inégal|un-EE-kwul
to mitigate|atténuer|too MIT-uh-gayt
to exclude|exclure|too ik-SKLOOD
unintended|non intentionnel|un-in-TEN-did
disparity|disparité|dis-PAIR-uh-tee
ethical|éthique|ETH-ih-kl`,
    x: `The system is biased against some groups.|Le système est biaisé contre certains groupes.
We must audit the model for fairness.|Nous devons auditer le modèle pour l'équité.
The error rate is higher for women.|Le taux d'erreur est plus élevé pour les femmes.
Where does the training data come from?|D'où viennent les données d'entraînement ?
Did the participants give informed consent?|Les participants ont-ils donné leur consentement éclairé ?
Personal data must be anonymized.|Les données personnelles doivent être anonymisées.
A human should review high-impact decisions.|Un humain devrait réexaminer les décisions à fort impact.
Training large models has an environmental cost.|Entraîner de grands modèles a un coût environnemental.
This technology has dual use.|Cette technologie a un double usage.
How can we mitigate this risk?|Comment pouvons-nous atténuer ce risque ?`,
    d: [
      ["Spotting bias", `Teacher: The hiring model rejects more women than men. Why? || Le modèle de recrutement rejette plus de femmes que d'hommes. Pourquoi ?
Student: It was trained on past decisions, which were already unequal. || Il a été entraîné sur des décisions passées, qui étaient déjà inégales.
Teacher: So what should we do? || Alors que faut-il faire ?
Student: Audit the data, measure fairness for each group and keep a human in the loop. || Auditer les données, mesurer l'équité pour chaque groupe et garder un humain dans la boucle.`],
      ["A privacy question", `Omar: I found a public dataset with thousands of faces. || J'ai trouvé un jeu de données public avec des milliers de visages.
Sara: Did the people give consent? || Les personnes ont-elles donné leur consentement ?
Omar: I don't know. || Je ne sais pas.
Sara: Then we should not use it before we check the license and the privacy rules. || Alors nous ne devrions pas l'utiliser avant de vérifier la licence et les règles de vie privée.`],
    ],
    c: {
      en: "AI systems learn from data that reflects human society, so they can repeat or amplify existing bias. Algorithmic bias may cause discrimination, for example when a system makes more errors for a protected group. Fairness means checking performance for different groups and working to reduce disparities. Privacy requires data protection, informed consent and anonymization. Other ethical issues include misinformation, dual use of technology, automation of jobs and the environmental impact of training large models, such as energy use and carbon footprint. Responsible AI practices include audits, impact assessments, transparency and human oversight, especially for high-stakes decisions.",
      fr: "Les systèmes d'IA apprennent à partir de données qui reflètent la société humaine, ils peuvent donc répéter ou amplifier des biais existants. Le biais algorithmique peut causer de la discrimination, par exemple quand un système fait plus d'erreurs pour un groupe protégé. L'équité consiste à vérifier les performances pour différents groupes et à travailler à réduire les disparités. La vie privée exige la protection des données, le consentement éclairé et l'anonymisation. D'autres questions éthiques incluent la désinformation, le double usage de la technologie, l'automatisation des emplois et l'impact environnemental de l'entraînement de grands modèles, comme la consommation d'énergie et l'empreinte carbone. Les pratiques d'IA responsable comprennent les audits, les évaluations d'impact, la transparence et la supervision humaine, surtout pour les décisions à enjeux élevés.",
    },
    da: `Bias: ila l-data fiha tmyiz (mital: ma9ibloch n-sa2 f chghl 9dim), l-modèle ghadi ytlemmes nafs l-bias w y9awwih. L-machine ma-tkounch mouhayida 7it t-t3lemt mn l-bchar.
Fairness: 9ees l-modèle 3la koll jam3a (rjal/nsa2, kbar/sghar...). Ila l-error m3a jam3a wa7da kbir bzzaf, hadi mochkila 7ta ila l-moyenne mzyana.
Human in the loop: f l-qrarat l-khatira (prêt, tebb, 9ada2), lazem insan y9ra w y9arrer f l-akhir. L-machine tkoun m3awena, machi hakima.`,
    r: {
      t: "Gender Shades",
      en: "In 2018, Joy Buolamwini and Timnit Gebru published a study called Gender Shades. They evaluated commercial systems that classify the gender of a face in a photo. The error rates were very different between groups. The systems made the fewest errors for lighter-skinned men and many more errors for darker-skinned women. One reason was that the datasets used to build and test the systems contained too few images of darker-skinned people. The study showed the importance of testing models for different groups, not only on average, and led several companies to review and improve their systems.",
      fr: "En 2018, Joy Buolamwini et Timnit Gebru ont publié une étude intitulée Gender Shades. Elles ont évalué des systèmes commerciaux qui classent le genre d'un visage sur une photo. Les taux d'erreur étaient très différents selon les groupes. Les systèmes faisaient le moins d'erreurs pour les hommes à la peau claire et beaucoup plus d'erreurs pour les femmes à la peau foncée. L'une des raisons était que les jeux de données utilisés pour construire et tester les systèmes contenaient trop peu d'images de personnes à la peau foncée. L'étude a montré l'importance de tester les modèles pour différents groupes, pas seulement en moyenne, et a conduit plusieurs entreprises à examiner et améliorer leurs systèmes.",
    },
    s: "Discussion à voix haute : « Should schools use AI to grade essays? » Donnez votre avis en 5 phrases avec : « I believe … One benefit is … However, a risk is … To reduce this risk, we could … »",
    p: { tip: "« Discrimination » : dis-krim-uh-NAY-shn. « Stereotype » : STER-ee-uh-type. « Marginalized » : MAR-juh-nl-ized. « Anonymization » : uh-nah-nuh-muh-ZAY-shn. « Ethical » : ETH-ih-kl, le « th » est sourd.", words: "discrimination,stereotype,marginalized,anonymization,disparity,misinformation" },
    q: [
      ["Why can a model be biased?", ["Its training data may reflect human bias", "Computers dislike some people", "It uses too little electricity", "It has a small screen"], 0, "Les données reflètent des inégalités."],
      ["Fairness evaluation should…", ["compare performance across groups", "only report the average", "ignore users", "avoid testing"], 0, "La moyenne cache des disparités."],
      ["Human oversight is especially important for…", ["high-stakes decisions", "screensavers", "font choices", "game music"], 0, "Prêts, santé, justice."],
    ],
    rq: [
      ["What was the problem in Gender Shades?", ["Different error rates between groups", "Slow websites", "A broken camera"], 0, "Texte, 3e phrase."],
      ["What did the study encourage?", ["Testing models for different groups", "Stopping all research", "Using less data"], 0, "Dernière phrase."],
    ],
    f: ["The data is not enough diverse.", "The data is not diverse enough.", "« enough » se place après l'adjectif."],
  },
];
