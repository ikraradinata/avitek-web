import { useTranslations } from "next-intl";
import Image from "next/image";
import type { Founder } from "@/config/founders";
import { cn } from "@/lib/utils";

// Cincin emas untuk Ketua, teal untuk pendiri lain, mengikuti poster peluncuran
export function FounderCard({ founder }: Readonly<{ founder: Founder }>) {
  const t = useTranslations(`founders.items.${founder.slug}`);
  const ring = founder.chair ? "ring-gold" : "ring-teal";

  return (
    <li className="flex min-w-0 flex-col items-center text-center">
      <div
        className={cn(
          "relative mb-5 grid size-[132px] place-items-center overflow-hidden rounded-full bg-mist ring-[5px] ring-offset-4 ring-offset-white",
          ring,
        )}
      >
        {founder.photo ? (
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            sizes="132px"
            className="object-cover"
          />
        ) : (
          <span aria-hidden="true" className="text-[2.2rem] font-extrabold text-navy">
            {founder.initials}
          </span>
        )}
      </div>
      <h3 className="text-[1.12rem]">{founder.name}</h3>
      <p className="mt-1 text-[.82rem] text-slate-muted">{founder.credentials}</p>
      <p
        className={cn(
          "mt-3 text-[.86rem] font-bold",
          founder.chair ? "text-gold-ink" : "text-teal-ink",
        )}
      >
        {t("role")}
      </p>
      <p className="mt-2 text-[.93rem]">{t("affiliation")}</p>
    </li>
  );
}
