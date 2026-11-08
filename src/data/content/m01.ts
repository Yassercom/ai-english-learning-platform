import type { RawLesson } from "../types";

export const m01: RawLesson[] = [
  {
    id: "1-1",
    t: "Introducing Yourself and the Classroom",
    fr: "Se présenter et vocabulaire de la classe",
    cat: "General English",
    goal: "Se présenter, nommer les objets et les personnes de l'université, demander de répéter.",
    w: `student|étudiant(e)|STOO-dnt
professor|professeur d'université|pruh-FEH-ser
classroom|salle de classe|KLASS-room
university|université|yoo-nuh-VER-suh-tee
course|cours, matière|kors
lesson|leçon|LEH-sn
homework|devoirs|HOHM-werk
exam|examen|ig-ZAM
question|question|KWES-chn
answer|réponse|AN-ser
name|nom, prénom|naym
major|filière, spécialité|MAY-jer
degree|diplôme|dih-GREE
semester|semestre|suh-MES-ter
schedule|emploi du temps|SKEH-joul
library|bibliothèque|LIE-brer-ee
notebook|cahier|NOHT-book
laptop|ordinateur portable|LAP-top
textbook|manuel scolaire|TEKST-book
classmate|camarade de classe|KLAS-mayt
beginner|débutant(e)|bih-GIN-er
to learn|apprendre|too lern
to understand|comprendre|too un-der-STAND
to repeat|répéter|too rih-PEET
to spell|épeler|too spel`,
    x: `Nice to meet you.|Enchanté(e).
My name is Sara and I study computer science.|Je m'appelle Sara et j'étudie l'informatique.
Could you repeat that, please?|Pouvez-vous répéter, s'il vous plaît ?
How do you spell that?|Comment ça s'écrit ?
I don't understand.|Je ne comprends pas.
What does "deadline" mean?|Que veut dire « deadline » ?
Could you speak more slowly?|Pouvez-vous parler plus lentement ?
Can I ask a question?|Puis-je poser une question ?
I'm sorry, I'm late.|Désolé(e), je suis en retard.
What is the homework?|Quels sont les devoirs ?`,
    d: [
      ["First day at university", `Sara: Hi! I'm Sara. What's your name? || Salut ! Je suis Sara. Comment tu t'appelles ?
Omar: Nice to meet you, Sara. I'm Omar. || Enchanté, Sara. Je suis Omar.
Sara: What is your major? || Quelle est ta filière ?
Omar: I study computer science. I am a beginner in English. || J'étudie l'informatique. Je suis débutant en anglais.
Sara: Me too! Let's learn together. || Moi aussi ! Apprenons ensemble.`],
      ["Asking the professor", `Student: Excuse me, professor. Could you repeat that, please? || Excusez-moi, professeur. Pouvez-vous répéter, s'il vous plaît ?
Professor: Of course. The homework is on page ten. || Bien sûr. Les devoirs sont à la page dix.
Student: How do you spell "homework"? || Comment s'écrit « homework » ?
Professor: H-O-M-E-W-O-R-K. || H-O-M-E-W-O-R-K.
Student: Thank you very much. || Merci beaucoup.`],
    ],
    c: {
      en: "At university, you are a student and your teacher is a professor. Every semester you have a schedule with different courses. In class, you listen, you ask questions and you take notes in a notebook or on a laptop. After class you do your homework, often in the library. If you do not understand, you can say: Could you repeat that, please?",
      fr: "À l'université, vous êtes un étudiant et votre enseignant est un professeur. Chaque semestre, vous avez un emploi du temps avec différents cours. En classe, vous écoutez, vous posez des questions et vous prenez des notes dans un cahier ou sur un ordinateur portable. Après le cours, vous faites vos devoirs, souvent à la bibliothèque. Si vous ne comprenez pas, vous pouvez dire : « Could you repeat that, please? »",
    },
    da: `Verbe « to be » (am / is / are): F darija kan9olo « ana taleb » bla fi3l. F l-inglizia khassek dima tzid am/is/are: « I am a student ». Ma t9olch « I student ».
Question avec « do »: « Wach fhemti? » kat-wellî « Do you understand? ». « Do » kat3awen f l-so2al.
Prononciation de « th » et « r »: l-« r » l-amriki machi bhal « r » dial l-3arabiya; l-lissan ma kaytlesh l-sa9f dial l-fem.`,
    r: {
      t: "Sara's first week",
      en: "Sara is a new student at a university in Casablanca. Her major is computer science. This week she has five courses and a busy schedule. On Monday she meets her classmate Omar in the library. Omar is a beginner in English, like Sara. They decide to study together every evening. They read the textbook, learn ten new words and repeat them aloud. Sara says that English is difficult, but she is happy to learn.",
      fr: "Sara est une nouvelle étudiante dans une université de Casablanca. Sa filière est l'informatique. Cette semaine, elle a cinq cours et un emploi du temps chargé. Lundi, elle retrouve son camarade Omar à la bibliothèque. Omar est débutant en anglais, comme Sara. Ils décident d'étudier ensemble chaque soir. Ils lisent le manuel, apprennent dix mots nouveaux et les répètent à voix haute. Sara dit que l'anglais est difficile, mais elle est contente d'apprendre.",
    },
    s: "Présentez-vous à voix haute en 5 phrases : « Hello, my name is … I am from … I study … I am a beginner in English. Nice to meet you. » Enregistrez-vous, puis réécoutez.",
    p: { tip: "Le « th » : placez la langue entre les dents (this, the). Le « h » de « homework » est expiré, pas muet. Accent sur la première syllabe : STU-dent, HOME-work.", words: "student,homework,library,schedule,semester,question" },
    q: [
      ["Which sentence is correct for introducing yourself?", ["I student computer science.", "I am a student of computer science.", "I is student computer science.", "Me am student."], 1, "En anglais, le verbe « to be » est obligatoire : I am a student."],
      ["You did not hear the teacher. What do you say?", ["Repeat!", "Could you repeat that, please?", "I repeat you.", "What repeat?"], 1, "« Could you … , please? » est une formule polie pour demander quelque chose."],
      ["A « major » at university is…", ["a military rank", "your main field of study", "a type of exam", "a classroom"], 1, "Major = filière principale. « My major is physics »."],
    ],
    rq: [
      ["What is Sara's major?", ["Physics", "Computer science", "Law"], 1, "Le texte dit : « Her major is computer science »."],
      ["Where does Sara meet Omar on Monday?", ["In the library", "In the classroom", "At home"], 0, "« On Monday she meets her classmate Omar in the library »."],
    ],
    f: ["I am agree with you.", "I agree with you.", "En anglais, « agree » est un verbe : on ne dit pas « am agree » (erreur influencée par « je suis d'accord »)."],
  },
  {
    id: "1-2",
    t: "Understanding a Lecture and Asking for Clarification",
    fr: "Comprendre un cours et demander des explications",
    cat: "General English",
    goal: "Comprendre un professeur qui parle vite, repérer les mots-signaux et demander une clarification poliment.",
    w: `lecture|cours magistral|LEK-cher
lecturer|chargé(e) de cours|LEK-cher-er
topic|sujet|TAH-pik
main idea|idée principale|mayn eye-DEE-uh
example|exemple|ig-ZAM-pl
definition|définition|def-uh-NIH-shn
explanation|explication|ek-spluh-NAY-shn
to explain|expliquer|too ik-SPLAYN
to clarify|clarifier|too KLER-uh-fie
to mean|vouloir dire|too meen
slide|diapositive|slide
chapter|chapitre|CHAP-ter
fast|rapide|fast
slowly|lentement|SLOH-lee
clearly|clairement|KLIR-lee
accent|accent|AK-sent
to follow|suivre|too FAH-loh
to keep up|suivre le rythme|too keep up
to miss|rater, manquer|too mis
however|cependant|how-EV-er
therefore|donc, par conséquent|THER-for
for example|par exemple|fer ig-ZAM-pl
in other words|autrement dit|in UH-dher werdz
first / next / finally|d'abord / ensuite / enfin|ferst / nekst / FIE-nuh-lee
important|important|im-POR-tnt`,
    x: `Sorry, I didn't catch that.|Désolé(e), je n'ai pas saisi.
Could you go back to the previous slide?|Pouvez-vous revenir à la diapositive précédente ?
Could you give an example?|Pouvez-vous donner un exemple ?
What do you mean by "gradient"?|Qu'entendez-vous par « gradient » ?
Do you mean that the model learns from data?|Voulez-vous dire que le modèle apprend à partir de données ?
Can you explain that in simpler words?|Pouvez-vous expliquer avec des mots plus simples ?
I'm having trouble keeping up.|J'ai du mal à suivre le rythme.
Is this going to be on the exam?|Est-ce que ce sera à l'examen ?
Where can I find the slides?|Où puis-je trouver les diapositives ?
Let me check that I understood.|Laissez-moi vérifier que j'ai compris.`,
    d: [
      ["After a fast lecture", `Sara: Did you understand the lecture? The professor spoke very fast. || Tu as compris le cours ? Le professeur parlait très vite.
Omar: Not everything. I missed the definition of "algorithm". || Pas tout. J'ai raté la définition d'« algorithm ».
Sara: It means a list of steps to solve a problem. || Ça veut dire une liste d'étapes pour résoudre un problème.
Omar: Thanks! Can you give me an example? || Merci ! Tu peux me donner un exemple ?`],
      ["Asking for clarification", `Student: Excuse me, what do you mean by "overfit"? || Excusez-moi, qu'entendez-vous par « overfit » ?
Lecturer: Good question. In other words, the model learns the data too well. || Bonne question. Autrement dit, le modèle apprend trop bien les données.
Student: Could you give an example? || Pourriez-vous donner un exemple ?
Lecturer: Sure. It gets 100% on training data but fails on new data. || Bien sûr. Il obtient 100 % sur les données d'entraînement mais échoue sur de nouvelles données.`],
    ],
    c: {
      en: "Professors often speak fast, so you need strategies. First, listen for signal words. 'However' introduces a contrast. 'Therefore' introduces a result. 'For example' introduces an example, and 'in other words' introduces a simpler explanation. These words help you follow the main idea. If you miss something, do not stay silent: ask politely for clarification. Say 'Could you explain that again?' or 'What do you mean by...?'",
      fr: "Les professeurs parlent souvent vite, il faut donc des stratégies. D'abord, écoutez les mots-signaux. « However » introduit un contraste. « Therefore » introduit une conséquence. « For example » introduit un exemple et « in other words » introduit une explication plus simple. Ces mots aident à suivre l'idée principale. Si vous ratez quelque chose, ne restez pas silencieux : demandez poliment une clarification. Dites « Could you explain that again? » ou « What do you mean by...? »",
    },
    da: `Mots-signaux: « However » = « walakin », « Therefore » = « donc / lhasil », « For example » = « mital ». Ila sme3ti had l-klimat, 3ref ach ghadi y-jî men ba3d.
« Could you... ? »: hadi tariqa mou2adaba bach t-tlob chi haja. Machi darouri t-fhem koll kelma, 7awl t-fhem l-fikra l-asasiya (main idea).
« Catch »: « I didn't catch that » = « ma sme3tich/ma fhemtich mzyan », machi « ma mseket-ch ».`,
    r: {
      t: "How to survive a fast lecture",
      en: "Many international students find lectures difficult at first. The lecturer speaks fast and uses new words. Here are three simple tips. First, read the slides before class, so the topic is not new. Second, write only key words, not full sentences. Third, record a short list of questions and ask them at the end. Most professors like questions because they show interest. Finally, review your notes the same evening. Understanding grows with practice, and every week it becomes easier.",
      fr: "Beaucoup d'étudiants internationaux trouvent les cours difficiles au début. L'enseignant parle vite et utilise des mots nouveaux. Voici trois conseils simples. D'abord, lisez les diapositives avant le cours pour que le sujet ne soit pas nouveau. Ensuite, écrivez seulement les mots-clés, pas des phrases entières. Enfin, préparez une courte liste de questions et posez-les à la fin. La plupart des professeurs aiment les questions car elles montrent de l'intérêt. Relisez vos notes le soir même. La compréhension grandit avec la pratique, et chaque semaine devient plus facile.",
    },
    s: "Jeu de rôle : vous n'avez pas compris un mot. Dites à voix haute : « Sorry, I didn't catch that. What do you mean by … ? Could you give an example? » Répétez 3 fois avec un autre mot technique à chaque fois.",
    p: { tip: "Intonation des questions : « Could you repeat that? » monte à la fin (↗). Dans « however », l'accent est sur la 2e syllabe : how-EV-er. Le « r » final est américain : on ne le roule pas.", words: "however,therefore,explanation,clearly,definition,example" },
    q: [
      ["Which word introduces a contrast?", ["Therefore", "However", "For example", "First"], 1, "However = cependant. Therefore introduit une conséquence."],
      ["The professor says: « In other words, … ». What follows?", ["A joke", "A simpler explanation", "The end of the class", "A new topic"], 1, "« In other words » reformule l'idée avec des mots plus simples."],
      ["Choose the most polite request.", ["Explain again.", "You must explain.", "Could you explain that again, please?", "Say again now."], 2, "Could you… , please ? est la forme la plus polie."],
    ],
    rq: [
      ["What is the first tip in the text?", ["Record the lecture", "Read the slides before class", "Sit at the back"], 1, "« First, read the slides before class »."],
      ["When should you review your notes?", ["The same evening", "Next month", "Never"], 0, "« Review your notes the same evening »."],
    ],
    f: ["The professor speaks very fastly.", "The professor speaks very fast.", "« Fast » est à la fois adjectif et adverbe : pas de « fastly »."],
  },
  {
    id: "1-3",
    t: "Taking Notes in Class",
    fr: "Prendre des notes pendant un cours",
    cat: "General English",
    goal: "Prendre des notes efficaces : abréviations, mots-clés, symboles et structure.",
    w: `note|note|noht
to take notes|prendre des notes|too tayk nohts
key word|mot-clé|kee werd
summary|résumé|SUH-muh-ree
outline|plan, structure|OWT-lyne
bullet point|puce, point clé|BUL-it poynt
heading|titre, intitulé|HEH-ding
abbreviation|abréviation|uh-bree-vee-AY-shn
symbol|symbole|SIM-bl
arrow|flèche|AIR-oh
to underline|souligner|too un-der-LINE
to highlight|surligner|too HIE-lyte
to copy|copier|too KAH-pee
to write down|noter, écrire|too RYTE down
to organize|organiser|too OR-guh-nyze
to review|relire, réviser|too rih-VYOO
to compare|comparer|too kum-PAIR
detail|détail|dih-TAYL
section|section, partie|SEK-shn
column|colonne|KAH-lum
margin|marge|MAR-jin
page|page|payj
pen|stylo|pen
pencil|crayon|PEN-sl
deadline|date limite|DED-line`,
    x: `Let me write that down.|Laissez-moi noter cela.
Can I borrow your notes?|Puis-je emprunter tes notes ?
Did you get the last point?|Tu as eu le dernier point ?
I use arrows to show cause and effect.|J'utilise des flèches pour montrer cause et effet.
What's the deadline for the assignment?|Quelle est la date limite du devoir ?
I highlight the key words in yellow.|Je surligne les mots-clés en jaune.
Could you share the slides?|Pouvez-vous partager les diapositives ?
Let's compare our notes.|Comparons nos notes.
I'll make a summary tonight.|Je ferai un résumé ce soir.
Can you read your handwriting back to me?|Peux-tu me relire ton écriture ?`,
    d: [
      ["Comparing notes", `Omar: Can I check your notes? I missed the last point. || Je peux voir tes notes ? J'ai raté le dernier point.
Sara: Sure. I wrote "ML = learn from data" with an arrow. || Bien sûr. J'ai écrit « ML = apprendre des données » avec une flèche.
Omar: Nice. Why do you use abbreviations? || Joli. Pourquoi tu utilises des abréviations ?
Sara: They save time. For example, "w/" means "with". || Elles font gagner du temps. Par exemple, « w/ » veut dire « with ».`],
      ["Organizing a summary", `Sara: Let's make a summary of chapter two. || Faisons un résumé du chapitre deux.
Omar: Good idea. First, the headings. || Bonne idée. D'abord, les titres.
Sara: Then three bullet points under each heading. || Ensuite trois points sous chaque titre.
Omar: And we highlight the deadline in red. || Et on surligne la date limite en rouge.`],
    ],
    c: {
      en: "Good note-taking does not mean writing everything. You listen first, then you write the key words. Use headings to organize each section, and bullet points for details. Abbreviations save time: 'w/' means with, 'e.g.' means for example, 'i.e.' means in other words, and 'vs' means against. Arrows show cause and effect. After class, review your notes within 24 hours and write a short summary. This is how information moves into long-term memory.",
      fr: "Bien prendre des notes ne veut pas dire tout écrire. On écoute d'abord, puis on écrit les mots-clés. Utilisez des titres pour organiser chaque partie et des puces pour les détails. Les abréviations font gagner du temps : « w/ » signifie with, « e.g. » signifie for example, « i.e. » signifie in other words et « vs » signifie contre. Les flèches montrent la cause et l'effet. Après le cours, relisez vos notes dans les 24 heures et écrivez un court résumé. C'est ainsi que l'information passe en mémoire à long terme.",
    },
    da: `« e.g. » w « i.e. »: « e.g. » = « mital » (exempli gratia), « i.e. » = « y3ni » (id est). Mouhim t-ferrq binathoum f l-kitaba l-akadimiya.
« Take notes »: kan9olo « take notes », machi « make notes ». Verbe « take » m3a « notes ».
Strategie: ma-ktebch kolchi. Kteb gher les mots-clés (key words), w men ba3d 3awed 9ra w kteb résumé.`,
    r: {
      t: "The Cornell method",
      en: "The Cornell method is a popular system for taking notes. You divide the page into three parts. On the right, the large column is for your notes during class. On the left, a narrow column is for key words and questions that you write after class. At the bottom, you write a summary in two or three sentences. Later, you cover the right side and use the key words to test your memory. Many students say this method makes revision faster and more active.",
      fr: "La méthode Cornell est un système populaire pour prendre des notes. On divise la page en trois parties. À droite, la grande colonne sert aux notes prises pendant le cours. À gauche, une colonne étroite sert aux mots-clés et aux questions écrits après le cours. En bas, on écrit un résumé en deux ou trois phrases. Plus tard, on cache le côté droit et on utilise les mots-clés pour tester sa mémoire. Beaucoup d'étudiants disent que cette méthode rend la révision plus rapide et plus active.",
    },
    s: "Écoutez une vidéo éducative de 3 minutes en anglais (par exemple une vidéo d'introduction à l'IA). Notez 5 mots-clés, puis expliquez à voix haute en 3 phrases : « The video is about … First, … Finally, … »",
    p: { tip: "« Abbreviation » : accent sur « AY » (uh-bree-vee-AY-shn). Les mots en -tion se prononcent « shn ». « Highlight » : le « gh » est muet (HIE-lyte).", words: "abbreviation,highlight,summary,organize,deadline,review" },
    q: [
      ["What does « e.g. » mean?", ["in other words", "for example", "against", "and so on"], 1, "e.g. vient du latin exempli gratia : « par exemple »."],
      ["The best way to take notes is to…", ["write every word", "write key words and organize them", "not write anything", "copy the slides only"], 1, "On note les mots-clés et on organise avec titres et puces."],
      ["When should you review your notes?", ["Within 24 hours", "After one year", "Only before the exam", "Never"], 0, "Relire dans les 24 h aide la mémoire à long terme."],
    ],
    rq: [
      ["Where do you write the summary in the Cornell method?", ["At the bottom", "On the left", "At the top"], 0, "« At the bottom, you write a summary »."],
      ["What is the narrow column used for?", ["Key words and questions", "Drawings", "The date"], 0, "La colonne étroite sert aux mots-clés et questions."],
    ],
    f: ["I make notes during the lesson.", "I take notes during the lesson.", "La collocation correcte est « take notes », pas « make notes »."],
  },
  {
    id: "1-4",
    t: "Working in a Group",
    fr: "Participer à un travail de groupe",
    cat: "General English",
    goal: "Proposer, donner son avis, être d'accord ou non, répartir les tâches dans un groupe.",
    w: `team|équipe|teem
group project|projet de groupe|groop PRAH-jekt
member|membre|MEM-ber
leader|chef, responsable|LEE-der
task|tâche|task
role|rôle|rohl
idea|idée|eye-DEE-uh
opinion|opinion, avis|uh-PIN-yn
suggestion|suggestion|sug-JES-chn
to suggest|suggérer|too sug-JEST
to agree|être d'accord|too uh-GREE
to disagree|ne pas être d'accord|too dis-uh-GREE
to share|partager|too sher
to divide|répartir, diviser|too dih-VIDE
to decide|décider|too dih-SIDE
to discuss|discuter de|too dis-KUSS
to help|aider|too help
to finish|terminer|too FIN-ish
to be responsible for|être responsable de|too bee rih-SPAHN-suh-bl fer
meeting|réunion|MEE-ting
progress|progrès, avancement|PRAH-gres
problem|problème|PRAH-blum
solution|solution|suh-LOO-shn
schedule|calendrier, planning|SKEH-joul
together|ensemble|tuh-GEH-dher`,
    x: `What do you think?|Qu'en penses-tu ?
I think we should start with the data.|Je pense que nous devrions commencer par les données.
I agree with you.|Je suis d'accord avec toi.
I see your point, but...|Je comprends ton point de vue, mais...
How about we divide the tasks?|Et si on répartissait les tâches ?
I can take care of the slides.|Je peux m'occuper des diapositives.
Who is responsible for the code?|Qui est responsable du code ?
Let's meet again on Thursday.|Retrouvons-nous jeudi.
Sorry, I'm a bit behind.|Désolé, j'ai un peu de retard.
Great job, everyone!|Bravo à tous !`,
    d: [
      ["Planning the project", `Sara: We have two weeks. How about we divide the tasks? || Nous avons deux semaines. Et si on répartissait les tâches ?
Omar: Good idea. I can take care of the code. || Bonne idée. Je peux m'occuper du code.
Lina: I'll write the report. Who is responsible for the slides? || J'écris le rapport. Qui est responsable des diapositives ?
Sara: I am. Let's meet again on Thursday. || Moi. Retrouvons-nous jeudi.`],
      ["Disagreeing politely", `Omar: I think we should use a small dataset. || Je pense qu'on devrait utiliser un petit jeu de données.
Lina: I see your point, but a bigger dataset gives better results. || Je comprends ton point, mais un plus grand jeu de données donne de meilleurs résultats.
Omar: That's true. What do you suggest? || C'est vrai. Que suggères-tu ?
Lina: Let's start small and then add more data. || Commençons petit puis ajoutons des données.`],
    ],
    c: {
      en: "In a group project, every member has a role. One person can be the leader, another writes the report, and another prepares the slides. At the first meeting, you decide the tasks and the schedule. During discussions, give your opinion with 'I think' and 'In my opinion'. To disagree politely, say 'I see your point, but...'. At the end of each meeting, summarize the decisions and the next steps. Good communication solves most problems in a team.",
      fr: "Dans un projet de groupe, chaque membre a un rôle. Une personne peut être le chef, une autre écrit le rapport et une autre prépare les diapositives. À la première réunion, vous décidez des tâches et du calendrier. Pendant les discussions, donnez votre avis avec « I think » et « In my opinion ». Pour ne pas être d'accord poliment, dites « I see your point, but... ». À la fin de chaque réunion, résumez les décisions et les prochaines étapes. Une bonne communication résout la plupart des problèmes d'équipe.",
    },
    da: `« Agree »: kan9olo « I agree », machi « I am agree ». Verbe, machi adjectif.
Khilaf mou2adab: Ma t9olch « You are wrong » (qassi). 9ol « I see your point, but... » (fhemt nok-tatek, walakin...).
« Should »: bhal « khasso / khassna ». « We should start » = « khassna nebdaw ».`,
    r: {
      t: "Why teamwork matters in AI",
      en: "Modern AI projects are rarely built by one person. A typical team includes data scientists, software engineers, designers and project managers. Each member brings different skills. Communication is therefore as important as technical knowledge. Teams use short daily meetings to share progress and problems. They also write clear documents, so that new members can join easily. A student who learns to work in a group at university is better prepared for a professional career.",
      fr: "Les projets d'IA modernes sont rarement construits par une seule personne. Une équipe typique comprend des data scientists, des ingénieurs logiciels, des designers et des chefs de projet. Chaque membre apporte des compétences différentes. La communication est donc aussi importante que les connaissances techniques. Les équipes utilisent de courtes réunions quotidiennes pour partager l'avancement et les problèmes. Elles rédigent aussi des documents clairs pour que les nouveaux membres puissent rejoindre facilement. Un étudiant qui apprend à travailler en groupe à l'université est mieux préparé à une carrière professionnelle.",
    },
    s: "Jouez les deux rôles d'une réunion : proposez un plan (« I think we should… »), exprimez un désaccord poli (« I see your point, but… »), puis répartissez 3 tâches (« I can take care of… »).",
    p: { tip: "« Suggest » : accent sur la 2e syllabe (sug-JEST). « Responsible » : rih-SPAHN-suh-bl. Dans « agree », le « ee » est long : uh-GREE.", words: "suggestion,responsible,opinion,disagree,progress,solution" },
    q: [
      ["How do you disagree politely?", ["You are wrong.", "I see your point, but...", "No. Stop.", "That is stupid."], 1, "On reconnaît d'abord le point de l'autre, puis on exprime son désaccord."],
      ["« Who is responsible for the slides? » means…", ["Who likes the slides?", "Who is in charge of the slides?", "Who lost the slides?", "Who sees the slides?"], 1, "Responsible for = en charge de / responsable de."],
      ["Which is a suggestion?", ["How about we divide the tasks?", "I am tired.", "The meeting ended.", "It is Monday."], 0, "« How about… ? » sert à faire une proposition."],
    ],
    rq: [
      ["Who is in a typical AI team?", ["Only programmers", "Data scientists, engineers, designers, managers", "Only students"], 1, "Le texte cite plusieurs profils."],
      ["Why do teams write clear documents?", ["To look professional", "So new members can join easily", "To avoid meetings"], 1, "« so that new members can join easily »."],
    ],
    f: ["She suggested me to start now.", "She suggested that I start now.", "« Suggest » ne se construit pas avec « suggest someone to do » ; on dit « suggest that … » ou « suggest doing »."],
  },
  {
    id: "1-5",
    t: "Numbers, Time and Describing Data",
    fr: "Chiffres, temps et description de données",
    cat: "General English",
    goal: "Dire les nombres, pourcentages et dates, et décrire un graphique simple dans une présentation.",
    w: `number|nombre, numéro|NUM-ber
percent|pour cent|per-SENT
half|moitié|haf
double|double|DUH-bl
average|moyenne|AV-rij
total|total|TOH-tl
graph|graphique|graf
chart|diagramme|chart
table|tableau|TAY-bl
axis|axe|AK-sis
increase|augmentation, augmenter|in-KREES
decrease|diminution, diminuer|dih-KREES
to rise|monter|too rize
to fall|baisser|too fawl
to remain stable|rester stable|too rih-MAYN STAY-bl
sharp|brusque|sharp
gradual|progressif|GRAJ-oo-ul
peak|sommet, pic|peek
trend|tendance|trend
figure|chiffre, figure|FIG-yer
slide|diapositive|slide
audience|public|AW-dee-ens
to present|présenter|too prih-ZENT
to show|montrer|too shoh
according to|selon|uh-KOR-ding too`,
    x: `This graph shows the number of students per year.|Ce graphique montre le nombre d'étudiants par année.
The number increased from 20 to 50 percent.|Le nombre est passé de 20 à 50 pour cent.
There was a sharp rise in 2020.|Il y a eu une forte hausse en 2020.
The average is around 75.|La moyenne est d'environ 75.
As you can see on this slide...|Comme vous le voyez sur cette diapositive...
Let me move on to the next point.|Passons au point suivant.
According to the data, accuracy fell slightly.|Selon les données, la précision a légèrement baissé.
The figure remained stable.|Le chiffre est resté stable.
That's about half of the total.|C'est environ la moitié du total.
Thank you for your attention.|Merci de votre attention.`,
    d: [
      ["Reading numbers aloud", `Omar: How many students are in the course? || Combien d'étudiants y a-t-il dans le cours ?
Sara: There are one hundred and twenty-five. || Il y en a cent vingt-cinq.
Omar: And what percent are women? || Et quel pourcentage sont des femmes ?
Sara: About forty percent, almost half. || Environ quarante pour cent, presque la moitié.`],
      ["Presenting a graph", `Student: This graph shows the accuracy of our model. || Ce graphique montre la précision de notre modèle.
Student: As you can see, there is a sharp increase after epoch five. || Comme vous le voyez, il y a une forte hausse après l'époque cinq.
Professor: What is the peak value? || Quelle est la valeur maximale ?
Student: The peak is ninety-two percent, then it remains stable. || Le pic est à quatre-vingt-douze pour cent, puis cela reste stable.`],
    ],
    c: {
      en: "When you present data, use clear verbs. A number can rise or increase, fall or decrease, or remain stable. Add adjectives to describe speed: a sharp increase is fast, a gradual increase is slow. The highest point is the peak. Always say what the graph shows: 'This graph shows...'. Then describe the trend, give two or three important figures and finish with a conclusion. Say numbers slowly: 15 is fifteen, but 50 is fifty. The stress is different: fifTEEN and FIFty.",
      fr: "Quand vous présentez des données, utilisez des verbes clairs. Un nombre peut monter (rise, increase), baisser (fall, decrease) ou rester stable. Ajoutez des adjectifs pour décrire la vitesse : « sharp » est rapide, « gradual » est lent. Le point le plus haut est le « peak ». Dites toujours ce que montre le graphique : « This graph shows... ». Puis décrivez la tendance, donnez deux ou trois chiffres importants et terminez par une conclusion. Prononcez les nombres lentement : 15 se dit fifteen, mais 50 se dit fifty. L'accent est différent : fifTEEN et FIFty.",
    },
    da: `Nombres: 15 (fifteen) w 50 (fifty) kayb9aw qrab f s-sawt. Fifteen = fifTEEN (l-accent f l-akhir), fifty = FIFty (l-accent f l-awwal). Kteb-hom w 9ra-hom b s-sout 3ali.
« Increase » (noun) w « to increase » (verb): l-kelma wa7da, walakin l-accent kaytbeddel: INcrease (noun), inCREASE (verb).
Pourcentage: « 40% » kat-t9al « forty percent », bla « s » f « percent ».`,
    r: {
      t: "Reading a simple graph",
      en: "A university published a graph about the number of students in AI courses. In 2015 there were about two hundred students. The number rose slowly until 2018. Then there was a sharp increase, and in 2022 the figure reached its peak at nine hundred students. After that, the number remained stable. According to the university, the trend shows that more young people are interested in artificial intelligence. The average increase was about one hundred students per year.",
      fr: "Une université a publié un graphique sur le nombre d'étudiants dans les cours d'IA. En 2015, il y avait environ deux cents étudiants. Le nombre a augmenté lentement jusqu'en 2018. Puis il y a eu une forte hausse et, en 2022, le chiffre a atteint son pic à neuf cents étudiants. Ensuite, le nombre est resté stable. Selon l'université, la tendance montre que davantage de jeunes s'intéressent à l'intelligence artificielle. L'augmentation moyenne était d'environ cent étudiants par an.",
    },
    s: "Lisez à voix haute : 13, 30, 15, 50, 18, 80, 2.5 %, 1 250 et 2022 (« twenty twenty-two »). Puis décrivez à voix haute un graphique imaginaire en 4 phrases avec rise, fall, peak et stable.",
    p: { tip: "Distinguez -teen et -ty : thirTEEN (accent à la fin, « ee » long) contre THIRty (accent au début). Le « th » de « three » et « thirty » : langue entre les dents.", words: "fifteen,fifty,percent,average,gradual,increase" },
    q: [
      ["Which sentence describes a fast increase?", ["There was a gradual rise.", "There was a sharp rise.", "The figure remained stable.", "The figure fell slowly."], 1, "Sharp = brusque, rapide. Gradual = progressif."],
      ["How do you say 50?", ["fifteen", "fifty", "fivety", "fiftin"], 1, "50 = fifty (FIF-ty). 15 = fifteen (fif-TEEN)."],
      ["« The figure remained stable » means…", ["it went up", "it went down", "it did not change", "it disappeared"], 2, "Remain stable = rester stable, ne pas changer."],
    ],
    rq: [
      ["When did the number reach its peak?", ["2015", "2018", "2022"], 2, "« in 2022 the figure reached its peak »."],
      ["What happened after the peak?", ["It fell sharply", "It remained stable", "It doubled"], 1, "« After that, the number remained stable »."],
    ],
    f: ["The number of students have increased.", "The number of students has increased.", "Le sujet est « the number » (singulier) : on utilise « has », pas « have »."],
  },
];
