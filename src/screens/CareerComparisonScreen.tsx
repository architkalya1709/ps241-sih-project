import React, { useEffect, useState } from 'react';
import type { ScreenId, Language, Career } from '../types';
import { fetchComparison } from '../api/client';
import { CAREERS_LIST } from '../data/mockData';
import {
  ArrowRightLeft,
  Award,
  ShieldCheck,
  TrendingUp,
  GraduationCap,
  Clock
} from 'lucide-react';

interface Props {
  selectedCareerIds?: string[];
  onSelectScreen: (screen: ScreenId) => void;
  onSelectCareer: (careerId: string) => void;
  language: Language;
}

export const CareerComparisonScreen: React.FC<Props> = ({
  selectedCareerIds = ['solar-tech', 'electrician', 'electronics-tech'],
  onSelectCareer,
  onSelectScreen,
  language
}) => {
  const isHi = language === 'hi';
  const [comparedCareers, setComparedCareers] = useState<Career[]>(CAREERS_LIST.slice(0, 3));

  useEffect(() => {
    let isMounted = true;
    fetchComparison(selectedCareerIds)
      .then((data) => {
        if (isMounted && data && data.length > 0) {
          setComparedCareers(data);
        }
      })
      .catch((err) => {
        console.warn('Error fetching comparison:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedCareerIds]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 text-neutral-950 shadow-sm border border-neutral-200 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-950 text-xs font-bold border border-neutral-300">
          <ArrowRightLeft className="w-3.5 h-3.5 text-neutral-950" />
          <span>{isHi ? '3-मार्गी वोकेशनल तुलना टूल' : '3-Way Vocational Comparison Matrix'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
          {isHi ? 'करियर तुलना (Career Comparison)' : 'Side-by-Side Trade Comparison'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600">
          {isHi
            ? 'सोलर तकनीशियन, इलेक्ट्रीशियन और इलेक्ट्रॉनिक्स तकनीशियन का 8 मानकों पर विस्तृत तुलनात्मक अध्ययन'
            : 'Compare Solar Technician vs Electrician vs Electronics Specialist across 8 parameters'}
        </p>
      </div>

      {/* Side-by-Side Comparison Table / Cards Grid */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse bg-white rounded-3xl shadow-sm border border-neutral-200 min-w-[760px]">
          
          <thead>
            <tr className="bg-neutral-100 text-neutral-950 border-b border-neutral-300">
              <th className="p-5 font-black text-xs uppercase text-neutral-950 w-1/4 rounded-tl-3xl">
                {isHi ? 'तुलना मानक' : 'Comparison Parameter'}
              </th>
              {comparedCareers.map((c, i) => (
                <th key={c.id} className={`p-5 w-1/4 ${i === comparedCareers.length - 1 ? 'rounded-tr-3xl' : ''}`}>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase bg-black text-white px-2.5 py-0.5 rounded-full">
                      {c.matchScore}% Match
                    </span>
                    <h3 className="font-black text-sm text-neutral-950">{isHi ? c.titleHi : c.titleEn}</h3>
                  </div>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-200 text-xs">
            
            <tr className="hover:bg-neutral-50">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <Clock className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'कोर्स की अवधि' : 'Course Duration'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-neutral-800">
                  {isHi ? c.courseDurationHi : c.courseDurationEn}
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-50">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <GraduationCap className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'पात्रता (Eligibility)' : 'Eligibility'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-neutral-800">
                  {isHi ? c.requiredEducationHi : c.requiredEducationEn}
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-100">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <TrendingUp className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'शुरुआती आय (Starting Salary)' : 'Starting Salary'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-black text-neutral-950 text-sm">
                  {isHi ? c.startingSalaryHi : c.startingSalaryEn}
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-100">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <TrendingUp className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? '5-वर्षीय आय वृद्धि' : '5-Year Growth Salary'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-black text-neutral-950 text-sm">
                  {isHi ? c.growthSalaryHi : c.growthSalaryEn}
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-50">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <ShieldCheck className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'सत्यापित प्लेसमेंट दर' : 'Placement Rate'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-extrabold text-neutral-900">
                  {c.placementRate}% Verified (NCVET)
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-50">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <Award className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'अभिभावक सुरक्षा रेटिंग' : 'Parent Security Score'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-black text-neutral-950">
                  {c.parentSecurityRating} / 5.0 ★
                </td>
              ))}
            </tr>

            <tr className="hover:bg-neutral-50">
              <td className="p-4 font-bold text-neutral-950 flex items-center gap-1.5 bg-neutral-50">
                <GraduationCap className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'उच्च शिक्षा (B.Voc)' : 'Further Education Path'}</span>
              </td>
              {comparedCareers.map((c) => (
                <td key={c.id} className="p-4 font-semibold text-neutral-800">
                  {isHi ? c.furtherEducationHi : c.furtherEducationEn}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 font-bold text-neutral-950 bg-neutral-50 rounded-bl-3xl">
                {isHi ? 'कार्रवाई' : 'Action'}
              </td>
              {comparedCareers.map((c, i) => (
                <td key={c.id} className={`p-4 ${i === comparedCareers.length - 1 ? 'rounded-br-3xl' : ''}`}>
                  <button
                    onClick={() => {
                      onSelectCareer(c.id);
                      onSelectScreen('career-detail');
                    }}
                    className="w-full py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs shadow transition-all"
                  >
                    {isHi ? 'विवरण देखें' : 'View Details'}
                  </button>
                </td>
              ))}
            </tr>

          </tbody>
        </table>
      </div>

    </div>
  );
};
