import type { RawLesson } from "../types";

export const m09: RawLesson[] = [
  {
    id: "9-1",
    t: "Text Processing Basics",
    fr: "Bases du traitement du texte",
    cat: "NLP",
    goal: "Décrire les étapes de prétraitement du texte et les tâches classiques du TAL.",
    w: `natural language processing|traitement automatique des langues|NACH-rul LANG-gwij PRAH-seh-sing
corpus|corpus|KOR-pus
token|jeton, unité de texte|TOH-kn
tokenization|découpage en jetons|toh-kuh-nuh-ZAY-shn
stop word|mot vide|stahp werd
stemming|racinisation|STEM-ing
lemmatization|lemmatisation|lem-uh-tuh-ZAY-shn
part of speech|catégorie grammaticale|part uv speech
named entity|entité nommée|naymd EN-tuh-tee
regular expression|expression régulière|REG-yuh-ler ik-SPRESH-n
vocabulary|vocabulaire|voh-KAB-yuh-ler-ee
n-gram|n-gramme|EN-gram
bag of words|sac de mots|bag uv werdz
TF-IDF|TF-IDF (pondération de termes)|tee-ef-eye-dee-EF
punctuation|ponctuation|punk-choo-AY-shn
lowercase|minuscules|LOH-er-kays
sentiment analysis|analyse de sentiment|SEN-tuh-munt uh-NAL-uh-sis
text classification|classification de texte|tekst klas-uh-fuh-KAY-shn
out-of-vocabulary|hors vocabulaire|owt-uv-voh-KAB-yuh-ler-ee
language detection|détection de langue|LANG-gwij dih-TEK-shn
sentence boundary|limite de phrase|SEN-tns BOWN-duh-ree
document|document|DAHK-yuh-munt
to strip|retirer, nettoyer|too strip
encoding|encodage|en-KOH-ding
ambiguity|ambiguïté|am-buh-GYOO-uh-tee`,
    x: `First, we split the text into tokens.|D'abord, nous découpons le texte en jetons.
Convert everything to lowercase.|Convertis tout en minuscules.
Remove punctuation and stop words.|Supprime la ponctuation et les mots vides.
Stemming cuts the end of words.|La racinisation coupe la fin des mots.
Lemmatization returns the dictionary form.|La lemmatisation renvoie la forme du dictionnaire.
The word is out of vocabulary.|Le mot est hors vocabulaire.
We detect the names of people and places.|Nous détectons les noms de personnes et de lieux.
This review expresses a negative sentiment.|Cet avis exprime un sentiment négatif.
The sentence is ambiguous.|La phrase est ambiguë.
Check the text encoding.|Vérifie l'encodage du texte.`,
    d: [
      ["Preprocessing a review", `Omar: How do I prepare the reviews? || Comment préparer les avis ?
Sara: Lowercase everything, remove punctuation and tokenize. || Mets tout en minuscules, supprime la ponctuation et découpe en jetons.
Omar: Should I remove stop words? || Dois-je supprimer les mots vides ?
Sara: It depends. For sentiment analysis, words like not are important. || Ça dépend. Pour l'analyse de sentiment, des mots comme not sont importants.`],
      ["Stemming or lemmatization?", `Student: What is the difference between stemming and lemmatization? || Quelle est la différence entre racinisation et lemmatisation ?
Teacher: Stemming simply cuts the end: studies becomes studi. || La racinisation coupe simplement la fin : studies devient studi.
Teacher: Lemmatization returns a real word: studies becomes study. || La lemmatisation renvoie un vrai mot : studies devient study.
Student: So lemmatization is more precise. || Donc la lemmatisation est plus précise.`],
    ],
    c: {
      en: "Natural language processing, or NLP, teaches computers to work with human language. The data is a corpus, a large collection of texts. The first step is usually tokenization, which splits text into tokens, such as words or pieces of words. Other common steps are lowercasing, removing punctuation and removing stop words like the or and. Stemming cuts words to a rough root, while lemmatization returns the dictionary form. A simple representation is the bag of words, which counts words and ignores their order. Classic NLP tasks include text classification, sentiment analysis and named entity recognition. Language is difficult because of ambiguity: the same word can have different meanings.",
      fr: "Le traitement automatique des langues, ou TAL, apprend aux ordinateurs à travailler avec le langage humain. Les données forment un corpus, une grande collection de textes. La première étape est généralement la tokenisation, qui découpe le texte en jetons, comme des mots ou des morceaux de mots. Les autres étapes courantes sont la mise en minuscules, la suppression de la ponctuation et des mots vides comme the ou and. La racinisation coupe les mots en une racine approximative, tandis que la lemmatisation renvoie la forme du dictionnaire. Une représentation simple est le sac de mots, qui compte les mots et ignore leur ordre. Les tâches classiques du TAL comprennent la classification de texte, l'analyse de sentiment et la reconnaissance d'entités nommées. Le langage est difficile à cause de l'ambiguïté : le même mot peut avoir plusieurs sens.",
    },
    da: `Token: wa7da sghira mn n-nass (klima wla joz2 mn klima). Tokenization = 9te3 n-nass l tokens.
Stemming vs lemmatization: stemming = kay-9ass l-akhir b ghayr ma yb9a word kamel (studies → studi). Lemmatization = kay3ti l-klima l-asliya (studies → study).
Ambiguity: « bank » = bnk wla dhaffat nahr? « I saw her duck » = chefto w hiya kat-enchi? L-contexte howa lli kay7ssem. Hadi sou3oubat l-TAL.`,
    r: {
      t: "Why is language hard for computers?",
      en: "Consider the sentence: I saw the man with the telescope. Who has the telescope, the man or me? Humans use context to decide, but a computer must learn this from data. Language also has idioms, such as it is raining cats and dogs, which cannot be understood word by word. Furthermore, people use slang, spelling mistakes and different dialects. For these reasons, NLP systems need very large amounts of text. Modern language models learn from billions of sentences and can handle many of these difficulties, but ambiguity and cultural context remain challenges.",
      fr: "Considérez la phrase : I saw the man with the telescope. Qui a le télescope, l'homme ou moi ? Les humains utilisent le contexte pour décider, mais un ordinateur doit l'apprendre à partir de données. La langue a aussi des expressions idiomatiques, comme it is raining cats and dogs, qui ne se comprennent pas mot à mot. De plus, les gens utilisent de l'argot, des fautes d'orthographe et différents dialectes. Pour ces raisons, les systèmes de TAL ont besoin de très grandes quantités de texte. Les modèles de langage modernes apprennent à partir de milliards de phrases et gèrent beaucoup de ces difficultés, mais l'ambiguïté et le contexte culturel restent des défis.",
    },
    s: "Lisez à voix haute une phrase ambiguë en anglais (« I saw the man with the telescope ») et expliquez ses deux sens : « It can mean that … or that … »",
    p: { tip: "« Corpus » : KOR-pus (pluriel : corpora). « Tokenization » : toh-kuh-nuh-ZAY-shn. « Lemmatization » : lem-uh-tuh-ZAY-shn. « Language » : LANG-gwij. « Ambiguity » : am-buh-GYOO-uh-tee.", words: "corpus,tokenization,lemmatization,language,punctuation,ambiguity" },
    q: [
      ["Tokenization means…", ["splitting text into tokens", "translating text", "deleting text", "sorting words"], 0, "Premier pas du traitement du texte."],
      ["Lemmatization of « studies » gives…", ["studi", "study", "studying", "students"], 1, "Forme du dictionnaire."],
      ["A bag of words ignores…", ["word counts", "word order", "the corpus", "the vocabulary"], 1, "Il compte les mots mais perd l'ordre."],
    ],
    rq: [
      ["What is ambiguous in the telescope sentence?", ["Who has the telescope", "The date", "The verb saw"], 0, "Qui a le télescope ?"],
      ["Why does NLP need a lot of text?", ["Language has idioms, slang, mistakes and dialects", "Computers like text", "Text is cheap"], 0, "Voir « For these reasons »."],
    ],
    f: ["The corpus contain many informations.", "The corpus contains a lot of information.", "Singulier → contains ; « information » est indénombrable."],
  },
  {
    id: "9-2",
    t: "Word Embeddings and Language Models",
    fr: "Plongements de mots et modèles de langage",
    cat: "NLP",
    goal: "Expliquer comment les mots deviennent des vecteurs et comment un modèle de langage prédit le mot suivant.",
    w: `word embedding|plongement de mot|werd em-BED-ing
vector space|espace vectoriel|VEK-ter spays
Word2Vec|Word2Vec (méthode d'embeddings)|werd-too-VEK
cosine similarity|similarité cosinus|KOH-sine sim-uh-LAIR-uh-tee
semantic similarity|similarité sémantique|suh-MAN-tik sim-uh-LAIR-uh-tee
context|contexte|KAHN-tekst
language model|modèle de langage|LANG-gwij MAH-dl
next-word prediction|prédiction du mot suivant|nekst-werd prih-DIK-shn
perplexity|perplexité|per-PLEK-suh-tee
n-gram model|modèle n-gramme|EN-gram MAH-dl
sparse|creux (peu dense)|spars
dense|dense|dens
nearest neighbor|plus proche voisin|NEER-ist NAY-ber
analogy|analogie|uh-NAL-uh-jee
contextual embedding|plongement contextuel|kun-TEK-schoo-ul em-BED-ing
pre-training|pré-entraînement|pree-TRAY-ning
one-hot vector|vecteur one-hot|wun-haht VEK-ter
meaning|sens|MEE-ning
synonym|synonyme|SIN-uh-nim
neighbor word|mot voisin|NAY-ber werd
co-occurrence|cooccurrence|koh-uh-KER-uns
to capture|capturer|too KAP-cher
probability distribution|distribution de probabilité|prah-buh-BIL-uh-tee dis-truh-BYOO-shn
fluent|fluide, courant|FLOO-unt
rare word|mot rare|rair werd`,
    x: `Each word is represented by a vector.|Chaque mot est représenté par un vecteur.
Similar words have similar vectors.|Les mots similaires ont des vecteurs similaires.
King minus man plus woman is close to queen.|Roi moins homme plus femme est proche de reine.
The cosine similarity is zero point eight.|La similarité cosinus est de zéro virgule huit.
A language model predicts the next word.|Un modèle de langage prédit le mot suivant.
Lower perplexity means a better model.|Une perplexité plus faible signifie un meilleur modèle.
The meaning of a word depends on its context.|Le sens d'un mot dépend de son contexte.
One-hot vectors are very sparse.|Les vecteurs one-hot sont très creux.
Which words are the nearest neighbors of doctor?|Quels sont les plus proches voisins de doctor ?
The model captures semantic relationships.|Le modèle capture des relations sémantiques.`,
    d: [
      ["Why embeddings?", `Student: Why not use one-hot vectors for words? || Pourquoi ne pas utiliser des vecteurs one-hot pour les mots ?
Teacher: They are huge and sparse, and they say nothing about meaning. || Ils sont énormes et creux, et ne disent rien sur le sens.
Student: And embeddings? || Et les embeddings ?
Teacher: They are short dense vectors where similar words are close. || Ce sont des vecteurs courts et denses où les mots similaires sont proches.`],
      ["Predicting the next word", `Omar: How does a language model work? || Comment fonctionne un modèle de langage ?
Sara: It reads the previous words and gives a probability for every possible next word. || Il lit les mots précédents et donne une probabilité pour chaque mot suivant possible.
Omar: So after the cat sat on the, it predicts mat? || Donc après the cat sat on the, il prédit mat ?
Sara: Probably, yes. It is the most likely word. || Probablement, oui. C'est le mot le plus probable.`],
    ],
    c: {
      en: "Computers need numbers, so every word is converted into a vector. A one-hot vector is long and sparse and does not contain meaning. A word embedding is a short, dense vector learned from a corpus, so that words used in similar contexts have vectors that are close in the vector space. We measure this closeness with cosine similarity. Word2Vec was an early method that showed interesting relationships, such as king minus man plus woman being close to queen. A language model assigns probabilities to sequences of words; its basic task is to predict the next word given the previous ones. A lower perplexity means that the model is less surprised by real text.",
      fr: "Les ordinateurs ont besoin de nombres, donc chaque mot est converti en vecteur. Un vecteur one-hot est long et creux et ne contient pas de sens. Un plongement de mot est un vecteur court et dense appris à partir d'un corpus, de sorte que les mots utilisés dans des contextes similaires ont des vecteurs proches dans l'espace vectoriel. On mesure cette proximité avec la similarité cosinus. Word2Vec était une méthode précoce qui a montré des relations intéressantes, comme roi moins homme plus femme proche de reine. Un modèle de langage attribue des probabilités à des séquences de mots ; sa tâche de base est de prédire le mot suivant à partir des précédents. Une perplexité plus faible signifie que le modèle est moins surpris par du vrai texte.",
    },
    da: `Embedding: kol klima = qa2ima sghira d l-arqam (mital 300 raqm). Klimat li b7al ba3d (mital « tbib » w « mostachfa ») kay-kounou 9rab f l-faDa2.
Hadi l-fikra: « chouf m3a chkoun kat-kon, n9ol lik chnou ma3nak ». Contexte = l-ma3na.
Language model = kay-tkhmen l-klima l-jaya. Bhal telephone: kat-ktb « Bonjour, comment... » w howa kay-9tare7 « ça va ».`,
    r: {
      t: "You shall know a word by the company it keeps",
      en: "In 1957, the linguist John Rupert Firth wrote a famous sentence: You shall know a word by the company it keeps. This idea is the heart of word embeddings. If two words often appear near the same neighbors, for example doctor and nurse, their meanings are probably related. In 2013, researchers at Google published Word2Vec, a fast method to learn vectors from a large corpus using this principle. Surprisingly, these vectors also captured relationships, for instance between countries and capitals. Modern models go further: they create contextual embeddings, where the same word, for example bank, has a different vector in different sentences.",
      fr: "En 1957, le linguiste John Rupert Firth a écrit une phrase célèbre : « On reconnaît un mot aux compagnons qu'il fréquente. » Cette idée est au cœur des plongements de mots. Si deux mots apparaissent souvent près des mêmes voisins, par exemple doctor et nurse, leurs sens sont probablement liés. En 2013, des chercheurs de Google ont publié Word2Vec, une méthode rapide pour apprendre des vecteurs à partir d'un grand corpus selon ce principe. Étonnamment, ces vecteurs capturaient aussi des relations, par exemple entre les pays et les capitales. Les modèles modernes vont plus loin : ils créent des plongements contextuels, où le même mot, par exemple bank, a un vecteur différent selon la phrase.",
    },
    s: "Expliquez à voix haute comment un ordinateur peut « comprendre » que doctor et nurse sont proches, en 4 phrases : « The computer reads a lot of text. Doctor and nurse appear with … Their vectors are … »",
    p: { tip: "« Perplexity » : per-PLEK-suh-tee. « Cosine » : KOH-sine. « Synonym » : SIN-uh-nim. « Analogy » : uh-NAL-uh-jee. « Co-occurrence » : koh-uh-KER-uns. « Fluent » : FLOO-unt.", words: "embedding,perplexity,cosine,analogy,synonym,fluent" },
    q: [
      ["Words in similar contexts have embeddings that are…", ["far apart", "close together", "identical", "empty"], 1, "Principe distributionnel."],
      ["A language model's basic task is to…", ["translate pictures", "predict the next word", "delete stop words", "label images"], 1, "Probabilité du mot suivant."],
      ["Which is better?", ["Higher perplexity", "Lower perplexity", "Both are the same", "Perplexity is a file"], 1, "Perplexité plus faible = modèle meilleur."],
    ],
    rq: [
      ["Who wrote « You shall know a word by the company it keeps »?", ["John Rupert Firth", "Alan Turing", "Yann LeCun"], 0, "Linguiste, 1957."],
      ["What is a contextual embedding?", ["The vector depends on the sentence", "A vector that never changes", "A stop word"], 0, "« bank » a des vecteurs différents."],
    ],
    f: ["The words similar has close vectors.", "Similar words have close vectors.", "Adjectif avant le nom ; pluriel → « have »."],
  },
  {
    id: "9-3",
    t: "Attention and the Transformer",
    fr: "L'attention et le Transformer",
    cat: "NLP",
    goal: "Expliquer en anglais l'idée d'attention et l'architecture Transformer.",
    w: `Transformer|Transformer (architecture)|tranz-FOR-mer
attention|attention|uh-TEN-shn
self-attention|auto-attention|self-uh-TEN-shn
query|requête (Q)|KWEER-ee
key|clé (K)|kee
value|valeur (V)|VAL-yoo
multi-head attention|attention multi-têtes|MUL-tee-hed uh-TEN-shn
encoder|encodeur|en-KOH-der
decoder|décodeur|dee-KOH-der
positional encoding|encodage positionnel|puh-ZISH-nl en-KOH-ding
parallelization|parallélisation|pair-uh-luh-luh-ZAY-shn
context window|fenêtre de contexte|KAHN-tekst WIN-doh
layer normalization|normalisation de couche|LAY-er nor-muh-luh-ZAY-shn
residual connection|connexion résiduelle|rih-ZIJ-oo-ul kuh-NEK-shn
BERT|BERT (encodeur bidirectionnel)|bert
GPT|GPT (transformeur génératif pré-entraîné)|jee-pee-TEE
masked language model|modèle de langage masqué|maskt LANG-gwij MAH-dl
autoregressive|autorégressif|aw-toh-rih-GRES-iv
to attend to|porter son attention sur|too uh-TEND too
bottleneck|goulot d'étranglement|BAH-tl-nek
translation|traduction|tranz-LAY-shn
feed-forward|propagation avant|FEED-for-werd
attention weights|poids d'attention|uh-TEN-shn wayts
long-range|à longue portée|lawng-raynj
scaling|passage à l'échelle|SKAY-ling`,
    x: `The model pays attention to the most relevant words.|Le modèle porte attention aux mots les plus pertinents.
Each token attends to all the other tokens.|Chaque jeton porte son attention sur tous les autres jetons.
The query is compared with all the keys.|La requête est comparée à toutes les clés.
The attention weights sum to one.|Les poids d'attention somment à un.
The Transformer processes the whole sentence in parallel.|Le Transformer traite toute la phrase en parallèle.
Positional encoding tells the model the word order.|L'encodage positionnel indique au modèle l'ordre des mots.
BERT reads text in both directions.|BERT lit le texte dans les deux sens.
GPT generates text one token at a time.|GPT génère du texte un jeton à la fois.
The context window is limited.|La fenêtre de contexte est limitée.
This architecture scales very well.|Cette architecture passe très bien à l'échelle.`,
    d: [
      ["What is attention?", `Student: What does attention do in a Transformer? || Que fait l'attention dans un Transformer ?
Teacher: For each word, it decides which other words are important. || Pour chaque mot, elle décide quels autres mots sont importants.
Student: For example? || Par exemple ?
Teacher: In the animal did not cross the street because it was tired, the word it pays attention to animal. || Dans the animal did not cross the street because it was tired, le mot it porte son attention sur animal.`],
      ["BERT versus GPT", `Omar: What is the difference between BERT and GPT? || Quelle est la différence entre BERT et GPT ?
Sara: BERT is an encoder. It reads the whole sentence and understands it. || BERT est un encodeur. Il lit toute la phrase et la comprend.
Omar: And GPT? || Et GPT ?
Sara: GPT is a decoder. It predicts the next token, so it generates text. || GPT est un décodeur. Il prédit le jeton suivant, donc il génère du texte.`],
    ],
    c: {
      en: "Before 2017, language models used recurrent networks that read words one by one, which was slow and made long-range dependencies difficult. The Transformer uses attention instead. In self-attention, every token creates a query, a key and a value. The query of one token is compared with the keys of all the tokens to compute attention weights, and the output is a weighted sum of the values. Multi-head attention repeats this several times to look at different relationships. Because all tokens are processed in parallel, training is much faster on GPUs. Positional encoding adds the order of the words. Transformers are the basis of BERT, GPT and today's large language models.",
      fr: "Avant 2017, les modèles de langage utilisaient des réseaux récurrents qui lisaient les mots un par un, ce qui était lent et rendait les dépendances à longue portée difficiles. Le Transformer utilise l'attention à la place. Dans l'auto-attention, chaque jeton crée une requête, une clé et une valeur. La requête d'un jeton est comparée aux clés de tous les jetons pour calculer des poids d'attention, et la sortie est une somme pondérée des valeurs. L'attention multi-têtes répète cela plusieurs fois pour regarder différentes relations. Comme tous les jetons sont traités en parallèle, l'entraînement est beaucoup plus rapide sur GPU. L'encodage positionnel ajoute l'ordre des mots. Les Transformers sont la base de BERT, GPT et des grands modèles de langage actuels.",
    },
    r: {
      t: "Attention Is All You Need",
      en: "In 2017, researchers from Google, including Ashish Vaswani and colleagues, published a paper called Attention Is All You Need at the NeurIPS conference. The paper introduced the Transformer architecture for machine translation. The authors removed recurrence and used only attention. The model reached excellent translation quality and trained much faster than previous models, because computations could be done in parallel. Within a few years, Transformers became the standard architecture not only for language but also for images, audio and proteins. The paper is one of the most cited in the history of artificial intelligence.",
      fr: "En 2017, des chercheurs de Google, dont Ashish Vaswani et ses collègues, ont publié un article intitulé Attention Is All You Need à la conférence NeurIPS. L'article a introduit l'architecture Transformer pour la traduction automatique. Les auteurs ont supprimé la récurrence et utilisé uniquement l'attention. Le modèle a atteint une excellente qualité de traduction et s'est entraîné beaucoup plus vite que les modèles précédents, car les calculs pouvaient être faits en parallèle. En quelques années, les Transformers sont devenus l'architecture standard non seulement pour le langage mais aussi pour les images, l'audio et les protéines. L'article est l'un des plus cités de l'histoire de l'intelligence artificielle.",
    },
    da: `Attention: bhal talib f l-qism li kay-sma3 l-mo3allim, walakin kay-rakkez 3la l-klimat l-mouhimma bark. Kol klima kat-choof l-klimat lokhrin w kat-9arrer chkoun mouhim lha.
Query / Key / Value: Q = so2al dyal had l-klima, K = « 3onwan » dyal kol klima, V = l-ma3louma. Q kat9arn m3a K, w kat-akhod mn V bi 9dr l-tachabouh.
Parallel: RNN kay9ra klima b klima (bti2). Transformer kay9ra l-jomla kamla f nafs l-weqt, wa7ed l-3amal b GPU. Hadchi sbab nja7ou.`,
    s: "Expliquez à voix haute avec vos mots pourquoi le Transformer est plus rapide qu'un RNN : « An RNN reads … one by one. A Transformer … at the same time. This is faster because … »",
    p: { tip: "« Transformer » : tranz-FOR-mer. « Attention » : uh-TEN-shn. « Encoder » : en-KOH-der. « Decoder » : dee-KOH-der. « Bottleneck » : BAH-tl-nek. « Autoregressive » : aw-toh-rih-GRES-iv.", words: "attention,transformer,encoder,decoder,parallelization,bottleneck" },
    q: [
      ["Self-attention computes…", ["a weighted sum of values", "a database query", "image edges", "sorted words"], 0, "Poids d'attention × valeurs."],
      ["Why is the Transformer fast to train?", ["It processes tokens in parallel", "It uses no data", "It has no layers", "It is very small"], 0, "Pas de dépendance séquentielle."],
      ["GPT is mainly…", ["a decoder that predicts the next token", "a database", "an image model", "an encoder-only model"], 0, "Génération autorégressive."],
    ],
    rq: [
      ["Where was the Transformer paper published?", ["NeurIPS", "A newspaper", "A cooking blog"], 0, "« at the NeurIPS conference »."],
      ["What did the authors remove?", ["Recurrence", "Attention", "Data"], 0, "« removed recurrence and used only attention »."],
    ],
    f: ["Transformer process the tokens in parallel.", "The Transformer processes the tokens in parallel.", "Article « The » et verbe au singulier : processes."],
  },
];
