import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { INITIAL_LEADS } from "./src/data/isoData";
import { Lead } from "./src/types";

// In-memory lead database (pre-populated with sample leads)
let leadsDatabase: Lead[] = [...INITIAL_LEADS];

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON Body Parser
  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "IsoPro Consulting Backend", timestamp: new Date().toISOString() });
  });

  // GET Leads (For Internal Team CRM Dashboard)
  app.get("/api/leads", (_req, res) => {
    res.json({
      success: true,
      total: leadsDatabase.length,
      data: leadsDatabase
    });
  });

  // POST Lead (Lead Generation Form Submission)
  app.post("/api/leads", (req, res) => {
    const { companyName, contactPerson, email, phone, industry, companySize, selectedIsoServices, targetTimeline, notes } = req.body;

    if (!companyName || !email || !phone || !selectedIsoServices || selectedIsoServices.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Mohon lengkapi Nama Perusahaan, Email, No. Telepon, dan minimal 1 Jenis Sertifikasi."
      });
    }

    const newLead: Lead = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      companyName,
      contactPerson: contactPerson || 'Penanggung Jawab',
      email,
      phone,
      industry: industry || 'Umum',
      companySize: companySize || '1-50 karyawan',
      selectedIsoServices: Array.isArray(selectedIsoServices) ? selectedIsoServices : [selectedIsoServices],
      targetTimeline: targetTimeline || '3-6 bulan',
      notes: notes || '',
      createdAt: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
      status: 'Baru',
      assignedConsultant: 'Deni Kurniawan (Lead Consultant)',
      followUpHistory: [
        {
          date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
          note: 'Lead masuk dari Formulir Web. Notifikasi otomatis dikirim ke tim internal konsultan.',
          author: 'System Lead Bot'
        }
      ]
    };

    leadsDatabase.unshift(newLead);

    // Simulate instant notification & calculation
    return res.status(201).json({
      success: true,
      message: "Permintaan konsultasi & penawaran berhasil dikirim! Tim konsultan senior kami akan menghubungi Anda dalam 1x24 jam.",
      leadId: newLead.id,
      leadSummary: newLead,
      estimatedRoadmap: {
        totalDays: 180,
        suggestedStart: "Minggu Depan",
        assignedConsultant: "Deni Kurniawan, S.T. (Senior Lead Auditor)"
      }
    });
  });

  // PATCH Lead Status (Update Lead in CRM)
  app.patch("/api/leads/:id", (req, res) => {
    const { id } = req.params;
    const { status, note, author } = req.body;

    const leadIndex = leadsDatabase.findIndex((l) => l.id === id);
    if (leadIndex === -1) {
      return res.status(404).json({ success: false, message: "Lead tidak ditemukan" });
    }

    if (status) {
      leadsDatabase[leadIndex].status = status;
    }

    if (note) {
      if (!leadsDatabase[leadIndex].followUpHistory) {
        leadsDatabase[leadIndex].followUpHistory = [];
      }
      leadsDatabase[leadIndex].followUpHistory?.unshift({
        date: new Date().toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }),
        note,
        author: author || 'Internal Consultant'
      });
    }

    return res.json({
      success: true,
      message: "Status lead berhasil diperbarui",
      data: leadsDatabase[leadIndex]
    });
  });

  // Gemini AI Consultant Assistant endpoint
  app.post("/api/ai-iso-assistant", async (req, res) => {
    try {
      const { prompt, isoContext } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.json({
          success: true,
          answer: `[Mode Simulasi Standar ISO] Anda bertanya mengenai "${prompt}".
          
Secara umum dalam penerapan ${isoContext || 'ISO 9001:2015'}, persyaratan utama mencakup penentuan prosedur terdokumentasi (SOP), kepemimpinan manajemen puncak (Leadership Commitment), penilaian risiko (Risk-based Thinking), serta bukti pelaksanaan audit internal dan rapat tinjauan manajemen (RTM).

Untuk panduan mendalam dan kustomisasi sesuai profil perusahaan Anda, Anda dapat menjadwalkan konsultasi gratis dengan tim Konsultan Senior IsoPro melalui formulir di halaman ini.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `Anda adalah Asisten Pakar Konsultan ISO Senior dari IsoPro Indonesia (Penyedia Konsultansi ISO 9001, 27001, 14001, 45001, 22000). 
Tugas Anda adalah menjawab pertanyaan calon klien dengan sangat profesional, jelas, ramah, dan solutif menggunakan Bahasa Indonesia yang formal namun mudah dipahami.
Arahkan jawaban berdasarkan klausul ISO terkini (seperti ISO 9001:2015, ISO 27001:2022, ISO 45001:2018). Sertakan contoh penerapannya di dunia industri dan selalu rekomendasikan pendampingan profesional dari tim IsoPro.`;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      return res.json({
        success: true,
        answer: response.text || "Terima kasih atas pertanyaan Anda. Silakan hubungi tim IsoPro untuk konsultasi lebih rinci."
      });
    } catch (err: any) {
      console.error("Gemini API Error:", err);
      return res.json({
        success: true,
        answer: "Mohon maaf, terjadi kendala saat memproses jawaban otomatis. Tim konsultan kami siap memberikan penjelasan langsung melalui WhatsApp/Telepon."
      });
    }
  });

  // Vite Middleware in dev, or Static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server ISO Consulting running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
