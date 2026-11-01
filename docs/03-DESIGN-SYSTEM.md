# Design System — Website AVITEK KUKM (Bilingual ID/EN)

Dasar: **Palet Warna Resmi AVITEK KUKM**. Karakter: *technology-driven, inclusive, collaborative, impactful*. Warna diturunkan dari logo AVITEK KUKM (A navy, V teal, titik emas).

Semua warna **hanya boleh dipanggil lewat token** (CSS variable atau Tailwind theme), tidak boleh hex langsung di komponen kecuali di `src/components/graphics/`.

> ⚠️ **Catatan pada dokumen palet:** Digital Teal tertulis `#0B7F8C`, tetapi nilai RGB-nya (8, 127, 140) sama dengan **`#087F8C`**, dan contoh proporsi serta gradien di dokumen yang sama juga memakai `#087F8C`. Situs memakai **`#087F8C`**. Konfirmasi ke pemilik merek dan perbaiki di dokumen palet.

---

## 1. Token warna

### Primary (30%: identitas, judul, section gelap)
| Token | Nama resmi | Hex | RGB | Penggunaan |
|---|---|---|---|---|
| `navy` | Midnight Navy | `#0B1F3A` | 11 31 58 | Judul, teks utama, wordmark, section gelap (hero card, Program, Bergabung), teks di atas tombol oranye |
| `navy-2` | *turunan* | `#16304F` | — | Hover tombol gelap, stasiun nonaktif |
| `navy-deep` | *turunan* | `#07162A` | — | Footer |
| `teal` | Digital Teal | `#087F8C` | 8 127 140 | Stasiun aktif, ikon pilar, garis kicker, border kartu, fokus input |
| `teal-ink` | *turunan* | `#06707C` | — | Teks teal kecil di atas Ice/Mist (kicker, label lokasi) |

### Secondary (60%: latar dan elemen pendukung)
| Token | Nama resmi | Hex | RGB | Penggunaan |
|---|---|---|---|---|
| `white` | — | `#FFFFFF` | — | Kartu, angka kunci, section selang-seling |
| `ice` | Ice White | `#F4F8FB` | 244 248 251 | Latar utama halaman |
| `mist` | Digital Mist | `#DCE8F0` | 220 232 240 | Section Ekosistem, border, divider, tag netral |
| `slate` | Slate Gray | `#64748B` | 100 116 139 | Ikon sekunder, garis putus-putus, titik linimasa; teks sekunder **hanya di atas putih** |
| `muted` | *turunan Slate* | `#56657A` | — | Teks sekunder di atas Ice/Mist |

### Accent (10%: highlight dan CTA)
| Token | Nama resmi | Hex | RGB | Penggunaan |
|---|---|---|---|---|
| `gold` | Tech Gold | `#F2B544` | 242 181 68 | Badge acara, label peran di section gelap, titik hub, ornamen lingkaran |
| `blue` | Electric Blue | `#2563EB` | 37 99 235 | Aksen teknologi: tag "Terbuka untuk kolaborasi", simpul Mitra Korea, kartu "Untuk Indonesia" |
| `orange` | Vibrant Orange | `#F97316` | 249 115 22 | **Tombol CTA (dengan teks navy)**, langkah aktif, titik linimasa terakhir |
| `orange-hover` | *turunan* | `#FB8A3C` | — | Hover CTA |

### Tint untuk latar ringan
`gold-soft #FDF1D8` · `teal-soft #DDF0F1` · `blue-soft #DCE7FD` · `orange-soft #FEE9D8`

### Proporsi 60–30–10 (sesuai dokumen palet)
- **60%** latar: Ice White `#F4F8FB` dan White `#FFFFFF`, ditambah Digital Mist untuk section selang-seling
- **30%** primary: Midnight Navy dan Digital Teal
- **10%** aksen: Electric Blue, Tech Gold, Vibrant Orange. Maksimal **satu aksen dominan per section**.

### Gradien resmi
| Nama | Nilai | Dipakai di |
|---|---|---|
| Navy–Teal | `#0B1F3A → #087F8C` | Cadangan: banner Wawasan atau OG image |
| Teal–Blue | `#087F8C → #2563EB` | Cadangan: kartu fitur teknologi |
| Gold–Orange | `#F2B544 → #F97316` | Blok tanggal di kartu agenda (teks navy) |

## 2. Aturan kontras (WCAG AA): hasil uji

| Pasangan | Rasio | Status |
|---|---|---|
| Putih di atas `orange` | 2,80 | ❌ **Jangan dipakai.** CTA oranye wajib memakai teks navy. |
| `navy` di atas `orange` | 5,89 | ✅ Standar tombol CTA |
| `navy` di atas `gold` | 9,02 | ✅ |
| Putih di atas `teal` | 4,75 | ✅ |
| `teal` di atas `ice` | 4,44 | ⚠️ Hanya untuk teks ≥ 18,7px tebal. Teks kecil pakai `teal-ink` (5,44). |
| `teal` di atas `white` | 4,75 | ✅ |
| `slate` di atas `ice` | 4,46 | ⚠️ Pakai `muted` (5,56) untuk teks kecil |
| `slate` di atas `white` | 4,76 | ✅ |
| Putih di atas `blue` | 5,17 | ✅ |
| `blue` di atas `ice` | 4,84 | ✅ |
| `gold` / `orange` di atas `navy` | 9,02 / 5,89 | ✅ |
| `#B8C7D6` (on-dark-muted) di atas `navy` | 9,58 | ✅ |

