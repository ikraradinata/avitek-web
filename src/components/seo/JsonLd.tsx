import { getTranslations } from "next-intl/server";
import { FOUNDERS } from "@/config/founders";
import { EVENT_END, EVENT_START } from "@/config/structure";
import { SITE_URL } from "@/lib/seo";

// F-15: data terstruktur untuk mesin pencari, semua teks dari messages
export async function JsonLd({ locale }: Readonly<{ locale: string }>) {
  const agenda = await getTranslations({ locale, namespace: "agenda" });
  const englishMeta = await getTranslations({ locale: "en", namespace: "meta" });

  const organization = {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "AVITEK KUKM",
    alternateName: englishMeta("fullName"),
    url: SITE_URL,
    logo: `${SITE_URL}/logo-avitek.svg`,
    founder: FOUNDERS.map(({ plainName }) => ({ "@type": "Person", name: plainName })),
  };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      {
        "@type": "Event",
        name: agenda("eventTitle"),
        description: agenda("intro"),
        startDate: EVENT_START,
        endDate: EVENT_END,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        inLanguage: locale,
        url: `${SITE_URL}/${locale}#acara`,
        image: `${SITE_URL}/og-${locale}.png`,
        location: { "@type": "Place", name: agenda("where"), address: agenda("where") },
        organizer: { "@id": organization["@id"] },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
