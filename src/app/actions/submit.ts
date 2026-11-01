"use server";

import { createHash } from "node:crypto";
import { getTranslations } from "next-intl/server";
import { headers } from "next/headers";
import { appendSubmission } from "@/lib/google-sheet";
import {
  invalidFields,
  submissionSchema,
  validationMessage,
  type SubmissionInput,
  type SubmitResult,
} from "@/lib/schema";

function hashIp(ip: string) {
  return createHash("sha256")
    .update(`${ip}${process.env.IP_HASH_SALT ?? ""}`)
    .digest("hex")
    .slice(0, 32);
}

export async function submitJoin(input: SubmissionInput): Promise<SubmitResult> {
  const locale = input?.locale === "en" ? "en" : "id";
  const t = await getTranslations({ locale, namespace: "join" });

  const parsed = submissionSchema.safeParse(input);
  if (!parsed.success) {
    const fields = invalidFields(parsed.error);
    const path = input?.path === "mitra" || input?.path === "hadir" ? input.path : "anggota";
    const message = validationMessage(fields, path, (key, values) => t(key, values));
    return {
      ok: false,
      fieldErrors: Object.fromEntries(fields.map((field) => [field, message])),
    };
  }

  const { website, ...submission } = parsed.data;
  const success: SubmitResult = {
    ok: true,
    message: `${t(`paths.${submission.path}.ok`)}. ${t("thanks", {
      name: submission.nama,
      email: submission.email,
    })}`,
  };

  // Honeypot terisi berarti robot: tampak berhasil, tetapi tidak disimpan
  if (website) return success;

  const requestHeaders = headers();
  const ip = requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const status = await appendSubmission({
    ...submission,
    userAgent: (requestHeaders.get("user-agent") ?? "").slice(0, 300),
    ipHash: hashIp(ip),
  });

  if (status === "ok") return success;
  return { ok: false, error: status === "rate_limited" ? "rate_limited" : "server" };
}
