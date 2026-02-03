'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const CACHE_TTL_MS = 20_000; // 20 seconds

const cache = new Map<
  string,
  { data: unknown; timestamp: number }
>();

function getCached<T>(url: string): T | null {
  const entry = cache.get(url);
  if (!entry) return null;
  if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
    cache.delete(url);
    return null;
  }
  return entry.data as T;
}

function setCached(url: string, data: unknown): void {
  cache.set(url, { data, timestamp: Date.now() });
}

export interface UseAdminListOptions<T> {
  /** Parse response (e.g. res.json()); default is res.json() */
  parse?: (res: Response) => Promise<T>;
  /** Transform array to final shape; default is identity */
  transform?: (raw: T) => T;
  /** Only show full loading on initial load; refetch in background without clearing table */
  loadingOnlyOnFirstLoad?: boolean;
  /** When these change, refetch (e.g. [refreshKey]) */
  refetchDeps?: unknown[];
}

export function useAdminList<T = unknown>(
  url: string | null,
  options: UseAdminListOptions<T> = {}
) {
  const {
    parse = (res) => res.json() as Promise<T>,
    transform = (x) => x,
    loadingOnlyOnFirstLoad = true,
    refetchDeps = [],
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState<string | null>(null);
  const hasLoadedRef = useRef(false);

  const refetch = useCallback(async () => {
    if (!url) return;
    const showLoading = loadingOnlyOnFirstLoad ? !hasLoadedRef.current : true;
    if (showLoading) setLoading(true);
    setError(null);
    const cached = getCached<T>(url);
    if (cached != null && !hasLoadedRef.current) {
      setData(transform(cached));
      setLoading(false);
    }
    try {
      const res = await fetch(url, { credentials: 'include' });
      const raw = await parse(res);
      if (!res.ok) {
        setError((raw as { error?: string })?.error ?? 'Request failed');
        if (showLoading) setLoading(false);
        return;
      }
      const out = transform(raw);
      setData(out);
      setCached(url, raw);
      hasLoadedRef.current = true;
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Request failed');
    } finally {
      if (showLoading) setLoading(false);
    }
  }, [url, parse, transform, loadingOnlyOnFirstLoad]);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      return;
    }
    refetch();
  }, [url, refetch]); // refetch when url changes; call refetch() after mutations

  useEffect(() => {
    if (url && refetchDeps.length > 0) {
      refetch();
    }
  }, refetchDeps); // eslint-disable-line react-hooks/exhaustive-deps -- refetch when deps (e.g. refreshKey) change

  return { data, loading, error, refetch };
}
