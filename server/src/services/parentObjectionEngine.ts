import { ALL_TRADES } from '../data/dbStore';

export interface ParentObjectionResult {
  concernKey: string;
  concernTitleEn: string;
  concernTitleHi: string;
  evidenceEn: string;
  evidenceHi: string;
  explanationEn: string;
  explanationHi: string;
  careerImplicationEn: string;
  careerImplicationHi: string;
  nextStepEn: string;
  nextStepHi: string;
}

export function resolveParentObjection(
  concernKey: string,
  tradeId: string = 'solar-tech'
): ParentObjectionResult {
  const trade = ALL_TRADES.find((t) => t.id === tradeId) || ALL_TRADES[0];

  switch (concernKey.toLowerCase()) {
    case 'security':
    case 'job security':
      return {
        concernKey: 'Job Security',
        concernTitleEn: 'Job Security & Permanent Employment',
        concernTitleHi: 'नौकरी की सुरक्षा और स्थायी रोजगार',
        evidenceEn: `${trade.placementRate}% NCVET Verified Placement rate under ${trade.placementVerificationEn}.`,
        evidenceHi: `${trade.placementVerificationHi} के तहत ${trade.placementRate}% एनसीवीटी सत्यापित प्लेसमेंट दर।`,
        explanationEn: `Vocational trades like ${trade.titleEn} are essential infrastructure services backed by government schemes (PMKVY & NAPS). Industry demand is permanent and recession-proof.`,
        explanationHi: `${trade.titleHi} जैसे वोकेशनल ट्रेड सरकारी योजनाओं (PMKVY और NAPS) द्वारा समर्थित आवश्यक बुनियादी ढांचा सेवाएं हैं। उद्योग की मांग स्थायी और सुरक्षित है।`,
        careerImplicationEn: `After 1-year paid apprenticeship, candidates receive NCVET National Trade Certificates eligible for permanent PSU & MNC jobs.`,
        careerImplicationHi: `1 साल के सशुल्क अप्रेंटिसशिप के बाद, उम्मीदवारों को राष्ट्रीय ट्रेड प्रमाणपत्र प्राप्त होता है जो स्थायी सरकारी व निजी नौकरियों के लिए पात्र है।`,
        nextStepEn: 'Inspect the 5-Year Salary Growth Roadmap or talk to a certified human counsellor.',
        nextStepHi: '5-वर्षीय वेतन वृद्धि रोडमैप देखें या प्रमाणित मानव परामर्शदाता से बात करें।'
      };

    case 'income':
    case 'salary':
      return {
        concernKey: 'Income',
        concernTitleEn: 'Starting Income & 5-Year Salary Growth',
        concernTitleHi: 'शुरुआती आय और 5-वर्षीय वेतन वृद्धि',
        evidenceEn: `Starting salary: ${trade.startingSalaryEn}. 5-Year Experienced salary: ${trade.growthSalaryEn}.`,
        evidenceHi: `शुरुआती वेतन: ${trade.startingSalaryHi}। 5 साल के अनुभवी तकनीशियन का वेतन: ${trade.growthSalaryHi}।`,
        explanationEn: 'Skill India certified candidates earn monthly wages with formal PF, ESI medical cover, and overtime incentives.',
        explanationHi: 'स्किल इंडिया प्रमाणित उम्मीदवारों को पीएफ, ईएसआई चिकित्सा बीमा और ओवरटाइम प्रोत्साहन के साथ मासिक वेतन मिलता है।',
        careerImplicationEn: 'Candidates can start earning within 6-12 months of training instead of spending 4 years on general degrees.',
        careerImplicationHi: 'सामान्य डिग्री पर 4 साल बिताने के बजाय उम्मीदवार प्रशिक्षण के 6-12 महीनों के भीतर कमाई शुरू कर सकते हैं।',
        nextStepEn: 'Compare earnings with other trades using the Career Comparison Tool.',
        nextStepHi: 'करियर तुलना टूल का उपयोग करके अन्य ट्रेडों के साथ कमाई की तुलना करें।'
      };

    case 'safety':
      return {
        concernKey: 'Safety',
        concernTitleEn: 'Workplace Safety & Medical Cover',
        concernTitleHi: 'कार्यस्थल सुरक्षा और चिकित्सा बीमा',
        evidenceEn: `Parent Safety Rating: ${trade.parentSafetyRating}/5.0. ISO 45001 safety compliance enforced.`,
        evidenceHi: `अभिभावक सुरक्षा रेटिंग: ${trade.parentSafetyRating}/5.0। ISO 45001 सुरक्षा अनुपालन अनिवार्य।`,
        explanationEn: 'All government ITIs and industry training centers mandate PPE safety kits, high-voltage insulation gear, and safety audits.',
        explanationHi: 'सभी सरकारी आईटीआई और उद्योग प्रशिक्षण केंद्र पीपीई किट, सुरक्षा उपकरण और सुरक्षा ऑडिट का पालन करते हैं।',
        careerImplicationEn: 'Under NAPS apprenticeships, candidates receive ₹5 Lakh group health and accident insurance.',
        careerImplicationHi: 'NAPS प्रशिक्षुता के तहत, उम्मीदवारों को ₹5 लाख का समूह स्वास्थ्य और दुर्घटना बीमा मिलता है।',
        nextStepEn: 'View official NCVET safety guidelines in the Career Detail page.',
        nextStepHi: 'करियर विवरण पृष्ठ में आधिकारिक एनसीवीटी सुरक्षा दिशानिर्देश देखें।'
      };

    default:
      return {
        concernKey: 'Social Respect',
        concernTitleEn: 'Social Respect & Further Degree Options',
        concernTitleHi: 'सामाजिक सम्मान और आगे की डिग्री के अवसर',
        evidenceEn: `Eligible for lateral 3-Year B.Voc Degree: ${trade.furtherEducationEn}.`,
        evidenceHi: `3-वर्षीय बी.वोक डिग्री के लिए पात्र: ${trade.furtherEducationHi}।`,
        explanationEn: 'Under National Credit Framework (NCrF), ITI credits transfer directly into university degree programs while working.',
        explanationHi: 'राष्ट्रीय क्रेडिट फ्रेमवर्क (NCrF) के तहत, काम करते समय ITI क्रेडिट सीधे विश्वविद्यालय डिग्री में स्थानांतरित हो जाते हैं।',
        careerImplicationEn: 'Candidates gain practical mastery, monthly income, and a formal university degree simultaneously.',
        careerImplicationHi: 'उम्मीदवारों को व्यावहारिक महारत, मासिक आय और औपचारिक विश्वविद्यालय डिग्री एक साथ प्राप्त होती है।',
        nextStepEn: 'Open Family Dashboard to review joint student-parent recommendations.',
        nextStepHi: 'संयुक्त छात्र-अभिभावक सिफारिशों की समीक्षा के लिए फैमिली डैशबोर्ड खोलें।'
      };
  }
}
