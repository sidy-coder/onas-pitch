"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteUrl } from "../lib/site";
import { ArrowUpRight, RotateCcw } from "lucide-react";

export default function DemoSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white px-8 lg:px-20 pt-24 lg:pt-28 pb-20 lg:pb-24">
      <div className="absolute inset-y-0 right-0 w-[74%] opacity-[0.14] pointer-events-none select-none">
        <Image
          src="/images/decor/motif-beige-cote-droit.svg"
          alt=""
          fill
          sizes="74vw"
          className="object-cover object-right-center"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-onas-surface to-transparent" />
      <div className="absolute left-[48%] top-0 bottom-0 w-px bg-onas-ink/8" />
      <div className="absolute left-[48%] top-0 bottom-0 w-24 bg-gradient-to-r from-onas-orange/[0.06] to-transparent" />

      <div className="relative z-10 max-w-[980px] mx-auto h-full grid place-items-center">
        <div className="relative text-center">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 font-title font-black text-onas-ink/[0.035] text-[12rem] leading-none select-none"
          >
            GO
          </motion.div>

          <h1 className="relative font-title font-black uppercase text-onas-ink leading-[0.9] text-6xl md:text-7xl lg:text-8xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              On passe
            </motion.span>
            <motion.span
              className="block text-onas-orange"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              à la démo.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.52 }}
            className="font-body text-onas-ink/62 text-[1rem] leading-[1.75] mt-8 max-w-[520px] mx-auto"
          >
            La présentation s&apos;arrête ici. La suite se juge dans le site réel:
            navigation, contenus, interactions et rythme de lecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={siteUrl("/")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-onas-orange hover:bg-onas-orange-dk text-white font-body font-semibold px-7 py-4 text-[0.95rem] rounded-xl transition-colors shadow-[0_18px_40px_-24px_rgba(180,83,38,0.8)]"
            >
              Lancer la démo officielle
              <ArrowUpRight
                size={18}
                strokeWidth={2.4}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <Link
              href="/pitch/01"
              className="inline-flex items-center gap-2 font-body text-onas-ink/48 hover:text-onas-ink text-[0.86rem] transition-colors"
            >
              <RotateCcw size={15} />
              Revoir depuis le début
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
