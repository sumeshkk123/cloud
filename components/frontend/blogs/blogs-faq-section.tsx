import type { Locale } from "@/i18n-config";
import { getBlogsFaqContent } from "@/lib/blogs-content";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";

type BlogsFaqSectionProps = {
  locale: Locale;
};

export function BlogsFaqSection({ locale }: BlogsFaqSectionProps) {
  const faq = getBlogsFaqContent(locale);
  return (
    <Section id="blogs-faq" variant="gradient" padding="xl">
      <div className="space-y-10 container">
        <SectionTitle
          badge={faq.badge}
          heading={faq.heading}
          description={faq.description}
          centered={true}
          maxWidth="3xl"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {faq.items.map((item, index) => (
            <article
              key={`faq-${index}`}
              className="flex h-full flex-col gap-3 rounded-2xl border border-border/40 bg-background p-6 shadow-sm dark:bg-background/95"
            >
              <Typography as="h3" variant="h5" className="tracking-tight">
                {item.question}
              </Typography>
              <Typography as="p" variant="p" textColor="muted" className="text-sm leading-relaxed">
                {item.answer}
              </Typography>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
