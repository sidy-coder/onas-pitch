"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function QuestionSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* ── Photo full bleed ─────────────────────────────────── */}
      <Image
        src="/images/photos/ONAS EXPOSURE 5.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={90}
      />

      {/* ── Voile sombre ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-onas-warm-dk/85 via-onas-warm-dk/65 to-onas-warm-dk/85" />
      <div className="absolute inset-0 bg-onas-warm-dk/45" />

      {/* ── Motif décoratif ──────────────────────────────────── */}
      <Image
        src="/images/decor/groupe-motif-trois-goutte-style3-onas.svg"
        alt=""
        width={500}
        height={500}
        className="absolute -top-20 -left-20 w-[400px] opacity-[0.08] pointer-events-none select-none"
      />

      {/* ── Contenu ──────────────────────────────────────────── */}
      <div className="relative z-10 w-full h-full grid place-items-center px-8 lg:px-20">
        <div className="max-w-[1100px] text-center">

          {/* Lignes décoratives */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="origin-center w-full max-w-[160px] mx-auto h-[1px] bg-onas-orange mb-10"
          />

          <motion.blockquote
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-title font-black uppercase text-white leading-[0.96] tracking-tight"
            style={{ fontSize: "clamp(1.8rem, 4.6vw, 4.8rem)" }}
          >
            Que fait-on <br />
            quand <span className="text-onas-orange">le contenu existe déjà</span>, <br />
            mais que personne ne le trouve&nbsp;?
          </motion.blockquote>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="origin-center w-full max-w-[160px] mx-auto h-[1px] bg-onas-orange mt-10"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="font-body text-white/55 text-[0.95rem] leading-[1.6] mt-10 max-w-[520px] mx-auto"
          >
            Il faut le réorganiser. Le hiérarchiser. Le mettre en lumière.
            Et le servir au bon moment, à la bonne personne.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
