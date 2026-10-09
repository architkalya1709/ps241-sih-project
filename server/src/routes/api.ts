import { Router, Request, Response } from 'express';
import { ALL_TRADES, MOCK_COUNSELLOR_REQUESTS } from '../data/dbStore';
import { calculateCareerRecommendations } from '../services/recommendationEngine';
import { resolveParentObjection } from '../services/parentObjectionEngine';
import { analyzeStudentParentMismatch } from '../services/mismatchEngine';
import { getAIService } from '../services/aiService';
import { classifySentiment } from '../services/sentimentService';
import type { StudentProfile, ParentProfile, CounsellorRequestPayload, AdminAnalyticsData } from '../types';

export const router = Router();

// In-Memory state store for session demonstration
let currentStudent: StudentProfile = {
  id: 'st-101',
  userId: 'u-student-1',
  name: 'Rahul Verma',
  age: '17',
  state: 'Bihar',
  district: 'Patna',
  areaType: 'Semi-Urban',
  educationLevel: 'Class 10th Passed / Pursuing',
  academicStream: 'Science',
  academicPerformance: '65% - 80%',
  interests: ['Solar & Green Energy', 'Electrical Wiring & Power'],
  skills: ['Basic Electrical Wiring', 'Soldering', 'Computer Operation'],
  preferredWorkType: 'Hands-on Practical',
  preferredWorkLocation: 'Home District',
  careerInterests: ['Solar PV Technician', 'Industrial Electrician']
};

let currentParent: ParentProfile = {
  id: 'pt-101',
  userId: 'u-parent-1',
  studentId: 'st-101',
  selectedConcerns: ['income', 'security', 'growth', 'safety', 'placement'],
  customQuestion: 'Is Solar Technician a permanent job with stable monthly salary and govt backing?'
};

// 1. POST /api/auth
router.post('/auth', (req: Request, res: Response) => {
  const { email, name, role, language } = req.body;
  const user = {
    id: `u-${Date.now()}`,
    email: email || 'student@careersaathi.in',
    name: name || 'Rahul Verma',
    role: role || 'student',
    language: language || 'en',
    createdAt: new Date().toISOString()
  };
  res.json({ success: true, token: `jwt-demo-${user.id}`, user });
});

// 2. GET & POST /api/student/profile
router.get('/student/profile', (_req: Request, res: Response) => {
  res.json({ success: true, profile: currentStudent });
});

router.post('/student/profile', (req: Request, res: Response) => {
  currentStudent = { ...currentStudent, ...req.body, updatedAt: new Date().toISOString() };
  res.json({ success: true, message: 'Student profile updated successfully', profile: currentStudent });
});

// 3. GET & POST /api/parent/profile
router.get('/parent/profile', (_req: Request, res: Response) => {
  res.json({ success: true, profile: currentParent });
});

router.post('/parent/profile', (req: Request, res: Response) => {
  currentParent = { ...currentParent, ...req.body, updatedAt: new Date().toISOString() };
  res.json({ success: true, message: 'Parent concerns updated successfully', profile: currentParent });
});

// 4. GET /api/family/profile
router.get('/family/profile', (_req: Request, res: Response) => {
  const mismatch = analyzeStudentParentMismatch(currentStudent.interests, currentParent.selectedConcerns);
  res.json({
    success: true,
    family: {
      id: 'fam-101',
      student: currentStudent,
      parent: currentParent,
      mismatchScore: mismatch.mismatchFound ? 42 : 12,
      analysis: mismatch,
      updatedAt: new Date().toISOString()
    }
  });
});

// 5. GET /api/careers & GET /api/careers/:id
router.get('/careers', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: ALL_TRADES.length,
    disclaimer: 'Demo / Hackathon Dataset (NCVET & NSDC Aligned)',
    trades: ALL_TRADES
  });
});

router.get('/careers/:id', (req: Request, res: Response) => {
  const trade = ALL_TRADES.find((t) => t.id === req.params.id);
  if (!trade) {
    return res.status(404).json({ success: false, message: 'Career trade not found' });
  }
  res.json({
    success: true,
    disclaimer: 'Demo / Hackathon Dataset (NCVET & NSDC Aligned)',
    career: trade
  });
});

// 6. POST /api/recommendations
router.post('/recommendations', (req: Request, res: Response) => {
  const studentData = req.body.studentProfile || currentStudent;
  const parentData = req.body.parentProfile || currentParent;
  const recommendations = calculateCareerRecommendations(studentData, parentData);
  res.json({ success: true, ...recommendations });
});

// 7. POST /api/chat (RAG + AI Service)
router.post('/chat', async (req: Request, res: Response) => {
  const { query, speaker, language } = req.body;
  if (!query || typeof query !== 'string') {
    return res.status(400).json({ success: false, message: 'Query string is required' });
  }

  const aiService = getAIService();
  const response = await aiService.generateResponse({
    query,
    speaker: speaker || 'parent',
    language: language || 'en',
    studentProfile: currentStudent,
    parentProfile: currentParent
  });

  const sentiment = classifySentiment(query);

  res.json({
    success: true,
    response: {
      ...response,
      sentiment
    }
  });
});

// 8. POST /api/compare
router.post('/compare', (req: Request, res: Response) => {
  const { tradeIds } = req.body;
  const ids: string[] = Array.isArray(tradeIds) && tradeIds.length > 0 ? tradeIds : ['solar-tech', 'electrician', 'electronics-tech'];
  const trades = ALL_TRADES.filter((t) => ids.includes(t.id));
  res.json({
    success: true,
    comparedTrades: trades
  });
});

