import React from 'react';
import { ArrowRight, CheckCircle2, Gauge } from 'lucide-react';
import { IMAGES, COMPANY_INFO } from '../data/siteData';

interface TrustIntroProps {
  onLearnMore: () => void;
}

export const TrustIntro: React.FC<TrustIntroProps> = ({ onLearnMore }) => {
  return (
    <section className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Text & Value Proposition */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600]">
                {COMPANY_INFO.shortName.toUpperCase()}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-[1.08] mb-6 text-balance">
              ENERGY SHOULD WORK QUIETLY IN THE BACKGROUND.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              From solar generation to backup power, electrical infrastructure and security systems, we help customers turn complicated power requirements into practical solutions.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800 font-medium">
                  Engineered specifically for Islamabad & Rawalpindi climate & grid fluctuations
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800 font-medium">
                  IESCO green net-metering compliant design with three-phase load balancing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6600] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-800 font-medium">
                  Long-term reliability with genuine Tier-1 hardware & dedicated technical support
                </span>
              </div>
            </div>

            <button
              onClick={onLearnMore}
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-[#FF6600] hover:text-[#E65C00] transition-colors group cursor-pointer"
            >
              <span>Learn About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Right Column: Premium overlapping architectural card composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
              <img
                src={IMAGES.commercialSolar}
                alt="Contemporary solar array installation with precision engineering"
                className="w-full h-[360px] sm:h-[420px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/60 via-transparent to-transparent" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 rounded-2xl p-4 sm:p-5 max-w-[280px] sm:max-w-xs border border-slate-200 bg-white shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-[#FF6600]">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0F1E36] uppercase tracking-wider">
                    Site-First Design
                  </h4>
                  <p className="text-[11px] text-slate-500">Zero guesswork installation</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-snug">
                Every circuit, panel angle, and battery capacity calculated to your actual hourly consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
