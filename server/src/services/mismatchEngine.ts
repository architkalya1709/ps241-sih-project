export interface MismatchAnalysis {
  mismatchFound: boolean;
  studentPreference: string;
  parentConcern: string;
  headlineEn: string;
  headlineHi: string;
  verdictEn: string;
  verdictHi: string;
  discussionOptionsEn: string[];
  discussionOptionsHi: string[];
}

export function analyzeStudentParentMismatch(
  studentInterests: string[] = ['Solar & Green Energy'],
  parentConcerns: string[] = ['security', 'income']
): MismatchAnalysis {
  const studentPref = studentInterests[0] || 'Solar PV Technician';
  const hasSecurityConcern = parentConcerns.includes('security');
  const hasPerceptionConcern = parentConcerns.includes('perception');

  const headlineEn = 'CareerSaathi found a difference in family preferences.';
  const headlineHi = 'करियरसाथी को परिवार की प्राथमिकताओं में अंतर मिला है।';

  if (hasPerceptionConcern) {
    return {
      mismatchFound: true,
      studentPreference: studentPref,
      parentConcern: 'Social Status & Degree Prestige',
      headlineEn,
      headlineHi,
      verdictEn: `Student prefers hands-on technical trade (${studentPref}), while Parent desires high social prestige and university degree status.`,
      verdictHi: `छात्र व्यावहारिक तकनीकी व्यापार (${studentPref}) पसंद करता है, जबकि माता-पिता सामाजिक प्रतिष्ठा और विश्वविद्यालय की डिग्री चाहते हैं।`,
      discussionOptionsEn: [
        'Explore B.Voc (Bachelor of Vocation) degree pathways combining ITI skills with a formal university degree.',
        'Review NCVET National Credit Framework (NCrF) credit transfer rules.',
        'Schedule a 1-on-1 session with a certified Human Counsellor.'
      ],
      discussionOptionsHi: [
        'आईटीआई कौशल को विश्वविद्यालय डिग्री के साथ जोड़ने वाले बी.वोक (B.Voc) डिग्री रोडमैप को देखें।',
        'एनसीवीटी राष्ट्रीय क्रेडिट फ्रेमवर्क (NCrF) क्रेडिट ट्रांसफर नियमों की समीक्षा करें।',
        'प्रमाणित मानव परामर्शदाता के साथ 1-ऑन-1 परामर्श सत्र शेड्यूल करें।'
      ]
    };
  }

  return {
    mismatchFound: false,
    studentPreference: studentPref,
    parentConcern: hasSecurityConcern ? 'Job Security & Permanent Income' : 'Salary Growth',
    headlineEn: 'Student interest and Parent goals are strongly aligned!',
    headlineHi: 'छात्र की रुचि और माता-पिता के लक्ष्य अत्यधिक संरेखित हैं!',
    verdictEn: `Solar & Electrical trades offer high practical satisfaction for the student and 91% verified placement security for parents.`,
    verdictHi: `सोलर और इलेक्ट्रिकल ट्रेड छात्र के लिए उच्च व्यावहारिक संतुष्टि और माता-पिता के लिए 91% सत्यापित प्लेसमेंट सुरक्षा प्रदान करते हैं।`,
    discussionOptionsEn: [
      'Inspect 5-Year Skill & Salary Roadmap together.',
      'Check government PMKVY & PM Surya Ghar training kendras nearby.',
      'Compare top 3 recommended trades using the side-by-side comparison tool.'
    ],
    discussionOptionsHi: [
      '5-वर्षीय कौशल और वेतन रोडमैप की एक साथ समीक्षा करें।',
      'पास के सरकारी पीएमकेवीवाई और पीएम सूर्य घर प्रशिक्षण केंद्रों की जांच करें।',
      'तुलना टूल का उपयोग करके शीर्ष 3 अनुशंसित ट्रेडों की तुलना करें।'
    ]
  };
}
