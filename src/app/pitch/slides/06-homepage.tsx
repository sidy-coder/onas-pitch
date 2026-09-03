"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function HomepageSlide() {
  return (
    <SlideSplit
      title={<>On fait de l&apos;accueil <span className="text-onas-orange">le point d&apos;entrée.</span></>}
      contentBullets={[
        { text: <>Une page qui informe, valorise le côté institutionnel et oriente.</> },
        { text: <>De l&apos;identité de l&apos;ONAS aux projets, chiffres clés, actualités, marchés et contact — tout y est.</> },
        { text: <>Slider hero auto-play, compteurs animés, carte interactive du Sénégal.</> },
      ]}
      designBullets={[
        { text: <><strong className="text-onas-ink">Noir et orange</strong> en dominante, avec une alternance qui rythme le scroll.</> },
        { text: <>Fines bandes <strong className="text-onas-ink">bleu sombre</strong> entre chaque bloc, discrètes mais structurantes.</> },
        { text: <>Photos terrain plein format, qualité irréprochable.</> },
      ]}
      rightSlot={<LiveFrame src="/" label="onas.sn — Accueil" className="w-full h-full" />}
    />
  );
}
