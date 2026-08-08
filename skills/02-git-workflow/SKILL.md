---
name: git-workflow-version-control-best-practices
description: Panduan branching strategy, commit conventions, pull request workflow, code merge, tagging, dan manajemen release menggunakan Git.
---

# Panduan Tahap: Git Workflow & Version Control

Tahap ini berfokus pada penerapan alur kerja *version control* yang terstruktur menggunakan **Git**, mencakup strategi percabangan (*branching*), konvensi penulisan *commit*, proses *Pull Request*, pengelolaan rilis (*release management*), serta praktik terbaik kolaborasi tim dalam pengembangan perangkat lunak.

## 1. Branching Strategy

### Git Flow (Direkomendasikan untuk Tim Besar / Rilis Terjadwal)
*   **Branch Utama:**
    *   `main` — Berisi kode yang stabil dan siap produksi (*production-ready*). Setiap *commit* di `main` merepresentasikan rilis resmi.
    *   `develop` — Branch integrasi utama tempat fitur-fitur baru digabungkan sebelum dirilis.
*   **Branch Pendukung:**
    *   `feature/<nama-fitur>` — Dibuat dari `develop` untuk pengembangan fitur baru (contoh: `feature/login-page`, `feature/user-dashboard`).
    *   `hotfix/<nama-perbaikan>` — Dibuat dari `main` untuk perbaikan darurat di produksi (contoh: `hotfix/fix-auth-token-expired`).
    *   `release/<versi>` — Dibuat dari `develop` saat mempersiapkan rilis baru (contoh: `release/v1.2.0`).
    *   `bugfix/<nama-perbaikan>` — Dibuat dari `develop` untuk perbaikan bug non-darurat.

### Trunk-Based Development (Alternatif untuk Tim Kecil / CI/CD Agresif)
*   Seluruh developer bekerja langsung di `main` atau menggunakan *short-lived branches* (usia < 1 hari).
*   Cocok untuk tim yang menerapkan CI/CD secara intensif dengan *feature flags*.

---

## 2. Commit Conventions (Conventional Commits)

### Format Commit Message
Gunakan format **Conventional Commits** agar riwayat perubahan kode mudah dibaca dan dapat diotomatisasi (seperti *auto-changelog*, *semantic versioning*):

```
<type>(<scope>): <subject>

[body opsional]

[footer opsional]
```

### Tipe Commit Standar

| Tipe | Deskripsi | Contoh |
|------|-----------|--------|
| `feat` | Penambahan fitur baru | `feat(auth): add login with Google OAuth` |
| `fix` | Perbaikan bug | `fix(api): resolve token expiry race condition` |
| `docs` | Perubahan dokumentasi saja | `docs(readme): update installation guide` |
| `style` | Perubahan format/style (tanpa ubah logika) | `style(css): fix button alignment on mobile` |
| `refactor` | Refaktorisasi kode tanpa ubah behavior | `refactor(user): extract validation logic` |
| `test` | Penambahan/perbaikan unit test | `test(auth): add test for session timeout` |
| `chore` | Perubahan konfigurasi/build tool | `chore(deps): update lodash to v4.17.21` |
| `perf` | Peningkatan performa | `perf(query): optimize user search with index` |
| `ci` | Perubahan konfigurasi CI/CD | `ci(github): add caching to build workflow` |

### Aturan Penulisan Commit
*   **Subject:** Gunakan huruf kecil, tanpa titik di akhir, maksimal 72 karakter.
*   **Body (Opsional):** Jelaskan *mengapa* perubahan dilakukan, bukan *apa* yang diubah.
*   **Breaking Changes:** Gunakan prefix `BREAKING CHANGE:` di footer atau tambahkan `!` setelah type (contoh: `feat(api)!: change auth endpoint response format`).

---

## 3. Pull Request (PR) Workflow

### Membuat Pull Request
*   **Satu PR = Satu Tujuan:** Setiap PR harus fokus pada satu fitur, satu bugfix, atau satu perubahan logis — hindari PR yang mencakup banyak perubahan tidak terkait.
*   **PR Description Template:** Sertakan informasi berikut di setiap PR:
    *   📋 **Deskripsi:** Apa yang diubah dan mengapa.
    *   🔗 **Referensi:** Link ke *issue* atau *ticket* terkait (contoh: `Closes #123`).
    *   ✅ **Checklist:** Daftar verifikasi sebelum merge.
    *   📸 **Screenshot/Video:** Lampirkan bukti visual untuk perubahan UI.
