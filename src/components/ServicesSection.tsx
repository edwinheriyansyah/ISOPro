import React, { useState } from 'react';
import { ISO_SERVICES } from '../data/isoData';
import { IsoService, IsoCategory } from '../types';
import { Award, ShieldCheck, Leaf, HardHat, Utensils, Layers, ArrowRight, CheckCircle2, Clock, Search } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: IsoService) => void;
  onRequestQuote: (isoCode: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onRequestQuote
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['Semua', 'Mutu & Operasional', 'Keamanan Informasi', 'Lingkungan & K3', 'Keamanan Pangan', 'Sistem Terintegrasi'];

  const filteredServices = ISO_SERVICES.filter((service) => {
    const matchesCategory = selectedCategory === 'Semua' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
    <section id="services" className="py-16 bg-[#FDFDFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] uppercase tracking-[0.2em] opacity-50 font-bold block mb-2">
            — Layanan Konsultansi ISO Professional
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
            Pilihan Layanan <span className="italic">Sertifikasi & Standarisasi</span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm leading-relaxed max-w-2xl mx-auto">
            Setiap layanan dirancang sesuai standar internasional terkini dengan jaminan pendampingan penuh hingga sertifikat terbit dari lembaga terakreditasi KAN / IAF.
          </p>
        </div>

        {/* Filter Tabs & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#F5F5F3] p-4 border border-[#1A1A1A]/10">
          
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[10px] font-bold uppercase tracking-widest px-3.5 py-2 border transition ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FDFDFB] text-[#1A1A1A]/70 hover:text-[#1A1A1A] border-[#1A1A1A]/15'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari ISO 9001, 27001, dll..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/15 text-[#1A1A1A] text-xs pl-9 pr-4 py-2 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>

        </div>

        {/* Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#FDFDFB] border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40 p-6 transition duration-300 flex flex-col justify-between relative group"
            >
              {/* Optional Popular Badge */}
              {service.badgeText && (
                <div className="absolute top-0 right-0 bg-[#1A1A1A] text-white text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-1">
                  {service.badgeText}
                </div>
              )}

              <div>
                {/* Header Icon & Code */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 border border-[#1A1A1A]/20 flex items-center justify-center shrink-0 bg-[#F5F5F3]">
                    {renderIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#1A1A1A]/60 uppercase tracking-widest">
                      0{index + 1} / {service.code}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-[#1A1A1A] mt-0.5">{service.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed line-clamp-3 mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Benefits List */}
                <div className="space-y-1.5 mb-6 text-xs text-[#1A1A1A]/80">
                  {service.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 shrink-0" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-[#1A1A1A]/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 font-mono">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#1A1A1A]/60" />
                    <span>{service.typicalDurationDays} Hari Timeline</span>
                  </span>
                  <span className="text-[#1A1A1A] font-bold">
                    Est. Rp {(service.estimatedStartingPrice / 1000000).toFixed(0)}jt+
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    onClick={() => onSelectService(service)}
                    className="border border-[#1A1A1A] hover:bg-[#F5F5F3] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest py-2.5 px-3 transition text-center"
                  >
                    Detail Klausul
                  </button>
                  <button
                    onClick={() => onRequestQuote(service.code)}
                    className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-3 transition text-center flex items-center justify-center gap-1"
                  >
                    <span>Minta Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 bg-[#F5F5F3] border border-[#1A1A1A]/10 mt-6">
            <p className="text-[#1A1A1A]/60 text-sm">Tidak ditemukan layanan ISO yang sesuai kata kunci "{searchQuery}".</p>
          </div>
        )}

      </div>
    </section>
  );
};
