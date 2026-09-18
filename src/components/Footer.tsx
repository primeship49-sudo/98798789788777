import React, { useState } from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, ShieldCheck, ChevronDown, ChevronUp, Send, Check, Heart } from 'lucide-react';
import { GYM_INFO, FAQS } from '../data/gymData';

interface FooterProps {
  onOpenPassModal: () => void;
  onOpenGithubHelper: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPassModal, onOpenGithubHelper }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="location" className="bg-neutral-950 border-t border-neutral-900 text-neutral-400">
      
      {/* FAQs Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-neutral-900">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-black font-display text-white uppercase tracking-tight">
            Everything You Need To Know
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/50 border border-neutral-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:text-amber-400 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-amber-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 font-bold">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white">
                IRON<span className="text-amber-400">PULSE</span>
              </span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              An uncompromising 35,000 sq.ft proving ground engineered for barbell strength, competition endurance, and active longevity.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenGithubHelper}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900 border border-neutral-800 text-amber-400 hover:text-amber-300 text-xs font-semibold cursor-pointer transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GitHub Pages Ready & Tested</span>
              </button>
            </div>
          </div>

          {/* Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Location & Access
            </h3>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{GYM_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:5557897857" className="hover:text-white transition-colors">{GYM_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${GYM_INFO.email}`} className="hover:text-white transition-colors">{GYM_INFO.email}</a>
              </div>
            </div>

            <div className="pt-2 text-xs">
              <div className="text-neutral-300 font-semibold">24/7 Keyless Turnstiles:</div>
              <p className="text-[11px] text-neutral-500">Always active for verified members & pass holders.</p>
            </div>
          </div>

          {/* Hours (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              Staffed Concierge
            </h3>
            <div className="space-y-1 text-xs text-neutral-400">
              <p className="font-semibold text-neutral-300">Mon - Fri:</p>
              <p className="text-[11px] text-neutral-500">5:00 AM – 11:00 PM</p>
              
              <p className="font-semibold text-neutral-300 pt-2">Sat - Sun:</p>
              <p className="text-[11px] text-neutral-500">6:00 AM – 9:00 PM</p>

              <p className="font-semibold text-neutral-300 pt-2">Contrast Spa:</p>
              <p className="text-[11px] text-neutral-500">Daily 6:00 AM – 10:30 PM</p>
            </div>
          </div>

          {/* Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">
              The Weekly Protocol
            </h3>
            <p className="text-xs text-neutral-400">
              Receive research-backed lifting splits, mobility sequences, and recovery protocols curated by Dr. Lin.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="flex gap-1.5">
                <input
                  type="email"
                  required
                  placeholder="athlete@email.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:border-amber-400 outline-none"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold rounded-lg text-xs cursor-pointer transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Subscribed successfully!
                </span>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {GYM_INFO.name}. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-amber-400 transition-colors">Back to Top</a>
            <button onClick={onOpenPassModal} className="hover:text-amber-400 transition-colors cursor-pointer">Free 3-Day Pass</button>
            <button onClick={onOpenGithubHelper} className="text-amber-400 hover:underline cursor-pointer">GitHub Pages Config</button>
          </div>
        </div>

      </div>
    </footer>
  );
};
