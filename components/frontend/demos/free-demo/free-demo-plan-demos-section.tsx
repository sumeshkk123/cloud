import Image from "next/image";
import { Plus } from "lucide-react";

import { ReadMoreButton } from "@/components/ui/read-more-button";
import type { PlanDemo } from "./free-demo-content";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { Typography } from "@/components/ui/typography";
import { BulletList } from "@/components/ui/bullet-list";
import { Card, CardContent } from "@/components/ui/card";

export function FreeDemoPlanDemosSection({
  planDemos,
  exploreDemoLabel = "Explore Demo",
  bookYourDemoLabel = "Book Your Demo",
}: {
  planDemos: PlanDemo[];
  exploreDemoLabel?: string;
  bookYourDemoLabel?: string;
}) {
  return (
    <Section
      variant="primary"
      padding="lg"
      className="relative isolate !overflow-visible"
      containerClassName="space-y-6"
    >
      {/* Animated mesh gradient background - like Features list section */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-blue-500/10" />
      </div>

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-72 w-72 animate-pulse rounded-full bg-primary/20 blur-3xl" />
      <div
        className="absolute bottom-1/4 right-1/4 -z-10 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl"
        style={{ animationDelay: "1s" }}
      />

      <SectionTitle
        badge="Plan demos"
        heading="Drill into live plan demos"
        description="Preview administrator and distributor workflows for the most-requested compensation plans. Launch the sandbox or book a guided session to see them populated with your products and payout rules."
        centered={true}
        maxWidth="3xl"
      />

      <div className="divide-y divide-border/60 pt-4">
        {planDemos.map((plan, index) => (
          <article
            key={plan.title}
            className={[
              "grid gap-8 py-10 md:grid-cols-[1fr_500px]",
              index === 0 ? "pt-0" : "",
            ].join(" ")}
          >
            <Card className="space-y-5">
              <CardContent className="space-y-2">

                <Typography as="h3" variant="h4" className="tracking-tight">
                  {plan.title}
                </Typography>
              </CardContent>
              <CardContent className="space-y-4">
                {[plan.admin, plan.user].map((profile) => (
                  <details
                    key={`${plan.title}-${profile.title}`}
                    className="group rounded-2xl border border-border/50 bg-background/60 p-5 text-left transition"
                    open={profile.title === plan.admin.title}
                  >
                    <summary className="cursor-pointer list-none text-base font-semibold text-foreground bg-primary/5 px-5 py-3 rounded-xl">
                      <span className="flex items-center justify-between gap-4">
                        <span className="min-w-0">
                          <Typography as="span" variant="small" className="font-semibold text-foreground">
                            {profile.title}
                          </Typography>
                        </span>
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary  transition-transform duration-300 ease-in-out group-open:rotate-45">
                          <Plus className="h-4 w-4" />
                        </span>
                      </span>
                    </summary>
                    <div className="mt-3 space-y-3 text-sm text-muted-foreground">
                      <Typography as="p" variant="p" className="leading-relaxed py-3 text-md">
                        {profile.description}
                      </Typography>
                      <BulletList items={profile.bullets} variant="compact" />
                      <div className="flex flex-wrap gap-3 pt-2">
                        <ReadMoreButton
                          href="https://demo.cloudmlmsoftware.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow transition [&_.read-more-icon]:bg-primary-foreground/20 [&_.read-more-icon]:text-primary-foreground hover:!text-white"
                        >
                          {exploreDemoLabel}
                        </ReadMoreButton>
                        <ReadMoreButton href="#demo-form">
                          {bookYourDemoLabel}
                        </ReadMoreButton>
                      </div>
                    </div>
                  </details>
                ))}
              </CardContent>
            </Card>
            <div className="flex items-center justify-center sticky top-12 self-start">
              <div className="overflow-hidden rounded-2xl border border-border/60 bg-background p-10 w-full flex items-center justify-center">
                <Image
                  src={plan.image}
                  alt={plan.imageAlt}
                  width={plan.width}
                  height={plan.height}
                  className="h-auto w-full max-h-[200px] object-contain"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

