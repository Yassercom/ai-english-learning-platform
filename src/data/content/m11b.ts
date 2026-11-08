import type { RawLesson } from "../types";

export const m11b: RawLesson[] = [
  {
    id: "11-4",
    t: "Performance, Scaling and Model Optimization",
    fr: "Performance, passage à l'échelle et optimisation de modèles",
    cat: "Engineering",
    goal: "Mesurer et améliorer la vitesse et le coût d'un modèle en production.",
    w: `throughput|débit|THROO-put
latency|latence|LAY-tun-see
load|charge|lohd
scalability|capacité à passer à l'échelle|skay-luh-BIL-uh-tee
horizontal scaling|mise à l'échelle horizontale|hor-uh-ZAHN-tl SKAY-ling
caching|mise en cache|KASH-ing
batching|regroupement par lots|BACH-ing
quantization|quantification|kwahn-tuh-ZAY-shn
pruning|élagage|PROO-ning
distillation|distillation|dis-tuh-LAY-shn
model compression|compression de modèle|MAH-dl kum-PRESH-n
profiling|profilage|PROH-fie-ling
memory footprint|empreinte mémoire|MEM-uh-ree FUT-print
cost per request|coût par requête|kawst per rih-KWEST
GPU utilization|utilisation du GPU|jee-pee-YOO yoo-tuh-luh-ZAY-shn
edge device|appareil en périphérie|ej dih-VICE
on-device|sur l'appareil|ahn-dih-VICE
ONNX|ONNX (format d'échange de modèles)|AH-niks
optimization|optimisation|ahp-tuh-muh-ZAY-shn
peak traffic|pic de trafic|peek TRAF-ik
bottleneck|goulot d'étranglement|BAH-tl-nek
to benchmark|mesurer les performances|too BENCH-mark
to speed up|accélérer|too speed up
lightweight|léger|LITE-wayt
accuracy drop|perte de précision|AK-yuh-ruh-see drahp`,
    x: `The latency is two hundred milliseconds.|La latence est de deux cents millisecondes.
We can handle one thousand requests per second.|Nous pouvons gérer mille requêtes par seconde.
The bottleneck is the database.|Le goulot d'étranglement est la base de données.
Let's profile the code to find slow parts.|Profilons le code pour trouver les parties lentes.
Cache the results of frequent queries.|Mets en cache les résultats des requêtes fréquentes.
Quantization reduces the model size.|La quantification réduit la taille du modèle.
The accuracy drop is only one percent.|La perte de précision n'est que d'un pour cent.
We need to run the model on a phone.|Nous devons exécuter le modèle sur un téléphone.
Traffic doubles at peak hours.|Le trafic double aux heures de pointe.
Each request costs two cents.|Chaque requête coûte deux centimes.`,
    d: [
      ["A slow API", `Manager: Users say that the app is too slow. || Les utilisateurs disent que l'application est trop lente.
Engineer: The average latency is two seconds. || La latence moyenne est de deux secondes.
Manager: Where is the bottleneck? || Où est le goulot d'étranglement ?
Engineer: Profiling shows that model inference takes ninety percent of the time. || Le profilage montre que l'inférence du modèle prend quatre-vingt-dix pour cent du temps.`],
      ["Making a model smaller", `Omar: The model is too big for a phone. || Le modèle est trop gros pour un téléphone.
Sara: Try quantization. It uses fewer bits for each weight. || Essaie la quantification. Elle utilise moins de bits pour chaque poids.
Omar: Will the accuracy drop? || La précision va-t-elle baisser ?
Sara: Slightly, but you can measure it with a benchmark. || Légèrement, mais tu peux la mesurer avec un benchmark.`],
    ],
    c: {
      en: "In production, a model must be fast, scalable and affordable. Latency is the time to answer one request, and throughput is the number of requests handled per second. To improve performance, engineers first use profiling to find the bottleneck, instead of guessing. Common solutions are caching frequent results, batching several requests together and adding more machines, which is called horizontal scaling. Large models can be made smaller and faster with quantization, which uses fewer bits for the weights, with pruning, which removes unimportant weights, and with distillation, where a small model learns from a large one. Every optimization has a trade-off, so teams measure the accuracy drop.",
      fr: "En production, un modèle doit être rapide, évolutif et abordable. La latence est le temps pour répondre à une requête et le débit est le nombre de requêtes traitées par seconde. Pour améliorer les performances, les ingénieurs utilisent d'abord le profilage pour trouver le goulot d'étranglement, au lieu de deviner. Les solutions courantes sont la mise en cache des résultats fréquents, le regroupement de plusieurs requêtes et l'ajout de machines, ce qu'on appelle la mise à l'échelle horizontale. Les grands modèles peuvent être rendus plus petits et plus rapides par la quantification, qui utilise moins de bits pour les poids, par l'élagage, qui supprime les poids peu importants, et par la distillation, où un petit modèle apprend d'un grand. Chaque optimisation a un compromis, donc les équipes mesurent la perte de précision.",
    },
    da: `Latency vs throughput: latency = 9edda dqayeq kat-akhod request wa7da. Throughput = chhal mn request kay-9der y3alej f t-tanya. Ymken throughput 3ali w latency mashi mzyana.
Profiling: 9bel ma t-7awel t-sre3 l-code, 9ees wach mn 3ayn kayn l-bti2. Bzzaf mrrat mashi f l-model, f l-database wla f l-network.
Quantization: l-awzan kat-ssghr (mn 32 bit l 8 bit) b7al ma t-9ass l-ma3lomat mn dqiqa l 7asaba. L-model sghir w sri3, w l-precision tqrib nafs-ha.`,
    r: {
      t: "Distilling knowledge",
      en: "In 2015, Geoffrey Hinton, Oriol Vinyals and Jeff Dean published a paper called Distilling the Knowledge in a Neural Network. The authors showed that a small model, called the student, can learn to imitate a large model, called the teacher, or an ensemble of models. The student learns from the soft probabilities that the teacher gives for each class, which contain more information than a single label. The result is a smaller and faster model that keeps much of the performance of the large one. Today, distillation is widely used to put language and vision models on phones and other devices with limited resources.",
      fr: "En 2015, Geoffrey Hinton, Oriol Vinyals et Jeff Dean ont publié un article intitulé Distilling the Knowledge in a Neural Network. Les auteurs ont montré qu'un petit modèle, appelé l'élève, peut apprendre à imiter un grand modèle, appelé le professeur, ou un ensemble de modèles. L'élève apprend à partir des probabilités douces que le professeur donne pour chaque classe, qui contiennent plus d'information qu'une seule étiquette. Le résultat est un modèle plus petit et plus rapide qui garde une grande partie des performances du grand. Aujourd'hui, la distillation est largement utilisée pour mettre des modèles de langage et de vision sur des téléphones et d'autres appareils aux ressources limitées.",
    },
    s: "Décrivez à voix haute comment vous accéléreriez une application lente : « First, I would profile … The bottleneck may be … Then I would add … The trade-off is … »",
    p: { tip: "« Throughput » : THROO-put. « Latency » : LAY-tun-see. « Quantization » : kwahn-tuh-ZAY-shn. « Distillation » : dis-tuh-LAY-shn. « Scalability » : skay-luh-BIL-uh-tee. « Lightweight » : LITE-wayt.", words: "throughput,latency,quantization,distillation,scalability,lightweight" },
    q: [
      ["Throughput measures…", ["the number of requests handled per second", "the time of one request", "the model size", "the number of layers"], 0, "Débit = requêtes par seconde."],
      ["What should you do before optimizing?", ["Profile to find the bottleneck", "Buy a new computer", "Delete the tests", "Stop monitoring"], 0, "Mesurer avant d'optimiser."],
      ["Quantization…", ["uses fewer bits for the weights", "adds new classes", "deletes data", "increases the learning rate"], 0, "Réduit la taille et accélère."],
    ],
    rq: [
      ["What is the small model called in distillation?", ["The student", "The teacher", "The boss"], 0, "L'élève imite le professeur."],
      ["What does the student learn from?", ["Soft probabilities of the teacher", "Only labels", "Nothing"], 0, "Texte, 3e phrase."],
    ],
    f: ["The model is more faster than before.", "The model is faster than before.", "Pas de « more » avec un comparatif en -er."],
  },
  {
    id: "11-5",
    t: "Teamwork, Agile and Technical Documentation",
    fr: "Travail en équipe, agilité et documentation technique",
    cat: "Engineering",
    goal: "Participer à une réunion d'équipe, estimer des tâches et écrire une documentation claire.",
    w: `agile|agile|AJ-ul
sprint|sprint (cycle de travail)|sprint
stand-up|réunion quotidienne|STAND-up
backlog|liste de tâches à faire|BAK-lawg
user story|récit utilisateur|YOO-zer STOR-ee
ticket|ticket|TIK-it
milestone|jalon|MIEL-stohn
requirement|exigence|rih-KWIRE-munt
specification|spécification|spes-uh-fuh-KAY-shn
design document|document de conception|dih-ZINE DAH-kyuh-ment
technical documentation|documentation technique|TEK-nuh-kl dah-kyuh-men-TAY-shn
pair programming|programmation en binôme|pair PROH-gram-ing
retrospective|rétrospective|ret-roh-SPEK-tiv
onboarding|intégration d'un nouveau|AHN-bor-ding
handover|passation|HAN-doh-ver
blocker|blocage|BLAH-ker
to estimate|estimer|too ES-tuh-mayt
to prioritize|prioriser|too prie-OR-uh-tize
to escalate|faire remonter|too ES-kuh-layt
scope|périmètre|skohp
on track|dans les temps|ahn trak
behind schedule|en retard|bih-HIND SKEJ-ool
ahead of schedule|en avance|uh-HED uv SKEJ-ool
to commit to|s'engager à|too kuh-MIT too
to follow up|faire un suivi|too FAH-loh up`,
    x: `Yesterday I finished the data cleaning.|Hier, j'ai terminé le nettoyage des données.
Today I'm working on the evaluation script.|Aujourd'hui, je travaille sur le script d'évaluation.
I'm blocked by a missing access.|Je suis bloqué par un accès manquant.
We are a bit behind schedule.|Nous sommes un peu en retard.
Can you estimate how long this will take?|Peux-tu estimer le temps que cela prendra ?
Let's prioritize the most important tickets.|Priorisons les tickets les plus importants.
The scope of the project is too large.|Le périmètre du projet est trop large.
I'll follow up by email.|Je ferai un suivi par e-mail.
Let me update the documentation.|Laisse-moi mettre à jour la documentation.
We should escalate this to the manager.|Nous devrions faire remonter cela au responsable.`,
    d: [
      ["The daily stand-up", `Lead: Omar, what did you do yesterday? || Omar, qu'as-tu fait hier ?
Omar: I finished the data cleaning. Today I'll start the training script. || J'ai terminé le nettoyage des données. Aujourd'hui je commence le script d'entraînement.
Lead: Any blockers? || Des blocages ?
Omar: Yes, I need access to the GPU server. || Oui, j'ai besoin d'accéder au serveur GPU.`],
      ["Estimating a task", `Manager: How long will the evaluation take? || Combien de temps l'évaluation va-t-elle prendre ?
Sara: I think about three days, but there is some uncertainty. || Je pense environ trois jours, mais il y a une certaine incertitude.
Manager: Can you commit to Friday? || Peux-tu t'engager pour vendredi ?
Sara: Yes, if the data arrives on time. I'll tell you early if we are behind schedule. || Oui, si les données arrivent à temps. Je te préviendrai tôt si nous sommes en retard.`],
    ],
    c: {
      en: "Most technology teams use agile methods: they work in short cycles called sprints, usually one or two weeks. Tasks are written as tickets in a backlog, and the team prioritizes them. Each day, a short stand-up meeting answers three questions: what did I do yesterday, what will I do today and what blocks me? At the end of a sprint, the team holds a retrospective to discuss what to improve. Clear communication includes honest estimates and early warnings when you are behind schedule. Written documentation is also important: a good README and a design document help new members during onboarding and make handover easier when someone leaves.",
      fr: "La plupart des équipes technologiques utilisent des méthodes agiles : elles travaillent en cycles courts appelés sprints, généralement d'une ou deux semaines. Les tâches sont écrites sous forme de tickets dans un backlog et l'équipe les priorise. Chaque jour, une courte réunion quotidienne répond à trois questions : qu'ai-je fait hier, que ferai-je aujourd'hui et qu'est-ce qui me bloque ? À la fin d'un sprint, l'équipe tient une rétrospective pour discuter de ce qu'il faut améliorer. Une communication claire comprend des estimations honnêtes et des alertes précoces quand on est en retard. La documentation écrite est aussi importante : un bon README et un document de conception aident les nouveaux membres lors de l'intégration et facilitent la passation quand quelqu'un part.",
    },
    da: `Stand-up: ijtima3 qsir (15 dqiqa) koll nhar: chnou dert lbareh, chnou ghadi nder lyoum, w wach 3and-i chi 7ajiz (blocker). Machi waqt dial tdhakar teqni.
Behind schedule: ila ghadi t-t2akhar, 9ol-ha mn bkri. « I'll be late » 9bel l-deadline a7sen mn « sorry, ma-kmeltch » nhar l-deadline.
Documentation: hiya hadiya l-l-moustaqbal: nta men b3d 6 chhour, w l-za3im jdid. README kay-9ol kif ykhdem l-projet.`,
    r: {
      t: "Writing a good README",
      en: "A README is the first file that people read in a project. A good one answers five questions. What does the project do? How do I install it? How do I run an example? How do I run the tests? Who can I contact? Use short sentences and clear headings, and show commands in code blocks. Add the versions of the main libraries, because many problems come from different versions. Keep the README up to date: old instructions that no longer work make readers lose trust. Remember that your future self is also a reader.",
      fr: "Un README est le premier fichier que les gens lisent dans un projet. Un bon README répond à cinq questions. Que fait le projet ? Comment l'installer ? Comment lancer un exemple ? Comment lancer les tests ? Qui contacter ? Utilisez des phrases courtes et des titres clairs, et montrez les commandes dans des blocs de code. Ajoutez les versions des principales bibliothèques, car beaucoup de problèmes viennent de versions différentes. Gardez le README à jour : des instructions anciennes qui ne marchent plus font perdre la confiance des lecteurs. N'oubliez pas que votre futur vous est aussi un lecteur.",
    },
    s: "Faites votre stand-up à voix haute (30 secondes) : « Yesterday I … Today I will … I am blocked by … » Puis estimez un travail : « I think it will take … but there is some uncertainty because … »",
    p: { tip: "« Agile » : AJ-ul (américain). « Sprint » : sprint. « Backlog » : BAK-lawg. « Retrospective » : ret-roh-SPEK-tiv. « Specification » : spes-uh-fuh-KAY-shn. « Onboarding » : AHN-bor-ding.", words: "agile,backlog,retrospective,specification,onboarding,milestone" },
    q: [
      ["A stand-up meeting is…", ["a short daily team meeting", "a long yearly meeting", "a software bug", "a type of test"], 0, "Hier / aujourd'hui / blocages."],
      ["What should you do if you are behind schedule?", ["Warn the team early", "Hide it", "Wait for the deadline", "Change jobs"], 0, "Alerte précoce = confiance."],
      ["Which item belongs in a README?", ["How to install and run the project", "Your password", "A joke only", "Nothing"], 0, "Objectif, installation, exemple, tests, contact."],
    ],
    rq: [
      ["How many questions should a good README answer?", ["Five", "Two", "Twenty"], 0, "« answers five questions »."],
      ["Why add library versions?", ["Many problems come from different versions", "It looks nice", "It is required by law"], 0, "Texte, 4e phrase."],
    ],
    f: ["I will to finish the report on Friday.", "I will finish the report on Friday.", "Après « will », verbe sans « to »."],
  },
];
