import React from 'react';
import { IsoService } from '../types';
import { X, CheckCircle, Clock, Calendar, FileText, ChevronRight, PhoneCall, Award, Layers, ShieldCheck, HardHat, Leaf, Utensils } from 'lucide-react';

interface ServiceDetailModalProps {
  service: IsoService | null;
  onClose: () => void;
  onRequestQuote: (isoCode: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onRequestQuote
}) => {
  if (!service) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-[#1A1A1A]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#1A1A1A]" />;
      case 'Leaf': return <Leaf className="w-5 h-5 text-[#1A1A1A]" />;
      case 'HardHat': return <HardHat className="w-5 h-5 text-[#1A1A1A]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#1A1A1A]" />;
      default: return <Layers className="w-5 h-5 text-[#1A1A1A]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#FDFDFB] border border-[#1A1A1A]/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto text-[#1A1A1A] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FDFDFB] border-b border-[#1A1A1A]/10 p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 border border-[#1A1A1A]/20 bg-[#F5F5F3] flex items-center justify-center shrink-0">
              {renderIcon(service.iconName)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5">
                  {service.code}
                </span>
                <span className="text-xs font-mono text-[#1A1A1A]/60">{service.category}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] mt-1">{service.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          
          {/* Subtitle & Full Description */}
          <div className="space-y-3 bg-[#F5F5F3] p-5 border border-[#1A1A1A]/10">
            <h3 className="text-xs font-mono font-bold text-[#1A1A1A] uppercase tracking-widest">{service.subtitle}</h3>
            <p className="text-[#1A1A1A]/80 text-sm leading-relaxed">{service.fullDescription}</p>
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-[#1A1A1A]/70">
              <span className="flex items-center gap-1.5 bg-[#FDFDFB] px-3 py-1.5 border border-[#1A1A1A]/15">
                <Clock className="w-4 h-4 text-[#1A1A1A]" />
                <span>Estimasi: <strong className="text-[#1A1A1A]">{service.typicalDurationDays} Hari Timeline</strong></span>
              </span>
              <span className="flex items-center gap-1.5 bg-[#FDFDFB] px-3 py-1.5 border border-[#1A1A1A]/15">
                <Award className="w-4 h-4 text-[#1A1A1A]" />
                <span>Garansi Lulus Audit 100%</span>
              </span>
            </div>
          </div>

          {/* Key Benefits */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-700" />
              <span>Manfaat Strategis Bagi Perusahaan</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-[#FDFDFB] border border-[#1A1A1A]/10 p-3.5 flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#1A1A1A] mt-2 shrink-0" />
                  <span className="text-xs sm:text-sm text-[#1A1A1A]/80">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Industries */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 mb-2">Industri Sasaran Utama:</h3>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {service.targetIndustries.map((industry, idx) => (
                <span key={idx} className="bg-[#F5F5F3] border border-[#1A1A1A]/15 text-[#1A1A1A] px-3 py-1">
                  {industry}
                </span>
              ))}
            </div>
          </div>

          {/* Clauses & Key Standards Overview */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#1A1A1A]" />
              <span>Struktur Klausul & Kontrol Utama</span>
            </h3>
            <div className="space-y-3">
              {service.clauses.map((clause, idx) => (
                <div key={idx} className="bg-[#FDFDFB] p-4 border border-[#1A1A1A]/10">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="text-[10px] font-mono font-bold text-[#1A1A1A] bg-[#F5F5F3] border border-[#1A1A1A]/15 px-2.5 py-0.5">
                      {clause.clauseNumber}
                    </span>
                    <span className="text-[11px] font-mono text-[#1A1A1A]/60">Deliverable: {clause.keyDeliverable}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#1A1A1A] mt-1">{clause.title}</h4>
                  <p className="text-xs text-[#1A1A1A]/70 mt-1">{clause.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Phase Timeline Methodology */}
          <div>
            <h3 className="text-lg font-serif font-bold text-[#1A1A1A] mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#1A1A1A]" />
              <span>Metodologi & Roadmap Proyek (180 Hari)</span>
            </h3>
            <div className="relative border-l border-[#1A1A1A]/20 ml-4 space-y-6 pl-6">
              {service.phases.map((phase) => (
                <div key={phase.phaseNumber} className="relative">
                  <div className="absolute -left-[31px] top-0 w-6 h-6 border border-[#1A1A1A] bg-[#1A1A1A] text-white text-[10px] font-mono font-bold flex items-center justify-center">
                    {phase.phaseNumber}
                  </div>
                  <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-serif font-bold text-[#1A1A1A]">{phase.phaseName}</h4>
                      <span className="text-[10px] font-mono font-bold text-[#1A1A1A] border border-[#1A1A1A]/15 bg-[#FDFDFB] px-2 py-0.5">
                        {phase.durationWeeks} Minggu
                      </span>
                    </div>
                    <div className="text-xs text-[#1A1A1A]/80 space-y-1 mb-2">
                      <strong className="text-[#1A1A1A]/60 font-mono text-[10px] uppercase">Aktivitas Utama:</strong>
                      <ul className="list-disc list-inside space-y-0.5">
                        {phase.activities.map((act, i) => (
                          <li key={i}>{act}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-[#1A1A1A]/70 font-mono">
                      <span className="text-[#1A1A1A] font-bold">Output Dokumen: </span>
                      {phase.deliverables.join(', ')}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="sticky bottom-0 bg-[#FDFDFB] border-t border-[#1A1A1A]/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono text-[#1A1A1A]/60">Estimasi Biaya Konsultansi:</div>
            <div className="text-base font-serif font-bold text-[#1A1A1A]">
              Mulai Rp {service.estimatedStartingPrice.toLocaleString('id-ID')}
              <span className="text-xs font-sans font-normal text-[#1A1A1A]/60"> (Tergantung Skala Karyawan)</span>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(service.code);
            }}
            className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 transition flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Minta Penawaran Resmi ({service.code})</span>
          </button>
        </div>

      </div>
    </div>
  );
};
