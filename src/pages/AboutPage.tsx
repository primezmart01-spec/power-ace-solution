import React from 'react';
import { COMPANY_INFO, IMAGES } from '../data/siteData';
import { Target, Compass } from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onOpenCall: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const values = [
    {
      title: 'CLARITY',
      desc: 'Transparent kilowatt accounting, honest generation forecasts, and zero hidden equipment markups.',
    },
    {
      title: 'RELIABILITY',
      desc: 'Sub-10ms transfer speeds and high-cycle storage chemistry ensuring you never sit in the dark.',
    },
    {
      title: 'QUALITY',
      desc: 'Tier-1 photovoltaic modules, pure copper wiring, genuine DC breakers, and hot-dip galvanized mounting.',
    },
    {
      title: 'INNOVATION',
      desc: 'Cloud telemetry, automated load management, and hybrid battery storage technologies.',
    },
    {
      title: 'LONG-TERM VALUE',
      desc: 'Systems engineered to deliver clean, predictable power and tangible financial returns for 20+ years.',
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#0F1E36]">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
              ABOUT POWER ACE SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-[1.02] mb-6">
              POWERING A SMARTER FUTURE.
            </h1>
            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
              Founded in 2022 in Islamabad, Power Ace Solutions (Private) Limited was formed to bring rigorous engineering standards, transparent system sizing, and high-reliability renewable energy infrastructure to homeowners and commercial enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Asymmetrical Story & Visual Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src={IMAGES.heroArchitecture}
                  alt="Modern sustainable home with rooftop solar panels"
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
                  WHO WE ARE
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-[#0F1E36] mt-1 mb-4">
                  Engineering Practical Independence from the Grid
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Too many solar installations in Pakistan suffer from improper string sizing, ungrounded AC/DC circuits, or cheap structures that corrode and leak. We operate on a different philosophy: site-first assessment, calibrated mathematical load profiling, and disciplined execution.
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
                  WHAT WE DO
                </span>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  We engineer turn-key solar installations, net metering systems with IESCO, uninterruptible power supplies (UPS), commercial three-phase distribution balance, and integrated CCTV surveillance grids that stay running 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6600] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-3">
                Our Mission
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To simplify clean energy adoption by delivering durable, accurately sized solar and backup systems that protect our customers against escalating utility tariffs and grid instability.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6600] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-3">
                Our Vision
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                To become the most dependable and technically respected renewable power engineering partner across the Islamabad and Rawalpindi metropolitan territory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Display: CLARITY | RELIABILITY | QUALITY | INNOVATION | LONG-TERM VALUE */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1E36]">
              OUR CORE VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="glass-card-interactive p-6 rounded-2xl border border-slate-200 bg-slate-50/70 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#FF6600] block mb-3">
                    0{i + 1}
                  </span>
                  <h3 className="text-base font-display font-bold text-[#0F1E36] mb-2 tracking-wide">
                    {v.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Snapshot Card (Verified Info Only) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F1E36] mb-6">
              Company Snapshot
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
              <div>
                <p className="text-slate-500 uppercase font-mono text-[10px] font-semibold">Legal Entity</p>
                <p className="font-bold text-[#0F1E36] text-sm mt-1">{COMPANY_INFO.name}</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase font-mono text-[10px] font-semibold">Founded</p>
                <p className="font-bold text-[#0F1E36] text-sm mt-1">{COMPANY_INFO.founded}</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase font-mono text-[10px] font-semibold">Territory</p>
                <p className="font-bold text-[#0F1E36] text-sm mt-1">Islamabad & Rawalpindi</p>
              </div>
              <div>
                <p className="text-slate-500 uppercase font-mono text-[10px] font-semibold">Office Location</p>
                <p className="font-bold text-[#0F1E36] text-sm mt-1">{COMPANY_INFO.city}, Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
