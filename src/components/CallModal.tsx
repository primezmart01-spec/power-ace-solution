import React from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, MessageSquare, Clock, MapPin, X, ArrowUpRight } from 'lucide-react';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/60 backdrop-blur-md">
      <div className="bg-white max-w-md w-full rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl relative text-[#0F1E36]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6600]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
              DIRECT ENGINEERING LINE
            </span>
          </div>
          <h3 className="text-2xl font-display font-bold text-[#0F1E36]">
            Speak with Power Ace
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Connect directly with our engineering team in Islamabad.
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {/* Direct Phone Call Button */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#FF6600] hover:bg-orange-50/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-[#FF6600]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Direct Telephone</p>
                <p className="text-sm font-bold text-[#0F1E36] group-hover:text-[#FF6600] font-mono">
                  {COMPANY_INFO.phoneFormatted}
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#FF6600] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* WhatsApp Direct Connect */}
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
              'Hello Power Ace Solutions, I would like to inquire about solar/electrical solutions for my property in Islamabad/Rawalpindi.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-500 hover:bg-emerald-100/50 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Instant WhatsApp Message</p>
                <p className="text-sm font-bold text-emerald-800 group-hover:text-emerald-900">
                  Chat with Technical Team
                </p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Office details */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs text-slate-600">
          <div className="flex items-start gap-2">
            <Clock className="w-3.5 h-3.5 text-[#FF6600] shrink-0 mt-0.5" />
            <span>Business Hours: {COMPANY_INFO.hours}</span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-3.5 h-3.5 text-[#FF6600] shrink-0 mt-0.5" />
            <span>{COMPANY_INFO.office}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
