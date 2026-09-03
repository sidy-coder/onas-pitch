"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function OpportunitesSlide() {
  return (
    <SlideSplit
      title={<>On rend les opportunités <span className="text-onas-orange">visibles.</span></>}
      contentBullets={[
        { text: <>Trois types d&apos;opportunités : appels d&apos;offres, emplois, stages.</> },
        { text: <>L&apos;opportunité prioritaire mise en avant avec date limite et accès direct.</> },
        { text: <>Opportunités en cours en cartes, archives en liste compacte.</> },
      ]}
      designBullets={[
        { text: <><strong className="text-onas-ink">Noir et orange</strong> — urgent, visible, engageant.</> },
        { text: <>Hero fond sombre orangé avec gouttes en fond.</> },
        { text: <>Dates limites bien visibles pour inciter à l&apos;action.</> },
      ]}
      rightSlot={<LiveFrame src="/opportunites" label="onas.sn/opportunites" className="w-full h-full" />}
    />
  );
}
