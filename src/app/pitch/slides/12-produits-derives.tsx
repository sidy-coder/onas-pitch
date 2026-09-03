"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function ProduitsDerivesSlide() {
  return (
    <SlideSplit
      title={<>On montre la valeur <span className="text-onas-orange">des ressources.</span></>}
      contentBullets={[
        { text: <>Eau épurée et boue valorisée — deux ressources, deux récits.</> },
        { text: <>Détail des usages, des prix, des bénéfices écologiques.</> },
        { text: <>Sections ancrées (<code>#eau-epuree</code>, <code>#boue</code>) pour le deeplink depuis le menu.</> },
      ]}
      designBullets={[
        { text: <>Alternance fond clair / fond sombre, photo pleine page.</> },
        { text: <>Tableau de caractéristiques techniques élégant.</> },
        { text: <>CTA orange clair pour télécharger les fiches techniques.</> },
      ]}
      rightSlot={<LiveFrame src="/produits-derives" label="onas.sn/produits-derives" className="w-full h-full" />}
    />
  );
}
