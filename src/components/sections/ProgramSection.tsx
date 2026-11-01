import { useTranslations } from "next-intl";
import { ProgramDiagonal } from "@/components/graphics/DiagonalPattern";
import { SectionHead } from "@/components/ui/section-head";
import { Link } from "@/i18n/navigation";

type ProgramCard = { role: string; title: string; text: string };

export function ProgramSection() {
  const t = useTranslations("program");
  const cards = t.raw("cards") as ProgramCard[];

  return (
    <section
      id="program"
      aria-labelledby="program-title"
      className="section overflow-hidden bg-navy text-white"
    >
      <ProgramDiagonal />
      <div className="wrap">
        <SectionHead
          titleId="program-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
          tone="dark"
        />
        <div className="relative grid grid-cols-1 border-t border-white/[.16] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ role, title, text }) => (
            <article
              key={title}
              className="flex min-w-0 flex-col gap-3 border-b border-white/[.16] pb-7 pr-[26px] pt-8 sm:mr-[26px] lg:border-b-0 lg:border-r lg:last:mr-0 lg:last:border-r-0"
            >
              <span className="text-[.85rem] font-bold text-gold">{role}</span>
              <h3 className="text-white">{title}</h3>
              <p className="flex-1 text-[.95rem] text-on-dark-muted">{text}</p>
              <Link
                href={{ pathname: "/", hash: "gabung" }}
                className="self-start py-2 text-[.93rem] font-bold text-white underline decoration-orange decoration-2 underline-offset-[5px]"
              >
                {t("more")}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
