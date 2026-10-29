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
      title: { en: "Retail Demand Forecasting for 1,200 SKUs", id: "Forecasting Permintaan Ritel untuk 1.200 SKU" },
      category: "Machine Learning",
      featured: true,
      image: "",
      chart: "line",
      date: "",
      logo: "",
      repo: "",
      summary: {
        en: "Built a forecasting system that predicts weekly demand per product and store, replacing spreadsheet-based planning.",
        id: "Membangun sistem forecasting yang memprediksi permintaan mingguan per produk dan toko, menggantikan perencanaan berbasis spreadsheet.",
      },
      impact: [
        { value: "-23%", label: { en: "forecast error (MAPE)", id: "error forecast (MAPE)" } },
        { value: "$180K", label: { en: "est. inventory savings / yr", id: "estimasi hemat stok / tahun" } },
        { value: "4 hrs → 5 min", label: { en: "weekly planning time", id: "waktu perencanaan mingguan" } },
      ],
      problem: {
        en: "Planners relied on last-year averages, causing frequent stock-outs and overstock.",
        id: "Tim perencana mengandalkan rata-rata tahun lalu, sehingga sering terjadi kehabisan stok maupun stok berlebih.",
      },
      approach: {
        en: "Feature engineering on seasonality, promotions and holidays; compared Prophet, LightGBM and a hierarchical baseline; time-series cross-validation.",
        id: "Feature engineering untuk musiman, promosi, dan hari libur; membandingkan Prophet, LightGBM, dan baseline hierarkis; time-series cross-validation.",
      },
      result: {
        en: "LightGBM with lag features won; deployed as a weekly batch job with a Streamlit dashboard for planners.",
        id: "LightGBM dengan lag features terpilih; di-deploy sebagai batch job mingguan dengan dashboard Streamlit untuk tim perencana.",
      },
      tags: ["Python", "LightGBM", "Prophet", "SQL", "Streamlit", "Airflow"],
      github: "https://github.com/yourname/demand-forecasting",
      demo: "",
    },
    {
      title: { en: "Customer Churn Prediction & Retention Playbook", id: "Prediksi Churn Pelanggan & Strategi Retensi" },
      category: "Machine Learning",
      featured: false,
      image: "",
      chart: "bars",
      date: "",
      logo: "",
      repo: "",
      summary: {
        en: "Classified at-risk subscribers and explained churn drivers with SHAP so marketing could act on them.",
        id: "Mengklasifikasikan pelanggan berisiko churn dan menjelaskan faktor penyebabnya dengan SHAP agar tim marketing bisa bertindak.",
      },
      impact: [
        { value: "0.87", label: "ROC-AUC" },
        { value: "+12%", label: { en: "retention in pilot", id: "retensi saat uji coba" } },
      ],
      problem: {
        en: "Marketing had no way to prioritise which customers to target with retention offers.",
        id: "Tim marketing tidak punya cara untuk memprioritaskan pelanggan mana yang perlu diberi penawaran retensi.",
      },
      approach: {
        en: "XGBoost with class-imbalance handling, SHAP for explainability, uplift-based targeting segments.",
        id: "XGBoost dengan penanganan class imbalance, SHAP untuk explainability, dan segmentasi target berbasis uplift.",
      },
      result: {
        en: "Top-decile targeting captured 41% of churners; pilot campaign improved retention by 12%.",
        id: "Menargetkan 10% teratas berhasil menjangkau 41% pelanggan yang churn; kampanye uji coba menaikkan retensi 12%.",
      },
      tags: ["Python", "XGBoost", "SHAP", "scikit-learn"],
      github: "https://github.com/yourname/churn-prediction",
      demo: "",
    },
    {
      title: { en: "Product Review Sentiment & Topic Analysis", id: "Analisis Sentimen & Topik Ulasan Produk" },
      category: "NLP",
      featured: false,
      image: "",
      chart: "scatter",
      date: "",
      logo: "",
      repo: "",
      summary: {
        en: "Fine-tuned a transformer on 50K multilingual reviews (EN/ID) to surface sentiment and recurring complaints.",
        id: "Fine-tuning model transformer pada 50 ribu ulasan multibahasa (EN/ID) untuk menemukan sentimen dan keluhan yang berulang.",
      },
      impact: [
        { value: "91%", label: "F1 score" },
        { value: "50K", label: { en: "reviews analysed", id: "ulasan dianalisis" } },
      ],
      problem: {
        en: "Thousands of reviews per month were read manually, so insights arrived weeks late.",
        id: "Ribuan ulasan per bulan dibaca secara manual, sehingga insight baru didapat berminggu-minggu kemudian.",
      },
      approach: {
        en: "Fine-tuned IndoBERT/XLM-R for sentiment, BERTopic for themes, deployed via FastAPI.",
        id: "Fine-tuning IndoBERT/XLM-R untuk sentimen, BERTopic untuk tema, di-deploy lewat FastAPI.",
      },
      result: {
        en: "Automated weekly insight report; top 3 complaint topics escalated to product team.",
        id: "Laporan insight mingguan otomatis; 3 topik keluhan teratas diteruskan ke tim produk.",
      },
      tags: ["PyTorch", "Hugging Face", "BERTopic", "FastAPI"],
      github: "https://github.com/yourname/review-nlp",
      demo: "",
    },
    {
      title: { en: "E-commerce Sales Dashboard", id: "Dashboard Penjualan E-commerce" },
      category: "Analytics",
      featured: false,
      image: "",
      chart: "area",
      date: "",
      logo: "",
      repo: "",
      summary: {
        en: "Designed a self-serve KPI dashboard covering revenue, cohorts and funnel conversion for leadership.",
        id: "Merancang dashboard KPI self-service yang mencakup pendapatan, cohort, dan konversi funnel untuk manajemen.",
      },
      impact: [
        { value: "15+", label: { en: "stakeholders using weekly", id: "stakeholder memakai tiap minggu" } },
        { value: "-70%", label: { en: "ad-hoc data requests", id: "permintaan data ad-hoc" } },
      ],
      problem: {
        en: "Leadership requested the same numbers every week from the data team.",
        id: "Manajemen meminta angka yang sama setiap minggu ke tim data.",
      },
      approach: {
        en: "Modelled data in SQL (star schema), built cohort and funnel views, designed dashboard in Tableau.",
        id: "Memodelkan data di SQL (star schema), membuat view cohort dan funnel, merancang dashboard di Tableau.",
      },
      result: {
        en: "Single source of truth for KPIs; freed ~6 hours/week of analyst time.",
        id: "Satu sumber data KPI yang konsisten; menghemat ~6 jam/minggu waktu analis.",
      },
      tags: ["SQL", "dbt", "Tableau", "BigQuery"],
      github: "",
      demo: "",
    },
    {
      title: { en: "A/B Test Analysis of Checkout Redesign", id: "Analisis A/B Test Desain Ulang Checkout" },
      category: "Machine Learning",
      featured: true,
      image: "",
      chart: "bars",
      date: "",
      logo: "",
      repo: "",
      summary: {
        en: "Designed and analysed an experiment to evaluate a new checkout flow, including power analysis and guardrail metrics.",
        id: "Merancang dan menganalisis eksperimen untuk mengevaluasi alur checkout baru, termasuk power analysis dan guardrail metrics.",
      },
      impact: [
        { value: "+4.2%", label: { en: "conversion (p < 0.01)", id: "konversi (p < 0,01)" } },
        { value: "2 wks", label: { en: "test duration", id: "durasi tes" } },
      ],
      problem: {
        en: "Team wanted to ship a redesign without evidence it improved conversion.",
        id: "Tim ingin merilis desain baru tanpa bukti bahwa desain itu meningkatkan konversi.",
      },
      approach: {
        en: "Power analysis for sample size, frequentist + Bayesian analysis, segment-level checks.",
        id: "Power analysis untuk ukuran sampel, analisis frequentist + Bayesian, dan pengecekan per segmen.",
      },
      result: {
        en: "Recommended full rollout; documented a reusable experiment template.",
        id: "Merekomendasikan rilis penuh; mendokumentasikan template eksperimen yang bisa dipakai ulang.",
      },
      tags: ["Python", "Statistics", "SciPy", "PyMC"],
      github: "",
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
      when: "2022 — 2024",
      role: "Data Analyst",
      org: "Company Name · Jakarta",
      type: "Full-time",
      logo: "",
      points: {
        en: [
          "Designed KPI dashboards adopted by leadership; cut ad-hoc requests by 70%.",
          "Automated weekly reporting pipeline with Python and SQL.",
        ],
        id: [
          "Merancang dashboard KPI yang dipakai manajemen; mengurangi permintaan ad-hoc 70%.",
          "Mengotomatiskan pipeline laporan mingguan dengan Python dan SQL.",
        ],
      },
    },
    {
      when: "2018 — 2022",
      role: { en: "Bachelor’s Degree in Informatics Engineering", id: "S1 Teknik Informatika" },
      org: "Sunan Kalijaga State Islamic University, Yogyakarta, Indonesia",
      type: { en: "Education", id: "Pendidikan" },
      logo: "../images/rima.jpg",
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
