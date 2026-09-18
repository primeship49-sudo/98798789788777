import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, ArrowRight, User } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Trainer } from '../types';

interface ConsultationModalProps {
  trainer: Trainer | null;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ trainer, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('09:00 AM');
  const [notes, setNotes] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  if (!trainer) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#3b82f6', '#10b981']
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

        {!submitted ? (
          <div className="space-y-6 text-left">
            <div className="flex items-center gap-3">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-amber-400/60"
              />
              <div>
                <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                  Performance Consultation
                </span>
                <h3 className="text-xl font-black font-display text-white">
                  {trainer.name}
                </h3>
                <p className="text-xs text-neutral-400">{trainer.role}</p>
              </div>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed bg-neutral-950 p-3 rounded-xl border border-neutral-800">
              Schedule a 45-minute comprehensive movement assessment, goal roadmap, and bar velocity evaluation at IronPulse.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Hayes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-neutral-300">Time Slot</label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none cursor-pointer"
                  >
                    <option value="07:00 AM">07:00 AM (Early Performance)</option>
                    <option value="09:00 AM">09:00 AM (Morning Peak)</option>
                    <option value="01:00 PM">01:00 PM (Midday Power)</option>
                    <option value="05:30 PM">05:30 PM (Evening Wave)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-neutral-300">Target Focus / Past Injuries</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Olympic snatch mobility, lower back history, or HYROX pacing..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Confirm Assessment with {trainer.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6 text-center animate-in zoom-in-95">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-2xl font-black font-display text-white">
                Consultation Booked!
              </h3>
              <p className="text-xs text-neutral-400">
                A calendar invitation with Coach <strong className="text-white">{trainer.name}</strong> has been prepared for <strong className="text-amber-400">{date} at {time}</strong>.
              </p>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
