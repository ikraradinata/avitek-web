# Rencana Kerja dan Backlog — Website AVITEK KUKM (Bilingual)

Kerjakan berurutan. Satu task = satu sesi Claude Code = satu commit. Centang setelah Definition of Done di `04-TECH-SPEC.md §10` terpenuhi **untuk `/id` dan `/en`**.

Tenggat keras: **tayang sebelum Selasa, 3 November 2026, pukul 09.00 WIB.**

---

## M0 — Persiapan (Sabtu, 31 Okt)
- [x] Mockup bilingual v0.4 dengan palet resmi AVITEK dan toggle ID/EN (`mockup/index.html`)
- [x] `messages/id.json` dan `messages/en.json` (309 kunci, tersinkron)
- [x] `scripts/check-i18n.mjs`
- [x] PRD, konten, design system, tech spec, playbook Claude Code
- [ ] Kirim pertanyaan terbuka PRD §9 ke Prof. Meyliana (terutama **nama resmi EN** dan **peninjau EN**)
- [ ] Buat repo GitHub `avitek-web`, salin folder ini sebagai isi awal

## M1 — Fondasi dan i18n (Minggu, 1 Nov, pagi)
- [x] **T-01** Scaffold Next.js 14 + TS strict + Tailwind + ESLint + pnpm (jangan timpa `docs/`, `messages/`, `mockup/`, `scripts/`, `.claude/`, `CLAUDE.md`)
- [ ] **T-02** Token design system (`tailwind.config.ts`, `globals.css`) dan font Plus Jakarta Sans (`latin`, `latin-ext`)
- [ ] **T-03** shadcn/ui init dan varian Button (`cta` = oranye berteks navy, `dark`, `ghost`)
- [x] **T-04** **Pasang next-intl:** `routing.ts` (id/en, default id, pathnames), `request.ts`, `navigation.ts`, `middleware.ts`, struktur `app/[locale]`, `generateStaticParams`. Tambahkan `"prebuild": "node scripts/check-i18n.mjs"`.
  - Terima: `/` mengalihkan ke `/id`, `/en` tampil, `<html lang>` benar, build gagal jika satu kunci dihapus dari en.json
- [ ] **T-05** Pindahkan field non-teks (`steps.items.*.state`, `agenda.rows.*.key`) dari messages ke `src/config/structure.ts`, lalu sinkronkan kedua JSON
- [ ] **T-06** `SiteHeader` + **`LanguageSwitcher`** (mempertahankan hash dan menyimpan cookie) + `NavDropdown` + `MobileMenu` + `SiteFooter`

## M2 — Section (Minggu, 1 Nov, siang–malam)
- [ ] **T-07** `Hero` + `StationGrid` + `WaveBackground` + `DiagonalPattern` + `FigureStrip`
- [ ] **T-08** `ProjectTimeline`
- [ ] **T-09** `WhySection` + `EcosystemSection` (label SVG diambil dari messages)
- [ ] **T-10** `ProgramSection` + `FirstSteps` (flag `SHOW_PROPOSED`)
- [ ] **T-11** `Beneficiaries` + mitra + `PartnerGroups`
- [ ] **T-12** `AgendaSection` (toggle; format waktu mengikuti bahasa)
- [ ] **T-13** `JoinSection` UI (3 jalur, kategori berbasis kode, persetujuan, honeypot)
- [ ] **T-14** Uji tata letak EN vs ID di 360px, 390px, 768px, dan 1366px. Perbaiki teks yang terpotong atau meluap.

## M3 — Formulir dan backend (Senin, 2 Nov, pagi)
- [ ] **T-15** Supabase dan migrasi `0001_submissions.sql` (dengan `locale`)
- [ ] **T-16** `schema.ts` + Server Action + rate limit, dengan galat dan pesan sukses dalam bahasa aktif
- [ ] **T-17** Notifikasi email Resend ke sekretariat (Bahasa Indonesia, menyebut bahasa pendaftar)
- [ ] **T-18** Halaman `/id/kebijakan-privasi` dan `/en/privacy-policy` (draf, ditinjau pengurus)

## M4 — Rilis (Senin, 2 Nov, siang–malam)
- [ ] **T-19** Metadata per bahasa, `hreflang` + x-default, OG image ID dan EN, sitemap, robots, JSON-LD
- [ ] **T-20** Header keamanan
- [ ] **T-21** Deploy Vercel, env, domain
- [ ] **T-22** **Masukkan hasil tinjauan terjemahan EN**, lalu jalankan `/cek-i18n`
- [ ] **T-23** QA kedua bahasa di HP asli, Lighthouse `/id` dan `/en`, uji 3 jalur formulir × 2 bahasa
- [ ] **T-24** QR code (ke `/`; opsional QR khusus `/en`), ganti logo dengan SVG resmi, setel `SHOW_PROPOSED`

## M5 — Pascaperistiwa (3–30 Nov) → Fase 2
- [ ] Dokumentasi peluncuran dan kutipan testimoni (dengan izin, ID dan EN)
- [ ] Angka tenaga ahli dari laporan INNOBIZ
- [ ] `/[locale]/tentang`, `/[locale]/wawasan` (MDX per bahasa), `/[locale]/acara/[slug]`
- [ ] Ekspor CSV (dengan kolom bahasa)
- [ ] Kajian penambahan bahasa Korea (`/ko`)

## Catatan risiko jadwal
- Jika peninjau EN belum selesai pada Senin sore, **tayangkan dengan EN draf**. Draf sudah disusun hati-hati dan lebih baik daripada tidak ada halaman EN saat delegasi Korea hadir. Perbaiki setelah acara.
- Jika M3 tidak selesai Senin siang, tayangkan dulu dengan formulir sementara Google Form (ID dan EN).
