import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/siteData';
import { CheckCircle2, Clock, ChevronRight } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const [selectedStepIndex, setSelectedStepIndex] = useState<number>(0);

  const currentStep = TIMELINE_STEPS[selectedStepIndex];

  return (
    <section className="py-20 sm:py-28 relative bg-slate-50/70 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 sm:mb-18 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
            OUR EXECUTION METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-tight text-balance">
            FROM IDEA TO POWER.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            A structured, 5-stage deployment methodology that eliminates surprises, delays, and post-installation downtime.
          </p>
        </div>

        {/* Horizontal Stepper Navigation Bar with Connecting Line */}
        <div className="relative mb-12">
          {/* Background Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          {/* Active progress track */}
          <div
            className="hidden md:block absolute top-1/2 left-0 h-0.5 bg-[#FF6600] -translate-y-1/2 z-0 transition-all duration-500 ease-out"
            style={{ width: `${(selectedStepIndex / (TIMELINE_STEPS.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const isSelected = selectedStepIndex === idx;
              const isPassed = idx < selectedStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setSelectedStepIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF6600] shadow-md ring-1 ring-[#FF6600]'
                      : isPassed
                      ? 'bg-white/90 border-slate-300 hover:border-[#FF6600]/50'
                      : 'bg-white/60 border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected
                          ? 'text-[#FF6600]'
                          : isPassed
                          ? 'text-[#0F1E36]'
                          : 'text-slate-400'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">
                      {step.duration}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-xs sm:text-sm font-bold tracking-tight transition-colors ${
                        isSelected ? 'text-[#FF6600]' : 'text-[#0F1E36]'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Step Detailed Card in Light Theme */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-orange-100 text-[#FF6600] border border-orange-200">
                  STAGE {currentStep.step}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#FF6600]" /> Timeline: {currentStep.duration}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F1E36]">
                {currentStep.title}: {currentStep.subtitle}
              </h3>
            </div>

            {/* Quick Next Button */}
            {selectedStepIndex < TIMELINE_STEPS.length - 1 && (
              <button
                onClick={() => setSelectedStepIndex(selectedStepIndex + 1)}
                className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#FF6600] hover:bg-[#E65C00] cursor-pointer shadow-sm"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {currentStep.details.map((detail, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
