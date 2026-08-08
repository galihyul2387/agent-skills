---
name: final-testing-qa-complete-best-practices
description: Panduan lengkap dan terstruktur untuk tahap Final Testing & Quality Assurance, mencakup perencanaan skenario uji, pelaksanaan SIT dan UAT, manajemen dokumen pengujian formal, otomatisasi dokumen berbasis AI & CI/CD, hingga Definition of Done.
---

# Panduan Tahap: Final Testing, SIT, UAT, Document Automation & Quality Assurance

Tahap ini berfokus pada pengujian sistem secara menyeluruh di lingkungan pengujian (*staging*), mulai dari pengujian integrasi sistem (**SIT**), pengujian penerimaan pengguna (**UAT**), pembuatan dan pengelolaan dokumen pengujian formal secara manual maupun otomatis (AI & CI/CD), guna memastikan aplikasi stabil, aman, dan siap dirilis.

## 1. Langkah-Langkah Strategis Testing

### Perencanaan Kasus Uji (Test Cases Planning)
*   **Penyusunan Skenario Pengujian:** Buat matriks *Test Cases* berdasarkan *User Story* dan *PRD* dari tahap *Planning*. Uji fungsionalitas fitur utama (*core features*) serta alur kritis pengguna (*happy path & edge cases*).
*   **Fokus Verifikasi:** Pastikan alur integrasi seperti *Single Session*, pembatasan *tab*, proteksi *bot*, dan manajemen token masuk ke dalam skenario utama.

### System Integration Testing (SIT)
SIT dilakukan oleh tim QA/Engineering untuk menguji keterpaduan seluruh komponen sistem (Frontend, API Gateway, Microservices, dan Database):
*   **Pengujian Alur Data Lintas Layanan:** Memastikan komunikasi antar *microservices* berjalan lancar tanpa ada *payload* yang terpotong atau salah format.
*   **Pengujian Batas & Ketahanan Sistem:** Menguji respons sistem terhadap beban data besar, lonjakan akses singkat (*rate limiting*), serta mekanisme pemulihan saat terjadi gangguan koneksi.
*   **Security & Compliance Checks:** Memvalidasi ulang keberadaan *HTTP Security Headers*, enkripsi data, dan ketahanan terhadap injeksi.

### User Acceptance Testing (UAT)
UAT dilakukan oleh *Product Owner*, *Business Analyst*, atau perwakilan pengguna akhir (*End-Users*) untuk memastikan sistem sesuai dengan kebutuhan bisnis:
*   **Validasi Alur Bisnis (Business Scenarios):** Menguji aplikasi dari sudut pandang pengalaman pengguna nyata (*User Experience*).
*   **Sign-Off Persetujuan Bisnis:** Meminta persetujuan resmi (*sign-off*) dari pihak pemangku kepentingan setelah seluruh skenario bisnis utama dinyatakan berhasil (*Passed*).

---

## 2. Dokumen & Pelaporan Pengujian (Testing Documents)

Setiap sesi pengujian wajib menghasilkan dan mendokumentasikan laporan formal berikut:
*   **Test Plan (Rencana Pengujian):** Dokumen strategi yang merangkum ruang lingkup (*scope*), jadwal, lingkungan pengujian, dan pembagian sumber daya.
*   **Test Cases Matrix (SIT & UAT Test Cases):** Lembar kerja terstruktur berisi ID uji, langkah-langkah eksekusi, data masukan, hasil yang diharapkan (*Expected Result*), dan status aktual (*Pass/Fail*).
*   **Bug Report / Issue Log:** Catatan tiket pelacakan (Jira/GitHub Issues) yang memuat tingkat keparahan (*Severity*: Critical, High, Medium, Low), langkah reproduksi (*Steps to Reproduce*), serta bukti tangkapan layar.
*   **Test Summary Report & UAT Sign-Off:** Dokumen penutup ringkasan hasil keseluruhan pengujian yang disetujui melalui tanda tangan atau persetujuan resmi (*sign-off*) dari *Product Owner*.

---

## 3. Pengujian Performa & Beban (Performance & Load Testing)

Memastikan aplikasi mampu menangani beban pengguna yang diharapkan dan tetap responsif:

### Strategi Pengujian Performa
*   **Load Testing:** Simulasikan beban pengguna normal (*expected load*) untuk mengukur waktu respons, *throughput*, dan penggunaan sumber daya menggunakan alat bantu seperti **k6**, **JMeter**, atau **Artillery**.
*   **Stress Testing:** Tingkatkan beban secara bertahap melampaui kapasitas normal untuk menemukan titik batas (*breaking point*) sistem dan memastikan degradasi terjadi secara terkendali (*graceful degradation*).
*   **Metrik Target:** Tentukan ambang batas performa yang harus dicapai:
    *   Response Time P95 < 1 detik untuk API utama.
    *   Error Rate < 1% pada beban normal.
    *   Throughput minimal sesuai estimasi jumlah pengguna bersamaan.

---

## 4. Pengujian Keamanan (Security Testing)

Memastikan aplikasi terlindungi dari kerentanan keamanan yang umum sebelum rilis:

