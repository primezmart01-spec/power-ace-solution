import React from 'react';
import { SERVICES, IMAGES } from '../data/siteData';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuote }) => {
  const getServiceImage = (index: number) => {
    switch (index % 4) {
      case 0:
        return IMAGES.heroArchitecture;
      case 1:
        return IMAGES.inverterStorage;
      case 2:
        return IMAGES.commercialSolar;
      case 3:
      default:
        return IMAGES.cctvSecurity;
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#0F1E36]">
      {/* Hero Header */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
          ENGINEERING CAPABILITIES
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-tight mb-6">
          SOLUTIONS BUILT AROUND YOUR POWER.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          Explore our six core disciplines. Every solution is custom engineered to ensure zero energy waste, regulatory compliance with IESCO, and continuous power continuity.
        </p>
      </section>

      {/* Alternating Detailed Sections */}
      <div className="space-y-20 max-w-6xl mx-auto px-4 sm:px-6">
        {SERVICES.map((srv, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={srv.id}
              id={srv.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-10 border-t border-slate-200 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
                  <img
                    src={getServiceImage(idx)}
                    alt={srv.title}
                    className="w-full h-[360px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/40 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-mono font-bold text-[#FF6600] shadow-sm">
                    SERVICE {srv.number}
                  </div>
                </div>
              </div>

              {/* Text & Content Column */}
              <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#FF6600]">
                      {srv.number}
                    </span>
                    <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                      {srv.tagline}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#0F1E36]">
                    {srv.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-white border border-slate-200 mt-4 text-center shadow-sm">
                    {srv.specs.map((sp, sIdx) => (
                      <div key={sIdx}>
                        <p className="text-[10px] uppercase text-slate-500 font-mono font-semibold">{sp.label}</p>
                        <p className="text-xs font-bold text-[#0F1E36] truncate mt-0.5">{sp.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={() => onOpenQuote(srv.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all cursor-pointer shadow-md"
                    >
                      <span>Get a Quote for {srv.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
