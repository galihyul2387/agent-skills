---
name: backend-complete-development-best-practices
description: Panduan lengkap untuk Backend Development mencakup arsitektur Microservices, unit testing, SonarQube A+, HTTP Security Headers, logging, bot mitigation, dan keamanan tingkat lanjut.
---

# Panduan Tahap: Backend Development, API Layer, Microservices, Testing, SonarQube A+, Security Headers & Bot Mitigation

Tahap ini berfokus pada pembangunan logika sisi server (*server-side*), arsitektur terdistribusi *microservices*, perancangan basis data terisolasi, pembuatan API yang aman, penulisan *unit testing*, pemastian kualitas kode bebas dari isu *SonarQube (Rating A+)*, konfigurasi *HTTP Security Headers*, manajemen *logging* terpusat, proteksi dari serangan otomatisasi (robot/bot), kontrol sesi, serta penerapan protokol keamanan tingkat lanjut.

## 1. Langkah-Langkah Strategis Backend & Microservices

### Arsitektur Microservices
*   **Pemisahan Layanan (Service Decomposition):** Pecah aplikasi monolitik backend menjadi layanan-layanan kecil berdasarkan domain bisnis (*Auth Service, User Service, Transaction Service*).
*   **Komunikasi Antar Layanan:** Tentukan pola komunikasi yang efisien (secara sinkron via gRPC/REST API atau asinkron via *Message Broker* seperti RabbitMQ, Kafka, atau Redis).
*   **API Gateway:** Gunakan *API Gateway* sebagai pintu gerbang tunggal untuk perutean, autentikasi awal, serta filter awal lalu lintas mencurigakan.

### Perancangan Database & API Layer
*   Rancang skema basis data terisolasi per layanan (*database per service pattern*) guna menghindari kopling ketat antar data.
*   Bangun arsitektur API layer yang bersih, terstruktur, dan mudah dikonsumsi oleh *frontend*.

### Integrasi AI dalam Coding Backend
*   Gunakan alat bantu AI (*Cursor, Claude Code, Codex*) untuk mempercepat pembuatan kode *boilerplate* atau query database.
*   Lakukan *code review* ketat terhadap hasil kode AI guna mencegah celah keamanan logika (*logic flaw*).

---

## 2. Unit Testing & Standar Kualitas SonarQube (Rating A+)

Untuk memastikan kode memiliki ketahanan tinggi, minim *bug*, dan bersih dari kerentanan teknis:

### Penulisan Unit Testing
*   **Cakupan Pengujian (Code Coverage):** Wajib menuliskan *unit tests* (menggunakan Jest, Mocha, atau kerangka uji bawaan) dengan target cakupan kode (*code coverage*) minimal 80% hingga 90% pada logika bisnis inti.
*   **Mocking & Isolation:** Gunakan *mocking* untuk dependensi eksternal (seperti pemanggilan database atau API eksternal) agar *unit test* berjalan cepat, independen, dan konsisten.

### Kualitas Kode & SonarQube (Rating A+)
*   **Zero Bugs & Vulnerabilities:** Pastikan kode bebas dari *Bugs*, *Vulnerabilities*, dan *Security Hotspots* saat dipindai menggunakan alat analisis statis seperti SonarQube.
*   **Maintainability & Code Smells:** 
    *   Hilangkan seluruh *Code Smells* dan jaga kompleksitas siklomatik (*cyclomatic complexity*) agar tetap rendah pada setiap fungsi.
    *   Penuhi standar metrik untuk mencapai **Rating A+** pada kualitas pemeliharaan (*Maintainability*), keterbacaan, dan duplikasi kode (*Duplicated Code < 3%*).

---

## 3. HTTP Security Headers (Proteksi Respons Server)

Konfigurasikan *API Gateway* atau *Backend Framework* (seperti Helmet.js pada Express.js) untuk menyertakan header keamanan berikut pada setiap respons HTTP:
*   **`Strict-Transport-Security (HSTS)`**: Memaksa browser untuk selalu berkomunikasi melalui HTTPS secara permanen (`max-age=31536000; includeSubDomains`).
*   **`Content-Security-Policy (CSP)`**: Membatasi sumber daya (skrip, gambar) yang diizinkan dimuat untuk mitigasi serangan XSS (`default-src 'self'`).
*   **`X-Frame-Options: DENY` (atau `SAMEORIGIN`)**: Mencegah halaman aplikasi dimuat di dalam iframe guna melindungi dari serangan *Clickjacking*.
*   **`X-Content-Type-Options: nosniff`**: Mencegah browser melakukan *MIME-type sniffing* terhadap tipe konten yang dideklarasikan.
*   **`Permissions-Policy`**: Membatasi akses browser ke fitur perangkat keras yang sensitif (seperti kamera, mikrofon, geolokasi).
*   **`Referrer-Policy`**: Mengontrol seberapa banyak informasi URL *referrer* yang disertakan saat berpindah halaman.

