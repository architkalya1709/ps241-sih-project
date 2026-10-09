import React from 'react';
import type { ScreenId, Language } from '../types';
import { Globe, Shield, Sparkles, PhoneCall, Briefcase, FileText, UserCheck } from 'lucide-react';

interface Props {
  currentScreen: ScreenId;
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
  onToggleLanguage: () => void;
  studentName?: string;
}

export const Header: React.FC<Props> = ({
  currentScreen,
  onSelectScreen,
  language,
  onToggleLanguage,
  studentName = 'Rahul Verma'
}) => {
  const isHi = language === 'hi';

  return (
    <header className="bg-white text-neutral-950 border-b border-neutral-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Logo & Tagline */}
          <div className="flex items-center justify-between">
            <div 
              onClick={() => onSelectScreen('landing')} 
              className="cursor-pointer group flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                CS
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950">
                    CAREERSAATHI
                  </h1>
                  <span className="bg-neutral-100 text-neutral-800 text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border border-neutral-300">
                    NCVET Aligned
                  </span>
                </div>
                <p className="text-xs text-neutral-600 font-medium tracking-wide">
                  "Sahi Career, Saath Parivaar Ka."
                </p>
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-neutral-100 text-neutral-900 border border-neutral-300"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिन्दी' : 'English'}</span>
            </button>
          </div>

          {/* Quick Navigation & Actions */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            
            {/* Jobs & Opportunities */}
            <button
              onClick={() => onSelectScreen('jobs')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                currentScreen === 'jobs'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>{isHi ? 'नौकरियां' : 'Jobs'}</span>
            </button>

            {/* Resume Builder */}
            <button
              onClick={() => onSelectScreen('resume-builder')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                currentScreen === 'resume-builder'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>{isHi ? 'रिज्यूमे' : 'Resume Builder'}</span>
            </button>

            {/* AI Counsellor Button */}
            <button
              onClick={() => onSelectScreen('ai-counsellor')}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all flex items-center gap-1.5 ${
                currentScreen === 'ai-counsellor'
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isHi ? 'एआई काउंसलर' : 'AI Counsellor'}</span>
            </button>

            {/* Talk to Human Expert */}
            <button
              onClick={() => onSelectScreen('human-counsellor')}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-neutral-100 text-neutral-800 border border-neutral-300 hover:bg-neutral-200 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>{isHi ? 'मानव विशेषज्ञ' : 'Human Expert'}</span>
            </button>

            {/* Language Switcher */}
            <button
              onClick={onToggleLanguage}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold bg-white text-neutral-950 border border-neutral-300 hover:bg-neutral-100 transition-all"
              title="Toggle English / Hindi"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'हिन्दी (Hindi)' : 'English'}</span>
            </button>

            {/* Login / Auth */}
            <button
              onClick={() => onSelectScreen('auth')}
              className="px-3 py-1.5 rounded-xl font-bold bg-black text-white hover:bg-neutral-800 transition-all flex items-center gap-1.5 shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{studentName || (isHi ? 'साइन इन' : 'Sign In')}</span>
            </button>

            {/* Admin Switch */}
            <button
              onClick={() => onSelectScreen('admin-dashboard')}
              className={`p-2 rounded-xl transition-all ${
                currentScreen === 'admin-dashboard'
                  ? 'bg-black text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-300'
              }`}
              title="Admin Portal"
            >
              <Shield className="w-4 h-4" />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
