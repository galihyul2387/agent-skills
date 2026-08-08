---
name: planning-prd-best-practices
description: Panduan terstruktur untuk tahap Planning dan penyusunan PRD (Product Requirements Document) sesuai best practice pengembangan perangkat lunak dan keamanan awal.
---

# Panduan Tahap: Planning & PRD

Tujuan dari tahap ini adalah menyusun fondasi proyek yang jelas, terstruktur, dan terukur sebelum masuk ke tahap desain atau penulisan kode (*coding*).

## Langkah-Langkah Strategis

### 1. Definisi Ruang Lingkup (Scoping)
*   Tentukan fitur utama (*core features*) yang wajib ada pada rilis pertama (MVP - *Minimum Viable Product*).
*   Batasi fitur sekunder untuk dikerjakan pada tahap selanjutnya guna menghindari *scope creep*.

### 2. User Story & Use Cases (Termasuk Kebijakan Sesi & Bahasa Dokumen)
*   **Pilihan Bahasa Dokumen PRD:** Dokumen PRD dan *User Stories* dapat disusun dalam **Bahasa Indonesia** atau **English** sesuai target pembaca / stakeholders proyek.
*   **Petakan Pengguna & Alur Kerja:** Petakan siapa pengguna aplikasi (*user persona*) dan skenario interaksi sistem (contoh: alur login, alur transaksi).
*   **Definisi Kebijakan Sesi:** Rencanakan aturan bahwa setiap akun hanya diizinkan aktif di **1 perangkat/browser** dalam satu waktu dan membatasi penggunaan secara bersamaan di banyak tab (*Single Session & Tab Concurrency Control*).

### 3. Pemilihan Tech Stack & Kompatibilitas
*   Tentukan teknologi frontend dan backend (misal: React, HTML/CSS, Database, API layer).
*   Tentukan target dukungan *browser* utama (misal: Chrome, Firefox, Safari, Edge) yang harus didukung oleh aplikasi.
*   Gunakan teknologi yang didukung oleh ekosistem AI (*Cursor, Claude Code, Codex*) untuk efisiensi.

## Keamanan Sejak Awal (Security by Design)

*   **Manajemen Rahasia:** Rencanakan penggunaan *Environment Variables* (`.env`) untuk menyimpan kunci API dan kredensial sensitif. Jangan pernah memasukkan data sensitif ke dalam *source code*.
*   **Hak Akses:** Terapkan prinsip *Least Privilege* dalam merancang akses ke database dan API.
*   **Privasi Data:** Pastikan perencanaan penyimpanan data mematuhi standar enkripsi dasar.

---

## ⚡ Command Cheat Sheet
*   `npx create-react-app ./` / `npx create-vite@latest ./` — Inisialisasi proyek frontend baru.
*   `npx create-next-app@latest ./` — Inisialisasi proyek Next.js baru.
*   `npm init -y` — Inisialisasi proyek backend Node.js baru.
*   `git init && git checkout -b main` — Inisialisasi repositori Git dengan branch utama.
*   `cp .env.example .env` — Menyiapkan file variabel lingkungan lokal dari template.

## 🛠️ Troubleshooting Umum
*   **Versi Node.js Tidak Sesuai:** Gunakan `nvm` (Node Version Manager) untuk mengelola dan beralih antar versi Node.js sesuai kebutuhan proyek.
*   **Konflik Dependensi Saat Instalasi:** Hapus folder `node_modules` dan file `package-lock.json`, lalu jalankan `npm install` ulang.
*   **File `.env` Tidak Terbaca:** Pastikan file `.env` berada di root proyek dan tidak memiliki spasi berlebih pada nama variabel.

## 📐 Standar Penamaan (Naming Conventions)
*   **Dokumen PRD & Planning:** Menggunakan format *kebab-case* (contoh: `prd-elaporan-v1.0.md`, `user-story-auth-module.md`).
*   **Nama Proyek & Repositori:** Menggunakan format *kebab-case* huruf kecil (contoh: `elaporan-ui`, `auth-service`).
*   **Variabel Environment:** Menggunakan format *SCREAMING_SNAKE_CASE* (contoh: `DATABASE_URL`, `JWT_SECRET`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Definisi Ruang Lingkup (Scoping):**
    *   [ ] Menentukan fitur utama (*core features*) yang wajib ada pada rilis pertama (MVP - *Minimum Viable Product*).
    *   [ ] Membatasi fitur sekunder untuk dikerjakan pada tahap selanjutnya guna menghindari *scope creep*.
*   **User Story & Kebijakan Sesi:**
    *   [ ] Memetakan siapa pengguna aplikasi (*user persona*).
    *   [ ] Menuliskan skenario bagaimana pengguna berinteraksi dengan sistem (contoh: alur login, alur transaksi).
    *   [ ] Mendefinisikan aturan *Single Session* (1 akun hanya untuk 1 perangkat/browser aktif dan pencegahan multi-tab).
*   **Pemilihan Tech Stack & Target Browser:**
    *   [ ] Menentukan teknologi frontend dan backend (misal: React, HTML/CSS, Database, API layer).
    *   [ ] Menetapkan daftar *browser* utama yang wajib didukung aplikasinya.
    *   [ ] Memanfaatkan teknologi yang didukung oleh ekosistem AI (*Cursor, Claude Code, Codex*) untuk efisiensi.
*   **Keamanan Sejak Awal (Security by Design):**
    *   [ ] Merencanakan penggunaan *Environment Variables* (`.env`) untuk menyimpan kunci API dan kredensial sensitif agar tidak masuk ke dalam *source code*.
    *   [ ] Menerapkan prinsip *Least Privilege* dalam merancang hak akses ke database dan API.
    *   [ ] Memastikan perencanaan penyimpanan data mematuhi standar enkripsi dasar dan privasi.