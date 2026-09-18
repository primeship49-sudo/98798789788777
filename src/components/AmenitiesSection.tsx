import React, { useState } from 'react';
import { Dumbbell, Droplets, Flame, Shield, Zap, Coffee, Check, ArrowRight, X, Info } from 'lucide-react';
import { AMENITIES } from '../data/gymData';
import { FacilityAmenity } from '../types';

export const AmenitiesSection: React.FC = () => {
  const [selectedAmenity, setSelectedAmenity] = useState<FacilityAmenity | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Dumbbell': return <Dumbbell className="w-5 h-5 text-amber-400" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-sky-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-red-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-emerald-400" />;
      default: return <Dumbbell className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="amenities" className="py-24 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400">
            World-Class Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Designed Without Compromise
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Every square foot of IronPulse is outfitted with Olympic-grade competition apparatus, 
            clinical recovery suites, and private member amenities to support relentless training.
          </p>
        </div>

        {/* Amenities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((amenity) => (
            <div
              key={amenity.id}
              id={`amenity-card-${amenity.id}`}
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Image with overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                
                {/* Icon badge */}
                <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-700">
                  {getIcon(amenity.iconName)}
                </div>

                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 drop-shadow">
                    {amenity.subtitle}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mt-0.5 leading-tight">
                    {amenity.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {amenity.description}
                </p>

                {/* Key feature bullets */}
                <ul className="space-y-2 border-t border-neutral-800/80 pt-4 text-xs text-neutral-400">
                  {amenity.features.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Trigger Modal for Specs */}
                <button
                  id={`view-specs-${amenity.id}`}
                  onClick={() => setSelectedAmenity(amenity)}
                  className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Equipment Specs & Inventory</span>
                  <ArrowRight className="w-3 h-3 text-neutral-500" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Equipment Specification Modal */}
      {selectedAmenity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl rounded-2xl bg-neutral-900 border border-neutral-800 p-6 sm:p-8 shadow-2xl space-y-6">
            
            {/* Modal close */}
            <button
              id="close-amenity-modal-btn"
              onClick={() => setSelectedAmenity(null)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800">
                {getIcon(selectedAmenity.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  {selectedAmenity.subtitle}
                </span>
                <h3 className="text-2xl font-bold font-display text-white">
                  {selectedAmenity.title}
                </h3>
              </div>
            </div>

            {/* Modal Image */}
            <div className="rounded-xl overflow-hidden h-44 border border-neutral-800">
              <img
                src={selectedAmenity.image}
                alt={selectedAmenity.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Full Features */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Facility Features & Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedAmenity.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-neutral-950 border border-neutral-800/80 text-xs text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Equipment Specs */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-300">
                Certified Hardware Inventory
              </h4>
              <div className="space-y-2">
                {selectedAmenity.equipmentSpecs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-lg bg-neutral-950/80 border border-neutral-800 text-xs text-amber-300/90 font-mono">
                    ✦ {spec}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedAmenity(null)}
                className="px-5 py-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-bold text-white transition-colors cursor-pointer"
              >
                Close Specs
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
