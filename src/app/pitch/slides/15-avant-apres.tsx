"use client";

import { motion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import BeforeAfter from "../components/BeforeAfter";
import { siteUrl } from "../lib/site";
import { asset } from "@/lib/asset";

export default function AvantApresSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-8 lg:px-16 pt-24 lg:pt-28 pb-20 lg:pb-24">

      {/* ── En-tête ──────────────────────────────────────────── */}
      <div className="max-w-[1320px] mx-auto w-full flex items-end justify-between gap-6 mb-6 lg:mb-8">
        <div className="flex-1 min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-title font-black uppercase text-onas-ink leading-[0.94] tracking-tight"
            style={{ fontSize: "clamp(1.9rem, 3vw, 3.2rem)" }}
          >
            On compare le départ<br /><span className="text-onas-orange">au résultat.</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-onas-warm-dk text-white text-[0.78rem] font-body shadow-lg"
        >
          <MoveHorizontal size={14} className="text-onas-orange" />
          Glissez la poignée
        </motion.div>
      </div>

      {/* ── Comparateur ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex-1 min-h-0 max-w-[1320px] mx-auto w-full"
      >
        <BeforeAfter
          beforeSrc={asset("/images/audit/onas-sn-actuel.png")}
          afterEmbed={siteUrl("/")}
          beforeLabel="Site actuel"
          afterLabel="Nouveau site · live"
        />
      </motion.div>
    </div>
  );
}
