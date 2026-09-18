import { ClassSession, FacilityAmenity, MembershipPlan, Testimonial, Trainer } from '../types';

export const GYM_INFO = {
  name: 'IronPulse Athletic Club',
  tagline: 'High-Performance Training & Athletic Longevity',
  address: '420 Olympic Boulevard, Metro District, CA 90210',
  phone: '(555) 789-PULSE',
  email: 'membership@ironpulseclub.com',
  hours: {
    members: 'Open 24/7 (365 Days Keyless Biometric Access)',
    staffed: 'Mon - Fri: 5:00 AM – 11:00 PM | Sat - Sun: 6:00 AM – 9:00 PM',
    recoverySpa: 'Daily: 6:00 AM – 10:30 PM',
  },
  stats: {
    sqFt: '35,000',
    platforms: '40+',
    coaches: '18 Elite',
    capacity: '42%',
  }
};

export const CLASS_SESSIONS: ClassSession[] = [
  {
    id: 'cls-1',
    name: 'HYROX Athletic Conditioning',
    category: 'Conditioning',
    day: 'Mon',
    time: '06:00 AM - 07:00 AM',
    duration: '60 min',
    intensity: 'Elite',
    coach: 'Marcus Vance',
    coachAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    room: 'Turf Sprint Arena',
    spotsLeft: 4,
    maxSpots: 18,
    calorieBurn: '650 - 900 kcal',
    description: 'Competition-grade functional endurance combining Concept2 rowers, SkiErgs, sled pushes, and wall-balls.'
  },
  {
    id: 'cls-2',
    name: 'Barbell Club: Heavy Pulls & Squats',
    category: 'Strength',
    day: 'Mon',
    time: '07:30 AM - 08:45 AM',
    duration: '75 min',
    intensity: 'High',
    coach: 'Elena Rostova',
    coachAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    room: 'Eleiko Olympic Loft',
    spotsLeft: 2,
    maxSpots: 12,
    calorieBurn: '400 - 550 kcal',
    description: 'Technique-first progressive overload focusing on low-bar back squat and conventional deadlift mechanics.'
  },
  {
    id: 'cls-3',
    name: 'High-Performance Boxing Lab',
    category: 'Combat',
    day: 'Mon',
    time: '12:00 PM - 01:00 PM',
    duration: '60 min',
    intensity: 'High',
    coach: 'Dante King',
    coachAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    room: 'Combat Ring & Bags',
    spotsLeft: 6,
    maxSpots: 16,
    calorieBurn: '600 - 850 kcal',
    description: 'Technical footwork, combination pad work, defense slips, and core conditioning in our regulation ring.'
  },
  {
    id: 'cls-4',
    name: 'Contrast Therapy & Myofascial Release',
    category: 'Recovery',
    day: 'Mon',
    time: '05:30 PM - 06:30 PM',
    duration: '60 min',
    intensity: 'Restorative',
    coach: 'Dr. Sarah Lin, DPT',
    coachAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    room: 'Thermal Spa & Studio',
    spotsLeft: 5,
    maxSpots: 14,
    calorieBurn: '150 - 250 kcal',
    description: 'Guided breathwork, cold plunge protocol (38°F), infrared sauna cycles, and targeted hypervolt release.'
  },
  {
    id: 'cls-5',
    name: 'Olympic Snatch & Clean Masterclass',
    category: 'Strength',
    day: 'Tue',
    time: '06:30 AM - 07:45 AM',
    duration: '75 min',
    intensity: 'Elite',
    coach: 'Elena Rostova',
    coachAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    room: 'Eleiko Olympic Loft',
    spotsLeft: 3,
    maxSpots: 10,
    calorieBurn: '450 - 600 kcal',
    description: 'Slow-motion video feedback and positional drills to lock in triple extension and rapid under-the-bar turnover.'
  },
  {
    id: 'cls-6',
    name: 'Engine 360: Aerobic Capacity',
    category: 'Conditioning',
    day: 'Tue',
    time: '05:00 PM - 06:00 PM',
    duration: '60 min',
    intensity: 'High',
    coach: 'Marcus Vance',
    coachAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    room: 'Turf Sprint Arena',
    spotsLeft: 8,
    maxSpots: 20,
    calorieBurn: '700 - 950 kcal',
    description: 'Zone 2 to Zone 5 heart rate interval training utilizing curved treadmills, air bikes, and kettlebells.'
  },
  {
    id: 'cls-7',
    name: 'Athletic Flow & Spine Decompression',
    category: 'Mobility',
    day: 'Wed',
    time: '07:00 AM - 08:00 AM',
    duration: '60 min',
    intensity: 'Medium',
    coach: 'Dr. Sarah Lin, DPT',
    coachAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    room: 'Zen Movement Studio',
    spotsLeft: 7,
    maxSpots: 18,
    calorieBurn: '250 - 350 kcal',
    description: 'End-range hip capsule mobility, thoracic rotation, and loaded stretches designed specifically for lifters.'
  },
  {
    id: 'cls-8',
    name: 'Upper Body Hypertrophy & Density',
    category: 'Strength',
    day: 'Wed',
    time: '06:00 PM - 07:15 PM',
    duration: '75 min',
    intensity: 'High',
    coach: 'Dante King',
    coachAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
    room: 'Strength Floor Alpha',
    spotsLeft: 1,
    maxSpots: 14,
    calorieBurn: '450 - 600 kcal',
    description: 'Dumbbell bench variations, weighted dips, pendlay rows, and high-tension shoulder lateral giant sets.'
  },
  {
    id: 'cls-9',
    name: 'Kettlebell Ballistics & Core Armor',
    category: 'Conditioning',
    day: 'Thu',
    time: '07:00 AM - 08:00 AM',
    duration: '60 min',
    intensity: 'High',
    coach: 'Marcus Vance',
    coachAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    room: 'Functional Turf Zone',
    spotsLeft: 5,
    maxSpots: 16,
    calorieBurn: '550 - 750 kcal',
    description: 'Hardstyle kettlebell swings, Turkish get-ups, clean & jerks, and rotational anti-flexion core stability.'
  },
  {
    id: 'cls-10',
    name: 'Golden Hour Breathwork & Thermal Cold',
    category: 'Recovery',
    day: 'Fri',
    time: '06:30 PM - 07:30 PM',
    duration: '60 min',
    intensity: 'Restorative',
    coach: 'Dr. Sarah Lin, DPT',
    coachAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    room: 'Thermal Spa & Studio',
    spotsLeft: 3,
    maxSpots: 12,
    calorieBurn: '150 - 200 kcal',
    description: 'End the week with nervous system down-regulation, box breathing, 180°F cedar sauna, and 39°F plunge immersion.'
  },
  {
    id: 'cls-11',
    name: 'Saturday Strongman & Heavy Carries',
    category: 'Strength',
    day: 'Sat',
    time: '09:00 AM - 10:30 AM',
    duration: '90 min',
    intensity: 'Elite',
    coach: 'Elena Rostova',
    coachAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80',
    room: 'Outdoor Rig & Turf',
    spotsLeft: 4,
    maxSpots: 16,
    calorieBurn: '700 - 1000 kcal',
    description: 'Trap bar farmers walks, sandbag ground-to-over-shoulder, yoke walks, and log clean & presses.'
  },
  {
    id: 'cls-12',
    name: 'Sunday Full-Spectrum Reset',
    category: 'Recovery',
    day: 'Sun',
    time: '10:00 AM - 11:15 AM',
    duration: '75 min',
    intensity: 'Restorative',
    coach: 'Dr. Sarah Lin, DPT',
    coachAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80',
    room: 'Zen Movement Studio',
    spotsLeft: 9,
    maxSpots: 20,
    calorieBurn: '200 - 300 kcal',
    description: 'Joint flossing, somatic breathing, spinal waves, and guided meditation to prepare for the week ahead.'
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 'tr-1',
    name: 'Marcus Vance',
    role: 'Head of Human Performance & HYROX Pro',
    specialties: ['HYROX Competition Prep', 'Aerobic Engine Building', 'Metabolic Conditioning', 'VO2 Max Testing'],
    certifications: ['CSCS (NSCA Certified Strength & Conditioning Specialist)', 'USA Triathlon Level II', 'Precision Nutrition L2'],
    bio: 'Former collegiate decathlete and top-10 HYROX Pro competitor. Marcus has coached over 300 athletes to podium finishes and marathon personal records.',
    experience: '11+ Years Coaching',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80',
    quote: 'Discipline is simply remembering what you said you wanted long after the initial motivation has faded.',
    available: true
  },
  {
    id: 'tr-2',
    name: 'Elena Rostova',
    role: 'Olympic Weightlifting & Strength Specialist',
    specialties: ['Olympic Weightlifting (Snatch/C&J)', 'Powerlifting Mechanics', 'Barbell Velocity Coaching', 'Female Athlete Physiology'],
    certifications: ['USA Weightlifting (USAW) National Coach', 'NSCA-CPT', 'Eleiko Barbell Master Coach'],
    bio: 'Former national level weightlifting medalist. Elena combines European training methodology with contemporary velocity-based barbell tracking for bulletproof joints and supreme power.',
    experience: '9+ Years Coaching',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
    quote: 'The barbell never lies. Every millimeter of leverage counts when the weight gets heavy.',
    available: true
  },
  {
    id: 'tr-3',
    name: 'Dante King',
    role: 'Boxing Master & Functional Hypertrophy Coach',
    specialties: ['Combat Striking & Defense', 'Rotational Power', 'Aesthetic Hypertrophy', 'Shoulder & Core Health'],
    certifications: ['USA Boxing Certified Coach', 'NASM Performance Enhancement Specialist', 'FMS Level 2'],
    bio: '14 professional boxing bouts with 11 KOs. Dante translates the agility, torque, and cardiovascular grit of elite boxing into functional aesthetic conditioning for high performers.',
    experience: '12+ Years Coaching',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80',
    quote: 'True strength is relaxed power under pressure. When the ring gets chaotic, breathe deeper.',
    available: true
  },
  {
    id: 'tr-4',
    name: 'Dr. Sarah Lin, DPT',
    role: 'Director of Recovery & Athletic Longevity',
    specialties: ['Orthopedic Rehabilitation', 'Contrast Hydrotherapy', 'Spine & Hip Mobility', 'Active Tissue Decompression'],
    certifications: ['Doctor of Physical Therapy (DPT)', 'Board Certified Orthopedic Specialist (OCS)', 'FRC Mobility Specialist'],
    bio: 'Dr. Lin bridges clinical physical therapy with elite sports performance, ensuring members break PRs without chronic pain or repetitive strain injuries.',
    experience: '8+ Years Clinical Practice',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=600&q=80',
    quote: 'Longevity is not about slowing down; it is about keeping your body resilient enough to train hard at 70.',
    available: true
  }
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'plan-flex',
    name: 'Day & Flex Pass',
    badge: 'Single & Flexible',
    tagline: 'Ideal for traveling athletes, weekend warriors, and guests.',
    monthlyPrice: 35,
    annualPrice: 28,
    popular: false,
    idealFor: 'Drop-ins, visiting lifters, and schedule-flexible training',
    features: [
      'Full access to 35,000 sq.ft gym floor',
      'Eleiko Olympic lifting platforms & calibrated plates',
      'Full cardio theater & curved treadmills',
      'Day-use luxury locker with digital padlock',
      'Towel service & filtered water refill'
    ],
    exclusivePerks: [
      'Standard locker room showers',
      'Wifi & dedicated athlete work lounge'
    ]
  },
  {
    id: 'plan-pro',
    name: 'Pulse All-Access',
    badge: 'Most Popular',
    tagline: 'Complete athletic freedom, unlimited classes, and 24/7 keyless entry.',
    monthlyPrice: 149,
    annualPrice: 119,
    popular: true,
    idealFor: 'Dedicated lifters, class attendees, and daily routine builders',
    features: [
      '24/7 365-day biometric & mobile app keyless entry',
      'Unlimited group classes (HYROX, Barbell, Boxing, Mobility)',
      'Free quarterly InBody 570 body composition analysis',
      'Complimentary guest pass every month (bring a friend)',
      'Member discount (15%) at Fuel & Protein Bar',
      'Access to IronPulse Mobile App & workout tracking'
    ],
    exclusivePerks: [
      'Unlimited group fitness & timetable bookings',
      'Priority registration window for workshops'
    ]
  },
  {
    id: 'plan-black',
    name: 'Black Elite VIP',
    badge: 'Ultimate Longevity',
    tagline: 'The pinnacle of private coaching, thermal contrast spa, and recovery.',
    monthlyPrice: 249,
    annualPrice: 199,
    popular: false,
    idealFor: 'Executives, competitive athletes, and health optimization enthusiasts',
    features: [
      'Everything in Pulse All-Access plan',
      'Unlimited Thermal Spa (Cold Plunge 38°F & Infrared Saunas)',
      '2x Monthly 1-on-1 Personal Training or DPT sessions included',
      'Reserved private permanent locker with laundry service',
      'Monthly full VO2 Max & Metabolic testing',
      'Normatec 3 compression boot lounge access',
      'Customized macronutrient & training plan quarterly'
    ],
    exclusivePerks: [
      'VIP lounge access with cold brew & espresso bar',
      'Complimentary post-workout protein shake daily'
    ]
  }
];

