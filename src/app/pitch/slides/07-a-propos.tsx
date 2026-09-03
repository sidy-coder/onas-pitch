"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function AProposSlide() {
  return (
    <SlideSplit
      title={<>On donne à l&apos;ONAS <span className="text-onas-orange">un récit clair.</span></>}
      contentBullets={[
        { text: <>Origine, missions, valeurs, présence territoriale, 30 ans d&apos;engagement, horizon 2030.</> },
        { text: <>Un fil narratif clair, du passé fondateur jusqu&apos;à la vision long terme.</> },
        { text: <>Section dédiée aux 30 ans de l&apos;ONAS, en valeur d&apos;un anniversaire fort.</> },
      ]}
      designBullets={[
        { text: <>Hero photographique avec ouvrier ONAS — l&apos;humain au cœur.</> },
        { text: <>Alternance fonds clairs / fonds sombres pour rythmer le récit.</> },
        { text: <>Timeline animée pour l&apos;histoire de l&apos;institution.</> },
      ]}
      rightSlot={<LiveFrame src="/a-propos" label="onas.sn/a-propos" className="w-full h-full" />}
    />
  );
}
