"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const VIEWPORT_W = 1440; // largeur desktop forcée pour le rendu de la page embarquée

const contentBullets = [
  <>Chaque rubrique annonce clairement ce qu&apos;elle contient.</>,
  <>Un <strong className="text-onas-ink">mega menu</strong> qui montre où l&apos;utilisateur va avant de cliquer.</>,
  <>Une mise en avant des contenus récents par catégorie.</>,
];

const designBullets = [
  <>Header sombre, contraste fort sur les libellés.</>,
  <>Bandeau institutionnel discret au-dessus.</>,
  <>Soulignement orange animé sur la rubrique active.</>,
];

export default function ArchitectureSlide() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / VIEWPORT_W);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div className="relative w-full h-full flex flex-col px-8 lg:px-16 pt-[160px] pb-[90px] gap-6 lg:gap-8">

      {/* ── Titre gauche / Bullets droite ───────────────────── */}
      <div className="grid grid-cols-[2fr_3fr] gap-x-12 items-center">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-title font-black uppercase text-onas-ink leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 3.6vw, 4rem)" }}
        >
          On commence par<br /><span className="text-onas-orange">une architecture claire.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-x-8"
        >
          <div>
            <h3 className="font-title font-bold text-onas-ink/45 text-[0.72rem] tracking-[0.22em] uppercase mb-2.5">
              Contenu
            </h3>
            <ul className="space-y-2">
              {contentBullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-onas-orange flex-shrink-0" />
                  <span className="font-body text-onas-ink/65 text-[0.88rem] leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-title font-bold text-onas-ink/45 text-[0.72rem] tracking-[0.22em] uppercase mb-2.5">
              Design
            </h3>
            <ul className="space-y-2">
              {designBullets.map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-onas-orange flex-shrink-0" />
                  <span className="font-body text-onas-ink/65 text-[0.88rem] leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── Aperçu header — pleine largeur, rendu desktop ────── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full flex-1 min-h-0 flex flex-col rounded-2xl overflow-hidden border border-onas-ink/10 bg-onas-warm-dk shadow-[0_24px_60px_-20px_rgba(13,13,13,0.4)] mt-[100px]"
      >
        {/* Browser chrome */}
        <div className="bg-onas-warm-dk px-4 py-3 flex items-center gap-3 border-b border-white/10">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/10">
            <span className="font-body text-white/55 text-[0.72rem] tracking-wide">
              onas.sn — Navigation principale
            </span>
          </div>
          <span className="font-body text-white/30 text-[0.62rem] uppercase tracking-[0.18em] hidden md:inline">
            Live · interactif · 1440px
          </span>
        </div>

        {/* Zone iframe — largeur desktop forcée via attribut width + scale CSS */}
        <div
          ref={wrapRef}
          className="w-full flex-1 min-h-0 bg-white overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          <iframe
            src="/?nav=open"
            title="onas.sn — Header desktop"
            width={VIEWPORT_W}
            height={900}
            scrolling="no"
            style={{
              display: "block",
              border: "none",
              transform: scale > 0 ? `scale(${scale})` : "scale(0)",
              transformOrigin: "top left",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
