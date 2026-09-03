"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Compass, Map, Shield, Sparkles } from "lucide-react";
import { asset } from "@/lib/asset";

const OBJECTIFS = [
  {
    icon: Compass,
    title: "Informer vite",
    desc: "L'utilisateur comprend où il est et ce qu'il peut faire.",
    color: "blue",
  },
  {
    icon: Map,
    title: "Guider le parcours",
    desc: "Les rubriques deviennent plus simples à explorer.",
    color: "orange",
  },
  {
    icon: BookOpen,
    title: "Rendre le contenu accessible",
    desc: "Documents, projets et opportunités se trouvent plus facilement.",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Moderniser l'image",
    desc: "Le site reflète mieux l'ONAS d'aujourd'hui.",
    color: "orange",
  },
  {
    icon: Shield,
    title: "Renforcer la confiance",
    desc: "Une présentation claire rend l'institution plus lisible.",
    color: "blue",
  },
];

export default function ObjectifsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white px-8 lg:px-20 pt-24 lg:pt-28 pb-20 lg:pb-24">
      <div className="absolute inset-y-0 right-0 w-[68%] opacity-[0.12] pointer-events-none select-none">
        <Image
          src={asset("/images/decor/motif-beige-cote-droit.svg")}
          alt=""
          fill
          sizes="68vw"
          className="object-cover object-right-center"
        />
      </div>
      <div className="absolute left-[48%] top-0 bottom-0 w-px bg-onas-ink/8" />
      <div className="absolute left-[48%] top-0 bottom-0 w-24 bg-gradient-to-r from-onas-orange/[0.06] to-transparent" />

      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-[0.86fr_1.34fr] gap-10 lg:gap-14 items-center">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="font-title font-black uppercase text-onas-ink leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 3.4vw, 3.6rem)" }}
          >
            On transforme le constat en
            <span className="block text-onas-orange">méthode.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="font-body text-onas-ink/62 text-[1rem] leading-[1.75] mt-7 max-w-[500px]"
          >
            Après l&apos;audit, chaque choix répond à une priorité simple:
            aider les visiteurs à comprendre, trouver et agir plus facilement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-0"
        >
          <div className="absolute left-7 top-7 bottom-7 w-px bg-onas-ink/12" />
          <div className="absolute left-7 top-7 h-28 w-px bg-onas-orange" />

          <div className="space-y-4">
            {OBJECTIFS.map((obj, i) => {
              const Icon = obj.icon;
              const isOrange = obj.color === "orange";

              return (
                <motion.div
                  key={obj.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.44 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid grid-cols-[56px_1fr] items-center gap-5 rounded-2xl border border-onas-ink/10 bg-white/86 px-6 py-4 shadow-[0_18px_45px_-34px_rgba(13,8,4,0.45)]"
                >
                  <div
                    className={`relative z-10 grid h-14 w-14 place-items-center rounded-2xl border ${
                      isOrange
                        ? "border-onas-orange/18 bg-onas-orange/10 text-onas-orange"
                        : "border-onas-blue/18 bg-onas-blue/10 text-onas-blue"
                    }`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-title font-bold uppercase text-onas-ink text-[1.38rem] leading-none">
                      {obj.title}
                    </h3>
                    <p className="font-body text-onas-ink/58 text-[0.96rem] leading-[1.52] mt-2">
                      {obj.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
