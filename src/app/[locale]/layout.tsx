import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          messages={{ nav, join, agenda: { showAll, hideAll } }}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
