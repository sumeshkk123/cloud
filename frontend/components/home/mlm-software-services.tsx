'use client';

import { useState } from "react";
import type { ComponentType } from "react";
import * as RemixIcon from "@remixicon/react";
import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { ReadMoreButton } from "@/components/ui/read-more-button";
import { InfoCtaBox } from "@/components/ui/info-cta-box";
import { BulletList } from "@/components/ui/bullet-list";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type RemixIconType = ComponentType<{ className?: string }>;

const SERVICE_CATEGORIES: Array<{
  title: string;
  summary: string;
  headline: string;
  description: string;
  icon: RemixIconType;
  benefits: string[];
  href: string;
}> = [
    {
      title: "MLM Software Development",
      summary: "Mobile software development tailored for the MLM industry.",
      headline: "MLM Software Development",
      description:
        "At Cloud MLM Software, we specialize in mobile software development tailored for the MLM industry. Our expert team designs and develops high-performance mobile applications that cater to the unique needs of MLM businesses. By leveraging the latest technologies, we create user-friendly, secure, and efficient mobile apps that enhance user engagement and streamline business operations.",
      icon: RemixIcon.RiCodeBoxLine,
      benefits: [
        "Custom Solutions: Tailored mobile apps designed specifically for MLM business requirements.",
        "Cross-Platform Compatibility: Apps developed for both iOS and Android platforms.",
        "Real-Time Updates: Instant access to business metrics, downline performance, and commission tracking."
      ],
      href: "/services/mlm-software-development/"
    },
    {
      title: "E-commerce Integration",
      summary: "Robust e-commerce integration services designed to enhance functionality.",
      headline: "E-commerce Integration",
      description:
        "Cloud MLM Software offers robust e-commerce integration services designed to enhance the functionality and reach of MLM businesses. Our integration solutions seamlessly connect your MLM platform with leading e-commerce systems, enabling smooth product listing, inventory management, and transaction processing.",
      icon: RemixIcon.RiStoreLine,
      benefits: [
        "Efficiently manage products, orders, and inventory through seamless ecommerce integration.",
        "Provide a unified platform for members to purchase products and manage their accounts.",
        "Boost revenue by integrating with popular e-commerce platforms and reaching a broader audience."
      ],
      href: "/services/e-commerce-integration/"
    },
    {
      title: "WooCommerce Integration",
      summary: "Transform WordPress into a fully functional e-commerce store.",
      headline: "WooCommerce Integration",
      description:
        "WooCommerce is a popular open-source plugin designed for WordPress, transforming a regular WordPress website into a fully functional e-commerce store. It allows users to sell products and services online, manage inventory, process payments, handle shipping, and more.",
      icon: RemixIcon.RiShoppingCartLine,
      benefits: [
        "Seamless Data Synchronization",
        "Custom Automation",
        "Custom eCommerce Store Development"
      ],
      href: "/services/woocommerce-integration/"
    },
    {
      title: "Opencart Development",
      summary: "Powerful and adaptable e-commerce platform for MLM businesses.",
      headline: "Opencart Development",
      description:
        "Our Opencart development service is designed to provide a powerful and adaptable e-commerce platform for MLM businesses. By utilizing the capabilities of Opencart, we deliver an efficient and user-friendly online shopping experience. Whether you need bespoke features, seamless integrations, or a fully developed e-commerce site, our skilled team ensures your online store is both scalable and secure.",
      icon: RemixIcon.RiShoppingBagLine,
      benefits: [
        "Develop tailored features that cater to your unique business needs and improve user engagement.",
        "Effortlessly connect with payment gateways, shipping options, and various third-party services.",
        "Receive continuous support and maintenance to ensure your e-commerce site operates smoothly."
      ],
      href: "/services/opencart-development/"
    },
    {
      title: "Magento Development",
      summary: "Powerful and flexible solutions tailored to your business needs.",
      headline: "Magento Development",
      description:
        "Our Magento development service at Cloud MLM Software offers powerful and flexible solutions tailored to your business needs. By harnessing the capabilities of Magento, we ensure a seamless and efficient e-commerce experience with custom features and robust integration.",
      icon: RemixIcon.RiStore3Line,
      benefits: [
        "Custom features designed to fit your unique business requirements",
        "Effective integration with current systems and third-party tools.",
        "Enhanced speed and reliability for an excellent user experience."
      ],
      href: "/services/magento-development/"
    }
  ];

const SERVICE_TABS = [
  "MLM Software Development",
  "E-commerce Integration",
  "WooCommerce Integration",
  "Opencart Development",
  "Magento Development"
];

export function MlmSoftwareServices() {
  const [activeTab, setActiveTab] = useState(0);
  const activeCategory = SERVICE_CATEGORIES[activeTab];

  return (
    <section className="relative isolate overflow-hidden bg-background py-20">
      <div
        className="absolute inset-x-0 top-0 h-64 -translate-y-1/2 bg-gradient-to-b from-sky-100 via-transparent to-transparent dark:from-slate-900/50"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.15),transparent_50%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.18),transparent_55%)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="space-y-12">
          <SectionTitle
            badge="MLM software services"
            heading="Our Services"
            description="Our innovative platform equips you with powerful tools designed to streamline operations, enhance distributor engagement, and drive growth. Experience unmatched efficiency and support as you navigate the complexities of network marketing."
            maxWidth="5xl"
          />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 border-b border-border/50 pb-4">
            {SERVICE_TABS.map((tab, index) => {
              const category = SERVICE_CATEGORIES[index];
              const Icon = category?.icon;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors bg-primary/5",
                    activeTab === index
                      ? "border-2 border-primary bg-primary/10 text-primary"
                      : "border-2 border-transparent text-muted-foreground hover:text-foreground"
                  )}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  <span>{tab}</span>
                </button>
              );
            })}
          </div>

          {/* Two Column Layout */}
          <div className="rounded-2xl border border-border/50 bg-card p-8 shadow-sm">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <Typography as="h4" variant="h4" className="font-bold">
                    {activeCategory.headline}
                  </Typography>
                  <Typography as="p" variant="p" className="mt-2 font-semibold text-lg text-muted-foreground">
                    {activeCategory.summary}
                  </Typography>
                </div>

                <Typography variant="p" className="text-base leading-7 text-muted-foreground">
                  {activeCategory.description}
                </Typography>

                {/* Benefits List */}
                <div className="space-y-3">
                  <Typography variant="small" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Key benefits
                  </Typography>
                  <BulletList items={activeCategory.benefits} className="text-sm text-muted-foreground" />
                </div>
              </div>

              {/* Right Column - Service Benefits Display */}
              <div className="space-y-4">
                <div className="relative h-48 w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30 shadow-sm mb-6">
                  <img
                    src="http://localhost:3000/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1556742049-0cfed4f6a45d%3Fw%3D800%26h%3D400%26fit%3Dcrop%26q%3D80&w=1920&q=75"
                    alt="Service visual"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
                  <Typography as="h3" variant="h6" className="mb-4 font-semibold">
                    Service Highlights
                  </Typography>
                  <BulletList items={activeCategory.benefits} className="text-sm" />
                </div>
                <div className="flex justify-end mt-4">
                  <ReadMoreButton
                    href={activeCategory.href}
                    variant="default"
                  >
                    Explore more
                  </ReadMoreButton>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <InfoCtaBox
            icon={RemixIcon.RiServiceLine}
            text="Discover all our MLM software services designed to streamline your operations and drive growth."
            buttonText="Explore all services"
            buttonHref="/services/"
          />
        </div>
      </div>
    </section>
  );
}
