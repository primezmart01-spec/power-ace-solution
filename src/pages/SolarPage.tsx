import React, { useState } from 'react';
import { FAQS } from '../data/siteData';
import { SolarCalculator } from '../components/SolarCalculator';
import {
  Sun,
  Layers,
  Cpu,
  Home,
  Tv,
  CheckCircle2,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';

interface SolarPageProps {
  onOpenQuote: (service?: string) => void;
  onApplyCalcToQuote: (details: any) => void;
}

export const SolarPage: React.FC<SolarPageProps> = ({
  onOpenQuote,
  onApplyCalcToQuote,
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeFlowStep, setActiveFlowStep] = useState<number>(2);

  const flowSteps = [
    {
      title: '1. Sunlight Capture',
      desc: 'High-intensity photon absorption during 5.2+ peak sun hours daily.',
      icon: <Sun className="w-5 h-5 text-amber-500" />,
    },
    {
      title: '2. Bifacial Solar Panels',
      desc: 'Generates power from both front and ambient reflected rooftop radiation.',
      icon: <Layers className="w-5 h-5 text-[#FF6600]" />,
    },
    {
      title: '3. Hybrid Inverter & MPPT',
      desc: 'Converts DC energy into clean 230V/400V AC power with sub-10ms switching.',
      icon: <Cpu className="w-5 h-5 text-blue-600" />,
    },
    {
      title: '4. Household Distribution',
      desc: 'Feeds daytime household loads directly and sends excess to IESCO green meter.',
      icon: <Home className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: '5. Appliances & Backup',
      desc: 'Seamlessly powers heavy ACs, water pumps, refrigerators, and lighting.',
      icon: <Tv className="w-5 h-5 text-[#FF6600]" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#0F1E36]">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
          RENEWABLE ENERGY DIVISION
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-tight mb-6">
          MAKE THE SUN WORK FOR YOU.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
          Turn unpredictable utility electricity bills into a fixed, predictable asset. We design and install high-yield solar systems with bi-directional net metering across Islamabad and Rawalpindi.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onOpenQuote('Solar Energy')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all cursor-pointer shadow-md"
          >
            <span>Request Solar Survey</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Energy Flow Visual: Sun → Solar Panels → Inverter → Home → Appliances */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600] block mb-2">
              SEAMLESS CONVERSION
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-[#0F1E36]">
              How Your Solar Power Flows
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From raw solar irradiance to clean, pure-sine 230V alternating current.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {flowSteps.map((step, idx) => {
              const isSelected = activeFlowStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveFlowStep(idx)}
                  className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'border-[#FF6600] bg-orange-50/70 shadow-md ring-1 ring-[#FF6600]'
                      : 'border-slate-200 bg-slate-50/60 hover:border-slate-300'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-3 shadow-sm">
                    {step.icon}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#0F1E36] mb-1">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial Solar */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Residential */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-[#FF6600] uppercase block mb-2">
              HOMES & VILLAS (5 MARLA TO 2 KANAL)
            </span>
            <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-4">
              Residential Solar Systems
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Designed to power inverter air conditioners, water pumps, lighting, and refrigeration throughout high summer tariffs without experiencing power flickers.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                Elevated rooftop frames allowing full terrace utilization
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                Hybrid battery integration for nighttime load shedding
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                IESCO green net-metering synchronization
              </li>
            </ul>
            <button
              onClick={() => onOpenQuote('Residential Solar')}
              className="text-xs font-bold uppercase tracking-wider text-[#FF6600] hover:text-[#E65C00] inline-flex items-center gap-1.5"
            >
              <span>Get Residential Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Commercial */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <span className="text-xs font-mono font-bold text-[#FF6600] uppercase block mb-2">
              OFFICES, CLINICS & INDUSTRIAL
            </span>
            <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-4">
              Commercial & Industrial Solar
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              High-capacity daytime peak shaving systems designed for warehouses, hospitals, schools, and office buildings to dramatically reduce commercial operating overhead.
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800 font-medium mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                Heavy-gauge wind load certified structural mounting
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                Dual-MPPT commercial inverters with zero-export control
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
                Detailed ROI & tariff depreciation reporting
              </li>
            </ul>
            <button
              onClick={() => onOpenQuote('Commercial Solar')}
              className="text-xs font-bold uppercase tracking-wider text-[#FF6600] hover:text-[#E65C00] inline-flex items-center gap-1.5"
            >
              <span>Get Commercial Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Sizing & Savings Calculator Component */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
        <SolarCalculator onApplyToQuote={onApplyCalcToQuote} />
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600] block mb-2">
              TECHNICAL CLARITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#0F1E36]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#0F1E36]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#FF6600] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
