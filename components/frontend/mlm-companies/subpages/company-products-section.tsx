import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { Package } from "lucide-react";
import type { MlmCompanyContent } from "./types";

interface MlmCompanyProductsSectionProps {
  content: MlmCompanyContent;
}

export function MlmCompanyProductsSection({ content }: MlmCompanyProductsSectionProps) {
  return (
    <Section variant="gradient" padding="lg">
      <div className="container space-y-12">
        <SectionTitle
          heading={content.products.heading}
          description={content.products.description}
          maxWidth="3xl"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {Object.entries(
            content.products.items.reduce((acc, product) => {
              if (!acc[product.category]) {
                acc[product.category] = [];
              }
              acc[product.category].push(product);
              return acc;
            }, {} as Record<string, typeof content.products.items>)
          ).map(([category, products], index) => (
            <div key={index} className="w-full">
              
              <div className="">
                <Typography as="h3" variant="h5" className="font-semibold mb-4">
                {category}
              </Typography>
                {products.map((product, productIndex) => (
                  <div key={productIndex} className="flex gap-4 rounded-xl border border-border/40 bg-card/60 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Package className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <Typography as="h5" variant="h6" className="font-semibold">
                        {product.name}
                      </Typography>
                      <Typography as="p" variant="small" textColor="muted">
                        {product.description}
                      </Typography>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
