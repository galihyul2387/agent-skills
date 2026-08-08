---
name: frontend-complete-development-best-practices
description: Panduan lengkap dan terstruktur untuk tahap Frontend Development, mencakup arsitektur Microfrontend, validasi input, kontrol sesi login tunggal lintas browser, keamanan frontend, hingga Definition of Done.
---

# Panduan Tahap: Frontend Development & Microfrontend

Tahap ini berfokus pada implementasi antarmuka, arsitektur modular, efisiensi AI, kontrol sesi lintas browser, dan keamanan standar industri untuk pengembangan perangkat lunak modern.

## 1. Langkah-Langkah Strategis Frontend

### Implementasi UI/UX & Pilihan Framework
*   **Pilihan Framework UI:** Gunakan framework modern berbasis komponen yang sesuai dengan spesifikasi proyek:
    *   **React / Next.js:** Ekosistem besar, Server Components, SSR/SSG, kaya pustaka pihak ketiga.
    *   **Vue / Nuxt:** Reaktivitas fleksibel, Composition API, performa tinggi, kurva belajar ramah.
    *   **Angular:** Framework *all-in-one* berskala enterprise dengan Dependency Injection & RxJS terintegrasi.
    *   **Svelte / SvelteKit:** Kompilasi *no-virtual-DOM*, bundle sangat kecil, reaktivitas bawaan (*run-time speed*).
    *   **Flutter / React Native:** Pilihan untuk pengembangan aplikasi mobile lintas platform (*cross-platform*).
*   **Komponen Modular & Reusable:** Susun struktur berbasis *Atomic Design* atau *Feature-driven layout* agar komponen mudah digunakan kembali.
*   **Responsivitas & Aksesibilitas:** Pastikan tampilan responsif di seluruh resolusi (mobile, tablet, desktop).

### Integrasi AI dalam Coding
*   Gunakan Cursor, Claude Code, atau Codex untuk mempercepat penulisan komponen dan *debugging*.
*   Pastikan kode yang dihasilkan AI ditinjau (*code review*) agar tetap bersih, terstandarisasi, dan efisien.

---

## 2. Kontrol Sesi Login: 1 Perangkat & 1 Tab Aktif (Lintas Browser)

Untuk menjaga keamanan akun dan mencegah benturan data (*state race condition*), terapkan mekanisme pembatasan sesi yang kompatibel di semua browser:

### Pencegahan Multi-Tab (Cross-Browser)
*   **BroadcastChannel API & LocalStorage Fallback:** 
    *   Gunakan `BroadcastChannel` sebagai teknologi utama yang didukung di semua browser modern untuk komunikasi antar tab.
    *   Sediakan *fallback* menggunakan `window.addEventListener('storage')` agar mekanisme deteksi multi-tab tetap berjalan lancar pada browser atau versi lama yang memiliki keterbatasan.
    *   Jika terdeteksi tab baru dibuka, arahkan (*redirect*) tab lama ke halaman peringatan agar hanya ada **1 tab aktif** yang diizinkan memproses sesi pengguna.

### Kontrol Sesi 1 Device (Single Active Session)
*   Sinkronkan status autentikasi secara *real-time* (menggunakan WebSocket atau *token heartbeat* dengan backend).
*   Jika pengguna melakukan login di perangkat atau browser lain (baik Chrome, Safari, Firefox, maupun Edge), sesi pada perangkat sebelumnya harus otomatis diputus (*force logout*).

---

## 3. Validasi & Sanitasi Input (Input Validation Best Practices)

Validasi di sisi frontend berfungsi untuk memberikan umpan balik (*feedback*) instan kepada pengguna, namun **bukan** sebagai pengganti validasi backend.

### Strategi Validasi Input
*   **Schema Validation:** Gunakan pustaka validasi skema yang kuat dan deklaratif (seperti **Zod** atau **Yup**) yang terintegrasi dengan *form library* (seperti **React Hook Form**) untuk performa optimal.
*   **Validasi Real-time & On-Submit:** Lakukan validasi secara proaktif guna memastikan format data sesuai aturan.
*   **Sanitasi Karakter Khusus:** Bersihkan input teks bebas dari karakter berbahaya sebelum dikirim melalui *payload* API.

