# Konten dan Narasi — Website AVITEK KUKM (Bilingual ID/EN)

Dokumen ini adalah **versi baca** dari `messages/id.json` dan `messages/en.json`. Ketiganya dibangun dari sumber yang sama, sehingga kunci dan isinya selalu sinkron.

**Aturan:**
- **Sumber kebenaran untuk kode adalah `messages/*.json`.** Jika teks diubah, ubah di **kedua** file JSON sekaligus, lalu perbarui dokumen ini.
- Kunci (`hero.title`, dll.) harus **identik** di ID dan EN. Tidak boleh ada kunci yang hanya ada di satu bahasa.
- Bahasa Indonesia adalah **bahasa utama** (default). Versi EN adalah terjemahan yang setara makna, bukan terjemahan kata per kata.

**Label status:**
| Label | Arti | Tindakan |
|---|---|---|
| Terverifikasi | Ada sumber tertulis (undangan resmi atau berita), lihat §Sumber | Boleh tayang |
| **Usulan** | Disusun tim web | **Wajib disetujui pengurus** sebelum tayang (dikendalikan flag `SHOW_PROPOSED`) |
| UI | Teks antarmuka (tombol, label, galat) | Boleh tayang |
| Nama diri | Nama orang atau lembaga, tidak diterjemahkan | Cek ejaan |

> ⚠️ **Status terjemahan EN:** semua teks EN adalah **draf terjemahan Claude** dan belum ditinjau penutur asli. Sebelum tayang, minimal tinjau bagian Hero, Mengapa AVITEK, Program, dan formulir. Prioritaskan istilah resmi berikut, yang belum dikonfirmasi:
> - Nama resmi AVITEK KUKM dalam bahasa Inggris (draf: *Association of Technology Innovation for Cooperatives and SMEs*)
> - Nama resmi Kementerian Koperasi dalam bahasa Inggris (draf: *Ministry of Cooperatives of the Republic of Indonesia*)
> - Penulisan jabatan dan gelar tamu Korea mengikuti undangan resmi

**Gaya bahasa:**
- **ID:** baku tapi hangat, *sentence case*, kalimat aktif. Format waktu `10.00 WIB`, desimal pakai koma (`5,5`).
- **EN:** *American English* (organization, digitize), *sentence case*, kalimat aktif dan ringkas. Format waktu `10:00 WIB`, desimal pakai titik (`5.5`). Pakai *cooperatives* dan *SMEs* (bukan *co-ops* kecuali di diagram yang ruangnya sempit).
- Tombol menyebut tindakannya: "Kirim pendaftaran" / "Send registration", bukan "Submit".

**Variabel dalam teks:** `{name}`, `{email}`, dan `{fields}` diisi oleh kode (format ICU, didukung next-intl). Jangan diterjemahkan.

---

## 0. Metadata dan identitas

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `meta.title` | AVITEK KUKM — Asosiasi Inovasi Teknologi Koperasi dan UKM | AVITEK KUKM — Association of Technology Innovation for Cooperatives and SMEs | **Usulan** |
| `meta.description` | AVITEK KUKM melanjutkan hasil proyek ODA Smart Factory Korea–Indonesia 2023–2026 dan menghubungkan koperasi, UKM, akademisi, industri, dan pemerintah. | AVITEK KUKM carries forward the results of the 2023–2026 Korea–Indonesia Smart Factory ODA project and connects cooperatives, SMEs, academia, industry, and government. | **Usulan** |
| `meta.fullName` | Asosiasi Inovasi Teknologi Koperasi dan UKM | Association of Technology Innovation for Cooperatives and SMEs | **Usulan** |
| `meta.tagline` | Kolaborasi, inovasi, bisnis | Collaboration, innovation, business | Terverifikasi |

## 1. Navigasi

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `nav.home` | AVITEK KUKM, ke beranda | AVITEK KUKM, go to homepage | UI |
| `nav.about` | Tentang | About | UI |
| `nav.program` | Program | Programs | UI |
| `nav.partnership` | Kemitraan | Partnership | UI |
| `nav.insights` | Wawasan | Insights | UI |
| `nav.insightsStories` | Kisah penerima manfaat | Beneficiary stories | UI |
| `nav.insightsStoriesSub` | Koperasi dan UKM yang sudah menerapkan smart factory | Cooperatives and SMEs already running smart factories | UI |
| `nav.insightsTrack` | Jejak proyek ODA | ODA project timeline | UI |
| `nav.insightsTrackSub` | Perjalanan 2023–2026 | The 2023–2026 journey | UI |
| `nav.events` | Acara | Events | UI |
| `nav.join` | Gabung AVITEK | Join AVITEK | UI |
| `nav.menuOpen` | Buka menu | Open menu | UI |
| `nav.menuClose` | Tutup menu | Close menu | UI |
| `nav.langLabel` | Pilih bahasa | Choose language | UI |

