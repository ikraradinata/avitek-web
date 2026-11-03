import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { FoundersTeaser } from "@/components/sections/FoundersTeaser";
import { LogoMeaningSection } from "@/components/sections/LogoMeaningSection";
import { ProjectTimeline } from "@/components/sections/ProjectTimeline";
import { PageHeader } from "@/components/ui/page-header";
import { pageMetadata } from "@/lib/seo";

type PageProps = Readonly<{ params: { locale: string } }>;

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "about" });
  return pageMetadata(locale, "/tentang", t("metaTitle"), t("metaDescription"));
}

export default async function AboutPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <main id="top">
      <PageHeader kicker={t("kicker")} title={t("title")} intro={t("intro")} />
      <ProjectTimeline />
      <LogoMeaningSection />
      <FoundersTeaser />
    </main>
  );
}
