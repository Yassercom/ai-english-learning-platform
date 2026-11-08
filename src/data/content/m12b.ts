import type { RawLesson } from "../types";

export const m12b: RawLesson[] = [
  {
    id: "12-4",
    t: "AI Regulation, Safety and Governance",
    fr: "Régulation, sûreté et gouvernance de l'IA",
    cat: "Research & Ethics",
    goal: "Comprendre le vocabulaire de la réglementation et de la sûreté de l'IA et résumer un débat de politique publique.",
    w: `regulation|réglementation|reg-yuh-LAY-shn
law|loi|law
compliance|conformité|kum-PLIE-uns
risk-based approach|approche fondée sur les risques|risk-bayst uh-PROHCH
prohibited|interdit|proh-HIB-uh-tid
high-risk system|système à haut risque|hie-risk SIS-tum
standard|norme|STAN-derd
certification|certification|ser-tuh-fuh-KAY-shn
liability|responsabilité juridique|lie-uh-BIL-uh-tee
safety|sûreté, sécurité|SAYF-tee
red teaming|test d'intrusion adversarial (red teaming)|red TEE-ming
incident|incident|IN-suh-dunt
safeguard|mesure de protection|SAYF-gard
governance|gouvernance|GUV-er-nuns
policymaker|décideur public|PAH-luh-see-may-ker
enforcement|application (d'une loi)|in-FORS-munt
fine|amende|fine
model card|fiche de modèle|MAH-dl kard
datasheet|fiche de données|DAY-tuh-sheet
disclosure|divulgation, transparence|dis-KLOH-zhr
to comply with|se conformer à|too kum-PLIE with
to enforce|faire appliquer|too in-FORS
to regulate|réglementer|too REG-yuh-layt
innovation|innovation|in-uh-VAY-shn
balance|équilibre|BAL-uns`,
    x: `AI systems must comply with the law.|Les systèmes d'IA doivent respecter la loi.
Some uses of AI are prohibited.|Certains usages de l'IA sont interdits.
High-risk systems need stricter controls.|Les systèmes à haut risque exigent des contrôles plus stricts.
Companies must be transparent about their AI.|Les entreprises doivent être transparentes sur leur IA.
Who is liable if the system causes harm?|Qui est responsable si le système cause un préjudice ?
We test the model with red teaming.|Nous testons le modèle par red teaming.
Report every serious incident.|Signale chaque incident grave.
There are heavy fines for violations.|Il y a de lourdes amendes pour les infractions.
We need a balance between innovation and safety.|Nous avons besoin d'un équilibre entre innovation et sécurité.
Publish a model card with the release.|Publie une fiche de modèle avec la version.`,
    d: [
      ["Discussing a regulation", `Student: Why do governments regulate AI? || Pourquoi les gouvernements réglementent-ils l'IA ?
Professor: To protect people from harm while allowing innovation. || Pour protéger les gens des dommages tout en permettant l'innovation.
Student: Do all systems have the same rules? || Tous les systèmes ont-ils les mêmes règles ?
Professor: No. A risk-based approach applies stricter rules to high-risk systems. || Non. Une approche fondée sur les risques applique des règles plus strictes aux systèmes à haut risque.`],
      ["Compliance meeting", `Manager: Is our hiring tool a high-risk system? || Notre outil de recrutement est-il un système à haut risque ?
Lawyer: Probably yes, because it affects people's opportunities. || Probablement oui, car il affecte les opportunités des personnes.
Manager: What must we do? || Que devons-nous faire ?
Lawyer: Document the data, test for bias, keep human oversight and report incidents. || Documenter les données, tester les biais, garder une supervision humaine et signaler les incidents.`],
    ],
    c: {
      en: "As AI becomes more powerful, governments and organizations create rules for its use. The European Union has adopted the AI Act, which follows a risk-based approach: some practices are prohibited, high-risk systems must meet strict requirements, and low-risk systems have lighter obligations. Companies must comply with the rules, document their systems and accept human oversight; authorities enforce the law with controls and fines. Safety practices include red teaming, where experts try to make a system fail, and incident reporting. Documentation tools such as model cards and datasheets improve transparency. Policymakers try to balance innovation with the protection of people.",
      fr: "À mesure que l'IA devient plus puissante, les gouvernements et les organisations créent des règles pour son usage. L'Union européenne a adopté le règlement sur l'IA (AI Act), qui suit une approche fondée sur les risques : certaines pratiques sont interdites, les systèmes à haut risque doivent respecter des exigences strictes et les systèmes à faible risque ont des obligations plus légères. Les entreprises doivent se conformer aux règles, documenter leurs systèmes et accepter la supervision humaine ; les autorités font appliquer la loi avec des contrôles et des amendes. Les pratiques de sûreté comprennent le red teaming, où des experts essaient de faire échouer un système, et le signalement des incidents. Des outils de documentation comme les fiches de modèle et les fiches de données améliorent la transparence. Les décideurs essaient d'équilibrer l'innovation et la protection des personnes.",
    },
    da: `Risk-based approach: ma-kayn-ch 9anoun wa7ed l-kol. Kol ma l-khatar kbir, kol ma l-9awa3id sarma: spam filter b7al jarrah t-tebb, machi nafs chay.
Compliance: l-charika khass tkoun mtaTabeqa m3a l-9anoun w tqder tbarhen 3la dalik (docs, tests). Bla document = bla dalil.
Red teaming: khobara2 kay-7awlou « yksroh » l-modèle (y-khdo3ouh, y-jibou menh 7aja khatira) 9bel ma ykhrouj l-l-n-nass.`,
    r: {
      t: "Why rules and innovation can work together",
      en: "Some people fear that regulation will slow innovation, while others fear that no regulation will let harmful systems reach the public. Many experts propose a middle path. Rules should be proportionate to the risk: a music recommendation system and a system that helps decide medical treatment do not need the same level of control. Clear rules can also help companies, because they know what is expected and users can trust the products. International cooperation is important, since AI systems and data cross borders. The debate continues, and students of AI should be able to understand and discuss different positions.",
      fr: "Certains craignent que la réglementation ralentisse l'innovation, tandis que d'autres craignent que l'absence de réglementation laisse des systèmes nuisibles atteindre le public. De nombreux experts proposent une voie médiane. Les règles devraient être proportionnées au risque : un système de recommandation de musique et un système qui aide à décider d'un traitement médical n'ont pas besoin du même niveau de contrôle. Des règles claires peuvent aussi aider les entreprises, car elles savent ce qui est attendu et les utilisateurs peuvent faire confiance aux produits. La coopération internationale est importante, puisque les systèmes d'IA et les données traversent les frontières. Le débat continue, et les étudiants en IA devraient pouvoir comprendre et discuter différentes positions.",
    },
    s: "Présentez à voix haute les deux positions du débat (« Some people argue that … Others believe that … ») puis donnez la vôtre : « In my view, a balanced approach is best because … »",
    p: { tip: "« Regulation » : reg-yuh-LAY-shn. « Liability » : lie-uh-BIL-uh-tee. « Compliance » : kum-PLIE-uns. « Governance » : GUV-er-nuns. « Safeguard » : SAYF-gard. « Enforcement » : in-FORS-munt.", words: "regulation,liability,compliance,governance,safeguard,certification" },
    q: [
      ["A risk-based approach means…", ["stricter rules for higher-risk systems", "the same rule for all", "no rules", "only rules for games"], 0, "Proportionnalité."],
      ["Red teaming is…", ["experts trying to make a system fail to find weaknesses", "a sports team", "a color of interface", "a type of data"], 0, "Test adversarial."],
      ["A model card helps with…", ["transparency", "internet speed", "GPU memory", "image color"], 0, "Document de transparence."],
    ],
    rq: [
      ["What do many experts propose?", ["A middle path", "No rules at all", "Stopping AI"], 0, "Texte, 2e phrase."],
      ["Why is international cooperation important?", ["AI systems and data cross borders", "Computers are cheap", "People are bored"], 0, "« cross borders »."],
    ],
    f: ["Companies must to comply with the law.", "Companies must comply with the law.", "Modal « must » + verbe sans « to »."],
  },
  {
    id: "12-5",
    t: "Academic Interviews, Applications and Presenting a Project",
    fr: "Entretien académique, candidatures et soutenance de projet",
    cat: "Research & Ethics",
    goal: "Réussir un entretien, rédiger une candidature et présenter un projet à un jury en anglais.",
    w: `interview|entretien|IN-ter-vyoo
application|candidature|ap-luh-KAY-shn
CV / résumé|CV|see-VEE / REZ-uh-may
cover letter|lettre de motivation|KUV-er LET-er
motivation letter|lettre de motivation (académique)|moh-tuh-VAY-shn LET-er
strength|point fort|strength
weakness|point faible|WEEK-nis
supervisor|directeur de recherche, encadrant|SOO-per-vie-zer
research interest|intérêt de recherche|REE-serch IN-trist
scholarship|bourse d'études|SKAH-ler-ship
internship|stage|IN-tern-ship
thesis topic|sujet de mémoire|THEE-sis TAH-pik
to apply|postuler|too uh-PLIE
referee / reference|référent|ref-uh-REE / REF-runs
recommendation letter|lettre de recommandation|rek-uh-men-DAY-shn LET-er
qualification|qualification|kwah-luh-fuh-KAY-shn
skill|compétence|skil
achievement|réussite|uh-CHEEV-munt
slide deck|support de présentation|slide dek
Q&A session|séance de questions-réponses|kyoo-n-AY SESH-n
to rehearse|répéter (une présentation)|too rih-HERS
elevator pitch|présentation éclair|EL-uh-vay-ter pich
to handle questions|gérer les questions|too HAN-dl KWES-chnz
to be motivated|être motivé|too bee MOH-tuh-vay-tid
to contribute|contribuer|too kun-TRIB-yoot`,
    x: `Thank you for inviting me to this interview.|Merci de m'avoir invité à cet entretien.
I'm applying for the Master's program in artificial intelligence.|Je postule au Master en intelligence artificielle.
My main strength is my persistence.|Mon principal point fort est ma persévérance.
I'm still improving my English, and I practice every day.|J'améliore encore mon anglais et je pratique chaque jour.
I'm interested in natural language processing.|Je m'intéresse au traitement automatique des langues.
For my project, I built a spam classifier.|Pour mon projet, j'ai construit un classifieur de spam.
Could you repeat the question, please?|Pouvez-vous répéter la question, s'il vous plaît ?
That's a good question. Let me think for a moment.|C'est une bonne question. Laissez-moi réfléchir un instant.
I'd be happy to contribute to your research group.|Je serais heureux de contribuer à votre groupe de recherche.
Thank you for your time and your feedback.|Merci pour votre temps et vos retours.`,
    d: [
      ["An academic interview", `Professor: Why do you want to study artificial intelligence? || Pourquoi voulez-vous étudier l'intelligence artificielle ?
Student: I enjoy solving problems with data, and I built a small project on text classification. || J'aime résoudre des problèmes avec des données et j'ai construit un petit projet de classification de texte.
Professor: What was the most difficult part? || Quelle a été la partie la plus difficile ?
Student: Cleaning the data. I learned that preparation is as important as modeling. || Nettoyer les données. J'ai appris que la préparation est aussi importante que la modélisation.`],
      ["Presenting and answering questions", `Student: Thank you for your attention. I'm happy to take your questions. || Merci de votre attention. Je réponds volontiers à vos questions.
Jury: What are the limitations of your model? || Quelles sont les limites de votre modèle ?
Student: Good question. It was trained on a small dataset, so it may not generalize to other domains. || Bonne question. Il a été entraîné sur un petit jeu de données, donc il peut ne pas généraliser à d'autres domaines.
Jury: How would you improve it? || Comment l'amélioreriez-vous ?
Student: By collecting more diverse data and testing on a different domain. || En collectant des données plus variées et en testant sur un autre domaine.`],
    ],
    c: {
      en: "A strong application tells a clear story. In your CV, list your education, skills and projects with concrete results. In a motivation letter, explain why you want this program, what you have already done and what you want to learn. In an academic interview, listen carefully, answer the question that was asked and give a specific example. If you need time, say: That's a good question, let me think for a moment. To present a project, use a simple structure: the problem, your method, the results and the limitations. Rehearse aloud, speak slowly and prepare for the Q&A session. Honesty about limitations shows scientific maturity.",
      fr: "Une bonne candidature raconte une histoire claire. Dans votre CV, listez votre formation, vos compétences et vos projets avec des résultats concrets. Dans une lettre de motivation, expliquez pourquoi vous voulez ce programme, ce que vous avez déjà fait et ce que vous voulez apprendre. Dans un entretien académique, écoutez attentivement, répondez à la question posée et donnez un exemple précis. Si vous avez besoin de temps, dites : « That's a good question, let me think for a moment. » Pour présenter un projet, utilisez une structure simple : le problème, votre méthode, les résultats et les limites. Répétez à voix haute, parlez lentement et préparez la séance de questions-réponses. L'honnêteté sur les limites montre de la maturité scientifique.",
    },
    da: `Interview: ma-t7fdch jawab. 7ddr 3 7ajat: (1) 3lach had l-program, (2) chnou dert (projet), (3) chnou bghit nt3llem. 7ett mital dial 7ayatek, machi ghir klam 3am.
Ila ma fhemtich s-so2al: 9ol « Could you repeat the question, please? ». Hada 3adi w mou2adab. Machi 3ayb.
Weaknesses: ma-t9olch « ma-3andi chi 3ayb ». 9ol 7aja sadiqa w chnou katdir bach t7assnha: « I'm still improving my English, and I practice every day ».`,
    r: {
      t: "A three-minute project presentation",
      en: "A good three-minute presentation has four parts. In the first thirty seconds, introduce yourself and the problem: why does it matter? In the next minute, describe your method with one simple diagram, not a long list of technical details. Then show your main result with a clear number or chart, and compare it with a baseline. In the last thirty seconds, mention one limitation and one idea for future work, and thank the audience. Practice with a timer. Many speakers talk too fast when they are nervous, so breathe, pause between sections and look at the audience. A calm and clear speaker is easy to trust.",
      fr: "Une bonne présentation de trois minutes comporte quatre parties. Dans les trente premières secondes, présentez-vous et présentez le problème : pourquoi est-il important ? Dans la minute suivante, décrivez votre méthode avec un schéma simple, pas une longue liste de détails techniques. Puis montrez votre résultat principal avec un chiffre ou un graphique clair, et comparez-le à une référence. Dans les trente dernières secondes, mentionnez une limite et une idée de travaux futurs, et remerciez le public. Entraînez-vous avec un minuteur. Beaucoup d'orateurs parlent trop vite quand ils sont nerveux : respirez, faites une pause entre les parties et regardez le public. Un orateur calme et clair inspire confiance.",
    },
    s: "Dernière activité : présentez à voix haute votre propre projet (réel ou imaginaire) en 3 minutes, avec la structure du texte. Enregistrez-vous, réécoutez et notez 2 points à améliorer (rythme, clarté, prononciation).",
    p: { tip: "« Scholarship » : SKAH-ler-ship. « Supervisor » : SOO-per-vie-zer. « Qualification » : kwah-luh-fuh-KAY-shn. « Achievement » : uh-CHEEV-munt. « Rehearse » : rih-HERS. « Weakness » : WEEK-nis.", words: "supervisor,scholarship,qualification,achievement,rehearse,weakness" },
    q: [
      ["What should you do if you did not understand an interview question?", ["Ask politely for repetition", "Stay silent", "Change the topic", "Leave"], 0, "« Could you repeat the question, please? »."],
      ["A good project presentation includes…", ["problem, method, results, limitations", "only the code", "only jokes", "only a list of libraries"], 0, "Structure en quatre parties."],
      ["Why mention limitations?", ["It shows honesty and scientific maturity", "It is a rule of grammar", "It lowers your score", "It shortens the talk"], 0, "Les jurys apprécient l'honnêteté."],
    ],
    rq: [
      ["How long is the presentation in the text?", ["Three minutes", "One hour", "Thirty seconds"], 0, "« three-minute presentation »."],
      ["What should you do when you are nervous?", ["Breathe and pause", "Speak faster", "Look at the floor"], 0, "Avant-dernière phrase."],
    ],
    f: ["I am interesting in machine learning.", "I am interested in machine learning.", "« Interested » décrit la personne ; « interesting » décrit la chose."],
  },
];
