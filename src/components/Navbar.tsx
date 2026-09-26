import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { COMPANY_INFO } from '../data/siteData';
import { Phone, ArrowUpRight, Menu, X, Sun } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
  onOpenCall: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenCall,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'solar', label: 'Solar' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isOverHero = currentPage === 'home' && !scrolled;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
        <nav
          aria-label="Main Navigation"
          className={`w-full max-w-6xl rounded-full px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 flex items-center justify-between ${
            isOverHero
              ? 'bg-black/40 backdrop-blur-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] text-white'
              : scrolled
              ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,30,54,0.08)] text-[#0F1E36]'
              : 'bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-[0_4px_20px_rgba(15,30,54,0.04)] text-[#0F1E36]'
          }`}
        >
          {/* Brand Wordmark */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6600] rounded-lg group cursor-pointer"
            aria-label="Power Ace Solutions Home"
          >
            <div className="w-8 h-8 rounded-full bg-orange-500/20 border border-[#FF6600]/40 flex items-center justify-center text-[#FF6600] group-hover:scale-105 transition-transform duration-200">
              <Sun className="w-4 h-4 text-[#FF6600]" />
            </div>
            <span
              className={`font-display font-bold text-sm sm:text-base tracking-wider uppercase transition-colors ${
                isOverHero
                  ? 'text-white group-hover:text-[#FF6600]'
                  : 'text-[#0F1E36] group-hover:text-[#FF6600]'
              }`}
            >
              POWER ACE SOLUTIONS
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-semibold transition-all duration-200 rounded-full relative cursor-pointer ${
                    isActive
                      ? 'text-[#FF6600]'
                      : isOverHero
                      ? 'text-slate-200 hover:text-white'
                      : 'text-slate-600 hover:text-[#0F1E36]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#FF6600] rounded-full shadow-[0_0_8px_#FF6600]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Zone */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenCall}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isOverHero
                  ? 'text-slate-200 hover:text-white hover:bg-white/10'
                  : 'text-slate-700 hover:text-[#0F1E36] hover:bg-slate-100'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#FF6600]" />
              <span className="hidden md:inline">Call Us</span>
            </button>

            <button
              onClick={onOpenQuote}
              className="flex items-center gap-1.5 px-4 py-1.5 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FF6600] text-white hover:bg-[#E65C00] transition-all duration-200 hover:shadow-[0_4px_16px_rgba(255,102,0,0.35)] cursor-pointer group whitespace-nowrap"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>
          </div>


          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#FF6600] text-white"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 hover:bg-slate-100 focus-visible:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-[11px] uppercase tracking-widest text-[#FF6600] font-bold">
                Navigation
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-500 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between text-left py-2.5 px-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-orange-50 text-[#FF6600]'
                      : 'text-[#0F1E36] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FF6600]" />}
                </button>
              );
            })}
          </div>

          <div className="border-t border-slate-200 pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-600">
              <span>Helpline (ISB / RWP):</span>
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#FF6600] font-bold font-mono">
                {COMPANY_INFO.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCall();
                }}
                className="py-2.5 px-3 rounded-xl border border-slate-300 text-xs font-semibold text-center text-[#0F1E36] bg-slate-50"
              >
                Call Power Ace
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="py-2.5 px-3 rounded-xl text-xs font-bold text-center text-white bg-[#FF6600]"
              >
                Get a Free Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
