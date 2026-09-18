import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Flame, CheckCircle, AlertCircle, ChevronRight, Filter } from 'lucide-react';
import { CLASS_SESSIONS } from '../data/gymData';
import { ClassSession, TrainingCategory } from '../types';

interface ScheduleSectionProps {
  selectedCategory: TrainingCategory;
  onSelectCategory: (cat: TrainingCategory) => void;
  onBookClass: (session: ClassSession) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  selectedCategory,
  onSelectCategory,
  onBookClass,
}) => {
  const days: ('Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun')[] = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
  ];
  
  const [activeDay, setActiveDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun'>('Mon');

  const categories: TrainingCategory[] = [
    'All',
    'Strength',
    'Conditioning',
    'Combat',
    'Mobility',
    'Recovery'
  ];

  // Filter sessions
  const filteredSessions = CLASS_SESSIONS.filter((session) => {
    const matchDay = session.day === activeDay;
    const matchCategory = selectedCategory === 'All' || session.category === selectedCategory;
    return matchDay && matchCategory;
  });

  const getIntensityBadge = (intensity: ClassSession['intensity']) => {
    switch (intensity) {
      case 'Elite':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'High':
        return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
      case 'Medium':
        return 'bg-sky-500/20 text-sky-400 border-sky-500/30';
      case 'Restorative':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-neutral-800 text-neutral-300 border-neutral-700';
    }
  };

  return (
    <section id="schedule" className="py-24 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              Live Class Schedule & Bookings
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight mt-1">
              Weekly Master Timetable
            </h2>
            <p className="text-neutral-400 text-sm max-w-xl mt-2">
              Book real-time spots for coach-led performance sessions. Free pass holders and members enjoy instant reservation.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900 rounded-xl border border-neutral-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                id={`category-filter-${cat.toLowerCase()}`}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-neutral-950 shadow-md shadow-amber-500/10'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-7 gap-2 mb-8 overflow-x-auto pb-2">
          {days.map((day) => {
            const dayNames: Record<string, string> = {
              Mon: 'Monday',
              Tue: 'Tuesday',
              Wed: 'Wednesday',
              Thu: 'Thursday',
              Fri: 'Friday',
              Sat: 'Saturday',
              Sun: 'Sunday',
            };
            const isSelected = activeDay === day;
            const countForDay = CLASS_SESSIONS.filter(s => s.day === day).length;

            return (
              <button
                key={day}
                id={`day-btn-${day}`}
                onClick={() => setActiveDay(day)}
                className={`p-3 rounded-xl border transition-all text-center flex flex-col items-center gap-1 min-w-[70px] cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-800 border-amber-400/80 text-white shadow-lg shadow-black/50 ring-1 ring-amber-400/30'
                    : 'bg-neutral-950/60 border-neutral-800/80 text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200'
                }`}
              >
                <span className="text-xs font-bold uppercase tracking-wider">{day}</span>
                <span className={`text-sm font-black ${isSelected ? 'text-amber-400' : 'text-neutral-300'}`}>
                  {dayNames[day].substring(0, 3)}
                </span>
                <span className="text-[10px] text-neutral-500">
                  {countForDay} {countForDay === 1 ? 'class' : 'classes'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Class Sessions List */}
        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                id={`class-card-${session.id}`}
                className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between space-y-4 hover:shadow-xl hover:shadow-black/60 group"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide bg-neutral-900 border border-neutral-700 text-neutral-300">
                        {session.category}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${getIntensityBadge(session.intensity)}`}>
                        {session.intensity} Intensity
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-amber-400 transition-colors">
                      {session.name}
                    </h3>
                  </div>

                  {/* Time badge */}
                  <div className="text-right shrink-0">
                    <div className="text-sm font-bold text-amber-400 flex items-center justify-end gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{session.time.split(' - ')[0]}</span>
                    </div>
                    <div className="text-[11px] text-neutral-400 font-medium">
                      {session.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {session.description}
                </p>

                {/* Footer details: Coach, Room, Burn, Spots */}
                <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  
                  {/* Coach */}
                  <div className="flex items-center gap-2">
                    <img
                      src={session.coachAvatar}
                      alt={session.coach}
                      className="w-7 h-7 rounded-full object-cover border border-neutral-700"
                    />
                    <div>
                      <span className="text-neutral-300 font-semibold">{session.coach}</span>
                      <p className="text-[10px] text-neutral-500">{session.room}</p>
                    </div>
                  </div>

                  {/* Spots & CTA */}
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs font-bold text-white">
                        {session.spotsLeft} spots left
                      </div>
                      <div className="text-[10px] text-neutral-500">
                        Cap: {session.maxSpots} athletes
                      </div>
                    </div>

                    <button
                      id={`book-class-${session.id}`}
                      onClick={() => onBookClass(session)}
                      className="px-3.5 py-2 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all flex items-center gap-1 cursor-pointer active:scale-95 shadow-sm shadow-amber-500/10"
                    >
                      <span>Reserve</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="text-center py-16 px-4 rounded-2xl bg-neutral-950/50 border border-neutral-800/80">
            <div className="w-12 h-12 mx-auto rounded-full bg-neutral-900 flex items-center justify-center text-neutral-500 mb-3">
              <Calendar className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white">No sessions found for this filter</h4>
            <p className="text-xs text-neutral-400 max-w-sm mx-auto mt-1">
              There are no {selectedCategory} classes scheduled for {activeDay}. Try selecting another day or category.
            </p>
            <button
              onClick={() => onSelectCategory('All')}
              className="mt-4 px-4 py-2 rounded-lg text-xs font-bold text-amber-400 border border-amber-400/40 hover:bg-amber-400/10 transition-colors cursor-pointer"
            >
              Reset to All Classes
            </button>
          </div>
        )}

        {/* Bottom Booking Notice */}
        <div className="mt-8 p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All classes are included in Pulse All-Access and Black VIP memberships. Non-members may use their 3-Day Free VIP Pass.</span>
          </div>
          <a
            href="#pricing"
            className="text-amber-400 hover:text-amber-300 font-bold whitespace-nowrap"
          >
            Explore Membership Tiers →
          </a>
        </div>

      </div>
    </section>
  );
};
