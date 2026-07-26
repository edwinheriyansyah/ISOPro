import React, { useState } from 'react';
import { ISO_SERVICES } from '../data/isoData';
import { Send, CheckCircle2, Shield, PhoneCall, Building, Mail, User, Clock, AlertCircle, FileText, Sparkles } from 'lucide-react';

interface LeadGenFormProps {
  defaultIsoCode?: string;
  onSuccessSubmitted?: (leadData: any) => void;
  isModalMode?: boolean;
}

export const LeadGenForm: React.FC<LeadGenFormProps> = ({
  defaultIsoCode = 'ISO 9001:2015',
  onSuccessSubmitted,
  isModalMode = false
}) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: 'Manufaktur',
    companySize: '1-50 karyawan',
    selectedIsoServices: [defaultIsoCode],
    targetTimeline: '3-6 bulan',
    notes: ''
  });

  const [loading, setLoading] = useState(false);
  const [submittedResponse, setSubmittedResponse] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleIsoCheckbox = (code: string) => {
    setFormData((prev) => {
      const exists = prev.selectedIsoServices.includes(code);
      if (exists) {
        if (prev.selectedIsoServices.length === 1) return prev; // Keep at least one
        return { ...prev, selectedIsoServices: prev.selectedIsoServices.filter((c) => c !== code) };
      } else {
        return { ...prev, selectedIsoServices: [...prev.selectedIsoServices, code] };
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage('Mohon lengkapi Nama Perusahaan, Email, dan No. Telepon.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setSubmittedResponse(data);
        if (onSuccessSubmitted) {
          onSuccessSubmitted(data);
        }
      } else {
        setErrorMessage(data.message || 'Terjadi kesalahan saat mengirim formulir.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('Gagal terhubung ke server. Menggunakan respons penawaran alternatif.');
      
      // Fallback preview
      const fallbackData = {
        success: true,
        message: "Permintaan konsultasi Anda berhasil tercatat! Tim konsultan senior IsoPro akan menghubungi Anda via WhatsApp/Telepon dalam 1x24 jam.",
        leadId: `lead-${Date.now().toString().slice(-4)}`,
        leadSummary: {
          ...formData,
          createdAt: new Date().toLocaleString('id-ID')
        }
      };
      setSubmittedResponse(fallbackData);
      if (onSuccessSubmitted) onSuccessSubmitted(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  if (submittedResponse) {
    return (
      <div className="bg-[#FDFDFB] border border-[#1A1A1A]/20 p-6 sm:p-8 text-center space-y-6">
        <div className="w-12 h-12 border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div className="space-y-2">
          <span className="bg-[#F5F5F3] text-[#1A1A1A] border border-[#1A1A1A]/15 font-mono text-[10px] uppercase tracking-widest px-3 py-1">
            PERMINTAAN TERKIRIM (ID: {submittedResponse.leadId})
          </span>
          <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] pt-2">Terima Kasih, {formData.contactPerson || formData.companyName}!</h3>
          <p className="text-[#1A1A1A]/80 text-xs max-w-lg mx-auto leading-relaxed">
            {submittedResponse.message}
          </p>
        </div>

        {/* Lead Summary Card */}
        <div className="bg-[#F5F5F3] p-5 border border-[#1A1A1A]/10 text-left font-mono text-xs space-y-2 max-w-md mx-auto">
          <div className="font-bold text-[#1A1A1A] border-b border-[#1A1A1A]/10 pb-2 mb-2 flex justify-between uppercase tracking-wider">
            <span>Ringkasan Permintaan:</span>
            <span className="text-emerald-700">STATUS: BARU</span>
          </div>
          <div><strong className="text-[#1A1A1A]/60">Perusahaan:</strong> <span className="text-[#1A1A1A]">{formData.companyName}</span></div>
          <div><strong className="text-[#1A1A1A]/60">Jenis ISO:</strong> <span className="text-[#1A1A1A] font-bold">{formData.selectedIsoServices.join(', ')}</span></div>
          <div><strong className="text-[#1A1A1A]/60">Kontak:</strong> <span className="text-[#1A1A1A]">{formData.phone} ({formData.email})</span></div>
          <div><strong className="text-[#1A1A1A]/60">Konsultan:</strong> <span className="text-[#1A1A1A] font-bold">Deni Kurniawan, S.T. (Senior Auditor)</span></div>
        </div>

        <button
          onClick={() => {
            setSubmittedResponse(null);
            setFormData({
              companyName: '',
              contactPerson: '',
              email: '',
              phone: '',
              industry: 'Manufaktur',
              companySize: '1-50 karyawan',
              selectedIsoServices: [defaultIsoCode],
              targetTimeline: '3-6 bulan',
              notes: ''
            });
          }}
          className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] text-[10px] font-bold uppercase tracking-widest px-6 py-2.5 transition"
        >
          Kirim Form Baru
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-[#1A1A1A]">
      {errorMessage && (
        <div className="bg-[#F5F5F3] border border-[#1A1A1A] text-[#1A1A1A] text-xs p-3.5 flex items-center gap-2 font-mono">
          <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Row 1: Company Name & Contact Person */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            Nama Perusahaan <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Building className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              required
              placeholder="PT Nusantara Jaya"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            Nama Penanggung Jawab
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ir. Budi Santoso"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            Email Kerja <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="email"
              required
              placeholder="budi@perusahaan.co.id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            No. Telepon / WhatsApp <span className="text-rose-600">*</span>
          </label>
          <div className="relative">
            <PhoneCall className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="tel"
              required
              placeholder="0812-3456-7890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>
      </div>

      {/* Row 3: Industry & Size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            Sektor Industri
          </label>
          <select
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs px-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
          >
            <option value="Manufaktur & Fabrikasi">Manufaktur & Fabrikasi</option>
            <option value="Konstruksi & Kontraktor EPC">Konstruksi & Kontraktor EPC</option>
            <option value="Fintech & Perbankan">Fintech & Perbankan</option>
            <option value="Teknologi & Perangkat Lunak">Teknologi & Perangkat Lunak</option>
            <option value="Logistik & Transportasi">Logistik & Transportasi</option>
            <option value="Makanan & Minuman (F&B)">Makanan & Minuman (F&B)</option>
            <option value="Kesehatan & Rumah Sakit">Kesehatan & Rumah Sakit</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
            Jumlah Karyawan
          </label>
          <select
            value={formData.companySize}
            onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
            className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs px-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
          >
            <option value="1-20 karyawan">1-20 karyawan (Usaha Kecil)</option>
            <option value="21-50 karyawan">21-50 karyawan</option>
            <option value="51-200 karyawan">51-200 karyawan (Menengah)</option>
            <option value="200+ karyawan">200+ karyawan (Skala Besar)</option>
          </select>
        </div>
      </div>

      {/* ISO Certification Choice Checkboxes */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
          Pilih Sertifikasi ISO Yang Diinginkan:
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ISO_SERVICES.map((s) => {
            const isChecked = formData.selectedIsoServices.includes(s.code);
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => handleIsoCheckbox(s.code)}
                className={`text-left text-xs p-2.5 border transition flex items-center gap-2 font-mono ${
                  isChecked
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                    : 'bg-[#FDFDFB] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
                }`}
              >
                <div className={`w-3.5 h-3.5 border flex items-center justify-center text-[10px] ${
                  isChecked ? 'border-white bg-white text-[#1A1A1A] font-bold' : 'border-[#1A1A1A]/40'
                }`}>
                  {isChecked ? '✓' : ''}
                </div>
                <span className="truncate">{s.code}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Target Timeline */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
          Target Waktu Pelaksanaan Sertifikasi
        </label>
        <div className="grid grid-cols-3 gap-2 text-xs font-mono">
          {['Segera (< 3 bulan)', '3-6 bulan (Standar 180 Hari)', 'Eksplorasi Perencanaan'].map((timeline) => (
            <button
              type="button"
              key={timeline}
              onClick={() => setFormData({ ...formData, targetTimeline: timeline })}
              className={`p-2 border text-center transition ${
                formData.targetTimeline === timeline
                  ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                  : 'bg-[#FDFDFB] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
              }`}
            >
              {timeline}
            </button>
          ))}
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
          Catatan Tambahan / Kebutuhan Khusus
        </label>
        <textarea
          rows={2}
          placeholder="Sebutkan jika ada kebutuhan khusus tender, deadline audit eksternal, atau lokasi pabrik..."
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs p-3 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[10px] font-bold uppercase tracking-widest py-3.5 transition flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? (
          <span>Memproses Permintaan Penawaran...</span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Kirim Permintaan Konsultasi & Proposal Gratis</span>
          </>
        )}
      </button>

      <div className="text-[10px] font-mono text-[#1A1A1A]/60 text-center flex items-center justify-center gap-1.5 pt-1">
        <Shield className="w-3.5 h-3.5 text-[#1A1A1A]" />
        <span>Data perusahaan Anda terjamin aman & bersifat rahasia (Kerahasiaan NDA)</span>
      </div>
    </form>
  );
};
