import React, { useState } from 'react';
import type { StudentProfile, Language } from '../types';
import { saveStudentProfile } from '../api/client';
import { User, GraduationCap, Wrench, Compass, ArrowRight, ArrowLeft, CheckCircle2, AlertCircle } from 'lucide-react';

interface Props {
  studentProfile: StudentProfile;
  onUpdateProfile: (profile: Partial<StudentProfile>) => void;
  onComplete: () => void;
  language: Language;
}

export const StudentOnboardingScreen: React.FC<Props> = ({
  studentProfile,
  onUpdateProfile,
  onComplete,
  language
}) => {
  const isHi = language === 'hi';
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>('');

  const totalSteps = 4;

  const handleNext = async () => {
    if (step === 1) {
      if (!studentProfile.name || !studentProfile.name.trim()) {
        setError(isHi ? 'कृपया अपना पूरा नाम दर्ज करें' : 'Please enter your full name');
        return;
      }
      if (!studentProfile.district || !studentProfile.district.trim()) {
        setError(isHi ? 'कृपया अपना जिला दर्ज करें' : 'Please enter your district');
        return;
      }
    }
    setError('');

    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      await saveStudentProfile(studentProfile);
      onComplete();
    }
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleInterest = (item: string) => {
    const current = studentProfile.interests || [];
    const updated = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];
    onUpdateProfile({ interests: updated });
  };

  const toggleSkill = (item: string) => {
    const current = studentProfile.skills || [];
    const updated = current.includes(item)
      ? current.filter((i) => i !== item)
      : [...current, item];
    onUpdateProfile({ skills: updated });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-200 space-y-8">
        
        {/* Step Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-neutral-500">
            <span className="text-neutral-950 uppercase tracking-wider font-extrabold">
              {isHi ? `चरण ${step} का ${totalSteps}` : `Step ${step} of ${totalSteps}`}
            </span>
            <span>{Math.round((step / totalSteps) * 100)}% {isHi ? 'पूर्ण' : 'Completed'}</span>
          </div>
          <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
            <div
              className="h-full bg-neutral-950 transition-all duration-300 rounded-full"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {error && (
          <div className="bg-neutral-100 border border-neutral-400 text-neutral-900 px-4 py-3 rounded-xl text-xs font-bold flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-neutral-950 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm uppercase">
                <User className="w-4 h-4" />
                <span>{isHi ? 'व्यक्तिगत विवरण' : 'Personal Details'}</span>
              </div>
              <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
                {isHi ? 'आइए अपने बारे में बताएं' : 'Tell us about yourself'}
              </h2>
              <p className="text-xs text-neutral-500">
                {isHi ? 'यह जानकारी आपकी प्राथमिकताओं को समझने में मदद करती है' : 'Non-intimidating basic student profile details'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'पूरा नाम' : 'Full Name'}</label>
                <input
                  type="text"
                  value={studentProfile.name}
                  onChange={(e) => onUpdateProfile({ name: e.target.value })}
                  placeholder="e.g. Rahul Verma"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-sm font-semibold outline-none bg-white text-neutral-950"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'आयु' : 'Age'}</label>
                <input
                  type="number"
                  value={studentProfile.age}
                  onChange={(e) => onUpdateProfile({ age: e.target.value })}
                  placeholder="e.g. 17"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-sm font-semibold outline-none bg-white text-neutral-950"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'राज्य' : 'State'}</label>
                <select
                  value={studentProfile.state}
                  onChange={(e) => onUpdateProfile({ state: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-sm font-semibold outline-none bg-white text-neutral-950"
                >
                  <option value="Bihar">Bihar</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'जिला / शहर' : 'District / City'}</label>
                <input
                  type="text"
                  value={studentProfile.district}
                  onChange={(e) => onUpdateProfile({ district: e.target.value })}
                  placeholder="e.g. Patna / Muzaffarpur"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950 text-sm font-semibold outline-none bg-white text-neutral-950"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'क्षेत्र का प्रकार' : 'Area Category'}</label>
              <div className="grid grid-cols-3 gap-3">
                {(['Rural', 'Semi-Urban', 'Urban'] as const).map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => onUpdateProfile({ areaType: type })}
                    className={`py-3 px-2 rounded-xl text-xs font-extrabold border transition-all text-center ${
                      studentProfile.areaType === type
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                    }`}
                  >
                    {type === 'Rural' ? (isHi ? 'ग्रामीण (Rural)' : 'Rural') : type === 'Semi-Urban' ? (isHi ? 'अर्ध-शहरी' : 'Semi-Urban') : (isHi ? 'शहरी' : 'Urban')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm uppercase">
                <GraduationCap className="w-4 h-4" />
                <span>{isHi ? 'शिक्षा एवं पृष्ठभूमि' : 'Education Background'}</span>
              </div>
              <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
                {isHi ? 'आपकी वर्तमान शिक्षा का स्तर' : 'Your Educational Level'}
              </h2>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'सर्वोच्च शिक्षा' : 'Highest Qualification'}</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Class 8th Passed',
                  'Class 10th Passed / Pursuing',
                  'Class 12th Passed (Science)',
                  'Class 12th Passed (Arts / Commerce)',
                  'ITI / Vocational Certificate',
                  'Diploma Pursuing'
                ].map((qual) => (
                  <button
                    key={qual}
                    type="button"
                    onClick={() => onUpdateProfile({ educationLevel: qual })}
                    className={`p-4 rounded-xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                      studentProfile.educationLevel === qual
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                    }`}
                  >
                    <span>{qual}</span>
                    {studentProfile.educationLevel === qual && (
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'अकादमिक प्रदर्शन (%)' : 'Academic Performance Range'}</label>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {['Below 50%', '50% - 65%', '65% - 80%', 'Above 80%'].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => onUpdateProfile({ academicPerformance: range })}
                    className={`py-3 rounded-xl border font-bold transition-all ${
                      studentProfile.academicPerformance === range
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm uppercase">
                <Wrench className="w-4 h-4" />
                <span>{isHi ? 'रुचियां और व्यावहारिक कौशल' : 'Interests & Practical Skills'}</span>
              </div>
              <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
                {isHi ? 'आपको किस काम में रुचि है?' : 'What practical work excites you?'}
              </h2>
              <p className="text-xs text-neutral-500">
                {isHi ? 'आप एक से अधिक विकल्प चुन सकते हैं' : 'Select all that apply'}
              </p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'तकनीकी रुचियां (Interests)' : 'Technical Interests'}</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { name: 'Solar & Green Energy', icon: '☀️' },
                  { name: 'Electrical Wiring & Power', icon: '⚡' },
                  { name: 'Electronics & Repair', icon: '📱' },
                  { name: 'EV & Motor Mechanics', icon: '🚗' },
                  { name: 'CNC Precision Machines', icon: '⚙️' },
                  { name: 'Healthcare & Patient Care', icon: '🏥' }
                ].map((item) => {
                  const selected = (studentProfile.interests || []).includes(item.name);
                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => toggleInterest(item.name)}
                      className={`p-3.5 rounded-xl border text-left text-xs font-bold transition-all flex items-center gap-2.5 ${
                        selected
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                          : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                      }`}
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'विद्यमान प्राथमिक कौशल (Existing Skills)' : 'Existing Practical Skills'}</label>
              <div className="flex flex-wrap gap-2">
                {[
                  'Basic Electrical Wiring',
                  'Soldering',
                  'Computer Operation',
                  'Tool Handling',
                  'Component Assembly',
                  'First Aid',
                  'Blueprint Reading'
                ].map((sk) => {
                  const selected = (studentProfile.skills || []).includes(sk);
                  return (
                    <button
                      key={sk}
                      type="button"
                      onClick={() => toggleSkill(sk)}
                      className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all ${
                        selected
                          ? 'bg-neutral-950 text-white border-neutral-950'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400'
                      }`}
                    >
                      {selected ? '✓ ' : '+ '}{sk}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-neutral-950 font-extrabold text-sm uppercase">
                <Compass className="w-4 h-4" />
                <span>{isHi ? 'कार्य प्राथमिकताएं' : 'Work Preferences'}</span>
              </div>
              <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
                {isHi ? 'आप कहाँ और कैसा काम करना चाहते हैं?' : 'Preferred Work Environment & Location'}
              </h2>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'कार्य का प्रकार' : 'Preferred Work Type'}</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'Hands-on Practical', title: 'Hands-on Practical Field Work', desc: 'Working on sites, installations & machinery' },
                  { id: 'Hybrid Technical', title: 'Hybrid Technical', desc: 'Mix of lab testing, workshop & desk analysis' },
                  { id: 'Service & Maintenance', title: 'Service & Maintenance', desc: 'Customer site servicing & diagnostics' },
                  { id: 'Manufacturing Plant', title: 'Industrial Plant Floor', desc: 'Structured factory & automated shopfloor' }
                ].map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => onUpdateProfile({ preferredWorkType: type.id })}
                    className={`p-4 rounded-xl border text-left space-y-1 transition-all ${
                      studentProfile.preferredWorkType === type.id
                        ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                        : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{type.title}</div>
                    <div className={`text-[11px] ${studentProfile.preferredWorkType === type.id ? 'text-neutral-300' : 'text-neutral-500'}`}>{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'पसंदीदा कार्य स्थान' : 'Preferred Job Location'}</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'Home District', label: 'Home District / Nearby' },
                  { id: 'Within State', label: 'Within State Capital' },
                  { id: 'Anywhere in India', label: 'Anywhere in India' }
                ].map((loc) => (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => onUpdateProfile({ preferredWorkLocation: loc.id })}
                    className={`p-3 rounded-xl border text-xs font-bold text-center transition-all ${
                      studentProfile.preferredWorkLocation === loc.id
                        ? 'border-neutral-950 bg-neutral-950 text-white'
                        : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                    }`}
                  >
                    {loc.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Wizard Controls */}
        <div className="pt-4 flex items-center justify-between border-t border-neutral-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={handlePrev}
              className="px-5 py-2.5 rounded-xl border border-neutral-300 text-neutral-800 font-bold text-xs flex items-center gap-1.5 hover:bg-neutral-100"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isHi ? 'पीछे' : 'Back'}</span>
            </button>
          ) : <div />}

          <button
            type="button"
            onClick={handleNext}
            className="px-8 py-3 rounded-xl bg-neutral-950 text-white font-extrabold text-xs shadow-md hover:bg-neutral-800 transition-all flex items-center gap-2"
          >
            <span>{step === totalSteps ? (isHi ? 'प्रोफाइल सहेजें और आगे बढ़ें' : 'Complete Profile & Continue') : (isHi ? 'अगला कदम' : 'Next Step')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
