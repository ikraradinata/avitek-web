import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FoundersGrid } from "@/components/sections/FoundersGrid";
import { PageHeader } from "@/components/ui/page-header";
import { pageMetadata } from "@/lib/seo";

type PageProps = Readonly<{ params: { locale: string } }>;

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "founders" });
  return pageMetadata(
    locale,
    "/tentang/pendiri",
    t("metaTitle"),
    t("metaDescription"),
  );
}

export default async function FoundersPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = await getTranslations("founders");

  return (
    <main id="top">
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />
      <section aria-label={t("title")} className="section bg-white">
        <div className="wrap">
          <FoundersGrid />
          <p className="mx-auto mt-14 max-w-[60ch] text-center text-[.93rem] text-slate-muted">
            {t("more")}
          </p>
        </div>
      </section>
    </main>
  );
}