## 2. Hero

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `hero.badge` | Peluncuran AVITEK KUKM, 3 November 2026 | AVITEK KUKM launch, 3 November 2026 | Terverifikasi |
| `hero.title` | Smart factory tidak berhenti saat proyek selesai. | Smart factories don't stop when the project ends. | **Usulan** |
| `hero.lede` | Selama 2023–2026, proyek ODA Smart Factory Korea–Indonesia mendampingi 30 koperasi dan UKM mengadopsi teknologi produksi cerdas. AVITEK KUKM hadir agar hasil itu terus dipakai, dikembangkan, dan ditularkan ke lebih banyak pelaku usaha. | From 2023 to 2026, the Korea–Indonesia Smart Factory ODA project helped 30 cooperatives and SMEs adopt smart production technology. AVITEK KUKM exists so those results keep being used, improved, and passed on to more businesses. | **Usulan** |
| `hero.dateLabel` | Tanggal | Date | UI |
| `hero.date` | Selasa, 3 November 2026 | Tuesday, 3 November 2026 | Terverifikasi |
| `hero.timeLabel` | Waktu | Time | UI |
| `hero.time` | 10.00 WIB sampai selesai (registrasi 09.30) | 10:00 WIB until close (registration 09:30) | Terverifikasi |
| `hero.venueLabel` | Tempat | Venue | UI |
| `hero.venue` | Auditorium Lantai 2, Kementerian Koperasi RI, Jl. H.R. Rasuna Said Kav. 3–4, Jakarta Selatan | 2nd Floor Auditorium, Ministry of Cooperatives of the Republic of Indonesia, Jl. H.R. Rasuna Said Kav. 3–4, South Jakarta | Terverifikasi |
| `hero.ctaRsvp` | Konfirmasi kehadiran | Confirm attendance | UI |
| `hero.ctaAgenda` | Lihat agenda | See the agenda | UI |
| `hero.visualLabel` | Ilustrasi 30 koperasi dan UKM penerima manfaat yang terhubung ke AVITEK KUKM | Illustration of the 30 beneficiary cooperatives and SMEs connected to AVITEK KUKM | UI |
| `hero.visualCaption` | koperasi dan UKM sudah menerapkan smart factory | cooperatives and SMEs already run smart factories | Terverifikasi |
| `hero.hubName` | AVITEK KUKM | AVITEK KUKM | Nama diri |
| `hero.hubText` | menjadi rumah bersama mereka setelah masa proyek ODA berakhir. | becomes their shared home after the ODA project ends. | **Usulan** |

## 3. Angka kunci

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `figures.0.value` | 30 | 30 | Terverifikasi |
| `figures.0.label` | Koperasi dan UKM penerima manfaat | Beneficiary cooperatives and SMEs | Terverifikasi |
| `figures.1.value` | USD 5,5 juta | USD 5.5M | Terverifikasi |
| `figures.1.label` | Nilai hibah ODA dari pemerintah Korea | ODA grant from the Korean government | Terverifikasi |
| `figures.1.note` | sekitar Rp84 miliar saat penandatanganan | about IDR 84 billion at signing | Terverifikasi |
| `figures.2.value` | 2023–2026 | 2023–2026 | Terverifikasi |
| `figures.2.label` | Masa pelaksanaan proyek | Project period | Terverifikasi |
| `figures.3.value` | 1 | 1 | Terverifikasi |
| `figures.3.label` | Smart Factory Training Center pertama di Indonesia, BINUS @Bekasi | Indonesia's first Smart Factory Training Center, BINUS @Bekasi | Terverifikasi |

> ⚠️ **Jangan tampilkan jumlah tenaga ahli** sampai ada angka realisasi. Sumbernya tidak konsisten: [S3] menyebut "lebih dari 130", [S2] menyebut "100 ahli". Minta angka realisasi dari laporan INNOBIZ (sesi 11.30 tanggal 3 Nov).

## 4. Jejak proyek ODA

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `track.kicker` | Jejak proyek ODA | ODA project timeline | UI |
| `track.title` | Empat tahun kerja sama Korea–Indonesia | Four years of Korea–Indonesia cooperation | Terverifikasi |
| `track.intro` | AVITEK lahir dari perjalanan panjang. Ini tonggak-tonggak utamanya sejak nota kesepahaman ditandatangani. | AVITEK grew out of a long journey. These are the key milestones since the memorandum of understanding was signed. | **Usulan** |
| `track.items.0.year` | 2023 | 2023 | Terverifikasi |
| `track.items.0.title` | Nota kesepahaman | Memorandum of understanding | Terverifikasi |
| `track.items.0.text` | Kemenkop UKM dan INNOBIZ Association menandatangani MoU proyek smart factory di Jakarta pada 28 Februari. | Indonesia's Ministry of Cooperatives and SMEs and the INNOBIZ Association signed the smart factory project MoU in Jakarta on 28 February. | Terverifikasi |
| `track.items.1.year` | 2024 | 2024 | Terverifikasi |
| `track.items.1.title` | Pusat pelatihan dibuka | Training center opens | Terverifikasi |
| `track.items.1.text` | Smart Factory Training Center diresmikan di BINUS @Bekasi pada 2 Desember. | The Smart Factory Training Center opened at BINUS @Bekasi on 2 December. | Terverifikasi |
| `track.items.2.year` | 2025 | 2025 | Terverifikasi |
| `track.items.2.title` | Belajar langsung di Korea | Learning on site in Korea | Terverifikasi |
| `track.items.2.text` | Pelatihan dua minggu di pabrik-pabrik smart factory Korea dan seminar kerja sama bisnis di SFTC. | Two weeks of training inside Korean smart factories, plus a business cooperation seminar at the SFTC. | Terverifikasi |
| `track.items.3.year` | 2026 | 2026 | Terverifikasi |
| `track.items.3.title` | Berbagi hasil | Sharing results | Terverifikasi |
| `track.items.3.text` | Seminar di BINUS Alam Sutera, tempat penerima manfaat membagikan dampak penerapan smart factory. | A seminar at BINUS Alam Sutera where beneficiaries shared the impact of their smart factories. | Terverifikasi |
| `track.items.4.year` | Nov 2026 | Nov 2026 | Terverifikasi |
| `track.items.4.title` | AVITEK KUKM diluncurkan | AVITEK KUKM launches | Terverifikasi |
| `track.items.4.text` | Proyek dilaporkan, dan asosiasi resmi mengambil alih keberlanjutannya. | The project reports its results, and the association formally takes over its continuity. | Terverifikasi |

