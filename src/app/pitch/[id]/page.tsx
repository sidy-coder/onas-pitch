import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PitchClient from "../components/PitchClient";
import { getSlideById, SLIDES } from "../lib/slides";

export const metadata: Metadata = {
  title: "Présentation — Refonte ONAS.SN",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return SLIDES.map(s => ({ id: s.id }));
}

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function PitchSlidePage({ params }: PageProps) {
  const { id } = await params;
  const slide = getSlideById(id);
  if (!slide) notFound();

  return <PitchClient slideId={id} />;
}
