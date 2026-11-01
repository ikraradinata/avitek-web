# Deploy ke Vercel

Panduan ini membuat website online dari repo GitHub `ikraradinata/avitek-web`. Waktu yang dibutuhkan sekitar 10 menit.

## 1. Impor repo

1. Buka https://vercel.com, lalu masuk dengan akun GitHub `ikraradinata`.
2. Pilih **Add New → Project**.
3. Di daftar repo, pilih **avitek-web**, lalu **Import**.
4. Biarkan **Framework Preset: Next.js** dan **Root Directory: ./**. Pengaturan build jangan diubah.

## 2. Isi variabel

Masih di halaman yang sama, buka **Environment Variables**. Tambahkan satu per satu:

| Nama | Nilai |
|---|---|
| `GOOGLE_SCRIPT_URL` | Salin dari `.env.local` |
| `GOOGLE_SCRIPT_SECRET` | Salin dari `.env.local` |
| `IP_HASH_SALT` | Salin dari `.env.local` |
| `NEXT_PUBLIC_SHOW_PROPOSED` | `false` |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1` |

`NEXT_PUBLIC_SHOW_PROPOSED` bernilai `false` menyembunyikan Program dan Lima Langkah. Ganti menjadi `true` setelah pengurus menyetujui isinya, lalu deploy ulang.

`ENABLE_EXPERIMENTAL_COREPACK` membuat Vercel memakai versi pnpm yang sama dengan laptop.

Jangan mengirim nilai-nilai ini lewat chat atau menuliskannya di file yang masuk GitHub.

## 3. Deploy pertama

1. Pilih **Deploy**, lalu tunggu sampai muncul **Congratulations**.
2. Salin alamat situs, misalnya `https://avitek-web.vercel.app`.

## 4. Isi alamat situs

Alamat ini dipakai untuk canonical, sitemap, dan gambar pratinjau tautan.

1. Buka **Settings → Environment Variables**.
2. Tambahkan `NEXT_PUBLIC_SITE_URL` berisi alamat dari langkah 3, tanpa garis miring di akhir.
3. Buka **Deployments**, pilih titik tiga di deployment terbaru, lalu **Redeploy**.

Kalau domain resmi sudah ada, tambahkan di **Settings → Domains**, ganti `NEXT_PUBLIC_SITE_URL` dengan domain itu, lalu Redeploy.

## 5. Cek hasil

1. Buka alamat situs. Halaman harus masuk ke `/id` atau `/en` sesuai bahasa browser.
2. Tekan tombol ID/EN di header.
3. Kirim satu formulir uji, lalu pastikan barisnya masuk ke Sheet dan email tiba.
4. Hapus baris uji dari Sheet.

## Kalau deploy gagal

Buka **Deployments**, pilih deployment yang gagal, lalu salin bagian log yang berwarna merah ke chat. Log ini tidak berisi nilai rahasia, tetapi tetap periksa sebelum mengirim.

## Setiap perubahan berikutnya

Vercel otomatis deploy setiap ada commit baru di branch `main`. Perubahan variabel baru berlaku setelah Redeploy.
