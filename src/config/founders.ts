// Data pendiri yang tidak diterjemahkan. Peran dan jabatan ada di
// messages founders.items.<slug>. Nama dan gelar ditulis persis sesuai
// poster peluncuran 3 November 2026.

export type Founder = {
  slug: string;
  name: string;
  // Nama tanpa gelar, untuk data terstruktur mesin pencari
  plainName: string;
  credentials: string;
  initials: string;
  chair?: boolean;
  // Isi setelah foto asli dan izin pendiri diterima, misalnya /founders/meyliana.jpg
  photo?: string;
};

// Jumlah seluruh pendiri menurut pemilik situs (3 November 2026). Kartu penanda
// "pendiri lainnya" menghitung sisa dari angka ini.
export const FOUNDER_TOTAL = 19;

// Menambah pendiri: salin templat di bawah ke akhir daftar, isi sesuai
// docs/09-DATA-PENDIRI.md, lalu tambahkan founders.items.<slug> berisi role
// dan affiliation di messages/id.json dan messages/en.json.
//
//   {
//     slug: "nama-pendiri",
//     name: "Dr. Nama Pendiri",
//     plainName: "Nama Pendiri",
//     credentials: "S.T., M.T.",
//     initials: "NP",
//   },
export const FOUNDERS: readonly Founder[] = [
  {
    slug: "meyliana",
    name: "Prof. Dr. Ir. Meyliana",
    plainName: "Meyliana",
    credentials: "S.Kom., MM, IPU, ASEAN Eng., CDMS, CBDMP, CME",
    initials: "M",
    chair: true,
  },
  {
    slug: "idha-kristiana",
    name: "Dr. Idha Kristiana",
    plainName: "Idha Kristiana",
    credentials: "S.Kom., MMSI, SMIEEE",
    initials: "IK",
  },
  {
    slug: "ikrar-adinata-arin",
    name: "Dr. Ir. Ikrar Adinata Arin",
    plainName: "Ikrar Adinata Arin",
    credentials: "S.T., M.T.I., IPM., ASEAN Eng., SMIEEE",
    initials: "IA",
  },
  {
    slug: "sunardi",
    name: "Dr. Sunardi",
    plainName: "Sunardi",
    credentials: "S.Kom., M.M.S.I.",
    initials: "S",
  },
];