## 3. Tipografi

- **Keluarga:** Plus Jakarta Sans (disimpan di proyek, dimuat lewat `next/font/local`). Satu keluarga, dengan ketebalan 400, 500, 600, 700, dan 800. Bentuknya geometris tegas sehingga cocok dengan wordmark AVITEK.
- Huruf kapital renggang seperti "TECHNOLOGY-DRIVEN | INCLUSIVE" di dokumen palet **tidak dipakai di UI** karena terbaca sebagai template. Pengecualiannya tagline logo "Kolaborasi • Inovasi • Bisnis", yang hanya boleh muncul sebagai bagian dari logo.

| Peran | Ukuran | Berat | Line-height | Tracking |
|---|---|---|---|---|
| H1 | `clamp(2.3rem, 5.2vw, 4rem)` | 800 | 1.15 | -0.02em |
| H2 | `clamp(1.8rem, 3.4vw, 2.6rem)` | 800 | 1.15 | -0.02em |
| H3 | 1.2rem | 700 | 1.15 | -0.01em |
| Lede | 1.15rem | 400 | 1.6 | 0 |
| Body | 17px | 400 | 1.6 | 0 |
| Kicker | 0.92rem | 600 | — | 0, diawali garis 22px |
| Small | 0.85–0.93rem | 400–600 | 1.5 | 0 |

Panjang baris maksimal 62ch untuk paragraf.

## 4. Elemen grafis (mengikuti dokumen palet)

| Elemen | Implementasi di situs | Warna dan opacity (resmi) |
|---|---|---|
| **Garis geometris** (gaya logo) | Belah ketupat 45° di sudut kartu hero dan bentuk A/V pada logo | `navy` / `teal` / `gold`, tebal 2–4px |
| **Pola sudut dan diagonal** | 3 jajar genjang (mist, teal, navy) dan lingkaran emas di kanan atas hero; satu jajar genjang di kiri bawah section Program | `mist` / `teal` / `navy`, 20–40% |
| **Gelombang organik** | 3 lapis gelombang (navy, teal, blue) dengan garis emas di dasar hero | `navy` / `teal` / `blue` / `gold`, 10–30% |
| **Grid titik** | `radial-gradient` 22px di section penerima manfaat | `teal`, 20–40% |

Aturan: maksimal **satu** elemen grafis per section, dan tidak boleh berada di belakang teks paragraf.

## 5. Bentuk, jarak, dan bayangan

- Radius: `sm 6px` (chip) · `md 12px` (kartu, input) · `lg 20px` (panel besar) · `pill 999px` (tombol, badge, tag)
- Jarak antarsection: 96px desktop dan 72px di layar ≤ 560px. Lebar konten maksimal 1180px dengan padding 24px.
- Bayangan hanya untuk dropdown: `0 18px 40px -22px rgba(11,31,58,.45)`. Kartu tidak memakai bayangan; dibedakan lewat latar putih di atas Ice atau lewat border Mist.

## 6. Komponen

| Komponen | Spesifikasi |
|---|---|
| `Button` | Varian `cta` (latar orange, **teks navy**), `dark` (latar navy, teks putih), `ghost` (border navy). Padding 14×22, pill, bold 16px. Fokus: outline 3px orange. |
| `Badge` | Latar gold-soft, teks `#6B4A0E`, titik gold dengan ring. |
| `Kicker` | Teks teal-ink 600 dengan garis 22px di depannya. Di section gelap warnanya gold. |
| `SectionHead` | Grid 2 kolom: kicker dan H2 di kiri, paragraf di kanan (rata bawah). Satu kolom di ≤ 1020px. |
| `StationGrid` | 10×3 kotak di kartu navy. Kotak menyala dari navy-2 ke teal dengan jeda 55ms, lalu hub gold muncul. Hormati reduced motion. |
| `FigureStrip` | 4 kolom di atas putih dengan pemisah Mist. Angka 2.2rem/800 navy. |
| `Timeline` (Jejak) | Horizontal 5 kolom di desktop, vertikal di ≤ 1020px. Titik slate, titik terakhir orange dengan halo orange-soft. |
| `Steps` (Langkah awal) | Lingkaran nomor 48px. Langkah aktif oranye dengan angka navy. Tag status: `now` (orange-soft), `open` (blue-soft), `planned` (mist). |
| `ProgramCard` | Di atas navy, dipisah garis 1px putih 16%, label peran gold, tautan bergaris bawah orange. |
| `WhyCard` | Kartu putih dengan border atas 4px: teal (anggota), orange (mitra), blue (Indonesia). |
| `BeneficiaryCard` | Latar ice dengan border kiri 4px teal. |
| `PartnerChip` | Nama mitra dalam bentuk teks sampai logo resmi diizinkan. |
| `EcosystemDiagram` | Pusat navy dengan teks putih/gold. Koperasi & UKM orange (teks navy), Mitra Korea blue (teks putih), simpul lain putih. |
| `AgendaCard` | Blok tanggal bergradien Gold–Orange dengan teks navy. Baris kunci berlatar gold-soft. |
| `JoinForm` | Di section navy. 3 tombol jalur (`aria-pressed`, aktif berborder orange) dan formulir di atas ice. Fokus input: border teal dengan ring teal-soft. |

