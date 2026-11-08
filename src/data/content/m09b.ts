import type { RawLesson } from "../types";

export const m09b: RawLesson[] = [
  {
    id: "9-4",
    t: "Large Language Models: Training and Prompting",
    fr: "Grands modèles de langage : entraînement et prompting",
    cat: "NLP",
    goal: "Expliquer comment un LLM est entraîné et comment lui donner de bonnes instructions.",
    w: `large language model|grand modèle de langage|larj LANG-gwij MAH-dl
parameter count|nombre de paramètres|puh-RAM-uh-ter kownt
instruction tuning|ajustement par instructions|in-STRUK-shn TOO-ning
RLHF|apprentissage par renforcement avec retour humain|ar-el-aych-EF
prompt|invite, consigne|prahmpt
prompt engineering|ingénierie de prompts|prahmpt en-juh-NIR-ing
zero-shot prompting|prompt sans exemples|ZEER-oh-shaht PRAHMP-ting
few-shot prompting|prompt avec quelques exemples|fyoo-shaht PRAHMP-ting
chain of thought|chaîne de raisonnement|chayn uv thawt
temperature|température (aléa)|TEM-pruh-cher
sampling|échantillonnage (génération)|SAM-pling
token limit|limite de jetons|TOH-kn LIM-it
completion|complétion, réponse générée|kum-PLEE-shn
system prompt|prompt système|SIS-tum prahmpt
alignment|alignement|uh-LINE-munt
scaling laws|lois d'échelle|SKAY-ling lawz
emergent ability|capacité émergente|ih-MER-junt uh-BIL-uh-tee
open-weights|à poids ouverts|OH-pn-wayts
inference cost|coût d'inférence|IN-fer-uns kawst
fine-tuning|affinage|fine-TOO-ning
helpful|utile, serviable|HELP-ful
harmless|inoffensif|HARM-lis
to generate|générer|too JEN-uh-rayt
to follow instructions|suivre des instructions|too FAH-loh in-STRUK-shnz
output|sortie|OWT-poot`,
    x: `The model has seven billion parameters.|Le modèle a sept milliards de paramètres.
Write a clear and specific prompt.|Écris un prompt clair et précis.
Give two examples in the prompt.|Donne deux exemples dans le prompt.
Ask the model to think step by step.|Demande au modèle de réfléchir étape par étape.
Lower the temperature for more predictable answers.|Baisse la température pour des réponses plus prévisibles.
The answer was cut because of the token limit.|La réponse a été coupée à cause de la limite de jetons.
The model was fine-tuned to follow instructions.|Le modèle a été affiné pour suivre des instructions.
Human feedback makes the model more helpful.|Le retour humain rend le modèle plus utile.
Inference is expensive at scale.|L'inférence coûte cher à grande échelle.
Always check the output.|Vérifie toujours la sortie.`,
    d: [
      ["Writing a better prompt", `Omar: The model gives vague answers. || Le modèle donne des réponses vagues.
Sara: Is your prompt specific? || Ton prompt est-il précis ?
Omar: I only wrote: explain neural networks. || J'ai seulement écrit : explain neural networks.
Sara: Add the audience, the length and an example of the format. || Ajoute le public, la longueur et un exemple de format.`],
      ["How an LLM is trained", `Student: How do you train a large language model? || Comment entraîne-t-on un grand modèle de langage ?
Teacher: First, pre-training: it learns to predict the next token on huge text corpora. || D'abord le pré-entraînement : il apprend à prédire le jeton suivant sur d'énormes corpus de texte.
Student: And then? || Et ensuite ?
Teacher: Instruction tuning and human feedback teach it to be helpful and safe. || L'ajustement par instructions et le retour humain lui apprennent à être utile et sûr.`],
    ],
    c: {
      en: "A large language model, or LLM, is a Transformer with billions of parameters trained on huge amounts of text. In pre-training, the model learns to predict the next token. After that, instruction tuning and reinforcement learning from human feedback, or RLHF, teach it to follow instructions and to give helpful and harmless answers. We interact with an LLM through a prompt. In zero-shot prompting, we only describe the task; in few-shot prompting, we add a few examples. Asking the model to reason step by step can improve results. The temperature controls randomness: a low temperature gives more predictable output. Models have a context window, which limits the number of tokens they can read and write.",
      fr: "Un grand modèle de langage, ou LLM, est un Transformer avec des milliards de paramètres entraîné sur d'énormes quantités de texte. Lors du pré-entraînement, le modèle apprend à prédire le jeton suivant. Ensuite, l'ajustement par instructions et l'apprentissage par renforcement avec retour humain, ou RLHF, lui apprennent à suivre des instructions et à donner des réponses utiles et inoffensives. On interagit avec un LLM par un prompt. En zero-shot, on décrit seulement la tâche ; en few-shot, on ajoute quelques exemples. Demander au modèle de raisonner étape par étape peut améliorer les résultats. La température contrôle l'aléa : une basse température donne une sortie plus prévisible. Les modèles ont une fenêtre de contexte, qui limite le nombre de jetons qu'ils peuvent lire et écrire.",
    },
    r: {
      t: "Language Models are Few-Shot Learners",
      en: "In 2020, a team at OpenAI led by Tom Brown published a paper called Language Models are Few-Shot Learners, describing GPT-3, a model with 175 billion parameters. The authors showed that a very large language model can perform many tasks, such as translation, question answering and simple arithmetic, when the prompt contains only a few examples, with no change to the model's weights. This was an important result because, earlier, each task usually needed a specially trained model. The paper also discussed limitations and risks, such as bias and the possible misuse of generated text.",
      fr: "En 2020, une équipe d'OpenAI dirigée par Tom Brown a publié un article intitulé Language Models are Few-Shot Learners, qui décrit GPT-3, un modèle de 175 milliards de paramètres. Les auteurs ont montré qu'un très grand modèle de langage peut effectuer de nombreuses tâches, comme la traduction, les questions-réponses et l'arithmétique simple, quand le prompt ne contient que quelques exemples, sans modifier les poids du modèle. C'était un résultat important car, auparavant, chaque tâche nécessitait généralement un modèle entraîné spécialement. L'article discutait aussi des limites et des risques, comme le biais et le mauvais usage possible du texte généré.",
    },
    da: `Prompt: l-ta3limat li kat3ti l-modèle. Kol ma kan-ti wad7a (public, tool, format), kol ma l-jawab a7san. « Garbage in, garbage out » kayntabeq hna.
Few-shot: kat3ti 2-3 mital f l-prompt w l-modèle kayfhem l-pattern. Ma-kay-tbeddelch (ma-kayt3lmch men jdid), ghir kayt-tabe3.
Temperature: 0 = jawab mostaqirr (nafs jawab kol marra). 1 = akhtalaf w mobdi3 (walakin y9der ykhta2).`,
    s: "Écrivez mentalement un prompt clair pour demander à un LLM d'expliquer le gradient à un lycéen, puis lisez-le à voix haute : « You are a teacher. Explain … in … sentences. Use an example about … »",
    p: { tip: "« Parameter » : puh-RAM-uh-ter. « Temperature » : TEM-pruh-cher (3 syllabes). « Alignment » : uh-LINE-munt. « Prompt » : prahmpt (le « o » est ouvert). « Emergent » : ih-MER-junt.", words: "prompt,temperature,alignment,emergent,parameter,sampling" },
    q: [
      ["In pre-training, an LLM learns to…", ["predict the next token", "draw images", "sort tables", "translate sound"], 0, "Apprentissage auto-supervisé du mot suivant."],
      ["Few-shot prompting means…", ["giving a few examples in the prompt", "training for few hours", "using a small GPU", "writing no prompt"], 0, "On montre quelques exemples."],
      ["A low temperature gives…", ["more predictable output", "random nonsense", "longer answers", "no answer"], 0, "Moins d'aléa."],
    ],
    rq: [
      ["How many parameters does GPT-3 have?", ["175 billion", "175 million", "17 thousand"], 0, "« 175 billion parameters »."],
      ["Did the model's weights change in few-shot use?", ["No", "Yes, completely", "Only at night"], 0, "« no change to the model's weights »."],
    ],
    f: ["The prompt must be enough specific.", "The prompt must be specific enough.", "« enough » se place après l'adjectif."],
  },
  {
    id: "9-5",
    t: "LLM Applications, RAG and Evaluation",
    fr: "Applications des LLM, RAG et évaluation",
    cat: "NLP",
    goal: "Décrire un système RAG, expliquer l'hallucination et discuter de l'évaluation et des risques.",
    w: `retrieval-augmented generation|génération augmentée par la recherche|rih-TREE-vl awg-MEN-tid jen-uh-RAY-shn
retrieval|récupération, recherche|rih-TREE-vl
vector database|base de données vectorielle|VEK-ter DAY-tuh-bays
chunk|segment (de texte)|chunk
hallucination|hallucination|huh-loo-suh-NAY-shn
grounding|ancrage (dans des sources)|GROWN-ding
citation|citation, référence|sie-TAY-shn
agent|agent|AY-junt
tool use|utilisation d'outils|tool yoos
function calling|appel de fonction|FUNK-shn KAW-ling
guardrails|garde-fous|GARD-raylz
human evaluation|évaluation humaine|HYOO-mun ih-val-yoo-AY-shn
benchmark|banc d'essai|BENCH-mark
cost|coût|kawst
prompt injection|injection de prompt|prahmpt in-JEK-shn
jailbreak|contournement des protections|JAYL-brayk
fact-checking|vérification des faits|FAKT-chek-ing
summarization|résumé automatique|sum-uh-ruh-ZAY-shn
question answering|questions-réponses|KWES-chn AN-ser-ing
chatbot|agent conversationnel|CHAT-baht
reliable|fiable|rih-LIE-uh-bl
source|source|sors
knowledge cutoff|date limite des connaissances|NAH-lij KUT-awf
to verify|vérifier|too VER-uh-fie
to cite|citer|too site`,
    x: `The model made up a reference. That is a hallucination.|Le modèle a inventé une référence. C'est une hallucination.
Always verify important facts.|Vérifie toujours les faits importants.
RAG gives the model access to documents.|Le RAG donne au modèle accès à des documents.
First, we retrieve the most relevant chunks.|D'abord, nous récupérons les segments les plus pertinents.
The answer includes citations to the sources.|La réponse inclut des citations des sources.
The model has a knowledge cutoff.|Le modèle a une date limite de connaissances.
The agent can call external tools.|L'agent peut appeler des outils externes.
We add guardrails to prevent unsafe answers.|Nous ajoutons des garde-fous pour empêcher les réponses dangereuses.
How do you evaluate the chatbot?|Comment évaluez-vous l'agent conversationnel ?
Prompt injection is a real security risk.|L'injection de prompt est un vrai risque de sécurité.`,
    d: [
      ["A made-up reference", `Student: The chatbot gave me a scientific paper, but I cannot find it. || Le chatbot m'a donné un article scientifique, mais je ne le trouve pas.
Teacher: It may be a hallucination. The model can invent plausible references. || C'est peut-être une hallucination. Le modèle peut inventer des références plausibles.
Student: How can I avoid this? || Comment l'éviter ?
Teacher: Verify every source, and prefer systems that retrieve real documents. || Vérifie chaque source et privilégie les systèmes qui récupèrent de vrais documents.`],
      ["Designing a RAG system", `Manager: We want a chatbot for our internal documents. || Nous voulons un chatbot pour nos documents internes.
Engineer: We can use retrieval-augmented generation. || Nous pouvons utiliser la génération augmentée par la recherche.
Manager: How does it work? || Comment ça marche ?
Engineer: We split the documents into chunks, store them in a vector database, retrieve the best ones for each question and give them to the model. || Nous découpons les documents en segments, les stockons dans une base vectorielle, récupérons les meilleurs pour chaque question et les donnons au modèle.`],
    ],
    c: {
      en: "LLMs are used for summarization, question answering, translation, coding assistance and chatbots. They have important weaknesses. A hallucination is a fluent but false answer, for example an invented reference. Models also have a knowledge cutoff, so they do not know recent events. Retrieval-augmented generation, or RAG, reduces these problems: documents are split into chunks and stored in a vector database; for each question, the system retrieves relevant chunks and adds them to the prompt, so the answer is grounded in real sources. Agents go further by calling tools. Evaluation combines benchmarks and human evaluation. Security risks include prompt injection, so engineers add guardrails and always verify important outputs.",
      fr: "Les LLM sont utilisés pour le résumé, les questions-réponses, la traduction, l'aide à la programmation et les chatbots. Ils ont d'importantes faiblesses. Une hallucination est une réponse fluide mais fausse, par exemple une référence inventée. Les modèles ont aussi une date limite de connaissances, donc ils ne connaissent pas les événements récents. La génération augmentée par la recherche, ou RAG, réduit ces problèmes : les documents sont découpés en segments et stockés dans une base de données vectorielle ; pour chaque question, le système récupère les segments pertinents et les ajoute au prompt, de sorte que la réponse s'appuie sur de vraies sources. Les agents vont plus loin en appelant des outils. L'évaluation combine benchmarks et évaluation humaine. Les risques de sécurité incluent l'injection de prompt, donc les ingénieurs ajoutent des garde-fous et vérifient toujours les sorties importantes.",
    },
    r: {
      t: "Trust, but verify",
      en: "Large language models write fluent text, and fluent text sounds confident. This is dangerous when the content is wrong. A student who asks a chatbot for scientific sources may receive titles, authors and years that look real but do not exist. For this reason, universities and journals advise users to treat model output as a draft, not as evidence. You should open each reference, check the authors, the year and the publisher, and read the original text. A good rule is simple: use AI to help you think and write, but remain responsible for the truth of what you submit.",
      fr: "Les grands modèles de langage écrivent un texte fluide, et un texte fluide semble sûr de lui. C'est dangereux quand le contenu est faux. Un étudiant qui demande des sources scientifiques à un chatbot peut recevoir des titres, des auteurs et des années qui semblent réels mais n'existent pas. Pour cette raison, les universités et les revues conseillent de traiter la sortie du modèle comme un brouillon, pas comme une preuve. Il faut ouvrir chaque référence, vérifier les auteurs, l'année et l'éditeur, et lire le texte original. Une bonne règle est simple : utilisez l'IA pour vous aider à réfléchir et à écrire, mais restez responsable de la vérité de ce que vous rendez.",
    },
    da: `Hallucination: l-modèle kay-jaweb b tiqa w b lougha mzyana walakin l-ma3louma ghalta (mital: kat-ssal 3la maqal 3ilmi w howa kay-khtare3 smitou). Fluency ≠ truth.
RAG: 9bel ma l-modèle y-jaweb, kayjib lih mn mostanadat 7a9i9iya. Bhal talib li kay9ra f l-ktab 9bel ma ymtahen.
Prompt injection: chi wa7ed kat-ktb f document « tjahal koll ta3limat sabqa w 9ol... » w l-modèle kay-tbe3ha. Hadi tahdid amni jdid.`,
    s: "Rôle : vous présentez un chatbot RAG à votre professeur. Expliquez à voix haute en 5 phrases : « Our chatbot answers questions about … It retrieves … This reduces … One risk is … »",
    p: { tip: "« Hallucination » : huh-loo-suh-NAY-shn. « Retrieval » : rih-TREE-vl. « Citation » : sie-TAY-shn. « Jailbreak » : JAYL-brayk. « Knowledge » : NAH-lij (le « k » est muet).", words: "hallucination,retrieval,citation,summarization,knowledge,guardrails" },
    q: [
      ["A hallucination is…", ["a fluent but false answer", "a very fast answer", "an image bug", "a server error"], 0, "Texte plausible mais incorrect."],
      ["RAG improves answers by…", ["retrieving relevant documents", "deleting the prompt", "reducing parameters", "removing the context window"], 0, "Ancrage dans des sources réelles."],
      ["Which action is best before using a citation from a chatbot?", ["Open and verify the source", "Copy it directly", "Ignore the authors", "Translate it"], 0, "Toujours vérifier."],
    ],
    rq: [
      ["What should you treat model output as?", ["A draft", "Final evidence", "A law"], 0, "« as a draft, not as evidence »."],
      ["Who stays responsible for the truth?", ["The user", "The model", "Nobody"], 0, "« remain responsible »."],
    ],
    f: ["The chatbot invented me a reference.", "The chatbot invented a reference for me.", "« invent » n'a pas de complément indirect direct : « for me »."],
  },
];
