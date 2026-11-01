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
