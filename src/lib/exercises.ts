import { LESSONS, ALL_TERMS, getLesson, lessonsOfModule } from "./content";
import type { Exercise, Lesson, Term } from "@/data/types";

// ---------- aléatoire déterministe ----------
export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export function hash(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}
export function shuffle<T>(arr: T[], r: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pick<T>(arr: T[], n: number, r: () => number): T[] {
  return shuffle(arr, r).slice(0, n);
}

// ---------- utilitaires texte ----------
export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s'-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}
function cleanTerm(en: string): string {
  return en.replace(/\(.*?\)/g, "").split(" / ")[0].trim();
}
function acceptedAnswers(en: string): string[] {
  const out = new Set<string>();
  const base = en.replace(/\(.*?\)/g, " ");
  base.split("/").forEach((p) => {
    const n = normalize(p);
    if (n) {
      out.add(n);
      out.add(n.replace(/^to /, ""));
    }
  });
  const full = normalize(en);
  out.add(full);
  return [...out];
}
export function checkTyped(answer: string, accepted: string[]): boolean {
  const a = normalize(answer);
  if (!a) return false;
  return accepted.includes(a) || accepted.includes(a.replace(/^to /, ""));
}
function esc(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function pronNote(t: Term) {
  return t.pron ? ` Prononciation : ${t.pron}.` : "";
}

// ---------- QCM sur le vocabulaire ----------
function distractors(term: Term, pool: Term[], r: () => number, key: "en" | "fr", n = 3): string[] {
  const own = key === "en" ? cleanTerm(term.en) : term.fr;
  const seen = new Set([own]);
  const res: string[] = [];
  const candidates = shuffle(pool, r);
  for (const c of candidates) {
    const v = key === "en" ? cleanTerm(c.en) : c.fr;
    if (!seen.has(v) && c.id !== term.id) {
      seen.add(v);
      res.push(v);
    }
    if (res.length >= n) break;
  }
  if (res.length < n) {
    for (const c of shuffle(ALL_TERMS, r)) {
      const v = key === "en" ? cleanTerm(c.en) : c.fr;
      if (!seen.has(v)) {
        seen.add(v);
        res.push(v);
      }
      if (res.length >= n) break;
    }
  }
  return res;
}

export function termQcm(term: Term, pool: Term[], r: () => number, dir: "en-fr" | "fr-en", idSuffix = ""): Exercise {
  const explain = `« ${term.en} » signifie « ${term.fr} ».${pronNote(term)}`;
  if (dir === "en-fr") {
    const opts = shuffle([term.fr, ...distractors(term, pool, r, "fr")], r);
    return { kind: "qcm", id: `q-${term.id}-ef${idSuffix}`, prompt: `Que signifie « ${term.en} » ?`, options: opts, answer: opts.indexOf(term.fr), explain, termId: term.id, lessonId: term.lessonId };
  }
  const correct = cleanTerm(term.en);
  const opts = shuffle([correct, ...distractors(term, pool, r, "en")], r);
  return { kind: "qcm", id: `q-${term.id}-fe${idSuffix}`, prompt: `Comment dit-on « ${term.fr} » en anglais ?`, options: opts, answer: opts.indexOf(correct), explain, termId: term.id, lessonId: term.lessonId };
}

function fillExercises(lesson: Lesson, r: () => number, n: number): Exercise[] {
  const sentences = lesson.course.en.split(/(?<=[.!?])\s+/).concat(lesson.reading.en.split(/(?<=[.!?])\s+/));
  const usable = lesson.terms
    .map((t) => ({ t, c: cleanTerm(t.en).replace(/^to /, "") }))
    .filter((x) => x.c.length >= 4 && !/[\/]/.test(x.c));
  const res: Exercise[] = [];
  const used = new Set<string>();
  for (const s of shuffle(sentences, r)) {
    if (s.length < 30 || s.length > 220) continue;
    const found = shuffle(usable, r).find((x) => new RegExp(`\\b${esc(x.c)}\\b`, "i").test(s) && !used.has(x.t.id));
    if (!found) continue;
    used.add(found.t.id);
    const m = s.match(new RegExp(`\\b${esc(found.c)}\\b`, "i"))![0];
    const blank = s.replace(new RegExp(`\\b${esc(found.c)}\\b`, "i"), "_____");
    const others = distractors(found.t, lesson.terms, r, "en", 3).map((o) => o.replace(/^to /, "")).filter((o) => o.toLowerCase() !== m.toLowerCase());
    const opts = shuffle([m, ...others.slice(0, 3)], r);
    res.push({
      kind: "fill",
      id: `f-${lesson.id}-${found.t.id}`,
      prompt: "Complétez la phrase avec le mot qui convient.",
      context: blank,
      options: opts,
      answer: opts.indexOf(m),
      explain: `Phrase complète : « ${s} » — « ${found.t.en} » = ${found.t.fr}.`,
      termId: found.t.id,
      lessonId: lesson.id,
    });
    if (res.length >= n) break;
  }
  return res;
}

function orderExercises(lesson: Lesson, r: () => number, n: number): Exercise[] {
  const cands = lesson.expressions.filter((e) => {
    const w = e.en.split(" ").length;
    return w >= 5 && w <= 10;
  });
  return pick(cands, n, r).map((e, i) => {
    const words = e.en.split(" ");
    let sh = shuffle(words, r);
    let guard = 0;
    while (sh.join(" ") === words.join(" ") && guard++ < 5) sh = shuffle(words, r);
    return { kind: "order" as const, id: `o-${lesson.id}-${i}-${hash(e.en)}`, prompt: `Remettez la phrase dans l'ordre : « ${e.fr} »`, words: sh, answer: e.en, explain: `Phrase correcte : « ${e.en} » (${e.fr}). Écoutez-la et répétez-la à voix haute.`, lessonId: lesson.id };
  });
}

function translationExercises(lesson: Lesson, r: () => number, n: number): Exercise[] {
  const cands = lesson.terms.filter((t) => cleanTerm(t.en).split(" ").length <= 3 && !/[\/]/.test(t.en));
  return pick(cands, n, r).map((t) => ({
    kind: "translation" as const,
    id: `t-${t.id}`,
    prompt: `Traduisez en anglais : « ${t.fr} »`,
    accepted: acceptedAnswers(t.en),
    explain: `Réponse : « ${t.en} ».${pronNote(t)}`,
    termId: t.id,
    lessonId: lesson.id,
  }));
}

function matchExercise(lesson: Lesson, r: () => number): Exercise {
  const cands = lesson.terms.filter((t) => t.en.length <= 26 && t.fr.length <= 34);
  const seen = new Set<string>();
  const chosen: Term[] = [];
  for (const t of shuffle(cands, r)) {
    if (seen.has(t.fr)) continue;
    seen.add(t.fr);
    chosen.push(t);
    if (chosen.length === 6) break;
  }
  return {
    kind: "match",
    id: `m-${lesson.id}`,
    prompt: "Associez chaque terme anglais à sa traduction française.",
    pairs: chosen.map((t) => ({ left: t.en, right: t.fr, termId: t.id })),
    explain: chosen.map((t) => `${t.en} = ${t.fr}`).join(" · "),
    lessonId: lesson.id,
  };
}

export function techExercises(lesson: Lesson): Exercise[] {
  return lesson.tech.map((q, i) => ({ kind: "technical" as const, id: `tq-${lesson.id}-${i}`, prompt: q[0], options: q[1], answer: q[2], explain: q[3], lessonId: lesson.id }));
}
export function readingExercises(lesson: Lesson): Exercise[] {
  return lesson.readQ.map((q, i) => ({ kind: "reading" as const, id: `rq-${lesson.id}-${i}`, prompt: q[0], context: `${lesson.reading.title} — ${lesson.reading.en}`, options: q[1], answer: q[2], explain: q[3], lessonId: lesson.id }));
}
export function correctionExercise(lesson: Lesson, r: () => number): Exercise {
  const opts = shuffle([lesson.fix.wrong, lesson.fix.right], r);
  return { kind: "correction", id: `c-${lesson.id}`, prompt: "Laquelle de ces deux phrases est correcte ?", options: opts, answer: opts.indexOf(lesson.fix.right), explain: lesson.fix.why, lessonId: lesson.id };
}

/** 14 exercices variés pour une leçon. */
export function buildLessonExercises(lesson: Lesson, seed = 1): Exercise[] {
  const r = rng(hash(lesson.id) + seed * 977);
  const terms = shuffle(lesson.terms, r);
  const q1 = terms.slice(0, 2).map((t) => termQcm(t, lesson.terms, r, "en-fr"));
  const q2 = termQcm(terms[2], lesson.terms, r, "fr-en");
  const tech = techExercises(lesson);
  const reading = readingExercises(lesson);
  const list: Exercise[] = [
    ...q1,
    q2,
    matchExercise(lesson, r),
    ...translationExercises(lesson, r, 1),
    ...fillExercises(lesson, r, 2),
    ...orderExercises(lesson, r, 1),
    ...tech,
    ...reading,
    correctionExercise(lesson, r),
  ];
  return list.slice(0, 15);
}

/** Test final de leçon : 10 questions avec correction expliquée. */
export function buildLessonTest(lesson: Lesson, seed = 1): Exercise[] {
  const r = rng(hash("test" + lesson.id) + seed * 131);
  const terms = shuffle(lesson.terms, r).slice(0, 4);
  const termQs = terms.map((t, i) => termQcm(t, lesson.terms, r, i % 2 === 0 ? "en-fr" : "fr-en", "-test"));
  const qs = [...techExercises(lesson), ...readingExercises(lesson), correctionExercise(lesson, r), ...termQs];
  return shuffle(qs, r).slice(0, 10);
}

function samplePool(lesson: Lesson, r: () => number, nTerm: number, nOther: number): Exercise[] {
  const others = shuffle([...techExercises(lesson), ...readingExercises(lesson), correctionExercise(lesson, r)], r).slice(0, nOther);
  const terms = shuffle(lesson.terms, r)
    .slice(0, nTerm)
    .map((t, i) => termQcm(t, lesson.terms, r, i % 2 ? "fr-en" : "en-fr", "-ex"));
  return [...others, ...terms];
}

export function buildModuleExam(moduleId: number, seed = 1): Exercise[] {
  const r = rng(moduleId * 7919 + seed * 31);
  const qs = lessonsOfModule(moduleId).flatMap((l) => samplePool(l, r, 3, 1));
  return shuffle(qs, r);
}

/** Évaluation cumulative après chaque groupe de 3 modules (groupe 1 = modules 1–3, etc.). */
export function buildCumulativeExam(group: number, seed = 1): Exercise[] {
  const r = rng(group * 104729 + seed * 17);
  const mods = [group * 3 - 2, group * 3 - 1, group * 3];
  const qs = mods.flatMap((m) => lessonsOfModule(m)).flatMap((l) => samplePool(l, r, 1, 1));
  return shuffle(qs, r);
}

export interface ExamDef {
  id: string;
  kind: "module" | "cumulative";
  title: string;
  desc: string;
  lessonIds: string[];
  build: (seed: number) => Exercise[];
}

export function listExams(): ExamDef[] {
  const res: ExamDef[] = [];
  for (let g = 1; g <= 4; g++) {
    for (let m = g * 3 - 2; m <= g * 3; m++) {
      res.push({ id: `module-${m}`, kind: "module", title: `Examen du module ${m}`, desc: "20 questions : vocabulaire, notions techniques, lecture et correction de phrases.", lessonIds: lessonsOfModule(m).map((l) => l.id), build: (s) => buildModuleExam(m, s) });
    }
    res.push({
      id: `cumulative-${g}`,
      kind: "cumulative",
      title: `Évaluation cumulative ${g} (modules ${g * 3 - 2} à ${g * 3})`,
      desc: "30 questions couvrant les 15 leçons des trois modules.",
      lessonIds: [g * 3 - 2, g * 3 - 1, g * 3].flatMap((m) => lessonsOfModule(m).map((l) => l.id)),
      build: (s) => buildCumulativeExam(g, s),
    });
  }
  return res;
}

export function lessonLabel(id: string): string {
  const l = getLesson(id);
  return l ? `${id.replace("-", ".")} · ${l.title}` : id;
}

/** Série libre d'exercices pour la page « Exercices ». */
export function buildPractice(lessonIds: string[], kinds: string[], count: number, seed: number): Exercise[] {
  const lessons = lessonIds.map((id) => getLesson(id)).filter(Boolean) as Lesson[];
  const r = rng(seed * 4099 + lessons.length);
  const all = lessons.flatMap((l, i) => buildLessonExercises(l, seed + i));
  const filtered = kinds.length ? all.filter((e) => kinds.includes(e.kind)) : all;
  return shuffle(filtered, r).slice(0, count);
}

export { LESSONS };