---

## 4. Manajemen Logging & Audit Trail (Centralized Logging for Troubleshooting)

Dalam arsitektur *microservices* yang kompleks, pelacakan masalah sangat sulit jika *log* tersebar di banyak server. Terapkan manajemen *logging* terpusat:

### Standar Logging & Format Terstruktur
*   **Structured JSON Logging:** 
    *   Simpan *log* dalam format terstruktur (seperti JSON) agar mudah diindeks oleh sistem pencarian log (misal: ELK Stack / Grafana Loki).
    *   Setiap baris log wajib menyertakan: *Timestamp*, *Log Level* (`INFO`, `WARN`, `ERROR`), *Service Name*, dan *User ID*.
*   **Correlation ID / Request Tracing:** 
    *   Sematkan kode unik (*Correlation ID / Trace ID*) pada setiap permintaan masuk melalui *API Gateway*, lalu teruskan ke setiap layanan mikro agar perjalanan *request* mudah dilacak saat terjadi *error*.

### Audit Trail Keamanan
*   **Security Event Logging:** Catat aktivitas penting terkait keamanan (percobaan login gagal, perubahan kata sandi, hak akses ditolak) ke dalam *Audit Log* terpisah.
*   **Log Sanitization:** **Jangan pernah** mencatat data sensitif seperti *password*, *token*, *API key*, atau data pribadi (*PII*) ke dalam file *log*.

---

## 5. Proteksi Serangan Robot & Bot Mitigation (Anti-Bot & Automation Security)

Untuk mencegah eksploitasi otomatis oleh skrip atau bot (seperti *credential stuffing*, *brute-force login*, dan *web scraping* berlebih):

### Mekanisme Verifikasi & Tantangan (Challenge-Response)
*   **Integrasi CAPTCHA / Proof-of-Work:** 
    *   Terapkan verifikasi anti-bot (seperti Google reCAPTCHA v3, hCaptcha, atau Cloudflare Turnstile) pada endpoint sensitif (*login*, *register*, *forgot password*).
    *   Validasi token verifikasi di sisi backend sebelum memproses permintaan lebih lanjut.

### Pembatasan Akses & Deteksi Anomali
*   **Rate Limiting & IP Throttling:** Batasi jumlah maksimum permintaan per detik/menit untuk setiap alamat IP atau sesi pengguna guna mencegah serangan *Brute Force* dan *DDoS*.
*   **Validasi User-Agent:** Pastikan permintaan yang masuk memiliki *header* standar yang valid pada *API Gateway*.

---

## 6. Kontrol Sesi & Validasi Autentikasi (Single Session / Device Login)

Backend memegang kendali penuh untuk memastikan aturan *Single Session* dan pembatasan perangkat berjalan dengan benar:

### Manajemen Token & Sesi
*   **Token Invalidation / Revocation:** Simpan *Session ID* atau *Refresh Token* di database dengan status aktif. Jika pengguna login di perangkat/browser baru, ubah status token lama menjadi tidak aktif (*revoked* / *force logout*).
*   **Sinkronisasi Real-time:** Sediakan saluran komunikasi (*heartbeat* atau WebSocket) agar *frontend* dapat mendeteksi pemutusan sesi secara instan.
*   **HttpOnly Cookies:** Simpan token autentikasi sensitif ke dalam *HttpOnly Cookies* dengan bendera `Secure` dan `SameSite=Strict`.

---

## 7. Standar Error Handling (Error Response Standard)

Untuk memastikan respons error dari API konsisten, mudah dipahami, dan informatif bagi frontend:

### Format Respons Error
*   **Standar RFC 7807 (Problem Details):** Adopsi format standar industri untuk respons error API yang mencakup field: `type`, `title`, `status`, `detail`, dan `instance`.
*   **Kode Error Kustom:** Definisikan kode error internal yang spesifik di luar kode HTTP standar (contoh: `AUTH_TOKEN_EXPIRED`, `USER_SESSION_CONFLICT`) agar frontend dapat menangani setiap jenis error dengan tepat.
*   **Pesan yang Aman:** Jangan pernah mengekspos detail teknis internal (seperti *stack trace*, nama tabel database, atau versi framework) dalam respons error ke klien.

### Konsistensi Error Handling
*   **Global Error Handler:** Implementasikan *middleware* penanganan error global yang menangkap seluruh *exception* dan mengonversinya ke format respons standar.
*   **Validasi Error yang Terstruktur:** Untuk error validasi input (HTTP 422), sertakan daftar field yang gagal beserta alasan spesifiknya agar frontend dapat menampilkan pesan error per field.

---

## 8. Strategi Caching (Caching Strategy)

