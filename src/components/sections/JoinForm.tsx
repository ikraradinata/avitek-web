"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState, type FormEvent } from "react";
import { submitJoin } from "@/app/actions/submit";
import { Button } from "@/components/ui/button";
import { fieldControlClass, Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CATEGORY_CODES,
  JOIN_PATH_EVENT,
  JOIN_PATHS,
  type JoinPath,
} from "@/config/structure";
import {
  invalidFields,
  submissionSchema,
  validationMessage,
  type SubmissionInput,
} from "@/lib/schema";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type Notice = { tone: "success" | "error"; text: string } | null;

export function JoinForm({
  intro,
}: Readonly<{
  intro: React.ReactNode;
}>) {
  const t = useTranslations("join");
  const [path, setPath] = useState<JoinPath>("anggota");
  const locale = useLocale();
  const [notice, setNotice] = useState<Notice>(null);
  const [submitting, setSubmitting] = useState(false);

  function selectPath(nextPath: JoinPath) {
    setPath(nextPath);
    setNotice(null);
  }

  useEffect(() => {
    function handlePathEvent(event: Event) {
      selectPath((event as CustomEvent<JoinPath>).detail);
    }
    window.addEventListener(JOIN_PATH_EVENT, handlePathEvent);
    return () => window.removeEventListener(JOIN_PATH_EVENT, handlePathEvent);
  }, []);

  function showError(text: string) {
    setNotice({ tone: "error", text });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const input = {
      locale,
      path,
      nama: data.get("nama"),
      institusi: data.get("institusi"),
      email: data.get("email"),
      wa: data.get("wa"),
      kategori: data.get("kategori") ?? undefined,
      pesan: data.get("pesan"),
      consent: data.get("consent") === "on",
      website: data.get("website"),
    } as SubmissionInput;

    const parsed = submissionSchema.safeParse(input);
    if (!parsed.success) {
      const fields = invalidFields(parsed.error);
      showError(validationMessage(fields, path, (key, values) => t(key, values)));
      (form.elements.namedItem(fields[0]) as HTMLElement | null)?.focus();
      return;
    }

    setNotice(null);
    setSubmitting(true);
    try {
      const result = await submitJoin(input);
      if (result.ok) {
        setNotice({ tone: "success", text: result.message });
        form.reset();
      } else if ("fieldErrors" in result) {
        showError(Object.values(result.fieldErrors)[0]);
      } else {
        showError(t(result.error === "rate_limited" ? "errorRateLimited" : "errorServer"));
      }
    } catch {
      showError(t("errorServer"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="wrap grid grid-cols-1 items-start gap-14 lg:grid-cols-2">
      <div className="min-w-0">
        {intro}
        <div role="group" aria-label={t("groupLabel")} className="grid gap-3">
          {JOIN_PATHS.map((option) => {
            const active = option === path;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={active}
                onClick={() => selectPath(option)}
                className={cn(
                  "grid cursor-pointer grid-cols-[1fr_auto] items-center gap-4 rounded-md border px-5 py-[18px] text-left text-white transition-colors hover:border-orange hover:bg-white/[.04]",
                  active ? "border-orange bg-white/[.04]" : "border-white/[.18]",
                )}
              >
                <div className="min-w-0">
                  <b className="block text-[1.05rem]">
                    {t(`paths.${option}.label`)}
                  </b>
                  <span className="text-[.9rem] text-on-dark-muted">
                    {t(`paths.${option}.hint`)}
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-7 place-items-center rounded-full border-2",
                    active
                      ? "border-orange bg-orange text-navy"
                      : "border-white/35",
                  )}
                >
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="min-w-0 rounded-lg bg-ice px-[30px] py-8 text-navy"
      >
        <h3 className="mb-1">{t(`paths.${path}.title`)}</h3>
        <p className="mb-[22px] text-[.93rem] text-slate-muted">
          {t(`paths.${path}.sub`)}
        </p>
        <div className="grid grid-cols-1 gap-x-3.5 sm:grid-cols-2">
          <div className="mb-4 grid gap-1.5">
            <Label htmlFor="join-name">{t("fields.name")} *</Label>
            <Input id="join-name" name="nama" required autoComplete="name" />
          </div>
          <div className="mb-4 grid gap-1.5">
            <Label htmlFor="join-org">{t("fields.org")} *</Label>
            <Input
              id="join-org"
              name="institusi"
              required
              autoComplete="organization"
            />
          </div>
          <div className="mb-4 grid gap-1.5">
            <Label htmlFor="join-email">{t("fields.email")} *</Label>
            <Input
              id="join-email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-4 grid gap-1.5">
            <Label htmlFor="join-wa">{t("fields.wa")}</Label>
            <Input id="join-wa" name="wa" type="tel" autoComplete="tel" />
          </div>
        </div>
        <div className="mb-4 grid gap-1.5">
          <Label htmlFor="join-category">{t("fields.category")}</Label>
          <div className="relative">
            <select
              id="join-category"
              name="kategori"
              className={cn(fieldControlClass, "appearance-none pr-10")}
            >
              {(t.raw("categories") as string[]).map((label, index) => (
                <option key={CATEGORY_CODES[index]} value={CATEGORY_CODES[index]}>
                  {label}
                </option>
              ))}
            </select>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-navy"
            >
              ▾
            </span>
          </div>
        </div>
        <div className="mb-4 grid gap-1.5">
          <Label htmlFor="join-message">{t(`paths.${path}.msg`)}</Label>
          <Textarea id="join-message" name="pesan" />
        </div>
        {/* Honeypot: tak terlihat manusia, biasanya diisi robot spam */}
        <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
          <input name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <label className="mb-4 mt-1 grid grid-cols-[20px_1fr] items-start gap-2.5 text-[.88rem] text-slate-muted">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 size-[18px] accent-teal"
          />
          <span>
            {t.rich("fields.consent", {
              // Tab baru agar isian formulir tidak hilang saat membaca kebijakan
              link: (chunks) => (
                <Link
                  href="/kebijakan-privasi"
                  target="_blank"
                  rel="noopener"
                  className="font-semibold text-navy underline"
                >
                  {chunks}
                </Link>
              ),
            })}
          </span>
        </label>
        <Button
          type="submit"
          disabled={submitting}
          aria-busy={submitting}
          className="mt-1.5 w-full justify-center"
        >
          {t(`paths.${path}.submit`)}
        </Button>
        <div role="status" aria-live="polite">
          {notice && (
            <p
              className={cn(
                "mt-4 rounded-[10px] p-[18px] text-[.95rem]",
                notice.tone === "success"
                  ? "bg-teal-soft text-teal-deep"
                  : "bg-orange-soft text-orange-ink",
              )}
            >
              {notice.text}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
