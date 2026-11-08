import type { RawLesson } from "../types";

export const m10b: RawLesson[] = [
  {
    id: "10-4",
    t: "Uncertainty, Bayesian Methods and Explainable AI",
    fr: "Incertitude, méthodes bayésiennes et IA explicable",
    cat: "Advanced AI",
    goal: "Expliquer l'incertitude d'un modèle et les méthodes pour comprendre ses décisions.",
    w: `uncertainty|incertitude|un-SER-tn-tee
Bayesian|bayésien|BAY-zhn
prior|a priori|PRIE-er
posterior|a posteriori|pah-STIR-ee-er
credible interval|intervalle de crédibilité|KRED-uh-bl IN-ter-vl
calibration|calibration|kal-uh-BRAY-shn
overconfident|trop sûr de soi|oh-ver-KAHN-fuh-dunt
explainable AI|IA explicable|ik-SPLAY-nuh-bl ay-EYE
interpretability|interprétabilité|in-ter-pruh-tuh-BIL-uh-tee
feature importance|importance des variables|FEE-cher im-POR-tns
SHAP values|valeurs de SHAP|shap VAL-yooz
LIME|LIME (explication locale)|lime
saliency map|carte de saliency|SAY-lee-un-see map
counterfactual|contrefactuel|kown-ter-FAK-choo-ul
black box|boîte noire|blak bahks
transparency|transparence|trans-PAIR-un-see
trust|confiance|trust
accountability|responsabilité (rendre des comptes)|uh-kown-tuh-BIL-uh-tee
high-stakes|à enjeux élevés|hie-STAYKS
out-of-distribution|hors distribution|owt-uv-dis-truh-BYOO-shn
ensemble|ensemble|ahn-SAHM-bl
to justify|justifier|too JUS-tuh-fie
local explanation|explication locale|LOH-kl ek-spluh-NAY-shn
global explanation|explication globale|GLOH-bl ek-spluh-NAY-shn
rationale|justification|rash-uh-NAL`,
    x: `How confident is the model in this prediction?|Quel est le niveau de confiance du modèle dans cette prédiction ?
The model is overconfident.|Le modèle est trop sûr de lui.
We need to explain this decision to the patient.|Nous devons expliquer cette décision au patient.
Which features influenced the prediction the most?|Quelles variables ont le plus influencé la prédiction ?
The saliency map highlights the important pixels.|La carte de saliency met en évidence les pixels importants.
This is a high-stakes decision.|C'est une décision à enjeux élevés.
The input is out of distribution.|L'entrée est hors distribution.
What would change the decision? That is a counterfactual.|Qu'est-ce qui changerait la décision ? C'est un contrefactuel.
The prior is updated into the posterior.|L'a priori est mis à jour en a posteriori.
Transparency builds trust.|La transparence construit la confiance.`,
    d: [
      ["Explaining a loan decision", `Customer: Why was my loan application rejected? || Pourquoi ma demande de prêt a-t-elle été refusée ?
Analyst: The model considered your income and your debt. || Le modèle a pris en compte votre revenu et votre dette.
Customer: What could I change? || Que pourrais-je changer ?
Analyst: If your debt were lower by two thousand euros, the decision would probably change. || Si votre dette était inférieure de deux mille euros, la décision changerait probablement.`],
      ["Overconfident predictions", `Teacher: The model says ninety-nine percent, but it is wrong. || Le modèle dit quatre-vingt-dix-neuf pour cent, mais il a tort.
Student: Is it calibrated? || Est-il calibré ?
Teacher: No. It is overconfident, especially on out-of-distribution inputs. || Non. Il est trop sûr de lui, surtout sur des entrées hors distribution.
Student: Then we should measure its uncertainty. || Alors nous devrions mesurer son incertitude.`],
    ],
    c: {
      en: "A reliable AI system should say how sure it is. Bayesian methods represent uncertainty: we start with a prior belief, observe data and update it into a posterior. A model is well calibrated if, when it says seventy percent, it is right about seventy percent of the time. Many deep networks are overconfident, especially on out-of-distribution data. Explainable AI helps humans understand decisions. Feature importance and SHAP values show which inputs influenced a prediction. Saliency maps highlight important pixels in an image. A counterfactual explanation describes the smallest change that would give a different result. Explanations are essential in high-stakes areas such as medicine, justice and finance.",
      fr: "Un système d'IA fiable devrait dire à quel point il est sûr. Les méthodes bayésiennes représentent l'incertitude : on part d'une croyance a priori, on observe des données et on la met à jour en a posteriori. Un modèle est bien calibré si, quand il dit soixante-dix pour cent, il a raison environ soixante-dix pour cent du temps. Beaucoup de réseaux profonds sont trop sûrs d'eux, surtout sur des données hors distribution. L'IA explicable aide les humains à comprendre les décisions. L'importance des variables et les valeurs de SHAP montrent quelles entrées ont influencé une prédiction. Les cartes de saliency mettent en évidence les pixels importants d'une image. Une explication contrefactuelle décrit le plus petit changement qui donnerait un résultat différent. Les explications sont essentielles dans les domaines à enjeux élevés comme la médecine, la justice et la finance.",
    },
    da: `Calibration: ila l-modèle 9al 70%, khass ykoun sa7i7 f 70 mn 100 7ala. Ila 9al 99% w ghalat dima, howa « overconfident » (m3awel 3la nafsou bzzaf).
Explainability: bach nfahmo 3lach l-modèle ta9arrar. Mouhim f l-bank, t-tebb, l-3adala: ch-chakhs 3ndou l-7a9 ysma3 l-sabab.
Counterfactual: « ila kan dakhlek aktar b 5000 dh, ghadi ykoun l-qarar mkhtalef ». Kay-bayn chnou khass yt-beddel.`,
    r: {
      t: "Why explanations matter",
      en: "In 2018, a European regulation about data protection, known as the GDPR, gave people the right to receive meaningful information about important automated decisions that concern them. Researchers continue to discuss what a good explanation is. For a doctor, it may be the part of an X-ray that influenced the model. For a customer, it may be the main reasons and the changes that could modify the result. Explainable AI does not make a model perfect, but it helps to detect errors, find bias and build trust between humans and machines.",
      fr: "En 2018, un règlement européen sur la protection des données, connu sous le nom de RGPD, a donné aux personnes le droit de recevoir des informations significatives sur les décisions automatisées importantes qui les concernent. Les chercheurs continuent de discuter de ce qu'est une bonne explication. Pour un médecin, ce peut être la partie d'une radiographie qui a influencé le modèle. Pour un client, ce peut être les raisons principales et les changements qui pourraient modifier le résultat. L'IA explicable ne rend pas un modèle parfait, mais elle aide à détecter des erreurs, à trouver des biais et à construire la confiance entre humains et machines.",
    },
    s: "Imaginez qu'un modèle refuse une demande. Expliquez la décision à voix haute à la personne, avec : « The main reason is … If … were different, … I understand that this is frustrating. »",
    p: { tip: "« Uncertainty » : un-SER-tn-tee. « Bayesian » : BAY-zhn. « Calibration » : kal-uh-BRAY-shn. « Counterfactual » : kown-ter-FAK-choo-ul. « Accountability » : uh-kown-tuh-BIL-uh-tee.", words: "uncertainty,calibration,counterfactual,transparency,accountability,interpretability" },
    q: [
      ["A calibrated model that says 70% should be right about…", ["70% of the time", "10% of the time", "100% of the time", "50% of the time"], 0, "C'est la définition de la calibration."],
      ["A counterfactual explanation shows…", ["the smallest change that would alter the decision", "the history of the data", "the GPU temperature", "the loss"], 0, "« Que faudrait-il changer ? »."],
      ["Explainability is most important in…", ["high-stakes decisions", "video games only", "screen savers", "file names"], 0, "Médecine, justice, finance."],
    ],
    rq: [
      ["What did the GDPR give people?", ["The right to meaningful information about automated decisions", "Free computers", "A new language"], 0, "Texte, première phrase."],
      ["What can explainable AI help detect?", ["Errors and bias", "New colors", "Typing speed"], 0, "« detect errors, find bias »."],
    ],
    f: ["The model is too much confident.", "The model is overconfident.", "« Too much » ne se place pas avant un adjectif ; on dit « too confident » ou « overconfident »."],
  },
  {
    id: "10-5",
    t: "Multimodal AI, Robotics and Frontier Debates",
    fr: "IA multimodale, robotique et débats actuels",
    cat: "Advanced AI",
    goal: "Discuter des tendances actuelles de l'IA et exprimer une opinion argumentée en anglais.",
    w: `multimodal|multimodal|mul-tee-MOH-dl
speech recognition|reconnaissance vocale|speech rek-ig-NISH-n
text-to-speech|synthèse vocale|tekst-too-SPEECH
robotics|robotique|roh-BAH-tiks
embodied AI|IA incarnée|em-BAH-deed ay-EYE
sensor fusion|fusion de capteurs|SEN-ser FYOO-zhn
autonomous|autonome|aw-TAH-nuh-mus
artificial general intelligence|intelligence artificielle générale|ar-tuh-FISH-ul JEN-rul in-TEL-uh-juns
narrow AI|IA étroite|NAIR-oh ay-EYE
reasoning|raisonnement|REE-zn-ing
planning|planification|PLAN-ing
common sense|bon sens|KAH-mun sens
debate|débat|dih-BAYT
claim|affirmation|klaym
evidence|preuve|EV-uh-duns
risk|risque|risk
benefit|avantage|BEN-uh-fit
to argue|argumenter|too AR-gyoo
to disagree|ne pas être d'accord|too dis-uh-GREE
to anticipate|anticiper|too an-TIS-uh-payt
breakthrough|percée|BRAYK-throo
hype|battage médiatique|hipe
long-term|à long terme|lawng-term
uncertain|incertain|un-SER-tn
frontier|frontière (de la recherche)|frun-TEER`,
    x: `This model understands text, images and audio.|Ce modèle comprend le texte, les images et l'audio.
The robot uses cameras and other sensors.|Le robot utilise des caméras et d'autres capteurs.
Some researchers believe that AGI is possible.|Certains chercheurs pensent que l'AGI est possible.
Others disagree and argue that it is far away.|D'autres ne sont pas d'accord et soutiennent qu'elle est lointaine.
What is the evidence for this claim?|Quelle est la preuve de cette affirmation ?
It is hard to predict the future of AI.|Il est difficile de prédire l'avenir de l'IA.
There is a lot of hype around this technology.|Il y a beaucoup de battage médiatique autour de cette technologie.
The benefits are clear, but so are the risks.|Les avantages sont clairs, mais les risques aussi.
In my opinion, regulation is necessary.|À mon avis, la réglementation est nécessaire.
I partly agree, but I would add one point.|Je suis en partie d'accord, mais j'ajouterais un point.`,
    d: [
      ["A friendly debate", `Sara: I think AI will soon be as intelligent as humans. || Je pense que l'IA sera bientôt aussi intelligente que les humains.
Omar: I disagree. Today's models are narrow AI. || Je ne suis pas d'accord. Les modèles actuels sont de l'IA étroite.
Sara: What is your evidence? || Quelle est ta preuve ?
Omar: They still fail at common sense and long-term planning. || Ils échouent encore en bon sens et en planification à long terme.`],
      ["Multimodal assistants", `Student: Can the model describe a photo? || Le modèle peut-il décrire une photo ?
Teacher: Yes, it is multimodal. It understands images and text together. || Oui, il est multimodal. Il comprend les images et le texte ensemble.
Student: Can it also speak? || Peut-il aussi parler ?
Teacher: With text-to-speech, yes. But always check its answers. || Avec la synthèse vocale, oui. Mais vérifiez toujours ses réponses.`],
    ],
    c: {
      en: "Today's AI is becoming multimodal: a single model can work with text, images, audio and video, for example describing a photo or answering a spoken question. In robotics, embodied AI combines perception, planning and action in the physical world, often with sensor fusion. Most current systems are narrow AI, which means that they are good at specific tasks. Artificial general intelligence, or AGI, would be able to learn and reason across many domains like a human. Experts disagree about whether and when it could exist. To discuss these topics, make a claim, give evidence, mention the risks and the benefits, and be careful with hype.",
      fr: "L'IA d'aujourd'hui devient multimodale : un seul modèle peut travailler avec du texte, des images, de l'audio et de la vidéo, par exemple décrire une photo ou répondre à une question parlée. En robotique, l'IA incarnée combine perception, planification et action dans le monde physique, souvent avec de la fusion de capteurs. La plupart des systèmes actuels sont de l'IA étroite, c'est-à-dire qu'ils sont bons pour des tâches précises. L'intelligence artificielle générale, ou AGI, serait capable d'apprendre et de raisonner dans de nombreux domaines comme un humain. Les experts ne sont pas d'accord sur la question de savoir si elle pourrait exister et quand. Pour discuter de ces sujets, formulez une affirmation, donnez des preuves, mentionnez les risques et les avantages, et méfiez-vous du battage médiatique.",
    },
    da: `Multimodal: modèle wa7ed kay-fhem nass + sswira + sawt f nafs l-weqt. Bhal insan: kay-chouf, kay-sma3, kay-9ra.
Narrow AI vs AGI: narrow = mzyan f chi mouhimma wa7da (l3ab chatranj, tarjama). AGI = ykoun dkiy f koll chi bhal insan. AGI mazal ma-kaynch, w l-khobara2 ma-t-fa9ouch 3la mta ghaykoun.
Hype: dajij 3lami 3la techno jdida ymken ykoun mbaliy3. 9ra b 3a9l: chouf l-evidence, machi ghir l-3anawin.`,
    r: {
      t: "How to disagree politely in a scientific debate",
      en: "Scientific discussions are about ideas, not people. When you disagree, begin by acknowledging the other person's point: I see what you mean. Then give your reason: However, the evidence shows that. You can also ask a question instead of saying that someone is wrong: Have you considered this study? Use hedging words such as may, might, probably and it seems that, because science rarely offers absolute certainty. At the end, summarize the points of agreement. This style keeps the discussion respectful and helps everyone learn.",
      fr: "Les discussions scientifiques portent sur les idées, pas sur les personnes. Quand vous n'êtes pas d'accord, commencez par reconnaître le point de l'autre : I see what you mean. Puis donnez votre raison : However, the evidence shows that. Vous pouvez aussi poser une question au lieu de dire que quelqu'un a tort : Have you considered this study? Utilisez des mots d'atténuation comme may, might, probably et it seems that, car la science offre rarement une certitude absolue. À la fin, résumez les points d'accord. Ce style garde la discussion respectueuse et aide chacun à apprendre.",
    },
    s: "Débat guidé : choisissez « AI will replace most jobs ». Donnez à voix haute 3 phrases pour, puis 3 phrases contre, avec « I believe … The evidence suggests … However, … »",
    p: { tip: "« Multimodal » : mul-tee-MOH-dl. « Robotics » : roh-BAH-tiks. « Autonomous » : aw-TAH-nuh-mus. « Anticipate » : an-TIS-uh-payt. « Evidence » : EV-uh-duns. « Debate » : dih-BAYT (accent sur « BAYT »).", words: "multimodal,robotics,autonomous,anticipate,evidence,debate" },
    q: [
      ["A multimodal model can work with…", ["several types of data", "only text", "only images", "only numbers"], 0, "Texte, image, audio, vidéo."],
      ["Which phrase expresses polite disagreement?", ["I see your point, but the evidence suggests…", "You are wrong.", "That is silly.", "Stop talking."], 0, "On reconnaît puis on nuance."],
      ["Narrow AI is…", ["good at specific tasks", "equal to a human in everything", "a robot", "a hardware"], 0, "Par opposition à l'AGI."],
    ],
    rq: [
      ["What should you do first when you disagree?", ["Acknowledge the other person's point", "Leave the room", "Raise your voice"], 0, "« begin by acknowledging »."],
      ["Why use words like may and might?", ["Science rarely offers absolute certainty", "They are shorter", "They sound loud"], 0, "Atténuation (hedging)."],
    ],
    f: ["I am agree with your opinion.", "I agree with your opinion.", "« Agree » est un verbe : pas de « am »."],
  },
];
