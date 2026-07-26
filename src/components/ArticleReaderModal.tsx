import React from 'react';
import { Article } from '../types';
import { X, Calendar, Clock, User, BookOpen, Tag, PhoneCall, CheckCircle } from 'lucide-react';

interface ArticleReaderModalProps {
  article: Article | null;
  onClose: () => void;
  onRequestQuote: (isoCode: string) => void;
}

export const ArticleReaderModal: React.FC<ArticleReaderModalProps> = ({
  article,
  onClose,
  onRequestQuote
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#FDFDFB] border border-[#1A1A1A]/20 max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1A1A1A] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-10 bg-[#FDFDFB] border-b border-[#1A1A1A]/10 p-6 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#1A1A1A] text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-0.5">
                {article.isoStandard}
              </span>
              <span className="text-xs font-mono text-[#1A1A1A]/60">• {article.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A] leading-snug">{article.title}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 transition shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#1A1A1A]/70 bg-[#F5F5F3] p-3.5 border border-[#1A1A1A]/10">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-[#1A1A1A]" />
              <strong className="text-[#1A1A1A]">{article.author.name}</strong> ({article.author.role})
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#1A1A1A]/60" />
              <span>{article.publishedDate}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#1A1A1A]/60" />
              <span>{article.readTime}</span>
            </span>
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4 space-y-2">
            <h3 className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-emerald-700" />
              <span>Poin Kunci Edukasi (Key Takeaways):</span>
            </h3>
            <ul className="space-y-1 text-xs text-[#1A1A1A]/80 list-disc list-inside">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Body Content */}
          <div className="prose max-w-none text-[#1A1A1A]/80 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
            {article.contentMarkdown}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-[#1A1A1A]/10 flex items-center gap-2 flex-wrap font-mono text-[10px]">
            <Tag className="w-4 h-4 text-[#1A1A1A]/50" />
            {article.tags.map((tag, idx) => (
              <span key={idx} className="bg-[#F5F5F3] border border-[#1A1A1A]/15 text-[#1A1A1A] px-2.5 py-1">
                #{tag}
              </span>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FDFDFB] border-t border-[#1A1A1A]/10 p-5 flex items-center justify-between">
          <div className="text-xs text-[#1A1A1A]/70">
            Butuh bantuan penerapan klausul ini di perusahaan?
          </div>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(article.isoStandard);
            }}
            className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 transition flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Konsultasikan Pembuatan SOP</span>
          </button>
        </div>

      </div>
    </div>
  );
};
