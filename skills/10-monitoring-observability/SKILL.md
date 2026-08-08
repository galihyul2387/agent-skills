---
name: monitoring-observability-best-practices
description: Panduan setup monitoring, alerting, logging produksi, dan observability mencakup Prometheus, Grafana, health checks, APM, dan incident response.
---

[ 🇮🇩 Bahasa Indonesia ](SKILL.md) | [ 🇬🇧 English ](SKILL.en.md)

---

# Panduan Tahap: Monitoring & Observability (Operasional Pasca-Deploy)

Tahap ini berfokus pada pemantauan (*monitoring*), pengamatan (*observability*), dan kesiapan respons insiden terhadap aplikasi yang sudah berjalan di lingkungan produksi, guna memastikan stabilitas, performa optimal, dan deteksi dini terhadap anomali atau kegagalan sistem.

## 1. Tiga Pilar Observability

### Metrics (Metrik)
*   **Infrastructure Metrics:** Pantau penggunaan CPU, memori, disk, dan jaringan pada setiap container/server menggunakan alat pengumpul metrik (seperti **Prometheus**, **Datadog**, atau **CloudWatch**).
*   **Application Metrics:** Ukur metrik spesifik aplikasi seperti *request rate*, *error rate*, *response time* (latensi P50, P95, P99), dan *throughput*.
*   **Business Metrics:** Pantau metrik bisnis penting seperti jumlah *active users*, *transaction volume*, dan *conversion rate* untuk mendeteksi anomali dari sudut pandang bisnis.

### Logs (Log Terpusat)
*   **Centralized Log Aggregation:** Kumpulkan seluruh log dari berbagai *microservices*, *API Gateway*, dan *infrastructure* ke dalam satu platform terpusat (seperti **ELK Stack**, **Grafana Loki**, atau **CloudWatch Logs**).
*   **Structured Logging:** Pastikan format log terstruktur (JSON) dengan field wajib: `timestamp`, `level`, `service`, `correlationId`, dan `message`.
*   **Log Retention Policy:** Tentukan kebijakan retensi log (misal: *hot storage* 7 hari, *cold storage* 90 hari) untuk menyeimbangkan biaya penyimpanan dan kebutuhan investigasi.

### Traces (Distributed Tracing)
*   **Request Tracing:** Implementasikan *distributed tracing* (menggunakan **Jaeger**, **Zipkin**, atau **OpenTelemetry**) untuk melacak perjalanan sebuah *request* melintasi berbagai *microservices*.
*   **Span & Context Propagation:** Pastikan setiap layanan meneruskan *trace context* (Trace ID, Span ID) melalui header HTTP agar rantai panggilan antar layanan dapat divisualisasikan secara utuh.

---

## 2. Health Checks & Readiness Probes

### Endpoint Monitoring
*   **Health Check Endpoint (`/health`):** Setiap layanan mikro wajib menyediakan endpoint `/health` yang mengembalikan status kesehatan layanan (koneksi database, koneksi cache, dll).
*   **Readiness Probe (`/ready`):** Sediakan endpoint `/ready` untuk menunjukkan apakah layanan siap menerima *traffic* (berguna untuk *load balancer* dan *orchestrator* seperti Kubernetes).
*   **Liveness Probe:** Konfigurasikan *liveness probe* pada *container orchestrator* agar container yang tidak responsif otomatis di-*restart*.

### Uptime Monitoring
*   **External Uptime Checks:** Gunakan layanan pemantauan eksternal (seperti **UptimeRobot**, **Pingdom**, atau **Better Uptime**) untuk memantau ketersediaan aplikasi dari perspektif pengguna akhir.
*   **SSL Certificate Monitoring:** Pantau masa berlaku sertifikat SSL/TLS agar tidak kedaluwarsa tanpa disadari.

---

## 3. Alerting & Notification

### Konfigurasi Alert
*   **Alert Rules:** Definisikan aturan *alerting* berdasarkan ambang batas (*threshold*) metrik yang kritis:
    *   🔴 **Critical:** CPU > 90%, Error Rate > 5%, Response Time P95 > 3 detik, Disk > 90%.
    *   🟡 **Warning:** CPU > 70%, Error Rate > 2%, Response Time P95 > 1.5 detik, Disk > 75%.
*   **Alert Channels:** Konfigurasikan saluran notifikasi alert ke platform komunikasi tim (seperti **Slack**, **Microsoft Teams**, **PagerDuty**, atau **Email**).
*   **Alert Fatigue Prevention:** Hindari *alert fatigue* dengan menerapkan *grouping*, *deduplication*, dan *silencing* pada alert yang berulang atau tidak kritis.

### Escalation Policy
*   **On-Call Rotation:** Terapkan jadwal rotasi *on-call* agar selalu ada personel yang bertanggung jawab merespons alert di luar jam kerja.
*   **Escalation Tiers:** Definisikan tingkatan eskalasi (Tier 1: engineer on-call → Tier 2: tech lead → Tier 3: engineering manager) dengan batas waktu respons per tingkatan.

---

## 4. Dashboard & Visualisasi

