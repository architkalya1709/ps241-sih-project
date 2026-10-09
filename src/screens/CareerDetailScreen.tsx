import React, { useEffect, useState } from 'react';
import type { ScreenId, Language, Career } from '../types';
import { fetchCareerById } from '../api/client';
import { CAREERS_LIST } from '../data/mockData';
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  GitMerge,
  PhoneCall,
  HeartHandshake,
  AlertCircle
} from 'lucide-react';

interface Props {
  careerId: string;
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const CareerDetailScreen: React.FC<Props> = ({
  careerId,
  onSelectScreen,
  language
}) => {
  const isHi = language === 'hi';
  const [career, setCareer] = useState<Career | null>(() => CAREERS_LIST.find((c) => c.id === careerId) || CAREERS_LIST[0]);

  useEffect(() => {
    let isMounted = true;
    fetchCareerById(careerId)
      .then((data) => {
        if (isMounted && data) {
          setCareer(data);
        }
      })
      .catch((err) => {
        console.warn(`Error fetching career detail for ${careerId}:`, err);
      });

    return () => {
      isMounted = false;
    };
  }, [careerId]);

  if (!career) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-neutral-950 mx-auto" />
        <h2 className="text-xl font-bold text-neutral-900">
          {isHi ? 'करियर विवरण लोड नहीं किया जा सका' : 'Career details could not be found'}
        </h2>
        <button
          onClick={() => onSelectScreen('career-recommendations')}
          className="px-6 py-2.5 bg-neutral-950 text-white font-bold text-xs rounded-xl"
        >
          {isHi ? 'सिफारिशों पर वापस जाएं' : 'Back to Recommendations'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Demo Dataset Banner Warning */}
      <div className="bg-neutral-100 border border-neutral-300 text-neutral-900 px-4 py-2.5 rounded-2xl flex items-center justify-between text-xs font-bold shadow-sm">
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-neutral-950" />
          <span>{isHi ? 'डेमो / हैकाथॉन डेटासेट (NCVET और NSDC संरेखित)' : 'Demo / Hackathon Dataset (NCVET & NSDC Aligned)'}</span>
        </div>
        <span className="text-[11px] bg-neutral-950 text-white px-2.5 py-0.5 rounded font-extrabold uppercase">Verified Specs</span>
      </div>

      {/* Main Header Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 text-neutral-950 shadow-sm border border-neutral-200 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-950 border border-neutral-300">
              {isHi ? career.categoryHi : career.categoryEn}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950">
              {isHi ? career.titleHi : career.titleEn}
            </h1>
            <p className="text-sm text-neutral-600">
              {isHi ? career.whyMatchHi : career.whyMatchEn}
            </p>
          </div>

          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center space-y-1 shrink-0">
            <div className="text-3xl font-black text-neutral-950">{career.matchScore}%</div>
            <div className="text-[10px] text-neutral-600 uppercase font-extrabold">Family Match Score</div>
          </div>
        </div>

        <div className="pt-4 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <span className="text-neutral-600 block text-[10px] uppercase font-bold">{isHi ? 'योग्यता' : 'Eligibility'}</span>
            <strong className="text-neutral-950 font-extrabold">{isHi ? career.requiredEducationHi : career.requiredEducationEn}</strong>
          </div>

          <div>
            <span className="text-neutral-600 block text-[10px] uppercase font-bold">{isHi ? 'अवधि' : 'Duration'}</span>
            <strong className="text-neutral-950 font-extrabold">{isHi ? career.courseDurationHi : career.courseDurationEn}</strong>
          </div>

          <div>
            <span className="text-neutral-600 block text-[10px] uppercase font-bold">{isHi ? 'शुरुआती आय' : 'Starting Salary'}</span>
            <strong className="text-neutral-950 font-extrabold">{isHi ? career.startingSalaryHi : career.startingSalaryEn}</strong>
          </div>

          <div>
            <span className="text-neutral-600 block text-[10px] uppercase font-bold">{isHi ? 'प्लेसमेंट दर' : 'Placement Rate'}</span>
            <strong className="text-neutral-950 font-extrabold">{career.placementRate}% Verified</strong>
          </div>
        </div>
      </div>

      {/* Parent Sentiment Note */}
      <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 flex items-start gap-4 shadow-sm">
        <div className="w-10 h-10 rounded-xl bg-neutral-950 text-white flex items-center justify-center font-bold shrink-0">
          <HeartHandshake className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h3 className="font-extrabold text-sm text-neutral-950">
            {isHi ? 'अभिभावक सुरक्षा नोट (Parent Reassurance Note):' : 'Parent Security Assurance:'}
          </h3>
          <p className="text-xs text-neutral-700 leading-relaxed">
            {isHi
              ? `यह ट्रेड NCVET प्रमाणित है। अभिभावक सुरक्षा रेटिंग 4.9/5 है। ${career.placementVerificationHi}`
              : `This trade is NCVET certified with a Parent Safety & Security Rating of 4.9/5. ${career.placementVerificationEn}`}
          </p>
        </div>
      </div>

      {/* Detailed Sections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Col 1 & 2 */}
        <div className="md:col-span-2 space-y-6">
          
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-3">
            <h3 className="text-lg font-black text-neutral-950 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-neutral-950" />
              <span>{isHi ? 'करियर अवलोकन (Overview)' : 'Overview'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {isHi
                ? `${career.titleHi} भारत के हरित ऊर्जा और बुनियादी ढांचा अभियान का एक महत्वपूर्ण हिस्सा है। 10वीं पास या ITI छात्र 6 महीने में यह व्यावहारिक कौशल सीखकर पीएम सूर्य घर और औद्योगिक सौर ऊर्जा पार्कों में स्थायी रोजगार प्राप्त कर सकते हैं।`
                : `${career.titleEn} is a pivotal vocational career under Skill India & NCVET. It offers immediate 6-month hands-on practical training leading to structured employment in solar EPC firms and renewable power infrastructure.`}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-neutral-950 flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-950" />
              <span>{isHi ? 'आवश्यक कौशल (Required Skills)' : 'Required Skills'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {(isHi ? career.keySkillsHi : career.keySkillsEn).map((sk, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs font-bold text-neutral-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-neutral-950" />
                  <span>{sk}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-neutral-950 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-neutral-950" />
              <span>{isHi ? 'रोजगार पद और नियोक्ता (Job Roles & Employers)' : 'Job Roles & Hiring Partners'}</span>
            </h3>
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-500 uppercase">{isHi ? 'प्रमुख नौकरी पद:' : 'Target Job Roles:'}</span>
              <div className="flex flex-wrap gap-2 text-xs">
                {(isHi ? career.jobRolesHi : career.jobRolesEn).map((role) => (
                  <span key={role} className="bg-neutral-100 text-neutral-950 px-3 py-1.5 rounded-xl font-extrabold border border-neutral-300">
                    💼 {role}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <span className="text-xs font-bold text-neutral-500 uppercase">{isHi ? 'प्लेसमेंट भागीदार:' : 'Placement Verification:'}</span>
              <p className="text-xs text-neutral-800 bg-neutral-50 p-3 rounded-xl border border-neutral-200 font-medium">
                {isHi ? career.placementVerificationHi : career.placementVerificationEn}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <h3 className="text-lg font-black text-neutral-950 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-neutral-950" />
              <span>{isHi ? '5-वर्षीय करियर प्रगति (Career Growth)' : '5-Year Career Growth Timeline'}</span>
            </h3>

            <div className="space-y-3">
              {(isHi ? career.careerGrowthHi : career.careerGrowthEn).map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200">
                  <div className="w-8 h-8 rounded-full bg-neutral-950 text-white font-black text-xs flex items-center justify-center shrink-0">
                    Y{idx}
                  </div>
                  <div className="text-xs font-extrabold text-neutral-950">
                    {step}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Col 3 */}
        <div className="space-y-6">
          
          <div className="bg-white text-neutral-950 rounded-3xl p-6 shadow-sm space-y-4 border border-neutral-200">
            <div className="flex items-center gap-2 text-neutral-600 font-bold text-xs uppercase">
              <TrendingUp className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'आय क्षमता' : 'Earning Potential'}</span>
            </div>

            <div className="space-y-3 border-b border-neutral-200 pb-4">
              <div>
                <span className="text-neutral-600 text-[11px] block">{isHi ? 'शुरुआती वेतन (Year 0-1)' : 'Starting Salary (Fresh Passout)'}</span>
                <strong className="text-xl font-black text-neutral-950">{isHi ? career.startingSalaryHi : career.startingSalaryEn}</strong>
              </div>

              <div>
                <span className="text-neutral-600 text-[11px] block">{isHi ? '5 साल के अनुभव के बाद' : '5 Years Experience'}</span>
                <strong className="text-2xl font-black text-neutral-950">{isHi ? career.growthSalaryHi : career.growthSalaryEn}</strong>
              </div>
            </div>

            <div className="text-[11px] text-neutral-600 leading-snug">
              {isHi
                ? 'मासिक वेतन के अलावा PF, ESI स्वास्थ्य बीमा और प्रदर्शन बोनस शामिल है।'
                : 'Includes PF, ESI medical insurance, OT bonus & PM Mudra loan eligibility for independent contractors.'}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-3 text-xs">
            <h4 className="font-extrabold text-neutral-950 text-sm flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'आगे की पढ़ाई के अवसर' : 'Further Education Options'}</span>
            </h4>
            <p className="text-neutral-700 leading-relaxed">
              {isHi ? career.furtherEducationHi : career.furtherEducationEn}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-3 text-xs">
            <h4 className="font-extrabold text-neutral-950 text-sm flex items-center gap-2">
              <Building2 className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'प्रशिक्षण केंद्र और आईटीआई' : 'Training Pathway'}</span>
            </h4>
            <p className="text-neutral-700 leading-relaxed">
              {isHi ? career.trainingPathwayHi : career.trainingPathwayEn}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <button
              onClick={() => onSelectScreen('skill-roadmap')}
              className="w-full py-4 rounded-2xl bg-neutral-950 text-white font-extrabold text-xs shadow-lg flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all"
            >
              <GitMerge className="w-4 h-4" />
              <span>{isHi ? '5-वर्षीय रोडमैप देखें' : 'View Full Skill Roadmap'}</span>
            </button>

            <button
              onClick={() => onSelectScreen('human-counsellor')}
              className="w-full py-3.5 rounded-2xl bg-neutral-100 hover:bg-neutral-200 text-neutral-950 font-bold text-xs border border-neutral-300 shadow-sm flex items-center justify-center gap-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'मानव काउंसलर से बात करें' : 'Discuss with Human Expert'}</span>
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};
