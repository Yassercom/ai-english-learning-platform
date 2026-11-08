"use client";
import { useSyncExternalStore, type ReactNode } from "react";

export function ProgressBar({ value, max = 100, className = "", color = "bg-indigo-600" }: { value: number; max?: number; className?: string; color?: string }) {
  const pct = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={`h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 ${className}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function Ring({ value, size = 96, label }: { value: number; size?: number; label?: ReactNode }) {
  const r = (size - 12) / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth="10" className="fill-none stroke-slate-200 dark:stroke-slate-800" />
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth="10" strokeLinecap="round" className="fill-none stroke-indigo-600 transition-all duration-700" strokeDasharray={c} strokeDashoffset={c - (c * Math.min(100, value)) / 100} />
      </svg>
      <div className="absolute text-center text-lg font-bold">{label ?? `${Math.round(value)}%`}</div>
    </div>
  );
}

const noop = () => () => {};
export function useSpeechSupported(): boolean {
  return useSyncExternalStore(noop, () => typeof window !== "undefined" && "speechSynthesis" in window, () => true);
}

export function speak(text: string, rate = 0.9): boolean {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return false;
  const synth = window.speechSynthesis;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  const voices = synth.getVoices();
  const v = voices.find((x) => x.lang === "en-US" && /google|samantha|alex|microsoft/i.test(x.name)) ?? voices.find((x) => x.lang === "en-US") ?? voices.find((x) => x.lang.startsWith("en"));
  if (v) u.voice = v;
  u.rate = rate;
  synth.speak(u);
  return true;
}

export function AudioButton({ text, rate = 0.9, label, className = "" }: { text: string; rate?: number; label?: string; className?: string }) {
  const ok = useSpeechSupported();
  return (
    <button
      type="button"
      disabled={!ok}
      onClick={(e) => {
        e.stopPropagation();
        speak(text, rate);
      }}
      title={ok ? "Écouter (anglais américain)" : "Audio indisponible sur ce navigateur"}
      aria-label={`Écouter : ${text.slice(0, 60)}`}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-sm text-indigo-600 transition hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-indigo-300 dark:hover:bg-slate-800 ${className}`}
    >
      🔊{label && <span className="text-xs font-semibold">{label}</span>}
    </button>
  );
}

export function SectionTitle({ children, sub }: { children: ReactNode; sub?: ReactNode }) {
  return (
    <div className="mb-3">
      <h2 className="text-lg font-bold">{children}</h2>
      {sub && <p className="muted">{sub}</p>}
    </div>
  );
}

export function Empty({ children }: { children: ReactNode }) {
  return <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center text-sm text-slate-500 dark:border-slate-700">{children}</div>;
}

export function PronGuide() {
  return (
    <details className="card">
      <summary className="cursor-pointer text-sm font-semibold">Comment lire la prononciation simplifiée ?</summary>
      <div className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
        <p>Les <b>MAJUSCULES</b> indiquent la syllabe accentuée : <code>pruh-FEH-ser</code>.</p>
        <p><b>ay</b> = « ei » de <i>day</i> · <b>ee</b> = « i » long · <b>ie</b> = « aï » (<i>my</i>)</p>
        <p><b>oh</b> = « o » long (<i>go</i>) · <b>ow</b> = « aou » (<i>now</i>) · <b>oo</b> = « ou »</p>
        <p><b>uh</b> = e très court (« euh ») · <b>er</b> = r américain, langue en arrière</p>
        <p><b>th</b> = langue entre les dents (<i>think</i>) · <b>dh</b> = même position, voisé (<i>this</i>)</p>
        <p>Cette notation est volontairement simple : écoutez toujours l&apos;audio 🔊 et répétez.</p>
      </div>
    </details>
  );
}
