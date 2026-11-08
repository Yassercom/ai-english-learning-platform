import type { RawLesson } from "../types";

export const m08: RawLesson[] = [
  {
    id: "8-1",
    t: "Images, Pixels and Image Processing",
    fr: "Images, pixels et traitement d'images",
    cat: "Computer Vision",
    goal: "Décrire une image numérique et les opérations de base de prétraitement d'images.",
    w: `pixel|pixel|PIK-sl
resolution|résolution|rez-uh-LOO-shn
grayscale|niveaux de gris|GRAY-skayl
RGB|rouge-vert-bleu|ar-jee-BEE
color channel|canal de couleur|KUL-er CHAN-l
brightness|luminosité|BRITE-nis
contrast|contraste|KAHN-trast
image processing|traitement d'images|IM-ij PRAH-seh-sing
to resize|redimensionner|too ree-SIZE
to crop|rogner, recadrer|too krahp
to rotate|faire pivoter|too ROH-tayt
to flip|retourner|too flip
to blur|flouter|too bler
sharp|net|sharp
edge detection|détection de contours|ej dih-TEK-shn
intensity|intensité|in-TEN-suh-tee
thresholding|seuillage|THRESH-hohld-ing
aspect ratio|rapport hauteur/largeur|AS-pekt RAY-shoh
compression|compression|kum-PRESH-n
OpenCV|OpenCV (bibliothèque de vision)|OH-pn-see-VEE
frame|image (de vidéo), cadre|fraym
contour|contour|KAHN-toor
corner|coin|KOR-ner
to normalize|normaliser|too NOR-muh-lize
lighting|éclairage|LIE-ting`,
    x: `The image has a resolution of one thousand by one thousand pixels.|L'image a une résolution de mille par mille pixels.
Convert the image to grayscale.|Convertis l'image en niveaux de gris.
Resize all images to two hundred twenty-four by two hundred twenty-four.|Redimensionne toutes les images en deux cent vingt-quatre par deux cent vingt-quatre.
Crop the center of the image.|Recadre le centre de l'image.
The picture is too dark.|L'image est trop sombre.
Increase the contrast.|Augmente le contraste.
Normalize the pixel values between zero and one.|Normalise les valeurs de pixels entre zéro et un.
This filter detects the edges.|Ce filtre détecte les contours.
The image is blurry.|L'image est floue.
The lighting is poor.|L'éclairage est mauvais.`,
    d: [
      ["Preparing images", `Omar: The model needs images of the same size. || Le modèle a besoin d'images de la même taille.
Sara: Resize them to two hundred twenty-four by two hundred twenty-four. || Redimensionne-les en deux cent vingt-quatre par deux cent vingt-quatre.
Omar: Should I keep the aspect ratio? || Dois-je garder le rapport hauteur/largeur ?
Sara: Yes, crop the center, then normalize the pixel values. || Oui, recadre le centre, puis normalise les valeurs de pixels.`],
      ["A bad photo", `Teacher: Why does the model fail on this image? || Pourquoi le modèle échoue-t-il sur cette image ?
Student: It is blurry and the lighting is poor. || Elle est floue et l'éclairage est mauvais.
Teacher: How can we improve it? || Comment peut-on l'améliorer ?
Student: Increase the contrast, or collect better data. || Augmenter le contraste, ou collecter de meilleures données.`],
    ],
    c: {
      en: "A digital image is a grid of pixels. In a grayscale image, each pixel has one intensity value, usually from 0, black, to 255, white. A color image has three channels, red, green and blue, so it is stored as a tensor of height by width by three. Resolution is the number of pixels. Before training a model, we usually resize the images to the same size, normalize the pixel values and sometimes crop or rotate them. Classic image processing also includes blurring to reduce noise, thresholding to separate objects from the background and edge detection to find boundaries. Libraries such as OpenCV provide these tools.",
      fr: "Une image numérique est une grille de pixels. Dans une image en niveaux de gris, chaque pixel a une valeur d'intensité, généralement de 0, noir, à 255, blanc. Une image couleur a trois canaux, rouge, vert et bleu, elle est donc stockée comme un tenseur de hauteur par largeur par trois. La résolution est le nombre de pixels. Avant d'entraîner un modèle, on redimensionne généralement les images à la même taille, on normalise les valeurs de pixels et parfois on les recadre ou on les fait pivoter. Le traitement d'images classique comprend aussi le flou pour réduire le bruit, le seuillage pour séparer les objets du fond et la détection de contours pour trouver les limites. Des bibliothèques comme OpenCV fournissent ces outils.",
    },
    da: `Pixel: noqta sghira f t-sswira. T-sswira = jdwal kbir d l-pixels. Grayscale: 3adad wa7ed l-kol pixel (0 = kehl, 255 = byad). Couleur = 3 3adad (R, G, B).
Normalization: 7awwel 0-255 l 0-1. 3lach? L-reseaux kay-t3lmou mzyan ila l-arqam sghar w mntadhama.
Resize: l-modèle ma-ykhdemch ila swar b-hajm mkhtalef. Dima 7awwlhom l nafs t-hajm.`,
    r: {
      t: "How a computer sees a digit",
      en: "A handwritten digit in the famous MNIST dataset is an image of twenty-eight by twenty-eight pixels. That makes seven hundred eighty-four numbers, each between zero and two hundred fifty-five. For a human, the picture is clearly a seven. For the computer, it is only a list of numbers. The task of computer vision is to build models that connect these numbers to meaning. To help the model, we normalize the numbers to a range between zero and one. Then the network can learn which groups of pixels form the shape of each digit.",
      fr: "Un chiffre manuscrit dans le célèbre jeu de données MNIST est une image de vingt-huit par vingt-huit pixels. Cela fait sept cent quatre-vingt-quatre nombres, chacun entre zéro et deux cent cinquante-cinq. Pour un humain, l'image est clairement un sept. Pour l'ordinateur, ce n'est qu'une liste de nombres. La tâche de la vision par ordinateur est de construire des modèles qui relient ces nombres au sens. Pour aider le modèle, on normalise les nombres dans une plage entre zéro et un. Ensuite le réseau peut apprendre quels groupes de pixels forment la forme de chaque chiffre.",
    },
    s: "Décrivez à voix haute une photo de votre téléphone comme si vous l'expliquiez à un ordinateur : « The image has … pixels. It is in color. The brightness is … The main object is … »",
    p: { tip: "« Pixel » : PIK-sl. « Resolution » : rez-uh-LOO-shn. « Grayscale » : GRAY-skayl. « Contrast » (nom) : accent sur la 1re syllabe, KAHN-trast. « Brightness » : BRITE-nis.", words: "pixel,resolution,grayscale,brightness,contrast,aspect" },
    q: [
      ["How many channels does an RGB image have?", ["1", "2", "3", "4"], 2, "Rouge, vert, bleu."],
      ["Why do we normalize pixel values?", ["To make the training more stable", "To make images bigger", "To change the colors", "To delete noise from the file name"], 0, "Des valeurs petites et homogènes facilitent l'apprentissage."],
      ["Edge detection finds…", ["boundaries in an image", "the file size", "the camera model", "labels"], 0, "Les contours sont des changements d'intensité."],
    ],
    rq: [
      ["How many pixels does a MNIST image have?", ["784", "28", "255"], 0, "28 × 28 = 784."],
      ["For the computer, an image is…", ["a list of numbers", "a picture of a seven", "a sound"], 0, "« only a list of numbers »."],
    ],
    f: ["The image have a resolution of high.", "The image has a high resolution.", "Adjectif avant le nom, et « has » au singulier."],
  },
  {
    id: "8-2",
    t: "Image Classification and ImageNet",
    fr: "Classification d'images et ImageNet",
    cat: "Computer Vision",
    goal: "Décrire le fonctionnement et l'évaluation d'un classifieur d'images, et raconter l'histoire d'ImageNet.",
    w: `image classification|classification d'images|IM-ij klas-uh-fuh-KAY-shn
ImageNet|ImageNet (jeu de données)|IM-ij-net
top-1 accuracy|précision top-1|tahp-WUN AK-yuh-ruh-see
top-5 accuracy|précision top-5|tahp-FIVE AK-yuh-ruh-see
confidence|confiance (du modèle)|KAHN-fuh-duns
feature extraction|extraction de caractéristiques|FEE-cher ik-STRAK-shn
ResNet|ResNet (réseau résiduel)|REZ-net
skip connection|connexion résiduelle|skip kuh-NEK-shn
fine-grained|à grain fin|fine-graynd
adversarial example|exemple adversarial|ad-ver-SAIR-ee-ul ig-ZAM-pl
visual recognition|reconnaissance visuelle|VIZH-oo-ul rek-ig-NISH-n
misclassification|erreur de classification|mis-klas-uh-fuh-KAY-shn
class imbalance|déséquilibre de classes|klas im-BAL-uns
dataset bias|biais du jeu de données|DAY-tuh-set BIE-us
annotation|annotation|an-uh-TAY-shn
crowdsourcing|production participative|KROWD-sor-sing
competition|compétition|kahm-puh-TISH-n
state of the art|état de l'art|stayt uv thee art
error rate|taux d'erreur|ER-er rayt
breakthrough|percée|BRAYK-throo
to classify|classer|too KLAS-uh-fie
to recognize|reconnaître|too REK-ig-nize
sample|exemple, échantillon|SAM-pl
top prediction|meilleure prédiction|tahp prih-DIK-shn
correct|correct|kuh-REKT`,
    x: `The model classifies each image into one of a thousand classes.|Le modèle classe chaque image dans l'une des mille classes.
The top-five accuracy is ninety percent.|La précision top-5 est de quatre-vingt-dix pour cent.
The model is very confident, but it is wrong.|Le modèle est très confiant, mais il a tort.
It confuses wolves and dogs.|Il confond les loups et les chiens.
The error rate dropped from twenty-six to sixteen percent.|Le taux d'erreur est passé de vingt-six à seize pour cent.
Who annotated these images?|Qui a annoté ces images ?
This classes are very similar.|Ces classes sont très similaires.
A tiny change can fool the model.|Un minuscule changement peut tromper le modèle.
This result is state of the art.|Ce résultat est l'état de l'art.
The dataset contains millions of labeled images.|Le jeu de données contient des millions d'images étiquetées.`,
    d: [
      ["Top-1 versus top-5", `Student: My model has seventy percent top-one accuracy. || Mon modèle a soixante-dix pour cent de précision top-1.
Teacher: And top-five? || Et top-5 ?
Student: Ninety percent. The right class is often in the five best guesses. || Quatre-vingt-dix pour cent. La bonne classe est souvent dans les cinq meilleures prédictions.
Teacher: Good. For similar classes, top-five is more informative. || Bien. Pour des classes proches, le top-5 est plus informatif.`],
      ["A confident mistake", `Omar: The model says husky with ninety-nine percent confidence. || Le modèle dit husky avec quatre-vingt-dix-neuf pour cent de confiance.
Sara: But it is a wolf! || Mais c'est un loup !
Omar: The wolf photo has snow in the background. || La photo du loup a de la neige en arrière-plan.
Sara: So the model learned the background, not the animal. That is dataset bias. || Donc le modèle a appris l'arrière-plan, pas l'animal. C'est un biais du jeu de données.`],
    ],
    c: {
      en: "In image classification, a model receives an image and predicts one class, for example cat, car or tree. The ImageNet dataset, with more than a million labeled images in one thousand classes, became the main benchmark. Models are often compared by top-1 accuracy, the proportion of images where the best prediction is correct, and top-5 accuracy, where the correct class is among the five best predictions. Deep convolutional networks extract features automatically. Architectures such as ResNet use skip connections to train very deep networks. However, models can make confident mistakes, can depend on the background and can be fooled by adversarial examples.",
      fr: "En classification d'images, un modèle reçoit une image et prédit une classe, par exemple chat, voiture ou arbre. Le jeu de données ImageNet, avec plus d'un million d'images étiquetées dans mille classes, est devenu la référence principale. Les modèles sont souvent comparés par la précision top-1, la proportion d'images où la meilleure prédiction est correcte, et la précision top-5, où la bonne classe est parmi les cinq meilleures prédictions. Les réseaux convolutifs profonds extraient les caractéristiques automatiquement. Des architectures comme ResNet utilisent des connexions résiduelles pour entraîner des réseaux très profonds. Cependant, les modèles peuvent faire des erreurs avec confiance, dépendre de l'arrière-plan et être trompés par des exemples adversariaux.",
    },
    da: `Top-1 / Top-5: top-1 = l-jawab l-awwal sa7i7. Top-5 = jawab sa7i7 f l-5 l-awal. Mouhim f ImageNet 7it kayn bzzaf d l-ajnas (mital 120 noo3 dyal l-klab).
Confidence: ma-ya3nich dima sa7i7! Modèle y9der ykoun « mtqaddem » w ghalat. 9ra l-confidence b 7dar.
Adversarial example: tghyir sghir bzzaf f l-pixels (l-3ayn ma-tchoufouch) w l-modèle ykhaleT. Mawdou3 dyal l-amn (security).`,
    r: {
      t: "The ImageNet story",
      en: "ImageNet was created by a team led by Fei-Fei Li at Stanford University, and the dataset was presented in a 2009 conference paper. It contains millions of images labeled by people through an online crowdsourcing platform. From 2010, the ImageNet Large Scale Visual Recognition Challenge invited researchers to compare their models. In 2012, a convolutional neural network called AlexNet, trained on GPUs, reduced the top-5 error rate far below the competitors. This result is often considered the moment when deep learning became the main approach in computer vision. In the following years, models such as ResNet continued to reduce the error.",
      fr: "ImageNet a été créé par une équipe dirigée par Fei-Fei Li à l'Université Stanford et le jeu de données a été présenté dans un article de conférence en 2009. Il contient des millions d'images étiquetées par des personnes via une plateforme de production participative en ligne. À partir de 2010, le défi ImageNet Large Scale Visual Recognition Challenge a invité les chercheurs à comparer leurs modèles. En 2012, un réseau de neurones convolutif appelé AlexNet, entraîné sur des GPU, a réduit le taux d'erreur top-5 bien en dessous des concurrents. Ce résultat est souvent considéré comme le moment où l'apprentissage profond est devenu l'approche principale en vision par ordinateur. Les années suivantes, des modèles comme ResNet ont continué à réduire l'erreur.",
    },
    s: "Présentez à voix haute l'histoire d'ImageNet en 5 phrases : « ImageNet is … It was created by … In 2012 … This result showed that … »",
    p: { tip: "« Classification » : klas-uh-fuh-KAY-shn. « Adversarial » : ad-ver-SAIR-ee-ul. « Annotation » : an-uh-TAY-shn. « Confidence » : KAHN-fuh-duns. « Recognize » : REK-ig-nize.", words: "classification,adversarial,annotation,confidence,breakthrough,recognize" },
    q: [
      ["Top-5 accuracy means that…", ["the correct class is in the five best predictions", "there are five classes", "the model has five layers", "the model is five years old"], 0, "Top-5 est plus tolérant que top-1."],
      ["What problem does dataset bias cause?", ["The model learns misleading patterns like the background", "The computer crashes", "Images disappear", "The dataset becomes smaller"], 0, "Le modèle exploite des indices non pertinents."],
      ["ResNet uses skip connections to…", ["train very deep networks", "shrink images", "label images", "print results"], 0, "Elles facilitent la circulation du gradient."],
    ],
    rq: [
      ["Who led the team that created ImageNet?", ["Fei-Fei Li", "Yann LeCun", "Linus Torvalds"], 0, "Première phrase."],
      ["What happened in 2012?", ["AlexNet reduced the error far below competitors", "ImageNet closed", "GPUs were invented"], 0, "« In 2012, … AlexNet »."],
    ],
    f: ["This classes are very similar.", "These classes are very similar.", "Pluriel : « these » (this → these)."],
  },
  {
    id: "8-3",
    t: "Object Detection and Segmentation",
    fr: "Détection d'objets et segmentation",
    cat: "Computer Vision",
    goal: "Expliquer la détection d'objets, la segmentation et leurs métriques (IoU).",
    w: `object detection|détection d'objets|AHB-jekt dih-TEK-shn
bounding box|boîte englobante|BOWN-ding bahks
intersection over union|intersection sur union|in-ter-SEK-shn OH-ver YOON-yn
non-maximum suppression|suppression des non-maxima|nahn-MAK-suh-mum suh-PRESH-n
YOLO|YOLO (détecteur rapide)|YOH-loh
region proposal|proposition de région|REE-jn pruh-POH-zl
semantic segmentation|segmentation sémantique|suh-MAN-tik seg-men-TAY-shn
instance segmentation|segmentation d'instances|IN-stuns seg-men-TAY-shn
mask|masque|mask
pixel-wise|au niveau du pixel|PIK-sl-wize
U-Net|U-Net (architecture de segmentation)|yoo-NET
class label|étiquette de classe|klas LAY-bl
confidence score|score de confiance|KAHN-fuh-duns skor
false alarm|fausse alerte|fawls uh-LARM
real-time|temps réel|REEL-tyme
occlusion|occlusion|uh-KLOO-zhn
localization|localisation|loh-kuh-luh-ZAY-shn
overlap|chevauchement|OH-ver-lap
foreground|premier plan|FOR-ground
background|arrière-plan|BAK-ground
detector|détecteur|dih-TEK-ter
to detect|détecter|too dih-TEKT
to segment|segmenter|too SEG-ment
to draw a box|dessiner un cadre|too draw uh bahks
tight|serré, ajusté|tite`,
    x: `The detector draws a box around each object.|Le détecteur dessine un cadre autour de chaque objet.
Each box has a class label and a confidence score.|Chaque cadre a une étiquette de classe et un score de confiance.
The two boxes overlap too much.|Les deux cadres se chevauchent trop.
The intersection over union is zero point seven.|L'intersection sur union est de zéro virgule sept.
Remove duplicate boxes with non-maximum suppression.|Supprime les cadres en double avec la suppression des non-maxima.
The model runs in real time.|Le modèle fonctionne en temps réel.
Part of the car is hidden behind a tree.|Une partie de la voiture est cachée derrière un arbre.
Segmentation labels every pixel.|La segmentation étiquette chaque pixel.
The mask shows the shape of the object.|Le masque montre la forme de l'objet.
There are too many false alarms.|Il y a trop de fausses alertes.`,
    d: [
      ["Evaluating a detector", `Teacher: How do you know if a bounding box is correct? || Comment sait-on si un cadre est correct ?
Student: We compute the intersection over union with the true box. || On calcule l'intersection sur union avec le vrai cadre.
Teacher: What threshold do you use? || Quel seuil utilises-tu ?
Student: Usually zero point five. Above that, the detection is correct. || Généralement zéro virgule cinq. Au-dessus, la détection est correcte.`],
      ["Detection or segmentation?", `Omar: I need to know the exact shape of the tumor. || J'ai besoin de connaître la forme exacte de la tumeur.
Sara: A bounding box is not enough. Use segmentation. || Un cadre ne suffit pas. Utilise la segmentation.
Omar: Which model? || Quel modèle ?
Sara: U-Net is popular for medical images. || U-Net est populaire pour les images médicales.`],
    ],
    c: {
      en: "Object detection answers two questions: what is in the image and where is it? The model predicts a bounding box, a class label and a confidence score for each object. To measure the quality of a box, we use intersection over union, or IoU: the area of overlap between the predicted box and the true box, divided by the area of their union. Because a detector often produces several boxes for one object, non-maximum suppression keeps only the best one. Detectors such as YOLO are fast enough for real time. Segmentation goes further: it assigns a class to every pixel, so it gives the exact shape of objects.",
      fr: "La détection d'objets répond à deux questions : qu'y a-t-il dans l'image et où ? Le modèle prédit un cadre englobant, une étiquette de classe et un score de confiance pour chaque objet. Pour mesurer la qualité d'un cadre, on utilise l'intersection sur union, ou IoU : l'aire de chevauchement entre le cadre prédit et le vrai cadre, divisée par l'aire de leur union. Comme un détecteur produit souvent plusieurs cadres pour un objet, la suppression des non-maxima ne garde que le meilleur. Des détecteurs comme YOLO sont assez rapides pour le temps réel. La segmentation va plus loin : elle attribue une classe à chaque pixel, donc elle donne la forme exacte des objets.",
    },
    r: {
      t: "Seeing the road",
      en: "A self-driving car must see its surroundings in real time. Cameras produce thirty images per second, and an object detection model must find the cars, pedestrians, traffic lights and road signs in each image. A segmentation model also marks the pixels that belong to the road and the lane. The system then combines these results to decide how to steer, brake or accelerate. A false negative, for example a pedestrian that is not detected, can be very dangerous. For this reason, engineers test their models in many conditions, such as night, rain and partial occlusion, before using them on real roads.",
      fr: "Une voiture autonome doit voir son environnement en temps réel. Les caméras produisent trente images par seconde et un modèle de détection d'objets doit trouver les voitures, piétons, feux et panneaux dans chaque image. Un modèle de segmentation marque aussi les pixels appartenant à la route et à la voie. Le système combine ensuite ces résultats pour décider comment tourner, freiner ou accélérer. Un faux négatif, par exemple un piéton non détecté, peut être très dangereux. Pour cette raison, les ingénieurs testent leurs modèles dans de nombreuses conditions, comme la nuit, la pluie et l'occlusion partielle, avant de les utiliser sur de vraies routes.",
    },
    da: `Detection vs classification: classification = « chnou f t-sswira? ». Detection = « chnou w fin? » (m3a mourabba3). Segmentation = « chnou f kol pixel? ».
IoU: nsba bin mouraba3 li tnabba2 b l-model w l-mouraba3 l-7a9i9i. 1 = bhal bhal, 0 = ma-kayn t9ato3. 3adatan > 0.5 = detection sa7i7a.
Non-maximum suppression: l-detector kay3ti bzzaf d l-mourabba3at l nafs l-chay. NMS kay-khelli ghi l-a7san (a3la confidence).`,
    s: "Décrivez à voix haute une rue que vous voyez par la fenêtre comme un détecteur d'objets : « I detect two cars, one bus and three pedestrians. The car on the left has a confidence of … »",
    p: { tip: "« Segmentation » : seg-men-TAY-shn. « Occlusion » : uh-KLOO-zhn. « Localization » : loh-kuh-luh-ZAY-shn. « YOLO » : YOH-loh. « Intersection » : in-ter-SEK-shn.", words: "detection,segmentation,occlusion,localization,overlap,foreground" },
    q: [
      ["IoU measures…", ["the overlap between two boxes", "the speed of a camera", "the color of an object", "the file size"], 0, "IoU = aire d'intersection / aire d'union."],
      ["What does segmentation give that a bounding box does not?", ["The exact shape of the object", "A faster model", "The class name", "A bigger image"], 0, "Un masque pixel par pixel."],
      ["Non-maximum suppression is used to…", ["remove duplicate boxes", "increase image size", "train the model", "label data"], 0, "Garde le meilleur cadre par objet."],
    ],
    rq: [
      ["How many images per second do cameras produce in the text?", ["Thirty", "Three", "Three hundred"], 0, "« thirty images per second »."],
      ["Why is a false negative dangerous?", ["A pedestrian may not be detected", "The screen turns off", "The car is too fast"], 0, "Voir l'exemple du piéton."],
    ],
    f: ["The detector draw many boxs.", "The detector draws many boxes.", "Pluriel de « box » : boxes ; verbe : draws."],
  },
];
