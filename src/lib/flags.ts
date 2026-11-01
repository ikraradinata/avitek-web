// Konten Usulan yang belum disetujui pengurus, berlaku untuk ID dan EN sekaligus.
// Nilainya dibaca saat build, jadi perubahan di Vercel perlu deploy ulang.
export const SHOW_PROPOSED = process.env.NEXT_PUBLIC_SHOW_PROPOSED === "true";
