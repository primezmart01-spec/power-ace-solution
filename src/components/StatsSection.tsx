import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Calendar, Users, MapPin, Zap } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    {
      label: 'ESTABLISHED',
      value: COMPANY_INFO.founded,
      subtext: 'Engineering Clean Power in Pakistan',
      icon: <Calendar className="w-4 h-4 text-[#FF6600]" />,
    },
    {
      label: 'CORE TEAM',
      value: COMPANY_INFO.teamSize,
      subtext: 'Specialist Solar & Electrical Engineers',
      icon: <Users className="w-4 h-4 text-[#FF6600]" />,
    },
    {
      label: 'SERVICE AREA',
      value: COMPANY_INFO.serviceArea,
      subtext: 'Islamabad & Rawalpindi Territory',
      icon: <MapPin className="w-4 h-4 text-[#FF6600]" />,
    },
    {
      label: 'CORE FOCUS',
      value: COMPANY_INFO.focus,
      subtext: 'Solar, Backup & Electrical Infrastructure',
      icon: <Zap className="w-4 h-4 text-[#FF6600]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 relative bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between group hover:border-[#FF6600]/60 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
                  {stat.label}
                </span>
                <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 group-hover:bg-[#FF6600] group-hover:text-white transition-colors">
                  {stat.icon}
                </div>
              </div>

              <div>
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F1E36] tabular-nums tracking-tight group-hover:text-[#FF6600] transition-colors">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-500 mt-2 font-normal leading-snug">
                  {stat.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
