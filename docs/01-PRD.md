# PRD — Website AVITEK KUKM (Bilingual ID/EN)

| | |
|---|---|
| **Produk** | Website resmi Asosiasi Inovasi Teknologi Koperasi dan UKM (AVITEK KUKM), dalam **Bahasa Indonesia dan English** |
| **Versi dokumen** | 0.4 (draf) |
| **Tanggal** | 31 Oktober 2026 |
| **Pemilik produk** | Dr. Ir. Ikrar Adinata Arin |
| **Pemangku kepentingan** | Prof. Dr. Ir. Meyliana (Ketua AVITEK KUKM), pengurus AVITEK, BINUS University, mitra Korea (INNOBIZ Association, MSS) |
| **Referensi** | Struktur situs INOPI (inopi-web.vercel.app), Palet Warna Resmi AVITEK KUKM, surat undangan peluncuran (28 Okt 2026) |
| **Mockup** | `mockup/index.html` (v0.4, dengan tombol ID/EN) |
| **Teks** | `messages/id.json` + `messages/en.json` (versi baca: `docs/02-CONTENT.md`) |

> **Status konten:** setiap teks ditandai Terverifikasi, Usulan, UI, atau Nama diri di `02-CONTENT.md`. Konten **Usulan** tidak boleh tayang sebelum disetujui pengurus, dalam **kedua** bahasa.

---

## 1. Latar belakang

Proyek ODA *Smart Factory* Korea–Indonesia (2023–2026) adalah hibah pemerintah Korea Selatan senilai sekitar USD 5,5 juta, didanai Ministry of SMEs and Startups (MSS) dan dilaksanakan oleh INNOBIZ Association bersama Kementerian Koperasi RI dan BINUS University. Proyek ini mendampingi 30 koperasi dan UKM serta membangun Smart Factory Training Center (SFTC) di BINUS @Bekasi.

AVITEK KUKM dibentuk sebagai tindak lanjut agar hasil proyek tetap berlanjut setelah dana hibah berakhir. Peluncurannya dijadwalkan **Selasa, 3 November 2026** di Kementerian Koperasi RI, bersamaan dengan penandatanganan MoU AVITEK–INNOBIZ.

**Mengapa bilingual:** pemangku kepentingan utama AVITEK mencakup mitra Korea (INNOBIZ, MSS, Kedutaan Besar Korea) dan jejaring internasional. Halaman English dibutuhkan agar mereka bisa merujuk, membagikan, dan mendaftar tanpa penerjemah. Bahasa Indonesia tetap menjadi bahasa utama karena anggota inti adalah koperasi dan UKM.

## 2. Masalah yang diselesaikan

1. Tamu undangan, termasuk delegasi Korea, dan media tidak punya satu rujukan resmi tentang AVITEK pada hari peluncuran.
2. Koperasi, UKM, akademisi, industri, dan mitra asing belum punya jalur untuk mendaftar atau mengajukan kemitraan.
3. Rekam jejak proyek ODA tersebar di berita Korea dan Indonesia, belum terdokumentasi di satu tempat dalam dua bahasa.

## 3. Tujuan dan ukuran keberhasilan

| Tujuan | Metrik | Target awal (Usulan) |
|---|---|---|
| Rujukan resmi saat peluncuran | Situs ID dan EN tayang, bisa diakses lewat QR | Tayang sebelum 3 Nov 2026, 09.00 WIB |
| Menjaring calon anggota | Pendaftaran anggota valid | ≥ 50 dalam 90 hari |
| Menjaring mitra, termasuk mitra asing | Pengajuan kemitraan (dicatat per bahasa) | ≥ 10 dalam 90 hari, ≥ 2 lewat EN |
| Paritas bahasa | Kunci teks yang ada di ID **dan** EN | 100% |
| Kredibilitas | Klaim yang punya sumber | 100% |
| Kualitas teknis | Lighthouse mobile untuk `/id` dan `/en` | Performance ≥ 90, Accessibility ≥ 95, SEO ≥ 95 |

## 4. Pengguna sasaran

