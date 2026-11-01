import { useTranslations } from "next-intl";
import { SectionHead } from "@/components/ui/section-head";
import { Tag } from "@/components/ui/tag";
import { STEP_STATES } from "@/config/structure";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Step = { title: string; text: string; tag: string };

export function FirstSteps() {
  const t = useTranslations("steps");
  const steps = t.raw("items") as Step[];

  return (
    <section aria-labelledby="steps-title" className="section">
      <div className="wrap">
        <SectionHead
          titleId="steps-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <ol className="relative before:absolute before:bottom-2 before:left-[23px] before:top-2 before:w-0.5 before:bg-mist before:content-['']">
          {steps.map(({ title, text, tag }, index) => {
            const state = STEP_STATES[index];
            return (
              <li
                key={title}
                className="relative grid grid-cols-[48px_1fr] items-start gap-[22px] py-[22px] sm:grid-cols-[48px_1fr_auto]"
              >
                <span
                  className={cn(
                    "relative z-[1] grid size-12 place-items-center rounded-full border-2 font-extrabold text-navy",
                    state === "now"
                      ? "border-orange bg-orange"
                      : "border-slate bg-white",
                  )}
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="mb-1.5">{title}</h3>
                  <p className="max-w-[62ch] text-[.97rem] text-slate-muted">
                    {text}
                  </p>
                </div>
                <Tag
                  state={state}
                  className="col-start-2 justify-self-start sm:col-start-auto sm:justify-self-auto"
                >
                  {tag}
                </Tag>
              </li>
            );
          })}
        </ol>
        <Link
          href={{ pathname: "/", hash: "program" }}
          className="mt-4 inline-block py-2 font-bold text-navy underline decoration-orange underline-offset-[5px]"
        >
          {t("more")}
        </Link>
      </div>
    </section>
  );
}
