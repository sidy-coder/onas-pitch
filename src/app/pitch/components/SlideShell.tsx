"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SlideTone } from "../lib/slides";
import { TOTAL_SLIDES } from "../lib/slides";

type Props = {
  children: ReactNode;
  index: number;
  title: string;
  tone?: SlideTone;
};

export default function SlideShell({
  children,
  index,
  title,
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  const fg     = isDark ? "text-white"        : "text-onas-ink";
  const fgSoft = isDark ? "text-white/55"     : "text-onas-ink/55";

  const progress = (index / TOTAL_SLIDES) * 100;

  return (
    <section
      className={`relative w-screen h-[100svh] overflow-hidden ${isDark ? "bg-onas-warm-dk" : "bg-white"}`}
      aria-label={`Slide ${index} sur ${TOTAL_SLIDES} — ${title}`}
    >
      {/* ── Barre de progression ─────────────────────────────── */}
      <div className="absolute top-0 inset-x-0 z-50 h-[3px] bg-transparent">
        <motion.div
          className="h-full bg-onas-orange origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: progress / 100 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* ── Logo ONAS (top-left) ─────────────────────────────── */}
      <div className="absolute top-6 left-6 lg:top-8 lg:left-10 z-40 pointer-events-none">
        <Image
          src={isDark ? "/images/logos/onas-logo-white.png" : "/images/logos/onas-logo-color.png"}
          alt="ONAS"
          width={56}
          height={56}
          className="w-12 lg:w-14 h-auto"
          priority
        />
      </div>

      {/* ── Logo Levell (bottom-right discret) ───────────────── */}
      <div className="absolute bottom-5 right-6 lg:bottom-6 lg:right-10 z-40 pointer-events-none flex items-center gap-2">
        <span className={`font-body text-[0.62rem] tracking-[0.22em] uppercase ${fgSoft}`}>
          conçu par
        </span>
        <Image
          src={isDark
            ? "/images/logos/levell-logo-dark.png"
            : "/images/logos/levell-logo-light.png"}
          alt="Levell"
          width={64}
          height={20}
          className="w-14 lg:w-16 h-auto opacity-80"
        />
      </div>

      {/* ── Numéro slide + titre (top-right) ─────────────────── */}
      <div className="absolute top-6 right-6 lg:top-8 lg:right-10 z-40 pointer-events-none flex items-center gap-3">
        <span className={`font-title font-bold tracking-tight text-[0.95rem] ${fg}`}>
          {String(index).padStart(2, "0")}
          <span className={fgSoft}>/{String(TOTAL_SLIDES).padStart(2, "0")}</span>
        </span>
        <span className={`hidden md:inline-block w-px h-4 ${isDark ? "bg-white/25" : "bg-onas-ink/20"}`} />
        <span className={`hidden md:inline font-body text-[0.78rem] tracking-[0.18em] uppercase ${fgSoft}`}>
          {title}
        </span>
      </div>

      {/* ── Contenu du slide ─────────────────────────────────── */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </section>
  );
}
