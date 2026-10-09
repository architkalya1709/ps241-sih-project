import React from 'react';
import type { ScreenId, Language } from '../types';
import {
  Home,
  Globe,
  UserCheck,
  HeartHandshake,
  LayoutDashboard,
  Bot,
  Sparkles,
  FileText,
  GitMerge,
  ArrowRightLeft,
  Headphones,
  ShieldCheck,
  Briefcase,
  Lock
} from 'lucide-react';

interface Props {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const ScreenSwitcherBar: React.FC<Props> = ({
  currentScreen,
  onSelectScreen,
  language
}) => {
  const screens: { id: ScreenId; titleEn: string; titleHi: string; icon: React.FC<{ className?: string }> }[] = [
    { id: 'landing', titleEn: 'Home', titleHi: 'होम', icon: Home },
    { id: 'language', titleEn: 'Language', titleHi: 'भाषा', icon: Globe },
    { id: 'student-onboarding', titleEn: 'Student Form', titleHi: 'छात्र फॉर्म', icon: UserCheck },
    { id: 'parent-onboarding', titleEn: 'Parent Form', titleHi: 'अभिभावक फॉर्म', icon: HeartHandshake },
    { id: 'family-dashboard', titleEn: 'Family Dash', titleHi: 'डैशबोर्ड', icon: LayoutDashboard },
    { id: 'jobs', titleEn: 'Jobs', titleHi: 'नौकरियां', icon: Briefcase },
    { id: 'resume-builder', titleEn: 'Resume', titleHi: 'रिज्यूमे', icon: FileText },
    { id: 'ai-counsellor', titleEn: 'AI Counsellor', titleHi: 'एआई काउंसलर', icon: Bot },
    { id: 'career-recommendations', titleEn: 'Matches', titleHi: 'सिफारिशें', icon: Sparkles },
    { id: 'career-detail', titleEn: 'Detail', titleHi: 'विवरण', icon: FileText },
    { id: 'skill-roadmap', titleEn: 'Roadmap', titleHi: 'रोडमैप', icon: GitMerge },
    { id: 'career-comparison', titleEn: 'Compare', titleHi: 'तुलना', icon: ArrowRightLeft },
    { id: 'human-counsellor', titleEn: 'Human Expert', titleHi: 'मानव काउंसलर', icon: Headphones },
    { id: 'auth', titleEn: 'Sign In', titleHi: 'साइन इन', icon: Lock },
    { id: 'admin-dashboard', titleEn: 'Admin', titleHi: 'एडमिन', icon: ShieldCheck }
  ];

  return (
    <div className="bg-white text-neutral-950 border-b border-neutral-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-2 py-1.5 flex items-center justify-between gap-2 overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1 shrink-0 text-xs font-black text-neutral-950 border-r border-neutral-200 pr-3">
          <span className="bg-black text-white px-2 py-0.5 rounded font-black text-[10px]">15 DEMO SCREENS</span>
        </div>
        <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap custom-scrollbar py-0.5">
          {screens.map((s, idx) => {
            const IconComponent = s.icon;
            const isActive = currentScreen === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScreen(s.id)}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-black text-white shadow-sm font-black'
                    : 'text-neutral-700 hover:text-black hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                  isActive ? 'bg-white text-black font-bold' : 'bg-neutral-200 text-neutral-800'
                }`}>
                  {idx + 1}
                </span>
                <IconComponent className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? s.titleHi : s.titleEn}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
