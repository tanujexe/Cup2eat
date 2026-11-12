import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { BRAND_CONFIG } from '../data/brand';

export default function Footer({ onOpenEnquiry }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0D261E] text-[#F4EBD8] relative overflow-hidden pt-20 pb-12 border-t border-[#C5A66A]/20">
      
      {/* Top Banner: Final Conversion Punch */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-12 sm:pb-16 border-b border-[#F4EBD8]/10 font-sans-manrope">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32] text-[#C5A66A] mb-3 border border-[#C5A66A]/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="eyebrow-label text-[#C5A66A]">Zero Waste • Infinite Delight</span>
            </div>
            <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#F4EBD8] uppercase tracking-tight leading-[1.02]">
              Your Last Sip Should Be
            </h2>
            <div className="font-calligraphy text-4xl sm:text-6xl text-[#C5A66A] capitalize mt-1">
              your first bite.
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-sans-manrope">
            <a
              href="#products"
              className="px-7 py-4 rounded-full border-2 border-[#F4EBD8] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#F4EBD8] hover:text-[#173F32] transition-colors"
            >
              Explore Products
            </a>
            <button
              onClick={onOpenEnquiry}
              className="px-8 py-4 rounded-full bg-[#C77C48] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#A96131] transition-all shadow-md cursor-pointer"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand Bio (5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#173F32] flex items-center justify-center text-[#C5A66A] border border-[#C5A66A]/30">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                  <path d="M6 8L7.5 18C7.8 19.5 9.2 20.5 10.8 20.5H13.2C14.8 20.5 16.2 19.5 16.5 18L18 8H6Z" fill="#F4EBD8" stroke="#C5A66A" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-logo-brand font-bold text-2xl tracking-tight text-[#F4EBD8]">
                CUP<span className="text-[#C77C48]">2</span>EAT
              </span>
            </div>

            <p className="text-sm text-[#F4EBD8]/75 max-w-sm leading-relaxed">
              CUP2EAT is revolutionizing beverage culture with 100% edible, baked, leak-proof cups.
              Designed for cafes, corporate summits, and celebrations. Founded by Varun Khera.
            </p>

            <div className="pt-2 text-xs font-mono text-[#C5A66A]">
              "DRINK IT. EAT IT. LOVE IT."
            </div>
          </div>

          {/* Quick Navigation (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C5A66A]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F4EBD8]/80">
              <li><a href="#hero" className="hover:text-[#C77C48] transition-colors">Home</a></li>
              <li><a href="#story" className="hover:text-[#C77C48] transition-colors">Our Story</a></li>
              <li><a href="#experience" className="hover:text-[#C77C48] transition-colors">The Experience</a></li>
              <li><a href="#products" className="hover:text-[#C77C48] transition-colors">Products</a></li>
              <li><a href="#use-cases" className="hover:text-[#C77C48] transition-colors">Where It Belongs</a></li>
              <li><a href="#about" className="hover:text-[#C77C48] transition-colors">About & Founder</a></li>
            </ul>
          </div>

          {/* Sectors & Bulk (2 Columns) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C5A66A]">
              B2B Sectors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#F4EBD8]/80">
              <li><button onClick={onOpenEnquiry} className="hover:text-[#C77C48] transition-colors cursor-pointer text-left">Specialty Cafes</button></li>
              <li><button onClick={onOpenEnquiry} className="hover:text-[#C77C48] transition-colors cursor-pointer text-left">College Festivals</button></li>
              <li><button onClick={onOpenEnquiry} className="hover:text-[#C77C48] transition-colors cursor-pointer text-left">Corporate Summits</button></li>
              <li><button onClick={onOpenEnquiry} className="hover:text-[#C77C48] transition-colors cursor-pointer text-left">Food Exhibitions</button></li>
              <li><button onClick={onOpenEnquiry} className="hover:text-[#C77C48] transition-colors cursor-pointer text-left">Custom Embossing</button></li>
            </ul>
          </div>

          {/* Connect & Social (3 Columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#C5A66A]">
              Official Connect
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#F4EBD8]/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A66A] shrink-0" />
                <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-[#C5A66A] transition-colors">
                  {BRAND_CONFIG.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A66A] shrink-0" />
                <span>{BRAND_CONFIG.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A66A] shrink-0" />
                <span>{BRAND_CONFIG.contact.location}</span>
              </div>
              <div className="pt-2">
                <a
                  href={BRAND_CONFIG.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F32] text-[#F4EBD8] text-xs font-mono hover:bg-[#C77C48] transition-colors"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-[#C5A66A]" />
                  <span>@cup2eat</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="mt-16 pt-8 border-t border-[#F4EBD8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#F4EBD8]/60">
          <div>
            © {new Date().getFullYear()} CUP2EAT. All rights reserved. Crafted for an edible tomorrow.
          </div>

          <div className="flex items-center gap-6">
            <span>Founder: Varun Khera</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#C5A66A] hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
