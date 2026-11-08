"use client";
import { useSyncExternalStore } from "react";
import { ALL_TERMS, LESSONS } from "./content";

/* ------------------------------------------------------------------
   Modèle de données de la progression.
   La persistance passe par un StorageAdapter : aujourd'hui localStorage,
   demain une API + base de données (comptes utilisateurs) sans toucher
   au reste de l'application.
------------------------------------------------------------------- */

export type WordStatus = "new" | "review" | "mastered";

export interface WordState {
  status: WordStatus;
  stage: number; // 0..4 (J+1, J+3, J+7, J+14, puis maîtrisé)
  due: number; // timestamp de la prochaine révision
  seen: number;
  correct: number;
  wrong: number;
  last: number;
}

export interface LessonState {
  done?: boolean;
  step?: number;
  completedAt?: number;
  testScore?: number; // dernier score en %
  bestScore?: number;
  testCount?: number;
  reviewStage?: number;
  reviewDue?: number;
}

export interface ExamResult {
  id: string;
  date: number;
  score: number;
  total: number;
  byLesson: Record<string, { c: number; t: number }>;
}

export interface DayActivity {
  words: number;
  exercises: number;
  correct: number;
  lessons: number;
}

export interface AppState {
  v: 1;
  userId: string;
  dailyGoal: { words: number; exercises: number; lessons: number };
  words: Record<string, WordState>;
  favorites: string[];
  lessons: Record<string, LessonState>;
  exams: ExamResult[];
  activity: Record<string, DayActivity>;
  recordings: number;
}

export const DAY = 24 * 60 * 60 * 1000;
export const SRS_INTERVALS = [1, 3, 7, 14]; // jours : J+1, J+3, J+7, J+14

export function defaultState(): AppState {
  return {
    v: 1,
    userId: "local",
    dailyGoal: { words: 10, exercises: 10, lessons: 1 },
    words: {},
    favorites: [],
    lessons: {},
    exams: [],
    activity: {},
    recordings: 0,
  };
}

export interface StorageAdapter {
  load(): AppState | null;
  save(state: AppState): void;
  clear(): void;
}

const KEY = "ai-english-lab:v1";

export const localStorageAdapter: StorageAdapter = {
  load() {
    try {
      const raw = window.localStorage.getItem(KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw) as AppState;
      return { ...defaultState(), ...parsed };
    } catch {
      return null;
    }
  },
  save(state) {
    try {
      window.localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* stockage plein ou indisponible */
    }
  },
  clear() {
    window.localStorage.removeItem(KEY);
  },
};

let adapter: StorageAdapter = localStorageAdapter;
export function setStorageAdapter(a: StorageAdapter) {
  adapter = a;
}

const SERVER_STATE = defaultState();
let current: AppState | null = null;
const listeners = new Set<() => void>();

function getSnapshot(): AppState {
  if (current === null) current = adapter.load() ?? defaultState();
  return current;
}
function getServerSnapshot(): AppState {
  return SERVER_STATE;
}
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function commit(next: AppState) {
  current = next;
  adapter.save(next);
  listeners.forEach((l) => l());
}

export function replaceState(next: AppState) {
  commit({ ...defaultState(), ...next });
}
export function resetState() {
  adapter.clear();
  commit(defaultState());
}

