import React, { useState } from 'react';
import { X, Sparkles, CheckCircle, QrCode, Printer, Download, ArrowRight, ShieldCheck, Dumbbell, Calendar, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { FreePassData, GeneratedPass } from '../types';

interface PassModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PassModal: React.FC<PassModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FreePassData>({
    fullName: '',
    email: '',
    phone: '',
    startDate: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (06:00 AM - 11:00 AM)',
    primaryGoal: 'Strength & Barbell Hypertrophy',
    experienceLevel: 'Intermediate',
  });

  const [generatedPass, setGeneratedPass] = useState<GeneratedPass | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setErrorMsg('Please enter your full name and valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      const passNum = `IP-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
      const start = new Date(formData.startDate || new Date());
      const end = new Date(start);
      end.setDate(start.getDate() + 3);

      const pass: GeneratedPass = {
        passNumber: passNum,
        fullName: formData.fullName,
        email: formData.email,
        startDate: start.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        expiryDate: end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        goal: formData.primaryGoal,
        barcode: `||| | |||| | ||| |||| | || ${passNum} |||| | |||`,
        qrCodeSeed: passNum,
        createdDate: new Date().toLocaleDateString(),
      };

      setGeneratedPass(pass);
      setIsSubmitting(false);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#fbbf24', '#ffffff', '#10b981']
      });
    }, 600);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-xl my-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6">
        
        {/* Close Button */}
        <button
          id="close-pass-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800/80 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!generatedPass ? (
          /* Pass Generation Form */
          <div className="space-y-6">
            <div className="space-y-1 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Cost • No Credit Card Required</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                Claim Your 3-Day Free VIP Pass
              </h3>
              <p className="text-xs text-neutral-400">
                Gain full, unrestricted access to our 35,000 sq.ft facility, Eleiko platforms, 38°F contrast plunge, and daily coach-led group classes.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-400">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-amber-400 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-amber-400 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Preferred Start Date</label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Primary Goal</label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none cursor-pointer"
                  >
                    <option value="Strength & Barbell Hypertrophy">Strength & Barbell Hypertrophy</option>
                    <option value="HYROX & Aerobic Endurance">HYROX & Aerobic Endurance</option>
                    <option value="Contrast Recovery & Longevity">Contrast Recovery & Longevity</option>
                    <option value="Boxing Striking & Agility">Boxing Striking & Agility</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Training Experience</label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none cursor-pointer"
                  >
                    <option value="Beginner">Beginner (1-2 years)</option>
                    <option value="Intermediate">Intermediate (3-5 years)</option>
                    <option value="Advanced">Advanced / Competitor (5+ years)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-neutral-950 shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Generating Encrypted Pass...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Instant VIP Pass Activation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-neutral-500">
                By claiming this pass, you agree to club safety etiquette. Valid for first-time visitors over 18.
              </p>
            </form>
          </div>
        ) : (
          /* Generated Digital VIP Pass Card */
          <div className="space-y-6 animate-in zoom-in-95">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                <CheckCircle className="w-4 h-4" />
                <span>VIP Access Pass Issued Successfully</span>
              </div>
              <h3 className="text-2xl font-black font-display text-white">
                Welcome to IronPulse
              </h3>
            </div>

            {/* The Digital Pass Ticket */}
            <div className="relative rounded-2xl bg-gradient-to-b from-neutral-950 to-neutral-900 border-2 border-amber-400/80 p-6 shadow-2xl space-y-6 text-left overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-neutral-950 flex items-center justify-center font-black">
                    <Dumbbell className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-black font-display text-white">IRONPULSE</div>
                    <div className="text-[9px] uppercase tracking-widest text-amber-400 font-bold">3-Day VIP Guest Pass</div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    ACTIVE
                  </span>
                  <div className="text-[10px] text-neutral-400 mt-0.5 font-mono">{generatedPass.passNumber}</div>
                </div>
              </div>

              {/* Pass Body Info */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Athlete Name</span>
                  <p className="text-sm font-bold text-white">{generatedPass.fullName}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Goal Track</span>
                  <p className="text-sm font-bold text-amber-300 truncate">{generatedPass.goal}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Valid From</span>
                  <p className="text-xs font-semibold text-neutral-200">{generatedPass.startDate}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-500">Expires</span>
                  <p className="text-xs font-semibold text-neutral-200">{generatedPass.expiryDate}</p>
                </div>
              </div>

              {/* Barcode representation */}
              <div className="pt-4 border-t border-dashed border-neutral-800 text-center space-y-2">
                <div className="font-mono text-xs tracking-widest text-neutral-300 font-bold select-all bg-neutral-950 py-2 rounded-lg border border-neutral-800">
                  {generatedPass.barcode}
                </div>
                <p className="text-[10px] text-neutral-400 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Present this pass at reception or scan barcode at turnstiles
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Printer className="w-4 h-4" />
                <span>Print Pass Card</span>
              </button>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-md"
              >
                <span>Done / Close</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
