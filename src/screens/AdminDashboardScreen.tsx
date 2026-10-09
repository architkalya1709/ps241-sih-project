import React, { useEffect, useState } from 'react';
import type { Language } from '../types';
import { fetchAdminAnalytics } from '../api/client';
import { ADMIN_STATS_DATA } from '../data/mockData';
import {
  ShieldCheck,
  Users,
  HeartHandshake,
  Bot,
  PhoneCall,
  Clock,
  BarChart3,
  PieChart,
  MapPin,
  TrendingUp,
  Filter
} from 'lucide-react';

interface Props {
  language: Language;
}

export const AdminDashboardScreen: React.FC<Props> = ({ language }) => {
  const isHi = language === 'hi';
  const [stats, setStats] = useState<any>(ADMIN_STATS_DATA);
  const [apiConnected, setApiConnected] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    fetchAdminAnalytics()
      .then((data) => {
        if (isMounted && data) {
          setStats(data);
          setApiConnected(true);
        }
      })
      .catch((err) => {
        console.warn('Admin analytics API error:', err);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Demo Analytics Banner Notice */}
      <div className="bg-white border border-neutral-200 text-neutral-950 px-4 py-3 rounded-2xl flex items-center justify-between text-xs font-bold shadow-sm">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-neutral-950" />
          <span>{isHi ? 'प्रशासनिक एनालिटिक्स पोर्टल (Prototype / Demo Analytics)' : 'Prototype / Demo Analytics (Skill India Vocational Insights)'}</span>
        </div>
        <span className={`px-3 py-1 rounded-full border font-mono text-[11px] ${
          apiConnected ? 'bg-neutral-100 text-neutral-950 border-neutral-300' : 'bg-neutral-100 text-neutral-600 border-neutral-300'
        }`}>
          {apiConnected ? '● Live Telemetry API (port 5000)' : 'PAN-India Telemetry'}
        </span>
      </div>

      {/* Admin Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-neutral-950 tracking-tight">
            {isHi ? 'करियरसाथी राष्ट्रीय एनालिटिक्स डैशबोर्ड' : 'CareerSaathi National Analytics'}
          </h1>
          <p className="text-xs text-neutral-500">
            {isHi
              ? 'वोकेशनल शिक्षा पारितंत्र, अभिभावक सहभागिता और एआई परामर्श रुझान'
              : 'Real-time telemetry on student-parent counselling, trade preferences & escalations'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3.5 py-2 bg-white border border-neutral-300 rounded-xl text-xs font-bold text-neutral-800 flex items-center gap-1.5 shadow-sm hover:border-neutral-950">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter by State</span>
          </button>
          <span className="text-xs font-bold text-neutral-400">Oct 2026 Live</span>
        </div>
      </div>

      {/* KPI METRIC CARDS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-bold">
            <span>TOTAL USERS</span>
            <Users className="w-4 h-4 text-neutral-950" />
          </div>
          <div className="text-2xl font-black text-neutral-950">
            {stats.totalUsers.toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 font-bold">↑ +14.2% this month</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-bold">
            <span>PARENT PARTICIPATION</span>
            <HeartHandshake className="w-4 h-4 text-neutral-950" />
          </div>
          <div className="text-2xl font-black text-neutral-950">
            {stats.parentParticipationRate}%
          </div>
          <span className="text-[11px] text-neutral-600 font-bold">High Alignment</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-bold">
            <span>AI SESSIONS</span>
            <Bot className="w-4 h-4 text-neutral-950" />
          </div>
          <div className="text-2xl font-black text-neutral-950">
            {stats.counsellingSessions.toLocaleString()}
          </div>
          <span className="text-[11px] text-neutral-600 font-bold">99.2% Resolved</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-bold">
            <span>HUMAN ESCALATION</span>
            <PhoneCall className="w-4 h-4 text-neutral-950" />
          </div>
          <div className="text-2xl font-black text-neutral-950">
            {stats.humanEscalationRate}%
          </div>
          <span className="text-[11px] text-neutral-500 font-bold">Low Friction Rate</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-neutral-200 shadow-sm space-y-1">
          <div className="flex items-center justify-between text-neutral-400 text-xs font-bold">
            <span>AVG DECISION TIME</span>
            <Clock className="w-4 h-4 text-neutral-950" />
          </div>
          <div className="text-2xl font-black text-neutral-950">
            {stats.avgDecisionTimeDays} Days
          </div>
          <span className="text-[11px] text-neutral-600 font-bold">Fast Family Consensus</span>
        </div>

      </div>

      {/* CHARTS ROW 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-neutral-950 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-neutral-950" />
                <span>{isHi ? 'अभिभावक मुख्य चिंताएं (%)' : 'Top Parent Hesitations (%)'}</span>
              </h3>
              <p className="text-xs text-neutral-500">Distribution of parent concern cards selected nationwide</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {stats.parentConcernsBreakdown.map((item: any) => (
              <div key={item.nameEn} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-neutral-800">{isHi ? item.nameHi : item.nameEn}</span>
                  <span className="text-neutral-950 font-black">{item.value}%</span>
                </div>
                <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                  <div
                    className="h-full rounded-full transition-all bg-neutral-950"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-neutral-950 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-neutral-950" />
                <span>{isHi ? 'सर्वाधिक चुने गए वोकेशनल ट्रेड' : 'Most Selected Vocational Trades'}</span>
              </h3>
              <p className="text-xs text-neutral-500">Popularity index among students and parents</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            {stats.topTradesRequested.map((trade: any) => (
              <div key={trade.tradeEn} className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-neutral-800">{isHi ? trade.tradeHi : trade.tradeEn}</span>
                  <span className="text-neutral-950 font-black">{trade.percentage}% Share</span>
                </div>
                <div className="w-full h-3 bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                  <div
                    className="h-full bg-neutral-900 rounded-full"
                    style={{ width: `${trade.percentage * 2.8}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* CHARTS ROW 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-neutral-200 space-y-4">
          <h3 className="font-extrabold text-base text-neutral-950 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-neutral-950" />
            <span>{isHi ? 'क्षेत्रीय राज्य वितरण' : 'Regional User Volume by State'}</span>
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs">
            {stats.regionalDistribution.map((reg: any) => (
              <div key={reg.stateEn} className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 space-y-1">
                <span className="text-neutral-500 font-bold uppercase text-[10px]">{reg.stateEn}</span>
                <div className="text-base font-black text-neutral-950">{reg.count.toLocaleString()} Users</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white text-neutral-950 rounded-3xl p-6 shadow-sm space-y-4 border border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-600 text-xs font-extrabold uppercase">
            <TrendingUp className="w-4 h-4 text-neutral-950" />
            <span>Family Alignment & Consensus Score</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-600">Initial Student vs Parent Hesitation:</span>
              <strong className="text-neutral-950 font-bold">42% Gap</strong>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="text-neutral-600">Post-AI Counselling Consensus:</span>
              <strong className="text-neutral-950 font-black">89% Consensus Rate</strong>
            </div>

            <div className="pt-3 border-t border-neutral-200 text-[11px] text-neutral-600 leading-relaxed">
              "CareerSaathi's dual student-parent onboarding reduces family decision paralysis from 3 weeks down to less than 3 days, increasing ITI & Skill admissions by 34%."
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
