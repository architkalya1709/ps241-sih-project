import React, { useEffect, useState } from 'react';
import type { ScreenId, Language, RoadmapStep } from '../types';
import { fetchRoadmap } from '../api/client';
import { SOLAR_ROADMAP_STEPS, CAREERS_LIST } from '../data/mockData';
import {
  GitMerge,
  CheckCircle2,
  Award,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

interface Props {
  selectedCareerId?: string;
  onSelectScreen: (screen: ScreenId) => void;
  onSelectCareer?: (careerId: string) => void;
  language: Language;
}

export const SkillRoadmapScreen: React.FC<Props> = ({
  selectedCareerId = 'solar-tech',
  onSelectScreen,
  onSelectCareer,
  language
}) => {
  const isHi = language === 'hi';
  const [selectedTrade, setSelectedTrade] = useState<string>(selectedCareerId);
  const [roadmapSteps, setRoadmapSteps] = useState<RoadmapStep[]>(SOLAR_ROADMAP_STEPS);

  useEffect(() => {
    if (selectedCareerId) {
      setSelectedTrade(selectedCareerId);
    }
  }, [selectedCareerId]);

  useEffect(() => {
    let isMounted = true;
    fetchRoadmap(selectedTrade)
      .then((data) => {
        if (isMounted && data && data.steps && data.steps.length > 0) {
          setRoadmapSteps(data.steps);
        }
      })
      .catch((err) => {
        console.warn(`Roadmap API error for ${selectedTrade}:`, err);
      });

    return () => {
      isMounted = false;
    };
  }, [selectedTrade]);

  const handleSelectTrade = (id: string) => {
    setSelectedTrade(id);
    if (onSelectCareer) {
      onSelectCareer(id);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 text-neutral-950 shadow-sm border border-neutral-200 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-950 text-xs font-bold border border-neutral-300">
              <GitMerge className="w-3.5 h-3.5 text-neutral-950" />
              <span>{isHi ? '5-वर्षीय चरणबद्ध प्रगति नक्शा' : '5-Year Step-by-Step Pathway'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
              {isHi ? 'स्किल एवं करियर रोडमैप' : 'Skill & Career Roadmap'}
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600">
              {isHi
                ? 'रुचि से लेकर फाउंडेशन कौशल, आईटीआई प्रशिक्षण, प्रमाणन, प्रारंभिक नौकरी और उद्यमशीलता तक'
                : 'From initial interest & basic skills to NCVET certification, entry job & business ownership'}
            </p>
          </div>

          {/* Trade Selector Switcher */}
          <div className="bg-neutral-50 p-1.5 rounded-2xl border border-neutral-200 flex flex-wrap gap-1">
            {CAREERS_LIST.slice(0, 3).map((c) => (
              <button
                key={c.id}
                onClick={() => handleSelectTrade(c.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedTrade === c.id
                    ? 'bg-black text-white shadow-sm'
                    : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                }`}
              >
                {isHi ? c.titleHi.split(' ')[0] : c.titleEn.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Horizontal Overview Flow */}
        <div className="pt-4 border-t border-neutral-200 flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 text-[11px] font-bold text-neutral-600">
          <span className="bg-black text-white px-2.5 py-1 rounded-full shrink-0">Interest</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="bg-neutral-100 text-neutral-900 px-2.5 py-1 rounded-full border border-neutral-300 shrink-0">Foundation Skills</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="bg-neutral-100 text-neutral-900 px-2.5 py-1 rounded-full border border-neutral-300 shrink-0">Vocational Training</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="bg-neutral-100 text-neutral-900 px-2.5 py-1 rounded-full border border-neutral-300 shrink-0">NCVET Certification</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="bg-black text-white px-2.5 py-1 rounded-full shrink-0">Entry-Level Job</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
          <span className="bg-neutral-100 text-neutral-900 px-2.5 py-1 rounded-full border border-neutral-300 shrink-0">Advanced B.Voc & Growth</span>
        </div>
      </div>

      {/* TIMELINE STEPS LIST */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-1 before:bg-neutral-200">
        {roadmapSteps.map((step, idx) => {
          const isCompleted = step.status === 'completed';
          const isInProgress = step.status === 'in-progress';

          return (
            <div key={idx} className="relative flex items-start gap-4 sm:gap-6 group">
              
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-black text-sm sm:text-base shrink-0 shadow-lg relative z-10 transition-transform group-hover:scale-105 ${
                isCompleted
                  ? 'bg-neutral-950 text-white shadow-neutral-900/30'
                  : isInProgress
                  ? 'bg-black text-white ring-4 ring-neutral-300'
                  : 'bg-white text-neutral-700 border-2 border-neutral-300 shadow-sm'
              }`}>
                {isCompleted ? (
                  <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                ) : (
                  <span>0{idx + 1}</span>
                )}
              </div>

              <div className="flex-1 bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4 hover:border-neutral-950 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-neutral-950 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-300">
                      {step.phase} • {isHi ? step.durationHi : step.durationEn}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-neutral-950 mt-1">
                      {isHi ? step.titleHi : step.titleEn}
                    </h3>
                  </div>

                  {step.status === 'completed' && (
                    <span className="bg-neutral-950 text-white text-xs font-extrabold px-3 py-1 rounded-full self-start sm:self-auto">
                      ✓ Completed
                    </span>
                  )}

                  {step.status === 'in-progress' && (
                    <span className="bg-neutral-200 text-neutral-950 border border-neutral-400 text-xs font-extrabold px-3 py-1 rounded-full self-start sm:self-auto">
                      ⚡ Current Step
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-medium">
                  {isHi ? step.subtitleHi : step.subtitleEn}
                </p>

                <div className="space-y-1.5 text-xs">
                  <span className="font-bold text-neutral-500 uppercase text-[10px]">{isHi ? 'अर्जित कौशल (Skills Acquired):' : 'Key Skills Acquired:'}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(isHi ? step.skillsAcquiredHi : step.skillsAcquiredEn).map((sk) => (
                      <span key={sk} className="bg-neutral-100 text-neutral-800 border border-neutral-200 px-2.5 py-1 rounded-lg text-xs font-semibold">
                        • {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
                  {step.certifyingBodyEn && (
                    <div className="flex items-center gap-1.5 text-neutral-950 bg-neutral-100 px-3 py-1.5 rounded-xl font-bold border border-neutral-300">
                      <Award className="w-4 h-4 text-neutral-950" />
                      <span>{isHi ? step.certifyingBodyHi : step.certifyingBodyEn}</span>
                    </div>
                  )}

                  {step.salaryMilestoneEn && (
                    <div className="flex items-center gap-1.5 text-white bg-neutral-950 px-3 py-1.5 rounded-xl font-extrabold shadow-sm">
                      <TrendingUp className="w-4 h-4 text-white" />
                      <span>{isHi ? step.salaryMilestoneHi : step.salaryMilestoneEn}</span>
                    </div>
                  )}
                </div>

              </div>

            </div>
          );
        })}
      </div>

      <div className="bg-white text-neutral-950 rounded-3xl p-6 text-center space-y-4 shadow-sm border border-neutral-200">
        <h3 className="text-lg font-black text-neutral-950">
          {isHi ? 'क्या आप इस 5-वर्षीय रोडमैप के लिए तैयार हैं?' : 'Ready to start your 5-year vocational journey?'}
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => onSelectScreen('ai-counsellor')}
            className="px-6 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs shadow-md transition-all"
          >
            {isHi ? 'एआई काउंसलर से सलाह लें' : 'Consult AI Counsellor'}
          </button>

          <button
            onClick={() => onSelectScreen('human-counsellor')}
            className="px-6 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-extrabold text-xs border border-neutral-300 shadow-sm transition-all"
          >
            {isHi ? 'मानव काउंसलर अपॉइंटमेंट लें' : 'Schedule Human Expert Call'}
          </button>
        </div>
      </div>

    </div>
  );
};
