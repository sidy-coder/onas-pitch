import type { ComponentType } from "react";

export type SlideTone = "light" | "dark";

export type SlideMeta = {
  id: string;
  index: number;
  title: string;
  act?: "I" | "II" | "III";
  tone: SlideTone;
  Component: ComponentType;
};

import IntroSlide            from "../slides/01-intro";
import AuditSlide            from "../slides/02-audit";
import ObjectifsSlide        from "../slides/03-objectifs";
import QuestionSlide         from "../slides/04-question";
import ArchitectureSlide     from "../slides/05-architecture";
import ResponsiveSlide       from "../slides/05b-responsive";
import HomepageSlide         from "../slides/06-homepage";
import AProposSlide          from "../slides/07-a-propos";
import ProjetsSlide          from "../slides/08-projets";
import ActualitesSlide       from "../slides/09-actualites";
import DocumentsSlide        from "../slides/10-documents";
import OpportunitesSlide     from "../slides/11-opportunites";
import ProduitsDerivesSlide  from "../slides/12-produits-derives";
import ContactSlide          from "../slides/13-contact";
import FooterSlide           from "../slides/14-footer";
import AvantApresSlide       from "../slides/15-avant-apres";
import DetailsSlide          from "../slides/16-details";
import CharteSlide           from "../slides/17-charte";
import DemoSlide             from "../slides/18-demo";

export const SLIDES: SlideMeta[] = [
  { id: "01",  index: 1,  title: "Couverture",                           act: "I",   tone: "dark",  Component: IntroSlide },
  { id: "02",  index: 2,  title: "Le contenu était là",                  act: "I",   tone: "light", Component: AuditSlide },
  { id: "03",  index: 3,  title: "On transforme le constat en méthode",  act: "I",   tone: "light", Component: ObjectifsSlide },
  { id: "04",  index: 4,  title: "Question d'amorce",                    act: "I",   tone: "dark",  Component: QuestionSlide },
  { id: "05",  index: 5,  title: "On commence par l'architecture",       act: "II",  tone: "light", Component: ArchitectureSlide },
  { id: "05b", index: 6,  title: "On adapte le parcours aux écrans",     act: "II",  tone: "light", Component: ResponsiveSlide },
  { id: "06",  index: 7,  title: "On fait de l'accueil le point d'entrée", act: "II", tone: "light", Component: HomepageSlide },
  { id: "07",  index: 8,  title: "On donne à l'ONAS un récit clair",     act: "II",  tone: "light", Component: AProposSlide },
  { id: "08",  index: 9,  title: "On rend chaque projet lisible",        act: "II",  tone: "light", Component: ProjetsSlide },
  { id: "09",  index: 10, title: "On fait circuler l'information",       act: "II",  tone: "light", Component: ActualitesSlide },
  { id: "10",  index: 11, title: "On rend les documents trouvables",     act: "II",  tone: "light", Component: DocumentsSlide },
  { id: "11",  index: 12, title: "On rend les opportunités visibles",    act: "II",  tone: "light", Component: OpportunitesSlide },
  { id: "12",  index: 13, title: "On montre la valeur des ressources",   act: "II",  tone: "light", Component: ProduitsDerivesSlide },
  { id: "13",  index: 14, title: "On facilite la prise de contact",      act: "II",  tone: "light", Component: ContactSlide },
  { id: "14",  index: 15, title: "On prolonge le parcours",              act: "II",  tone: "light", Component: FooterSlide },
  { id: "15",  index: 16, title: "On compare le départ au résultat",     act: "III", tone: "light", Component: AvantApresSlide },
  { id: "16",  index: 17, title: "On soigne l'expérience",               act: "III", tone: "light", Component: DetailsSlide },
  { id: "17",  index: 18, title: "On garde la même signature",           act: "III", tone: "light", Component: CharteSlide },
  { id: "18",  index: 19, title: "On passe à la démo",                   act: "III", tone: "light", Component: DemoSlide },
];

export const TOTAL_SLIDES = SLIDES.length;

export function getSlideById(id: string): SlideMeta | undefined {
  return SLIDES.find(s => s.id === id);
}

export function getSlideIndex(id: string): number {
  return SLIDES.findIndex(s => s.id === id);
}

export function getNextSlideId(currentId: string): string | null {
  const idx = getSlideIndex(currentId);
  if (idx === -1 || idx >= SLIDES.length - 1) return null;
  return SLIDES[idx + 1].id;
}

export function getPrevSlideId(currentId: string): string | null {
  const idx = getSlideIndex(currentId);
  if (idx <= 0) return null;
  return SLIDES[idx - 1].id;
}
