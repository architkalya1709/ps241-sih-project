import React, { useEffect, useState } from 'react';
import type { ScreenId, Language, Career, StudentProfile, ParentProfile } from '../types';
import { fetchRecommendations } from '../api/client';
import { CAREERS_LIST } from '../data/mockData';
import {
  Sparkles,
  CheckCircle2,
  Clock,
  GraduationCap,
  ArrowRight,
  ArrowRightLeft,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface Props {
  studentProfile: StudentProfile;
  parentProfile: ParentProfile;
  onSelectScreen: (screen: ScreenId) => void;
  onSelectCareer: (careerId: string) => void;
  language: Language;
}

export const CareerRecommendationsScreen: React.FC<Props> = ({
  studentProfile,
  parentProfile,
  onSelectScreen,
  onSelectCareer,
  language
}) => {
  const isHi = language === 'hi';
  const [careers, setCareers] = useState<Career[]>(CAREERS_LIST);
  const [loading, setLoading] = useState<boolean>(true);
  const [apiConnected, setApiConnected] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    fetchRecommendations(studentProfile, parentProfile)
      .then((data) => {
        if (isMounted && data && data.topMatches && data.topMatches.length > 0) {
          setCareers(data.topMatches);
          setApiConnected(true);
        }
      })
      .catch((err) => {
        console.warn('API error fetching recommendations:', err);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [studentProfile, parentProfile]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 text-neutral-950 shadow-sm border border-neutral-200 space-y-3">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold border border-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>{isHi ? 'एआई-सत्यापित सिफारिशें' : 'AI-Verified Career Recommendations'}</span>
          </div>

          <span className={`text-[10px] uppercase font-mono font-bold px-2.5 py-0.5 rounded-full border ${
            apiConnected ? 'bg-neutral-100 text-neutral-900 border-neutral-300' : 'bg-neutral-100 text-neutral-700 border-neutral-300'
          }`}>
            {apiConnected ? '● Live Backend API (port 5000)' : '● Prototype Mode'}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
          {isHi ? 'आपके लिए सर्वश्रेष्ठ वोकेशनल करियर' : 'Top Career Matches For Your Family'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600 font-medium">
          {isHi
            ? 'छात्र की व्यावहारिक प्रतिभा और माता-पिता की सुरक्षा एवं आय चिंताओं का संतुलन'
            : 'Calculated using student aptitude, regional demand, and parent security requirements'}
        </p>
      </div>

      {loading ? (
        <div className="p-12 text-center text-neutral-500 flex flex-col items-center justify-center gap-3">
          <RefreshCw className="w-8 h-8 text-neutral-950 animate-spin" />
          <span className="text-xs font-bold">Fetching verified career matches from backend...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {careers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200 hover:border-neutral-950 transition-all space-y-6 flex flex-col justify-between"
            >
              {/* Top Bar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300">
                    {isHi ? career.categoryHi : career.categoryEn}
                  </span>

                  <div className="flex items-center gap-1.5 bg-neutral-950 text-white px-3.5 py-1 rounded-full text-xs font-black shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>{career.matchScore || 85}% Match Score</span>
                  </div>
                </div>

                {/* Title & Why Match */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight">
                    {isHi ? career.titleHi : career.titleEn}
                  </h2>
                  <div className="mt-2 p-3 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-800 font-medium leading-relaxed">
                    <strong>{isHi ? 'यह क्यों मेल खाता है: ' : 'Why it matches: '}</strong>
                    {isHi ? (career.whyMatchHi || 'सत्यापित आंकड़ों के अनुसार छात्र और माता-पिता के लक्ष्यों से संरेखित।') : (career.whyMatchEn || 'Matches student technical aptitude & parent security requirements.')}
                  </div>
                </div>

                {/* Quick Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs pt-2">
                  
                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1">
                    <div className="flex items-center gap-1 text-neutral-500 font-bold text-[10px] uppercase">
                      <GraduationCap className="w-3.5 h-3.5 text-neutral-950" />
                      <span>{isHi ? 'योग्यता' : 'Education'}</span>
                    </div>
                    <div className="font-extrabold text-neutral-900 leading-snug">
                      {isHi ? career.requiredEducationHi : career.requiredEducationEn}
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1">
                    <div className="flex items-center gap-1 text-neutral-500 font-bold text-[10px] uppercase">
                      <Clock className="w-3.5 h-3.5 text-neutral-950" />
                      <span>{isHi ? 'अवधि' : 'Course Duration'}</span>
                    </div>
                    <div className="font-extrabold text-neutral-900 leading-snug">
                      {isHi ? career.courseDurationHi : career.courseDurationEn}
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 space-y-1 col-span-2 sm:col-span-1">
                    <div className="flex items-center gap-1 text-neutral-500 font-bold text-[10px] uppercase">
                      <ShieldCheck className="w-3.5 h-3.5 text-neutral-950" />
                      <span>{isHi ? 'प्लेसमेंट' : 'Placement'}</span>
                    </div>
                    <div className="font-black text-neutral-950 leading-snug">
                      {career.placementRate}% Verified
                    </div>
                  </div>

                </div>

                {/* Earnings & Key Skills */}
                <div className="space-y-2 pt-2 text-xs">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 text-white">
                    <span className="font-bold text-neutral-300">{isHi ? 'शुरुआती आय:' : 'Starting Salary:'}</span>
                    <strong className="text-white text-sm font-black">{isHi ? career.startingSalaryHi : career.startingSalaryEn}</strong>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 border border-neutral-200">
                    <span className="font-bold text-neutral-600">{isHi ? '5-वर्षीय विकास आय:' : '5-Yr Growth Salary:'}</span>
                    <strong className="text-neutral-950 text-sm font-black">{isHi ? career.growthSalaryHi : career.growthSalaryEn}</strong>
                  </div>
                </div>

                {/* Skills badges */}
                <div className="space-y-1 text-xs">
                  <span className="font-bold text-neutral-500 uppercase text-[10px]">{isHi ? 'मुख्य कौशल:' : 'Key Skills:'}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(isHi ? career.keySkillsHi : career.keySkillsEn).map((sk) => (
                      <span key={sk} className="bg-neutral-100 text-neutral-800 border border-neutral-200 px-2.5 py-1 rounded-md text-[11px] font-semibold">
                        • {sk}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-neutral-200 flex items-center gap-3">
                <button
                  onClick={() => {
                    onSelectCareer(career.id);
                    onSelectScreen('career-detail');
                  }}
                  className="flex-1 py-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{isHi ? 'करियर विवरण देखें' : 'View Career'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onSelectScreen('career-comparison')}
                  className="px-4 py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-xs border border-neutral-300 flex items-center gap-1.5 transition-all"
                >
                  <ArrowRightLeft className="w-4 h-4 text-neutral-950" />
                  <span>{isHi ? 'तुलना करें' : 'Compare'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </div>
  );
};