---

## 4. Keamanan Frontend (Frontend Security Best Practices)

Mengingat kode berjalan di sisi klien (*browser*), area frontend sangat rentan terhadap manipulasi. Terapkan protokol keamanan berikut:

### Mitigasi Kerentanan Utama
*   **Pencegahan XSS (Cross-Site Scripting):** 
    *   Hindari fungsi yang mengeksekusi HTML mentah secara langsung (`dangerouslySetInnerHTML`) kecuali data sudah disanitasi menggunakan pustaka tepercaya (misal: DOMPurify).
*   **Manajemen Token & Autentikasi yang Aman:**
    *   Jangan pernah menyimpan *Access Token* jangka panjang atau *Refresh Token* di `localStorage` atau `sessionStorage`.
    *   Prioritaskan penyimpanan token sensitif di dalam **HttpOnly Cookies** (dikelola backend) atau gunakan memori aplikasi (*state* sementara).
*   **Content Security Policy (CSP):**
    *   Terapkan *header* CSP pada server untuk membatasi sumber eksekusi skrip di berbagai browser.

### Keamanan Data & Ketergantungan
*   **Validasi Berlapis:** Selalu pastikan validasi frontend didampingi oleh validasi ketat di sisi *server-side*.
*   **Audit Dependensi:** Jalankan pemindaian celah keamanan secara berkala menggunakan perintah seperti `npm audit`.

---

## 5. State Management (Manajemen State Aplikasi)

Pengelolaan state yang tepat sangat krusial untuk menjaga konsistensi data di seluruh komponen dan mencegah *prop drilling* yang berlebihan:

### Strategi Pemilihan State Management
*   **Local State (useState/useReducer):** Gunakan untuk state yang hanya relevan di dalam satu komponen atau komponen anak langsung.
*   **Context API:** Gunakan untuk state ringan yang perlu diakses secara global (seperti tema, bahasa, atau data pengguna yang sedang login) tanpa dependensi eksternal.
*   **State Library (Redux/Zustand/Jotai):** Gunakan untuk state kompleks yang memerlukan *predictable state mutations*, *middleware* (seperti *logging*, *async thunks*), atau *devtools* untuk debugging.
*   **Server State (React Query/SWR):** Gunakan untuk mengelola data yang bersumber dari API — menangani *caching*, *revalidation*, *pagination*, dan *optimistic updates* secara otomatis.

### Best Practices
*   **Hindari State Global Berlebihan:** Simpan hanya data yang benar-benar *shared* di state global; data lokal tetap di komponen.
*   **Normalisasi Data:** Untuk state yang kompleks (seperti daftar entitas), normalisasi struktur data agar mudah diperbarui tanpa duplikasi.
*   **Immutability:** Selalu buat salinan baru saat mengubah state, jangan mutasi objek secara langsung.

---

## 6. Aksesibilitas (Accessibility / a11y)

Aksesibilitas memastikan aplikasi dapat digunakan oleh semua pengguna, termasuk yang memiliki keterbatasan visual, motorik, atau kognitif:

### Standar WCAG 2.1
*   **Semantic HTML:** Gunakan elemen HTML yang sesuai fungsinya (`<button>` untuk aksi, `<nav>` untuk navigasi, `<main>` untuk konten utama) — hindari `<div>` untuk segala hal.
*   **ARIA Labels:** Tambahkan atribut `aria-label`, `aria-describedby`, atau `aria-live` pada elemen interaktif yang tidak memiliki teks yang jelas secara visual.
*   **Keyboard Navigation:** Pastikan seluruh fitur dapat diakses menggunakan keyboard saja (Tab, Enter, Escape, Arrow keys) tanpa memerlukan mouse.
*   **Kontras Warna:** Pastikan rasio kontras teks minimal **4.5:1** untuk teks normal dan **3:1** untuk teks besar, sesuai standar WCAG AA.
*   **Focus Indicator:** Jangan menghapus *outline* fokus pada elemen interaktif — sediakan indikator fokus yang jelas dan terlihat.

