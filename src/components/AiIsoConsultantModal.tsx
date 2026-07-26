import React, { useState } from 'react';
import { X, Sparkles, Send, Bot, User, PhoneCall, ShieldCheck, Loader2 } from 'lucide-react';

interface AiIsoConsultantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (isoCode: string) => void;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AiIsoConsultantModal: React.FC<AiIsoConsultantModalProps> = ({
  isOpen,
  onClose,
  onRequestQuote
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: 'Halo! Saya **Asisten AI Konsultan ISO IsoPro**. Ada klausul ISO, persyaratan regulasi, atau masalah audit sistem manajemen yang ingin Anda tanyakan? (Misal: *"Bagaimana menerapkan ISO 9001:2015 klausul 8.2 untuk perusahaan kontraktor?"*)',
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputQuery.trim() || loading) return;

    const userMsg = inputQuery.trim();
    setInputQuery('');

    const newMsgList: Message[] = [
      ...messages,
      { sender: 'user', text: userMsg, time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) }
    ];
    setMessages(newMsgList);
    setLoading(true);

    try {
      const res = await fetch('/api/ai-iso-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: userMsg,
          isoContext: 'ISO 9001, ISO 27001, ISO 45001, ISO 14001, ISO 22000'
        })
      });

      const data = await res.json();
      setMessages([
        ...newMsgList,
        {
          sender: 'ai',
          text: data.answer || 'Terima kasih. Silakan tanyakan klausul lain atau hubungi konsultan senior IsoPro.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMsgList,
        {
          sender: 'ai',
          text: 'Terjadi kendala jaringan. Namun secara garis besar, penerapan klausul ISO memerlukan penentuan SOP, penugasan tanggung jawab, serta penyimpanan rekaman kerja yang siap diaudit.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1A1A1A]/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="bg-[#FDFDFB] border border-[#1A1A1A]/20 max-w-2xl w-full h-[85vh] flex flex-col text-[#1A1A1A] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#FDFDFB] border-b border-[#1A1A1A]/10 p-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-serif font-bold text-[#1A1A1A]">AI Assistant Konsultan ISO</h2>
                <span className="text-[9px] font-mono bg-[#F5F5F3] border border-[#1A1A1A]/15 text-[#1A1A1A] px-2 py-0.5 font-bold">
                  Powered by Gemini
                </span>
              </div>
              <p className="text-xs font-mono text-[#1A1A1A]/60">Tanyakan klausul, SOP, & persyaratan sertifikasi ISO</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] hover:bg-[#F5F5F3] border border-[#1A1A1A]/15 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Message Stream */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#F5F5F3]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 border flex items-center justify-center text-xs font-mono font-bold shrink-0 ${
                msg.sender === 'user' ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]' : 'bg-[#FDFDFB] border-[#1A1A1A]/20 text-[#1A1A1A]'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] p-4 text-xs sm:text-sm leading-relaxed space-y-2 ${
                msg.sender === 'user'
                  ? 'bg-[#1A1A1A] text-white'
                  : 'bg-[#FDFDFB] border border-[#1A1A1A]/15 text-[#1A1A1A] whitespace-pre-line font-sans'
              }`}>
                <p>{msg.text}</p>
                <div className={`text-[9px] font-mono text-right ${msg.sender === 'user' ? 'text-white/60' : 'text-[#1A1A1A]/50'}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-[#1A1A1A]/60 font-mono text-xs p-3 bg-[#FDFDFB] border border-[#1A1A1A]/15 w-max">
              <Loader2 className="w-4 h-4 animate-spin text-[#1A1A1A]" />
              <span>AI sedang menganalisis klausul ISO...</span>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 bg-[#FDFDFB] border-t border-[#1A1A1A]/10 flex gap-2 shrink-0">
          <input
            type="text"
            placeholder="Tanyakan misal: Jelaskan ISO 9001:2015 klausul 8.2..."
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            disabled={loading}
            className="flex-1 bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs px-4 py-2.5 focus:outline-none focus:border-[#1A1A1A] transition font-sans"
          />
          <button
            type="submit"
            disabled={loading || !inputQuery.trim()}
            className="bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white px-4 py-2.5 font-bold text-[10px] uppercase tracking-widest transition flex items-center gap-1.5 disabled:opacity-50 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Kirim</span>
          </button>
        </form>

        {/* Footer Quick Action */}
        <div className="bg-[#F5F5F3] px-4 py-2 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[10px] font-mono text-[#1A1A1A]/70 shrink-0">
          <span>Siap menerapkan sistem ISO dengan pendampingan langsung?</span>
          <button
            onClick={() => {
              onClose();
              onRequestQuote('ISO Consultation');
            }}
            className="text-[#1A1A1A] hover:underline font-bold flex items-center gap-1 uppercase tracking-wider"
          >
            <PhoneCall className="w-3 h-3" />
            <span>Minta Penawaran Tim IsoPro</span>
          </button>
        </div>

      </div>
    </div>
  );
};