Untuk meningkatkan performa dan mengurangi beban pada database serta layanan backend:

### Lapisan Cache
*   **In-Memory Cache (Redis/Memcached):** Gunakan cache berbasis memori untuk data yang sering diakses namun jarang berubah (seperti konfigurasi aplikasi, data referensi, hasil pencarian populer).
*   **HTTP Caching (Cache-Control Headers):** Konfigurasikan header `Cache-Control`, `ETag`, dan `Last-Modified` pada respons API agar klien dan CDN dapat menyimpan cache respons secara efisien.
*   **Database Query Cache:** Aktifkan *query cache* pada database atau gunakan *materialized views* untuk query agregasi yang berat dan jarang berubah.

### Cache Invalidation
*   **TTL (Time-to-Live):** Tetapkan masa berlaku cache yang sesuai konteks data — data statis (TTL panjang: jam/hari), data dinamis (TTL pendek: detik/menit).
*   **Event-Driven Invalidation:** Gunakan pola *pub/sub* atau *event bus* untuk menghapus cache secara otomatis saat data sumber diperbarui, guna menghindari data basi (*stale data*).
*   **Cache Stampede Prevention:** Terapkan teknik *lock* atau *probabilistic early expiration* untuk mencegah lonjakan permintaan ke database saat cache kedaluwarsa secara bersamaan.

---

## 9. Keamanan Backend Tingkat Lanjut (Advanced Backend Security)

### Enkripsi & Manajemen Rahasia (Cryptography & Secrets Management)
*   **Enkripsi Data:** Terapkan enkripsi **At-Rest** (AES-256 untuk data sensitif, hashing kata sandi dengan *Argon2/Bcrypt*) dan enkripsi **In-Transit** (HTTPS/TLS 1.3).
*   **Secrets Management:** Jangan pernah menanam (*hardcode*) kunci API atau kredensial di kode sumber. Gunakan layanan terpusat (HashiCorp Vault, AWS Secrets Manager, atau Environment Variables terenkripsi).

