"use client";
import { useMemo, useState } from "react";
import { KIND_LABEL, type Exercise } from "@/data/types";
import { checkTyped, hash, normalize, rng, shuffle } from "@/lib/exercises";
import { rateWord, recordExercise } from "@/lib/store";
import { AudioButton, ProgressBar } from "./ui";

export interface RunItem {
  ex: Exercise;
  correct: boolean;
  response: string;
}
export interface RunResult {
  score: number;
  total: number;
  items: RunItem[];
}

type TermResult = { termId: string; correct: boolean };
type AnswerFn = (correct: boolean, response: string, termResults?: TermResult[]) => void;

const LETTERS = ["A", "B", "C", "D", "E"];

function OptionQuestion({ ex, reveal, onAnswer }: { ex: Extract<Exercise, { options: string[] }>; reveal: boolean; onAnswer: AnswerFn }) {
  const [sel, setSel] = useState<number | null>(null);
  const done = sel !== null;
  return (
    <div className="space-y-2">
      {ex.options.map((o, i) => {
        let cls = "border-slate-200 bg-white hover:border-indigo-400 hover:bg-indigo-50/60 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800";
        if (done) {
          if (reveal && i === ex.answer) cls = "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10";
          else if (reveal && i === sel) cls = "border-rose-500 bg-rose-50 dark:bg-rose-500/10";
          else if (!reveal && i === sel) cls = "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10";
          else cls = "border-slate-200 opacity-60 dark:border-slate-800";
        }
        return (
          <button
            key={i}
            type="button"
            disabled={done}
            onClick={() => {
              setSel(i);
              onAnswer(i === ex.answer, o);
            }}
            className={`flex w-full items-start gap-3 rounded-xl border-2 px-3 py-3 text-left text-sm transition ${cls}`}
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-100 text-xs font-bold dark:bg-slate-800">{LETTERS[i]}</span>
            <span className="pt-0.5">{o}</span>
          </button>
        );
      })}
    </div>
  );
}

