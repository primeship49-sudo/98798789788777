import React from 'react';
import { Star, Quote, Award, TrendingUp, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Proven Performance
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Athlete Transformations & PRs
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Real outcomes from physicians, engineers, and competitive athletes who made IronPulse their physical proving ground.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-${t.id}`}
              className="p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between space-y-6 hover:border-neutral-700 transition-all shadow-xl"
            >
              <div className="space-y-4">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Achievement Highlight pill */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-xs font-bold text-amber-300">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{t.achievement}</span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Transformation Metrics row */}
              <div className="pt-4 border-t border-neutral-800/80 space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  {t.stats.map((stat, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-center">
                      <div className="text-[10px] text-neutral-400 uppercase font-semibold">{stat.label}</div>
                      <div className="text-sm font-black text-white mt-0.5">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Author row */}
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-neutral-700"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{t.name}</h4>
                    <p className="text-[11px] text-neutral-400">{t.role}</p>
                    <span className="text-[10px] text-amber-400/80 font-medium">{t.timeframe}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
