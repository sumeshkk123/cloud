"use client";

import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import type { ServiceWhyChooseSection } from "./types";

const DEFAULT_IMAGE_SRC = "/images/dashboard-deign.webp";

interface ServiceWhyChooseSectionProps {
  content: ServiceWhyChooseSection;
}

export function ServiceWhyChooseSection({ content }: ServiceWhyChooseSectionProps) {
  const { badge, heading, description, items } = content;
  const imageSrc = content.imageSrc ?? DEFAULT_IMAGE_SRC;

  return (
    <Section variant="gradient" padding="lg">
      <div className="space-y-10">
        <SectionTitle
          badge={badge ?? undefined}
          heading={heading}
          description={description ?? undefined}
          centered={false}
          maxWidth="2xl"
        />
        <div className="overflow-hidden">
          <div className="grid min-h-[380px] md:grid-cols-[1fr_1.15fr] gap-6">
            <div className="relative flex  p-6 w-full min-h-[320px]  overflow-hidden rounded-3xl border border-gray-200 bg-primary/10 shadow-sm dark:border-border dark:bg-card">
              <Image
                src={imageSrc}
                width={600}
                height={600}
                alt={content.imageAlt ?? "Service overview"}
                className=" rounded-3xl w-full h-auto object-contain object-bottom rounded-3xl"
                sizes="(max-width: 768px) 100vw, 42vw"
                priority={false}
              />
            </div>
            <div className="flex flex-col justify-center bg-gradient-to-br from-white from-0% via-white via-40% to-green-50/80 to-100% px-6 py-8 dark:from-card dark:via-card dark:to-emerald-950/30 md:px-10 md:py-12 lg:px-14 lg:py-16 rounded-3xl">
              <ul className="space-y-0">
                {items.map((item, index) => (
                  <li key={item.number}>
                    {index > 0 && (
                      <hr className="border-t border-gray-200 dark:border-border" />
                    )}
                    <div className="space-y-1.5 py-5 first:pt-0">
                      <h3 className="text-base font-bold text-gray-900 dark:text-foreground sm:text-lg">
                        {item.number}. {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
