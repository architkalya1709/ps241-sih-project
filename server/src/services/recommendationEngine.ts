import { ALL_TRADES } from '../data/dbStore';
import type { StudentProfile, ParentProfile, Trade } from '../types';

export function calculateCareerRecommendations(
  student: Partial<StudentProfile>,
  parent?: Partial<ParentProfile>
): {
  topMatches: (Trade & { matchScore: number; matchReasonsEn: string[]; matchReasonsHi: string[] })[];
  studentPreference: string;
  parentConcern: string;
  mismatchFound: boolean;
  alignmentScore: number;
} {
  const studentInterests = student.interests || ['Solar & Green Energy', 'Electrical Wiring & Power'];
  const studentSkills = student.skills || ['Basic Electrical Wiring'];
  const studentWorkType = student.preferredWorkType || 'Hands-on Practical';
  const parentConcerns = parent?.selectedConcerns || ['security', 'income'];

  const scoredTrades = ALL_TRADES.map((trade) => {
    let score = trade.matchBaseline;
    const reasonsEn: string[] = [];
    const reasonsHi: string[] = [];

    // Interest Alignment (+12)
    const matchesInterest = studentInterests.some((int) =>
      trade.categoryEn.toLowerCase().includes(int.toLowerCase()) ||
      trade.titleEn.toLowerCase().includes(int.toLowerCase()) ||
      trade.keySkillsEn.some((sk) => sk.toLowerCase().includes(int.toLowerCase()))
    );
    if (matchesInterest) {
      score += 8;
      reasonsEn.push(`Matches student's interest in ${trade.categoryEn}`);
      reasonsHi.push(`छात्र की ${trade.categoryHi} में रुचि से मेल खाता है`);
    }

    // Skills Alignment (+10)
    const matchesSkill = studentSkills.some((sk) =>
      trade.keySkillsEn.some((tsk) => tsk.toLowerCase().includes(sk.toLowerCase()))
    );
    if (matchesSkill) {
      score += 6;
      reasonsEn.push('Leverages student\'s existing practical skills');
      reasonsHi.push('छात्र के मौजूदा व्यावहारिक कौशल का उपयोग करता है');
    }

    // Work Type Alignment (+5)
    if (studentWorkType.toLowerCase().includes('hands-on') || studentWorkType.toLowerCase().includes('practical')) {
      score += 4;
      reasonsEn.push('Offers 100% practical lab & site training');
      reasonsHi.push('100% व्यावहारिक लैब और साइट प्रशिक्षण प्रदान करता है');
    }

    // Parent Concerns Alignment (+10)
    if (parentConcerns.includes('security') && trade.parentSecurityRating >= 4.7) {
      score += 5;
      reasonsEn.push(`High Parent Job Security Rating (${trade.parentSecurityRating}/5.0)`);
      reasonsHi.push(`उच्च अभिभावक सुरक्षा रेटिंग (${trade.parentSecurityRating}/5.0)`);
    }
    if (parentConcerns.includes('income') && trade.placementRate >= 88) {
      score += 5;
      reasonsEn.push(`High Verified Placement Rate (${trade.placementRate}%)`);
      reasonsHi.push(`उच्च सत्यापित प्लेसमेंट दर (${trade.placementRate}%)`);
    }

    // Cap score at 98%
    const finalScore = Math.min(98, Math.max(65, score));

    return {
      ...trade,
      matchScore: finalScore,
      matchReasonsEn: reasonsEn.length > 0 ? reasonsEn : ['Matches basic educational background', 'Aligned with NCVET NSQF Level'],
      matchReasonsHi: reasonsHi.length > 0 ? reasonsHi : ['बुनियादी शैक्षिक पृष्ठभूमि से मेल खाता है', 'NCVET स्तर से संरेखित']
    };
  });

  // Sort by highest match score
  scoredTrades.sort((a, b) => b.matchScore - a.matchScore);

  const topMatches = scoredTrades.slice(0, 5);

  const studentPreference = topMatches[0]?.titleEn || 'Solar PV Technician';
  const parentConcern = parentConcerns.includes('security') ? 'Job Security & Permanent Income' : 'Salary Growth & Safety';
  const mismatchFound = parentConcerns.includes('perception') || parentConcerns.includes('distance');
  const alignmentScore = Math.round(topMatches[0].matchScore * 0.95);

  return {
    topMatches,
    studentPreference,
    parentConcern,
    mismatchFound,
    alignmentScore
  };
}
