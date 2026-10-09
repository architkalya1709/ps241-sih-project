export type Language = 'en' | 'hi';

export type ScreenId =
  | 'landing'
  | 'language'
  | 'student-onboarding'
  | 'parent-onboarding'
  | 'family-dashboard'
  | 'ai-counsellor'
  | 'career-recommendations'
  | 'career-detail'
  | 'skill-roadmap'
  | 'career-comparison'
  | 'human-counsellor'
  | 'admin-dashboard'
  | 'jobs'
  | 'resume-builder'
  | 'auth';

export interface StudentProfile {
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
}

export interface ParentProfile {
  selectedConcerns: string[];
  customQuestion: string;
}

export interface Career {
  id: string;
  titleEn: string;
  titleHi: string;
  matchScore: number;
  matchBaseline?: number;
  nsqfLevel?: number;
  whyMatchEn: string;
  whyMatchHi: string;
  matchReasonsEn?: string[];
  matchReasonsHi?: string[];
  categoryEn: string;
  categoryHi: string;
  requiredEducationEn: string;
  requiredEducationHi: string;
  eligibilityEn?: string;
  eligibilityHi?: string;
  courseDurationEn: string;
  courseDurationHi: string;
  keySkillsEn: string[];
  keySkillsHi: string[];
  jobRolesEn: string[];
  jobRolesHi: string[];
  startingSalaryEn: string;
  startingSalaryHi: string;
  growthSalaryEn: string;
  growthSalaryHi: string;
  placementRate: number;
  placementVerificationEn: string;
  placementVerificationHi: string;
  careerGrowthEn: string[];
  careerGrowthHi: string[];
  furtherEducationEn: string;
  furtherEducationHi: string;
  trainingPathwayEn: string;
  trainingPathwayHi: string;
  parentSafetyRating: number;
  parentSecurityRating: number;
  nctvAccredited: boolean;
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

export interface ChatMessage {
  id: string;
  sender: 'student' | 'parent' | 'ai';
  senderLabelEn: string;
  senderLabelHi: string;
  textEn: string;
  textHi: string;
  timestamp: string;
  actionButtons?: { labelEn: string; labelHi: string; targetScreen?: ScreenId; query?: string }[];
}

export interface Counsellor {
  id: string;
  name: string;
  titleEn: string;
  titleHi: string;
  experienceEn: string;
  experienceHi: string;
  languages: string[];
  rating: number;
  sessionsCount: number;
  avatar: string;
  specialtiesEn: string[];
  specialtiesHi: string[];
}

export interface JobOpportunity {
  id: string;
  titleEn: string;
  titleHi: string;
  companyName: string;
  companyLogo?: string;
  locationEn: string;
  locationHi: string;
  type: 'Full-time' | 'Internship' | 'Apprenticeship';
  salaryRangeEn: string;
  salaryRangeHi: string;
  eligibilityEn: string;
  eligibilityHi: string;
  skills: string[];
  descriptionEn: string;
  descriptionHi: string;
  nsqfLevel?: number;
  postedDate: string;
  isBookmarked?: boolean;
  appliedStatus?: 'Applied' | 'Under Review' | 'Interview Scheduled' | 'Offered';
}

export interface ResumeData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  education: { degree: string; institution: string; year: string; score: string }[];
  skills: string[];
  workExperience: { title: string; company: string; duration: string; description: string }[];
  projects: { title: string; techStack: string; description: string }[];
  certifications: { title: string; issuer: string; year: string }[];
}
