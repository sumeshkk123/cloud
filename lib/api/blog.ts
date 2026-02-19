/**
 * Blog API: single source for the blog_posts table.
 * Used by:
 * - Public /blogs page (getPublishedBlogPostsSearch)
 * - Admin dashboard (GET /api/admin/blog → getAllBlogPosts)
 * - Blog detail page (getPublishedBlogPostBySlug)
 */
import { prisma } from '@/lib/db/prisma';
import { randomUUID } from 'crypto';
import sanitizeHtml from 'sanitize-html';
import { Prisma } from '@prisma/client';

export interface BlogPostRecord {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  date: Date;
  image?: string | null;
  author?: string | null;
  locale: string;
  published: boolean;
  metaTitle?: string | null;
  metaDescription?: string | null;
  metaKeywords?: string | null;
  translationGroupId?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

/** Allowed tags and attributes for blog HTML (sanitize-html allowlist). */
const BLOG_SANITIZE_OPTIONS = {
  allowedTags: [
    'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'br', 'hr', 'blockquote', 'pre', 'code',
    'ul', 'ol', 'li', 'div', 'span', 'a', 'strong', 'em', 'b', 'i', 'u', 's', 'sub', 'sup',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td', 'caption', 'img',
    'figure', 'figcaption', 'cite', 'q', 'mark', 'small'
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    '*': ['class']
  },
  allowedSchemes: ['http', 'https', 'ftp', 'mailto', 'tel'],
  allowProtocolRelative: true
};

/**
 * Normalize blog content for display. Admin stores content as JSON array of HTML
 * blocks (e.g. ["<p>...</p>","<p>...</p>"]). If content is that format, parse and
 * join; otherwise use as raw HTML. Result is sanitized to prevent XSS.
 */
export function getBlogContentHtml(content: string | null | undefined): string {
  if (!content || typeof content !== 'string') return '';
  const trimmed = content.trim();
  if (!trimmed) return '';
  let html: string;
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (Array.isArray(parsed)) {
      html = parsed.filter((b): b is string => typeof b === 'string').join('');
    } else if (typeof parsed === 'string') {
      html = parsed;
    } else {
      html = trimmed;
    }
  } catch {
    html = trimmed;
  }
  return sanitizeHtml(html, BLOG_SANITIZE_OPTIONS);
}

/** Strip HTML tags and return plain text (for excerpts). */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

/**
 * Get a short plain-text excerpt from blog content (first block, stripped of HTML).
 * Used when post.description is empty (e.g. for banner or listing).
 */
export function getBlogExcerpt(content: string | null | undefined, maxLength = 200): string {
  if (!content || typeof content !== 'string') return '';
  const trimmed = content.trim();
  if (!trimmed) return '';
  let firstBlock = '';
  try {
    const parsed = JSON.parse(trimmed) as unknown;
    if (Array.isArray(parsed) && typeof parsed[0] === 'string') {
      firstBlock = parsed[0];
    } else if (typeof parsed === 'string') {
      firstBlock = parsed;
    } else {
      firstBlock = trimmed;
    }
  } catch {
    firstBlock = trimmed;
  }
  const text = stripHtml(firstBlock);
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

export async function getAllBlogPosts(): Promise<BlogPostRecord[]> {
  try {
    // Use raw query to include translationGroupId field
    type RawPost = {
      id: string;
      slug: string;
      title: string;
      description: string;
      content: string;
      date: Date;
      image: string | null;
      author: string | null;
      locale: string;
      published: boolean;
      metaTitle: string | null;
      metaDescription: string | null;
      metaKeywords: string | null;
      translationGroupId: string | null;
      createdAt: Date;
      updatedAt: Date;
    };

    const results = await prisma.$queryRaw<RawPost[]>`
      SELECT id, slug, title, description, content, date, image, author, locale, published,
             "metaTitle", "metaDescription", "metaKeywords", "translationGroupId", "createdAt", "updatedAt"
      FROM blog_posts 
      ORDER BY "createdAt" DESC 
      LIMIT 500
    `;

    return results.map((r) => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      description: r.description,
      content: r.content,
      date: r.date,
      image: r.image ?? undefined,
      author: r.author ?? undefined,
      locale: r.locale,
      published: r.published,
      metaTitle: r.metaTitle ?? undefined,
      metaDescription: r.metaDescription ?? undefined,
      metaKeywords: r.metaKeywords ?? undefined,
      translationGroupId: r.translationGroupId ?? undefined,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
    }));
  } catch (error) {
    console.error('[getAllBlogPosts] Error:', error);
    return [];
  }
}

