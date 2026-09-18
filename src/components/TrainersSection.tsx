import React from 'react';
import { Award, CheckCircle, Calendar, MessageSquare, ArrowRight } from 'lucide-react';
import { TRAINERS } from '../data/gymData';
import { Trainer } from '../types';

interface TrainersSectionProps {
  onBookConsultation: (trainer: Trainer) => void;
}

export const TrainersSection: React.FC<TrainersSectionProps> = ({ onBookConsultation }) => {
  return (
    <section id="coaches" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Elite Human Capital
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Master Coaches & Physical Doctors
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            No casual trainers. Our coaching staff consists of former Olympic qualifiers, doctors of physical therapy, and national champions dedicated to your progression.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRAINERS.map((trainer) => (
            <div
              key={trainer.id}
              id={`trainer-card-${trainer.id}`}
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-black/70"
            >
              {/* Photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                
                {/* Experience badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-[11px] font-bold text-amber-400">
                  {trainer.experience}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-xl font-bold font-display text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-neutral-400 leading-relaxed italic border-l-2 border-amber-400 pl-2.5">
                  "{trainer.quote}"
                </p>

                {/* Specialties */}
                <div className="space-y-1.5">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    Core Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {trainer.specialties.slice(0, 3).map((spec, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-neutral-950 text-[10px] text-neutral-300 border border-neutral-800">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-1">
                  <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                    Credentials:
                  </span>
                  <div className="text-[11px] text-neutral-300 font-medium space-y-0.5">
                    {trainer.certifications.slice(0, 2).map((cert, i) => (
                      <div key={i} className="flex items-center gap-1.5 truncate">
                        <Award className="w-3 h-3 text-amber-400 shrink-0" />
                        <span className="truncate">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 border-t border-neutral-800">
                  <button
                    id={`book-trainer-${trainer.id}`}
                    onClick={() => onBookConsultation(trainer)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book 1-on-1 Consultation</span>
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
