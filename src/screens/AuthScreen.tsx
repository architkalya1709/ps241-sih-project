import React, { useState } from 'react';
import type { ScreenId, Language } from '../types';
import { Lock, Mail, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

interface Props {
  onSelectScreen: (screen: ScreenId) => void;
  language: Language;
}

export const AuthScreen: React.FC<Props> = ({ onSelectScreen, language }) => {
  const isHi = language === 'hi';
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot'>('login');
  const [role, setRole] = useState<'student' | 'parent'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccessMsg('');

    if (!email.trim() || !email.includes('@')) {
      setError(isHi ? 'कृपया एक वैध ईमेल पता दर्ज करें' : 'Please enter a valid email address');
      return;
    }

    if (mode !== 'forgot' && password.length < 6) {
      setError(isHi ? 'पासवर्ड कम से कम 6 वर्णों का होना चाहिए' : 'Password must be at least 6 characters');
      return;
    }

    if (mode === 'signup' && !name.trim()) {
      setError(isHi ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your full name');
      return;
    }

    if (mode === 'forgot') {
      setSuccessMsg(
        isHi
          ? 'पासवर्ड रीसेट लिंक आपके ईमेल पर भेजा गया है'
          : 'Password reset link has been sent to your email'
      );
      return;
    }

    setSuccessMsg(
      mode === 'login'
        ? isHi ? 'सफलतापूर्वक साइन इन हुआ!' : 'Successfully logged in!'
        : isHi ? 'खाता सफलतापूर्वक बनाया गया!' : 'Account created successfully!'
    );

    setTimeout(() => {
      onSelectScreen('family-dashboard');
    }, 800);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-neutral-950 space-y-6">
        
        {/* Header Title */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white font-black flex items-center justify-center text-xl mx-auto shadow-md">
            CS
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight">
            {mode === 'login'
              ? isHi ? 'वापसी पर स्वागत है' : 'Welcome Back'
              : mode === 'signup'
              ? isHi ? 'खाता बनाएं' : 'Create Account'
              : isHi ? 'पासवर्ड रीसेट करें' : 'Reset Password'}
          </h1>
          <p className="text-xs text-neutral-500 font-medium">
            {isHi ? 'करियरसाथी एआई वोकेशनल पोर्टल' : 'CareerSaathi Vocational AI Platform'}
          </p>
        </div>

        {/* Role Selector */}
        {mode !== 'forgot' && (
          <div className="grid grid-cols-2 gap-2 p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200">
            <button
              type="button"
              onClick={() => setRole('student')}
              className={`py-2 rounded-xl text-xs font-extrabold transition-all ${
                role === 'student' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {isHi ? 'छात्र (Student)' : 'Student'}
            </button>
            <button
              type="button"
              onClick={() => setRole('parent')}
              className={`py-2 rounded-xl text-xs font-extrabold transition-all ${
                role === 'parent' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {isHi ? 'अभिभावक (Parent)' : 'Parent'}
            </button>
          </div>
        )}

        {/* Feedback Messages */}
        {error && (
          <div className="bg-neutral-100 border-l-4 border-neutral-950 text-neutral-900 p-3.5 rounded-r-xl text-xs font-bold">
            ⚠ {error}
          </div>
        )}

        {successMsg && (
          <div className="bg-neutral-950 text-white p-3.5 rounded-xl text-xs font-extrabold text-center shadow">
            ✓ {successMsg}
          </div>
        )}

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
          {mode === 'signup' && (
            <div className="space-y-1">
              <label className="text-neutral-700 font-bold block">{isHi ? 'पूरा नाम' : 'Full Name'}</label>
              <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl border border-neutral-300 focus-within:border-neutral-950 bg-white">
                <User className="w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="e.g. Rahul Verma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full outline-none text-neutral-950"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-neutral-700 font-bold block">Email Address</label>
            <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl border border-neutral-300 focus-within:border-neutral-950 bg-white">
              <Mail className="w-4 h-4 text-neutral-400" />
              <input
                type="email"
                placeholder="name@careersaathi.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full outline-none text-neutral-950"
              />
            </div>
          </div>

          {mode !== 'forgot' && (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-neutral-700 font-bold block">Password</label>
                {mode === 'login' && (
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-[11px] font-bold text-neutral-600 hover:text-neutral-950 underline"
                  >
                    {isHi ? 'पासवर्ड भूल गए?' : 'Forgot Password?'}
                  </button>
                )}
              </div>
              <div className="flex items-center gap-2 px-3.5 py-3 rounded-xl border border-neutral-300 focus-within:border-neutral-950 bg-white">
                <Lock className="w-4 h-4 text-neutral-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full outline-none text-neutral-950"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-400 hover:text-neutral-950"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-neutral-950 hover:bg-neutral-800 text-white font-black text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
          >
            <span>
              {mode === 'login'
                ? isHi ? 'साइन इन करें' : 'Sign In'
                : mode === 'signup'
                ? isHi ? 'खाता बनाएं' : 'Create Account'
                : isHi ? 'रीसेट लिंक भेजें' : 'Send Reset Link'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Mode Switch Footer */}
        <div className="pt-2 text-center text-xs font-semibold text-neutral-600 border-t border-neutral-100">
          {mode === 'login' ? (
            <p>
              {isHi ? 'नया खाता बनाना चाहते हैं?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setMode('signup')}
                className="text-neutral-950 font-black underline hover:text-neutral-700"
              >
                {isHi ? 'साइन अप करें' : 'Sign Up'}
              </button>
            </p>
          ) : (
            <p>
              {isHi ? 'पहले से खाता है?' : 'Already have an account?'}{' '}
              <button
                onClick={() => setMode('login')}
                className="text-neutral-950 font-black underline hover:text-neutral-700"
              >
                {isHi ? 'साइन इन करें' : 'Sign In'}
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
};
