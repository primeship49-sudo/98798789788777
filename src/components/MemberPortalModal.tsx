import React, { useState } from 'react';
import { X, UserCheck, ShieldCheck, KeyRound, QrCode, Lock, Unlock, Calendar, Clock, AlertCircle } from 'lucide-react';

interface MemberPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MemberPortalModal: React.FC<MemberPortalModalProps> = ({ isOpen, onClose }) => {
  const [isDoorUnlocked, setIsDoorUnlocked] = useState(false);
  const [unlockStatus, setUnlockStatus] = useState<string>('');

  if (!isOpen) return null;

  const handleSimulateUnlock = () => {
    setUnlockStatus('Scanning biometric encryption token...');
    setTimeout(() => {
      setIsDoorUnlocked(true);
      setUnlockStatus('Access Granted: Turnstile #2 Unlocked. Welcome!');
      setTimeout(() => {
        setIsDoorUnlocked(false);
        setUnlockStatus('');
      }, 4000);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-lg my-8 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 text-left">
        
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-neutral-950 flex items-center justify-center font-bold">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black font-display text-white">
                Member Digital Portal
              </h3>
              <p className="text-xs text-neutral-400">24/7 Smart Access & Check-In</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Digital Keycard Simulator */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-950 to-neutral-900 border-2 border-neutral-800 space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400">
              Biometric NFC / Bluetooth Key
            </span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">
              AUTHORIZED
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-amber-400">
              <KeyRound className="w-8 h-8" />
            </div>
            <div>
              <div className="text-base font-bold text-white">Active Member Pass</div>
              <div className="text-xs text-neutral-400 font-mono">ID: IP-84920-PULSE</div>
              <div className="text-[11px] text-amber-400 font-semibold mt-0.5">Assigned Locker: #142 (Spa Level)</div>
            </div>
          </div>

          {/* Unlock Test Button */}
          <div className="pt-2">
            <button
              onClick={handleSimulateUnlock}
              disabled={isDoorUnlocked}
              className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                isDoorUnlocked
                  ? 'bg-emerald-500 text-neutral-950'
                  : 'bg-amber-400 hover:bg-amber-300 text-neutral-950 shadow-md active:scale-98'
              }`}
            >
              {isDoorUnlocked ? (
                <>
                  <Unlock className="w-4 h-4" />
                  <span>Turnstile Unlocked</span>
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Simulate 24/7 Turnstile Unlock</span>
                </>
              )}
            </button>

            {unlockStatus && (
              <p className="text-[11px] text-center text-emerald-400 mt-2 font-mono">
                {unlockStatus}
              </p>
            )}
          </div>
        </div>

        {/* Upcoming Booked Classes & Facilities */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
            Current Member Privileges:
          </h4>
          <div className="space-y-2 text-xs text-neutral-300">
            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex justify-between items-center">
              <div>
                <span className="font-semibold text-white">Nordic Cold Plunge & Cedar Sauna</span>
                <p className="text-[10px] text-neutral-500">Unrestricted daily access (6:00 AM - 10:30 PM)</p>
              </div>
              <span className="text-emerald-400 font-bold text-[11px]">Included</span>
            </div>

            <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex justify-between items-center">
              <div>
                <span className="font-semibold text-white">Olympic Eleiko Lifting Platforms</span>
                <p className="text-[10px] text-neutral-500">24/7 keyless access with chalk stations</p>
              </div>
              <span className="text-emerald-400 font-bold text-[11px]">Active</span>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer"
        >
          Close Portal
        </button>

      </div>
    </div>
  );
};