*   **Draft PR:** Gunakan *Draft PR* untuk pekerjaan yang masih berlangsung (*Work In Progress*) agar rekan tim dapat memberikan *feedback* lebih awal.

### Proses Review & Approval
*   **Minimal 1 Approval:** Setiap PR wajib mendapat minimal 1 persetujuan (*approval*) dari reviewer sebelum di-*merge*.
*   **Automated Checks:** Pastikan seluruh *CI checks* (linting, testing, security scan) lolos sebelum PR dapat di-*merge*.
*   **Review Turnaround Time:** Target waktu review maksimal **24 jam kerja** untuk menjaga kelancaran alur pengembangan.

### Merge Strategy
*   **Squash and Merge (Direkomendasikan):** Gabungkan seluruh commit dalam PR menjadi 1 commit bersih saat merge ke branch tujuan — menjaga riwayat *commit* tetap bersih.
*   **Merge Commit:** Gunakan jika ingin mempertahankan riwayat commit individual (cocok untuk release branch).
*   **Rebase and Merge:** Gunakan untuk menjaga riwayat linear tanpa *merge commit*.

---

## 4. Tagging & Release Management

### Semantic Versioning (SemVer)
Gunakan format **Semantic Versioning** untuk penomoran versi rilis:

```
MAJOR.MINOR.PATCH
```

*   **MAJOR** (`v2.0.0`): Perubahan yang *breaking* / tidak kompatibel dengan versi sebelumnya.
*   **MINOR** (`v1.1.0`): Penambahan fitur baru yang *backward-compatible*.
*   **PATCH** (`v1.0.1`): Perbaikan bug tanpa perubahan fitur.

### Git Tags & Rich Release Notes (Format Penulisan Pesan Tag)
Selalu gunakan **Annotated Tag** dengan pesan multi-baris (*multi-line message*) yang merinci seluruh daftar penambahan dan perubahan, mengikuti format standar **Keep a Changelog**:

#### Struktur Format Pesan Tag:
```
release(vX.Y.Z): <ringkasan singkat rilis>

### 🆕 Added
- <Daftar fitur, modul, atau dependensi baru yang ditambahkan>

### 🔄 Changed
- <Daftar perubahan, refactoring, atau peningkatan performa>

### 🐛 Fixed
- <Daftar perbaikan bug dan penanganan masalah teknis>

### 🔐 Security
- <Pembaruan dependensi atau perbaikan celah keamanan>

### ⚠️ Breaking Changes (jika ada)
- <Perubahan yang tidak kompatibel dengan versi sebelumnya>
```

#### Contoh Perintah Pembuatan Tag Berisi Rincian:
```bash
# Opsi 1: Multi-line tag langsung di terminal
git tag -a v1.3.0 -m "release(v1.3.0): support Angular 17+ and .NET 10 LTS

### 🆕 Added
- Angular 17+ Standalone Components, Signals, and Control Flow
- .NET 10 Minimal APIs, Native AOT, and EF Core 10
- Multi-language linter and testing commands

### 🔄 Changed
- Updated base container images to .NET 10 Chiseled
- Standardized universal coding conventions in AGENTS.md

### 🐛 Fixed
- Fixed section numbering across all skill documents"

# Opsi 2: Menggunakan file catatan rilis
git tag -a v1.3.0 -F RELEASE_NOTES.md

# Memeriksa detail isi pesan tag:
git show v1.3.0
git tag -n99 -l v1.3.0

# Push tag ke remote repository:
git push origin v1.3.0
```

---

## 5. Proteksi & Keamanan Repository

### Branch Protection Rules
*   **Proteksi Branch Utama:** Aktifkan *branch protection* pada `main` dan `develop`:
    *   ✅ Wajib *Pull Request* sebelum merge (tidak boleh *push* langsung).
    *   ✅ Wajib minimal 1 *approval* dari reviewer.
    *   ✅ Wajib seluruh *status checks* (CI) berhasil.
    *   ✅ Larangan *force push* dan *branch deletion*.
*   **CODEOWNERS:** Buat file `CODEOWNERS` untuk mendefinisikan pemilik kode yang otomatis diminta sebagai reviewer saat file tertentu diubah.

