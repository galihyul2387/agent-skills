---
name: code-review-standards-best-practices
description: Panduan code review, coding standards, documentation standards, dan quality gates untuk menjaga kualitas kode tim secara konsisten.
---

# Panduan Tahap: Code Review & Standards

Tahap ini berfokus pada penerapan proses *code review* yang efektif, standar penulisan kode (*coding standards*) yang konsisten, standar dokumentasi, serta *quality gates* yang memastikan setiap baris kode yang masuk ke repositori memenuhi kriteria kualitas tinggi.

## 1. Proses Code Review

### Tujuan Code Review
*   **Penemuan Bug Dini:** Mengidentifikasi *bug*, celah keamanan, atau *logic flaw* sebelum kode masuk ke branch utama.
*   **Knowledge Sharing:** Menyebarkan pemahaman kode antar anggota tim — setiap orang belajar dari kode rekan satu tim.
*   **Konsistensi Kode:** Memastikan seluruh kode mengikuti standar yang telah disepakati bersama.
*   **Mentoring:** Memberikan kesempatan bagi developer senior untuk membimbing developer junior melalui *feedback* konstruktif.

### Etika & Prinsip Review
*   **Bersifat Konstruktif:** Berikan *feedback* yang spesifik, actionable, dan sopan. Fokus pada kode, bukan pada orangnya.
*   **Apresiasi Kode Baik:** Berikan pujian ketika menemukan solusi yang elegan atau *refactoring* yang baik — review bukan hanya tentang menemukan kesalahan.
*   **Jelaskan Alasan:** Selalu sertakan alasan di balik saran perubahan (contoh: "Gunakan `const` di sini karena nilainya tidak pernah berubah, sesuai dengan prinsip *immutability*").
*   **Pertanyaan, Bukan Perintah:** Sampaikan saran dalam bentuk pertanyaan jika tidak yakin (contoh: "Apakah ada alasan khusus menggunakan `setTimeout` di sini, bukan `debounce`?").

---

## 2. Checklist Review Per Kategori

### Fungsionalitas & Logika
*   [ ] Apakah kode menyelesaikan masalah sesuai dengan *requirement* / *user story*?
*   [ ] Apakah semua *edge cases* dan kondisi batas sudah ditangani?
*   [ ] Apakah *error handling* sudah tepat dan informatif (tidak hanya `catch(e) {}`)?
*   [ ] Apakah ada potensi *race condition* atau masalah *concurrency*?

### Keamanan
*   [ ] Apakah tidak ada kredensial atau *secret* yang ter-*hardcode*?
*   [ ] Apakah input dari pengguna sudah divalidasi dan disanitasi?
*   [ ] Apakah *SQL queries* menggunakan *prepared statements* / *parameterized queries*?
*   [ ] Apakah data sensitif sudah dienkripsi atau di-*hash* dengan benar?
*   [ ] Apakah endpoint baru sudah dilindungi dengan autentikasi dan otorisasi yang tepat?

### Performa
*   [ ] Apakah ada *query* N+1 atau panggilan database yang tidak efisien?
*   [ ] Apakah ada potensi *memory leak* (event listener tidak dibersihkan, langganan tidak di-*unsubscribe*)?
*   [ ] Apakah *loop* atau operasi berat sudah dioptimalkan?
*   [ ] Apakah data yang besar sudah menggunakan *pagination* atau *lazy loading*?

### Kualitas & Keterbacaan Kode
*   [ ] Apakah penamaan variabel, fungsi, dan class sudah deskriptif dan jelas?
*   [ ] Apakah fungsi/method sudah cukup kecil dan hanya memiliki satu tanggung jawab?
*   [ ] Apakah ada *code duplication* yang bisa di-*refactor* menjadi fungsi/utilitas bersama?
*   [ ] Apakah ada *magic numbers* atau *magic strings* yang seharusnya menjadi konstanta bernama?
*   [ ] Apakah komentar yang ada masih relevan dan tidak *outdated*?

