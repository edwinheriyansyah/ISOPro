import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award,
  ShieldCheck,
  Clock,
  Building2,
  Users
} from 'lucide-react';

interface BannerSlide {
  id: string;
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
  category: string;
  isoCode: string;
  imageUrl: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  };
  highlights: string[];
  ctaText: string;
  ctaActionIso?: string;
}

interface BannerSliderProps {
  onOpenConsultationModal: (isoType?: string) => void;
  onGoToGapAnalysis: () => void;
  onSelectIsoService: (serviceId: string) => void;
}

const SLIDES: BannerSlide[] = [
  {
    id: 'iso-9001',
    badge: 'MANAJEMEN MUTU GLOBAL',
    titleLine1: 'Standar Mutu Operasional,',
    titleHighlight: 'Garansi Lulus 180 Hari.',
    subtitle: 'Pendampingan komprehensif bagi perusahaan manufaktur, konstruksi, dan jasa untuk meraih sertifikasi ISO 9001:2015 secara terstruktur tanpa hambatan birokrasi.',
    category: 'Sistem Manajemen Mutu (SMM)',
    isoCode: 'ISO 9001:2015',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Auditor & QA Specialist Manufaktur',
    stats: {
      value: '100%',
      label: 'Kelulusan Audit KAN & IAF'
    },
    highlights: ['Penyusunan SOP & Manual Mutu', 'Pendampingan Audit Internal', 'Garansi Bebas Temuan Mayor'],
    ctaText: 'Konsultasi ISO 9001',
    ctaActionIso: 'ISO 9001:2015'
  },
  {
    id: 'iso-27001',
    badge: 'KEAMANAN SIBER & ISMS',
    titleLine1: 'Perlindungan Data Sensitif,',
    titleHighlight: 'Standar Industri Digital.',
    subtitle: 'Amankan infrastruktur cloud, privasi konsumen, dan aset IT sesuai ISO 27001:2022. Syarat utama vendor Fintech, IT, Banking, dan Lembaga Keuangan.',
    category: 'Keamanan Informasi (ISMS)',
    isoCode: 'ISO 27001:2022',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Infrastruktur Data Center & Cyber Security',
    stats: {
      value: '93+',
      label: 'Kontrol Annex A Siap Derap'
    },
    highlights: ['Analisis Risiko Aset Informasi', 'Simulasi Vulnerability Assessment', 'Kepatuhan Regulasi PDP'],
    ctaText: 'Konsultasi ISO 27001',
    ctaActionIso: 'ISO 27001:2022'
  },
  {
    id: 'iso-45001-14001',
    badge: 'INTEGRATED HSE & LINGKUNGAN',
    titleLine1: 'Keselamatan Kerja K3 &',
    titleHighlight: 'Komitmen Lingkungan.',
    subtitle: 'Integrasikan ISO 45001 (K3) dan ISO 14001 (Lingkungan) untuk memenuhi syarat CSMS tender BUMN, Pertambangan, & Kontraktor Multinasional.',
    category: 'K3 & Manajemen Lingkungan',
    isoCode: 'ISO 45001 & 14001',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Insinyur & Pengawas K3 Industri',
    stats: {
      value: 'Zero Accident',
      label: 'Budaya K3 Terverifikasi'
    },
    highlights: ['Identifikasi Bahaya (HIRADC/IBPR)', 'Audit Lingkungan & AMDAL', 'Lolos Kualifikasi CSMS'],
    ctaText: 'Konsultasi HSE Integrasi',
    ctaActionIso: 'ISO 45001:2018'
  },
  {
    id: 'ims-multi',
    badge: 'SINERGI MULTI-STANDAR (IMS)',
    titleLine1: 'Integrated System (IMS),',
    titleHighlight: 'Hemat Biaya & Waktu 40%.',
    subtitle: 'Gabungkan sertifikasi Mutu, K3, dan Keamanan Informasi dalam 1 siklus audit terpadu. Lebih efisien dan menghemat investasi operasional perusahaan.',
    category: 'Integrated Management System',
    isoCode: 'IMS Multi-ISO',
    imageUrl: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    imageAlt: 'Tim Eksekutif & Konsultan Bisnis',
    stats: {
      value: 'Efisiensi 40%',
      label: 'Hemat Waktu & Biaya Audit'
    },
    highlights: ['Satu Manual Dokumentasi Terpadu', 'Satu Kali Audit Internal Bersama', 'Implementasi Lintas Divisi'],
    ctaText: 'Diskusi Paket IMS',
    ctaActionIso: 'Sistem Manajemen Terintegrasi (IMS)'
  }
];

