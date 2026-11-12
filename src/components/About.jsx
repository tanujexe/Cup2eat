import React from 'react';
import { Quote, Sparkles, Award, ShieldCheck, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F4EBD8] text-[#173F32] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32]/8 text-[#173F32] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C77C48]" />
          <span className="eyebrow-label text-[#173F32]">The Vision & Founder</span>
        </div>

        {/* Section Headline */}
        <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase max-w-4xl leading-[1.05]">
          {BRAND_CONFIG.aboutHeadline}
        </h2>
        <div className="font-calligraphy text-3xl sm:text-4xl text-[#788B50] capitalize mt-1 mb-12">
          reimagining sustainability with taste
        </div>

        {/* Founder & Philosophy Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Quote Card (Left) */}
          <div className="lg:col-span-7 bg-[#173F32] text-[#F4EBD8] p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-2xl font-sans-manrope">
            {/* Background Texture & Botanical Accent */}
            <div className="absolute top-0 right-0 -mr-12 -mt-12 w-64 h-64 opacity-10 pointer-events-none">
              <svg viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" stroke="#C5A66A" strokeWidth="4" fill="none" />
                <path d="M50 10 L60 90 L40 90 Z" fill="#C5A66A" />
              </svg>
            </div>

            <Quote className="w-12 h-12 text-[#C5A66A] opacity-60 mb-6" />

            <blockquote className="font-serif-fraunces text-xl sm:text-2xl text-[#FAF6EE] font-normal leading-relaxed italic">
              "When you finish your cup of coffee or chai, looking for a garbage bin shouldn't be the default ending.
              We created CUP2EAT so that every sip culminates in a wholesome, crunchy bite.
              Zero guilt, zero plastic, and a smile with every drink."
            </blockquote>

            <div className="mt-8 pt-6 border-t border-[#F4EBD8]/15 flex items-center justify-between">
              <div>
                <span className="font-calligraphy text-4xl text-[#C5A66A] block leading-none">
                  {BRAND_CONFIG.founder}
                </span>
                <p className="text-xs uppercase font-bold tracking-widest text-[#F4EBD8]/70 mt-1 font-sans-manrope">
                  Founder, CUP2EAT
                </p>
              </div>

              <span className="text-[11px] font-mono text-[#F4EBD8]/50 italic">
                [Founder-Approved Placeholder]
              </span>
            </div>
          </div>

          {/* Pillars of the Brand (Right) */}
          <div className="lg:col-span-5 space-y-6 font-sans-manrope">
            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#173F32]/12">
              <div className="w-10 h-10 rounded-2xl bg-[#788B50]/15 text-[#788B50] flex items-center justify-center font-bold mb-3">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-serif-fraunces font-bold text-lg text-[#173F32]">
                Culinary Craftsmanship
              </h4>
              <p className="text-xs text-[#173F32]/75 mt-1 leading-relaxed">
                We treat our edible cups not as rigid packaging, but as freshly baked artisanal biscuits designed to enhance the drinking experience.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#173F32]/12">
              <div className="w-10 h-10 rounded-2xl bg-[#C77C48]/15 text-[#C77C48] flex items-center justify-center font-bold mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-serif-fraunces font-bold text-lg text-[#173F32]">
                Thermal Integrity Engineering
              </h4>
              <p className="text-xs text-[#173F32]/75 mt-1 leading-relaxed">
                45+ minutes of structural stability with hot teas and coffees up to 85°C. No softening, no leakage, no soggy messes.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#FAF6EE] border border-[#173F32]/12">
              <div className="w-10 h-10 rounded-2xl bg-[#C5A66A]/20 text-[#573927] flex items-center justify-center font-bold mb-3">
                <Heart className="w-5 h-5" />
              </div>
              <h4 className="font-serif-fraunces font-bold text-lg text-[#173F32]">
                True Circular Zero-Waste
              </h4>
              <p className="text-xs text-[#173F32]/75 mt-1 leading-relaxed">
                If not eaten, the natural grain cup degrades completely in organic compost within days, feeding the soil rather than choking marine life.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

