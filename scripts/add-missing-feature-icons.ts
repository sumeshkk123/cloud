/**
 * Script to add missing icons to features and industry solutions
 */

import { prisma } from '@/lib/db/prisma';

// Icon mappings for features based on keywords
const featureIconMappings: Array<{ keywords: string[]; icon: string }> = [
  { keywords: ['predictive', 'forecast', 'commission'], icon: 'remix:RiBarChartLine' },
  { keywords: ['ai', 'smart', 'recruiter'], icon: 'remix:RiRobotLine' },
  { keywords: ['currency', 'multi'], icon: 'remix:RiMoneyDollarCircleLine' },
  { keywords: ['clean', 'interface', 'ui'], icon: 'remix:RiLayoutLine' },
  { keywords: ['compensation', 'plan', 'studio'], icon: 'remix:RiSettings3Line' },
  { keywords: ['leadership', 'pool', 'management'], icon: 'remix:RiTeamLine' },
  { keywords: ['extensible', 'extend'], icon: 'remix:RiExpandLine' },
  { keywords: ['multilingual', 'translation', 'language'], icon: 'remix:RiGlobalLine' },
  { keywords: ['support', 'help', 'ticket'], icon: 'remix:RiCustomerServiceLine' },
  { keywords: ['navigation', 'menu'], icon: 'remix:RiMenuLine' },
  { keywords: ['secure', 'security', 'authentication'], icon: 'remix:RiShieldCheckLine' },
  { keywords: ['commission', 'operations'], icon: 'remix:RiCalculatorLine' },
  { keywords: ['tax', 'compliance', 'kyc'], icon: 'remix:RiFileCheckLine' },
  { keywords: ['responsive', 'mobile'], icon: 'remix:RiSmartphoneLine' },
  { keywords: ['theme', 'color', 'changing'], icon: 'remix:RiPaletteLine' },
  { keywords: ['email', 'mail'], icon: 'remix:RiMailLine' },
  { keywords: ['commerce', 'platform', 'ecommerce'], icon: 'remix:RiShoppingCartLine' },
  { keywords: ['wallet', 'e-wallet'], icon: 'remix:RiWalletLine' },
  { keywords: ['payment', 'gateway', 'processing'], icon: 'remix:RiBankCardLine' },
  { keywords: ['minified', 'optimized', 'performance'], icon: 'remix:RiSpeedUpLine' },
  { keywords: ['caching', 'cache'], icon: 'remix:RiDatabaseLine' },
  { keywords: ['privileged', 'user', 'admin'], icon: 'remix:RiUserSettingsLine' },
  { keywords: ['white label', 'whitelabel'], icon: 'remix:RiPaintBrushLine' },
  { keywords: ['voucher', 'coupon'], icon: 'remix:RiCouponLine' },
  { keywords: ['reporting', 'report', 'analytics'], icon: 'remix:RiFileChartLine' },
  { keywords: ['sms', 'text', 'message'], icon: 'remix:RiMessageLine' },
  { keywords: ['crm', 'marketing', 'automation'], icon: 'remix:RiCustomerService2Line' },
  { keywords: ['backup', 'resilient'], icon: 'remix:RiSaveLine' },
  { keywords: ['unified', 'hub'], icon: 'remix:RiAppsLine' },
  { keywords: ['customer', 'journey'], icon: 'remix:RiRouteLine' },
  { keywords: ['order', 'orchestration'], icon: 'remix:RiShoppingBagLine' },
  { keywords: ['storefront', 'field'], icon: 'remix:RiStoreLine' },
  { keywords: ['integration', 'integrations', 'api'], icon: 'remix:RiPlugLine' },
  { keywords: ['compression', 'dynamic'], icon: 'remix:RiCompressLine' },
  { keywords: ['web', 'management', 'laravel'], icon: 'remix:RiCodeLine' },
  { keywords: ['communication', 'communications'], icon: 'remix:RiChat1Line' },
  { keywords: ['speed', 'page', 'performance'], icon: 'remix:RiSpeedLine' },
  { keywords: ['hosted', 'deployment', 'self-hosted'], icon: 'remix:RiServerLine' },
  { keywords: ['replicated', 'website'], icon: 'remix:RiPagesLine' },
  { keywords: ['magento', 'opencart', 'wordpress', 'drupal'], icon: 'remix:RiShoppingBag2Line' },
  { keywords: ['lead', 'capture'], icon: 'remix:RiUserAddLine' },
  { keywords: ['partner', 'success', 'desk'], icon: 'remix:RiHandshakeLine' },
  { keywords: ['coaching', 'field'], icon: 'remix:RiGraduationCapLine' },
  { keywords: ['learning', 'path'], icon: 'remix:RiBookOpenLine' },
  { keywords: ['auto-responder', 'responder'], icon: 'remix:RiReplyLine' },
  { keywords: ['knowledge', 'base'], icon: 'remix:RiBookLine' },
  { keywords: ['data', 'bi', 'pipeline'], icon: 'remix:RiDatabase2Line' },
  { keywords: ['product', 'recommendation', 'smart'], icon: 'remix:RiLightbulbLine' },
  { keywords: ['designing', 'design', 'web'], icon: 'remix:RiBrushLine' },
];

