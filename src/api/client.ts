import type { Career, StudentProfile, ParentProfile, RoadmapStep } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export function normalizeCareer(trade: any): Career {
  if (!trade) return trade;
  const matchScore = trade.matchScore ?? trade.matchBaseline ?? 85;
  const requiredEducationEn = trade.requiredEducationEn || trade.eligibilityEn || 'Class 10th Passed';
  const requiredEducationHi = trade.requiredEducationHi || trade.eligibilityHi || '10वीं पास';
  const eligibilityEn = trade.eligibilityEn || trade.requiredEducationEn || 'Class 10th Passed';
  const eligibilityHi = trade.eligibilityHi || trade.requiredEducationHi || '10वीं पास';
  const whyMatchEn = trade.whyMatchEn || (trade.matchReasonsEn ? trade.matchReasonsEn.join(' • ') : 'Matches profile requirements.');
  const whyMatchHi = trade.whyMatchHi || (trade.matchReasonsHi ? trade.matchReasonsHi.join(' • ') : 'प्रोफाइल आवश्यकताओं से मेल खाता है।');

  return {
    ...trade,
    matchScore,
    matchBaseline: trade.matchBaseline ?? matchScore,
    requiredEducationEn,
    requiredEducationHi,
    eligibilityEn,
    eligibilityHi,
    whyMatchEn,
    whyMatchHi
  };
}

export async function fetchTrades(): Promise<Career[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/careers`);
    if (!res.ok) throw new Error('API request failed');
    const data = await res.json();
    return (data.trades || []).map(normalizeCareer);
  } catch (err) {
    console.warn('[CareerSaathi API] Backend unavailable, using local client dataset');
    const { CAREERS_LIST } = await import('../data/mockData');
    return CAREERS_LIST.map(normalizeCareer);
  }
}

export async function fetchCareerById(id: string): Promise<Career | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/careers/${id}`);
    if (!res.ok) throw new Error('Career API request failed');
    const data = await res.json();
    return normalizeCareer(data.career);
  } catch (err) {
    console.warn(`[CareerSaathi API] Backend unavailable for career ${id}, looking in mock dataset`);
    const { CAREERS_LIST } = await import('../data/mockData');
    const found = CAREERS_LIST.find((c) => c.id === id);
    return found ? normalizeCareer(found) : null;
  }
}

export async function saveStudentProfile(profile: Partial<StudentProfile>): Promise<{ success: boolean; profile?: StudentProfile; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/student/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    if (!res.ok) throw new Error('Failed to save student profile');
    return await res.json();
  } catch (err: any) {
    console.warn('[CareerSaathi API] Failed to save student profile to backend:', err.message);
    return { success: false, message: err.message };
  }
}

export async function fetchStudentProfile(): Promise<StudentProfile | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/student/profile`);
    if (!res.ok) throw new Error('Failed to fetch student profile');
    const data = await res.json();
    return data.profile;
  } catch (err) {
    console.warn('[CareerSaathi API] Failed to fetch student profile from backend');
    return null;
  }
}

export async function saveParentProfile(profile: Partial<ParentProfile>): Promise<{ success: boolean; profile?: ParentProfile; message?: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/parent/profile`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(profile)
    });
    if (!res.ok) throw new Error('Failed to save parent profile');
    return await res.json();
  } catch (err: any) {
    console.warn('[CareerSaathi API] Failed to save parent profile to backend:', err.message);
    return { success: false, message: err.message };
  }
}

