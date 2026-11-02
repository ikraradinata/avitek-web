import { useTranslations } from "next-intl";
import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { LOGO_SWATCHES } from "@/config/structure";
import { cn } from "@/lib/utils";

type MeaningItem = { name: string; text: string };

export function LogoMeaningSection() {
  const t = useTranslations("logoMeaning");
  const shapes = t.raw("shapes") as MeaningItem[];
  const colors = t.raw("colors") as MeaningItem[];

  return (
    <section
      id="makna-logo"
      aria-labelledby="logo-meaning-title"
      className="section bg-white"
    >
      <div className="wrap grid grid-cols-1 items-center gap-14 lg:grid-cols-[.8fr_1.2fr]">
        <div className="mx-auto w-full min-w-0 max-w-[320px]">
          <Image
            src="/logo-avitek-full.svg"
            alt={t("imageAlt")}
            width={760}
            height={1228}
            unoptimized
            className="h-auto w-full"
          />
        </div>
        <div className="min-w-0">
          <Kicker>{t("kicker")}</Kicker>
          <h2 id="logo-meaning-title">{t("title")}</h2>
          <div className="mt-[34px] grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="min-w-0">
              <h3 className="mb-4 text-[1.08rem]">{t("shapesTitle")}</h3>
              <ul className="grid gap-4">
                {shapes.map(({ name, text }) => (
                  <li key={name} className="border-l-4 border-teal pl-3.5">
                    <b className="block text-navy">{name}</b>
                    <span className="text-[.97rem] text-slate-muted">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="mb-4 text-[1.08rem]">{t("colorsTitle")}</h3>
              <ul className="grid gap-4">
                {colors.map(({ name, text }, index) => (
                  <li key={name} className="grid grid-cols-[28px_1fr] items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={cn("mt-0.5 size-7 rounded-full", LOGO_SWATCHES[index])}
                    />
                    <div className="min-w-0">
                      <b className="block text-navy">{name}</b>
                      <span className="text-[.97rem] text-slate-muted">{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
