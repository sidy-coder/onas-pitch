"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function ActualitesSlide() {
  return (
    <SlideSplit
      title={<>On fait circuler <span className="text-onas-orange">l&apos;information.</span></>}
      contentBullets={[
        { text: <>Slider hero auto-play sur les 3 articles à la une.</> },
        { text: <>Article featured en grand format, puis grille filtrable par catégorie.</> },
        { text: <>Trois rubriques : Actualités ONAS, Articles de Presse, Médiathèque.</> },
      ]}
      designBullets={[
        { text: <>Fond sombre dramatique pour le hero, lecture confortable pour le reste.</> },
        { text: <>Carrousel avec progress ring animé sur chaque pastille.</> },
        { text: <>Pause auto au survol — respect du rythme du lecteur.</> },
      ]}
      rightSlot={<LiveFrame src="/actualites" label="onas.sn/actualites" className="w-full h-full" />}
    />
  );
}
