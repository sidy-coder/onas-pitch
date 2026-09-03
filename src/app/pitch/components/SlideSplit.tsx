"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SlideTone } from "../lib/slides";

type Bullet = { text: ReactNode };

type Props = {
  title: ReactNode;
  contentBullets?: Bullet[];
  designBullets?: Bullet[];
  rightSlot: ReactNode;
  tone?: SlideTone;
};

export default function SlideSplit({
  title,
  contentBullets,
  designBullets,
  rightSlot,
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  const fg     = isDark ? "text-white"      : "text-onas-ink";
  const fgSoft = isDark ? "text-white/70"   : "text-onas-ink/65";
  const fgDim  = isDark ? "text-white/45"   : "text-onas-ink/45";
  const bullet = isDark ? "bg-onas-orange"  : "bg-onas-orange";

  return (
    <div className="relative w-full h-full grid grid-cols-1 lg:grid-cols-[minmax(380px,42fr)_58fr] gap-6 lg:gap-12 px-8 lg:px-16 pt-24 lg:pt-28 pb-20 lg:pb-24">

      {/* ── Colonne gauche : narration ───────────────────────── */}
      <div className="flex flex-col justify-center max-w-[520px]">

        {/* Titre */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`font-title font-black uppercase ${fg} leading-[0.94] tracking-tight`}
          style={{ fontSize: "clamp(2.1rem, 3.4vw, 3.6rem)" }}
        >
          {title}
        </motion.h2>

        {/* Bullets */}
        {(contentBullets || designBullets) && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 lg:mt-10 space-y-7"
          >
            {contentBullets && (
              <div>
                <h3 className={`font-title font-bold ${fgDim} text-[0.72rem] tracking-[0.22em] uppercase mb-3`}>
                  Contenu
                </h3>
                <ul className="space-y-2.5">
                  {contentBullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-2 w-1 h-1 rounded-full ${bullet} flex-shrink-0`} />
                      <span className={`font-body ${fgSoft} text-[0.92rem] leading-[1.55]`}>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {designBullets && (
              <div>
                <h3 className={`font-title font-bold ${fgDim} text-[0.72rem] tracking-[0.22em] uppercase mb-3`}>
                  Design
                </h3>
                <ul className="space-y-2.5">
                  {designBullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className={`mt-2 w-1 h-1 rounded-full ${bullet} flex-shrink-0`} />
                      <span className={`font-body ${fgSoft} text-[0.92rem] leading-[1.55]`}>{b.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* ── Colonne droite : visuel ──────────────────────────── */}
      <div className="relative h-full min-h-0">
        {rightSlot}
      </div>
    </div>
  );
}
