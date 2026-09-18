import React, { useState, useMemo } from 'react';
import { Calculator, Activity, Flame, Dumbbell, Target, Sparkles, ArrowRight, RotateCcw } from 'lucide-react';
import { CalculatorState, CalculatorResult } from '../types';

interface CalculatorSectionProps {
  onOpenPassModal: () => void;
  onNavigateToSchedule: () => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  onOpenPassModal,
  onNavigateToSchedule,
}) => {
  const [params, setParams] = useState<CalculatorState>({
    gender: 'male',
    age: 28,
    heightCm: 178,
    weightKg: 78,
    activityLevel: 'very_active',
    goal: 'muscle_gain',
  });

  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  // Imperial conversions for display/input
  const displayWeight = useMemo(() => {
    return unitSystem === 'metric' ? params.weightKg : Math.round(params.weightKg * 2.20462);
  }, [params.weightKg, unitSystem]);

  const displayHeight = useMemo(() => {
    return unitSystem === 'metric' ? params.heightCm : Math.round(params.heightCm / 2.54);
  }, [params.heightCm, unitSystem]);

  const handleWeightChange = (val: number) => {
    const kg = unitSystem === 'metric' ? val : val / 2.20462;
    setParams(prev => ({ ...prev, weightKg: Math.max(35, Math.min(200, Math.round(kg))) }));
  };

  const handleHeightChange = (val: number) => {
    const cm = unitSystem === 'metric' ? val : val * 2.54;
    setParams(prev => ({ ...prev, heightCm: Math.max(120, Math.min(230, Math.round(cm))) }));
  };

  // Calculation logic
  const result: CalculatorResult = useMemo(() => {
    const { gender, age, heightCm, weightKg, activityLevel, goal } = params;

    // BMI calculation
    const heightM = heightCm / 100;
    const bmi = parseFloat((weightKg / (heightM * heightM)).toFixed(1));

    let bmiCategory = 'Normal Weight';
    if (bmi < 18.5) bmiCategory = 'Underweight';
    else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight / Muscular Athletic';
    else if (bmi >= 30) bmiCategory = 'High Adiposity / Heavyweight';

    // Mifflin-St Jeor Equation for BMR
    let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
    if (gender === 'male') {
      bmr += 5;
    } else {
      bmr -= 161;
    }
    bmr = Math.round(bmr);

    // Activity multiplier
    const activityFactors = {
      sedentary: 1.2,
      moderate: 1.45,
      very_active: 1.725,
      athlete: 1.9,
    };
    const tdee = Math.round(bmr * activityFactors[activityLevel]);

    // Target Calories based on goal
    let targetCalories = tdee;
    if (goal === 'fat_loss') targetCalories = Math.round(tdee * 0.80); // 20% deficit
    if (goal === 'muscle_gain') targetCalories = Math.round(tdee * 1.15); // 15% surplus
    if (goal === 'athletic_performance') targetCalories = Math.round(tdee * 1.05); // Performance surplus

    // Macronutrient targets (g per kg)
    let proteinGPerKg = 2.0;
    if (goal === 'fat_loss') proteinGPerKg = 2.2; // higher protein for muscle retention
    if (goal === 'muscle_gain') proteinGPerKg = 2.0;
    if (goal === 'athletic_performance') proteinGPerKg = 1.8;

    const proteinG = Math.round(weightKg * proteinGPerKg);
    const fatsG = Math.round((targetCalories * 0.25) / 9); // 25% from healthy fats
    const carbsG = Math.max(50, Math.round((targetCalories - (proteinG * 4 + fatsG * 9)) / 4));

    // Training split advice
    let recommendedSplit = '4-Day Upper / Lower Strength Hypertrophy Split';
    let suggestedClasses = ['Barbell Club: Heavy Pulls & Squats', 'HYROX Athletic Conditioning'];

    if (goal === 'fat_loss') {
      recommendedSplit = '3-Day Full Body Strength + 2-Day Zone 2/HYROX Conditioning';
      suggestedClasses = ['Engine 360: Aerobic Capacity', 'Contrast Therapy & Myofascial Release'];
    } else if (goal === 'muscle_gain') {
      recommendedSplit = '5-Day Push / Pull / Legs + Dedicated Arm & Deltoid Focus';
      suggestedClasses = ['Upper Body Hypertrophy & Density', 'Saturday Strongman & Heavy Carries'];
    } else if (goal === 'athletic_performance') {
      recommendedSplit = '4-Day Olympic Lifting, Sprint Agility & Contrast Plunge Recovery';
      suggestedClasses = ['Olympic Snatch & Clean Masterclass', 'High-Performance Boxing Lab'];
    }

    return {
      bmi,
      bmiCategory,
      bmr,
      tdee,
      targetCalories,
      proteinG,
      carbsG,
      fatsG,
      recommendedSplit,
      suggestedClasses,
    };
  }, [params]);

  return (
    <section id="calculator" className="py-24 bg-neutral-900/30 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-amber-400 flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5" />
            Metabolic & Performance Intelligence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white uppercase tracking-tight">
            Athlete Macro & Training Split Calculator
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
            Dial in your daily caloric burn, precise macronutrient gram targets, and recommended weekly training split based on physiological formulas.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-neutral-950 p-6 sm:p-8 border border-neutral-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Target className="w-4 h-4 text-amber-400" />
                Athlete Parameters
              </h3>
              
              {/* Unit Toggle */}
              <div className="flex rounded-lg bg-neutral-900 p-1 border border-neutral-800 text-xs">
                <button
                  onClick={() => setUnitSystem('metric')}
                  className={`px-2.5 py-1 rounded font-semibold cursor-pointer ${
                    unitSystem === 'metric' ? 'bg-amber-400 text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Metric (kg/cm)
                </button>
                <button
                  onClick={() => setUnitSystem('imperial')}
                  className={`px-2.5 py-1 rounded font-semibold cursor-pointer ${
                    unitSystem === 'imperial' ? 'bg-amber-400 text-neutral-950' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  Imperial (lbs/in)
                </button>
              </div>
            </div>

            {/* Gender Toggle */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400">Biological Sex</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setParams(p => ({ ...p, gender: 'male' }))}
                  className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    params.gender === 'male'
                      ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setParams(p => ({ ...p, gender: 'female' }))}
                  className={`py-2 rounded-lg text-xs font-bold border transition-all cursor-pointer ${
                    params.gender === 'female'
                      ? 'bg-amber-400/10 border-amber-400 text-amber-400'
                      : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:bg-neutral-800'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-400">Age</span>
                <span className="text-white font-mono">{params.age} Years</span>
              </div>
              <input
                type="range"
                min="16"
                max="80"
                value={params.age}
                onChange={(e) => setParams(p => ({ ...p, age: parseInt(e.target.value) }))}
                className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Weight Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-400">Body Weight ({unitSystem === 'metric' ? 'kg' : 'lbs'})</span>
                <span className="text-white font-mono">{displayWeight} {unitSystem === 'metric' ? 'kg' : 'lbs'}</span>
              </div>
              <input
                type="range"
                min={unitSystem === 'metric' ? 45 : 100}
                max={unitSystem === 'metric' ? 150 : 330}
                value={displayWeight}
                onChange={(e) => handleWeightChange(parseInt(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Height Input */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-neutral-400">Height ({unitSystem === 'metric' ? 'cm' : 'inches'})</span>
                <span className="text-white font-mono">{displayHeight} {unitSystem === 'metric' ? 'cm' : 'in'}</span>
              </div>
              <input
                type="range"
                min={unitSystem === 'metric' ? 140 : 55}
                max={unitSystem === 'metric' ? 215 : 85}
                value={displayHeight}
                onChange={(e) => handleHeightChange(parseInt(e.target.value))}
                className="w-full accent-amber-400 bg-neutral-800 rounded-lg cursor-pointer"
              />
            </div>

            {/* Activity Level */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400">Training Frequency & Activity</label>
              <select
                value={params.activityLevel}
                onChange={(e) => setParams(p => ({ ...p, activityLevel: e.target.value as any }))}
                className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none cursor-pointer"
              >
                <option value="sedentary">Sedentary (Desk Job, little exercise)</option>
                <option value="moderate">Moderate (Lift 2-3 days / week)</option>
                <option value="very_active">Very Active (Train 4-5 days / week)</option>
                <option value="athlete">Elite Athlete / Daily Double Sessions</option>
              </select>
            </div>

            {/* Goal */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-neutral-400">Primary Performance Goal</label>
              <select
                value={params.goal}
                onChange={(e) => setParams(p => ({ ...p, goal: e.target.value as any }))}
                className="w-full p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white focus:border-amber-400 outline-none cursor-pointer"
              >
                <option value="fat_loss">Aggressive Fat Loss & Conditioning (-20% deficit)</option>
                <option value="maintenance">Lean Recomposition & Body Maintenance</option>
                <option value="muscle_gain">Hypertrophy & Raw Strength Surplus (+15% surplus)</option>
                <option value="athletic_performance">Peak Athletic VO2 Max & Power Engine</option>
              </select>
            </div>

          </div>

          {/* Results Panel (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Caloric Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-amber-500/40 shadow-xl shadow-amber-500/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Flame className="w-32 h-32 text-amber-400" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-extrabold tracking-wider text-amber-400">
                    Calculated Daily Intake
                  </span>
                  <span className="text-xs text-neutral-400 font-mono">
                    TDEE: {result.tdee} kcal
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-3">
                  <div className="text-4xl sm:text-5xl font-black font-display text-white">
                    {result.targetCalories}
                  </div>
                  <div className="text-sm font-bold text-amber-400 uppercase tracking-wide">
                    kcal / day
                  </div>
                </div>

                <p className="text-xs text-neutral-400 mt-2">
                  Calibrated for {params.goal.replace('_', ' ')}. BMI: <strong className="text-white">{result.bmi}</strong> ({result.bmiCategory})
                </p>

                {/* Macro Distribution Bars */}
                <div className="mt-6 pt-6 border-t border-neutral-800 grid grid-cols-3 gap-4">
                  {/* Protein */}
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-[10px] uppercase font-bold text-amber-400">Protein</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5">{result.proteinG}g</div>
                    <span className="text-[10px] text-neutral-400 font-mono">{(result.proteinG * 4)} kcal</span>
                  </div>

                  {/* Carbs */}
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-[10px] uppercase font-bold text-sky-400">Carbohydrates</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5">{result.carbsG}g</div>
                    <span className="text-[10px] text-neutral-400 font-mono">{(result.carbsG * 4)} kcal</span>
                  </div>

                  {/* Fats */}
                  <div className="p-3.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    <span className="text-[10px] uppercase font-bold text-emerald-400">Healthy Fats</span>
                    <div className="text-xl sm:text-2xl font-black text-white mt-0.5">{result.fatsG}g</div>
                    <span className="text-[10px] text-neutral-400 font-mono">{(result.fatsG * 9)} kcal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailored Training Split Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-950 border border-neutral-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-amber-400">
                <Dumbbell className="w-4 h-4" />
                <span>Recommended Periodized Protocol</span>
              </div>

              <h4 className="text-xl font-bold font-display text-white">
                {result.recommendedSplit}
              </h4>

              <p className="text-xs text-neutral-400 leading-relaxed">
                Based on your metabolic rate and goals, we recommend prioritizing progressive overload with sufficient recovery windows in our 38°F contrast plunge spa.
              </p>

              {/* Matched IronPulse Classes */}
              <div className="pt-3 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wide text-neutral-300">
                  Recommended IronPulse Classes for You:
                </span>
                <div className="flex flex-wrap gap-2">
                  {result.suggestedClasses.map((clsName, i) => (
                    <button
                      key={i}
                      onClick={onNavigateToSchedule}
                      className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-850 border border-neutral-700 hover:border-amber-400/50 text-xs font-medium text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      <span>{clsName}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  id="calc-claim-pass-btn"
                  onClick={onOpenPassModal}
                  className="px-5 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-neutral-950 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Claim 3-Day Pass to Test This Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onNavigateToSchedule}
                  className="text-xs font-semibold text-neutral-400 hover:text-white transition-colors text-center"
                >
                  View Schedule →
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
