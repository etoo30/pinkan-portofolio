(function () {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-navigation');
  const backToTop = document.querySelector('.back-to-top');
  const year = document.querySelector('#copyright-year');
  const profilePhoto = document.querySelector('.profile-photo');
  const portraitPlaceholder = document.querySelector('.portrait-placeholder');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const languageButton = document.querySelector('.language-toggle');
  const translations = {
    'Skip to content': 'Lewati ke konten', 'Home': 'Beranda', 'About': 'Tentang', 'Education': 'Pendidikan', 'Experience': 'Pengalaman', 'Research': 'Riset', 'Skills': 'Keahlian', 'Contact': 'Kontak',
    'Care begins': 'Kepedulian berawal', 'with understanding.': 'dari pemahaman.',
    'Pharmacy Graduate ': 'Lulusan Farmasi ', '· Aspiring Pharmacist ': '· Calon Apoteker ', '· Clinical Pharmacy Enthusiast': '· Tertarik Farmasi Klinis',
    'A pharmacy graduate with a strong interest in clinical pharmacy, pharmaceutical care, and evidence-based healthcare, committed to continuous learning and contributing to safe, patient-centered pharmaceutical services.': 'Lulusan farmasi dengan minat kuat pada farmasi klinis, pelayanan kefarmasian, dan layanan kesehatan berbasis bukti. Berkomitmen untuk terus belajar serta berkontribusi pada pelayanan kefarmasian yang aman dan berpusat pada pasien.',
    'Explore my portfolio ': 'Jelajahi portofolio ', 'Get in touch ': 'Hubungi saya ', 'Bachelor of Pharmacy · 2026': 'Sarjana Farmasi · 2026', 'Grounded in science.': 'Berlandaskan sains.', 'Guided by care.': 'Berpanduan kepedulian.',
    'Pharmacy, with': 'Farmasi yang', 'people in view.': 'mengutamakan manusia.',
    'I am a Bachelor of Pharmacy graduate from Universitas Diponegoro, with a strong academic foundation and a genuine interest in pharmaceutical care, clinical pharmacy, and healthcare development.': 'Saya lulusan Sarjana Farmasi Universitas Diponegoro dengan dasar akademik yang kuat serta minat pada pelayanan kefarmasian, farmasi klinis, dan pengembangan layanan kesehatan.',
    'My interests include clinical pharmacy, pharmaceutical care, research, and health communication. During my studies, I took part in academic and organizational activities and worked as a Laboratory Teaching Assistant, gaining experience in scientific communication, teamwork, and laboratory-based learning.': 'Minat saya mencakup farmasi klinis, pelayanan kefarmasian, riset, dan komunikasi kesehatan. Selama kuliah, saya mengikuti kegiatan akademik dan organisasi serta menjadi Asisten Praktikum Laboratorium, dengan pengalaman dalam komunikasi ilmiah, kerja tim, dan pembelajaran berbasis laboratorium.',
    'My undergraduate research explored the relationship between rational NSAID use and pain management outcomes in post-cesarean section patients. It strengthened my abilities in scientific research, literature review, data analysis, and evidence-based thinking around rational medicine use.': 'Penelitian sarjana saya mengkaji hubungan rasionalitas penggunaan OAINS dengan luaran penanganan nyeri pada pasien pascaoperasi sesar. Penelitian ini mengasah kemampuan riset ilmiah, telaah pustaka, analisis data, dan pemikiran berbasis bukti terkait penggunaan obat yang rasional.',
    'I also gained practical exposure to pharmaceutical and cosmetic product development as an R&D Formulator intern at PT Dua Naga Kosmetindo. Beyond academics, I am interested in communication, education, and digital content creation.': 'Saya juga memperoleh pengalaman praktis dalam pengembangan produk farmasi dan kosmetik sebagai peserta magang Formulator R&D di PT Dua Naga Kosmetindo. Di luar akademik, saya tertarik pada komunikasi, edukasi, dan pembuatan konten digital.',
    'I aspire to continue developing my knowledge and professional competencies through Pharmacist Professional Education, with the long-term goal of contributing to safe, effective, patient-centered pharmaceutical services.': 'Saya ingin terus mengembangkan pengetahuan dan kompetensi profesional melalui Pendidikan Profesi Apoteker, dengan tujuan jangka panjang berkontribusi pada pelayanan kefarmasian yang aman, efektif, dan berpusat pada pasien.',
    'Areas of interest': 'Bidang minat', 'Clinical pharmacy ': 'Farmasi klinis ', 'Pharmaceutical care ': 'Pelayanan kefarmasian ', 'Research & development ': 'Riset & pengembangan ', 'Health communication': 'Komunikasi kesehatan',
    'Interest areas': 'Bidang minat', 'Research & Development': 'Riset & Pengembangan',
    'Coursework: Pharmacology · Pharmaceutics · Cell and Molecular Biology · Clinical Pharmacy · Biostatistics · Pharmaceutical Dosage Form Technology': 'Mata kuliah: Farmakologi · Farmasetika · Biologi Sel dan Molekuler · Farmasi Klinis · Biostatistika · Teknologi Sediaan Farmasi',
    'Grade point average ': 'Indeks prestasi kumulatif ', 'KIP-Kuliah Scholarship': 'Beasiswa KIP-Kuliah',
    'Learning by': 'Belajar dengan', 'showing up.': 'terlibat langsung.', 'Experience across laboratory learning, product development, student organizations, and communication.': 'Pengalaman dalam pembelajaran laboratorium, pengembangan produk, organisasi mahasiswa, dan komunikasi.',
    'Academic support': 'Dukungan akademik', 'Industry internship': 'Magang industri', 'Student organization': 'Organisasi mahasiswa', 'Student organization & communication': 'Organisasi mahasiswa & komunikasi', 'Creative communication': 'Komunikasi kreatif',
    'Ongoing': 'Berlangsung', 'Regional & content roles': 'Peran regional & konten', 'Independent': 'Mandiri', 'Personal projects': 'Proyek pribadi',
    'Pinkan carrying out a laboratory practical as a teaching assistant': 'Pinkan melakukan praktikum laboratorium sebagai asisten pengajar',
    'Pinkan during her cosmetic formulation internship in the laboratory': 'Pinkan saat magang formulasi kosmetik di laboratorium', 'Pinkan with fellow pharmacy students at an ISMAFARSI event': 'Pinkan bersama mahasiswa farmasi lain di acara ISMAFARSI',
    'Pinkan with fellow pharmacy students at a scientific competition': 'Pinkan bersama mahasiswa farmasi lain di kompetisi ilmiah',
    'Created digital content through personal and health communication projects, including PHARMACOSEPUR. Developed ideas around pharmacy and health topics, then shaped them into clear, accessible messages for digital audiences. Worked across content planning, drafting, and presentation, exploring how wording and visuals can make educational information easier to follow. These projects strengthened my creative communication and encouraged me to consider audience needs, clarity, and responsible health messaging. I continue to build skills in content planning, audience engagement, and digital storytelling while learning to adapt each message to its purpose and format.': 'Membuat konten digital melalui proyek pribadi dan komunikasi kesehatan, termasuk PHARMACOSEPUR. Mengembangkan ide seputar topik farmasi dan kesehatan, lalu menyusunnya menjadi pesan yang jelas dan mudah dipahami audiens digital. Terlibat dalam perencanaan konten, penulisan, dan penyajian, sambil mengeksplorasi cara penggunaan kata dan visual dapat memudahkan pemahaman informasi edukatif. Proyek-proyek ini mengasah komunikasi kreatif dan mendorong saya untuk mempertimbangkan kebutuhan audiens, kejelasan, serta penyampaian informasi kesehatan yang bertanggung jawab. Saya terus mengembangkan kemampuan dalam perencanaan konten, keterlibatan audiens, dan penceritaan digital serta belajar menyesuaikan pesan dengan tujuan dan formatnya.',
    'Assisted lecturers during practical sessions and academic discussions.': 'Mendampingi dosen dalam sesi praktikum dan diskusi akademik.',
    'Supported learning on drug mechanisms, therapeutic indications, dosage calculations, and routes of administration.': 'Mendukung pembelajaran mekanisme kerja obat, indikasi terapi, perhitungan dosis, dan rute pemberian.',
    'Helped students understand cell structures and practical activities involving drug preparation and dispensing.': 'Membantu mahasiswa memahami struktur sel serta kegiatan praktik penyiapan dan penyerahan obat.',
    'Guided prescription dispensing procedures, drug interaction analysis, and Drug Information Services (PIO).': 'Memandu prosedur pelayanan resep, analisis interaksi obat, dan Pelayanan Informasi Obat (PIO).',
    'Contributed to an organized and collaborative laboratory learning environment.': 'Turut menciptakan lingkungan belajar laboratorium yang teratur dan kolaboratif.',
    'Assisted cosmetic skincare formulation and product development, from raw material research to formulation trials.': 'Membantu formulasi kosmetik perawatan kulit dan pengembangan produk, dari riset bahan baku hingga uji coba formulasi.',
    'Supported formulation evaluation and checked documentation for BPOM registration requirements.': 'Mendukung evaluasi formulasi dan memeriksa dokumen untuk persyaratan registrasi BPOM.',
    'Developed an understanding of product development and applicable safety and effectiveness standards.': 'Memahami proses pengembangan produk serta standar keamanan dan efektivitas yang berlaku.',
    'Questions worth': 'Pertanyaan yang layak', 'following.': 'ditelusuri.', 'Research summaries and project work, presented with the scope and evidence available.': 'Ringkasan riset dan proyek disajikan sesuai cakupan dan bukti yang tersedia.',
    'UNDIP REPOSITORY': 'REPOSITORI UNDIP', 'Undergraduate thesis · 2026': 'Skripsi · 2026', 'Research abstract': 'Abstrak penelitian', 'Open repository record ': 'Buka laman repositori ', 'Open Pinkan\'s thesis abstract in the Universitas Diponegoro repository': 'Buka abstrak skripsi Pinkan di repositori Universitas Diponegoro',
    'A retrospective cross-sectional study of post-cesarean patient records from January to December 2024. The UNDIP repository abstract reports a population of 730 patients and simple random sampling.': 'Penelitian potong lintang retrospektif atas rekam medis pasien pascasesar dari Januari hingga Desember 2024. Abstrak repositori UNDIP mencantumkan populasi 730 pasien dan pengambilan sampel acak sederhana.',
    'Assessed NSAID-use rationality using prescribing criteria, including drug choice, dose, and patient suitability.': 'Menilai rasionalitas penggunaan NSAID berdasarkan kriteria peresepan, termasuk pemilihan obat, dosis, dan kesesuaian pasien.', 'Measured pain outcomes with Visual Analog Scale (VAS) data.': 'Mengukur luaran nyeri menggunakan data Visual Analog Scale (VAS).', 'The abstract reports no statistically significant relationship between NSAID-use rationality and pain-management outcomes (p > 0.05).': 'Abstrak melaporkan tidak ada hubungan yang bermakna secara statistik antara rasionalitas penggunaan NSAID dan luaran penanganan nyeri (p > 0,05).', 'It notes that other factors, including surgery duration, may influence pain outcomes.': 'Abstrak menyebutkan faktor lain, termasuk durasi operasi, dapat memengaruhi luaran nyeri.', 'Summary based on the abstract in the ': 'Ringkasan berdasarkan abstrak di ', 'Universitas Diponegoro repository': 'repositori Universitas Diponegoro',
    'Undergraduate thesis · Clinical pharmacy research': 'Skripsi · Riset farmasi klinis', 'CLINICAL PHARMACY': 'FARMASI KLINIS', 'Project summary only. No sample size, statistical result, or conclusion is stated here.': 'Hanya ringkasan proyek. Jumlah sampel, hasil statistik, dan kesimpulan tidak dicantumkan di sini.',
    'National level': 'Tingkat nasional', 'Academic competition': 'Kompetisi akademik', 'Bronze Medal': 'Medali Perunggu', 'Product development': 'Pengembangan produk', 'Academic activities': 'Kegiatan akademik', 'Health communication': 'Komunikasi kesehatan',
    'Cosmetic research & development': 'Riset & pengembangan kosmetik', 'Pharmacy laboratory learning': 'Pembelajaran laboratorium farmasi', 'Digital content creation': 'Pembuatan konten digital',
    'Knowledge in': 'Pengetahuan dalam', 'practice.': 'praktik.', 'A developing set of competencies from academic study, laboratory support, research, and communication experience.': 'Kompetensi yang terus berkembang dari studi akademik, pendampingan laboratorium, riset, dan pengalaman komunikasi.',
    'Clinical pharmacy & pharmaceutical care': 'Farmasi klinis & pelayanan kefarmasian', 'Pharmaceutical sciences': 'Ilmu farmasi', 'Professional skills': 'Keterampilan profesional', 'Digital & software': 'Digital & perangkat lunak',
    'Competencies listed reflect the supplied portfolio information and are not presented as separately certified qualifications.': 'Kompetensi yang dicantumkan merujuk pada informasi portofolio dan bukan klaim kualifikasi bersertifikat secara terpisah.',
    'Open to learning, collaboration, and new opportunities': 'Terbuka untuk belajar, berkolaborasi, dan peluang baru', 'Let’s continue': 'Mari lanjutkan', 'the conversation.': 'percakapan ini.',
    'If my background aligns with an opportunity or conversation, I would be glad to hear from you.': 'Jika latar belakang saya sesuai dengan peluang atau topik diskusi, saya senang untuk dihubungi.', 'Message on WhatsApp ': 'Kirim pesan lewat WhatsApp ', 'Download CV ': 'Unduh CV ', 'Find me on': 'Temukan saya di', 'Pharmacy Graduate · Clinical Pharmacy Enthusiast': 'Lulusan Farmasi · Tertarik Farmasi Klinis',
    'Pati, Central Java, Indonesia': 'Pati, Jawa Tengah, Indonesia', 'Back to top': 'Kembali ke atas', 'Open navigation menu': 'Buka menu navigasi', 'Close navigation menu': 'Tutup menu navigasi',
    'The Relationship Between the Rationality of NSAID Use and Pain Management Outcomes in Post-Cesarean Section Patients at RSD K.R.M.T. Wongsonegoro.': 'Hubungan Rasionalitas Penggunaan OAINS dengan Luaran Penanganan Nyeri pada Pasien Pascaoperasi Sesar di RSD K.R.M.T. Wongsonegoro.',
    'An observational analytical study using a retrospective cross-sectional approach, exploring medicine-use rationality and pain outcome records.': 'Penelitian analitik observasional dengan pendekatan potong lintang retrospektif yang mengkaji rasionalitas penggunaan obat dan catatan luaran nyeri.',
    'Evaluated NSAID use by drug selection, dosage, and patient suitability.': 'Mengevaluasi penggunaan OAINS berdasarkan pemilihan obat, dosis, dan kesesuaian pasien.', 'Examined pain outcomes using Visual Analog Scale (VAS) data.': 'Mengkaji luaran nyeri menggunakan data Visual Analog Scale (VAS).', 'Used statistical analysis to investigate the relationship between medicine-use rationality and therapeutic outcomes.': 'Menggunakan analisis statistik untuk meneliti hubungan rasionalitas penggunaan obat dengan luaran terapi.', 'Reviewed scientific literature related to rational drug use.': 'Menelaah literatur ilmiah terkait penggunaan obat yang rasional.',
    'Functional food formulation concept for dysmenorrhea relief': 'Konsep formulasi pangan fungsional untuk meredakan dismenore', 'Developed a gummy candy formulation concept containing flavonoids, triterpenoids, and apigenin, exploring a potential non-pharmacological approach through literature-based research on proposed analgesic and anti-inflammatory mechanisms.': 'Mengembangkan konsep formulasi permen gummy yang mengandung flavonoid, triterpenoid, dan apigenin. Potensi pendekatan nonfarmakologis dikaji melalui literatur mengenai mekanisme analgesik dan antiinflamasi yang diusulkan.', 'Bronze Medal. The concept is not presented as clinically validated or commercially launched.': 'Meraih Medali Perunggu. Konsep ini belum dinyatakan tervalidasi secara klinis atau diluncurkan secara komersial.',
    'Skincare formulation activities, raw material research, formulation trials, evaluation, and exposure to regulatory documentation at PT Dua Naga Kosmetindo.': 'Kegiatan formulasi perawatan kulit, riset bahan baku, uji coba dan evaluasi formulasi, serta pengenalan dokumen regulasi di PT Dua Naga Kosmetindo.', 'Supported practical pharmacy education and helped students work through scientific and pharmaceutical concepts at Universitas Diponegoro.': 'Mendukung pendidikan praktik farmasi dan membantu mahasiswa memahami konsep ilmiah serta kefarmasian di Universitas Diponegoro.', 'Developed health-related content through independent projects and PHARMACOSEPUR, exploring scientific communication and creative health education.': 'Membuat konten kesehatan melalui proyek mandiri dan PHARMACOSEPUR, dengan mengeksplorasi komunikasi ilmiah dan edukasi kesehatan kreatif.',
    'Milestones, held': 'Pencapaian yang', 'with gratitude.': 'disyukuri.', 'Bachelor of Pharmacy': 'Sarjana Farmasi', 'Bachelor of Pharmacy · Cum Laude': 'Sarjana Farmasi · Cum Laude', 'Cum Laude': 'Cum Laude', 'Featured by UNDIP': 'Diulas oleh UNDIP', 'Pharmacy Graduate': 'Lulusan Farmasi', 'Clinical pharmacy research': 'Riset farmasi klinis', 'Health Content Creator': 'Kreator Konten Kesehatan', 'ISMAFARSI Member': 'Anggota ISMAFARSI', 'Social Media Content Creator': 'Kreator Konten Media Sosial', 'Organizational Management Development Staff': 'Staf Pengembangan Manajemen Organisasi',
    'Pharmacology': 'Farmakologi', 'Pharmaceutics': 'Farmasetika', 'Cell and Molecular Biology': 'Biologi Sel dan Molekuler', 'Clinical Pharmacy': 'Farmasi Klinis', 'Biostatistics': 'Biostatistika', 'Pharmaceutical Dosage Form Technology': 'Teknologi Sediaan Farmasi',
    'Drug Information Services (PIO)': 'Pelayanan Informasi Obat (PIO)', 'Prescription Screening': 'Skrining Resep', 'Evaluation of Rational Drug Use': 'Evaluasi Penggunaan Obat Rasional', 'Medication Dispensing': 'Penyerahan Obat', 'Pharmaceutical Compounding': 'Peracikan Sediaan Farmasi', 'Patient Medication Counseling and Education': 'Konseling dan Edukasi Pengobatan Pasien', 'Pharmaceutical Care': 'Pelayanan Kefarmasian', 'Therapeutic Drug Monitoring (PTO)': 'Pemantauan Terapi Obat (PTO)', 'Adverse Drug Reaction Monitoring': 'Pemantauan Reaksi Obat yang Tidak Diinginkan', 'Pharmacovigilance Reporting': 'Pelaporan Farmakovigilans', 'Medication Therapy Review': 'Tinjauan Terapi Obat', 'Identification of Drug-Related Problems (DRPs)': 'Identifikasi Masalah Terkait Obat (MTO)', 'Clinical Outcome Monitoring': 'Pemantauan Luaran Klinis', 'Drug Utilization Study (DUS)': 'Studi Penggunaan Obat', 'Evidence-Based Pharmaceutical Documentation': 'Dokumentasi Kefarmasian Berbasis Bukti', 'Interprofessional Collaboration in Patient Therapy Optimization': 'Kolaborasi Interprofesional untuk Optimalisasi Terapi Pasien',
    'Cosmetic Formulation': 'Formulasi Kosmetik', 'Pharmaceutical Research': 'Riset Farmasi', 'Scientific Literature Review': 'Telaah Literatur Ilmiah', 'Scientific Writing': 'Penulisan Ilmiah', 'Basic Pharmaceutical Data Analysis': 'Analisis Data Kefarmasian Dasar', 'Communication': 'Komunikasi', 'Public Speaking': 'Berbicara di Depan Umum', 'Presentation': 'Presentasi', 'Teamwork & Collaboration': 'Kerja Tim & Kolaborasi', 'Problem Solving': 'Pemecahan Masalah', 'Leadership': 'Kepemimpinan', 'Discipline': 'Disiplin', 'Empathy': 'Empati', 'Attention to Detail': 'Ketelitian', 'Customer Service': 'Layanan Pelanggan', 'Social Media Content Creation': 'Pembuatan Konten Media Sosial', 'Digital Communication': 'Komunikasi Digital'
  };
  const originalText = new WeakMap();
  const applyLanguage = (language) => {
    const indonesian = language === 'id';
    document.documentElement.lang = language;
    document.title = indonesian ? 'Pinkan Amalia Marzanda | Lulusan Farmasi & Portofolio Farmasi Klinis' : 'Pinkan Amalia Marzanda | Pharmacy Graduate & Clinical Pharmacy Portfolio';
    document.querySelector('meta[name="description"]').content = indonesian
      ? 'Portofolio profesional Pinkan Amalia Marzanda, lulusan Sarjana Farmasi Universitas Diponegoro dengan minat pada farmasi klinis, pelayanan kefarmasian, riset, dan pengembangan produk farmasi.'
      : 'Explore the professional portfolio of Pinkan Amalia Marzanda, a Bachelor of Pharmacy graduate from Universitas Diponegoro with interests in clinical pharmacy, pharmaceutical care, research, and pharmaceutical development.';
    document.querySelector('meta[property="og:title"]').content = indonesian ? 'Pinkan Amalia Marzanda | Lulusan Farmasi' : 'Pinkan Amalia Marzanda | Pharmacy Graduate';
    document.querySelector('meta[property="og:description"]').content = indonesian ? 'Latar akademik, riset, pengalaman, dan kompetensi di bidang farmasi.' : 'Academic background, research, experience, and competencies in pharmacy.';
    document.querySelector('meta[property="og:locale"]').content = indonesian ? 'id_ID' : 'en_ID';
    document.querySelectorAll('body *').forEach((element) => {
      for (const attribute of ['aria-label', 'alt']) {
        if (!element.hasAttribute(attribute)) continue;
        const value = originalText.get(element)?.[attribute] ?? element.getAttribute(attribute);
        originalText.set(element, { ...originalText.get(element), [attribute]: value });
        if (indonesian && translations[value]) element.setAttribute(attribute, translations[value]);
        else if (!indonesian) element.setAttribute(attribute, value);
      }
    });
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue);
      const source = originalText.get(node);
      const trimmed = source.trim();
      if (!trimmed) continue;
      const translated = indonesian ? translations[trimmed] : null;
      if (translated) node.nodeValue = source.replace(trimmed, translated);
      else if (!indonesian) node.nodeValue = source;
    }
    if (languageButton) {
      languageButton.textContent = indonesian ? 'EN' : 'ID';
      languageButton.setAttribute('aria-label', indonesian ? 'Switch language to English' : 'Ganti bahasa ke Bahasa Indonesia');
      languageButton.setAttribute('lang', indonesian ? 'en' : 'id');
      languageButton.setAttribute('aria-pressed', String(indonesian));
    }
    try { localStorage.setItem('pinkan-language', language); } catch (_) { /* Storage may be unavailable. */ }
  };
  if (languageButton) {
    languageButton.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'en' ? 'id' : 'en'));
    let savedLanguage = 'en';
    try { savedLanguage = localStorage.getItem('pinkan-language') || 'en'; } catch (_) { /* Keep the default. */ }
    if (savedLanguage === 'id') applyLanguage('id');
  }

  if (year) year.textContent = String(new Date().getFullYear());
  if (window.lucide) window.lucide.createIcons();

  if (profilePhoto && portraitPlaceholder) {
    const updatePortrait = () => { portraitPlaceholder.hidden = profilePhoto.complete && profilePhoto.naturalWidth > 0; };
    profilePhoto.addEventListener('load', updatePortrait);
    profilePhoto.addEventListener('error', () => {
      profilePhoto.remove();
      portraitPlaceholder.hidden = false;
    });
    updatePortrait();
  }

  if (menuButton && nav) {
    const menuLabel = (open) => document.documentElement.lang === 'id'
      ? (open ? 'Tutup menu navigasi' : 'Buka menu navigasi')
      : (open ? 'Close navigation menu' : 'Open navigation menu');
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', menuLabel(false));
      nav.classList.remove('is-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', menuLabel(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeMenu();
        menuButton.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 850) closeMenu();
    });
  }

  const sections = [...document.querySelectorAll('main section[id]')];
  const navLinks = [...document.querySelectorAll('.primary-nav a[href^="#"]')];
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
    sections.forEach((section) => sectionObserver.observe(section));

    if (!prefersReducedMotion) {
      document.documentElement.classList.add('motion-ready');
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      }, { threshold: .08, rootMargin: '0px 0px -24px 0px' });
      document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    }
  }

  if (backToTop) {
    const updateTopButton = () => backToTop.classList.toggle('is-visible', window.scrollY > 600);
    window.addEventListener('scroll', updateTopButton, { passive: true });
    updateTopButton();
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' }));
  }
})();
