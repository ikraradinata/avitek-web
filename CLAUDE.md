# CLAUDE.md — Website AVITEK KUKM (Bilingual ID/EN)

Memori proyek untuk Claude Code. Dibaca otomatis di setiap sesi. Detail ada di `docs/`.

## Proyek
Website resmi **AVITEK KUKM** (Asosiasi Inovasi Teknologi Koperasi dan UKM), lanjutan proyek ODA Smart Factory Korea–Indonesia 2023–2026. **Dua bahasa: Bahasa Indonesia (default, `/id`) dan English (`/en`).** Harus tayang **sebelum 3 November 2026, 09.00 WIB**.

Pemilik membangun lewat vibe coding dan **bukan programmer**. Jelaskan keputusan teknis dengan bahasa sederhana, dan minta konfirmasi sebelum langkah yang sulit dibatalkan (hapus file, migrasi database, ubah env produksi, force push).

## Dokumen acuan (baca sesuai kebutuhan)
- `docs/01-PRD.md`: tujuan, cakupan, kebutuhan fungsional (F-xx), termasuk F-11 s/d F-14 untuk i18n
- `messages/id.json` + `messages/en.json`: **SUMBER KEBENARAN semua teks**
- `docs/02-CONTENT.md`: versi baca dari messages, beserta status (Terverifikasi / Usulan / UI / Nama diri) dan sumber
- `docs/03-DESIGN-SYSTEM.md`: token Palet Warna Resmi AVITEK KUKM, tipografi, komponen, aturan teks panjang
- `docs/04-TECH-SPEC.md`: next-intl, struktur folder, model data, Server Action, DoD
- `docs/05-TASKS.md`: urutan task T-01 s/d T-24
- `docs/07-GOOGLE-SHEET-SETUP.md`: panduan menyambungkan formulir ke Google Sheet
- `docs/08-VERCEL-DEPLOY.md`: panduan deploy ke Vercel
- `mockup/index.html`: **acuan visual dan perilaku** (tombol ID/EN berfungsi). Jangan diedit.

## Stack
Next.js 14 App Router · TypeScript strict · **next-intl** · Tailwind CSS · shadcn/ui · Zod · Google Sheet + Apps Script · Vercel · pnpm

## Perintah
```bash
pnpm dev                       # http://localhost:3000 → /id
pnpm build                     # prebuild menjalankan scripts/check-i18n.mjs
pnpm lint
pnpm typecheck
node scripts/check-i18n.mjs    # cek paritas kunci ID/EN
```

## Aturan wajib
1. **Teks hanya dari messages.** Tidak boleh ada kalimat ID atau EN yang ditulis langsung di komponen. Pakai `getTranslations` (server) atau `useTranslations` (client).
2. **Paritas bahasa.** Setiap kunci baru wajib ditambahkan ke `id.json` **dan** `en.json` dalam commit yang sama. Jika belum ada terjemahan resmi, isi EN dengan draf dan beri tahu pemilik. Jangan biarkan kosong.
3. **Jangan mengarang teks atau fakta.** Jika butuh teks baru, tulis `TODO(konten)`, usulkan teks ID dan EN, lalu minta persetujuan. Tidak boleh menambah angka, nama, kutipan, atau logo yang tidak ada di messages.
4. **Nama diri tidak diterjemahkan** (nama koperasi, INNOBIZ Association, BINUS University, nama orang).
5. **Format sesuai bahasa:** ID `10.00`, `5,5`; EN `10:00`, `5.5`. Pakai teks di messages atau `Intl`, jangan format manual di komponen.
6. **Warna** hanya lewat token Tailwind. Tombol CTA oranye **wajib berteks navy** (teks putih di atas oranye hanya 2,8:1).
7. **Tata letak harus tahan teks EN** yang bisa lebih panjang: jangan memakai lebar tetap untuk teks, dan uji kedua bahasa di 360px.
8. **Kode:** komentar dalam Bahasa Indonesia, nama variabel/fungsi dalam Bahasa Inggris.
9. **Komponen:** Server Component secara default. `"use client"` hanya untuk LanguageSwitcher, menu mobile, dropdown, toggle agenda, dan formulir.
10. **Rahasia:** `GOOGLE_SCRIPT_URL`, `GOOGLE_SCRIPT_SECRET`, dan `IP_HASH_SALT` hanya di server (`import 'server-only'`). Jangan menulis kode rahasia di `Code.gs`. Jangan membaca atau menampilkan `.env*`.
11. **Ruang lingkup:** satu task per sesi. Jangan refactor bagian lain tanpa diminta.

## Cara kerja per task
1. Baca task dan dokumen yang relevan.
2. Tulis rencana singkat dan tunggu "lanjut".
3. Implementasi.
4. Jalankan `pnpm lint && pnpm typecheck && pnpm build`.
5. Cek `/id` dan `/en` di browser (atau `/cek-visual`).
6. Laporkan dalam ≤ 5 poin, centang task, dan usulkan pesan commit (Conventional Commits, Bahasa Indonesia).

## Keputusan yang sudah diambil
- Bahasa: `id` (default) dan `en`, URL `/id` dan `/en` selalu berprefix. Siap ditambah `ko` kelak.
- Deteksi bahasa: cookie `NEXT_LOCALE` → `Accept-Language` → default `id`, hanya di `/`
- Palet: **Palet Warna Resmi AVITEK KUKM** (Digital Teal `#087F8C`, menunggu konfirmasi hex)
- Font: Plus Jakarta Sans
- Satu momen animasi: 30 stasiun di hero
- Flag `NEXT_PUBLIC_SHOW_PROPOSED` menyembunyikan konten Usulan di **kedua** bahasa
- Jumlah tenaga ahli **tidak ditampilkan** sampai ada angka realisasi
- Data formulir: Google Sheet di akun `asosiasi.avitek@gmail.com`, lewat Apps Script (menggantikan Supabase). Notifikasi email dan batas kiriman ada di skrip yang sama.
- Flag `SHOW_PROPOSED` hanya menyembunyikan Program dan Lima Langkah (opsi B). Konten Usulan lain harus disetujui pengurus sebelum tayang.
- Terjemahan EN masih draf Claude dan **menunggu peninjau** (T-22)
