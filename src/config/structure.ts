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

// Tujuan tautan footer, urutannya sama dengan footer.*Links di messages
export const FOOTER_COLUMNS = [
  {
    titleKey: "colOrg",
    linksKey: "orgLinks",
    hashes: ["tentang", "tentang", "tentang", "tentang"],
  },
  {
    titleKey: "colProgram",
    linksKey: "programLinks",
    hashes: ["program", "kemitraan", "acara", "penerima"],
  },
  {
    titleKey: "colJoin",
    linksKey: "joinLinks",
    hashes: ["gabung", "gabung", "gabung", "gabung"],
  },
] as const;

// Jumlah stasiun pada visual hero, satu stasiun untuk tiap penerima manfaat
export const STATION_COUNT = 30;

// Warna border atas kartu, urutannya sama dengan why.cards di messages
export const WHY_CARD_BORDERS = [
  "border-t-teal",
  "border-t-orange",
  "border-t-blue",
] as const;

export const JOIN_PATHS = ["anggota", "mitra", "hadir"] as const;
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
