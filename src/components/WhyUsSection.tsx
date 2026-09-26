import React from 'react';
import { WHY_US_PILLARS, IMAGES } from '../data/siteData';
import { Compass, CheckSquare, GitMerge, ShieldCheck } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#FF6600]" />;
      case 1:
        return <CheckSquare className="w-5 h-5 text-[#FF6600]" />;
      case 2:
        return <GitMerge className="w-5 h-5 text-[#FF6600]" />;
      case 3:
      default:
        return <ShieldCheck className="w-5 h-5 text-[#FF6600]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
            WHY POWER ACE SOLUTIONS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-tight text-balance">
            TECHNICAL THINKING. PRACTICAL DELIVERY.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4">
            We bridge the gap between complex electrical engineering and day-to-day usability, delivering dependable power systems designed for Islamabad and Rawalpindi.
          </p>
        </div>

        {/* Content Layout: 4 Cards on Left, Architectural Visual on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* 4 Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {WHY_US_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-card-interactive p-6 rounded-2xl flex flex-col justify-between bg-slate-50/70 border-slate-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#FF6600]">
                      {pillar.number}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center">
                      {getIcon(idx)}
                    </div>
                  </div>

                  <h3 className="text-base font-display font-bold text-[#0F1E36] mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Architectural / Solar Image Side */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src={IMAGES.inverterStorage}
                alt="High-end residential battery storage and inverter setup"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/60 via-transparent to-transparent" />

              {/* Overlay Quality Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl border border-slate-200 bg-white/95 shadow-md">
                <p className="text-[11px] font-bold text-[#FF6600] uppercase tracking-wider mb-1">
                  Engineered Standard
                </p>
                <p className="text-xs text-slate-700 leading-snug">
                  Clean industrial-grade cable dressing, low resistance grounding pits, and genuine components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
