"use client";

import { WhatIsSection } from "./intro";
import { FeaturesListSection } from "./features-list-section";
import { WhyPreferredSection } from "./why-preferred-section";
import { MechanicsSection } from "./mechanics-section";
import { PillarsSection } from "./pillars-section";
import { ExamplesSection } from "./examples-section";
import { JourneysSection } from "./journeys-section";
import { RoadmapSection } from "./roadmap-section";
import { BlueprintSection } from "./blueprint-section";
import { PreCtaSection } from "./pre-cta-section";

export interface AutoFillSectionsProps {
  plansHref: string;
}

export function AutoFillSections({ plansHref }: AutoFillSectionsProps) {
  return (
    <>
      <WhatIsSection />
      <FeaturesListSection />
      <MechanicsSection />
      <WhyPreferredSection />
      <PillarsSection />
      <ExamplesSection />
      <JourneysSection />
      <RoadmapSection />
      <BlueprintSection />
      <PreCtaSection plansHref={plansHref} />
    </>
  );
}

export { WhatIsSection } from "./intro";
export { FeaturesListSection } from "./features-list-section";
export { WhyPreferredSection } from "./why-preferred-section";
export { MechanicsSection } from "./mechanics-section";
export { PillarsSection } from "./pillars-section";
export { ExamplesSection } from "./examples-section";
export { JourneysSection } from "./journeys-section";
export { RoadmapSection } from "./roadmap-section";
export { BlueprintSection } from "./blueprint-section";
export { PreCtaSection } from "./pre-cta-section";
