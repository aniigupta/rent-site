import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { site, siteUrl } from "@/data/site";
import { LanguageProvider } from "@/app/language-context";
import { HeaderNav, SiteFooter } from "@/app/components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, siteName: site.name, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0f172a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var saved = localStorage.getItem('app_lang');
                var isHi = saved === 'hi' || (!saved && (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase().startsWith('hi'));
                if (isHi) {
                  document.documentElement.lang = 'hi';
                }
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-slate-50 text-slate-900 antialiased">
        <LanguageProvider>
          <HeaderNav />
          <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6">{children}</main>
          <SiteFooter />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
