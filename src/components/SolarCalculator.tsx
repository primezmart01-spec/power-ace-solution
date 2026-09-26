import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Zap, CheckCircle2 } from 'lucide-react';

interface SolarCalculatorProps {
  onApplyToQuote: (calcDetails: {
    bill: number;
    recommendedKw: number;
    unitsGenerated: number;
    estimatedSavings: number;
    propertyType: string;
  }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onApplyToQuote }) => {
  const [billPkr, setBillPkr] = useState<number>(65000);
  const [propertyType, setPropertyType] = useState<string>('10 Marla Residential');

  // Realistic calculations based on Islamabad / IESCO tariff brackets (approx PKR 55-65 per kWh with taxes)
  const calculation = useMemo(() => {
    const estimatedUnits = Math.round(billPkr / 58);
    const recommendedKw = Math.max(5, Math.ceil(estimatedUnits / 125));
    const monthlyGenerationUnits = recommendedKw * 130;
    const monthlySavings = Math.min(billPkr * 0.88, monthlyGenerationUnits * 52);
    const annualSavings = Math.round(monthlySavings * 12);
    const backupHours = recommendedKw >= 10 ? '6–8 Hours' : '4–5 Hours';

    return {
      estimatedUnits,
      recommendedKw,
      monthlyGenerationUnits,
      monthlySavings: Math.round(monthlySavings),
      annualSavings,
      backupHours,
    };
  }, [billPkr]);

  const propertyOptions = [
    '5 Marla Home',
    '10 Marla Residential',
    '1 Kanal Luxury Villa',
    'Commercial Office / Clinic',
    'Industrial Facility',
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-lg text-[#0F1E36]">
      <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-100 gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600] block mb-1">
            ESTIMATION ENGINE
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0F1E36]">
            Solar Sizing & Savings Calculator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Calculated against Islamabad / Rawalpindi grid tariffs and sunlight hours.
          </p>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs text-[#FF6600] font-bold self-start md:self-auto flex items-center gap-1.5 shadow-sm">
          <Zap className="w-3.5 h-3.5" />
          <span>IESCO Net Metering Model</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Controls Column */}
        <div className="lg:col-span-6 space-y-6">
          {/* Property Type Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-2.5">
              Property Footprint
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {propertyOptions.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setPropertyType(opt)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer ${
                    propertyType === opt
                      ? 'bg-[#FF6600] text-white border-[#FF6600] shadow-sm'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Monthly Bill Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Current Monthly Electricity Bill
              </label>
              <span className="font-mono text-base sm:text-lg font-bold text-[#FF6600] tabular-nums">
                PKR {billPkr.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min="20000"
              max="250000"
              step="5000"
              value={billPkr}
              onChange={(e) => setBillPkr(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#FF6600]"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-400 font-medium mt-1.5">
              <span>PKR 20,000</span>
              <span>PKR 125,000</span>
              <span>PKR 250,000+</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 text-slate-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Includes three-phase net-metering compatibility</span>
            </div>
            <div className="flex items-center gap-2 text-slate-800 font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#FF6600]" />
              <span>Designed to offset peak day-time AC & refrigeration loads</span>
            </div>
          </div>
        </div>

        {/* Output Sizing Column */}
        <div className="lg:col-span-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 border border-slate-200 relative overflow-hidden">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 uppercase font-semibold block mb-1">
                  Recommended System
                </span>
                <p className="font-mono text-2xl sm:text-3xl font-extrabold text-[#FF6600] tabular-nums">
                  {calculation.recommendedKw} kW
                </p>
                <span className="text-[10px] text-slate-500">Hybrid or On-Grid</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <span className="text-[11px] text-slate-500 uppercase font-semibold block mb-1">
                  Est. Generation
                </span>
                <p className="font-mono text-2xl sm:text-3xl font-extrabold text-[#0F1E36] tabular-nums">
                  ~{calculation.monthlyGenerationUnits}
                </p>
                <span className="text-[10px] text-slate-500">Units / month</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200 mb-6 shadow-sm">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-600">Est. Monthly Power Savings:</span>
                <span className="font-mono font-bold text-[#FF6600] tabular-nums">
                  PKR {calculation.monthlySavings.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600">Est. Annual Bill Reduction:</span>
                <span className="font-mono font-bold text-[#0F1E36] tabular-nums">
                  PKR {calculation.annualSavings.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onApplyToQuote({
                  bill: billPkr,
                  recommendedKw: calculation.recommendedKw,
                  unitsGenerated: calculation.monthlyGenerationUnits,
                  estimatedSavings: calculation.monthlySavings,
                  propertyType,
                })
              }
              className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all flex items-center justify-center gap-2 cursor-pointer group shadow-md"
            >
              <span>Apply This Size to Free Quote</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
