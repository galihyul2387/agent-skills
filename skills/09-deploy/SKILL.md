---
name: deployment-docker-best-practices
description: Panduan lengkap dan terstruktur untuk tahap Deployment menggunakan Docker, mencakup pembuatan Multi-stage Dockerfile, Docker Compose untuk arsitektur Microservices, manajemen environment variables yang aman, optimasi container, hingga Definition of Done.
---

# Panduan Tahap: Deployment & Containerization (Docker & Microservices)

Tahap ini berfokus pada pengemasan (*containerization*) aplikasi berbasis *microservices* (Frontend, API Gateway, dan Backend services) menggunakan **Docker**, memastikan lingkungan produksi yang konsisten, aman, dan siap untuk dipublikasikan.

## 1. Langkah-Langkah Strategis Deployment dengan Docker

### Containerization Strategy (Dockerfiles Polyglot)
*   **Multi-stage Builds:** Gunakan *multi-stage builds* pada Dockerfile untuk memisahkan proses pembangunan kode (*build environment*) dengan hasil akhir untuk produksi (*runtime environment*), sehingga ukuran *image* menjadi sangat kecil dan efisien.
*   **Base Image yang Aman & Minimalis per Ekosistem:**
    *   **Node.js / TS:** `node:20-alpine` atau `gcr.io/distroless/nodejs20-debian12`
    *   **Python:** `python:3.12-slim` (dengan virtual environment terisolasi)
    *   **Golang:** `golang:1.22-alpine` (build) ➔ `scratch` / `distroless/static` (runtime image < 20MB)
    *   **Java / Kotlin:** `eclipse-temurin:21-jre-alpine` atau `distroless/java21`
    *   **PHP:** `php:8.3-fpm-alpine` (didampingi Nginx alpine container)
    *   **C# / .NET 10:** `mcr.microsoft.com/dotnet/aspnet:10.0-alpine` atau `10.0-chiseled` (ekstra ringan & aman)
    *   **Rust:** `rust:1.77-alpine` (build) ➔ `scratch` / `alpine` (runtime image < 15MB)
*   **Non-Root User:** Jalankan container aplikasi menggunakan pengguna non-root (*non-root user*) demi mencegah eskalasi hak istimewa jika terjadi kerentanan pada container.

### Orkestrasi Layanan (Docker Compose)
*   **Manajemen Multi-Container:** Gunakan `docker-compose.yml` untuk mengelola dan merangkai seluruh layanan mikro secara bersamaan (*Frontend, API Gateway, Microservices, Databases, Caching seperti Redis*).
*   **Networking & Isolation:** Buat jaringan internal khusus (*Docker Bridge Network*) agar komunikasi antar layanan mikro hanya bisa diakses dalam jaringan privat, sementara port publik hanya dibuka pada *API Gateway* atau *Reverse Proxy*.

---

## 2. Keamanan & Manajemen Konfigurasi (Docker Security & Secrets)

*   **Manajemen Environment Variables (.env):** Jangan pernah menyertakan file `.env` atau kredensial rahasia langsung ke dalam Docker Image. Gunakan Docker Secrets atau injeksi variabel lingkungan saat container dijalankan (*runtime injection*).
*   **Read-Only Root Filesystem:** Atur sistem berkas root pada container menjadi *read-only* bila memungkinkan guna mencegah modifikasi file ilegal oleh pihak luar.
*   **Image Vulnerability Scanning:** Lakukan pemindaian kerentanan keamanan pada *Docker image* secara berkala menggunakan alat pemindai (seperti `docker scout` atau `Trivy`) sebelum tahap rilis ke server produksi.

---

## 3. Optimalisasi Performa Container

*   **Docker Layer Caching:** Susun instruksi di dalam Dockerfile secara strategis (misalnya menyalin file dependensi `package.json` terlebih dahulu sebelum menyalin seluruh kode sumber) agar *layer caching* Docker bekerja optimal saat proses *build* ulang.
*   **Resource Limits:** Definisikan batasan penggunaan CPU dan Memori (*CPU and Memory limits*) pada file konfigurasi *Docker Compose* atau *Docker Swarm/Kubernetes* untuk mencegah satu layanan memonopoli sumber daya server.
*   **HEALTHCHECK Directive:** Tambahkan instruksi `HEALTHCHECK` pada Dockerfile untuk setiap layanan agar Docker dan *orchestrator* dapat mendeteksi container yang tidak responsif dan melakukan *restart* otomatis (contoh: `HEALTHCHECK --interval=30s CMD curl -f http://localhost:3000/health || exit 1`).

---

## 4. Container Orchestration (Kubernetes — Skala Produksi)

Untuk lingkungan produksi dengan kebutuhan skalabilitas dan ketersediaan tinggi (*high availability*):

### Migrasi dari Docker Compose ke Kubernetes
*   **Kapan Menggunakan Kubernetes:** Gunakan Kubernetes jika aplikasi memerlukan *auto-scaling*, *self-healing*, *zero-downtime deployment*, atau menjalankan lebih dari 5 layanan mikro secara bersamaan.
*   **Deployment Manifest:** Konversi konfigurasi `docker-compose.yml` menjadi *Kubernetes manifests* (Deployment, Service, ConfigMap, Secret) atau gunakan alat bantu seperti `kompose convert`.
*   **Helm Charts:** Gunakan *Helm* sebagai *package manager* untuk Kubernetes agar deployment dapat dikelola secara *templated*, *versioned*, dan *reproducible*.

