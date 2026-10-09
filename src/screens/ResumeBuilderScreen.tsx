import React, { useState } from 'react';
import type { ScreenId, Language, ResumeData, StudentProfile } from '../types';
import { DEFAULT_RESUME_DATA } from '../data/mockData';
import {
  FileText,
  Printer,
  Plus,
  Trash2,
  User,
  GraduationCap,
  Sparkles
} from 'lucide-react';

interface Props {
  studentProfile?: StudentProfile;
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const ResumeBuilderScreen: React.FC<Props> = ({ studentProfile, language }) => {
  const isHi = language === 'hi';
  const [resume, setResume] = useState<ResumeData>(() => ({
    ...DEFAULT_RESUME_DATA,
    fullName: studentProfile?.name || DEFAULT_RESUME_DATA.fullName,
    location: studentProfile?.district ? `${studentProfile.district}, ${studentProfile.state}` : DEFAULT_RESUME_DATA.location
  }));
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');
  const [newSkill, setNewSkill] = useState('');

  const handlePrint = () => {
    window.print();
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, newSkill.trim()]
    }));
    setNewSkill('');
  };

  const removeSkill = (index: number) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: 'New Trade Certificate / Course', institution: 'Government ITI Kendra', year: '2026', score: '80%' }
      ]
    }));
  };

  const removeEducation = (index: number) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 print:p-0">
      
      {/* Header Bar */}
      <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-xs font-bold border border-neutral-700">
            <FileText className="w-3.5 h-3.5 text-neutral-300" />
            <span>{isHi ? 'एनसीवीटी और रोजगार प्रारूप' : 'NCVET & Job-Ready Format'}</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white">
            {isHi ? 'रिज्यूमे बिल्डर' : 'Professional Resume Builder'}
          </h1>
          <p className="text-xs text-neutral-400">
            {isHi ? 'सत्यापित वोकेशनल कौशल के साथ ब्लैक एंड व्हाइट रिज्यूमे तैयार करें' : 'Create an elegant, high-contrast monochrome resume aligned with Skill India standards'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-neutral-900 p-1 rounded-xl border border-neutral-800 flex text-xs">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'editor' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Editor
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                activeTab === 'preview' ? 'bg-white text-neutral-950 shadow-sm' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Full Preview
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-5 py-2.5 bg-white text-neutral-950 hover:bg-neutral-100 font-extrabold text-xs rounded-xl shadow transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4 text-neutral-950" />
            <span>{isHi ? 'प्रिंट / पीडीएफ डाउनलोड' : 'Export PDF'}</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Editor vs Live Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 print:block">
        
        {/* LEFT COLUMN: EDITOR */}
        <div className={`lg:col-span-6 space-y-6 print:hidden ${activeTab === 'preview' ? 'hidden lg:block' : 'block'}`}>
          
          {/* Section 1: Personal Info */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <h3 className="text-base font-black text-neutral-950 flex items-center gap-2 border-b border-neutral-100 pb-3">
              <User className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'व्यक्तिगत जानकारी' : 'Personal Details'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="font-bold text-neutral-700 block mb-1">{isHi ? 'पूरा नाम' : 'Full Name'}</label>
                <input
                  type="text"
                  value={resume.fullName}
                  onChange={(e) => setResume({ ...resume, fullName: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 font-semibold outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Email</label>
                <input
                  type="email"
                  value={resume.email}
                  onChange={(e) => setResume({ ...resume, email: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 font-semibold outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Phone</label>
                <input
                  type="text"
                  value={resume.phone}
                  onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 font-semibold outline-none focus:border-neutral-950"
                />
              </div>

              <div>
                <label className="font-bold text-neutral-700 block mb-1">Location</label>
                <input
                  type="text"
                  value={resume.location}
                  onChange={(e) => setResume({ ...resume, location: e.target.value })}
                  className="w-full p-2.5 rounded-xl border border-neutral-300 font-semibold outline-none focus:border-neutral-950"
                />
              </div>
            </div>

            <div className="text-xs">
              <label className="font-bold text-neutral-700 block mb-1">{isHi ? 'प्रोफाइल सारांश' : 'Professional Summary'}</label>
              <textarea
                rows={3}
                value={resume.summary}
                onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                className="w-full p-3 rounded-xl border border-neutral-300 font-medium outline-none focus:border-neutral-950"
              />
            </div>
          </div>

          {/* Section 2: Technical Skills */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <h3 className="text-base font-black text-neutral-950 flex items-center gap-2 border-b border-neutral-100 pb-3">
              <Sparkles className="w-4 h-4 text-neutral-950" />
              <span>{isHi ? 'तकनीकी और व्यावहारिक कौशल' : 'Technical & Practical Skills'}</span>
            </h3>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add a new skill (e.g. Inverter Testing)"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addSkill()}
                className="flex-1 p-2.5 rounded-xl border border-neutral-300 text-xs font-semibold outline-none focus:border-neutral-950"
              />
              <button
                onClick={addSkill}
                className="px-4 py-2.5 bg-neutral-950 text-white rounded-xl text-xs font-bold hover:bg-neutral-800"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 pt-1">
              {resume.skills.map((sk, idx) => (
                <span key={idx} className="bg-neutral-100 text-neutral-900 px-3 py-1 rounded-xl text-xs font-bold border border-neutral-300 flex items-center gap-1.5">
                  <span>{sk}</span>
                  <button onClick={() => removeSkill(idx)} className="text-neutral-400 hover:text-neutral-950">
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Section 3: Education */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
            <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
              <h3 className="text-base font-black text-neutral-950 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-neutral-950" />
                <span>{isHi ? 'शिक्षा एवं प्रमाणन' : 'Education & Qualification'}</span>
              </h3>
              <button onClick={addEducation} className="text-xs font-bold text-neutral-950 underline flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" /> Add
              </button>
            </div>

            <div className="space-y-3">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs space-y-2 relative">
                  <button
                    onClick={() => removeEducation(idx)}
                    className="absolute top-3 right-3 text-neutral-400 hover:text-neutral-950"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>

                  <input
                    type="text"
                    value={edu.degree}
                    onChange={(e) => {
                      const updated = [...resume.education];
                      updated[idx].degree = e.target.value;
                      setResume({ ...resume, education: updated });
                    }}
                    className="w-full p-2 bg-white rounded-xl border border-neutral-300 font-bold"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => {
                        const updated = [...resume.education];
                        updated[idx].institution = e.target.value;
                        setResume({ ...resume, education: updated });
                      }}
                      className="p-2 bg-white rounded-xl border border-neutral-300 font-medium"
                    />
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => {
                        const updated = [...resume.education];
                        updated[idx].year = e.target.value;
                        setResume({ ...resume, education: updated });
                      }}
                      className="p-2 bg-white rounded-xl border border-neutral-300 font-medium"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: LIVE RESUME PREVIEW */}
        <div className={`lg:col-span-6 ${activeTab === 'editor' ? 'hidden lg:block' : 'block'}`}>
          <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-neutral-950 text-neutral-950 space-y-6 print:border-none print:shadow-none print:p-0">
            
            {/* Resume Header */}
            <div className="border-b-2 border-neutral-950 pb-4 space-y-2">
              <h1 className="text-3xl font-black uppercase tracking-wider text-neutral-950">
                {resume.fullName || 'YOUR NAME'}
              </h1>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-neutral-700">
                <span>📍 {resume.location}</span>
                <span>📞 {resume.phone}</span>
                <span>✉️ {resume.email}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-black uppercase tracking-widest text-neutral-950 border-b border-neutral-300 pb-1">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-xs font-medium leading-relaxed text-neutral-800">
                {resume.summary}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-1.5">
              <h2 className="text-xs font-black uppercase tracking-widest text-neutral-950 border-b border-neutral-300 pb-1">
                KEY PRACTICAL SKILLS
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {resume.skills.map((sk, i) => (
                  <span key={i} className="text-xs font-bold bg-neutral-100 text-neutral-950 border border-neutral-400 px-2.5 py-0.5 rounded">
                    • {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-neutral-950 border-b border-neutral-300 pb-1">
                EDUCATION & NCVET CERTIFICATION
              </h2>
              <div className="space-y-2">
                {resume.education.map((edu, idx) => (
                  <div key={idx} className="flex justify-between items-start text-xs">
                    <div>
                      <strong className="font-extrabold text-neutral-950 block">{edu.degree}</strong>
                      <span className="text-neutral-700">{edu.institution}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-neutral-950 block">{edu.year}</span>
                      <span className="text-neutral-600">{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience */}
            <div className="space-y-2">
              <h2 className="text-xs font-black uppercase tracking-widest text-neutral-950 border-b border-neutral-300 pb-1">
                APPRENTICESHIP & EXPERIENCE
              </h2>
              <div className="space-y-2">
                {resume.workExperience.map((exp, idx) => (
                  <div key={idx} className="space-y-1 text-xs">
                    <div className="flex justify-between font-bold text-neutral-950">
                      <span>{exp.title} — {exp.company}</span>
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-neutral-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Certifications */}
            <div className="space-y-1.5 pt-2 border-t border-neutral-200">
              <h2 className="text-xs font-black uppercase tracking-widest text-neutral-950 border-b border-neutral-300 pb-1">
                VERIFIED CERTIFICATIONS
              </h2>
              <div className="space-y-1 text-xs font-medium">
                {resume.certifications.map((c, i) => (
                  <div key={i} className="flex justify-between">
                    <span>✓ <strong>{c.title}</strong> ({c.issuer})</span>
                    <span>{c.year}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
};
