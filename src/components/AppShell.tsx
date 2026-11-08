"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import { dueLessons, dueWords, useAppState } from "@/lib/store";

const NAV = [
  { href: "/", label: "Tableau de bord", icon: "🏠", short: "Accueil" },
  { href: "/learn", label: "Salle d'étude", icon: "📚", short: "Étudier" },
  { href: "/vocabulary", label: "Vocabulaire", icon: "🗂️", short: "Mots" },
  { href: "/practice", label: "Exercices", icon: "✏️", short: "Exercices" },
  { href: "/speaking", label: "Oral & prononciation", icon: "🎙️", short: "Oral" },
  { href: "/review", label: "Révisions", icon: "🔁", short: "Réviser" },
  { href: "/exams", label: "Examens", icon: "🏆", short: "Examens" },
  { href: "/readings", label: "Lectures & actualités", icon: "📰", short: "Lire" },
];

function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);
  return (
    <button
      type="button"
      className="btn-soft !px-3 !py-2"
      aria-label={dark ? "Passer en mode clair" : "Passer en mode sombre"}
      title={dark ? "Mode clair" : "Mode sombre"}
      onClick={() => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle("dark", next);
        try {
          localStorage.setItem("ai-english-theme", next ? "dark" : "light");
        } catch {}
      }}
    >
      {dark ? "☀️" : "🌙"}
      <span className="hidden sm:inline">{dark ? "Clair" : "Sombre"}</span>
    </button>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  const s = useAppState();
  const reviewCount = dueWords(s).length + dueLessons(s).length;
  const active = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <div className="min-h-screen lg:flex">
      <aside className="hidden w-64 shrink-0 border-r border-slate-200 bg-white/80 p-4 backdrop-blur lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col dark:border-slate-800 dark:bg-slate-950/60">
        <Link href="/" className="mb-6 flex items-center gap-2 px-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-lg text-white">A</span>
          <span className="leading-tight">
            <span className="block text-base font-bold">AI English Lab</span>
            <span className="block text-xs text-slate-500">Anglais technique de l&apos;IA</span>
          </span>
        </Link>
        <nav className="flex flex-1 flex-col gap-1" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                active(n.href)
                  ? "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/15 dark:text-indigo-300"
                  : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <span aria-hidden>{n.icon}</span>
              <span className="flex-1">{n.label}</span>
              {n.href === "/review" && reviewCount > 0 && (
                <span className="rounded-full bg-rose-500 px-2 py-0.5 text-xs font-bold text-white">{reviewCount}</span>
              )}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-between gap-2">
          <ThemeToggle />
          <Link href="/settings" className="btn-soft !px-3 !py-2" title="Paramètres et sauvegarde">
            ⚙️
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/85 px-4 py-2.5 backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-950/80">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-indigo-600 text-white">A</span>
            AI English Lab
          </Link>
          <div className="flex gap-2">
            <ThemeToggle />
            <Link href="/settings" className="btn-soft !px-3 !py-2" aria-label="Paramètres">
              ⚙️
            </Link>
          </div>
        </header>
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-12 lg:pt-10">{children}</main>
        <nav
          className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-8 border-t border-slate-200 bg-white/95 px-1 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-950/95"
          aria-label="Navigation mobile"
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={`relative flex flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                active(n.href) ? "text-indigo-600 dark:text-indigo-300" : "text-slate-500"
              }`}
            >
              <span className="text-lg" aria-hidden>
                {n.icon}
              </span>
              <span className="max-w-full truncate">{n.short}</span>
              {n.href === "/review" && reviewCount > 0 && <span className="absolute right-2 top-1 h-2 w-2 rounded-full bg-rose-500" />}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
