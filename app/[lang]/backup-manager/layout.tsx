import type { Metadata } from "next";
import type { SupportedLocale } from "@/config/site";
import { getPageMetadata } from "@/components/frontend/common/page-metadata";

export const dynamic = "force-dynamic";

const PAGE_KEY = "mlm-software-modules-backup-manager";

export async function generateMetadata(props: {
  params?: Promise<{ lang: SupportedLocale }> | { lang: SupportedLocale };
}): Promise<Metadata> {
  const params = props?.params;
  return getPageMetadata(params ?? null, "/backup-manager", {
    page: PAGE_KEY,
    fallbackTitle: "Backup Manager Module | Cloud MLM Software",
    fallbackDescription:
      "Automated backups and recovery for your MLM data. Part of Cloud MLM Software modules.",
    fallbackKeywords: "MLM backup, backup manager module, Cloud MLM Software backup",
  });
}

export default function BackupManagerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
