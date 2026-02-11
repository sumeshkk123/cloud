"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Minimal global error UI. Avoids app components so it can render when other chunks fail.
 * Must include <html> and <body> per Next.js docs.
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global application error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, sans-serif", background: "#fafafa", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ maxWidth: "32rem", padding: "2rem", textAlign: "center" }}>
          <div style={{ fontSize: "6rem", fontWeight: 700, color: "#dc2626", lineHeight: 1 }}>500</div>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, marginTop: "1rem", marginBottom: "0.5rem" }}>Something went wrong</h1>
          <p style={{ color: "#6b7280", marginBottom: "1.5rem" }}>
            A critical error occurred. Please try again or go back home.
          </p>
          {typeof process !== "undefined" && process.env.NODE_ENV === "development" && error?.message && (
            <pre style={{ textAlign: "left", padding: "1rem", background: "#fef2f2", borderRadius: "0.5rem", fontSize: "0.875rem", overflow: "auto", marginBottom: "1.5rem" }}>
              {error.message}
            </pre>
          )}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button
              type="button"
              onClick={reset}
              style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", fontWeight: 600, color: "#fff", background: "#2563eb", border: "none", borderRadius: "0.5rem", cursor: "pointer" }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{ padding: "0.75rem 1.5rem", fontSize: "1rem", fontWeight: 600, color: "#2563eb", background: "transparent", border: "2px solid #2563eb", borderRadius: "0.5rem", textDecoration: "none" }}
            >
              Go to homepage
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
