"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteUrl } from "../lib/site";

type Props = {
  src: string;
  label?: string;
  scale?: number;
  className?: string;
};

export default function LiveFrame({ src, label, scale = 1, className = "" }: Props) {
  const [loaded, setLoaded] = useState(false);
  const display = label ?? `onas.sn${src === "/" ? "" : src}`;
  // `src` est un chemin du site présenté ("/", "/projets"…), pas de cette appli.
  const frameSrc = siteUrl(src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-2xl overflow-hidden border border-onas-ink/10 bg-onas-warm-dk shadow-[0_24px_60px_-20px_rgba(13,13,13,0.4)] ${className}`}
    >
      {/* ── Browser chrome ───────────────────────────────────── */}
      <div className="bg-onas-warm-dk px-4 py-3 flex items-center gap-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/10">
          <span className="font-body text-white/55 text-[0.72rem] tracking-wide">
            {display}
          </span>
        </div>
        <span className="font-body text-white/30 text-[0.62rem] uppercase tracking-[0.18em] hidden md:inline">
          Live · interactif
        </span>
      </div>

      {/* ── Iframe ───────────────────────────────────────────── */}
      <div className="relative w-full bg-white" style={{ height: "calc(100% - 41px)" }}>
        {!loaded && (
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-8 h-8 border-2 border-onas-orange border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <iframe
          src={frameSrc}
          onLoad={() => setLoaded(true)}
          className="w-full h-full block"
          style={{
            transform: scale !== 1 ? `scale(${scale})` : undefined,
            transformOrigin: "top left",
            width: scale !== 1 ? `${100 / scale}%` : "100%",
            height: scale !== 1 ? `${100 / scale}%` : "100%",
          }}
          title={display}
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}
