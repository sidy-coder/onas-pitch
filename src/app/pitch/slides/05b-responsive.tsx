"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const MOBILE_W  = 390;
const TABLET_W  = 768;
const FRAME_H   = 900; // hauteur interne de rendu

type DeviceFrameProps = {
  src: string;
  label: string;
  viewportW: number;
  delay?: number;
  style?: CSSProperties;
};

function DeviceFrame({ src, label, viewportW, delay = 0, style }: DeviceFrameProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale]   = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver(() => {
      const w = el.clientWidth;
      if (w > 0) setScale(w / viewportW);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [viewportW]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-3 min-w-0"
      style={style}
    >
      {/* Label device */}
      <div className="flex items-center gap-2.5">
        <span className="font-title font-bold text-onas-ink/40 text-[0.72rem] tracking-[0.22em] uppercase">
          {label}
        </span>
        <span className="font-body text-onas-ink/30 text-[0.68rem]">
          {viewportW}px
        </span>
      </div>

      {/* Browser chrome */}
      <div className="rounded-xl overflow-hidden border border-onas-ink/10 bg-onas-warm-dk shadow-[0_16px_40px_-12px_rgba(13,13,13,0.35)] flex flex-col flex-1 min-h-0">
        <div className="bg-onas-warm-dk px-3 py-2 flex items-center gap-2 border-b border-white/10 flex-shrink-0">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-red-400/70" />
            <span className="w-2 h-2 rounded-full bg-amber-400/70" />
            <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex-1 mx-1.5 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
            <span className="font-body text-white/45 text-[0.65rem] tracking-wide">
              onas.sn
            </span>
          </div>
        </div>

        {/* Iframe zone */}
        <div
          ref={wrapRef}
          className="relative w-full flex-1 min-h-0 bg-white overflow-hidden"
        >
          {!loaded && (
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-6 h-6 border-2 border-onas-orange border-t-transparent rounded-full animate-spin" />
            </div>
          )}
          <iframe
            src={src}
            title={`onas.sn — ${label}`}
            width={viewportW}
            height={FRAME_H}
            scrolling="no"
            onLoad={() => setLoaded(true)}
            style={{
              display: "block",
              border: "none",
              transform: scale > 0 ? `scale(${scale})` : "scale(0)",
              transformOrigin: "top left",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ResponsiveSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-8 lg:px-16 pt-[160px] pb-[90px] gap-6">

      {/* ── Titre + description ───────────────────────────────── */}
      <div className="grid grid-cols-[2fr_3fr] gap-x-12 items-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-title font-black uppercase text-onas-ink leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 3.6vw, 4rem)" }}
        >
          On adapte le parcours<br /><span className="text-onas-orange">à chaque écran.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 gap-x-8"
        >
          <div>
            <h3 className="font-title font-bold text-onas-ink/45 text-[0.72rem] tracking-[0.22em] uppercase mb-2.5">
              Mobile
            </h3>
            <ul className="space-y-2">
              {[
                <>Navigation burger compacte.</>,
                <>Contenus empilés, lisibilité maximale.</>,
                <>CTA toujours accessibles au pouce.</>,
              ].map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-onas-orange flex-shrink-0" />
                  <span className="font-body text-onas-ink/65 text-[0.88rem] leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-title font-bold text-onas-ink/45 text-[0.72rem] tracking-[0.22em] uppercase mb-2.5">
              Tablette
            </h3>
            <ul className="space-y-2">
              {[
                <>Mise en page intermédiaire fluide.</>,
                <>Grilles adaptées à l&apos;orientation.</>,
                <>Navigation complète visible.</>,
              ].map((b, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 w-1 h-1 rounded-full bg-onas-orange flex-shrink-0" />
                  <span className="font-body text-onas-ink/65 text-[0.88rem] leading-[1.5]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {/* ── Deux device frames côte à côte ───────────────────── */}
      <div className="flex gap-8 flex-1 min-h-0 mt-[100px] items-stretch">
        <DeviceFrame src="/" label="Mobile"   viewportW={MOBILE_W}  delay={0.45} style={{ flex: MOBILE_W }} />
        <DeviceFrame src="/" label="Tablette" viewportW={TABLET_W}  delay={0.55} style={{ flex: TABLET_W }} />
      </div>
    </div>
  );
}