/**
 * Get blog posts grouped by translation group for admin panel.
 * Returns one entry per translation group (English posts preferred as primary).
 * Each entry includes a 'translations' array showing available languages.
 */
export interface BlogPostWithTranslations extends BlogPostRecord {
  translations: Array<{ locale: string; id: string }>;
}

export async function getBlogPostsGroupedByTranslation(): Promise<BlogPostWithTranslations[]> {
  try {
    // Use raw query to get English posts first (similar to testimonials pattern)
    type RawPost = {
      id: string;
      slug: string;
      title: string;
      description: string;
      content: string;
      date: Date;
      image: string | null;
      author: string | null;
      locale: string;
      published: boolean;
      metaTitle: string | null;
      metaDescription: string | null;
      metaKeywords: string | null;
      translationGroupId: string | null;
      createdAt: Date;
      updatedAt: Date;
    };

    // Get English posts
    const englishPosts = await prisma.$queryRaw<RawPost[]>`
      SELECT id, slug, title, description, content, date, image, author, locale, published, 
             "metaTitle", "metaDescription", "metaKeywords", "translationGroupId", "createdAt", "updatedAt"
      FROM blog_posts 
      WHERE locale = 'en' 
      ORDER BY "createdAt" DESC
    `;

    if (englishPosts.length === 0) return [];

    // Get all English slugs
    const slugs = englishPosts.map(p => p.slug);
    
    // Find all posts with matching slugs (translations)
    const allPosts = await prisma.$queryRaw<RawPost[]>`
      SELECT id, slug, title, description, content, date, image, author, locale, published, 
             "metaTitle", "metaDescription", "metaKeywords", "translationGroupId", "createdAt", "updatedAt"
      FROM blog_posts 
      WHERE slug IN (${Prisma.join(slugs.map(s => Prisma.sql`${s}`), ', ')})
      ORDER BY locale ASC
    `;

    // Build grouped results
    const resultMap = new Map<string, BlogPostWithTranslations>();
    
    for (const post of englishPosts) {
      const groupId = post.translationGroupId || post.slug;
      resultMap.set(groupId, {
        id: post.id,
        slug: post.slug,
        title: post.title,
        description: post.description,
        content: post.content,
        date: post.date,
        image: post.image ?? undefined,
        author: post.author ?? undefined,
        locale: post.locale,
        published: post.published,
        metaTitle: post.metaTitle ?? undefined,
        metaDescription: post.metaDescription ?? undefined,
        metaKeywords: post.metaKeywords ?? undefined,
        translationGroupId: post.translationGroupId ?? undefined,
        createdAt: post.createdAt,
        updatedAt: post.updatedAt,
        translations: [{ locale: post.locale, id: post.id }],
      });
    }

    // Add translations
    for (const post of allPosts) {
      if (post.locale === 'en') continue;
      const groupId = post.translationGroupId || post.slug;
      if (resultMap.has(groupId)) {
        const existing = resultMap.get(groupId)!;
        if (!existing.translations.find(t => t.locale === post.locale)) {
          existing.translations.push({ locale: post.locale, id: post.id });
        }
      }
    }

    return Array.from(resultMap.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } catch (error) {
    console.error('[getBlogPostsGroupedByTranslation] Error:', error);
    return [];
  }
}

export async function getBlogPostsById(id: string): Promise<BlogPostRecord[]> {
  try {
    const results = await prisma.blog_posts.findMany({
      where: { id },
      orderBy: { locale: 'asc' },
    });
    return results.map((r) => ({
      ...r,
      image: r.image ?? undefined,
      author: r.author ?? undefined,
      metaTitle: r.metaTitle ?? undefined,
      metaDescription: r.metaDescription ?? undefined,
      metaKeywords: r.metaKeywords ?? undefined,
    }));
  } catch (error) {
    console.error(`[getBlogPostsById] Error for id ${id}:`, error);
    return [];
  }
}

export async function getBlogPost(id: string, locale: string): Promise<BlogPostRecord | null> {
  try {
    const result = await prisma.blog_posts.findUnique({
      where: {
        id_locale: { id, locale },
      },
    });
    if (!result) return null;
    return {
      ...result,
      image: result.image ?? undefined,
      author: result.author ?? undefined,
      metaTitle: result.metaTitle ?? undefined,
      metaDescription: result.metaDescription ?? undefined,
      metaKeywords: result.metaKeywords ?? undefined,
    };
  } catch (error) {
    console.error(`[getBlogPost] Error for ${id}/${locale}:`, error);
    return null;
  }
}

export type BlogPostCreatePayload = Omit<BlogPostRecord, 'createdAt' | 'updatedAt'> & {
  date?: Date | string;
};

/** Check if slug is already used in this locale (per-locale uniqueness). Exclude id when updating. */
export async function isSlugTakenInLocale(
  slug: string,
  locale: string,
  excludeId?: string
): Promise<boolean> {
  const normalized = slug?.trim() || '';
  if (!normalized) return false;
  const where: { locale: string; slug: string; id?: { not: string } } = {
    locale,
    slug: normalized,
  };
  if (excludeId) where.id = { not: excludeId };
  const existing = await prisma.blog_posts.findFirst({ where, select: { id: true } });
  return !!existing;
}

export async function createBlogPost(payload: BlogPostCreatePayload): Promise<BlogPostRecord> {
  const slug = (payload.slug ?? '').trim();
  if (slug) {
    const taken = await isSlugTakenInLocale(slug, payload.locale);
    if (taken) {
      throw new Error('This slug is already taken for this language. Please choose a different slug.');
    }
  }
  const id = payload.id || randomUUID();
  const date = payload.date ? new Date(payload.date) : new Date();
  const data = {
    id,
    slug: payload.slug,
    title: payload.title,
    description: payload.description,
    content: payload.content,
    date,
    image: payload.image ?? null,
    author: payload.author ?? null,
    locale: payload.locale,
    published: payload.published ?? false,
    metaTitle: payload.metaTitle ?? null,
    metaDescription: payload.metaDescription ?? null,
    metaKeywords: payload.metaKeywords ?? null,
  };
  const created = await prisma.blog_posts.create({
    data,
  });
  return {
    ...created,
    image: created.image ?? undefined,
    author: created.author ?? undefined,
    metaTitle: created.metaTitle ?? undefined,
    metaDescription: created.metaDescription ?? undefined,
    metaKeywords: created.metaKeywords ?? undefined,
  };
}

export type BlogPostUpdatePayload = Partial<
  Omit<BlogPostRecord, 'id' | 'locale' | 'createdAt' | 'updatedAt'>
> & { date?: Date | string };

export async function updateBlogPost(
  id: string,
  locale: string,
  payload: BlogPostUpdatePayload
): Promise<BlogPostRecord | null> {
  try {
    if (payload.slug !== undefined) {
      const slug = String(payload.slug).trim();
      if (slug) {
        const taken = await isSlugTakenInLocale(slug, locale, id);
        if (taken) {
          throw new Error('This slug is already taken for this language. Please choose a different slug.');
        }
      }
    }
    const date = payload.date !== undefined ? new Date(payload.date) : undefined;
    const updateData: Record<string, unknown> = { updatedAt: new Date() };
    if (payload.slug !== undefined) updateData.slug = payload.slug;
    if (payload.title !== undefined) updateData.title = payload.title;
    if (payload.description !== undefined) updateData.description = payload.description;
    if (payload.content !== undefined) updateData.content = payload.content;
    if (date !== undefined) updateData.date = date;
    if (payload.image !== undefined) updateData.image = payload.image ?? null;
    if (payload.author !== undefined) updateData.author = payload.author ?? null;
    if (payload.published !== undefined) updateData.published = payload.published;
    if (payload.metaTitle !== undefined) updateData.metaTitle = payload.metaTitle ?? null;
    if (payload.metaDescription !== undefined) updateData.metaDescription = payload.metaDescription ?? null;
    if (payload.metaKeywords !== undefined) updateData.metaKeywords = payload.metaKeywords ?? null;

    // Use upsert to create translation if it doesn't exist
    const existingPost = await prisma.blog_posts.findUnique({
      where: { id_locale: { id, locale } },
    });

    let result;
    if (existingPost) {
      // Update existing translation
      result = await prisma.blog_posts.update({
        where: { id_locale: { id, locale } },
        data: updateData as any,
      });
    } else {
      // Create new translation with same ID
      const createData: Record<string, unknown> = {
        id,
        locale,
        ...updateData,
      };
      // Ensure required fields have values
      if (!updateData.slug) createData.slug = `blog-${locale}-${id.slice(0, 8)}`;
      if (!updateData.title) createData.title = 'Untitled';
      if (!updateData.description) createData.description = '';
      if (!updateData.content) createData.content = '[]';
      if (updateData.date === undefined) createData.date = new Date();
      if (updateData.published === undefined) createData.published = false;

      result = await prisma.blog_posts.create({
        data: createData as any,
      });
    }
    return {
      ...result,
      image: result.image ?? undefined,
      author: result.author ?? undefined,
      metaTitle: result.metaTitle ?? undefined,
      metaDescription: result.metaDescription ?? undefined,
      metaKeywords: result.metaKeywords ?? undefined,
    };
  } catch (error) {
    if (error instanceof Error && /slug.*already (used|taken)/i.test(error.message)) {
      throw error;
    }
    console.error(`[updateBlogPost] Error for ${id}/${locale}:`, error);
    return null;
  }
}

export async function deleteBlogPost(id: string): Promise<{ count: number }> {
  try {
    return await prisma.blog_posts.deleteMany({
      where: { id },
    });
  } catch (error) {
    console.error(`[deleteBlogPost] Error for id ${id}:`, error);
    throw error;
  }
}

/** Normalize slug for use in URLs: spaces and invalid chars to hyphens, no leading/trailing hyphens. */
export function normalizeSlugForUrl(slug: string | null | undefined): string {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '') || '';
}