## 5. Mengapa AVITEK

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `why.kicker` | Mengapa AVITEK | Why AVITEK | UI |
| `why.title` | Teknologinya sudah terpasang. Sekarang ekosistemnya yang harus dirawat. | The technology is installed. Now the ecosystem needs looking after. | **Usulan** |
| `why.intro` | Hibah punya batas waktu, tapi kebutuhan pendampingan, pelatihan, dan jejaring tidak. Tanpa wadah lanjutan, pengetahuan yang dibangun empat tahun mudah tercerai-berai. AVITEK dibentuk agar hasilnya terus tumbuh. | Grants end; the need for mentoring, training, and networks doesn't. Without a home to carry it on, four years of know-how can easily scatter. AVITEK was formed so the results keep growing. | **Usulan** |
| `why.cards.0.title` | Untuk anggota | For members | **Usulan** |
| `why.cards.0.text` | Koperasi dan UKM mendapat jalur lanjutan untuk meningkatkan kapasitas produksi dan daya saing. | Cooperatives and SMEs get a clear path to keep raising production capacity and competitiveness. | **Usulan** |
| `why.cards.0.points.0` | Pendampingan teknis lanjutan | Ongoing technical mentoring | **Usulan** |
| `why.cards.0.points.1` | Akses pelatihan di SFTC | Access to SFTC training | **Usulan** |
| `why.cards.0.points.2` | Forum berbagi praktik antaranggota | A forum for members to share practices | **Usulan** |
| `why.cards.1.title` | Untuk mitra | For partners | **Usulan** |
| `why.cards.1.text` | Industri, penyedia teknologi, dan kampus menemukan mitra implementasi yang sudah siap secara digital. | Industry, technology providers, and universities find implementation partners that are already digitally ready. | **Usulan** |
| `why.cards.1.points.0` | Lokasi uji coba dan pilot project | Test sites and pilot projects | **Usulan** |
| `why.cards.1.points.1` | Kolaborasi riset terapan | Applied research collaboration | **Usulan** |
| `why.cards.1.points.2` | Jejaring dengan mitra Korea | Links with Korean partners | **Usulan** |
| `why.cards.2.title` | Untuk Indonesia | For Indonesia | **Usulan** |
| `why.cards.2.text` | Transformasi digital koperasi dan UKM berjalan berkelanjutan, tidak bergantung pada satu proyek. | Digital transformation of cooperatives and SMEs keeps going, without depending on a single project. | **Usulan** |
| `why.cards.2.points.0` | Model replikasi smart factory skala UKM | A replicable smart factory model for SMEs | **Usulan** |
| `why.cards.2.points.1` | Masukan kebijakan berbasis data lapangan | Policy input grounded in field data | **Usulan** |
| `why.cards.2.points.2` | Tenaga ahli lokal yang bersertifikat | Certified local experts | **Usulan** |

## 6. Ekosistem inovasi

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `eco.kicker` | Ekosistem inovasi | Innovation ecosystem | UI |
| `eco.title` | Satu simpul untuk koperasi, kampus, industri, dan pemerintah. | One hub for cooperatives, universities, industry, and government. | Terverifikasi |
| `eco.diagramLabel` | Diagram ekosistem: AVITEK di tengah, terhubung dengan koperasi dan UKM, akademisi, industri, pemerintah, dan mitra Korea | Ecosystem diagram: AVITEK at the center, connected to cooperatives and SMEs, academia, industry, government, and Korean partners | UI |
| `eco.nodeCoop1` | Koperasi | Co-ops | UI |
| `eco.nodeCoop2` | & UKM | & SMEs | UI |
| `eco.nodeAcademia` | Akademisi | Academia | UI |
| `eco.nodeIndustry` | Industri | Industry | UI |
| `eco.nodeGov` | Pemerintah | Government | UI |
| `eco.nodeKorea1` | Mitra | Korean | UI |
| `eco.nodeKorea2` | Korea | partners | UI |
| `eco.pillars.0.title` | Riset terapan | Applied research | **Usulan** |
| `eco.pillars.0.text` | Masalah produksi nyata di lantai pabrik koperasi dan UKM menjadi bahan riset kampus. | Real production problems on cooperative and SME factory floors become university research topics. | **Usulan** |
| `eco.pillars.1.title` | Kolaborasi aktif | Active collaboration | **Usulan** |
| `eco.pillars.1.text` | Penyedia teknologi dan anggota bekerja dalam proyek bersama, bukan sekadar seminar. | Technology providers and members work on joint projects, not just seminars. | **Usulan** |
| `eco.pillars.2.title` | Advokasi kebijakan | Policy advocacy | **Usulan** |
| `eco.pillars.2.text` | Data dan pengalaman anggota disampaikan ke pemerintah sebagai masukan program digitalisasi. | Member data and experience are passed to government as input for digitalization programs. | **Usulan** |

