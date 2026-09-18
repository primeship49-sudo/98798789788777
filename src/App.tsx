import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgramsSection } from './components/ProgramsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { PricingSection } from './components/PricingSection';
import { CalculatorSection } from './components/CalculatorSection';
import { TrainersSection } from './components/TrainersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';

import { PassModal } from './components/PassModal';
import { PlanCheckoutModal } from './components/PlanCheckoutModal';
import { ConsultationModal } from './components/ConsultationModal';
import { FacilityTourModal } from './components/FacilityTourModal';
import { MemberPortalModal } from './components/MemberPortalModal';
import { GitHubPagesHelperModal } from './components/GitHubPagesHelperModal';

import { ClassSession, MembershipPlan, Trainer, TrainingCategory } from './types';
import { CheckCircle, Clock, MapPin, Calendar, X, Sparkles } from 'lucide-react';

export default function App() {
  // Modal states
  const [isPassModalOpen, setIsPassModalOpen] = useState(false);
  const [isMemberPortalOpen, setIsMemberPortalOpen] = useState(false);
  const [isGithubHelperOpen, setIsGithubHelperOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);

  // Flow states
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);
  const [checkoutPlan, setCheckoutPlan] = useState<MembershipPlan | null>(null);
  const [checkoutBilling, setCheckoutBilling] = useState<'monthly' | 'annual'>('monthly');

  // Schedule filtering state
  const [selectedCategory, setSelectedCategory] = useState<TrainingCategory>('All');
  const [bookedSession, setBookedSession] = useState<ClassSession | null>(null);

  // Jump handlers
  const handleSelectCategoryFromPrograms = (category: 'Strength' | 'Conditioning' | 'Combat' | 'Mobility' | 'Recovery') => {
    setSelectedCategory(category);
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToSchedule = () => {
    const scheduleEl = document.getElementById('schedule');
    if (scheduleEl) {
      scheduleEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => {
    setCheckoutPlan(plan);
    setCheckoutBilling(billingCycle);
  };

  const handleBookClass = (session: ClassSession) => {
    setBookedSession(session);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950">
      
      {/* Top Navbar */}
      <Navbar
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onOpenMemberPortal={() => setIsMemberPortalOpen(true)}
        onOpenGithubHelper={() => setIsGithubHelperOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenPassModal={() => setIsPassModalOpen(true)}
          onOpenTourModal={() => setIsTourModalOpen(true)}
        />

        {/* Training Disciplines & Programs */}
        <ProgramsSection
          onSelectCategory={handleSelectCategoryFromPrograms}
        />

        {/* Interactive Master Timetable & Class Booking */}
        <ScheduleSection
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onBookClass={handleBookClass}
        />

        {/* World-Class Infrastructure & Amenities */}
        <AmenitiesSection />

        {/* Interactive Athlete Macro & Training Split Calculator */}
        <CalculatorSection
          onOpenPassModal={() => setIsPassModalOpen(true)}
          onNavigateToSchedule={handleNavigateToSchedule}
        />

        {/* Transparent Membership Tiers & Pricing */}
        <PricingSection
          onSelectPlan={handleSelectPlan}
          onOpenPassModal={() => setIsPassModalOpen(true)}
        />

        {/* Master Coaches & Physical Doctors */}
        <TrainersSection
          onBookConsultation={(trainer) => setSelectedTrainer(trainer)}
        />

        {/* Verified Athlete Transformations & Testimonials */}
        <TestimonialsSection />

      </main>

      {/* Footer & FAQs */}
      <Footer
        onOpenPassModal={() => setIsPassModalOpen(true)}
        onOpenGithubHelper={() => setIsGithubHelperOpen(true)}
      />

      {/* --- Interactive Modals --- */}

      {/* 3-Day Free VIP Pass Generator Modal */}
      <PassModal
        isOpen={isPassModalOpen}
        onClose={() => setIsPassModalOpen(false)}
      />

      {/* Membership Plan Checkout / Activation Modal */}
      <PlanCheckoutModal
        plan={checkoutPlan}
        billingCycle={checkoutBilling}
        onClose={() => setCheckoutPlan(null)}
      />

      {/* Coach 1-on-1 Consultation Modal */}
      <ConsultationModal
        trainer={selectedTrainer}
        onClose={() => setSelectedTrainer(null)}
      />

      {/* Virtual Facility Tour Modal */}
      <FacilityTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        onOpenPassModal={() => {
          setIsTourModalOpen(false);
          setIsPassModalOpen(true);
        }}
      />

      {/* Member Keycard & Turnstile Portal Modal */}
      <MemberPortalModal
        isOpen={isMemberPortalOpen}
        onClose={() => setIsMemberPortalOpen(false)}
      />

      {/* GitHub Pages Compatibility Guide Modal */}
      <GitHubPagesHelperModal
        isOpen={isGithubHelperOpen}
        onClose={() => setIsGithubHelperOpen(false)}
      />

      {/* Class Reservation Instant Confirmation Toast/Modal */}
      {bookedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-md rounded-3xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl space-y-5 text-left">
            <button
              onClick={() => setBookedSession(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white cursor-pointer transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Reservation Confirmed
              </span>
              <h3 className="text-xl font-black font-display text-white mt-0.5">
                {bookedSession.name}
              </h3>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Day: <strong className="text-white">{bookedSession.day}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Time: <strong className="text-white">{bookedSession.time}</strong> ({bookedSession.duration})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Room: <strong className="text-white">{bookedSession.room}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Coach: <strong className="text-white">{bookedSession.coach}</strong></span>
              </div>
            </div>

            <p className="text-xs text-neutral-400">
              Your reservation is tied to your IronPulse Digital Pass. Please arrive 10 minutes prior for warmup and equipment setup.
            </p>

            <button
              onClick={() => setBookedSession(null)}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
