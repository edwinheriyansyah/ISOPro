import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { CaseStudyDetailModal } from './components/CaseStudyDetailModal';
import { LeadGenForm } from './components/LeadGenForm';
import { LeadGenModal } from './components/LeadGenModal';
import { GapAnalysisTool } from './components/GapAnalysisTool';
import { BlogSection } from './components/BlogSection';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { AiIsoConsultantModal } from './components/AiIsoConsultantModal';
import { InternalLeadsAdmin } from './components/InternalLeadsAdmin';
import { Footer } from './components/Footer';
import { IsoService, CaseStudy, Article } from './types';
import { ISO_SERVICES } from './data/isoData';
import { PhoneCall, Shield, Sparkles, CheckCircle, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedServiceModal, setSelectedServiceModal] = useState<IsoService | null>(null);
  const [selectedCaseStudyModal, setSelectedCaseStudyModal] = useState<CaseStudy | null>(null);
  const [selectedArticleModal, setSelectedArticleModal] = useState<Article | null>(null);

  const [leadGenModalOpen, setLeadGenModalOpen] = useState(false);
  const [leadGenDefaultIso, setLeadGenDefaultIso] = useState('ISO 9001:2015');

  const [aiConsultantModalOpen, setAiConsultantModalOpen] = useState(false);
  const [unreadLeadsCount, setUnreadLeadsCount] = useState(1);

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleOpenConsultationModal = (isoCode?: string) => {
    if (isoCode) {
      setLeadGenDefaultIso(isoCode);
    } else {
      setLeadGenDefaultIso('ISO 9001:2015');
    }
    setLeadGenModalOpen(true);
  };

  const handleSelectIsoShortcut = (serviceId: string) => {
    const s = ISO_SERVICES.find((srv) => srv.id === serviceId);
    if (s) {
      setSelectedServiceModal(s);
    } else {
      setActiveTab('services');
    }
  };

  if (activeTab === 'admin-portal') {
    return (
      <InternalLeadsAdmin 
        onBackToWebsite={() => setActiveTab('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] font-sans antialiased selection:bg-[#1A1A1A] selection:text-white">
      
      {/* Navbar Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenConsultationModal={handleOpenConsultationModal}
        onOpenAdminPortal={() => setActiveTab('admin-portal')}
        unreadLeadsCount={unreadLeadsCount}
      />

      {/* Dynamic View Sections */}
      <main>
        {activeTab === 'home' && (
          <>
            <HeroSection
              onOpenConsultationModal={handleOpenConsultationModal}
              onGoToGapAnalysis={() => setActiveTab('gap-analysis')}
              onSelectIsoService={handleSelectIsoShortcut}
            />

            <ServicesSection
              onSelectService={(srv) => setSelectedServiceModal(srv)}
              onRequestQuote={(code) => handleOpenConsultationModal(code)}
            />

            <CaseStudiesSection
              onSelectCaseStudy={(cs) => setSelectedCaseStudyModal(cs)}
              onRequestQuote={(code) => handleOpenConsultationModal(code)}
            />

            <GapAnalysisTool
              onRequestConsultationWithScore={(score, focusIso) => handleOpenConsultationModal(focusIso)}
            />

            {/* Embedded Lead Gen Section in Homepage */}
            <section className="py-20 bg-[#F5F5F3] border-t border-b border-[#1A1A1A]/10">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-3 mb-10">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#1A1A1A]/50 block">
                    — Permintaan Penawaran Transparan
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] tracking-tight">
                    Konsultasi & Penawaran <span className="italic">Resmi</span>
                  </h2>
                  <p className="text-[#1A1A1A]/70 text-sm max-w-xl mx-auto leading-relaxed">
                    Isi formulir ringkas di bawah ini. Tim Lead Auditor senior kami akan merancang penawaran kustom dan peta jalan sertifikasi 180 hari untuk organisasi Anda.
                  </p>
                </div>

                <div className="bg-[#FDFDFB] p-8 sm:p-10 border border-[#1A1A1A]/10 shadow-sm">
                  <LeadGenForm
                    defaultIsoCode={leadGenDefaultIso}
                    onSuccessSubmitted={() => setUnreadLeadsCount((prev) => prev + 1)}
                  />
                </div>
              </div>
            </section>

            <BlogSection
              onSelectArticle={(art) => setSelectedArticleModal(art)}
              onOpenAiConsultant={() => setAiConsultantModalOpen(true)}
            />
          </>
        )}

        {activeTab === 'services' && (
          <ServicesSection
            onSelectService={(srv) => setSelectedServiceModal(srv)}
            onRequestQuote={(code) => handleOpenConsultationModal(code)}
          />
        )}

        {activeTab === 'case-studies' && (
          <CaseStudiesSection
            onSelectCaseStudy={(cs) => setSelectedCaseStudyModal(cs)}
            onRequestQuote={(code) => handleOpenConsultationModal(code)}
          />
        )}

        {activeTab === 'gap-analysis' && (
          <GapAnalysisTool
            onRequestConsultationWithScore={(score, focusIso) => handleOpenConsultationModal(focusIso)}
          />
        )}

        {activeTab === 'blog' && (
          <BlogSection
            onSelectArticle={(art) => setSelectedArticleModal(art)}
            onOpenAiConsultant={() => setAiConsultantModalOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenConsultationModal={() => handleOpenConsultationModal()}
        onOpenAdminPortal={() => setActiveTab('admin-portal')}
      />

      {/* Modal Dialogs */}
      <ServiceDetailModal
        service={selectedServiceModal}
        onClose={() => setSelectedServiceModal(null)}
        onRequestQuote={(code) => handleOpenConsultationModal(code)}
      />

      <CaseStudyDetailModal
        caseStudy={selectedCaseStudyModal}
        onClose={() => setSelectedCaseStudyModal(null)}
        onRequestQuote={(code) => handleOpenConsultationModal(code)}
      />

      <ArticleReaderModal
        article={selectedArticleModal}
        onClose={() => setSelectedArticleModal(null)}
        onRequestQuote={(code) => handleOpenConsultationModal(code)}
      />

      <LeadGenModal
        isOpen={leadGenModalOpen}
        onClose={() => setLeadGenModalOpen(false)}
        defaultIsoCode={leadGenDefaultIso}
        onSuccessSubmitted={() => setUnreadLeadsCount((prev) => prev + 1)}
      />

      <AiIsoConsultantModal
        isOpen={aiConsultantModalOpen}
        onClose={() => setAiConsultantModalOpen(false)}
        onRequestQuote={(code) => handleOpenConsultationModal(code)}
      />

    </div>
  );
}
