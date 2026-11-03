import { useTranslations } from "next-intl";
import { FoundersGrid } from "@/components/sections/FoundersGrid";
import { buttonVariants } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";
import { Link } from "@/i18n/navigation";

// Potongan pendiri di beranda dan halaman Profil, menuju halaman Pendiri
export function FoundersTeaser() {
  const t = useTranslations("founders");

  return (
    <section id="pendiri" aria-labelledby="founders-teaser-title" className="section bg-white">
      <div className="wrap">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="min-w-0">
            <Kicker>{t("teaserKicker")}</Kicker>
            <h2 id="founders-teaser-title">{t("title")}</h2>
          </div>
          <Link href="/tentang/pendiri" className={buttonVariants({ variant: "ghost" })}>
            {t("teaserCta")}
          </Link>
        </div>
        <FoundersGrid />
      </div>
    </section>
  );
}
