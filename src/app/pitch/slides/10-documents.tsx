"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function DocumentsSlide() {
  return (
    <SlideSplit
      title={<>On rend les documents <span className="text-onas-orange">trouvables.</span></>}
      contentBullets={[
        { text: <>La dernière publication mise en avant avec accès direct au téléchargement.</> },
        { text: <>Bibliothèque complète en grille filtrable : rapports, bulletins, études, textes législatifs, guides, publications.</> },
        { text: <>Filtre synchronisé avec l&apos;URL — partage direct possible (<code>?cat=legislative</code>).</> },
      ]}
      designBullets={[
        { text: <><strong className="text-onas-ink">Noir et bleu</strong> en dominante, hero avec gouttes en fond.</> },
        { text: <>Cartes sombres et structurées, badges colorés par catégorie.</> },
        { text: <>Date et nom de fichier toujours visibles.</> },
      ]}
      rightSlot={<LiveFrame src="/documents" label="onas.sn/documents" className="w-full h-full" />}
    />
  );
}
