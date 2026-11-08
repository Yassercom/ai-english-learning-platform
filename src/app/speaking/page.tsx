"use client";
import { useState } from "react";
import { LESSONS, getLesson } from "@/lib/content";
import { AudioButton, PronGuide } from "@/components/ui";
import Recorder from "@/components/Recorder";
import { Dialogue } from "@/components/LessonView";

const SOUNDS: { title: string; tip: string; examples: string[] }[] = [
  { title: "Le « th » (langue entre les dents)", tip: "Posez la bout de la langue entre les dents. Sourd dans think, voisé dans this. Le français remplace souvent par s/z ou t/d.", examples: ["think", "three", "this", "that", "the algorithm", "mathematics"] },
  { title: "Le « r » américain", tip: "La langue ne touche pas le palais et on ne roule pas le r. Les lèvres sont légèrement arrondies, la langue recule.", examples: ["right", "error", "world", "recurrent", "parameter", "train the model"] },
  { title: "Voyelles courtes et longues", tip: "ship ≠ sheep, full ≠ fool, bit ≠ beat. La durée et la tension changent le sens du mot.", examples: ["ship, sheep", "full, fool", "bit, beat", "live, leave", "pull, pool"] },
  { title: "Le « h » expiré", tip: "Contrairement au français, le h anglais se prononce : un petit souffle venant de la gorge.", examples: ["hardware", "hyperparameter", "hidden layer", "human", "how"] },
  { title: "Le schwa /ə/ : la voyelle la plus fréquente", tip: "Dans les syllabes non accentuées, la voyelle devient un « euh » très court. C'est ce qui donne le rythme de l'anglais.", examples: ["about", "problem", "computer", "banana", "algorithm"] },
  { title: "Les terminaisons -ed", tip: "Trois prononciations : /t/ (worked), /d/ (played), /ɪd/ après t et d (wanted, needed).", examples: ["worked", "trained", "played", "wanted", "evaluated"] },
  { title: "Le « t » américain entre voyelles", tip: "Entre deux voyelles, t sonne presque comme un d rapide : water, better, data.", examples: ["water", "better", "data", "pattern", "matter"] },
  { title: "Accent de mot (word stress)", tip: "Chaque mot long a une syllabe forte. Un mauvais accent rend le mot difficile à reconnaître.", examples: ["PHOtograph, phoTOGraphy", "ALgorithm", "comPUter", "inFORmation", "STAtistics, statISTician"] },
  { title: "Accent de phrase (sentence stress)", tip: "On accentue les mots porteurs de sens (noms, verbes, adjectifs) et on réduit les petits mots (to, the, of).", examples: ["I want to GO to the STORE.", "The MODel LEARNS from DAta.", "Could you REpeat THAT, please?"] },
  { title: "Intonation", tip: "Question oui/non : voix qui monte ↗. Question en wh- : voix qui descend ↘. Liste : monte, monte, descend.", examples: ["Do you understand? ↗", "What does it mean? ↘", "We need data, models, and metrics. ↘"] },
  { title: "Nombres : -teen / -ty", tip: "thirTEEN (accent à la fin, voyelle longue) contre THIRty (accent au début).", examples: ["thirteen, thirty", "fifteen, fifty", "eighteen, eighty"] },
];

