import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { openGraphFor } from "@/lib/seo";

type PrivacySection = { title: string; text: string; items?: string[] };

type PageProps = Readonly<{ params: { locale: string } }>;

export async function generateMetadata({
  params: { locale },
}: PageProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "privacy" });
  const pathFor = (target: string) =>
    getPathname({ href: "/kebijakan-privasi", locale: target });

  const title = t("metaTitle");
  const description = t("intro");

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

function PrivacyContent() {
  const t = useTranslations("privacy");
  const sections = t.raw("sections") as PrivacySection[];

  return (
    <main id="top">
      <article className="wrap section">
        <div className="max-w-[70ch]">
          <h1 className="mb-3">{t("title")}</h1>
          <p className="mb-6 text-[.93rem] font-semibold text-teal-ink">
            {t("effective")}
          </p>
          <p className="mb-10 text-[1.15rem] text-slate-muted">{t("intro")}</p>
          {sections.map(({ title, text, items }) => (
            <section key={title} className="mb-8">
              <h2 className="mb-2 text-[1.35rem]">{title}</h2>
              <p>{text}</p>
              {items && (
                <ul className="mt-2 list-disc pl-[18px]">
                  {items.map((item) => (
                    <li key={item} className="mb-1.5">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}

export default function PrivacyPage({ params: { locale } }: PageProps) {
  setRequestLocale(locale);
  return <PrivacyContent />;
}
