import { NextResponse } from 'next/server';
import { listMlmPlans, resolveCanonicalSlugForPlanRecord } from '@/lib/api/mlm-plans';

/**
 * API endpoint to find a plan in a target locale by matching slug from source locale
 * Used by language switcher to find the correct plan slug when switching languages
 * Plans are linked across locales by their shared groupId field
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sourceSlug = searchParams.get('sourceSlug');
  const sourceLocale = searchParams.get('sourceLocale');
  const targetLocale = searchParams.get('targetLocale');

  if (!sourceSlug || !sourceLocale || !targetLocale) {
    return NextResponse.json(
      { error: 'Missing required parameters: sourceSlug, sourceLocale, targetLocale' },
      { status: 400 }
    );
  }

  try {
    const normalizedSourceSlug = sourceSlug.toLowerCase().trim();
    const sourcePlans = await listMlmPlans(sourceLocale);
    const targetPlans = await listMlmPlans(targetLocale);
    const enPlans = sourceLocale === 'en' || targetLocale === 'en' ? [] : await listMlmPlans('en');

    const sourcePlan =
      sourcePlans.find((plan) => String(plan.slug || '').trim().toLowerCase() === normalizedSourceSlug) ??
      sourcePlans.find((plan) => resolveCanonicalSlugForPlanRecord(plan) === normalizedSourceSlug);

    if (!sourcePlan) {
      return NextResponse.json(
        { error: 'Source plan not found', matched: false },
        { status: 404 }
      );
    }

    const canonical = resolveCanonicalSlugForPlanRecord(sourcePlan);
    if (!canonical) {
      return NextResponse.json(
        { error: 'Unable to resolve source plan canonical slug', matched: false },
        { status: 404 }
      );
    }

    const matchingPlan =
      targetPlans.find((plan) => resolveCanonicalSlugForPlanRecord(plan) === canonical) ??
      (targetLocale !== 'en'
        ? (() => {
            const enMatch = enPlans.find((plan) => resolveCanonicalSlugForPlanRecord(plan) === canonical);
            if (!enMatch) return null;
            const groupKey = enMatch.groupId ?? enMatch.id;
            return targetPlans.find((plan) => (plan.groupId ?? plan.id) === groupKey) ?? null;
          })()
        : null);

    if (matchingPlan) {
      const slug = String(matchingPlan.slug || '').trim() || canonical;
      
      return NextResponse.json({
        slug: slug,
        title: matchingPlan.title,
        matched: true,
      });
    }

    // No match found - plan doesn't exist in target locale
    return NextResponse.json(
      { error: 'No matching plan found in target locale', matched: false },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error matching plan:', error);
    return NextResponse.json(
      { error: 'Failed to match plan' },
      { status: 500 }
    );
  }
}
