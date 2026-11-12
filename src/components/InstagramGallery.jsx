import React from 'react';
import { ArrowUpRight, Heart, MessageCircle, Sparkles } from 'lucide-react';
import InstagramIcon from './icons/InstagramIcon';
import { BRAND_CONFIG } from '../data/brand';

export default function InstagramGallery() {
  const galleryItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
      caption: "Double espresso in a crisp wafer cup. The look on people's faces when they realize they can eat it!",
      tag: "Customer Reaction",
      likes: "1.2k"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800&auto=format&fit=crop",
      caption: "Over 2,500 cups served at the university youth summit. Zero plastic trash in the amphitheater.",
      tag: "Campus Fest",
      likes: "2.8k"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop",
      caption: "Pouring silky latte art directly into our baked artisanal cookie cup. Steams perfectly.",
      tag: "Latte Art Demo",
      likes: "4.5k"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop",
      caption: "Fresh out of the ovens: batches packed and sealed for this weekend's food & beverage expo.",
      tag: "Behind The Scenes",
      likes: "940"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1579954115545-a95591f28be0?q=80&w=800&auto=format&fit=crop",
      caption: "Affogato dessert cup: pure espresso poured over vanilla bean gelato inside a dark chocolate enrobed shell.",
      tag: "Dessert Special",
      likes: "3.1k"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
      caption: "Crowds lining up at our live demonstration booth. Drink it, eat it, love it!",
      tag: "Live Exhibition",
      likes: "1.7k"
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#FAF6EE] text-[#173F32] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#173F32]/12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#173F32]/8 text-[#173F32] mb-3">
              <InstagramIcon className="w-3.5 h-3.5 text-[#C77C48]" />
              <span className="eyebrow-label text-[#173F32]">Social Proof & Community</span>
            </div>
            <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#173F32] uppercase leading-[1.02]">
              Not Just A Cup.
            </h2>
            <div className="font-calligraphy text-4xl sm:text-6xl text-[#C77C48] font-normal normal-case mt-1">
              a conversation starter.
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-3 font-sans-manrope">
            <p className="text-xs sm:text-sm text-[#173F32]/75 max-w-xs text-left md:text-right leading-relaxed">
              Real reactions, live event stalls, latte art pours, and sustainable moments shared by our growing community.
            </p>
            <a
              href={BRAND_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#173F32] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#C77C48] shadow-sm transition-all group cursor-pointer"
            >
              <InstagramIcon className="w-4 h-4 text-[#C5A66A]" />
              <span>Follow The Experience</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <a
              key={item.id}
              href={BRAND_CONFIG.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#173F32] block shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 opacity-90 group-hover:opacity-75"
                loading="lazy"
              />

              {/* Tag Pill Top */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-[#FAF6EE]/90 backdrop-blur-xs text-[#173F32] text-[10px] font-mono uppercase font-bold tracking-wider">
                  {item.tag}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#173F32] via-[#173F32]/40 to-transparent flex flex-col justify-end p-6 text-[#F4EBD8] translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs sm:text-sm text-[#F4EBD8]/90 font-medium line-clamp-2 leading-relaxed">
                  "{item.caption}"
                </p>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#F4EBD8]/20 text-xs font-mono text-[#C5A66A]">
                  <span className="flex items-center gap-1.5">
                    <InstagramIcon className="w-3.5 h-3.5" /> @cup2eat
                  </span>
                  <span className="flex items-center gap-1 text-[#F4EBD8]/80">
                    <Heart className="w-3.5 h-3.5 text-[#C77C48] fill-[#C77C48]" /> {item.likes}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