export default function SpeakingPage() {
  const [lessonId, setLessonId] = useState("1-1");
  const lesson = getLesson(lessonId)!;
  const [tab, setTab] = useState<"sounds" | "read" | "dialogues">("sounds");

  return (
    <div className="space-y-5 fade-up">
      <div>
        <h1 className="h-page">Oral &amp; prononciation</h1>
        <p className="muted">Américain standard. Écoutez, répétez, enregistrez-vous et comparez.</p>
      </div>
      <div className="card !border-amber-300 !bg-amber-50 text-sm dark:!bg-amber-500/10">
        <p className="font-semibold">⚠️ À propos de l&apos;évaluation</p>
        <p className="mt-1">Cette application ne mesure pas votre prononciation : aucune technologie fiable n&apos;est intégrée pour cela. Elle vous aide à vous écouter et à comparer avec un modèle audio. Pour un retour réel, enregistrez-vous et montrez l&apos;enregistrement à un enseignant ou à un locuteur natif.</p>
      </div>
      <PronGuide />
      <div className="flex gap-2 overflow-x-auto">
        {(
          [
            ["sounds", "🔤 Sons, accent, intonation"],
            ["read", "📖 Lecture à voix haute"],
            ["dialogues", "💬 Dialogues à pratiquer"],
          ] as const
        ).map(([k, l]) => (
          <button key={k} onClick={() => setTab(k)} className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold ${tab === k ? "bg-indigo-600 text-white" : "bg-white shadow-sm dark:bg-slate-900"}`}>
            {l}
          </button>
        ))}
      </div>

      {tab === "sounds" && (
        <div className="grid gap-4 md:grid-cols-2">
          {SOUNDS.map((s) => (
            <div key={s.title} className="card space-y-2">
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-sm">{s.tip}</p>
              <div className="flex flex-wrap gap-2">
                {s.examples.map((e) => (
                  <span key={e} className="inline-flex items-center gap-1 rounded-full bg-slate-100 py-1 pl-3 pr-1 text-sm dark:bg-slate-800">
                    {e}
                    <AudioButton text={e.replace(/[↗↘]/g, "").replace(/, /g, ". ")} rate={0.8} className="!border-0" />
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="card md:col-span-2">
            <h3 className="font-bold">Enregistrez-vous librement</h3>
            <p className="muted mb-2">Lisez 3 phrases de votre choix, réécoutez-vous et comparez avec les modèles ci-dessus.</p>
            <Recorder />
          </div>
        </div>
      )}

      {tab !== "sounds" && (
        <select className="input" value={lessonId} onChange={(e) => setLessonId(e.target.value)} aria-label="Choisir une leçon">
          {LESSONS.map((l) => (
            <option key={l.id} value={l.id}>
              {l.id.replace("-", ".")} · {l.title}
            </option>
          ))}
        </select>
      )}

      {tab === "read" && (
        <div className="space-y-4">
          <div className="card space-y-3">
            <h3 className="font-bold">📖 {lesson.reading.title}</h3>
            <div className="flex flex-wrap gap-2">
              <AudioButton text={lesson.reading.en} rate={0.7} label="Lent" />
              <AudioButton text={lesson.reading.en} label="Normal" />
            </div>
            <div className="space-y-2">
              {lesson.reading.en.split(/(?<=[.!?])\s+/).map((sentence, i) => (
                <div key={i} className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                  <AudioButton text={sentence} rate={0.8} />
                  <p className="text-sm leading-relaxed">{sentence}</p>
                </div>
              ))}
            </div>
            <p className="muted">Méthode : 1) écoutez une phrase, 2) répétez-la en imitant le rythme, 3) lisez toute la page sans vous arrêter.</p>
            <Recorder label="Enregistrer ma lecture" />
          </div>
          <div className="card space-y-2">
            <h3 className="font-bold">🎙️ Activité orale de la leçon</h3>
            <p className="text-sm">{lesson.speaking}</p>
            <p className="text-sm">💡 {lesson.pron.tip}</p>
          </div>
        </div>
      )}

      {tab === "dialogues" && (
        <div className="space-y-4">
          {lesson.dialogues.map((d, i) => (
            <Dialogue key={`${lessonId}-${i}`} d={d} />
          ))}
          <div className="card">
            <p className="muted mb-2">Enregistrez-vous en jouant votre rôle, puis comparez avec l&apos;audio.</p>
            <Recorder label="Enregistrer ma réplique" />
          </div>
        </div>
      )}
    </div>
  );
}
