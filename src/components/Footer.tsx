import React from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Sun, Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Lock } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenAdmin,
}) => {
  const exploreLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solar', label: 'Solar Systems' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const serviceLinks = [
    'Solar Energy & Net Metering',
    'UPS & Lithium Backup Storage',
    'Three-Phase Electrical Balancing',
    'CCTV & Smart Surveillance',
    'Galvanized Solar Mounting',
    'Data-Driven Energy Audits',
  ];

  const handleLink = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0F1E36] text-slate-400 text-xs pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Column 1: Power Ace Solutions Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-[#FF6600]/40 flex items-center justify-center text-[#FF6600]">
                <Sun className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-sm tracking-wider text-white uppercase">
                POWER ACE SOLUTIONS
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6 max-w-sm">
              Modern solar, electrical, backup and security systems engineered for homes and commercial facilities across Islamabad and Rawalpindi.
            </p>

            <div className="space-y-1 text-[11px] text-slate-400">
              <p>Registered Entity: Power Ace Solutions (Pvt) Ltd</p>
              <p>Operational Since: 2022</p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:col-span-2">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              EXPLORE
            </p>
            <ul className="space-y-2.5">
              {exploreLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleLink(item.id)}
                    className="hover:text-[#FF6600] transition-colors cursor-pointer text-left text-slate-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              SERVICES
            </p>
            <ul className="space-y-2.5">
              {serviceLinks.map((srv, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleLink('services')}
                    className="hover:text-[#FF6600] transition-colors cursor-pointer text-left text-[11px] text-slate-300"
                  >
                    {srv}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              CONTACT & OFFICE
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-start gap-2.5 hover:text-[#FF6600] transition-colors text-slate-300"
              >
                <Phone className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <span className="font-mono">{COMPANY_INFO.phoneFormatted}</span>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-[#FF6600] transition-colors text-slate-300"
              >
                <Mail className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-300">
                <MapPin className="w-4 h-4 text-[#FF6600] shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {COMPANY_INFO.office}
                </span>
              </div>
            </div>

            <div className="mt-5">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 border border-white/20 hover:border-[#FF6600] text-xs font-bold text-white hover:text-[#FF6600] transition-all cursor-pointer"
              >
                <span>Request Free Assessment</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Verification & Discreet Admin Icon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 Power Ace Solutions (Private) Limited. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <span>Islamabad / Rawalpindi</span>
            <span>·</span>
            <span>IESCO Net Metering Compliant</span>
            <span>·</span>
            {/* Discreet Admin Icon Button */}
            <button
              onClick={onOpenAdmin}
              className="w-6 h-6 rounded-md bg-slate-800/80 hover:bg-[#FF6600] text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              title="System Administration"
              aria-label="Admin Access"
            >
              <Lock className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
