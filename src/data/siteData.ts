import { ServiceItem, ProjectItem, TimelineStep, FAQItem } from '../types';
import heroClearVillaImg from '../assets/images/hero_solar_clear_villa_1790407094355.jpg';
import heroArchitectureImg from '../assets/images/hero_solar_architecture_1790404731096.jpg';
import commercialSolarImg from '../assets/images/solar_modern_commercial_1790404748718.jpg';
import inverterStorageImg from '../assets/images/ups_inverter_system_1790404772101.jpg';
import cctvSecurityImg from '../assets/images/cctv_security_system_1790404787446.jpg';

export const COMPANY_INFO = {
  name: 'Power Ace Solutions (Private) Limited',
  shortName: 'Power Ace Solutions',
  tagline: 'Smarter Energy. Cleaner Future. Reliable Power.',
  founded: '2022',
  teamSize: '2–10',
  serviceArea: 'ISB / RWP',
  focus: 'ENERGY',
  phone: '+92 348 056 9603',
  phoneFormatted: '+92 348 056 9603',
  phoneRaw: '+923480569603',
  email: 'tahir2710@gmail.com',
  office: '308, 3rd Floor, Paris Shopping Mall, Pakistan Town Phase 1, Police Foundation, Islamabad',
  city: 'Islamabad',
  hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
};

export const IMAGES = {
  heroClearVilla: heroClearVillaImg,
  heroArchitecture: heroArchitectureImg,
  commercialSolar: commercialSolarImg,
  inverterStorage: inverterStorageImg,
  cctvSecurity: cctvSecurityImg,
};


