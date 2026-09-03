/**
 * Le site réel présenté par les slides.
 *
 * Dans le dépôt d'origine, la présentation vivait DANS le site onas.sn : les
 * cadres « Live » pointaient donc sur des chemins relatifs (`/`, `/projets`…).
 * Ce dépôt-ci est autonome — ces chemins doivent être résolus en URL absolues.
 *
 * Se règle avec `NEXT_PUBLIC_SITE_URL` (voir `.env.example`). Pour présenter une
 * préproduction ou un site tournant en local, il suffit de changer cette
 * variable : aucun slide n'est à retoucher.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://onas.sn"
).replace(/\/$/, "");

/** `siteUrl("/projets")` → `https://onas.sn/projets` */
export function siteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
