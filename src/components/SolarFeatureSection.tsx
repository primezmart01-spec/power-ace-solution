import React, { useState } from 'react';
import { IMAGES } from '../data/siteData';
import {
  Check,
  ArrowUpRight,
  Sun,
  Layers,
  Cpu,
  Home,
  Tv,
} from 'lucide-react';

interface SolarFeatureSectionProps {
  onExploreSolar: () => void;
}

export const SolarFeatureSection: React.FC<SolarFeatureSectionProps> = ({
  onExploreSolar,
}) => {
  const [activeStep, setActiveStep] = useState<number>(2);

  const energyFlowNodes = [
    {
      id: 1,
      title: 'Solar Radiance',
      desc: 'Abundant daylight captured',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
      metric: '5.2 Peak Sun Hours',
    },
    {
      id: 2,
      title: 'Photovoltaic Array',
      desc: 'Tier-1 bifacial modules',
      icon: <Layers className="w-5 h-5 text-[#FF6600]" />,
      metric: '98% Photon Absorption',
    },
    {
      id: 3,
      title: 'Hybrid Inverter',
      desc: 'Clean pure sine conversion',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
      metric: '<10ms Zero-Flicker Transfer',
    },
    {
      id: 4,
      title: 'Smart Distribution',
      desc: 'Balanced 3-phase DB',
      icon: <Home className="w-5 h-5 text-indigo-600" />,
      metric: 'IESCO Bi-Directional Grid',
    },
    {
      id: 5,
      title: 'Powering Loads',
      desc: 'ACs, lights, & appliances',
      icon: <Tv className="w-5 h-5 text-[#FF6600]" />,
      metric: 'Zero Outage Comfort',
    },
  ];

  return (
    <section className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Large Cinematic Solar Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl group">
              <img
                src={IMAGES.heroArchitecture}
                alt="Contemporary residence with integrated solar roofing"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/60 via-transparent to-transparent" />

              {/* Inset Badge */}
              <div className="absolute top-4 left-4 bg-white/95 px-3.5 py-1.5 rounded-full border border-slate-200 text-xs font-bold text-[#FF6600] shadow-sm">
                High-Yield Photovoltaics
              </div>

              {/* Bottom Inset Stat */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 rounded-2xl border border-slate-200 shadow-lg">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-600 font-medium">Estimated Monthly Offset</span>
                  <span className="font-mono font-bold text-[#FF6600] tabular-nums">Up to 85% Savings</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Light Card Content */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200">
              <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
                01 / SOLAR ENERGY
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-tight mb-4 text-balance">
                MAKE THE SUN WORK FOR YOU.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Build a solar system around your actual energy needs, available space and long-term goals.
              </p>

              {/* Feature Checklist (✓ icon) */}
              <div className="space-y-3.5 mb-8">
                {[
                  'Site & load assessment',
                  'Solar system planning',
                  'Panel & inverter solutions',
                  'Professional installation',
                  'System optimization',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-100 border border-orange-300 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#FF6600]" />
                    </div>
                    <span className="text-sm font-semibold text-[#0F1E36]">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onExploreSolar}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(255,102,0,0.35)] cursor-pointer group"
              >
                <span>EXPLORE SOLAR</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Elegant Energy Flow Visualizer: Sun → Solar Panels → Inverter → Home → Appliances */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600] block mb-1">
                Engineering Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F1E36]">
                Real-Time Energy Flow Dynamic
              </h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Click each stage to inspect the energy conversion pathway from photons to appliances.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4 relative">
            {energyFlowNodes.map((node, i) => {
              const isSelected = activeStep === i;
              return (
                <div
                  key={node.id}
                  onClick={() => setActiveStep(i)}
                  className={`p-4 sm:p-5 rounded-2xl flex flex-col justify-between cursor-pointer transition-all duration-300 relative border ${
                    isSelected
                      ? 'border-[#FF6600] bg-orange-50/70 shadow-md ring-1 ring-[#FF6600]'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-slate-400 font-bold">0{i + 1}</span>
                    <div className="p-2 rounded-xl bg-slate-100 border border-slate-200">
                      {node.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#0F1E36] mb-1">
                      {node.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-snug mb-3">
                      {node.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-100 text-[10px] font-mono font-bold text-[#FF6600] truncate">
                      {node.metric}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
