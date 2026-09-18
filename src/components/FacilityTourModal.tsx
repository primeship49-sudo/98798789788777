import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Maximize2, Shield, MapPin, Sparkles } from 'lucide-react';

interface FacilityTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPassModal: () => void;
}

export const FacilityTourModal: React.FC<FacilityTourModalProps> = ({
  isOpen,
  onClose,
  onOpenPassModal,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const tourStops = [
    {
      title: 'Olympic Lifting Sanctum',
      tag: 'Platform Alpha',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
      description: '14 solid oak insert platforms with certified Eleiko IPF competition bars, calibrated steel plates, and high-traction chalk bays.',
      highlight: 'Zero waiting times for squat racks or deadlift platforms.'
    },
    {
      title: 'Nordic Contrast Recovery Spa',
      tag: 'Thermal Zone',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      description: 'Triple-filtered 38°F Nordic cold plunge baths paired with 185°F Western Red Cedar Finnish saunas and infrared recovery booths.',
      highlight: 'Continuous water sanitization and eucalyptus iced towels.'
    },
    {
      title: '40M Sprint Turf & Hyrox Arena',
      tag: 'Conditioning Field',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
      description: 'High-traction competition turf built for heavy sled drives, farmer carries, Concept2 ergometers, and obstacle simulations.',
      highlight: 'Torque magnetic sleds that never damage or tear shoes.'
    },
    {
      title: 'Combat Striking & Boxing Ring',
      tag: 'Combat Lab',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=1200&q=80',
      description: '16ft elevated canvas ring with 18 genuine leather water bags and speed stations for elite fighters and cardio boxers.',
      highlight: 'Rival and Cleto Reyes gloves available for all members.'
    }
  ];

  const next = () => setCurrentSlide((prev) => (prev + 1) % tourStops.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + tourStops.length) % tourStops.length);

  const stop = tourStops[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl p-6 sm:p-8 space-y-6 text-left">
        
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
              Interactive Walkthrough
            </span>
            <h3 className="text-2xl font-black font-display text-white">
              IronPulse 35,000 Sq.Ft Virtual Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Visual Tour Frame */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 group">
          <img
            src={stop.image}
            alt={stop.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

          {/* Navigation arrow buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 backdrop-blur-sm cursor-pointer transition-transform hover:scale-105"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 backdrop-blur-sm cursor-pointer transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Overlay info */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="px-2.5 py-0.5 rounded bg-amber-400 text-neutral-950 text-[10px] font-black uppercase tracking-wider">
                {stop.tag}
              </span>
              <h4 className="text-2xl font-black font-display text-white mt-1">
                {stop.title}
              </h4>
              <p className="text-xs text-neutral-300 max-w-xl mt-1">
                {stop.description}
              </p>
            </div>

            <div className="text-right">
              <span className="text-xs text-amber-400 font-mono font-bold">
                Stop {currentSlide + 1} of {tourStops.length}
              </span>
            </div>
          </div>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center justify-center gap-2">
          {tourStops.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Tour Footer CTA */}
        <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-neutral-400">
            Want to test these platforms in person? Claim your 3-Day VIP pass today.
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenPassModal();
            }}
            className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 cursor-pointer shadow-md"
          >
            Claim Free 3-Day Pass
          </button>
        </div>

      </div>
    </div>
  );
};
