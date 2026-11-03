import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
).replace(/\/$/, "");

// Metadata pratinjau tautan, dipakai beranda dan halaman privasi
export function openGraphFor(
  locale: string,
  title: string,
  description: string,
  path: string,
): Metadata["openGraph"] {
  const isIndonesian = locale === "id";
  return {
    type: "website",
    siteName: "AVITEK KUKM",
    title,
    description,
    url: path,
    locale: isIndonesian ? "id_ID" : "en_US",
    alternateLocale: isIndonesian ? ["en_US"] : ["id_ID"],
    images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: title }],
  };
}

// Metadata halaman dalam: canonical dan hreflang mengikuti alamat per bahasa
export function pageMetadata(
  locale: string,
  href: "/tentang" | "/tentang/pendiri",
  title: string,
  description: string,
): Metadata {
  const pathFor = (target: string) => getPathname({ href, locale: target });
  return {
    title,
    description,
    openGraph: openGraphFor(locale, title, description, pathFor(locale)),
    twitter: { card: "summary_large_image", title, description },
    alternates: {
      canonical: pathFor(locale),
      languages: {
        ...Object.fromEntries(routing.locales.map((l) => [l, pathFor(l)])),
        "x-default": pathFor(routing.defaultLocale),
      },
    },
  };
}
