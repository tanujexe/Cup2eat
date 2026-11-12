import React, { useState } from 'react';
import { Trash2, Sparkles, Check, X, ShieldAlert, HeartHandshake } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';

export default function BrandStory() {
  const [activeTab, setActiveTab] = useState('comparison');

  return (
    <section id="story" className="relative py-16 sm:py-24 lg:py-32 bg-[#FAF6EE] text-[#173F32] overflow-hidden">
      {/* Subtle Botanical Leaf Accent in Background */}
      <div className="absolute top-0 right-10 w-72 h-72 opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0C50 0 70 30 70 60C70 80 50 100 50 100C50 100 30 80 30 60C30 30 50 0 50 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C77C48]/10 text-[#C77C48] mb-4">
            <span className="eyebrow-label text-[#C77C48]">The Concept & The Problem</span>
          </div>

          <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase">
            {BRAND_CONFIG.storyHeadline}
          </h2>

          <div className="font-calligraphy text-3xl sm:text-4xl text-[#788B50] font-normal normal-case mt-2">
            from single-use waste to a delicious ritual
          </div>

          <p className="mt-6 text-base sm:text-lg text-[#173F32]/80 leading-relaxed font-sans-manrope max-w-2xl">
            Every day, countless disposable cups are tossed into garbage bins within minutes of being poured.
            Most people assume paper cups are easily recyclable, but nearly all of them contain an invisible
            plastic polyethylene lining that prevents degradation.
          </p>
        </div>

        {/* Split Screen Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Comparison Matrix */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#F4EBD8] rounded-3xl p-6 sm:p-8 border border-[#173F32]/10 shadow-sm">
              <div className="flex items-center justify-between pb-6 border-b border-[#173F32]/10">
                <h3 className="font-serif-fraunces font-bold text-2xl text-[#173F32]">
                  The Daily Coffee Reality
                </h3>
                <span className="eyebrow-label text-[#788B50]">
                  Side-by-side
                </span>
              </div>

              {/* Two Column Contrast Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 font-sans-manrope">
                
                {/* Traditional Disposable Cup */}
                <div className="p-5 rounded-2xl bg-[#573927]/5 border border-[#573927]/15 flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#573927]/15 flex items-center justify-center text-[#573927] mb-4">
                      <Trash2 className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif-fraunces font-bold text-lg text-[#573927]">
                      Standard Paper Cup
                    </h4>
                    <p className="text-xs text-[#573927]/80 mt-1">
                      Hidden plastic coating & single-use waste
                    </p>

                    <ul className="mt-4 space-y-2.5 text-xs text-[#173F32]/80">
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>Polyethylene (PE) plastic interior liner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>Hardly accepted by normal municipal compost</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>Used for 10 minutes, lingers in landfills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <X className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                        <span>Zero culinary value or enjoyment</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#573927]/10 text-[11px] font-mono text-[#573927]/70">
                    Result: Inconvenient garbage
                  </div>
                </div>

                {/* The CUP2EAT Innovation */}
                <div className="p-5 rounded-2xl bg-[#173F32] text-[#F4EBD8] border-2 border-[#C5A66A] shadow-md flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#C77C48] text-[9px] font-bold uppercase tracking-wider font-sans-manrope">
                    Next-Gen
                  </div>

                  <div>
                    <div className="w-9 h-9 rounded-full bg-[#C5A66A]/20 flex items-center justify-center text-[#C5A66A] mb-4">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif-fraunces font-bold text-lg text-[#F4EBD8]">
                      CUP2EAT Edible Cup
                    </h4>
                    <p className="text-xs text-[#C5A66A] mt-1">
                      Crisp, delicious, 100% zero waste
                    </p>

                    <ul className="mt-4 space-y-2.5 text-xs text-[#F4EBD8]/90">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#788B50] shrink-0 mt-0.5" />
                        <span>100% baked natural grains & dietary fibers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#788B50] shrink-0 mt-0.5" />
                        <span>Zero plastic, zero wax, zero chemical sealants</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#788B50] shrink-0 mt-0.5" />
                        <span>Stays rigid & crispy 45+ minutes with hot tea or coffee</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#788B50] shrink-0 mt-0.5" />
                        <span>Eat the biscuit after drinking: pure crunch & joy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-[#F4EBD8]/10 text-[11px] font-mono text-[#C5A66A]">
                    Result: Zero waste left behind
                  </div>
                </div>

              </div>

              {/* Bottom quote */}
              <div className="mt-6 pt-5 border-t border-[#173F32]/10 flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-[#C77C48] shrink-0" />
                <p className="text-xs sm:text-sm text-[#173F32]/75 italic">
                  "Packaging shouldn't outlive the drink. With CUP2EAT, your cup becomes an appetizing part of the ritual."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Ingredients Spotlight */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden border border-[#173F32]/15 shadow-lg group">
              <img
                src="https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1000&auto=format&fit=crop"
                alt="Artisanal baked waffle cup texture"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F32]/90 via-[#173F32]/30 to-transparent flex flex-col justify-end p-6 text-[#F4EBD8]">
                <span className="text-[11px] uppercase font-mono tracking-widest text-[#C5A66A] font-bold">
                  Wholesome Craft
                </span>
                <h4 className="font-display font-bold text-xl sm:text-2xl mt-1">
                  Naturally Crisp. Deliciously Sturdy.
                </h4>
                <p className="text-xs sm:text-sm text-[#F4EBD8]/80 mt-2 line-clamp-2">
                  Engineered using natural baking science so the vessel will not leak or disintegrate while you savor your beverage.
                </p>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="p-6 rounded-3xl bg-[#F4EBD8] border border-[#173F32]/10 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-sm uppercase tracking-wider text-[#173F32]">
                  Product Integrity
                </span>
                <span className="text-xs font-mono text-[#C77C48] font-semibold">100% Veg</span>
              </div>
              <p className="text-xs text-[#173F32]/80 leading-relaxed">
                Contains no artificial preservatives. Neutral taste profile that harmonizes with espresso, cappuccino, hot chocolate, spiced chai, and even chilled desserts.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

