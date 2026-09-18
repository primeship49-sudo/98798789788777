import React from 'react';
import { Dumbbell, Flame, Droplets, Shield, HeartPulse, Sparkles, ArrowUpRight } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectCategory: (category: 'Strength' | 'Conditioning' | 'Combat' | 'Mobility' | 'Recovery') => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectCategory }) => {
  const programs = [
    {
      category: 'Strength' as const,
      title: 'Olympic Lifting & Heavy Barbell',
      tagline: 'Velocity-based progressive overload & IPF technical mastery',
      description: 'Master the snatch, clean & jerk, squat, and deadlift on dedicated hardwood platforms with Eleiko competition plates and video analysis feedback.',
      calories: '450 - 650 kcal',
      level: 'All Levels to Elite',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80',
      badge: 'Core Pillar'
    },
    {
      category: 'Conditioning' as const,
      title: 'HYROX & Aerobic Engine 360',
      tagline: 'Prowlers, curved treadmills, SkiErgs & high-volume output',
      description: 'Build an unbreakable cardiovascular and lactate threshold engine through structured Zone 2–5 interval training on our 40m sprint turf.',
      calories: '650 - 950 kcal',
      level: 'High Intensity',
      icon: Flame,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      badge: 'High Calorie Burn'
    },
    {
      category: 'Recovery' as const,
      title: 'Thermal Contrast & Plunge Spa',
      tagline: '38°F Nordic cold immersion & 185°F Finnish infrared saunas',
      description: 'Trigger deep nervous system down-regulation, flush lactic acid, spike norepinephrine, and accelerate muscle tissue repair under doctor-guided protocols.',
      calories: 'Restorative Care',
      level: 'Daily Protocol',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
      badge: 'Recovery Science'
    },
    {
      category: 'Combat' as const,
      title: 'Boxing Lab & Combat Conditioning',
      tagline: 'Authentic ring canvas, leather bags & kinetic striking',
      description: 'Sharpen rotational core power, lightning reaction time, and combat endurance with former championship fighters in our 16ft regulation boxing ring.',
      calories: '600 - 850 kcal',
      level: 'Intermediate - Advanced',
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=600&q=80',
      badge: 'Striking & Agility'
    },
    {
      category: 'Mobility' as const,
      title: 'Athletic Flow & Spine Reset',
      tagline: 'FRC joint health, hip capsule opening & postural alignment',
      description: 'Designed specifically for lifters and desk workers to decompress the lumbar spine, increase active range of motion, and bulletproof vulnerable joints.',
      calories: '250 - 350 kcal',
      level: 'Therapeutic',
      icon: HeartPulse,
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
      badge: 'Injury Prevention'
    },
    {
      category: 'Strength' as const,
      title: 'Hypertrophy & Physique Density',
      tagline: 'Mechanical tension, prime leverages & targeted muscle volume',
      description: 'Targeted bodybuilding splits using prime selectorized machinery, heavy dumbbell racks up to 150 lbs, and eccentric overload techniques.',
      calories: '400 - 600 kcal',
      level: 'All Levels',
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80',
      badge: 'Muscle Architecture'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            Engineered Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Training Systems for Peak Human Performance
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every program at IronPulse is rooted in exercise physiology, progressive overload, and active restoration. 
            Choose your focus or combine disciplines for complete athletic dominance.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog, index) => {
            const Icon = prog.icon;
            return (
              <div
                key={index}
                id={`program-card-${index}`}
                className="group relative rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5"
              >
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent" />
                  
                  {/* Category icon badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-neutral-950/80 backdrop-blur-md border border-neutral-700 text-xs font-semibold text-white flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{prog.category}</span>
                  </div>

                  {/* Highlights tag */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-amber-400/90 text-neutral-950 text-[10px] font-black uppercase tracking-wider">
                    {prog.badge}
                  </div>

                  {/* Metrics bar at bottom of image */}
                  <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[11px] font-medium text-neutral-300">
                    <span className="bg-neutral-950/70 px-2 py-0.5 rounded backdrop-blur-sm">⚡ {prog.calories}</span>
                    <span className="bg-neutral-950/70 px-2 py-0.5 rounded backdrop-blur-sm">🎯 {prog.level}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-medium mt-1">
                      {prog.tagline}
                    </p>
                    <p className="text-sm text-neutral-400 mt-2.5 leading-relaxed">
                      {prog.description}
                    </p>
                  </div>

                  {/* Action Link to Timetable */}
                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <button
                      id={`view-schedule-btn-${index}`}
                      onClick={() => onSelectCategory(prog.category)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors group/btn cursor-pointer"
                    >
                      <span>View in Class Timetable</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                    <span className="text-[11px] text-neutral-500 font-mono">24/7 Access</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
