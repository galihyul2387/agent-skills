// Contoh Konfigurasi ESLint + Prettier + Commitlint
// ==================================================
// File-file konfigurasi ini mengikuti best practice dari skill 10-code-review-standards
// Salin dan sesuaikan dengan kebutuhan proyek

// ==============================
// .eslintrc.json
// ==============================
// Simpan sebagai .eslintrc.json di root proyek
const eslintConfig = {
  "root": true,
  "env": {
    "browser": true,
    "node": true,
    "es2024": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"                                    // <-- Menonaktifkan rules yang konflik dengan Prettier
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-console": "warn",                         // Peringatkan penggunaan console.log
    "no-unused-vars": "off",                      // Dihandle oleh TypeScript
    "@typescript-eslint/no-unused-vars": "error",  // Gunakan versi TypeScript
    "@typescript-eslint/explicit-function-return-type": "warn",
    "prefer-const": "error",                      // Gunakan const secara default
    "no-var": "error",                            // Larang penggunaan var
    "eqeqeq": ["error", "always"],                // Wajib === bukan ==
    "curly": "error",                             // Wajib kurung kurawal pada if/else
    "max-lines-per-function": ["warn", 50]        // Sesuai aturan AGENTS.md: maks 50 baris per fungsi
  }
};

// ==============================
// .prettierrc
// ==============================
// Simpan sebagai .prettierrc di root proyek
const prettierConfig = {
  "semi": true,
  "trailingComma": "all",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "arrowParens": "always",
  "endOfLine": "lf"            // Konsisten dengan .gitattributes (LF)
};

// ==============================
// commitlint.config.js
// ==============================
// Simpan sebagai commitlint.config.js di root proyek
// Instal: npm install -D @commitlint/cli @commitlint/config-conventional
const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',      // Fitur baru
        'fix',       // Perbaikan bug
        'docs',      // Dokumentasi
        'style',     // Format/style
        'refactor',  // Refaktorisasi
        'test',      // Pengujian
        'chore',     // Konfigurasi/build
        'perf',      // Performa
        'ci',        // CI/CD
        'revert',    // Revert commit
      ],
    ],
    'subject-max-length': [2, 'always', 72],     // Maks 72 karakter
    'subject-case': [2, 'always', 'lower-case'], // Huruf kecil
    'subject-full-stop': [2, 'never', '.'],      // Tanpa titik
  },
};

// ==============================
// Perintah Instalasi
// ==============================
// Jalankan perintah berikut untuk menginstal dependensi:
//
// npm install -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
// npm install -D prettier eslint-config-prettier
// npm install -D @commitlint/cli @commitlint/config-conventional
// npm install -D husky lint-staged
//
// Setup Husky:
// npx husky init
// echo "npx lint-staged" > .husky/pre-commit
// echo "npx commitlint --edit \$1" > .husky/commit-msg
//
// Tambahkan ke package.json:
// "lint-staged": {
//   "*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"],
//   "*.{json,md,yml,yaml}": ["prettier --write"]
// }
