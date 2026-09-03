/**
 * Préfixe un fichier de `public/` par le sous-chemin de déploiement.
 *
 * ⚠️ Pourquoi ce détour : `basePath` de Next préfixe les liens et les fichiers
 * de `_next/`, mais PAS le `src` d'un `next/image` en mode `unoptimized` — et ce
 * mode est imposé par `output: "export"`. Sur GitHub Pages, un `src="/images/x"`
 * part donc chercher `github.io/images/x` au lieu de
 * `github.io/onas-pitch/images/x`, et renvoie 404.
 *
 * Rien ne le signale au build : la page se construit, se déploie, et les visuels
 * manquent à l'écran. Constaté en ligne le 2026-09-03, sur 7 images du slide 17.
 *
 * Tout chemin vers `public/` passe donc par cette fonction. `NEXT_PUBLIC_BASE_PATH`
 * est posée par `next.config.ts` à partir de `BASE_PATH` — rien à régler à la main.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
}
