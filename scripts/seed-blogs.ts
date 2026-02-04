/**
 * Seed blog_posts: (1) all slugs from app/[lang]/blog folders, (2) remaining from cloudmlmsoftware.com/blogs/
 * Run with: npx tsx scripts/seed-blogs.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { prisma } from '@/lib/db/prisma';

const BLOG_APP_DIR = path.join(process.cwd(), 'app', '[lang]', 'blog');
const LOCALE = 'en';
const PLACEHOLDER_DESCRIPTION = 'Article from Cloud MLM Software blog.';
const PLACEHOLDER_CONTENT = '["<p>Content to be added.</p>"]';

/** Titles and dates from https://cloudmlmsoftware.com/blogs/ (Latest Updates & News) */
const EXTERNAL_BLOGS: { title: string; dateStr: string }[] = [
  { title: 'Binary MLM Plan Explained. A Beginner Friendly Guide to the Binary MLM System', dateStr: 'January 15, 2026' },
  { title: 'How to choose the right MLM plan: Why 70% of modern companies prefer the binary plan', dateStr: 'December 20, 2025' },
  { title: 'Top 100 direct sales companies in the world for 2026', dateStr: 'October 31, 2025' },
  { title: 'The Ultimate Guide to MLM Affiliate Software: Everything You Need to Know', dateStr: 'September 24, 2025' },
  { title: 'AI and Shopify-MLM: The Future of Personalized Commission Plans & Predictive Analytics', dateStr: 'September 1, 2025' },
  { title: 'MLM Back Office Software: Powering Growth in Your Network Marketing Business', dateStr: 'August 15, 2025' },
  { title: 'The 10 Best Direct Sales Software Tools to Try in 2025: Features, Reviews & Comparisons', dateStr: 'August 9, 2025' },
  { title: 'Simplifying Overlay Bonuses: How Compensation Software Enhances Multi‑Stream Rewards', dateStr: 'August 4, 2025' },
  { title: 'How to Create an MLM Website for Your Company: A Complete Guide', dateStr: 'July 30, 2025' },
  { title: 'Genealogy Tree in Network Marketing: A Complete Guide', dateStr: 'July 23, 2025' },
  { title: 'Upline and Downline in Multi-Level Marketing (MLM): Everything You Need to Know', dateStr: 'July 9, 2025' },
  { title: 'Top Binary MLM Companies in 2026', dateStr: 'June 26, 2025' },
];

function titleFromSlug(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function slugFromTitle(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseDate(dateStr: string): Date {
  // "January 15, 2026" or "January 15th, 2026"
  const cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/, '$1').trim();
  const d = new Date(cleaned);
  return isNaN(d.getTime()) ? new Date() : d;
}

function getAppBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_APP_DIR)) {
    console.warn('Blog app dir not found:', BLOG_APP_DIR);
    return [];
  }
  const entries = fs.readdirSync(BLOG_APP_DIR, { withFileTypes: true });
  const slugs = entries
    .filter((e) => e.isDirectory() && e.name !== '[slug]')
    .map((e) => e.name);
  return slugs;
}

async function upsertBlogPost(params: {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: Date;
  published: boolean;
}) {
  const { id, slug, title, description, content, date, published } = params;
  const now = new Date();
  await prisma.blog_posts.upsert({
    where: { id_locale: { id, locale: LOCALE } },
    create: {
      id,
      locale: LOCALE,
      slug,
      title,
      description,
      content,
      date,
      published,
      createdAt: now,
      updatedAt: now,
    },
    update: {
      title,
      description,
      content,
      date,
      published,
      updatedAt: now,
    },
  });
}

async function main() {
  console.log('Seeding blog posts...\n');

  const appSlugs = getAppBlogSlugs();
  const appSlugSet = new Set(appSlugs);
  console.log(`Found ${appSlugs.length} blog slugs in app/[lang]/blog\n`);

  let added = 0;
  let updated = 0;

  // 1. Upsert all app blog slugs
  for (const slug of appSlugs) {
    const title = titleFromSlug(slug);
    await upsertBlogPost({
      id: slug,
      slug,
      title,
      description: PLACEHOLDER_DESCRIPTION,
      content: PLACEHOLDER_CONTENT,
      date: new Date(),
      published: true,
    });
    added++;
  }
  console.log(`Upserted ${appSlugs.length} posts from app blog folders.`);

  // 2. Add external blogs (from cloudmlmsoftware.com/blogs/) that are not already in app
  for (const { title, dateStr } of EXTERNAL_BLOGS) {
    const slug = slugFromTitle(title);
    if (appSlugSet.has(slug)) {
      console.log(`  Skip (already in app): ${slug}`);
      continue;
    }
    const date = parseDate(dateStr);
    await upsertBlogPost({
      id: slug,
      slug,
      title,
      description: PLACEHOLDER_DESCRIPTION,
      content: PLACEHOLDER_CONTENT,
      date,
      published: true,
    });
    added++;
    console.log(`  Added from external: ${title.slice(0, 50)}...`);
  }

  console.log(`\nDone. Total upserted: ${added} blog posts (locale: ${LOCALE}).`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
