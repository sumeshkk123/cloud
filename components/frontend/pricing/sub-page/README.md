# Pricing sub-page reusable design

This folder provides a single reusable page layout for all pricing module/feature sub-pages (e.g. `/pricing/auto-responder-module`, `/pricing/email`, `/pricing/opencart-integration`).

## Usage

1. **Create a content file** in your route folder (e.g. `app/[lang]/pricing/your-module/content.ts`).  
   Define a typed `PricingSubPageContent` object with:
   - `hero` – badge, title, description, CTAs, metrics (each metric can use an `IconComponent`)
   - `sections` – array of section objects. Each section has a `type`:
     - `"capabilities"` – heading, optional description, optional callout (title, body, icon), `items` (title, description, bullets, icon)
     - `"roadmap"` – heading, optional description, optional `outcomes` (title, points), `stages` (title, description, duration, icon)
     - `"packages"` – heading, optional description, optional `ctaLabel`, `items` (title, price, description, outcomes, icon)
     - `"enhancements"` – heading, optional description, optional `callout` (string), `items` (title, description, icon)
   - `faq` – heading, optional description, `items` (question, answer)
   - `cta` – heading, description, primaryCta, secondaryCta, optional cardTitle, cardBody

2. **Implement the page** in `app/[lang]/pricing/your-module/page.tsx`:
   - Use `generateMetadata` for title, description, canonical (and OpenGraph if desired).
   - Resolve locale and build `contactHref` and `secondaryHref` (e.g. `/pricing`).
   - Render `<PricingSubPageLayout content={yourContent} contactHref={...} secondaryHref={...} />`.

3. **Icons** in content can be any `ComponentType<{ className?: string }>` (e.g. from `lucide-react` or `@phosphor-icons/react/dist/ssr`). Import them in the content file and pass to `hero.metrics[].icon`, section `callout.icon`, and section `items[].icon` as needed.

## Example

See `app/[lang]/pricing/auto-responder-module/` for a full example: `content.ts` holds the data, `page.tsx` uses `PricingSubPageLayout` and the same content.

## Exports

- `PricingSubPageLayout` – main layout (hero → sections → FAQ → CTA).
- `PricingSubPageLayoutProps` – props type.
- Section components and types from `./types` are also exported for customisation or reuse.
