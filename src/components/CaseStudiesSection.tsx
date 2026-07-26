import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/isoData';
import { CaseStudy } from '../types';
import { Award, Building2, TrendingUp, ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

interface CaseStudiesSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onRequestQuote: (isoCode: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
  onRequestQuote
}) => {
  return (
    <section id="case-studies" className="py-16 bg-[#FDFDFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-bold block mb-2">
            — Rekam Jejak & Relevansi Industri
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Studi Kasus & <span className="italic">Portofolio Keberhasilan Klien</span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Lihat bagaimana perusahaan dari berbagai sektor berhasil meraih sertifikasi ISO, memperbaiki proses operasional, dan memenangkan tender besar bersama IsoPro.
          </p>
        </div>

        {/* Featured Showcase Banner */}
        <div className="mt-12 bg-[#F5F5F3] border border-[#1A1A1A]/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8">
          <div className="lg:col-span-7 space-y-4">
            <span className="bg-[#1A1A1A] text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1 inline-block">
              FEATURED CASE STUDY
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#1A1A1A]">
              Sertifikasi ISO 9001:2015 & IATF Manufaktur Otomotif
            </h3>
            <p className="text-xs text-[#1A1A1A]/75 leading-relaxed">
              Membantu PT Nusantara Manufaktur Presisi menekan angka defect rate dari 4.8% menjadi 0.6% dalam durasi 5.5 bulan, sekaligus meraih lisensi pamasokan komponen utama APM Jepang.
            </p>
            <div className="grid grid-cols-3 gap-3 py-2">
              <div className="bg-[#FDFDFB] p-3 border border-[#1A1A1A]/10 text-center">
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">-87%</div>
                <div className="text-[10px] font-mono opacity-60 uppercase">Defect Rate</div>
              </div>
              <div className="bg-[#FDFDFB] p-3 border border-[#1A1A1A]/10 text-center">
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">5.5 Bln</div>
                <div className="text-[10px] font-mono opacity-60 uppercase">Durasi Audit</div>
              </div>
              <div className="bg-[#FDFDFB] p-3 border border-[#1A1A1A]/10 text-center">
                <div className="text-xl font-serif font-bold text-[#1A1A1A]">100%</div>
                <div className="text-[10px] font-mono opacity-60 uppercase">Pass Rate</div>
              </div>
            </div>
            <button
              onClick={() => onSelectCaseStudy(CASE_STUDIES[0])}
              className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-3 transition inline-flex items-center gap-2"
            >
              <span>Baca Detail Studi Kasus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="lg:col-span-5 border border-[#1A1A1A]/10 overflow-hidden bg-[#FDFDFB]">
            <img
              src="/src/assets/images/iso_consulting_team_1785069250668.jpg"
              alt="Penyerahan Sertifikat ISO Klien"
              referrerPolicy="no-referrer"
              className="w-full h-[260px] object-cover hover:scale-105 transition duration-500"
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_STUDIES.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-[#FDFDFB] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 p-6 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
                    CASE 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A] border border-[#1A1A1A]/20 px-2.5 py-0.5 bg-[#F5F5F3]">
                    {cs.isoType}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-1">{cs.clientName}</h3>
                <p className="text-xs text-[#1A1A1A]/60 font-mono mb-3">{cs.industry}</p>

                <p className="text-xs text-[#1A1A1A]/75 line-clamp-3 leading-relaxed mb-4">
                  {cs.challenge}
                </p>

                {/* Metrics */}
                <div className="bg-[#F5F5F3] p-3 border border-[#1A1A1A]/10 mb-4 space-y-1">
                  {cs.impactMetrics.map((m, metricIdx) => (
                    <div key={metricIdx} className="flex justify-between items-center text-xs">
                      <span className="text-[#1A1A1A]/60 font-mono text-[11px]">{m.label}:</span>
                      <span className="font-bold font-serif text-[#1A1A1A]">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectCaseStudy(cs)}
                className="w-full border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest py-2.5 transition flex items-center justify-center gap-1.5"
              >
                <span>Lihat Studi Kasus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
