import React from 'react';
import { Shield, PhoneCall, Mail, MapPin, CheckCircle2, Award, Clock } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: () => void;
  onOpenAdminPortal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActiveTab,
  onOpenConsultationModal,
  onOpenAdminPortal
}) => {
  return (
    <footer className="bg-[#1A1A1A] text-white/70 text-xs border-t border-[#1A1A1A]">
      {/* Top CTA Bar */}
      <div className="bg-[#1A1A1A] border-b border-white/10 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-white">Siap Memulai Proyek Sertifikasi ISO Perusahaan Anda?</h3>
            <p className="text-white/70 text-xs">Konsultasikan kebutuhan ISO 9001, 27001, 45001, atau IMS dengan tim Lead Auditor senior kami secara gratis.</p>
          </div>
          <button
            onClick={onOpenConsultationModal}
            className="bg-white text-[#1A1A1A] hover:bg-white/90 font-bold text-[10px] uppercase tracking-widest px-7 py-3.5 transition shrink-0"
          >
            Minta Penawaran Kustom
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <span className="text-xl font-serif font-bold text-white tracking-wide">ISOPRO CONSULTING</span>
          </div>
          <p className="text-white/60 leading-relaxed pr-4 text-xs">
            Konsultan pendampingan sertifikasi ISO terdepan di Indonesia. Membantu lebih dari 150+ perusahaan manufaktur, finansial, konstruksi, dan teknologi meraih sertifikasi terakreditasi KAN / IAF secara tepat waktu dan efisien.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <span className="border border-white/20 text-white/80 px-3 py-1 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              KAN Accredited
            </span>
            <span className="border border-white/20 text-white/80 px-3 py-1 text-[10px] font-mono uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-blue-400" />
              IAF Member
            </span>
          </div>
        </div>

        {/* Col 2: Services */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/50">Layanan ISO</h4>
          <ul className="space-y-2 text-white/70">
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">ISO 9001:2015 (Mutu)</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">ISO 27001:2022 (Keamanan Data)</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">ISO 45001:2018 (K3 / SMK3)</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">ISO 14001:2015 (Lingkungan)</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">ISO 22000:2018 (Keamanan Pangan)</button></li>
            <li><button onClick={() => setActiveTab('services')} className="hover:text-white transition">Integrated System (IMS)</button></li>
          </ul>
        </div>

        {/* Col 3: Navigation */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/50">Navigasi Utama</h4>
          <ul className="space-y-2 text-white/70">
            <li><button onClick={() => setActiveTab('home')} className="hover:text-white transition">Beranda</button></li>
            <li><button onClick={() => setActiveTab('case-studies')} className="hover:text-white transition">Studi Kasus Klien</button></li>
            <li><button onClick={() => setActiveTab('gap-analysis')} className="hover:text-white transition">Cek Kesiapan (Gap Tool)</button></li>
            <li><button onClick={() => setActiveTab('blog')} className="hover:text-white transition">Edukasi & Artikel ISO</button></li>
            <li><button onClick={onOpenAdminPortal} className="hover:text-amber-300 font-mono text-amber-300 text-[11px] uppercase tracking-wider">Portal Tim Internal</button></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="space-y-3">
          <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/50">Kantor & Kontak</h4>
          <ul className="space-y-2.5 text-white/70">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
              <span>Soho Capital Lt. 28, Jl. S. Parman Kav. 28, Jakarta Barat 11470</span>
            </li>
            <li className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-white/50 shrink-0" />
              <span>+62 21 8062 9001 / +62 812-9876-5432</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white/50 shrink-0" />
              <span>info@isopro-consulting.co.id</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/50 shrink-0" />
              <span>Senin - Sabtu: 08.00 - 18.00 WIB</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 text-white/40 text-center font-mono text-[10px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 ISOPRO CONSULTING INDONESIA. HAK CIPTA DILINDUNGI UNDANG-UNDANG.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">KEBIJAKAN PRIVASI</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">SYARAT & KETENTUAN</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
