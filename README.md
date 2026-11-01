# AVITEK KUKM — Website (Bilingual ID/EN)

Website resmi Asosiasi Inovasi Teknologi Koperasi dan UKM, dalam **Bahasa Indonesia** (`/id`, default) dan **English** (`/en`). Target tayang **sebelum 3 November 2026**.

## Mulai dari sini
1. Buka `mockup/index.html` di browser, lalu coba tombol **ID / EN** di kanan atas.
2. Baca `docs/06-CLAUDE-CODE-PLAYBOOK.md`.
3. Jalankan `claude` di folder ini, lalu mulai dari Prompt 1 di playbook.

## Isi paket
| File | Isi |
|---|---|
| `CLAUDE.md` | Memori dan aturan proyek untuk Claude Code, termasuk aturan dua bahasa |
| `messages/id.json`, `messages/en.json` | **Semua teks situs** (309 kunci, tersinkron), siap dipakai next-intl |
| `scripts/check-i18n.mjs` | Cek paritas kunci ID/EN (dijalankan otomatis saat build) |
| `docs/01-PRD.md` | Product Requirements Document bilingual |
| `docs/02-CONTENT.md` | Tabel teks ID ↔ EN beserta status dan sumbernya (untuk ditinjau pengurus dan penerjemah) |
| `docs/03-DESIGN-SYSTEM.md` | Palet Warna Resmi AVITEK KUKM, kontras, komponen, aturan bilingual |
| `docs/04-TECH-SPEC.md` | Next.js + next-intl, struktur folder, skema DB, Server Action, DoD |
| `docs/05-TASKS.md` | Task T-01 s/d T-24 per milestone |
| `docs/06-CLAUDE-CODE-PLAYBOOK.md` | Setup, kebiasaan kerja, prompt siap salin, prompt untuk peninjau terjemahan |
| `.claude/skills/` | `/task`, `/cek-konten`, `/cek-i18n`, `/cek-visual`, `/rilis` |
| `mockup/index.html` | **Mockup v0.4 bilingual, palet resmi AVITEK (acuan build)** |
| `mockup/archive-v02-inopi.html` | Arsip v0.2 (palet INOPI, satu bahasa), bukan acuan |

## Stack
Next.js 14 · next-intl · TypeScript · Tailwind · shadcn/ui · Supabase · Vercel · pnpm

## Masih menunggu dari pengurus
Nama resmi AVITEK dalam bahasa Inggris · peninjau terjemahan EN · logo SVG resmi · konfirmasi hex Digital Teal · domain · email sekretariat · persetujuan konten Usulan · izin tampil koperasi dan mitra. Daftar lengkap ada di `docs/02-CONTENT.md §14`.
