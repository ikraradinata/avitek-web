# Playbook Claude Code — Website AVITEK KUKM (Bilingual ID/EN)

Panduan langkah demi langkah membangun situs dua bahasa ini dengan Claude Code, dari folder kosong sampai tayang di Vercel. Semua prompt di bawah **siap salin**.

> Fitur Claude Code berkembang cepat. Jika ada perintah yang berbeda di versi Anda, cek dokumentasi resmi: https://code.claude.com/docs/en/quickstart

---

## 0. Isi paket ini dan peran tiap file

| File | Dibaca oleh | Fungsi |
|---|---|---|
| `CLAUDE.md` | Claude Code, otomatis di setiap sesi | Aturan proyek, termasuk aturan dua bahasa |
| `messages/id.json`, `messages/en.json` | Kode (next-intl) dan Claude Code | **Semua teks situs**, 309 kunci, sudah tersinkron |
| `scripts/check-i18n.mjs` | `pnpm build` | Menggagalkan build jika ID dan EN tidak sinkron |
| `docs/01–05*.md` | Claude Code, saat diminta | Detail PRD, konten, desain, spek, task |
| `mockup/index.html` | Anda dan Claude Code | Acuan visual. Tombol ID/EN berfungsi. |
| `.claude/skills/*/SKILL.md` | Claude Code | Perintah pintas `/task`, `/cek-konten`, `/cek-i18n`, `/cek-visual`, `/rilis` |

## 1. Persiapan (sekali saja, di MacBook)

```bash
# 1. Pasang Claude Code (abaikan jika sudah)
curl -fsSL https://claude.ai/install.sh | bash
claude --version

# 2. Siapkan repo dari paket ini
mkdir -p ~/Projects && cd ~/Projects
# salin folder avitek-web hasil unduhan ke sini, lalu:
cd avitek-web
git init && git add . && git commit -m "docs: paket PRD bilingual dan mockup AVITEK KUKM"

# 3. Buka Claude Code di folder proyek
claude
```

Dari AntiGravity atau VS Code: buka folder `avitek-web`, lalu jalankan `claude` di terminal bawaan editor.

**Jangan jalankan `/init`.** `CLAUDE.md` sudah disiapkan; `/init` bisa menimpanya.

## 2. Kebiasaan kerja yang aman

| Kebiasaan | Cara |
|---|---|
| Rencanakan dulu, baru tulis kode | **Shift+Tab** sampai muncul *plan mode*, atau tulis "buat rencana dulu, jangan ubah file" |
| Satu task per sesi | Setelah commit, ketik `/clear` sebelum task berikutnya |
| Konteks mulai penuh | `/compact` atau `/clear`. Cek pemakaian dengan `/context`. |
| Hasil salah dan ingin mundur | **Esc dua kali** atau `/rewind` |
| Menghentikan Claude yang sedang jalan | **Esc** (bukan Ctrl+C) |
| Commit sering | Setiap task yang lolos `pnpm build` langsung di-commit |
| Selalu cek dua bahasa | Setiap selesai task UI, buka `/id` **dan** `/en` |
| Menunjukkan tampilan | Tempel screenshot (Ctrl+V) atau seret file gambar ke prompt |

**Izin:** izinkan `pnpm …`, `node scripts/check-i18n.mjs`, dan `git status/diff/add/commit`. **Jangan** izinkan `rm -rf`, `git push --force`, atau perintah yang membaca `.env`.

## 3. Alur per task

```
/task T-07
   ↓  Claude membaca CLAUDE.md dan dokumen terkait, lalu menulis RENCANA
Anda: "lanjut"
   ↓  Claude menulis kode lalu menjalankan lint, typecheck, dan build (termasuk cek i18n)
/cek-visual hero        ← membandingkan /id dan /en dengan mockup
/cek-i18n               ← jika task menyentuh teks
   ↓
Anda cek http://localhost:3000/id dan /en
   ↓
git commit → /clear → task berikutnya
```

## 4. Prompt siap salin per fase

### Fase M1 — Fondasi dan i18n

**Prompt 1: orientasi**
```
Baca CLAUDE.md, docs/01-PRD.md, dan docs/04-TECH-SPEC.md. Jangan ubah file apa pun.
Ringkas dalam 10 poin: apa yang dibangun, cara kerja dua bahasa (routing, messages, deteksi bahasa),
struktur folder, dan urutan task M1. Sebutkan hal yang ambigu atau berisiko.
```

**Prompt 2: scaffold (T-01)**
```
/task T-01
Gunakan pnpm. Next.js 14 App Router, TypeScript strict, Tailwind, ESLint, folder src/.
Jangan hapus atau timpa docs/, messages/, mockup/, scripts/, .claude/, maupun CLAUDE.md.
Tambahkan script "typecheck": "tsc --noEmit" dan "prebuild": "node scripts/check-i18n.mjs".
```

**Prompt 3: next-intl (T-04)**
```
/task T-04
Pasang next-intl versi yang kompatibel dengan Next.js 14 App Router. Sebelum menulis kode,
baca dokumentasi next-intl untuk versi yang terpasang (cek node_modules/next-intl/package.json),
karena API-nya berbeda antarversi. Konfigurasi sesuai 04-TECH-SPEC.md §3:
locales ['id','en'], defaultLocale 'id', localePrefix 'always', pathnames untuk kebijakan privasi.
Buat halaman uji sementara di [locale]/page.tsx yang menampilkan t('hero.title').
Kriteria: / → /id, /en tampil dalam bahasa Inggris, <html lang> benar,
dan build GAGAL jika saya menghapus satu kunci dari messages/en.json (tunjukkan buktinya, lalu kembalikan).
```

