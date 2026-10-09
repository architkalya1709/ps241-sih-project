import React, { useState } from 'react';
import type { ScreenId, Language } from '../types';
import { MOCK_JOBS } from '../data/mockData';
import {
  HeartHandshake,
  Compass,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
  PhoneCall,
  GitMerge,
  Star,
  Search,
  MapPin,
  Briefcase
} from 'lucide-react';

interface Props {
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const LandingScreen: React.FC<Props> = ({ onSelectScreen, language }) => {
  const isHi = language === 'hi';
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSelectScreen('jobs');
  };

  return (
    <div className="space-y-16 pb-16 bg-white text-neutral-950 font-sans">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-white text-neutral-950 pt-12 pb-20 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-950 text-xs font-bold">
              <Award className="w-4 h-4 text-black" />
              <span>{isHi ? 'राष्ट्रीय कौशल योग्यता ढांचा (NCVET & NSDC संरेखित)' : 'National Vocational Education Framework (NCVET & NSDC Aligned)'}</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-4xl sm:text-7xl font-black tracking-tight text-neutral-950 uppercase">
                CAREERSAATHI
              </h1>
              <p className="text-xl sm:text-3xl font-extrabold text-neutral-700 tracking-wide font-serif italic">
                "Sahi Career, Saath Parivaar Ka."
              </p>
            </div>

            <p className="text-sm sm:text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed font-normal">
              {isHi
                ? 'एआई-संचालित वोकेशनल करियर काउंसलिंग जो छात्रों और उनके परिवारों को प्रमाणित कौशल, वेतन, और 5-वर्षीय करियर विकास डेटा के साथ आत्मविश्वास से निर्णय लेने में मदद करती है।'
                : 'AI-powered vocational career guidance bringing students & parents together. Verified NCVET skill pathways, salary standards, and family alignment.'}
            </p>

            {/* JOB & CAREER SEARCH BAR */}
            <form 
              onSubmit={handleSearchSubmit}
              className="bg-white p-3 rounded-2xl shadow-lg max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-3 border border-neutral-300 text-neutral-950 text-left"
            >
              <div className="flex-1 flex items-center gap-2 px-3 py-2 w-full border-b sm:border-b-0 sm:border-r border-neutral-200">
                <Search className="w-5 h-5 text-neutral-500 shrink-0" />
                <input
                  type="text"
                  placeholder={isHi ? "नौकरी, कौशल या ट्रेड खोजें (e.g. Electrician)" : "Job title, trade or skill (e.g. Solar Technician)"}
                  value={searchTitle}
                  onChange={(e) => setSearchTitle(e.target.value)}
                  className="w-full text-xs sm:text-sm outline-none font-medium bg-transparent text-neutral-950 placeholder-neutral-500"
                />
              </div>

              <div className="flex-1 flex items-center gap-2 px-3 py-2 w-full">
                <MapPin className="w-5 h-5 text-neutral-500 shrink-0" />
                <input
                  type="text"
                  placeholder={isHi ? "स्थान (e.g. Patna, Bihar)" : "Location (e.g. Patna, Bihar)"}
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-full text-xs sm:text-sm outline-none font-medium bg-transparent text-neutral-950 placeholder-neutral-500"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shrink-0"
              >
                <span>{isHi ? "खोजें" : "Search Jobs"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Hero CTA Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onSelectScreen('student-onboarding')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <span>{isHi ? 'छात्र के रूप में शुरू करें' : 'Start as Student'}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => onSelectScreen('parent-onboarding')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-extrabold text-sm border border-neutral-300 shadow-md flex items-center justify-center gap-2 transition-all"
              >
                <HeartHandshake className="w-4 h-4 text-black" />
                <span>{isHi ? 'अभिभावक के रूप में जुड़ें' : 'Join as Parent'}</span>
              </button>

              <button
                onClick={() => onSelectScreen('career-recommendations')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-bold text-sm border border-neutral-300 flex items-center justify-center gap-2 transition-all"
              >
                <Compass className="w-4 h-4 text-black" />
                <span>{isHi ? 'करियर एक्सप्लोर करें' : 'Explore Vocational Careers'}</span>
              </button>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center max-w-3xl mx-auto text-xs">
              <div>
                <div className="text-2xl font-black text-neutral-950">10+</div>
                <div className="text-neutral-600 font-semibold">{isHi ? 'उच्च मांग वाले ट्रेड' : 'High-Demand Trades'}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-neutral-950">100%</div>
                <div className="text-neutral-600 font-semibold">{isHi ? 'NCVET/NSDC डेटा' : 'Verified Government Data'}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-neutral-950">4.9/5 ★</div>
                <div className="text-neutral-600 font-semibold">{isHi ? 'अभिभावक सुरक्षा रेटिंग' : 'Parent Security Score'}</div>
              </div>
              <div>
                <div className="text-2xl font-black text-neutral-950">₹15k–₹35k</div>
                <div className="text-neutral-600 font-semibold">{isHi ? 'शुरुआती मासिक आय' : 'Verified Starting Salary'}</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED OPPORTUNITIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-950 text-xs font-bold mb-2">
              <Briefcase className="w-3.5 h-3.5 text-black" />
              <span>Verified Jobs & Apprenticeships</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
              {isHi ? "नवीनतम नौकरियां और अप्रेंटिसशिप अवसर" : "Featured Vocational Opportunities"}
            </h2>
          </div>

          <button
            onClick={() => onSelectScreen('jobs')}
            className="px-5 py-2.5 rounded-xl bg-black text-white font-bold text-xs hover:bg-neutral-800 transition-all flex items-center gap-1.5 self-start sm:self-auto"
          >
            <span>{isHi ? "सभी नौकरियां देखें" : "View All Opportunities"}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_JOBS.slice(0, 3).map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 hover:border-black transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-950 border border-neutral-300">
                    {job.type}
                  </span>
                  <span className="text-[11px] font-bold text-neutral-500">NSQF Level {job.nsqfLevel}</span>
                </div>

                <div>
                  <h3 className="font-extrabold text-base text-neutral-950">{isHi ? job.titleHi : job.titleEn}</h3>
                  <p className="text-xs text-neutral-600 font-semibold">{job.companyName}</p>
                </div>

                <div className="space-y-1 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Stipend / Salary:</span>
                    <strong className="text-neutral-950 font-bold">{isHi ? job.salaryRangeHi : job.salaryRangeEn}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <strong className="text-neutral-950 font-bold">{isHi ? job.locationHi : job.locationEn}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectScreen('jobs')}
                className="w-full py-3 bg-black hover:bg-neutral-800 text-white font-extrabold text-xs rounded-xl transition-all shadow-sm"
              >
                {isHi ? 'आवेदन विवरण देखें' : 'View Details & Apply'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* VISUAL FLOW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-neutral-200 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
              {isHi ? 'करियरसाथी परिवार मार्गदर्शन यात्रा' : 'The CareerSaathi Family Journey'}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 font-medium">
              {isHi
                ? 'छात्र और माता-पिता को एक साथ लाकर पूर्ण स्पष्टता और आत्मविश्वास प्रदान करना'
                : 'Connecting student ambition with parent reassurance in 5 simple steps'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div 
              onClick={() => onSelectScreen('student-onboarding')} 
              className="bg-neutral-50 hover:bg-neutral-100 p-5 rounded-2xl border border-neutral-200 text-center cursor-pointer transition-all hover:border-black group space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-950 bg-neutral-200 px-2 py-0.5 rounded-full">Step 1</span>
              <h3 className="text-xs sm:text-sm font-black text-neutral-950">
                {isHi ? 'छात्र + अभिभावक' : 'STUDENT + PARENTS'}
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium">
                {isHi ? 'रुचियों और चिंताओं को दर्ज करें' : 'Record interests & parent hesitation'}
              </p>
            </div>

            <div 
              onClick={() => onSelectScreen('ai-counsellor')} 
              className="bg-neutral-50 hover:bg-neutral-100 p-5 rounded-2xl border border-neutral-200 text-center cursor-pointer transition-all hover:border-black group space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-950 bg-neutral-200 px-2 py-0.5 rounded-full">Step 2</span>
              <h3 className="text-xs sm:text-sm font-black text-neutral-950">
                {isHi ? 'एआई काउंसलर संवाद' : 'AI COUNSELLOR'}
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium">
                {isHi ? 'द्विभाषी एआई सलाह' : 'Bilingual AI guidance'}
              </p>
            </div>

            <div 
              onClick={() => onSelectScreen('career-detail')} 
              className="bg-neutral-50 hover:bg-neutral-100 p-5 rounded-2xl border border-neutral-200 text-center cursor-pointer transition-all hover:border-black group space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-950 bg-neutral-200 px-2 py-0.5 rounded-full">Step 3</span>
              <h3 className="text-xs sm:text-sm font-black text-neutral-950">
                {isHi ? 'सत्यापित करियर डेटा' : 'VERIFIED DATA'}
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium">
                {isHi ? 'वेतन और प्लेसमेंट आंकड़े' : 'NCVET salary & placement specs'}
              </p>
            </div>

            <div 
              onClick={() => onSelectScreen('skill-roadmap')} 
              className="bg-neutral-50 hover:bg-neutral-100 p-5 rounded-2xl border border-neutral-200 text-center cursor-pointer transition-all hover:border-black group space-y-2"
            >
              <div className="w-12 h-12 rounded-full bg-black text-white font-bold mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <GitMerge className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-neutral-950 bg-neutral-200 px-2 py-0.5 rounded-full">Step 4</span>
              <h3 className="text-xs sm:text-sm font-black text-neutral-950">
                {isHi ? 'कौशल एवं करियर रोडमैप' : 'SKILL & ROADMAP'}
              </h3>
              <p className="text-[11px] text-neutral-600 font-medium">
                {isHi ? '5-वर्षीय विकास योजना' : '5-Year step-by-step career path'}
              </p>
            </div>

            <div 
              onClick={() => onSelectScreen('family-dashboard')} 
              className="bg-black text-white p-5 rounded-2xl shadow-md text-center cursor-pointer transition-all hover:bg-neutral-800 group space-y-2 border border-black"
            >
              <div className="w-12 h-12 rounded-full bg-white text-black font-bold mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-wider text-black bg-white px-2 py-0.5 rounded-full">Step 5</span>
              <h3 className="text-xs sm:text-sm font-black text-white">
                {isHi ? 'आत्मविश्वासी परिवार निर्णय' : 'CONFIDENT DECISION'}
              </h3>
              <p className="text-[11px] text-neutral-300 font-medium">
                {isHi ? 'संयुक्‍त परिवार स्वीकृति' : 'Full student & parent alignment'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5 PILLARS DIFFERENTIATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-3xl p-8 sm:p-12 text-neutral-950 shadow-sm relative overflow-hidden border border-neutral-200 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-black tracking-widest text-neutral-950 uppercase bg-neutral-200 px-3 py-1 rounded-full border border-neutral-300">
              {isHi ? 'हमारा मुख्य अंतर' : 'THE CORE DIFFERENTIATOR'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-neutral-950 tracking-tight leading-snug">
              "CareerSaathi is not just a career recommendation tool."
            </h2>
            <p className="text-lg sm:text-xl font-bold text-neutral-800">
              "From Career Recommendation to Family Decision Support."
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-black transition-all text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mx-auto font-black">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-black text-sm text-neutral-950">{isHi ? '1. एआई काउंसलिंग' : '1. AI Counselling'}</h3>
              <p className="text-xs text-neutral-600 font-medium">{isHi ? 'छात्र और माता-पिता के प्रश्नों का त्वरित उत्तर' : '24/7 bilingual guidance tailored to Indian trades'}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-black transition-all text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mx-auto font-black">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-black text-sm text-neutral-950">{isHi ? '2. अभिभावक सहभागिता' : '2. Parent Engagement'}</h3>
              <p className="text-xs text-neutral-600 font-medium">{isHi ? 'आय, सुरक्षा और सम्मान से जुड़ी चिंताओं का समाधान' : 'Addressing income, safety, & social status doubts'}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-black transition-all text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mx-auto font-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-black text-sm text-neutral-950">{isHi ? '3. सत्यापित करियर डेटा' : '3. Verified Career Data'}</h3>
              <p className="text-xs text-neutral-600 font-medium">{isHi ? 'NCVET और NSDC मान्यता प्राप्त आधिकारिक जानकारी' : 'Official salary & placement stats from ITI/NSDC'}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-black transition-all text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mx-auto font-black">
                <GitMerge className="w-5 h-5" />
              </div>
              <h3 className="font-black text-sm text-neutral-950">{isHi ? '4. स्किल रोडमैप' : '4. Skill Roadmap'}</h3>
              <p className="text-xs text-neutral-600 font-medium">{isHi ? 'प्रशिक्षण से लेकर 5-वर्षीय करियर विकास' : 'Clear steps from ITI training to entrepreneurship'}</p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-black transition-all text-center space-y-2 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center mx-auto font-black">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-black text-sm text-neutral-950">{isHi ? '5. मानव काउंसलर' : '5. Human Counselling'}</h3>
              <p className="text-xs text-neutral-600 font-medium">{isHi ? 'गंभीर चिंताओं के लिए विशेषज्ञ परामर्शदाता' : '1-on-1 expert call escalation for complex decisions'}</p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY PARENTS MATTER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-black tracking-wider text-neutral-950 uppercase bg-neutral-100 px-3.5 py-1 rounded-full border border-neutral-300">
              {isHi ? 'अभिभावक समर्थन' : 'PARENTS MATTER MOST'}
            </span>
            <h2 className="text-3xl font-black text-neutral-950 tracking-tight leading-tight">
              {isHi
                ? 'माता-पिता की चिंताओं को दूर किए बिना वोकेशनल करियर निर्णय संभव नहीं है'
                : 'Vocational career decisions succeed only when parents feel confident & secure'}
            </h2>
            <p className="text-neutral-600 text-sm font-medium leading-relaxed">
              {isHi
                ? 'भारतीय परिवारों में बच्चे के करियर का फैसला सिर्फ छात्र का नहीं, बल्कि पूरे परिवार का होता है। करियरसाथी माता-पिता के 9 मुख्य प्रश्नों का प्रामाणिक उत्तर देता है:'
                : 'In Indian society, career choices are family decisions. CareerSaathi addresses the 9 core hesitations parents face:'}
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-neutral-950">
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>💰</span> {isHi ? 'स्थिर मासिक आय' : 'Stable Monthly Income'}
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>💼</span> {isHi ? 'नौकरी की सुरक्षा' : 'Permanent Job Security'}
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>📈</span> {isHi ? '5-वर्षीय पदोन्नति' : 'Career Growth Ladder'}
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>🛡</span> {isHi ? 'कार्यस्थल सुरक्षा' : 'Work Safety Standards'}
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>🎓</span> {isHi ? 'B.Voc डिग्री अवसर' : 'Higher B.Voc Options'}
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-neutral-300 flex items-center gap-2 shadow-sm">
                <span>👥</span> {isHi ? 'सामाजिक सम्मान' : 'Social Respect & Dignity'}
              </div>
            </div>

            <button
              onClick={() => onSelectScreen('parent-onboarding')}
              className="px-8 py-4 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm flex items-center gap-2 transition-all shadow-md"
            >
              <HeartHandshake className="w-4 h-4 text-white" />
              <span>{isHi ? 'अभिभावक फॉर्म भरें' : 'Address Parent Concerns Now'}</span>
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl text-neutral-950 space-y-6 relative overflow-hidden shadow-md border border-neutral-200">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full bg-black text-white font-black text-xl flex items-center justify-center border-2 border-black">
                RC
              </div>
              <div>
                <h3 className="font-extrabold text-base text-neutral-950">Ramesh Chandra Verma</h3>
                <p className="text-xs text-neutral-600 font-medium">Father of Solar Apprentice, Patna (Bihar)</p>
              </div>
            </div>

            <div className="flex gap-1 text-black">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-black text-black" />
              ))}
            </div>

            <blockquote className="text-neutral-700 text-sm italic leading-relaxed font-medium">
              "पहले मुझे लगता था कि सोलर तकनीशियन कोई छोटी नौकरी है। लेकिन करियरसाथी पर टाटा पावर का सैलरी चार्ट और NCVET सर्टिफिकेट देखकर मुझे भरोसा हुआ। आज मेरा बेटा 22,000 रुपये कमा रहा है और साथ ही B.Voc की पढ़ाई भी कर रहा है!"
            </blockquote>

            <div className="pt-2 flex items-center justify-between border-t border-neutral-200 text-xs text-neutral-600 font-semibold">
              <span>Verified Parent Review</span>
              <span className="text-neutral-950 font-black">PMKVY Placement Certified</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
