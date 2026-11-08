"use client";
import { useRef, useState, useSyncExternalStore } from "react";
import { addRecording } from "@/lib/store";

const noop = () => () => {};

/**
 * Enregistreur vocal basé sur MediaRecorder.
 * Important : il n'évalue PAS la prononciation. Il permet de s'écouter et de
 * comparer avec le modèle audio (auto-évaluation guidée).
 */
export default function Recorder({ label = "Enregistrez-vous" }: { label?: string }) {
  const supported = useSyncExternalStore(noop, () => typeof navigator !== "undefined" && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== "undefined", () => true);
  const [recording, setRecording] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const rec = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);

  const start = async () => {
    setErr(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      chunks.current = [];
      mr.ondataavailable = (e) => e.data.size > 0 && chunks.current.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunks.current, { type: mr.mimeType || "audio/webm" });
        setUrl((old) => {
          if (old) URL.revokeObjectURL(old);
          return URL.createObjectURL(blob);
        });
        stream.getTracks().forEach((t) => t.stop());
        addRecording();
      };
      rec.current = mr;
      mr.start();
      setRecording(true);
    } catch {
      setErr("Microphone inaccessible. Autorisez-le dans le navigateur (et utilisez https ou localhost).");
    }
  };
  const stop = () => {
    rec.current?.stop();
    setRecording(false);
  };

  if (!supported) {
    return <p className="rounded-xl bg-amber-50 p-3 text-sm text-amber-800 dark:bg-amber-500/10 dark:text-amber-200">L&apos;enregistrement vocal n&apos;est pas disponible sur ce navigateur. Vous pouvez quand même lire à voix haute et comparer avec l&apos;audio 🔊.</p>;
  }
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-center gap-2">
        {!recording ? (
          <button type="button" className="btn-soft" onClick={start}>
            🎙️ {label}
          </button>
        ) : (
          <button type="button" className="btn-bad animate-pulse" onClick={stop}>
            ⏹ Arrêter l&apos;enregistrement
          </button>
        )}
        {url && !recording && <audio controls src={url} className="h-10 max-w-full" />}
      </div>
      {err && <p className="text-sm text-rose-600">{err}</p>}
      <p className="muted">Votre enregistrement reste sur votre appareil : il n&apos;est jamais envoyé.</p>
    </div>
  );
}
