import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export const dynamic = 'force-dynamic';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/db/prisma';
import { checkPermission } from '@/lib/utils/permissions-server';
import { Permission } from '@/lib/permissions';

async function fetchBusinessMlmSubmissions(): Promise<Array<Record<string, unknown>>> {
  const baseUrl = process.env.BUSINESS_MLM_API_URL;
  const secret = process.env.BUSINESS_MLM_API_SECRET;
  if (!baseUrl || !secret) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('[Contact API] BUSINESS_MLM_API_URL or BUSINESS_MLM_API_SECRET not set, skipping Business MLM fetch');
    }
    return [];
  }

  const url = `${baseUrl.replace(/\/$/, '')}/api/admin/contact/external`;
  try {
    const res = await fetch(url, {
      headers: {
        'X-API-Key': secret,
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });
    if (!res.ok) {
      console.warn(
        `[Contact API] Business MLM fetch failed: ${res.status} ${res.statusText} from ${url}. ` +
          (res.status === 401
            ? 'Check CONTACT_EXTERNAL_API_SECRET on businessmlmsoftware.com matches BUSINESS_MLM_API_SECRET here.'
            : '')
      );
      return [];
    }
    const data = await res.json();
    if (!Array.isArray(data)) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Contact API] Business MLM returned non-array:', typeof data);
      }
      return [];
    }
    return data.map((s: Record<string, unknown>) => ({
      ...s,
      id: `bm-${s.id}`,
      sourceSite: s.sourceSite || 'Business MLM',
    }));
  } catch (err) {
    console.warn('[Contact API] Business MLM fetch error:', err instanceof Error ? err.message : err);
    return [];
  }
}

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user has CONTACT_VIEW permission (Admin or Business Developer only)
    const hasView = await checkPermission(Permission.CONTACT_VIEW);
    if (!hasView) {
      return NextResponse.json({ error: 'Forbidden: Insufficient permissions' }, { status: 403 });
    }

    try {
      const [cloudSubmissions, businessMlmSubmissions] = await Promise.all([
        prisma.contact_submissions.findMany({
          orderBy: { createdAt: 'desc' },
        }),
        fetchBusinessMlmSubmissions(),
      ]);

      type SubmissionWithSource = (typeof cloudSubmissions)[number] & { sourceSite?: string | null };
      const cloud = cloudSubmissions.map((s) => ({ ...s, sourceSite: (s as SubmissionWithSource).sourceSite ?? null }));
      const merged = [...cloud, ...businessMlmSubmissions] as Array<{ createdAt: Date | string }>;
      merged.sort((a, b) => {
        const da = new Date(a.createdAt).getTime();
        const db = new Date(b.createdAt).getTime();
        return db - da;
      });

      return NextResponse.json(merged, {
        headers: {
          'Cache-Control': 'private, max-age=15, stale-while-revalidate=30',
        },
      });
    } catch (dbError: any) {
      // If source_site column doesn't exist yet (migration not run), try without it
      const msg = String(dbError?.message || '');
      if (msg.includes('source_site') || msg.includes('does not exist')) {
        try {
          const raw = await prisma.$queryRawUnsafe<Array<Record<string, unknown>>>(
            `SELECT id, name, email, phone, country, message, source, notes, locale, "createdAt", "updatedAt" FROM contact_submissions ORDER BY "createdAt" DESC`
          );
          const withSourceSite = raw.map((r) => ({ ...r, sourceSite: null }));
          return NextResponse.json(withSourceSite, {
            headers: { 'Cache-Control': 'private, max-age=15, stale-while-revalidate=30' },
          });
        } catch (fallbackErr: any) {
          console.error('Fallback query failed:', fallbackErr);
        }
      }
      console.error('Error fetching contact submissions:', dbError);
      return NextResponse.json([]);
    }
  } catch (error: any) {
    console.error('Error in contact API:', error);
    return NextResponse.json([]);
  }
}
