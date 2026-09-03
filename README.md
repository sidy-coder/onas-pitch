# Présentation — Refonte ONAS.SN

Présentation interactive en 19 slides de la refonte du site de l'**Office National
de l'Assainissement du Sénégal**. Ce n'est pas un export d'un logiciel de
diaporama : chaque slide est un composant React, et huit d'entre eux embarquent
le site réel dans un cadre navigable — on présente le produit, pas une capture
d'écran.

Construite avec **Next.js 16** (App Router), **Tailwind CSS 4** et
**framer-motion**. Le site produit est entièrement statique : aucune base de
données, aucune API, aucun serveur à maintenir.

**▶ À voir en ligne : https://sidy-coder.github.io/onas-pitch/**

---

## Démarrer

```bash
npm install
npm run dev          # http://localhost:3000 → redirige vers /pitch/01
```

Pour produire la version livrable :

```bash
npm run build        # écrit le site fini dans out/
npm run preview      # sert out/ sur http://localhost:3000 pour le relire
```

> **Pas de Node sur votre machine ?** Tout se fait aussi dans un conteneur — c'est
> la voie utilisée sur le VPS, où Node n'est pas installé :
> ```bash
> docker run --rm -v "$PWD":/app -w /app node:24-alpine npm install
> docker run --rm -v "$PWD":/app -w /app node:24-alpine npm run build
> docker run --rm -p 3999:80 -v "$PWD/out":/usr/share/nginx/html:ro nginx:alpine
> ```

### Naviguer pendant la présentation

| Touche | Effet |
|---|---|
| `→` · `Espace` · `Page ↓` | Slide suivant |
| `←` · `Page ↑` | Slide précédent |
| `Début` | Retour au slide 01 |
| `Fin` | Aller au slide 18 (démo) |

Le slide suivant est préchargé, la transition ne marque donc pas de temps d'arrêt.
Chaque slide a son URL propre (`/pitch/07`) : on peut ouvrir la présentation
directement au bon endroit, ou envoyer un lien vers un slide précis.

---

## Le déroulé

Trois actes. Acte I : le constat. Acte II : les réponses, rubrique par rubrique.
Acte III : la preuve.

| # | id | Titre | Acte | Ce que montre le slide |
|---|----|-------|------|------------------------|
| 1 | `01` | Couverture | I | Ouverture, logos ONAS + Levell |
| 2 | `02` | Le contenu était là | I | Capture de l'ancien onas.sn, audit |
| 3 | `03` | On transforme le constat en méthode | I | Les 5 objectifs de la refonte |
| 4 | `04` | Question d'amorce | I | Respiration, fond sombre |
| 5 | `05` | On commence par l'architecture | II | Arborescence du nouveau site |
| 6 | `05b` | On adapte le parcours aux écrans | II | Déclinaison responsive |
| 7 | `06` | On fait de l'accueil le point d'entrée | II | **Cadre live** — page d'accueil |
| 8 | `07` | On donne à l'ONAS un récit clair | II | **Cadre live** — `/a-propos` |
| 9 | `08` | On rend chaque projet lisible | II | **Cadre live** — `/projets` |
| 10 | `09` | On fait circuler l'information | II | **Cadre live** — `/actualites` |
| 11 | `10` | On rend les documents trouvables | II | **Cadre live** — `/documents` |
| 12 | `11` | On rend les opportunités visibles | II | **Cadre live** — `/opportunites` |
| 13 | `12` | On montre la valeur des ressources | II | **Cadre live** — `/produits-derives` |
| 14 | `13` | On facilite la prise de contact | II | **Cadre live** — `/contact` |
| 15 | `14` | On prolonge le parcours | II | Le pied de page réel, rendu en direct |
| 16 | `15` | On compare le départ au résultat | III | Comparateur avant/après à curseur |
| 17 | `16` | On soigne l'expérience | III | Points chauds sur les détails d'interface |
| 18 | `17` | On garde la même signature | III | Charte : couleurs, typographies |
| 19 | `18` | On passe à la démo | III | Sortie vers le site réel |