// 9. GET /api/roadmap/:career_id
router.get('/roadmap/:career_id', (req: Request, res: Response) => {
  const tradeId = req.params.career_id;
  const trade = ALL_TRADES.find((t) => t.id === tradeId) || ALL_TRADES[0];

  const steps = [
    { phase: 'Phase 1', titleEn: 'Foundation Skills', titleHi: 'फाउंडेशन कौशल', subtitleEn: `Class 10th + Basic ${trade.categoryEn} Principles`, durationEn: 'Months 1 - 2', status: 'completed' },
    { phase: 'Phase 2', titleEn: 'Vocational Training', titleHi: 'वोकेशनल प्रशिक्षण', subtitleEn: `Practical Lab Training in ${trade.titleEn}`, durationEn: 'Months 3 - 6', status: 'in-progress' },
    { phase: 'Phase 3', titleEn: 'NCVET Certification', titleHi: 'एनसीवीटी प्रमाणन', subtitleEn: 'Paid Apprenticeship under NAPS', durationEn: 'Months 7 - 12', salaryMilestoneEn: 'Stipend: ₹12,000/month', status: 'upcoming' },
    { phase: 'Phase 4', titleEn: 'Entry-Level Job', titleHi: 'प्रारंभिक नौकरी', subtitleEn: `Joined Verified Industry Hire Partner (${trade.placementRate}% Rate)`, durationEn: 'Year 1 - 2', salaryMilestoneEn: `Salary: ${trade.startingSalaryEn}`, status: 'upcoming' },
    { phase: 'Phase 5', titleEn: 'Advanced B.Voc & Growth', titleHi: 'उन्नत B.Voc डिग्री', subtitleEn: `${trade.furtherEducationEn}`, durationEn: 'Year 3 - 5', salaryMilestoneEn: `Salary: ${trade.growthSalaryEn}`, status: 'upcoming' }
  ];

  res.json({
    success: true,
    tradeId: trade.id,
    tradeTitle: trade.titleEn,
    steps
  });
});

// 10. POST & GET /api/counsellor-request
router.post('/counsellor-request', (req: Request, res: Response) => {
  const payload: CounsellorRequestPayload = req.body;
  const newRecord = {
    id: `req-${Date.now()}`,
    ticketId: `CS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
    studentName: payload.studentName || currentStudent.name,
    parentName: payload.parentName || 'Ramesh Chandra Verma',
    concernTopic: payload.concernTopic || 'Job Security & Salary Verification',
    language: payload.language || 'Hindi',
    preferredDate: payload.preferredDate || '2026-10-12',
    preferredTime: payload.preferredTime || '11:00 AM',
    communicationMode: payload.communicationMode || 'Phone Call',
    status: 'Pending' as const,
    createdAt: new Date().toISOString()
  };

  MOCK_COUNSELLOR_REQUESTS.push(newRecord);

  res.json({
    success: true,
    message: 'Counsellor booking request created successfully',
    ticket: newRecord
  });
});

router.get('/counsellor-request', (_req: Request, res: Response) => {
  res.json({
    success: true,
    count: MOCK_COUNSELLOR_REQUESTS.length,
    requests: MOCK_COUNSELLOR_REQUESTS
  });
});

// 11. GET /api/admin/analytics
router.get('/admin/analytics', (_req: Request, res: Response) => {
  const analytics: AdminAnalyticsData = {
    totalUsers: 148520,
    activeFamilies: 94200,
    counsellingSessions: 412900,
    parentParticipationRate: 86.4,
    humanEscalationRate: 3.8,
    avgDecisionTimeDays: 2.9,
    parentConcernsBreakdown: [
      { nameEn: 'Job Security', nameHi: 'नौकरी की सुरक्षा', value: 38, color: '#0f2942' },
      { nameEn: 'Starting Income', nameHi: 'शुरुआती आय', value: 26, color: '#0d9488' },
      { nameEn: 'Social Respect', nameHi: 'सामाजिक सम्मान', value: 16, color: '#d97706' },
      { nameEn: 'Safety & Health', nameHi: 'सुरक्षा और स्वास्थ्य', value: 12, color: '#10b981' },
      { nameEn: 'Higher Education', nameHi: 'उच्च शिक्षा', value: 8, color: '#6366f1' }
    ],
    topTradesRequested: [
      { tradeEn: 'Solar PV Technician', tradeHi: 'सोलर पीवी तकनीशियन', percentage: 32 },
      { tradeEn: 'Building & Industrial Electrician', tradeHi: 'इलेक्ट्रिशियन', percentage: 28 },
      { tradeEn: 'EV Battery & Powertrain', tradeHi: 'ईवी बैटरी एवं पावरट्रेन', percentage: 18 },
      { tradeEn: 'CNC Machine Programmer', tradeHi: 'सीएनसी प्रोग्रामर', percentage: 12 },
      { tradeEn: 'Healthcare GDA Assistant', tradeHi: 'हेल्थकेयर असिस्टेंट', percentage: 10 }
    ],
    regionalDistribution: [
      { stateEn: 'Uttar Pradesh', count: 42300 },
      { stateEn: 'Bihar', count: 35100 },
      { stateEn: 'Madhya Pradesh', count: 24800 },
      { stateEn: 'Rajasthan', count: 19400 },
      { stateEn: 'Maharashtra', count: 14200 },
      { stateEn: 'Others (PAN India)', count: 12720 }
    ],
    sentimentBeforeVsAfter: [
      { before: 'Concerned', after: 'Positive', percentage: 89 }
    ],
    disclaimer: 'Prototype / Demo Analytics (Skill India Telemetry Dataset)'
  };

  res.json({ success: true, analytics });
});
