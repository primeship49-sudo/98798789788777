import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ShieldCheck, UserCheck, Calendar, Sparkles, Phone, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenPassModal: () => void;
  onOpenMemberPortal: () => void;
  onOpenGithubHelper: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPassModal,
  onOpenMemberPortal,
  onOpenGithubHelper,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Timetable', href: '#schedule' },
    { name: 'Facility', href: '#amenities' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Fitness Calc', href: '#calculator' },
    { name: 'Stories', href: '#testimonials' },
    { name: 'Location', href: '#location' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro announcement bar */}
      <div id="announcement-banner" className="bg-neutral-900 border-b border-neutral-800 text-xs text-neutral-400 py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live: 24/7 Access Active
            </span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-neutral-300">
              Facility Capacity: <strong className="text-white font-semibold">{GYM_INFO.stats.capacity}</strong> (Optimal Training Flow)
            </span>
          </div>

          <div className="flex items-center gap-4 text-neutral-300">
            <button 
              id="github-pages-status-btn"
              onClick={onOpenGithubHelper}
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors text-xs font-medium cursor-pointer"
              title="View GitHub Pages Compatibility Details"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>GitHub Pages 100% Ready</span>
            </button>
            <span className="text-neutral-600">|</span>
            <a href="tel:5557897857" className="inline-flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-neutral-400" />
              <span className="hidden md:inline">{GYM_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-neutral-950/80 backdrop-blur-sm border-b border-neutral-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            id="brand-logo"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-neutral-950 shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="font-display font-black text-xl tracking-tight text-white flex items-center gap-1">
                IRON<span className="text-amber-400">PULSE</span>
              </div>
              <p className="text-[10px] tracking-widest text-neutral-400 uppercase font-semibold">Athletic Club</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-neutral-300 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              id="member-portal-btn"
              onClick={onOpenMemberPortal}
              className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 rounded-md transition-all flex items-center gap-1.5 cursor-pointer bg-neutral-900/60"
            >
              <UserCheck className="w-3.5 h-3.5 text-neutral-400" />
              <span>Member Portal</span>
            </button>

            <button
              id="claim-pass-nav-btn"
              onClick={onOpenPassModal}
              className="px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-md shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Claim Free 3-Day Pass</span>
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              id="mobile-pass-btn-quick"
              onClick={onOpenPassModal}
              className="px-2.5 py-1.5 text-[11px] font-bold text-neutral-950 bg-amber-400 rounded cursor-pointer sm:hidden"
            >
              Free Pass
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white rounded-lg border border-neutral-800 hover:bg-neutral-900 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-neutral-800 bg-neutral-950 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 text-sm font-medium text-neutral-300 hover:text-amber-400 hover:bg-neutral-900 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
              <button
                id="mobile-claim-pass-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPassModal();
                }}
                className="w-full py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg flex items-center justify-center gap-2 uppercase tracking-wide cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Claim Free 3-Day VIP Pass
              </button>

              <button
                id="mobile-member-portal-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMemberPortal();
                }}
                className="w-full py-2.5 text-xs font-semibold text-neutral-300 hover:text-white border border-neutral-800 bg-neutral-900 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserCheck className="w-4 h-4 text-neutral-400" />
                Member Keycard & Portal
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
