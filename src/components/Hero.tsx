import React from 'react';
import { ArrowUpRight, Phone, Sparkles, Leaf } from 'lucide-react';
import { IMAGES } from '../data/siteData';

interface HeroProps {
  onOpenQuote: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onExplore }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-end justify-start pt-24 pb-14 sm:pb-20 overflow-hidden">
      {/* Background Image Container - 100% CRYSTAL CLEAR PHOTO */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src={IMAGES.heroClearVilla || IMAGES.heroArchitecture}
          alt="Modern luxury eco-house with rooftop solar panels and warm glowing interior"
          className="w-full h-full object-cover object-center scale-100 sm:scale-102 transition-transform duration-1000 ease-out"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Targeted subtle contrast gradient strictly on bottom and edges - keeps the house & panels 100% clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Main Content Container - Positioned at bottom-left matching reference layout */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 w-full flex flex-col sm:flex-row items-end justify-between gap-6">
        {/* Left Column: Heading, Subtitle & Action Pills */}
        <div className="max-w-2xl text-left">
          {/* Main Heading in Manrope font (matching the reference image layout) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold leading-[1.05] sm:leading-[1.02] tracking-tight text-white mb-3 sm:mb-4 text-balance drop-shadow-md">
            Cut Your Power Bills <br />
            <span className="text-[#FF6600]">Not Your Comfort</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-8 max-w-xl font-normal drop-shadow-sm">
            Switch to solar energy and start saving from day one with custom engineered solar and backup solutions.
          </p>

          {/* Action Buttons: Pill layout matching the reference screenshot */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            {/* Primary Pill Button */}
            <button
              onClick={onExplore}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-normal bg-white text-[#0F1E36] hover:bg-slate-100 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl cursor-pointer group whitespace-nowrap"
            >
              <span>Book a Free Call</span>
              <div className="w-5 h-5 rounded-full bg-[#0F1E36] text-white flex items-center justify-center group-hover:bg-[#FF6600] transition-colors">
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </button>

            {/* Secondary Glass Pill Button */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-normal text-white bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
            </button>
          </div>
        </div>

        {/* Right Corner: Floating Pill Badge matching reference image */}
        <div className="self-end sm:self-end">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/45 border border-white/20 backdrop-blur-md shadow-lg text-xs font-medium text-slate-200">
            <span className="w-2 h-2 rounded-full bg-[#FF6600] animate-pulse" />
            <span>Eco-Friendly Energy</span>
          </div>
        </div>
      </div>
    </section>
  );
};
