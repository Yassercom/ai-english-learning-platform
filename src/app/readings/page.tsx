"use client";
import { useEffect, useMemo, useState } from "react";
import { READINGS, READING_TYPES, type Reading, type ReadingType } from "@/data/readings";
import type { Exercise } from "@/data/types";
import { ALL_TERMS } from "@/lib/content";
import ExerciseRunner from "@/components/ExerciseRunner";
import { AudioButton, Empty } from "@/components/ui";

type Tab = ReadingType | "news";

function ReadingCard({ r }: { r: Reading }) {
  const [open, setOpen] = useState(false);
  const [fr, setFr] = useState(false);
  const exercises: Exercise[] = useMemo(
    () => r.questions.map((q, i) => ({ kind: "reading" as const, id: `${r.id}-${i}`, prompt: q[0], context: r.en, options: q[1], answer: q[2], explain: q[3] })),
    [r],
  );
  return (
    <article className="card space-y-3">
      <button className="flex w-full items-start justify-between gap-3 text-left" onClick={() => setOpen(!open)} aria-expanded={open}>
        <div>
          <div className="mb-1 flex flex-wrap gap-1.5">
            <span className="chip">{r.level}</span>
            <span className="chip">{READING_TYPES[r.type].label.split(" (")[0]}</span>
          </div>
          <h3 className="text-lg font-bold">{r.title}</h3>
          <p className="muted mt-1">{r.summary}</p>
        </div>
        <span className="text-slate-400">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="space-y-4 border-t border-slate-200 pt-4 dark:border-slate-800">
          <div className="rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
            <p className="font-semibold">Source / référence</p>
            <p>{r.reference}</p>
            {r.url && (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-indigo-600 underline dark:text-indigo-300">
                Ouvrir la source officielle ↗
              </a>
            )}
            <p className="muted mt-1">ℹ️ {r.note}</p>
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <h4 className="font-bold">🇺🇸 English</h4>
              <AudioButton text={r.en} label="Écouter" />
            </div>
            <p className="leading-relaxed">{r.en}</p>
          </div>
          <div>
            <button className="btn-soft !py-1.5 text-xs" onClick={() => setFr(!fr)}>
              {fr ? "Masquer la traduction" : "🇫🇷 Afficher la traduction française"}
            </button>
            {fr && <p className="mt-2 rounded-xl bg-indigo-50 p-3 text-sm leading-relaxed dark:bg-indigo-500/10">{r.fr}</p>}
          </div>
          <div>
            <h4 className="mb-2 font-bold">Vocabulaire important</h4>
            <div className="flex flex-wrap gap-2">
              {r.vocab.map(([en, f]) => (
                <span key={en} className="chip !text-sm">
                  {en} — {f}
                  <AudioButton text={en} className="ml-1.5 !border-0 !px-1 !py-0" />
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-2 font-bold">Questions de compréhension</h4>
            <ExerciseRunner exercises={exercises} />
          </div>
        </div>
      )}
    </article>
  );
}

interface NewsItem {
  title: string;
  link: string;
  date: string;
  source: string;
}

function News() {
  const [items, setItems] = useState<NewsItem[] | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/news")
      .then((r) => r.json())
      .then((d) => {
        if (!alive) return;
        setItems(d.items ?? []);
        setErrors(d.errors ?? []);
      })
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, []);

  const spot = (title: string) => {
    const words = new Set(title.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/));
    return ALL_TERMS.filter((t) => {
      const c = t.en.replace(/\(.*?\)/g, "").split(" / ")[0].replace(/^to /, "").trim().toLowerCase();
      return c.length > 3 && !c.includes(" ") && words.has(c);
    }).filter((t, i, a) => a.findIndex((x) => x.en === t.en) === i).slice(0, 4);
  };

  return (
    <div className="space-y-4">
      <div className="card !bg-amber-50 text-sm dark:!bg-amber-500/10">
        <p className="font-semibold">📰 Actualités réelles, jamais inventées</p>
        <p className="mt-1">Cette liste est lue en direct depuis les flux RSS publics des sources indiquées. Chaque actualité affiche sa <b>date</b>, son <b>titre</b> et sa <b>source</b>, avec le lien vers l&apos;article original. Si un flux est inaccessible, rien n&apos;est remplacé par du faux contenu.</p>
      </div>
      <details className="card text-sm">
        <summary className="cursor-pointer font-semibold">Méthode : lire une actualité en anglais (5 questions)</summary>
        <ol className="mt-2 list-decimal space-y-1 pl-5">
          <li><b>Who?</b> Qui est concerné (entreprise, université, chercheurs) ?</li>
          <li><b>What?</b> Qu&apos;est-ce qui est annoncé ou découvert ?</li>
          <li><b>When / Where?</b> Quand et où ?</li>
          <li><b>Why does it matter?</b> Pourquoi est-ce important ?</li>
          <li><b>What is the evidence?</b> Quelle preuve, quelle source ? Distinguez fait, annonce commerciale et opinion.</li>
        </ol>
      </details>
      {failed && <Empty>Impossible de charger les actualités (connexion indisponible). Réessayez plus tard : aucune actualité de remplacement n&apos;est affichée.</Empty>}
      {!failed && items === null && <p className="muted">Chargement des actualités…</p>}
      {items && items.length === 0 && !failed && <Empty>Aucune actualité n&apos;a pu être récupérée pour l&apos;instant.</Empty>}
      <div className="space-y-3">
        {items?.map((n, i) => {
          const found = spot(n.title);
          return (
            <article key={i} className="card !p-4">
              <p className="muted">
                <time dateTime={n.date}>{new Date(n.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}</time> · <b>{n.source}</b>
              </p>
              <h3 className="mt-1 text-base font-bold">{n.title}</h3>
              {found.length > 0 && (
                <p className="mt-2 text-sm">
                  <span className="muted">Mots de votre dictionnaire : </span>
                  {found.map((t) => `${t.en} (${t.fr})`).join(" · ")}
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                <AudioButton text={n.title} label="Écouter le titre" />
                <a className="btn-soft !py-1 text-xs" href={n.link} target="_blank" rel="noopener noreferrer">
                  Lire l&apos;article ↗
                </a>
                <a className="btn-soft !py-1 text-xs" href={`https://translate.google.com/?sl=en&tl=fr&text=${encodeURIComponent(n.title)}&op=translate`} target="_blank" rel="noopener noreferrer">
                  Traduire le titre ↗
                </a>
              </div>
            </article>
          );
        })}
      </div>
      {errors.length > 0 && <p className="muted">Sources momentanément indisponibles : {errors.join(", ")}.</p>}
    </div>
  );
}

export default function ReadingsPage() {
  const [tab, setTab] = useState<Tab>("article");
  const tabs: [Tab, string][] = [...(Object.keys(READING_TYPES) as ReadingType[]).map((k) => [k, READING_TYPES[k].label] as [Tab, string]), ["news", "Actualités IA"]];
  return (
    <div className="space-y-5 fade-up">
      <div>
        <h1 className="h-page">Lectures &amp; actualités IA</h1>
        <p className="muted">Chaque lecture existe en anglais et en français, avec résumé, vocabulaire important et questions de compréhension.</p>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {tabs.map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition ${tab === k ? "bg-indigo-600 text-white" : "bg-white text-slate-600 shadow-sm hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-300"}`}>
            {l}
          </button>
        ))}
      </div>
      {tab === "news" ? (
        <News />
      ) : (
        <div className="space-y-4">
          <p className="muted">{READING_TYPES[tab].desc}</p>
          {READINGS.filter((r) => r.type === tab).map((r) => (
            <ReadingCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </div>
  );
}
