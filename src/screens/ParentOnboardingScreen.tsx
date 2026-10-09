import React, { useState } from 'react';
import type { ParentProfile, Language } from '../types';
import { saveParentProfile } from '../api/client';
import { PARENT_CONCERNS_LIST } from '../data/mockData';
import { HeartHandshake, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

interface Props {
  parentProfile: ParentProfile;
  onUpdateParentProfile: (profile: Partial<ParentProfile>) => void;
  onComplete: () => void;
  language: Language;
}

export const ParentOnboardingScreen: React.FC<Props> = ({
  parentProfile,
  onUpdateParentProfile,
  onComplete,
  language
}) => {
  const isHi = language === 'hi';
  const [customInput, setCustomInput] = useState<string>(
    parentProfile.customQuestion || ''
  );

  const toggleConcern = (id: string) => {
    const current = parentProfile.selectedConcerns || [];
    const updated = current.includes(id)
      ? current.filter((c) => c !== id)
      : [...current, id];
    onUpdateParentProfile({ selectedConcerns: updated });
  };

  const handleSaveAndContinue = async () => {
    const updated = { ...parentProfile, customQuestion: customInput };
    onUpdateParentProfile({ customQuestion: customInput });
    await saveParentProfile(updated);
    onComplete();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200 space-y-8">
        
        {/* Header Title */}
        <div className="space-y-3 border-b border-neutral-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300 text-xs font-bold">
            <HeartHandshake className="w-4 h-4 text-neutral-950" />
            <span>{isHi ? 'अभिभावक मार्गदर्शन मॉड्यूल' : 'Parent Reassurance Module'}</span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl font-black text-neutral-950 tracking-tight">
            {isHi
              ? 'अपने बच्चे के करियर के बारे में आपकी मुख्य चिंताएं क्या हैं?'
              : 'What are your main concerns about your child\'s career?'}
          </h1>
          
          <p className="text-sm text-neutral-600">
            {isHi
              ? 'कृपया उन सभी कार्डों को चुनें जिन्हें आप समझना चाहते हैं। करियरसाथी माता-पिता को पूर्ण डेटा के साथ संतुष्ट करता है।'
              : 'Select all key concerns you have as a parent. CareerSaathi addresses each hesitation with verified NCVET data.'}
          </p>
        </div>

        {/* 9 Selectable Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PARENT_CONCERNS_LIST.map((item) => {
            const isSelected = (parentProfile.selectedConcerns || []).includes(item.id);
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => toggleConcern(item.id)}
                className={`p-5 rounded-2xl border-2 text-left transition-all relative flex flex-col justify-between space-y-3 ${
                  isSelected
                    ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                    : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{item.icon}</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs transition-all ${
                    isSelected ? 'bg-white text-neutral-950' : 'border border-neutral-300 text-transparent'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className={`font-extrabold text-sm ${isSelected ? 'text-white' : 'text-neutral-950'}`}>
                    {isHi ? item.titleHi : item.titleEn}
                  </h3>
                  <p className={`text-xs mt-1 leading-snug ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                    {isHi ? item.descHi : item.descEn}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Ask Custom Question Input */}
        <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200 space-y-3">
          <div className="flex items-center gap-2 font-extrabold text-sm text-neutral-950">
            <MessageSquare className="w-4 h-4 text-neutral-950" />
            <span>{isHi ? 'अपना खुद का प्रश्न पूछें (Ask your own question)' : 'Ask your own question'}</span>
          </div>

          <textarea
            rows={3}
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder={
              isHi
                ? 'उदाहरण: "मेरा बेटा इलेक्ट्रीशियन बनना चाहता है। क्या इसमें भविष्य में अच्छी कमाई और सुरक्षा है?"'
                : 'Example: "My child wants to become an electrician. Is this a good career for permanent income?"'
            }
            className="w-full p-4 rounded-xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-xs sm:text-sm outline-none bg-white text-neutral-950 font-medium"
          />

          <div className="flex items-center gap-2 text-[11px] text-neutral-600">
            <Sparkles className="w-3.5 h-3.5 text-neutral-950" />
            <span>
              {isHi
                ? 'करियरसाथी एआई आपके इस विशेष प्रश्न का उत्तर परिवार परामर्श सत्र में देगा।'
                : 'CareerSaathi AI will answer your custom query during the family AI counselling session.'}
            </span>
          </div>
        </div>

        {/* Selected Concerns Summary Preview */}
        {(parentProfile.selectedConcerns || []).length > 0 && (
          <div className="bg-neutral-950 text-white p-5 rounded-2xl space-y-2 border border-neutral-800">
            <div className="flex items-center gap-2 text-xs font-bold text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-neutral-300" />
              <span>
                {isHi
                  ? `चुनी गई अभिभावक चिंताएं (${parentProfile.selectedConcerns.length}):`
                  : `Selected Parent Concerns (${parentProfile.selectedConcerns.length}):`}
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {parentProfile.selectedConcerns.map((cid) => {
                const item = PARENT_CONCERNS_LIST.find((c) => c.id === cid);
                return (
                  <span key={cid} className="bg-neutral-900 text-neutral-100 px-3 py-1 rounded-full border border-neutral-700">
                    {item?.icon} {isHi ? item?.titleHi : item?.titleEn}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-end">
          <button
            type="button"
            onClick={handleSaveAndContinue}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-black text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            <span>{isHi ? 'चिंताएं सहेजें एवं फैमिली डैशबोर्ड देखें' : 'Save Concerns & Open Family Dashboard'}</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>
        </div>

      </div>
    </div>
  );
};
