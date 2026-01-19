import "server-only";

const STRAPI_URL = (
  process.env.NEXT_PUBLIC_STRAPI_URL ??
  process.env.NEXT_PUBLIC_CMS_URL ??
  "http://localhost:1337"
).replace(/\/$/, "");
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN ?? process.env.CMS_API_TOKEN;

export type StrapiSingleResponse<T> = {
  data: {
    id: number;
    attributes: T;
  } | null;
  meta?: Record<string, unknown>;
};

export type StrapiCollectionResponse<T> = {
  data: Array<{
    id: number;
    attributes: T;
  }>;
  meta?: Record<string, unknown>;
};

type FetchOptions = {
  params?: Record<string, unknown>;
  cache?: RequestCache;
  revalidate?: number;
};

export async function fetchStrapi<TResponse>(path: string, { params = {}, cache = "no-store", revalidate }: FetchOptions = {}): Promise<TResponse | null> {
  try {
    const url = new URL(path, STRAPI_URL);
    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null) return;
      url.searchParams.append(key, String(value));
    });

    const headers: HeadersInit = {
      "Content-Type": "application/json"
    };

    if (STRAPI_TOKEN) {
      headers.Authorization = `Bearer ${STRAPI_TOKEN}`;
    }

    const response = await fetch(url, {
      headers,
      cache,
      ...(revalidate !== undefined ? { next: { revalidate } } : {})
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Failed to fetch Strapi content: ${response.status} ${response.statusText}`);
    }

    return (await response.json()) as TResponse;
  } catch (error) {
    // If Strapi is not available, return null instead of throwing
    // This allows the app to use default content
    console.warn(`Strapi fetch failed for ${path}:`, error);
    return null;
  }
}
