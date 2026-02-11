# Payment Gateway Country Pages – Dynamic Route

Inner country pages for **MLM Software Payment Gateways** now follow the same pattern as **MLM Software Availability Across Countries**: one dynamic route instead of one folder per country.

## How it works

- **Route:** `app/[lang]/mlm-software-payment-gateways/[countrySlug]/page.tsx`
- **Content:** `lib/payment-gateway-country-content.ts` – `getPaymentGatewayCountryContent(locale, countrySlug)` returns `PaymentGatewayCountryContent` with `{{countryName}}` interpolation.
- **Slugs:** From `getAllCountrySlugs()` in `lib/countries-by-continent.ts` (same list as availability).

All countries use the same layout (`PaymentGatewayCountryLayout`) and the same section design (Section, SectionTitle, Card, etc.).

## Migration (done)

The per-country folders under `app/[lang]/mlm-software-payment-gateways/` have been removed (248 folders). The directory now contains only:

- `page.tsx` – list page
- `[countrySlug]/page.tsx` – dynamic country page for all slugs from `getAllCountrySlugs()`

URLs like `/en/mlm-software-payment-gateways/algeria` are served by the dynamic route with template content from `getPaymentGatewayCountryContent(locale, countrySlug)`.

## Custom content per country

To override the default template for a specific country, extend `getPaymentGatewayCountryContent` in `lib/payment-gateway-country-content.ts` with a map of overrides (e.g. `countrySlug === 'algeria'` → return custom content).
