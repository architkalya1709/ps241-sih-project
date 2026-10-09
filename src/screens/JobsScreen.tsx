import React, { useState } from 'react';
import type { ScreenId, Language, JobOpportunity } from '../types';
import { MOCK_JOBS } from '../data/mockData';
import {
  Search,
  MapPin,
  Briefcase,
  Bookmark,
  BookmarkCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  X,
  FileCheck
} from 'lucide-react';

interface Props {
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const JobsScreen: React.FC<Props> = ({ language }) => {
  const isHi = language === 'hi';
  const [jobs, setJobs] = useState<JobOpportunity[]>(MOCK_JOBS);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedJob, setSelectedJob] = useState<JobOpportunity | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const toggleBookmark = (id: string) => {
    setJobs((prev) =>
      prev.map((j) => {
        if (j.id === id) {
          const updated = !j.isBookmarked;
          showToast(
            updated
              ? isHi ? 'अवसर सहेजा गया' : 'Opportunity saved to bookmarks'
              : isHi ? 'बुकमार्क हटाया गया' : 'Removed from bookmarks'
          );
          return { ...j, isBookmarked: updated };
        }
        return j;
      })
    );
  };

  const applyForJob = (id: string) => {
    setJobs((prev) =>
      prev.map((j) => {
        if (j.id === id) {
          showToast(isHi ? 'आवेदन सफलतापूर्वक जमा किया गया!' : 'Application submitted successfully!');
          return { ...j, appliedStatus: 'Applied' };
        }
        return j;
      })
    );
    if (selectedJob && selectedJob.id === id) {
      setSelectedJob((prev) => (prev ? { ...prev, appliedStatus: 'Applied' } : null));
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesTitle =
      job.titleEn.toLowerCase().includes(searchTitle.toLowerCase()) ||
      job.titleHi.toLowerCase().includes(searchTitle.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTitle.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchTitle.toLowerCase()));

    const matchesLoc =
      job.locationEn.toLowerCase().includes(searchLocation.toLowerCase()) ||
      job.locationHi.toLowerCase().includes(searchLocation.toLowerCase());

    const matchesType = selectedType === 'All' || job.type === selectedType;

    return matchesTitle && matchesLoc && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Toast notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold border border-neutral-800 animate-bounce">
          ✓ {toastMessage}
        </div>
      )}

      {/* Header & Search Banner */}
      <div className="bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-neutral-900 space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 text-neutral-200 text-xs font-bold border border-neutral-700">
            <Briefcase className="w-3.5 h-3.5 text-neutral-300" />
            <span>{isHi ? 'सत्यापित अवसर पोर्टल' : 'Verified Opportunities Portal'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            {isHi ? 'नौकरियां और इंटर्नशिप' : 'Jobs & Apprenticeships'}
          </h1>
          <p className="text-xs sm:text-sm text-neutral-400">
            {isHi
              ? 'स्किल इंडिया और NCVET साझेदारों द्वारा सत्यापित 100% वैध अवसर'
              : 'Direct skill-aligned placements verified by NSDC, NCVET & Sector Skill Councils'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-2.5 rounded-2xl border border-neutral-200 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-2 text-slate-900">
          <div className="md:col-span-5 flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl border border-neutral-200">
            <Search className="w-4 h-4 text-neutral-500 shrink-0" />
            <input
              type="text"
              placeholder={isHi ? 'नौकरी पद, कौशल या कंपनी खोजें...' : 'Job title, skills, or company...'}
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="w-full text-xs font-semibold bg-transparent outline-none text-neutral-900 placeholder-neutral-400"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-xl border border-neutral-200">
            <MapPin className="w-4 h-4 text-neutral-500 shrink-0" />
            <input
              type="text"
              placeholder={isHi ? 'राज्य, जिला या शहर...' : 'State, district, or city...'}
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full text-xs font-semibold bg-transparent outline-none text-neutral-900 placeholder-neutral-400"
            />
          </div>

          <div className="md:col-span-3 flex items-center gap-2">
            <button
              onClick={() => {}}
              className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-extrabold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <span>{isHi ? 'खोजें' : 'Search Jobs'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-neutral-200 pb-4">
        <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-1">
          {['All', 'Full-time', 'Internship', 'Apprenticeship'].map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                selectedType === type
                  ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                  : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
              }`}
            >
              {type === 'All' ? (isHi ? 'सभी अवसर' : 'All Opportunities') : type}
            </button>
          ))}
        </div>

        <div className="text-xs font-bold text-neutral-500">
          Showing <strong className="text-neutral-950">{filteredJobs.length}</strong> verified postings
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredJobs.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-neutral-200 space-y-3">
          <Briefcase className="w-12 h-12 text-neutral-400 mx-auto" />
          <h3 className="text-base font-bold text-neutral-900">
            {isHi ? 'कोई मेल खाती नौकरी नहीं मिली' : 'No matching opportunities found'}
          </h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            {isHi ? 'कृपया अलग शब्द या स्थान खोजकर प्रयास करें।' : 'Try adjusting your search criteria or resetting filters.'}
          </p>
          <button
            onClick={() => {
              setSearchTitle('');
              setSearchLocation('');
              setSelectedType('All');
            }}
            className="px-4 py-2 bg-neutral-950 text-white font-bold text-xs rounded-xl"
          >
            {isHi ? 'फ़िल्टर रीसेट करें' : 'Reset Filters'}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 hover:border-neutral-950 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-300">
                      {job.type}
                    </span>
                    <h3 className="text-lg font-black text-neutral-950 tracking-tight leading-snug group-hover:text-neutral-700 transition-colors">
                      {isHi ? job.titleHi : job.titleEn}
                    </h3>
                    <p className="text-xs font-bold text-neutral-600 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{job.companyName}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => toggleBookmark(job.id)}
                    className="p-2 rounded-xl text-neutral-400 hover:text-neutral-950 hover:bg-neutral-100 transition-colors"
                  >
                    {job.isBookmarked ? (
                      <BookmarkCheck className="w-5 h-5 text-neutral-950" />
                    ) : (
                      <Bookmark className="w-5 h-5" />
                    )}
                  </button>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-600 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>{isHi ? job.locationHi : job.locationEn}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-neutral-500">{isHi ? 'वेतन / आय:' : 'Salary:'}</span>
                    <strong className="text-xs font-black text-neutral-950">{isHi ? job.salaryRangeHi : job.salaryRangeEn}</strong>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <span className="text-[10px] font-bold text-neutral-400 uppercase">{isHi ? 'आवश्यक कौशल:' : 'Required Skills:'}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {job.skills.map((s) => (
                      <span key={s} className="bg-neutral-100 text-neutral-800 px-2.5 py-0.5 rounded-md text-[11px] font-semibold border border-neutral-200">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="flex-1 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-extrabold text-xs rounded-xl shadow-sm transition-all text-center"
                >
                  {isHi ? 'विवरण और आवेदन' : 'View & Apply'}
                </button>

                {job.appliedStatus ? (
                  <span className="px-3 py-3 rounded-xl bg-neutral-100 text-neutral-800 font-extrabold text-xs border border-neutral-300 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-neutral-950" />
                    <span>Applied</span>
                  </span>
                ) : (
                  <button
                    onClick={() => applyForJob(job.id)}
                    className="px-4 py-3 bg-white hover:bg-neutral-100 text-neutral-950 border border-neutral-300 font-bold text-xs rounded-xl transition-all"
                  >
                    {isHi ? 'शीघ्र आवेदन' : 'Apply'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail Drawer Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl border border-neutral-200">
            <div className="flex items-start justify-between border-b border-neutral-100 pb-4">
              <div>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-300">
                  {selectedJob.type}
                </span>
                <h2 className="text-2xl font-black text-neutral-950 mt-1">
                  {isHi ? selectedJob.titleHi : selectedJob.titleEn}
                </h2>
                <p className="text-xs font-bold text-neutral-600">{selectedJob.companyName} • {isHi ? selectedJob.locationHi : selectedJob.locationEn}</p>
              </div>

              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200">
                  <span className="text-neutral-500 text-[10px] font-bold uppercase block">{isHi ? 'वेतन सीमा' : 'Salary Range'}</span>
                  <strong className="text-sm font-black text-neutral-950">{isHi ? selectedJob.salaryRangeHi : selectedJob.salaryRangeEn}</strong>
                </div>

                <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200">
                  <span className="text-neutral-500 text-[10px] font-bold uppercase block">{isHi ? 'पात्रता मानदण्ड' : 'Eligibility'}</span>
                  <strong className="text-xs font-extrabold text-neutral-950">{isHi ? selectedJob.eligibilityHi : selectedJob.eligibilityEn}</strong>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-extrabold text-neutral-950 text-sm">{isHi ? 'विवरण और भूमिका' : 'Job Description & Role'}</h4>
                <p className="text-neutral-600 font-medium leading-relaxed bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                  {isHi ? selectedJob.descriptionHi : selectedJob.descriptionEn}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-extrabold text-neutral-950 text-sm">{isHi ? 'आवश्यक कौशल' : 'Required Skills'}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.skills.map((s) => (
                    <span key={s} className="bg-neutral-950 text-white px-3 py-1 rounded-xl text-xs font-bold">
                      ✓ {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-5 py-3 rounded-xl border border-neutral-300 font-bold text-xs text-neutral-700 hover:bg-neutral-50"
              >
                {isHi ? 'बंद करें' : 'Close'}
              </button>

              {selectedJob.appliedStatus ? (
                <div className="px-6 py-3 bg-neutral-100 text-neutral-950 font-black text-xs rounded-xl border border-neutral-300 flex items-center gap-2">
                  <FileCheck className="w-4 h-4 text-neutral-950" />
                  <span>Application Submitted ({selectedJob.appliedStatus})</span>
                </div>
              ) : (
                <button
                  onClick={() => applyForJob(selectedJob.id)}
                  className="px-8 py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-black text-xs rounded-xl shadow-lg transition-all"
                >
                  {isHi ? 'अभी आवेदन करें' : 'Submit Application Now'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
