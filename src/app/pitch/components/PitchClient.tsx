"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SlideShell from "./SlideShell";
import {
  getSlideById,
  getNextSlideId,
  getPrevSlideId,
  type SlideMeta,
} from "../lib/slides";

type Props = {
  slideId: string;
};

export default function PitchClient({ slideId }: Props) {
  const router = useRouter();
  const slide  = getSlideById(slideId);

  const prevId = slide ? getPrevSlideId(slide.id) : null;
  const nextId = slide ? getNextSlideId(slide.id) : null;
  const prevHref = prevId ? `/pitch/${prevId}` : null;
  const nextHref = nextId ? `/pitch/${nextId}` : null;

  useEffect(() => {
    if (!slide) return;

    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        if (nextHref) { e.preventDefault(); router.push(nextHref); }
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        if (prevHref) { e.preventDefault(); router.push(prevHref); }
      } else if (e.key === "Home") {
        e.preventDefault();
        router.push("/pitch/01");
      } else if (e.key === "End") {
        e.preventDefault();
        router.push("/pitch/18");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [router, slide, prevHref, nextHref]);

  // Préchargement du slide suivant
  useEffect(() => {
    if (nextHref) router.prefetch(nextHref);
    if (prevHref) router.prefetch(prevHref);
  }, [router, prevHref, nextHref]);

  if (!slide) {
    return (
      <SlideShell index={0} title="Slide introuvable" tone="light">
        <div className="grid place-items-center w-full h-full text-center px-6">
          <div>
            <h1 className="font-title font-black uppercase text-onas-orange text-6xl mb-4">404</h1>
            <p className="font-body text-onas-ink/70">Cette slide n&apos;existe pas.</p>
          </div>
        </div>
      </SlideShell>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slide.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <SlideShell
          index={slide.index}
          title={slide.title}
          tone={slide.tone}
        >
          <SlideContent slide={slide} />
        </SlideShell>
      </motion.div>
    </AnimatePresence>
  );
}

function SlideContent({ slide }: { slide: SlideMeta }) {
  const Component = slide.Component;
  return <Component />;
}
