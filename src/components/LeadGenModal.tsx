import React from 'react';
import { LeadGenForm } from './LeadGenForm';
import { X, Shield, PhoneCall } from 'lucide-react';

interface LeadGenModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIsoCode?: string;
  onSuccessSubmitted?: (data: any) => void;
}

export const LeadGenModal: React.FC<LeadGenModalProps> = ({
  isOpen,
  onClose,
  defaultIsoCode = 'ISO 9001:2015',
  onSuccessSubmitted
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#FDFDFB] border border-[#1A1A1A]/20 max-w-2xl w-full max-h-[92vh] overflow-y-auto text-[#1A1A1A] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FDFDFB] border-b border-[#1A1A1A]/10 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <PhoneCall className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-lg font-serif font-bold text-[#1A1A1A]">Formulir Konsultasi ISO Gratis</h2>
              <p className="text-xs font-mono text-[#1A1A1A]/60">Dapatkan penawaran harga resmi, estimasi durasi, dan roadmap proyek</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Content */}
        <div className="p-6">
          <LeadGenForm 
            defaultIsoCode={defaultIsoCode}
            onSuccessSubmitted={(data) => {
              if (onSuccessSubmitted) onSuccessSubmitted(data);
            }}
            isModalMode={true}
          />
        </div>

      </div>
    </div>
  );
};
