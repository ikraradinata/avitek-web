import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";

type Milestone = { year: string; title: string; text: string };

export function ProjectTimeline() {
  const t = useTranslations("track");
  const milestones = t.raw("items") as Milestone[];

  return (
    <section id="jejak" aria-labelledby="track-title" className="section bg-white">
      <div className="wrap">
        <SectionHead
          titleId="track-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <ol className="relative grid grid-cols-1 gap-[26px] before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-0.5 before:bg-slate/50 before:content-[''] lg:grid-cols-5 lg:gap-0 lg:before:bottom-auto lg:before:left-0 lg:before:right-0 lg:before:top-[15px] lg:before:h-0.5 lg:before:w-auto">
          {milestones.map(({ year, title, text }) => (
            <li key={year} className="group relative pl-[30px] lg:pl-0 lg:pr-[18px]">
              <span className="text-[1.05rem] font-extrabold text-navy lg:relative lg:z-[1] lg:inline-block lg:bg-white lg:pr-2.5">
                <i className="absolute left-0 top-[7px] size-3 rounded-full bg-slate group-last:bg-orange group-last:ring-[5px] group-last:ring-orange-soft lg:static lg:mr-2.5 lg:inline-block lg:align-[1px]" />
                {year}
              </span>
              <h3 className="mb-1.5 mt-[18px] text-[1.02rem]">{title}</h3>
              <p className="text-[.92rem] text-slate-muted">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
