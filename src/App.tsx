import { useState } from 'react';
import type { ScreenId, Language, StudentProfile, ParentProfile } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScreenSwitcherBar } from './components/ScreenSwitcherBar';

import { LandingScreen } from './screens/LandingScreen';
import { LanguageScreen } from './screens/LanguageScreen';
import { StudentOnboardingScreen } from './screens/StudentOnboardingScreen';
import { ParentOnboardingScreen } from './screens/ParentOnboardingScreen';
import { FamilyDashboardScreen } from './screens/FamilyDashboardScreen';
import { AICounsellorScreen } from './screens/AICounsellorScreen';
import { CareerRecommendationsScreen } from './screens/CareerRecommendationsScreen';
import { CareerDetailScreen } from './screens/CareerDetailScreen';
import { SkillRoadmapScreen } from './screens/SkillRoadmapScreen';
import { CareerComparisonScreen } from './screens/CareerComparisonScreen';
import { HumanCounsellorScreen } from './screens/HumanCounsellorScreen';
import { AdminDashboardScreen } from './screens/AdminDashboardScreen';
import { JobsScreen } from './screens/JobsScreen';
import { ResumeBuilderScreen } from './screens/ResumeBuilderScreen';
import { AuthScreen } from './screens/AuthScreen';

export function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('landing');
  const [language, setLanguage] = useState<Language>('en');
  const [selectedCareerId, setSelectedCareerId] = useState<string>('solar-tech');

  const [studentProfile, setStudentProfile] = useState<StudentProfile>({
    name: 'Rahul Verma',
    age: '17',
    state: 'Bihar',
    district: 'Patna',
    areaType: 'Semi-Urban',
    educationLevel: 'Class 10th Passed / Pursuing',
    academicStream: 'Science',
    academicPerformance: '65% - 80%',
    interests: ['Solar & Green Energy', 'Electrical Wiring & Power'],
    skills: ['Basic Electrical Wiring', 'Soldering', 'Computer Operation'],
    preferredWorkType: 'Hands-on Practical',
    preferredWorkLocation: 'Home District',
    careerInterests: ['Solar PV Technician', 'Building Electrician']
  });

  const [parentProfile, setParentProfile] = useState<ParentProfile>({
    selectedConcerns: ['income', 'security', 'growth', 'safety', 'placement'],
    customQuestion: 'Is Solar Technician a permanent job with stable monthly salary and govt backing?'
  });

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const updateStudentProfile = (update: Partial<StudentProfile>) => {
    setStudentProfile((prev) => ({ ...prev, ...update }));
  };

  const updateParentProfile = (update: Partial<ParentProfile>) => {
    setParentProfile((prev) => ({ ...prev, ...update }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* Top Demo Screen Switcher Bar for Hackathon / Jury Review */}
      <ScreenSwitcherBar
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
        language={language}
      />

      {/* Main App Header */}
      <Header
        currentScreen={currentScreen}
        onSelectScreen={setCurrentScreen}
        language={language}
        onToggleLanguage={toggleLanguage}
        studentName={studentProfile.name}
      />

      {/* Main View Area rendering the active screen */}
      <main className="flex-1">
        {currentScreen === 'landing' && (
          <LandingScreen
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}

        {currentScreen === 'language' && (
          <LanguageScreen
            language={language}
            onSelectLanguage={setLanguage}
            onContinue={() => setCurrentScreen('student-onboarding')}
          />
        )}

        {currentScreen === 'student-onboarding' && (
          <StudentOnboardingScreen
            studentProfile={studentProfile}
            onUpdateProfile={updateStudentProfile}
            onComplete={() => setCurrentScreen('parent-onboarding')}
            language={language}
          />
        )}

        {currentScreen === 'parent-onboarding' && (
          <ParentOnboardingScreen
            parentProfile={parentProfile}
            onUpdateParentProfile={updateParentProfile}
            onComplete={() => setCurrentScreen('family-dashboard')}
            language={language}
          />
        )}

        {currentScreen === 'family-dashboard' && (
          <FamilyDashboardScreen
            studentProfile={studentProfile}
            parentProfile={parentProfile}
            onSelectScreen={setCurrentScreen}
            onSelectCareer={setSelectedCareerId}
            language={language}
          />
        )}

        {currentScreen === 'ai-counsellor' && (
          <AICounsellorScreen
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}

        {currentScreen === 'career-recommendations' && (
          <CareerRecommendationsScreen
            studentProfile={studentProfile}
            parentProfile={parentProfile}
            onSelectScreen={setCurrentScreen}
            onSelectCareer={setSelectedCareerId}
            language={language}
          />
        )}

        {currentScreen === 'career-detail' && (
          <CareerDetailScreen
            careerId={selectedCareerId}
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}

        {currentScreen === 'skill-roadmap' && (
          <SkillRoadmapScreen
            selectedCareerId={selectedCareerId}
            onSelectScreen={setCurrentScreen}
            onSelectCareer={setSelectedCareerId}
            language={language}
          />
        )}

        {currentScreen === 'career-comparison' && (
          <CareerComparisonScreen
            onSelectScreen={setCurrentScreen}
            onSelectCareer={setSelectedCareerId}
            language={language}
          />
        )}

        {currentScreen === 'human-counsellor' && (
          <HumanCounsellorScreen
            studentProfile={studentProfile}
            parentProfile={parentProfile}
            language={language}
          />
        )}

        {currentScreen === 'admin-dashboard' && (
          <AdminDashboardScreen
            language={language}
          />
        )}

        {currentScreen === 'jobs' && (
          <JobsScreen
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}

        {currentScreen === 'resume-builder' && (
          <ResumeBuilderScreen
            studentProfile={studentProfile}
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}

        {currentScreen === 'auth' && (
          <AuthScreen
            onSelectScreen={setCurrentScreen}
            language={language}
          />
        )}
      </main>

      {/* Main App Footer */}
      <Footer
        onSelectScreen={setCurrentScreen}
        language={language}
      />

    </div>
  );
}

export default App;