L'ordre, les titres et les actes vivent **au même endroit** :
[`src/app/pitch/lib/slides.ts`](src/app/pitch/lib/slides.ts).

---

## Structure du dépôt

```
src/
├── app/
│   ├── layout.tsx              Polices (Jost + DIN Condensed) et métadonnées
│   ├── globals.css             Design system ONAS — bloc @theme de Tailwind 4
│   ├── page.tsx                /       → renvoie au premier slide
│   ├── fonts/                  DIN Condensed Bold (woff2 + woff)
│   └── pitch/
│       ├── page.tsx            /pitch  → renvoie au premier slide
│       ├── [id]/page.tsx       /pitch/07 — la route d'un slide
│       ├── lib/
│       │   ├── slides.ts       ◀ LE REGISTRE : ordre, titres, actes, tons
│       │   └── site.ts         Résolution des URL du site présenté
│       ├── components/         Les briques réutilisables (voir plus bas)
│       └── slides/             Les 19 slides, un fichier chacun
└── components/
    ├── layout/Footer.tsx       Copie du pied de page d'onas-web (slide 14)
    └── ui/                     SplitText + son contexte, requis par le Footer
public/images/                  Uniquement les visuels que la présentation utilise
```

---

## Modifier la présentation

### Changer un texte, une couleur, une animation

Ouvrez le fichier du slide dans `src/app/pitch/slides/`. Le nom porte le numéro :
`09-actualites.tsx` est le slide `09`. Chaque fichier est autonome — le modifier
n'affecte aucun autre.

### Réordonner, retirer ou renommer un slide

Tout se passe dans `src/app/pitch/lib/slides.ts`. Le tableau `SLIDES` **est**
l'ordre de la présentation : déplacez une ligne et la navigation, la numérotation
et la barre de progression suivent d'elles-mêmes.

```ts
{ id: "09", index: 10, title: "On fait circuler l'information", act: "II", tone: "light", Component: ActualitesSlide },
```

- `id` — le morceau d'URL (`/pitch/09`). Une chaîne, pas un nombre : c'est ce qui
  permet d'insérer un `05b` entre `05` et `06` sans tout renuméroter.
- `index` — le rang affiché en bas de l'écran. **À réajuster** après un
  déplacement, il n'est pas déduit de la position.
- `tone` — `"light"` (fond blanc) ou `"dark"` (fond sombre) : `SlideShell` en
  déduit toutes les couleurs de texte.

Pour **retirer** un slide, supprimez sa ligne et son `import`. Le fichier peut
rester dans `slides/`, il ne sera plus construit.

### Ajouter un slide

1. Créez `src/app/pitch/slides/19-mon-slide.tsx` — un composant React par défaut,
   sans `SlideShell` : c'est `PitchClient` qui l'enveloppe.
2. Importez-le dans `lib/slides.ts` et ajoutez sa ligne au tableau `SLIDES`.

C'est tout : la route `/pitch/19` est générée au build par `generateStaticParams`.

---

## Les briques réutilisables

Elles sont dans `src/app/pitch/components/`.

**`SlideShell`** — le cadre commun : fond selon le ton, barre de progression,
numéro, titre, flèches. Appliqué automatiquement par `PitchClient`, un slide n'a
pas à s'en occuper.
`index: number` · `title: string` · `tone?: "light" | "dark"`

**`SlideSplit`** — la mise en page dominante : narration à gauche, démonstration à
droite. Les puces sont réparties en deux colonnes, « Contenu » et « Design ».
`title: ReactNode` · `contentBullets?` · `designBullets?` · `rightSlot: ReactNode` · `tone?`

**`LiveFrame`** — le site réel dans une fenêtre de navigateur dessinée. `src` est
un **chemin du site présenté**, pas de cette application : il est résolu par
`lib/site.ts`.
`src: string` · `label?: string` · `scale?: number` · `className?: string`

