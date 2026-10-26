# Template Portofolio Formal & Interaktif (Web Developer)

Template portofolio web modern, formal, dan interaktif yang dirancang khusus untuk kebutuhan melamar pekerjaan (rekrutmen HRD & Tim Teknis). Dibuat menggunakan **HTML5 semantik murni**, **CSS3 modern**, dan **JavaScript interaktif** tanpa dependensi framework eksternal, sehingga sangat ringan dan cepat diakses di semua ukuran layar (Mobile, Tablet, Desktop).

---

## 📁 Struktur Berkas

```text
Portofolio diri/
├── index.html          # Struktur semantik HTML5, meta tag SEO, & 3 navigasi utama
├── style.css           # Desain modern, variabel CSS (Dark/Light mode), animasi halus
├── script.js           # Logika interaktif: selector pesan WA, filter proyek, toast copy
├── assets/             # Aset gambar & ilustrasi beresolusi tinggi
│   ├── profile.jpg     # Foto formal profil Anda
│   ├── project1.jpg    # Tangkapan layar proyek HTML & CSS
│   └── project2.jpg    # Tangkapan layar proyek JavaScript interaktif
└── README.md           # Panduan penggunaan dan kustomisasi
```

---

## 🧭 3 Bagian Navigasi Utama (Sesuai Kebutuhan)

1. **Tentang Saya (`#tentang-saya`)**
   - **Hero Landing Page**: Memperkenalkan diri secara formal, peran (*Web Developer / Junior Frontend Specialist*), status ketersediaan kerja (*badge* aktif), dan ringkasan nilai tambah kandidat.
   - **Aksi Cepat**: Tombol *Hubungi Rekrutmen*, *Lihat Pengalaman*, dan *Unduh CV (PDF)*.
   - **Media Sosial**: Kartu interaktif resmi untuk **Instagram** (`@adinda.dev`) dan **TikTok** (`@codinglife_id`) dengan efek transisi halus.
   - **Visual Avatar**: Menampilkan foto formal dengan efek *frame*, *ambient glow*, dan *floating badge* penguasaan teknologi.

2. **Pengalaman (`#pengalaman`)**
   - **Rincian Kompetensi Web Programming**:
     - **HTML5 (Lengkap)**: Semantik W3C, aksesibilitas a11y, form validation, SEO metadata.
     - **CSS3 (Lengkap)**: Flexbox, CSS Grid 2D, Fluid Mobile-First Media Queries, CSS Variables, animasi 60 FPS.
     - **JavaScript (Sedikit / Esensial)**: Manipulasi DOM, penanganan event, penyimpanan preferensi tema (*localStorage*), dan validasi interaktif.
   - **Filter Kategori Proyek**: Tombol interaktif untuk menyaring karya (*Semua*, *HTML & CSS Penuh*, *JavaScript Interaktif*).
   - **Jejak Langkah (Timeline)**: Riwayat pengalaman kerja *freelance* dan pelatihan profesional web frontend.

3. **Kontak Saya (`#kontak`)**
   - **Pilihan 1: GitHub**: Kartu profil teknis lengkap dengan tautan repositori, fitur kode bersih, dan tombol salin tautan profil ke *clipboard*.
   - **Pilihan 2: WhatsApp Interaktif**:
     - Dilengkapi **Pilihan Template Pesan Pembuka** untuk HR/Recruiter (Peluang Kerja/Interview, Tawaran Proyek, atau Diskusi Umum).
     - Menampilkan **Pratinjau Pesan Terformat** secara *live*.
     - Tombol aksi otomatis membuka aplikasi/WhatsApp Web dengan pesan terformat URL (`wa.me/...`).
     - Tombol salin nomor WhatsApp langsung.
   - **Kanal Tambahan**: Alamat email resmi dan lokasi domisili dengan tombol *Salin Email*.

---

## ✨ Fitur Interaktivitas & UX Ringan

- **Pengalih Tema (Dark / Light Mode)**: Memungkinkan perekrut membaca dengan kenyamanan visual pilihan mereka. Preferensi tersimpan otomatis di *browser local storage*.
- **Desain Adaptif & Fleksibel (Responsive)**: Tata letak otomatis menyesuaikan untuk layar *smartphone*, tablet, maupun monitor desktop dengan menu *drawer hamburger* pada mobile.
- **Scroll Active Indicator & Header Efek**: Menu navigasi otomatis menandai bagian halaman yang sedang dilihat saat digulir.
- **Salin ke Papan Klip (Copy to Clipboard)**: Dilengkapi notifikasi *toast* mengambang yang ramah pengguna.
- **Tombol WhatsApp Cepat Mengambang (Floating Action Button)** di sudut kanan bawah.
- **Tombol Kembali ke Atas (Back to Top)** yang muncul otomatis setelah menggulir halaman.

---

## 🛠️ Cara Menyesuaikan Data Diri Anda

1. **Mengganti Nama & Biodata**:
   - Buka `index.html` dengan teks editor (VS Code, Notepad, dll).
   - Cari teks `Adinda Pratama` dan ubah menjadi nama Anda.
   - Sesuaikan bio dan pengalaman pada bagian `<p class="hero-bio">`.

2. **Mengganti Foto Profil**:
   - Cukup ganti berkas `assets/profile.jpg` dengan foto formal Anda (format JPG/PNG dengan nama file yang sama).

3. **Mengganti Nomor WhatsApp & Akun Sosial**:
   - Pada `script.js`, ubah baris:
     ```javascript
     const whatsappPhone = '6281234567890'; // Ganti dengan nomor WhatsApp Anda (format 62...)
     ```
   - Pada `index.html`, ubah link Instagram (`https://instagram.com/username-anda`), TikTok (`https://tiktok.com/@username-anda`), dan GitHub (`https://github.com/username-anda`).

4. **Menghubungkan Berkas CV**:
   - Letakkan berkas CV Anda (misalnya `cv-nama-anda.pdf`) di folder `assets/`, lalu sambungkan tombol `#btn-download-cv` atau buat tautan langsung `href="assets/cv-nama-anda.pdf" download`.

---

## 🚀 Cara Menjalankan

Tidak memerlukan instalasi apa pun! Cukup klik ganda (double-click) berkas `index.html` untuk langsung melihat dan menguji portofolio di peramban (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