**Prompt 4: rapikan messages (T-05)**
```
/task T-05
Pindahkan field non-teks dari messages/*.json ke src/config/structure.ts:
steps.items.*.state dan agenda.rows.*.key. Hapus dari KEDUA file JSON,
lalu jalankan node scripts/check-i18n.mjs. Jangan ubah teks apa pun.
```

**Prompt 5: header dan pemilih bahasa (T-06)**
```
/task T-06
Acuan: <header class="site"> di mockup/index.html, termasuk tombol .lang ID/EN.
LanguageSwitcher harus: memakai router dari src/i18n/navigation.ts, mempertahankan hash
(misalnya /id#acara → /en#acara), memperbarui aria-pressed, dan tetap terlihat di mobile di luar menu hamburger.
Uji: klik EN saat berada di #acara, halaman harus tetap di bagian Agenda.
```

### Fase M2 — Section

**Pola prompt untuk setiap section (T-07 s/d T-13)**
```
/task T-07
Acuan visual: <section class="hero"> dan <div class="figures"> di mockup/index.html.
Semua teks dari namespace 'hero' dan 'figures' di messages. Tidak boleh ada string di komponen.
Tiru tata letak dan breakpoint (1020/860/560px) memakai token Tailwind.
Setelah selesai, jalankan /cek-visual hero untuk /id dan /en.
```

**T-14: uji teks panjang**
```
/task T-14
Ambil screenshot /id dan /en di lebar 360, 390, 768, dan 1366 untuk seluruh halaman.
Daftarkan setiap teks yang terpotong, meluap, atau membuat tata letak timpang, terutama di versi EN.
Usulkan perbaikan CSS. JANGAN mengubah teks untuk mengatasi masalah tata letak tanpa izin saya.
```

### Fase M3 — Formulir

**T-15 s/d T-17: Google Sheet**

Kode sudah tersedia di `scripts/google-apps-script/Code.gs`, `src/lib/google-sheet.ts`, dan `src/app/actions/submit.ts`. Ikuti `docs/07-GOOGLE-SHEET-SETUP.md`, lalu uji manual: 3 jalur × 2 bahasa, kiriman tanpa persetujuan, dan batas kiriman.

### Fase M4 — Rilis

**T-22: masukkan hasil tinjauan terjemahan**
```
Saya lampirkan hasil tinjauan terjemahan EN (file/teks di bawah).
Perbarui HANYA nilai di messages/en.json sesuai tinjauan. Jangan ubah kunci maupun id.json.
Tampilkan diff ringkas per kunci (lama → baru), lalu jalankan /cek-i18n.
```

```
/rilis
```

## 5. Prompt untuk peninjau terjemahan (di luar Claude Code)

Kirim `docs/02-CONTENT.md` ke peninjau bersama pesan ini:
```
Mohon tinjau kolom "English" pada dokumen terlampir. Konteks: situs resmi asosiasi koperasi dan UKM Indonesia,
pembaca utama EN adalah mitra Korea (INNOBIZ Association, Kementerian UKM Korea) dan jejaring internasional.
Gaya: American English, ringkas, sentence case, ramah tapi formal.
Fokus utama: §2 Hero, §5 Mengapa AVITEK, §7 Program, §12 Formulir, dan nama resmi lembaga.
Tulis koreksi dengan format: kunci | teks baru | alasan singkat. Jangan ubah kolom "Kunci".
```

## 6. Prompt darurat

| Situasi | Prompt |
|---|---|
| Build gagal karena i18n | `check-i18n gagal. Tampilkan kunci yang bermasalah, lalu tambahkan teks yang hilang. Untuk EN, tulis draf dan tandai di laporan agar saya tinjau.` |
| Teks muncul sebagai kunci (`hero.title`) | `Di /en muncul teks kunci mentah. Cari penyebabnya (namespace salah, kunci hilang, atau provider klien tidak memuat namespace) dan perbaiki.` |
| Pemilih bahasa melompat ke atas halaman | `LanguageSwitcher kehilangan hash saat ganti bahasa. Perbaiki agar /id#acara → /en#acara.` |
| Build gagal karena hal lain | `pnpm build gagal. Jelaskan penyebabnya dalam 2 kalimat, lalu perbaiki dengan perubahan sekecil mungkin.` |
| Claude mengubah terlalu banyak file | Tekan Esc, lalu `/rewind`. Prompt: `Ulangi, hanya boleh mengubah file <daftar>.` |
| CTA tampil dengan teks putih | `Pastikan semua Button varian cta memakai text-navy, bukan text-white.` |
| Hex teal dikoreksi pemilik merek | `Ganti nilai token teal di tailwind.config.ts menjadi <hex baru>, cek ulang kontras teal-ink di 03-DESIGN-SYSTEM.md §2.` |
| Menambah bahasa Korea kelak | `Tambahkan locale 'ko' ke routing.ts, buat messages/ko.json dengan kunci yang sama persis (isi sementara: salinan EN bertanda TODO), dan perbarui check-i18n. Jangan tayangkan sebelum terjemahan selesai.` |

## 7. Hal yang tidak boleh diserahkan ke Claude Code

- Mengisi `.env.local` dan env Vercel.
- Menyetujui konten Usulan dan terjemahan EN final: itu keputusan pengurus dan peninjau.
- Menentukan nama resmi AVITEK dalam bahasa Inggris.
- `git push --force` dan menghapus branch.
- Menulis kutipan testimoni atau nama orang yang tidak ada di messages.
