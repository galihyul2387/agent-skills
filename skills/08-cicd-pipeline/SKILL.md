---
name: cicd-pipeline-automation-best-practices
description: Panduan pembuatan dan optimasi CI/CD pipeline, automated testing gates, security scanning, dependency caching, dan automated deployment.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Panduan Tahap: CI/CD Pipeline (Continuous Integration & Continuous Deployment)

Tahap ini berfokus pada otomatisasi proses *build*, *test*, dan *deploy* melalui pipeline CI/CD yang andal, aman, dan efisien untuk memastikan setiap perubahan kode dapat dirilis dengan cepat dan percaya diri.

## 1. Langkah-Langkah Strategis CI/CD

### Desain Pipeline Architecture
*   **Pipeline Stages:** Rancang pipeline dengan tahapan yang jelas dan berurutan: `Lint` → `Build` → `Unit Test` → `Integration Test` → `Security Scan` → `Deploy to Staging` → `UAT` → `Deploy to Production`.
*   **Fail-Fast Principle:** Letakkan tahapan yang paling cepat gagal di awal pipeline (seperti *linting* dan *unit test*) agar umpan balik ke developer diperoleh secepat mungkin.
*   **Pipeline as Code:** Simpan seluruh konfigurasi pipeline dalam repositori kode (seperti `.github/workflows/`, `.gitlab-ci.yml`, atau `Jenkinsfile`) agar dapat diaudit dan di-*version control*.

### Pemilihan Platform CI/CD
*   **GitHub Actions:** Pilihan utama untuk repositori berbasis GitHub — mudah dikonfigurasi, ekosistem *marketplace* luas, dan integrasi langsung dengan fitur GitHub (Pull Requests, Issues).
*   **GitLab CI/CD:** Solusi terintegrasi untuk repositori GitLab dengan fitur *Auto DevOps* dan *Container Registry* bawaan.
*   **Jenkins:** Pilihan untuk kebutuhan kustomisasi tinggi dan infrastruktur *self-hosted*.

---

## 2. Continuous Integration (CI) — Build & Test Automation

### Automated Build
*   **Trigger Otomatis:** Konfigurasikan pipeline agar berjalan otomatis pada setiap event: `push` ke branch, pembuatan *Pull Request*, atau *merge* ke branch utama (`main`/`develop`).
*   **Caching Dependencies:** Gunakan mekanisme *caching* pada pipeline (seperti `actions/cache` di GitHub Actions) untuk mempercepat instalasi dependensi (`node_modules`, Docker layers).
*   **Matrix Builds (Opsional):** Jalankan pengujian secara paralel pada beberapa versi Node.js atau environment yang berbeda jika aplikasi harus mendukung multi-version.

### Automated Testing dalam Pipeline
*   **Unit Test Wajib:** Jalankan `npm run test` dengan laporan *code coverage* — gagalkan pipeline jika cakupan di bawah ambang batas (misal 80%).
*   **Linting & Code Quality:** Jalankan `npm run lint` dan integrasi dengan alat analisis statis (SonarQube/SonarCloud) untuk pemindaian kualitas kode otomatis.
*   **Security Scanning:** Jalankan `npm audit --audit-level=high` dan pemindaian *Docker image* (`docker scout`, `Trivy`) pada setiap build untuk mendeteksi kerentanan lebih awal.

---

## 3. Continuous Deployment (CD) — Deployment Stages

### Environment Strategy
*   **Multi-Environment:** Siapkan minimal 3 lingkungan terpisah:
    *   **Development (Dev):** Untuk pengujian fitur individual oleh developer.
    *   **Staging:** Replika mendekati produksi untuk pengujian SIT dan UAT.
    *   **Production:** Lingkungan *live* yang diakses pengguna akhir.
*   **Environment Variables per Stage:** Kelola variabel lingkungan secara terpisah untuk setiap stage menggunakan *GitHub Secrets*, *GitLab CI/CD Variables*, atau *Vault*.

### Deployment Strategy
*   **Blue-Green Deployment:** Siapkan dua lingkungan identik (*blue* & *green*). Deploy versi baru ke lingkungan *idle*, lalu alihkan *traffic* setelah verifikasi berhasil.
*   **Canary Deployment (Opsional):** Rilis versi baru secara bertahap ke sebagian kecil pengguna (misal 5-10%) sebelum *full rollout*.
*   **Rolling Update:** Ganti instance lama secara bertahap tanpa *downtime* (cocok untuk Kubernetes).

