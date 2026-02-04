/**
 * For every blog post in the DB (en), fetch the full article from
 * https://cloudmlmsoftware.com/blog/{slug}/ and update with complete HTML content
 * styled with Tailwind CSS (same design as automatic-payment-processing post).
 * Run: npx tsx scripts/sync-full-blog-content-from-live.ts
 */

import * as cheerio from 'cheerio';
import { prisma } from '@/lib/db/prisma';

const LIVE_BASE = 'https://cloudmlmsoftware.com';
const LOCALE = 'en';
const FETCH_DELAY_MS = 800;
/** Set to a number to process only that many posts (e.g. 5 for testing). */
const LIMIT: number | null = null;

const TAILWIND = {
  p: 'text-slate-600 dark:text-slate-300 leading-relaxed mb-6',
  pLead: 'text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6',
  h2: 'text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-4',
  h3: 'text-xl font-semibold text-slate-900 dark:text-white mt-6 mb-3',
  h4: 'text-lg font-semibold text-slate-900 dark:text-white mt-6 mb-3',
  h5: 'text-base font-semibold text-slate-900 dark:text-white mt-4 mb-2',
  h6: 'text-sm font-semibold text-slate-900 dark:text-white mt-4 mb-2',
  ul: 'list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 mb-6 pl-2',
  ol: 'list-decimal list-inside space-y-2 text-slate-600 dark:text-slate-300 mb-6 pl-2',
  blockquote:
    'border-l-4 border-primary/30 pl-4 py-2 my-6 text-slate-600 dark:text-slate-300 italic',
} as const;

function wrapWithTailwind(tag: string, innerHtml: string, isFirstParagraph: boolean): string {
  const escaped = innerHtml.trim();
  if (!escaped) return '';

  const lower = tag.toLowerCase();
  if (lower === 'p') {
    const cls = isFirstParagraph ? TAILWIND.pLead : TAILWIND.p;
    return `<p class="${cls}">${escaped}</p>`;
  }
  if (lower === 'h2') return `<h2 class="${TAILWIND.h2}">${escaped}</h2>`;
  if (lower === 'h3') return `<h3 class="${TAILWIND.h3}">${escaped}</h3>`;
  if (lower === 'h4') return `<h4 class="${TAILWIND.h4}">${escaped}</h4>`;
  if (lower === 'h5') return `<h5 class="${TAILWIND.h5}">${escaped}</h5>`;
  if (lower === 'h6') return `<h6 class="${TAILWIND.h6}">${escaped}</h6>`;
  if (lower === 'ul') return `<ul class="${TAILWIND.ul}">${escaped}</ul>`;
  if (lower === 'ol') return `<ol class="${TAILWIND.ol}">${escaped}</ol>`;
  if (lower === 'blockquote') return `<blockquote class="${TAILWIND.blockquote}">${escaped}</blockquote>`;
  if (lower === 'li') return `<li class="mb-1">${escaped}</li>`;
  return '';
}

/** Stop extracting when we hit "About The Author" (handled by AuthorBioSection on every page). */
const ABOUT_AUTHOR_PATTERN = /about\s+the\s+author/i;

