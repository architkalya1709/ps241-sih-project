import React, { useState } from 'react';
import type { Language, StudentProfile, ParentProfile } from '../types';
import { COUNSELLORS_LIST } from '../data/mockData';
import { submitCounsellorBooking } from '../api/client';
import {
  PhoneCall,
  Video,
  MessageSquare,
  MapPin,
  CheckCircle2,
  Star,
  Headphones,
  ArrowRight
} from 'lucide-react';

interface Props {
  studentProfile?: StudentProfile;
  parentProfile?: ParentProfile;
  language: Language;
}

export const HumanCounsellorScreen: React.FC<Props> = ({
  studentProfile,
  parentProfile,
  language
}) => {
  const isHi = language === 'hi';
  const [selectedCounsellorId, setSelectedCounsellorId] = useState<string>(COUNSELLORS_LIST[0].id);
  const [concern, setConcern] = useState<string>('Job Security & Salary Verification');
  const [prefLang, setPrefLang] = useState<string>('Hindi');
  const [prefDate, setPrefDate] = useState<string>('2026-10-12');
  const [prefTime, setPrefTime] = useState<string>('11:00 AM');
  const [commMode, setCommMode] = useState<string>('Phone Call');
  const [ticketId, setTicketId] = useState<string>('CS-2026-8891');

  const [isBooked, setIsBooked] = useState<boolean>(false);

  const selectedCounsellor = COUNSELLORS_LIST.find((c) => c.id === selectedCounsellorId) || COUNSELLORS_LIST[0];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      counsellorId: selectedCounsellor.id,
      counsellorName: selectedCounsellor.name,
      studentName: studentProfile?.name || 'Student',
      parentName: parentProfile ? 'Parent' : 'Parent',
      concernTopic: concern,
      language: prefLang,
      preferredDate: prefDate,
      preferredTime: prefTime,
      communicationMode: commMode
    };

    const res = await submitCounsellorBooking(payload);
    if (res && res.ticket) {
      setTicketId(res.ticket.ticketId);
    }
    setIsBooked(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* Header Banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 text-neutral-950 shadow-sm border border-neutral-200 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 text-neutral-950 text-xs font-bold border border-neutral-300">
          <Headphones className="w-3.5 h-3.5 text-neutral-950" />
          <span>{isHi ? 'प्रमाणित मानव परामर्शदाता सहायता' : 'Escalation to Human Experts'}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-neutral-950">
          {isHi ? 'मानव काउंसलर से बात करें' : 'Talk to a Human Counsellor'}
        </h1>
        <p className="text-xs sm:text-sm text-neutral-600">
          {isHi
            ? 'जटिल परिवार चिंताओं और छात्र-अभिभावक संवाद के लिए नि:शुल्क 1-ऑन-1 परामर्श कॉल बुक करें'
            : 'Book a free 1-on-1 phone or video session with experienced Skill India counsellors'}
        </p>
      </div>

      {/* Booking Confirmation Modal Dialog if booked */}
      {isBooked && (
        <div className="bg-white text-neutral-950 rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-black text-neutral-950">
                {isHi ? 'परामर्श सत्र सफलतापूर्वक बुक हुआ!' : 'Counselling Session Confirmed!'}
              </h2>
              <p className="text-xs text-neutral-600">
                Ticket ID: <strong className="text-neutral-950">#{ticketId}</strong>
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-neutral-600">{isHi ? 'काउंसलर:' : 'Expert:'}</span>
              <strong className="text-neutral-950">{selectedCounsellor.name}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">{isHi ? 'दिनांक एवं समय:' : 'Date & Time:'}</span>
              <strong className="text-neutral-950">{prefDate} @ {prefTime}</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-600">{isHi ? 'माध्यम:' : 'Mode:'}</span>
              <strong className="text-neutral-950">{commMode} ({prefLang})</strong>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 text-xs text-neutral-600">
            <span>{isHi ? 'परामर्श अनुरोध सफलतापूर्वक पंजीकृत कर लिया गया है।' : 'Booking request registered successfully on CareerSaathi network.'}</span>
            <button
              onClick={() => setIsBooked(false)}
              className="px-4 py-2 bg-black text-white font-bold rounded-xl hover:bg-neutral-800"
            >
              {isHi ? 'दूसरा सत्र बुक करें' : 'Book Another Session'}
            </button>
          </div>
        </div>
      )}

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Col 1: Counsellor Selection Cards */}
        <div className="space-y-4">
          <h3 className="font-extrabold text-sm text-neutral-950 uppercase tracking-wider">
            {isHi ? '1. परामर्शदाता चुनें:' : '1. Choose Counsellor:'}
          </h3>

          <div className="space-y-3">
            {COUNSELLORS_LIST.map((c) => {
              const isSelected = selectedCounsellorId === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setSelectedCounsellorId(c.id)}
                  className={`w-full p-4 rounded-2xl border-2 text-left transition-all space-y-2 ${
                    isSelected
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                      : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className={`font-black text-sm ${isSelected ? 'text-white' : 'text-neutral-950'}`}>{c.name}</h4>
                      <p className={`text-[11px] ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>{isHi ? c.experienceHi : c.experienceEn}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-current/10">
                    <div className="flex items-center gap-1 font-bold">
                      <Star className={`w-3.5 h-3.5 ${isSelected ? 'fill-white text-white' : 'fill-neutral-950 text-neutral-950'}`} />
                      <span className={isSelected ? 'text-neutral-200' : 'text-neutral-800'}>{c.rating} ({c.sessionsCount}+ Sessions)</span>
                    </div>
                    <span className={`font-bold ${isSelected ? 'text-neutral-300' : 'text-neutral-700'}`}>{c.languages.join(', ')}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Col 2 & 3: Booking Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleBooking} className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-200 space-y-6">
            
            <h3 className="font-black text-xl text-neutral-950">
              {isHi ? '2. अपॉइंटमेंट विवरण दर्ज करें' : '2. Complete Booking Request'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'मुख्य चिंता विषय' : 'Primary Concern Topic'}</label>
                <select
                  value={concern}
                  onChange={(e) => setConcern(e.target.value)}
                  className="w-full p-3 rounded-xl border border-neutral-300 text-xs font-semibold bg-white text-neutral-950 outline-none focus:border-neutral-950"
                >
                  <option value="Job Security & Salary Verification">Job Security & Salary Verification</option>
                  <option value="Higher Education B.Voc Path">Higher Education B.Voc Credit Transfer</option>
                  <option value="Workplace Safety & Medical Insurance">Workplace Safety & Medical Insurance</option>
                  <option value="Student-Parent Opinion Resolution">Student vs Parent Conflict Resolution</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'पसंदीदा भाषा' : 'Preferred Language'}</label>
                <select
                  value={prefLang}
                  onChange={(e) => setPrefLang(e.target.value)}
                  className="w-full p-3 rounded-xl border border-neutral-300 text-xs font-semibold bg-white text-neutral-950 outline-none focus:border-neutral-950"
                >
                  <option value="Hindi">हिन्दी (Hindi)</option>
                  <option value="English">English</option>
                  <option value="Bhojpuri">Bhojpuri</option>
                  <option value="Maithili">Maithili</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'पसंदीदा दिनांक' : 'Preferred Date'}</label>
                <input
                  type="date"
                  value={prefDate}
                  onChange={(e) => setPrefDate(e.target.value)}
                  className="w-full p-3 rounded-xl border border-neutral-300 text-xs font-semibold bg-white text-neutral-950 outline-none focus:border-neutral-950"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-neutral-700">{isHi ? 'समय स्लॉट' : 'Preferred Time Slot'}</label>
                <select
                  value={prefTime}
                  onChange={(e) => setPrefTime(e.target.value)}
                  className="w-full p-3 rounded-xl border border-neutral-300 text-xs font-semibold bg-white text-neutral-950 outline-none focus:border-neutral-950"
                >
                  <option value="10:00 AM">Morning (10:00 AM - 11:00 AM)</option>
                  <option value="02:00 PM">Afternoon (02:00 PM - 03:00 PM)</option>
                  <option value="06:00 PM">Evening (06:00 PM - 07:00 PM)</option>
                </select>
              </div>

            </div>

            {/* Communication Mode Cards */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-neutral-700">{isHi ? 'संचार माध्यम' : 'Communication Mode'}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'Phone Call', label: 'Phone Call', icon: PhoneCall },
                  { id: 'Video Call', label: 'Video Call', icon: Video },
                  { id: 'WhatsApp Voice', label: 'WhatsApp', icon: MessageSquare },
                  { id: 'Skill Kendra', label: 'In-Person Kendra', icon: MapPin }
                ].map((mode) => {
                  const Icon = mode.icon;
                  const isSel = commMode === mode.id;
                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setCommMode(mode.id)}
                      className={`p-3 rounded-xl border text-xs font-bold text-center flex flex-col items-center gap-1.5 transition-all ${
                        isSel
                          ? 'border-neutral-950 bg-neutral-950 text-white shadow-sm'
                          : 'border-neutral-200 hover:border-neutral-400 text-neutral-700 bg-white'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isSel ? 'text-white' : 'text-neutral-950'}`} />
                      <span>{mode.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-black text-sm shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>{isHi ? 'परामर्श सत्र बुक करें (Request Counselling)' : 'Request Counselling Session'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};
