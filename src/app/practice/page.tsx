"use client";
import { useMemo, useState } from "react";
import { MODULES } from "@/data/modules";
import { KIND_LABEL, type ExerciseKind } from "@/data/types";
import { LESSONS, lessonsOfModule } from "@/lib/content";
import { buildPractice, rng, shuffle } from "@/lib/exercises";
import ExerciseRunner from "@/components/ExerciseRunner";

const KINDS = Object.keys(KIND_LABEL) as ExerciseKind[];

export default function PracticePage() {
  const [scope, setScope] = useState("module");
  const [value, setValue] = useState("1");
  const [kinds, setKinds] = useState<ExerciseKind[]>([]);
  const [count, setCount] = useState(10);
  const [seed, setSeed] = useState(1);
  const [running, setRunning] = useState(false);

  const lessonIds = useMemo(() => {
    if (scope === "lesson") return [value];
    if (scope === "module") return lessonsOfModule(Number(value)).map((l) => l.id);
    return shuffle(LESSONS, rng(seed * 31)).slice(0, 12).map((l) => l.id);
  }, [scope, value, seed]);

  const exercises = useMemo(() => (running ? buildPractice(lessonIds, kinds, count, seed) : []), [running, lessonIds, kinds, count, seed]);

  if (running) {
    return (
      <div className="space-y-4 fade-up">
        <button className="btn-soft !py-1.5 text-xs" onClick={() => setRunning(false)}>
          ← Changer les réglages
        </button>
        <h1 className="h-page">Série d&apos;exercices</h1>
        <ExerciseRunner key={seed} exercises={exercises} onRestart={() => setSeed(seed + 1)} />
      </div>
    );
  }

  return (
    <div className="space-y-5 fade-up">
      <div>
        <h1 className="h-page">Exercices interactifs</h1>
        <p className="muted">8 formats d&apos;exercices, avec correction expliquée après chaque réponse. Choisissez le contenu et les types qui vous intéressent.</p>
      </div>
      <div className="card space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold">
            Contenu
            <select
              className="input"
              value={scope}
              onChange={(e) => {
                setScope(e.target.value);
                setValue(e.target.value === "lesson" ? "1-1" : "1");
              }}
            >
              <option value="module">Un module</option>
              <option value="lesson">Une leçon</option>
              <option value="all">Mélange de plusieurs leçons</option>
            </select>
          </label>
          {scope === "module" && (
            <label className="space-y-1 text-sm font-semibold">
              Module
              <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
                {MODULES.map((m) => (
                  <option key={m.id} value={m.id}>
                    {m.id}. {m.title}
                  </option>
                ))}
              </select>
            </label>
          )}
          {scope === "lesson" && (
            <label className="space-y-1 text-sm font-semibold">
              Leçon
              <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
                {LESSONS.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.id.replace("-", ".")} · {l.title}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold">Types d&apos;exercices (aucun = tous)</p>
          <div className="flex flex-wrap gap-2">
            {KINDS.map((k) => (
              <button key={k} onClick={() => setKinds(kinds.includes(k) ? kinds.filter((x) => x !== k) : [...kinds, k])} className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${kinds.includes(k) ? "border-indigo-600 bg-indigo-600 text-white" : "border-slate-300 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900"}`}>
                {KIND_LABEL[k]}
              </button>
            ))}
          </div>
        </div>
        <label className="block space-y-1 text-sm font-semibold">
          Nombre de questions : {count}
          <input type="range" min={5} max={30} step={1} value={count} onChange={(e) => setCount(Number(e.target.value))} className="w-full" />
        </label>
        <button className="btn-primary" onClick={() => setRunning(true)}>
          Commencer la série
        </button>
      </div>
    </div>
  );
}
