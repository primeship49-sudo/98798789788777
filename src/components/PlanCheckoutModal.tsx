import React, { useState } from 'react';
import { X, Check, ShieldCheck, CreditCard, Sparkles, ArrowRight, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MembershipPlan } from '../types';

interface PlanCheckoutModalProps {
  plan: MembershipPlan | null;
  billingCycle: 'monthly' | 'annual';
  onClose: () => void;
}

export const PlanCheckoutModal: React.FC<PlanCheckoutModalProps> = ({
  plan,
  billingCycle,
  onClose,
}) => {
  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
  });

  if (!plan) return null;

  const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#10b981', '#ffffff']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-lg my-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div className="space-y-6 text-left">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                Membership Enrollment
              </span>
              <h3 className="text-2xl font-black font-display text-white">
                Join {plan.name}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                ${price}/month ({billingCycle === 'annual' ? 'Billed annually - 20% discount' : 'Monthly flexible'})
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-2 text-xs text-neutral-300">
              <div className="font-semibold text-white">What's activated upon submission:</div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Immediate 24/7 keyless access pass credential</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero initiation fee promotion applied</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Full Legal Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jordan Hayes"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Payment setup occurs securely in the IronPulse Club app or at concierge turnstiles on your first visit. No advance charge today.</span>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Confirm {plan.name} Enrollment</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-in zoom-in-95">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="text-2xl font-black font-display text-white">
                Membership Activated!
              </h3>
              <p className="text-xs text-neutral-400 max-w-sm mx-auto">
                Welcome to IronPulse, <strong className="text-white">{formData.fullName || 'Athlete'}</strong>. Your membership to the <span className="text-amber-400 font-semibold">{plan.name}</span> is active.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-neutral-500">Plan Tier:</span>
                <span className="text-white font-bold">{plan.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Monthly Rate:</span>
                <span className="text-amber-400 font-bold">${price} / month</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Access Key:</span>
                <span className="text-emerald-400 font-mono font-bold">IP-MEMBER-{Math.floor(10000 + Math.random() * 90000)}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
