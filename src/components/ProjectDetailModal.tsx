import React from 'react';
import { ProjectItem } from '../types';
import { X, MapPin, CheckCircle2, Cpu, Layers, Battery, ArrowUpRight } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestSimilar,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/65 backdrop-blur-md">
      <div className="bg-white max-w-3xl w-full rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative max-h-[92vh] overflow-y-auto text-[#0F1E36]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/90 text-slate-700 hover:text-black flex items-center justify-center hover:bg-white cursor-pointer z-10 shadow-md"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Hero Image within Modal */}
        <div className="relative h-64 sm:h-80 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-3xl bg-slate-100">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36]/80 via-transparent to-black/20" />

          <div className="absolute top-6 left-6">
            <span className="text-xs font-mono tracking-wider px-3 py-1 rounded-md bg-white/95 text-[#FF6600] font-bold shadow-md">
              {project.label}
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 text-xs text-slate-200 mb-1 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>{project.location}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Overview */}
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F1E36] mb-3">
            Technical Execution Highlights
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.highlights.map((h, i) => (
              <div
                key={i}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-700"
              >
                <CheckCircle2 className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* System Specs Bento */}
        {project.systemDetails && (
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F1E36] mb-3">
              Hardware Architecture & Equipment
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.systemDetails.panels && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Layers className="w-4 h-4 text-[#FF6600] mb-1.5" />
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Panels</p>
                  <p className="text-xs font-bold text-[#0F1E36] mt-0.5">{project.systemDetails.panels}</p>
                </div>
              )}
              {project.systemDetails.inverter && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Cpu className="w-4 h-4 text-[#FF6600] mb-1.5" />
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Inverter</p>
                  <p className="text-xs font-bold text-[#0F1E36] mt-0.5">{project.systemDetails.inverter}</p>
                </div>
              )}
              {project.systemDetails.battery && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Battery className="w-4 h-4 text-[#FF6600] mb-1.5" />
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Storage</p>
                  <p className="text-xs font-bold text-[#0F1E36] mt-0.5">{project.systemDetails.battery}</p>
                </div>
              )}
              {project.systemDetails.monitoring && (
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6600] mb-1.5" />
                  <p className="text-[10px] text-slate-500 uppercase font-semibold">Telemetry</p>
                  <p className="text-xs font-bold text-[#0F1E36] mt-0.5">{project.systemDetails.monitoring}</p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500">
            Interested in deploying a similar system?
          </span>

          <button
            onClick={() => {
              onRequestSimilar(project.title);
              onClose();
            }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all cursor-pointer shadow-md"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
