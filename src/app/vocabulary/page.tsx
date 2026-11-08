"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ALL_TERMS, CAT_SHORT, LESSONS } from "@/lib/content";
import { MODULES } from "@/data/modules";
import { dueWords, setWordStatus, toggleFavorite, useAppState, type WordStatus } from "@/lib/store";
import { rng, shuffle } from "@/lib/exercises";
import { AudioButton, Empty, PronGuide } from "@/components/ui";
import Flashcards from "@/components/Flashcards";

const STATUS_LABEL: Record<WordStatus, string> = { new: "Non maîtrisé", review: "À revoir", mastered: "Maîtrisé" };
const STATUS_COLOR: Record<WordStatus, string> = {
  new: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  review: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
  mastered: "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
};
const CATS = Array.from(new Set(ALL_TERMS.map((t) => t.cat)));

function Dictionary() {
  const s = useAppState();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const [mod, setMod] = useState("all");
  const [status, setStatus] = useState<"all" | WordStatus | "mine" | "fav">("all");
  const [limit, setLimit] = useState(40);

  const list = useMemo(() => {
    const nq = q.trim().toLowerCase();
    return ALL_TERMS.filter((t) => {
      const w = s.words[t.id];
      const st: WordStatus = w?.status ?? "new";
      if (cat !== "all" && t.cat !== cat) return false;
      if (mod !== "all" && t.moduleId !== Number(mod)) return false;
      if (status === "mine" && !w) return false;
      if (status === "fav" && !s.favorites.includes(t.id)) return false;
      if ((status === "new" || status === "review" || status === "mastered") && st !== status) return false;
      if (nq && !(t.en.toLowerCase().includes(nq) || t.fr.toLowerCase().includes(nq))) return false;
      return true;
    });
  }, [q, cat, mod, status, s.words, s.favorites]);

  return (
    <div className="space-y-4">
      <div className="card space-y-3">
        <input className="input" placeholder="Rechercher un mot en anglais ou en français…" value={q} onChange={(e) => { setQ(e.target.value); setLimit(40); }} aria-label="Rechercher" />
        <div className="grid gap-2 sm:grid-cols-3">
          <select className="input" value={cat} onChange={(e) => { setCat(e.target.value); setLimit(40); }} aria-label="Catégorie">
            <option value="all">Toutes les catégories</option>
            {CATS.map((c) => (
              <option key={c} value={c}>
                {CAT_SHORT[c] ?? c}
              </option>
            ))}
          </select>
          <select className="input" value={mod} onChange={(e) => { setMod(e.target.value); setLimit(40); }} aria-label="Module">
            <option value="all">Tous les modules</option>
            {MODULES.map((m) => (
              <option key={m.id} value={m.id}>
                Module {m.id} · {m.title}
              </option>
            ))}
          </select>
          <select className="input" value={status} onChange={(e) => { setStatus(e.target.value as typeof status); setLimit(40); }} aria-label="Statut">
            <option value="all">Tous les statuts</option>
            <option value="mine">Mon dictionnaire (mots déjà vus)</option>
            <option value="fav">⭐ Favoris</option>
            <option value="new">Non maîtrisé</option>
            <option value="review">À revoir</option>
            <option value="mastered">Maîtrisé</option>
          </select>
        </div>
        <p className="muted">
          {list.length} mot(s) sur {ALL_TERMS.length}. Les mots sont ajoutés à votre dictionnaire quand vous les étudiez dans une leçon ou une flashcard.
        </p>
      </div>

      {list.length === 0 ? (
        <Empty>Aucun mot ne correspond à ces filtres.</Empty>
      ) : (
        <div className="space-y-2">
          {list.slice(0, limit).map((t) => {
            const w = s.words[t.id];
            const st: WordStatus = w?.status ?? "new";
            return (
              <div key={t.id} className="card !p-4">
                <div className="flex flex-wrap items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-bold">{t.en}</span>
                      <AudioButton text={t.en.replace(/\(.*?\)/g, "")} />
                      <span className="text-sm text-indigo-600 dark:text-indigo-300">/ {t.pron} /</span>
                    </div>
                    <p className="text-sm">{t.fr}</p>
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      <span className="chip">{CAT_SHORT[t.cat] ?? t.cat}</span>
                      <Link href={`/learn/${t.lessonId}`} className="chip hover:underline">
                        Leçon {t.lessonId.replace("-", ".")}
                      </Link>
                      <span className={`chip ${STATUS_COLOR[st]}`}>{STATUS_LABEL[st]}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className={`rounded-lg px-2 py-1 text-lg ${s.favorites.includes(t.id) ? "" : "opacity-30 grayscale"}`} onClick={() => toggleFavorite(t.id)} aria-label="Favori" title="Favori">
                      ⭐
                    </button>
                    <select className="rounded-lg border border-slate-300 bg-white px-2 py-1.5 text-xs dark:border-slate-700 dark:bg-slate-900" value={st} onChange={(e) => setWordStatus(t.id, e.target.value as WordStatus)} aria-label="Statut du mot">
                      <option value="new">Non maîtrisé</option>
                      <option value="review">À revoir</option>
                      <option value="mastered">Maîtrisé</option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
          {list.length > limit && (
            <button className="btn-soft w-full" onClick={() => setLimit(limit + 60)}>
              Afficher plus ({list.length - limit} restants)
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function FlashcardsTab() {
  const s = useAppState();
  const [scope, setScope] = useState("due");
  const [value, setValue] = useState("");
  const [deck, setDeck] = useState<typeof ALL_TERMS | null>(null);
  const [seed, setSeed] = useState(1);

  const build = (sd: number) => {
    let pool = ALL_TERMS;
    if (scope === "due") pool = ALL_TERMS.filter((t) => dueWords(s).includes(t.id));
    else if (scope === "lesson") pool = ALL_TERMS.filter((t) => t.lessonId === value);
    else if (scope === "module") pool = ALL_TERMS.filter((t) => t.moduleId === Number(value));
    else if (scope === "cat") pool = ALL_TERMS.filter((t) => t.cat === value);
    else if (scope === "fav") pool = ALL_TERMS.filter((t) => s.favorites.includes(t.id));
    else if (scope === "review") pool = ALL_TERMS.filter((t) => s.words[t.id]?.status === "review");
    else if (scope === "mine") pool = ALL_TERMS.filter((t) => s.words[t.id]);
    setDeck(shuffle(pool, rng(sd * 7919 + pool.length)).slice(0, 20));
  };

  if (deck) {
    return (
      <div className="space-y-3">
        <button className="btn-soft !py-1.5 text-xs" onClick={() => setDeck(null)}>
          ← Changer de série
        </button>
        <Flashcards
          terms={deck}
          onDone={() => {
            setSeed(seed + 1);
            build(seed + 1);
          }}
          doneLabel="Série suivante (20 nouvelles cartes)"
        />
      </div>
    );
  }
  const due = dueWords(s).length;
  return (
    <div className="card space-y-4">
      <div>
        <h3 className="font-bold">Choisir une série de flashcards</h3>
        <p className="muted">Retournez la carte, puis dites si vous connaissiez le mot. Vos réponses alimentent la révision espacée J+1, J+3, J+7, J+14.</p>
      </div>
      <select className="input" value={scope} onChange={(e) => { setScope(e.target.value); setValue(""); }}>
        <option value="due">🔁 Mots à réviser aujourd&apos;hui ({due})</option>
        <option value="review">Mots marqués « à revoir »</option>
        <option value="mine">Mon dictionnaire</option>
        <option value="fav">⭐ Favoris</option>
        <option value="lesson">Une leçon précise</option>
        <option value="module">Un module</option>
        <option value="cat">Une catégorie</option>
        <option value="all">Tous les mots (aléatoire)</option>
      </select>
      {scope === "lesson" && (
        <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="">— Choisir une leçon —</option>
          {LESSONS.map((l) => (
            <option key={l.id} value={l.id}>
              {l.id.replace("-", ".")} · {l.title}
            </option>
          ))}
        </select>
      )}
      {scope === "module" && (
        <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="">— Choisir un module —</option>
          {MODULES.map((m) => (
            <option key={m.id} value={m.id}>
              Module {m.id} · {m.title}
            </option>
          ))}
        </select>
      )}
      {scope === "cat" && (
        <select className="input" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="">— Choisir une catégorie —</option>
          {CATS.map((c) => (
            <option key={c} value={c}>
              {CAT_SHORT[c] ?? c}
            </option>
          ))}
        </select>
      )}
      <button className="btn-primary" disabled={["lesson", "module", "cat"].includes(scope) && !value} onClick={() => build(seed)}>
        Commencer
      </button>
    </div>
  );
}

export default function VocabularyPage() {
  const [tab, setTab] = useState<"dict" | "cards">("dict");
  return (
    <div className="space-y-5 fade-up">
      <div>
        <h1 className="h-page">Vocabulaire</h1>
        <p className="muted">1 500 termes avec traduction, prononciation américaine et audio. Votre dictionnaire personnel se remplit au fil des leçons.</p>
      </div>
      <PronGuide />
      <div className="flex gap-2">
        {(
          [
            ["dict", "📖 Dictionnaire"],
            ["cards", "🃏 Flashcards"],
          ] as const
        ).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`btn ${tab === k ? "bg-indigo-600 text-white" : "btn-soft"}`}>
            {l}
          </button>
        ))}
      </div>
      {tab === "dict" ? <Dictionary /> : <FlashcardsTab />}
    </div>
  );
}

