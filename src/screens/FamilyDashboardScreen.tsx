import React, { useEffect, useState } from 'react';
import type { StudentProfile, ParentProfile, ScreenId, Language, Career } from '../types';
import { fetchRecommendations } from '../api/client';
import { CAREERS_LIST, PARENT_CONCERNS_LIST, MOCK_JOBS } from '../data/mockData';
import {
  Users,
  User,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  GitMerge,
  Bot,
  PhoneCall,
  Briefcase,
  Bookmark,
  TrendingUp,
  Award,
  BookOpen,
  FileText
} from 'lucide-react';

interface Props {
  studentProfile: StudentProfile;
  parentProfile: ParentProfile;
  onSelectScreen: (screen: ScreenId) => void;
  onSelectCareer: (careerId: string) => void;
  language: Language;
}

export const FamilyDashboardScreen: React.FC<Props> = ({
  studentProfile,
  parentProfile,
  onSelectScreen,
  onSelectCareer,
  language
}) => {
  const isHi = language === 'hi';
  const [topCareers, setTopCareers] = useState<Career[]>(CAREERS_LIST.slice(0, 3));
  const [preferenceText, setPreferenceText] = useState<string>('');
  const [concernText, setConcernText] = useState<string>('');

  const [savedJobs, setSavedJobs] = useState<string[]>(['job-1', 'job-3']);
  const [appliedJobs] = useState([
    { id: 'job-1', title: 'Junior Solar Installation Technician', company: 'Tata Power Renewable Energy', status: 'Under Review', date: 'Oct 04, 2026' },
    { id: 'job-2', title: 'Industrial Electrician Trainee', company: 'L&T Construction Skill Academy', status: 'Shortlisted', date: 'Oct 01, 2026' }
  ]);

  useEffect(() => {
    let isMounted = true;
    fetchRecommendations(studentProfile, parentProfile).then((data) => {
      if (isMounted && data && data.topMatches) {
        setTopCareers(data.topMatches.slice(0, 3));
        setPreferenceText(data.studentPreference);
        setConcernText(data.parentConcern);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [studentProfile, parentProfile]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Dashboard Top Header & Welcome Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 text-neutral-950 shadow-sm border border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-900 text-xs font-bold border border-neutral-300">
            <Users className="w-3.5 h-3.5 text-black" />
            <span>{isHi ? 'संयुक्त परिवार करियर डैशबोर्ड' : 'Joint Family Career Portal'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
            {isHi ? `नमस्ते, ${studentProfile.name || 'राहुल'}!` : `Welcome back, ${studentProfile.name || 'Rahul'}!`}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 font-medium">
            {isHi
              ? `छात्र: ${studentProfile.name || 'राहुल वर्मा'} | स्थान: ${studentProfile.district || 'पटना'}, ${studentProfile.state || 'बिहार'}`
              : `Student: ${studentProfile.name || 'Rahul Verma'} | Location: ${studentProfile.district || 'Patna'}, ${studentProfile.state || 'Bihar'}`}
          </p>

          {/* Profile Completion Bar */}
          <div className="pt-2 max-w-md space-y-1.5">
            <div className="flex justify-between text-xs font-bold text-neutral-800">
              <span>Profile Completion</span>
              <span>85%</span>
            </div>
            <div className="w-full h-2.5 bg-neutral-100 rounded-full overflow-hidden border border-neutral-300">
              <div className="h-full bg-black rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onSelectScreen('ai-counsellor')}
            className="px-5 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-extrabold text-xs shadow-md flex items-center gap-2 transition-all"
          >
            <Bot className="w-4 h-4 text-white" />
            <span>{isHi ? 'एआई काउंसलर शुरू करें' : 'Launch AI Counsellor'}</span>
          </button>

          <button
            onClick={() => onSelectScreen('resume-builder')}
            className="px-5 py-3 rounded-xl bg-white hover:bg-neutral-100 text-neutral-950 font-bold text-xs border border-neutral-300 flex items-center gap-2 transition-all"
          >
            <FileText className="w-4 h-4 text-black" />
            <span>{isHi ? 'रेज्यूमे बनाएं' : 'Build Resume'}</span>
          </button>
        </div>
      </div>

      {/* Grid Row 1: Student Profile & Parent Concerns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Student Profile Summary Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
                <User className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-neutral-950 text-base">
                  {studentProfile.name || 'Rahul Verma'}
                </h3>
                <p className="text-xs text-neutral-500">
                  {studentProfile.age || '17'} Yrs • {studentProfile.district || 'Patna'}, {studentProfile.state || 'Bihar'} ({studentProfile.areaType || 'Semi-Urban'})
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectScreen('student-onboarding')}
              className="text-xs font-bold text-neutral-950 hover:underline"
            >
              {isHi ? 'संपादित करें' : 'Edit Profile'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              <span className="text-neutral-500 block text-[10px] font-bold uppercase">{isHi ? 'शिक्षा स्तर' : 'Education'}</span>
              <span className="font-extrabold text-neutral-900">{studentProfile.educationLevel || 'Class 10th Passed'}</span>
            </div>
            <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200">
              <span className="text-neutral-500 block text-[10px] font-bold uppercase">{isHi ? 'प्रदर्शन' : 'Academic Marks'}</span>
              <span className="font-extrabold text-neutral-900">{studentProfile.academicPerformance || '65% - 80%'}</span>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-xs font-bold text-neutral-700">{isHi ? 'छात्र की पसंदीदा रुचियां:' : 'Student Technical Interests:'}</span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {(studentProfile.interests || ['Solar & Green Energy', 'Electrical Wiring']).map((interest) => (
                <span key={interest} className="bg-neutral-100 text-neutral-900 px-2.5 py-1 rounded-full font-semibold border border-neutral-300">
                  ⚡ {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Parent Concerns Summary Card */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-black text-white flex items-center justify-center font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-neutral-950 text-base">
                  {isHi ? 'अभिभावक चिंताएं' : 'Parent Priority Concerns'}
                </h3>
                <p className="text-xs text-neutral-500">
                  {isHi ? 'माता-पिता की सुरक्षा एवं आय अपेक्षाएं' : 'Family Reassurance & Security'}
                </p>
              </div>
            </div>
            <button
              onClick={() => onSelectScreen('parent-onboarding')}
              className="text-xs font-bold text-neutral-950 hover:underline"
            >
              {isHi ? 'संपादित करें' : 'Edit Concerns'}
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-2">
              {(parentProfile.selectedConcerns || ['security', 'income', 'growth']).map((cid) => {
                const item = PARENT_CONCERNS_LIST.find((c) => c.id === cid);
                return (
                  <span key={cid} className="bg-neutral-100 text-neutral-900 px-3 py-1.5 rounded-xl font-bold text-xs border border-neutral-300 flex items-center gap-1.5">
                    <span>{item?.icon}</span>
                    <span>{isHi ? item?.titleHi : item?.titleEn}</span>
                  </span>
                );
              })}
            </div>

            {parentProfile.customQuestion && (
              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-200 text-xs text-neutral-700 italic">
                "{parentProfile.customQuestion}"
              </div>
            )}
          </div>
        </div>

      </div>

      {/* STUDENT VS PARENT PREFERENCE & CAREERSAATHI AI GUIDANCE SNIPPET */}
      <div className="bg-neutral-50 rounded-3xl p-6 sm:p-8 text-neutral-950 shadow-sm border border-neutral-200 space-y-6">
        <div className="flex items-center gap-2 text-xs font-extrabold text-neutral-800 uppercase tracking-wider">
          <Sparkles className="w-4 h-4 text-black" />
          <span>{isHi ? 'करियरसाथी संयुक्त परिवार सलाह' : 'CareerSaathi Joint Alignment AI'}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white p-4 rounded-2xl border border-neutral-200 space-y-1">
            <span className="text-neutral-500 font-bold uppercase text-[10px]">{isHi ? 'छात्र की प्राथमिकता:' : 'Student Preference:'}</span>
            <div className="text-base font-black text-neutral-950">{preferenceText || studentProfile.interests?.[0] || 'Solar PV Technician'}</div>
            <p className="text-neutral-600 text-[11px]">{studentProfile.preferredWorkType || 'Practical field work & technology'}</p>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-neutral-200 space-y-1">
            <span className="text-neutral-500 font-bold uppercase text-[10px]">{isHi ? 'माता-पिता की चिंता:' : 'Parent Concern:'}</span>
            <div className="text-base font-black text-neutral-950">{concernText || 'Job Security & Permanent Income'}</div>
            <p className="text-neutral-600 text-[11px]">Desire permanent income & government backing</p>
          </div>

          <div className="bg-black text-white p-4 rounded-2xl space-y-1">
            <span className="text-neutral-400 font-bold uppercase text-[10px]">{isHi ? 'करियरसाथी एआई निष्कर्ष:' : 'CareerSaathi AI Verdict:'}</span>
            <div className="text-sm font-extrabold text-white">
              "High Career & Family Harmony"
            </div>
            <p className="text-neutral-300 text-[11px]">
              Top match ({topCareers[0]?.titleEn || 'Solar Tech'}) aligns with student passion & parent security expectations.
            </p>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-neutral-200">
          <div className="flex items-center gap-2 text-xs text-neutral-700 font-bold">
            <ShieldCheck className="w-4 h-4 text-black" />
            <span>Match Confidence Score: <strong className="text-black font-black">{topCareers[0]?.matchScore || 87}% High Alignment</strong></span>
          </div>
          <button
            onClick={() => onSelectScreen('ai-counsellor')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs shadow-md flex items-center justify-center gap-2 transition-all"
          >
            <span>{isHi ? 'परिवार एआई काउंसलिंग शुरू करें' : 'Start Family AI Conversation'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CAREER PROGRESS TRACKER & SKILL DEVELOPMENT SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Career Progress Tracker */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-neutral-950" />
              <h3 className="font-extrabold text-neutral-950 text-base">Career Progress Tracker</h3>
            </div>
            <button
              onClick={() => onSelectScreen('skill-roadmap')}
              className="text-xs font-bold text-neutral-950 hover:underline flex items-center gap-1"
            >
              <span>View Full Roadmap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-4">
            <div className="relative pl-6 border-l-2 border-neutral-200 space-y-4 text-xs">
              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-white" />
                <span className="font-extrabold text-neutral-950 block">Stage 1: ITI / Vocational Foundation (Months 1–6)</span>
                <p className="text-neutral-500">Core electrical safety, basic wiring, solar panel mounting physics</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-neutral-100 text-neutral-900 text-[10px] font-bold">Completed</span>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-white" />
                <span className="font-extrabold text-neutral-950 block">Stage 2: Apprenticeship & On-Job Training (Months 7–18)</span>
                <p className="text-neutral-500">Paid apprenticeship ₹12,000/mo at Tata Power Solar or Railway workshop</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-neutral-950 text-white text-[10px] font-bold">In Progress</span>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-neutral-300 border-2 border-white" />
                <span className="font-extrabold text-neutral-600 block">Stage 3: Senior Technician / B.Voc Leadership (Years 2–4)</span>
                <p className="text-neutral-400">Solar microgrid maintenance lead or diploma advancement</p>
                <span className="inline-block mt-1 px-2 py-0.5 rounded bg-neutral-100 text-neutral-500 text-[10px] font-bold">Upcoming</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Development */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-950" />
              <h3 className="font-extrabold text-neutral-950 text-base">Skill Development Matrix</h3>
            </div>
            <span className="text-xs font-bold text-neutral-500">NSQF Level 4/5</span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-bold text-neutral-800 mb-1">
                <span>Solar PV Mounting & Cable Sizing</span>
                <span>80% Mastered</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-950 rounded-full" style={{ width: '80%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-neutral-800 mb-1">
                <span>Electrical Fault Diagnosis & Multimeter</span>
                <span>65% Mastered</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-950 rounded-full" style={{ width: '65%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between font-bold text-neutral-800 mb-1">
                <span>Industrial Safety & Earthing Protocols</span>
                <span>90% Mastered</span>
              </div>
              <div className="w-full h-2 bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-neutral-950 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectScreen('jobs')}
                className="w-full py-3 rounded-xl bg-neutral-950 text-white font-extrabold text-xs shadow hover:bg-neutral-800 transition-all flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Upskilling Courses & Certificates</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* RECOMMENDED JOBS & INTERNSHIPS PORTAL */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
              Recommended Jobs & Apprenticeships
            </h2>
            <p className="text-xs text-neutral-500">
              Verified opportunities matching your technical skills and location preference
            </p>
          </div>

          <button
            onClick={() => onSelectScreen('jobs')}
            className="text-xs font-bold text-neutral-950 hover:underline flex items-center gap-1"
          >
            <span>View All Jobs ({MOCK_JOBS.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_JOBS.slice(0, 3).map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-200 hover:border-neutral-950 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300">
                    {job.type}
                  </span>
                  <button
                    onClick={() => {
                      setSavedJobs((prev) =>
                        prev.includes(job.id) ? prev.filter((id) => id !== job.id) : [...prev, job.id]
                      );
                    }}
                    className={`p-1.5 rounded-lg border transition-all ${
                      savedJobs.includes(job.id)
                        ? 'bg-neutral-950 text-white border-neutral-950'
                        : 'bg-white text-neutral-400 border-neutral-200 hover:text-neutral-950'
                    }`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-extrabold text-sm text-neutral-950 line-clamp-1">{isHi ? job.titleHi : job.titleEn}</h3>
                <p className="text-xs text-neutral-600 font-semibold">{job.companyName}</p>
                
                <div className="space-y-1 text-xs text-neutral-600 pt-2 border-t border-neutral-100">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Stipend / Salary:</span>
                    <span className="font-bold text-neutral-950">{isHi ? job.salaryRangeHi : job.salaryRangeEn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Location:</span>
                    <span className="font-bold text-neutral-950">{isHi ? job.locationHi : job.locationEn}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onSelectScreen('jobs')}
                className="w-full py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Apply Opportunity</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* SAVED OPPORTUNITIES & RECENT APPLICATIONS */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
        <h3 className="font-extrabold text-base text-neutral-950">
          Your Applications & Saved Opportunities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {appliedJobs.map((app) => (
            <div key={app.id} className="bg-neutral-50 p-4 rounded-xl border border-neutral-200 flex items-center justify-between">
              <div className="space-y-1">
                <span className="font-extrabold text-neutral-950 block">{app.title}</span>
                <span className="text-neutral-500 text-[11px]">{app.company} • Applied: {app.date}</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-neutral-950 text-white font-bold text-[11px]">
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RECOMMENDED CAREERS MATRIX */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-neutral-950 tracking-tight">
              {isHi ? 'अनुशंसित वोकेशनल करियर' : 'Top Recommended Vocational Careers'}
            </h2>
            <p className="text-xs text-neutral-500">
              {isHi ? 'छात्र की रुचियों और माता-पिता की सुरक्षा आवश्यकताओं पर आधारित' : 'Ranked by student interest and parent security alignment'}
            </p>
          </div>

          <button
            onClick={() => onSelectScreen('career-recommendations')}
            className="text-xs font-bold text-neutral-950 hover:underline flex items-center gap-1"
          >
            <span>{isHi ? 'सभी देखें' : 'View All Matches'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCareers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4 hover:border-neutral-950 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-900 border border-neutral-300">
                    {isHi ? career.categoryHi : career.categoryEn}
                  </span>
                  <div className="flex items-center gap-1 bg-neutral-950 text-white px-2.5 py-1 rounded-full text-xs font-black">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>{career.matchScore}% Match</span>
                  </div>
                </div>

                <h3 className="font-extrabold text-base text-neutral-950">
                  {isHi ? career.titleHi : career.titleEn}
                </h3>

                <p className="text-xs text-neutral-600 leading-snug bg-neutral-50 p-2.5 rounded-xl border border-neutral-200">
                  {isHi ? career.whyMatchHi : career.whyMatchEn}
                </p>

                <div className="space-y-1.5 text-xs text-neutral-700">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">{isHi ? 'शुरुआती वेतन:' : 'Starting Salary:'}</span>
                    <strong className="text-neutral-950 font-bold">{isHi ? career.startingSalaryHi : career.startingSalaryEn}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">{isHi ? 'प्लेसमेंट दर:' : 'Placement Rate:'}</span>
                    <strong className="text-neutral-950">{career.placementRate}% Verified</strong>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    onSelectCareer(career.id);
                    onSelectScreen('career-detail');
                  }}
                  className="w-full py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs text-center transition-all"
                >
                  {isHi ? 'करियर विवरण देखें' : 'View Career Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* NEXT RECOMMENDED ACTIONS */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200 space-y-4">
        <h3 className="font-extrabold text-base text-neutral-950">
          {isHi ? 'अगला अनुशंसित कदम (Next Recommended Action)' : 'Next Recommended Actions'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button
            onClick={() => onSelectScreen('ai-counsellor')}
            className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-neutral-950 text-left space-y-2 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
              <Bot className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-neutral-950 group-hover:underline">
              1. Ask AI Counsellor
            </h4>
            <p className="text-[11px] text-neutral-600">
              Clear student-parent questions about salaries & security
            </p>
          </button>

          <button
            onClick={() => onSelectScreen('skill-roadmap')}
            className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-neutral-950 text-left space-y-2 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
              <GitMerge className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-neutral-950 group-hover:underline">
              2. Inspect 5-Year Roadmap
            </h4>
            <p className="text-[11px] text-neutral-600">
              See career progression from ITI to B.Voc & business
            </p>
          </button>

          <button
            onClick={() => onSelectScreen('human-counsellor')}
            className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-neutral-950 text-left space-y-2 transition-all group"
          >
            <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center">
              <PhoneCall className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-neutral-950 group-hover:underline">
              3. Book Human Counsellor
            </h4>
            <p className="text-[11px] text-neutral-600">
              Schedule 1-on-1 expert session in Hindi/English
            </p>
          </button>
        </div>
      </div>

    </div>
  );
};
