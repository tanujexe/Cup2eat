import React, { useState } from 'react';
import { ArrowUpRight, Flame, Droplet, Coffee, Info, Sparkles, Check } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ProductShowcase({ onSelectProductForEnquiry }) {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [detailModalProduct, setDetailModalProduct] = useState(null);

  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-[#FAF6EE] text-[#173F32] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#173F32]/12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32]/8 text-[#173F32] mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#C77C48]" />
              <span className="eyebrow-label text-[#173F32]">Curated Product Range</span>
            </div>
            <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase">
              The Edible Lineup
            </h2>
            <div className="font-calligraphy text-3xl sm:text-4xl text-[#C77C48] capitalize mt-1">
              baked to elevate every beverage
            </div>
          </div>
          <div className="max-w-md font-sans-manrope">
            <p className="text-sm sm:text-base text-[#173F32]/75 leading-relaxed">
              Every cup is baked to order for events, cafes, and celebrations.
              Engineered with heat-resistant natural boundaries that lock in temperature while preserving crunch.
            </p>
            <span className="inline-block mt-2 text-[11px] font-mono text-[#C77C48] font-semibold">
              * Official specs & custom branding available on request
            </span>
          </div>
        </div>

        {/* Product Cards: Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((prod, index) => {
            const isFeatured = index === 1; // Highlight the 220ml popular one

            return (
              <div
                key={prod.id}
                className={`group rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-500 bg-[#F4EBD8] border ${
                  isFeatured
                    ? 'border-2 border-[#173F32] shadow-xl ring-4 ring-[#173F32]/5'
                    : 'border-[#173F32]/12 hover:border-[#173F32]/30 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Product Image Stage */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#173F32]/5">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Highlight Ribbon */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#173F32] text-[#F4EBD8] text-[10px] font-mono uppercase font-bold tracking-wider shadow-sm">
                      {prod.capacity}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-[#F4EBD8]/90 backdrop-blur-xs text-[#173F32] text-[10px] font-mono uppercase font-bold tracking-wider border border-[#173F32]/10">
                      {prod.highlight}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="p-6 flex-1 flex flex-col justify-between font-sans-manrope">
                  <div>
                    <span className="eyebrow-label text-[#788B50] block mb-1">
                      {prod.category}
                    </span>
                    <h3 className="font-serif-fraunces font-bold text-2xl text-[#173F32] leading-tight">
                      {prod.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#173F32]/75 mt-3 line-clamp-3 leading-relaxed">
                      {prod.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="mt-5 pt-4 border-t border-[#173F32]/10 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-[#173F32]/85">
                        <span className="text-[11px] font-mono text-[#173F32]/60">Endurance:</span>
                        <span className="font-semibold">{prod.enduranceTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-[#173F32]/85">
                        <span className="text-[11px] font-mono text-[#173F32]/60">Max Temp:</span>
                        <span className="font-semibold">{prod.temperatureRating}</span>
                      </div>
                      <div className="flex items-start justify-between text-[#173F32]/85 pt-1">
                        <span className="text-[11px] font-mono text-[#173F32]/60 shrink-0">Flavour:</span>
                        <span className="font-medium text-right text-[11px] text-[#C77C48]">{prod.flavor}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#173F32]/10 flex items-center gap-3">
                    <button
                      onClick={() => onSelectProductForEnquiry(prod.name)}
                      className="flex-1 py-3 px-4 rounded-full bg-[#173F32] text-[#F4EBD8] text-xs uppercase font-bold tracking-wider hover:bg-[#C77C48] transition-colors flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => setDetailModalProduct(prod)}
                      className="p-3 rounded-full border border-[#173F32]/20 text-[#173F32] hover:bg-[#173F32]/10 transition-colors cursor-pointer"
                      title="View full specs"
                      aria-label="View product details"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Event Branding Callout Box */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-[#173F32] text-[#F4EBD8] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl font-sans-manrope">
            <span className="px-3 py-1 rounded-full bg-[#C5A66A] text-[#173F32] eyebrow-label inline-block mb-3">
              B2B Customization
            </span>
            <h3 className="font-serif-fraunces font-bold text-2xl sm:text-3xl uppercase tracking-tight">
              Custom Logo Embossing & Flavor Profiles
            </h3>
            <p className="text-sm text-[#F4EBD8]/80 mt-2 leading-relaxed">
              Hosting a major conference, college festival, or product launch? We can emboss your brand logo
              directly onto the wafer biscuit and curate tailored flavor profiles (cinnamon, cocoa, vanilla, or savory herbs).
            </p>
          </div>

          <button
            onClick={() => onSelectProductForEnquiry('Custom Branded Edible Cups')}
            className="w-full md:w-auto px-8 py-4 rounded-full bg-[#C77C48] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#A96131] transition-all shadow-md shrink-0 cursor-pointer font-sans-manrope"
          >
            Ask for Custom Embossing
          </button>
        </div>

      </div>

      {/* Product Detail Modal */}
      {detailModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-[#F4EBD8] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-5 sm:p-8 border-2 border-[#173F32] shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setDetailModalProduct(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-[#173F32]/10 text-[#173F32] flex items-center justify-center font-bold hover:bg-[#173F32] hover:text-[#F4EBD8] transition-colors cursor-pointer"
            >
              ✕
            </button>

            <span className="eyebrow-label text-[#788B50]">
              {detailModalProduct.category}
            </span>
            <h3 className="font-serif-fraunces font-bold text-2xl sm:text-3xl text-[#173F32] mt-1 pr-8">
              {detailModalProduct.name}
            </h3>

            <div className="my-6 space-y-3 text-xs sm:text-sm text-[#173F32]/85">
              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#173F32]/10">
                <span className="font-bold text-[#173F32] block mb-1">Pairing Recommendations:</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {detailModalProduct.bestPairedWith.map((drink) => (
                    <span key={drink} className="px-2.5 py-1 rounded-md bg-[#173F32]/8 text-[#173F32] text-xs font-medium">
                      {drink}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#173F32]/10">
                <span className="font-bold text-[#173F32] block mb-1">Base Formulation [Editable Placeholder]:</span>
                <p className="text-xs text-[#173F32]/75">{detailModalProduct.ingredientsPlaceholder}</p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#173F32]/10 text-center">
                  <span className="text-[10px] font-mono uppercase text-[#173F32]/60">Volume</span>
                  <div className="font-bold text-base text-[#173F32]">{detailModalProduct.capacity}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#173F32]/10 text-center">
                  <span className="text-[10px] font-mono uppercase text-[#173F32]/60">Holding Time</span>
                  <div className="font-bold text-base text-[#173F32]">{detailModalProduct.enduranceTime}</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  onSelectProductForEnquiry(detailModalProduct.name);
                  setDetailModalProduct(null);
                }}
                className="flex-1 py-3.5 rounded-full bg-[#173F32] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#C77C48] transition-colors cursor-pointer"
              >
                Select for Bulk Order
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

