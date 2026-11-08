"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { listExams, lessonLabel } from "@/lib/exercises";
import { saveExam, useAppState } from "@/lib/store";
import ExerciseRunner, { type RunResult } from "./ExerciseRunner";

export default function ExamView({ id }: { id: string }) {
  const exam = listExams().find((e) => e.id === id)!;
  const s = useAppState();
  const [seed, setSeed] = useState(1);
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState<{ pct: number; byLesson: Record<string, { c: number; t: number }> } | null>(null);
  const exercises = useMemo(() => exam.build(seed), [exam, seed]);
  const history = s.exams.filter((e) => e.id === id);

  const finish = (r: RunResult) => {
    const byLesson: Record<string, { c: number; t: number }> = {};
    r.items.forEach((it) => {
      const k = it.ex.lessonId ?? "?";
      byLesson[k] = byLesson[k] ?? { c: 0, t: 0 };
      byLesson[k].t += 1;
      if (it.correct) byLesson[k].c += 1;
    });
    saveExam({ id, date: Date.now(), score: r.score, total: r.total, byLesson });
    setResult({ pct: Math.round((r.score / r.total) * 100), byLesson });
  };

  if (!started) {
    return (
      <div className="space-y-5 fade-up">
        <Link href="/exams" className="muted hover:underline">
          ← Tous les examens
        </Link>
        <h1 className="h-page">{exam.title}</h1>
        <div className="card space-y-3">
          <p>{exam.desc}</p>
          <ul className="list-disc space-y-1 pl-5 text-sm">
            <li>{exercises.length} questions à choix multiple, sans correction pendant l&apos;examen.</li>
            <li>La correction expliquée et les recommandations de révision s&apos;affichent à la fin.</li>
            <li>Seuil de réussite conseillé : 70 %.</li>
          </ul>
          <button className="btn-primary" onClick={() => setStarted(true)}>
            Commencer l&apos;examen
          </button>
        </div>
        {history.length > 0 && (
          <div className="card">
            <h2 className="mb-2 font-bold">Vos tentatives précédentes</h2>
            <ul className="space-y-1 text-sm">
              {history.map((h, i) => (
                <li key={i} className="flex justify-between">
                  <span>{new Date(h.date).toLocaleString("fr-FR")}</span>
                  <b>
                    {h.score}/{h.total} ({Math.round((h.score / h.total) * 100)} %)
                  </b>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }

  const weak = result ? Object.entries(result.byLesson).filter(([, v]) => v.c / v.t < 0.6).sort((a, b) => a[1].c / a[1].t - b[1].c / b[1].t) : [];
  const strong = result ? Object.entries(result.byLesson).filter(([, v]) => v.c / v.t >= 0.8) : [];

  return (
    <div className="space-y-5 fade-up">
      <h1 className="h-page">{exam.title}</h1>
      <ExerciseRunner
        key={seed}
        exercises={exercises}
        mode="test"
        restartLabel="Repasser l'examen (nouvelles questions)"
        onRestart={() => {
          setSeed(seed + 1);
          setResult(null);
        }}
        onFinish={finish}
      />
      {result && (
        <div className="card space-y-4 fade-up">
          <h2 className="text-lg font-bold">📊 Résultats détaillés par leçon</h2>
          <ul className="space-y-2 text-sm">
            {Object.entries(result.byLesson)
              .sort()
              .map(([lid, v]) => (
                <li key={lid} className="flex items-center justify-between gap-3">
                  <Link href={`/learn/${lid}`} className="truncate hover:underline">
                    {lessonLabel(lid)}
                  </Link>
                  <span className={`chip ${v.c / v.t >= 0.7 ? "!bg-emerald-100 !text-emerald-800" : "!bg-rose-100 !text-rose-800"}`}>
                    {v.c}/{v.t}
                  </span>
                </li>
              ))}
          </ul>
          <div className="rounded-xl bg-slate-50 p-4 text-sm dark:bg-slate-800/60">
            <p className="font-bold">Recommandations</p>
            {weak.length > 0 ? (
              <>
                <p className="mt-1">Priorité de révision :</p>
                <ul className="mt-1 list-disc pl-5">
                  {weak.map(([lid]) => (
                    <li key={lid}>
                      <Link href={`/learn/${lid}`} className="font-semibold text-indigo-600 hover:underline dark:text-indigo-300">
                        {lessonLabel(lid)}
                      </Link>{" "}
                      — relisez le cours, refaites les flashcards puis repassez le test de la leçon.
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-1">Aucune leçon sous 60 % : continuez ainsi et gardez le rythme de vos révisions espacées.</p>
            )}
            {strong.length > 0 && <p className="mt-2">Points forts : {strong.map(([l]) => l.replace("-", ".")).join(", ")}.</p>}
            <p className="mt-2">{result.pct >= 70 ? "✅ Objectif de 70 % atteint." : "⚠️ Objectif de 70 % non atteint : révisez avant de passer au module suivant."}</p>
          </div>
        </div>
      )}
    </div>
  );
}
