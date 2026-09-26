import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { MapPin, ArrowUpRight } from 'lucide-react';

interface ProjectShowcaseProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const categories = ['ALL', 'SOLAR', 'RESIDENTIAL', 'COMMERCIAL', 'ELECTRICAL', 'SECURITY'];

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-2 block">
              PORTFOLIO & CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#0F1E36] leading-tight text-balance">
              PRECISION INSTALLATIONS.
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Verified engineering configurations deployed across the twin cities.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 border border-slate-200 rounded-xl">
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
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
        </div>

        {/* Projects Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="glass-card-interactive group rounded-3xl overflow-hidden flex flex-col justify-between cursor-pointer border border-slate-200 bg-white shadow-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') onSelectProject(project);
              }}
            >
              {/* Image Container with Zoom effect */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/70 via-transparent to-transparent" />

                {/* Honest Verification Label */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-[#FF6600] border border-orange-200 font-bold shadow-sm">
                    {project.label}
                  </span>
                </div>

                {project.capacity && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-[#0F1E36]/90 text-white border border-white/20 font-semibold shadow-sm">
                      {project.capacity}
                    </span>
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
                    <span>{project.location}</span>
                    <span className="text-slate-300">·</span>
                    <span>{project.service}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-display font-bold text-[#0F1E36] group-hover:text-[#FF6600] transition-colors mb-3 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-[#0F1E36] transition-colors">
                  <span className="font-semibold text-[#FF6600]">View System Specifications</span>
                  <div className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center group-hover:bg-[#FF6600] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
