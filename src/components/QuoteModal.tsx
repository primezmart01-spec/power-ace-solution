import React, { useState, useEffect } from 'react';
import { QuoteFormData } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sun } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialDetails?: {
    bill?: number;
    recommendedKw?: number;
    propertyType?: string;
  };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialDetails,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceRequired: initialService || 'Solar Energy',
    monthlyBill: initialDetails?.bill ? String(initialDetails.bill) : '60000',
    location: 'Islamabad',
    notes: initialDetails?.recommendedKw
      ? `Interested in approx ${initialDetails.recommendedKw} kW system based on calculator estimate.`
      : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (initialDetails?.bill) {
      setFormData((prev) => ({
        ...prev,
        monthlyBill: String(initialDetails.bill),
        propertyType: (initialDetails.propertyType?.includes('Commercial')
          ? 'Commercial'
          : 'Residential') as any,
        notes: `Estimated ${initialDetails.recommendedKw} kW system configuration.`,
      }));
    }
  }, [initialDetails]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name';
    if (!formData.phone.trim() || formData.phone.length < 10)
      errs.phone = 'Please provide a valid contact number';
    if (!formData.email.trim() || !formData.email.includes('@'))
      errs.email = 'Please provide a valid email address';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/60 backdrop-blur-md">
      <div className="bg-white max-w-2xl w-full rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl relative max-h-[92vh] overflow-y-auto text-[#0F1E36]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 flex items-center justify-center hover:bg-slate-200 cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-100 border border-[#FF6600] flex items-center justify-center mx-auto mb-5 text-[#FF6600]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-2">
              Assessment Request Received
            </h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
              Thank you, <span className="text-[#0F1E36] font-semibold">{formData.name}</span>. An engineering specialist from Power Ace Solutions will review your requirements and reach out via phone at{' '}
              <span className="text-[#FF6600] font-semibold">{formData.phone}</span>.
            </p>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-600 mb-8 space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span>Service:</span>
                <span className="text-[#0F1E36] font-semibold">{formData.serviceRequired}</span>
              </div>
              <div className="flex justify-between">
                <span>Monthly Bill:</span>
                <span className="text-[#0F1E36] font-semibold">PKR {Number(formData.monthlyBill).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="text-[#0F1E36] font-semibold">{formData.location}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00]"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 mb-2">
                <Sun className="w-4 h-4 text-[#FF6600]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                  POWER ACE SOLUTIONS
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#0F1E36]">
                Request a Free Engineering Consultation
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your property and current electricity consumption.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Tariq Mehmood"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                  {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Phone Number (WhatsApp Active) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0348 056 9603"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. name@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                  {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  >
                    <option value="Residential">Residential Home / Villa</option>
                    <option value="Commercial">Commercial Office / Facility</option>
                    <option value="Industrial">Industrial Unit</option>
                    <option value="Agricultural">Agricultural / Farm House</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  >
                    <option value="Solar Energy">Solar Energy & Net Metering</option>
                    <option value="UPS & Backup Power">UPS & Lithium Battery Backup</option>
                    <option value="Electrical Solutions">Electrical Infrastructure & DB</option>
                    <option value="CCTV & Security">CCTV & Surveillance System</option>
                    <option value="Solar Installation">Galvanized Solar Frame Mounting</option>
                    <option value="Energy Consultation">Energy Audit & Sizing</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Monthly Electricity Bill (PKR approx)
                  </label>
                  <input
                    type="number"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    placeholder="e.g. 75000"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Location (Sector / Area in ISB / RWP)
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. DHA Phase 2, Islamabad / Bahria Town Phase 7"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Specific Requirements or Appliances to Power
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. We want to run 2 Inverter ACs on solar during the day and have 4 hours backup at night..."
                  className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FF6600]" />
                  <span>No obligation, transparent engineering survey</span>
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all cursor-pointer flex items-center gap-1.5 shadow-md"
                >
                  <span>REQUEST CONSULTATION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
