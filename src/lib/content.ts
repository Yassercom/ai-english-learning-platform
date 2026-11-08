import { RAW_LESSONS } from "@/data/content";
import { MODULES } from "@/data/modules";
import type { Lesson, Term } from "@/data/types";

function lines(s: string): string[] {
  return s.split("\n").map((l) => l.trim()).filter(Boolean);
}

function parseLesson(raw: (typeof RAW_LESSONS)[number]): Lesson {
  const [m, i] = raw.id.split("-").map(Number);
  const terms: Term[] = lines(raw.w).map((l, idx) => {
    const [en, fr, pron] = l.split("|");
    return { id: `${raw.id}#${idx}`, en: en.trim(), fr: fr.trim(), pron: (pron ?? "").trim(), cat: raw.cat, lessonId: raw.id, moduleId: m };
  });
  const pronWords: Term[] = raw.p.words.split(",").map((w, idx) => {
    const word = w.trim();
    const found = terms.find((t) => t.en.toLowerCase().includes(word.toLowerCase()));
    return found ?? { id: `${raw.id}#p${idx}`, en: word, fr: "", pron: "", cat: raw.cat, lessonId: raw.id, moduleId: m };
  });
  return {
    id: raw.id,
    moduleId: m,
    index: i,
    title: raw.t,
    titleFr: raw.fr,
    cat: raw.cat,
    goal: raw.goal,
    terms,
    expressions: lines(raw.x).map((l) => {
      const [en, fr] = l.split("|");
      return { en: en.trim(), fr: fr.trim() };
    }),
    dialogues: raw.d.map(([title, body]) => ({
      title,
      lines: lines(body).map((l) => {
        const c = l.indexOf(":");
        const who = l.slice(0, c).trim();
        const [en, fr] = l.slice(c + 1).split("||");
        return { who, en: en.trim(), fr: (fr ?? "").trim() };
      }),
    })),
    course: raw.c,
    darija: lines(raw.da).map((l) => {
      const c = l.indexOf(":");
      return { concept: l.slice(0, c).trim(), text: l.slice(c + 1).trim() };
    }),
    reading: { title: raw.r.t, en: raw.r.en, fr: raw.r.fr },
    speaking: raw.s,
    pron: { tip: raw.p.tip, words: pronWords },
    tech: raw.q,
    readQ: raw.rq,
    fix: { wrong: raw.f[0], right: raw.f[1], why: raw.f[2] },
  };
}

export const LESSONS: Lesson[] = RAW_LESSONS.map(parseLesson).sort((a, b) => a.moduleId - b.moduleId || a.index - b.index);

export const ALL_TERMS: Term[] = LESSONS.flatMap((l) => l.terms);

const lessonMap = new Map(LESSONS.map((l) => [l.id, l]));
const termMap = new Map(ALL_TERMS.map((t) => [t.id, t]));

export function getLesson(id: string): Lesson | undefined {
  return lessonMap.get(id);
}
export function getTerm(id: string): Term | undefined {
  return termMap.get(id);
}
export function lessonsOfModule(moduleId: number): Lesson[] {
  return LESSONS.filter((l) => l.moduleId === moduleId);
}
export function getModule(id: number) {
  return MODULES.find((m) => m.id === id);
}
export function nextLessonId(id: string): string | null {
  const i = LESSONS.findIndex((l) => l.id === id);
  return i >= 0 && i < LESSONS.length - 1 ? LESSONS[i + 1].id : null;
}
export function prevLessonId(id: string): string | null {
  const i = LESSONS.findIndex((l) => l.id === id);
  return i > 0 ? LESSONS[i - 1].id : null;
}

export const CAT_SHORT: Record<string, string> = {
  "General English": "General English",
  "Computer Science": "Informatique",
  Python: "Python",
  Mathematics: "Mathématiques",
  "Data Science": "Data Science",
  ML: "Machine Learning",
  DL: "Deep Learning",
  "Computer Vision": "Vision",
  NLP: "NLP / LLM",
  "Advanced AI": "IA avancée",
  Engineering: "Ingénierie",
  "Research & Ethics": "Recherche & éthique",
};
