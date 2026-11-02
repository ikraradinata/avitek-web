import { useTranslations } from "next-intl";
import Image from "next/image";
import { FooterWave } from "@/components/graphics/FooterWave";
import { JoinPathLink } from "@/components/sections/JoinPathLink";
import { CONTACT_EMAIL, FOOTER_MENU, FOOTER_MORE_HASHES } from "@/config/structure";
import { Link } from "@/i18n/navigation";
import { SHOW_PROPOSED } from "@/lib/flags";

const FOOTER_LINK = "no-underline hover:text-white hover:underline";
const COLUMN_TITLE = "mb-3.5 text-[.98rem] font-bold tracking-normal text-gold";

export function SiteFooter() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const meta = useTranslations("meta");
  const moreLinks = t.raw("moreLinks") as string[];
  const values = t.raw("values") as string[];
  // Bagian Program ikut disembunyikan oleh SHOW_PROPOSED
  const menu = FOOTER_MENU.filter(
    ({ hash }) => SHOW_PROPOSED || hash !== "program",
  );

  return (
    <footer className="relative overflow-hidden bg-navy-deep pb-7 pt-16 text-[.95rem] text-on-dark-muted">
      <FooterWave />
      <div className="wrap">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_.8fr_1fr_1.3fr]">
          <div>
            <Link
              href={{ pathname: "/", hash: "top" }}
              aria-label={nav("home")}
              className="inline-block"
            >
              <Image
                src="/logo-avitek-dark.svg"
                alt=""
                width={117}
                height={44}
                unoptimized
              />
            </Link>
            <p className="mt-4 text-[1.1rem] font-bold text-white">
              {meta("tagline")}
            </p>
            <p className="mt-2 max-w-[38ch]">{t("about")}</p>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[.82rem] font-semibold text-gold">
              {values.map((value) => (
                <li
                  key={value}
                  className="flex items-center gap-1.5 before:text-[.6rem] before:content-['◆']"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={COLUMN_TITLE}>{t("colMenu")}</h2>
            <ul className="grid gap-[9px]">
              {menu.map(({ labelKey, hash }) => (
                <li key={hash}>
                  <Link href={{ pathname: "/", hash }} className={FOOTER_LINK}>
                    {nav(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={COLUMN_TITLE}>{t("colMore")}</h2>
            <ul className="grid gap-[9px]">
              {moreLinks.map((label, index) => (
                <li key={label}>
                  {FOOTER_MORE_HASHES[index] === "mitra" ? (
                    <JoinPathLink path="mitra" className={FOOTER_LINK}>
                      {label}
                    </JoinPathLink>
                  ) : (
                    <Link
                      href={{ pathname: "/", hash: FOOTER_MORE_HASHES[index] }}
                      className={FOOTER_LINK}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link href="/kebijakan-privasi" className={FOOTER_LINK}>
                  {t("privacy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="min-w-0">
            <h2 className={COLUMN_TITLE}>{t("colContact")}</h2>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className={`flex items-start gap-2.5 text-[.9rem] [overflow-wrap:anywhere] ${FOOTER_LINK}`}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="mt-0.5 flex-none"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
        <div className="mt-[52px] border-t border-white/[.12] pt-[22px] text-[.88rem]">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
