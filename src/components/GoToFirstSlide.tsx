"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

/**
 * Entrée de la présentation : `/` et `/pitch` renvoient au premier slide.
 *
 * Le site étant exporté en statique, il n'y a pas de serveur pour émettre une
 * redirection HTTP — elle se fait donc au montage, côté navigateur. Le lien
 * reste affiché : il sert de repli si JavaScript est désactivé.
 */
export default function GoToFirstSlide() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/pitch/01");
  }, [router]);

  return (
    <main className="min-h-screen grid place-items-center bg-onas-surface px-6">
      <Link
        href="/pitch/01"
        className="font-title uppercase tracking-[0.18em] text-onas-ink/70 hover:text-onas-orange transition-colors"
      >
        Ouvrir la présentation
      </Link>
    </main>
  );
}
