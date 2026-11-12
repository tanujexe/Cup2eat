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
      const newCrumbs = Array.from({ length: 12 }).map((_, i) => ({
        id: Date.now() + i,
        x: 215 + (Math.random() * 55 - 25),
        y: 85 + (Math.random() * 20 - 10),
        size: Math.random() * 4.5 + 2.5,
        vx: (Math.random() - 0.25) * 50,
        vy: Math.random() * 70 + 45,
        color: ['#D6A160', '#A9682C', '#61320F', '#F5DCB7', '#8A4F1D'][Math.floor(Math.random() * 5)],
      }));
      setCrumbs((prev) => [...prev, ...newCrumbs]);

      setTimeout(() => {
        setCrumbs((prev) => prev.filter((c) => !newCrumbs.includes(c)));
      }, 1500);
    }
  };

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Determine active fill height in SVG coordinates
  // Cup body base Y: 338, top rim Y: 85 -> Total chamber height ~250
  const fillHeight = (fillPercent / 100) * 240;
  const liquidSurfaceY = 330 - fillHeight;

  return (
    <div
      className={`relative flex items-center justify-center select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleCupClick}
      style={{
        perspective: '1200px',
        cursor: stage === 'eat' ? 'pointer' : 'default',
      }}
    >
      {/* Floating Interactive "CRUNCH!" Badge */}
      {showCrunchBadge && (
        <div className="absolute top-2 right-4 z-40 bg-[#C77C48] text-[#F4EBD8] px-4 py-1.5 rounded-full font-serif-fraunces font-bold text-sm shadow-2xl animate-bounce tracking-wide border border-[#F4EBD8]/30">
          *CRUNCH!* 😋
        </div>
      )}

      {/* Main 3D Tilted Container */}
      <div
        className="relative w-full max-w-[320px] xs:max-w-[350px] sm:max-w-[390px] aspect-[1/1.22] transition-transform duration-300 ease-out"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        }}
      >
        <svg
          viewBox="0 0 340 420"
          className="w-full h-full drop-shadow-[0_28px_40px_rgba(10,24,19,0.38)] overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 1. PHOTOREALISTIC TOASTED BISCUIT CYLINDER GRADIENT */}
            <linearGradient id="bakedBiscuitCylinder" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#663412" />
              <stop offset="8%" stopColor="#8C4E1D" />
              <stop offset="22%" stopColor="#C88846" />
              <stop offset="38%" stopColor="#E9B777" />
              <stop offset="52%" stopColor="#DF9F57" />
              <stop offset="75%" stopColor="#9B5922" />
              <stop offset="92%" stopColor="#6A3510" />
              <stop offset="100%" stopColor="#4D2206" />
            </linearGradient>

            {/* Vertical baking heat gradient (darker toasted base and rim) */}
            <linearGradient id="verticalBakeShade" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3D1804" stopOpacity="0.45" />
              <stop offset="15%" stopColor="#E2A966" stopOpacity="0" />
              <stop offset="70%" stopColor="#E2A966" stopOpacity="0" />
              <stop offset="100%" stopColor="#2E1203" stopOpacity="0.6" />
            </linearGradient>

            {/* 2. AUTHENTIC 3D EMBOSSED WAFFLE CONE GRID */}
            <pattern
              id="artisanalWafflePattern"
              width="22"
              height="22"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(32)"
            >
              {/* Recessed cell base */}
              <rect x="1.5" y="1.5" width="19" height="19" rx="2.5" fill="#5E2C0B" fillOpacity="0.5" />
              {/* Top/Left warm light highlight ridge */}
              <path d="M 1.5 1.5 L 20.5 1.5 L 18.5 3.5 L 3.5 3.5 L 3.5 18.5 L 1.5 20.5 Z" fill="#FCE5BF" fillOpacity="0.45" />
              {/* Bottom/Right cast shadow ridge */}
              <path d="M 20.5 1.5 L 20.5 20.5 L 1.5 20.5 L 3.5 18.5 L 18.5 18.5 L 18.5 3.5 Z" fill="#2E1303" fillOpacity="0.6" />
              {/* Inner cell baked center glow */}
              <circle cx="11" cy="11" r="3" fill="#D3924B" fillOpacity="0.25" />
            </pattern>

            {/* 3. SCULPTED ROUNDED RIM GRADIENTS */}
            <radialGradient id="thickRimTopBevel" cx="45%" cy="25%" r="75%">
              <stop offset="0%" stopColor="#FFF2D6" />
              <stop offset="25%" stopColor="#E7B372" />
              <stop offset="65%" stopColor="#A86629" />
              <stop offset="90%" stopColor="#63320F" />
              <stop offset="100%" stopColor="#381804" />
            </radialGradient>

            {/* 4. CHOCOLATE GLAZE INNER LINING */}
            <linearGradient id="chocLiningGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A200B" />
              <stop offset="40%" stopColor="#2F1407" />
              <stop offset="100%" stopColor="#190903" />
            </linearGradient>

            {/* 5. ESPRESSO & SILKY CREMA GRADIENTS */}
            <radialGradient id="espressoLiquidGrad" cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor="#63361A" />
              <stop offset="50%" stopColor="#3B1C0A" />
              <stop offset="85%" stopColor="#220D03" />
              <stop offset="100%" stopColor="#120601" />
            </radialGradient>

            <linearGradient id="hazelnutCremaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E9C998" />
              <stop offset="35%" stopColor="#C99452" />
              <stop offset="70%" stopColor="#9B622B" />
              <stop offset="100%" stopColor="#5E3311" />
            </linearGradient>

            {/* 6. TOASTED GRAIN SPECKLE FILTER */}
            <filter id="grainSpeckle" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.25  0 0 0 0 0.12  0 0 0 0 0.05  0 0 0 0.22 0" />
              <feComposite in2="SourceGraphic" in="glaze" operator="atop" />
            </filter>

            {/* 7. TRUE SUBTRACTION BITE MASK */}
            <mask id="sculptedBiteMask">
              <rect x="-60" y="-60" width="460" height="540" fill="white" />
              
              {/* Primary Bite Arc */}
              {biteCount >= 1 && (
                <g>
                  <ellipse cx="236" cy="84" rx="29" ry="24" fill="black" />
                  <circle cx="216" cy="74" r="17" fill="black" />
                  <circle cx="254" cy="98" r="16" fill="black" />
                  <circle cx="224" cy="98" r="13" fill="black" />
                  <circle cx="248" cy="75" r="14" fill="black" />
                </g>
              )}

              {/* Second Bite */}
              {biteCount >= 2 && (
                <g>
                  <circle cx="106" cy="87" r="22" fill="black" />
                  <circle cx="92" cy="78" r="16" fill="black" />
                  <circle cx="120" cy="97" r="15" fill="black" />
                </g>
              )}

              {/* Third Bite */}
              {biteCount >= 3 && (
                <g>
                  <circle cx="170" cy="70" r="24" fill="black" />
                </g>
              )}
            </mask>
          </defs>

          {/* SOFT GROUND CONTACT SHADOWS */}
          <g opacity="0.8">
            <ellipse cx="170" cy="388" rx="118" ry="16" fill="#0D261E" opacity="0.25" filter="blur(12px)" />
            <ellipse cx="170" cy="385" rx="80" ry="10" fill="#0D261E" opacity="0.45" filter="blur(5px)" />
            <ellipse cx="170" cy="382" rx="48" ry="4" fill="#081813" opacity="0.65" filter="blur(2px)" />
          </g>

          {/* DYNAMIC STREAM OF ESPRESSO POURING (Stage: 'pour') */}
          {stage === 'pour' && (
            <g className="animate-in fade-in duration-500">
              {/* Outer hot steam glow */}
              <path
                d="M 167 -40 Q 169 40 168 110 Q 166 180 168 250"
                stroke="#C99452"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.3"
                filter="blur(3px)"
              />
              {/* Flowing coffee column */}
              <path
                d="M 167 -40 Q 169 40 168 110 Q 166 180 168 250"
                stroke="url(#espressoLiquidGrad)"
                strokeWidth="11"
                strokeLinecap="round"
                opacity="0.95"
              />
              {/* Golden fluid streak highlight */}
              <path
                d="M 169 -40 Q 171 40 170 110 Q 168 180 170 250"
                stroke="#E9C998"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.8"
              />
              {/* Dynamic Coffee Drops & Splash */}
              <circle cx="157" cy="245" r="3.5" fill="#E9C998" className="animate-ping" />
              <circle cx="179" cy="242" r="3" fill="#63361A" />
              <circle cx="168" cy="236" r="4.5" fill="#C99452" />
            </g>
          )}

          {/* AROMATIC STEAM TRAIL (When hot coffee is in cup) */}
          {fillPercent > 0 && (
            <g opacity="0.65" className="pointer-events-none">
              <path
                d="M 148 65 Q 138 30 150 5 T 144 -25"
                stroke="#FAF6EE"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '3.2s' }}
              />
              <path
                d="M 174 60 Q 186 25 174 0 T 180 -32"
                stroke="#C5A66A"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '4.2s', animationDelay: '0.9s' }}
              />
              <path
                d="M 196 68 Q 206 35 197 10 T 203 -18"
                stroke="#FAF6EE"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className="animate-pulse"
                style={{ animationDuration: '3.6s', animationDelay: '1.5s' }}
              />
            </g>
          )}

          {/* ══════════ MAIN CUP BODY WITH TRUE CUTOUT MASK ══════════ */}
          <g mask="url(#sculptedBiteMask)">
            
            {/* Outer Sculpted Biscuit Vessel (Elegant Organic Flare) */}
            <path
              d="M 62 85 C 62 85, 92 342, 97 354 C 101 364, 114 372, 130 372 H 210 C 226 372, 239 364, 243 354 C 248 342, 278 85, 278 85 Z"
              fill="url(#bakedBiscuitCylinder)"
              stroke="#3D1804"
              strokeWidth="2.5"
            />

            {/* Vertical baking gradient (toasted top & bottom) */}
            <path
              d="M 62 85 C 62 85, 92 342, 97 354 C 101 364, 114 372, 130 372 H 210 C 226 372, 239 364, 243 354 C 248 342, 278 85, 278 85 Z"
              fill="url(#verticalBakeShade)"
            />

            {/* 3D Waffle Iron Relief Grid Overlay */}
            <path
              d="M 62 85 C 62 85, 92 342, 97 354 C 101 364, 114 372, 130 372 H 210 C 226 372, 239 364, 243 354 C 248 342, 278 85, 278 85 Z"
              fill="url(#artisanalWafflePattern)"
              opacity="0.85"
            />

            {/* Specular Bake Curvature Highlight (Soft Left-Side Light) */}
            <path
              d="M 85 92 L 108 344 C 111 352, 118 358, 126 358 H 142 L 122 92 Z"
              fill="#FFFFFF"
              fillOpacity="0.18"
            />

            {/* Deep Shading on Right Contour (Rounded 3D Falloff) */}
            <path
              d="M 270 90 L 243 344 C 239 356, 229 366, 215 368 L 230 368 C 240 362, 248 352, 252 338 L 276 90 Z"
              fill="#1F0D04"
              fillOpacity="0.48"
            />

            {/* Warm Ambient Bounce Light along Right Outer Rim */}
            <path
              d="M 276 88 L 244 350"
              stroke="#D89A52"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.35"
            />

            {/* Interior Chamber & Chocolate Glaze Coating */}
            <ellipse cx="170" cy="85" rx="108" ry="29" fill="url(#chocLiningGrad)" />
            <ellipse cx="170" cy="85" rx="98" ry="24" fill="#1C0A02" />

            {/* LIQUID FILL (Dynamic smooth rising level) */}
            {fillPercent > 0 && (
              <g>
                {/* Espresso Liquid Base */}
                <ellipse
                  cx="170"
                  cy={liquidSurfaceY}
                  rx={98 - (liquidSurfaceY - 85) * 0.14}
                  ry={24 - (liquidSurfaceY - 85) * 0.03}
                  fill="url(#espressoLiquidGrad)"
                />

                {/* Velvety Hazelnut Crema Foam Swirl - Smooth & Clean */}
                <ellipse
                  cx="168"
                  cy={liquidSurfaceY}
                  rx={(98 - (liquidSurfaceY - 85) * 0.14) * 0.88}
                  ry={(24 - (liquidSurfaceY - 85) * 0.03) * 0.88}
                  fill="url(#hazelnutCremaGrad)"
                  opacity="0.9"
                />
              </g>
            )}

            {/* Thick Sculptural Baked Rim Bevel */}
            <ellipse
              cx="170"
              cy="85"
              rx="108"
              ry="29"
              fill="none"
              stroke="url(#thickRimTopBevel)"
              strokeWidth="12"
            />

            {/* EMBOSSED BISCUIT HOT-STAMP BRANDING ("CUP2EAT") */}
            <g transform="translate(118, 198) rotate(-3)">
              {/* Debossed cookie dough boundary */}
              <rect
                x="0"
                y="0"
                width="104"
                height="40"
                rx="12"
                fill="#2E1204"
                fillOpacity="0.45"
                stroke="#F9E2BE"
                strokeWidth="1.2"
                strokeDasharray="3 3"
              />
              {/* Inner carved shadow */}
              <rect
                x="2"
                y="2"
                width="100"
                height="36"
                rx="10"
                fill="#1C0A02"
                fillOpacity="0.25"
              />
              <text
                x="52"
                y="23"
                textAnchor="middle"
                fill="#F7DFBC"
                fontSize="12"
                fontWeight="900"
                fontFamily="Space Grotesk, sans-serif"
                letterSpacing="1.8"
              >
                CUP2EAT
              </text>
              <text
                x="52"
                y="33"
                textAnchor="middle"
                fill="#D49955"
                fontSize="6.5"
                fontWeight="800"
                fontFamily="Manrope, sans-serif"
                letterSpacing="1.2"
              >
                EDIBLE WAFER VESSEL
              </text>
            </g>
          </g>

          {/* ══════════ REALISTIC POROUS BISCUIT CRUMB AT BITE SITE ══════════ */}
          {biteCount >= 1 && (
            <g className="animate-in fade-in zoom-in-95 duration-300">
              {/* Porous Cookie Dough Crumb Interior Border */}
              <path
                d="M 205 66 C 210 74, 214 82, 222 88 C 230 94, 242 98, 256 94 C 262 90, 268 84, 272 74"
                stroke="#E2B77D"
                strokeWidth="8"
                strokeLinecap="round"
                fill="none"
              />
              {/* Golden aerated core texture */}
              <path
                d="M 207 68 C 212 75, 216 83, 224 88 C 232 93, 243 96, 255 92 C 260 88, 265 82, 269 74"
                stroke="#C68943"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
              />
              {/* Inner Chocolate Glaze Seam */}
              <path
                d="M 210 70 C 215 77, 219 83, 226 87 C 234 91, 244 93, 254 90 C 258 87, 263 82, 266 75"
                stroke="#2B1204"
                strokeWidth="2.2"
                strokeLinecap="round"
                fill="none"
              />

              {/* Crunchy Aerated Biscuit Crumbs on Fracture Line */}
              <circle cx="218" cy="80" r="2.2" fill="#FAF6EE" />
              <circle cx="228" cy="91" r="2.8" fill="#874B1E" />
              <circle cx="240" cy="94" r="2.4" fill="#E8C390" />
              <circle cx="250" cy="88" r="3.2" fill="#4A2207" />
              <circle cx="260" cy="80" r="2" fill="#FAF6EE" />
              <circle cx="234" cy="86" r="1.8" fill="#DDB178" />

              {/* Delicious Falling Biscuit Crumbs */}
              <g className="animate-pulse">
                <circle cx="232" cy="118" r="3.5" fill="#C98B48" />
                <circle cx="248" cy="132" r="2.8" fill="#753D16" />
                <circle cx="224" cy="144" r="2.2" fill="#E8C390" />
                <circle cx="258" cy="155" r="3.2" fill="#C98B48" />
                <circle cx="236" cy="175" r="2.5" fill="#4A2207" />
                <circle cx="266" cy="190" r="3" fill="#DDB178" />
              </g>
            </g>
          )}

          {/* DYNAMIC SCATTERED CRUMBS FROM USER CLICKS */}
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
          <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#173F32] border border-[#C5A66A]/40 text-[#F4EBD8] px-3.5 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans-manrope font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5 sm:gap-2 hover:bg-[#C77C48] transition-colors max-w-[90vw]">
            <span className="w-2 h-2 rounded-full bg-[#C77C48] animate-ping shrink-0" />
            <span>Click Cup to Crunch ({biteCount}/3)</span>
          </div>
        )}
      </div>
    </div>
  );
}