| Persona | Bahasa | Kebutuhan utama | CTA |
|---|---|---|---|
| Pengurus koperasi / pemilik UKM | ID | Manfaat bergabung dan caranya | Daftar sebagai anggota |
| Akademisi / peneliti | ID, EN | Riset terapan, lokasi uji coba | Daftar anggota, ajukan kemitraan |
| Industri / penyedia teknologi | ID, EN | Akses ke koperasi dan UKM yang siap digital | Ajukan kemitraan |
| **Mitra Korea** (INNOBIZ, MSS, Kedubes, perusahaan Korea) | **EN** | Bukti keberlanjutan proyek ODA, kontak resmi | Baca jejak proyek, ajukan kemitraan |
| Pemerintah Indonesia | ID | Bukti dampak dan keberlanjutan | Jejak proyek, agenda |
| Tamu undangan peluncuran | ID, EN | Detail acara, konfirmasi hadir | Konfirmasi kehadiran |
| Media | ID, EN | Fakta ringkas, kontak | Tentang, kontak |

## 5. Ruang lingkup

### 5.1 MVP: tayang sebelum 3 November 2026 (ID dan EN)

**Routing bahasa:**
| URL | Isi |
|---|---|
| `/` | Mengalihkan ke `/id` atau `/en` berdasarkan cookie pilihan pengguna, lalu header `Accept-Language`. Default `/id`. |
| `/id` | Landing Bahasa Indonesia |
| `/en` | Landing English |
| `/id/kebijakan-privasi`, `/en/privacy-policy` | Kebijakan privasi (UU PDP) |

Satu halaman landing per bahasa, dengan bagian yang sama persis (mengikuti struktur situs INOPI):

| # | Bagian | Padanan di INOPI | Isi |
|---|---|---|---|
| 1 | Header | Header | Menu, **pemilih bahasa ID/EN**, tombol Gabung AVITEK |
| 2 | Hero | Hero / Event Banner | Badge, judul, ringkasan, detail acara, 2 CTA, visual 30 stasiun |
| 3 | Angka kunci | Key Figures | 30 · USD 5,5 juta · 2023–2026 · 1 SFTC |
| 4 | Jejak proyek ODA | *(tambahan)* | Linimasa 2023 sampai Nov 2026 |
| 5 | Mengapa AVITEK | Mengapa INOPI | Untuk anggota, mitra, dan Indonesia |
| 6 | Ekosistem inovasi | Ekosistem Inovasi Nasional | Diagram 5 simpul dan 3 pilar |
| 7 | Program strategis | Program Strategis | 4 bidang kerja |
| 8 | Lima langkah awal | Lima Langkah Awal | Linimasa bernomor dengan status |
| 9 | Penerima manfaat dan pendukung | *(tambahan)* | 3 koperasi dan nama mitra |
| 10 | Ekosistem kolaborasi | Ekosistem Kolaborasi | 6 kelompok mitra dan CTA |
| 11 | Agenda | Agenda & Forum | Kartu acara 3 Nov dan rundown |
| 12 | Bergabung | Bergabung Sekarang | 3 jalur dan formulir |
| 13 | Footer | Footer | Tautan, legal |

### 5.2 Fase 2: 30 hari setelah peluncuran
- `/[locale]/tentang` (`/en/about`): visi-misi, struktur organisasi, pendiri, tata kelola dan legal.
- `/[locale]/wawasan` (`/en/insights`): berita dan studi kasus (MDX per bahasa; artikel boleh hanya satu bahasa, dengan penanda).
- `/[locale]/acara/[slug]`: halaman per acara dan dokumentasi peluncuran.
- Data pendaftar dikelola langsung di Google Sheet asosiasi (dengan kolom bahasa), tanpa dashboard admin terpisah.

### 5.3 Fase 3
- **Bahasa Korea (`/ko`)**: arsitekturnya sudah siap, tinggal menambah `messages/ko.json`.
- Direktori anggota publik dan portal anggota.

### 5.4 Di luar cakupan
Pembayaran iuran online, LMS, aplikasi mobile, dan terjemahan otomatis di sisi klien (Google Translate widget).

