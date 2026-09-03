"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  x: number; // 0–100 (%)
  y: number; // 0–100 (%)
  label: string;
  description?: string;
  side?: "top" | "bottom" | "left" | "right";
};

export default function Hotspot({ x, y, label, description, side = "right" }: Props) {
  const [open, setOpen] = useState(false);

  const offsetMap: Record<string, string> = {
    top:    "-top-3 left-1/2 -translate-x-1/2 -translate-y-full",
    bottom: "top-[calc(100%+12px)] left-1/2 -translate-x-1/2",
    left:   "-left-3 top-1/2 -translate-y-1/2 -translate-x-full",
    right:  "left-[calc(100%+12px)] top-1/2 -translate-y-1/2",
  };

  return (
    <button
      type="button"
      onClick={() => setOpen(o => !o)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ left: `${x}%`, top: `${y}%` }}
      className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group focus:outline-none"
      aria-label={label}
    >
      {/* Halo qui pulse */}
      <span className="absolute inset-0 -m-3 rounded-full bg-onas-orange/40 animate-ping" />
      {/* Pastille */}
      <span className="relative block w-4 h-4 rounded-full bg-onas-orange ring-4 ring-white/95 shadow-[0_8px_24px_rgba(180,83,38,0.45)]" />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className={`absolute ${offsetMap[side]} z-40 max-w-[260px] rounded-xl bg-onas-warm-dk text-white shadow-2xl border border-white/10 p-4 text-left`}
          >
            <p className="font-title font-bold uppercase text-onas-orange text-[0.72rem] tracking-[0.16em] mb-1.5">
              {label}
            </p>
            {description && (
              <p className="font-body text-white/75 text-[0.82rem] leading-[1.5]">
                {description}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
