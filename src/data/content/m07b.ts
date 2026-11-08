import type { RawLesson } from "../types";

export const m07b: RawLesson[] = [
  {
    id: "7-4",
    t: "Convolutional and Recurrent Networks",
    fr: "Réseaux convolutifs et récurrents",
    cat: "DL",
    goal: "Expliquer comment les CNN traitent les images et comment les RNN traitent les séquences.",
    w: `convolution|convolution|kahn-vuh-LOO-shn
filter|filtre|FIL-ter
feature map|carte de caractéristiques|FEE-cher map
pooling|sous-échantillonnage (pooling)|POO-ling
stride|pas (de convolution)|stride
padding|remplissage (padding)|PAD-ing
receptive field|champ réceptif|rih-SEP-tiv feeld
convolutional layer|couche convolutive|kahn-vuh-LOO-shn-ul LAY-er
recurrent|récurrent|rih-KER-unt
sequence|séquence|SEE-kwuns
hidden state|état caché|HID-n stayt
LSTM|LSTM (mémoire longue à court terme)|el-es-tee-EM
GRU|GRU (unité récurrente à porte)|jee-ar-YOO
time step|pas de temps|tyme step
long-term dependency|dépendance à long terme|lawng-term dih-PEN-dun-see
bidirectional|bidirectionnel|bie-duh-REK-shn-ul
sequence-to-sequence|séquence à séquence|SEE-kwuns too SEE-kwuns
to unroll|dérouler|too un-ROHL
spatial|spatial|SPAY-shl
temporal|temporel|TEM-puh-rul
channel|canal|CHAN-l
to flatten|aplatir|too FLAT-n
edge|contour|ej
texture|texture|TEKS-cher
shared weights|poids partagés|sherd wayts`,
    x: `A convolutional layer applies filters to the image.|Une couche convolutive applique des filtres à l'image.
The first layers detect edges.|Les premières couches détectent les contours.
Max pooling reduces the size of the feature maps.|Le max pooling réduit la taille des cartes de caractéristiques.
The filter slides over the image with a stride of two.|Le filtre glisse sur l'image avec un pas de deux.
The image has three channels.|L'image a trois canaux.
An RNN processes one element of the sequence at a time.|Un RNN traite un élément de la séquence à la fois.
The hidden state carries information through time.|L'état caché transporte l'information dans le temps.
LSTMs handle long-term dependencies better.|Les LSTM gèrent mieux les dépendances à long terme.
Flatten the feature maps before the dense layer.|Aplatis les cartes avant la couche dense.
The weights are shared across all positions.|Les poids sont partagés à toutes les positions.`,
    d: [
      ["How does a CNN see?", `Student: How does a CNN recognize a cat? || Comment un CNN reconnaît-il un chat ?
Teacher: The first layers detect simple edges. || Les premières couches détectent des contours simples.
Student: And the deeper layers? || Et les couches plus profondes ?
Teacher: They combine edges into textures, parts and finally whole objects. || Elles combinent les contours en textures, en parties puis en objets entiers.`],
      ["Why an LSTM?", `Omar: My RNN forgets the beginning of long sentences. || Mon RNN oublie le début des longues phrases.
Sara: That is the long-term dependency problem. || C'est le problème des dépendances à long terme.
Omar: How can I fix it? || Comment le corriger ?
Sara: Use an LSTM or a GRU. They have gates that control what to remember. || Utilise un LSTM ou un GRU. Ils ont des portes qui contrôlent ce qu'il faut retenir.`],
    ],
    c: {
      en: "Convolutional neural networks, or CNNs, are designed for images. A convolutional layer slides small filters over the image and produces feature maps that show where a pattern, such as an edge, appears. Because the same filter is used at every position, the weights are shared and the number of parameters is smaller. Pooling reduces the size of the feature maps. Early layers detect edges, and deeper layers detect shapes and objects. Recurrent neural networks, or RNNs, are designed for sequences such as text or sound. They process one time step at a time and keep a hidden state. LSTMs and GRUs use gates to remember information over long sequences.",
      fr: "Les réseaux de neurones convolutifs, ou CNN, sont conçus pour les images. Une couche convolutive fait glisser de petits filtres sur l'image et produit des cartes de caractéristiques qui montrent où apparaît un motif, comme un contour. Comme le même filtre est utilisé à chaque position, les poids sont partagés et le nombre de paramètres est plus faible. Le pooling réduit la taille des cartes. Les premières couches détectent les contours et les couches plus profondes détectent des formes et des objets. Les réseaux de neurones récurrents, ou RNN, sont conçus pour les séquences comme le texte ou le son. Ils traitent un pas de temps à la fois et conservent un état caché. Les LSTM et GRU utilisent des portes pour retenir l'information sur de longues séquences.",
    },
    da: `CNN: kay-chouf t-sswira b filtres sghar li kay-mchiw 3la t-sswira kamla. Kol filtre kay-lqa chi 7aja (khat, rkn). Nafs l-filtre f koll mkan = 9all l-parametres.
RNN: kay-9ra jomla klema b klema, w kay-7ft b « dhakira » sghira (hidden state). Machakil: kay-nsa l-bidaya dyal jomla twila (long-term dependency).
LSTM / GRU: RNN m3a « abwab » (gates): kay-9errer chnou ydkhel l-dhakira w chnou yt-nsa.`,
    r: {
      t: "Yann LeCun and handwritten digits",
      en: "In the late 1980s and 1990s, Yann LeCun and his colleagues developed convolutional networks to read handwritten digits. One of their systems, called LeNet, was used to read the numbers on bank cheques. The idea was to let the network learn the filters by itself, instead of designing them by hand. At that time, computers were limited and the idea was not yet popular. In 2012, a deep convolutional network trained on GPUs won the ImageNet competition by a large margin, and CNNs quickly became the standard tool for computer vision.",
      fr: "À la fin des années 1980 et dans les années 1990, Yann LeCun et ses collègues ont développé des réseaux convolutifs pour lire des chiffres manuscrits. L'un de leurs systèmes, appelé LeNet, a été utilisé pour lire les montants sur les chèques bancaires. L'idée était de laisser le réseau apprendre les filtres lui-même, au lieu de les concevoir à la main. À cette époque, les ordinateurs étaient limités et l'idée n'était pas encore populaire. En 2012, un réseau convolutif profond entraîné sur des GPU a gagné la compétition ImageNet avec une grande avance, et les CNN sont rapidement devenus l'outil standard de la vision par ordinateur.",
    },
    s: "Décrivez à voix haute comment un CNN analyse une photo, du pixel à la décision, avec : « First, … The early layers detect … The deeper layers … Finally, the output layer … »",
    p: { tip: "« Convolution » : kahn-vuh-LOO-shn, accent sur « LOO ». « Recurrent » : rih-KER-unt. « Stride » rime avec « ride ». « Texture » : TEKS-cher. « Temporal » : TEM-puh-rul.", words: "convolution,recurrent,stride,temporal,spatial,bidirectional" },
    q: [
      ["Which network is designed for images?", ["CNN", "RNN", "SQL", "DNS"], 0, "Les CNN exploitent la structure spatiale."],
      ["Why do CNNs have fewer parameters?", ["They use shared weights", "They have no layers", "They ignore pixels", "They use no data"], 0, "Le même filtre est réutilisé partout."],
      ["LSTMs were designed to…", ["handle long-term dependencies", "draw images", "split datasets", "encrypt data"], 0, "Les portes préservent l'information dans le temps."],
    ],
    rq: [
      ["What did LeNet read?", ["Numbers on bank cheques", "Videos", "Emails"], 0, "« read the numbers on bank cheques »."],
      ["When did a CNN win ImageNet by a large margin?", ["2012", "1990", "2024"], 0, "« In 2012 »."],
    ],
    f: ["The filter slide over the image.", "The filter slides over the image.", "3e personne du singulier : slides."],
  },
  {
    id: "7-5",
    t: "Deep Learning in Practice: Frameworks and Hardware",
    fr: "Apprentissage profond en pratique : frameworks et matériel",
    cat: "DL",
    goal: "Lire du code et de la documentation PyTorch/TensorFlow, suivre un entraînement et gérer les problèmes pratiques.",
    w: `framework|framework, cadre logiciel|FRAYM-werk
PyTorch|PyTorch (framework)|PIE-torch
TensorFlow|TensorFlow (framework)|TEN-ser-floh
CUDA|CUDA (calcul sur GPU NVIDIA)|KOO-duh
out of memory|mémoire insuffisante|owt uv MEM-uh-ree
mixed precision|précision mixte|mikst prih-SIZH-n
data loader|chargeur de données|DAY-tuh LOH-der
experiment tracking|suivi d'expériences|ik-SPER-uh-munt TRAK-ing
logging|journalisation|LAW-ging
distributed training|entraînement distribué|dih-STRIB-yoo-tid TRAY-ning
to monitor|surveiller|too MAH-nuh-ter
inference time|temps d'inférence|IN-fer-uns tyme
model size|taille du modèle|MAH-dl size
to overfit a batch|surapprendre un seul lot|too OH-ver-fit uh bach
sanity check|vérification de cohérence|SAN-uh-tee chek
to run on GPU|exécuter sur GPU|too run ahn jee-pee-YOO
to move to device|déplacer sur l'appareil|too moov too dih-VICE
shape mismatch|incompatibilité de formes|shayp MIS-mach
tensor|tenseur|TEN-ser
autograd|différentiation automatique|AW-toh-grad
notebook kernel|noyau du notebook|NOHT-book KER-nl
training loop|boucle d'entraînement|TRAY-ning loop
dependency|dépendance|dih-PEN-dun-see
virtual environment|environnement virtuel|VER-choo-ul in-VIE-run-munt
release notes|notes de version|rih-LEES nohts`,
    x: `I get an out-of-memory error.|J'obtiens une erreur de mémoire insuffisante.
Reduce the batch size.|Réduis la taille de lot.
Is the model running on the GPU?|Le modèle tourne-t-il sur le GPU ?
Move the tensors to the same device.|Déplace les tenseurs sur le même appareil.
There is a shape mismatch in the last layer.|Il y a une incompatibilité de formes dans la dernière couche.
First, try to overfit a single batch.|D'abord, essaie de surapprendre un seul lot.
We log the loss at every step.|Nous enregistrons la perte à chaque pas.
Let me check the release notes.|Laisse-moi consulter les notes de version.
Create a virtual environment for this project.|Crée un environnement virtuel pour ce projet.
Training on one GPU takes two days.|L'entraînement sur un GPU prend deux jours.`,
    d: [
      ["Out of memory", `Omar: I get an out-of-memory error when I train. || J'ai une erreur de mémoire insuffisante quand j'entraîne.
Sara: What is your batch size? || Quelle est ta taille de lot ?
Omar: Two hundred fifty-six. || Deux cent cinquante-six.
Sara: Reduce it to thirty-two, or use mixed precision. || Réduis-la à trente-deux, ou utilise la précision mixte.`],
      ["A sanity check", `Teacher: Your loss does not go down. What do you check first? || Ta perte ne baisse pas. Que vérifies-tu d'abord ?
Student: I try to overfit a single batch. || J'essaie de surapprendre un seul lot.
Teacher: Why? || Pourquoi ?
Student: If the model cannot overfit one batch, there is probably a bug in the code. || Si le modèle ne peut pas surapprendre un seul lot, il y a probablement un bogue dans le code.`],
    ],
    c: {
      en: "Modern deep learning relies on frameworks such as PyTorch and TensorFlow. They provide tensors, automatic differentiation, layers, optimizers and tools to run computations on a GPU. A typical training loop gets a batch from a data loader, runs the forward pass, computes the loss, calls backpropagation and updates the weights. In practice, many problems are not about theory: a shape mismatch, an out-of-memory error or tensors on different devices. A useful sanity check is to overfit a single small batch. Teams also log metrics and use experiment tracking, so they can compare runs and reproduce results later.",
      fr: "L'apprentissage profond moderne repose sur des frameworks comme PyTorch et TensorFlow. Ils fournissent des tenseurs, la différentiation automatique, des couches, des optimiseurs et des outils pour exécuter les calculs sur GPU. Une boucle d'entraînement typique récupère un lot depuis un chargeur de données, exécute la passe avant, calcule la perte, appelle la rétropropagation et met à jour les poids. En pratique, beaucoup de problèmes ne relèvent pas de la théorie : une incompatibilité de formes, une erreur de mémoire insuffisante ou des tenseurs sur des appareils différents. Une vérification utile consiste à surapprendre un seul petit lot. Les équipes enregistrent aussi les métriques et utilisent le suivi d'expériences pour comparer les essais et reproduire les résultats plus tard.",
    },
    r: {
      t: "Reading framework documentation",
      en: "Framework documentation usually has the same structure. First there is a short description of the function or class. Then comes the list of parameters, with their type and default value. Next, the page describes the return value and sometimes the possible errors. Finally, there are examples. When you are new, read the examples first, then the parameters. Pay attention to notes about shapes, because many errors come from wrong dimensions. Also check the version of the library: an example written for an old version may no longer work, and release notes explain what changed.",
      fr: "La documentation d'un framework a généralement la même structure. D'abord, il y a une courte description de la fonction ou de la classe. Ensuite vient la liste des paramètres, avec leur type et leur valeur par défaut. Puis la page décrit la valeur de retour et parfois les erreurs possibles. Enfin, il y a des exemples. Quand on débute, lisez d'abord les exemples, puis les paramètres. Faites attention aux notes sur les formes, car beaucoup d'erreurs viennent de mauvaises dimensions. Vérifiez aussi la version de la bibliothèque : un exemple écrit pour une ancienne version peut ne plus fonctionner, et les notes de version expliquent ce qui a changé.",
    },
    da: `Out of memory: l-GPU ma-3ndouch dhakira kafya. 7ll: 9all l-batch size, wla sta3mel mixed precision. Machi mochkil f l-code dima.
Overfit a single batch: test sari3: 7awel tdrreb l-modèle 3la 10 swar bark. Ila ma-wsslch l-loss l 0, l-code fih bug.
Same device: l-model w l-data khass ykounou 3la nafs l-appareil (CPU wla GPU). Ila la, kayn error.`,
    s: "Simulez un échange sur un forum : « I'm training … on a GPU. I get an out-of-memory error. I tried … Here is my batch size. What should I do? » Puis répondez à voix haute avec 3 suggestions.",
    p: { tip: "« PyTorch » : PIE-torch. « TensorFlow » : TEN-ser-floh. « CUDA » : KOO-duh. « Precision » : prih-SIZH-n. « Dependency » : dih-PEN-dun-see. « Virtual » : VER-choo-ul.", words: "framework,tensor,dependency,virtual,logging,precision" },
    q: [
      ["What is a good first fix for an out-of-memory error?", ["Increase the batch size", "Reduce the batch size", "Delete the labels", "Rename the file"], 1, "Moins de données par lot = moins de mémoire."],
      ["Why overfit a single batch?", ["To check that the code can learn", "To get the final model", "To reduce size", "To save time on GPUs"], 0, "Un modèle correct doit y arriver."],
      ["A training loop usually includes…", ["forward pass, loss, backpropagation, update", "only a print", "only a save", "only data cleaning"], 0, "Les quatre étapes de base."],
    ],
    rq: [
      ["What should you read first when you are new?", ["The examples", "The release notes only", "The license"], 0, "« read the examples first »."],
      ["Why check the library version?", ["An old example may not work", "To buy a license", "To change the screen"], 0, "Les APIs changent entre versions."],
    ],
    f: ["I have an error of out of memory.", "I get an out-of-memory error.", "On dit « get an error » ; et « out-of-memory » est un adjectif composé avec traits d'union."],
  },
];
