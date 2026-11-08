"use client";
import { useRef, useState } from "react";
import { replaceState, resetState, setDailyGoal, useAppState, type AppState } from "@/lib/store";

export default function SettingsPage() {
  const s = useAppState();
  const file = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<string | null>(null);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(s, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ai-english-lab-progression-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const importData = async (f: File) => {
    try {
      const data = JSON.parse(await f.text()) as AppState;
      if (data.v !== 1 || typeof data.words !== "object" || typeof data.lessons !== "object") throw new Error();
      replaceState(data);
      setMsg("✅ Progression importée avec succès.");
    } catch {
      setMsg("❌ Fichier invalide : utilisez un fichier exporté depuis cette application.");
    }
  };

  return (
    <div className="space-y-5 fade-up">
      <div>
        <h1 className="h-page">Paramètres</h1>
        <p className="muted">Vos données sont enregistrées dans le navigateur (localStorage). Exportez-les pour les sauvegarder ou les transférer sur un autre appareil.</p>
      </div>

      <div className="card space-y-4">
        <h2 className="font-bold">🎯 Objectifs quotidiens</h2>
        {(
          [
            ["words", "Mots étudiés ou révisés", 1, 60],
            ["exercises", "Exercices", 1, 60],
            ["lessons", "Leçons terminées", 0, 5],
          ] as const
        ).map(([k, label, min, max]) => (
          <label key={k} className="block text-sm font-semibold">
            {label} : {s.dailyGoal[k]}
            <input type="range" min={min} max={max} value={s.dailyGoal[k]} onChange={(e) => setDailyGoal({ [k]: Number(e.target.value) })} className="w-full" />
          </label>
        ))}
      </div>

      <div className="card space-y-3">
        <h2 className="font-bold">💾 Sauvegarde</h2>
        <div className="flex flex-wrap gap-2">
          <button className="btn-primary" onClick={exportData}>
            Exporter ma progression
          </button>
          <button className="btn-soft" onClick={() => file.current?.click()}>
            Importer un fichier
          </button>
          <input ref={file} type="file" accept="application/json" className="hidden" onChange={(e) => e.target.files?.[0] && importData(e.target.files[0])} />
        </div>
        {msg && <p className="text-sm">{msg}</p>}
        <p className="muted">
          Architecture : la progression passe par une interface <code>StorageAdapter</code> (src/lib/store.ts). Un futur système de comptes utilisateurs pourra remplacer localStorage par une API et une base de données sans modifier les écrans.
        </p>
      </div>

      <div className="card space-y-3 !border-rose-300 dark:!border-rose-800">
        <h2 className="font-bold text-rose-600">Zone sensible</h2>
        <button
          className="btn-bad"
          onClick={() => {
            if (window.confirm("Effacer toute votre progression ? Cette action est irréversible.")) {
              resetState();
              setMsg("Progression réinitialisée.");
            }
          }}
        >
          Réinitialiser toute la progression
        </button>
      </div>
    </div>
  );
}