## 7. Program strategis

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `program.kicker` | Program strategis | Strategic programs | UI |
| `program.title` | Empat bidang kerja AVITEK | AVITEK's four work areas | **Usulan** |
| `program.intro` | Setiap bidang punya peran yang jelas, dari menghasilkan pengetahuan sampai mencetak tenaga ahli. | Each area has a clear role, from producing knowledge to developing experts. | **Usulan** |
| `program.more` | Selengkapnya | Learn more | UI |
| `program.cards.0.role` | Pusat kajian | Think tank | **Usulan** |
| `program.cards.0.title` | Riset & Inovasi Teknologi | Research & Technology Innovation | **Usulan** |
| `program.cards.0.text` | Kajian penerapan smart factory, IoT, dan analitik data yang pas untuk skala koperasi dan UKM. | Studies on smart factory, IoT, and data analytics suited to the scale of cooperatives and SMEs. | **Usulan** |
| `program.cards.1.role` | Pelaksana | Implementer | **Usulan** |
| `program.cards.1.title` | Pendampingan Implementasi | Implementation Support | **Usulan** |
| `program.cards.1.text` | Pendampingan lanjutan bagi 30 penerima manfaat dan perluasan ke koperasi dan UKM baru. | Continued support for the 30 beneficiaries and expansion to new cooperatives and SMEs. | **Usulan** |
| `program.cards.2.role` | Pembangun jejaring | Network builder | **Usulan** |
| `program.cards.2.title` | Kemitraan & Kerja Sama Internasional | Partnerships & International Cooperation | **Usulan** |
| `program.cards.2.text` | Kerja sama dengan INNOBIZ Association, industri nasional, dan lembaga pemerintah. | Cooperation with the INNOBIZ Association, national industry, and government agencies. | **Usulan** |
| `program.cards.3.role` | Penguat kapasitas | Capacity builder | **Usulan** |
| `program.cards.3.title` | Pelatihan & Sertifikasi | Training & Certification | **Usulan** |
| `program.cards.3.text` | Kelas dan sertifikasi tenaga ahli smart factory bersama Smart Factory Training Center. | Smart factory expert classes and certification with the Smart Factory Training Center. | **Usulan** |

## 8. Lima langkah awal

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `steps.kicker` | Program prioritas tahun pertama | First-year priorities | UI |
| `steps.title` | Lima langkah awal | Five first steps | **Usulan** |
| `steps.intro` | Urutan kerja AVITEK sejak peluncuran sampai platform kolaborasi berjalan. | AVITEK's sequence of work from launch to a running collaboration platform. | **Usulan** |
| `steps.more` | Lihat semua program | See all programs | UI |
| `steps.items.0.title` | Peluncuran & MoU dengan INNOBIZ | Launch & MoU with INNOBIZ | Terverifikasi |
| `steps.items.0.text` | Peresmian AVITEK KUKM dan penandatanganan nota kesepahaman dengan INNOBIZ Association Korea. | The official launch of AVITEK KUKM and the signing of an MoU with Korea's INNOBIZ Association. | Terverifikasi |
| `steps.items.0.tag` | 3 November 2026 | 3 November 2026 | Terverifikasi |
| `steps.items.1.title` | Peta jalan asosiasi | Association roadmap | **Usulan** |
| `steps.items.1.text` | Menyusun prioritas lima tahun bersama anggota pendiri, mitra, dan pemerintah. | Setting five-year priorities with founding members, partners, and government. | **Usulan** |
| `steps.items.1.tag` | Direncanakan | Planned | UI |
| `steps.items.2.title` | Pendampingan lanjutan 30 penerima manfaat | Continued support for the 30 beneficiaries | **Usulan** |
| `steps.items.2.text` | Memastikan sistem smart factory yang sudah terpasang tetap dipakai dan dikembangkan. | Making sure the installed smart factory systems stay in use and keep improving. | **Usulan** |
| `steps.items.2.tag` | Direncanakan | Planned | UI |
| `steps.items.3.title` | Kelas publik Smart Factory Training Center | Public Smart Factory Training Center classes | **Usulan** |
| `steps.items.3.text` | Membuka pelatihan untuk koperasi, UKM, dan industri di luar penerima manfaat proyek. | Opening training to cooperatives, SMEs, and industry beyond the project's beneficiaries. | **Usulan** |
| `steps.items.3.tag` | Terbuka untuk kolaborasi | Open for collaboration | UI |
| `steps.items.4.title` | Platform anggota & direktori | Member platform & directory | **Usulan** |
| `steps.items.4.text` | Ruang daring untuk direktori anggota, berbagi studi kasus, dan mencari mitra proyek. | An online space for the member directory, shared case studies, and finding project partners. | **Usulan** |
| `steps.items.4.tag` | Direncanakan | Planned | UI |

