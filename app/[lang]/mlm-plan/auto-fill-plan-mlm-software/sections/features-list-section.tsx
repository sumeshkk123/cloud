"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { BulletList } from "@/components/ui/bullet-list";
import { FEATURES_LIST } from "../content";

const DASHBOARD_IMAGE_SRC = "/images/dashboard-deign-dark.webp";

export function FeaturesListSection() {
  return (
    <Section padding="lg" variant="muted" containerClassName="space-y-12">

      <div className="grid gap-10 lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)] ">

        <div className="relative w-full p-4 rounded-2xl border border-border/60 bg-black/5 dark:bg-white/5">
          <Image
            src={DASHBOARD_IMAGE_SRC}
            alt="MLM dashboard – Auto Fill plan features"
            fill
            className="block w-full h-auto rounded-2xl"
            sizes="(max-width: 1024px) 100vw, 420px"
          />
        </div>

        <div className="max-w-4xl space-y-6">
          <SectionTitle
            badge="Features"
            heading="Features of Auto Fill plan"
            centered={false}
            maxWidth="3xl"
          />
          <BulletList items={FEATURES_LIST} />
        </div>

      </div>
    </Section>
  );
}