**`BeforeAfter`** — comparateur à curseur glissant. L'« après » accepte une image
(`afterSrc`) ou un site vivant (`afterEmbed`).
`beforeSrc` · `afterSrc?` · `afterEmbed?` · `beforeLabel?` · `afterLabel?`

**`Hotspot`** — pastille pulsante posée sur une capture, qui révèle une bulle au
survol. Position en pourcentage du conteneur parent.
`x: 0–100` · `y: 0–100` · `label: string` · `description?: string` · `side?: "top" | "bottom" | "left" | "right"`

**`PitchClient`** — le moteur : clavier, transitions, préchargement. À ne toucher
que pour changer le comportement de navigation lui-même.

---

## Le design system

Défini dans le bloc `@theme` de `src/app/globals.css`, repris tel quel du site.
Tailwind 4 n'utilise **pas** de `tailwind.config.js` : les jetons sont des
variables CSS, et Tailwind en dérive les classes utilitaires.

| Classe | Valeur | Emploi |
|---|---|---|
| `onas-blue` | `#0266AE` | Bleu institutionnel |
| `onas-orange` | `#B45326` | Accent, progression, puces |
| `onas-orange-dk` | `#8c3e1c` | Survol de l'accent |
| `onas-ink` | `#1e2533` | Texte sur fond clair |
| `onas-surface` | `#F4F6FA` | Fond clair secondaire |
| `onas-warm-dk` | `#0d0804` | Fond des slides sombres |

Deux familles : `font-title` (DIN Condensed Bold — titres) et `font-body` (Jost —
tout le reste). Ajouter une couleur = ajouter une ligne `--color-onas-…` dans
`@theme`, la classe `bg-onas-…` / `text-onas-…` existe aussitôt.

> La typographie des titres, **DIN Condensed Bold**, est un fichier sous licence
> livré dans `src/app/fonts/`. Elle vient de la charte ONAS ; vérifiez vos droits
> avant de la réutiliser hors de ce projet.

---

## Configuration

Copiez `.env.example` en `.env` si vous devez changer quelque chose. Les deux
réglages sont facultatifs — sans eux, la présentation fonctionne.

### `NEXT_PUBLIC_SITE_URL` — le site montré dans les cadres

Par défaut `https://onas.sn`. C'est l'adresse qu'affichent les huit cadres
« Live · interactif », le comparateur du slide 15 et le bouton final.

Pour présenter une préproduction, ou une copie locale du site :

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3001
```

Une seule variable, aucun slide à retoucher.

> ⚠️ Un site ne s'affiche dans un cadre que s'il l'autorise. Si les cadres
> restent blancs, c'est presque toujours que le site cible renvoie un en-tête
> `X-Frame-Options: DENY` ou un `Content-Security-Policy: frame-ancestors`.
> Pour vérifier : `curl -sI <url> | grep -i "x-frame\|content-security"`.
> `onas.sn` n'en pose aucun — il s'embarque sans réglage.

### `BASE_PATH` — servir depuis un sous-chemin

Nécessaire **uniquement** pour GitHub Pages sur un dépôt de projet, où le site
vit sous `https://<compte>.github.io/onas-pitch/`. Voir ci-dessous.

---

## Déployer

Le build produit un dossier `out/` d'HTML, de CSS et de JS. N'importe quel
hébergement de fichiers statiques suffit.

### GitHub Pages — déjà en place

Rien à faire : [`.github/workflows/pages.yml`](.github/workflows/pages.yml)
reconstruit et republie à chaque push sur `main`. Le résultat est sur
**https://sidy-coder.github.io/onas-pitch/**.

Pour reproduire la même chose à la main, ou sur un autre compte :

```bash
BASE_PATH=/onas-pitch npm run build
touch out/.nojekyll     # sinon Pages passe la sortie à Jekyll, qui ignore _next/
```