### Keamanan Kredensial
*   **`.gitignore` Wajib:** Pastikan file sensitif (`.env`, `*.pem`, `*.key`, `node_modules/`) masuk ke dalam `.gitignore` sebelum commit pertama.
*   **Git Secret Scanning:** Aktifkan fitur *secret scanning* pada repositori (tersedia di GitHub) untuk mendeteksi jika ada kredensial yang tidak sengaja ter-commit.
*   **Pre-commit Hooks:** Gunakan *pre-commit hooks* (seperti `husky` + `lint-staged`) untuk menjalankan *linting* dan pemeriksaan otomatis sebelum setiap commit.

---

## ⚡ Command Cheat Sheet
*   `git checkout -b feature/<nama>` — Membuat dan berpindah ke branch fitur baru.
*   `git add -p` — Menambahkan perubahan secara interaktif per *hunk* (lebih presisi).
*   `git commit -m "feat(scope): subject"` — Membuat commit dengan format *Conventional Commits*.
*   `git rebase -i HEAD~3` — Menyusun ulang 3 commit terakhir secara interaktif (*squash*, *reword*).
*   `git tag -a v1.0.0 -m "Release v1.0.0"` — Membuat *annotated tag* untuk rilis.
*   `git log --oneline --graph --all` — Melihat riwayat commit secara visual dan ringkas.
*   `git stash` / `git stash pop` — Menyimpan sementara perubahan lokal tanpa commit.
*   `git bisect start` — Memulai pencarian *commit* penyebab bug secara biner.

## 🛠️ Troubleshooting Umum
*   **Merge Conflict:** Selesaikan konflik secara manual, pastikan kedua perubahan terakomodasi. Gunakan `git mergetool` untuk visualisasi konflik yang lebih mudah.
*   **Commit ke Branch yang Salah:** Gunakan `git cherry-pick <commit-sha>` untuk memindahkan commit ke branch yang benar, lalu `git reset HEAD~1` di branch yang salah.
*   **File Sensitif Terlanjur Ter-commit:** Gunakan `git filter-branch` atau `BFG Repo-Cleaner` untuk menghapus file dari seluruh riwayat, lalu rotasi kredensial yang terekspos.
*   **Branch Outdated / Behind:** Jalankan `git pull --rebase origin develop` untuk menyinkronkan branch fitur dengan perubahan terbaru.

## 📐 Standar Penamaan (Naming Conventions)
*   **Nama Branch:** Menggunakan format *kebab-case* dengan prefix tipe (contoh: `feature/user-profile`, `hotfix/fix-login-error`, `release/v1.2.0`).
*   **Commit Message:** Mengikuti format *Conventional Commits* (contoh: `feat(auth): add OAuth2 login`).
*   **Tag / Versi:** Mengikuti format *Semantic Versioning* dengan prefix `v` (contoh: `v1.0.0`, `v2.1.3`).
*   **File CHANGELOG:** Menggunakan nama `CHANGELOG.md` di root repositori.

---

## ✅ Checklist & Definition of Done (DoD)

*   **Branching & Repository Setup:**
    *   [ ] Menetapkan dan mendokumentasikan strategi branching yang digunakan (Git Flow / Trunk-Based).
    *   [ ] Mengonfigurasi *branch protection rules* pada branch `main` dan `develop`.
    *   [ ] Membuat file `.gitignore` yang komprehensif dan file `CODEOWNERS`.
*   **Commit & PR Workflow:**
    *   [ ] Menerapkan format *Conventional Commits* pada seluruh commit.
    *   [ ] Mengonfigurasi *pre-commit hooks* (linting, format check) menggunakan `husky` atau sejenisnya.
    *   [ ] Menyusun template *Pull Request* yang standar.
    *   [ ] Memastikan proses review dan approval berjalan sesuai aturan.
*   **Release & Versioning:**
    *   [ ] Menerapkan *Semantic Versioning* (SemVer) untuk penomoran versi rilis.
    *   [ ] Membuat *annotated tags* untuk setiap versi rilis.
    *   [ ] Menyusun *Release Notes* atau `CHANGELOG.md` untuk setiap rilis.
*   **Keamanan Repository:**
    *   [ ] Mengaktifkan *secret scanning* pada repositori.
    *   [ ] Memastikan tidak ada file sensitif (`.env`, `*.key`) yang ter-commit ke repositori.
*   **Penyelesaian Tugas (DoD):**
    *   [ ] Seluruh anggota tim memahami dan mengikuti alur kerja Git yang telah disepakati.
    *   [ ] Dokumentasi alur kerja Git telah tersedia dan mudah diakses.