export const SERVICES: ServiceItem[] = [
  {
    id: 'solar-energy',
    number: '01',
    title: 'SOLAR ENERGY',
    tagline: 'Precision Photovoltaic Engineering',
    shortDesc: 'On-grid, hybrid, and off-grid solar systems engineered around your exact daily kilowatt load patterns and structural roof profile.',
    fullDesc: 'We assess your building sun exposure, electrical distribution panels, and seasonal tariff tiers to specifyTier-1 solar panels and high-efficiency inverters that maximize power yield throughout the day.',
    features: [
      'Net metering application & bi-directional IESCO coordination',
      'High-yield bifacial and monocrystalline Tier-1 solar modules',
      'Hybrid inverter integration with automated grid transition',
      'Daily generation telemetry and cloud yield monitoring',
    ],
    specs: [
      { label: 'System Types', value: 'On-Grid, Hybrid & Off-Grid' },
      { label: 'Typical Sizes', value: '5 kW to 50 kW+' },
      { label: 'Regulatory', value: 'IESCO Net Metering Compliant' },
    ],
    iconName: 'SunMedium',
  },
  {
    id: 'ups-backup',
    number: '02',
    title: 'UPS & BACKUP POWER',
    tagline: 'Zero-Interruption Critical Backup',
    shortDesc: 'Uninterruptible power supply and intelligent lithium battery energy storage engineered to keep critical loads running without flicker.',
    fullDesc: 'Custom-designed battery energy storage systems (BESS) and online UPS architecture designed for residential automation, computer servers, medical equipment, and complete household backup.',
    features: [
      'Sub-10 millisecond zero-downtime transfer switching',
      'Long-lifecycle LiFePO4 (Lithium Iron Phosphate) battery banks',
      'Smart depth-of-discharge management & surge suppression',
      'Isolated distribution board wiring for critical loads',
    ],
    specs: [
      { label: 'Switch Time', value: '< 10 ms Transfer' },
      { label: 'Storage Chemistry', value: 'LiFePO4 & Deep-Cycle' },
      { label: 'Applications', value: 'Homes, Clinics & Offices' },
    ],
    iconName: 'BatteryCharging',
  },
  {
    id: 'electrical-solutions',
    number: '03',
    title: 'ELECTRICAL SOLUTIONS',
    tagline: 'Clean Infrastructure & Load Balancing',
    shortDesc: 'Complete residential and commercial electrical design, main distribution board fabrication, grounding, and power quality balancing.',
    fullDesc: 'Modern buildings demand disciplined electrical engineering. We correct three-phase load imbalances, install copper earthing pits, and organize distribution boards with precision breaker grading.',
    features: [
      'Distribution board (DB) fabrication and cable dressing',
      'Low-resistance chemical earthing and surge protection (SPD)',
      'Three-phase voltage stabilization and load redistribution',
      'Power factor correction and electrical safety audits',
    ],
    specs: [
      { label: 'Standards', value: 'IEC & BS 7671 Compliance' },
      { label: 'Earth Resistance', value: '< 2 Ohms Dedicated Pit' },
      { label: 'Scope', value: 'Renovations & New Builds' },
    ],
    iconName: 'Zap',
  },
  {
    id: 'cctv-security',
    number: '04',
    title: 'CCTV & SECURITY',
    tagline: 'Integrated Surveillance & Perimeter Control',
    shortDesc: 'High-definition digital IP surveillance, intelligent perimeter perimeter alert systems, and centralized remote access via mobile and desktop.',
    fullDesc: 'Security systems that remain fully operational even during grid outages via direct coupling with your solar and UPS circuits, ensuring zero surveillance blind spots.',
    features: [
      '4K ultra-low-light IP cameras with optical zoom',
      'Isolated solar/UPS power loop ensuring 24/7 recording',
      'Encrypted remote mobile viewing and AI intrusion alerts',
      'Concealed conduit cabling and weather-sealed housings',
    ],
    specs: [
      { label: 'Resolution', value: '4K / 8MP Starlight Color' },
      { label: 'Backup Continuity', value: '100% UPS Tied' },
      { label: 'Platform', value: 'iOS, Android & Central NVR' },
    ],
    iconName: 'ShieldCheck',
  },
  {
    id: 'solar-installation',
    number: '05',
    title: 'SOLAR INSTALLATION',
    tagline: 'Civil Structural Mounting & Waterproofing',
    shortDesc: 'Professional mechanical mounting, elevated structural steel frames, and non-invasive roof waterproofing engineered to endure high wind loads.',
    fullDesc: 'A solar installation is only as resilient as its mounting structure. We fabricate hot-dip galvanized and aluminum frame mountings tailored to RCC slabs, corrugated tin, and slanted rooftops.',
    features: [
      'Hot-dip galvanized (GI) elevated frames (L2, L3, elevated)',
      'Wind-load engineered anchoring with waterproofing seals',
      'UV-resistant DC solar cabling in heavy-duty conduit',
      'Strict torque specifications and pre-commissioning flash tests',
    ],
    specs: [
      { label: 'Frame Material', value: 'Hot-Dip Galvanized / Al' },
      { label: 'Wind Tolerance', value: 'Up to 140 km/h' },
      { label: 'Waterproofing', value: 'Multi-layer Membrane Seal' },
    ],
    iconName: 'Wrench',
  },
  {
    id: 'energy-consultation',
    number: '06',
    title: 'ENERGY CONSULTATION',
    tagline: 'Data-Driven Power Audits & Planning',
    shortDesc: 'Objective load profiling, bill breakdown, and feasibility studies before you invest a single rupee into equipment.',
    fullDesc: 'Avoid oversizing or undersizing your equipment. We measure your actual hourly energy draw with data loggers, analyze peak vs off-peak consumption, and design an exact roadmap for energy independence.',
    features: [
      'Hourly load profiling and peak surge analysis',
      'ROI and payback modeling based on actual tariff rates',
      'Appliance energy efficiency recommendations',
      'Comprehensive system design schematics and BOM specifications',
    ],
    specs: [
      { label: 'Deliverable', value: 'Detailed Technical Report' },
      { label: 'Payback Modeling', value: 'Exact ROI & Yield Curve' },
      { label: 'Assessment', value: 'On-Site & Virtual Audits' },
    ],
    iconName: 'Activity',
  },
];

