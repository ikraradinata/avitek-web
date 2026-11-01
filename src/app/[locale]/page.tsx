import { getTranslations, setRequestLocale } from "next-intl/server";

// Halaman uji sementara T-04, diganti rangkaian section mulai T-07
export default async function HomePage({
  params: { locale },
}: Readonly<{
  params: { locale: string };
}>) {
  setRequestLocale(locale);
  const t = await getTranslations("hero");

  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
