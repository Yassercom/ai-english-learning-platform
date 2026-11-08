import { notFound } from "next/navigation";
import ExamView from "@/components/ExamView";
import { listExams } from "@/lib/exercises";

export function generateStaticParams() {
  return listExams().map((e) => ({ id: e.id }));
}

export default async function ExamPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!listExams().some((e) => e.id === id)) notFound();
  return <ExamView id={id} />;
}