function extractBlocks($: cheerio.CheerioAPI, contentEl: cheerio.Cheerio<cheerio.Element>): string[] {
  const blocks: string[] = [];
  let firstP = true;
  let stopExtraction = false;

  contentEl.find('> *').each((_, el) => {
    if (stopExtraction) return false;
    const tag = (el.tagName || '').toLowerCase();
    const $el = $(el);
    const text = ($el.text() || '').trim();

    if (tag === 'h1' || ['h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
      if (ABOUT_AUTHOR_PATTERN.test(text)) {
        stopExtraction = true;
        return false;
      }
      const useTag = tag === 'h1' ? 'h2' : tag;
      const html = wrapWithTailwind(useTag, $el.html() || '', false);
      if (html) blocks.push(html);
      return;
    }
    if (tag === 'p') {
      if (ABOUT_AUTHOR_PATTERN.test(text)) {
        stopExtraction = true;
        return false;
      }
      const html = wrapWithTailwind('p', $el.html() || '', firstP);
      if (html) {
        blocks.push(html);
        firstP = false;
      }
      return;
    }
    if (tag === 'ul') {
      const lis = $el
        .find('> li')
        .map((__, li) => `<li class="mb-1">${$(li).html() || ''}</li>`)
        .get()
        .join('');
      const html = `<ul class="${TAILWIND.ul}">${lis}</ul>`;
      blocks.push(html);
      return;
    }
    if (tag === 'ol') {
      const lis = $el
        .find('> li')
        .map((__, li) => `<li class="mb-1">${$(li).html() || ''}</li>`)
        .get()
        .join('');
      const html = `<ol class="${TAILWIND.ol}">${lis}</ol>`;
      blocks.push(html);
      return;
    }
    if (tag === 'blockquote') {
      const html = wrapWithTailwind('blockquote', $el.html() || '', false);
      if (html) blocks.push(html);
      return;
    }
    if (tag === 'div' && $el.children().length > 0) {
      const inner = extractBlocks($, $el);
      blocks.push(...inner);
    }
  });

  return blocks;
}

function parseDateFromPage(text: string): Date | null {
  const months: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12',
  };
  const match = text.match(/(\w+)\s+(\d{1,2})(?:st|nd|rd|th)?,?\s+(\d{4})/i);
  if (match) {
    const month = months[match[1].toLowerCase()] || '01';
    const day = match[2].padStart(2, '0');
    const year = match[3];
    const d = new Date(`${year}-${month}-${day}`);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
}

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CloudMLM-BlogSync/1.0' },
    signal: AbortSignal.timeout(20000),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.text();
}

async function main() {
  const posts = await prisma.blog_posts.findMany({
    where: { locale: LOCALE },
    select: { id: true, slug: true, title: true },
    orderBy: { updatedAt: 'asc' },
  });

  console.log(`Found ${posts.length} blog posts (locale: ${LOCALE}). Syncing from live site...\n`);

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  const toProcess = LIMIT != null ? posts.slice(0, LIMIT) : posts;
  for (let i = 0; i < toProcess.length; i++) {
    const post = toProcess[i];
    const slug = post.slug || post.id;
    const url = `${LIVE_BASE}/blog/${slug}/`;

    if (i > 0 && FETCH_DELAY_MS > 0) {
      await new Promise((r) => setTimeout(r, FETCH_DELAY_MS));
    }

    try {
      const html = await fetchHtml(url);
      const $ = cheerio.load(html);

      const title =
        $('meta[property="og:title"]').attr('content')?.replace(/\s*[-|]\s*Cloud MLM Software.*$/i, '').trim() ||
        $('title').text().replace(/\s*[-|]\s*Cloud MLM Software.*$/i, '').trim() ||
        post.title;

      const description =
        $('meta[property="og:description"]').attr('content')?.trim() ||
        $('meta[name="description"]').attr('content')?.trim() ||
        '';

      let contentEl = $('.blogInner').first();
      if (contentEl.length === 0) contentEl = $('.blogPost').first();
      if (contentEl.length === 0) contentEl = $('main').first();
      if (contentEl.length === 0) contentEl = $('.entry-content').first();
      if (contentEl.length === 0) contentEl = $('.post-content').first();
      if (contentEl.length === 0) contentEl = $('article').first();

      const blocks = contentEl.length > 0 ? extractBlocks($, contentEl) : [];

      if (blocks.length === 0) {
        console.log(`  Skip ${slug}: no content area found`);
        skipped++;
        continue;
      }

      const bodyText = $('body').text();
      const date = parseDateFromPage(bodyText);
      const authorMatch = bodyText.match(/Written by\s*\n\s*([^\n]+)/i) || bodyText.match(/By\s+([^\n|]+)/i);
      const author = authorMatch ? authorMatch[1].trim() : null;

      const contentJson = JSON.stringify(blocks);

      await prisma.blog_posts.update({
        where: { id_locale: { id: post.id, locale: LOCALE } },
        data: {
          title: title || post.title,
          description: description || undefined,
          content: contentJson,
          ...(date && { date }),
          ...(author && { author }),
          updatedAt: new Date(),
        },
      });

      updated++;
      if (updated <= 10 || updated % 25 === 0) {
        console.log(`  Updated ${updated}/${toProcess.length}: ${slug} (${blocks.length} blocks)`);
      }
    } catch (e) {
      failed++;
      if (failed <= 5) {
        console.warn(`  Failed ${slug}:`, e instanceof Error ? e.message : e);
      }
    }
  }

  console.log(`\nDone. Updated: ${updated}, skipped: ${skipped}, failed: ${failed}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
