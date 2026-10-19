/* =====================================================================
   ISI PORTOFOLIO KAMU — cukup edit file ini saja.
   - Teks selalu di dalam tanda kutip "...".
   - Setiap item dipisah koma. Kalau website kosong setelah diedit,
     biasanya ada koma atau tanda kutip yang hilang.
   - Gambar: upload ke folder "images", lalu tulis misalnya "images/churn.png".
   ===================================================================== */

window.PORTFOLIO = {

  // Warna tema: "brown", "blue", atau "pink"
  theme: "pink",

  // Username GitHub kamu. Repo yang punya topic "portfolio" + sebuah Release
  // akan muncul otomatis sebagai project. Kosongkan "" kalau tidak mau.
  githubUsername: "",

  profile: {
    name: "Nabila Karima Azka",
    initials: "NK",
    role: "Junior Data Scientist",
    status: "Open to remote roles · Full-time & contract",
    headline: "Data Scientist turning messy data into",
    headlineHighlight: "decisions that move metrics.",
    intro: "I build machine learning models, analytics pipelines and dashboards that teams actually use — from problem framing to production. Focused on forecasting, NLP and customer analytics.",
    location: "Indonesia · GMT+7",
    availability: "Overlap with EU & APAC hours",
    language: "English: Professional",
    email: "you@email.com",
    linkedin: "https://linkedin.com/in/yourname",
    github: "https://github.com/yourname",
    resume: "",            // contoh: "resume.pdf" (upload file PDF-nya ke repo)
    photo: "",             // opsional, contoh: "images/me.jpg"
  },

  // Angka di kartu kanan atas
  heroKpis: [
    { value: "8+", label: "End-to-end projects" },
    { value: "-23%", label: "Forecast error (MAPE)" },
  ],

  // Baris statistik di bawah hero
  stats: [
    { value: "3+ yrs", label: "Working with data" },
    { value: "8", label: "Projects shipped" },
    { value: "12", label: "Certifications" },
    { value: "100%", label: "Remote-ready setup" },
  ],

  /* ---------------------------------------------------------------
     PROJECTS — untuk menambah project, salin satu blok { ... },
     tempel di bawahnya, lalu ganti isinya.
     chart: gaya grafik otomatis kalau tidak ada gambar
            ("line", "area", "bars", "scatter")
     repo:  opsional, "username/nama-repo" → kartu menampilkan
            versi Release terbaru, stars, dan bahasa dari GitHub.
     --------------------------------------------------------------- */
  projects: [
    {
      title: "Retail Demand Forecasting for 1,200 SKUs",
      category: "Machine Learning",
      featured: true,
      image: "",
      chart: "line",
      repo: "",
      summary: "Built a forecasting system that predicts weekly demand per product and store, replacing spreadsheet-based planning.",
      impact: [
        { value: "-23%", label: "forecast error (MAPE)" },
        { value: "$180K", label: "est. inventory savings / yr" },
        { value: "4 hrs → 5 min", label: "weekly planning time" },
      ],
      problem: "Planners relied on last-year averages, causing frequent stock-outs and overstock.",
      approach: "Feature engineering on seasonality, promotions and holidays; compared Prophet, LightGBM and a hierarchical baseline; time-series cross-validation.",
      result: "LightGBM with lag features won; deployed as a weekly batch job with a Streamlit dashboard for planners.",
      tags: ["Python", "LightGBM", "Prophet", "SQL", "Streamlit", "Airflow"],
      github: "https://github.com/yourname/demand-forecasting",
      demo: "",
    },
    {
      title: "Customer Churn Prediction & Retention Playbook",
      category: "Machine Learning",
      featured: false,
      image: "",
      chart: "bars",
      repo: "",
      summary: "Classified at-risk subscribers and explained churn drivers with SHAP so marketing could act on them.",
      impact: [
        { value: "0.87", label: "ROC-AUC" },
        { value: "+12%", label: "retention in pilot" },
      ],
      problem: "Marketing had no way to prioritise which customers to target with retention offers.",
      approach: "XGBoost with class-imbalance handling, SHAP for explainability, uplift-based targeting segments.",
      result: "Top-decile targeting captured 41% of churners; pilot campaign improved retention by 12%.",
      tags: ["Python", "XGBoost", "SHAP", "scikit-learn"],
      github: "https://github.com/yourname/churn-prediction",
      demo: "",
    },
    {
      title: "Product Review Sentiment & Topic Analysis",
      category: "NLP",
      featured: false,
      image: "",
      chart: "scatter",
      repo: "",
      summary: "Fine-tuned a transformer on 50K multilingual reviews (EN/ID) to surface sentiment and recurring complaints.",
      impact: [
        { value: "91%", label: "F1 score" },
        { value: "50K", label: "reviews analysed" },
      ],
      problem: "Thousands of reviews per month were read manually, so insights arrived weeks late.",
      approach: "Fine-tuned IndoBERT/XLM-R for sentiment, BERTopic for themes, deployed via FastAPI.",
      result: "Automated weekly insight report; top 3 complaint topics escalated to product team.",
      tags: ["PyTorch", "Hugging Face", "BERTopic", "FastAPI"],
      github: "https://github.com/yourname/review-nlp",
      demo: "",
    },
    {
      title: "E-commerce Sales Dashboard",
      category: "Analytics",
      featured: false,
      image: "",
      chart: "area",
      repo: "",
      summary: "Designed a self-serve KPI dashboard covering revenue, cohorts and funnel conversion for leadership.",
      impact: [
        { value: "15+", label: "stakeholders using weekly" },
        { value: "-70%", label: "ad-hoc data requests" },
      ],
      problem: "Leadership requested the same numbers every week from the data team.",
      approach: "Modelled data in SQL (star schema), built cohort and funnel views, designed dashboard in Tableau.",
      result: "Single source of truth for KPIs; freed ~6 hours/week of analyst time.",
      tags: ["SQL", "dbt", "Tableau", "BigQuery"],
      github: "",
      demo: "",
    },
    {
      title: "Customer Repeat Order Prediction",
      category: "Machine Learning",
      featured: false,
      image: "",
      chart: "bars",
      repo: "",
      summary: "Designed a self-serve KPI dashboard covering revenue, cohorts and funnel conversion for leadership.",
      impact: [
        { value: "15+", label: "stakeholders using weekly" },
        { value: "-70%", label: "ad-hoc data requests" },
      ],
      problem: "Leadership requested the same numbers every week from the data team.",
      approach: "Modelled data in SQL (star schema), built cohort and funnel views, designed dashboard in Tableau.",
      result: "Single source of truth for KPIs; freed ~6 hours/week of analyst time.",
      tags: ["SQL", "dbt", "Tableau", "BigQuery"],
      github: "https://github.com/nabilakarimaazka/customer-repeat-order-prediction",
      demo: "",
    },
    {
      title: "A/B Test Analysis of Checkout Redesign",
      category: "Machine Learning",
      featured: true,
      image: "",
      chart: "bars",
      repo: "",
      summary: "Designed and analysed an experiment to evaluate a new checkout flow, including power analysis and guardrail metrics.",
      impact: [
        { value: "+4.2%", label: "conversion (p < 0.01)" },
        { value: "2 wks", label: "test duration" },
      ],
      problem: "Team wanted to ship a redesign without evidence it improved conversion.",
      approach: "Power analysis for sample size, frequentist + Bayesian analysis, segment-level checks.",
      result: "Recommended full rollout; documented a reusable experiment template.",
      tags: ["Python", "Statistics", "SciPy", "PyMC"],
      github: "https://github.com/nabilakarimaazka/customer-repeat-order-prediction",
      demo: "",
    },
  ],

  skills: [
    { icon: "⌘", name: "Languages & Data", note: "Daily drivers", items: ["Python", "SQL", "R", "Pandas", "NumPy", "Polars"] },
    { icon: "◆", name: "Machine Learning", note: "Modelling & evaluation", items: ["scikit-learn", "XGBoost", "LightGBM", "PyTorch", "Hugging Face", "SHAP"] },
    { icon: "▲", name: "Statistics", note: "Inference & experimentation", items: ["A/B testing", "Hypothesis testing", "Regression", "Time series", "Bayesian"] },
    { icon: "▦", name: "Visualization & BI", note: "Communicating results", items: ["Tableau", "Power BI", "Plotly", "Matplotlib", "Streamlit"] },
    { icon: "☁", name: "Data Engineering & MLOps", note: "Getting to production", items: ["Airflow", "dbt", "Docker", "FastAPI", "MLflow", "Git"] },
    { icon: "◎", name: "Cloud", note: "Platforms", items: ["BigQuery", "GCP", "AWS (S3, SageMaker)", "Snowflake"] },
  ],

  experience: [
    {
      when: "2024 — Present",
      role: "Data Scientist",
      org: "Company Name · Remote",
      points: [
        "Built demand forecasting models used by 20+ planners across 3 regions.",
        "Owned experimentation analysis for product team (10+ A/B tests).",
        "Mentored 2 junior analysts on SQL and Python best practices.",
      ],
    },
    {
      when: "2022 — 2024",
      role: "Data Analyst",
      org: "Company Name · Jakarta",
      points: [
        "Designed KPI dashboards adopted by leadership; cut ad-hoc requests by 70%.",
        "Automated weekly reporting pipeline with Python and SQL.",
      ],
    },
    {
      when: "2018 — 2022",
      role: "B.Sc. Statistics / Computer Science",
      org: "University Name",
      points: [
        "Thesis: Time-series forecasting with machine learning.",
        "GPA 3.7 / 4.0",
      ],
    },
  ],

  // Bagian "Built for remote teams"
  why: [
    { title: "Async-first communication", text: "Clear written updates, documented notebooks and decision logs so work keeps moving across time zones." },
    { title: "Business before models", text: "I start from the metric that matters, then pick the simplest method that moves it — and explain results to non-technical stakeholders." },
    { title: "Production mindset", text: "Reproducible pipelines, version control, testing and monitoring — not just a model that lives in a notebook." },
  ],
};