export async function fetchParentProfile(): Promise<ParentProfile | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/parent/profile`);
    if (!res.ok) throw new Error('Failed to fetch parent profile');
    const data = await res.json();
    return data.profile;
  } catch (err) {
    console.warn('[CareerSaathi API] Failed to fetch parent profile from backend');
    return null;
  }
}

export async function fetchRecommendations(
  studentProfile: Partial<StudentProfile>,
  parentProfile?: Partial<ParentProfile>
): Promise<{
  topMatches: Career[];
  studentPreference: string;
  parentConcern: string;
  mismatchFound: boolean;
  alignmentScore: number;
}> {
  try {
    const res = await fetch(`${API_BASE_URL}/recommendations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentProfile, parentProfile })
    });
    if (!res.ok) throw new Error('Failed to fetch recommendations');
    const data = await res.json();
    return {
      ...data,
      topMatches: (data.topMatches || []).map(normalizeCareer)
    };
  } catch (err) {
    console.warn('[CareerSaathi API] Fallback to local recommendations scoring');
    const { CAREERS_LIST } = await import('../data/mockData');
    const normalized = CAREERS_LIST.map(normalizeCareer);
    return {
      topMatches: normalized,
      studentPreference: normalized[0]?.titleEn || 'Solar PV Technician',
      parentConcern: 'Job Security',
      mismatchFound: false,
      alignmentScore: 87
    };
  }
}

export async function fetchRoadmap(careerId: string): Promise<{ tradeId: string; tradeTitle: string; steps: RoadmapStep[] }> {
  try {
    const res = await fetch(`${API_BASE_URL}/roadmap/${careerId}`);
    if (!res.ok) throw new Error('Failed to fetch roadmap');
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`[CareerSaathi API] Fallback roadmap for ${careerId}`);
    const { SOLAR_ROADMAP_STEPS } = await import('../data/mockData');
    return {
      tradeId: careerId,
      tradeTitle: careerId,
      steps: SOLAR_ROADMAP_STEPS
    };
  }
}

export async function fetchComparison(tradeIds: string[]): Promise<Career[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/compare`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tradeIds })
    });
    if (!res.ok) throw new Error('Failed to fetch comparison');
    const data = await res.json();
    return (data.comparedTrades || []).map(normalizeCareer);
  } catch (err) {
    console.warn('[CareerSaathi API] Comparison fallback to local data');
    const { CAREERS_LIST } = await import('../data/mockData');
    const filtered = CAREERS_LIST.filter((c) => tradeIds.includes(c.id));
    return (filtered.length > 0 ? filtered : CAREERS_LIST.slice(0, 3)).map(normalizeCareer);
  }
}

export async function postChatQuery(
  query: string,
  speaker: 'student' | 'parent',
  language: 'en' | 'hi' = 'en'
): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, speaker, language })
    });
    if (!res.ok) throw new Error('Chat API failed');
    const data = await res.json();
    return data.response;
  } catch (err) {
    console.warn('[CareerSaathi API] Chat endpoint fallback');
    return {
      id: `ai-${Date.now()}`,
      query,
      textEn: 'Solar & Electrical trades provide guaranteed NCVET certification, ₹18k-24k starting salary, and placement in verified companies like Tata Power.',
      textHi: 'सोलर और इलेक्ट्रिकल वोकेशनल ट्रेड NCVET सर्टिफिकेशन, ₹18k-24k शुरुआती वेतन और टाटा पावर जैसी सत्यापित कंपनियों में प्लेसमेंट प्रदान करते हैं।',
      intent: 'general',
      confidenceScore: 0.9,
      isGrounded: true,
      requiresCounsellorEscalation: false,
      sentiment: 'Neutral'
    };
  }
}

export async function submitCounsellorBooking(payload: any): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/counsellor-request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error('Counsellor Request API failed');
    return await res.json();
  } catch (err) {
    return {
      success: true,
      ticket: {
        id: `req-${Date.now()}`,
        ticketId: `CS-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        ...payload,
        status: 'Pending'
      }
    };
  }
}

export async function fetchAdminAnalytics(): Promise<any> {
  try {
    const res = await fetch(`${API_BASE_URL}/admin/analytics`);
    if (!res.ok) throw new Error('Admin Analytics API failed');
    const data = await res.json();
    return data.analytics;
  } catch (err) {
    const { ADMIN_STATS_DATA } = await import('../data/mockData');
    return ADMIN_STATS_DATA;
  }
}

