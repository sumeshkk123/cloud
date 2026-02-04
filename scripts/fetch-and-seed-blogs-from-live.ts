/**
 * Fetch all blog post slugs from https://cloudmlmsoftware.com/blogs/ (all pagination pages),
 * then add any missing posts to the database.
 * Run: npx tsx scripts/fetch-and-seed-blogs-from-live.ts
 */

import { prisma } from '@/lib/db/prisma';

const BASE_URL = 'https://cloudmlmsoftware.com';
const BLOGS_LIST_URL = `${BASE_URL}/blogs`;
const LOCALE = 'en';
const PLACEHOLDER_DESCRIPTION = 'Article from Cloud MLM Software blog.';
const PLACEHOLDER_CONTENT = '["<p>Content to be added.</p>"]';
const MAX_PAGES = 17; // from live site pagination 1, 2, 3 ... 17

/** Extract slug from blog URL: /blog/slug/ or .../blog/slug */
function slugFromBlogUrl(href: string): string | null {
  const match = href.match(/\/blog\/([^/#?]+)/i);
  if (!match) return null;
  return match[1].replace(/\/$/, '').trim();
}

/** Extract all blog slugs from HTML (href to /blog/xxx) */
function extractSlugsFromHtml(html: string): Set<string> {
  const slugs = new Set<string>();
  const regex = /href=["'](?:https?:\/\/[^"']*)?\/blog\/([^/"'#?]+)/gi;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(html)) !== null) {
    const slug = m[1].replace(/\/$/, '').trim();
    if (slug && slug !== 'page' && !/^\d+$/.test(slug)) slugs.add(slug);
  }
  return slugs;
}

/** Optional: extract title and date from listing HTML for a slug (improves title/date) */
function extractTitleDateFromHtml(html: string, slug: string): { title?: string; dateStr?: string } {
  const slugEscaped = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const blockRegex = new RegExp(
    `(\\d{1,2}(?:st|nd|rd|th)?\\s+\\w+\\s+,?\\s+\\d{4})[^]*?href=["'][^"']*\\/blog\\/${slugEscaped}[^"']*["'][^>]*>([^<]+)`,
    'i'
  );
  const m = html.match(blockRegex);
  if (m) return { dateStr: m[1].trim(), title: m[2].replace(/&amp;/g, '&').trim() };
  return {};
}

function titleFromSlug(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function parseDate(dateStr: string): Date {
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/i, '$1').trim();
  const d = new Date(cleaned);
  return isNaN(d.getTime()) ? new Date() : d;
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CloudMLM-BlogSync/1.0' },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return res.text();
}

async function main() {
  console.log('Fetching blog list from', BLOGS_LIST_URL, '...\n');

  const allSlugs = new Map<string, { title?: string; dateStr?: string }>();

  for (let page = 1; page <= MAX_PAGES; page++) {
    const url = page === 1 ? BLOGS_LIST_URL : `${BLOGS_LIST_URL}/page/${page}/`;
    try {
      const html = await fetchHtml(url);
      const slugs = extractSlugsFromHtml(html);
      for (const slug of slugs) {
        if (!allSlugs.has(slug)) {
          const meta = extractTitleDateFromHtml(html, slug);
          allSlugs.set(slug, meta);
        }
      }
      console.log(`  Page ${page}: found ${slugs.size} blog links (total unique: ${allSlugs.size})`);
    } catch (e) {
      console.warn(`  Page ${page} failed:`, e instanceof Error ? e.message : e);
    }
  }

  const slugList = Array.from(allSlugs.keys());
  console.log(`\nTotal unique blog slugs from live site: ${slugList.length}`);

  const existing = await prisma.blog_posts.findMany({
    where: { locale: LOCALE },
    select: { id: true },
  });
  const existingIds = new Set(existing.map((r) => r.id));
  const missing = slugList.filter((s) => !existingIds.has(s));
  console.log(`Already in DB: ${existingIds.size}. Missing: ${missing.length}\n`);

  if (missing.length === 0) {
    console.log('Nothing to add.');
    return;
  }

  const now = new Date();
  let added = 0;

  for (const slug of missing) {
    const meta = allSlugs.get(slug) || {};
    const title = meta.title || titleFromSlug(slug);
    const date = meta.dateStr ? parseDate(meta.dateStr) : new Date();

    await prisma.blog_posts.upsert({
      where: { id_locale: { id: slug, locale: LOCALE } },
      create: {
        id: slug,
        locale: LOCALE,
        slug,
        title,
        description: PLACEHOLDER_DESCRIPTION,
        content: PLACEHOLDER_CONTENT,
        date,
        published: true,
        createdAt: now,
        updatedAt: now,
      },
      update: {
        title,
        description: PLACEHOLDER_DESCRIPTION,
        content: PLACEHOLDER_CONTENT,
        date,
        published: true,
        updatedAt: now,
      },
    });
    added++;
    if (added <= 20 || added % 50 === 0) {
      console.log(`  Added: ${slug} (${title.slice(0, 50)}...)`);
    }
  }

  console.log(`\nDone. Added ${added} blog posts to DB (locale: ${LOCALE}).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
