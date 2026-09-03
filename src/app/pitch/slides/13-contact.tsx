"use client";

import LiveFrame from "../components/LiveFrame";
import SlideSplit from "../components/SlideSplit";

export default function ContactSlide() {
  return (
    <SlideSplit
      title={<>On facilite <span className="text-onas-orange">la prise de contact.</span></>}
      contentBullets={[
        { text: <>Un point de contact unique, clair, accessible.</> },
        { text: <>Coordonnées du siège, téléphone réclamation, email institutionnel.</> },
        { text: <>Formulaire avec champs typés (sujet, type de demande, message).</> },
      ]}
      designBullets={[
        { text: <>Layout deux colonnes : informations à gauche, formulaire à droite.</> },
        { text: <>Fond sombre orange, cohérent avec la signature de la home.</> },
        { text: <>Placeholders explicites, validation visuelle au focus.</> },
      ]}
      rightSlot={<LiveFrame src="/contact" label="onas.sn/contact" className="w-full h-full" />}
    />
  );
}
