# Aturan Global — MyAgent Workspace

## Bahasa & Penulisan
*   Gunakan **Bahasa Indonesia** sebagai bahasa utama untuk dokumentasi, komentar kode, dan penamaan variabel yang bersifat deskriptif bisnis.
*   Gunakan **Bahasa Inggris** untuk penamaan variabel, fungsi, class, dan istilah teknis standar industri.

## Konvensi Umum Kode
*   Selalu gunakan **strict mode** pada JavaScript/TypeScript.
*   Gunakan **ES6+** syntax (arrow functions, destructuring, template literals, async/await).
*   Hindari penggunaan `var` — gunakan `const` secara default, `let` hanya jika nilai perlu diubah.
*   Setiap fungsi/method harus memiliki **satu tanggung jawab tunggal** (Single Responsibility Principle).
*   Batasi panjang fungsi maksimal **50 baris** — pecah menjadi fungsi kecil jika melebihi.

## Keamanan Global
*   **Tidak boleh ada kredensial, API key, atau secret** yang di-hardcode dalam source code.
*   Selalu gunakan file `.env` untuk konfigurasi sensitif dan pastikan `.env` masuk ke dalam `.gitignore`.
*   Terapkan prinsip **Least Privilege** pada seluruh akses database, API, dan infrastruktur.
*   Seluruh komunikasi data wajib menggunakan **HTTPS/TLS**.

## Standar Dokumentasi
*   Setiap file konfigurasi penting harus memiliki komentar penjelasan.
*   API endpoints harus terdokumentasi menggunakan **Swagger/OpenAPI**.
*   Setiap perubahan signifikan harus dicatat dalam **CHANGELOG.md**.

## Standar Kualitas
*   Kode harus lolos **linter** tanpa error kritikal sebelum commit.
*   Target **code coverage** minimal 80% pada logika bisnis inti.
*   Seluruh kode harus melalui proses **code review** sebelum merge ke branch utama.
