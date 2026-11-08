// Types du contenu pédagogique (données statiques, indépendantes du stockage).

/** Question à choix multiple compacte : [énoncé, options, index de la bonne réponse, explication en français] */
export type Q = [string, string[], number, string];

/** Format brut (compact) utilisé dans src/data/content/*.ts */
export interface RawLesson {
  id: string; // "3-2" = module 3, leçon 2
  t: string; // titre anglais
  fr: string; // titre français
  cat: string; // catégorie de vocabulaire
  goal: string; // objectif (français)
  w: string; // 25 termes : "en|fr|prononciation" par ligne
  x: string; // 10 expressions : "en|fr" par ligne
  d: [[string, string], [string, string]]; // 2 dialogues : [titre, lignes "Nom: EN || FR"]
  c: { en: string; fr: string }; // mini-cours + traduction
  da: string; // notes en darija : "Notion: explication" par ligne
  r: { t: string; en: string; fr: string }; // texte de lecture
  s: string; // activité orale
  p: { tip: string; words: string }; // conseil de prononciation + mots (séparés par des virgules)
  q: Q[]; // questions techniques
  rq: Q[]; // compréhension écrite
  f: [string, string, string]; // correction de phrase : [fausse, correcte, explication]
}

export interface ModuleMeta {
  id: number;
  title: string;
  fr: string;
  desc: string;
  level: string;
  icon: string;
  hue: number; // couleur (0-360)
}

export interface Term {
  id: string;
  en: string;
  fr: string;
  pron: string;
  cat: string;
  lessonId: string;
  moduleId: number;
}

export interface DialogueLine {
  who: string;
  en: string;
  fr: string;
}

export interface Lesson {
  id: string;
  moduleId: number;
  index: number; // 1..5
  title: string;
  titleFr: string;
  cat: string;
  goal: string;
  terms: Term[];
  expressions: { en: string; fr: string }[];
  dialogues: { title: string; lines: DialogueLine[] }[];
  course: { en: string; fr: string };
  darija: { concept: string; text: string }[];
  reading: { title: string; en: string; fr: string };
  speaking: string;
  pron: { tip: string; words: Term[] };
  tech: Q[];
  readQ: Q[];
  fix: { wrong: string; right: string; why: string };
}

export type ExerciseKind =
  | "qcm"
  | "translation"
  | "fill"
  | "match"
  | "order"
  | "reading"
  | "correction"
  | "technical";

interface ExBase {
  id: string;
  prompt: string;
  explain: string;
  lessonId?: string;
  termId?: string;
}

export type Exercise =
  | (ExBase & { kind: "qcm" | "fill" | "reading" | "technical" | "correction"; options: string[]; answer: number; context?: string })
  | (ExBase & { kind: "translation"; accepted: string[] })
  | (ExBase & { kind: "match"; pairs: { left: string; right: string; termId?: string }[] })
  | (ExBase & { kind: "order"; words: string[]; answer: string });

export const KIND_LABEL: Record<ExerciseKind, string> = {
  qcm: "QCM",
  translation: "Traduction",
  fill: "Compléter la phrase",
  match: "Associer les mots",
  order: "Remettre dans l'ordre",
  reading: "Compréhension écrite",
  correction: "Correction de phrase",
  technical: "Question technique",
};
