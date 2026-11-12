import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export default function Navbar({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Products', href: '#products' },
    { name: 'Where It Belongs', href: '#use-cases' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F4EBD8]/90 backdrop-blur-md py-3.5 border-b border-[#173F32]/10 shadow-[0_4px_24px_rgba(23,63,50,0.06)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label="CUP2EAT Home"
        >
          {/* Logo Mark */}
          <div className="relative w-10 h-10 rounded-full bg-[#173F32] flex items-center justify-center text-[#C5A66A] shadow-md group-hover:scale-105 transition-transform duration-300">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 8L7.5 18C7.8 19.5 9.2 20.5 10.8 20.5H13.2C14.8 20.5 16.2 19.5 16.5 18L18 8H6Z"
                fill="#F4EBD8"
                stroke="#C5A66A"
                strokeWidth="1.5"
              />
              <path
                d="M5 8C5 6.5 7 6 12 6C17 6 19 6.5 19 8"
                stroke="#C5A66A"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              {/* Little Leaf Sprout */}
              <path
                d="M12 5.5C12.5 3.5 14.5 2.5 16.5 2.8C16 4.5 14 5.5 12 5.5Z"
                fill="#788B50"
              />
            </svg>
          </div>
          
          <div className="flex flex-col">
            <span className="font-logo-brand font-bold text-xl sm:text-2xl tracking-tight text-[#173F32] leading-none">
              CUP<span className="text-[#C77C48]">2</span>EAT
            </span>
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#788B50] mt-1 font-sans-manrope">
              {BRAND_CONFIG.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#173F32]/85 font-sans-manrope">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 transition-colors hover:text-[#C77C48] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C77C48] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={BRAND_CONFIG.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-wider font-semibold text-[#173F32]/70 hover:text-[#173F32] transition-colors"
          >
            @cup2eat
          </a>

          <button
            onClick={onOpenEnquiry}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#173F32] text-[#F4EBD8] font-medium text-xs tracking-wider uppercase overflow-hidden shadow-sm hover:shadow-md hover:bg-[#C77C48] transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#C5A66A] group-hover:rotate-12 transition-transform duration-300" />
            <span>Bulk Enquiry</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-[#173F32] hover:bg-[#173F32]/5 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 border-b border-[#173F32]/10 bg-[#F4EBD8]/95 backdrop-blur-lg' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-[#173F32] hover:text-[#C77C48] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-[#173F32]/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#173F32] text-[#F4EBD8] font-semibold text-sm uppercase tracking-wider"
            >
              <span>Bulk Enquiry & Samples</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={BRAND_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xs font-semibold text-[#173F32]/70 py-2"
            >
              Follow @cup2eat on Instagram
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

