export type Language = 'en' | 'hi';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'parent' | 'admin';
  language: Language;
  createdAt: string;
}

export interface StudentProfile {
  id: string;
  userId: string;
  name: string;
  age: string;
  state: string;
  district: string;
  areaType: 'Rural' | 'Semi-Urban' | 'Urban';
  educationLevel: string;
  academicStream: string;
  academicPerformance: string;
  interests: string[];
  skills: string[];
  preferredWorkType: string;
  preferredWorkLocation: string;
  careerInterests: string[];
  updatedAt?: string;
}

export interface ParentProfile {
  id: string;
  userId: string;
  studentId: string;
  selectedConcerns: string[];
  customQuestion?: string;
  updatedAt?: string;
}

export interface FamilyProfile {
  id: string;
  studentId: string;
  parentId: string;
  mismatchScore: number;
  jointVerdict: string;
  studentPreference: string;
  parentConcern: string;
  discussionOptions: string[];
  updatedAt: string;
}

export interface Trade {
  id: string;
  titleEn: string;
  titleHi: string;
  categoryEn: string;
  categoryHi: string;
  matchBaseline: number;
  matchScore?: number;
  eligibilityEn: string;
  eligibilityHi: string;
  requiredEducationEn?: string;
  requiredEducationHi?: string;
  courseDurationEn: string;
  courseDurationHi: string;
  nsqfLevel: number;
  parentSafetyRating: number;
  parentSecurityRating: number;
  nctvAccredited: boolean;
  startingSalaryEn: string;
  startingSalaryHi: string;
  growthSalaryEn: string;
  growthSalaryHi: string;
  placementRate: number;
  placementVerificationEn: string;
  placementVerificationHi: string;
  keySkillsEn: string[];
  keySkillsHi: string[];
  jobRolesEn: string[];
  jobRolesHi: string[];
  careerGrowthEn: string[];
  careerGrowthHi: string[];
  furtherEducationEn: string;
  furtherEducationHi: string;
  trainingPathwayEn: string;
  trainingPathwayHi: string;
  whyMatchEn?: string;
  whyMatchHi?: string;
}

export interface RoadmapStep {
  phase: string;
  titleEn: string;
  titleHi: string;
  subtitleEn: string;
  subtitleHi: string;
  durationEn: string;
  durationHi: string;
  skillsAcquiredEn: string[];
  skillsAcquiredHi: string[];
  salaryMilestoneEn?: string;
  salaryMilestoneHi?: string;
  certifyingBodyEn?: string;
  certifyingBodyHi?: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface ChatMessageRequest {
  query: string;
  speaker: 'student' | 'parent';
  language?: Language;
  studentProfile?: Partial<StudentProfile>;
  parentProfile?: Partial<ParentProfile>;
}

export interface ChatMessageResponse {
  id: string;
  query: string;
  textEn: string;
  textHi: string;
  intent: string;
  retrievedCareerId?: string;
  confidenceScore: number;
  isGrounded: boolean;
  requiresCounsellorEscalation: boolean;
  sentiment: 'Positive' | 'Neutral' | 'Concerned' | 'Negative';
  actionButtons?: { labelEn: string; labelHi: string; targetScreen?: string; query?: string }[];
}

export interface RecommendationRequest {
  studentProfile: Partial<StudentProfile>;
  parentProfile?: Partial<ParentProfile>;
}

export interface RecommendationResponse {
  topMatches: (Trade & { matchScore: number; matchReasonsEn: string[]; matchReasonsHi: string[] })[];
  studentPreference: string;
  parentConcern: string;
  mismatchFound: boolean;
  alignmentScore: number;
}

export interface CounsellorRequestPayload {
  userId?: string;
  studentName: string;
  parentName?: string;
  concernTopic: string;
  language: string;
  preferredDate: string;
  preferredTime: string;
  communicationMode: string;
}

export interface CounsellorRequestRecord extends CounsellorRequestPayload {
  id: string;
  ticketId: string;
  status: 'Pending' | 'Assigned' | 'Completed';
  createdAt: string;
}

export interface AdminAnalyticsData {
  totalUsers: number;
  activeFamilies: number;
  counsellingSessions: number;
  parentParticipationRate: number;
  humanEscalationRate: number;
  avgDecisionTimeDays: number;
  parentConcernsBreakdown: { nameEn: string; nameHi: string; value: number; color: string }[];
  topTradesRequested: { tradeEn: string; tradeHi: string; percentage: number }[];
  regionalDistribution: { stateEn: string; count: number }[];
  sentimentBeforeVsAfter: { before: string; after: string; percentage: number }[];
  disclaimer: string;
}
