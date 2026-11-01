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
