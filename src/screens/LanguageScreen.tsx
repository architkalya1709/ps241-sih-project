import React from 'react';
import type { Language } from '../types';
import { Globe, Check, ArrowRight, Languages } from 'lucide-react';

interface Props {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onContinue: () => void;
}

export const LanguageScreen: React.FC<Props> = ({
  language,
  onSelectLanguage,
  onContinue
}) => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-neutral-200 text-center space-y-8">
        
        {/* Header Icon */}
        <div className="w-16 h-16 rounded-2xl bg-neutral-950 text-white flex items-center justify-center mx-auto shadow-inner">
          <Languages className="w-8 h-8" />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
            Choose your language / अपनी भाषा चुनें
          </h1>
          <p className="text-sm text-neutral-600">
            Select your preferred language for counselling & career guidance
          </p>
        </div>

        {/* Language Options Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          <button
            onClick={() => onSelectLanguage('en')}
            className={`p-6 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between h-36 ${
              language === 'en'
                ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider ${language === 'en' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                English
              </span>
              {language === 'en' && (
                <div className="w-6 h-6 rounded-full bg-white text-neutral-950 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
            <div>
              <h3 className={`text-2xl font-black ${language === 'en' ? 'text-white' : 'text-neutral-950'}`}>English</h3>
              <p className={`text-xs mt-1 ${language === 'en' ? 'text-neutral-300' : 'text-neutral-500'}`}>Default Interface & Technical terms</p>
            </div>
          </button>

          <button
            onClick={() => onSelectLanguage('hi')}
            className={`p-6 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between h-36 ${
              language === 'hi'
                ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs font-bold uppercase tracking-wider ${language === 'hi' ? 'text-neutral-300' : 'text-neutral-500'}`}>
                हिंदी
              </span>
              {language === 'hi' && (
                <div className="w-6 h-6 rounded-full bg-white text-neutral-950 flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
            <div>
              <h3 className={`text-2xl font-black font-serif ${language === 'hi' ? 'text-white' : 'text-neutral-950'}`}>हिन्दी</h3>
              <p className={`text-xs mt-1 ${language === 'hi' ? 'text-neutral-300' : 'text-neutral-500'}`}>सरल हिंदी भाषा और वॉइस गाइडेंस</p>
            </div>
          </button>

        </div>

        {/* Future Indian Languages Extensibility Notice */}
        <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 text-xs text-neutral-600 space-y-2">
          <div className="flex items-center justify-center gap-1.5 font-bold text-neutral-800">
            <Globe className="w-4 h-4 text-neutral-950" />
            <span>More Indian Languages Coming Soon / आगामी भारतीय भाषाएं:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-medium text-neutral-600">
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">বাংলা (Bengali)</span>
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">मराठी (Marathi)</span>
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">தமிழ் (Tamil)</span>
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">తెలుగు (Telugu)</span>
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">ગુજરાતી (Gujarati)</span>
            <span className="bg-white px-2 py-1 rounded border border-neutral-200">ಕನ್ನಡ (Kannada)</span>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={onContinue}
          className="w-full py-4 rounded-xl bg-neutral-950 text-white font-extrabold text-base shadow-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
        >
          <span>{language === 'hi' ? 'जारी रखें' : 'Continue'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>

      </div>
    </div>
  );
};
