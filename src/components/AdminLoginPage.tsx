import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  Mail, 
  KeyRound, 
  Eye, 
  EyeOff, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Users, 
  Building2, 
  Sparkles,
  UserCheck
} from 'lucide-react';

export interface InternalUser {
  name: string;
  role: string;
  email: string;
  avatar: string;
}

interface AdminLoginPageProps {
  onBackToWebsite: () => void;
  onLoginSuccess: (user: InternalUser) => void;
}

export const AdminLoginPage: React.FC<AdminLoginPageProps> = ({
  onBackToWebsite,
  onLoginSuccess
}) => {
  const [emailOrUser, setEmailOrUser] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const DEMO_USERS: InternalUser[] = [
    {
      name: 'Deni Kurniawan, S.T.',
      role: 'Senior Lead Auditor (IRCA Certified)',
      email: 'deni.kurniawan@isopro.id',
      avatar: 'DK'
    },
    {
      name: 'Siti Rahma, M.M.',
      role: 'Head of Marketing & Client Engagement',
      email: 'siti.rahma@isopro.id',
      avatar: 'SR'
    },
    {
      name: 'Budi Santoso, S.Kom.',
      role: 'ISO Consultant & Lead Generation Administrator',
      email: 'admin@isopro.id',
      avatar: 'BS'
    }
  ];

  const handleQuickPreset = (user: InternalUser) => {
    setEmailOrUser(user.email);
    setPassword('isopro2026sec');
    setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!emailOrUser.trim() || !password.trim()) {
      setErrorMessage('Mohon masukkan email / username dan kata sandi.');
      return;
    }

    setIsLoading(true);

    // Simulate authenticating against internal portal system
    setTimeout(() => {
      setIsLoading(false);
      // Simple validation check for demo
      const matchedUser = DEMO_USERS.find(
        (u) => u.email.toLowerCase() === emailOrUser.toLowerCase().trim()
      ) || {
        name: emailOrUser.includes('@') ? emailOrUser.split('@')[0] : emailOrUser,
        role: 'Internal Staff Consultant',
        email: emailOrUser,
        avatar: 'IS'
      };

      onLoginSuccess(matchedUser);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#1A1A1A] flex flex-col justify-between selection:bg-[#1A1A1A] selection:text-white">
      
      {/* Top Bar */}
      <header className="p-4 sm:p-6 border-b border-[#1A1A1A]/10 bg-[#FDFDFB]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToWebsite}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Website Utama</span>
          </button>

          <div className="flex items-center gap-2 text-[10px] font-mono text-[#1A1A1A]/60 bg-[#F5F5F3] px-3 py-1 border border-[#1A1A1A]/10">
            <Lock className="w-3 h-3 text-emerald-700" />
            <span>PORTAL TERPROTEKSI ISO 27001 ISMS</span>
          </div>
        </div>
      </header>

      {/* Main Content Form */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-xl space-y-8">
          
          {/* Header Branding */}
          <div className="text-center space-y-3">
            <div className="w-12 h-12 border border-[#1A1A1A] bg-[#1A1A1A] text-white flex items-center justify-center mx-auto">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#1A1A1A]/50 block">
                — ISOPro Consultancy Group
              </span>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1A1A1A] mt-1">
                Portal Internal Tim & Auditor
              </h1>
              <p className="text-xs font-mono text-[#1A1A1A]/60 mt-2 max-w-md mx-auto">
                Masuk untuk mengelola data prospek, penawaran harga resmi, serta riwayat follow-up klien ISO.
              </p>
            </div>
          </div>

          {/* Quick Preset Selector for Easy Testing */}
          <div className="bg-[#F5F5F3] border border-[#1A1A1A]/15 p-4 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#1A1A1A]/70 font-bold">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Pilih Akun Demo Internal (1-Klik Auto Fill):
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {DEMO_USERS.map((user, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickPreset(user)}
                  className={`p-2.5 text-left border transition text-xs flex flex-col justify-between ${
                    emailOrUser === user.email
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                      : 'bg-[#FDFDFB] border-[#1A1A1A]/15 hover:border-[#1A1A1A] text-[#1A1A1A]'
                  }`}
                >
                  <div className="font-bold text-[11px] truncate">{user.name}</div>
                  <div className={`text-[9px] font-mono truncate mt-1 ${emailOrUser === user.email ? 'text-white/70' : 'text-[#1A1A1A]/60'}`}>
                    {user.role.split('(')[0]}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Login Form Card */}
          <div className="bg-[#FDFDFB] border border-[#1A1A1A]/20 p-6 sm:p-8 space-y-6">
            
            {errorMessage && (
              <div className="bg-[#F5F5F3] border border-[#1A1A1A] text-[#1A1A1A] p-3 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Email / Username */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-1.5">
                  Email / NIP Internal <span className="text-rose-600">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="nama@isopro.id"
                    value={emailOrUser}
                    onChange={(e) => setEmailOrUser(e.target.value)}
                    className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-3 py-2.5 focus:outline-none focus:border-[#1A1A1A] font-mono transition"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1A1A1A]">
                    Kata Sandi <span className="text-rose-600">*</span>
                  </label>
                  <span className="text-[10px] font-mono text-[#1A1A1A]/50">
                    Default: isopro2026sec
                  </span>
                </div>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-[#1A1A1A]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#FDFDFB] border border-[#1A1A1A]/20 text-[#1A1A1A] text-xs pl-9 pr-10 py-2.5 focus:outline-none focus:border-[#1A1A1A] font-mono transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1A1A1A]/50 hover:text-[#1A1A1A]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center justify-between text-xs font-mono pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="accent-[#1A1A1A]"
                  />
                  <span className="text-[#1A1A1A]/70">Ingat Sesi Login Ini</span>
                </label>
                <span className="text-[10px] text-[#1A1A1A]/50 underline cursor-pointer hover:text-[#1A1A1A]">
                  Lupa Sandi?
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#1A1A1A] hover:bg-[#1A1A1A]/85 text-white text-[11px] font-bold uppercase tracking-[0.2em] py-3.5 transition flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Memverifikasi Kredensial...</span>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span>Masuk ke Portal Internal</span>
                  </>
                )}
              </button>

            </form>

            {/* Footer Notice */}
            <div className="pt-4 border-t border-[#1A1A1A]/10 text-[10px] font-mono text-[#1A1A1A]/60 text-center flex items-center justify-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Akses Khusus Auditor ISO, Tim Marketing, & Konsultan Terdaftar</span>
            </div>

          </div>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="p-4 text-center text-[10px] font-mono text-[#1A1A1A]/50 border-t border-[#1A1A1A]/10 bg-[#FDFDFB]">
        ISOPro Internal CRM Portal System v2.4 • &copy; {new Date().getFullYear()} ISOPro Consultancy Group
      </footer>

    </div>
  );
};
