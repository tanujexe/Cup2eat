import React, { useState, useEffect } from 'react';

export default function EdibleCupVisual({
  stage = 'eat', // 'empty' | 'pour' | 'sip' | 'eat'
  fillPercent = 0,
  hasBite = true,
  interactive = true,
  className = '',
}) {
  const [biteCount, setBiteCount] = useState(hasBite ? 1 : 0);
  const [crumbs, setCrumbs] = useState([]);
  const [showCrunchBadge, setShowCrunchBadge] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setBiteCount(hasBite ? 1 : 0);
  }, [hasBite]);

  const handleCupClick = () => {
    if (stage === 'eat' || stage === 'sip') {
      const newBite = Math.min(biteCount + 1, 3);
      setBiteCount(newBite);

      // Trigger floating crunch reaction badge
      setShowCrunchBadge(true);
      setTimeout(() => setShowCrunchBadge(false), 1200);

      // Spawn falling crumb particles
      const newCrumbs = Array.from({ length: 9 }).map((_, i) => ({
        id: Date.now() + i,
        x: 210 + (Math.random() * 50 - 25),
        y: 85 + (Math.random() * 20 - 10),
        size: Math.random() * 5 + 3,
        vx: (Math.random() - 0.3) * 45,
        vy: Math.random() * 60 + 40,
        color: ['#D6A160', '#A9682C', '#61320F', '#F2D3A1'][Math.floor(Math.random() * 4)],
      }));
      setCrumbs((prev) => [...prev, ...newCrumbs]);

      setTimeout(() => {
        setCrumbs((prev) => prev.filter((c) => !newCrumbs.includes(c)));
      }, 1400);
    }
  };

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Determine active fill height in SVG coordinates
  // Cup body base Y: 330, top rim Y: 85 -> Total chamber height ~245
  const fillHeight = (fillPercent / 100) * 235;
  const liquidSurfaceY = 325 - fillHeight;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCupClick}
      style={{
        perspective: '1000px',
        cursor: stage === 'eat' ? 'pointer' : 'default',
      }}
    >
      {/* Floating Interactive "CRUNCH!" Badge */}
      {showCrunchBadge && (
        <div className="absolute top-2 right-4 z-40 bg-[#C77C48] text-[#F4EBD8] px-3.5 py-1.5 rounded-full font-serif-fraunces font-bold text-sm shadow-xl animate-bounce tracking-wide border border-[#F4EBD8]/30">
          *CRUNCH!* 😋
        </div>
      )}

      {/* Main 3D Tilted Container */}
      <div
        className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[1/1.2] transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 340 420"
          className="w-full h-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 1. Cylindrical Baked Gradient for Realistic 3D Roundness */}
            <linearGradient id="cup3DToasted" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7E471C" />
              <stop offset="12%" stopColor="#BA7B3C" />
              <stop offset="35%" stopColor="#E2A966" />
              <stop offset="55%" stopColor="#DF9F57" />
              <stop offset="80%" stopColor="#9B5922" />
              <stop offset="100%" stopColor="#542B0D" />
            </linearGradient>

            {/* 2. Embossed Waffle Iron Grid (Tactile 3D Diamond Pattern) */}
            <pattern
              id="embossedWaffle"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(32)"
            >
              {/* Recessed cell depth */}
              <rect x="1" y="1" width="18" height="18" rx="2" fill="#753F17" fillOpacity="0.45" />
              {/* Highlight upper bevel */}
              <path d="M 1 1 L 19 1 L 18 3 L 3 3 L 3 18 L 1 19 Z" fill="#F8CE97" fillOpacity="0.4" />
              {/* Shadow lower bevel */}
              <path d="M 19 1 L 19 19 L 1 19 L 3 17 L 17 17 L 17 3 Z" fill="#3D1C06" fillOpacity="0.5" />
            </pattern>

            {/* 3. Rim Golden-Brown Bevel Gradient */}
            <radialGradient id="rimBakedShine" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#F5D09B" />
              <stop offset="40%" stopColor="#C98B48" />
              <stop offset="85%" stopColor="#753D16" />
              <stop offset="100%" stopColor="#4A230A" />
            </radialGradient>

            {/* 4. Rich Espresso Body Gradient */}
            <radialGradient id="espressoSurface" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6E3D1E" />
              <stop offset="55%" stopColor="#421F0A" />
              <stop offset="90%" stopColor="#251004" />
              <stop offset="100%" stopColor="#150802" />
            </radialGradient>

            {/* 5. Golden Crema Micro-Foam Swirl */}
            <linearGradient id="cremaSwirl" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C28C" />
              <stop offset="50%" stopColor="#C7924E" />
              <stop offset="100%" stopColor="#8C5220" />
            </linearGradient>

            {/* 6. TRUE CUTOUT MASK FOR THE EDIBLE BITE */}
            <mask id="authenticBiteMask">
              {/* Everything white is fully visible */}
              <rect x="-50" y="-50" width="440" height="520" fill="white" />
              
              {/* When bitten (Stage 'eat' or biteCount > 0), subtract organic teeth indents */}
              {biteCount >= 1 && (
                <g>
                  {/* Primary Bite Arc */}
                  <ellipse cx="236" cy="85" rx="28" ry="24" fill="black" />
                  <circle cx="218" cy="74" r="18" fill="black" />
                  <circle cx="254" cy="98" r="16" fill="black" />
                  <circle cx="225" cy="98" r="12" fill="black" />
                  <circle cx="248" cy="76" r="14" fill="black" />
                </g>
              )}

              {/* Second Bite (if clicked) */}
              {biteCount >= 2 && (
                <g>
                  <circle cx="106" cy="88" r="22" fill="black" />
                  <circle cx="92" cy="78" r="16" fill="black" />
                  <circle cx="120" cy="98" r="15" fill="black" />
                </g>
              )}

              {/* Third Bite (if clicked) */}
              {biteCount >= 3 && (
                <g>
                  <circle cx="170" cy="70" r="24" fill="black" />
                </g>
              )}
            </mask>
          </defs>

          {/* Realistic Ground Soft Shadows */}
          <g opacity="0.75">
            <ellipse cx="170" cy="385" rx="110" ry="16" fill="#0A1813" opacity="0.3" filter="blur(10px)" />
            <ellipse cx="170" cy="382" rx="75" ry="9" fill="#0A1813" opacity="0.45" filter="blur(4px)" />
            <ellipse cx="170" cy="380" rx="45" ry="4" fill="#0A1813" opacity="0.6" filter="blur(2px)" />
          </g>

          {/* STREAM OF ESPRESSO POURING (Stage: 'pour') */}
          {stage === 'pour' && (
            <g className="animate-in fade-in duration-500">
              {/* Flowing liquid column with steam drops */}
              <path
                d="M 166 -30 Q 168 40 167 110 Q 166 180 168 250"
                stroke="url(#espressoSurface)"
                strokeWidth="12"
                strokeLinecap="round"
                opacity="0.95"
              />
              <path
                d="M 168 -30 Q 170 40 169 110 Q 168 180 170 250"
                stroke="#C58E4A"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.75"
              />
              {/* Droplets splashing at entry point */}
              <circle cx="158" cy="245" r="3.5" fill="#C58E4A" className="animate-ping" />
              <circle cx="178" cy="242" r="3" fill="#6E3D1E" />
              <circle cx="168" cy="235" r="4" fill="#E5C28C" />
            </g>
          )}

          {/* STEAM WHISPS RISING (When filled with hot beverage) */}
          {fillPercent > 0 && (
            <g opacity="0.65" className="pointer-events-none">
              <path
                d="M 150 65 Q 140 30 152 5 T 146 -25"
                stroke="#FAF6EE"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '3s' }}
              />
              <path
                d="M 175 60 Q 185 25 174 0 T 180 -30"
                stroke="#C5A66A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '4s', animationDelay: '0.8s' }}
              />
              <path
                d="M 195 68 Q 205 35 196 10 T 202 -15"
                stroke="#FAF6EE"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '3.5s', animationDelay: '1.4s' }}
              />
            </g>
          )}

          {/* ══════════ MAIN CUP GROUP WITH AUTHENTIC CUTOUT MASK ══════════ */}
          <g mask="url(#authenticBiteMask)">
            
            {/* Outer Biscuit Tapered Vessel */}
            <path
              d="M 62 85 L 94 345 C 97 360 112 372 130 372 H 210 C 228 372 243 360 246 345 L 278 85 Z"
              fill="url(#cup3DToasted)"
              stroke="#4A230A"
              strokeWidth="2.5"
            />

            {/* Embossed 3D Waffle Texture Grid Overlay */}
            <path
              d="M 62 85 L 94 345 C 97 360 112 372 130 372 H 210 C 228 372 243 360 246 345 L 278 85 Z"
              fill="url(#embossedWaffle)"
              opacity="0.88"
            />

            {/* Left Curvature Specular Highlight */}
            <path
              d="M 85 92 L 108 340 C 111 350 118 358 128 358 H 142 L 122 92 Z"
              fill="#FFFFFF"
              fillOpacity="0.16"
            />

            {/* Right Curvature Shading Depth */}
            <path
              d="M 270 90 L 242 342 C 238 354 228 365 214 368 L 230 368 C 240 362 248 350 252 336 L 276 90 Z"
              fill="#1F0D04"
              fillOpacity="0.45"
            />

            {/* Internal Cup Wall & Dark Cocoa Glaze Recess */}
            <ellipse cx="170" cy="85" rx="108" ry="29" fill="#2E1508" stroke="#542B0D" strokeWidth="2" />
            <ellipse cx="170" cy="85" rx="98" ry="24" fill="#1C0B03" />

            {/* LIQUID FILL CHAMBER (Dynamic rising level) */}
            {fillPercent > 0 && (
              <g>
                {/* Coffee Liquid Body */}
                <ellipse
                  cx="170"
                  cy={liquidSurfaceY}
                  rx={98 - (liquidSurfaceY - 85) * 0.14}
                  ry={24 - (liquidSurfaceY - 85) * 0.03}
                  fill="url(#espressoSurface)"
                />

                {/* Golden Hazelnut Crema Foam Swirl */}
                <ellipse
                  cx="165"
                  cy={liquidSurfaceY}
                  rx={(98 - (liquidSurfaceY - 85) * 0.14) * 0.85}
                  ry={(24 - (liquidSurfaceY - 85) * 0.03) * 0.85}
                  fill="url(#cremaSwirl)"
                  opacity="0.88"
                />

                {/* Latte Art / Micro-foam Rosette heart */}
                <path
                  d={`M 140 ${liquidSurfaceY} C 150 ${liquidSurfaceY - 8}, 180 ${liquidSurfaceY - 8}, 190 ${liquidSurfaceY} C 180 ${liquidSurfaceY + 6}, 155 ${liquidSurfaceY + 6}, 140 ${liquidSurfaceY} Z`}
                  fill="#FFF7EB"
                  opacity="0.85"
                />
                <circle cx="165" cy={liquidSurfaceY} r="3" fill="#3D1C06" />
              </g>
            )}

            {/* Thick Artisanal Baked Rim Bevel */}
            <ellipse
              cx="170"
              cy="85"
              rx="108"
              ry="29"
              fill="none"
              stroke="url(#rimBakedShine)"
              strokeWidth="11"
            />
            {/* Rim specular highlight on front edge */}
            <path
              d="M 85 92 C 115 110, 225 110, 255 92"
              stroke="#FFF1D6"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
              fill="none"
            />

            {/* Handcrafted Baked Brand Seal on Cup Body */}
            <g transform="translate(122, 195) rotate(-3)">
              <rect
                x="0"
                y="0"
                width="96"
                height="38"
                rx="10"
                fill="#3D1C06"
                fillOpacity="0.4"
                stroke="#F4EBD8"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text
                x="48"
                y="22"
                textAnchor="middle"
                fill="#F4EBD8"
                fontSize="11"
                fontWeight="bold"
                fontFamily="Space Grotesk, sans-serif"
                letterSpacing="1.5"
              >
                CUP2EAT
              </text>
              <text
                x="48"
                y="31"
                textAnchor="middle"
                fill="#C5A66A"
                fontSize="6"
                fontWeight="700"
                fontFamily="Manrope, sans-serif"
                letterSpacing="1"
              >
                100% EDIBLE CUP
              </text>
            </g>
          </g>

          {/* ══════════ EXPOSED BISCUIT CRUMB TEXTURE AT BITE SITE ══════════ */}
          {biteCount >= 1 && (
            <g className="animate-in fade-in zoom-in-95 duration-300">
              {/* Porous Cookie Dough Crumb Interior Border */}
              <path
                d="M 205 66 C 210 74, 214 82, 222 88 C 230 94, 242 98, 256 94 C 262 90, 268 84, 272 74"
                stroke="#DDB178"
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
              />
              {/* Inner Chocolate Glaze Fracture Line */}
              <path
                d="M 210 70 C 215 77, 219 83, 226 87 C 234 91, 244 93, 254 90 C 258 87, 263 82, 266 75"
                stroke="#3D1C06"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Tiny Aerated Cookie Crumbs along fracture */}
              <circle cx="218" cy="80" r="2" fill="#FAF6EE" />
              <circle cx="228" cy="91" r="2.5" fill="#874B1E" />
              <circle cx="240" cy="94" r="2" fill="#E8C390" />
              <circle cx="250" cy="88" r="3" fill="#5A2E0F" />
              <circle cx="260" cy="80" r="1.8" fill="#FAF6EE" />

              {/* Crunchy Crumbs Falling Down */}
              <g className="animate-pulse">
                <circle cx="232" cy="118" r="3.5" fill="#C98B48" />
                <circle cx="248" cy="132" r="2.5" fill="#753D16" />
                <circle cx="224" cy="144" r="2" fill="#E8C390" />
                <circle cx="258" cy="155" r="3" fill="#C98B48" />
                <circle cx="236" cy="175" r="2.2" fill="#542B0D" />
                <circle cx="266" cy="190" r="2.8" fill="#DDB178" />
              </g>
            </g>
          )}

          {/* DYNAMIC SCATTERED CRUMBS FROM CLICKS */}
          {crumbs.map((c) => (
            <circle
              key={c.id}
              cx={c.x}
              cy={c.y}
              r={c.size}
              fill={c.color}
              className="transition-all duration-1000 ease-in"
              style={{
                transform: `translate(${c.vx}px, ${c.vy}px)`,
                opacity: 0,
              }}
            />
          ))}
        </svg>

        {/* Interactive Click Hint Pill in 'Eat' Stage */}
        {stage === 'eat' && (
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#173F32] border border-[#C5A66A]/40 text-[#F4EBD8] px-4 py-1.5 rounded-full text-[11px] font-sans-manrope font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 hover:bg-[#C77C48] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#C77C48] animate-ping" />
            <span>Click Cup to Crunch ({biteCount}/3)</span>
          </div>
        )}
      </div>
    </div>
  );
}

