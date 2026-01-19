import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteBaseConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseConfig.url),
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" }
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" }
    ]
  }
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Lexend:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const storageKey = 'cloudmlm-theme';
                const classList = document.documentElement.classList;
                const apply = (mode) => {
                  classList.remove('light', 'dark');
                  classList.add(mode);
                  document.documentElement.style.colorScheme = mode;
                };
                try {
                  const stored = localStorage.getItem(storageKey);
                  if (stored === 'light' || stored === 'dark') {
                    apply(stored);
                    return;
                  }
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  apply(prefersDark ? 'dark' : 'light');
                } catch (error) {
                  apply('light');
                }
              })();
            `
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
