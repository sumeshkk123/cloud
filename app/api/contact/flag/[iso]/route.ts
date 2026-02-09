import { NextRequest, NextResponse } from 'next/server';

const FLAGCDN_BASE = 'https://flagcdn.com';
const ALLOWED_SIZE = 'w40';

/** GET /api/contact/flag/[iso] — proxy country flag from flagcdn to same origin (e.g. for /contact page). */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ iso: string }> }
) {
  const { iso } = await params;
  const code = (iso || '').toLowerCase().replace(/[^a-z]/g, '');
  if (code.length !== 2) {
    return NextResponse.json({ error: 'Invalid country code' }, { status: 400 });
  }

  try {
    const url = `${FLAGCDN_BASE}/${ALLOWED_SIZE}/${code}.png`;
    const res = await fetch(url, {
      headers: { 'User-Agent': 'CloudMLM/1.0' },
      next: { revalidate: 86400 },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Flag not found' }, { status: 404 });
    }
    const blob = await res.blob();
    const contentType = res.headers.get('content-type') || 'image/png';
    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (e) {
    console.error('[GET /api/contact/flag]', e);
    return NextResponse.json({ error: 'Failed to fetch flag' }, { status: 502 });
  }
}