export const WHY_US_PILLARS = [
  {
    number: '01',
    title: 'SITE-FIRST PLANNING',
    description: 'We never quote off generic templates. Every recommendation starts with an on-site physical survey, roof structural audit, and real load logging.',
  },
  {
    number: '02',
    title: 'QUALITY INSTALLATION',
    description: 'Strict adherence to electrical standards: genuine DC breakers, high-grade copper cables, dedicated earthing pits, and tidy, concealed conduit runs.',
  },
  {
    number: '03',
    title: 'INTEGRATED POWER SOLUTIONS',
    description: 'Solar, UPS backup, electrical distribution, and security systems designed to work seamlessly together under one cohesive engineering architecture.',
  },
  {
    number: '04',
    title: 'LONG-TERM VALUE',
    description: 'Engineering systems with high-durability components that deliver predictable savings and uninterrupted power for years to come.',
  },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    subtitle: 'Understanding Your Power Needs',
    duration: 'Day 1–2',
    details: [
      'Review of past 12 months electricity bills & tariff slabs',
      'Discussion of critical appliances and backup runtime goals',
      'Initial feasibility assessment and preliminary sizing range',
    ],
  },
  {
    step: '02',
    title: 'SITE ASSESSMENT',
    subtitle: 'Physical & Structural Audit',
    duration: 'Day 3–4',
    details: [
      'Roof azimuth, tilt angles, and shadow analysis throughout the day',
      'Main distribution board inspection and three-phase voltage balance check',
      'Cable pathway tracing and structural anchoring verification',
    ],
  },
  {
    step: '03',
    title: 'SYSTEM DESIGN',
    subtitle: 'Engineering & Component Matching',
    duration: 'Day 5–7',
    details: [
      'Single Line Diagram (SLD) and electrical schematic generation',
      'Tier-1 module string calculations matched with inverter MPPT ranges',
      'IESCO net-metering documentation preparation',
    ],
  },
  {
    step: '04',
    title: 'INSTALLATION',
    subtitle: 'Mechanical & Electrical Execution',
    duration: 'Day 8–12',
    details: [
      'Elevated galvanized structure mounting and weather-sealed anchoring',
      'Panel array fastening, DC wiring, and conduit routing',
      'Inverter, battery bank, and AC/DC protection box commissioning',
    ],
  },
  {
    step: '05',
    title: 'SUPPORT',
    subtitle: 'Handover & Long-Term Monitoring',
    duration: 'Ongoing',
    details: [
      'Mobile app telemetry setup for real-time solar yield tracking',
      'Comprehensive customer walk-through and safety switchover training',
      'Scheduled preventive maintenance and dedicated technical support',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'res-dha-islamabad',
    title: 'Residential Hybrid Energy System',
    category: 'RESIDENTIAL',
    service: 'Solar & Hybrid Backup',
    location: 'DHA Phase 2, Islamabad',
    capacity: '15 kW Hybrid',
    label: 'Featured Capability',
    description: 'A complete residential power architecture featuring elevated galvanized mounting, hybrid solar inverters, and dedicated lithium battery storage for seamless air conditioning operation during summer load interruptions.',
    highlights: [
      'Bifacial monocrystalline array elevated above roof terrace',
      '15 kW three-phase hybrid inverter with automated grid synchronization',
      'Lithium LiFePO4 battery bank providing 4+ hours of full-house load backup',
      'Dedicated AC & DC surge protection with low-resistance earth pit',
    ],
    imageUrl: IMAGES.heroArchitecture,
    systemDetails: {
      panels: '585W Monocrystalline Bifacial Tier-1',
      inverter: '15 kW Three-Phase Hybrid Inverter',
      battery: '10.2 kWh LiFePO4 Battery Bank',
      monitoring: 'Wi-Fi Cloud Telemetry Portal',
    },
  },
  {
    id: 'comm-i9-commercial',
    title: 'Commercial On-Grid Rooftop Array',
    category: 'COMMERCIAL',
    service: 'Solar Energy & Net Metering',
    location: 'I-9 Industrial Area, Islamabad',
    capacity: '40 kW On-Grid',
    label: 'Featured Capability',
    description: 'Designed for daytime commercial peak shaving and zero-export control, this system provides substantial reductions in monthly operational expenses for a commercial facility.',
    highlights: [
      'Heavy-duty hot-dip galvanized mounting engineered for wind load resistance',
      'IESCO compliant bi-directional green meter net-metering integration',
      'Three-phase voltage stabilization and power factor protection',
      'Real-time industrial yield analytics and remote troubleshooting',
    ],
    imageUrl: IMAGES.commercialSolar,
    systemDetails: {
      panels: 'Tier-1 High-Efficiency Industrial Modules',
      inverter: '40 kW Dual-MPPT Commercial Inverter',
      battery: 'N/A (Grid-Tied Daytime Peak Shaver)',
      monitoring: 'Ethernet Industrial Gateway with Inverter Modbus',
    },
  },
  {
    id: 'backup-bahria-town',
    title: 'Critical Load UPS & Energy Storage',
    category: 'ELECTRICAL',
    service: 'UPS & Backup Power',
    location: 'Bahria Town, Rawalpindi',
    capacity: '10 kVA Pure Sine Wave',
    label: 'Featured Capability',
    description: 'Zero-millisecond transfer online power backup installation designed to safeguard sensitive home office servers, medical equipment, and security circuits from voltage sags.',
    highlights: [
      'Pure sine wave output with ultra-clean total harmonic distortion (<2%)',
      'Sub-10ms transfer time avoiding any reboot of sensitive electronics',
      'Custom fabricated distribution board with isolated backup sub-panels',
      'Smart temperature-controlled battery enclosure',
    ],
    imageUrl: IMAGES.inverterStorage,
    systemDetails: {
      inverter: '10 kVA Pure Sine Wave Online Inverter',
      battery: 'High-Cycle Deep-Discharge Energy Bank',
      monitoring: 'LED Diagnostic Console with Audible Warning Matrix',
    },
  },
  {
    id: 'security-gulberg-greens',
    title: 'Integrated Surveillance & Perimeter Matrix',
    category: 'SECURITY',
    service: 'CCTV & Security',
    location: 'Gulberg Greens, Islamabad',
    capacity: '16-Channel 4K IP Array',
    label: 'Featured Capability',
    description: 'Perimeter protection and ultra-low-light surveillance infrastructure wired on an uninterrupted power loop so coverage is never compromised during power blackouts.',
    highlights: [
      'Starlight ultra-low-light technology providing color images in darkness',
      'Direct coupling to solar and UPS circuit for uninterrupted 24/7 security',
      'Concealed heavy-duty conduit runs and lightning protection',
      'Remote mobile notifications with intelligent tripwire zone detection',
    ],
    imageUrl: IMAGES.cctvSecurity,
    systemDetails: {
      monitoring: 'Encrypted NVR with 30-Day Redundant Storage',
      inverter: 'Tied to Primary Hybrid Inverter Circuit',
    },
  },
  {
    id: 'res-f8-luxury',
    title: 'Architectural Rooftop Solar Integration',
    category: 'SOLAR',
    service: 'Solar Installation',
    location: 'Sector F-8, Islamabad',
    capacity: '20 kW Elevated',
    label: 'Featured Capability',
    description: 'A bespoke elevated solar canopy designed to preserve rooftop living space while delivering maximum solar absorption and passive thermal shading for the top floor.',
    highlights: [
      '10-foot elevated custom fabricated steel pergola structure',
      'Dual-purpose rooftop shade pergola for family evening terrace use',
      'Multi-layer waterproofing anchors ensuring 100% leak-proof slab',
      'Concealed down-drop cable trays preserving modern architectural facade',
    ],
    imageUrl: IMAGES.heroArchitecture,
    systemDetails: {
      panels: '590W N-Type TopCon High-Efficiency Modules',
      inverter: '20 kW Three-Phase Inverter',
      battery: 'Modular Lithium Ready',
      monitoring: 'Mobile App + Wall-Mounted Touch Interface',
    },
  },
];