### Testing
*   [ ] Apakah perubahan disertai dengan *unit test* yang memadai?
*   [ ] Apakah *test cases* mencakup *happy path* dan *edge cases*?
*   [ ] Apakah *test* bersifat independen (tidak bergantung pada urutan eksekusi atau state eksternal)?

---

## 3. Coding Standards

### JavaScript / TypeScript Standards
*   **Formatter:** Gunakan **Prettier** sebagai *code formatter* otomatis dengan konfigurasi yang seragam di seluruh tim.
*   **Linter:** Gunakan **ESLint** dengan *rule set* yang ketat (seperti `eslint:recommended`, `plugin:@typescript-eslint/recommended`) untuk mendeteksi masalah secara otomatis.
*   **TypeScript Strict Mode:** Aktifkan `strict: true` pada `tsconfig.json` untuk memaksimalkan keamanan tipe data.

### Prinsip Penulisan Kode Bersih (Clean Code)
*   **DRY (Don't Repeat Yourself):** Hindari duplikasi kode — ekstrak logika berulang menjadi fungsi, utilitas, atau *hook* yang reusable.
*   **KISS (Keep It Simple, Stupid):** Pilih solusi yang sederhana dan mudah dipahami daripada solusi yang *over-engineered*.
*   **YAGNI (You Aren't Gonna Need It):** Jangan menulis kode untuk kebutuhan masa depan yang belum pasti — tambahkan saat benar-benar dibutuhkan.
*   **SOLID Principles:** Terapkan prinsip SOLID terutama *Single Responsibility* dan *Dependency Inversion* pada arsitektur modul.

### Komentar & Dokumentasi Inline
*   **Kapan Berkomentar:** Tulis komentar hanya untuk menjelaskan *mengapa* (alasan keputusan), bukan *apa* (apa yang dilakukan kode — biarkan kode yang berbicara).
*   **TODO/FIXME:** Gunakan tag `// TODO:` untuk pekerjaan yang perlu diselesaikan dan `// FIXME:` untuk kode yang bermasalah dan perlu diperbaiki. Sertakan *issue tracker ID* jika memungkinkan.
*   **JSDoc / TSDoc:** Gunakan format JSDoc atau TSDoc untuk mendokumentasikan fungsi publik, parameter, dan return type.

---

## 4. Documentation Standards

### README.md
Setiap repositori atau *microservice* wajib memiliki `README.md` yang berisi:
*   📋 **Deskripsi Proyek:** Penjelasan singkat tentang apa yang dilakukan layanan ini.
*   ⚙️ **Prasyarat:** Versi Node.js, database, dan dependensi sistem yang dibutuhkan.
*   🚀 **Cara Menjalankan:** Langkah-langkah instalasi dan menjalankan proyek secara lokal.
*   🧪 **Cara Menjalankan Test:** Perintah untuk menjalankan unit test dan integration test.
*   📖 **Dokumentasi API:** Link ke Swagger/OpenAPI atau penjelasan endpoint utama.
*   🏗️ **Arsitektur:** Diagram atau penjelasan arsitektur tingkat tinggi.

### CHANGELOG.md
*   Dokumentasikan setiap perubahan yang dirilis menggunakan format **Keep a Changelog**:
    *   `### Added` — Fitur baru.
    *   `### Changed` — Perubahan pada fitur yang sudah ada.
    *   `### Fixed` — Perbaikan bug.
    *   `### Removed` — Fitur atau kode yang dihapus.
    *   `### Security` — Perbaikan kerentanan keamanan.

### API Documentation
*   **Swagger/OpenAPI:** Dokumentasikan seluruh endpoint API menggunakan spesifikasi OpenAPI 3.x.
*   **Postman Collection:** Sediakan *Postman Collection* yang siap digunakan untuk pengujian API secara manual.
*   **Versioning:** Pastikan dokumentasi API selalu sinkron dengan versi API yang aktif.

---

## 5. Quality Gates (Automated Enforcement)

### Pre-Commit Hooks
*   **Husky + lint-staged:** Konfigurasikan *pre-commit hooks* untuk menjalankan *linter* dan *formatter* secara otomatis pada file yang diubah sebelum commit berhasil dibuat.
*   **Commit Message Validation:** Gunakan `commitlint` untuk memvalidasi format *commit message* agar sesuai dengan *Conventional Commits*.

### CI/CD Quality Gates
*   **Linting Gate:** Pipeline wajib gagal jika terdapat error *linter* yang tidak terselesaikan.
*   **Test Coverage Gate:** Pipeline wajib gagal jika *code coverage* di bawah ambang batas minimum (misal 80%).
*   **SonarQube Gate:** Pipeline wajib gagal jika analisis SonarQube menemukan *Bugs*, *Vulnerabilities*, atau tidak mencapai *Quality Gate* yang ditetapkan.
*   **Security Scan Gate:** Pipeline wajib gagal jika ditemukan kerentanan dengan tingkat *High* atau *Critical*.

---

## ⚡ Command Cheat Sheet
*   `npx prettier --write .` — Memformat seluruh file kode secara otomatis menggunakan Prettier.
*   `npx eslint . --fix` — Menjalankan ESLint dan memperbaiki masalah yang bisa di-*autofix*.
*   `npx husky init` — Menginisialisasi Husky untuk *Git hooks*.
*   `npx commitlint --edit` — Memvalidasi format commit message terakhir.
*   `npx lint-staged` — Menjalankan linter hanya pada file yang ada di *staging area*.

## 🛠️ Troubleshooting Umum
*   **Pre-commit Hook Tidak Berjalan:** Pastikan `husky` sudah terinstal dan direktori `.husky/` berisi script hook yang sesuai. Jalankan `npx husky init` jika perlu.
*   **ESLint dan Prettier Berkonflik:** Gunakan `eslint-config-prettier` untuk menonaktifkan *rules* ESLint yang bertabrakan dengan Prettier.
*   **Commit Ditolak oleh Commitlint:** Periksa format commit message — harus mengikuti pola `type(scope): subject`. Gunakan `npx commitlint --edit` untuk debug.
*   **SonarQube False Positive:** Tandai *issue* sebagai *Won't Fix* di dashboard SonarQube dengan justifikasi yang jelas, lalu konfigurasi *exclusion* jika diperlukan.

## 📐 Standar Penamaan (Naming Conventions)
*   **Konfigurasi Linter:** Menggunakan format standar (`.eslintrc.json`, `.prettierrc`, `commitlint.config.js`).
*   **Label PR Review:** Menggunakan label deskriptif (`needs-review`, `approved`, `changes-requested`, `wip`).
*   **Komentar Review:** Menggunakan prefix untuk kategorisasi (`[nit]` untuk minor, `[blocking]` untuk wajib diperbaiki, `[question]` untuk pertanyaan).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Code Review Process:**
    *   [ ] Menetapkan dan mendokumentasikan proses code review (minimal 1 approval, automated checks wajib lolos).
    *   [ ] Menyusun template Pull Request yang standar di repositori.
    *   [ ] Mendistribusikan checklist review kepada seluruh reviewer.
*   **Coding Standards:**
    *   [ ] Mengonfigurasi Prettier dan ESLint dengan *rule set* yang disepakati tim.
    *   [ ] Mengaktifkan `strict: true` pada TypeScript (jika menggunakan TS).
    *   [ ] Mendokumentasikan prinsip penulisan kode (DRY, KISS, YAGNI) di dalam README atau wiki tim.
*   **Documentation Standards:**
    *   [ ] Menyusun `README.md` yang lengkap untuk setiap repositori / *microservice*.
    *   [ ] Membuat dan memelihara `CHANGELOG.md` untuk pencatatan perubahan rilis.
    *   [ ] Mendokumentasikan API menggunakan Swagger/OpenAPI.
*   **Quality Gates:**
    *   [ ] Mengonfigurasi *pre-commit hooks* (Husky + lint-staged + commitlint).
    *   [ ] Menerapkan *quality gates* di CI/CD (linting, test coverage, SonarQube, security scan).
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Seluruh anggota tim memahami dan mempraktikkan standar code review.
    *   [ ] Tidak ada kode yang masuk ke branch utama tanpa melalui proses review dan automated checks.
