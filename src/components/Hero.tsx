import React from 'react';
import { ArrowRight, Sparkles, Play, ShieldCheck, Flame, Dumbbell, Award, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenPassModal: () => void;
  onOpenTourModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPassModal, onOpenTourModal }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-neutral-950 pt-10 pb-16">
      {/* Background imagery with dark athletic overlay and gradient lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2000&q=85"
          alt="IronPulse Athletic Facility Floor"
          className="w-full h-full object-cover object-center opacity-30 scale-105 filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,158,11,0.18),rgba(255,255,255,0))]" />
      </div>

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f0a_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Athletic badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 text-xs font-semibold text-amber-400 backdrop-blur-md shadow-lg shadow-amber-500/5">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Olympic Platforms • Contrast Recovery Spa • 24/7 Access</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[1.05]">
              Forge Your <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                Elite Physique
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-normal leading-relaxed">
              Step into a 35,000 sq.ft athletic proving ground engineered without compromises. 
              Calibrated Eleiko barbells, 40m indoor turf sprint arenas, 38°F Nordic cold plunges, 
              and world-class coaches dedicated to your lifelong strength and longevity.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="hero-claim-pass-btn"
                onClick={onOpenPassModal}
                className="px-7 py-4 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2.5 uppercase tracking-wider cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-neutral-950" />
                <span>Claim Free 3-Day VIP Pass</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-watch-tour-btn"
                onClick={onOpenTourModal}
                className="px-6 py-4 text-sm font-semibold text-white bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700 hover:border-neutral-500 rounded-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer backdrop-blur-sm"
              >
                <div className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Virtual Facility Tour</span>
              </button>
            </div>

            {/* Trust highlights */}
            <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Initiation Contracts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Keyless Smart Entry</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Award className="w-4 h-4 text-sky-400 shrink-0" />
                <span>100% Olympic Certified</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card Showcase (Right 5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main aesthetic image card */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 shadow-2xl shadow-black/80 group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=900&q=80"
                    alt="Athlete training with barbell at IronPulse"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                </div>

                {/* Floating Member Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">Featured Session</span>
                      <h2 className="text-sm font-bold text-white">HYROX Performance & Heavy Pulls</h2>
                      <p className="text-xs text-neutral-400">Coach Marcus Vance • Eleiko Loft</p>
                    </div>
                    <div className="text-right">
                      <span className="px-2 py-1 bg-amber-400/20 text-amber-300 text-[11px] font-bold rounded">
                        Daily 06:00 AM
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Stat Badge Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-xl bg-neutral-900/95 border border-neutral-800 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Dumbbell className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-black text-white leading-none">35,000</div>
                  <div className="text-[11px] text-neutral-400 font-medium">Sq.Ft Training Floor</div>
                </div>
              </div>

              {/* Floating Stat Badge Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3.5 rounded-xl bg-neutral-900/95 border border-neutral-800 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <span className="text-sm font-black">38°F</span>
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-none">Nordic Plunge</div>
                  <div className="text-[11px] text-neutral-400 font-medium">Daily Recovery Spa</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Facility Fast Metrics Bar */}
        <div id="stats-banner" className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 backdrop-blur-sm">
          <div className="text-center sm:text-left px-2">
            <div className="text-3xl sm:text-4xl font-black font-display text-white">40+</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Olympic Platforms</div>
            <p className="text-xs text-neutral-400 mt-0.5">Eleiko certified competition spec</p>
          </div>

          <div className="text-center sm:text-left px-2 border-l border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black font-display text-white">24/7/365</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Keyless Access</div>
            <p className="text-xs text-neutral-400 mt-0.5">Biometric & Apple Wallet turnstile</p>
          </div>

          <div className="text-center sm:text-left px-2 border-l border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black font-display text-white">18</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Master Coaches</div>
            <p className="text-xs text-neutral-400 mt-0.5">CSCS, USAW & DPT certified</p>
          </div>

          <div className="text-center sm:text-left px-2 border-l border-neutral-800/80">
            <div className="text-3xl sm:text-4xl font-black font-display text-white">4.9 ★</div>
            <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mt-1">Member Rating</div>
            <p className="text-xs text-neutral-400 mt-0.5">Over 1,200 verified athletes</p>
          </div>
        </div>

      </div>
    </section>
  );
};
