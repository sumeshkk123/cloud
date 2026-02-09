import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/prisma';
import { listDemoItems } from '@/lib/api/demo-items';

export const dynamic = 'force-dynamic';

function mapRawRowToItem(
  row: Record<string, unknown>,
  locale: string
): {
  id: string;
  icon: string;
  image: string;
  title: string | null;
  adminDemoTitle: string;
  adminDemoFeatures: string[] | null;
  distributorsDemoTitle: string;
  distributorsDemoFeatures: string[] | null;
  locale: string;
  showOnHomePage: boolean;
  createdAt: Date;
  updatedAt: Date;
} {
  const getStr = (r: Record<string, unknown>, k: string): string =>
    (r[k] ?? (r as Record<string, unknown>)[(k as string).toLowerCase()] ?? '') as string;
  const getJson = (r: Record<string, unknown>, k: string): unknown => {
    const v = r[k] ?? (r as Record<string, unknown>)[(k as string).toLowerCase()];
    if (v == null) return null;
    if (typeof v === 'string') try { return JSON.parse(v); } catch { return null; }
    return v;
  };
  const getBool = (r: Record<string, unknown>, k: string): boolean => {
    const v = r[k] ?? (r as Record<string, unknown>)[k === 'showOnHomePage' ? 'showonhomepage' : (k as string).toLowerCase()];
    return v === true || v === 'true';
  };
  return {
    id: String(getStr(row, 'id')),
    icon: getStr(row, 'icon') || '',
    image: getStr(row, 'image') || '',
    title: (row.title ?? (row as Record<string, unknown>).title ?? null) as string | null,
    adminDemoTitle: getStr(row, 'adminDemoTitle') || getStr(row, 'admindemotitle') || '',
    adminDemoFeatures: getJson(row, 'adminDemoFeatures') as string[] | null,
    distributorsDemoTitle: getStr(row, 'distributorsDemoTitle') || getStr(row, 'distributorsdemotitle') || '',
    distributorsDemoFeatures: getJson(row, 'distributorsDemoFeatures') as string[] | null,
    locale: getStr(row, 'locale') || locale,
    showOnHomePage: getBool(row, 'showOnHomePage'),
    createdAt: (row.createdAt ?? (row as Record<string, unknown>).createdat) as Date,
    updatedAt: (row.updatedAt ?? (row as Record<string, unknown>).updatedat) as Date,
  };
}

/**
 * Public API: returns demo items for the given locale.
 * GET /api/demo-items?locale=en
 * Uses raw SQL fallback when Prisma returns empty (same as admin).
 */
export async function GET(request: NextRequest) {
  try {
    const url = request?.url ? new URL(request.url) : null;
    const locale = url?.searchParams?.get?.('locale') || 'en';
    let items = await listDemoItems(locale);

    // If Prisma returns empty but DB has data, try raw query (same as admin route)
    if (items.length === 0) {
      try {
        const { Prisma } = await import('@prisma/client');
        const raw = await prisma.$queryRaw<Array<Record<string, unknown>>>(
          Prisma.sql`SELECT * FROM demo_items WHERE locale = ${locale} ORDER BY id DESC`
        );
        if (raw?.length > 0) {
          items = raw.map((row) => mapRawRowToItem(row, locale));
        }
      } catch (rawErr) {
        console.error('[API /api/demo-items] Raw query failed:', rawErr);
      }
    }

    if (items.length === 0 && locale !== 'en') {
      items = await listDemoItems('en');
      if (items.length === 0) {
        try {
          const { Prisma } = await import('@prisma/client');
          const raw = await prisma.$queryRaw<Array<Record<string, unknown>>>(
            Prisma.sql`SELECT * FROM demo_items WHERE locale = 'en' ORDER BY id DESC`
          );
          if (raw?.length > 0) {
            items = raw.map((row) => mapRawRowToItem(row, 'en'));
          }
        } catch {
          // ignore
        }
      }
    }

    return NextResponse.json(items, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=120',
      },
    });
  } catch (error) {
    console.error('[API /api/demo-items] Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch demo items' },
      { status: 500 }
    );
  }
}