## 9. Penerima manfaat dan pendukung

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `bene.kicker` | Dari lantai produksi | From the factory floor | UI |
| `bene.title` | Koperasi yang sudah menjalaninya | Cooperatives that have done it | **Usulan** |
| `bene.intro` | Perwakilan penerima manfaat akan membagikan dampak smart factory pada forum 3 November. Kisah lengkap mereka menyusul di halaman Wawasan. | Beneficiary representatives will share the impact of their smart factories at the 3 November forum. Their full stories will follow on the Insights page. | Terverifikasi |
| `bene.items.0.loc` | Pangalengan, Jawa Barat | Pangalengan, West Java | Terverifikasi |
| `bene.items.0.name` | Koperasi Peternak Bandung Selatan (KPBS) Pangalengan | Koperasi Peternak Bandung Selatan (KPBS) Pangalengan | Nama diri |
| `bene.items.0.text` | Koperasi susu yang membagikan pengalaman penerapan smart factory pada seminar Juni 2026. | A dairy cooperative that shared its smart factory experience at the June 2026 seminar. | Terverifikasi |
| `bene.items.1.loc` | Tegal, Jawa Tengah | Tegal, Central Java | Terverifikasi |
| `bene.items.1.name` | Koperasi Tegal Manufaktur | Koperasi Tegal Manufaktur | Nama diri |
| `bene.items.1.text` | Koperasi manufaktur penerima manfaat proyek ODA Smart Factory. | A manufacturing cooperative and beneficiary of the Smart Factory ODA project. | Terverifikasi |
| `bene.items.2.loc` | Kuningan, Jawa Barat | Kuningan, West Java | Terverifikasi |
| `bene.items.2.name` | Koperasi Produsen Susu Karya Nugraha Jaya | Koperasi Produsen Susu Karya Nugraha Jaya | Nama diri |
| `bene.items.2.text` | Koperasi produsen susu penerima manfaat proyek ODA Smart Factory. | A dairy producers' cooperative and beneficiary of the Smart Factory ODA project. | Terverifikasi |
| `bene.supportedBy` | Didukung oleh | Supported by | UI |
| `bene.partners.0.name` | Kementerian Koperasi RI | Ministry of Cooperatives, Republic of Indonesia | Terverifikasi |
| `bene.partners.0.role` | Pemerintah Indonesia | Government of Indonesia | Terverifikasi |
| `bene.partners.1.name` | Ministry of SMEs and Startups | Ministry of SMEs and Startups | Nama diri |
| `bene.partners.1.role` | Republik Korea | Republic of Korea | Terverifikasi |
| `bene.partners.2.name` | INNOBIZ Association | INNOBIZ Association | Nama diri |
| `bene.partners.2.role` | Pelaksana proyek | Project implementer | Terverifikasi |
| `bene.partners.3.name` | BINUS University | BINUS University | Nama diri |
| `bene.partners.3.role` | Mitra kampus & SFTC | University partner & SFTC | Terverifikasi |
| `bene.partners.4.name` | Wincom | Wincom | Nama diri |
| `bene.partners.4.role` | Mitra proyek | Project partner | Terverifikasi |
| `bene.partners.5.name` | EO Buddy | EO Buddy | Nama diri |
| `bene.partners.5.role` | Mitra proyek | Project partner | Terverifikasi |
| `bene.partners.6.name` | GINT | GINT | Nama diri |
| `bene.partners.6.role` | Mitra proyek | Project partner | Terverifikasi |
| `bene.partners.7.name` | KMAC | KMAC | Nama diri |
| `bene.partners.7.role` | Mitra proyek | Project partner | Terverifikasi |

> ⚠️ Nama koperasi dan mitra hanya boleh tampil dengan izin. Logo mitra baru dipasang setelah ada izin pemilik merek. **Jangan mengarang kutipan testimoni**; kutipan asli diambil dari sesi 11.45 tanggal 3 Nov dengan izin tertulis, dalam bahasa asli, lalu diterjemahkan.

## 10. Ekosistem kolaborasi

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `partners.kicker` | Ekosistem kolaborasi | Collaboration ecosystem | UI |
| `partners.title` | Siapa yang bisa bergabung | Who can join | **Usulan** |
| `partners.intro` | AVITEK terbuka bagi siapa pun yang ingin mempercepat transformasi digital koperasi dan UKM di Indonesia. | AVITEK is open to anyone who wants to speed up the digital transformation of Indonesia's cooperatives and SMEs. | **Usulan** |
| `partners.groups.0.title` | Koperasi | Cooperatives | **Usulan** |
| `partners.groups.0.text` | Koperasi produsen dan jasa yang ingin mendigitalkan proses produksinya. | Producer and service cooperatives that want to digitize their production. | **Usulan** |
| `partners.groups.1.title` | UKM manufaktur | Manufacturing SMEs | **Usulan** |
| `partners.groups.1.text` | Pelaku usaha yang siap meningkatkan efisiensi dan mutu produksi. | Businesses ready to raise production efficiency and quality. | **Usulan** |
| `partners.groups.2.title` | Akademisi & peneliti | Academics & researchers | **Usulan** |
| `partners.groups.2.text` | Dosen dan peneliti di bidang manufaktur, IoT, AI, dan sistem informasi. | Lecturers and researchers in manufacturing, IoT, AI, and information systems. | **Usulan** |
| `partners.groups.3.title` | Industri & penyedia teknologi | Industry & technology providers | **Usulan** |
| `partners.groups.3.text` | Perusahaan teknologi, integrator sistem, dan produsen perangkat. | Technology companies, system integrators, and equipment makers. | **Usulan** |
| `partners.groups.4.title` | Pemerintah & regulator | Government & regulators | **Usulan** |
| `partners.groups.4.text` | Kementerian dan dinas yang membina koperasi, UKM, dan industri. | Ministries and agencies that support cooperatives, SMEs, and industry. | **Usulan** |
| `partners.groups.5.title` | Asosiasi & komunitas profesi | Associations & professional communities | **Usulan** |
| `partners.groups.5.text` | Asosiasi industri, komunitas insinyur, dan jejaring internasional. | Industry associations, engineering communities, and international networks. | **Usulan** |
| `partners.ctaText` | Punya program, teknologi, atau lokasi uji coba yang ingin dikembangkan bersama anggota AVITEK? | Have a program, technology, or test site you'd like to develop with AVITEK members? | **Usulan** |
| `partners.cta` | Ajukan kemitraan | Propose a partnership | UI |

