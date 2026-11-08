"use client";
import Link from "next/link";
import { useState } from "react";
import { ALL_TERMS, getLesson, getTerm } from "@/lib/content";
import { DAY, SRS_INTERVALS, dueLessons, dueWords, markLessonReviewed, useAppState } from "@/lib/store";
import Flashcards from "@/components/Flashcards";
import { Empty } from "@/components/ui";

export default function ReviewPage() {
  const s = useAppState();
  const [session, setSession] = useState<string[] | null>(null);
  const now = Date.now();
  const dw = dueWords(s, now);
  const dl = dueLessons(s, now);
  const upcoming = Object.entries(s.words)
    .filter(([, w]) => w.due > now && w.status !== "mastered")
    .sort((a, b) => a[1].due - b[1].due);
  const byDay = (() => {
    const m: Record<number, number> = {};
    upcoming.forEach(([, w]) => {
      const d = Math.ceil((w.due - now) / DAY);
      m[d] = (m[d] ?? 0) + 1;
    });
    return Object.entries(m).sort((a, b) => Number(a[0]) - Number(b[0]));
  })();

  if (session) {
    const terms = session.map((id) => getTerm(id)!).filter(Boolean);
    return (
      <div className="space-y-4 fade-up">
        <button className="btn-soft !py-1.5 text-xs" onClick={() => setSession(null)}>
          ← Retour aux révisions
        </button>
        <h1 className="h-page">Session de révision</h1>
        <Flashcards terms={terms} onDone={() => setSession(null)} doneLabel="Retour aux révisions" />
      </div>
    );
  }

  return (
    <div className="space-y-6 fade-up">
      <div>
        <h1 className="h-page">Révisions espacées</h1>
        <p className="muted">Les mots et les leçons reviennent automatiquement à J+1, J+3, J+7 et J+14. Une erreur ramène le mot à J+1. Après le dernier palier, le mot est « maîtrisé ».</p>
      </div>

      <div className="card space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold">🗂️ Mots à réviser aujourd&apos;hui</h2>
            <p className="muted">{dw.length} mot(s) en attente.</p>
          </div>
          <button className="btn-primary" disabled={dw.length === 0} onClick={() => setSession(dw.slice(0, 20))}>
            Réviser {Math.min(20, dw.length)} mot(s)
          </button>
        </div>
        {dw.length === 0 ? (
          <Empty>Tout est à jour ! Étudiez une nouvelle leçon pour ajouter des mots à votre calendrier de révision.</Empty>
        ) : (
          <div className="flex flex-wrap gap-2">
            {dw.slice(0, 30).map((id) => (
              <span key={id} className="chip !text-sm">
                {getTerm(id)?.en}
              </span>
            ))}
            {dw.length > 30 && <span className="chip">+{dw.length - 30}</span>}
          </div>
        )}
      </div>

      <div className="card space-y-3">
        <h2 className="text-lg font-bold">📚 Notions et leçons à revoir</h2>
        {dl.length === 0 ? (
          <Empty>Aucune leçon à revoir pour le moment. Les leçons terminées reviennent à J+1, J+3, J+7 puis J+14 ; un test sous 70 % déclenche aussi une révision.</Empty>
        ) : (
          <ul className="space-y-2">
            {dl.map((x) => {
              const l = getLesson(x.id)!;
              return (
                <li key={x.id} className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-800">
                  <div className="min-w-0">
                    <p className="font-semibold">
                      {x.id.replace("-", ".")} · {l.title}
                    </p>
                    <p className="muted">{x.reason}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link className="btn-soft" href={`/learn/${x.id}`}>
                      Relire la leçon
                    </Link>
                    <button className="btn-good" onClick={() => markLessonReviewed(x.id)}>
                      ✓ Révisée
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="card">
        <h2 className="mb-3 text-lg font-bold">📅 Calendrier à venir</h2>
        {byDay.length === 0 ? (
          <p className="muted">Pas encore de révision planifiée.</p>
        ) : (
          <ul className="grid gap-2 sm:grid-cols-2">
            {byDay.slice(0, 8).map(([d, n]) => (
              <li key={d} className="flex justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm dark:bg-slate-800/60">
                <span>Dans {d} jour(s)</span>
                <b>{n} mot(s)</b>
              </li>
            ))}
          </ul>
        )}
        <p className="muted mt-3">
          Paliers : {SRS_INTERVALS.map((d) => `J+${d}`).join(" → ")} → maîtrisé. {ALL_TERMS.length} mots disponibles.
        </p>
      </div>
    </div>
  );
}