## 6. Kebutuhan fungsional

| ID | Kebutuhan | Prioritas | Kriteria penerimaan |
|---|---|---|---|
| F-01 | Navigasi sticky dengan anchor | Wajib | Klik menu menggulir ke bagian yang benar. Hamburger di layar < 860px. |
| F-02 | Dropdown Wawasan | Wajib | Bisa dibuka dengan klik dan Enter, ditutup dengan Esc atau klik di luar. `aria-expanded` ikut berubah. |
| F-03 | Visual 30 stasiun | Wajib | Menyala berurutan sekali, statis jika `prefers-reduced-motion`. |
| F-04 | Rundown agenda bisa dibuka-tutup | Wajib | Default 7 baris. Label tombol berganti sesuai bahasa. |
| F-05 | Formulir 2 jalur (minat keanggotaan, kemitraan) | Wajib | Pilihan jalur mengubah judul, label, dan tombol. Jalur kehadiran ditutup setelah acara 3 November. |
| F-06 | Validasi formulir | Wajib | Galat ditampilkan **dalam bahasa aktif**. Validasi Zod di klien dan server. |
| F-07 | Simpan pendaftaran | Wajib | Tersimpan di Google Sheet akun asosiasi, tab sesuai jalur, **dengan kolom bahasa**. |
| F-08 | Notifikasi ke sekretariat | Sebaiknya | Email ke sekretariat (selalu dalam Bahasa Indonesia), menyebut bahasa pendaftar. |
| F-09 | Anti-spam | Wajib | Honeypot dan pembatasan per IP per jam: 5 kiriman untuk anggota dan mitra, 30 kiriman untuk kehadiran karena tamu berbagi Wi-Fi lokasi. |
| F-10 | CTA memilih jalur formulir | Wajib | "Daftar minat keanggotaan" dan "Ajukan kemitraan" langsung memilih jalur yang sesuai. |
| **F-11** | **Pemilih bahasa ID/EN** | Wajib | Selalu terlihat di header (desktop dan mobile). Berpindah ke URL padanan (`/id#acara` → `/en#acara`) dengan posisi anchor dipertahankan. Pilihan disimpan di cookie `NEXT_LOCALE`. `aria-pressed` diperbarui. |
| **F-12** | **Deteksi bahasa awal** | Wajib | `/` dialihkan sesuai cookie, lalu `Accept-Language` (bahasa Korea dan bahasa lain diarahkan ke `/en`), lalu default `/id`. Halaman `/id` dan `/en` tidak pernah dialihkan otomatis. |
| **F-13** | **SEO multibahasa** | Wajib | `<html lang>` sesuai bahasa. `hreflang` id, en, dan x-default (→ `/id`). Canonical per bahasa. Sitemap memuat kedua bahasa. `og:locale` `id_ID` / `en_US` beserta `og:locale:alternate`. |
| **F-14** | **Paritas kunci** | Wajib | Build gagal jika ada kunci di `id.json` yang tidak ada di `en.json` atau sebaliknya. |
| F-15 | Metadata dan JSON-LD per bahasa | Wajib | Organization dan Event (peluncuran) dengan `inLanguage`. |
| F-16 | QR code | Wajib | QR ke `/` (otomatis memilih bahasa). Opsional: QR khusus `/en` untuk delegasi Korea. |
| F-17 | Ekspor CSV | Sebaiknya (Fase 2) | Tersedia langsung dari Google Sheet, per tab jalur. |

## 7. Kebutuhan non-fungsional