### Pengujian Aksesibilitas
*   **Automated Tools:** Gunakan alat pengujian otomatis (seperti `axe-core`, Lighthouse Accessibility Audit) untuk mendeteksi pelanggaran aksesibilitas.
*   **Screen Reader Testing:** Uji aplikasi menggunakan *screen reader* (seperti NVDA, VoiceOver) untuk memastikan alur navigasi dapat dipahami.

---

## 7. Arsitektur Microfrontend (Opsional untuk Skala Besar)

Pendekatan ini memecah aplikasi monolitik frontend menjadi beberapa bagian independen.

### Metode Integrasi & Isolasi
*   **Run-time Integration:** Gunakan *Module Federation* untuk memuat modul secara dinamis saat berjalan.
*   **CSS Scoping:** Gunakan CSS Modules atau Tailwind CSS dengan *prefix* untuk mencegah konflik gaya antar modul.
*   **Error Boundary:** Terapkan *Error Boundary* pada setiap microfrontend agar kegagalan satu modul tidak merusak aplikasi utama.

---

## ⚡ Command Cheat Sheet
*   `npm run dev` — Menjalankan lingkungan pengembangan lokal.
*   `npm run lint` — Memeriksa kesalahan penulisan kode (*linter*).
*   `npm audit` — Memeriksa kerentanan keamanan pada pustaka pihak ketiga.
*   `npm run build` — Melakukan kompilasi kode untuk tahap produksi.

## 🛠️ Troubleshooting Umum
*   **Port Terpakai:** Ubah konfigurasi port pada *dev server* atau gunakan perintah terminasi port yang relevan.
*   **Modul Tidak Ditemukan:** Hapus folder `node_modules` dan file *lock*, lalu jalankan ulang instalasi dependensi (`npm install`).

## 📐 Standar Penamaan (Naming Conventions)
*   **Komponen React:** Menggunakan *PascalCase* (contoh: `UserProfile.jsx`).
*   **File Utilitas/Helper:** Menggunakan *kebab-case* (contoh: `format-date.js`).
*   **Variabel & Fungsi:** Menggunakan *camelCase* (contoh: `getUserData`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Kontrol Sesi & Validasi (Lintas Browser):**
    *   [ ] Menerapkan pembatasan 1 tab aktif menggunakan `BroadcastChannel` dan *fallback* `localStorage` agar kompatibel di semua browser.
    *   [ ] Memastikan sistem mendeteksi *login* baru di perangkat/browser lain untuk memutus sesi lama secara otomatis.
    *   [ ] Menerapkan validasi skema input menggunakan pustaka terstandar (Zod/Yup).
*   **State Management & Performa:**
    *   [ ] Menerapkan strategi *state management* yang sesuai kebutuhan aplikasi (Context API / Redux / Zustand / React Query).
    *   [ ] Memastikan tidak ada *prop drilling* berlebihan pada komponen bersarang dalam.
*   **Implementasi UI/UX & AI:**
    *   [ ] Menyusun komponen UI yang modular dan *reusable*.
    *   [ ] Memastikan desain responsif di berbagai ukuran perangkat.
    *   [ ] Memanfaatkan *AI Pair Programming* dan melakukan *refactoring* kode hasil AI.
*   **Aksesibilitas (a11y):**
    *   [ ] Menerapkan *Semantic HTML* dan atribut ARIA pada elemen interaktif.
    *   [ ] Memastikan navigasi keyboard berfungsi pada seluruh fitur utama.
    *   [ ] Menjalankan audit aksesibilitas (Lighthouse / axe-core) dengan skor minimal 90.
*   **Keamanan Frontend:**
    *   [ ] Menerapkan sanitasi input untuk mencegah XSS.
    *   [ ] Memastikan tidak ada token/kredensial sensitif yang disimpan di `localStorage`.
    *   [ ] Menjalankan `npm audit` dan memastikan tidak ada celah keamanan tingkat tinggi.
    *   [ ] Menerapkan *Error Boundary* (jika menggunakan Microfrontend).
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Kode telah lolos pengecekan *linter* tanpa *error* kritikal.
    *   [ ] Tidak ada kredensial atau *API key* mentah yang terekspos di sisi klien.
    *   [ ] Aplikasi telah diuji secara fungsional di berbagai browser utama (Chrome, Firefox, Edge, Safari).