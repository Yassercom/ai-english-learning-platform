import type { RawLesson } from "../types";

export const m10: RawLesson[] = [
  {
    id: "10-1",
    t: "Reinforcement Learning",
    fr: "Apprentissage par renforcement",
    cat: "Advanced AI",
    goal: "Expliquer l'agent, l'environnement, la récompense et la politique, avec des exemples réels.",
    w: `agent|agent|AY-junt
environment|environnement|in-VIE-run-munt
state|état|stayt
action|action|AK-shn
reward|récompense|rih-WORD
policy|politique (stratégie)|PAH-luh-see
value function|fonction de valeur|VAL-yoo FUNK-shn
episode|épisode|EP-uh-sohd
return|rendement cumulé|rih-TERN
discount factor|facteur d'actualisation|DIS-kownt FAK-ter
exploration|exploration|ek-spluh-RAY-shn
exploitation|exploitation|ek-sploy-TAY-shn
trial and error|essais et erreurs|TRIE-ul and ER-er
Q-learning|Q-learning|KYOO-ler-ning
deep Q-network|réseau Q profond|deep KYOO NET-werk
policy gradient|gradient de politique|PAH-luh-see GRAY-dee-unt
simulation|simulation|sim-yuh-LAY-shn
sparse reward|récompense rare|spars rih-WORD
sample efficiency|efficacité en données|SAM-pl ih-FISH-n-see
Markov decision process|processus de décision markovien|MAR-kawf dih-SIZH-n PRAH-ses
long-term|à long terme|lawng-term
short-term|à court terme|short-term
to maximize|maximiser|too MAK-suh-mize
to penalize|pénaliser|too PEE-nl-ize
strategy|stratégie|STRAT-uh-jee`,
    x: `The agent takes an action in the environment.|L'agent effectue une action dans l'environnement.
It receives a reward and a new state.|Il reçoit une récompense et un nouvel état.
The goal is to maximize the total reward.|Le but est de maximiser la récompense totale.
The policy tells the agent what to do in each state.|La politique indique à l'agent quoi faire dans chaque état.
The agent must balance exploration and exploitation.|L'agent doit équilibrer exploration et exploitation.
It learns by trial and error.|Il apprend par essais et erreurs.
We train the agent in a simulation.|Nous entraînons l'agent dans une simulation.
The reward is very sparse.|La récompense est très rare.
This method needs millions of episodes.|Cette méthode nécessite des millions d'épisodes.
The agent prefers long-term rewards.|L'agent préfère les récompenses à long terme.`,
    d: [
      ["Explaining RL with a game", `Student: How does reinforcement learning work in a video game? || Comment fonctionne l'apprentissage par renforcement dans un jeu vidéo ?
Teacher: The agent sees the state of the game and chooses an action. || L'agent voit l'état du jeu et choisit une action.
Student: And the reward? || Et la récompense ?
Teacher: The score. The agent learns a policy that increases the score over time. || Le score. L'agent apprend une politique qui augmente le score au fil du temps.`],
      ["Exploration or exploitation?", `Omar: My agent always repeats the same action. || Mon agent répète toujours la même action.
Sara: It exploits what it knows, but it does not explore. || Il exploite ce qu'il connaît, mais il n'explore pas.
Omar: How can I change that? || Comment changer cela ?
Sara: Add some randomness, so it sometimes tries new actions. || Ajoute un peu d'aléa pour qu'il essaie parfois de nouvelles actions.`],
    ],
    c: {
      en: "In reinforcement learning, an agent interacts with an environment. At each step, the agent observes the state, chooses an action and receives a reward and a new state. The goal is to learn a policy, a rule that selects actions, in order to maximize the total reward over time. The agent has to balance exploration, trying new actions, and exploitation, using the best known action. A discount factor makes immediate rewards more important than distant ones. Methods such as Q-learning and policy gradients are used to learn. Training often takes place in a simulation, because real mistakes can be expensive. Reinforcement learning is used in games, robotics and control systems.",
      fr: "En apprentissage par renforcement, un agent interagit avec un environnement. À chaque pas, l'agent observe l'état, choisit une action et reçoit une récompense et un nouvel état. Le but est d'apprendre une politique, une règle qui choisit des actions, afin de maximiser la récompense totale au fil du temps. L'agent doit équilibrer l'exploration, essayer de nouvelles actions, et l'exploitation, utiliser la meilleure action connue. Un facteur d'actualisation rend les récompenses immédiates plus importantes que les lointaines. Des méthodes comme le Q-learning et les gradients de politique servent à apprendre. L'entraînement a souvent lieu dans une simulation, car les erreurs réelles peuvent être coûteuses. L'apprentissage par renforcement est utilisé dans les jeux, la robotique et les systèmes de contrôle.",
    },
    da: `Agent / environment / reward: agent = l-li kay-t3lem (bhal tifl). Environment = l-3alam li howa fih. Reward = ch-chay2 li kay-t3ti lih (7lwa wla 3o9oba). Bla label: l-agent kay-t3lem mn natij l-a3mal dyalo.
Exploration vs exploitation: exploration = jerrb 7aja jdida. Exploitation = 3awed l-7aja li 3rfti. Mital: matam jdid wla l-matam li dima kat-mchi lih?
Policy: l-qa3ida li kat9ol l-agent chnou ydir f koll 7ala. Hiya « l-3a9l » dyal l-agent.`,
    r: {
      t: "AlphaGo and the game of Go",
      en: "In March 2016, a computer program called AlphaGo, developed by the company DeepMind, defeated the professional Go player Lee Sedol in a match in Seoul, winning four games to one. Go is a very complex board game with more possible positions than a computer can check. AlphaGo combined deep neural networks, which evaluate positions, with reinforcement learning, in which the program improved by playing many games against itself. The match was reported around the world, and it showed that reinforcement learning could solve problems that many experts expected to remain out of reach for years.",
      fr: "En mars 2016, un programme informatique appelé AlphaGo, développé par la société DeepMind, a battu le joueur professionnel de go Lee Sedol lors d'un match à Séoul, en gagnant quatre parties à une. Le go est un jeu de plateau très complexe, avec plus de positions possibles qu'un ordinateur ne peut en vérifier. AlphaGo combinait des réseaux de neurones profonds, qui évaluent les positions, et de l'apprentissage par renforcement, dans lequel le programme s'améliorait en jouant de nombreuses parties contre lui-même. Le match a été relayé dans le monde entier et a montré que l'apprentissage par renforcement pouvait résoudre des problèmes que beaucoup d'experts pensaient hors de portée pendant des années.",
    },
    s: "Expliquez à voix haute le principe du RL avec un exemple de votre choix (apprendre à un chien, à un robot, à jouer) : « The agent is … The environment is … A good action gives … Over time, … »",
    p: { tip: "« Agent » : AY-junt. « Policy » : PAH-luh-see. « Exploration » : ek-spluh-RAY-shn. « Exploitation » : ek-sploy-TAY-shn. « Reward » : rih-WORD, accent sur « WORD ». « Episode » : EP-uh-sohd.", words: "policy,reward,exploration,exploitation,episode,simulation" },
    q: [
      ["In RL, the agent learns from…", ["rewards received from the environment", "labeled images", "a teacher who gives the answers", "a database"], 0, "Le signal d'apprentissage est la récompense."],
      ["Exploration means…", ["trying new actions", "repeating the best action", "stopping training", "labeling data"], 0, "Explorer = tester l'inconnu."],
      ["A policy is…", ["a rule that chooses actions", "a type of reward", "a dataset", "a GPU"], 0, "Politique : état → action."],
    ],
    rq: [
      ["Who did AlphaGo defeat?", ["Lee Sedol", "Fei-Fei Li", "Alan Turing"], 0, "Match à Séoul."],
      ["How did AlphaGo improve?", ["By playing many games against itself", "By reading books only", "By copying a human"], 0, "« playing many games against itself »."],
    ],
    f: ["The agent have to explore more.", "The agent has to explore more.", "Agent = it → « has to »."],
  },
  {
    id: "10-2",
    t: "Generative AI: GANs, VAEs and Diffusion",
    fr: "IA générative : GAN, VAE et diffusion",
    cat: "Advanced AI",
    goal: "Expliquer comment les modèles génératifs créent des images, du texte ou du son, et discuter de leurs risques.",
    w: `generative model|modèle génératif|jen-ur-uh-TIV MAH-dl
GAN|réseau antagoniste génératif|gan
generator|générateur|JEN-uh-ray-ter
discriminator|discriminateur|dis-KRIM-uh-nay-ter
autoencoder|autoencodeur|AW-toh-en-koh-der
VAE|autoencodeur variationnel|vee-ay-EE
latent space|espace latent|LAY-tunt spays
diffusion model|modèle de diffusion|dih-FYOO-zhn MAH-dl
noise|bruit|noyz
to denoise|débruiter|too dee-NOYZ
to sample|échantillonner|too SAM-pl
text-to-image|texte vers image|tekst-too-IM-ij
synthetic|synthétique|sin-THET-ik
realistic|réaliste|ree-uh-LIS-tik
mode collapse|effondrement de modes|mohd kuh-LAPS
deepfake|hypertrucage|DEEP-fayk
watermark|filigrane|WAW-ter-mark
copyright|droit d'auteur|KAH-pee-rite
creativity|créativité|kree-ay-TIV-uh-tee
fidelity|fidélité|fih-DEL-uh-tee
diversity|diversité|duh-VER-suh-tee
to compress|compresser|too kum-PRES
to reconstruct|reconstruire|too ree-kun-STRUKT
training data|données d'entraînement|TRAY-ning DAY-tuh
misuse|mauvais usage|mis-YOOS`,
    x: `The generator creates fake images.|Le générateur crée de fausses images.
The discriminator tries to detect the fakes.|Le discriminateur essaie de détecter les faux.
The two networks compete against each other.|Les deux réseaux s'affrontent.
The model learns a latent space.|Le modèle apprend un espace latent.
Diffusion models remove noise step by step.|Les modèles de diffusion retirent le bruit pas à pas.
Type a description to generate an image.|Tape une description pour générer une image.
The images look very realistic.|Les images paraissent très réalistes.
This video is a deepfake.|Cette vidéo est un hypertrucage.
Who owns the copyright of generated images?|Qui possède le droit d'auteur des images générées ?
We add a watermark to label AI-generated content.|Nous ajoutons un filigrane pour signaler le contenu généré par IA.`,
    d: [
      ["How a GAN learns", `Student: How does a GAN work? || Comment fonctionne un GAN ?
Teacher: It has two networks: a generator and a discriminator. || Il a deux réseaux : un générateur et un discriminateur.
Student: What does each one do? || Que fait chacun ?
Teacher: The generator creates fake images, and the discriminator tries to tell real from fake. They improve together. || Le générateur crée de fausses images et le discriminateur essaie de distinguer le vrai du faux. Ils s'améliorent ensemble.`],
      ["Responsible use", `Omar: I can create a realistic video of a politician. || Je peux créer une vidéo réaliste d'un homme politique.
Sara: That would be a deepfake. It could mislead people. || Ce serait un hypertrucage. Cela pourrait tromper les gens.
Omar: What can we do to reduce the risk? || Que peut-on faire pour réduire le risque ?
Sara: Label generated content with a watermark and educate people. || Étiqueter le contenu généré avec un filigrane et éduquer les gens.`],
    ],
    c: {
      en: "Generative models learn the distribution of the training data so that they can create new samples. A Generative Adversarial Network, or GAN, has two networks: the generator creates fake samples, and the discriminator tries to distinguish them from real ones; both improve in competition. An autoencoder compresses data into a latent space and reconstructs it, and a variational autoencoder, or VAE, makes this space suitable for generation. Diffusion models start from random noise and denoise it step by step to create an image, and they power many text-to-image systems. Generative AI is creative and useful, but it raises issues such as deepfakes, copyright and misuse.",
      fr: "Les modèles génératifs apprennent la distribution des données d'entraînement afin de pouvoir créer de nouveaux échantillons. Un réseau antagoniste génératif, ou GAN, a deux réseaux : le générateur crée de faux échantillons et le discriminateur essaie de les distinguer des vrais ; les deux s'améliorent en concurrence. Un autoencodeur compresse les données dans un espace latent et les reconstruit, et un autoencodeur variationnel, ou VAE, rend cet espace adapté à la génération. Les modèles de diffusion partent d'un bruit aléatoire et le débruitent pas à pas pour créer une image, et ils alimentent de nombreux systèmes texte-vers-image. L'IA générative est créative et utile, mais elle soulève des problèmes comme les hypertrucages, le droit d'auteur et le mauvais usage.",
    },
    da: `GAN: zouj shabakat kay-la3bou: l-generator (zayyaf, kay-sna3 swar mzawra) w l-discriminator (chorti, kay-9ad ydir 3la l-mzawr). Mn l-mounafasa kay-t7asnou ba3d.
Diffusion: tbda b « tachwich » (noise), w kol marra kat7ayyd chwiya mn t-tachwich 7ta kat-tlaa3 t-sswira. 3aks-ha d l-mouraqaba.
Deepfake: video wla sout mzawwar b IA. Khatir 3la n-nass w ad-dimocratiya. Dima t2akked mn l-masdar.`,
    r: {
      t: "Generative Adversarial Nets",
      en: "In 2014, Ian Goodfellow and colleagues proposed Generative Adversarial Networks in a paper presented at the NeurIPS conference. The idea came from a game between two networks. A generator tries to create data that looks real, and a discriminator tries to detect fake data. As training continues, the generator becomes better at creating realistic samples. GANs quickly produced impressive images, but they were sometimes unstable to train and could suffer from mode collapse, where the generator produces only a few types of samples. Later, diffusion models became popular because they are often more stable and give more diverse results.",
      fr: "En 2014, Ian Goodfellow et ses collègues ont proposé les réseaux antagonistes génératifs dans un article présenté à la conférence NeurIPS. L'idée est venue d'un jeu entre deux réseaux. Un générateur essaie de créer des données qui semblent réelles et un discriminateur essaie de détecter les fausses données. Au fil de l'entraînement, le générateur devient meilleur pour créer des échantillons réalistes. Les GAN ont rapidement produit des images impressionnantes, mais ils étaient parfois instables à entraîner et pouvaient souffrir d'effondrement de modes, où le générateur ne produit que quelques types d'échantillons. Plus tard, les modèles de diffusion sont devenus populaires car ils sont souvent plus stables et donnent des résultats plus divers.",
    },
    s: "Expliquez à voix haute l'idée du GAN avec l'analogie du faussaire et de la police : « A forger tries to create … The police try to … Both improve because … »",
    p: { tip: "« Generative » : jen-ur-uh-TIV. « Discriminator » : dis-KRIM-uh-nay-ter. « Latent » : LAY-tunt. « Diffusion » : dih-FYOO-zhn. « Copyright » : KAH-pee-rite.", words: "generative,discriminator,latent,diffusion,realistic,copyright" },
    q: [
      ["In a GAN, the discriminator tries to…", ["tell real data from fake data", "create images", "compress text", "label users"], 0, "Il joue le rôle de juge."],
      ["Diffusion models create images by…", ["removing noise step by step", "copying a photo", "painting by hand", "translating text"], 0, "Débruitage itératif."],
      ["A deepfake is…", ["a realistic fake video or audio created by AI", "a deep network", "a type of GPU", "a camera"], 0, "Contenu manipulé."],
    ],
    rq: [
      ["Who proposed GANs?", ["Ian Goodfellow and colleagues", "Linus Torvalds", "Guido van Rossum"], 0, "Article 2014."],
      ["What is mode collapse?", ["The generator produces only a few types of samples", "The computer shuts down", "The data disappears"], 0, "Définition dans le texte."],
    ],
    f: ["The generator create fake images.", "The generator creates fake images.", "3e personne du singulier : creates."],
  },
  {
    id: "10-3",
    t: "Graphs, Self-Supervised and Few-Shot Learning",
    fr: "Graphes, apprentissage auto-supervisé et few-shot",
    cat: "Advanced AI",
    goal: "Comprendre le vocabulaire des réseaux sur graphes et des méthodes qui apprennent avec peu ou pas d'étiquettes.",
    w: `graph neural network|réseau de neurones sur graphes|graf NOOR-ul NET-werk
node|nœud|nohd
edge|arête, lien|ej
adjacency matrix|matrice d'adjacence|uh-JAY-sn-see MAY-triks
message passing|passage de messages|MES-ij PAS-ing
social network|réseau social|SOH-shl NET-werk
molecule|molécule|MAH-luh-kyool
recommendation system|système de recommandation|rek-uh-men-DAY-shn SIS-tum
self-supervised learning|apprentissage auto-supervisé|self-SOO-per-vyzd LER-ning
pretext task|tâche prétexte|PREE-tekst task
contrastive loss|perte contrastive|kun-TRAS-tiv laws
masked prediction|prédiction masquée|maskt prih-DIK-shn
few-shot learning|apprentissage à partir de peu d'exemples|fyoo-shaht LER-ning
meta-learning|méta-apprentissage|MET-uh-ler-ning
support set|ensemble de support|suh-PORT set
query set|ensemble de requête|KWEER-ee set
data augmentation|augmentation de données|DAY-tuh awg-men-TAY-shn
representation|représentation|rep-rih-zen-TAY-shn
label scarcity|rareté des étiquettes|LAY-bl SKAIR-suh-tee
active learning|apprentissage actif|AK-tiv LER-ning
semi-supervised|semi-supervisé|SEM-ee-SOO-per-vyzd
unlabeled|non étiqueté|un-LAY-bld
neighborhood|voisinage|NAY-ber-hood
relational|relationnel|rih-LAY-shn-ul
low-resource|peu doté en ressources|loh-REE-sors`,
    x: `A graph is made of nodes and edges.|Un graphe est composé de nœuds et d'arêtes.
Each node collects messages from its neighbors.|Chaque nœud collecte des messages de ses voisins.
Social networks can be modeled as graphs.|Les réseaux sociaux peuvent être modélisés par des graphes.
A molecule is a graph of atoms.|Une molécule est un graphe d'atomes.
We have a lot of unlabeled data.|Nous avons beaucoup de données non étiquetées.
The model learns by predicting masked words.|Le modèle apprend en prédisant des mots masqués.
Self-supervised learning creates labels from the data itself.|L'apprentissage auto-supervisé crée des étiquettes à partir des données elles-mêmes.
The task has only five examples per class.|La tâche n'a que cinq exemples par classe.
Labels are expensive and scarce.|Les étiquettes sont chères et rares.
Active learning asks humans to label the most useful examples.|L'apprentissage actif demande aux humains d'étiqueter les exemples les plus utiles.`,
    d: [
      ["Why graphs?", `Student: Why can't we use a normal neural network for molecules? || Pourquoi ne peut-on pas utiliser un réseau de neurones normal pour les molécules ?
Teacher: Molecules are graphs, not tables or images. || Les molécules sont des graphes, pas des tableaux ni des images.
Student: So what do graph networks do? || Alors que font les réseaux sur graphes ?
Teacher: Each atom collects information from its neighbors, step by step. || Chaque atome collecte de l'information de ses voisins, pas à pas.`],
      ["Few labels", `Omar: I have only fifty labeled images but a million unlabeled ones. || Je n'ai que cinquante images étiquetées mais un million d'images non étiquetées.
Sara: Try self-supervised pre-training on the unlabeled images. || Essaie un pré-entraînement auto-supervisé sur les images non étiquetées.
Omar: And then? || Et ensuite ?
Sara: Fine-tune on your fifty labeled examples. || Affine sur tes cinquante exemples étiquetés.`],
    ],
    c: {
      en: "Some data is naturally a graph: social networks, molecules, roads and citations. A graph neural network works with nodes and edges. In message passing, each node collects information from its neighbors and updates its representation, step by step. Another challenge is the scarcity of labels, because labeling is slow and expensive. Self-supervised learning solves this by creating a learning task from the data itself, for example predicting a masked word or deciding whether two augmented images come from the same photo. Few-shot learning goes further and aims to learn a new class from only a few examples. Semi-supervised and active learning also reduce the need for labels.",
      fr: "Certaines données sont naturellement un graphe : réseaux sociaux, molécules, routes et citations. Un réseau de neurones sur graphes travaille avec des nœuds et des arêtes. Dans le passage de messages, chaque nœud collecte l'information de ses voisins et met à jour sa représentation, pas à pas. Un autre défi est la rareté des étiquettes, car l'étiquetage est lent et coûteux. L'apprentissage auto-supervisé résout cela en créant une tâche d'apprentissage à partir des données elles-mêmes, par exemple prédire un mot masqué ou décider si deux images augmentées proviennent de la même photo. L'apprentissage few-shot va plus loin et vise à apprendre une nouvelle classe à partir de quelques exemples seulement. L'apprentissage semi-supervisé et actif réduisent aussi le besoin d'étiquettes.",
    },
    da: `Graph: nokat (nodes) w khtout (edges). Mital: Facebook = nass w sdaqa; jzay2a = dharrat w rawabit. Table wla image ma-t9derch t-mettel-hom mzyan.
Self-supervised: l-data kat-sana3 l-label dyalha. Mital: khfi klima f jomla w 9ol l-model « chnou hiya? ». Ma-kayn hta wa7ed ysawwab, w l-model kay-t3lem.
Few-shot: t3lem ch-chay b 2-5 mital bark. Bhal insan: tchouf 3 swar d zebra w t-3erf-ha dima.`,
    r: {
      t: "Learning without labels",
      en: "Human babies learn about the world without receiving millions of labels. They observe, predict what will happen and notice surprises. Researchers in self-supervised learning are inspired by this idea. In language models, the model reads text and learns by predicting words. In vision, the model learns to recognize that two different views of the same image belong together. These methods allow models to learn useful representations from huge amounts of unlabeled data. Later, only a small number of labeled examples are needed to adapt the model to a specific task. For many experts, this is one of the most promising directions in AI.",
      fr: "Les bébés humains apprennent sur le monde sans recevoir des millions d'étiquettes. Ils observent, prédisent ce qui va arriver et remarquent les surprises. Les chercheurs en apprentissage auto-supervisé s'inspirent de cette idée. Dans les modèles de langage, le modèle lit du texte et apprend en prédisant des mots. En vision, le modèle apprend à reconnaître que deux vues différentes de la même image vont ensemble. Ces méthodes permettent aux modèles d'apprendre des représentations utiles à partir d'énormes quantités de données non étiquetées. Ensuite, seul un petit nombre d'exemples étiquetés suffit pour adapter le modèle à une tâche précise. Pour beaucoup d'experts, c'est l'une des directions les plus prometteuses de l'IA.",
    },
    s: "Présentez à voix haute un problème de votre vie quotidienne qui est un graphe (amis, métro, routes) : « The nodes are … The edges are … We could predict … »",
    p: { tip: "« Molecule » : MAH-luh-kyool. « Adjacency » : uh-JAY-sn-see. « Contrastive » : kun-TRAS-tiv. « Representation » : rep-rih-zen-TAY-shn. « Scarcity » : SKAIR-suh-tee.", words: "molecule,adjacency,contrastive,representation,scarcity,neighborhood" },
    q: [
      ["In a graph, nodes are connected by…", ["edges", "pixels", "tokens", "tensors"], 0, "Nœuds + arêtes."],
      ["Self-supervised learning creates labels from…", ["the data itself", "human experts only", "random numbers", "a GPU"], 0, "Exemple : prédire un mot masqué."],
      ["Few-shot learning aims to learn from…", ["a few examples", "millions of examples", "no computer", "only videos"], 0, "Quelques exemples."],
    ],
    rq: [
      ["What inspires self-supervised learning in the text?", ["How babies learn", "How computers are built", "How banks work"], 0, "Premier paragraphe."],
      ["How many labeled examples are needed later?", ["A small number", "Millions", "None at all"], 0, "« only a small number »."],
    ],
    f: ["Each node collect informations from neighbors.", "Each node collects information from its neighbors.", "Each + singulier ; information indénombrable."],
  },
];
