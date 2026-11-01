import type { Metadata } from "next";

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