### Proteksi Injeksi & Komunikasi Layanan
*   **Pencegahan SQL Injection:** Gunakan *Prepared Statements* atau *ORM/Query Builder* secara konsisten (Prisma/TypeORM di TS, SQLAlchemy di Python, GORM di Go, Hibernate/JPA di Java, Eloquent di PHP, EF Core di C#, Diesel/SQLx di Rust).
*   **Mutual TLS (mTLS):** Terapkan autentikasi internal antar layanan mikro di jaringan privat agar hanya layanan sah yang dapat berkomunikasi.

---

## 10. Panduan Ekosistem Multi-Bahasa (Polyglot Backend)

Pilih framework dan pustaka yang sesuai dengan domain dan kebutuhan performa layanan:

| Ekosistem | Rekomendasi Framework | ORM / DB Access | Testing Framework | Linter & Formatter |
|---|---|---|---|---|
| **Node.js / TS** | NestJS, Express, Fastify | Prisma, Drizzle, TypeORM | Jest, Vitest, Supertest | ESLint, Prettier |
| **Python** | FastAPI, Django REST, Flask | SQLAlchemy, Tortoise, Django ORM | PyTest, Unittest | Ruff, Black, Flake8 |
| **Golang** | Gin, Fiber, Echo, gRPC | GORM, sqlx, pgx | `go test`, Testify | `golangci-lint`, `gofmt` |
| **Java / Kotlin** | Spring Boot, Micronaut, Quarkus | Spring Data JPA, Hibernate, jOOQ | JUnit 5, Mockito, Testcontainers | Checkstyle, Spotless |
| **PHP** | Laravel, Symfony | Eloquent, Doctrine | PHPUnit, Pest | PHPStan, PHP-CS-Fixer |
| **C# / .NET 10** | ASP.NET Core 10 Minimal API / Web API (Native AOT) | Entity Framework Core 10, Dapper | xUnit, NUnit, FluentAssertions | Roslyn, `dotnet format` |
| **Rust** | Actix-web, Axum, Tonic (gRPC) | SQLx, Diesel, SeaORM | `cargo test` | Clippy, `rustfmt` |

---

## ⚡ Command Cheat Sheet Lintas Bahasa

### Node.js / TypeScript
*   `npm run start:dev` / `pnpm dev` — Menjalankan server pengembangan backend.
*   `npm run test:cov` — Menjalankan unit test dengan laporan cakupan kode (*coverage report*).
*   `npm run prisma:migrate` / `npm run typeorm:migration:run` — Menjalankan migrasi database.

### Python
*   `uvicorn main:app --reload` / `python manage.py runserver` — Menjalankan server API FastAPI/Django.
*   `pytest --cov=app --cov-report=html` — Menjalankan test dengan report coverage.
*   `alembic upgrade head` / `python manage.py migrate` — Menjalankan migrasi schema.

### Golang
*   `go run main.go` / `air` — Menjalankan server Go dengan live reload.
*   `go test -v -coverprofile=coverage.out ./...` — Menjalankan test dan membuat profile coverage.
*   `golangci-lint run` — Memeriksa linter dan kualitas kode Go.

### Java / Kotlin (.NET & PHP)
*   `./gradlew bootRun` / `./mvnw spring-boot:run` — Menjalankan Spring Boot.
*   `./gradlew test jacocoTestReport` — Menjalankan JUnit dengan laporan JaCoCo.
*   `dotnet run` / `dotnet test --collect:"XPlat Code Coverage"` — Menjalankan & menguji .NET API.
*   `php artisan serve` / `vendor/bin/pest --coverage` — Menjalankan & menguji Laravel API.

## 🛠️ Troubleshooting Umum
*   **Koneksi Database Gagal:** Periksa kembali variabel lingkungan (`.env` / config) untuk host, port, username, password, dan status koneksi database.
*   **Port API Bentrok:** Ubah konfigurasi port server backend pada file environment (misal dari port 3000 ke 5000/8080).
*   **Missing Dependency / Build Error:** Bersihkan cache package manager (`npm cache clean`, `pip cache purge`, `go clean -modcache`, `./gradlew clean`) lalu instal ulang dependensi.

## 📐 Standar Penamaan (Naming Conventions)
*   **File & Folder:** Menggunakan *kebab-case* atau *snake_case* sesuai standar bahasa (contoh: `user_controller.py`, `auth-service.ts`, `UserController.java`).
*   **Variabel & Method:** Menggunakan *camelCase* (TS/Java/Go/PHP) atau *snake_case* (Python/Rust) atau *PascalCase* (C# public methods).
*   **Route API:** Selalu menggunakan *kebab-case* huruf kecil (contoh: `/api/v1/user-profiles`).
*   **Model / Tabel Database:** Menggunakan bentuk jamak (*plural* dalam *snake_case*, contoh: `users`, `user_sessions`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Arsitektur Microservices & Database:**
    *   [ ] Memecah layanan backend ke dalam entitas *microservices* independen dengan database terisolasi.
    *   [ ] Mengonfigurasi *API Gateway* dan komunikasi antar layanan yang aman.
*   **Unit Testing & Kualitas SonarQube (Rating A+):**
    *   [ ] Menulis *unit tests* untuk seluruh logika bisnis inti dengan cakupan kode (*code coverage*) minimal 80-90%.
    *   [ ] Memastikan pemindaian SonarQube menghasilkan **0 Bugs, 0 Vulnerabilities, 0 Security Hotspots**, dan pencapaian **Rating A+**.
*   **HTTP Security Headers:**
    *   [ ] Mengaktifkan *HSTS*, *CSP*, *X-Frame-Options*, *X-Content-Type-Options*, dan *Permissions-Policy* pada respons server/gateway.
*   **Manajemen Logging & Tracing:**
    *   [ ] Menerapkan format *Structured JSON Logging* dan *Correlation ID / Request Tracing*.
    *   [ ] Memastikan tidak ada data sensitif yang terekam di dalam file *log*.
*   **Proteksi Bot & Serangan Otomatisasi:**
    *   [ ] Menerapkan verifikasi CAPTCHA/Turnstile pada endpoint sensitif (login, register).
    *   [ ] Mengaktifkan *Rate Limiting* dan *IP Throttling*.
*   **Kontrol Sesi & Validasi:**
    *   [ ] Menerapkan logika *Single Session* di backend (pemutusan token lama saat login di perangkat/browser baru).
    *   [ ] Menerapkan validasi input ketat di sisi server untuk seluruh *payload*.
*   **Error Handling & Caching:**
    *   [ ] Menerapkan format respons error standar (RFC 7807 Problem Details) secara konsisten.
    *   [ ] Mengimplementasikan *global error handler middleware* untuk menangkap seluruh exception.
    *   [ ] Mengonfigurasi lapisan caching (Redis/Memcached) untuk data yang sering diakses.
    *   [ ] Menerapkan strategi *cache invalidation* (TTL dan/atau event-driven) yang tepat.
*   **Keamanan Backend Tingkat Lanjut (Advanced Security):**
    *   [ ] Memastikan enkripsi data *At-Rest* dan *In-Transit*, serta penggunaan *Secrets Management*.
    *   [ ] Mengonfigurasi proteksi SQL Injection dan autentikasi *mTLS/Token* antar layanan mikro.
    *   [ ] Menjalankan audit dependensi rutin (`npm audit`) tanpa celah kritis.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Kode backend lolos uji *linter*, pengujian unit test, dan analisis SonarQube tingkat A+.
    *   [ ] Dokumentasi API (Swagger/Postman) diperbarui dengan standar keamanan yang jelas.