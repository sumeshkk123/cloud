import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins, Lexend } from "next/font/google";

import { siteBaseConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-lexend",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

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
    <html lang="en" suppressHydrationWarning className={cn(poppins.variable, lexend.variable)}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
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
