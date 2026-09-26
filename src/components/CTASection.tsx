import React from 'react';
import { ArrowUpRight, Phone } from 'lucide-react';
import { COMPANY_INFO, IMAGES } from '../data/siteData';

interface CTASectionProps {
  onOpenQuote: () => void;
  onOpenCall: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenQuote, onOpenCall }) => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-[#0F1E36] text-white">
      {/* Background with Dark Navy Scrim */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={IMAGES.heroArchitecture}
          alt="Sustainable architectural residence backdrop"
          className="w-full h-full object-cover object-center opacity-20 scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/90 to-[#0F1E36]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 inline-block">
          START YOUR TRANSITION
        </span>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white leading-tight mb-6 text-balance">
          READY TO TAKE CONTROL OF YOUR ENERGY?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us what you're powering, where you're located and what you want to achieve. We'll help you identify the right solution.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all duration-200 hover:shadow-[0_4px_24px_rgba(255,102,0,0.4)] cursor-pointer group"
          >
            <span>GET A FREE QUOTE</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={onOpenCall}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-200 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#FF6600]" />
            <span>CALL POWER ACE</span>
          </button>
        </div>

        <p className="text-xs text-slate-400 mt-8 font-mono">
          Direct Line: {COMPANY_INFO.phoneFormatted} · Islamabad & Rawalpindi
        </p>
      </div>
    </section>
  );
};