function findIconForFeature(title: string): string {
  const titleLower = title.toLowerCase();

  // Check keyword matches
  for (const mapping of featureIconMappings) {
    if (mapping.keywords.some(keyword => titleLower.includes(keyword))) {
      return mapping.icon;
    }
  }

  // Default icon
  return 'remix:RiStarLine';
}

async function addMissingFeatureIcons() {
  try {
    console.log('Adding missing icons to features and industry solutions...\n');

    // Get all features missing icons
    const featuresMissing = await prisma.features.findMany({
      where: {
        locale: 'en',
        OR: [
          { icon: null },
          { icon: '' },
        ],
      },
      select: { id: true, title: true, icon: true },
    });

    console.log(`Found ${featuresMissing.length} features missing icons\n`);

    let updatedCount = 0;
    for (const feature of featuresMissing) {
      const icon = findIconForFeature(feature.title || '');

      // Update all translations of this feature (by matching title)
      const allTranslations = await prisma.features.findMany({
        where: {
          title: feature.title,
        },
      });

      for (const translation of allTranslations) {
        await prisma.features.update({
          where: {
            id_locale: {
              id: translation.id,
              locale: translation.locale,
            },
          },
          data: { icon },
        });
      }

      console.log(`✓ "${feature.title}" → ${icon} (${allTranslations.length} translations)`);
      updatedCount++;
    }

    // Get industry solutions missing icons
    const allIndustrySolutions = await prisma.industry_solutions.findMany({
      where: { locale: 'en' },
      select: { id: true, title: true, icon: true, locale: true },
    });
    const industrySolutionsMissing = allIndustrySolutions.filter(
      sol => !sol.icon || sol.icon.trim() === ''
    );
    console.log(`\nFound ${industrySolutionsMissing.length} industry solutions missing icons\n`);

    for (const solution of industrySolutionsMissing) {
      const icon = findIconForFeature(solution.title || '');
      const allTranslations = await prisma.industry_solutions.findMany({
        where: { title: solution.title },
        select: { id: true, locale: true },
      });
      for (const translation of allTranslations) {
        await prisma.industry_solutions.update({
          where: { id: translation.id },
          data: { icon },
        });
      }
      console.log(`✓ "${solution.title}" → ${icon} (${allTranslations.length} translations)`);
      updatedCount++;
    }

    console.log(`\n✓ Successfully added icons to ${updatedCount} items`);

    // Verify
    const remainingFeatures = await prisma.features.findMany({
      where: {
        locale: 'en',
        OR: [
          { icon: null },
          { icon: '' },
        ],
      },
    });
    const allRemainingSolutions = await prisma.industry_solutions.findMany({
      where: { locale: 'en' },
      select: { icon: true },
    });
    const remainingSolutions = allRemainingSolutions.filter(
      sol => !sol.icon || sol.icon.trim() === ''
    );

    if (remainingFeatures.length === 0 && remainingSolutions.length === 0) {
      console.log('\n✓ All items now have icons!');
    } else {
      console.log(`\n⚠️  Still missing: ${remainingFeatures.length} features, ${remainingSolutions.length} solutions`);
    }

  } catch (error) {
    console.error('Error:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

addMissingFeatureIcons();