function TranslationQuestion({ ex, onAnswer }: { ex: Extract<Exercise, { kind: "translation" }>; onAnswer: AnswerFn }) {
  const [val, setVal] = useState("");
  const [res, setRes] = useState<boolean | null>(null);
  const submit = () => {
    if (res !== null || !val.trim()) return;
    const ok = checkTyped(val, ex.accepted);
    setRes(ok);
    onAnswer(ok, val);
  };
  return (
    <div className="space-y-3">
      <input
        className={`input ${res === true ? "!border-emerald-500" : res === false ? "!border-rose-500" : ""}`}
        placeholder="Votre réponse en anglais…"
        value={val}
        disabled={res !== null}
        autoComplete="off"
        autoCapitalize="none"
        spellCheck={false}
        onChange={(e) => setVal(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      {res === null && (
        <button type="button" className="btn-primary" onClick={submit} disabled={!val.trim()}>
          Valider
        </button>
      )}
    </div>
  );
}

function MatchQuestion({ ex, onAnswer }: { ex: Extract<Exercise, { kind: "match" }>; onAnswer: AnswerFn }) {
  const order = useMemo(() => shuffle(ex.pairs.map((_, i) => i), rng(hash(ex.id))), [ex]);
  const [selLeft, setSelLeft] = useState<number | null>(null);
  const [matched, setMatched] = useState<number[]>([]);
  const [missed, setMissed] = useState<number[]>([]);
  const [flash, setFlash] = useState<number | null>(null);
  const clickRight = (j: number) => {
    if (selLeft === null || matched.includes(j)) return;
    if (selLeft === j) {
      const nm = [...matched, j];
      setMatched(nm);
      setSelLeft(null);
      if (nm.length === ex.pairs.length) {
        const termResults = ex.pairs.filter((p) => p.termId).map((p, k) => ({ termId: p.termId as string, correct: !missed.includes(ex.pairs.indexOf(p)) && k >= 0 }));
        onAnswer(missed.length === 0, `${missed.length} erreur(s)`, termResults);
      }
    } else {
      setFlash(j);
      setTimeout(() => setFlash(null), 500);
      if (!missed.includes(selLeft)) setMissed([...missed, selLeft]);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-2">
        {ex.pairs.map((p, i) => (
          <button
            key={i}
            type="button"
            disabled={matched.includes(i)}
            onClick={() => setSelLeft(i)}
            className={`w-full rounded-xl border-2 px-3 py-2.5 text-left text-sm font-medium transition ${
              matched.includes(i) ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" : selLeft === i ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10" : "border-slate-200 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            {p.left}
          </button>
        ))}
      </div>
      <div className="space-y-2">
        {order.map((j) => (
          <button
            key={j}
            type="button"
            disabled={matched.includes(j)}
            onClick={() => clickRight(j)}
            className={`w-full rounded-xl border-2 px-3 py-2.5 text-left text-sm transition ${
              matched.includes(j) ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-500/10" : flash === j ? "border-rose-500 bg-rose-50 dark:bg-rose-500/10" : "border-slate-200 bg-white hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900"
            }`}
          >
            {ex.pairs[j].right}
          </button>
        ))}
      </div>
      <p className="col-span-2 muted">Cliquez d&apos;abord sur un mot anglais, puis sur sa traduction. Associés : {matched.length}/{ex.pairs.length}</p>
    </div>
  );
}

function OrderQuestion({ ex, onAnswer }: { ex: Extract<Exercise, { kind: "order" }>; onAnswer: AnswerFn }) {
  const [chosen, setChosen] = useState<number[]>([]);
  const [res, setRes] = useState<boolean | null>(null);
  const built = chosen.map((i) => ex.words[i]).join(" ");
  const submit = () => {
    const ok = normalize(built) === normalize(ex.answer);
    setRes(ok);
    onAnswer(ok, built);
  };
  return (
    <div className="space-y-3">
      <div className={`flex min-h-14 flex-wrap gap-2 rounded-xl border-2 border-dashed p-3 ${res === true ? "border-emerald-500" : res === false ? "border-rose-500" : "border-slate-300 dark:border-slate-700"}`}>
        {chosen.length === 0 && <span className="muted">Cliquez sur les mots dans le bon ordre…</span>}
        {chosen.map((i, k) => (
          <button key={k} type="button" disabled={res !== null} onClick={() => setChosen(chosen.filter((_, x) => x !== k))} className="rounded-lg bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white">
            {ex.words[i]}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {ex.words.map((w, i) => (
          <button key={i} type="button" disabled={chosen.includes(i) || res !== null} onClick={() => setChosen([...chosen, i])} className="rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium transition hover:border-indigo-400 disabled:opacity-30 dark:border-slate-700 dark:bg-slate-900">
            {w}
          </button>
        ))}
      </div>
      {res === null && (
        <div className="flex gap-2">
          <button type="button" className="btn-primary" disabled={chosen.length !== ex.words.length} onClick={submit}>
            Valider
          </button>
          <button type="button" className="btn-soft" onClick={() => setChosen([])}>
            Effacer
          </button>
        </div>
      )}
    </div>
  );
}

export default function ExerciseRunner({
  exercises,
  mode = "practice",
  onFinish,
  onRestart,
  restartLabel = "Nouvelle série",
}: {
  exercises: Exercise[];
  mode?: "practice" | "test";
  onFinish?: (r: RunResult) => void;
  onRestart?: () => void;
  restartLabel?: string;
}) {
  const [idx, setIdx] = useState(0);
  const [items, setItems] = useState<RunItem[]>([]);
  const [answered, setAnswered] = useState<RunItem | null>(null);
  const [finished, setFinished] = useState(false);
  const reveal = mode === "practice";
  const total = exercises.length;
  const ex = exercises[idx];

  const handleAnswer: AnswerFn = (correct, response, termResults) => {
    recordExercise(correct);
    if (termResults) termResults.forEach((t) => rateWord(t.termId, t.correct));
    else if (ex.termId) rateWord(ex.termId, correct);
    setAnswered({ ex, correct, response });
  };

  const next = () => {
    if (!answered) return;
    const all = [...items, answered];
    setItems(all);
    setAnswered(null);
    if (idx + 1 >= total) {
      setFinished(true);
      onFinish?.({ score: all.filter((i) => i.correct).length, total, items: all });
    } else setIdx(idx + 1);
  };

  if (total === 0) return <p className="muted">Aucun exercice disponible pour cette sélection.</p>;

  if (finished) {
    const score = items.filter((i) => i.correct).length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="space-y-5 fade-up">
        <div className="card text-center">
          <div className="text-5xl">{pct >= 80 ? "🎉" : pct >= 60 ? "👍" : "💪"}</div>
          <h3 className="mt-2 text-2xl font-bold">
            {score} / {total} <span className="text-slate-400">({pct} %)</span>
          </h3>
          <p className="muted mt-1">
            {pct >= 80 ? "Excellent travail !" : pct >= 60 ? "Bien, mais quelques notions sont à revoir." : "Ce n'est pas grave : relisez la correction ci-dessous puis réessayez."}
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {onRestart && (
              <button className="btn-primary" onClick={onRestart}>
                {restartLabel}
              </button>
            )}
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-bold">Correction détaillée</h4>
          {items.map((it, i) => (
            <div key={i} className={`card !p-4 ${it.correct ? "border-emerald-300 dark:border-emerald-700" : "border-rose-300 dark:border-rose-700"}`}>
              <div className="flex items-start gap-2">
                <span className="text-lg">{it.correct ? "✅" : "❌"}</span>
                <div className="min-w-0 text-sm">
                  <p className="font-semibold">
                    {i + 1}. {it.ex.prompt}
                  </p>
                  {"context" in it.ex && it.ex.context && it.ex.kind === "fill" && <p className="muted italic">{it.ex.context}</p>}
                  <p className="mt-1">
                    <span className="muted">Votre réponse : </span>
                    {it.response}
                  </p>
                  {it.ex.kind !== "match" && "options" in it.ex && !it.correct && (
                    <p>
                      <span className="muted">Bonne réponse : </span>
                      <b>{it.ex.options[it.ex.answer]}</b>
                    </p>
                  )}
                  <p className="mt-1 text-slate-600 dark:text-slate-300">💡 {it.ex.explain}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="chip">{KIND_LABEL[ex.kind]}</span>
          <span className="muted">
            Question {idx + 1} / {total}
          </span>
        </div>
        <ProgressBar value={idx + (answered ? 1 : 0)} max={total} />
      </div>

      <div key={`${ex.id}-${idx}`} className="card fade-up space-y-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold sm:text-lg">{ex.prompt}</h3>
          {ex.kind === "qcm" && ex.prompt.includes("« ") && /Que signifie/.test(ex.prompt) && <AudioButton text={ex.prompt.replace(/^.*« /, "").replace(/ » \?$/, "")} />}
        </div>
        {ex.kind === "fill" && ex.context && <p className="rounded-xl bg-slate-50 p-3 text-sm italic dark:bg-slate-800/60">{ex.context}</p>}
        {ex.kind === "reading" && ex.context && (
          <details open className="rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
            <summary className="cursor-pointer font-semibold">Texte à lire</summary>
            <p className="mt-2">{ex.context}</p>
          </details>
        )}
        {(ex.kind === "qcm" || ex.kind === "fill" || ex.kind === "reading" || ex.kind === "technical" || ex.kind === "correction") && <OptionQuestion ex={ex} reveal={reveal} onAnswer={handleAnswer} />}
        {ex.kind === "translation" && <TranslationQuestion ex={ex} onAnswer={handleAnswer} />}
        {ex.kind === "match" && <MatchQuestion ex={ex} onAnswer={handleAnswer} />}
        {ex.kind === "order" && <OrderQuestion ex={ex} onAnswer={handleAnswer} />}

        {answered && reveal && (
          <div className={`pop rounded-xl border p-4 text-sm ${answered.correct ? "border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-500/10" : "border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-500/10"}`}>
            <p className="font-bold">{answered.correct ? "✅ Bravo, c'est correct !" : "❌ Pas tout à fait."}</p>
            <p className="mt-1">💡 {ex.explain}</p>
          </div>
        )}
        {answered && (
          <div className="flex justify-end">
            <button className="btn-primary" onClick={next}>
              {idx + 1 >= total ? "Voir le résultat" : "Question suivante →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
