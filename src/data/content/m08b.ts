import type { RawLesson } from "../types";

export const m08b: RawLesson[] = [
  {
    id: "8-4",
    t: "Real-World Applications of Computer Vision",
    fr: "Applications réelles de la vision par ordinateur",
    cat: "Computer Vision",
    goal: "Parler d'applications médicales, industrielles, agricoles et de sécurité, avec leurs enjeux éthiques.",
    w: `face detection|détection de visages|fays dih-TEK-shn
face recognition|reconnaissance faciale|fays rek-ig-NISH-n
OCR|reconnaissance optique de caractères|oh-see-AR
medical imaging|imagerie médicale|MED-ih-kl IM-uh-jing
X-ray|radiographie|EKS-ray
MRI scan|IRM|em-ar-EYE skan
tumor|tumeur|TOO-mer
diagnosis|diagnostic|die-ug-NOH-sis
radiologist|radiologue|ray-dee-AH-luh-jist
autonomous vehicle|véhicule autonome|aw-TAH-nuh-mus VEE-uh-kl
pedestrian|piéton|puh-DES-tree-un
lane|voie|layn
video|vidéo|VID-ee-oh
frame rate|fréquence d'images|fraym rayt
object tracking|suivi d'objets|AHB-jekt TRAK-ing
pose estimation|estimation de pose|pohz es-tuh-MAY-shn
quality inspection|contrôle qualité|KWAH-luh-tee in-SPEK-shn
defect|défaut|DEE-fekt
satellite imagery|imagerie satellite|SAT-uh-lyte IM-ij-ree
drone|drone|drohn
crop|culture agricole|krahp
disease|maladie|dih-ZEEZ
consent|consentement|kun-SENT
surveillance|surveillance|ser-VAY-luns
to screen|dépister|too skreen`,
    x: `The system reads the text on the document.|Le système lit le texte du document.
The AI helps radiologists to detect tumors.|L'IA aide les radiologues à détecter des tumeurs.
A doctor must always confirm the diagnosis.|Un médecin doit toujours confirmer le diagnostic.
The camera inspects each product for defects.|La caméra inspecte chaque produit à la recherche de défauts.
Drones take pictures of the fields.|Des drones prennent des photos des champs.
The model detects plant diseases from leaf images.|Le modèle détecte des maladies de plantes à partir d'images de feuilles.
Face recognition raises privacy concerns.|La reconnaissance faciale soulève des questions de vie privée.
People must give their consent.|Les gens doivent donner leur consentement.
The system tracks the ball in every frame.|Le système suit le ballon dans chaque image.
It processes thirty frames per second.|Il traite trente images par seconde.`,
    d: [
      ["AI in medicine", `Student: Can AI diagnose diseases from X-rays? || L'IA peut-elle diagnostiquer des maladies à partir de radiographies ?
Doctor: It can help detect signs, but it does not replace the radiologist. || Elle peut aider à détecter des signes, mais elle ne remplace pas le radiologue.
Student: Why not? || Pourquoi pas ?
Doctor: The model can make mistakes, and a human must take the final decision. || Le modèle peut faire des erreurs et un humain doit prendre la décision finale.`],
      ["Ethics of face recognition", `Omar: A shop wants to use face recognition for security. || Un magasin veut utiliser la reconnaissance faciale pour la sécurité.
Sara: Do customers give their consent? || Les clients donnent-ils leur consentement ?
Omar: No, they don't know. || Non, ils ne le savent pas.
Sara: Then it is a serious privacy problem. || Alors c'est un grave problème de vie privée.`],
    ],
    c: {
      en: "Computer vision is used in many real-world applications. In medicine, models analyze X-rays, MRI scans and microscope images to help doctors find tumors and other signs of disease, but the final diagnosis remains a human decision. In industry, cameras perform quality inspection and detect defects on a production line. In agriculture, drones and satellite imagery help farmers monitor crops and detect plant diseases early. OCR converts printed or handwritten text into digital text, and video systems track objects and estimate human pose. Face recognition is powerful, but it raises serious questions about privacy, consent and surveillance.",
      fr: "La vision par ordinateur est utilisée dans de nombreuses applications réelles. En médecine, des modèles analysent des radiographies, des IRM et des images de microscope pour aider les médecins à trouver des tumeurs et d'autres signes de maladie, mais le diagnostic final reste une décision humaine. Dans l'industrie, des caméras effectuent le contrôle qualité et détectent des défauts sur une chaîne de production. En agriculture, des drones et l'imagerie satellite aident les agriculteurs à surveiller les cultures et à détecter tôt les maladies des plantes. L'OCR convertit du texte imprimé ou manuscrit en texte numérique, et les systèmes vidéo suivent des objets et estiment la pose humaine. La reconnaissance faciale est puissante, mais elle soulève de sérieuses questions de vie privée, de consentement et de surveillance.",
    },
    r: {
      t: "AI and medical images",
      en: "Researchers in many countries test deep learning models that read medical images, such as chest X-rays or photographs of the retina. In several studies, these models reach a performance similar to that of specialists on a specific task. However, results often depend on the hospital, the machine and the population in the dataset. A model trained in one hospital may perform worse in another. For this reason, doctors and scientists ask for clinical tests, clear explanations of limitations and constant human supervision. The goal is not to replace doctors, but to give them a reliable second opinion.",
      fr: "Des chercheurs dans de nombreux pays testent des modèles d'apprentissage profond qui lisent des images médicales, comme des radiographies thoraciques ou des photographies de la rétine. Dans plusieurs études, ces modèles atteignent une performance similaire à celle de spécialistes sur une tâche précise. Cependant, les résultats dépendent souvent de l'hôpital, de la machine et de la population du jeu de données. Un modèle entraîné dans un hôpital peut être moins performant dans un autre. Pour cette raison, médecins et scientifiques demandent des essais cliniques, des explications claires des limites et une supervision humaine constante. Le but n'est pas de remplacer les médecins, mais de leur donner un deuxième avis fiable.",
    },
    da: `OCR: kay9ra n-nass men sswira (bhal mli kat-sawwer wra9a w t-tlabi9 kat-7awwelha l nass t9der t-9ayyed fih).
Consent / privacy: face recognition kay-akhod wajh n-nass bla ma ychawrohom? Hadi mochkila akhla9iya w 9anouniya. 3aqli f had l-mawdou3 mouhim bzzaf.
AI f tebb: kay-3awen d-doctor, machi kay-7ell mahalou. Final decision = insan. Dima 9ol « second opinion ».`,
    s: "Choisissez une application de la leçon (médecine, agriculture, industrie) et présentez-la à voix haute en 5 phrases, avec un avantage et un risque : « One benefit is … However, … »",
    p: { tip: "« Diagnosis » : die-ug-NOH-sis, accent sur « NOH ». « Pedestrian » : puh-DES-tree-un. « Surveillance » : ser-VAY-luns. « Radiologist » : ray-dee-AH-luh-jist. « Disease » : dih-ZEEZ.", words: "diagnosis,pedestrian,surveillance,radiologist,consent,defect" },
    q: [
      ["OCR converts…", ["images of text into digital text", "text into images", "video into audio", "audio into text"], 0, "Optical Character Recognition."],
      ["In medicine, who takes the final diagnosis?", ["The AI model alone", "A human doctor", "The camera", "The patient's phone"], 1, "L'IA assiste mais ne remplace pas."],
      ["Which is an ethical concern of face recognition?", ["Privacy and consent", "Resolution", "Color channels", "Batch size"], 0, "Respect de la vie privée."],
    ],
    rq: [
      ["Why might a model perform worse in another hospital?", ["The machines and population may differ", "The doctors are different colors", "The hospital is bigger"], 0, "« depend on the hospital, the machine and the population »."],
      ["What is the goal of these models?", ["To give doctors a reliable second opinion", "To replace doctors", "To close hospitals"], 0, "Dernière phrase."],
    ],
    f: ["The AI help the doctors to detect tumors.", "The AI helps doctors detect tumors.", "3e personne → helps ; « help someone (to) do »."],
  },
  {
    id: "8-5",
    t: "Modern Vision: Transformers, Foundation Models and Evaluation",
    fr: "Vision moderne : Transformers, modèles de fondation et évaluation",
    cat: "Computer Vision",
    goal: "Comprendre le vocabulaire des modèles de vision récents et lire un résultat d'évaluation.",
    w: `vision transformer|Transformer de vision|VIZH-n tranz-FOR-mer
patch|patch (morceau d'image)|pach
self-attention|auto-attention|self-uh-TEN-shn
contrastive learning|apprentissage contrastif|kun-TRAS-tiv LER-ning
zero-shot|sans exemple (zero-shot)|ZEER-oh-shaht
foundation model|modèle de fondation|fown-DAY-shn MAH-dl
pre-training|pré-entraînement|pree-TRAY-ning
embedding|représentation vectorielle|em-BED-ing
COCO dataset|jeu de données COCO|KOH-koh DAY-tuh-set
data scarcity|rareté des données|DAY-tuh SKAIR-suh-tee
synthetic data|données synthétiques|sin-THET-ik DAY-tuh
domain shift|décalage de domaine|doh-MAYN shift
self-supervised|auto-supervisé|self-SOO-per-vyzd
multimodal|multimodal|mul-tee-MOH-dl
caption|légende (d'image)|KAP-shn
evaluation protocol|protocole d'évaluation|ih-val-yoo-AY-shn PROH-tuh-kawl
leaderboard|classement|LEE-der-bord
mean average precision|précision moyenne (mAP)|meen AV-rij prih-SIZH-n
ablation|ablation|ab-LAY-shn
to scale up|passer à l'échelle|too skayl up
compute|puissance de calcul|kum-PYOOT
robustness|robustesse|roh-BUST-nis
generalize|généraliser|JEN-ruh-lize
label-free|sans étiquette|LAY-bl-free
unlabeled|non étiqueté|un-LAY-bld`,
    x: `The image is split into small patches.|L'image est découpée en petits patchs.
The model uses self-attention across all patches.|Le modèle utilise l'auto-attention sur tous les patchs.
This model can classify images zero-shot.|Ce modèle peut classer des images sans exemples.
It was pre-trained on a large unlabeled dataset.|Il a été pré-entraîné sur un grand jeu de données non étiqueté.
Performance drops under domain shift.|La performance baisse sous un décalage de domaine.
We report the mean average precision on COCO.|Nous rapportons la précision moyenne sur COCO.
Check the leaderboard for the best results.|Consulte le classement pour les meilleurs résultats.
The ablation shows that augmentation helps.|L'ablation montre que l'augmentation aide.
We lack labeled data.|Nous manquons de données étiquetées.
Synthetic images can reduce data scarcity.|Les images synthétiques peuvent réduire la rareté des données.`,
    d: [
      ["Vision Transformers", `Student: What is a Vision Transformer? || Qu'est-ce qu'un Transformer de vision ?
Teacher: It splits the image into patches and treats them like words. || Il découpe l'image en patchs et les traite comme des mots.
Student: And then? || Et ensuite ?
Teacher: Self-attention lets every patch look at all the others. || L'auto-attention permet à chaque patch de regarder tous les autres.`],
      ["Reading a results table", `Omar: Our model gets sixty-two mAP on COCO. || Notre modèle obtient soixante-deux mAP sur COCO.
Sara: Is that better than the baseline? || C'est mieux que la référence ?
Omar: Yes, the baseline has fifty-eight. The ablation shows that augmentation gives two points. || Oui, la référence a cinquante-huit. L'ablation montre que l'augmentation apporte deux points.
Sara: Nice. Does it hold under domain shift? || Joli. Cela tient-il sous décalage de domaine ?`],
    ],
    c: {
      en: "Recent computer vision models often replace or complement convolutions with Transformers. A Vision Transformer splits the image into patches, converts each patch into an embedding and uses self-attention so that every patch can look at all the others. Many modern models are pre-trained on very large datasets, sometimes without labels, using self-supervised or contrastive learning. Such foundation models can be adapted to many tasks, and some can even work zero-shot, which means that they recognize new classes without extra examples. When we read a paper, we check the benchmark, the metric, such as mean average precision, the baseline and the ablation. We also ask if the model is robust to domain shift.",
      fr: "Les modèles récents de vision par ordinateur remplacent ou complètent souvent les convolutions par des Transformers. Un Transformer de vision découpe l'image en patchs, convertit chaque patch en représentation vectorielle et utilise l'auto-attention pour que chaque patch puisse regarder tous les autres. Beaucoup de modèles modernes sont pré-entraînés sur de très grands jeux de données, parfois sans étiquettes, avec de l'apprentissage auto-supervisé ou contrastif. Ces modèles de fondation peuvent être adaptés à de nombreuses tâches, et certains fonctionnent même en zero-shot, c'est-à-dire qu'ils reconnaissent de nouvelles classes sans exemples supplémentaires. Quand on lit un article, on vérifie le benchmark, la métrique, comme la précision moyenne, la référence de base et l'ablation. On se demande aussi si le modèle est robuste au décalage de domaine.",
    },
    r: {
      t: "An image is worth 16×16 words",
      en: "In 2020, researchers from Google published a paper with the title An Image Is Worth 16x16 Words, which introduced the Vision Transformer. The authors showed that a Transformer, an architecture first created for text, can classify images when the image is cut into patches of sixteen by sixteen pixels. When pre-trained on very large datasets, this model matched or exceeded the best convolutional networks while using less computing power for training. The paper was important because it showed that one general architecture can work for several types of data.",
      fr: "En 2020, des chercheurs de Google ont publié un article intitulé An Image Is Worth 16x16 Words, qui a introduit le Vision Transformer. Les auteurs ont montré qu'un Transformer, une architecture d'abord créée pour le texte, peut classer des images quand l'image est découpée en patchs de seize par seize pixels. Pré-entraîné sur de très grands jeux de données, ce modèle égalait ou dépassait les meilleurs réseaux convolutifs tout en utilisant moins de puissance de calcul pour l'entraînement. L'article a été important car il a montré qu'une architecture générale peut fonctionner pour plusieurs types de données.",
    },
    da: `Patch: joz2 sghir (16×16 pixels) mn t-sswira. ViT kay9te3 t-sswira l patches w kay-3amel m3ahom bhal klimat f jomla.
Zero-shot: l-modèle kay-3raf classe jdida ghir b l-ism dyalha (b l-kalam), bla ma ychouf mital. Mital: tkteb « zebra » w howa kay-3rfha.
Foundation model: modèle kbir bzzaf, t3lem 3la data kbira, w t9der t3awdo l bzzaf d l-mohammat. L-jil l-jdid d l-IA.`,
    s: "Présentez à voix haute le résumé d'un article imaginaire de vision en 5 phrases : « The paper proposes … They use … The results show … One limitation is … »",
    p: { tip: "« Self-attention » : self-uh-TEN-shn. « Contrastive » : kun-TRAS-tiv. « Synthetic » : sin-THET-ik. « Embedding » : em-BED-ing. « Leaderboard » : LEE-der-bord.", words: "attention,contrastive,synthetic,embedding,leaderboard,robustness" },
    q: [
      ["A Vision Transformer first…", ["splits the image into patches", "converts the image to text", "deletes the background", "labels every pixel by hand"], 0, "Les patchs sont les « mots » de l'image."],
      ["Zero-shot recognition means…", ["recognizing new classes without extra examples", "having zero accuracy", "training with no GPU", "no input data"], 0, "Aucun exemple de la nouvelle classe."],
      ["Domain shift means…", ["test data differs from training data", "the screen changes", "the model is deleted", "the learning rate is zero"], 0, "Les conditions réelles diffèrent de l'entraînement."],
    ],
    rq: [
      ["What architecture did the 2020 paper apply to images?", ["The Transformer", "The perceptron", "SQL"], 0, "Transformer pour images."],
      ["What size were the patches?", ["16 by 16 pixels", "1 by 1 pixel", "100 by 100 pixels"], 0, "« patches of sixteen by sixteen pixels »."],
    ],
    f: ["The model is robust at the domain shift.", "The model is robust to domain shift.", "On dit « robust to » quelque chose."],
  },
];