`BASE_PATH` est indispensable dès que le site vit dans un sous-chemin : sans lui
la page se charge, mais tous les liens et visuels pointent une case trop haut —
et rien n'échoue au build, la panne est silencieuse. Sur un domaine personnalisé
à la racine, **ne le définissez pas**.

### Netlify, Vercel, Cloudflare Pages

Commande de build `npm run build`, dossier publié `out`, pas de `BASE_PATH`.

### Un serveur statique

```bash
npm run build
rsync -av out/ serveur:/var/www/pitch/
```

`trailingSlash` est actif : chaque slide est un dossier avec son `index.html`,
donc aucune règle de réécriture n'est à écrire côté nginx ou Apache.

---

## D'où vient ce dépôt

La présentation vivait à l'origine **dans** le site, sous
`src/app/(frontend)/pitch/` du dépôt [`sidy-coder/onas-web`](https://github.com/sidy-coder/onas-web).

- Ajoutée le 2026-05-04 — commit `431a51d`
- Retirée le 2026-05-11 — commit `457e660`, lors de l'unification des deux dépôts
  ONAS ; elle n'était liée depuis aucune page du site
- Extraite ici le 2026-09-03 depuis `457e660^`, sans perte

Le code des 19 slides est **celui d'origine**. Rendre le projet autonome a demandé
exactement quatre changements, tous marqués d'un commentaire dans le code :

1. **`lib/site.ts` (nouveau)** — dans le site, les cadres visaient des chemins
   relatifs (`/projets`). Hors du site, il faut des URL absolues. `LiveFrame` et le
   slide 15 passent maintenant par `siteUrl()`.
2. **`Footer.tsx`** — les liens de navigation du pied de page sont résolus vers le
   site réel et s'ouvrent dans un onglet séparé. Sans cela, un clic pendant la
   démo tomberait sur une 404, puisque ce dépôt n'embarque pas les pages du site.
3. **Slide 18** — « Lancer la démo officielle » pointe vers le site réel.
4. **Les deux pages d'entrée** — `redirect()` de Next suppose un serveur ; le site
   étant exporté en statique, la redirection se fait côté navigateur, avec un lien
   visible en repli.

`Footer.tsx`, `SplitText.tsx` et `GradientTextContext.tsx` sont des **copies** de
`onas-web`. Si le pied de page change là-bas, il faut le reporter ici — rien ne le
fait automatiquement.

---

## Bon à savoir avant de reprendre

- **`index` n'est pas déduit de la position** dans `SLIDES`. Déplacer une ligne
  sans corriger son `index` donne une numérotation fausse à l'écran, sans erreur
  au build.
- **Les cadres dépendent du réseau.** En salle sans connexion, les huit slides
  « live » resteront vides. Pour une présentation hors ligne, remplacez les
  `LiveFrame` par des captures — ou faites tourner le site en local et pointez
  `NEXT_PUBLIC_SITE_URL` dessus.
- **La présentation est en `noindex`.** C'est voulu : document de travail.
  À retirer dans `src/app/layout.tsx` et `src/app/pitch/[id]/page.tsx` si elle
  doit devenir publique et référencée.
- **Le pied de page du slide 14 est un vrai composant**, pas une image : il se
  déroule dans son cadre et suit le design réel. C'est aussi pourquoi `gsap`
  figure dans les dépendances — `SplitText` en a besoin.
- **`public/` ne contient que les visuels utilisés.** Un `<Image>` ajouté vers un
  fichier resté dans `onas-web` sera introuvable ; copiez-le d'abord.

---

## Licence et propriété

Contenus, marque, visuels et charte ONAS : propriété de l'**Office National de
l'Assainissement du Sénégal**. Conception et développement : **Levell**
([levell.agency](https://levell.agency)).

Le dépôt est public pour que la présentation soit consultable par lien, mais son
contenu n'est pas libre de droits : ni les visuels, ni les logos, ni la
typographie des titres ne sont réutilisables hors de ce projet. La présentation
reste par ailleurs en `noindex` — partageable, non référencée.
