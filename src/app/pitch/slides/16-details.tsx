"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Accessibility, Gauge, Smartphone, Sparkles } from "lucide-react";

const DETAILS = [
  {
    icon: Sparkles,
    title: "Une lecture plus agréable",
    desc: "Les pages avancent avec douceur, sans rupture ni surcharge.",
    color: "blue",
  },
  {
    icon: Smartphone,
    title: "Un site confortable sur mobile",
    desc: "Les contenus restent clairs et faciles à parcourir sur petit écran.",
    color: "orange",
  },
  {
    icon: Gauge,
    title: "Des pages plus rapides",
    desc: "Le site se charge mieux et garde une navigation réactive.",
    color: "blue",
  },
  {
    icon: Accessibility,
    title: "Une expérience plus accessible",
    desc: "Les contrastes, les focus et les interactions restent lisibles.",
    color: "orange",
  },
];

export default function DetailsSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white px-8 lg:px-20 pt-24 lg:pt-28 pb-20 lg:pb-24">
      <div className="absolute inset-y-0 right-0 w-[72%] opacity-[0.16] pointer-events-none select-none">
        <Image
          src="/images/decor/motif-beige-cote-droit.svg"
          alt=""
          fill
          sizes="72vw"
          className="object-cover object-right-center"
        />
      </div>
      <div className="absolute left-[48%] top-0 bottom-0 w-px bg-onas-ink/8" />
      <div className="absolute left-[48%] top-0 bottom-0 w-24 bg-gradient-to-r from-onas-orange/[0.07] to-transparent" />
      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-[0.9fr_1.35fr] gap-10 lg:gap-14 items-center">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative font-title font-black uppercase text-onas-ink leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(2.1rem, 3.4vw, 3.6rem)" }}
          >
            On soigne ce qui rend
            <span className="block text-onas-orange">l&apos;expérience fluide.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.36 }}
            className="font-body text-onas-ink/62 text-[0.98rem] leading-[1.75] mt-7 max-w-[500px]"
          >
            L&apos;objectif est simple: rendre le site plus facile à lire, plus agréable à parcourir,
            et plus clair sur tous les écrans.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-0"
        >
          <div className="absolute left-5 top-5 bottom-5 w-px bg-onas-ink/12" />
          <div className="absolute left-5 top-5 h-24 w-px bg-onas-orange" />

          <div className="space-y-5">
            {DETAILS.map((detail, i) => {
              const Icon = detail.icon;
              const isOrange = detail.color === "orange";

              return (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.46 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative grid grid-cols-[56px_1fr] items-center gap-5 rounded-2xl border border-onas-ink/10 bg-white/86 px-6 py-5 shadow-[0_18px_45px_-34px_rgba(13,8,4,0.45)] backdrop-blur-sm"
                >
                  <div className="relative z-10 grid h-14 w-14 place-items-center rounded-2xl bg-white border border-onas-ink/12">
                    <Icon
                      size={24}
                      strokeWidth={2}
                      className={isOrange ? "text-onas-orange" : "text-onas-blue"}
                    />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="font-title font-bold uppercase text-onas-ink text-[1.25rem] leading-none">
                        {detail.title}
                      </span>
                    </div>
                    <p className="font-body text-onas-ink/58 text-[1rem] leading-[1.55] mt-2">
                      {detail.desc}
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
