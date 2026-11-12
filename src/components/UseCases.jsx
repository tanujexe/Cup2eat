import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Users, Coffee, Building2, Ticket, Calculator } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export default function UseCases({ onOpenEnquiry }) {
  const [attendeeCount, setAttendeeCount] = useState(1500);

  // Calculations for zero waste impact estimator
  const cupsDiverted = attendeeCount * 2; // avg 2 cups per attendee
  const plasticAvoidedKg = Math.round(cupsDiverted * 0.012); // ~12g plastic per PE cup
  const socialImpressionsEst = Math.round(cupsDiverted * 3.8);

  const icons = {
    cafes: Coffee,
    college: Users,
    corporate: Building2,
    exhibitions: Ticket,
  };

  return (
    <section id="use-cases" className="py-16 sm:py-24 lg:py-32 bg-[#F4EBD8] text-[#173F32] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32]/8 text-[#173F32] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A66A]" />
            <span className="eyebrow-label text-[#173F32]">High-Impact Applications</span>
          </div>
          <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase">
            Where CUP2EAT Belongs
          </h2>
          <div className="font-calligraphy text-3xl sm:text-4xl text-[#C77C48] capitalize mt-1">
            crafted for memorable gatherings
          </div>
          <p className="mt-4 text-base sm:text-lg text-[#173F32]/75 leading-relaxed font-sans-manrope">
            Whether powering specialty coffee bars or elevating thousands of attendees at summit coffee lounges,
            CUP2EAT transforms simple refreshment breaks into unforgettable brand moments.
          </p>
        </div>

        {/* 4 Use Case Cards: Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {BRAND_CONFIG.useCases.map((uc, index) => {
            const Icon = icons[uc.id] || Coffee;

            return (
              <div
                key={uc.id}
                className="group rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#173F32]/15 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-500"
              >
                {/* Photo Stage */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#173F32]/5">
                  <img
                    src={uc.image}
                    alt={uc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#F4EBD8]/95 backdrop-blur-sm text-[#173F32] text-xs font-mono uppercase font-bold tracking-wider shadow-sm flex items-center gap-2">
                      <Icon className="w-3.5 h-3.5 text-[#C77C48]" />
                      <span>{uc.title}</span>
                    </span>
                  </div>

                  {/* Impact Metric Badge */}
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-[#173F32] text-[#C5A66A] text-xs font-mono uppercase font-bold tracking-wider shadow-md">
                      {uc.metrics}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between font-sans-manrope">
                  <div>
                    <h3 className="font-serif-fraunces font-bold text-2xl sm:text-3xl text-[#173F32] group-hover:text-[#C77C48] transition-colors leading-tight">
                      {uc.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-[#788B50] mt-1 font-sans-manrope">
                      {uc.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#173F32]/75 mt-3 leading-relaxed">
                      {uc.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-[#173F32]/10 flex items-center justify-between">
                    <span className="eyebrow-label text-[#173F32]/60">
                      B2B Delivery Available
                    </span>
                    <button
                      onClick={onOpenEnquiry}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#173F32] uppercase tracking-wider group-hover:text-[#C77C48] transition-colors cursor-pointer"
                    >
                      <span>Enquire for {uc.title}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Event Impact Calculator */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-[#173F32] text-[#F4EBD8] shadow-2xl relative overflow-hidden font-sans-manrope">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A66A]/20 text-[#C5A66A] mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span className="eyebrow-label text-[#C5A66A]">Event Sustainability Calculator</span>
            </div>
            <h3 className="font-serif-fraunces font-bold clamp-headline-card uppercase tracking-tight text-white">
              Estimate Your Zero-Waste Footprint
            </h3>
            <p className="text-sm text-[#F4EBD8]/80 mt-2">
              Slide to your estimated event attendance to see how many single-use plastic/paper cups CUP2EAT can eliminate.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Slider Control */}
            <div className="lg:col-span-6 bg-[#0F2C23] p-6 rounded-2xl border border-[#C5A66A]/20">
              <div className="flex justify-between items-center mb-3 text-xs">
                <span className="text-[#F4EBD8]/70 uppercase font-bold tracking-wider">Expected Attendees</span>
                <span className="text-xl font-bold font-serif-fraunces text-[#C5A66A]">
                  {attendeeCount.toLocaleString()} Guests
                </span>
              </div>
              <input
                type="range"
                min="200"
                max="10000"
                step="100"
                value={attendeeCount}
                onChange={(e) => setAttendeeCount(Number(e.target.value))}
                className="w-full accent-[#C77C48] cursor-pointer h-2 bg-[#F4EBD8]/20 rounded-lg"
              />
              <div className="flex justify-between text-[10px] font-mono text-[#F4EBD8]/50 mt-2">
                <span>200 (Intimate)</span>
                <span>5,000 (Campus Fest)</span>
                <span>10,000+ (Mega Expo)</span>
              </div>
            </div>

            {/* Impact Metric Readouts */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4EBD8]/10 backdrop-blur-xs border border-[#F4EBD8]/10 flex sm:flex-col justify-between sm:justify-center items-center">
                <div className="text-[11px] sm:text-xs text-[#F4EBD8]/80 uppercase font-bold tracking-wider sm:mt-1 order-2 sm:order-2">
                  Cups Saved
                </div>
                <div className="font-serif-fraunces font-bold text-2xl sm:text-3xl text-[#C5A66A] order-1 sm:order-1">
                  {cupsDiverted.toLocaleString()}
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4EBD8]/10 backdrop-blur-xs border border-[#F4EBD8]/10 flex sm:flex-col justify-between sm:justify-center items-center">
                <div className="text-[11px] sm:text-xs text-[#F4EBD8]/80 uppercase font-bold tracking-wider sm:mt-1 order-2 sm:order-2">
                  Plastic Prevented
                </div>
                <div className="font-serif-fraunces font-bold text-2xl sm:text-3xl text-[#788B50] order-1 sm:order-1">
                  ~{plasticAvoidedKg} kg
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F4EBD8]/10 backdrop-blur-xs border border-[#F4EBD8]/10 flex sm:flex-col justify-between sm:justify-center items-center">
                <div className="text-[11px] sm:text-xs text-[#F4EBD8]/80 uppercase font-bold tracking-wider sm:mt-1 order-2 sm:order-2">
                  Social Buzz
                </div>
                <div className="font-serif-fraunces font-bold text-2xl sm:text-3xl text-[#C77C48] order-1 sm:order-1">
                  {socialImpressionsEst.toLocaleString()}+
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[#F4EBD8]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-[#F4EBD8]/70">
              * Based on average 2 beverages per guest and viral Instagram shares per serving.
            </span>
            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C77C48] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#A96131] transition-all cursor-pointer"
            >
              Order for {attendeeCount.toLocaleString()} Attendees
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

