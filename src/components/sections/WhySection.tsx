import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";
import { WHY_CARD_BORDERS } from "@/config/structure";
import { cn } from "@/lib/utils";

type WhyCard = { title: string; text: string; points: string[] };

export function WhySection() {
  const t = useTranslations("why");
  const cards = t.raw("cards") as WhyCard[];

  return (
    <section id="tentang" aria-labelledby="why-title" className="section">
      <div className="wrap">
        <SectionHead
          titleId="why-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {cards.map(({ title, text, points }, index) => (
            <article
              key={title}
              className={cn(
                "min-w-0 rounded-md border-t-4 bg-white px-7 py-[30px]",
                WHY_CARD_BORDERS[index],
              )}
            >
              <h3 className="mb-3">{title}</h3>
              <p>{text}</p>
              <ul className="mt-3.5 list-disc pl-[18px] text-[.97rem] text-slate-muted">
                {points.map((point) => (
                  <li key={point} className="mb-1.5">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
