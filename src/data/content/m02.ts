import type { RawLesson } from "../types";

export const m02: RawLesson[] = [
  {
    id: "2-1",
    t: "Computer Hardware",
    fr: "Le matériel informatique",
    cat: "Computer Science",
    goal: "Nommer et décrire les composants d'un ordinateur et comparer leurs performances.",
    w: `hardware|matériel (informatique)|HARD-wer
processor / CPU|processeur|PRAH-seh-ser / see-pee-YOO
memory / RAM|mémoire vive|MEM-uh-ree / ram
storage|stockage|STOR-ij
hard drive|disque dur|hard drive
SSD (solid-state drive)|disque SSD|es-es-DEE
motherboard|carte mère|MUH-dher-bord
graphics card / GPU|carte graphique|GRAF-iks card / jee-pee-YOO
core|cœur (de processeur)|kor
speed|vitesse|speed
capacity|capacité|kuh-PAS-uh-tee
screen|écran|skreen
keyboard|clavier|KEE-bord
mouse|souris|mows
printer|imprimante|PRIN-ter
battery|batterie|BAT-uh-ree
port|port (connectique)|port
cable|câble|KAY-bl
chip|puce électronique|chip
fan|ventilateur|fan
to plug in|brancher|too plug in
to turn on|allumer|too tern on
to restart|redémarrer|too ree-START
device|appareil|dih-VICE
powerful|puissant|POW-er-ful`,
    x: `How much RAM does this laptop have?|Combien de RAM a cet ordinateur ?
It has sixteen gigabytes of memory.|Il a seize gigaoctets de mémoire.
My computer is too slow.|Mon ordinateur est trop lent.
Have you tried turning it off and on again?|As-tu essayé de l'éteindre et de le rallumer ?
The battery lasts about eight hours.|La batterie dure environ huit heures.
Which graphics card do you use for training?|Quelle carte graphique utilises-tu pour l'entraînement ?
This processor has eight cores.|Ce processeur a huit cœurs.
Could you plug in the cable, please?|Pouvez-vous brancher le câble, s'il vous plaît ?
I need more storage space.|J'ai besoin de plus d'espace de stockage.
It overheats when I run the model.|Il surchauffe quand je lance le modèle.`,
    d: [
      ["Buying a laptop", `Seller: Can I help you? || Puis-je vous aider ?
Student: I need a laptop for machine learning. || J'ai besoin d'un portable pour le machine learning.
Seller: This one has sixteen gigabytes of RAM and a fast SSD. || Celui-ci a seize gigaoctets de RAM et un SSD rapide.
Student: Does it have a graphics card? || A-t-il une carte graphique ?`],
      ["A slow computer", `Omar: My laptop is very slow today. || Mon portable est très lent aujourd'hui.
Sara: How much storage is left? || Combien de stockage reste-t-il ?
Omar: Only five gigabytes. The hard drive is almost full. || Seulement cinq gigaoctets. Le disque dur est presque plein.
Sara: Delete old files, then restart the device. || Supprime les vieux fichiers, puis redémarre l'appareil.`],
    ],
    c: {
      en: "A computer has several important parts. The processor, or CPU, executes instructions. The RAM is the short-term memory: it stores data that the computer is using now. Storage, such as an SSD, keeps your files even when the computer is off. The motherboard connects all the components. For artificial intelligence, the GPU is especially useful because it can do thousands of simple calculations at the same time. More cores and more memory usually mean a more powerful machine.",
      fr: "Un ordinateur a plusieurs parties importantes. Le processeur, ou CPU, exécute les instructions. La RAM est la mémoire à court terme : elle stocke les données que l'ordinateur utilise en ce moment. Le stockage, comme un SSD, conserve vos fichiers même quand l'ordinateur est éteint. La carte mère relie tous les composants. Pour l'intelligence artificielle, le GPU est particulièrement utile car il peut faire des milliers de calculs simples en même temps. Plus de cœurs et plus de mémoire signifient généralement une machine plus puissante.",
    },
    da: `RAM vs stockage: RAM = « dakira mo2aqqata » (kat-mshi ila tafi l-pc). SSD / disque dur = « dakira dayma » (kat-bqa l-fichiers).
GPU: kart graphique, mouhimma bzzaf l-deep learning 7it kat7seb bzzaf d l-3amaliyat f nafs l-weqt (parallèle).
« Hardware » w « software »: hardware = lli kat-lmes (l-pc nit), software = lbarnamaj.`,
    r: {
      t: "Why AI needs GPUs",
      en: "Training a neural network requires millions of calculations. A normal CPU does calculations one after another, very fast, but with only a few cores. A GPU has thousands of smaller cores, so it can work on many numbers at once. This was first useful for video games, which need to draw many pixels quickly. Researchers discovered that the same hardware is excellent for matrix operations, the basis of deep learning. Today, companies build special chips for AI, but GPUs are still the most common choice for training models.",
      fr: "Entraîner un réseau de neurones demande des millions de calculs. Un CPU normal fait les calculs l'un après l'autre, très vite, mais avec seulement quelques cœurs. Un GPU a des milliers de cœurs plus petits, il peut donc traiter beaucoup de nombres à la fois. Cela a d'abord été utile pour les jeux vidéo, qui doivent dessiner beaucoup de pixels rapidement. Les chercheurs ont découvert que le même matériel est excellent pour les opérations matricielles, base de l'apprentissage profond. Aujourd'hui, des entreprises conçoivent des puces spéciales pour l'IA, mais les GPU restent le choix le plus courant pour entraîner des modèles.",
    },
    s: "Décrivez votre ordinateur ou votre téléphone en 6 phrases : « My laptop has … gigabytes of RAM. The screen is … The battery lasts … It is fast/slow because … »",
    p: { tip: "Les sigles se prononcent lettre par lettre en anglais : CPU = see-pee-yoo, GPU = jee-pee-yoo. « Memory » : MEM-uh-ree (3 syllabes, pas 4). « Battery » : BAT-uh-ree.", words: "processor,memory,battery,capacity,motherboard,device" },
    q: [
      ["Which component keeps files when the computer is turned off?", ["RAM", "Storage (SSD)", "Fan", "Keyboard"], 1, "Le stockage est permanent ; la RAM est volatile."],
      ["Why are GPUs good for deep learning?", ["They are cheap", "They do many calculations in parallel", "They store files", "They cool the CPU"], 1, "Des milliers de cœurs = calcul parallèle sur des matrices."],
      ["RAM is…", ["long-term storage", "short-term working memory", "a type of cable", "a screen"], 1, "RAM = mémoire de travail à court terme."],
    ],
    rq: [
      ["Why did GPUs first become popular?", ["For video games", "For banking", "For printers"], 0, "« This was first useful for video games »."],
      ["What does a GPU have compared with a CPU?", ["More cores, smaller", "Fewer cores", "No cores"], 0, "« Thousands of smaller cores »."],
    ],
    f: ["My computer have eight gigabytes of RAM.", "My computer has eight gigabytes of RAM.", "À la 3e personne du singulier (it/he/she), « have » devient « has »."],
  },
  {
    id: "2-2",
    t: "Software and Operating Systems",
    fr: "Logiciels et systèmes d'exploitation",
    cat: "Computer Science",
    goal: "Comprendre le vocabulaire des logiciels, des fichiers et des systèmes d'exploitation.",
    w: `software|logiciel|SAWFT-wer
operating system|système d'exploitation|AH-puh-ray-ting SIS-tum
application / app|application|ap-luh-KAY-shn / ap
program|programme|PROH-gram
file|fichier|file
folder|dossier|FOHL-der
directory|répertoire|duh-REK-tuh-ree
to install|installer|too in-STAWL
to update|mettre à jour|too UP-dayt
to download|télécharger|too DOWN-lohd
to upload|téléverser|too UP-lohd
to save|enregistrer|too sayv
to delete|supprimer|too dih-LEET
to open source|ouvrir le code (source)|too OH-pn sors
open source|code source libre|OH-pn sors
version|version|VER-zhn
bug|bogue|bug
crash|plantage|krash
command line / terminal|ligne de commande|kuh-MAND line / TER-muh-nl
interface|interface|IN-ter-fays
setting|paramètre|SET-ing
user|utilisateur|YOO-zer
account|compte|uh-KOWNT
password|mot de passe|PAS-werd
license|licence|LIE-sns`,
    x: `Which operating system do you use?|Quel système d'exploitation utilises-tu ?
You need to update the software.|Vous devez mettre à jour le logiciel.
The app keeps crashing.|L'application plante sans arrêt.
I can't open this file.|Je ne peux pas ouvrir ce fichier.
Save your work before you close the program.|Enregistre ton travail avant de fermer le programme.
Open the terminal and type the command.|Ouvre le terminal et tape la commande.
Where did you save the folder?|Où as-tu enregistré le dossier ?
This tool is open source and free.|Cet outil est open source et gratuit.
There is a bug in the latest version.|Il y a un bogue dans la dernière version.
Could you send me the download link?|Peux-tu m'envoyer le lien de téléchargement ?`,
    d: [
      ["Installing software", `Omar: How do I install Python? || Comment j'installe Python ?
Sara: Download it from the official website, then open the file. || Télécharge-le depuis le site officiel, puis ouvre le fichier.
Omar: Which version should I choose? || Quelle version dois-je choisir ?
Sara: Choose the latest version. Then restart your computer. || Choisis la dernière version. Puis redémarre ton ordinateur.`],
      ["Reporting a bug", `User: The app crashes when I upload a file. || L'application plante quand je téléverse un fichier.
Developer: Which version do you use? || Quelle version utilisez-vous ?
User: Version 2.1 on Windows. || La version 2.1 sous Windows.
Developer: Thanks. It is a known bug. Please update to version 2.2. || Merci. C'est un bogue connu. Mettez à jour vers la version 2.2.`],
    ],
    c: {
      en: "Software is a set of instructions that tells the hardware what to do. The operating system, such as Windows, macOS or Linux, manages the hardware and runs applications. You store information in files, and you organize files in folders, also called directories. Many developers prefer the command line, or terminal, because it is fast and powerful. Software has versions: developers fix bugs and publish updates. Open-source software has public code that anyone can read, use and improve. Most AI tools, such as Python libraries, are open source.",
      fr: "Un logiciel est un ensemble d'instructions qui dit au matériel quoi faire. Le système d'exploitation, comme Windows, macOS ou Linux, gère le matériel et exécute les applications. On stocke les informations dans des fichiers et on organise les fichiers dans des dossiers, aussi appelés répertoires. Beaucoup de développeurs préfèrent la ligne de commande, ou terminal, car elle est rapide et puissante. Les logiciels ont des versions : les développeurs corrigent les bogues et publient des mises à jour. Un logiciel open source a un code public que chacun peut lire, utiliser et améliorer. La plupart des outils d'IA, comme les bibliothèques Python, sont open source.",
    },
    da: `Open source: « code ma7loul » — kolchi y9der y9rah w y-3awen. Python w bzzaf d l-bibliothèques dial l-IA hiya open source.
Install / update / upgrade: install = tsayb l-barnamaj l-awwal mra; update = tjdid l-version bach tsala7 l-bugs.
« Bug » machi gher « 7achra »: f l-informatique = khata2 f l-code. « The app crashes » = « l-application t-wa99afat l-bqa-ya ».`,
    r: {
      t: "Linux and the open-source world",
      en: "Linux is an operating system created in 1991 by Linus Torvalds. It is open source, so anyone can read and change its code. Today, Linux runs most web servers, many smartphones and almost all supercomputers. AI researchers like Linux because it is stable, free and works well with the command line. When a researcher trains a large model, the computer usually runs Linux. Learning basic terminal commands is therefore a useful skill for every AI student.",
      fr: "Linux est un système d'exploitation créé en 1991 par Linus Torvalds. Il est open source : chacun peut lire et modifier son code. Aujourd'hui, Linux fait fonctionner la plupart des serveurs web, de nombreux smartphones et presque tous les supercalculateurs. Les chercheurs en IA aiment Linux car il est stable, gratuit et fonctionne bien avec la ligne de commande. Quand un chercheur entraîne un grand modèle, l'ordinateur tourne généralement sous Linux. Apprendre des commandes de base du terminal est donc une compétence utile pour tout étudiant en IA.",
    },
    s: "Expliquez à voix haute à un ami comment installer un logiciel : « First, download the file. Then, open it. Next, click install. Finally, restart the computer. » Utilisez first / then / next / finally.",
    p: { tip: "« Install » : accent sur « stall » (in-STAWL). « Delete » : dih-LEET. « Version » : le « s » se prononce comme un « z » : VER-zhn.", words: "install,update,directory,interface,license,password" },
    q: [
      ["Which of these is an operating system?", ["Python", "Linux", "Excel file", "Chrome tab"], 1, "Linux est un système d'exploitation ; Python est un langage."],
      ["What does « open source » mean?", ["The code is public", "The software is old", "It only works online", "It has no bugs"], 0, "Open source : code public, lisible et modifiable."],
      ["A « bug » is…", ["a type of hardware", "an error in a program", "a new version", "a password"], 1, "Bug = erreur de programmation."],
    ],
    rq: [
      ["Who created Linux?", ["Linus Torvalds", "Bill Gates", "Alan Turing"], 0, "« created in 1991 by Linus Torvalds »."],
      ["Why do researchers like Linux?", ["It is stable, free, good with the command line", "It is the prettiest", "It is the oldest"], 0, "Raisons citées dans le texte."],
    ],
    f: ["I download the file yesterday.", "I downloaded the file yesterday.", "Avec « yesterday », on utilise le prétérit : downloaded."],
  },
];
