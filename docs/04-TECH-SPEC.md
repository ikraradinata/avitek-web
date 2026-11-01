# Spesifikasi Teknis — Website AVITEK KUKM (Bilingual ID/EN)

## 1. Stack

| Lapisan | Pilihan | Alasan |
|---|---|---|
| Framework | **Next.js 14 (App Router)** + TypeScript strict | Stack standar pemilik produk; SSG per bahasa |
| i18n | **next-intl** | Routing `/[locale]`, middleware deteksi bahasa, format ICU (`{name}`), Server Component friendly |
| Styling | Tailwind CSS + shadcn/ui (Button, Input, Textarea, Select, Checkbox, Label) | Token warna terpusat |
| Font | `next/font/google` → Plus Jakarta Sans (subset `latin`, `latin-ext`) | |
| Data formulir | Supabase (Postgres + RLS) | |
| Validasi | Zod, dengan pesan galat dari messages | |
| Email | Resend (opsional) | |
| Hosting | Vercel | |
| Analitik | Vercel Analytics | Tanpa cookie pelacak |
| Package manager | pnpm | |

> Pastikan versi next-intl kompatibel dengan Next.js 14. Ikuti dokumentasi resmi next-intl untuk App Router (`defineRouting`, `createMiddleware`, `getRequestConfig`). API next-intl berubah antarversi, jadi biarkan Claude Code membaca dokumentasi versi yang terpasang.

## 2. Struktur proyek

```
avitek-web/
├─ CLAUDE.md
├─ .claude/skills/                 # /task /cek-konten /cek-i18n /cek-visual /rilis
├─ docs/
├─ messages/
│  ├─ id.json                      # SUMBER KEBENARAN teks ID
│  └─ en.json                      # SUMBER KEBENARAN teks EN (kunci identik)
├─ mockup/index.html               # acuan visual + perilaku toggle bahasa
├─ public/ (logo-avitek.svg, og-id.png, og-en.png)
├─ scripts/check-i18n.mjs          # paritas kunci, dijalankan di prebuild
├─ src/
│  ├─ i18n/
│  │  ├─ routing.ts                # locales ['id','en'], defaultLocale 'id', pathnames
│  │  ├─ request.ts                # getRequestConfig: muat messages/{locale}.json
│  │  └─ navigation.ts             # Link, redirect, usePathname, useRouter yang sadar locale
│  ├─ middleware.ts                # createMiddleware(routing)
│  ├─ app/
│  │  ├─ [locale]/
│  │  │  ├─ layout.tsx             # <html lang={locale}>, NextIntlClientProvider, generateStaticParams
│  │  │  ├─ page.tsx               # landing: rangkaian section
│  │  │  ├─ kebijakan-privasi/page.tsx   # dipetakan ke /en/privacy-policy lewat pathnames
│  │  │  └─ opengraph-image.tsx    # opsional
│  │  ├─ actions/submit.ts         # Server Action (menerima locale)
│  │  ├─ sitemap.ts · robots.ts
│  ├─ components/
│  │  ├─ layout/ (SiteHeader, LanguageSwitcher, NavDropdown, MobileMenu, SiteFooter)
│  │  ├─ sections/ (Hero, FigureStrip, ProjectTimeline, WhySection, EcosystemSection,
│  │  │             ProgramSection, FirstSteps, Beneficiaries, PartnerGroups, AgendaSection, JoinSection)
│  │  ├─ ui/ (shadcn + Kicker, SectionHead, Badge, Tag)
│  │  └─ graphics/ (StationGrid, WaveBackground, DiagonalPattern, DotGrid, EcosystemDiagram, LogoMark)
│  ├─ config/
│  │  └─ structure.ts              # data non-teks: href, warna kartu, state langkah, baris kunci agenda
│  └─ lib/ (schema.ts, supabase-server.ts, rate-limit.ts, flags.ts)
├─ supabase/migrations/0001_submissions.sql
└─ tailwind.config.ts
```

## 3. Konfigurasi i18n

```ts
// src/i18n/routing.ts
export const routing = defineRouting({
  locales: ['id', 'en'],
  defaultLocale: 'id',
  localePrefix: 'always',          // /id dan /en selalu eksplisit
  localeDetection: true,           // cookie NEXT_LOCALE → Accept-Language → default
  pathnames: {
    '/': '/',
    '/kebijakan-privasi': { id: '/kebijakan-privasi', en: '/privacy-policy' },
  },
});
```

**Aturan teks:**
- Server Component: `const t = await getTranslations('hero')`. Client Component: `useTranslations('join')`.
- Array (misalnya `track.items`, `agenda.rows`) diakses dengan `t.raw('items')` atau lewat kunci berindeks `t('items.0.title')`.
- `messages/*.json` saat ini juga memuat beberapa field non-teks (`steps.items.*.state`, `agenda.rows.*.key`) dari mockup. **Saat build, pindahkan field itu ke `src/config/structure.ts`** dan hapus dari messages, supaya penerjemah hanya melihat teks.
- Hanya namespace yang dipakai komponen klien (`nav`, `join`, `agenda.showAll/hideAll`) yang dikirim ke `NextIntlClientProvider`. Tujuannya menjaga ukuran bundle.

