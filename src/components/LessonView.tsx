"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { getLesson, getModule, nextLessonId, prevLessonId } from "@/lib/content";
import { buildLessonExercises, buildLessonTest, readingExercises } from "@/lib/exercises";
import { completeLesson, introduceWords, saveLessonTest, setLessonStep, useAppState } from "@/lib/store";
import { AudioButton, PronGuide } from "./ui";
import ExerciseRunner from "./ExerciseRunner";
import Flashcards from "./Flashcards";
import Recorder from "./Recorder";

const STEPS = ["Cours", "Vocabulaire", "Expressions", "Dialogues", "Lecture", "Exercices", "Oral", "Test final"];

export function Dialogue({ d }: { d: { title: string; lines: { who: string; en: string; fr: string }[] } }) {
  const speakers = Array.from(new Set(d.lines.map((l) => l.who)));
  const [showFr, setShowFr] = useState(true);
  const [role, setRole] = useState<string | null>(null);
  const [revealed, setRevealed] = useState<number[]>([]);
  return (
    <div className="card space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className="font-bold">{d.title}</h4>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <label className="flex items-center gap-1.5">
            <input type="checkbox" checked={showFr} onChange={(e) => setShowFr(e.target.checked)} /> Traduction
          </label>
          <select className="rounded-lg border border-slate-300 bg-white px-2 py-1 dark:border-slate-700 dark:bg-slate-900" value={role ?? ""} onChange={(e) => { setRole(e.target.value || null); setRevealed([]); }} aria-label="Mode pratique">
            <option value="">Lecture simple</option>
            {speakers.map((sp) => (
              <option key={sp} value={sp}>
                Je joue : {sp}
              </option>
            ))}
          </select>
        </div>
      </div>
      {role && <p className="muted">Mode pratique : vous jouez <b>{role}</b>. Dites votre réplique à voix haute, puis révélez-la pour vérifier. Les autres répliques s&apos;écoutent avec 🔊.</p>}
      <div className="space-y-2">
        {d.lines.map((l, i) => {
          const mine = role === l.who;
          const hidden = mine && !revealed.includes(i);
          return (
            <div key={i} className={`flex gap-2 ${speakers.indexOf(l.who) % 2 ? "flex-row-reverse" : ""}`}>
              <div className={`max-w-[90%] rounded-2xl px-4 py-2.5 text-sm ${speakers.indexOf(l.who) % 2 ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800"}`}>
                <p className="text-xs font-bold opacity-70">{l.who}</p>
                {hidden ? (
                  <button className="mt-1 rounded-lg bg-white/80 px-2 py-1 text-xs font-semibold text-indigo-700" onClick={() => setRevealed([...revealed, i])}>
                    🎤 À vous de parler — révéler
                  </button>
                ) : (
                  <>
                    <p className="font-medium">{l.en}</p>
                    {showFr && <p className="mt-0.5 text-xs opacity-80">{l.fr}</p>}
                  </>
                )}
              </div>
              {!hidden && <AudioButton text={l.en} className="self-center" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function LessonView({ id }: { id: string }) {
  const lesson = getLesson(id)!;
  const mod = getModule(lesson.moduleId)!;
  const s = useAppState();
  const st = s.lessons[id];
  const [stepLocal, setStepLocal] = useState<number | null>(null);
  const step = stepLocal ?? Math.min(st?.step ?? 0, STEPS.length - 1);
  const [lang, setLang] = useState<"both" | "en" | "fr">("both");
  const [cards, setCards] = useState(false);
  const [exSeed, setExSeed] = useState(1);
  const [testSeed, setTestSeed] = useState(1);
  const [testScore, setTestScore] = useState<{ s: number; t: number } | null>(null);

  const exercises = useMemo(() => buildLessonExercises(lesson, exSeed), [lesson, exSeed]);
  const test = useMemo(() => buildLessonTest(lesson, testSeed), [lesson, testSeed]);
  const readQs = useMemo(() => readingExercises(lesson), [lesson]);
  const next = nextLessonId(id);
  const prev = prevLessonId(id);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [step, id]);
  useEffect(() => {
    if (step === 1) introduceWords(lesson.terms.map((t) => t.id));
  }, [step, lesson]);

  const go = (n: number) => {
    const v = Math.max(0, Math.min(STEPS.length - 1, n));
    setStepLocal(v);
    setLessonStep(id, v);
  };

  const readingTerms = lesson.terms.filter((t) => {
    const c = t.en.replace(/\(.*?\)/g, "").split(" / ")[0].replace(/^to /, "").trim().toLowerCase();
    return c.length > 3 && lesson.reading.en.toLowerCase().includes(c);
  });

  return (
    <div className="space-y-5 fade-up">
      <div>
        <Link href="/learn" className="muted hover:underline">
          ← Module {mod.id} · {mod.title}
        </Link>
        <div className="mt-1 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="h-page">
              {lesson.id.replace("-", ".")} · {lesson.title}
            </h1>
            <p className="muted">{lesson.titleFr}</p>
          </div>
          <button className={st?.done ? "btn-soft" : "btn-good"} onClick={() => completeLesson(id, !st?.done)}>
            {st?.done ? "✓ Terminée (annuler)" : "Marquer comme terminée"}
          </button>
        </div>
      </div>

      <nav className="flex gap-1.5 overflow-x-auto pb-1" aria-label="Étapes de la leçon">
        {STEPS.map((l, i) => (
          <button key={l} onClick={() => go(i)} className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition ${i === step ? "bg-indigo-600 text-white" : i < step ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/30 text-[10px]">{i + 1}</span>
            {l}
          </button>
        ))}
      </nav>

      <section className="space-y-4" key={step}>
        {step === 0 && (
          <>
            <div className="card !bg-indigo-50 dark:!bg-indigo-500/10">
              <p className="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-300">Objectif de la leçon</p>
              <p className="mt-1">{lesson.goal}</p>
            </div>
            <div className="flex gap-2 text-xs">
              {(["both", "en", "fr"] as const).map((k) => (
                <button key={k} onClick={() => setLang(k)} className={`rounded-full px-3 py-1.5 font-semibold ${lang === k ? "bg-indigo-600 text-white" : "bg-slate-100 dark:bg-slate-800"}`}>
                  {k === "both" ? "English + Français" : k === "en" ? "English" : "Français"}
                </button>
              ))}
            </div>
            <div className={`grid gap-4 ${lang === "both" ? "md:grid-cols-2" : ""}`}>
              {lang !== "fr" && (
                <div className="card">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-bold">🇺🇸 Mini-course</h3>
                    <AudioButton text={lesson.course.en} label="Écouter" />
                  </div>
                  <p className="leading-relaxed">{lesson.course.en}</p>
                </div>
              )}
              {lang !== "en" && (
                <div className="card">
                  <h3 className="mb-2 font-bold">🇫🇷 Traduction complète</h3>
                  <p className="leading-relaxed">{lesson.course.fr}</p>
                </div>
              )}
            </div>
            <div className="card !border-amber-300 !bg-amber-50 dark:!border-amber-500/40 dark:!bg-amber-500/10">
              <h3 className="font-bold">🟠 Explications en darija (notions difficiles)</h3>
              <ul className="mt-2 space-y-2 text-sm">
                {lesson.darija.map((d, i) => (
                  <li key={i}>
                    <b>{d.concept} :</b> {d.text}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {step === 1 && (
          <>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="muted">25 nouveaux termes. Ils sont ajoutés à votre dictionnaire et programmés en révision à J+1, J+3, J+7 et J+14.</p>
              <button className="btn-soft" onClick={() => setCards(!cards)}>
                {cards ? "📋 Voir la liste" : "🃏 Étudier en flashcards"}
              </button>
            </div>
            {cards ? (
              <Flashcards terms={lesson.terms} onDone={() => setCards(false)} doneLabel="Retour à la liste" />
            ) : (
              <>
                <PronGuide />
                <div className="card !p-0 divide-y divide-slate-200 dark:divide-slate-800">
                  {lesson.terms.map((t, i) => (
                    <div key={t.id} className="flex items-center gap-3 px-4 py-3">
                      <span className="w-6 text-right text-xs text-slate-400">{i + 1}</span>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold">{t.en}</p>
                        <p className="text-sm text-indigo-600 dark:text-indigo-300">/ {t.pron} /</p>
                      </div>
                      <p className="max-w-[45%] text-right text-sm">{t.fr}</p>
                      <AudioButton text={t.en.replace(/\(.*?\)/g, "")} />
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <p className="muted">10 expressions utiles pour des situations réelles. Écoutez, puis répétez à voix haute.</p>
            {lesson.expressions.map((e, i) => (
              <div key={i} className="card flex items-center gap-3 !p-4">
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{e.en}</p>
                  <p className="muted">{e.fr}</p>
                </div>
                <AudioButton text={e.en} />
              </div>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <p className="muted">Deux dialogues réalistes. Passez en « mode pratique » pour jouer un rôle.</p>
            {lesson.dialogues.map((d, i) => (
              <Dialogue key={i} d={d} />
            ))}
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="card">
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold">📖 {lesson.reading.title}</h3>
                <AudioButton text={lesson.reading.en} label="Écouter" />
              </div>
              <p className="leading-relaxed">{lesson.reading.en}</p>
              <details className="mt-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                <summary className="cursor-pointer text-sm font-semibold">Voir la traduction française</summary>
                <p className="mt-2 text-sm leading-relaxed">{lesson.reading.fr}</p>
              </details>
            </div>
            {readingTerms.length > 0 && (
              <div className="card">
                <h4 className="mb-2 font-bold">Vocabulaire important du texte</h4>
                <div className="flex flex-wrap gap-2">
                  {readingTerms.map((t) => (
                    <span key={t.id} className="chip !text-sm">
                      {t.en} — {t.fr}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div>
              <h4 className="mb-2 font-bold">Compréhension écrite</h4>
              <ExerciseRunner exercises={readQs} />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-3">
            <p className="muted">{exercises.length} exercices variés. Chaque réponse est suivie d&apos;une correction expliquée.</p>
            <ExerciseRunner key={exSeed} exercises={exercises} onRestart={() => setExSeed(exSeed + 1)} />
          </div>
        )}

        {step === 6 && (
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold">🎙️ Activité orale</h3>
              <p className="mt-1">{lesson.speaking}</p>
              <div className="mt-3">
                <Recorder />
              </div>
              <div className="mt-3 rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
                <p className="font-semibold">Auto-évaluation (honnête !)</p>
                <p className="muted">Réécoutez votre voix, puis comparez avec le modèle 🔊. L&apos;application ne note pas votre prononciation : seule votre oreille, ou un enseignant, peut le faire.</p>
              </div>
            </div>
            <div className="card">
              <h3 className="font-bold">🔊 Exercice de prononciation</h3>
              <p className="mt-1 text-sm">💡 {lesson.pron.tip}</p>
              <p className="muted mt-2">Pour chaque mot : écoutez, répétez 3 fois lentement, puis à vitesse normale.</p>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {lesson.pron.words.map((w) => (
                  <div key={w.id} className="flex items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-slate-700">
                    <div className="min-w-0 flex-1">
                      <p className="font-bold">{w.en}</p>
                      {w.pron && <p className="text-sm text-indigo-600 dark:text-indigo-300">/ {w.pron} /</p>}
                    </div>
                    <AudioButton text={w.en.replace(/\(.*?\)/g, "")} rate={0.7} label="Lent" />
                    <AudioButton text={w.en.replace(/\(.*?\)/g, "")} label="Normal" />
                  </div>
                ))}
              </div>
            </div>
            <Link href="/speaking" className="btn-soft">
              Plus d&apos;exercices dans « Oral &amp; prononciation » →
            </Link>
          </div>
        )}

        {step === 7 && (
          <div className="space-y-4">
            <div className="card">
              <h3 className="font-bold">📝 Test final de la leçon</h3>
              <p className="muted">10 questions mélangeant vocabulaire, notions techniques, lecture et correction de phrases. La correction expliquée apparaît à la fin. {st?.testScore !== undefined && `Dernier score : ${st.testScore} %.`}</p>
            </div>
            <ExerciseRunner
              key={testSeed}
              exercises={test}
              mode="test"
              restartLabel="Repasser un test"
              onRestart={() => {
                setTestSeed(testSeed + 1);
                setTestScore(null);
              }}
              onFinish={(r) => {
                saveLessonTest(id, r.score, r.total);
                setTestScore({ s: r.score, t: r.total });
              }}
            />
            {testScore && (
              <div className={`card fade-up ${testScore.s / testScore.t >= 0.7 ? "!border-emerald-400" : "!border-amber-400"}`}>
                <p className="font-bold">{testScore.s / testScore.t >= 0.7 ? "✅ Seuil de 70 % atteint : vous pouvez terminer la leçon." : "⚠️ Moins de 70 % : relisez le cours et le vocabulaire, puis repassez le test. La leçon est ajoutée à vos révisions."}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {!st?.done && (
                    <button className="btn-good" onClick={() => completeLesson(id, true)}>
                      Marquer la leçon comme terminée
                    </button>
                  )}
                  {next && (
                    <Link href={`/learn/${next}`} className="btn-primary">
                      Leçon suivante →
                    </Link>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      <div className="flex items-center justify-between gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
        {step > 0 ? (
          <button className="btn-soft" onClick={() => go(step - 1)}>
            ← {STEPS[step - 1]}
          </button>
        ) : prev ? (
          <Link className="btn-soft" href={`/learn/${prev}`}>
            ← Leçon précédente
          </Link>
        ) : (
          <span />
        )}
        {step < STEPS.length - 1 ? (
          <button className="btn-primary" onClick={() => go(step + 1)}>
            {STEPS[step + 1]} →
          </button>
        ) : next ? (
          <Link className="btn-primary" href={`/learn/${next}`}>
            Leçon suivante →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
