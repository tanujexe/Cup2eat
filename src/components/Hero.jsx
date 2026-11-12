import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Clock, Leaf, Play } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brand';
import EdibleCupVisual from './EdibleCupVisual';

export default function Hero({ onOpenEnquiry }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#F4EBD8] via-[#FAF6EE] to-[#F4EBD8]"
    >
      {/* Background Decorative Botanical Watermark */}
      <div className="absolute top-12 right-0 -mr-24 w-96 h-96 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#173F32" strokeWidth="2" strokeDasharray="6 6" />
          <path d="M100 20C100 20 120 70 170 70C120 70 100 120 100 120C100 120 80 70 30 70C80 70 100 20 100 20Z" fill="#788B50" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT: Massive Editorial Headline & Story */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Editorial Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#173F32]/8 border border-[#173F32]/15 text-[#173F32] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#C77C48] animate-pulse"></span>
              <span className="eyebrow-label text-[#173F32]">
                {BRAND_CONFIG.editorialLabel}
              </span>
            </div>

            {/* Massive Headline with Fraunces & Calligraphy */}
            <h1 className="font-serif-fraunces font-bold clamp-headline-hero text-[#173F32] uppercase mb-8">
              <span>{BRAND_CONFIG.heroHeadline.line1}</span>
              <br />
              <span className="font-calligraphy text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#C77C48] capitalize normal-case font-normal -my-2 sm:-my-3 block tracking-normal">
                you can actually
              </span>
              <span className="relative inline-block mt-1">
                EAT.
                {/* Botanical leaf highlight under ACTUALLY EAT */}
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#C5A66A]" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C45 1.5 155 1.5 199 5.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="font-sans-manrope text-base sm:text-lg text-[#173F32]/80 max-w-xl font-normal leading-relaxed mb-10">
              {BRAND_CONFIG.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-5 w-full sm:w-auto font-sans-manrope">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#173F32] text-[#F4EBD8] font-bold text-xs tracking-wider uppercase hover:bg-[#C77C48] shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Discover The Experience</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-[#173F32] text-[#173F32] font-bold text-xs tracking-wider uppercase hover:bg-[#173F32] hover:text-[#F4EBD8] transition-all duration-300"
              >
                <span>Explore Our Products</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-10 mt-8 sm:mt-10 border-t border-[#173F32]/12 w-full max-w-lg font-sans-manrope">
              <div className="flex items-center sm:items-start gap-2.5">
                <Clock className="w-5 h-5 text-[#C77C48] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-fraunces font-bold text-base sm:text-lg text-[#173F32] leading-tight">45+ Mins</h4>
                  <p className="text-xs text-[#173F32]/70 mt-0.5">Leak-Proof Hold</p>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-2.5">
                <Leaf className="w-5 h-5 text-[#788B50] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-fraunces font-bold text-base sm:text-lg text-[#173F32] leading-tight">100% Edible</h4>
                  <p className="text-xs text-[#173F32]/70 mt-0.5">Wholesome Grains</p>
                </div>
              </div>

              <div className="flex items-center sm:items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#C5A66A] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif-fraunces font-bold text-base sm:text-lg text-[#173F32] leading-tight">Zero Waste</h4>
                  <p className="text-xs text-[#173F32]/70 mt-0.5">No Plastic Linings</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: The Centerpiece Edible Cup Experience */}
          <div
            className="lg:col-span-5 relative flex items-center justify-center py-4 sm:py-6 w-full max-w-full overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Halo Glow */}
            <div className="absolute w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-gradient-to-tr from-[#C5A66A]/20 via-[#C77C48]/15 to-transparent blur-3xl -z-10 pointer-events-none"></div>

            {/* Interactive 3D Product Vessel */}
            <div
              className="relative w-full max-w-[320px] sm:max-w-[420px] transition-transform duration-300 ease-out cursor-grab active:cursor-grabbing px-2"
              style={{
                transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              }}
            >
              {/* Cup Visual Canvas / Graphic */}
              <div className="relative rounded-3xl p-3 sm:p-6 flex flex-col items-center justify-center">
                
                {/* Floating Badge: Crisp Guarantee */}
                <div className="absolute top-0 right-1 sm:right-2 z-20 bg-[#F4EBD8] border-2 border-[#173F32] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2.5 shadow-xl flex items-center gap-1.5 sm:gap-2 transform rotate-2 hover:rotate-0 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#788B50] animate-ping"></div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#173F32] uppercase tracking-wider font-mono">
                    Baked to Perfection
                  </span>
                </div>

                {/* Floating Badge: Zero Waste */}
                <div className="absolute bottom-2 left-1 sm:left-0 z-20 bg-[#173F32] text-[#F4EBD8] rounded-xl sm:rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2.5 shadow-xl flex items-center gap-1.5 sm:gap-2 transform -rotate-3 hover:rotate-0 transition-transform">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A66A]" />
                  <span className="font-calligraphy text-lg sm:text-xl text-[#C5A66A] tracking-wide pr-1">
                    Eat your drink
                  </span>
                </div>

                {/* Realistic Layered 3D Edible Cup Graphic */}
                <div className="relative w-full flex items-center justify-center py-2">
                  <EdibleCupVisual
                    stage="sip"
                    fillPercent={78}
                    hasBite={false}
                    interactive={true}
                  />
                </div>

                {/* Sub-label under Cup */}
                <div className="mt-4 text-center">
                  <p className="text-xs uppercase font-mono tracking-widest text-[#173F32]/60 font-semibold">
                    100% Edible Wafer Biscuit Vessel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Marquee Ticker */}
      <div className="mt-12 py-3 bg-[#173F32] text-[#F4EBD8] overflow-hidden whitespace-nowrap border-y border-[#C5A66A]/20">
        <div className="inline-flex items-center gap-8 animate-[marquee_25s_linear_infinite]">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span className="font-display font-bold tracking-wider text-xs uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A66A]" /> {BRAND_CONFIG.primaryMessage}
              </span>
              <span className="text-[#C5A66A]">•</span>
              <span className="text-xs tracking-wider uppercase font-medium">100% Baked & Edible</span>
              <span className="text-[#C5A66A]">•</span>
              <span className="text-xs tracking-wider uppercase font-medium">Holds Hot & Cold Drinks 45+ Mins</span>
              <span className="text-[#C5A66A]">•</span>
              <span className="text-xs tracking-wider uppercase font-medium">Zero Waste Guaranteed</span>
              <span className="text-[#C5A66A]">•</span>
              <span className="text-xs tracking-wider uppercase font-medium">Founder Varun Khera</span>
              <span className="text-[#C5A66A]">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

