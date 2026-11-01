import { useTranslations } from "next-intl";
import { LogoMark } from "@/components/graphics/LogoMark";
import { FOOTER_COLUMNS } from "@/config/structure";
import { Link } from "@/i18n/navigation";
import { SHOW_PROPOSED } from "@/lib/flags";

const FOOTER_LINK = "no-underline hover:text-white hover:underline";

export function SiteFooter() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-navy-deep pb-7 pt-16 text-[.95rem] text-on-dark-muted">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Link
              href={{ pathname: "/", hash: "top" }}
              className="flex items-center gap-3 text-white no-underline"
            >
              <LogoMark size={40} />
              <span>
                <b className="block text-xl font-extrabold leading-none tracking-[.02em]">
                  AVITEK
                </b>
                <span className="mt-[3px] block text-[.72rem] font-bold tracking-[.08em] text-teal-soft">
                  KUKM
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-[38ch]">{t("about")}</p>
          </div>
          {FOOTER_COLUMNS.map(({ titleKey, linksKey, hashes }) => (
            <div key={titleKey}>
              <h2 className="mb-3.5 text-[.98rem] font-bold tracking-normal text-white">
                {t(titleKey)}
              </h2>
              <ul className="grid gap-[9px]">
                {(t.raw(linksKey) as string[]).map((label, index) =>
                  // Bagian Program ikut disembunyikan oleh SHOW_PROPOSED
                  !SHOW_PROPOSED && hashes[index] === "program" ? null : (
                    <li key={label}>
                      <Link
                        href={{ pathname: "/", hash: hashes[index] }}
                        className={FOOTER_LINK}
                      >
                        {label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-[52px] flex flex-wrap justify-between gap-3 border-t border-white/[.12] pt-[22px] text-[.88rem]">
          <span>{t("copyright")}</span>
          <Link href="/kebijakan-privasi" className={FOOTER_LINK}>
            {t("privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