### Strategi Pengujian Keamanan
*   **Automated Security Scanning:** Jalankan pemindaian kerentanan otomatis menggunakan alat seperti **OWASP ZAP**, **Burp Suite Community**, atau **Snyk** untuk mendeteksi celah keamanan umum (XSS, SQL Injection, CSRF, dll).
*   **Dependency Vulnerability Audit:** Jalankan `npm audit` dan pemindaian *Docker image* (`docker scout` / `Trivy`) untuk mendeteksi kerentanan pada pustaka pihak ketiga.
*   **Penetration Testing (Opsional):** Untuk aplikasi dengan data sensitif, pertimbangkan pengujian penetrasi oleh tim keamanan atau pihak ketiga yang bersertifikasi.
*   **Verifikasi OWASP Top 10:** Pastikan aplikasi terlindungi dari 10 risiko keamanan teratas versi OWASP terbaru.

---

## 5. Pengujian Regresi (Regression Testing)

Memastikan perubahan kode baru tidak merusak fitur yang sudah berjalan dengan baik:

### Strategi Regresi
*   **Automated Regression Suite:** Bangun koleksi *test suite* regresi otomatis yang mencakup seluruh fitur kritis dan alur bisnis utama. Jalankan secara rutin di pipeline CI/CD.
*   **Smoke Testing:** Jalankan *smoke test* cepat setelah setiap deployment untuk memverifikasi bahwa fitur inti masih berfungsi.
*   **Visual Regression (Opsional):** Gunakan alat seperti **Percy** atau **Chromatic** untuk mendeteksi perubahan visual yang tidak disengaja pada komponen UI.

---

## 6. Otomatisasi Dokumen Pengujian (AI & CI/CD Automation)

Untuk memangkas waktu administratif, proses pembuatan dokumen pengujian diotomatisasi melalui pendekatan berikut:
*   **Generate Test Cases & Test Plan via AI:** Masukkan dokumen PRD atau *User Story* ke model AI (*Cursor/Claude*) untuk menghasilkan draf Matriks *Test Cases* (SIT & UAT) secara instan.
*   **Automated Execution Reports:** Manfaatkan *testing framework* (seperti Jest, Playwright, atau Cypress) untuk menghasilkan laporan eksekusi tes otomatis (format JUnit XML / HTML Report) setiap kali pengujian berjalan.
*   **Auto-Generated Bug Reports & Summary:** Integrasikan hasil *CI/CD pipeline* agar kegagalan tes otomatis membuat tiket *Bug Report* baru dan menyusun *Test Summary Report* tanpa pencatatan manual.

---

## ⚡ Command Cheat Sheet Lintas Bahasa

### TypeScript / JavaScript (E2E & UI)
*   `npx playwright test --reporter=html` — Menjalankan pengujian E2E dengan laporan HTML.
*   `npm run test:e2e` / `npx cypress run` — Menjalankan pengujian integrasi antarmuka browser.

### Backend Testing (Multi-Language)
*   `pytest -v --cov=app` — Menjalankan test suite Python dengan rincian coverage.
*   `go test -v -race -cover ./...` — Menjalankan unit test Go dengan deteksi *race condition*.
*   `./gradlew test jacocoTestReport` — Menjalankan test suite Java/Kotlin dengan JaCoCo.
*   `dotnet test --collect:"XPlat Code Coverage"` — Menjalankan test suite C# / .NET.
*   `./vendor/bin/pest --coverage` — Menjalankan framework test modern PHP Pest/PHPUnit.
*   `cargo test --all-targets` — Menjalankan seluruh unit dan integration test di Rust.

### Performance & Security Testing
*   `k6 run load-test.js` — Menjalankan simulasi pengujian performa menggunakan k6.
*   `npx zap-cli quick-scan http://localhost:3000` — Menjalankan pemindaian keamanan cepat OWASP ZAP.

## 🛠️ Troubleshooting Umum
*   **Environment Mismatch:** Pastikan variabel lingkungan (*environment variables*) pada server pengujian sama persis dengan spesifikasi produksi.
*   **Flaky Tests:** Perbaiki skrip pengujian otomatis yang sering gagal secara acak akibat latensi jaringan.

## 📐 Standar Penamaan (Naming Conventions)
*   **Penamaan File Dokumen:** Menggunakan format *kebab-case* yang deskriptif (contoh: `test-plan-v1.0.md`, `sit-test-cases-matrix.xlsx`, `test-summary-report.pdf`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Perencanaan & Dokumen Uji:**
    *   [ ] Menyusun dokumen *Test Plan* dan matriks *Test Cases* (SIT & UAT), baik secara manual maupun menggunakan bantuan otomatisasi AI.
*   **Pelaksanaan SIT (System Integration Testing):**
    *   [ ] Menyelesaikan seluruh skenario *SIT* (integrasi Frontend, API Gateway, Microservices, dan basis data).
    *   [ ] Memastikan pengujian fitur keamanan (*Single Session*, *Security Headers*, *Rate Limiting*) berhasil lolos.
*   **Pelaksanaan UAT (User Acceptance Testing):**
    *   [ ] Melakukan sesi *UAT* bersama *Product Owner* / *Stakeholders*.
    *   [ ] Mendapatkan *sign-off* atau persetujuan bisnis secara resmi pada dokumen ringkasan.
*   **Pengujian Performa & Keamanan:**
    *   [ ] Menjalankan *load testing* dan memastikan metrik performa memenuhi ambang batas target.
    *   [ ] Menjalankan pemindaian keamanan otomatis (OWASP ZAP / Snyk) dan memperbaiki temuan kritis.
    *   [ ] Membangun *regression test suite* otomatis untuk fitur inti.
*   **Resolusi Bug & Status Rilis:**
    *   [ ] Memperbaiki seluruh *bug* dengan kategori *Critical* dan *High* berdasarkan *Bug Report*.
    *   [ ] Menyusun *Test Summary Report* dan menyatakan aplikasi *Production Ready*.