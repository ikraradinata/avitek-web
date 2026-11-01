import { useTranslations } from "next-intl";
import { DotGrid } from "@/components/graphics/DotGrid";
import { PartnerChip } from "@/components/ui/partner-chip";
import { SectionHead } from "@/components/ui/section-head";

type Beneficiary = { loc: string; name: string; text: string };
type Partner = { name: string; role: string };

export function Beneficiaries() {
  const t = useTranslations("bene");
  const beneficiaries = t.raw("items") as Beneficiary[];
  const partners = t.raw("partners") as Partner[];

  return (
    <section
      id="penerima"
      aria-labelledby="bene-title"
      className="section overflow-hidden bg-white"
    >
      <DotGrid />
      <div className="wrap">
        <SectionHead
          titleId="bene-title"
          kicker={t("kicker")}
          title={t("title")}
          intro={t("intro")}
        />
        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3">
          {beneficiaries.map(({ loc, name, text }) => (
            <article
              key={name}
              className="min-w-0 rounded-md border-l-4 border-teal bg-ice p-7"
            >
              <span className="text-[.88rem] font-bold text-teal-ink">{loc}</span>
              <h3 className="mb-2.5 mt-1.5 text-[1.1rem]">{name}</h3>
              <p className="text-[.95rem] text-slate-muted">{text}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 border-t border-mist pt-9">
          <h3 className="mb-5 text-base font-semibold text-slate-muted">
            {t("supportedBy")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {partners.map(({ name, role }) => (
              <PartnerChip key={name} name={name} role={role} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
