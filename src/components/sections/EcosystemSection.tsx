import { useTranslations } from "next-intl";
import { Fragment } from "react";
import { EcosystemDiagram } from "@/components/graphics/EcosystemDiagram";
import { Kicker } from "@/components/ui/kicker";

type Pillar = { title: string; text: string };

// Ikon pilar, urutannya sama dengan eco.pillars di messages
const PILLAR_ICONS = [
  <Fragment key="research">
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.3-4.3" />
  </Fragment>,
  <Fragment key="collaboration">
    <path d="M8 12h8M12 8v8" />
    <rect x="3" y="3" width="18" height="18" rx="4" />
  </Fragment>,
  <path key="advocacy" d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
];

export function EcosystemSection() {
  const t = useTranslations("eco");
  const pillars = t.raw("pillars") as Pillar[];

  return (
    <section aria-labelledby="eco-title" className="section bg-mist">
      <div className="wrap grid grid-cols-1 items-center gap-16 lg:grid-cols-[.9fr_1.1fr]">
        <div className="mx-auto w-full min-w-0 max-w-[480px]">
          <EcosystemDiagram
            label={t("diagramLabel")}
            nodes={{
              coop: [t("nodeCoop1"), t("nodeCoop2")],
              academia: [t("nodeAcademia")],
              industry: [t("nodeIndustry")],
              government: [t("nodeGov")],
              korea: [t("nodeKorea1"), t("nodeKorea2")],
            }}
          />
        </div>
        <div className="min-w-0">
          <Kicker>{t("kicker")}</Kicker>
          <h2 id="eco-title">{t("title")}</h2>
          <div className="mt-[34px] grid gap-[22px]">
            {pillars.map(({ title, text }, index) => (
              <div
                key={title}
                className="grid grid-cols-[48px_1fr] items-start gap-[18px]"
              >
                <div className="grid size-12 place-items-center rounded-md bg-white text-teal">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {PILLAR_ICONS[index]}
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-[1.08rem]">{title}</h3>
                  <p className="text-[.97rem] text-slate-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