export const BannerSlider: React.FC<BannerSliderProps> = ({
  onOpenConsultationModal,
  onGoToGapAnalysis,
  onSelectIsoService
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section 
      className="relative bg-[#0F0F0F] text-white overflow-hidden select-none border-b border-[#1A1A1A]"
    >
      {/* FULL-BLEED SLIDE BACKGROUND IMAGES WITH SMOOTH FADE-IN / FADE-OUT */}
      {SLIDES.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            idx === currentIndex 
              ? 'opacity-100 z-0 scale-100 pointer-events-auto' 
              : 'opacity-0 -z-10 scale-105 pointer-events-none'
          }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.imageAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.1] transition-transform duration-10000 ease-linear transform scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Executive Dark Gradients for Crisp Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D]/95 via-[#0D0D0D]/80 to-[#0D0D0D]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-[#0D0D0D]/30" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        </div>
      ))}

      {/* OVERLAY CONTENT AREA - INTEGRATED WITH BANNER & SMOOTH FADE TRANSITION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10 space-y-8">
        
        {/* Top Executive Trust Bar inside Banner Overlay */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/15 text-[11px] font-mono uppercase tracking-wider text-white/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="font-bold text-white tracking-widest">AKREDITASI KAN & IAF RESMI</span>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:inline font-mono text-amber-300">
              {SLIDES[currentIndex].isoCode}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Garansi Audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300" />
                <span>180 Hari Tuntas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>IRCA Certified</span>
              </div>
            </div>

            {/* Slide Count Indicator Badge */}
            <div className="flex items-center gap-1 text-[11px] font-mono text-white/70 bg-black/40 px-3 py-1 border border-white/15 backdrop-blur-sm">
              <span className="text-amber-300 font-bold">0{currentIndex + 1}</span>
              <span>/</span>
              <span>0{SLIDES.length}</span>
            </div>
          </div>
        </div>

        {/* Main Integrated Text & Visual Details Grid with Fade Transitions */}
        <div className="relative min-h-[380px]">
          {SLIDES.map((currentSlide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={currentSlide.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch transition-all duration-700 ease-in-out ${
                  isActive 
                    ? 'opacity-100 translate-y-0 relative z-10 pointer-events-auto' 
                    : 'opacity-0 translate-y-2 absolute inset-0 z-0 pointer-events-none'
                }`}
              >
                {/* Left Hero Details */}
                <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white text-black text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg">
                      <Sparkles className="w-3 h-3 text-amber-600" />
                      <span>{currentSlide.badge}</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-[1.08] tracking-tight drop-shadow-md">
                      {currentSlide.titleLine1} <br />
                      <span className="italic font-normal text-amber-200">{currentSlide.titleHighlight}</span>
                    </h1>

                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl font-sans drop-shadow-sm">
                      {currentSlide.subtitle}
                    </p>
                  </div>

                  {/* Highlights List Overlay */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {currentSlide.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-white bg-black/50 backdrop-blur-md p-3 border border-white/20">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions & Slide Dots Switcher */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/20">
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenConsultationModal(currentSlide.ctaActionIso)}
                        className="px-7 py-3.5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-amber-300 transition-all flex items-center justify-center gap-2 shadow-xl"
                      >
                        <span>{currentSlide.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={onGoToGapAnalysis}
                        className="px-6 py-3.5 border border-white text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 bg-black/30 backdrop-blur-sm"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>Uji Gap Tool</span>
                      </button>
                    </div>

                    {/* Progress Dots */}
                    <div className="flex items-center gap-2 pt-2 sm:pt-0">
                      {SLIDES.map((s, dotIdx) => (
                        <button
                          key={s.id}
                          onClick={() => setCurrentIndex(dotIdx)}
                          className={`h-2 transition-all duration-500 rounded-full ${
                            currentIndex === dotIdx 
                              ? 'w-10 bg-amber-300' 
                              : 'w-2 bg-white/30 hover:bg-white/70'
                          }`}
                          title={s.isoCode}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Right Floating Integrated Glass Card */}
                <div className="lg:col-span-4 flex flex-col justify-between">
                  <div className="bg-black/60 backdrop-blur-md border border-white/20 p-6 sm:p-8 flex flex-col justify-between h-full shadow-2xl relative">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-white/15 pb-3">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-300">
                          KODE STANDAR: {currentSlide.isoCode}
                        </span>
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                      </div>

                      <div>
                        <div className="text-4xl font-serif font-bold text-white">
                          {currentSlide.stats.value}
                        </div>
                        <div className="text-xs font-mono uppercase tracking-wider text-white/80 mt-1">
                          {currentSlide.stats.label}
                        </div>
                      </div>

                      <div className="p-4 bg-white/10 border border-white/10 space-y-2 text-xs">
                        <div className="font-bold font-serif text-amber-200">Garansi Layanan Konsultasi:</div>
                        <ul className="space-y-1.5 text-white/85 font-sans">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-400"></span>
                            <span>Pendampingan Audit Lapangan 1-on-1</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-400"></span>
                            <span>Dukungan Tim Legal & Pemenuhan Regulasi</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-amber-400"></span>
                            <span>Sistem Pembayaran Bertahap Sesuai Output</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-white/60">Sertifikasi Resmi KAN / IAF</span>
                      <button
                        onClick={() => onSelectIsoService(currentSlide.id)}
                        className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 hover:text-white underline transition"
                      >
                        Detail {currentSlide.isoCode} →
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Metrics Bar inside Banner Canvas */}
        <div className="pt-6 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 border border-white/15 bg-black/40 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest block">CLIENTS SERVED</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">150+</div>
            <div className="text-xs text-white/80 mt-1 font-sans">Perusahaan Tersertifikasi</div>
          </div>
          <div className="p-4 border border-white/15 bg-black/40 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest block">AUDIT SUCCESS</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-emerald-400 mt-1">100%</div>
            <div className="text-xs text-white/80 mt-1 font-sans">Kelulusan Audit Pertama</div>
          </div>
          <div className="p-4 border border-white/15 bg-black/40 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest block">TIMELINE GUARANTEE</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-300 mt-1">180 Hari</div>
            <div className="text-xs text-white/80 mt-1 font-sans">Sertifikasi Terjamin</div>
          </div>
          <div className="p-4 border border-white/15 bg-black/40 backdrop-blur-sm">
            <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest block">LEAD AUDITORS</span>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">15+ Thn</div>
            <div className="text-xs text-white/80 mt-1 font-sans">Pengalaman Senior IRCA</div>
          </div>
        </div>

      </div>
    </section>
  );
};


