"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

const PROBLEMES = [
  { x: 50, y: 8,  label: "Bandeau bleu saturé",       desc: "Une couleur agressive qui domine sans hiérarchie." },
  { x: 25, y: 32, label: "Image dans une carte 2010", desc: "Encadrement décoratif daté, ombre dure." },
  { x: 78, y: 18, label: "Boutons CTA juxtaposés",    desc: "Trois boutons orange côte à côte, sans hiérarchie." },
  { x: 50, y: 70, label: "Typographie générique",      desc: "Pas de polices distinctives, hiérarchie plate." },
];

export default function AuditSlide() {
  return (
    <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-[42fr_58fr] gap-6 lg:gap-12 px-8 lg:px-16 pt-24 lg:pt-28 pb-20 lg:pb-24">

      {/* ── Colonne gauche ───────────────────────────────────── */}
      <div className="flex flex-col justify-center max-w-[520px]">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-title font-black uppercase text-onas-ink leading-[0.94] tracking-tight"
          style={{ fontSize: "clamp(2.1rem, 3.4vw, 3.6rem)" }}
        >
          Le contenu était <span className="text-onas-orange">là.</span>
          <br />
          Le parcours le cachait.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-onas-ink/65 leading-[1.7] mt-6 max-w-[460px]"
        >
          Le site existant contenait beaucoup de contenu utile. Il était pourtant difficile à
          parcourir, mal hiérarchisé, et son design ne reflétait plus la charte graphique actuelle
          de l&apos;ONAS.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-7 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-lg bg-onas-orange/8 border border-onas-orange/20 self-start"
        >
          <AlertCircle size={14} className="text-onas-orange" />
          <span className="font-body font-semibold text-onas-orange text-[0.78rem]">
            4 points de friction identifiés
          </span>
        </motion.div>
      </div>

      {/* ── Colonne droite : capture annotée ─────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="relative h-full min-h-0 rounded-2xl overflow-hidden border border-onas-ink/10 shadow-[0_24px_60px_-20px_rgba(13,13,13,0.35)] bg-onas-surface"
      >
        <Image
          src="/images/audit/onas-sn-actuel.png"
          alt="Capture du site onas.sn actuel"
          fill
          className="object-cover object-top"
          sizes="(max-width: 1024px) 100vw, 60vw"
          priority
        />

        {/* Voile d'atténuation */}
        <div className="absolute inset-0 bg-gradient-to-t from-onas-warm-dk/30 via-transparent to-transparent" />

        {/* Annotations rouges */}
        {PROBLEMES.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group cursor-help"
          >
            <span className="absolute inset-0 -m-3 rounded-full bg-red-500/30 animate-ping" />
            <span className="relative block w-4 h-4 rounded-full bg-red-500 ring-4 ring-white/95 shadow-[0_8px_24px_rgba(239,68,68,0.55)]" />

            {/* Tooltip au hover */}
            <div className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 z-30 max-w-[240px] rounded-xl bg-onas-warm-dk text-white shadow-2xl border border-white/10 p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="font-title font-bold uppercase text-red-400 text-[0.68rem] tracking-[0.16em] mb-1">
                {p.label}
              </p>
              <p className="font-body text-white/75 text-[0.78rem] leading-[1.5]">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
