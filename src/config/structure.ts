// Data non-teks yang berpasangan dengan messages/*.json, urutannya harus sama
// dengan steps.items dan agenda.rows

export type StepState = "now" | "open" | "planned";

export const STEP_STATES: readonly StepState[] = [
  "now",
  "planned",
  "planned",
  "open",
  "planned",
];

// Indeks baris agenda yang disorot, dihitung dari 0
export const KEY_AGENDA_ROWS: readonly number[] = [5, 6];

// Jumlah baris agenda yang tampil sebelum tombol "agenda lengkap" dibuka
export const VISIBLE_AGENDA_ROWS = 7;

export const CONTACT_EMAIL = "asosiasi.avitek@gmail.com";

// Kolom Menu di footer, labelnya dari namespace nav
export const FOOTER_MENU = [
  { labelKey: "homeLink", href: { pathname: "/", hash: "top" } },
  { labelKey: "about", href: { pathname: "/tentang" } },
  { labelKey: "program", href: { pathname: "/", hash: "program" } },
  { labelKey: "partnership", href: { pathname: "/", hash: "kemitraan" } },
  { labelKey: "insights", href: { pathname: "/", hash: "penerima" } },
  { labelKey: "events", href: { pathname: "/", hash: "acara" } },
] as const;

// Tujuan kolom Lainnya, urutannya sama dengan footer.moreLinks.
// Nilai "mitra" berarti tautan ke formulir sekaligus memilih jalur mitra.
export const FOOTER_MORE_HASHES = ["gabung", "mitra"] as const;

// Jumlah stasiun pada visual hero, satu stasiun untuk tiap penerima manfaat
export const STATION_COUNT = 30;

// Warna contoh di bagian Makna logo, urutannya sama dengan logoMeaning.colors
export const LOGO_SWATCHES = ["bg-logo-navy", "bg-logo-teal", "bg-logo-gold"] as const;

// Warna border atas kartu, urutannya sama dengan why.cards di messages
export const WHY_CARD_BORDERS = [
  "border-t-teal",
  "border-t-orange",
  "border-t-blue",
] as const;

export const JOIN_PATHS = ["anggota", "mitra"] as const;
export type JoinPath = (typeof JOIN_PATHS)[number];

// Peristiwa browser untuk memilih jalur formulir dari tombol CTA di luar formulir
export const JOIN_PATH_EVENT = "avitek:join-path";

// Kode kategori disimpan ke database, urutannya sama dengan join.categories
export const CATEGORY_CODES = [
  "koperasi",
  "ukm",
  "akademisi",
  "industri",
  "pemerintah",
  "asosiasi",
] as const;

// Waktu acara peluncuran untuk data terstruktur, WIB
export const EVENT_START = "2026-11-03T10:00:00+07:00";
export const EVENT_END = "2026-11-03T14:30:00+07:00";
