import type { RawLesson } from "../types";

export const m02b: RawLesson[] = [
  {
    id: "2-3",
    t: "Algorithms and Data Structures",
    fr: "Algorithmes et structures de données",
    cat: "Computer Science",
    goal: "Expliquer un algorithme étape par étape et nommer les structures de données principales.",
    w: `algorithm|algorithme|AL-guh-rih-dhm
step|étape|step
input|entrée|IN-poot
output|sortie, résultat|OWT-poot
problem|problème|PRAH-blum
to solve|résoudre|too sahlv
efficient|efficace|ih-FISH-nt
complexity|complexité|kum-PLEK-suh-tee
loop|boucle|loop
condition|condition|kun-DISH-n
variable|variable|VER-ee-uh-bl
array|tableau (liste)|uh-RAY
list|liste|list
stack|pile|stak
queue|file d'attente|kyoo
tree|arbre|tree
graph|graphe|graf
node|nœud|nohd
hash table|table de hachage|hash TAY-bl
to sort|trier|too sort
to search|chercher|too serch
recursion|récursivité|rih-KER-zhn
pseudocode|pseudo-code|SOO-doh-kohd
flowchart|organigramme|FLOH-chart
runtime|temps d'exécution|RUN-time`,
    x: `Let me explain how this algorithm works.|Laissez-moi expliquer comment cet algorithme fonctionne.
First, the algorithm takes a list as input.|D'abord, l'algorithme prend une liste en entrée.
Then it compares each pair of elements.|Ensuite, il compare chaque paire d'éléments.
It repeats these steps until the list is sorted.|Il répète ces étapes jusqu'à ce que la liste soit triée.
Finally, it returns the result.|Enfin, il renvoie le résultat.
What is the time complexity?|Quelle est la complexité en temps ?
This solution is more efficient.|Cette solution est plus efficace.
Can you draw a flowchart of the process?|Peux-tu dessiner un organigramme du processus ?
A stack works on a last-in, first-out basis.|Une pile fonctionne selon le principe dernier entré, premier sorti.
Let's write the pseudocode first.|Écrivons d'abord le pseudo-code.`,
    d: [
      ["Explaining an algorithm", `Student: Let me explain binary search. || Laissez-moi expliquer la recherche dichotomique.
Student: First, the input is a sorted list. || D'abord, l'entrée est une liste triée.
Student: Then we look at the middle element. If it is too big, we search the left half. || Puis on regarde l'élément du milieu. S'il est trop grand, on cherche dans la moitié gauche.
Professor: Good. And what is the complexity? || Bien. Et quelle est la complexité ?`],
      ["Choosing a data structure", `Omar: Should I use a list or a hash table? || Je devrais utiliser une liste ou une table de hachage ?
Sara: How often do you search for items? || À quelle fréquence cherches-tu des éléments ?
Omar: Very often. || Très souvent.
Sara: Then a hash table is more efficient. || Alors une table de hachage est plus efficace.`],
    ],
    c: {
      en: "An algorithm is a clear sequence of steps that solves a problem. It takes an input and produces an output. Algorithms use variables, conditions and loops. To compare algorithms, computer scientists measure complexity: how the runtime grows when the input gets bigger. Data structures organize data so that algorithms can use it efficiently. A list keeps items in order, a stack removes the last item first, a queue removes the first item first, and a tree stores data in a hierarchy. Choosing the right structure often makes a program much faster.",
      fr: "Un algorithme est une suite claire d'étapes qui résout un problème. Il prend une entrée et produit une sortie. Les algorithmes utilisent des variables, des conditions et des boucles. Pour comparer des algorithmes, les informaticiens mesurent la complexité : comment le temps d'exécution augmente quand l'entrée grandit. Les structures de données organisent les données pour que les algorithmes puissent les utiliser efficacement. Une liste garde les éléments dans l'ordre, une pile retire d'abord le dernier élément, une file retire d'abord le premier élément et un arbre stocke les données de façon hiérarchique. Choisir la bonne structure rend souvent un programme beaucoup plus rapide.",
    },
    da: `Algorithme: hiya « wasfa » (recette) dial l-informatique: marahil wad7a li kat7ell mochkil. Bhal wasfat t-tbikh.
Stack vs queue: Stack = tbe9 d l-3sa2ir (akhir wa7da li t7et hiya lowla li katjbed). Queue = tabour f l-boulangerie (lowel li ja houwa lowel li kaykhrej).
« Complexity »: machi « sou3oubat l-fahm », hiya kemmiyat l-weqt/dhakira li ya7tajha l-algorithme melli kay-kbar l-input.`,
    r: {
      t: "Al-Khwarizmi, the origin of the word algorithm",
      en: "The word algorithm comes from the name of Muhammad ibn Musa al-Khwarizmi, a scholar who lived in Baghdad in the ninth century. He wrote an important book about calculation with the Hindu-Arabic numerals and about solving equations. The Latin version of his name, Algoritmi, gave us the word algorithm. The word algebra comes from the title of another of his books, al-jabr. Today, algorithms are everywhere: they sort search results, recommend videos and help doctors read medical images.",
      fr: "Le mot algorithme vient du nom de Muhammad ibn Musa al-Khwarizmi, un savant qui vivait à Bagdad au IXe siècle. Il a écrit un livre important sur le calcul avec les chiffres indo-arabes et sur la résolution d'équations. La version latine de son nom, Algoritmi, nous a donné le mot algorithme. Le mot algèbre vient du titre d'un autre de ses livres, al-jabr. Aujourd'hui, les algorithmes sont partout : ils trient les résultats de recherche, recommandent des vidéos et aident les médecins à lire des images médicales.",
    },
    s: "Expliquez à voix haute un algorithme de la vie quotidienne (préparer le thé, retrouver un mot dans un dictionnaire) en 5 étapes avec : « The input is … First, … Then, … Finally, … The output is … »",
    p: { tip: "« Algorithm » : accent sur la 1re syllabe, le « th » est voisé (dh) : AL-guh-rih-dhm. « Queue » se prononce seulement « kyoo » comme la lettre Q. « Recursion » : le « s » se prononce « zh ».", words: "algorithm,complexity,queue,recursion,efficient,pseudocode" },
    q: [
      ["Which structure removes the last added item first?", ["Queue", "Stack", "Graph", "Array"], 1, "Stack = pile, LIFO (last in, first out)."],
      ["What does « complexity » measure?", ["How many lines the code has", "How the runtime grows with input size", "How hard the code is to read", "How old the algorithm is"], 1, "La complexité décrit la croissance du temps ou de la mémoire."],
      ["An algorithm takes an _____ and produces an output.", ["input", "error", "instruction manual", "icon"], 0, "Input → algorithme → output."],
    ],
    rq: [
      ["Where did al-Khwarizmi live?", ["Baghdad", "Paris", "Cairo"], 0, "« a scholar who lived in Baghdad »."],
      ["Which word comes from al-jabr?", ["Algorithm", "Algebra", "Alphabet"], 1, "Algebra vient d'al-jabr."],
    ],
    f: ["The algorithm is more efficient than the old.", "The algorithm is more efficient than the old one.", "Après un adjectif utilisé comme nom, on ajoute « one » : the old one."],
  },
  {
    id: "2-4",
    t: "Networks, the Internet and the Web",
    fr: "Réseaux, Internet et le Web",
    cat: "Computer Science",
    goal: "Comprendre comment les ordinateurs communiquent et décrire une requête web.",
    w: `network|réseau|NET-werk
internet|internet|IN-ter-net
website|site web|WEB-site
web page|page web|web payj
browser|navigateur|BROW-zer
server|serveur|SER-ver
client|client|KLIE-unt
request|requête|rih-KWEST
response|réponse|rih-SPAHNS
protocol|protocole|PROH-tuh-kawl
IP address|adresse IP|eye-PEE uh-DRES
domain name|nom de domaine|doh-MAYN naym
link|lien|link
router|routeur|ROW-ter
bandwidth|bande passante|BAND-width
latency|latence|LAY-tun-see
connection|connexion|kuh-NEK-shn
wireless|sans fil|WIRE-lis
packet|paquet (de données)|PAK-it
to browse|naviguer|too browz
to connect|se connecter|too kuh-NEKT
to load|charger|too lohd
to stream|diffuser en continu|too streem
offline|hors ligne|AWF-line
online|en ligne|AWN-line`,
    x: `The website is loading very slowly.|Le site web se charge très lentement.
I lost my internet connection.|J'ai perdu ma connexion internet.
What is the Wi-Fi password?|Quel est le mot de passe du Wi-Fi ?
The browser sends a request to the server.|Le navigateur envoie une requête au serveur.
The server sends back a response.|Le serveur renvoie une réponse.
My connection has high latency.|Ma connexion a une latence élevée.
Can you share the link with me?|Peux-tu partager le lien avec moi ?
The page doesn't load. Is the server down?|La page ne se charge pas. Le serveur est-il en panne ?
I'm working offline today.|Je travaille hors ligne aujourd'hui.
Click the link to open the page.|Cliquez sur le lien pour ouvrir la page.`,
    d: [
      ["A slow connection", `Omar: The video keeps buffering. || La vidéo n'arrête pas de se mettre en mémoire tampon.
Sara: Maybe the connection is weak. Is the router near you? || La connexion est peut-être faible. Le routeur est-il près de toi ?
Omar: No, it is in the other room. || Non, il est dans l'autre pièce.
Sara: Move closer, or use a cable. || Rapproche-toi, ou utilise un câble.`],
      ["Explaining a web request", `Student: When you type an address, the browser sends a request. || Quand on tape une adresse, le navigateur envoie une requête.
Professor: To which computer? || À quel ordinateur ?
Student: To a server. It finds the page and sends a response. || À un serveur. Il trouve la page et envoie une réponse.
Professor: Correct. And how does the browser find the server? || Exact. Et comment le navigateur trouve-t-il le serveur ?`],
    ],
    c: {
      en: "A network is a group of connected computers. The internet is a global network of networks. When you open a website, your browser, which is the client, sends a request to a server. The server finds the web page and sends a response. Computers follow protocols, which are shared rules, such as HTTP. Each device has an IP address, and a domain name, such as example.com, is an easy name for that address. Two important measures of quality are bandwidth, the amount of data per second, and latency, the delay before data arrives.",
      fr: "Un réseau est un groupe d'ordinateurs connectés. Internet est un réseau mondial de réseaux. Quand vous ouvrez un site web, votre navigateur, qui est le client, envoie une requête à un serveur. Le serveur trouve la page web et envoie une réponse. Les ordinateurs suivent des protocoles, qui sont des règles partagées, comme HTTP. Chaque appareil a une adresse IP et un nom de domaine, comme example.com, est un nom facile pour cette adresse. Deux mesures importantes de qualité sont la bande passante, la quantité de données par seconde, et la latence, le délai avant l'arrivée des données.",
    },
    da: `Internet vs Web: Internet = ch-chabaka (l-ka-blat w l-wifi). Web = l-mawaqi3 li katchoufhom 3la had ch-chabaka. Machi nafs ch-chay.
Client / Server: l-client = nta (l-navigateur). Server = l-pc li 3ndo s-site. Nta kat-tlob (request), houwa kay-jaweb (response).
Bandwidth vs latency: bandwidth = chhal mn data f t-tanya (3ard l-tari9). Latency = chhal kay-akhod mn weqt bach l-jawab yjik (sor3at l-wousoul).`,
    r: {
      t: "What happens when you open a website?",
      en: "You type an address in your browser and press Enter. First, the browser asks a special system, called DNS, to translate the domain name into an IP address. Then it sends a request to the server at this address. The server prepares a response, often a web page written in HTML, and sends it back in small packets. Finally, the browser puts the packets together and displays the page. All this usually takes less than one second. If you use a slow connection, you may notice the delay.",
      fr: "Vous tapez une adresse dans votre navigateur et appuyez sur Entrée. D'abord, le navigateur demande à un système spécial, appelé DNS, de traduire le nom de domaine en adresse IP. Puis il envoie une requête au serveur situé à cette adresse. Le serveur prépare une réponse, souvent une page web écrite en HTML, et la renvoie en petits paquets. Enfin, le navigateur rassemble les paquets et affiche la page. Tout cela prend généralement moins d'une seconde. Si votre connexion est lente, vous pouvez remarquer le retard.",
    },
    s: "Décrivez à voix haute ce qui se passe quand vous ouvrez un site web, en 5 étapes : « First, I type … Then, the browser sends … The server … Finally, the page appears. »",
    p: { tip: "« Latency » : LAY-tun-see, le « a » est long comme dans « day ». « Router » en anglais américain se dit « ROW-ter » (comme « out »), pas « roo-ter ». « Wireless » : WIRE-lis.", words: "latency,router,bandwidth,protocol,browser,connection" },
    q: [
      ["In a web request, the browser is the…", ["server", "client", "router", "packet"], 1, "Le navigateur demande : c'est le client. Le serveur répond."],
      ["What translates a domain name into an IP address?", ["DNS", "A cable", "A bug", "A SSD"], 0, "DNS = Domain Name System."],
      ["High latency means…", ["fast response", "a long delay", "a lot of storage", "a strong password"], 1, "Latence élevée = grand délai de réponse."],
    ],
    rq: [
      ["What is the first step after you press Enter?", ["The browser asks DNS for the IP address", "The server closes", "The page is displayed"], 0, "« First, the browser asks … DNS »."],
      ["In what do servers send data back?", ["Small packets", "Paper letters", "Videos only"], 0, "« in small packets »."],
    ],
    f: ["I am navigating on internet since two hours.", "I have been browsing the internet for two hours.", "On utilise le present perfect continuous avec « for + durée », et « browse » pour naviguer."],
  },
  {
    id: "2-5",
    t: "Databases, Cloud and Security",
    fr: "Bases de données, cloud et sécurité",
    cat: "Computer Science",
    goal: "Décrire le stockage structuré de données, le cloud et les principes de base de la sécurité.",
    w: `database|base de données|DAY-tuh-bays
table|table|TAY-bl
record / row|enregistrement / ligne|REK-erd / roh
field / column|champ / colonne|feeld / KAH-lum
query|requête (base de données)|KWEER-ee
SQL|SQL (langage de requêtes)|ES-kyoo-EL
key|clé|kee
backup|sauvegarde|BAK-up
cloud|cloud, informatique en nuage|klowd
data center|centre de données|DAY-tuh SEN-ter
scalable|évolutif|SKAY-luh-bl
encryption|chiffrement|en-KRIP-shn
authentication|authentification|aw-then-tih-KAY-shn
firewall|pare-feu|FIRE-wawl
virus|virus|VIE-rus
hacker|pirate informatique|HAK-er
attack|attaque|uh-TAK
privacy|vie privée|PRIE-vuh-see
breach|violation (de données)|breech
to protect|protéger|too pruh-TEKT
to encrypt|chiffrer|too en-KRIPT
to log in|se connecter (compte)|too lawg in
secure|sûr, sécurisé|sih-KYOOR
sensitive data|données sensibles|SEN-suh-tiv DAY-tuh
two-factor|à deux facteurs|too FAK-ter`,
    x: `We store the data in a database.|Nous stockons les données dans une base de données.
Run a query to find all users.|Exécute une requête pour trouver tous les utilisateurs.
Always make a backup before you change anything.|Fais toujours une sauvegarde avant de modifier quoi que ce soit.
Our system runs in the cloud.|Notre système fonctionne dans le cloud.
Use a strong password.|Utilise un mot de passe fort.
Turn on two-factor authentication.|Active l'authentification à deux facteurs.
The data is encrypted.|Les données sont chiffrées.
There was a data breach last year.|Il y a eu une fuite de données l'an dernier.
This is sensitive data. Please be careful.|Ce sont des données sensibles. Soyez prudents.
Never click on links from unknown senders.|Ne cliquez jamais sur des liens d'expéditeurs inconnus.`,
    d: [
      ["Using a database", `Student: Where do you store the customers? || Où stockes-tu les clients ?
Developer: In a database. Each customer is a row in a table. || Dans une base de données. Chaque client est une ligne dans une table.
Student: How do you find one customer? || Comment trouves-tu un client ?
Developer: I write a query in SQL, using the customer's ID as the key. || J'écris une requête SQL, avec l'identifiant du client comme clé.`],
      ["Account security", `Omar: I think someone tried to log in to my account. || Je crois que quelqu'un a essayé de se connecter à mon compte.
Sara: Change your password immediately. || Change ton mot de passe immédiatement.
Omar: What should I do next? || Que dois-je faire ensuite ?
Sara: Turn on two-factor authentication to protect your account. || Active l'authentification à deux facteurs pour protéger ton compte.`],
    ],
    c: {
      en: "A database stores data in an organized way, usually in tables with rows and columns. You use a query language, such as SQL, to read and change the data. Today many companies keep their data and applications in the cloud, which means in remote data centers connected to the internet. Cloud systems are scalable: you can add more power when you need it. Security is essential. Encryption protects data by turning it into secret code, authentication checks who you are, and a firewall blocks dangerous traffic. Always make backups, because data can be lost.",
      fr: "Une base de données stocke des données de manière organisée, généralement dans des tables avec des lignes et des colonnes. On utilise un langage de requête, comme SQL, pour lire et modifier les données. Aujourd'hui, beaucoup d'entreprises gardent leurs données et applications dans le cloud, c'est-à-dire dans des centres de données distants connectés à Internet. Les systèmes cloud sont évolutifs : on peut ajouter de la puissance quand on en a besoin. La sécurité est essentielle. Le chiffrement protège les données en les transformant en code secret, l'authentification vérifie qui vous êtes et un pare-feu bloque le trafic dangereux. Faites toujours des sauvegardes, car des données peuvent être perdues.",
    },
    da: `Query: « talab » (so2al) li kat-sifto l-database: « SELECT * FROM users » = « jib liya koll l-mosta5dimin ».
Cloud: machi « s-sa7ab » 7e99an. Hiya serveurs f markaz data (data center) kat-sta3mlhom b l-internet, bla ma tchri serveur dyalek.
Encryption vs authentication: encryption = ta5fiya (kat-bddel data l-code), authentication = t2akkod mnin nta (login). Zouj dyal chay2 mkhtalfin.`,
    r: {
      t: "Why two-factor authentication matters",
      en: "Many people use the same weak password on several websites. If a hacker steals one password in a data breach, he can try it everywhere. Two-factor authentication adds a second step. After you enter your password, the website asks for a code from your phone or an app. A hacker who knows only your password cannot enter your account. Security experts say that this simple measure stops most automatic attacks. It takes a few extra seconds, but it protects your private data and your identity.",
      fr: "Beaucoup de personnes utilisent le même mot de passe faible sur plusieurs sites. Si un pirate vole un mot de passe lors d'une fuite de données, il peut l'essayer partout. L'authentification à deux facteurs ajoute une seconde étape. Après avoir saisi votre mot de passe, le site demande un code envoyé sur votre téléphone ou via une application. Un pirate qui ne connaît que votre mot de passe ne peut pas entrer dans votre compte. Les experts en sécurité disent que cette mesure simple arrête la plupart des attaques automatiques. Cela prend quelques secondes de plus, mais protège vos données privées et votre identité.",
    },
    s: "Donnez à voix haute 4 conseils de sécurité à un ami débutant : « You should use … Never … Always … Turn on … » Enregistrez-vous et vérifiez que vous utilisez bien « should / never / always ».",
    p: { tip: "« Query » : KWEER-ee (le « u » se prononce « w »). « Breach » rime avec « beach ». « Privacy » en américain : PRIE-vuh-see (le « i » est long).", words: "database,query,encryption,authentication,privacy,breach" },
    q: [
      ["What does SQL help you do?", ["Draw pictures", "Query a database", "Browse the web", "Encrypt a screen"], 1, "SQL = Structured Query Language, pour interroger les bases de données."],
      ["Encryption means…", ["deleting data", "turning data into secret code", "copying data", "making data faster"], 1, "Chiffrer = transformer en code secret."],
      ["Which is the best protection after a password leak?", ["Ignore it", "Change it and enable two-factor authentication", "Use a shorter password", "Share it with friends"], 1, "Changer et ajouter un second facteur."],
    ],
    rq: [
      ["What does a hacker do with a stolen password?", ["Tries it on other websites", "Deletes the internet", "Buys a phone"], 0, "« he can try it everywhere »."],
      ["Where does the second code usually come from?", ["Your phone or an app", "Your keyboard", "A printed book"], 0, "Téléphone ou application."],
    ],
    f: ["You should to use a strong password.", "You should use a strong password.", "Après un verbe modal (should, can, must), on utilise le verbe sans « to »."],
  },
];
