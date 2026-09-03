"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function ProjetsSlide() {
  return (
    <SlideSplit
      title={<>On rend chaque projet <span className="text-onas-orange">lisible.</span></>}
      contentBullets={[
        { text: <>Chaque projet identifié par son <strong className="text-onas-ink">statut</strong>, sa zone, son montant et son financement.</> },
        { text: <>Tri automatique : en cours, à venir, terminés.</> },
        { text: <>Carte du Sénégal interactive — un pin par projet, cliquable.</> },
      ]}
      designBullets={[
        { text: <>Cartes sombres avec photo, badge de statut coloré.</> },
        { text: <>Filtres alignés aux ancres URL pour le partage direct.</> },
        { text: <>Fiches projet détaillées avec sections riches.</> },
      ]}
      rightSlot={<LiveFrame src="/projets" label="onas.sn/projets" className="w-full h-full" />}
    />
  );
}
