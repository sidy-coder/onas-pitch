import type { NextConfig } from "next";

/**
 * La présentation ne lit aucune base de données : elle s'exporte en HTML
 * statique et se sert depuis n'importe où (GitHub Pages, Netlify, un simple
 * nginx). `next build` écrit le site fini dans `out/`.
 *
 * BASE_PATH — à renseigner UNIQUEMENT si le site est servi depuis un
 * sous-chemin, typiquement GitHub Pages : https://<compte>.github.io/onas-pitch
 * → BASE_PATH=/onas-pitch. Vide pour un domaine racine ou Netlify/Vercel.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  // Répercutée côté navigateur pour `src/lib/asset.ts` : `basePath` ne préfixe
  // PAS le `src` des images non optimisées, il faut donc le faire à la main.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // `output: "export"` n'embarque pas le serveur d'optimisation d'images.
  images: { unoptimized: true },
  // Chaque slide devient un dossier avec son index.html → servable tel quel.
  trailingSlash: true,
};

export default nextConfig;
