import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { revalidateTag } from 'next/cache';
import { authOptions } from '@/lib/auth';

const BLOG_LOCALES = ['en', 'es', 'it', 'de', 'pt', 'zh'];

/** POST: revalidate cache tags (e.g. after publishing a blog post). Auth required. */
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let tags: string[] = [];
    try {
      const body = await request.json();
      if (Array.isArray(body?.tags)) {
        tags = body.tags;
      }
    } catch {
      // no body or invalid JSON
    }

    if (tags.length === 0) {
      tags = ['blog', ...BLOG_LOCALES.map((locale) => `blog-${locale}`)];
    }

    for (const tag of tags) {
      if (typeof tag === 'string' && tag.length > 0) {
        revalidateTag(tag);
      }
    }

    return NextResponse.json({ revalidated: true, tags });
  } catch (error) {
    console.error('[API] Error revalidating:', error);
    return NextResponse.json({ error: 'Failed to revalidate' }, { status: 500 });
  }
}
