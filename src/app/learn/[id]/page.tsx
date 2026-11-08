import { notFound } from "next/navigation";
import type { Metadata } from "next";
import LessonView from "@/components/LessonView";
import { LESSONS, getLesson } from "@/lib/content";

export function generateStaticParams() {
  return LESSONS.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const l = getLesson(id);
  return { title: l ? `${l.title} — AI English Lab` : "Leçon" };
}

export default async function LessonPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!getLesson(id)) notFound();
  return <LessonView id={id} />;
}
