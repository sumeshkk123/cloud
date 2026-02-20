import type { Locale } from "@/i18n-config";
import { getPageTitle } from "@/lib/api/page-titles";

export async function getMlmCompaniesSubpageHeroData(page: string, locale: Locale) {
  try {
    // Try to get page title data from the same backend as modules
    return await getPageTitle(page, locale);
  } catch (error) {
    console.error(`Error getting MLM companies subpage hero data for ${page}:`, error);
    return null;
  }
}
