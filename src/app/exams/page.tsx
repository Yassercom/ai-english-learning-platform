"use client";
import Link from "next/link";
import { listExams } from "@/lib/exercises";
import { useAppState } from "@/lib/store";

export default function ExamsPage() {
  const s = useAppState();
  const exams = listExams();
  const last = (id: string) => s.exams.find((e) => e.id === id);
  const groups = [1, 2, 3, 4];
  return (
    <div className="space-y-6 fade-up">
      <div>
        <h1 className="h-page">Examens</h1>
        <p className="muted">Un test final conclut chaque leçon (dans la leçon). Ici : un examen après chaque module et une évaluation cumulative après chaque groupe de 3 modules. Les résultats détaillés donnent des recommandations de révision.</p>
      </div>
      {groups.map((g) => (
        <section key={g} className="space-y-3">
          <h2 className="font-bold">
            Modules {g * 3 - 2} à {g * 3}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {exams
              .filter((e) => (e.kind === "module" ? Math.ceil(Number(e.id.split("-")[1]) / 3) === g : e.id === `cumulative-${g}`))
              .map((e) => {
                const r = last(e.id);
                const done = e.lessonIds.filter((id) => s.lessons[id]?.done).length;
                return (
                  <Link key={e.id} href={`/exams/${e.id}`} className={`card transition hover:border-indigo-400 ${e.kind === "cumulative" ? "sm:col-span-2 !bg-indigo-50 dark:!bg-indigo-500/10" : ""}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-bold">{e.kind === "cumulative" ? "🏆 " : "📝 "}{e.title}</p>
                        <p className="muted">{e.desc}</p>
                        <p className="muted mt-1">
                          Leçons terminées : {done} / {e.lessonIds.length}
                        </p>
                      </div>
                      {r ? <span className={`chip ${r.score / r.total >= 0.7 ? "!bg-emerald-100 !text-emerald-800" : "!bg-rose-100 !text-rose-800"}`}>{Math.round((r.score / r.total) * 100)} %</span> : <span className="chip">Non passé</span>}
                    </div>
                  </Link>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
