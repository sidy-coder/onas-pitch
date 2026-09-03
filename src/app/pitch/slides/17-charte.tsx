"use client";

import { Droplets, Palette, Type } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { asset } from "@/lib/asset";

const COLORS = [
  { name: "Orange", className: "bg-onas-orange" },
  { name: "Bleu", className: "bg-onas-blue" },
  { name: "Sombre", className: "bg-onas-warm-dk" },
  { name: "Blanc", className: "bg-white border border-onas-ink/12" },
];

const MOTIFS = [
  asset("/images/decor/goutte-orange-onas.svg"),
  asset("/images/decor/goutte-bleu-onas.svg"),
  asset("/images/decor/goutte-marron-onas.svg"),
  asset("/images/decor/groupe-motif-trois-goutte-style2-onas.svg"),
];

const PRINCIPLES = [
  {
    icon: Palette,
    title: "Des couleurs reconnaissables",
    desc: "Orange, bleu, blanc et sombre reviennent comme des repères simples.",
    color: "orange",
  },
  {
    icon: Type,
    title: "Des titres plus affirmés",
    desc: "La hiérarchie est plus claire: on comprend vite où regarder.",
    color: "blue",
  },
  {
    icon: Droplets,
    title: "Des motifs mieux intégrés",
    desc: "Les formes ONAS accompagnent les pages sans prendre toute la place.",
    color: "orange",
  },
];

export default function CharteSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white px-8 lg:px-20 pt-24 lg:pt-28 pb-20 lg:pb-24">
      <div className="absolute inset-y-0 right-0 w-[68%] opacity-[0.13] pointer-events-none select-none">
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

      <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-[0.82fr_1.38fr] gap-10 lg:gap-14 items-center">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="relative font-title font-black uppercase text-onas-ink leading-[0.92] text-5xl md:text-6xl"
          >
            On garde la même
            <span className="block text-onas-orange">signature partout.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34 }}
            className="font-body text-onas-ink/62 text-[0.98rem] leading-[1.75] mt-7 max-w-[500px]"
          >
            Chaque page garde les mêmes repères visuels: les couleurs, les titres et les motifs
            restent cohérents du début à la fin.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 22 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-0"
        >
          <div className="space-y-5">
            {PRINCIPLES.map((item, i) => {
              const Icon = item.icon;
              const isOrange = item.color === "orange";

              return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative grid grid-cols-[64px_1fr] items-center gap-5 rounded-2xl border border-onas-ink/10 bg-white/86 px-6 py-6 shadow-[0_20px_55px_-38px_rgba(13,8,4,0.45)]"
              >
                <div
                  className={`grid h-16 w-16 place-items-center rounded-2xl border ${
                    isOrange
                      ? "border-onas-orange/18 bg-onas-orange/10 text-onas-orange"
                      : "border-onas-blue/18 bg-onas-blue/10 text-onas-blue"
                  }`}
                >
                  <Icon size={26} strokeWidth={2} />
                </div>

                <div className="min-w-0">
                  <h3 className="font-title font-bold uppercase text-onas-ink text-[1.28rem] leading-none">
                    {item.title}
                  </h3>
                  <p className="font-body text-onas-ink/58 text-[1rem] leading-[1.55] mt-2">
                    {item.desc}
                  </p>

                  {item.title === "Des couleurs reconnaissables" && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {COLORS.map((color) => (
                        <div key={color.name} className="space-y-1.5">
                          <span className={`block h-8 rounded-xl ${color.className}`} />
                          <span className="block font-body text-onas-ink/42 text-[0.68rem]">
                            {color.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {item.title === "Des titres plus affirmés" && (
                    <div className="mt-4 rounded-xl border border-onas-ink/10 bg-onas-surface/70 px-4 py-3">
                      <p className="font-title font-black uppercase text-onas-ink text-[1.9rem] leading-[0.9]">
                        L’assainissement
                        <span className="text-onas-orange"> pour un meilleur cadre de vie.</span>
                      </p>
                      <p className="font-body text-onas-ink/58 text-[0.86rem] leading-[1.5] mt-2">
                        Un titre fort, puis un texte simple pour accompagner la lecture.
                      </p>
                    </div>
                  )}

                  {item.title === "Des motifs mieux intégrés" && (
                    <div className="mt-4 grid grid-cols-4 gap-2">
                      {MOTIFS.map((src, motifIndex) => (
                        <div
                          key={src}
                          className="relative h-14 rounded-xl border border-onas-ink/10 bg-onas-surface/70 grid place-items-center"
                        >
                          <Image
                            src={src}
                            alt=""
                            width={38}
                            height={38}
                            className={`h-9 w-9 object-contain ${motifIndex === 3 ? "opacity-45" : "opacity-80"}`}
                          />
                        </div>
                      ))}
                    </div>
                  )}
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
