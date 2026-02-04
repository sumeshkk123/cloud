import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import type { SupportedLocale } from "@/config/site";
import { isSupportedLocale } from "@/lib/i18n-utils";
import { buildLocalizedPath } from "@/lib/locale-links";
import type { Locale } from "@/i18n-config";
import { i18n } from "@/i18n-config";
import { getTestimonialBySlug } from "@/lib/api/testimonials";
import { getPageTitle } from "@/lib/api/page-titles";
import { TestimonialsHeroSection, TestimonialDetail } from "@/components/frontend/testimonials";

export const dynamic = "force-dynamic";

function resolveLocale(lang: string): Locale {
  return (isSupportedLocale(lang) ? lang : i18n.defaultLocale) as Locale;
}

type PageProps = {
  params: Promise<{ lang: SupportedLocale; slug: string }> | { lang: SupportedLocale; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const testimonial = await getTestimonialBySlug(resolved.slug, locale);
  if (!testimonial) {
    return { title: "Testimonial Not Found" };
  }
  const title = `${testimonial.name} | Testimonial | Cloud MLM Software`;
  const description =
    testimonial.content.length > 160
      ? testimonial.content.slice(0, 157) + "..."
      : testimonial.content;

  return {
    title,
    description,
    alternates: {
      canonical: buildLocalizedPath(`/testimonials/${resolved.slug}`, locale),
    },
    openGraph: {
      title,
      description,
    },
  };
}

export default async function TestimonialSlugPage({ params }: PageProps) {
  const resolved = params instanceof Promise ? await params : params;
  const locale = resolveLocale(resolved.lang);
  const [testimonial, pageTitleData] = await Promise.all([
    getTestimonialBySlug(resolved.slug, locale),
    getPageTitle("testimonials", locale),
  ]);

  if (!testimonial) {
    notFound();
  }

  const contactHref = buildLocalizedPath("/contact", locale);
  const pricingHref = buildLocalizedPath("/pricing", locale);
  const testimonialsHref = buildLocalizedPath("/testimonials", locale);

  return (
    <div>
      <TestimonialsHeroSection
        locale={locale}
        contactHref={contactHref}
        pricingHref={pricingHref}
        pageTitleData={pageTitleData}
      />

      <TestimonialDetail testimonial={testimonial} backHref={testimonialsHref} />
    </div>
  );
}
