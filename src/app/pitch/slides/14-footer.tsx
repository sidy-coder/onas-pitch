"use client";

import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";

const contentBullets = [
  <>Manifeste ONAS — présence territoire, engagement citoyen.</>,
  <>Navigation complète reprise en pied de page.</>,
  <>Coordonnées, réseaux sociaux, liens légaux.</>,
];

const designBullets = [
  <>Animations orchestrées au scroll, colonne par colonne.</>,
  <>Deux parties distinctes : corps + bande finale.</>,
  <>Fond sombre, typographie contrastée.</>,
];

export default function FooterSlide() {
  return (
    <div className="relative w-full h-full flex flex-col px-8 lg:px-16 pt-[160px] pb-[90px] gap-6">

      {/* ── Titre gauche / Bullets droite ────────────────────── */}
      <div className="grid grid-cols-[2fr_3fr] gap-x-12 items-center">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-title font-black uppercase text-onas-ink leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(2.4rem, 3.6vw, 4rem)" }}
        >
          On prolonge le parcours<br /><span className="text-onas-orange">jusqu&apos;au dernier lien.</span>
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

      {/* ── Aperçu footer — composant direct, scrollable ─────── */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full flex-1 min-h-0 flex flex-col rounded-2xl overflow-hidden border border-onas-ink/10 bg-onas-warm-dk shadow-[0_24px_60px_-20px_rgba(13,13,13,0.4)] mt-[100px]"
      >
        {/* Browser chrome */}
        <div className="bg-onas-warm-dk px-4 py-3 flex items-center gap-3 border-b border-white/10 flex-shrink-0">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 border border-white/10">
            <span className="font-body text-white/55 text-[0.72rem] tracking-wide">
              onas.sn — Footer
            </span>
          </div>
          <span className="font-body text-white/30 text-[0.62rem] uppercase tracking-[0.18em] hidden md:inline">
            Live · scrollable
          </span>
        </div>

        {/* Footer rendu directement — overflow-y-auto pour scroll */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          <Footer />
        </div>
      </motion.div>
    </div>
  );
}