### Grafana / Monitoring Dashboard
*   **Overview Dashboard:** Buat dashboard utama yang menampilkan kesehatan keseluruhan sistem: *uptime*, *error rate*, *latency*, dan *active connections* per layanan.
*   **Service-Specific Dashboard:** Buat dashboard terpisah untuk setiap *microservice* dengan metrik detail (database query time, cache hit ratio, queue depth).
*   **Business Dashboard:** Tampilkan metrik bisnis real-time (jumlah transaksi, pengguna aktif) yang dapat diakses oleh *stakeholders* non-teknis.

---

## 5. Incident Response & Post-Mortem

### Proses Respons Insiden
*   **Incident Classification:** Klasifikasikan insiden berdasarkan tingkat keparahan:
    *   **SEV-1 (Critical):** Layanan utama down, seluruh pengguna terdampak. Target respons: < 15 menit.
    *   **SEV-2 (Major):** Degradasi performa signifikan atau fitur utama tidak berfungsi. Target respons: < 30 menit.
    *   **SEV-3 (Minor):** Masalah kecil yang tidak berdampak langsung pada pengguna. Target respons: < 4 jam.
*   **Runbook:** Siapkan dokumen *Runbook* berisi prosedur standar untuk menangani insiden umum (misal: cara restart service, cara rollback deployment, cara scale up resource).

### Post-Mortem & Continuous Improvement
*   **Blameless Post-Mortem:** Lakukan analisis *post-mortem* setelah setiap insiden SEV-1 dan SEV-2 tanpa menyalahkan individu — fokus pada perbaikan proses dan sistem.
*   **Action Items:** Dokumentasikan *action items* dari setiap *post-mortem* dan tetapkan *owner* serta *deadline* untuk pencegahan terulangnya insiden.

---

## ⚡ Command Cheat Sheet
*   `docker logs -f --tail=100 <container_id>` — Melihat 100 baris log terakhir dari container secara real-time.
*   `curl http://localhost:3000/health` — Mengecek status *health check* endpoint layanan.
*   `kubectl top pods` — Melihat penggunaan CPU dan memori pada pods Kubernetes.
*   `promtool check rules alert-rules.yml` — Memvalidasi file konfigurasi *alert rules* Prometheus.
*   `grafana-cli plugins install <plugin-name>` — Menginstal plugin tambahan untuk Grafana.

## 🛠️ Troubleshooting Umum
*   **Alert Tidak Terkirim:** Periksa konfigurasi *alert channel* (webhook URL, API token) dan pastikan layanan notifikasi (Slack/Teams) tidak memblokir *incoming webhooks*.
*   **Metrics Tidak Muncul di Dashboard:** Pastikan *exporter* (seperti `node-exporter`) berjalan dan *scrape config* Prometheus sudah benar.
*   **Log Tidak Muncul di ELK/Loki:** Periksa konfigurasi *log shipper* (Filebeat, Promtail) dan pastikan format log sesuai dengan *parser* yang dikonfigurasi.
*   **High Cardinality Alert:** Kurangi jumlah label unik pada metrik Prometheus untuk menghindari konsumsi memori berlebih.

## 📐 Standar Penamaan (Naming Conventions)
*   **Nama Metrik:** Menggunakan format *snake_case* dengan prefix nama layanan (contoh: `auth_service_login_requests_total`, `api_gateway_response_time_seconds`).
*   **Nama Dashboard:** Menggunakan format deskriptif (contoh: `Production Overview`, `Auth Service Detail`).
*   **Nama Alert Rule:** Menggunakan format *PascalCase* deskriptif (contoh: `HighErrorRate`, `DatabaseConnectionPoolExhausted`).

---

## ✅ Checklist & Definition of Done (DoD)

*   **Metrics & Logging:**
    *   [ ] Mengonfigurasi pengumpulan metrik infrastruktur dan aplikasi (Prometheus/Datadog/CloudWatch).
    *   [ ] Menerapkan *centralized logging* dengan format terstruktur (JSON) dan *correlation ID*.
    *   [ ] Menetapkan kebijakan retensi log yang sesuai kebutuhan.
*   **Health Checks & Uptime:**
    *   [ ] Menyediakan endpoint `/health` dan `/ready` pada setiap layanan mikro.
    *   [ ] Mengonfigurasi *uptime monitoring* eksternal untuk endpoint publik.
    *   [ ] Memantau masa berlaku sertifikat SSL/TLS.
*   **Alerting & Dashboard:**
    *   [ ] Mendefinisikan *alert rules* dengan ambang batas yang jelas (Critical & Warning).
    *   [ ] Mengonfigurasi saluran notifikasi alert (Slack/Teams/PagerDuty).
    *   [ ] Membuat dashboard *Overview* dan *Service-Specific* di Grafana/platform monitoring.
*   **Incident Response:**
    *   [ ] Menyusun dokumen *Runbook* untuk penanganan insiden umum.
    *   [ ] Menetapkan jadwal rotasi *on-call* dan kebijakan eskalasi.
    *   [ ] Melakukan *post-mortem* setelah setiap insiden kritis.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Sistem monitoring dan alerting berjalan aktif di lingkungan produksi.
    *   [ ] Dokumentasi *Runbook* dan prosedur eskalasi telah diverifikasi oleh tim.
