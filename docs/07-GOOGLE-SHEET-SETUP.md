# Menyambungkan Formulir ke Google Sheet

Panduan ini menyambungkan formulir website ke Google Sheet di akun `asosiasi.avitek@gmail.com`. Waktu yang dibutuhkan sekitar 15 menit. Tidak perlu kemampuan pemrograman.

## 1. Tempel skrip

1. Masuk ke Google dengan akun `asosiasi.avitek@gmail.com`, lalu buka file Sheet.
2. Pilih menu **Ekstensi → Apps Script**. Tab baru akan terbuka.
3. Hapus semua kode contoh di editor.
4. Salin seluruh isi file `scripts/google-apps-script/Code.gs`, lalu tempel ke editor.
5. Tekan ikon **Simpan**.

## 2. Buat dua kode rahasia

Buka Terminal Mac, lalu jalankan perintah ini **dua kali**:

```bash
openssl rand -hex 32
```

Simpan kedua hasilnya sementara:
- Hasil pertama adalah **kode rahasia skrip**.
- Hasil kedua adalah **garam IP**.

Jangan mengirim kedua kode ini lewat chat atau menuliskannya di dalam file `Code.gs`.

## 3. Simpan kode rahasia di skrip

1. Di Apps Script, buka **Setelan proyek** (ikon roda gigi di kiri).
2. Gulir ke **Properti skrip**, lalu pilih **Tambahkan properti skrip**.
3. Isi nama `AVITEK_SECRET` dan tempel kode rahasia skrip sebagai nilainya.
4. Pilih **Simpan properti skrip**.

Email notifikasi otomatis dikirim ke `asosiasi.avitek@gmail.com`. Untuk alamat lain, tambahkan properti `NOTIFY_EMAIL`.

## 4. Buat tab dan beri izin

1. Kembali ke **Editor** (ikon `< >`).
2. Di bagian atas, pilih fungsi `setup`, lalu tekan **Jalankan**.
3. Google meminta izin. Pilih akun asosiasi.
4. Jika muncul peringatan aplikasi belum diverifikasi, pilih **Lanjutan**, lalu **Buka proyek (tidak aman)**, lalu **Izinkan**. Peringatan ini wajar karena skrip dibuat sendiri, bukan aplikasi pihak lain.
5. Pastikan tab **Anggota**, **Mitra**, dan **Hadir** muncul di Sheet.

## 5. Terbitkan sebagai Web App

1. Pilih **Terapkan → Deployment baru**.
2. Tekan ikon roda gigi di samping "Pilih jenis", lalu pilih **Aplikasi web**.
3. Isi **Jalankan sebagai: Saya**.
4. Isi **Yang memiliki akses: Siapa saja**.
5. Pilih **Terapkan**, lalu salin **URL aplikasi web** yang berakhiran `/exec`.

"Siapa saja" hanya berarti website boleh mengirim data ke skrip. Tidak ada orang lain yang bisa membaca isi Sheet, dan kiriman tanpa kode rahasia ditolak.

## 6. Isi variabel di proyek

Buat file `.env.local` di folder proyek, lalu isi seperti ini:

```
GOOGLE_SCRIPT_URL=URL dari langkah 5
GOOGLE_SCRIPT_SECRET=kode rahasia skrip dari langkah 2
IP_HASH_SALT=garam IP dari langkah 2
NEXT_PUBLIC_SHOW_PROPOSED=true
```

Isi yang sama perlu dimasukkan ke Vercel di **Settings → Environment Variables** saat deploy. `NEXT_PUBLIC_SHOW_PROPOSED` di produksi mengikuti keputusan pengurus.

## 7. Uji coba

1. Jalankan ulang `pnpm dev`, lalu buka http://localhost:3000/id#gabung.
2. Kirim formulir dengan data uji untuk ketiga jalur.
3. Pastikan muncul pesan sukses, baris baru masuk ke tab yang benar, dan email notifikasi tiba.
4. Ulangi di http://localhost:3000/en#gabung.
5. Hapus baris uji dari Sheet sebelum tayang.

## Kalau mengubah skrip

Setelah menyimpan perubahan, pilih **Terapkan → Kelola deployment → ikon pensil → Versi: Versi baru → Terapkan**. Tanpa langkah ini, website tetap memakai skrip lama. URL-nya tidak berubah.

## Keamanan akun

- Aktifkan verifikasi 2 langkah di akun asosiasi.
- Jangan membagikan Sheet dengan opsi "Siapa saja yang memiliki link". Tambahkan orang berdasarkan alamat email.
- Jika kode rahasia bocor, buat kode baru dan ganti di Properti skrip, `.env.local`, serta Vercel.