## 11. Agenda 3 November 2026

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `agenda.kicker` | Agenda & forum | Agenda & forum | UI |
| `agenda.title` | Acara terdekat | Upcoming event | UI |
| `agenda.intro` | Peluncuran AVITEK KUKM berlangsung dalam Korea–Indonesia Smart Factory Project Report, Dissemination and Appreciation Forum. | AVITEK KUKM launches during the Korea–Indonesia Smart Factory Project Report, Dissemination and Appreciation Forum. | Terverifikasi |
| `agenda.day` | 03 | 03 | Terverifikasi |
| `agenda.month` | November 2026 | November 2026 | Terverifikasi |
| `agenda.when` | Selasa, 09.30–14.30 WIB | Tuesday, 09:30–14:30 WIB | Terverifikasi |
| `agenda.eventTitle` | Peluncuran AVITEK KUKM & Forum Smart Factory Korea–Indonesia | AVITEK KUKM Launch & Korea–Indonesia Smart Factory Forum | Terverifikasi |
| `agenda.where` | Auditorium Lantai 2, Kementerian Koperasi RI, Jakarta Selatan | 2nd Floor Auditorium, Ministry of Cooperatives, South Jakarta | Terverifikasi |
| `agenda.rows.0.time` | 09.30–10.00 | 09:30–10:00 | Terverifikasi |
| `agenda.rows.0.title` | Registrasi | Registration | Terverifikasi |
| `agenda.rows.1.time` | 10.05–10.15 | 10:05–10:15 | Terverifikasi |
| `agenda.rows.1.title` | Sambutan INNOBIZ Association | Welcome remarks, INNOBIZ Association | Terverifikasi |
| `agenda.rows.1.sub` | Mr. Jeong Kwang Cheon, Chairman | Mr. Jeong Kwang Cheon, Chairman | Nama diri |
| `agenda.rows.2.time` | 10.25–10.35 | 10:25–10:35 | Terverifikasi |
| `agenda.rows.2.title` | Sambutan Kementerian Koperasi | Remarks, Ministry of Cooperatives | Terverifikasi |
| `agenda.rows.2.sub` | Ferry Juliantono, Menteri Koperasi | Ferry Juliantono, Minister of Cooperatives | Terverifikasi |
| `agenda.rows.3.time` | 10.35–10.45 | 10:35–10:45 | Terverifikasi |
| `agenda.rows.3.title` | Sambutan Duta Besar Korea untuk Indonesia | Congratulatory remarks, Ambassador of the Republic of Korea to Indonesia | Terverifikasi |
| `agenda.rows.3.sub` | H.E. Yun Sun Gu | H.E. Yun Sun Gu | Nama diri |
| `agenda.rows.4.time` | 10.45–10.55 | 10:45–10:55 | Terverifikasi |
| `agenda.rows.4.title` | Sambutan Ministry of SMEs and Startups Korea | Congratulatory remarks, Ministry of SMEs and Startups, Korea | Terverifikasi |
| `agenda.rows.4.sub` | Mr. Yoon Sung Woong | Mr. Yoon Sung Woong | Nama diri |
| `agenda.rows.5.time` | 10.55–11.05 | 10:55–11:05 | Terverifikasi |
| `agenda.rows.5.title` | Peluncuran AVITEK KUKM & penyerahan buku | AVITEK KUKM launch & book handover | Terverifikasi |
| `agenda.rows.5.sub` | Prof. Meyliana, Ketua AVITEK KUKM | Prof. Meyliana, Chair of AVITEK KUKM | Terverifikasi |
| `agenda.rows.6.time` | 11.05–11.15 | 11:05–11:15 | Terverifikasi |
| `agenda.rows.6.title` | Penandatanganan MoU AVITEK KUKM & INNOBIZ Association | MoU signing, AVITEK KUKM & INNOBIZ Association | Terverifikasi |
| `agenda.rows.7.time` | 11.15–11.25 | 11:15–11:25 | Terverifikasi |
| `agenda.rows.7.title` | Penandatanganan PKS Internex dan EM Focus | Cooperation agreement signing, Internex and EM Focus | Terverifikasi |
| `agenda.rows.8.time` | 11.30–11.45 | 11:30–11:45 | Terverifikasi |
| `agenda.rows.8.title` | Capaian pelaksanaan proyek ODA Smart Factory | Smart Factory ODA project results | Terverifikasi |
| `agenda.rows.8.sub` | Seungkyu Oh, INNOBIZ Association | Seungkyu Oh, INNOBIZ Association | Nama diri |
| `agenda.rows.9.time` | 11.45–12.00 | 11:45–12:00 | Terverifikasi |
| `agenda.rows.9.title` | Testimoni penerima manfaat | Beneficiary testimonials | Terverifikasi |
| `agenda.rows.9.sub` | Perwakilan tiga koperasi | Representatives of three cooperatives | Terverifikasi |
| `agenda.rows.10.time` | 12.00–12.15 | 12:00–12:15 | Terverifikasi |
| `agenda.rows.10.title` | Presentasi EM Focus | EM Focus presentation | Terverifikasi |
| `agenda.rows.11.time` | 12.15–12.30 | 12:15–12:30 | Terverifikasi |
| `agenda.rows.11.title` | Peran dan fasilitas Smart Factory Training Center | Role and facilities of the Smart Factory Training Center | Terverifikasi |
| `agenda.rows.11.sub` | Prof. Meyliana, BINUS University | Prof. Meyliana, BINUS University | Nama diri |
| `agenda.rows.12.time` | 12.30–13.25 | 12:30–13:25 | Terverifikasi |
| `agenda.rows.12.title` | Penghargaan dan sertifikat | Awards and certificates | Terverifikasi |
| `agenda.rows.12.sub` | Untuk Steering Committee, mitra proyek, BINUS University, dan 30 koperasi dan UKM penerima manfaat | For the Steering Committee, project partners, BINUS University, and the 30 beneficiary cooperatives and SMEs | Terverifikasi |
| `agenda.rows.13.time` | 13.30–14.30 | 13:30–14:30 | Terverifikasi |
| `agenda.rows.13.title` | Networking luncheon | Networking luncheon | Terverifikasi |
| `agenda.showAll` | Tampilkan agenda lengkap | Show full agenda | UI |
| `agenda.hideAll` | Sembunyikan agenda lengkap | Hide full agenda | UI |
| `agenda.note` | Agenda bersifat sementara dan dapat berubah. | The agenda is provisional and may change. | UI |

