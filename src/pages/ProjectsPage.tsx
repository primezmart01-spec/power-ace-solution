import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { MapPin, ArrowUpRight, PlusCircle } from 'lucide-react';

interface ProjectsPageProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
  onOpenQuote: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projects,
  onSelectProject,
  onOpenQuote,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'SOLAR', 'RESIDENTIAL', 'COMMERCIAL', 'ELECTRICAL', 'SECURITY'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#0F1E36]">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
          PORTFOLIO ARCHITECTURE
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-tight mb-6">
          ENGINEERED CAPABILITY SHOWCASE.
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          Review our verified technical architectures across Islamabad and Rawalpindi. Each system represents calibrated mathematical load matching, structural wind safety, and low-resistance earthing.
        </p>

        {/* Filter Controls */}
        <div className="mt-8 flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 border border-slate-200 rounded-2xl w-fit">
          {categories.map((cat) => {
            const isSelected = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#FF6600] text-white shadow-sm'
                    : 'text-slate-600 hover:text-[#0F1E36] hover:bg-slate-200/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry / Gallery Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card-interactive group rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/70 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#FF6600] font-bold shadow-sm">
                    {project.label}
                  </span>
                </div>

                {project.capacity && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#0F1E36]/90 text-white font-semibold shadow-sm">
                      {project.capacity}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#0F1E36] group-hover:text-[#FF6600] transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-[#0F1E36] transition-colors">
                  <span className="font-semibold text-[#FF6600]">View Full Specs</span>
                  <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for Adding Real Client Case Studies */}
          <div className="p-8 rounded-3xl border border-dashed border-slate-300 flex flex-col items-center justify-center text-center bg-white shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-4 text-[#FF6600]">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-display font-bold text-[#0F1E36] mb-2">
              Upcoming Site Case Studies
            </h4>
            <p className="text-xs text-slate-500 max-w-xs mb-6 leading-relaxed">
              We update our portfolio as new installations complete commissioning and grid synchronization in Islamabad & Rawalpindi.
            </p>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0F1E36] text-white hover:bg-[#FF6600] transition-all cursor-pointer shadow-sm"
            >
              Have Your Property Surveyed
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
