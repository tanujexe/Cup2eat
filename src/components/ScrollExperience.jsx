import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Coffee, Droplets, Sparkles, CheckCircle, ArrowRight, Utensils } from 'lucide-react';
import EdibleCupVisual from './EdibleCupVisual';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience({ onOpenEnquiry }) {
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);
  const cupVesselRef = useRef(null);

  // Scroll typography step text refs
  const textStep1Ref = useRef(null);
  const textStep2Ref = useRef(null);
  const textStep3Ref = useRef(null);

  // Manual interactive stage selection (allows both scroll scrubbing & direct click inspection)
  const [activeStage, setActiveStage] = useState('pour'); // 'empty' | 'pour' | 'sip' | 'eat'

  const stages = [
    {
      id: 'empty',
      label: '1. The Vessel',
      title: 'BAKED TO PERFECTION',
      subtitle: 'Pure multi-grain wafer biscuit vessel with 100% natural dietary fibers and zero plastic.',
      detail: 'Crisp waffle geometry engineered for maximum structural rigidity.',
      fillPercent: 0,
      zoom: 1,
      hasBite: false,
    },
    {
      id: 'pour',
      label: '2. The Pour',
      title: 'HOLDS STEAMING DRINKS',
      subtitle: 'Hot espresso, chai, or cocoa poured directly at temperatures up to 85°C (185°F).',
      detail: 'Thermal boundary holds hot liquids without leaching chemicals or softening.',
      fillPercent: 78,
      zoom: 1.08,
      hasBite: false,
    },
    {
      id: 'sip',
      label: '3. The Sip',
      title: '45+ MINS LEAK-PROOF',
      subtitle: 'Take your time. Savor every sip knowing the cup remains firm, crisp, and comfortable to hold.',
      detail: 'No soggy paper taste. No weird plastic aftertaste. Just pure beverage flavor.',
      fillPercent: 35,
      zoom: 1.15,
      hasBite: false,
    },
    {
      id: 'eat',
      label: '4. The Bite',
      title: 'AND YES, YOU CAN EAT IT',
      subtitle: 'When your last sip is done, your snack begins. Crunch into the delicious baked biscuit.',
      detail: 'Zero trash to throw away. A delightful crunch that puts a smile on every face.',
      fillPercent: 0,
      zoom: 1.22,
      hasBite: true,
    },
  ];

  const currentStageObj = stages.find((s) => s.id === activeStage) || stages[1];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PINNED TIMELINE: Orchestrates cup filling, text reveals, and texture zoom
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '+=250%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            if (p < 0.25) {
              setActiveStage('empty');
            } else if (p < 0.55) {
              setActiveStage('pour');
            } else if (p < 0.82) {
              setActiveStage('sip');
            } else {
              setActiveStage('eat');
            }
          },
        },
      });

      // Step 1: Oversized typography 1 ("NOT JUST A CUP")
      tl.fromTo(
        textStep1Ref.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
        .to(cupVesselRef.current, { scale: 1.05, duration: 1 }, '<')
        // Fade out step 1 text
        .to(textStep1Ref.current, { opacity: 0, y: -40, duration: 0.8 })

        // Step 2: Liquid fills the cup + Oversized typography 2 ("IT'S AN EXPERIENCE")
        .fromTo(
          textStep2Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.3'
        )
        .to(cupVesselRef.current, { scale: 1.1, duration: 1.2 }, '<')
        .to(textStep2Ref.current, { opacity: 0, y: -40, duration: 0.8 })

        // Step 3: Zoom closer into biscuit texture + Oversized typography 3 ("AND YES, YOU CAN EAT IT")
        .fromTo(
          textStep3Ref.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 },
          '-=0.3'
        )
        .to(cupVesselRef.current, { scale: 1.2, duration: 1.4 }, '<');

      // 2. BACKGROUND TRANSITION: Seamless change from Warm Cream to Forest Green
      gsap.to(pinSectionRef.current, {
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
        backgroundColor: '#173F32',
        color: '#F4EBD8',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} id="experience" className="relative w-full overflow-hidden">
      
      {/* Introduction Banner before Pinned Section */}
      <div className="pt-24 pb-12 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#173F32]/15 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32] text-[#C5A66A] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="eyebrow-label text-[#C5A66A]">Interactive Sensory Journey</span>
            </div>
            <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase">
              Pour. Sip. Eat.
            </h2>
            <div className="font-calligraphy text-3xl sm:text-4xl text-[#C77C48] capitalize mt-1">
              the art of eating your drink
            </div>
          </div>
          <p className="max-w-md text-sm sm:text-base text-[#173F32]/75 leading-relaxed font-sans-manrope">
            Scroll down through the pinned choreography to witness how the cup holds hot coffee,
            preserves crispiness for 45+ minutes, and ends with a satisfying bite.
          </p>
        </div>

        {/* Stage Selector Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-6 font-sans-manrope">
          {stages.map((stage) => {
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#173F32] text-[#F4EBD8] shadow-md scale-105'
                    : 'bg-[#173F32]/8 text-[#173F32]/70 hover:bg-[#173F32]/15'
                }`}
              >
                {stage.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* PINNED PRODUCT EXPERIENCE SECTION */}
      <div
        ref={pinSectionRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center transition-colors duration-700 px-5 sm:px-8 py-10"
        style={{ backgroundColor: '#F4EBD8' }}
      >
        {/* Subtle Ambient Grain */}
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40"></div>

        {/* Scroll Controlled Floating Typography Layers */}
        <div className="absolute top-16 left-0 right-0 max-w-5xl mx-auto px-6 text-center pointer-events-none z-20">
          
          {/* Step 1 Typography */}
          <div ref={textStep1Ref} className="transition-all duration-300">
            <span className="eyebrow-label opacity-70">
              Act I — The Biscuit Vessel
            </span>
            <h3 className="font-serif-fraunces font-bold clamp-headline-section uppercase mt-2">
              NOT JUST A CUP.
            </h3>
          </div>

          {/* Step 2 Typography */}
          <div ref={textStep2Ref} className="absolute inset-0 opacity-0 transition-all duration-300">
            <span className="eyebrow-label text-[#C5A66A]">
              Act II — Steaming Pour
            </span>
            <h3 className="font-serif-fraunces font-bold clamp-headline-section uppercase mt-2 text-[#C77C48]">
              IT'S AN EXPERIENCE.
            </h3>
          </div>

          {/* Step 3 Typography */}
          <div ref={textStep3Ref} className="absolute inset-0 opacity-0 transition-all duration-300">
            <span className="eyebrow-label text-[#788B50]">
              Act III — The Grand Finale
            </span>
            <h3 className="font-serif-fraunces font-bold clamp-headline-section uppercase mt-2">
              AND YES, YOU CAN EAT IT.
            </h3>
            <div className="font-calligraphy text-2xl sm:text-4xl text-[#C5A66A] mt-2 capitalize font-normal">
              baked for pure delight
            </div>
          </div>
        </div>

        {/* Central Product Stage */}
        <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-12 sm:mt-16">
          
          {/* Left Details Callout */}
          <div className="md:col-span-4 order-2 md:order-1 flex flex-col gap-4 text-left font-sans-manrope">
            <div className="p-6 rounded-3xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#173F32]/10 text-[#173F32] shadow-sm">
              <span className="eyebrow-label text-[#C77C48]">
                Live Inspection
              </span>
              <h4 className="font-serif-fraunces font-bold text-xl uppercase mt-1">
                {currentStageObj.title}
              </h4>
              <p className="text-xs text-[#173F32]/75 mt-2 leading-relaxed">
                {currentStageObj.subtitle}
              </p>
              <div className="mt-4 pt-3 border-t border-[#173F32]/10 flex items-center gap-2 text-xs font-semibold text-[#788B50]">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>{currentStageObj.detail}</span>
              </div>
            </div>
          </div>

          {/* Center: The Realistic 3D Edible Cup Animation Vessel */}
          <div className="md:col-span-4 order-1 md:order-2 flex flex-col items-center justify-center">
            <div
              ref={cupVesselRef}
              className="relative w-full max-w-[340px] sm:max-w-[380px] flex items-center justify-center transition-transform duration-500 ease-out py-4"
              style={{ transform: `scale(${currentStageObj.zoom})` }}
            >
              <EdibleCupVisual
                stage={activeStage}
                fillPercent={currentStageObj.fillPercent}
                hasBite={currentStageObj.hasBite}
                interactive={true}
              />
            </div>
          </div>

          {/* Right Metrics Callout */}
          <div className="md:col-span-4 order-3 flex flex-col gap-4 text-left">
            <div className="p-6 rounded-3xl bg-[#FAF6EE]/90 backdrop-blur-sm border border-[#173F32]/10 text-[#173F32] shadow-sm">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#788B50] font-bold">
                Performance Profile
              </span>
              
              <div className="mt-4 space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Crispness Retention</span>
                    <span>100%</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#173F32]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#788B50] rounded-full w-full"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Thermal Endurance</span>
                    <span>Up to 85°C</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#173F32]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C77C48] rounded-full w-[90%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Edibility</span>
                    <span>100% Food-Grade</span>
                  </div>
                  <div className="w-full h-1.5 bg-[#173F32]/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A66A] rounded-full w-full"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#173F32]/10">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#C77C48] text-[#F4EBD8] text-xs font-bold uppercase tracking-wider hover:bg-[#A96131] transition-colors cursor-pointer"
                >
                  <span>Request Samples for Event</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ASYMMETRICAL PARALLAX CRAFT GALLERY */}
      <div className="py-24 px-5 sm:px-8 max-w-7xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <span className="eyebrow-label text-[#C77C48]">
            The Craft Behind The Crunch
          </span>
          <h3 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase mt-2">
            Engineered For Beverages. Baked For Pleasure.
          </h3>
        </div>

        {/* Asymmetrical 3-Tile Gallery with Hover Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch font-sans-manrope">
          
          {/* Gallery Tile 1: Crisp Wafer Layers */}
          <div className="md:col-span-7 group relative rounded-3xl overflow-hidden shadow-md min-h-[380px] flex flex-col justify-end p-8 bg-[#173F32]">
            <img
              src="https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1200&auto=format&fit=crop"
              alt="Golden coffee pouring into edible cup"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="relative z-10 text-[#F4EBD8]">
              <span className="px-3 py-1 rounded-full bg-[#C5A66A] text-[#173F32] text-[10px] uppercase font-bold tracking-wider inline-block mb-3 font-sans-manrope">
                Zero Plastic Liners
              </span>
              <h4 className="font-serif-fraunces font-bold text-2xl sm:text-3xl">
                Dense Multi-Grain Matrix
              </h4>
              <p className="text-xs sm:text-sm text-[#F4EBD8]/80 mt-2 max-w-lg leading-relaxed">
                Crafted using precisely milled oat bran and wholesome grains. The density prevents hot liquids from seeping through, giving baristas and drinkers peace of mind.
              </p>
            </div>
          </div>

          {/* Gallery Tile 2: Latte Art in Cookie Cup */}
          <div className="md:col-span-5 group relative rounded-3xl overflow-hidden shadow-md min-h-[380px] flex flex-col justify-end p-8 bg-[#573927]">
            <img
              src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1000&auto=format&fit=crop"
              alt="Steaming latte poured into baked cup"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="relative z-10 text-[#F4EBD8]">
              <span className="px-3 py-1 rounded-full bg-[#788B50] text-[#F4EBD8] text-[10px] uppercase font-bold tracking-wider inline-block mb-3 font-sans-manrope">
                Barista Friendly
              </span>
              <h4 className="font-serif-fraunces font-bold text-2xl">
                Perfect Pour & Steam
              </h4>
              <p className="text-xs sm:text-sm text-[#F4EBD8]/80 mt-2 leading-relaxed">
                Ideal for pouring intricate latte art, espresso extraction, or steaming hot chocolates directly from professional espresso machines.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

