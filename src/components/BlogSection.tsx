import React, { useState } from 'react';
import { ARTICLES } from '../data/isoData';
import { Article } from '../types';
import { BookOpen, Sparkles, Search, ArrowRight, User, Calendar, Clock, Tag } from 'lucide-react';

interface BlogSectionProps {
  onSelectArticle: (article: Article) => void;
  onOpenAiConsultant: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onSelectArticle,
  onOpenAiConsultant
}) => {
  const [selectedStandard, setSelectedStandard] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const standards = ['Semua', 'ISO 9001:2015', 'ISO 27001:2022', 'Umum / All ISO'];

  const filteredArticles = ARTICLES.filter((art) => {
    const matchesStandard = selectedStandard === 'Semua' || art.isoStandard === selectedStandard;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStandard && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 bg-[#FDFDFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-bold block mb-2">
            — Pusat Edukasi & Artikel Praktis ISO
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Artikel, Tips Audit, & <span className="italic">Penjelasan Klausul ISO</span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Edukasi transparan seputar persyaratan klausul ISO 9001, perubahan ISO 27001:2022, hingga strategi sukses audit eksternal tanpa temuan mayor.
          </p>
        </div>

        {/* AI Assistant Banner Launcher */}
        <div className="mt-10 bg-[#1A1A1A] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-amber-300 bg-white/10 px-2.5 py-1 inline-block">
              AI ISO ASSISTANT LIVE
            </span>
            <h3 className="text-xl sm:text-2xl font-serif italic text-white">Ada Pertanyaan Klausul ISO Spesifik?</h3>
            <p className="text-xs sm:text-sm text-white/75 max-w-xl leading-relaxed">
              Gunakan Asisten AI Konsultan ISO untuk menanyakan penjelasan klausul spesifik, penyusunan SOP, atau persyaratan regulasi secara instan.
            </p>
          </div>

          <button
            onClick={onOpenAiConsultant}
            className="bg-white text-[#1A1A1A] hover:bg-white/90 font-bold text-[10px] uppercase tracking-widest px-6 py-3.5 transition flex items-center gap-2 shrink-0"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Tanya AI Konsultan ISO</span>
          </button>
        </div>

        {/* Filter Tabs & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F5F5F3] p-4 border border-[#1A1A1A]/10">
          <div className="flex flex-wrap gap-2">
            {standards.map((std) => (
              <button
                key={std}
                onClick={() => setSelectedStandard(std)}
                className={`text-[10px] font-mono uppercase tracking-widest px-3.5 py-2 border transition ${
                  selectedStandard === std
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FDFDFB] text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                {std}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari artikel, klausul..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs pl-9 pr-4 py-2 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="bg-[#FDFDFB] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 p-6 transition duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold text-[#1A1A1A] border border-[#1A1A1A]/20 bg-[#F5F5F3] px-2.5 py-0.5">
                    {art.isoStandard}
                  </span>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/60">{art.readTime}</span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:underline decoration-1 underline-offset-4 line-clamp-2 mb-2">
                  {art.title}
                </h3>

                <p className="text-xs text-[#1A1A1A]/70 line-clamp-3 leading-relaxed mb-4">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-3">
                <div className="text-[10px] font-mono text-[#1A1A1A]/60 flex items-center justify-between">
                  <span>Oleh: <strong className="text-[#1A1A1A]">{art.author.name}</strong></span>
                  <span>{art.publishedDate}</span>
                </div>

                <button
                  onClick={() => onSelectArticle(art)}
                  className="w-full border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest py-2.5 transition flex items-center justify-center gap-1.5"
                >
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
