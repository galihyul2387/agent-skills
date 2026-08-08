---
name: complete-integration-best-practices
description: Panduan integrasi menyeluruh mencakup API Gateway, CORS strict, Correlation ID request tracing, mTLS antar layanan, dan E2E contract testing.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Panduan Tahap: Integration (Frontend, Backend, Logging, Performance, Security & Best Practices)

Tahap ini berfokus pada penggabungan (*integration*) antara komponen *Frontend*, *API Gateway*, dan berbagai layanan mikro *Backend* (*Microservices*) secara aman, cepat, handal, mudah dilacak melalui sistem *logging* terpusat, serta mematuhi standar kualitas terbaik industri.

## 1. Langkah-Langkah Strategis Integrasi & Arsitektur

### Penghubung Antarmuka & Layanan (API & Service Integration)
*   **Konsumsi API & Kontrak (API Contract):** Pastikan komunikasi antara *Frontend* dan *Backend* mematuhi spesifikasi kontrak API yang telah disepakati bersama (misalnya menggunakan dokumentasi Swagger/OpenAPI).
*   **Pengaturan CORS (Cross-Origin Resource Sharing):** Konfigurasikan aturan CORS secara ketat di sisi *API Gateway* / *Backend* agar hanya domain *frontend* resmi yang diizinkan mengirimkan permintaan (*request*).
*   **Manajemen State & Error Handling Lintas Jaringan:** Tentukan mekanisme penanganan kesalahan (*error handling*) yang seragam (misalnya format respons error HTTP 4xx dan 5xx yang konsisten) agar mudah ditangkap dan ditampilkan oleh *frontend*.

### Sinkronisasi Sesi & Real-time
*   **Integrasi Kontrol Sesi (*Single Session*):** Uji coba alur autentikasi lintas sistem untuk memastikan mekanisme pemutusan sesi lama (*force logout*) saat login di perangkat/browser baru berfungsi dengan baik antara *frontend*, *API Gateway*, dan *auth service*.
*   **Komunikasi Real-time:** Pastikan koneksi berbasis *WebSocket* atau *polling* untuk sinkronisasi status berjalan stabil tanpa kebocoran memori (*memory leak*).

---

## 2. Manajemen Logging & Request Tracing (Centralized Integration Logging)

Dalam arsitektur terdistribusi seperti *microservices* dan *API Gateway*, pelacakan masalah (*troubleshooting*) sangat bergantung pada visibilitas log yang terpusat:

### Standar Tracing & Agregasi Log
*   **Correlation ID / Request Tracing:** 
    *   Sematkan kode unik (*Correlation ID / Trace ID*) pada setiap permintaan yang masuk dari *frontend* melalui *API Gateway*.
    *   Teruskan ID tersebut ke setiap layanan mikro (*microservices*) yang dipanggil agar seluruh perjalanan sebuah *request* mudah dilacak saat terjadi *error* atau latensi tinggi.
*   **Centralized Logging:** 
    *   Agregasikan seluruh log dari *API Gateway* dan berbagai *microservices* ke dalam satu sistem terpusat (seperti ELK Stack, Grafana Loki, atau cloud logging) dengan format terstruktur (JSON).
*   **Log Sanitization di Titik Integrasi:** 
    *   Pastikan tidak ada data sensitif (seperti *access token*, *password*, atau data pribadi *PII*) yang terekam di dalam log *API Gateway* atau *proxy*.

---

## 3. Keamanan Integrasi (Integration Security & Best Practices)

Untuk memastikan aliran data antar layanan terlindungi dari berbagai celah kerentanan:
*   **Enkripsi In-Transit (TLS 1.3):** Seluruh komunikasi data antara klien (*frontend*), *API Gateway*, dan *microservices* wajib menggunakan enkripsi Transport Layer Security (TLS) versi terbaru.
*   **Mutual TLS (mTLS) & Internal Token:** Terapkan autentikasi internal yang ketat antar layanan mikro di jaringan privat menggunakan *mTLS* atau *Internal JWT* untuk mencegah akses tidak sah (*unauthorized service-to-service communication*).
*   **Validasi Payload & Sanitasi di API Gateway:** Lakukan validasi dan sanitasi awal pada *API Gateway* sebelum payload diteruskan ke layanan *backend* tujuan guna menangkis injeksi atau format data anomali.

