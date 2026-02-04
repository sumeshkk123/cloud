"use client";

import { useCallback, useEffect, useState } from "react";

export type DemoItemFromApi = {
  id: string;
  icon: string;
  image?: string;
  title?: string | null;
  adminDemoTitle: string;
  adminDemoFeatures?: string[] | null;
  distributorsDemoTitle?: string;
  distributorsDemoFeatures?: string[] | null;
  locale: string;
  showOnHomePage?: boolean;
};

export function useDemoItems(locale: string) {
  const [items, setItems] = useState<DemoItemFromApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [retryKey, setRetryKey] = useState(0);

  const retry = useCallback(() => {
    setError(null);
    setRetryKey((k) => k + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    const url =
      typeof window !== "undefined"
        ? `${window.location.origin}/api/demo-items?locale=${encodeURIComponent(locale)}`
        : `/api/demo-items?locale=${encodeURIComponent(locale)}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data: unknown) => {
        if (cancelled) return;
        setItems(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error(String(err)));
          setItems([]);
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [locale, retryKey]);

  return { items, loading, error, retry };
}
