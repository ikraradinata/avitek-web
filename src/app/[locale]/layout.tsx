import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { routing } from "@/i18n/routing";
import { openGraphFor, SITE_URL } from "@/lib/seo";
import "../globals.css";

// File font ada di proyek agar build tidak bergantung pada Google Fonts.
// Huruf yang tidak ada di subset latin-ext jatuh ke subset latin.
const jakartaLatin = localFont({
  src: "../fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-jakarta",
});

const jakartaLatinExt = localFont({
  src: "../fonts/plus-jakarta-sans-latin-ext-wght-normal.woff2",
  weight: "200 800",
  variable: "--font-jakarta-ext",
  preload: false,
  adjustFontFallback: false,
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>): Promise<Metadata> {
  if (!hasLocale(routing.locales, locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: { id: "/id", en: "/en", "x-default": "/id" },
    },
    openGraph: openGraphFor(locale, title, description, `/${locale}`),
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  // Kirim hanya teks yang dipakai komponen klien agar bundle tetap kecil
  const { nav, join, agenda } = await getMessages();
  const { showAll, hideAll } = agenda as Record<string, string>;

  return (
    <html
      lang={locale}
      className={`${jakartaLatin.variable} ${jakartaLatinExt.variable}`}
    >
      <body>
        <NextIntlClientProvider
          messages={{ nav, join, agenda: { showAll, hideAll } }}
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
