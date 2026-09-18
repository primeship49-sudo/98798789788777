export type TrainingCategory = 'All' | 'Strength' | 'Conditioning' | 'Combat' | 'Mobility' | 'Recovery';

export interface ClassSession {
  id: string;
  name: string;
  category: 'Strength' | 'Conditioning' | 'Combat' | 'Mobility' | 'Recovery';
  day: 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  time: string;
  duration: string;
  intensity: 'Medium' | 'High' | 'Elite' | 'Restorative';
  coach: string;
  coachAvatar: string;
  room: string;
  spotsLeft: number;
  maxSpots: number;
  calorieBurn: string;
  description: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialties: string[];
  certifications: string[];
  bio: string;
  experience: string;
  image: string;
  quote: string;
  available: boolean;
}

export interface MembershipPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number; // monthly equivalent when paid annually
  popular?: boolean;
  features: string[];
  exclusivePerks: string[];
  idealFor: string;
}

export interface FacilityAmenity {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  equipmentSpecs: string[];
  image: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  timeframe: string;
  achievement: string;
  quote: string;
  avatar: string;
  rating: number;
  stats: {
    label: string;
    value: string;
  }[];
}

export interface FreePassData {
  fullName: string;
  email: string;
  phone: string;
  startDate: string;
  timeSlot: string;
  primaryGoal: string;
  experienceLevel: string;
}

export interface GeneratedPass {
  passNumber: string;
  fullName: string;
  email: string;
  startDate: string;
  expiryDate: string;
  goal: string;
  barcode: string;
  qrCodeSeed: string;
  createdDate: string;
}

export interface CalculatorState {
  gender: 'male' | 'female';
  age: number;
  heightCm: number;
  weightKg: number;
  activityLevel: 'sedentary' | 'moderate' | 'very_active' | 'athlete';
  goal: 'fat_loss' | 'maintenance' | 'muscle_gain' | 'athletic_performance';
}

export interface CalculatorResult {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  tdee: number;
  targetCalories: number;
  proteinG: number;
  carbsG: number;
  fatsG: number;
  recommendedSplit: string;
  suggestedClasses: string[];
}
