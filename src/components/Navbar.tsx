import React, { useState, useEffect } from 'react';
import { Shield, PhoneCall, Award, FileText, ChevronRight, Menu, X, Users, CheckCircle2, Sparkles } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenConsultationModal: (isoType?: string) => void;
  onOpenAdminPortal: () => void;
  unreadLeadsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  onOpenConsultationModal,
  onOpenAdminPortal,
  unreadLeadsCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'services', label: 'Layanan ISO' },
    { id: 'case-studies', label: 'Studi Kasus' },
    { id: 'gap-analysis', label: 'Cek Kesiapan' },
    { id: 'blog', label: 'Edukasi' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-[#FDFDFB]/95 backdrop-blur-md shadow-sm border-b border-[#1A1A1A]/10 text-[#1A1A1A]' : 'bg-[#FDFDFB] border-b border-[#1A1A1A]/10 text-[#1A1A1A]'
    }`}>
      {/* Top Banner Contact Strip */}
      <div className="bg-[#1A1A1A] text-[#FDFDFB] text-[10px] font-mono py-2 px-4 uppercase tracking-widest hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center opacity-90">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-emerald-300 font-sans tracking-normal font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Lembaga Konsultansi Sertifikasi ISO Resmi Terakreditasi KAN & IAF
            </span>
            <span className="opacity-40">|</span>
            <span>
              Hotline: <strong className="text-white font-mono">+62 21 8062 9001</strong>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenAdminPortal}
              className="text-[10px] bg-[#FDFDFB]/10 hover:bg-[#FDFDFB]/20 text-white px-2.5 py-1 rounded-none border border-white/20 transition flex items-center gap-1.5 font-sans tracking-wider uppercase font-semibold"
              title="Portal Khusus Konsultan & Tim Marketing Internal"
            >
              <Users className="w-3 h-3 text-amber-300" />
              <span>Portal Tim Internal</span>
              {unreadLeadsCount > 0 && (
                <span className="bg-amber-400 text-black text-[9px] font-mono font-bold px-1.5 rounded-none">
                  {unreadLeadsCount} Lead
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand */}
          <div 
            className="flex items-baseline gap-2.5 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-9 h-9 border border-[#1A1A1A] flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition duration-300">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-[#1A1A1A]">
                  ISO<span className="font-serif italic font-normal">Pro</span>
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#1A1A1A]/50 font-bold border-l border-[#1A1A1A]/20 pl-2">
                  Consultancy Group
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-widest text-[#1A1A1A]/50 -mt-1 font-mono">Standar & Audit ISO</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`transition-all relative py-1 ${
                    isActive 
                      ? 'text-[#1A1A1A] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1A1A1A]' 
                      : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenConsultationModal()}
              className="px-6 py-2.5 border border-[#1A1A1A] bg-transparent text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden gap-2">
            <button
              onClick={onOpenAdminPortal}
              className="p-2 text-[#1A1A1A] border border-[#1A1A1A]/20 rounded-none text-xs flex items-center gap-1"
            >
              <Users className="w-4 h-4" />
              {unreadLeadsCount > 0 && <span className="bg-[#1A1A1A] text-white px-1.5 py-0.5 text-[10px] font-mono">{unreadLeadsCount}</span>}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 border border-[#1A1A1A] text-[#1A1A1A] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FDFDFB] border-b border-[#1A1A1A]/20 px-4 pt-4 pb-6 space-y-4">
          <div className="flex flex-col space-y-2 text-[11px] font-semibold uppercase tracking-widest">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left py-2.5 px-3 border-b border-[#1A1A1A]/10 ${
                  activeTab === item.id ? 'bg-[#1A1A1A] text-white font-bold' : 'text-[#1A1A1A]/80 hover:bg-[#F5F5F3]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenConsultationModal();
                setMobileMenuOpen(false);
              }}
              className="w-full bg-[#1A1A1A] text-white font-bold py-3 text-center text-[10px] uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Minta Penawaran & Konsultasi</span>
            </button>
            <button
              onClick={() => {
                onOpenAdminPortal();
                setMobileMenuOpen(false);
              }}
              className="w-full border border-[#1A1A1A] text-[#1A1A1A] py-2 text-[10px] font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2"
            >
              <Users className="w-3.5 h-3.5" />
              <span>Portal Internal Tim Marketing</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
