import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../data/isoData';
import { AssessmentResult } from '../types';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw, Award, FileSpreadsheet, ShieldCheck } from 'lucide-react';

interface GapAnalysisToolProps {
  onRequestConsultationWithScore: (score: number, isoFocus: string) => void;
}

export const GapAnalysisTool: React.FC<GapAnalysisToolProps> = ({
  onRequestConsultationWithScore
}) => {
  const [selectedIsoFocus, setSelectedIsoFocus] = useState('ISO 9001:2015');
  const [userAnswers, setUserAnswers] = useState<{ [qId: number]: number }>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelectOption = (questionId: number, score: number) => {
    const updated = { ...userAnswers, [questionId]: score };
    setUserAnswers(updated);

    if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const calculateResult = (): AssessmentResult => {
    const totalPossible = ASSESSMENT_QUESTIONS.length * 25;
    const earned = (Object.values(userAnswers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
    const percentage = Math.round((earned / totalPossible) * 100);

    let level: AssessmentResult['readinessLevel'] = 'Perlu Persiapan Matang';
    let summary = '';

    if (percentage >= 80) {
      level = 'Sangat Siap';
      summary = 'Sistem dokumentasi dan komitmen operasional Anda sudah sangat kuat. Hanya memerlukan penyesuaian minor dan pelaksanaan audit simulasi sebelum audit eksternal.';
    } else if (percentage >= 50) {
      level = 'Moderat';
      summary = 'Perusahaan Anda memiliki dasar operasional yang baik, namun memerlukan pembentukan tim auditor internal certified, pengesahan Risk Register, dan perapihan SOP.';
    } else {
      level = 'Awal Progress';
      summary = 'Sistem operasional masih bertumpu pada instruksi lisan. Memerlukan pendampingan penyusunan dokumen dari dasar, workshop SOP, dan pelatihan kesadaran ISO.';
    }

    return {
      score: percentage,
      readinessLevel: level,
      summary,
      recommendedServices: [selectedIsoFocus],
      gapPoints: [
        'Ketersediaan Form Rekaman Mutu & Log Operasional Terintegrasi',
        'Pelatihan & Sertifikasi Certified Internal Auditor ISO',
        'Dokumen Penilaian Risiko (Risk Register / HIRADC / SoA)'
      ]
    };
  };

  const result = isCompleted ? calculateResult() : null;

  return (
    <section id="gap-analysis" className="py-16 bg-[#FDFDFB] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#1A1A1A]/50 font-bold block mb-2">
            — Diagnostic Tool
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A]">
            Kalkulator Gap Analysis & <span className="italic">Kesiapan ISO</span>
          </h2>
          <p className="text-[#1A1A1A]/70 text-sm max-w-2xl mx-auto leading-relaxed">
            Jawab 4 pertanyaan singkat di bawah ini untuk mengukur persentase kesiapan perusahaan Anda sebelum mendaftar audit sertifikasi ISO.
          </p>
        </div>

        {/* Main Card Container */}
        <div className="bg-[#FDFDFB] border border-[#1A1A1A]/15 p-6 sm:p-8 relative">
          
          {!isCompleted ? (
            <div className="space-y-6">
              
              {/* ISO Focus Selector */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#1A1A1A]/10">
                <span className="text-xs text-[#1A1A1A]/60 font-mono">STANDAR ISO TARGET:</span>
                <div className="flex flex-wrap gap-2">
                  {['ISO 9001:2015', 'ISO 27001:2022', 'ISO 45001:2018', 'IMS (QHSE)'].map((iso) => (
                    <button
                      key={iso}
                      onClick={() => setSelectedIsoFocus(iso)}
                      className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border transition ${
                        selectedIsoFocus === iso
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                          : 'bg-[#FDFDFB] text-[#1A1A1A]/70 border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                      }`}
                    >
                      {iso}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-[#1A1A1A]/60 font-mono">
                  <span>Pertanyaan 0{currentQuestionIndex + 1} / 0{ASSESSMENT_QUESTIONS.length}</span>
                  <span className="text-[#1A1A1A] font-bold">{Math.round(((currentQuestionIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100)}% Selesai</span>
                </div>
                <div className="w-full h-1 bg-[#F5F5F3] overflow-hidden border border-[#1A1A1A]/10">
                  <div 
                    className="h-full bg-[#1A1A1A] transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-4 pt-2">
                <div className="text-[10px] font-mono font-bold text-[#1A1A1A]/50 uppercase tracking-widest">
                  Kategori: {ASSESSMENT_QUESTIONS[currentQuestionIndex].category}
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1A1A1A]">
                  {ASSESSMENT_QUESTIONS[currentQuestionIndex].question}
                </h3>

                {/* Option Buttons */}
                <div className="space-y-3 pt-2">
                  {ASSESSMENT_QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(ASSESSMENT_QUESTIONS[currentQuestionIndex].id, opt.score)}
                      className="w-full text-left bg-[#FDFDFB] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 hover:border-[#1A1A1A] p-4 transition flex items-start gap-3 group"
                    >
                      <div className="w-6 h-6 border border-[#1A1A1A]/20 group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white flex items-center justify-center text-xs font-mono text-[#1A1A1A] shrink-0 mt-0.5">
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-sm font-semibold text-[#1A1A1A]">{opt.text}</div>
                        <div className="text-xs text-[#1A1A1A]/60">{opt.advice}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          ) : (
            /* Results Display */
            <div className="space-y-6 text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#F5F5F3] border border-[#1A1A1A]/20">
                <div>
                  <div className="text-3xl font-serif font-bold text-[#1A1A1A]">{result?.score}%</div>
                  <div className="text-[9px] font-mono opacity-60 font-bold uppercase tracking-widest">Score</div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest bg-[#1A1A1A] text-white px-3 py-1 inline-block">
                  Status: {result?.readinessLevel} ({selectedIsoFocus})
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] pt-2">Hasil Penilaian Diagnostik Kesiapan ISO</h3>
                <p className="text-sm text-[#1A1A1A]/75 max-w-xl mx-auto leading-relaxed">
                  {result?.summary}
                </p>
              </div>

              {/* Identified Gap Items */}
              <div className="bg-[#F5F5F3] p-5 border border-[#1A1A1A]/10 text-left max-w-xl mx-auto space-y-3">
                <h4 className="text-[10px] font-mono font-bold text-[#1A1A1A] uppercase tracking-widest flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                  <span>Rekomendasi Area Fokus Perbaikan (Gap Analysis):</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#1A1A1A]/80">
                  {result?.gapPoints.map((gap, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#1A1A1A] font-bold">—</span>
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => onRequestConsultationWithScore(result?.score || 0, selectedIsoFocus)}
                  className="w-full sm:w-auto bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3.5 transition flex items-center justify-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Dapatkan Proposal Sesuai Gap Tool</span>
                </button>

                <button
                  onClick={() => {
                    setUserAnswers({});
                    setCurrentQuestionIndex(0);
                    setIsCompleted(false);
                  }}
                  className="w-full sm:w-auto border border-[#1A1A1A] hover:bg-[#F5F5F3] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest px-4 py-3.5 transition flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Ulangi Tes Diagnosis</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
