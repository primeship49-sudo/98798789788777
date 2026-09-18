import React, { useState } from 'react';
import { Check, Sparkles, Shield, ArrowRight, Star } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { MembershipPlan } from '../types';

interface PricingSectionProps {
  onSelectPlan: (plan: MembershipPlan, billingCycle: 'monthly' | 'annual') => void;
  onOpenPassModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, onOpenPassModal }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Transparent Memberships
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Invest in Your Physical Capital
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Zero initiation hidden fees. Cancel or freeze anytime with 14 days notice. 
            All memberships include 24/7 keyless biometric access and digital locker service.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <div className="inline-flex items-center p-1 rounded-xl bg-neutral-900 border border-neutral-800">
              <button
                id="billing-monthly-btn"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === 'monthly'
                    ? 'bg-amber-400 text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                Monthly Flexibility
              </button>
              <button
                id="billing-annual-btn"
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  billingCycle === 'annual'
                    ? 'bg-amber-400 text-neutral-950 shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <span>Annual Commitment</span>
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-extrabold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                id={`pricing-card-${plan.id}`}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isPopular
                    ? 'bg-neutral-900/90 border-2 border-amber-400 shadow-2xl shadow-amber-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tag */}
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-2xl font-black font-display text-white">
                      {plan.name}
                    </h3>
                    {plan.badge && !isPopular && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-neutral-800 text-neutral-300 border border-neutral-700">
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs text-neutral-400 mt-2 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="my-6 pb-6 border-b border-neutral-800">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-black font-display text-white">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-400 font-medium">
                        / month {billingCycle === 'annual' && '(billed annually)'}
                      </span>
                    </div>
                    <p className="text-[11px] text-amber-400/90 mt-1 font-medium">
                      Best for: {plan.idealFor}
                    </p>
                  </div>

                  {/* Core Features */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Included In Membership:
                    </h4>
                    <ul className="space-y-2.5 text-xs text-neutral-300">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Exclusive Perks */}
                  {plan.exclusivePerks.length > 0 && (
                    <div className="mt-6 pt-4 border-t border-neutral-800/80 space-y-2">
                      <h4 className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Tier Privileges:
                      </h4>
                      <ul className="space-y-2 text-xs text-neutral-400">
                        {plan.exclusivePerks.map((perk, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span>{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <button
                    id={`select-plan-btn-${plan.id}`}
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isPopular
                        ? 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-lg shadow-amber-500/20 active:scale-98'
                        : 'bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700'
                    }`}
                  >
                    <span>Select {plan.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-neutral-500 mt-2">
                    Instant biometric pass activation upon completion
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Not Ready Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-neutral-900 to-neutral-900/60 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-white flex items-center gap-2 justify-center sm:justify-start">
              <Shield className="w-4 h-4 text-amber-400" />
              Not sure which tier fits your training regimen?
            </h4>
            <p className="text-xs text-neutral-400">
              Experience the entire 35,000 sq.ft facility and contrast recovery plunge completely free for 3 days. No credit card required.
            </p>
          </div>

          <button
            id="pricing-claim-trial-btn"
            onClick={onOpenPassModal}
            className="px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 shrink-0 transition-colors shadow-md cursor-pointer"
          >
            Claim 3-Day Free Pass
          </button>
        </div>

      </div>
    </section>
  );
};
