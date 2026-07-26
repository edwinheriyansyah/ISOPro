import { IsoService, CaseStudy, Article, AssessmentQuestion, Lead } from '../types';

export const ISO_SERVICES: IsoService[] = [
  {
    id: 'iso-9001',
    code: 'ISO 9001:2015',
    title: 'Sistem Manajemen Mutu (SMM)',
    subtitle: 'Standar Internasional Pengendalian Mutu & Kepuasan Pelanggan',
    category: 'Mutu & Operasional',
    shortDescription: 'Tingkatkan standar operasional, minimalkan cacat produksi/layanan, dan tingkatkan efisiensi proses bisnis secara berkelanjutan.',
    fullDescription: 'ISO 9001:2015 adalah standar internasional utama untuk Sistem Manajemen Mutu. Konsultansi kami mendampingi perusahaan Anda dari pemetaan proses bisnis, penyusunan SOP & KPI, pelatihan internal auditor, hingga lulus audit sertifikasi dari lembaga sertifikasi terakreditasi KAN / IAF.',
    benefits: [
      'Peningkatan konsistensi kualitas produk & standar pelayanan',
      'Meningkatkan efisiensi operasional dan mengurangi pemborosan (waste)',
      'Memenuhi persyaratan tender pemerintah (BUMN/LKPP) dan swasta skala besar',
      'Meningkatkan kepuasan dan kepercayaan pelanggan (Customer Satisfaction Rate > 95%)',
      'Budaya perbaikan terus-menerus (Continuous Improvement / PDCA)'
    ],
    targetIndustries: ['Manufaktur', 'Konstruksi & Kontraktor', 'Jasa & Konsultan', 'Logistik & Distribusi', 'Fasilitas Kesehatan'],
    typicalDurationDays: 180, // 6 months / 180 days
    estimatedStartingPrice: 35000000,
    badgeText: 'Paling Populer',
    iconName: 'Award',
    clauses: [
      {
        clauseNumber: 'Klausul 4',
        title: 'Konteks Organisasi',
        description: 'Penentuan isu internal/eksternal, identifikasi pihak berkepentingan, dan penetapan ruang lingkup SMM.',
        keyDeliverable: 'Matriks SWOT & PESTEL, Register Pihak Berkepentingan, Dokumen Lingkup SMM'
      },
      {
        clauseNumber: 'Klausul 5',
        title: 'Kepemimpinan',
        description: 'Komitmen manajemen puncak, penetapan Kebijakan Mutu, serta pembagian peran & tanggung jawab.',
        keyDeliverable: 'Kebijakan Mutu Terpublikasi, Struktur Organisasi, Job Description'
      },
      {
        clauseNumber: 'Klausul 6',
        title: 'Perencanaan',
        description: 'Identifikasi risiko & peluang bisnis, penetapan Sasaran Mutu (KPI) di setiap departemen.',
        keyDeliverable: 'Risk & Opportunity Register, Matriks Sasaran Mutu (KPI)'
      },
      {
        clauseNumber: 'Klausul 7 & 8',
        title: 'Dukungan & Operasional',
        description: 'Pengelolaan sumber daya, pelatihan, kontrol dokumen, serta pengendalian proses produksi / pemberian jasa (Klausul 8.2 & 8.5).',
        keyDeliverable: 'SOP Operasional, Form Kerja, Rencana Pelatihan, Kontrol Kualitas'
      },
      {
        clauseNumber: 'Klausul 9 & 10',
        title: 'Evaluasi Kinerja & Peningkatan',
        description: 'Pemantauan indikator kinerja, pelaksanaan Audit Internal, Tinjauan Manajemen (RTM), dan tindakan korektif.',
        keyDeliverable: 'Laporan Audit Internal, Notulen RTM, Laporan CAR (Corrective Action Request)'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Gap Analysis & Kick-off',
        durationWeeks: 3,
        activities: ['Diagnostic audit kondisi eksisting', 'Sosialisasi tim ISO perusahaan', 'Penyusunan Master Plan Proyek'],
        deliverables: ['Laporan Gap Analysis', 'Project Charter & Jadwal Kerja']
      },
      {
        phaseNumber: 2,
        phaseName: 'Desain Sistem & Dokumentasi',
        durationWeeks: 8,
        activities: ['Workshop penyusunan SOP & WI', 'Penetapan Kebijakan & Sasaran Mutu', 'Review dokumen oleh konsultan'],
        deliverables: ['Manual Mutu', 'Prosedur Operasional Standar (SOP)', 'Formulir Kerja Terstandar']
      },
      {
        phaseNumber: 3,
        phaseName: 'Implementasi & Pelatihan',
        durationWeeks: 6,
        activities: ['Penerapan SOP di seluruh departemen', 'Pelatihan Pemahaman ISO 9001:2015', 'Pengumpulan rekaman mutu'],
        deliverables: ['Sertifikat Pelatihan Karyawan', 'Bukti Rekaman Operasional']
      },
      {
        phaseNumber: 4,
        phaseName: 'Audit Internal & RTM',
        durationWeeks: 4,
        activities: ['Pelatihan & Sertifikasi Internal Auditor', 'Pelaksanaan Audit Internal', 'Rapat Tinjauan Manajemen (RTM)'],
        deliverables: ['Laporan Audit Internal', 'Laporan Tindakan Perbaikan', 'Notulen Rapat RTM']
      },
      {
        phaseNumber: 5,
        phaseName: 'Pendampingan Audit Sertifikasi',
        durationWeeks: 3,
        activities: ['Pra-audit / Pre-assessment', 'Pendampingan Audit Eksternal Stage 1 & Stage 2', 'Penyelesaian Temuan Audit'],
        deliverables: ['Sertifikat ISO 9001 Terbit dari Lembaga Sertifikasi Akreditasi KAN/IAF']
      }
    ]
  },
  {
    id: 'iso-27001',
    code: 'ISO 27001:2022',
    title: 'Sistem Manajemen Keamanan Informasi (SMKI)',
    subtitle: 'Perlindungan Aset Data, Keamanan Siber & Privasi Sistem',
    category: 'Keamanan Informasi',
    shortDescription: 'Lindungi kerahasiaan, integritas, dan ketersediaan data perusahaan dari ancaman siber dan kebocoran informasi sesuai regulasi.',
    fullDescription: 'ISO 27001:2022 adalah standar global perlindungan aset informasi. Sangat krusial untuk perusahaan Fintech, Perbankan, SaaS, IT Services, E-commerce, dan Fasilitas Kesehatan yang mengelola data sensitif pelanggan.',
    benefits: [
      'Menjamin Kerahasiaan (Confidentiality), Integritas (Integrity), dan Ketersediaan (Availability) Data',
      'Memenuhi Regulasi UU Perlindungan Data Pribadi (UU PDP No. 27/2022) & POJK',
      'Meningkatkan reputasi dan rasa aman calon investor & mitra bisnis global',
      'Mencegah risiko kerugian finansial akibat cyber attack dan insiden kebocoran data',
      'Panduan manajemen risiko siber yang terstruktur (Annex A Controls)'
    ],
    targetIndustries: ['Fintech & Perbankan', 'Perusahaan Perangkat Lunak / SaaS', 'Data Center & Cloud Provider', 'Rumah Sakit & Healthtech', 'E-commerce'],
    typicalDurationDays: 180,
    estimatedStartingPrice: 55000000,
    badgeText: 'Regulasi Wajib PDP',
    iconName: 'ShieldCheck',
    clauses: [
      {
        clauseNumber: 'Klausul 4 & 5',
        title: 'Konteks & Kepemimpinan SMKI',
        description: 'Identifikasi aset informasi, penetapan Kebijakan Keamanan Informasi, dan komitmen C-Level.',
        keyDeliverable: 'Kebijakan Keamanan Informasi (ISMS Policy), Inventaris Aset Informasi'
      },
      {
        clauseNumber: 'Klausul 6',
        title: 'Manajemen Risiko Keamanan Informasi',
        description: 'Metodologi penilaian risiko (Risk Assessment) dan penetapan Rencana Perlakuan Risiko (RTP).',
        keyDeliverable: 'Risk Assessment Matrix, Statement of Applicability (SoA) ISO 27001:2022'
      },
      {
        clauseNumber: 'Annex A Controls',
        title: 'Pengendalian Keamanan Informasi (93 Kontrol)',
        description: 'Implementasi kendali Organisasional, Orang, Fisik, dan Teknologi (termasuk enkripsi, access control, BCP).',
        keyDeliverable: 'SOP Access Control, BCP/DRP Plan, Incident Response Plan, Security Awareness'
      },
      {
        clauseNumber: 'Klausul 9 & 10',
        title: 'Evaluasi & Audit Keamanan',
        description: 'Vulnerability Assessment, Audit Internal SMKI, RTM, dan mitigasi kelemahan sistem.',
        keyDeliverable: 'Laporan VA/PenTest, Laporan Audit Internal SMKI, Notulen RTM'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Gap Assessment & Asset Inventory',
        durationWeeks: 4,
        activities: ['Identifikasi seluruh aset data & IT infrastructure', 'Pengukuran gap awal terhadap ISO 27001:2022'],
        deliverables: ['Information Asset Register', 'Gap Analysis Report']
      },
      {
        phaseNumber: 2,
        phaseName: 'Risk Assessment & SoA Formulation',
        durationWeeks: 6,
        activities: ['Penilaian ancaman & kerentanan aset', 'Penyusunan Statement of Applicability (SoA)'],
        deliverables: ['Risk Register', 'SoA (Statement of Applicability)', 'Risk Treatment Plan']
      },
      {
        phaseNumber: 3,
        phaseName: 'Pengembangan Kebijakan & Kontrol',
        durationWeeks: 7,
        activities: ['Penyusunan Kebijakan Keamanan Informasi', 'Pelatihan Awareness untuk seluruh staf', 'Penerapan kontrol teknis & fisik'],
        deliverables: ['SOP Keamanan IT', 'Dokumen BCP & DRP', 'Sertifikat Awareness Training']
      },
      {
        phaseNumber: 4,
        phaseName: 'Internal Audit & Pre-Assessment',
        durationWeeks: 4,
        activities: ['Simulasi audit internal SMKI', 'Rapat Tinjauan Manajemen Keamanan Informasi'],
        deliverables: ['Laporan Audit Internal SMKI', 'Laporan Tinjauan Manajemen']
      },
      {
        phaseNumber: 5,
        phaseName: 'Pendampingan Sertifikasi',
        durationWeeks: 3,
        activities: ['Pendampingan Audit Lembaga Sertifikasi Stage 1 & 2', 'Penutupan temuan minor jika ada'],
        deliverables: ['Sertifikat ISO 27001:2022']
      }
    ]
  },
  {
    id: 'iso-14001',
    code: 'ISO 14001:2015',
    title: 'Sistem Manajemen Lingkungan (SML)',
    subtitle: 'Komitmen Keramahan Lingkungan & Efisiensi Energi Perusahaan',
    category: 'Lingkungan & K3',
    shortDescription: 'Kelola dampak lingkungan, kepatuhan AMDAL/UKL-UPL, serta efisiensi penggunaan sumber daya alam secara bertanggung jawab.',
    fullDescription: 'ISO 14001:2015 membantu organisasi mengidentifikasi, mengelola, memantau, dan mengendalikan isu lingkungan secara holistik. Sangat dibutuhkan untuk manufaktur, pertambangan, energi, dan konstruksi.',
    benefits: [
      'Memastikan kepatuhan terhadap regulasi lingkungan hidup (KLHK)',
      'Mengurangi pengeluaran biaya pengelolaan limbah dan penggunaan energi',
      'Meningkatkan reputasi ESG (Environmental, Social, Governance) di mata publik & investor',
      'Peluang memenangkan tender internasional dengan kualifikasi ramah lingkungan'
    ],
    targetIndustries: ['Manufaktur & Pabrik', 'Pertambangan & Energi', 'Properti & Konstruksi', 'Pengolahan Kimia & Farmasi'],
    typicalDurationDays: 150,
    estimatedStartingPrice: 40000000,
    iconName: 'Leaf',
    clauses: [
      {
        clauseNumber: 'Klausul 6.1.2',
        title: 'Aspek & Dampak Lingkungan (AMDAL/AMDAL SML)',
        description: 'Identifikasi aspek lingkungan dari kegiatan, produk, dan jasa yang dapat menimbulkan dampak.',
        keyDeliverable: 'Matriks Aspek-Dampak Lingkungan (Aspect-Impact Register)'
      },
      {
        clauseNumber: 'Klausul 6.1.3',
        title: 'Kewajiban Penataan (Legal Compliance)',
        description: 'Pengidentifikasian peraturan perundang-undangan lingkungan yang berlaku.',
        keyDeliverable: 'Register Peraturan Perundangan Lingkungan & Evaluasi Kepatuhan'
      },
      {
        clauseNumber: 'Klausul 8.2',
        title: 'Kesiapsiagaan & Tanggap Darurat Lingkungan',
        description: 'Prosedur penanganan tumpahan bahan kimia, kebocoran B3, dan potensi bencana lingkungan.',
        keyDeliverable: 'SOP Tanggap Darurat Lingkungan, Drill Tanggap Tumpahan B3'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Evaluasi Awal & Reviu Legal',
        durationWeeks: 3,
        activities: ['Peninjauan lokasi operasional', 'Pemeriksaan kepatuhan UKL-UPL / AMDAL'],
        deliverables: ['Laporan Evaluasi Lingkungan Awal']
      },
      {
        phaseNumber: 2,
        phaseName: 'Penyusunan Matriks Aspek Dampak',
        durationWeeks: 6,
        activities: ['Pengidentifikasian aspek air, udara, limbah B3, & energi', 'Penyusunan Prosedur SML'],
        deliverables: ['Matriks Aspek Dampak Lingkungan', 'SOP Pengelolaan Limbah B3']
      },
      {
        phaseNumber: 3,
        phaseName: 'Penerapan & Pengukuran',
        durationWeeks: 6,
        activities: ['Penerapan penghematan energi & limbah', 'Pelatihan Pemisahan Sampah & B3'],
        deliverables: ['Laporan Pemantauan Lingkungan']
      },
      {
        phaseNumber: 4,
        phaseName: 'Audit & Sertifikasi',
        durationWeeks: 5,
        activities: ['Internal Audit SML', 'RTM', 'Pendampingan Audit Sertifikasi'],
        deliverables: ['Sertifikat ISO 14001:2015']
      }
    ]
  },
  {
    id: 'iso-45001',
    code: 'ISO 45001:2018',
    title: 'Sistem Manajemen Keselamatan & Kesehatan Kerja (SMK3)',
    subtitle: 'Nir-Kecelakaan Kerja (Zero Accident) & Perlindungan Tenaga Kerja',
    category: 'Lingkungan & K3',
    shortDescription: 'Ciptakan lingkungan kerja yang aman, minimalkan risiko kecelakaan kerja, penyakit akibat kerja (PAK), dan penuhi standar K3.',
    fullDescription: 'ISO 45001:2018 adalah standar internasional untuk K3 yang menggantikan OHSAS 18001. Dirancang untuk melindungi pekerja dari resiko bahaya fisik, kimia, ergonoim, dan psikososial di tempat kerja.',
    benefits: [
      'Menurunkan angka kecelakaan kerja (Zero Accident Target)',
      'Memenuhi Peraturan Pemerintah No. 50 Tahun 2012 tentang SMK3',
      'Meningkatkan produktivitas kerja dan moral karyawan',
      'Persyaratan mutlak untuk tender minyak & gas (SKK Migas), konstruksi, dan energi'
    ],
    targetIndustries: ['Minyak & Gas / Pertambangan', 'Konstruksi & Alat Berat', 'Pabrikasi / Heavy Manufacturing', 'Transportasi & Ekspedisi'],
    typicalDurationDays: 150,
    estimatedStartingPrice: 42000000,
    iconName: 'HardHat',
    clauses: [
      {
        clauseNumber: 'Klausul 6.1.2',
        title: 'Identifikasi Bahaya & Penilaian Risiko (IBPR / HIRADC)',
        description: 'Metodologi HIRADC (Hazard Identification, Risk Assessment, and Determining Control).',
        keyDeliverable: 'Dokumen HIRADC / IBPR Lengkap untuk Seluruh Area Kerja'
      },
      {
        clauseNumber: 'Klausul 8.1.2',
        title: 'Hirarki Pengendalian Risiko K3',
        description: 'Eliminasi, Substitusi, Rekayasa Teknik, Pengendalian Administratif, dan Alat Pelindung Diri (APD).',
        keyDeliverable: 'SOP Penggunaan APD, SOP Work Permit (JSA/Permit to Work)'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Kajian HIRADC & Inspeksi Lapangan',
        durationWeeks: 3,
        activities: ['Walkthrough inspection area kerja', 'Penyusunan draft HIRADC'],
        deliverables: ['Dokumen HIRADC Matrix']
      },
      {
        phaseNumber: 2,
        phaseName: 'Pengembangan Prosedur K3',
        durationWeeks: 6,
        activities: ['Penyusunan Prosedur K3 & Tanggap Darurat', 'Pembentukan Panitia Pembina K3 (P2K3)'],
        deliverables: ['SOP K3 Lengkap', 'SK P2K3']
      },
      {
        phaseNumber: 3,
        phaseName: 'Pelaksanaan & Audit',
        durationWeeks: 7,
        activities: ['Safety Induction, Drill Kebakaran', 'Audit Internal & Sertifikasi'],
        deliverables: ['Sertifikat ISO 45001:2018']
      }
    ]
  },
  {
    id: 'iso-22000',
    code: 'ISO 22000:2018',
    title: 'Sistem Manajemen Keamanan Pangan (HACCP + ISO)',
    subtitle: 'Jaminan Keamanan Produk Pangan dari Kebun Hingga Meja Makan',
    category: 'Keamanan Pangan',
    shortDescription: 'Gabungan HACCP dan prinsip ISO untuk menjamin produk pangan bebas dari bahaya biologi, kimia, dan fisik.',
    fullDescription: 'ISO 22000:2018 memberikan jaminan kepada konsumen bahwa produk makanan dan minuman diproses dengan higienis dan aman dikonsumsi. Wajib untuk pabrik F&B, catering, dan supermarket chain.',
    benefits: [
      'Peningkatan higienitas dan standar HACCP',
      'Lolos audit BPOM dan sertifikasi Halal / Ekspor',
      'Mencegah risiko penarikan produk (Product Recall) yang mahal'
    ],
    targetIndustries: ['Industri Makanan & Minuman (F&B)', 'Catering & Hotel', 'Rantai Pasok Pangan & Cold Storage'],
    typicalDurationDays: 150,
    estimatedStartingPrice: 45000000,
    iconName: 'Utensils',
    clauses: [
      {
        clauseNumber: 'Klausul 8.5',
        title: 'Pengendalian Bahaya Pangan (HACCP Plan)',
        description: 'Penetapan Titik Kendali Kritis (CCP) dan Program Prasyarat Operational (OPRP).',
        keyDeliverable: 'Rencana HACCP, Batas Kritis CCP, Prosedur Pemantauan'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Analisis Hazard & CCP',
        durationWeeks: 4,
        activities: ['Analisis bahaya biologi/fisik/kimia', 'Penyusunan HACCP Plan'],
        deliverables: ['HACCP Plan Document']
      },
      {
        phaseNumber: 2,
        phaseName: 'Implementasi & Audit',
        durationWeeks: 10,
        activities: ['Pelatihan Hygiene', 'Audit Internal & Sertifikasi'],
        deliverables: ['Sertifikat ISO 22000:2018']
      }
    ]
  },
  {
    id: 'iso-ims',
    code: 'Sistem Terintegrasi (IMS)',
    title: 'Integrated Management System (ISO 9001 + 14001 + 45001)',
    subtitle: 'Satu Dokumentasi Terpadu untuk Mutu, K3, dan Lingkungan',
    category: 'Sistem Terintegrasi',
    shortDescription: 'Hemat biaya hingga 40% dengan mengintegrasikan Sistem Mutu, Lingkungan, dan K3 dalam 1 struktur HLS (High-Level Structure).',
    fullDescription: 'IMS menggabungkan tiga standar ISO paling populer menjadi satu sistem terpadu. Sangat efisien karena menghindari tumpang tindih dokumen SOP dan audit yang berulang.',
    benefits: [
      'Penghematan biaya investasi konsultansi dan audit hingga 40%',
      'Satu Manual Manajemen Terpadu untuk Mutu, Lingkungan, dan K3',
      'Proses audit internal dan eksternal dilakukan sekaligus'
    ],
    targetIndustries: ['Konstruksi & EPC', 'Manufaktur Besar', 'Pertambangan & Energi', 'Perusahaan Galangan Kapal'],
    typicalDurationDays: 210,
    estimatedStartingPrice: 75000000,
    badgeText: 'Hemat 40%',
    iconName: 'Layers',
    clauses: [
      {
        clauseNumber: 'High-Level Structure (HLS)',
        title: 'Integrasi Klausul 4 - 10',
        description: 'Penggabungan Risk Management, KPI, dan Prosedur Kerja untuk 3 standar sekaligus.',
        keyDeliverable: 'Integrated Management Manual (QHSE Manual)'
      }
    ],
    phases: [
      {
        phaseNumber: 1,
        phaseName: 'Integrated Gap Analysis',
        durationWeeks: 4,
        activities: ['Diagnostic 3 standar sekaligus'],
        deliverables: ['Integrated Gap Report']
      },
      {
        phaseNumber: 2,
        phaseName: 'Dokumentasi & Audit Terpadu',
        durationWeeks: 18,
        activities: ['Penyusunan Manual QHSE & Audit Sertifikasi Terpadu'],
        deliverables: ['Sertifikat ISO 9001, 14001, 45001']
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    clientName: 'PT Nusantara Manufaktur Presisi',
    industry: 'Manufaktur Komponen Otomotif',
    companySize: '350+ Karyawan',
    isoType: 'ISO 9001:2015',
    logoInitial: 'NMP',
    challenge: 'Perusahaan mengalami tingkat defect rate produk sebesar 4.8% dan kesulitan menembus rantai pasok APM (Agen Pemegang Merek) otomotif Jepang karena belum memiliki sertifikasi ISO 9001 yang terakreditasi.',
    solution: 'Tim konsultan IsoPro merestrukturisasi SOP lini produksi, menerapkan pengendalian mutu pada Klausul 8.5, menyusun matriks KPI antar-departemen, serta melatih 15 internal auditor.',
    impactMetrics: [
      { label: 'Defect Rate Production', value: 'Turun dari 4.8% ke 0.6%' },
      { label: 'Waktu Sertifikasi', value: '5.5 Bulan (Tepat Waktu)' },
      { label: 'Kontrak Baru APM', value: '+ Rp 18.5 Miliar / Tahun' }
    ],
    durationMonths: 6,
    testimonial: {
      quote: 'Pendampingan dari IsoPro sangat praktis dan mendalam. Konsultannya tidak hanya memberikan template dokumen, tetapi benar-benar membimbing tim operasional di lapangan hingga kami lulus audit tanpa temuan mayor.',
      author: 'Bambang Sugianto',
      role: 'Director of Quality & Operations'
    }
  },
  {
    id: 'cs-2',
    clientName: 'PT Bank Digital Finansial Utama',
    industry: 'Perbankan & Fintech',
    companySize: '500+ Karyawan',
    isoType: 'ISO 27001:2022',
    logoInitial: 'BDF',
    challenge: 'Mendapat instruksi kewajiban regulasi dari Bank Indonesia & OJK untuk meraih sertifikasi ISO 27001:2022 dalam waktu 6 bulan guna memenuhi standar keamanan siber transaksi elektronik.',
    solution: 'Melakukan pemetaan aset data digital, penyusunan Statement of Applicability (SoA) mencakup 93 kontrol Annex A, pelaksanaan Penetration Testing, dan simulasi insiden keamanan.',
    impactMetrics: [
      { label: 'Kepatuhan Regulasi POJK', value: '100% Compliant' },
      { label: 'Insiden Keamanan Siber', value: 'Zero Breach Incident' },
      { label: 'Audit Stage 1 & 2', value: 'Lulus Tanpa Temuan Major' }
    ],
    durationMonths: 6,
    testimonial: {
      quote: 'IsoPro sangat memahami regulasi lokal seperti UU PDP dan spesifikasi ISO 27001:2022 terbaru. Proses pendampingannya sangat terstruktur dan cepat.',
      author: 'Clarissa Rahmadani',
      role: 'Chief Information Security Officer (CISO)'
    }
  },
  {
    id: 'cs-3',
    clientName: 'PT Logistik Trans Nasional',
    industry: 'Logistik & Warehousing',
    companySize: '180+ Karyawan',
    isoType: 'IMS (ISO 9001 + 14001 + 45001)',
    logoInitial: 'LTN',
    challenge: 'Persyaratan tender distribusi bahan kimia multinasional mewajibkan pemenuhan standar Mutu (ISO 9001), K3 (ISO 45001), dan Lingkungan (ISO 14001) secara bersamaan.',
    solution: 'Pengembangan Integrated Management System (IMS) terpadu, penyusunan HIRADC armada pengiriman, dan pelatihan tanggap darurat tumpahan bahan B3.',
    impactMetrics: [
      { label: 'Penghematan Biaya Sertifikasi', value: '38% Dibanding Terpisah' },
      { label: 'Angka Kecelakaan Kerja', value: 'Zero Incident (0 Kecelakaan)' },
      { label: 'Kemenangan Tender', value: 'Memenangkan Tender senilai 42M' }
    ],
    durationMonths: 7,
    testimonial: {
      quote: 'Dengan sistem IMS yang dirancang IsoPro, kami tidak merasa dibebani tumpukan dokumen yang rumit. Semuanya terintegrasi dengan rapi dalam satu aplikasi internal kami.',
      author: 'Hendra Wijaya',
      role: 'General Manager HSE & Operations'
    }
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'Panduan Praktis Mengimplementasikan ISO 9001:2015 Klausul 8.2 (Penentuan Persyaratan Produk dan Jasa)',
    slug: 'panduan-iso-9001-klausul-8-2',
    category: 'Edukasi ISO 9001',
    isoStandard: 'ISO 9001:2015',
    publishedDate: '18 Juli 2026',
    readTime: '6 menit baca',
    author: {
      name: 'Dr. Ir. Rahmat Hidayat, M.T.',
      role: 'Lead Auditor & Senior ISO Consultant'
    },
    excerpt: 'Klausul 8.2 adalah kunci utama dalam memastikan bahwa persyaratan calon pelanggan dipahami dengan tepat sebelum janji penawaran dibuat. Berikut langkah konkret penerapannya.',
    contentMarkdown: `
### Apa itu Klausul 8.2 dalam ISO 9001:2015?

Klausul 8.2 bertajuk **"Persyaratan untuk produk dan jasa"** mengatur bagaimana perusahaan berkomunikasi dengan pelanggan, menentukan persyaratan produk/jasa, serta meninjau kemampuan perusahaan sebelum berkomitmen memenuhi pesanan tersebut.

### 4 Sub-Klausul Utama yang Wajib Dipahami:

1. **8.2.1 Komunikasi Pelanggan**:
   - Menyiapkan saluran informasi produk yang jelas.
   - Menangani pertanyaan, kontrak, dan perubahan pesanan.
   - Mengelola umpan balik dan keluhan pelanggan.

2. **8.2.2 Penentuan Persyaratan Produk dan Jasa**:
   - Memastikan semua persyaratan yang diminta pelanggan (baik yang tertulis maupun implisit) telah diidentifikasi.
   - Mengidentifikasi kewajiban hukum dan regulasi nasional (seperti SNI, TKDN, atau BPOM).

3. **8.2.3 Peninjauan Persyaratan Produk dan Jasa**:
   - Sebelum menerima Po (Purchase Order) atau menandatangani Kontrak, perusahaan **WAJIB** melakukan Peninjauan Kontrak (Contract Review).
   - Memastikan kapasitas produksi, ketersediaan bahan baku, dan tenggat waktu logis.

4. **8.2.4 Perubahan pada Persyaratan**:
   - Jika ada perubahan spesifikasi dari pelanggan, dokumen SOP harus memastikan revisi dikomunikasikan ke tim terkait.

### Dokumen Bukti yang Wajib Disiapkan saat Audit:
- Form Peninjauan Kontrak / Contract Review Sheet.
- Catatan Komunikasi Pelanggan / Sales Order Confirmation.
- Log Keluhan Pelanggan & Tindakan Perbaikan.
`,
    clauseReference: 'ISO 9001:2015 Klausul 8.2',
    tags: ['ISO 9001', 'Klausul 8.2', 'Contract Review', 'SOP Mutu'],
    keyTakeaways: [
      'Gunakan Form Contract Review sebelum menyetujui Purchase Order',
      'Pastikan regulasi hukum & TKDN dimasukkan dalam penilaian spesifikasi',
      'Simpan bukti tertulis revisi persetujuan pesanan pelanggan'
    ]
  },
  {
    id: 'art-2',
    title: 'Perbedaan Utama ISO 27001:2013 vs ISO 27001:2022 dan Langkah Transisi yang Perlu Dilakukan',
    slug: 'perbedaan-iso-27001-2013-vs-2022',
    category: 'Keamanan Informasi',
    isoStandard: 'ISO 27001:2022',
    publishedDate: '10 Juli 2026',
    readTime: '8 menit baca',
    author: {
      name: 'Maya Putri, CISSP, ISO 27001 Auditor',
      role: 'Cybersecurity & ISMS Specialist'
    },
    excerpt: 'Versi terbaru ISO 27001:2022 merestrukturisasi Annex A dari 114 kontrol menjadi 93 kontrol yang dikelompokkan dalam 4 kategori modern.',
    contentMarkdown: `
### Latar Belakang Perubahan Standar Keamanan Informasi

Dengan pesatnya perkembangan Cloud Computing, Work From Home, dan ancaman Ransomware modern, Organisasi Internasional untuk Standardisasi menerbitkan revisi **ISO/IEC 27001:2022**.

### Perubahan Utama pada Annex A:

- **Pengurangan Jumlah Kontrol**: Dari 114 kontrol menjadi **93 kontrol**.
- **4 Kategori Baru**:
  1. *Organizational Controls* (37 kontrol)
  2. *People Controls* (8 kontrol)
  3. *Physical Controls* (14 kontrol)
  4. *Technological Controls* (34 kontrol)
- **11 Kontrol Baru yang Sangat Relevan**:
  - Threat Intelligence
  - Information Security for Cloud Services
  - ICT Readiness for Business Continuity
  - Data Leakage Prevention (DLP)
  - Web Filtering & Secure Coding

### Checklist Langkah Transisi untuk Perusahaan:
1. Perbarui Statement of Applicability (SoA) sesuai format 93 kontrol.
2. Lakukan evaluasi ulang Risk Assessment berdasarkan kontrol baru.
3. Perbarui SOP Keamanan Informasi internal.
`,
    clauseReference: 'ISO 27001:2022 Annex A',
    tags: ['ISO 27001', 'Keamanan Informasi', 'Cybersecurity', 'SoA'],
    keyTakeaways: [
      'Annex A kini dibagi menjadi 4 grup utama: Organizational, People, Physical, Technological',
      'Pentingnya menerapkan kontrol Threat Intelligence dan Cloud Security',
      'Batas transisi sertifikasi memerlukan pembaruan SoA dan Risk Assessment'
    ]
  },
  {
    id: 'art-3',
    title: 'Strategi Lulus Audit Eksternal Sertifikasi ISO Tanpa Temuan Mayor (Zero Major Non-Conformity)',
    slug: 'strategi-lulus-audit-sertifikasi-iso',
    category: 'Tips Audit',
    isoStandard: 'Umum / All ISO',
    publishedDate: '02 Juli 2026',
    readTime: '5 menit baca',
    author: {
      name: 'Deni Kurniawan, S.T.',
      role: 'Principal Consultant IsoPro'
    },
    excerpt: 'Audit eksternal Stage 2 sering membuat tim panik. Pelajari 5 persiapan kunci agar proses audit berjalan mulus dan profesional.',
    contentMarkdown: `
### Apa yang Dicari Auditor Eksternal?

Auditor tidak mencari kesalahan untuk menghukum, melainkan mencari **bukti kesesuaian (objective evidence)** antara praktik lapangan dengan standar ISO dan SOP internal Anda.

### 5 Langkah Emas Persiapan Audit Stage 2:

1. **Pastikan Audit Internal & RTM Sudah Selesai**: Auditor eksternal tidak akan menerbitkan sertifikat jika Audit Internal atau Rapat Tinjauan Manajemen (RTM) belum dilaksanakan secara komprehensif.
2. **Kesesuaian Rekaman Bukti Kerja**: Pastikan form-form kerja terisi lengkap dengan tanggal, tanda tangan, dan nomor revisi dokumen yang sah.
3. **Pahami Kebijakan Mutu / K3**: Karyawan dari level staff hingga direksi harus memahami makna Kebijakan Perusahaan saat ditanya auditor.
4. **Kelola Temuan Minor dengan Cepat**: Jika ada kekurangan kecil, langsung buat CAR (Corrective Action Request) dengan akar masalah (Root Cause Analysis 5-Why).
5. **Briefing Tim & Mental Audit**: Hadapi auditor dengan tenang dan komunikatif.
`,
    clauseReference: 'ISO 19011 (Panduan Audit Sistem Manajemen)',
    tags: ['Audit Eksternal', 'Sertifikasi ISO', 'RTM', 'Internal Audit'],
    keyTakeaways: [
      'Selesaikan Audit Internal & RTM minimal 2 minggu sebelum Audit Eksternal',
      'Pastikan seluruh staf memahami Kebijakan Mutu/K3 perusahaan',
      'Siapkan bukti objektif (rekaman kerja, foto, log) secara rapi'
    ]
  }
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 1,
    isoStandard: 'ISO 9001 / Umum',
    category: 'Komitmen Manajemen & Visi',
    question: 'Apakah manajemen puncak perusahaan Anda telah menetapkan Kebijakan & Sasaran Terukur (KPI) di setiap departemen?',
    options: [
      { text: 'Sudah memiliki Kebijakan & KPI tertulis yang ditinjau berkala', score: 25, advice: 'Sangat baik! Landasan kepemimpinan sudah kuat.' },
      { text: 'Ada target informal tetapi belum tertulis / terdokumentasi rapi', score: 15, advice: 'Perlu pengesahan KPI tertulis untuk setiap unit kerja.' },
      { text: 'Belum ada sasaran tertulis, masih bergantung pada arahan harian', score: 0, advice: 'Harus dimulai dari penetapan Kebijakan Mutu & Struktur KPI.' }
    ]
  },
  {
    id: 2,
    isoStandard: 'Operasional',
    category: 'Standar Operasional Prosedur (SOP)',
    question: 'Sejauh mana proses bisnis utama di perusahaan Anda telah memiliki SOP dan petunjuk kerja tertulis?',
    options: [
      { text: 'Seluruh proses utama & pendukung sudah memiliki SOP ter-update', score: 25, advice: 'Sistem dokumentasi sudah matang.' },
      { text: 'Hanya sebagian proses utama yang memiliki SOP (sekitar 50%)', score: 15, advice: 'Diperlukan pembuatan SOP terintegrasi untuk proses sisa.' },
      { text: 'Proses masih berjalan berdasarkan kebiasaan / instruksi lisan', score: 0, advice: 'Memerlukan pendampingan pembuatan SOP dari dasar.' }
    ]
  },
  {
    id: 3,
    isoStandard: 'Manajemen Risiko',
    category: 'Identifikasi Risiko & Peluang',
    question: 'Apakah perusahaan Anda memiliki Risk Register (Matriks Risiko) yang mengidentifikasi potensi kendala bisnis / siber / K3?',
    options: [
      { text: 'Sudah ada analisis risiko terstruktur beserta tindakan mitigasinya', score: 25, advice: 'Risk-based thinking telah diterapkan dengan baik.' },
      { text: 'Risiko dibahas saat masalah terjadi (pendekatan reaktif)', score: 10, advice: 'Perlu pergeseran ke pendekatan proaktif (Risk Assessment).' },
      { text: 'Belum pernah menyusun dokumen analisis risiko', score: 0, advice: 'Klausul risiko perlu disusun bersama konsultan.' }
    ]
  },
  {
    id: 4,
    isoStandard: 'Evaluasi & Audit',
    category: 'Audit Internal & Evaluasi Kinerja',
    question: 'Apakah perusahaan Anda memiliki tim auditor internal certified atau secara rutin mengevaluasi efisiensi proses?',
    options: [
      { text: 'Sudah memiliki auditor internal dan mengadakan audit berkala', score: 25, advice: 'Proses audit internal siap untuk audit sertifikasi.' },
      { text: 'Pernah mengevaluasi kinerja tetapi belum ada tim auditor terlatih', score: 10, advice: 'Diperlukan Pelatihan Certified Internal Auditor.' },
      { text: 'Belum pernah mengadakan audit internal', score: 0, advice: 'Akan diagendakan dalam jadwal pendampingan.' }
    ]
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-101',
    companyName: 'PT Mitra Karya Konstruksi',
    contactPerson: 'Ir. Agus Pratama',
    email: 'agus.pratama@mkk-group.co.id',
    phone: '0812-9876-5432',
    industry: 'Konstruksi & EPC',
    companySize: '51-200 karyawan',
    selectedIsoServices: ['ISO 9001:2015', 'ISO 45001:2018'],
    targetTimeline: 'Segera (< 3 bulan)',
    estimatedBudget: 'Rp 70.000.000 - Rp 90.000.000',
    notes: 'Membutuhkan sertifikasi cepat untuk persyaratan tender BUMN PUPR bulan depan.',
    createdAt: '2026-07-25 14:30',
    status: 'Baru',
    assignedConsultant: 'Deni Kurniawan'
  },
  {
    id: 'lead-102',
    companyName: 'PT PayTech Solusi Indonesia',
    contactPerson: 'Siska Amelia',
    email: 'siska@paytech.id',
    phone: '0811-2233-4455',
    industry: 'Fintech & Payment Gateway',
    companySize: '1-50 karyawan',
    selectedIsoServices: ['ISO 27001:2022'],
    targetTimeline: '3-6 bulan',
    estimatedBudget: 'Rp 50.000.000 - Rp 65.000.000',
    notes: 'Persyaratan audit lisensi Payment Gateway dari Bank Indonesia.',
    createdAt: '2026-07-24 09:15',
    status: 'Proposal Terkirim',
    assignedConsultant: 'Maya Putri',
    followUpHistory: [
      {
        date: '2026-07-24 11:00',
        note: 'Email penawaran awal dan estimasi timeline 6 bulan telah dikirimkan.',
        author: 'Maya Putri'
      }
    ]
  },
  {
    id: 'lead-103',
    companyName: 'PT Indo Food Delights',
    contactPerson: 'Budi Santoso',
    email: 'budi@indofooddelights.com',
    phone: '0813-8899-7711',
    industry: 'Manufaktur Makanan',
    companySize: '200+ karyawan',
    selectedIsoServices: ['ISO 22000:2018'],
    targetTimeline: '3-6 bulan',
    notes: 'Persiapan rencana perluasan pasar ekspor ke Timur Tengah.',
    createdAt: '2026-07-22 16:45',
    status: 'Deal',
    assignedConsultant: 'Deni Kurniawan',
    followUpHistory: [
      {
        date: '2026-07-23 10:00',
        note: 'Kontrak kerja sama ditandatangani. Schedule kick-off minggu depan.',
        author: 'Deni Kurniawan'
      }
    ]
  }
];
