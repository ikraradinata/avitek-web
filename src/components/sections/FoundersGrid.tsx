import { useTranslations } from "next-intl";
import { FounderCard } from "@/components/sections/FounderCard";
import { FOUNDER_TOTAL, FOUNDERS } from "@/config/founders";

export function FoundersGrid() {
  const t = useTranslations("founders");
  const remaining = FOUNDER_TOTAL - FOUNDERS.length;

  return (
    <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {FOUNDERS.map((founder) => (
        <FounderCard key={founder.slug} founder={founder} />
      ))}
      {/* Penanda pendiri yang profilnya belum diisi, hilang sendiri jika sudah lengkap */}
      {remaining > 0 && (
        <li className="flex min-w-0 flex-col items-center text-center">
          <div className="mb-5 grid size-[132px] place-items-center rounded-full border-2 border-dashed border-slate/50 bg-ice">
            <span className="text-[2.2rem] font-extrabold text-slate-muted">
              +{remaining}
            </span>
          </div>
          <h3 className="text-[1.12rem]">{t("moreCard")}</h3>
          <p className="mt-1 text-[.86rem] text-slate-muted">{t("moreCardSub")}</p>
        </li>
      )}
    </ul>
  );
}
