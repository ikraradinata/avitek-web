import { z } from "zod";
import { CATEGORY_CODES, JOIN_PATHS, type JoinPath } from "@/config/structure";

// Dipakai bersama oleh formulir di browser dan Server Action
export const submissionSchema = z.object({
  locale: z.enum(["id", "en"]),
  path: z.enum(JOIN_PATHS),
  nama: z.string().trim().min(2).max(120),
  institusi: z.string().trim().min(2).max(160),
  email: z.string().trim().email(),
  wa: z.string().trim().max(20).optional(),
  kategori: z.enum(CATEGORY_CODES).optional(),
  pesan: z.string().max(2000).optional(),
  consent: z.literal(true),
  website: z.string().optional(), // honeypot
});

export type SubmissionInput = z.input<typeof submissionSchema>;

export type SubmitResult =
  | { ok: true; message: string }
  | { ok: false; fieldErrors: Record<string, string> }
  | { ok: false; error: "rate_limited" | "server" };

const FIELD_LABELS: Record<string, string> = {
  nama: "fields.name",
  institusi: "fields.org",
  email: "fields.email",
  wa: "fields.wa",
  kategori: "fields.category",
};

export function invalidFields(error: z.ZodError) {
  return Array.from(new Set(error.issues.map((issue) => String(issue.path[0]))));
}

// Satu pesan untuk semua kolom bermasalah, dalam bahasa dari fungsi t yang diberikan
export function validationMessage(
  fields: string[],
  path: JoinPath,
  t: (key: string, values?: Record<string, string>) => string,
) {
  const labels = fields
    .filter((field) => field !== "consent")
    .map((field) => t(FIELD_LABELS[field] ?? `paths.${path}.msg`));
  return labels.length > 0
    ? t("errorFields", { fields: labels.join(", ") })
    : t("errorConsent");
}