export function dayKey(t = Date.now()): string {
  const d = new Date(t);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function bump(s: AppState, patch: Partial<DayActivity>): AppState {
  const k = dayKey();
  const a = s.activity[k] ?? { words: 0, exercises: 0, correct: 0, lessons: 0 };
  return {
    ...s,
    activity: {
      ...s.activity,
      [k]: {
        words: a.words + (patch.words ?? 0),
        exercises: a.exercises + (patch.exercises ?? 0),
        correct: a.correct + (patch.correct ?? 0),
        lessons: a.lessons + (patch.lessons ?? 0),
      },
    },
  };
}

/* ----------------------- actions ----------------------- */

function freshWord(now: number): WordState {
  return { status: "new", stage: 0, due: now + SRS_INTERVALS[0] * DAY, seen: 0, correct: 0, wrong: 0, last: now };
}

/** Introduit des mots dans le système de révision (J+1). */
export function introduceWords(ids: string[]) {
  const s = getSnapshot();
  const now = Date.now();
  let changed = false;
  const words = { ...s.words };
  for (const id of ids) {
    if (!words[id]) {
      words[id] = freshWord(now);
      changed = true;
    }
  }
  if (changed) commit({ ...s, words });
}

/** Note un mot (flashcard ou exercice). correct = réponse juste. */
export function rateWord(id: string, correct: boolean) {
  const s = getSnapshot();
  const now = Date.now();
  const w = { ...(s.words[id] ?? freshWord(now)) };
  w.seen += 1;
  w.last = now;
  if (correct) {
    w.correct += 1;
    // la progression d'étape n'a lieu que si le mot est « dû » (ou déjà maîtrisé)
    if (now >= w.due) {
      w.stage = Math.min(w.stage + 1, 4);
      w.due = w.stage >= 4 ? now + 30 * DAY : now + SRS_INTERVALS[w.stage] * DAY;
    }
    w.status = w.stage >= 4 ? "mastered" : w.status === "review" && w.stage < 2 ? "review" : "new";
    if (w.status === "new" && w.stage >= 2 && w.correct > w.wrong) w.status = "new";
  } else {
    w.wrong += 1;
    w.stage = 0;
    w.due = now + SRS_INTERVALS[0] * DAY;
    w.status = "review";
  }
  commit(bump({ ...s, words: { ...s.words, [id]: w } }, { words: 1 }));
}

export function setWordStatus(id: string, status: WordStatus) {
  const s = getSnapshot();
  const now = Date.now();
  const w = { ...(s.words[id] ?? freshWord(now)) };
  w.status = status;
  if (status === "mastered") {
    w.stage = 4;
    w.due = now + 30 * DAY;
  } else if (status === "review") {
    w.stage = 0;
    w.due = now;
  } else {
    w.stage = 0;
    w.due = now + SRS_INTERVALS[0] * DAY;
  }
  commit({ ...s, words: { ...s.words, [id]: w } });
}

export function toggleFavorite(id: string) {
  const s = getSnapshot();
  const favorites = s.favorites.includes(id) ? s.favorites.filter((f) => f !== id) : [...s.favorites, id];
  commit({ ...s, favorites });
}

export function recordExercise(correct: boolean) {
  const s = getSnapshot();
  commit(bump(s, { exercises: 1, correct: correct ? 1 : 0 }));
}

export function setLessonStep(id: string, step: number) {
  const s = getSnapshot();
  const l = s.lessons[id] ?? {};
  if (l.step === step) return;
  commit({ ...s, lessons: { ...s.lessons, [id]: { ...l, step } } });
}

export function completeLesson(id: string, done = true) {
  const s = getSnapshot();
  const l = { ...(s.lessons[id] ?? {}) };
  const now = Date.now();
  const was = !!l.done;
  l.done = done;
  if (done) {
    l.completedAt = l.completedAt ?? now;
    if (!was) {
      l.reviewStage = 0;
      l.reviewDue = now + SRS_INTERVALS[0] * DAY;
    }
  }
  let next: AppState = { ...s, lessons: { ...s.lessons, [id]: l } };
  if (done && !was) {
    const lesson = LESSONS.find((x) => x.id === id);
    const words = { ...next.words };
    lesson?.terms.forEach((t) => {
      if (!words[t.id]) words[t.id] = freshWord(now);
    });
    next = bump({ ...next, words }, { lessons: 1 });
  }
  commit(next);
}

export function saveLessonTest(id: string, score: number, total: number) {
  const s = getSnapshot();
  const pct = Math.round((score / total) * 100);
  const l = { ...(s.lessons[id] ?? {}) };
  l.testScore = pct;
  l.bestScore = Math.max(l.bestScore ?? 0, pct);
  l.testCount = (l.testCount ?? 0) + 1;
  commit({ ...s, lessons: { ...s.lessons, [id]: l } });
}

/** L'apprenant a révisé une leçon : on avance dans J+1 → J+3 → J+7 → J+14. */
export function markLessonReviewed(id: string) {
  const s = getSnapshot();
  const l = { ...(s.lessons[id] ?? {}) };
  const now = Date.now();
  const stage = Math.min((l.reviewStage ?? 0) + 1, 4);
  l.reviewStage = stage;
  l.reviewDue = stage >= 4 ? now + 30 * DAY : now + SRS_INTERVALS[stage] * DAY;
  commit({ ...s, lessons: { ...s.lessons, [id]: l } });
}

export function saveExam(r: ExamResult) {
  const s = getSnapshot();
  commit({ ...s, exams: [r, ...s.exams].slice(0, 60) });
}

export function setDailyGoal(g: Partial<AppState["dailyGoal"]>) {
  const s = getSnapshot();
  commit({ ...s, dailyGoal: { ...s.dailyGoal, ...g } });
}

export function addRecording() {
  const s = getSnapshot();
  commit({ ...s, recordings: s.recordings + 1 });
}

/* ----------------------- hook et sélecteurs ----------------------- */

export function useAppState(): AppState {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

const noop = () => () => {};
export function useHydrated(): boolean {
  return useSyncExternalStore(noop, () => true, () => false);
}

export function dueWords(s: AppState, now = Date.now()): string[] {
  return Object.entries(s.words)
    .filter(([, w]) => w.due <= now && w.status !== "mastered")
    .sort((a, b) => a[1].due - b[1].due)
    .map(([id]) => id);
}

export function dueLessons(s: AppState, now = Date.now()): { id: string; reason: string }[] {
  const res: { id: string; reason: string }[] = [];
  for (const l of LESSONS) {
    const st = s.lessons[l.id];
    if (!st) continue;
    if (st.testScore !== undefined && st.testScore < 70) res.push({ id: l.id, reason: `Test final à ${st.testScore} % : à retravailler` });
    else if (st.done && st.reviewDue !== undefined && st.reviewDue <= now && (st.reviewStage ?? 0) < 4) res.push({ id: l.id, reason: `Révision J+${SRS_INTERVALS[st.reviewStage ?? 0]} prévue` });
  }
  return res;
}

export function streak(s: AppState): number {
  let n = 0;
  const d = new Date();
  const active = (t: number) => {
    const a = s.activity[dayKey(t)];
    return !!a && a.words + a.exercises + a.lessons > 0;
  };
  let t = d.getTime();
  if (!active(t)) t -= DAY; // la journée en cours ne casse pas la série
  while (active(t)) {
    n++;
    t -= DAY;
  }
  return n;
}

export function stats(s: AppState) {
  const learned = Object.keys(s.words).length;
  const mastered = Object.values(s.words).filter((w) => w.status === "mastered").length;
  const review = Object.values(s.words).filter((w) => w.status === "review").length;
  const doneLessons = LESSONS.filter((l) => s.lessons[l.id]?.done).length;
  return { learned, mastered, review, doneLessons, totalWords: ALL_TERMS.length, totalLessons: LESSONS.length };
}