> Slot 10.15–10.25 kosong di surat asli. Konfirmasi ke panitia. Typo di surat asli sudah diperbaiki.

## 12. Bergabung (formulir)

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `join.kicker` | Bergabung sekarang | Join now | UI |
| `join.title` | Jadi bagian dari gerakan smart factory koperasi dan UKM. | Be part of the smart factory movement for cooperatives and SMEs. | **Usulan** |
| `join.lede` | Pilih cara Anda terlibat. Sekretariat akan menghubungi Anda setelah formulir diterima. | Choose how you'd like to take part. The secretariat will contact you once we receive your form. | **Usulan** |
| `join.groupLabel` | Pilih cara bergabung | Choose how to join | UI |
| `join.paths.anggota.label` | Daftar sebagai anggota | Register as a member | UI |
| `join.paths.anggota.hint` | Koperasi, UKM, akademisi, atau praktisi | Cooperatives, SMEs, academics, or practitioners | UI |
| `join.paths.anggota.title` | Daftar sebagai anggota | Register as a member | UI |
| `join.paths.anggota.sub` | Isi data singkat Anda. Kolom bertanda * wajib diisi. | Fill in a few details. Fields marked * are required. | UI |
| `join.paths.anggota.msg` | Apa yang ingin Anda kembangkan bersama AVITEK? | What would you like to develop with AVITEK? | UI |
| `join.paths.anggota.submit` | Kirim pendaftaran | Send registration | UI |
| `join.paths.anggota.ok` | Pendaftaran terkirim | Registration sent | UI |
| `join.paths.mitra.label` | Ajukan kemitraan | Propose a partnership | UI |
| `join.paths.mitra.hint` | Industri, lembaga, atau asosiasi | Industry, institutions, or associations | UI |
| `join.paths.mitra.title` | Ajukan kemitraan | Propose a partnership | UI |
| `join.paths.mitra.sub` | Ceritakan lembaga Anda dan bentuk kerja sama yang diusulkan. | Tell us about your organization and the cooperation you have in mind. | UI |
| `join.paths.mitra.msg` | Usulan kerja sama | Proposed cooperation | UI |
| `join.paths.mitra.submit` | Kirim pengajuan | Send proposal | UI |
| `join.paths.mitra.ok` | Pengajuan kemitraan terkirim | Partnership proposal sent | UI |
| `join.paths.hadir.label` | Konfirmasi kehadiran 3 November | Confirm attendance on 3 November | UI |
| `join.paths.hadir.hint` | Untuk tamu undangan peluncuran | For invited launch guests | UI |
| `join.paths.hadir.title` | Konfirmasi kehadiran 3 November | Confirm attendance on 3 November | UI |
| `join.paths.hadir.sub` | Untuk tamu undangan peluncuran AVITEK KUKM di Kementerian Koperasi RI. | For invited guests at the AVITEK KUKM launch at the Ministry of Cooperatives. | UI |
| `join.paths.hadir.msg` | Catatan untuk panitia (opsional) | Note for the organizers (optional) | UI |
| `join.paths.hadir.submit` | Konfirmasi kehadiran | Confirm attendance | UI |
| `join.paths.hadir.ok` | Kehadiran terkonfirmasi | Attendance confirmed | UI |
| `join.fields.name` | Nama lengkap | Full name | UI |
| `join.fields.org` | Institusi / usaha | Organization / business | UI |
| `join.fields.email` | Email | Email | UI |
| `join.fields.wa` | Nomor WhatsApp | WhatsApp number | UI |
| `join.fields.category` | Kategori | Category | UI |
| `join.fields.consent` | Saya setuju data ini diproses AVITEK KUKM untuk keperluan keanggotaan dan komunikasi, sesuai Kebijakan Privasi. | I agree to AVITEK KUKM processing this data for membership and communication purposes, as described in the Privacy Policy. | **Usulan** |
| `join.categories.0` | Koperasi | Cooperative | UI |
| `join.categories.1` | UKM | SME | UI |
| `join.categories.2` | Akademisi / peneliti | Academic / researcher | UI |
| `join.categories.3` | Industri / penyedia teknologi | Industry / technology provider | UI |
| `join.categories.4` | Pemerintah | Government | UI |
| `join.categories.5` | Asosiasi / komunitas | Association / community | UI |
| `join.thanks` | Terima kasih, {name}. Sekretariat AVITEK akan menghubungi Anda melalui {email}. | Thank you, {name}. The AVITEK secretariat will contact you at {email}. | UI |
| `join.errorFields` | Lengkapi kolom: {fields}. Pastikan email berformat nama@domain. | Please complete: {fields}. Make sure your email looks like name@domain. | UI |
| `join.errorConsent` | Centang persetujuan pemrosesan data untuk melanjutkan. | Tick the data processing consent box to continue. | UI |