export const AMENITIES: FacilityAmenity[] = [
  {
    id: 'amenity-1',
    title: 'Olympic & Powerlifting Sanctum',
    subtitle: 'Eleiko IPF/IWF Certified Equipment',
    description: 'Precision-engineered lifting bays with solid hardwood insert platforms, custom Eleiko calibrated steel discs, competition benches, and specialty bars.',
    features: ['14 Eleiko Olympic Competition Platforms', 'Texas Power Bars & Kabuki Duffalo Bars', 'Over 25,000 lbs of calibrated steel & bumper plates', 'Chalk stations at every platform'],
    equipmentSpecs: ['Eleiko Sport Training Plates', 'Rogue Monster Racks with safety straps', 'Ghost Return Benches with foot-lift pedals'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    iconName: 'Dumbbell'
  },
  {
    id: 'amenity-2',
    title: 'Thermal Contrast & Cold Plunge Spa',
    subtitle: 'Nervous System Recovery at 38°F & 185°F',
    description: 'State-of-the-art Nordic plunge tubs with ozone UV-sterilization coupled with custom Western Red Cedar dry Finnish saunas and infrared recovery booths.',
    features: ['3 Continuous-flow cold plunge pools (38°F - 42°F)', '2 Custom Finnish cedar dry saunas (185°F)', 'Clearlight Sanctuary Full-Spectrum Infrared Booths', 'Eucalyptus iced cold towel service'],
    equipmentSpecs: ['Nordic Wave cold plunge chillers', 'Harvia Legend sauna heaters with Finnish peridotite stones', 'Triple-filtered ambient air circulation'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    iconName: 'Droplets'
  },
  {
    id: 'amenity-3',
    title: 'Indoor 40M Turf Sprint & Hyrox Arena',
    subtitle: 'Prowler Sleds, SkiErgs & Obstacle Rigs',
    description: 'A high-friction synthetic turf track built for speed work, heavy sled pushes, farmer carries, and high-volume aerobic engine training.',
    features: ['40-meter marked sprint and sled track', 'Concept2 SkiErgs, Rowers, and BikeErgs', 'Torque Fitness Tank M4 magnetic all-surface sleds', 'Titan sandbags from 50 lbs to 250 lbs'],
    equipmentSpecs: ['ProTurf 5mm padded sprint surface', 'Wall-mounted target rig with 14 medicine ball stations'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    iconName: 'Flame'
  },
  {
    id: 'amenity-4',
    title: 'Regulation Boxing & Combat Studio',
    subtitle: 'Leather Teardrop Bags & Elevated Ring',
    description: 'An authentic fight space equipped with 18 heavy bags, speed bags, double-end bags, and a 16ft competition canvas for striking conditioning.',
    features: ['16-foot competition canvas boxing ring', '18 genuine leather heavy & water bags (Aqua Training Bags)', 'Speed bag & double-end bag rhythm stations', 'Custom glove and headgear sanitation bays'],
    equipmentSpecs: ['Rival & Cleto Reyes gear available for loan', 'Impact-absorbing floor mats'],
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=800&q=80',
    iconName: 'Shield'
  },
  {
    id: 'amenity-5',
    title: 'Normatec Compression & Bio-Lounge',
    subtitle: 'Accelerated Lymphatic Drainage',
    description: 'Relax post-lift in ergonomic zero-gravity recliners while pulsed compression sleeves flush metabolic waste and speed up tissue repair.',
    features: ['8 Zero-gravity leather recliners', 'Normatec 3 Leg, Arm, and Hip attachments', 'Hypervolt 2 Pro percussion massage guns', 'High-speed device charging & noise-canceling headphones'],
    equipmentSpecs: ['Dynamic compression calibrated in 7 pressure zones', 'Quiet, temperature-regulated zone'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    iconName: 'Zap'
  },
  {
    id: 'amenity-6',
    title: 'Fuel Bar & Organic Recovery Cafe',
    subtitle: 'Precision Macro Shakes & Cold Brew',
    description: 'Nourish your body immediately post-workout with grass-fed whey isolates, clean vegan plant proteins, cold-pressed green juices, and artisanal espresso.',
    features: ['Grass-fed New Zealand whey & fermented pea protein', 'Electrolyte hydration station with pink Himalayan salt', 'Cold nitro brew on tap and single-origin pour overs', 'Fresh protein bowls & macro-counted meal prep to go'],
    equipmentSpecs: ['Vitamix Commercial Quiet One blenders', 'La Marzocco espresso station'],
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    iconName: 'Coffee'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Julian Sterling',
    role: 'Software Architect & HYROX Age-Group Qualifier',
    timeframe: 'Member for 14 Months',
    achievement: 'Cut 18 minutes off HYROX Double Time',
    quote: 'IronPulse has the single best training atmosphere I have ever experienced. The combination of Eleiko barbells, dedicated turf, and the 38-degree cold plunge after heavy work is unbeatable.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    stats: [
      { label: 'Deadlift PR', value: '465 lbs (+55)' },
      { label: 'Body Fat', value: '11.8% (-6.2%)' }
    ]
  },
  {
    id: 't-2',
    name: 'Dr. Camille Torres',
    role: 'Emergency Physician & Mother of 2',
    timeframe: 'Member for 2 Years',
    achievement: 'Eliminated Chronic Lower Back Pain',
    quote: 'With 12-hour hospital shifts, my back was deteriorating. Working with Dr. Lin and following the IronPulse mobility and strength split rebuilt my posture and energy levels completely.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    stats: [
      { label: 'Weekly Sessions', value: '4 Consistently' },
      { label: 'Mobility Score', value: '98/100 (+42)' }
    ]
  },
  {
    id: 't-3',
    name: 'David Zhao',
    role: 'Founding Partner & Amateur Boxer',
    timeframe: 'Member for 9 Months',
    achievement: 'Gained 12 lbs Lean Muscle Mass',
    quote: 'The 24/7 keyless access means I can train at 5:00 AM before board meetings without fighting crowds. Dante’s boxing lab pushes cardiovascular limits like nothing else.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    stats: [
      { label: 'Resting Heart Rate', value: '48 bpm (-14)' },
      { label: 'Squat', value: '385 lbs (+60)' }
    ]
  }
];

export const FAQS = [
  {
    q: 'How does the 24/7 keyless access work?',
    a: 'Active members receive an encrypted digital pass on their smartphone (Apple Wallet / Google Wallet compatible) and biometric fingerprint enrollment. You can unlock the secure turnstiles at any hour, 365 days a year, even when front desk staff are off duty.'
  },
  {
    q: 'What is included in the 3-Day Free VIP Pass?',
    a: 'Your pass gives you full, unrestricted access to our 35,000 sq.ft facility for 3 consecutive days. This includes our Olympic lifting bays, turf track, group classes (subject to spot availability), and a complimentary session in our Thermal Contrast Spa (Sauna & Cold Plunge).'
  },
  {
    q: 'Are there long-term contracts or cancellation fees?',
    a: 'Never. All our memberships are month-to-month by default with transparent terms. If you ever need to pause for travel or cancel, simply give us 14 days written notice through your member portal. No hidden setup or cancellation penalties.'
  },
  {
    q: 'Is there parking available on-site?',
    a: 'Yes, we provide 120 dedicated, secure underground and surface parking stalls for IronPulse members with 2.5 hours complimentary validated parking on every visit.'
  },
  {
    q: 'Can I freeze my membership if I travel or get injured?',
    a: 'Yes! Members can freeze their account for up to 60 days per calendar year at no charge via the online member portal or by speaking with the concierge desk.'
  },
  {
    q: 'Why is this website 100% compatible with GitHub Pages?',
    a: 'This site is built with a relative Vite base configuration (base: "./"), pure client-side hash and section routing, static asset hashing, and zero external backend dependencies. When pushed to GitHub Pages or built to the dist/ directory, it will never show a blank screen or 404 asset errors.'
  }
];
