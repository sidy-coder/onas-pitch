"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { asset } from "@/lib/asset";

export default function IntroSlide() {
  return (
    <div className="relative w-full h-full">
      {/* ── Photo full bleed ─────────────────────────────────── */}
      <Image
        src={asset("/images/photos/30-ans-ONAS.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={92}
      />

      {/* ── Voile sombre dégradé ─────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-r from-onas-warm-dk/95 via-onas-warm-dk/75 to-onas-warm-dk/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-onas-warm-dk/30 via-transparent to-onas-warm-dk/60" />

      {/* ── Motif décoratif ──────────────────────────────────── */}
      <Image
        src={asset("/images/decor/groupe-motif-trois-goutte-style2-onas.svg")}
        alt=""
        width={620}
        height={620}
        className="absolute -bottom-32 -right-24 w-[560px] opacity-[0.07] pointer-events-none select-none"
      />

      {/* ── Contenu textuel ──────────────────────────────────── */}
      <div className="relative z-10 w-full h-full flex items-end px-8 lg:px-20 pb-24 lg:pb-28 pt-28 lg:pt-32">
        <div className="max-w-[1280px] w-full">

          {/* Titre */}
          <h1
            className="font-title font-black uppercase text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(4rem, 11vw, 13rem)" }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              Refonte
            </motion.span>
            <motion.span
              className="block text-onas-orange"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              onas.sn
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-white/70 leading-[1.7] mt-8 lg:mt-10 max-w-[560px]"
            style={{ fontSize: "clamp(1rem, 1.1vw, 1.1rem)" }}
          >
            Cette présentation résume brièvement le travail accompli.
            La démonstration permettra ensuite d&apos;entrer dans le concret.
          </motion.p>

          {/* Indicateur navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex items-center gap-3 mt-12 lg:mt-16 text-white/50"
          >
            <span className="font-body text-[0.78rem] tracking-[0.18em] uppercase">
              Démarrer la présentation
            </span>
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-onas-orange"
            >
              <ArrowRight size={18} strokeWidth={2.2} />
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
