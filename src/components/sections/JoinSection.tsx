import { useTranslations } from "next-intl";
import { JoinForm } from "@/components/sections/JoinForm";
import { Kicker } from "@/components/ui/kicker";

export function JoinSection() {
  const t = useTranslations("join");

  return (
    <section
      id="gabung"
      aria-labelledby="join-title"
      className="section bg-navy text-white"
    >
      <JoinForm
        intro={
          <>
            <Kicker tone="dark">{t("kicker")}</Kicker>
            <h2 id="join-title" className="max-w-[20ch] text-white">
              {t("title")}
            </h2>
            <p className="mb-[30px] mt-[18px] text-[1.15rem] text-on-dark-muted">
              {t("lede")}
            </p>
          </>
        }
      />
    </section>
  );
}