## 7. Motion

Hanya ada **satu** momen animasi: 30 stasiun menyala teal, lalu hub emas muncul. Tidak ada animasi fade-in per section. Semua animasi dimatikan di `prefers-reduced-motion: reduce`.

## 8. Logo

- Logo di mockup adalah **gambar ulang sementara** dalam bentuk SVG (A navy, V teal, titik gold). Untuk produksi, ganti dengan file SVG resmi.
- Di latar gelap (footer), bentuk A berwarna putih, sedangkan V dan titik tetap teal dan gold.
- Jangan mewarnai ulang logo di luar dua varian tersebut.

## 9. Tailwind theme (salin ke `tailwind.config.ts`)

```ts
colors: {
  navy:   { DEFAULT: '#0B1F3A', 2: '#16304F', deep: '#07162A' },
  teal:   { DEFAULT: '#087F8C', ink: '#06707C', soft: '#DDF0F1' },
  white:  '#FFFFFF',
  ice:    '#F4F8FB',
  mist:   '#DCE8F0',
  slate:  { DEFAULT: '#64748B', muted: '#56657A' },
  gold:   { DEFAULT: '#F2B544', soft: '#FDF1D8' },
  blue:   { DEFAULT: '#2563EB', soft: '#DCE7FD' },
  orange: { DEFAULT: '#F97316', hover: '#FB8A3C', soft: '#FEE9D8' },
},
borderRadius: { sm: '6px', md: '12px', lg: '20px' },
fontFamily: { sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'] },
backgroundImage: {
  'grad-navy-teal':   'linear-gradient(135deg, #0B1F3A, #087F8C)',
  'grad-teal-blue':   'linear-gradient(135deg, #087F8C, #2563EB)',
  'grad-gold-orange': 'linear-gradient(160deg, #F2B544, #F97316)',
},
```

> Catatan: token `slate` dan `blue` menimpa palet bawaan Tailwind dengan nama yang sama. Ini disengaja supaya tidak ada warna di luar palet resmi yang terpakai tanpa sengaja.

## 10. Bilingual (ID/EN)

### Pemilih bahasa (`LanguageSwitcher`)
- Kapsul putih dengan border 1.5px Mist, berisi dua tombol `ID` dan `EN` (0.82rem, bold, padding 6×11, pill).
- Tombol aktif: latar navy, teks putih, `aria-pressed="true"`. Tombol nonaktif: teks `muted`.
- Posisi: kanan header, **di luar** menu hamburger, sehingga selalu terlihat di mobile.
- Setiap tombol diberi atribut `lang` sesuai bahasa targetnya dan `title` ("Bahasa Indonesia" / "English").
- Jangan memakai bendera: bahasa bukan negara.

### Aturan tata letak untuk dua bahasa
- Teks EN bisa lebih pendek atau lebih panjang 10–30% dari ID. Semua wadah teks harus fleksibel: tidak boleh ada `width` tetap, `white-space: nowrap`, atau tinggi tetap pada kartu.
- Judul H1/H2 boleh berbeda jumlah baris antarbahasa. Jangan menyeimbangkan dengan `<br>` manual.
- Angka besar di FigureStrip harus muat dalam satu baris di 1366px untuk kedua bahasa (karena itu EN memakai "USD 5.5M").
- Label diagram ekosistem (SVG) maksimal sekitar 10 karakter per baris. Versi EN memakai "Co-ops / & SMEs" dan "Korean / partners".
- Tombol: label boleh dua kata lebih panjang di EN. Padding tidak boleh dikurangi.

### Tipografi
- Plus Jakarta Sans dimuat dengan subset `latin` dan `latin-ext`.
- Jika bahasa Korea ditambahkan kelak, tambahkan font fallback Hangul (misalnya Noto Sans KR) **hanya** untuk `:lang(ko)`.

### Format angka dan waktu
| | ID | EN |
|---|---|---|
| Waktu | 10.00 WIB | 10:00 WIB |
| Desimal | 5,5 | 5.5 |
| Mata uang | USD 5,5 juta · Rp84 miliar | USD 5.5M · IDR 84 billion |
| Tanggal | Selasa, 3 November 2026 | Tuesday, 3 November 2026 |
