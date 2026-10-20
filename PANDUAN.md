# Panduan Portofolio (versi sederhana)

Website ini cuma terdiri dari **2 file**:

| File | Isi |
|---|---|
| `index.html` | Tampilan website, **tidak perlu diubah** |
| `data.js` | **Semua isi portofolio**: profil, project, skill, pengalaman, warna tema |

Untuk update portofolio, cukup edit `data.js`. Pengunjung (recruiter) **tidak perlu akun apa pun**
untuk melihat websitemu.

Mau lihat hasilnya di komputer sendiri? Double-click `index.html`, website langsung terbuka di browser.

---

## 1. Publish ke GitHub Pages (sekali saja, ±5 menit)

1. Login ke <https://github.com> → **New repository**.
   - Nama: `USERNAME.github.io` (ganti USERNAME dengan username GitHub-mu). Dengan nama ini,
     alamat websitemu jadi pendek: `https://USERNAME.github.io`.
   - Pilih **Public** → **Create repository**.
2. Klik **uploading an existing file** → drag `index.html` dan `data.js` → **Commit changes**.
3. Buka **Settings → Pages**. Di *Source* pilih **Deploy from a branch**, *Branch*: **main**, folder **/ (root)** → **Save**.
4. Tunggu 1–2 menit, lalu buka `https://USERNAME.github.io`. Websitemu sudah online.

---

## 2. Cara update isi portofolio

1. Di repo GitHub, klik file **`data.js`** → klik ikon **pensil ✏️** (Edit).
2. Ubah teksnya. Untuk **menambah project**: salin satu blok `{ ... },` di bagian `projects`,
   tempel di bawahnya, lalu ganti isinya.
3. Klik **Commit changes**. Website ter-update dalam ±1 menit.

**Aturan penting supaya tidak error:**
- Teks selalu di dalam tanda kutip: `"Data Scientist"`.
- Setiap item diakhiri **koma**: `title: "…",`.
- Kalau setelah diedit websitenya kosong, biasanya ada koma atau tanda kutip yang hilang.
  Buka tab **History** di file itu untuk melihat/membandingkan versi sebelumnya.

**Menambah gambar** (cover project, foto profil, CV):
1. Di repo: **Add file → Upload files** → upload, misalnya `churn.png`, `me.jpg`, `resume.pdf`.
2. Tulis nama filenya di `data.js`: `image: "churn.png"`, `photo: "me.jpg"`, `resume: "resume.pdf"`.

---

## 3. Ganti warna tema

Di baris paling atas `data.js`:

```js
theme: "brown",
```

Ganti dengan `"brown"` (coklat), `"blue"` (biru), atau `"pink"`. Ketiganya juga punya versi
mode gelap otomatis (tombol 🌙 di pojok kanan atas).

---

## 4. Integrasi GitHub (opsional)

Website bisa menampilkan info **versi final** project langsung dari GitHub. "Final" artinya
**GitHub Release**, jadi commit biasa tidak mengubah apa pun. Kartu project akan menampilkan
badge `● v1.0 · Released Oct 2026`, ★ stars, dan bahasa pemrograman.

**Cara A: hubungkan ke project yang ada.** Di `data.js`, isi `repo` pada project:
```js
repo: "username/churn-prediction",
```

**Cara B: project muncul otomatis.** Di `data.js` isi `githubUsername: "username",` lalu di setiap repo project:
1. Klik ⚙️ di samping **About** → isi *Description* dan **Topics**: tambahkan `portfolio`
   (plus `machine-learning`, `nlp`, `data-analysis`, dll. → jadi kategori).
2. Kalau sudah final: **Releases → Create a new release** → tag `v1.0` → **Publish release**.

Project langsung muncul di website, tanpa perlu edit `data.js` lagi. Tidak mau pakai fitur ini?
Biarkan `repo: ""` dan `githubUsername: ""` kosong.

---

## Tips agar dilirik recruiter luar negeri

- Tulis semua konten dalam **bahasa Inggris**.
- Isi `impact` setiap project dengan angka (akurasi, % peningkatan, waktu/biaya yang dihemat).
- Tandai 1 project terbaik dengan `featured: true`.
- Upload **cover image** berupa screenshot asli (dashboard, grafik hasil model).
- Pastikan setiap repo project punya README yang rapi.