### Fitur Kubernetes yang Penting
*   **Horizontal Pod Autoscaler (HPA):** Konfigurasikan *auto-scaling* berdasarkan metrik CPU/memori agar jumlah *pod* bertambah/berkurang sesuai beban.
*   **Liveness & Readiness Probes:** Konfigurasikan *probes* pada setiap *Deployment* agar Kubernetes dapat mendeteksi container yang tidak responsif dan melakukan *rolling restart*.
*   **Ingress Controller:** Gunakan *Ingress* (seperti Nginx Ingress atau Traefik) untuk mengelola routing HTTP/HTTPS, terminasi SSL, dan *path-based routing* ke berbagai layanan.

---

## 5. Reverse Proxy, Domain & SSL/TLS

### Konfigurasi Reverse Proxy
*   **Nginx / Traefik:** Gunakan *reverse proxy* sebagai gerbang masuk (*entry point*) yang menangani terminasi SSL, *load balancing*, dan routing ke container backend.
*   **SSL/TLS Certificate:** Gunakan **Let's Encrypt** (dengan *Certbot* atau *ACME client*) untuk mendapatkan dan memperbarui sertifikat SSL/TLS secara otomatis dan gratis.
*   **HTTPS Redirection:** Konfigurasikan *redirect* otomatis dari HTTP (port 80) ke HTTPS (port 443) untuk seluruh traffic.

### Konfigurasi Domain
*   **DNS Management:** Arahkan domain ke IP server atau *load balancer* menggunakan *A Record* atau *CNAME Record*.
*   **Subdomain per Layanan:** Gunakan subdomain untuk memisahkan akses ke layanan yang berbeda (contoh: `api.domain.com`, `app.domain.com`, `grafana.domain.com`).

---

## ⚡ Command Cheat Sheet
*   `docker build -t app-name .` — Membangun Docker image dari Dockerfile lokal.
*   `docker compose up -d` — Menjalankan seluruh layanan kontainer di latar belakang secara bersamaan.
*   `docker compose down` — Menghentikan dan menghapus seluruh container yang berjalan.
*   `docker logs -f <container_id>` — Melacak log container secara real-time untuk *troubleshooting*.
*   `docker scout quickview` — Memindai kerentanan keamanan pada *image* Docker.
*   `kubectl apply -f deployment.yml` — Mendeploy manifest Kubernetes ke cluster.
*   `kubectl get pods -w` — Memantau status pods secara real-time.
*   `helm install <release> <chart>` — Mendeploy aplikasi menggunakan Helm chart.
*   `certbot --nginx -d domain.com` — Menginstal sertifikat SSL/TLS Let's Encrypt pada Nginx.

## 🛠️ Troubleshooting Umum
*   **Port Konflik:** Pastikan port internal container tidak bertabrakan dengan port yang sudah digunakan oleh layanan lain di mesin host (ubah mapping port pada *docker-compose.yml*).
*   **Koneksi Antar Container Gagal:** Gunakan nama layanan (*service name*) sebagai hostname di dalam jaringan Docker, bukan menggunakan `localhost` (contoh: hubungkan ke `redis://redis-cache:6379`).

## 📐 Standar Penamaan (Naming Conventions)
*   **Docker Image:** Menggunakan format *lowercase* dengan tanda hubung (contoh: `mycompany-auth-service:v1.0.0`).
*   **Docker Container & Network:** Menggunakan format penamaan yang deskriptif dan konsisten (contoh: `prod-api-gateway`, `app-internal-network`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Containerization & Dockerfile:**
    *   [ ] Menyusun *Multi-stage Dockerfile* untuk setiap layanan (Frontend & Microservices) agar ukuran *image* efisien.
    *   [ ] Memastikan container berjalan dengan *non-root user* untuk keamanan tingkat lanjut.
    *   [ ] Menambahkan instruksi `HEALTHCHECK` pada Dockerfile setiap layanan.
*   **Orkestrasi & Konfigurasi:**
    *   [ ] Mengonfigurasi file `docker-compose.yml` untuk seluruh layanan mikro, database, dan *network isolation*.
    *   [ ] Memastikan tidak ada file `.env` atau kredensial mentah yang tertanam di dalam *Docker Image*.
*   **Kubernetes & Orchestration (Opsional — Skala Produksi):**
    *   [ ] Menyiapkan *Kubernetes manifests* atau *Helm charts* untuk deployment produksi.
    *   [ ] Mengonfigurasi *Liveness/Readiness Probes* dan *Horizontal Pod Autoscaler*.
*   **Reverse Proxy, Domain & SSL:**
    *   [ ] Mengonfigurasi *Reverse Proxy* (Nginx/Traefik) untuk routing dan terminasi SSL.
    *   [ ] Memasang sertifikat SSL/TLS (Let's Encrypt) dengan *auto-renewal*.
    *   [ ] Memastikan seluruh traffic dialihkan dari HTTP ke HTTPS.
*   **Keamanan & Performa:**
    *   [ ] Menjalankan pemindaian kerentanan *image* (`docker scout` / `Trivy`) dengan hasil bersih dari celah kritis.
    *   [ ] Mengatur batasan sumber daya (*resource limits*) CPU dan Memori pada konfigurasi kontainer.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Seluruh aplikasi berhasil di-build dan dijalankan menggunakan Docker secara lokal tanpa error.
    *   [ ] Dokumentasi panduan *deployment* server lokal/produksi telah diperbarui.