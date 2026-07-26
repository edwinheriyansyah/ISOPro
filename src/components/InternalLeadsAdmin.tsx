import React, { useState, useEffect } from 'react';
import { Lead, LeadStatus } from '../types';
import { InternalUser } from './AdminLoginPage';
import { Users, Filter, Search, Download, CheckCircle, Clock, Send, AlertCircle, Building, Mail, Phone, Calendar, ArrowLeft, RefreshCw, MessageSquare, LogOut, UserCheck } from 'lucide-react';

interface InternalLeadsAdminProps {
  onBackToWebsite: () => void;
  currentUser?: InternalUser | null;
  onLogout?: () => void;
}

export const InternalLeadsAdmin: React.FC<InternalLeadsAdminProps> = ({ 
  onBackToWebsite,
  currentUser,
  onLogout
}) => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [newNoteInput, setNewNoteInput] = useState('');
  const [updatingStatus, setUpdatingStatus] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      const data = await res.json();
      if (data.success) {
        setLeads(data.data);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (leadId: string, newStatus: LeadStatus) => {
    setUpdatingStatus(true);
    try {
      const res = await fetch(`/api/leads/${leadId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          note: `Status diperbarui menjadi "${newStatus}"`,
          author: 'Marketing Admin / Konsultan'
        })
      });

      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.map((l) => l.id === leadId ? data.data : l));
        if (selectedLead?.id === leadId) {
          setSelectedLead(data.data);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLead || !newNoteInput.trim()) return;

    try {
      const res = await fetch(`/api/leads/${selectedLead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          note: newNoteInput.trim(),
          author: 'Deni Kurniawan (Konsultan Senior)'
        })
      });

      const data = await res.json();
      if (data.success) {
        setLeads((prev) => prev.map((l) => l.id === selectedLead.id ? data.data : l));
        setSelectedLead(data.data);
        setNewNoteInput('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const exportToCSV = () => {
    const headers = "ID,Perusahaan,Kontak,Email,Telepon,Industri,Layanan ISO,Timeline,Status,Tanggal\n";
    const rows = leads.map((l) => 
      `"${l.id}","${l.companyName}","${l.contactPerson}","${l.email}","${l.phone}","${l.industry}","${l.selectedIsoServices.join(';')}", "${l.targetTimeline}","${l.status}","${l.createdAt}"`
    ).join("\n");

    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Leads_ISO_Consulting_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = selectedStatusFilter === 'Semua' || l.status === selectedStatusFilter;
    const matchesSearch = l.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.contactPerson.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const getStatusBadgeClass = (status: LeadStatus) => {
    switch (status) {
      case 'Baru': return 'bg-[#F5F5F3] text-[#1A1A1A] border-[#1A1A1A]/30 font-mono';
      case 'Di-follow Up': return 'bg-[#1A1A1A] text-white border-[#1A1A1A] font-mono';
      case 'Proposal Terkirim': return 'bg-[#F5F5F3] text-[#1A1A1A] border-[#1A1A1A]/40 font-mono';
      case 'Deal': return 'bg-emerald-900 text-emerald-100 border-emerald-800 font-mono';
      default: return 'bg-rose-100 text-rose-900 border-rose-300 font-mono';
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Bar */}
        <div className="bg-[#FDFDFB] border border-[#1A1A1A]/20 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToWebsite}
              className="p-2.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] bg-[#FDFDFB] hover:bg-[#F5F5F3] transition"
              title="Kembali ke Tampilan Utama Website"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-serif font-bold text-[#1A1A1A]">Portal Internal Tim Konsultan & Marketing</h1>
                <span className="bg-[#F5F5F3] text-[#1A1A1A] text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 border border-[#1A1A1A]/20 font-bold">
                  CRM Leads Engine
                </span>
              </div>
              <p className="text-xs font-mono text-[#1A1A1A]/60">Kelola prospek penawaran sertifikasi ISO dari pengunjung website secara real-time</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {currentUser && (
              <div className="flex items-center gap-2 bg-[#F5F5F3] px-3 py-1.5 border border-[#1A1A1A]/15 text-xs font-mono">
                <UserCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <div className="leading-tight">
                  <div className="font-bold text-[#1A1A1A]">{currentUser.name}</div>
                  <div className="text-[9px] text-[#1A1A1A]/60">{currentUser.role}</div>
                </div>
              </div>
            )}

            <button
              onClick={fetchLeads}
              className="p-2.5 border border-[#1A1A1A]/20 hover:border-[#1A1A1A] text-[#1A1A1A] bg-[#FDFDFB] transition flex items-center gap-1.5 text-xs font-mono font-semibold"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Refresh</span>
            </button>
            <button
              onClick={exportToCSV}
              className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white px-4 py-2.5 font-mono text-xs uppercase tracking-wider font-bold transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Export CSV</span>
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-2.5 border border-rose-300 text-rose-800 hover:bg-rose-50 transition flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-wider"
                title="Keluar dari Portal"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Keluar</span>
              </button>
            )}
          </div>
        </div>

        {/* Executive Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60">Total Inquiries Received</div>
            <div className="text-2xl font-serif font-bold text-[#1A1A1A] mt-1">{leads.length} Prospek</div>
          </div>
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60">Inquiries Baru</div>
            <div className="text-2xl font-serif font-bold text-[#1A1A1A] mt-1">
              {leads.filter((l) => l.status === 'Baru').length} Leads
            </div>
          </div>
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60">Proposal Terkirim</div>
            <div className="text-2xl font-serif font-bold text-[#1A1A1A] mt-1">
              {leads.filter((l) => l.status === 'Proposal Terkirim').length} Proposal
            </div>
          </div>
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/10 p-4">
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/60">Deals Won</div>
            <div className="text-2xl font-serif font-bold text-[#1A1A1A] mt-1">
              {leads.filter((l) => l.status === 'Deal').length} Project
            </div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="bg-[#FDFDFB] border border-[#1A1A1A]/20 p-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 w-full md:w-auto font-mono text-xs">
            {['Semua', 'Baru', 'Di-follow Up', 'Proposal Terkirim', 'Deal', 'Batal'].map((st) => (
              <button
                key={st}
                onClick={() => setSelectedStatusFilter(st)}
                className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 border transition ${
                  selectedStatusFilter === st
                    ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white'
                    : 'bg-[#FDFDFB] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
                }`}
              >
                {st}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari perusahaan / nama..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-4 py-2 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
            />
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-[#FDFDFB] border border-[#1A1A1A]/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-[#1A1A1A]">
              <thead className="bg-[#F5F5F3] text-[#1A1A1A] font-mono border-b border-[#1A1A1A]/10 uppercase text-[10px] tracking-wider font-bold">
                <tr>
                  <th className="p-4">ID</th>
                  <th className="p-4">Perusahaan & Kontak</th>
                  <th className="p-4">Jenis ISO</th>
                  <th className="p-4">Target Timeline</th>
                  <th className="p-4">Tanggal Masuk</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1A1A1A]/10">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-[#F5F5F3]/60 transition">
                    <td className="p-4 font-mono text-[#1A1A1A]/60">{lead.id}</td>
                    <td className="p-4">
                      <div className="font-bold text-[#1A1A1A]">{lead.companyName}</div>
                      <div className="text-[11px] text-[#1A1A1A]/60">{lead.contactPerson} • {lead.phone}</div>
                    </td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1 font-mono">
                        {lead.selectedIsoServices.map((iso, i) => (
                          <span key={i} className="bg-[#F5F5F3] text-[#1A1A1A] border border-[#1A1A1A]/20 px-2 py-0.5 text-[10px] font-bold">
                            {iso}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="p-4 text-[#1A1A1A]">{lead.targetTimeline}</td>
                    <td className="p-4 font-mono text-[#1A1A1A]/60">{lead.createdAt}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 text-[10px] font-bold border uppercase tracking-wider ${getStatusBadgeClass(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => setSelectedLead(lead)}
                        className="border border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-[#1A1A1A] font-mono uppercase tracking-widest font-bold text-[10px] px-3 py-1.5 transition"
                      >
                        Detail Prospek
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredLeads.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-[#1A1A1A]/50 font-mono text-xs">
                      Tidak ada lead yang memenuhi kriteria pencarian.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Lead Detail Drawer / Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 bg-[#1A1A1A]/60 backdrop-blur-sm flex justify-end">
          <div className="bg-[#FDFDFB] border-l border-[#1A1A1A]/20 w-full max-w-xl h-full overflow-y-auto p-6 space-y-6 text-[#1A1A1A] relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-[#1A1A1A]/10">
              <div>
                <span className="text-xs font-mono text-[#1A1A1A]/60">{selectedLead.id}</span>
                <h2 className="text-xl font-serif font-bold text-[#1A1A1A]">{selectedLead.companyName}</h2>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-2 border border-[#1A1A1A]/20 text-[#1A1A1A] hover:bg-[#F5F5F3] font-mono text-xs font-bold uppercase tracking-wider"
              >
                Tutup
              </button>
            </div>

            {/* Quick Status Updater */}
            <div className="bg-[#F5F5F3] p-4 border border-[#1A1A1A]/10 space-y-2">
              <label className="text-[10px] font-mono font-bold text-[#1A1A1A]/70 uppercase tracking-widest block">
                Update Status Lead CRM:
              </label>
              <div className="flex flex-wrap gap-2">
                {(['Baru', 'Di-follow Up', 'Proposal Terkirim', 'Deal', 'Batal'] as LeadStatus[]).map((st) => (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(selectedLead.id, st)}
                    disabled={updatingStatus}
                    className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1.5 border transition ${
                      selectedLead.status === st
                        ? 'bg-[#1A1A1A] border-[#1A1A1A] text-white font-bold'
                        : 'bg-[#FDFDFB] border-[#1A1A1A]/15 text-[#1A1A1A]/70 hover:border-[#1A1A1A]'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Client Info Grid */}
            <div className="space-y-3 bg-[#F5F5F3] p-4 border border-[#1A1A1A]/10 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div><strong className="text-[#1A1A1A]/60 font-mono block">Penanggung Jawab:</strong> {selectedLead.contactPerson}</div>
                <div><strong className="text-[#1A1A1A]/60 font-mono block">Sektor Industri:</strong> {selectedLead.industry}</div>
                <div><strong className="text-[#1A1A1A]/60 font-mono block">Email:</strong> {selectedLead.email}</div>
                <div><strong className="text-[#1A1A1A]/60 font-mono block">No. Telepon/WA:</strong> {selectedLead.phone}</div>
                <div><strong className="text-[#1A1A1A]/60 font-mono block">Ukuran Karyawan:</strong> {selectedLead.companySize}</div>
                <div><strong className="text-[#1A1A1A]/60 font-mono block">Target Timeline:</strong> {selectedLead.targetTimeline}</div>
              </div>
              {selectedLead.notes && (
                <div className="pt-2 border-t border-[#1A1A1A]/10">
                  <strong className="text-[#1A1A1A]/60 font-mono block">Catatan Khusus Klien:</strong>
                  <p className="text-[#1A1A1A] mt-1 bg-[#FDFDFB] p-2.5 border border-[#1A1A1A]/10">{selectedLead.notes}</p>
                </div>
              )}
            </div>

            {/* Follow up log */}
            <div className="space-y-3">
              <h3 className="text-[10px] font-mono font-bold text-[#1A1A1A]/70 uppercase tracking-widest flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#1A1A1A]" />
                <span>Riwayat Follow-up & Catatan Internal:</span>
              </h3>

              <form onSubmit={handleAddNote} className="space-y-2">
                <textarea
                  rows={2}
                  placeholder="Tambahkan catatan follow up misal: Penawaran proposal sudah dikirimkan via WA..."
                  value={newNoteInput}
                  onChange={(e) => setNewNoteInput(e.target.value)}
                  className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs p-3 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
                />
                <button
                  type="submit"
                  className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white font-mono uppercase tracking-widest text-[10px] font-bold px-4 py-2 transition"
                >
                  Simpan Catatan
                </button>
              </form>

              <div className="space-y-2 pt-2">
                {selectedLead.followUpHistory?.map((h, idx) => (
                  <div key={idx} className="bg-[#F5F5F3] p-3 border border-[#1A1A1A]/10 text-xs space-y-1">
                    <div className="flex justify-between text-[#1A1A1A]/60 font-mono text-[10px]">
                      <span>{h.author}</span>
                      <span>{h.date}</span>
                    </div>
                    <p className="text-[#1A1A1A]">{h.note}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
