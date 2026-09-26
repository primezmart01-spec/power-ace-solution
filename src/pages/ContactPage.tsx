import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/siteData';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceRequired: 'Solar Energy',
    monthlyBill: '',
    location: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.phone.trim()) errs.phone = 'Please provide your telephone/WhatsApp number';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Please provide a valid email';
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

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#0F1E36]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 sm:mb-18 max-w-3xl">
          <span className="text-xs font-bold tracking-widest uppercase text-[#FF6600] mb-3 block">
            GET IN TOUCH
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-tight text-[#0F1E36] leading-tight mb-4">
            LET'S TALK ABOUT YOUR POWER.
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out to discuss your residential or commercial electrical needs, request an on-site survey, or receive a transparent cost-benefit assessment.
          </p>
        </div>

        {/* Two Column Layout: Left Contact Info + Verified Map, Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Coordinates & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  DIRECT CALL / WHATSAPP
                </p>
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="text-xl sm:text-2xl font-display font-bold text-[#FF6600] hover:text-[#E65C00] transition-colors block font-mono"
                >
                  {COMPANY_INFO.phoneFormatted}
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Engineers available Mon – Sat (9:00 AM – 7:00 PM)
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  OFFICIAL EMAIL
                </p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base font-semibold text-[#0F1E36] hover:text-[#FF6600] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  HEAD OFFICE ADDRESS
                </p>
                <p className="text-sm text-slate-800 leading-relaxed font-medium">
                  {COMPANY_INFO.office}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Service Area: Islamabad & Rawalpindi metropolitan region
                </p>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${COMPANY_INFO.phoneRaw.replace('+', '')}?text=${encodeURIComponent(
                    'Hello Power Ace Solutions, I would like to schedule a site consultation for my premises.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Instantly</span>
                </a>
              </div>
            </div>

            {/* Verified Location Card (Islamabad - Police Foundation / Pakistan Town) */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-[#FF6600]" />
                <h4 className="text-sm font-bold text-[#0F1E36]">
                  Office Location Verification
                </h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Conveniently located at 3rd Floor, Paris Shopping Mall, Pakistan Town Phase 1 (adjacent to Police Foundation), accessible via Islamabad Expressway and PWD Road.
              </p>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] font-mono font-bold text-[#0F1E36] flex items-center justify-between">
                <span>Coordinates: Islamabad Territory</span>
                <span className="text-[#FF6600]">Active Office</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form in Light Theme */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-lg">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-100 border border-[#FF6600] flex items-center justify-center mx-auto mb-5 text-[#FF6600]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-[#0F1E36] mb-2">
                    Consultation Requested
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto mb-6 leading-relaxed">
                    Thank you, <span className="text-[#0F1E36] font-semibold">{formData.name}</span>. We have logged your request. A Power Ace electrical consultant will contact you via phone/WhatsApp at <span className="text-[#FF6600] font-bold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        propertyType: 'Residential',
                        serviceRequired: 'Solar Energy',
                        monthlyBill: '',
                        location: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-[#0F1E36]">
                      Request a Free Consultation
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below. We will analyze your power consumption pattern.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Asad Ullah Khan"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0348 056 9603"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="yourname@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      >
                        <option value="Residential">Residential (House / Villa)</option>
                        <option value="Commercial">Commercial (Office / Plaza / Clinic)</option>
                        <option value="Industrial">Industrial Facility</option>
                        <option value="Agricultural">Farmhouse / Agricultural Tube Well</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Service Required
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      >
                        <option value="Solar Energy">Solar Energy & Net Metering</option>
                        <option value="UPS & Backup Power">UPS & Lithium Battery Backup</option>
                        <option value="Electrical Solutions">General Electrical Infrastructure</option>
                        <option value="CCTV & Security">CCTV & Security Matrix</option>
                        <option value="Solar Installation">Galvanized Solar Frame Mounting</option>
                        <option value="Energy Consultation">Energy Audit & Sizing Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Monthly Electricity Bill (PKR approx)
                      </label>
                      <input
                        type="text"
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        placeholder="e.g. 85,000"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Location in Islamabad / Rawalpindi
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Sector F-10/2, Islamabad / Media Town Rawalpindi"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide any details about your rooftop area, daytime AC usage, or critical backup loads..."
                      className="w-full px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-sm text-[#0F1E36] focus:bg-white focus:outline-none focus:border-[#FF6600]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#FF6600]" />
                      <span>Zero obligation · Privacy respected</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      <span>REQUEST A FREE CONSULTATION</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