export const FAQS: FAQItem[] = [
  {
    category: 'Solar',
    question: 'How do I know what size solar system my home or business requires?',
    answer: 'System sizing is determined by your average monthly kilowatt-hour (unit) consumption on your electricity bills, your peak summer load (e.g. running 2–3 air conditioners simultaneously), and your available unshaded roof area. As a rule of thumb in Islamabad/Rawalpindi, a 5 kW system typically generates 600–750 units per month, a 10 kW generates 1,200–1,500 units, and a 15 kW generates 1,800–2,250 units.',
  },
  {
    category: 'Net Metering',
    question: 'What is the IESCO net metering process and how long does it take?',
    answer: 'Net metering allows you to export excess solar electricity generated during sunny daytime hours back into the IESCO grid. When you export more units than you consume, you receive a billing credit on your monthly bill. Power Ace Solutions prepares the complete engineering schematics, single-line diagrams, and coordinates with IESCO for inspection and green bi-directional meter installation.',
  },
  {
    category: 'Backup & Inverters',
    question: 'What is the difference between an On-Grid and a Hybrid Solar System?',
    answer: 'An on-grid solar system operates only while the utility grid is active; if the grid goes down, it shuts off automatically for lineman safety. A hybrid solar system combines solar generation with battery energy storage (such as Lithium LiFePO4). During load shedding or grid failure, a hybrid inverter automatically shifts to battery power within milliseconds, ensuring your lights, fans, computers, and refrigerators continue without interruption.',
  },
  {
    category: 'Durability',
    question: 'How do your solar mounting structures withstand heavy rain and wind in Islamabad?',
    answer: 'We construct all elevated structures using heavy-gauge, hot-dip galvanized steel or aircraft-grade aluminum, custom-welded and secured with mechanical chemical anchor bolts. We apply multi-layer liquid elastomeric waterproofing membranes around every anchor point to guarantee zero water seepage into the roof slab.',
  },
  {
    category: 'Maintenance',
    question: 'What routine maintenance does a solar system require?',
    answer: 'Solar modules require periodic washing with clean water (every 2 to 4 weeks depending on dust accumulation) to maintain peak photon absorption. Electrically, our systems are solid-state with no moving parts. Power Ace Solutions includes comprehensive installation warranty and offers scheduled bi-annual health checks including thermal camera inspection of panels and torque verification of all electrical terminations.',
  },
];
