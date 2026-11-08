"use client";
import Link from "next/link";
import { useState } from "react";
import { MODULES } from "@/data/modules";
import { LESSONS, lessonsOfModule } from "@/lib/content";
import { useAppState } from "@/lib/store";
import { ProgressBar } from "@/components/ui";

export default function LearnPage() {
  const s = useAppState();
  const [open, setOpen] = useState<number | null>(null);
  const next = LESSONS.find((l) => !s.lessons[l.id]?.done);
  const cur = open ?? next?.moduleId ?? 1;

  return (
    <div className="space-y-6 fade-up">
      <div>
        <h1 className="h-page">Salle d&apos;étude</h1>
        <p className="muted">12 modules, 60 leçons. Chaque leçon se déroule étape par étape : cours, vocabulaire, expressions, dialogues, lecture, exercices, oral et test final.</p>
      </div>

      {next && (
        <Link href={`/learn/${next.id}`} className="card flex items-center justify-between gap-4 !bg-indigo-600 !text-white transition hover:!bg-indigo-700">
          <div>
            <p className="text-xs uppercase tracking-wide opacity-80">{Object.keys(s.lessons).length ? "Continuer" : "Commencer ici"}</p>
            <p className="text-lg font-bold">
              Leçon {next.id.replace("-", ".")} · {next.title}
            </p>
            <p className="text-sm opacity-90">{next.titleFr}</p>
          </div>
          <span className="text-3xl">→</span>
        </Link>
      )}

      <div className="space-y-3">
        {MODULES.map((m) => {
          const ls = lessonsOfModule(m.id);
          const done = ls.filter((l) => s.lessons[l.id]?.done).length;
          const started = ls.some((l) => s.lessons[l.id]);
          const isOpen = cur === m.id;
          return (
            <div key={m.id} className="card !p-0 overflow-hidden">
              <button type="button" onClick={() => setOpen(isOpen ? 0 : m.id)} className="flex w-full items-center gap-4 p-4 text-left" aria-expanded={isOpen}>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-2xl" style={{ background: `hsl(${m.hue} 80% 92%)` }}>
                  {m.icon}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-bold">
                      Module {m.id} · {m.title}
                    </p>
                    <span className="chip">{m.level}</span>
                    {done === 5 ? <span className="chip !bg-emerald-100 !text-emerald-800">Terminé</span> : started ? <span className="chip !bg-amber-100 !text-amber-800">En cours</span> : null}
                  </div>
                  <p className="muted truncate">{m.fr}</p>
                  <ProgressBar value={done} max={5} className="mt-2 !h-1.5" color="bg-emerald-500" />
                </div>
                <span className="text-slate-400">{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 p-3 dark:border-slate-800">
                  <p className="muted mb-2 px-2">{m.desc}</p>
                  <ul className="space-y-1">
                    {ls.map((l) => {
                      const st = s.lessons[l.id];
                      return (
                        <li key={l.id}>
                          <Link href={`/learn/${l.id}`} className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-slate-100 dark:hover:bg-slate-800">
                            <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-bold ${st?.done ? "bg-emerald-500 text-white" : st ? "bg-amber-400 text-white" : "bg-slate-200 text-slate-600 dark:bg-slate-700 dark:text-slate-200"}`}>{st?.done ? "✓" : l.index}</span>
                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold">{l.title}</span>
                              <span className="block truncate text-xs text-slate-500">{l.titleFr}</span>
                            </span>
                            {st?.testScore !== undefined && <span className={`chip ${st.testScore >= 70 ? "!bg-emerald-100 !text-emerald-800" : "!bg-rose-100 !text-rose-800"}`}>Test {st.testScore} %</span>}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                  <Link href={`/exams/module-${m.id}`} className="btn-soft mt-3 w-full">
                    🏆 Passer l&apos;examen du module {m.id}
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
