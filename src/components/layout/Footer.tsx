"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteUrl } from "@/app/pitch/lib/site";
import SplitText from "@/components/ui/SplitText";

/* ── Icônes réseaux sociaux ───────────────────────────────── */
const IconFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconYouTube = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={14} height={14}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0d0804" />
  </svg>
);
const IconX = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

/**
 * ⚠️ Seule divergence avec le Footer du site onas.sn, dont ce fichier est une
 * copie : ici la présentation n'embarque pas les pages du site. Un lien de
 * navigation renverrait donc sur une 404 en pleine démo. On le résout vers le
 * site réel et on l'ouvre dans un onglet à part, pour ne pas quitter le slide.
 * Reporter cette copie depuis onas-web si le Footer y évolue.
 */
function toSiteHref(href: string): string {
  if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:")) return href;
  if (/^https?:\/\//.test(href)) return href;
  return siteUrl(href);
}

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "L'ONAS",
    links: [
      { label: "Qui sommes-nous",    href: "/a-propos" },
      { label: "Nos missions",       href: "/a-propos#missions" },
      { label: "Nos valeurs",        href: "/a-propos#valeurs" },
      { label: "Présence nationale", href: "/a-propos#presence" },
      { label: "Partenaires",        href: "/a-propos#partenaires" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Raccordement",     href: "/services#tab-branchement-egout" },
      { label: "Vidange",          href: "/services#tab-depotage" },
      { label: "Réseaux pluviaux", href: "/services#tab-appui-promoteurs" },
      { label: "Traitement boues", href: "/services#tab-depotage" },
      { label: "Produits dérivés", href: "/produits-derives" },
    ],
  },
  {
    title: "Informations",
    links: [
      { label: "Actualités",         href: "/actualites" },
      { label: "Publications",       href: "/documents?cat=publication" },
      { label: "Appels d'offres",    href: "/opportunites" },
      { label: "Emplois & Stages",   href: "/opportunites?cat=job" },
      { label: "Textes législatifs", href: "/a-propos#textes" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "81 800 10 12",          href: "tel:+221818001012" },
      { label: "onas@onas.sn",          href: "mailto:onas@onas.sn" },
      { label: "Rue Fleurus × Rue Sor", href: "#" },
      { label: "Dakar, Sénégal",        href: "#" },
    ],
  },
];

const socials = [
  { icon: IconFacebook, href: "#", label: "Facebook" },
  { icon: IconX,        href: "#", label: "X" },
  { icon: IconLinkedIn, href: "#", label: "LinkedIn" },
  { icon: IconYouTube,  href: "#", label: "YouTube" },
];

const footerGroupVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const footerRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(12px)",
    clipPath: "inset(18% 0% 0% 0%)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.95,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const footerColumnVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.985,
    filter: "blur(10px)",
    clipPath: "inset(14% 0% 0% 0%)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const footerRuleVariants: Variants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const footerTitleWrapVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

const footerLinkGroupVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.14,
    },
  },
};

const footerLinkVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -8,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Footer() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "0px 0px 220px 0px", amount: 0.01 });
  const hasEntered = prefersReducedMotion || inView;
  const animationState = hasEntered ? "show" : "hidden";
  const initialState = prefersReducedMotion ? false : "hidden";

  const isActive = (href: string) => {
    const base = href.split("#")[0];
    if (base === "" || base === "/") return pathname === "/";
    if (!base.startsWith("/")) return false;
    return pathname.startsWith(base);
  };

  return (
    <footer ref={ref} className="relative text-white overflow-hidden" style={{ background: "#001a33" }}>

      {/* ── Gradient bleu nuit institutionnel ───────────────── */}
      <div
        aria-hidden
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, #0a2540 0%, #001a33 42%, #000a14 100%)" }}
      />

      {/* ── Ligne orange horizon animée ─────────────────────── */}
      <div className="relative z-10">
        <motion.div
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={hasEntered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
          className="h-[1px] origin-left"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, rgba(180,83,38,0.5) 20%, rgba(180,83,38,0.9) 50%, rgba(180,83,38,0.5) 80%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Contenu ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">

        {/* ══ Bloc Manifeste ─────────────────────────────────── */}
        <motion.div
          initial={initialState}
          animate={animationState}
          variants={footerGroupVariants}
          className="pt-24 lg:pt-28 pb-14 lg:pb-20"
        >

          <motion.div variants={footerTitleWrapVariants} className="relative">
            {prefersReducedMotion ? (
              <h2 className="font-title font-bold text-white uppercase leading-[0.92] tracking-tight">
                <span
                  className="block"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
                >
                  L’assainissement
                </span>
                <span
                  className="block text-onas-orange"
                  style={{ fontSize: "clamp(1.4rem, 4vw, 4.5rem)" }}
                >
                  pour un meilleur cadre de vie.
                </span>
              </h2>
            ) : (
              <>
                <SplitText
                  text="L’assainissement"
                  tag="h2"
                  className="font-title font-bold text-white uppercase leading-[0.92] tracking-tight block"
                  textAlign="left"
                  delay={24}
                  duration={1.05}
                  ease="power4.out"
                  rootMargin="0px"
                  from={{ opacity: 0, y: 78, rotateX: -72, filter: "blur(14px)" }}
                  to={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  style={{ fontSize: "clamp(2.5rem, 7vw, 7.5rem)" }}
                />
                <SplitText
                  text="pour un meilleur cadre de vie."
                  tag="span"
                  className="font-title font-bold text-onas-orange uppercase leading-[0.92] tracking-tight block"
                  textAlign="left"
                  delay={28}
                  duration={1.08}
                  ease="power4.out"
                  rootMargin="0px"
                  from={{ opacity: 0, y: 84, rotateX: -78, filter: "blur(16px)" }}
                  to={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  style={{ fontSize: "clamp(1.4rem, 4vw, 4.5rem)" }}
                />
              </>
            )}
          </motion.div>

          <motion.div
            variants={footerRevealVariants}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mt-10 pt-10 relative"
          >
            <motion.span
              aria-hidden
              variants={footerRuleVariants}
              className="absolute top-0 left-0 h-px w-full origin-left bg-gradient-to-r from-white/5 via-white/14 to-transparent"
            />
            <p className="text-white/55 font-body text-[0.97rem] leading-[1.68] max-w-[520px]">
              L&apos;ONAS accompagne le Sénégal dans sa transformation — réseaux d&apos;assainissement,
              stations de traitement, valorisation des ressources — pour un cadre de vie
              sain, durable et accessible à tous.
            </p>
            <a
              href={toSiteHref("/contact")}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 self-start lg:self-end text-white font-condensed font-bold text-[0.95rem] tracking-[0.06em] uppercase border-b-2 border-white/30 hover:border-onas-orange hover:text-onas-orange pb-1.5 transition-colors"
            >
              Travaillons ensemble
              <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* ══ Brand + 4 colonnes nav ──────────────────────────── */}
        <motion.div
          initial={initialState}
          animate={animationState}
          variants={footerGroupVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-x-8 gap-y-12 pb-14 border-t border-white/8 pt-14"
        >

          {/* ── Brand column ─────────────────────────────────── */}
          <motion.div variants={footerColumnVariants} className="col-span-2 md:col-span-1 space-y-7">
            <motion.div
              className="flex items-center gap-3.5"
              whileHover={prefersReducedMotion ? undefined : { x: 4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/images/logos/onas-logo-white.png"
                  alt="ONAS"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <div className="font-title font-bold text-white text-[1.65rem] tracking-wide leading-none uppercase">
                  ONAS
                </div>
                <div className="text-white/35 text-[10px] tracking-[0.09em] uppercase leading-tight mt-1.5">
                  Office National de l&apos;Assainissement<br />du Sénégal
                </div>
              </div>
            </motion.div>

            <p className="text-white/45 text-[13px] leading-[1.65] max-w-[260px]">
              Au service des populations sénégalaises depuis 1996 — collecte,
              traitement et valorisation des eaux usées et pluviales.
            </p>

            <div className="flex gap-2 pt-1">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 hover:border-onas-orange hover:bg-onas-orange flex items-center justify-center text-white/60 hover:text-white transition-all hover:-translate-y-0.5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Colonnes de liens ────────────────────────────── */}
          {columns.map((col) => (
            <motion.div key={col.title} variants={footerColumnVariants}>
              <p className="font-title font-bold text-white text-[1.05rem] tracking-tight uppercase mb-5">
                {col.title}
              </p>
              <motion.ul variants={footerLinkGroupVariants} className="space-y-3">
                {col.links.map(({ label, href }) => {
                  const active = isActive(href);
                  const isProtocolLink = href.startsWith("tel:") || href.startsWith("mailto:");
                  const cls = active
                    ? "text-white font-semibold text-sm border-l-2 border-onas-orange pl-2.5 inline-block transition-all"
                    : "text-white/50 hover:text-white hover:pl-2 text-sm transition-all inline-block duration-200";
                  return (
                    <motion.li key={label} variants={footerLinkVariants}>
                      {isProtocolLink ? (
                        <a href={href} className={cls}>{label}</a>
                      ) : (
                        <a href={toSiteHref(href)} target="_blank" rel="noreferrer" className={cls}>{label}</a>
                      )}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ══ Baseline légale ───────────────────────────────── */}
      <motion.div
        initial={initialState}
        animate={animationState}
        variants={footerColumnVariants}
        className="relative z-10 border-t border-white/8 bg-black/35 backdrop-blur-sm"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11.5px]">
            <p className="text-white/30 font-body">
              © 2026 ONAS — Office National de l&apos;Assainissement du Sénégal. Tous droits réservés.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 text-white/30">
              {["Mentions légales", "Confidentialité", "Accessibilité", "Plan du site"].map((l) => (
                <Link key={l} href="#" className="hover:text-white transition-colors font-body">
                  {l}
                </Link>
              ))}
            </div>
            <a
              href="https://levell.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-white/40 hover:text-onas-orange transition-colors font-body italic"
            >
              Réalisé par{" "}
              <span className="relative font-title font-bold not-italic tracking-[0.12em] text-white/70 group-hover:text-onas-orange transition-colors">
                LEVELL
                <span className="absolute -bottom-0.5 inset-x-0 h-px bg-onas-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
              </span>
              <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
