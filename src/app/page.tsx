"use client";
import Link from "next/link";
import { MODULES } from "@/data/modules";
import { LESSONS, getLesson, lessonsOfModule } from "@/lib/content";
import { dayKey, dueLessons, dueWords, stats, streak, useAppState } from "@/lib/store";
import { ProgressBar, Ring } from "@/components/ui";

export default function Dashboard() {
  const s = useAppState();
  const st = stats(s);
  const today = s.activity[dayKey()] ?? { words: 0, exercises: 0, correct: 0, lessons: 0 };
  const next = LESSONS.find((l) => !s.lessons[l.id]?.done);
  const dw = dueWords(s);
  const dl = dueLessons(s);
  const tests = LESSONS.filter((l) => s.lessons[l.id]?.testScore !== undefined)
    .sort((a, b) => (s.lessons[b.id].testCount ?? 0) - (s.lessons[a.id].testCount ?? 0))
    .slice(0, 6);
  const avgTest = (() => {
    const v = LESSONS.map((l) => s.lessons[l.id]?.testScore).filter((x): x is number => x !== undefined);
    return v.length ? Math.round(v.reduce((a, b) => a + b, 0) / v.length) : null;
  })();
  const goals = [
    { label: "Mots étudiés ou révisés", v: today.words, max: s.dailyGoal.words, icon: "🗂️" },
    { label: "Exercices réalisés", v: today.exercises, max: s.dailyGoal.exercises, icon: "✏️" },
    { label: "Leçon terminée", v: today.lessons, max: s.dailyGoal.lessons, icon: "📚" },
  ];
  const modulesDone = MODULES.filter((m) => lessonsOfModule(m.id).every((l) => s.lessons[l.id]?.done)).length;
  const modulesCurrent = MODULES.filter((m) => lessonsOfModule(m.id).some((l) => s.lessons[l.id]) && !lessonsOfModule(m.id).every((l) => s.lessons[l.id]?.done)).length;

  return (
    <div className="space-y-6 fade-up">
      <div>
        <h1 className="h-page">Bonjour 👋</h1>
        <p className="muted">Welcome back! Quelques minutes par jour suffisent : la régularité compte plus que la durée.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card flex items-center gap-4 md:col-span-1">
          <Ring value={(st.doneLessons / st.totalLessons) * 100} />
          <div>
            <p className="text-sm font-semibold">Progression globale</p>
            <p className="muted">
              {st.doneLessons} / {st.totalLessons} leçons
            </p>
            <p className="muted">
              {modulesDone} module(s) terminé(s) · {modulesCurrent} en cours
            </p>
          </div>
        </div>
        <div className="card md:col-span-2">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              ["Mots appris", st.learned, `/ ${st.totalWords}`],
              ["Mots maîtrisés", st.mastered, ""],
              ["Série (jours)", streak(s), "🔥"],
              ["Moyenne des tests", avgTest === null ? "—" : `${avgTest} %`, ""],
            ].map(([l, v, sub]) => (
              <div key={l as string}>
                <p className="text-2xl font-bold">
                  {v} <span className="text-sm font-medium text-slate-400">{sub}</span>
                </p>
                <p className="muted">{l}</p>
              </div>
            ))}
          </div>
          <ProgressBar value={st.learned} max={st.totalWords} className="mt-4" color="bg-emerald-500" />
          <p className="muted mt-1">Vocabulaire découvert : {Math.round((st.learned / st.totalWords) * 100)} %</p>
        </div>
      </div>

      {next && (
        <Link href={`/learn/${next.id}`} className="card flex items-center justify-between gap-4 !bg-indigo-600 !text-white transition hover:!bg-indigo-700">
          <div>
            <p className="text-xs uppercase tracking-wide opacity-80">{st.doneLessons === 0 && Object.keys(s.lessons).length === 0 ? "Commencer" : "Continuer l'apprentissage"}</p>
            <p className="text-lg font-bold">
              Leçon {next.id.replace("-", ".")} · {next.title}
            </p>
            <p className="text-sm opacity-90">{next.titleFr}</p>
          </div>
          <span className="text-3xl">→</span>
        </Link>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-3 font-bold">🎯 Objectifs du jour</h2>
          <div className="space-y-3">
            {goals.map((g) => (
              <div key={g.label}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>
                    {g.icon} {g.label}
                  </span>
                  <span className="font-semibold">
                    {Math.min(g.v, g.max)} / {g.max} {g.v >= g.max && "✅"}
                  </span>
                </div>
                <ProgressBar value={g.v} max={g.max} color={g.v >= g.max ? "bg-emerald-500" : "bg-indigo-600"} />
              </div>
            ))}
          </div>
          <Link href="/settings" className="muted mt-3 inline-block underline">
            Modifier mes objectifs
          </Link>
        </div>

        <div className="card">
          <h2 className="mb-3 font-bold">🔁 À réviser</h2>
          {dw.length === 0 && dl.length === 0 ? (
            <p className="muted">Rien à réviser pour le moment. Les mots étudiés réapparaîtront à J+1, J+3, J+7 et J+14.</p>
          ) : (
            <div className="space-y-2 text-sm">
              {dw.length > 0 && (
                <p>
                  <b>{dw.length}</b> mot(s) à réviser aujourd&apos;hui.
                </p>
              )}
              {dl.slice(0, 4).map((x) => (
                <p key={x.id}>
                  <Link href={`/learn/${x.id}`} className="font-semibold text-indigo-600 hover:underline dark:text-indigo-300">
                    {x.id.replace("-", ".")} · {getLesson(x.id)?.title}
                  </Link>
                  <span className="muted block">{x.reason}</span>
                </p>
              ))}
            </div>
          )}
          <Link href="/review" className="btn-primary mt-4 w-full">
            Ouvrir les révisions
          </Link>
        </div>
      </div>

      <div className="card">
        <h2 className="mb-3 font-bold">📚 Modules</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {MODULES.map((m) => {
            const ls = lessonsOfModule(m.id);
            const d = ls.filter((l) => s.lessons[l.id]?.done).length;
            const started = ls.some((l) => s.lessons[l.id]);
            return (
              <Link key={m.id} href="/learn" className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 transition hover:border-indigo-400 dark:border-slate-800">
                <span className="text-2xl">{m.icon}</span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">
                    {m.id}. {m.title}
                  </p>
                  <ProgressBar value={d} max={5} className="mt-1.5 !h-1.5" color="bg-emerald-500" />
                </div>
                <span className={`chip ${d === 5 ? "!bg-emerald-100 !text-emerald-800" : started ? "!bg-amber-100 !text-amber-800" : ""}`}>{d === 5 ? "Terminé" : started ? "En cours" : `${d}/5`}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="mb-3 font-bold">📝 Résultats des tests de leçon</h2>
          {tests.length === 0 ? (
            <p className="muted">Aucun test passé pour l&apos;instant. Chaque leçon se termine par un test de 10 questions.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {tests.map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-3">
                  <Link href={`/learn/${l.id}`} className="truncate hover:underline">
                    {l.id.replace("-", ".")} · {l.title}
                  </Link>
                  <span className={`chip ${s.lessons[l.id].testScore! >= 70 ? "!bg-emerald-100 !text-emerald-800" : "!bg-rose-100 !text-rose-800"}`}>{s.lessons[l.id].testScore} %</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="card">
          <h2 className="mb-3 font-bold">🏆 Examens</h2>
          {s.exams.length === 0 ? (
            <p className="muted">Aucun examen passé. Un examen est proposé après chaque module et chaque groupe de 3 modules.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {s.exams.slice(0, 6).map((e, i) => (
                <li key={i} className="flex items-center justify-between gap-3">
                  <Link href={`/exams/${e.id}`} className="truncate hover:underline">
                    {e.id.startsWith("module") ? `Module ${e.id.split("-")[1]}` : `Cumulatif ${e.id.split("-")[1]}`} · {new Date(e.date).toLocaleDateString("fr-FR")}
                  </Link>
                  <span className={`chip ${e.score / e.total >= 0.7 ? "!bg-emerald-100 !text-emerald-800" : "!bg-rose-100 !text-rose-800"}`}>{Math.round((e.score / e.total) * 100)} %</span>
                </li>
              ))}
            </ul>
          )}
          <Link href="/exams" className="btn-soft mt-4 w-full">
            Voir tous les examens
          </Link>
        </div>
      </div>
    </div>
  );
}
