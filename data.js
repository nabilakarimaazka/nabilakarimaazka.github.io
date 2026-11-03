/* =====================================================================
   ISI PORTOFOLIO KAMU — cukup edit file ini saja.
   - Teks selalu di dalam tanda kutip "...".
   - Setiap item dipisah koma. Kalau website kosong setelah diedit,
     biasanya ada koma atau tanda kutip yang hilang.
   - true / false selalu huruf kecil.
   - Gambar: upload ke folder "images", lalu tulis misalnya "images/me.jpg".

   DUA BAHASA (tombol EN / ID di website):
   - Teks dua bahasa ditulis begini:  { en: "Hello", id: "Halo" }
   - Teks yang sama di kedua bahasa cukup ditulis biasa: "Python"
   ===================================================================== */

window.PORTFOLIO = {

  // Warna tema: "blue", "coral", "pink", atau "brown"
  theme: "blue",

  // Bahasa saat website pertama dibuka: "en" atau "id"
  defaultLanguage: "en",

  // Username GitHub kamu. Repo yang punya topic "portfolio" + sebuah Release
  // akan muncul otomatis sebagai project. Kosongkan "" kalau tidak mau.
  githubUsername: "",

  profile: {
    greeting: { en: "Hi, I'm", id: "Hai, saya" },
    name: "Nabila Karima Azka",
    initials: "NK",
    role: "Junior Data Scientist",
    status: { en: "Open to remote roles · Full-time & contract", id: "Terbuka untuk kerja remote · Full-time & kontrak" },
    intro: {
      en: "I build machine learning models, analytics pipelines and dashboards that teams actually use — from problem framing to production. Focused on forecasting, NLP and customer analytics.",
      id: "Saya membangun model machine learning, pipeline analitik, dan dashboard yang benar-benar dipakai tim — mulai dari merumuskan masalah sampai ke produksi. Fokus pada forecasting, NLP, dan customer analytics.",
    },
    location: "Indonesia · GMT+7",
    email: "nabilakarimaazka@gmail.com",
    linkedin: "https://linkedin.com/in/nabilakarima",
    github: "https://github.com/nabilakarimaazka",
    resume: "",   // contoh: "resume.pdf" (upload file PDF-nya ke repo)
    photo: "images/rima.jpg",    // foto di kotak kanan atas, contoh: "images/me.jpg" (upload fotonya ke folder images)
  },

  // Angka besar di kartu bawah nama. Bisa 1 atau 2 kartu.
  heroKpis: [
    { value: { en: "3+ yrs", id: "3+ thn" }, label: { en: "Years of experience", id: "Pengalaman" } },
    { value: "8+", label: { en: "End-to-end projects", id: "Proyek end-to-end" } },
  ],

  // Chip di kartu "Tech stack"
  techStack: ["Python", "SQL", "Pandas", "scikit-learn", "XGBoost", "PyTorch", "Tableau", "BigQuery"],

  /* ---------------------------------------------------------------
     PROJECTS — untuk menambah project, salin satu blok { ... },
     tempel di bawahnya, lalu ganti isinya.
     category: dipakai untuk tombol filter
     featured: true → tampil besar di paling atas
     image:    gambar cover (screenshot dashboard/chart). Kalau kosong,
               cover dibuat otomatis.
     chart:    gaya cover otomatis: "line", "area", "bars", "scatter"
     date:     periode project, contoh "Jan 2025 — Mar 2025"
     logo:     opsional, ikon kecil project, contoh "images/logo-churn.png"
     repo:     opsional, "username/nama-repo" → kartu menampilkan
               versi Release terbaru & stars dari GitHub.
     --------------------------------------------------------------- */
  projects: [
    {
      // ★ Project asli pertama — sumber: README di repo GitHub
      title: { en: "Customer Repeat Order Prediction", id: "Prediksi Repeat Order Pelanggan" },
      category: "Machine Learning",
      featured: true,
      image: "https://raw.githubusercontent.com/nabilakarimaazka/customer-repeat-order-prediction/main/docs/prospects.png",
      chart: "bars",
      date: { en: "Sep — Oct 2026", id: "Sep — Okt 2026" },
      logo: "",
      repo: "nabilakarimaazka/customer-repeat-order-prediction",
      summary: {
        en: "Ranks wholesale customers by how likely they are to order again in the next 30 days, so the sales team follows up with the right people first — delivered as a Streamlit app with a monthly update workflow.",
        id: "Mengurutkan pelanggan grosir berdasarkan peluang mereka order lagi dalam 30 hari ke depan, agar tim sales menghubungi orang yang tepat lebih dulu — disajikan sebagai aplikasi Streamlit dengan alur update bulanan.",
      },
      impact: [
        { value: "2.45×", label: { en: "lift in top 20% of customers", id: "lift di 20% pelanggan teratas" } },
        { value: "-59%", label: { en: "contacts needed per reorder", id: "kontak per repeat order" } },
        { value: "0.789", label: { en: "ROC-AUC (PR-AUC 0.569)", id: "ROC-AUC (PR-AUC 0,569)" } },
      ],
      problem: {
        en: "A wholesale retailer's sales team has limited time. Calling every customer is expensive, and most calls reach people who would order anyway or are not about to order at all. With only 22% of customers reordering in a given month, they needed a ranked monthly follow-up list.",
        id: "Tim sales sebuah retailer grosir punya waktu terbatas. Menghubungi semua pelanggan itu mahal, dan kebanyakan telepon sampai ke orang yang memang akan order atau justru belum akan order. Karena hanya 22% pelanggan yang order ulang tiap bulan, mereka butuh daftar follow-up bulanan yang sudah diurutkan.",
      },
      approach: {
        en: "Cleaned the UCI Online Retail II data (5,852 customers) and built monthly snapshots so features only use orders before each cutoff — no data leakage. Engineered 18 behavioural features (recency, order gaps, frequency, spend, returns), used a time-based train/validation/test split, and compared a recency rule and logistic regression against LightGBM. SHAP gives the top 3 reasons behind each customer's score.",
        id: "Membersihkan data UCI Online Retail II (5.852 pelanggan) dan membuat snapshot bulanan sehingga fitur hanya memakai order sebelum tiap cutoff — tanpa data leakage. Membuat 18 fitur perilaku (recency, jarak antar order, frekuensi, belanja, retur), memakai pembagian train/validasi/test berbasis waktu, dan membandingkan aturan recency serta logistic regression dengan LightGBM. SHAP memberi 3 alasan utama di balik skor tiap pelanggan.",
      },
      result: {
        en: "Contacting the top 20% reaches 49% of reordering customers (vs 38% with a simple recency rule), with lift stable at 2.36–2.64× across three test months. About 1.8 contacts per reorder instead of 4.5. The Streamlit app generates the ranked prospect list with reasons, checks last month's predictions against actual sales, and only activates a retrained model if it doesn't perform worse.",
        id: "Menghubungi 20% pelanggan teratas menjangkau 49% pelanggan yang order ulang (dibanding 38% dengan aturan recency biasa), dengan lift stabil 2,36–2,64× selama tiga bulan uji. Sekitar 1,8 kontak per repeat order, bukan 4,5. Aplikasi Streamlit membuat daftar prospek beserta alasannya, mengecek prediksi bulan lalu terhadap penjualan aktual, dan hanya mengaktifkan model hasil retrain jika performanya tidak lebih buruk.",
      },
      tags: ["Python", "LightGBM", "scikit-learn", "SHAP", "Pandas", "Streamlit"],
      github: "https://github.com/nabilakarimaazka/customer-repeat-order-prediction",
      demo: "",
    },
    {
      // ★ Project asli — sumber: experiment brief, SQL & notebook di repo GitHub
      title: { en: "Marketing Campaign A/B Test Analysis", id: "Analisis A/B Test Kampanye Marketing" },
      category: "Analytics",
      featured: false,
      image: "images/ab-test-cover.svg",   // grafik hasil: konversi iklan vs kontrol
      chart: "bars",
      date: { en: "Nov 2026", id: "Nov 2026" },
      logo: "",
      repo: "nabilakarimaazka/marketing-ab-test-analysis",
      summary: {
        en: "Evaluating whether an online ad campaign actually increases purchases, by comparing users who saw product ads with a hold-out group shown public service announcements — from experiment brief to SQL data checks and statistical testing.",
        id: "Mengevaluasi apakah kampanye iklan online benar-benar meningkatkan pembelian, dengan membandingkan pengguna yang melihat iklan produk dan grup kontrol yang melihat iklan layanan masyarakat — mulai dari experiment brief, pengecekan data dengan SQL, sampai uji statistik.",
      },
      impact: [
        { value: "+0.77 pp", label: { en: "conversion, ads vs control", id: "konversi, iklan vs kontrol" } },
        { value: "~43%", label: { en: "relative lift (2.56% vs 1.79%)", id: "relative lift (2,56% vs 1,79%)" } },
        { value: "588K", label: { en: "users checked with SQL", id: "pengguna dicek dengan SQL" } },
      ],
      problem: {
        en: "The company ran an ad campaign and needed to know whether the ads truly drive conversions, how big the effect is, and whether it justifies the campaign cost. Only ~4% of users were held out as a control group, and the planned split was not documented.",
        id: "Perusahaan menjalankan kampanye iklan dan perlu tahu apakah iklan benar-benar mendorong konversi, seberapa besar efeknya, dan apakah sepadan dengan biaya kampanye. Hanya ~4% pengguna yang dijadikan grup kontrol, dan rasio pembagian yang direncanakan tidak terdokumentasi.",
      },
      approach: {
        en: "Wrote an experiment brief first (two-sided hypotheses, α = 0.05, decision rules, threats to validity). Built a clean table in DuckDB and ran SQL data-quality checks: duplicates, users in both groups, missing values, valid ranges and allocation. Checked sample ratio mismatch (p = 0.9998 under an assumed 96/4 design). Next: two-proportion z-test, 95% CI, power/MDE and Bonferroni-corrected segment analysis.",
        id: "Menyusun experiment brief lebih dulu (hipotesis dua arah, α = 0,05, aturan keputusan, ancaman validitas). Membuat tabel bersih di DuckDB dan menjalankan pengecekan kualitas data dengan SQL: duplikat, pengguna di dua grup, nilai kosong, rentang nilai, dan alokasi grup. Mengecek sample ratio mismatch (p = 0,9998 dengan asumsi desain 96/4). Berikutnya: two-proportion z-test, CI 95%, power/MDE, dan analisis segmen dengan koreksi Bonferroni.",
      },
      result: {
        en: "Clean data: 588,101 unique users, no duplicates, no overlap between groups, no missing values. The ad group converts at 2.56% vs 1.79% for control (+0.77 percentage points, ~43% relative lift). Statistical significance and the final recommendation are in progress.",
        id: "Data bersih: 588.101 pengguna unik, tanpa duplikat, tanpa pengguna di dua grup, tanpa nilai kosong. Grup iklan berkonversi 2,56% vs 1,79% untuk kontrol (+0,77 poin persentase, ~43% relative lift). Uji signifikansi statistik dan rekomendasi akhir sedang dikerjakan.",
      },
      tags: ["SQL", "DuckDB", "Python", "A/B Testing", "SciPy", "Statistics"],
      github: "https://github.com/nabilakarimaazka/marketing-ab-test-analysis",
      demo: "",
    },
  ],

  skills: [
    { icon: "⌘", name: { en: "Languages & Data", id: "Bahasa & Data" }, note: { en: "Daily drivers", id: "Dipakai sehari-hari" }, items: ["Python", "SQL", "R", "Pandas", "NumPy", "Polars"] },
    { icon: "◆", name: "Machine Learning", note: { en: "Modelling & evaluation", id: "Pemodelan & evaluasi" }, items: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "Hugging Face", "SHAP"] },
    { icon: "▲", name: { en: "Statistics", id: "Statistika" }, note: { en: "Inference & experimentation", id: "Inferensi & eksperimen" }, items: ["A/B testing", "Hypothesis testing", "Regression", "Time series", "Bayesian"] },
    { icon: "▦", name: { en: "Visualization & BI", id: "Visualisasi & BI" }, note: { en: "Communicating results", id: "Menyampaikan hasil" }, items: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Streamlit"] },
    { icon: "☁", name: "Data Engineering & MLOps", note: { en: "Getting to production", id: "Sampai ke produksi" }, items: ["Airflow", "dbt", "Docker", "FastAPI", "MLflow", "Git"] },
    { icon: "◎", name: "Cloud", note: { en: "Platforms", id: "Platform" }, items: ["BigQuery", "GCP", "AWS (S3, SageMaker)", "Snowflake"] },
  ],

  /* type:   label kecil di kanan, contoh "Full-time", "Internship", "Contract"
     logo:   opsional, logo perusahaan, contoh "images/logo-company.png"
     org:    "Nama Perusahaan · Lokasi" (bagian setelah · tampil sebagai lokasi)
     points: daftar pencapaian. Dua bahasa: { en: [ ... ], id: [ ... ] } */
  experience: [
    {
      when: { en: "2024 — Present", id: "2024 — Sekarang" },
      role: "Data Scientist",
      org: "Company Name · Remote",
      type: "Full-time",
      logo: "",
      points: {
        en: [
          "Built demand forecasting models used by 20+ planners across 3 regions.",
          "Owned experimentation analysis for product team (10+ A/B tests).",
          "Mentored 2 junior analysts on SQL and Python best practices.",
        ],
        id: [
          "Membangun model forecasting permintaan yang dipakai 20+ perencana di 3 wilayah.",
          "Bertanggung jawab atas analisis eksperimen untuk tim produk (10+ A/B test).",
          "Membimbing 2 analis junior tentang praktik terbaik SQL dan Python.",
        ],
      },
    },
    {
      when: "Des 2023 - Mei 2025",
      role: "Supervisor Marketing Data Analyst",
      org: "Tunas Dwipa Matra (Tunas Honda) · Onsite",
      type: "Full-time",
      logo: "../images/tunas_honda.jpg",
      points: {
        en: [
          "Analyzed 1M+ customer and transaction records across 50+ dealer branches to identify customer behavior patterns, purchasing trends, and opportunities for customer retention.",
          "Developed and evaluated predictive models to identify customers with a high likelihood of repeat purchases in 2024, enabling sales teams to prioritize follow-ups toward higher-potential customers.",
          "Monitored daily performance across 50+ Honda dealerships to track KPIs and identify performance trends.",
          "Monitored user activity and behavior across applications serving 500K+ users to identify usage patterns and improvement opportunities.",
        ],
        id: [
          "Menganalisis lebih dari 1 juta catatan pelanggan dan transaksi di lebih dari 50 cabang dealer untuk mengidentifikasi pola perilaku pelanggan, tren pembelian, dan peluang untuk mempertahankan pelanggan.",
          "Telah mengembangkan dan mengevaluasi model prediktif untuk mengidentifikasi pelanggan yang memiliki kemungkinan tinggi untuk melakukan pembelian ulang pada tahun 2024, sehingga tim penjualan dapat memprioritaskan tindak lanjut terhadap pelanggan yang memiliki potensi lebih tinggi.",
          "Memantau performa harian 50+ dealer Honda untuk mengevaluasi KPI dan mengidentifikasi tren kinerja.",
          "Memantau aktivitas dan perilaku pengguna aplikasi dengan lebih dari 500 ribu pengguna untuk mengidentifikasi pola penggunaan dan peluang peningkatan layanan.",
        ],
      },
    },
    {
      when: "Sep 2020 - Feb 2023",
      role: { en: "Head of Treasury Staff & Mathematics Teacher", id: "Kepala Bendahara dan Guru Matematika" },
      org: "SMA Sains Al-Quran Wahid Hasyim · Yogyakarta",
      type: "Part-time",
      logo: "../images/sma_sains.jpg",
      points: {
        en: [
          "Analyzed monthly learning outcomes of 90+ students to identify problem areas and designed data-informed teaching methods.",
          "Led financial planning and monthly reporting, including budget and payroll for 40+ staff.",
        ],
        id: [
          "Menganalisis hasil belajar bulanan lebih dari 90 siswa untuk mengidentifikasi area yang perlu diperbaiki dan merancang metode pengajaran yang didasarkan pada data.",
          "Memimpin perencanaan keuangan dan pelaporan bulanan, termasuk anggaran dan penggajian untuk lebih dari 40 staf.",
        ],
      },
    },
    {
      when: "2019 — 2023",
      role: { en: "Bachelor’s Degree in Informatics Engineering", id: "S1 Teknik Informatika" },
      org: "Sunan Kalijaga State Islamic University, Yogyakarta, Indonesia",
      type: { en: "Education", id: "Pendidikan" },
      logo: "images/uin_suka.png",
      points: {
        en: ["Thesis: A COMPARISON OF TWITTER SENTIMENT ANALYSIS USING THE NAIVE BAYES CLASSIFIER AND SUPPORT VECTOR MACHINE METHODS (Case Study: Tweet Responses to Electric Cars).", "GPA 3.55 / 4.0"],
        id: ["Skripsi: PERBANDINGAN ANALISIS SENTIMEN TWITTER DENGAN METODE NAIVE BAYES CLASSIFIER DAN SUPPORT VECTOR MACHINE (Studi Kasus : Data Tanggapan Tweet Terhadap Mobil Listrik)", "IPK 3,55 / 4,0"],
      },
    },
  ],

  /* SERTIFIKAT — kalau kosong [], bagian Certificates disembunyikan.
     title:  nama sertifikat
     issuer: penerbit, contoh "Coursera · Google", "Dicoding", "IBM"
     date:   tanggal terbit, contoh "Mar 2025"
     credentialId: opsional, nomor/ID kredensial
     url:    link verifikasi sertifikat (Credly, Coursera, Dicoding, dll.)
     logo:   opsional, logo penerbit, contoh "images/logo-google.png"
     image:  opsional, gambar/screenshot sertifikat, contoh "images/cert-google.jpg"
     skills: daftar skill yang dipelajari
     ⚠ 3 contoh di bawah masih CONTOH — ganti dengan sertifikatmu sendiri. */
  certificates: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Coursera · Google",
      date: "Jan 2025",
      credentialId: "",
      url: "",
      logo: "",
      image: "",
      skills: ["SQL", "R", "Tableau", "Data Cleaning"],
    },
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "Coursera · IBM",
      date: "Jun 2024",
      credentialId: "",
      url: "",
      logo: "",
      image: "",
      skills: ["Python", "Machine Learning", "Pandas"],
    },
    {
      title: { en: "Machine Learning Developer Path", id: "Alur Belajar Machine Learning Developer" },
      issuer: "Dicoding",
      date: "Feb 2024",
      credentialId: "",
      url: "",
      logo: "",
      image: "",
      skills: ["TensorFlow", "Deep Learning", "NLP"],
    },
  ],

  /* ARTIKEL — opsional. Kalau kosong [], bagian Articles disembunyikan.
     Contoh:
     { title: "How I built a churn model", date: "Oct 2026", source: "Medium",
       url: "https://medium.com/...", image: "", summary: "..." },  */
  articles: [],

  // Kartu "cara saya bekerja" di bawah Skills
  why: [
    {
      title: { en: "Async-first communication", id: "Komunikasi async" },
      text: {
        en: "Clear written updates, documented notebooks and decision logs so work keeps moving across time zones.",
        id: "Update tertulis yang jelas, notebook terdokumentasi, dan catatan keputusan agar pekerjaan tetap jalan lintas zona waktu.",
      },
    },
    {
      title: { en: "Business before models", id: "Bisnis dulu, baru model" },
      text: {
        en: "I start from the metric that matters, then pick the simplest method that moves it — and explain results to non-technical stakeholders.",
        id: "Saya mulai dari metrik yang penting, lalu memilih metode paling sederhana yang bisa menggerakkannya — dan menjelaskan hasilnya ke stakeholder non-teknis.",
      },
    },
    {
      title: { en: "Production mindset", id: "Pola pikir produksi" },
      text: {
        en: "Reproducible pipelines, version control, testing and monitoring — not just a model that lives in a notebook.",
        id: "Pipeline yang reproducible, version control, testing, dan monitoring — bukan sekadar model yang hanya hidup di notebook.",
      },
    },
  ],
};