**LanguageSwitcher:**
- Dua tombol `ID` / `EN` (`aria-pressed`, `lang` sesuai bahasa targetnya, `title` "Bahasa Indonesia" / "English").
- Memakai `router.replace(pathname, { locale })` dari `navigation.ts`, lalu mempertahankan hash (`window.location.hash`).
- Selalu terlihat di header, termasuk di mobile (di luar menu hamburger).

## 4. SEO multibahasa

```ts
// di [locale]/layout.tsx → generateMetadata
alternates: {
  canonical: `/${locale}`,
  languages: { id: '/id', en: '/en', 'x-default': '/id' },
},
openGraph: { locale: locale === 'id' ? 'id_ID' : 'en_US', alternateLocale: locale === 'id' ? ['en_US'] : ['id_ID'], images: [`/og-${locale}.png`] },
```
- `sitemap.ts` menghasilkan entri `/id` dan `/en` dengan `alternates.languages`.
- JSON-LD `Organization` (`name`, `alternateName` = nama EN, `url`, `logo`) dan `Event` (`inLanguage`, `startDate: 2026-11-03T10:00:00+07:00`).

## 5. Model data

```sql
-- supabase/migrations/0001_submissions.sql
create type submission_path as enum ('anggota', 'mitra', 'hadir');
create type site_locale as enum ('id', 'en');

create table public.submissions (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  path        submission_path not null,
  locale      site_locale not null default 'id',
  nama        text not null check (char_length(nama) between 2 and 120),
  institusi   text not null check (char_length(institusi) between 2 and 160),
  email       text not null check (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  wa          text,
  kategori    text,            -- simpan KODE kategori (lihat §6), bukan label terjemahan
  pesan       text check (char_length(pesan) <= 2000),
  consent     boolean not null check (consent = true),
  user_agent  text,
  ip_hash     text
);
alter table public.submissions enable row level security;
create index on public.submissions (path, created_at desc);
```

## 6. Kontrak Server Action

```ts
// src/lib/schema.ts — kategori disimpan sebagai kode, label diambil dari messages
export const CATEGORY_CODES = ['koperasi','ukm','akademisi','industri','pemerintah','asosiasi'] as const;

export const submissionSchema = z.object({
  locale: z.enum(['id', 'en']),
  path: z.enum(['anggota', 'mitra', 'hadir']),
  nama: z.string().trim().min(2).max(120),
  institusi: z.string().trim().min(2).max(160),
  email: z.string().trim().email(),
  wa: z.string().trim().max(20).optional().or(z.literal('')),
  kategori: z.enum(CATEGORY_CODES).optional(),
  pesan: z.string().max(2000).optional(),
  consent: z.literal(true),
  website: z.string().max(0).optional(), // honeypot
});

type SubmitResult =
  | { ok: true; message: string }                       // dari join.paths.{path}.ok + join.thanks, dalam bahasa locale
  | { ok: false; fieldErrors: Record<string, string> }  // dari join.errorFields / join.errorConsent
  | { ok: false; error: 'rate_limited' | 'server' };
```
Urutan `join.categories` di messages **harus sama** dengan `CATEGORY_CODES`.

## 7. Paritas kunci (wajib)

`scripts/check-i18n.mjs` dijalankan lewat `"prebuild"`:
1. Meratakan kunci kedua file JSON.
2. Gagal (exit 1) jika ada kunci yang hanya ada di satu bahasa, ada nilai kosong di EN padahal ID terisi, atau variabel `{...}` di ID dan EN tidak sama.

## 8. Variabel lingkungan

```
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=      # server-only
IP_HASH_SALT=
RESEND_API_KEY=                 # opsional
NOTIFY_EMAIL_TO=
NEXT_PUBLIC_SITE_URL=https://
NEXT_PUBLIC_SHOW_PROPOSED=false # berlaku untuk ID dan EN sekaligus
```

## 9. Keamanan
Header di `next.config.js` (`nosniff`, `Referrer-Policy`, `X-Frame-Options: DENY`, `Permissions-Policy`). `supabase-server.ts` memakai `import 'server-only'`. IP tidak disimpan mentah.

## 10. Definition of Done (per PR)
- [ ] `pnpm lint`, `pnpm typecheck`, `pnpm build` (termasuk `check-i18n`) lulus
- [ ] Tampilan cocok dengan mockup di 390px dan 1366px **untuk `/id` dan `/en`**
- [ ] Tidak ada string teks di komponen (`grep` kalimat ID/EN di `src/components` hanya boleh menemukan nama merek)
- [ ] Tidak ada hex warna di `src/components` kecuali `graphics/`
- [ ] Pemilih bahasa mempertahankan anchor dan memperbarui `<html lang>`
- [ ] Keyboard dan fokus OK, Lighthouse mobile memenuhi target di kedua bahasa
