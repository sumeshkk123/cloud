import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';

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
    type PlanRow = { id: string; title: string; groupId: string | null };
    const selectPlanFields = { groupId: true, title: true, id: true };

    // Generate slug from sourceSlug if it's a title, or use as-is if it's already a slug
    // Step 1: Find source plan - try to match by title first (in case sourceSlug is a title)
    let sourcePlan = (await prisma.mlm_plans.findFirst({
      where: {
        title: {
          contains: sourceSlug,
        },
        locale: sourceLocale,
      },
      select: selectPlanFields as Record<string, boolean>,
    })) as unknown as PlanRow | null;

    // If not found by title, try to find by matching a generated slug from title
    if (!sourcePlan) {
      const allSourcePlans = (await prisma.mlm_plans.findMany({
        where: {
          locale: sourceLocale,
        },
        select: selectPlanFields as Record<string, boolean>,
      })) as unknown as PlanRow[];

      // Try to find a plan whose generated slug matches sourceSlug
      sourcePlan = allSourcePlans.find((plan) => {
        const generatedSlug = plan.title
          .toLowerCase()
          .replace(/^mlm\s+/i, '')
          .replace(/\s+/g, '-')
          .replace(/&/g, 'and')
          .replace(/[^a-z0-9-]/g, '');
        return generatedSlug === sourceSlug.toLowerCase();
      }) || null;
    }

    if (!sourcePlan) {
      return NextResponse.json(
        { error: 'Source plan not found', matched: false },
        { status: 404 }
      );
    }

    const groupKey = sourcePlan.groupId || sourcePlan.id;

    // Step 2: Find the plan with the same groupId in target locale
    // Plans are linked across locales by their shared groupId field (where cast for outdated Prisma client types)
    const whereByGroupOrId = {
      OR: [{ groupId: groupKey }, { id: groupKey }],
      locale: targetLocale,
    } as { OR: Array<{ groupId?: string; id?: string }>; locale: string };
    const matchingPlan = await prisma.mlm_plans.findFirst({
      where: whereByGroupOrId as never,
      select: { title: true, id: true },
    });

    if (matchingPlan) {
      // Generate slug from title
      const slug = matchingPlan.title
        .toLowerCase()
        .replace(/^mlm\s+/i, '')
        .replace(/\s+/g, '-')
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9-]/g, '');
      
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
