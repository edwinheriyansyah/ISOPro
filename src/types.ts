export type IsoCategory = 
  | 'Mutu & Operasional' 
  | 'Keamanan Informasi' 
  | 'Lingkungan & K3' 
  | 'Keamanan Pangan' 
  | 'Sistem Terintegrasi';

export interface IsoClause {
  clauseNumber: string;
  title: string;
  description: string;
  keyDeliverable: string;
}

export interface IsoTimelinePhase {
  phaseNumber: number;
  phaseName: string;
  durationWeeks: number;
  activities: string[];
  deliverables: string[];
}

export interface IsoService {
  id: string;
  code: string; // e.g., "ISO 9001:2015"
  title: string;
  subtitle: string;
  category: IsoCategory;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  targetIndustries: string[];
  typicalDurationDays: number;
  clauses: IsoClause[];
  phases: IsoTimelinePhase[];
  estimatedStartingPrice: number; // IDR estimate
  badgeText?: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  companySize: string;
  isoType: string;
  logoInitial: string;
  heroImage?: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
  }[];
  durationMonths: number;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export type LeadStatus = 'Baru' | 'Di-follow Up' | 'Proposal Terkirim' | 'Deal' | 'Batal';

export interface Lead {
  id: string;
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  industry: string;
  companySize: string; // e.g. "1-50 karyawan", "51-200 karyawan", "200+ karyawan"
  selectedIsoServices: string[];
  targetTimeline: string; // e.g. "Segera (< 3 bulan)", "3-6 bulan", "Explorasi"
  estimatedBudget?: string;
  notes?: string;
  createdAt: string;
  status: LeadStatus;
  assignedConsultant?: string;
  followUpHistory?: {
    date: string;
    note: string;
    author: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  isoStandard: string;
  publishedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  excerpt: string;
  contentMarkdown: string;
  clauseReference?: string;
  tags: string[];
  keyTakeaways: string[];
}

export interface AssessmentQuestion {
  id: number;
  isoStandard: string;
  category: string;
  question: string;
  options: {
    text: string;
    score: number; // 0 to 25
    advice: string;
  }[];
}

export interface AssessmentResult {
  score: number;
  readinessLevel: 'Sangat Siap' | 'Moderat' | 'Perlu Persiapan Matang' | 'Awal Progress';
  summary: string;
  recommendedServices: string[];
  gapPoints: string[];
}
