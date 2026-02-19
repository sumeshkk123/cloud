/**
 * Blog Migration Script
 * 
 * Fetches blog posts from WordPress API (cloudmlmsoftware.com) and imports them
 * into the local database.
 * 
 * Usage: npx tsx scripts/migrate-blogs.ts
 * 
 * Requirements:
 * - Database must be running
 * - Environment variables must be set (DATABASE_URL)
 */

import { prisma } from '../lib/db/prisma';
import { randomUUID } from 'crypto';

const WORDPRESS_API_URL = 'https://cloudmlmsoftware.com/wp-json/wp/v2/posts';
const DEFAULT_IMAGE = '/images/dummy-blog.avif';
const BATCH_SIZE = 20;

// Supported languages from WPML
const SUPPORTED_LOCALES = [
  { wpml: 'en', locale: 'en' },
  { wpml: 'es', locale: 'es' },
  { wpml: 'fr', locale: 'fr' },
  { wpml: 'it', locale: 'it' },
  { wpml: 'pt-pt', locale: 'pt' },
  { wpml: 'zh-hans', locale: 'zh' },
];

/**
 * WordPress post structure from API
 */
interface WordPressPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
}

/**
 * WordPress media structure
 */
interface WordPressMedia {
  id: number;
  source_url: string;
  alt_text: string;
}

/**
 * Fetch all posts from WordPress API with pagination for a specific language
 */
async function fetchAllPosts(wpmlLang: string): Promise<WordPressPost[]> {
  const allPosts: WordPressPost[] = [];
  let page = 1;
  let hasMore = true;

  console.log(`Fetching posts from WordPress API for language: ${wpmlLang}...`);

  while (hasMore) {
    try {
      const response = await fetch(`${WORDPRESS_API_URL}?per_page=100&page=${page}&lang=${wpmlLang}`);
      
      if (!response.ok) {
        if (response.status === 400) {
          // No more pages
          hasMore = false;
          console.log(`Fetched ${allPosts.length} posts total`);
          break;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const posts: WordPressPost[] = await response.json();
      
      if (posts.length === 0) {
        hasMore = false;
      } else {
        allPosts.push(...posts);
        console.log(`Fetched page ${page}: ${posts.length} posts (total: ${allPosts.length})`);
        page++;
        
        // Be respectful to the API
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      hasMore = false;
    }
  }

  return allPosts;
}

/**
 * Fetch featured media URL for a post
 */
async function fetchMedia(mediaId: number): Promise<string | null> {
  if (!mediaId) return null;
  
  try {
    const response = await fetch(`https://cloudmlmsoftware.com/wp-json/wp/v2/media/${mediaId}`);
    if (!response.ok) return null;
    
    const media: WordPressMedia = await response.json();
    return media.source_url || null;
  } catch {
    return null;
  }
}

/**
 * Strip HTML tags and convert to plain text
 */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Generate a slug from title
 */
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Convert WordPress content to our format (JSON array of HTML blocks)
 */
function convertContent(content: string): string {
  // WordPress content is already HTML, we store as JSON array
  // Split by paragraphs for better structure
  const paragraphs = content
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => p.trim());
  
  return JSON.stringify(paragraphs);
}

/**
 * Import a batch of posts into the database
 */
async function importPosts(posts: Array<{
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
  translationGroupId?: string;
}>, locale: string): Promise<number> {
  let imported = 0;

  for (const post of posts) {
    try {
      // Check if post already exists by id and locale
      const existing = await prisma.blog_posts.findUnique({
        where: {
          id_locale: {
            id: post.id,
            locale: locale
          }
        }
      });

      if (existing) {
        // Update existing post
        await prisma.blog_posts.update({
          where: {
            id_locale: {
              id: post.id,
              locale: locale
            }
          },
          data: {
            title: post.title,
            description: post.description,
            content: post.content,
            date: post.date,
            image: post.image,
            author: post.author,
            translationGroupId: post.translationGroupId,
            updatedAt: new Date()
          }
        });
        console.log(`Updated: ${post.title}`);
      } else {
        // Create new post
        await prisma.blog_posts.create({
          data: {
            id: post.id,
            slug: post.slug,
            title: post.title,
            description: post.description,
            content: post.content,
            date: post.date,
            image: post.image,
            author: post.author,
            locale: locale,
            published: true,
            translationGroupId: post.translationGroupId,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        });
        console.log(`Imported: ${post.title}`);
      }
      imported++;
    } catch (error) {
      console.error(`Error importing post "${post.title}":`, error);
    }
  }

  return imported;
}

/**
 * Main migration function
 */
async function migrate() {
  console.log('=== Blog Migration Started ===\n');
  
  const startTime = Date.now();
  
  try {
    // Test database connection
    await prisma.$connect();
    console.log('✓ Database connected\n');
    
    // First, fetch all English posts to get the slug mapping for translation groups
    console.log('Fetching English posts for translation group mapping...');
    const enPosts = await fetchAllPosts('en');
    const enSlugMap = new Map<string, string>(); // WordPress ID -> English slug
    for (const post of enPosts) {
      enSlugMap.set(String(post.id), post.slug);
    }
    console.log(`Found ${enPosts.length} English posts\n`);
    
    let totalImported = 0;
    
    // Process each supported language
    for (const { wpml, locale } of SUPPORTED_LOCALES) {
      console.log(`\n=== Processing language: ${locale} (WPML: ${wpml}) ===`);
      
      // Fetch all posts from WordPress
      const wpPosts = await fetchAllPosts(wpml);
      
      if (wpPosts.length === 0) {
        console.log(`No posts found for language: ${locale}`);
        continue;
      }
      
      console.log(`Found ${wpPosts.length} posts to import for ${locale}\n`);
      
      // Transform posts to our format
      let langImported = 0;
      
      // Process in batches
      for (let i = 0; i < wpPosts.length; i += BATCH_SIZE) {
        const batch = wpPosts.slice(i, i + BATCH_SIZE);
        const transformedPosts = batch.map(post => {
          const title = stripHtml(post.title.rendered);
          const slug = post.slug || generateSlug(title);
          const description = stripHtml(post.excerpt.rendered).slice(0, 300);
          const content = convertContent(post.content.rendered);
          
          // Use English slug as the ID for all translations - this enables grouping
          // translationGroupId = same value ensures translations are grouped together
          const englishSlug = enSlugMap.get(String(post.id)) || slug;
          const postId = englishSlug; // Use English slug as ID for all locales
          
          return {
            id: postId,
            slug,
            title,
            description,
            content,
            date: new Date(post.date),
            image: DEFAULT_IMAGE, // Using dummy image as requested
            author: 'Cloud MLM Software',
            locale,
            published: true,
            translationGroupId: postId // Same as ID - used for grouping
          };
        });
        
        const imported = await importPosts(transformedPosts, locale);
        langImported += imported;
        totalImported += imported;
        
        console.log(`Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${imported}/${batch.length} imported\n`);
        
        // Small delay between batches
        await new Promise(resolve => setTimeout(resolve, 300));
      }
      
      console.log(`Completed ${locale}: ${langImported} posts imported\n`);
    }
    
    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    
    console.log('=== Migration Complete ===');
    console.log(`Total posts imported: ${totalImported}`);
    console.log(`Duration: ${duration}s`);
    
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the migration
migrate()
  .then(() => {
    console.log('\n✓ Migration script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('\n✗ Migration failed with error:', error);
    process.exit(1);
  });
