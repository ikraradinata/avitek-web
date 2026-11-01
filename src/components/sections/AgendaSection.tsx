import { useTranslations } from "next-intl";
import { AgendaToggle } from "@/components/sections/AgendaToggle";
import { SectionHead } from "@/components/ui/section-head";
import { KEY_AGENDA_ROWS, VISIBLE_AGENDA_ROWS } from "@/config/structure";
import { cn } from "@/lib/utils";

type AgendaRowData = { time: string; title: string; sub: string };

function AgendaRow({
  time,
  title,
  sub,
  highlighted,
}: Readonly<AgendaRowData & { highlighted: boolean }>) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-0.5 border-b border-mist py-3 text-[.96rem] sm:grid-cols-[118px_1fr] sm:gap-[18px]",
        highlighted && "-mx-3 bg-gold-soft px-3",
      )}
    >
      <span className="font-bold tabular-nums text-navy">{time}</span>
      <div className="min-w-0">
        {highlighted ? <b>{title}</b> : <span>{title}</span>}
        {sub && (
          <small className="block text-[.86rem] text-slate-muted">{sub}</small>
        )}
      </div>
    </div>
  );
}

export function AgendaSection() {
  const t = useTranslations("agenda");
  const rows = (t.raw("rows") as AgendaRowData[]).map((row, index) => (
    <AgendaRow
      key={row.time}
      {...row}
      highlighted={KEY_AGENDA_ROWS.includes(index)}
    />
  ));

  return (
    <section id="acara" aria-labelledby="agenda-title" className="section bg-white">
      <div className="wrap">
        <SectionHead
          titleId="agenda-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <article className="grid grid-cols-1 overflow-hidden rounded-lg border border-mist bg-ice lg:grid-cols-[260px_1fr]">
          <div className="flex flex-wrap items-end justify-between gap-[30px] bg-grad-gold-orange px-[30px] py-[34px] text-navy lg:flex-col lg:flex-nowrap lg:items-stretch">
            <div>
              <div className="text-[4.6rem] font-extrabold leading-[.9] tracking-[-.04em]">
                {t("day")}
              </div>
              <div className="mt-1.5 text-[1.15rem] font-bold">{t("month")}</div>
            </div>
            <div className="text-[.95rem]">{t("when")}</div>
          </div>
          <div className="min-w-0 px-[34px] pb-[30px] pt-[34px]">
            <h3 className="mb-2 text-[1.45rem]">{t("eventTitle")}</h3>
            <p className="mb-6 text-slate-muted">{t("where")}</p>
            <AgendaToggle
              firstRows={rows.slice(0, VISIBLE_AGENDA_ROWS)}
              moreRows={rows.slice(VISIBLE_AGENDA_ROWS)}
            />
            <p className="mt-4 text-[.85rem] text-slate-muted">{t("note")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
