"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import type { Term } from "@/data/types";
import { rateWord } from "@/lib/store";
import { AudioButton, ProgressBar } from "./ui";

export default function Flashcards({ terms, onDone, doneLabel = "Terminer" }: { terms: Term[]; onDone?: () => void; doneLabel?: string }) {
  const [queue, setQueue] = useState<Term[]>(terms);
  const [flipped, setFlipped] = useState(false);
  const [reverse, setReverse] = useState(false);
  const [known, setKnown] = useState(0);
  const [again, setAgain] = useState(0);
  const [retried, setRetried] = useState<string[]>([]);
  const total = terms.length;
  const card = queue[0];

  const answer = (ok: boolean) => {
    if (!card) return;
    rateWord(card.id, ok);
    if (ok) setKnown((k) => k + 1);
    else {
      setAgain((k) => k + 1);
    }
    setFlipped(false);
    setQueue((q) => {
      const [first, ...rest] = q;
      if (!ok && !retried.includes(first.id)) return [...rest, first];
      return rest;
    });
    if (!ok && card && !retried.includes(card.id)) setRetried((r) => [...r, card.id]);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement)?.tagName === "INPUT") return;
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && e.key === "1") answer(false);
      else if (flipped && e.key === "2") answer(true);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const progress = useMemo(() => total - queue.filter((q) => !retried.includes(q.id) || true).length, [total, queue]);

  if (total === 0) return <p className="muted">Aucune carte à étudier pour cette sélection.</p>;

  if (!card) {
    return (
      <div className="card text-center fade-up">
        <div className="text-5xl">🎯</div>
        <h3 className="mt-2 text-xl font-bold">Série terminée !</h3>
        <p className="muted mt-1">
          {known} réponses justes · {again} à revoir. Les mots difficiles reviendront dans votre révision espacée.
        </p>
        {onDone && (
          <button className="btn-primary mt-4" onClick={onDone}>
            {doneLabel}
          </button>
        )}
      </div>
    );
  }

  const front = reverse ? card.fr : card.en;
  const back = reverse ? card.en : card.fr;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1">
          <ProgressBar value={Math.max(0, progress)} max={total} />
        </div>
        <span className="muted whitespace-nowrap">{queue.length} restante(s)</span>
        <button className="btn-soft !px-3 !py-1.5 text-xs" onClick={() => { setReverse((r) => !r); setFlipped(false); }}>
          {reverse ? "FR → EN" : "EN → FR"}
        </button>
      </div>

      <div className="flip-card">
        <div className={`flip-inner min-h-64 ${flipped ? "flipped" : ""}`}>
          <button type="button" onClick={() => setFlipped(true)} className="flip-face card grid min-h-64 w-full cursor-pointer place-items-center text-center" aria-label="Retourner la carte">
            <div>
              <span className="chip mb-3">{reverse ? "Français" : "English"}</span>
              <p className="text-3xl font-bold sm:text-4xl">{front}</p>
              {!reverse && (
                <div className="mt-3 flex justify-center">
                  <AudioButton text={card.en.replace(/\(.*?\)/g, "")} />
                </div>
              )}
              <p className="muted mt-5">Touchez la carte (ou Espace) pour voir la réponse</p>
            </div>
          </button>
          <div className="flip-face flip-back card grid place-items-center overflow-auto text-center">
            <div>
              <span className="chip mb-3">{reverse ? "English" : "Français"}</span>
              <p className="text-2xl font-bold sm:text-3xl">{back}</p>
              <p className="mt-2 text-lg text-indigo-600 dark:text-indigo-300">{card.pron && `/ ${card.pron} /`}</p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <AudioButton text={card.en.replace(/\(.*?\)/g, "")} label="Écouter" />
                <Link href={`/learn/${card.lessonId}`} className="chip">
                  Leçon {card.lessonId.replace("-", ".")} · {card.cat}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-2 gap-3 transition ${flipped ? "opacity-100" : "pointer-events-none opacity-30"}`}>
        <button className="btn-bad" onClick={() => answer(false)}>
          ✗ À revoir <span className="hidden text-xs opacity-70 sm:inline">(1)</span>
        </button>
        <button className="btn-good" onClick={() => answer(true)}>
          ✓ Je le savais <span className="hidden text-xs opacity-70 sm:inline">(2)</span>
        </button>
      </div>
    </div>
  );
}
