/**
 * Sync blog_posts description and content from backup static pages.
 * Extracts description from generateMetadata and builds HTML from string constants.
 * Run: npx tsx scripts/sync-blog-content-from-static.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { prisma } from '@/lib/db/prisma';

const BACKUP_DIR = path.join(process.cwd(), 'blog-static-pages-backup');
const LOCALE = 'en';

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function unescapeDesc(s: string): string {
  return s
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\n/g, '\n')
    .trim();
}

/** Extract description from generateMetadata (const description = "..." or return { description: "..." }) */
function extractDescription(source: string): string | null {
  // 1) description = "..." or description = '...' (may span newlines)
  const assignMatch = source.match(/description\s*=\s*["']((?:[^"\\]|\\.)*)["']/s);
  if (assignMatch && assignMatch[1].length >= 20) {
    return unescapeDesc(assignMatch[1]);
  }
  // 2) Inside generateMetadata, return { ... description: "..." ... } — take first long string (avoid card descriptions)
  const metadataStart = source.indexOf('generateMetadata');
  if (metadataStart !== -1) {
    const afterMeta = source.slice(metadataStart);
    const returnMatch = afterMeta.match(/description:\s*["']((?:[^"\\]|\\.)*)["']/s);
    if (returnMatch && returnMatch[1].length >= 30) {
      return unescapeDesc(returnMatch[1]);
    }
  }
  return null;
}

/** Extract substantial string literals from source and return as HTML paragraphs/sections */
function extractContentBlocks(source: string): string[] {
  const blocks: string[] = [];
  // Skip imports and type definitions - focus on const assignments
  const afterImports = source.replace(/^[\s\S]*?export const dynamic/s, '');
  // Match array of strings: = [ "a", "b" ] or = [ 'a', 'b' ]
  const arrayRegex = /=\s*\[\s*((?:(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*,?\s*)+)\s*\]/g;
  let am: RegExpExecArray | null;
  while ((am = arrayRegex.exec(afterImports)) !== null) {
    const inner = am[1];
    const strings = inner.match(/(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')/g);
    if (strings) {
      for (const s of strings) {
        const unescaped = s
          .slice(1, -1)
          .replace(/\\'/g, "'")
          .replace(/\\"/g, '"')
          .replace(/\\n/g, '\n')
          .trim();
        if (unescaped.length > 40 && !/^[A-Za-z_][A-Za-z0-9_]*$/.test(unescaped)) {
          blocks.push(unescaped);
        }
      }
    }
  }
  // Match long single string constants: const NAME = "..." (min ~50 chars, avoid paths/code)
  const singleRegex = /const\s+[A-Za-z_][A-Za-z0-9_]*\s*=\s*["']((?:[^"\\]|\\.){50,})["']/g;
  while ((am = singleRegex.exec(afterImports)) !== null) {
    const unescaped = am[1]
      .replace(/\\'/g, "'")
      .replace(/\\"/g, '"')
      .replace(/\\n/g, '\n')
      .trim();
    // Skip if looks like path, URL, or code
    if (unescaped.length > 50 && !/^[\w\-\/\.:@]+$/.test(unescaped) && !unescaped.includes('import')) {
      blocks.push(unescaped);
    }
  }
  return blocks;
}

/** Build content JSON array of HTML strings for blog_posts.content */
function buildContentHtml(blocks: string[]): string {
  const seen = new Set<string>();
  const htmlBlocks: string[] = [];
  for (const text of blocks) {
    const key = text.slice(0, 80);
    if (seen.has(key)) continue;
    seen.add(key);
    const safe = escapeHtml(text);
    htmlBlocks.push(`<p>${safe}</p>`);
  }
  if (htmlBlocks.length === 0) return '["<p>Content to be added.</p>"]';
  return JSON.stringify(htmlBlocks);
}

async function main() {
  if (!fs.existsSync(BACKUP_DIR)) {
    console.error('Backup dir not found:', BACKUP_DIR);
    process.exit(1);
  }

  const dirs = fs.readdirSync(BACKUP_DIR, { withFileTypes: true }).filter((d) => d.isDirectory());
  console.log(`Found ${dirs.length} static blog folders.\n`);

  let updated = 0;
  let skipped = 0;

  for (const dir of dirs) {
    const slug = dir.name;
    const pagePath = path.join(BACKUP_DIR, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.log(`  Skip ${slug}: no page.tsx`);
      skipped++;
      continue;
    }

    const source = fs.readFileSync(pagePath, 'utf8');
    const description = extractDescription(source);
    const blocks = extractContentBlocks(source);
    const contentHtml = buildContentHtml(blocks);

    try {
      const existing = await prisma.blog_posts.findUnique({
        where: { id_locale: { id: slug, locale: LOCALE } },
      });
      if (!existing) {
        console.log(`  Skip ${slug}: not in DB`);
        skipped++;
        continue;
      }

      await prisma.blog_posts.update({
        where: { id_locale: { id: slug, locale: LOCALE } },
        data: {
          description: description ?? existing.description,
          content: contentHtml,
          updatedAt: new Date(),
        },
      });
      console.log(`  Updated ${slug} (description: ${description ? 'yes' : 'no'}, blocks: ${blocks.length})`);
      updated++;
    } catch (e) {
      console.error(`  Error ${slug}:`, e);
    }
  }

  console.log(`\nDone. Updated: ${updated}, skipped: ${skipped}.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
