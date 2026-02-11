import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params ?? null;
  return getPageMetadata(params, "/pricing/payment-gateway-integration", {
    page: "payment-gateway-integration",
    fallbackTitle: "Payment Gateway Integration Pricing | Cloud MLM Software",
    fallbackDescription:
      "Explore pricing, roadmap, and deliverables for integrating payment gateways with Cloud MLM Software. Automate payments, compliance, and reconciliation with confidence.",
    fallbackKeywords:
      "payment gateway integration pricing, MLM payment gateway, Cloud MLM Software payments",
  });
}

export default function PaymentGatewayIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