## 13. Footer

| Kunci | Bahasa Indonesia | English | Status |
|---|---|---|---|
| `footer.about` | Asosiasi Inovasi Teknologi Koperasi dan UKM. Kolaborasi, inovasi, dan bisnis untuk transformasi digital koperasi dan UKM Indonesia. | Association of Technology Innovation for Cooperatives and SMEs. Collaboration, innovation, and business for the digital transformation of Indonesia's cooperatives and SMEs. | **Usulan** |
| `footer.colOrg` | Organisasi | Organization | UI |
| `footer.orgLinks.0` | Tentang AVITEK | About AVITEK | UI |
| `footer.orgLinks.1` | Struktur organisasi | Organizational structure | UI |
| `footer.orgLinks.2` | Anggota pendiri | Founding members | UI |
| `footer.orgLinks.3` | Tata kelola & legal | Governance & legal | UI |
| `footer.colProgram` | Program | Programs | UI |
| `footer.programLinks.0` | Program | Programs | UI |
| `footer.programLinks.1` | Kemitraan | Partnership | UI |
| `footer.programLinks.2` | Acara | Events | UI |
| `footer.programLinks.3` | Wawasan | Insights | UI |
| `footer.colJoin` | Bergabung | Get involved | UI |
| `footer.joinLinks.0` | Keanggotaan | Membership | UI |
| `footer.joinLinks.1` | Direktori anggota | Member directory | UI |
| `footer.joinLinks.2` | Ajukan kemitraan | Propose a partnership | UI |
| `footer.joinLinks.3` | Kontak | Contact | UI |
| `footer.copyright` | © 2026 AVITEK KUKM | © 2026 AVITEK KUKM | Nama diri |
| `footer.privacy` | Kebijakan privasi | Privacy policy | UI |
| `footer.mockFlag` | Mockup v0.4 bilingual, belum final | Mockup v0.4 bilingual, not final | UI |

---

## 14. Data yang masih diminta ke pengurus

- [ ] Logo resmi (SVG)
- [ ] Konfirmasi hex Digital Teal (`#087F8C` sesuai RGB, atau `#0B7F8C` sesuai label)
- [ ] **Nama resmi AVITEK KUKM dalam bahasa Inggris**
- [ ] **Peninjau terjemahan EN** (penutur fasih, idealnya yang biasa berkomunikasi dengan mitra Korea)
- [ ] Domain dan email sekretariat
- [ ] Persetujuan semua konten **Usulan** (ID dan EN sekaligus)
- [ ] Visi dan misi resmi (ID dan EN)
- [ ] Struktur pengurus dan anggota pendiri, beserta nama dan gelar yang benar
- [ ] Izin tampil 3 koperasi dan logo mitra
- [ ] Angka realisasi tenaga ahli terlatih
- [ ] Judul buku yang diserahkan saat peluncuran (ID/EN)
- [ ] Status legal: akta dan SK Kemenkumham
- [ ] Kebijakan privasi (ID dan EN), ditinjau pengurus

## Sumber

- **[S1]** Surat Undangan Launching AVITEK KUKM, 28 Oktober 2026, beserta daftar undangan dan agenda (dokumen internal).
- **[S2]** RM.id, MoU Kemenkop UKM–Korsel. https://rm.id/baca-berita/ekonomi-bisnis/162513/hadirkan-transformasi-ukm-unggul-berbasis-teknologi-ri-dan-korsel-teken-mou
- **[S3]** Asia Economy (2023): target 30 UKM, 130+ ahli, pusat dukungan. https://www.asiae.co.kr/en/article/2023030209563250407
- **[S4]** ANTARA News (EN): hibah USD 5,5 juta. https://en.antaranews.com/news/274152/homepage-v2.html
- **[S5]** Tsinghua G20E: USD 5,5 juta ≈ KRW 7,2 miliar ≈ Rp84 miliar. https://www.g20e.tsinghua.edu.cn/EN/contents/1275/2019.html
- **[S6]** BINUS @Bekasi: peresmian SFTC 2 Desember 2024. https://binus.ac.id/bekasi/?p=6566
- **[S7]** BINUS @Bekasi: Seminar Smart Factory 2025. https://binus.ac.id/bekasi/?p=10019
- **[S8]** Asia Economy: pelatihan di Korea 12–23 Mei 2025. https://www.asiae.co.kr/en/article/2025052310315852880
- **[S9]** Asia Economy: seminar 25 Juni 2025 di SFTC. https://www.asiae.co.kr/en/article/2025062608112355242
- **[S10]** SWA: seminar 18 Juni 2026, BINUS Alam Sutera. https://swa.co.id/read/474045/innobiz-korea-dampingi-12-perusahaan-indonesia-terapkan-smart-factory
- **[S11]** Wowtale: SFTC sebagai pusat pendidikan smart factory pertama di Indonesia. https://en.wowtale.net/2024/12/03/228099/
