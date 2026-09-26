import React, { useState } from 'react';
import { SERVICES } from '../data/siteData';
import { ServiceItem } from '../types';
import {
  SunMedium,
  BatteryCharging,
  Zap,
  ShieldCheck,
  Wrench,
  Activity,
  ArrowUpRight,
  Check,
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote,
}) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'SunMedium':
        return <SunMedium className="w-5 h-5 text-[#FF6600]" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-[#FF6600]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#FF6600]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#FF6600]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#FF6600]" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5 text-[#FF6600]" />;
    }
  };

  const handleCardClick = (service: ServiceItem) => {
    if (onSelectService) {
      onSelectService(service);
    } else {
      setActiveModalService(service);
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative bg-slate-50/60 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14 sm:mb-18 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-2 block">
              CAPABILITIES & EXPERTISE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-tight text-balance">
              ONE TEAM. MULTIPLE POWER SOLUTIONS.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md">
            Integrated engineering across solar generation, uninterruptible power, distribution boards, and continuous surveillance.
          </p>
        </div>

        {/* Six Service Cards Grid in Light Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="glass-card-interactive group rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer relative overflow-hidden bg-white"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(service);
                }
              }}
            >
              {/* Subtle top indicator border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6600]/0 to-transparent group-hover:via-[#FF6600]/80 transition-all duration-500" />

              <div>
                {/* Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-wider text-slate-400 group-hover:text-[#FF6600] transition-colors">
                    {service.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                    <span className="group-hover:brightness-200 transition-all">
                      {getIcon(service.iconName)}
                    </span>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-[#0F1E36] mb-2 group-hover:text-[#FF6600] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#FF6600] mb-3 tracking-wide">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-[#0F1E36] transition-colors">
                <span className="font-semibold tracking-wide">Explore Technical Scope</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal in Light Theme */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/60 backdrop-blur-md">
          <div className="bg-white max-w-xl w-full rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto text-[#0F1E36]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#FF6600]">
                  {activeModalService.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F1E36]">
                  {activeModalService.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalService(null)}
                className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-xs font-bold text-[#FF6600] mb-4">
              {activeModalService.tagline}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            {/* Feature points */}
            <div className="mb-6">
              <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F1E36] mb-3">
                Key Engineering Highlights
              </h4>
              <div className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specs row */}
            <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 mb-6 text-center">
              {activeModalService.specs.map((sp, idx) => (
                <div key={idx}>
                  <p className="text-[10px] uppercase text-slate-500 font-medium">{sp.label}</p>
                  <p className="text-xs font-bold text-[#0F1E36] truncate mt-0.5">{sp.value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={() => setActiveModalService(null)}
                className="px-4 py-2 rounded-xl text-xs text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const serviceName = activeModalService.title;
                  setActiveModalService(null);
                  onOpenQuote(serviceName);
                }}
                className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] shadow-sm"
              >
                Request Quote for this
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
