import type { RawLesson } from "../types";

export const m11: RawLesson[] = [
  {
    id: "11-1",
    t: "Git and Software Engineering Practices",
    fr: "Git et bonnes pratiques d'ingénierie logicielle",
    cat: "Engineering",
    goal: "Collaborer sur du code avec Git et expliquer une revue de code en anglais.",
    w: `repository|dépôt (de code)|rih-PAH-zuh-tor-ee
commit|commit (enregistrement)|kuh-MIT
branch|branche|branch
to merge|fusionner|too merj
pull request|demande de fusion|pul rih-KWEST
code review|revue de code|kohd rih-VYOO
merge conflict|conflit de fusion|merj KAHN-flikt
to clone|cloner|too klohn
to push|pousser (publier)|too push
to pull|tirer (récupérer)|too pul
diff|différence|dif
issue|ticket, problème|ISH-oo
README|fichier de présentation|REED-mee
test coverage|couverture de tests|test KUV-rij
linting|analyse statique du style|LIN-ting
refactoring|refactorisation|ree-FAK-ter-ing
continuous integration|intégration continue|kun-TIN-yoo-us in-tuh-GRAY-shn
dependency|dépendance|dih-PEN-dun-see
requirements file|fichier de dépendances|rih-KWIRE-munts file
readable|lisible|REE-duh-bl
technical debt|dette technique|TEK-nuh-kl det
maintainable|maintenable|mayn-TAY-nuh-bl
commit message|message de commit|kuh-MIT MES-ij
to revert|annuler (un commit)|too rih-VERT
to review|relire, revoir|too rih-VYOO`,
    x: `Clone the repository and create a new branch.|Clone le dépôt et crée une nouvelle branche.
I pushed my changes to the remote.|J'ai poussé mes modifications sur le dépôt distant.
Please open a pull request.|Merci d'ouvrir une demande de fusion.
Could you review my code?|Peux-tu relire mon code ?
There is a merge conflict in this file.|Il y a un conflit de fusion dans ce fichier.
Write a clear commit message.|Écris un message de commit clair.
The tests pass, so you can merge.|Les tests passent, donc tu peux fusionner.
Let's revert this commit.|Annulons ce commit.
This function needs refactoring.|Cette fonction a besoin d'être refactorisée.
Add the dependency to the requirements file.|Ajoute la dépendance au fichier de dépendances.`,
    d: [
      ["Opening a pull request", `Omar: I finished the feature. What should I do now? || J'ai terminé la fonctionnalité. Que dois-je faire maintenant ?
Sara: Push your branch and open a pull request. || Pousse ta branche et ouvre une demande de fusion.
Omar: Who reviews it? || Qui la relit ?
Sara: Me and Lina. Please write a clear description and link the issue. || Moi et Lina. Écris une description claire et lie le ticket.`],
      ["A code review", `Reviewer: The logic is correct, but this function is too long. || La logique est correcte, mais cette fonction est trop longue.
Author: Should I split it? || Dois-je la découper ?
Reviewer: Yes, please. Also, add a unit test for the empty case. || Oui, s'il te plaît. Ajoute aussi un test unitaire pour le cas vide.
Author: Sure. I'll update the pull request this afternoon. || Bien sûr. Je mettrai à jour la demande cet après-midi.`],
    ],
    c: {
      en: "Professional teams use version control to manage code, and Git is the most common tool. A repository stores the project and its history. Each commit is a saved change with a message that explains it. Developers work on separate branches, then open a pull request so that colleagues can review the code before it is merged into the main branch. If two people change the same lines, Git reports a merge conflict, which must be resolved by hand. Good engineering also includes tests, linting to keep a consistent style, continuous integration to run tests automatically and refactoring to keep the code readable and maintainable. Too many shortcuts create technical debt.",
      fr: "Les équipes professionnelles utilisent le contrôle de version pour gérer le code, et Git est l'outil le plus courant. Un dépôt stocke le projet et son historique. Chaque commit est une modification enregistrée avec un message qui l'explique. Les développeurs travaillent sur des branches séparées, puis ouvrent une demande de fusion pour que les collègues relisent le code avant qu'il soit fusionné dans la branche principale. Si deux personnes modifient les mêmes lignes, Git signale un conflit de fusion, qui doit être résolu à la main. Une bonne ingénierie comprend aussi des tests, l'analyse statique pour garder un style cohérent, l'intégration continue pour exécuter les tests automatiquement et la refactorisation pour garder le code lisible et maintenable. Trop de raccourcis créent de la dette technique.",
    },
    da: `Git: « bar-nameeej » kay-7fed koll t-tghyirat dyal l-code. T9der trja3 l-nuskha 9dima, w bzzaf d n-nass t9der t-khdem f nafs l-projet.
Branch / merge: branch = nuskha mouwaziya bach tjrreb bla ma tkhrb l-asl. Merge = tdkhel t-tghyirat l-l-asl men ba3d ma l-fariq ychouf-hom.
Pull request: tlab: « chouf 3awn-ni, nsidh-ha? ». Code review machi 7oukm 3lik, hiya taa3awon bach n7assno l-jawda.`,
    r: {
      t: "Why code review matters",
      en: "In many companies, no code reaches production without a code review. A colleague reads the changes and checks logic, style, tests and security. This process catches bugs early and spreads knowledge across the team. For a beginner, reviews can feel uncomfortable, but they are not personal. A good reviewer writes polite comments, explains why something should change and also mentions what is done well. A good author reads comments calmly, asks questions when something is unclear and thanks the reviewer. In this way, the team improves its code and its communication at the same time.",
      fr: "Dans de nombreuses entreprises, aucun code n'arrive en production sans revue de code. Un collègue lit les modifications et vérifie la logique, le style, les tests et la sécurité. Ce processus détecte les bogues tôt et diffuse la connaissance dans l'équipe. Pour un débutant, les revues peuvent être inconfortables, mais elles ne sont pas personnelles. Un bon relecteur écrit des commentaires polis, explique pourquoi quelque chose devrait changer et mentionne aussi ce qui est bien fait. Un bon auteur lit les commentaires calmement, pose des questions quand quelque chose n'est pas clair et remercie le relecteur. Ainsi, l'équipe améliore son code et sa communication en même temps.",
    },
    s: "Jouez les deux rôles d'une revue de code : relecteur (« Could you rename this variable? It is not very clear. ») puis auteur (« Good point. I'll fix it and add a test. »). Répétez avec un autre commentaire.",
    p: { tip: "« Repository » : rih-PAH-zuh-tor-ee. « Commit » (verbe et nom) : kuh-MIT. « Branch » : branch (le « a » est ouvert). « Dependency » : dih-PEN-dun-see. « Maintainable » : mayn-TAY-nuh-bl.", words: "repository,commit,dependency,maintainable,refactoring,review" },
    q: [
      ["What is a pull request?", ["A request to merge your changes after review", "A request to download Python", "A bug", "A server crash"], 0, "Mécanisme de revue et de fusion."],
      ["A merge conflict happens when…", ["two people change the same lines", "the internet is slow", "a test passes", "a file is deleted"], 0, "Git ne sait pas quelle version garder."],
      ["Which commit message is better?", ["Fix empty list error in tokenizer", "stuff", "changes", "asdf"], 0, "Précis et informatif."],
    ],
    rq: [
      ["What does a good reviewer also mention?", ["What is done well", "Nothing positive", "The author's age"], 0, "Texte, 4e phrase."],
      ["Are reviews personal?", ["No", "Yes", "Only on Fridays"], 0, "« they are not personal »."],
    ],
    f: ["I pushed my code on the branch since yesterday.", "I have pushed my code to the branch.", "On pousse « to » une branche ; present perfect sans « since yesterday » si on ne précise pas la durée."],
  },
  {
    id: "11-2",
    t: "MLOps: From Notebook to Production",
    fr: "MLOps : du notebook à la production",
    cat: "Engineering",
    goal: "Décrire le cycle de vie d'un modèle en production et expliquer la dérive des données.",
    w: `MLOps|MLOps (opérations ML)|em-el-AHPS
deployment|déploiement|dih-PLOY-munt
to deploy|déployer|too dih-PLOY
production|production|pruh-DUK-shn
model registry|registre de modèles|MAH-dl REJ-uh-stree
artifact|artefact|AR-tuh-fakt
data versioning|gestion de versions des données|DAY-tuh VER-zhn-ing
feature store|magasin de variables|FEE-cher stor
staging|préproduction|STAY-jing
rollback|retour arrière|ROHL-bak
canary release|déploiement progressif|kuh-NAIR-ee rih-LEES
batch prediction|prédiction par lot|bach prih-DIK-shn
real-time prediction|prédiction en temps réel|REEL-tyme prih-DIK-shn
serving|mise à disposition|SER-ving
retraining|réentraînement|ree-TRAY-ning
data drift|dérive des données|DAY-tuh drift
concept drift|dérive conceptuelle|KAHN-sept drift
monitoring|surveillance|MAH-nuh-ter-ing
alert|alerte|uh-LERT
downtime|temps d'arrêt|DOWN-tyme
endpoint|point d'accès|END-poynt
scheduled job|tâche planifiée|SKEJ-oold jahb
release|version publiée|rih-LEES
to track|suivre|too trak
lifecycle|cycle de vie|LIE-fih-sy-kl`,
    x: `The model is ready to be deployed.|Le modèle est prêt à être déployé.
We deploy to staging before production.|Nous déployons en préproduction avant la production.
Let's start with a canary release to five percent of users.|Commençons par un déploiement progressif à cinq pour cent des utilisateurs.
If something goes wrong, we roll back.|Si quelque chose se passe mal, nous faisons un retour arrière.
The input data has drifted.|Les données d'entrée ont dérivé.
We retrain the model every month.|Nous réentraînons le modèle chaque mois.
Which version is running in production?|Quelle version tourne en production ?
Set up an alert for low accuracy.|Configure une alerte pour une précision faible.
Predictions are made in batch every night.|Les prédictions sont faites par lot chaque nuit.
We store every model in the registry.|Nous stockons chaque modèle dans le registre.`,
    d: [
      ["Model performance drops", `Manager: The model's accuracy has dropped in production. || La précision du modèle a baissé en production.
Engineer: I think there is data drift. The customers changed their behavior. || Je pense qu'il y a une dérive des données. Les clients ont changé de comportement.
Manager: What do you suggest? || Que suggères-tu ?
Engineer: Retrain on recent data and add monitoring with alerts. || Réentraîner sur des données récentes et ajouter une surveillance avec des alertes.`],
      ["A safe release", `Omar: Can I deploy the new model today? || Puis-je déployer le nouveau modèle aujourd'hui ?
Sara: First test it in staging, then release it to ten percent of users. || D'abord teste-le en préproduction, puis publie-le à dix pour cent des utilisateurs.
Omar: And if it fails? || Et s'il échoue ?
Sara: We roll back to the previous version in the registry. || Nous revenons à la version précédente dans le registre.`],
    ],
    c: {
      en: "A model in a notebook is not yet a product. MLOps applies engineering practices to the full lifecycle of a model: data, training, evaluation, deployment and monitoring. Each trained model is saved as an artifact in a model registry, with its version and metrics. Teams usually deploy first to a staging environment and then to production, often with a canary release that exposes the new model to a small share of users. If problems appear, they can roll back to the previous version. In production, monitoring tracks latency, errors and prediction quality. Because the world changes, data drift or concept drift may reduce accuracy, so models are retrained regularly.",
      fr: "Un modèle dans un notebook n'est pas encore un produit. Le MLOps applique des pratiques d'ingénierie à tout le cycle de vie d'un modèle : données, entraînement, évaluation, déploiement et surveillance. Chaque modèle entraîné est enregistré comme artefact dans un registre de modèles, avec sa version et ses métriques. Les équipes déploient généralement d'abord dans un environnement de préproduction puis en production, souvent avec un déploiement progressif qui expose le nouveau modèle à une petite part des utilisateurs. Si des problèmes apparaissent, elles peuvent revenir à la version précédente. En production, la surveillance suit la latence, les erreurs et la qualité des prédictions. Comme le monde change, la dérive des données ou conceptuelle peut réduire la précision, donc les modèles sont réentraînés régulièrement.",
    },
    da: `Notebook ≠ product: l-notebook ykhdem 3and-ek. L-production = mlayin d n-nass kay-sta3mlouh koll nhar 24/7. Khass tests, monitoring, w plan ila tkharbat.
Data drift: l-data f production tbeddlat 3la lli t3lem 3liha l-modèle (mital: 3adat jdida dyal chri b3d COVID). L-modèle y-khsar dqqa b dqqa bla ma ytkhaleq error.
Rollback: ila l-version jdida kharba, rj3 l-version l-9dima f 9ll mn dqiqa. Hadi taqniya bach tnaam mrta7.`,
    r: {
      t: "Hidden technical debt in machine learning",
      en: "In 2015, a group of Google engineers published a paper at the NeurIPS conference with the title Hidden Technical Debt in Machine Learning Systems. They explained that the machine learning code is only a small part of a real system. Around it, there are data collection, configuration, monitoring, serving infrastructure and many other components. Each of these parts can create maintenance problems that are difficult to see at the beginning. The paper encouraged teams to think about the whole system, not only the model, and it became one of the references of the MLOps movement.",
      fr: "En 2015, un groupe d'ingénieurs de Google a publié un article à la conférence NeurIPS intitulé Hidden Technical Debt in Machine Learning Systems. Ils ont expliqué que le code d'apprentissage automatique n'est qu'une petite partie d'un système réel. Autour, il y a la collecte de données, la configuration, la surveillance, l'infrastructure de service et de nombreux autres composants. Chacune de ces parties peut créer des problèmes de maintenance difficiles à voir au début. L'article a encouragé les équipes à penser à tout le système, pas seulement au modèle, et il est devenu l'une des références du mouvement MLOps.",
    },
    s: "Expliquez à voix haute le chemin d'un modèle du notebook à la production en 5 étapes : « First, we … Then, we … Before production, we … After deployment, we monitor … If the performance drops, we … »",
    p: { tip: "« Deployment » : dih-PLOY-munt. « Artifact » : AR-tuh-fakt. « Canary » : kuh-NAIR-ee (comme l'oiseau). « Lifecycle » : LIE-fih-sy-kl. « Rollback » : ROHL-bak. « Staging » : STAY-jing.", words: "deployment,artifact,canary,lifecycle,rollback,monitoring" },
    q: [
      ["Data drift means…", ["production data changes compared to training data", "data is deleted", "the GPU is hot", "labels are missing"], 0, "La distribution évolue."],
      ["A canary release…", ["exposes a new model to a small share of users first", "deletes the old model", "retrains the model", "encrypts data"], 0, "Réduit le risque."],
      ["Where do you store versions of trained models?", ["In a model registry", "In a printer", "In the browser history", "In a spreadsheet only"], 0, "Registre de modèles."],
    ],
    rq: [
      ["According to the paper, ML code is…", ["a small part of a real system", "the whole system", "useless"], 0, "Première analyse."],
      ["What did the paper encourage?", ["Thinking about the whole system", "Writing less code", "Stopping research"], 0, "Dernière partie."],
    ],
    f: ["We deployed the model in production yesterday and it works since.", "We deployed the model to production yesterday and it has worked since.", "On déploie « to » production ; present perfect avec « since »."],
  },
  {
    id: "11-3",
    t: "APIs, Containers and the Cloud",
    fr: "API, conteneurs et cloud",
    cat: "Engineering",
    goal: "Décrire une API de modèle, un conteneur Docker et un déploiement cloud.",
    w: `API|interface de programmation|ay-pee-EYE
REST|REST (style d'API web)|rest
endpoint|point d'accès|END-poynt
JSON|JSON (format de données)|JAY-sahn
status code|code de statut|STAY-tus kohd
API key|clé d'API|ay-pee-EYE kee
rate limit|limite de débit|rayt LIM-it
Docker|Docker|DAH-ker
container|conteneur|kun-TAY-ner
image|image (de conteneur)|IM-ij
Dockerfile|fichier Docker|DAH-ker-file
orchestration|orchestration|or-kuh-STRAY-shn
Kubernetes|Kubernetes (orchestrateur)|koo-ber-NET-eez
microservice|microservice|MIE-kroh-ser-vis
cloud provider|fournisseur cloud|klowd pruh-VIE-der
virtual machine|machine virtuelle|VER-choo-ul muh-SHEEN
serverless|sans serveur|SERV-er-lis
environment variable|variable d'environnement|in-VIE-run-munt VER-ee-uh-bl
secret|secret|SEE-krit
timeout|délai d'attente dépassé|TIME-owt
payload|charge utile|PAY-lohd
to expose|exposer|too ik-SPOHZ
to build|construire|too bild
to authenticate|authentifier|too aw-THEN-tuh-kayt
reliable|fiable|rih-LIE-uh-bl`,
    x: `The model is available through a REST API.|Le modèle est disponible via une API REST.
Send a POST request with a JSON payload.|Envoie une requête POST avec une charge JSON.
The server returns a status code two hundred.|Le serveur renvoie un code de statut deux cents.
I get a timeout error.|J'obtiens une erreur de délai dépassé.
You need an API key to authenticate.|Il faut une clé d'API pour s'authentifier.
Never store secrets in the code.|Ne stocke jamais de secrets dans le code.
Use an environment variable instead.|Utilise plutôt une variable d'environnement.
Build the Docker image and run the container.|Construis l'image Docker et lance le conteneur.
It works on my machine, but not in the container.|Ça marche sur ma machine, mais pas dans le conteneur.
We are limited to one hundred requests per minute.|Nous sommes limités à cent requêtes par minute.`,
    d: [
      ["Calling a model API", `Omar: How do I use the sentiment model? || Comment utiliser le modèle de sentiment ?
Sara: Send a POST request to the endpoint with the text in a JSON payload. || Envoie une requête POST au point d'accès avec le texte dans une charge JSON.
Omar: What do I get back? || Qu'est-ce que je reçois ?
Sara: A JSON response with the label and a confidence score. || Une réponse JSON avec l'étiquette et un score de confiance.`],
      ["It works on my machine", `Teacher: Why do we use Docker? || Pourquoi utilise-t-on Docker ?
Student: A container includes the code and all dependencies. || Un conteneur inclut le code et toutes les dépendances.
Student: So it runs the same way everywhere. || Donc il fonctionne de la même façon partout.
Teacher: Exactly. That solves the classic problem: it works on my machine. || Exactement. Cela résout le problème classique : ça marche sur ma machine.`],
    ],
    c: {
      en: "To let other programs use a model, engineers expose it through an API. In a REST API, a client sends a request to an endpoint, usually with a JSON payload, and the server returns a response with a status code: 200 means success, 400 means a client error and 500 means a server error. APIs often require an API key to authenticate and have a rate limit. Secrets such as keys must be stored in environment variables, never in the code. A Docker container packages the code and all its dependencies, so it runs the same way everywhere. Cloud providers run containers on virtual machines or serverless platforms, and tools such as Kubernetes manage many containers.",
      fr: "Pour permettre à d'autres programmes d'utiliser un modèle, les ingénieurs l'exposent via une API. Dans une API REST, un client envoie une requête à un point d'accès, généralement avec une charge JSON, et le serveur renvoie une réponse avec un code de statut : 200 signifie succès, 400 une erreur du client et 500 une erreur du serveur. Les API exigent souvent une clé d'API pour s'authentifier et ont une limite de débit. Les secrets comme les clés doivent être stockés dans des variables d'environnement, jamais dans le code. Un conteneur Docker emballe le code et toutes ses dépendances pour qu'il fonctionne de la même façon partout. Les fournisseurs cloud exécutent des conteneurs sur des machines virtuelles ou des plateformes sans serveur, et des outils comme Kubernetes gèrent de nombreux conteneurs.",
    },
    da: `API: « l-bab » li kay-3tik l-barnamaj akhor yt-sal b l-modèle dyalek. Hiya 7alqat l-wasl: nta kat-sift JSON, l-server kay-rdd JSON.
Status code: 200 = nja7, 404 = ma-l9ahach, 401 = khasek login, 500 = l-mochkil f l-server. Hfd-hom, ghadi tkoun 3and-ek bzzaf f l-debugging.
Docker: sandouq (container) fih l-code + koll ma ykhesso. Ay pc ykhdem lih nafs l-chay. « Khdam 3and-i walakin ma-khdamch 3and-ek » ma b9ach mochkil.`,
    r: {
      t: "Keep your secrets secret",
      en: "A common and costly mistake is to publish an API key by accident, for example by uploading a code file to a public repository. Automatic programs scan public repositories and can steal exposed keys within minutes. The owner of the key may then receive a very large bill for services that somebody else used. To avoid this problem, never write secrets directly in the code. Store them in environment variables or in a secret manager, add the configuration files to the ignore list of Git, and rotate a key immediately if you think that it is exposed.",
      fr: "Une erreur fréquente et coûteuse est de publier une clé d'API par accident, par exemple en téléversant un fichier de code dans un dépôt public. Des programmes automatiques parcourent les dépôts publics et peuvent voler les clés exposées en quelques minutes. Le propriétaire de la clé peut alors recevoir une très grosse facture pour des services utilisés par quelqu'un d'autre. Pour éviter ce problème, n'écrivez jamais de secrets directement dans le code. Stockez-les dans des variables d'environnement ou dans un gestionnaire de secrets, ajoutez les fichiers de configuration à la liste d'exclusion de Git et changez une clé immédiatement si vous pensez qu'elle est exposée.",
    },
    s: "Expliquez à voix haute à un collègue comment appeler une API : « You send a request to the endpoint. The payload is … The server returns … If you get 401, it means … »",
    p: { tip: "« API » : ay-pee-EYE. « JSON » : JAY-sahn (comme le prénom Jason). « Docker » : DAH-ker. « Kubernetes » : koo-ber-NET-eez. « Payload » : PAY-lohd. « Serverless » : SERV-er-lis.", words: "endpoint,payload,container,Kubernetes,serverless,authenticate" },
    q: [
      ["HTTP status 404 usually means…", ["resource not found", "success", "server crashed", "payment needed"], 0, "404 Not Found."],
      ["Where should API keys be stored?", ["In environment variables or a secret manager", "In the public code", "In an email", "On a sticker"], 0, "Pour éviter les fuites."],
      ["A Docker container includes…", ["the code and its dependencies", "only the screen", "only data", "only the CPU"], 0, "Portabilité."],
    ],
    rq: [
      ["How fast can exposed keys be stolen?", ["Within minutes", "After one year", "Never"], 0, "« within minutes »."],
      ["What should you do if a key may be exposed?", ["Rotate it immediately", "Ignore it", "Post it again"], 0, "Dernière phrase."],
    ],
    f: ["I have sent the request yesterday.", "I sent the request yesterday.", "Avec un moment précis passé (yesterday), on utilise le prétérit."],
  },
];
