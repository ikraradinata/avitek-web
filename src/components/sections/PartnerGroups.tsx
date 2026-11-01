import { useTranslations } from "next-intl";
import { buttonVariants } from "@/components/ui/button";
import { SectionHead } from "@/components/ui/section-head";
import { Link } from "@/i18n/navigation";

type PartnerGroup = { title: string; text: string };

export function PartnerGroups() {
  const t = useTranslations("partners");
  const groups = t.raw("groups") as PartnerGroup[];

  return (
    <section id="kemitraan" aria-labelledby="partners-title" className="section">
      <div className="wrap">
        <SectionHead
          titleId="partners-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <div className="grid grid-cols-1 overflow-hidden rounded-lg border border-mist bg-white md:grid-cols-3">
          {groups.map(({ title, text }) => (
            <div
              key={title}
              className="min-w-0 border-b border-mist px-7 py-[30px] last:border-b-0 md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0"
            >
              <h3 className="mb-2 text-[1.08rem]">{title}</h3>
              <p className="text-[.95rem] text-slate-muted">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-9 flex flex-wrap items-center justify-between gap-5">
          <p className="max-w-[56ch] text-slate-muted">{t("ctaText")}</p>
          <Link
            href={{ pathname: "/", hash: "gabung" }}
            className={buttonVariants({ variant: "cta" })}
          >
            {t("cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}