---

## 4. Optimalisasi Performa Integrasi (Performance & Latency Optimization)

Untuk memastikan sistem terintegrasi memiliki latensi rendah dan mampu menangani beban tinggi:
*   **API Gateway Caching & Rate Limiting:** Terapkan *caching* respons pada *API Gateway* untuk data yang bersifat statis atau jarang berubah, serta aktifkan *rate limiting* guna mencegah lonjakan beban yang dapat melumpuhkan layanan.
*   **Optimasi Payload & Kompresi:** Gunakan kompresi data (seperti Gzip atau Brotli) pada respons API dan pastikan payload data yang dikirim dari backend ke frontend hanya berisi atribut yang diperlukan (*payload minimization*).
*   **Connection Keep-Alive:** Aktifkan pengaturan *Keep-Alive* pada koneksi HTTP antar layanan mikro untuk mengurangi *overhead* pembuatan koneksi berulang.

---

## 5. Pengujian Integrasi (Integration & Contract Testing)

Untuk memastikan tidak ada bagian yang rusak saat modul-modul digabungkan:
*   **End-to-End (E2E) Integration Testing:** Jalankan pengujian alur kerja menyeluruh (dari aksi pengguna di *frontend* hingga penyimpanan data di database *backend*).
*   **API Contract Testing:** Pastikan perubahan pada *microservices* tidak memutus atau merusak format data yang diharapkan oleh klien (*frontend*).

---

## ⚡ Command Cheat Sheet
*   `npm run test:integration` — Menjalankan rangkaian pengujian integrasi lokal.
*   `docker-compose up` — Menjalankan seluruh layanan mikro dan basis data secara bersamaan di lingkungan lokal untuk pengujian integrasi.

## 🛠️ Troubleshooting Umum
*   **CORS Error:** Periksa konfigurasi *origin* pada *middleware* CORS di backend atau pengaturan *headers* di *API Gateway*.
*   **Timeout Antar Layanan:** Periksa konfigurasi jaringan privat atau batas waktu (*timeout threshold*) pada komunikasi sinkron antar *microservices*.

## 📐 Standar Penamaan (Naming Conventions & Versioning)
*   **Version Control API:** Gunakan penomoran versi pada rute API (contoh: `/api/v1/...`) untuk menjaga kompatibilitas mundur (*backward compatibility*).
*   **Payload Format:** Gunakan format struktur data yang konsisten (camelCase untuk JSON payload).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Integrasi Sistem & API:**
    *   [ ] Menghubungkan *frontend* dengan *API Gateway* dan layanan *microservices* secara fungsional.
    *   [ ] Mengonfigurasi pembatasan CORS secara ketat dan benar.
*   **Manajemen Logging & Tracing:**
    *   [ ] Mengimplementasikan *Correlation ID / Request Tracing* lintas layanan dari *API Gateway* hingga *microservices*.
    *   [ ] Memastikan sistem *logging* terpusat aktif dan melakukan *sanitization* terhadap data sensitif.
*   **Keamanan & Performa Integrasi:**
    *   [ ] Memastikan seluruh komunikasi data terenkripsi (TLS 1.3) dan menerapkan *mTLS/Token* antar layanan mikro.
    *   [ ] Mengonfigurasi *caching*, *rate limiting*, dan kompresi payload pada *API Gateway*.
*   **Pengujian & Validasi Integrasi:**
    *   [ ] Melakukan pengujian integrasi (*integration testing*) dan memastikan alur data berjalan lancar.
    *   [ ] Memastikan mekanisme *Single Session* dan kontrol multi-tab berfungsi sempurna saat diuji lintas sistem.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Seluruh layanan (frontend, API gateway, microservices) dapat berjalan bersamaan tanpa konflik port atau jaringan.
    *   [ ] Dokumentasi integrasi dan *endpoint* telah diverifikasi bersama dengan standar terbaik.