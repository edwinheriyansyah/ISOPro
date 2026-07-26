import React from 'react';
import { Shield, CheckCircle, ArrowRight, Award, FileCheck2, Clock, Sparkles, Lock, Leaf, HardHat } from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultationModal: (isoType?: string) => void;
  onGoToGapAnalysis: () => void;
  onSelectIsoService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultationModal,
  onGoToGapAnalysis,
  onSelectIsoService
}) => {
  return (
    <section className="bg-[#FDFDFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Headlines & Editorial Intro */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-bold block mb-4">
                — Konsultansi & Sertifikasi ISO Resmi
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-[1.02] tracking-tight mb-6 text-[#1A1A1A]">
                Standar Global. <br />
                <span className="italic">Jalur Transparan</span>
              </h1>

              <p className="text-base sm:text-lg text-[#1A1A1A]/75 max-w-xl leading-relaxed mb-8">
                Mendampingi organisasi meraih sertifikasi <strong className="font-semibold text-[#1A1A1A]">ISO 9001, ISO 27001, ISO 45001, dan ISO 14001</strong> secara terstruktur, terpercaya, dan selesai dalam garansi 180 hari.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
                <button
                  onClick={() => onOpenConsultationModal()}
                  className="px-7 py-3.5 bg-[#1A1A1A] text-white text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A]/85 transition-all flex items-center justify-center gap-2"
                >
                  <span>Minta Penawaran</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onGoToGapAnalysis}
                  className="px-6 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Uji Kesiapan Gap Tool</span>
                </button>
              </div>
            </div>

            {/* Quick Guarantees & Accreditation */}
            <div className="pt-6 border-t border-[#1A1A1A]/10 grid grid-cols-3 gap-4 text-[11px] font-mono text-[#1A1A1A]/70 uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block"></span>
                <span>KAN & IAF</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block"></span>
                <span>100% Lulus Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-600 rounded-full inline-block"></span>
                <span>180 Hari Garansi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial 2x2 Bento Grid */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-px bg-[#1A1A1A]/10 border border-[#1A1A1A]/10 h-full">
              
              {/* ISO 9001 Card */}
              <div 
                onClick={() => onSelectIsoService('iso-9001')}
                className="bg-[#FDFDFB] p-6 flex flex-col justify-between cursor-pointer hover:bg-[#F5F5F3] transition"
              >
                <div>
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">01 / SERVICE</span>
                  <h3 className="text-xl font-bold font-serif mt-2">ISO 9001:2015</h3>
                  <p className="text-xs text-[#1A1A1A]/60 mt-2 leading-relaxed">Sistem Manajemen Mutu Operasional.</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-4 pt-4 border-t border-[#1A1A1A]/10">
                  <span className="w-6 h-[1px] bg-[#1A1A1A]"></span> 180 Hari
                </div>
              </div>

              {/* ISO 27001 Card */}
              <div 
                onClick={() => onSelectIsoService('iso-27001')}
                className="bg-[#FDFDFB] p-6 flex flex-col justify-between cursor-pointer hover:bg-[#F5F5F3] transition"
              >
                <div>
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">02 / SERVICE</span>
                  <h3 className="text-xl font-bold font-serif mt-2">ISO 27001:2022</h3>
                  <p className="text-xs text-[#1A1A1A]/60 mt-2 leading-relaxed">Keamanan Informasi & Aset Data.</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-4 pt-4 border-t border-[#1A1A1A]/10">
                  <span className="w-6 h-[1px] bg-[#1A1A1A]"></span> Proteksi Data
                </div>
              </div>

              {/* ISO 45001 Card */}
              <div 
                onClick={() => onSelectIsoService('iso-45001')}
                className="bg-[#FDFDFB] p-6 flex flex-col justify-between cursor-pointer hover:bg-[#F5F5F3] transition"
              >
                <div>
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">03 / SERVICE</span>
                  <h3 className="text-xl font-bold font-serif mt-2">ISO 45001:2018</h3>
                  <p className="text-xs text-[#1A1A1A]/60 mt-2 leading-relaxed">Kesehatan & Keselamatan Kerja (K3).</p>
                </div>
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest mt-4 pt-4 border-t border-[#1A1A1A]/10">
                  <span className="w-6 h-[1px] bg-[#1A1A1A]"></span> Standar K3
                </div>
              </div>

              {/* Case Study Highlight Card */}
              <div className="bg-[#1A1A1A] text-white p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">LATEST RESULT</span>
                  <h3 className="text-xl font-serif italic mt-2">PT Bank Syariah Fintech</h3>
                  <p className="text-xs opacity-75 mt-2 leading-relaxed">Sertifikasi ISO 27001 selesai dalam 4 bulan tanpa temuan mayor.</p>
                </div>
                <a 
                  href="#case-studies"
                  className="text-[10px] font-bold uppercase tracking-widest underline decoration-white/40 underline-offset-4 mt-4 block hover:text-amber-300"
                >
                  Lihat Studi Kasus
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Executive Stats Bar */}
        <div className="mt-16 pt-8 border-t border-[#1A1A1A]/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 border border-[#1A1A1A]/10 bg-[#FDFDFB]">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">CLIENTS SERVED</span>
            <div className="text-3xl font-serif font-bold text-[#1A1A1A] mt-1">150+</div>
            <div className="text-xs text-[#1A1A1A]/60 mt-1">Perusahaan Tersertifikasi</div>
          </div>
          <div className="p-4 border border-[#1A1A1A]/10 bg-[#FDFDFB]">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">AUDIT SUCCESS</span>
            <div className="text-3xl font-serif font-bold text-[#1A1A1A] mt-1">100%</div>
            <div className="text-xs text-[#1A1A1A]/60 mt-1">Tingkat Kelulusan First-Time</div>
          </div>
          <div className="p-4 border border-[#1A1A1A]/10 bg-[#FDFDFB]">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">TIMELINE GUARANTEE</span>
            <div className="text-3xl font-serif font-bold text-[#1A1A1A] mt-1">180 Hari</div>
            <div className="text-xs text-[#1A1A1A]/60 mt-1">Jadwal Selesai Terikat Kontrak</div>
          </div>
          <div className="p-4 border border-[#1A1A1A]/10 bg-[#FDFDFB]">
            <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest block">AUDITOR EXPERIENCE</span>
            <div className="text-3xl font-serif font-bold text-[#1A1A1A] mt-1">15+ Thn</div>
            <div className="text-xs text-[#1A1A1A]/60 mt-1">Pengalaman Senior Lead Auditor</div>
          </div>
        </div>

      </div>
    </section>
  );
};
