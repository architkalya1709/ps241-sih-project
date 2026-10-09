import React from 'react';
import type { ScreenId, Language } from '../types';
import { ShieldCheck, PhoneCall, Award } from 'lucide-react';

interface Props {
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const Footer: React.FC<Props> = ({ onSelectScreen, language }) => {
  const isHi = language === 'hi';

  return (
    <footer className="bg-white text-neutral-800 border-t border-neutral-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center font-black text-lg">
                CS
              </div>
              <h2 className="text-xl font-black text-neutral-950 tracking-tight">CAREERSAATHI</h2>
            </div>
            <p className="text-neutral-950 font-bold text-sm">
              "Sahi Career, Saath Parivaar Ka."
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium">
              {isHi
                ? 'भारत के वोकेशनल कौशल पारितंत्र के लिए एआई-संचालित परिवार करियर परामर्श प्लेटफॉर्म। छात्र और माता-पिता को एक साथ लाकर विश्वसनीय निर्णय।'
                : 'AI-powered family career counselling platform designed for India’s vocational education ecosystem. Bringing students and parents together for confident career decisions.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-800 font-bold">
              <ShieldCheck className="w-4 h-4 text-black" />
              <span>Skill India & NCVET Compatible</span>
            </div>
          </div>

          {/* Col 2: Core Platform Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider">
              {isHi ? 'मुख्य नेविगेशन' : 'Platform Navigation'}
            </h3>
            <ul className="space-y-2 text-xs text-neutral-600 font-semibold">
              <li>
                <button onClick={() => onSelectScreen('landing')} className="hover:text-black transition-colors">
                  {isHi ? 'होमपेज और 5 स्तंभ' : 'Home & 5 Pillars'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('jobs')} className="hover:text-black transition-colors">
                  {isHi ? 'नौकरियां और इंटर्नशिप' : 'Jobs & Apprenticeships'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('resume-builder')} className="hover:text-black transition-colors">
                  {isHi ? 'रिज्यूमे बिल्डर' : 'Resume Builder'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('student-onboarding')} className="hover:text-black transition-colors">
                  {isHi ? 'छात्र ऑनबोर्डिंग' : 'Student Profile Form'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('parent-onboarding')} className="hover:text-black transition-colors">
                  {isHi ? 'अभिभावक चिंता चेकलिस्ट' : 'Parent Concerns Form'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Career Tools */}
          <div className="space-y-3">
            <h3 className="text-xs font-black text-neutral-950 uppercase tracking-wider">
              {isHi ? 'करियर टूल्स' : 'Career Tools'}
            </h3>
            <ul className="space-y-2 text-xs text-neutral-600 font-semibold">
              <li>
                <button onClick={() => onSelectScreen('family-dashboard')} className="hover:text-black transition-colors">
                  {isHi ? 'फैमिली डैशबोर्ड' : 'Family Career Dashboard'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('career-recommendations')} className="hover:text-black transition-colors">
                  {isHi ? 'सत्यापित करियर सिफारिशें' : 'Verified Recommendations'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('skill-roadmap')} className="hover:text-black transition-colors">
                  {isHi ? 'स्किल एवं 5-वर्षीय रोडमैप' : '5-Year Skill Roadmap'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('career-comparison')} className="hover:text-black transition-colors">
                  {isHi ? 'करियर तुलना टूल' : 'Trade Comparison Tool'}
                </button>
              </li>
              <li>
                <button onClick={() => onSelectScreen('human-counsellor')} className="hover:text-black transition-colors">
                  {isHi ? 'मानव परामर्शदाता' : 'Human Expert Session'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Helpline & Support */}
          <div className="space-y-3 bg-neutral-50 p-5 rounded-2xl border border-neutral-200">
            <h3 className="text-xs font-bold text-neutral-950 uppercase tracking-wider flex items-center gap-1.5">
              <PhoneCall className="w-3.5 h-3.5 text-black" />
              <span>{isHi ? 'राष्ट्रीय करियर हेल्पलाइन' : 'National Career Helpline'}</span>
            </h3>
            <div className="text-lg font-black text-neutral-950 tracking-tight">
              1800-111-SAATHI
            </div>
            <p className="text-[11px] text-neutral-600 font-medium">
              {isHi ? 'टोल-फ्री परिवार परामर्श (सुबह 8 बजे से रात 9 बजे तक)' : 'Toll-free counselling for families (8 AM - 9 PM)'}
            </p>
            <div className="pt-2 border-t border-neutral-200 text-[11px] text-neutral-600 space-y-1 font-medium">
              <div className="flex items-center gap-1">
                <Award className="w-3 h-3 text-black" />
                <span>PMKVY 4.0 & NAPS Aligned</span>
              </div>
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-black" />
                <span>National Credit Framework (NCrF)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-600 gap-3">
          <p>© 2026 CAREERSAATHI. Designed for India's Vocational Ecosystem.</p>
          <div className="flex items-center gap-4 text-neutral-600">
            <span className="bg-neutral-100 border border-neutral-300 px-3 py-1 rounded-xl text-[11px] font-bold text-neutral-900">
              White & Black Edition • Production Ready
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