### Rollback Strategy
*   **Automated Rollback:** Konfigurasikan pipeline agar otomatis melakukan *rollback* ke versi sebelumnya jika *health check* gagal setelah deploy.
*   **Versioned Artifacts:** Simpan setiap *build artifact* (Docker image) dengan tag versi yang jelas (contoh: `v1.2.3`, `git-sha`) agar rollback dapat dilakukan dengan cepat.
*   **Database Rollback Plan:** Pastikan setiap migrasi database memiliki *rollback script* yang sudah diuji sebelumnya.

---

## 4. Keamanan Pipeline (Pipeline Security)

*   **Secrets Management:** Jangan pernah menyimpan kredensial di file konfigurasi pipeline secara langsung. Gunakan mekanisme *secrets* bawaan platform (*GitHub Secrets*, *GitLab Protected Variables*).
*   **Branch Protection Rules:** Terapkan aturan perlindungan pada branch utama: wajib *code review*, wajib *status checks passed*, dan larangan *force push*.
*   **Signed Commits & Tags:** Gunakan *GPG signing* pada commit dan tag rilis untuk memastikan integritas kode.
*   **Least Privilege untuk Service Accounts:** Berikan hak akses minimal pada *service account* atau *token* yang digunakan pipeline untuk deploy.

---

## ⚡ Command Cheat Sheet
*   `gh workflow run <workflow>.yml` — Menjalankan workflow GitHub Actions secara manual.
*   `gh run list` — Melihat daftar eksekusi workflow terbaru.
*   `gh run view <run_id> --log` — Melihat log detail dari eksekusi workflow tertentu.
*   `act` — Menjalankan GitHub Actions secara lokal untuk pengujian pipeline.
*   `docker build -t app:$(git rev-parse --short HEAD) .` — Build Docker image dengan tag Git SHA.

## 🛠️ Troubleshooting Umum
*   **Pipeline Timeout:** Periksa apakah ada tes yang *hanging* atau proses build yang terlalu lama. Tambahkan `timeout-minutes` pada setiap *job*.
*   **Cache Miss Berulang:** Pastikan *cache key* menggunakan hash file dependensi (contoh: `hashFiles('**/package-lock.json')`) agar cache valid.
*   **Secrets Tidak Terbaca:** Pastikan *secrets* sudah dikonfigurasi di level repositori/organisasi dan nama variabel sesuai dengan referensi di file workflow.
*   **Permission Denied saat Deploy:** Periksa hak akses *service account* dan pastikan *token* belum kedaluwarsa.

## 📐 Standar Penamaan (Naming Conventions)
*   **File Workflow:** Menggunakan format *kebab-case* (contoh: `ci-build-test.yml`, `cd-deploy-production.yml`).
*   **Nama Job & Step:** Menggunakan format deskriptif (contoh: `build-and-test`, `deploy-to-staging`).
*   **Docker Image Tag:** Menggunakan format `<app-name>:<version>` atau `<app-name>:<git-sha>` (contoh: `auth-service:v1.2.3`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Konfigurasi Pipeline CI:**
    *   [ ] Menyusun file workflow CI/CD (*Pipeline as Code*) di dalam repositori.
    *   [ ] Mengonfigurasi trigger otomatis pada event `push`, `pull_request`, dan `merge`.
    *   [ ] Menjalankan *linting*, *unit test*, dan *security scan* di setiap build.
    *   [ ] Menerapkan *dependency caching* untuk mempercepat eksekusi pipeline.
*   **Konfigurasi Pipeline CD:**
    *   [ ] Mengonfigurasi deployment otomatis ke lingkungan *Staging* setelah CI berhasil.
    *   [ ] Menerapkan strategi deployment yang aman (*Blue-Green* / *Canary* / *Rolling*).
    *   [ ] Memastikan *rollback* otomatis atau manual dapat dilakukan dengan cepat.
*   **Keamanan Pipeline:**
    *   [ ] Memastikan seluruh *secrets* dan kredensial dikelola melalui mekanisme *secrets management* platform.
    *   [ ] Menerapkan *branch protection rules* pada branch utama.
    *   [ ] Mengonfigurasi *signed commits/tags* untuk integritas kode.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Pipeline CI/CD berjalan end-to-end tanpa error dari build hingga deploy.
    *   [ ] Dokumentasi konfigurasi pipeline telah diperbarui dan dapat dipahami oleh anggota tim.
