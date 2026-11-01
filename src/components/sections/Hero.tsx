import { useTranslations } from "next-intl";
import { DiagonalPattern } from "@/components/graphics/DiagonalPattern";
import { StationGrid } from "@/components/graphics/StationGrid";
import { WaveBackground } from "@/components/graphics/WaveBackground";
import { FigureStrip } from "@/components/sections/FigureStrip";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const EVENT_DETAILS = [
  ["dateLabel", "date"],
  ["timeLabel", "time"],
  ["venueLabel", "venue"],
] as const;

export function Hero() {
  const t = useTranslations("hero");
  const figures = useTranslations("figures");

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-[72px]"
    >
      <DiagonalPattern />
      <div className="wrap z-[1] grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
        <div className="min-w-0">
          <Badge>{t("badge")}</Badge>
          <h1 id="hero-title" className="mb-[22px]">
            {t("title")}
          </h1>
          <p className="mb-[30px] max-w-[62ch] text-[1.15rem] text-slate-muted">
            {t("lede")}
          </p>
          <dl className="mb-[34px] grid grid-cols-[auto_1fr] gap-x-[18px] gap-y-2.5 rounded-r-md border-l-4 border-orange bg-white px-[22px] py-5 text-[.98rem]">
            {EVENT_DETAILS.map(([labelKey, valueKey]) => (
              <div key={labelKey} className="contents">
                <dt className="font-bold text-navy">{t(labelKey)}</dt>
                <dd className="min-w-0">{t(valueKey)}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-3">
            <Link
              href={{ pathname: "/", hash: "gabung" }}
              className={buttonVariants({ variant: "cta" })}
            >
              {t("ctaRsvp")}
            </Link>
            <Link
              href={{ pathname: "/", hash: "acara" }}
              className={buttonVariants({ variant: "ghost" })}
            >
              {t("ctaAgenda")}
            </Link>
          </div>
        </div>
        <figure
          aria-label={t("visualLabel")}
          className="relative min-w-0 overflow-hidden rounded-lg bg-navy px-7 pb-[26px] pt-[30px] text-white before:absolute before:-right-[30px] before:-top-[30px] before:size-[120px] before:rotate-45 before:border-[3px] before:border-gold/45 before:content-['']"
        >
          <div className="relative mb-[22px] flex items-baseline justify-between gap-4">
            <b className="text-[2.6rem] font-extrabold leading-none tracking-[-.03em] sm:text-[3.4rem]">
              {figures.raw("0.value") as string}
            </b>
            <span className="max-w-[24ch] text-right text-[.92rem] text-on-dark-muted">
              {t("visualCaption")}
            </span>
          </div>
          <StationGrid />
          <div className="mt-[22px] flex items-center gap-3.5 border-t border-white/[.14] pt-5">
            <div
              aria-hidden="true"
              className="hub-pop grid size-11 flex-none place-items-center rounded-full bg-gold text-navy"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            </div>
            <p className="text-[.95rem] text-on-dark">
              <b className="text-white">{t("hubName")}</b> {t("hubText")}
            </p>
          </div>
        </figure>
      </div>
      <WaveBackground />
      <FigureStrip />
    </section>
  );
}
