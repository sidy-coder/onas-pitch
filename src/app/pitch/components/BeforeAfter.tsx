"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";

type Props = {
  beforeSrc: string;
  afterSrc?: string;
  afterEmbed?: string; // URL d'un iframe (optionnel)
  beforeLabel?: string;
  afterLabel?: string;
};

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  afterEmbed,
  beforeLabel = "Avant",
  afterLabel  = "Après",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // 0–100
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, x)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    dragging.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden rounded-2xl border border-onas-ink/10 shadow-[0_24px_60px_-20px_rgba(13,13,13,0.35)] cursor-ew-resize select-none touch-none"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* ── Couche AFTER (dessous, occupe tout) ──────────────── */}
      <div className="absolute inset-0">
        {afterEmbed ? (
          <iframe
            src={afterEmbed}
            className="w-full h-full bg-white pointer-events-none"
            title={afterLabel}
          />
        ) : afterSrc ? (
          <Image src={afterSrc} alt={afterLabel} fill className="object-cover object-top" sizes="100vw" />
        ) : null}
        <span className="absolute bottom-5 right-5 px-3 py-1.5 rounded-full bg-onas-orange text-white font-title font-bold text-[0.7rem] tracking-[0.18em] uppercase shadow-lg">
          {afterLabel}
        </span>
      </div>

      {/* ── Couche BEFORE (au-dessus, clipée) ────────────────── */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={beforeLabel} fill className="object-cover object-top" sizes="100vw" />
        <span className="absolute bottom-5 left-5 px-3 py-1.5 rounded-full bg-white text-onas-ink font-title font-bold text-[0.7rem] tracking-[0.18em] uppercase shadow-lg border border-onas-ink/10">
          {beforeLabel}
        </span>
      </div>

      {/* ── Poignée centrale ─────────────────────────────────── */}
      <div
        className="absolute top-0 bottom-0 w-px bg-white/95 shadow-[0_0_20px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-onas-orange text-white grid place-items-center shadow-xl border-4 border-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