- **Performa:** LCP < 2,5 detik di 4G. Kedua bahasa dirender statis (SSG); hanya kamus bahasa aktif yang dikirim ke klien.
- **Aksesibilitas:** WCAG 2.1 AA. Atribut `lang` benar di setiap halaman. Nama diri yang berbahasa lain di dalam teks tidak perlu diberi `lang`.
- **Tata letak tahan teks panjang:** teks EN rata-rata 10–30% berbeda panjangnya dari ID. Tidak boleh ada teks terpotong di 360px untuk kedua bahasa.
- **Format:** tanggal, angka, dan waktu mengikuti bahasa (ID: `10.00`, `5,5`; EN: `10:00`, `5.5`), memakai `Intl` atau teks di messages.
- **Privasi:** UU PDP. Kebijakan privasi tersedia di kedua bahasa. Persetujuan eksplisit di formulir.
- **Keamanan:** kode rahasia Apps Script hanya di server. Sheet tidak dibagikan publik, dan akun asosiasi memakai verifikasi 2 langkah. Isian disimpan sebagai teks agar tidak dijalankan sebagai rumus.

## 8. Risiko dan mitigasi

| Risiko | Dampak | Mitigasi |
|---|---|---|
| **Terjemahan EN belum ditinjau penutur fasih** | Kesan tidak profesional di depan mitra Korea; istilah resmi bisa salah | Tunjuk peninjau EN pada 1 Nov. Prioritas tinjau: Hero, Mengapa, Program, formulir. Jika belum selesai, tetap tayang dengan EN draf (sudah disusun hati-hati) dan perbaiki setelah acara. |
| **Nama resmi AVITEK dalam bahasa Inggris belum ada** | Penyebutan tidak konsisten di situs, MoU, dan materi cetak | Konfirmasi ke pengurus. Teks MoU AVITEK–INNOBIZ kemungkinan sudah memuat nama Inggrisnya; samakan dengan itu. |
| **Beban konten dua kali lipat** | Jadwal Senin malam makin ketat | Teks sudah tersedia lengkap di `messages/*.json`. Build tidak perlu menulis teks baru. |
| Konten Usulan tayang tanpa persetujuan | Situs memuat komitmen yang belum diputuskan | Flag `SHOW_PROPOSED` berlaku untuk kedua bahasa sekaligus. |
| Hex Digital Teal tidak konsisten di dokumen palet | Warna situs dan cetak berbeda | Situs memakai `#087F8C`; minta koreksi dokumen palet. |
| Oranye resmi dengan teks putih gagal kontras (2,8:1) | CTA sulit dibaca | CTA oranye wajib berteks navy (5,9:1). |
| Formulir belum tersambung pada hari-H | Data hilang | Cadangan: Google Form dua bahasa. |
| Status hukum AVITEK belum jelas | Klaim "asosiasi resmi" dipersoalkan | Pakai "diluncurkan" / "launches" sampai SK terbit. |

## 9. Pertanyaan terbuka untuk pengurus

1. Apakah hex Digital Teal yang benar `#087F8C` (sesuai RGB) atau `#0B7F8C`? Apakah tersedia file logo SVG resmi?
2. **Apa nama resmi AVITEK KUKM dalam bahasa Inggris?** Apakah sudah tercantum di naskah MoU dengan INNOBIZ?
3. **Siapa yang meninjau terjemahan English** sebelum 2 November?
4. Apakah bahasa Korea dibutuhkan, dan kapan?
5. Domain resmi dan email sekretariat?
6. Apakah 4 bidang program dan 5 langkah awal sudah sesuai rencana kepengurusan?
7. Siapa saja pengurus dan anggota pendiri yang boleh ditampilkan?
8. Apakah ketiga koperasi penerima manfaat setuju namanya ditampilkan?
9. Buku apa yang diserahkan saat peluncuran, dan apakah tersedia dalam bahasa Inggris?

## 10. Linimasa

| Tanggal | Milestone |
|---|---|
| 31 Okt | Mockup bilingual v0.4, `messages/*.json`, dan dokumen |
| 1 Nov | Jawaban pengurus (nama EN, logo, palet, persetujuan konten), peninjau EN mulai bekerja |
| 1–2 Nov | Build Next.js + next-intl, formulir tersambung, deploy ke Vercel |
| 2 Nov, malam | QA kedua bahasa di HP, terjemahan hasil tinjauan dimasukkan, QR dicetak |
| 3 Nov | **Peluncuran** |
| 3–30 Nov | Fase 2 |