/** Page size for blogs listing (search + pagination). */
export const BLOGS_LIST_PAGE_SIZE = 12;

/** Shape expected by home page blog section (HomepageBlogPost) */
export type HomepageBlogPostItem = {
  title: string;
  date: string;
  href: string;
  image: string;
  excerpt?: string;
};

/** Fetch a single published blog post by locale and slug. Returns null if not found. */
export async function getPublishedBlogPostBySlug(
  locale: string,
  slug: string
): Promise<BlogPostRecord | null> {
  const normalizedSlug = (slug ?? '').trim();
  if (!normalizedSlug) return null;
  try {
    const result = await prisma.blog_posts.findFirst({
      where: {
        locale,
        published: true,
        slug: normalizedSlug,
      },
    });
    if (!result) return null;
    return {
      ...result,
      image: result.image ?? undefined,
      author: result.author ?? undefined,
      metaTitle: result.metaTitle ?? undefined,
      metaDescription: result.metaDescription ?? undefined,
      metaKeywords: result.metaKeywords ?? undefined,
    };
  } catch (error) {
    console.error(`[getPublishedBlogPostBySlug] Error for ${locale}/${normalizedSlug}:`, error);
    return null;
  }
}

/** Fetch published blog posts for the home page, for a given locale. */
export async function getPublishedBlogPostsForHome(
  locale: string,
  limit = 3
): Promise<HomepageBlogPostItem[]> {
  try {
    const results = await prisma.blog_posts.findMany({
      where: { locale, published: true },
      orderBy: [{ date: 'desc' }, { updatedAt: 'desc' }],
      take: limit,
    });
    const slugForUrl = (s: string) => normalizeSlugForUrl(s) || s;
    return results.map((r) => ({
      title: r.title,
      date: r.date ? new Date(r.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' }) : '',
      href: `/blog/${slugForUrl(r.slug)}`,
      image: r.image || '',
      excerpt: r.description || undefined,
    }));
  } catch (error) {
    console.error('[getPublishedBlogPostsForHome] Error:', error);
    return [];
  }
}

export type SearchBlogResult = {
  posts: HomepageBlogPostItem[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
};

/** Search published blog posts across entire DB for locale; supports pagination. */
export async function getPublishedBlogPostsSearch(
  locale: string,
  options: { query?: string; page?: number; limit?: number }
): Promise<SearchBlogResult> {
  const pageNum = Number(options?.page);
  const limitNum = Number(options?.limit);
  const page = Math.max(1, Number.isFinite(pageNum) ? pageNum : 1);
  const limit = Math.min(50, Math.max(1, Number.isFinite(limitNum) ? limitNum : BLOGS_LIST_PAGE_SIZE));
  const query = typeof options?.query === 'string' ? options.query.trim() : '';

  try {
    const where = query
      ? {
          locale,
          published: true,
          OR: [
            { title: { contains: query, mode: 'insensitive' as const } },
            { description: { contains: query, mode: 'insensitive' as const } },
            { content: { contains: query, mode: 'insensitive' as const } },
          ],
        }
      : { locale, published: true };

    const [total, results] = await Promise.all([
      prisma.blog_posts.count({ where }),
      prisma.blog_posts.findMany({
        where,
        orderBy: [{ date: 'desc' }, { updatedAt: 'desc' }],
        skip: (page - 1) * limit,
        take: limit,
      }),
    ]);

    const slugForUrl = (s: string) => normalizeSlugForUrl(s) || s;
    const posts: HomepageBlogPostItem[] = results.map((r) => ({
      title: r.title,
      date: r.date ? new Date(r.date).toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' }) : '',
      href: `/blog/${slugForUrl(r.slug)}`,
      image: r.image || '',
      excerpt: r.description || undefined,
    }));

    return {
      posts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit) || 1,
    };
  } catch (error) {
    console.error('[getPublishedBlogPostsSearch] Error:', error);
    return { posts: [], total: 0, page: 1, limit, totalPages: 1 };
  }
}
