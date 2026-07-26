import React from 'react';
import { CaseStudy } from '../types';
import { X, Building2, Award, TrendingUp, CheckCircle, Quote, Clock, PhoneCall } from 'lucide-react';

interface CaseStudyDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onRequestQuote: (isoCode: string) => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  caseStudy,
  onClose,
  onRequestQuote
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#FDFDFB] border border-[#1A1A1A]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1A1A1A] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FDFDFB] border-b border-[#1A1A1A]/10 p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#1A1A1A] bg-[#1A1A1A] text-white font-mono font-bold text-base flex items-center justify-center shrink-0">
              {caseStudy.logoInitial}
            </div>
            <div>
              <span className="bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5">
                {caseStudy.isoType}
              </span>
              <h2 className="text-xl font-serif font-bold text-[#1A1A1A] mt-1">{caseStudy.clientName}</h2>
              <p className="text-xs font-mono text-[#1A1A1A]/60">{caseStudy.industry} • {caseStudy.companySize}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Key Impact Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {caseStudy.impactMetrics.map((metric, idx) => (
              <div key={idx} className="bg-[#F5F5F3] p-4 border border-[#1A1A1A]/10 text-center">
                <div className="text-lg sm:text-xl font-mono font-bold text-[#1A1A1A]">{metric.value}</div>
                <div className="text-xs font-sans text-[#1A1A1A]/70 mt-0.5">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Challenge */}
          <div className="bg-[#FDFDFB] p-4 border border-[#1A1A1A]/10">
            <h3 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#1A1A1A]" />
              <span>Tantangan Awal Klien</span>
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div className="bg-[#FDFDFB] p-4 border border-[#1A1A1A]/10">
            <h3 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest mb-2 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>Solusi & Pendampingan IsoPro</span>
            </h3>
            <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-sans">{caseStudy.solution}</p>
          </div>

          {/* Testimonial Quote */}
          <div className="bg-[#F5F5F3] p-5 border border-[#1A1A1A]/10 relative">
            <Quote className="w-8 h-8 text-[#1A1A1A]/10 absolute top-3 right-3" />
            <p className="text-sm font-serif italic text-[#1A1A1A] leading-relaxed mb-3">"{caseStudy.testimonial.quote}"</p>
            <div className="text-xs font-mono">
              <strong className="text-[#1A1A1A] block">{caseStudy.testimonial.author}</strong>
              <span className="text-[#1A1A1A]/60">{caseStudy.testimonial.role}</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FDFDFB] border-t border-[#1A1A1A]/10 p-5 flex items-center justify-between">
          <div className="text-xs font-mono text-[#1A1A1A]/70">
            Durasi Sertifikasi: <strong className="text-[#1A1A1A]">{caseStudy.durationMonths} Bulan</strong>
          </div>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(caseStudy.isoType);
            }}
            className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Raih Sukses Seperti Klien Ini</span>
          </button>
        </div>

      </div>
    </div>
  );
};
