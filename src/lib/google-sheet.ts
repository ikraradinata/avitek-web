import "server-only";

type SheetRecord = {
  locale: string;
  path: string;
  nama: string;
  institusi: string;
  email: string;
  wa?: string;
  kategori?: string;
  pesan?: string;
  consent: boolean;
  userAgent: string;
  ipHash: string;
};

// Mengirim satu baris ke Apps Script milik akun asosiasi
export async function appendSubmission(
  record: SheetRecord,
): Promise<"ok" | "rate_limited" | "error"> {
  const url = process.env.GOOGLE_SCRIPT_URL;
  const secret = process.env.GOOGLE_SCRIPT_SECRET;
  if (!url || !secret) {
    console.error("GOOGLE_SCRIPT_URL atau GOOGLE_SCRIPT_SECRET belum diisi");
    return "error";
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...record, secret }),
      cache: "no-store",
      signal: AbortSignal.timeout(15000),
    });
    const result = (await response.json()) as { ok: boolean; error?: string };
    if (result.ok) return "ok";
    if (result.error === "rate_limited") return "rate_limited";
    console.error(`Apps Script menolak kiriman: ${result.error}`);
    return "error";
  } catch (error) {
    console.error("Gagal menghubungi Apps Script", error);
    return "error";
  }
}
