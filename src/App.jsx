import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ScrollExperience from './components/ScrollExperience';
import ProductShowcase from './components/ProductShowcase';
import UseCases from './components/UseCases';
import InstagramGallery from './components/InstagramGallery';
import About from './components/About';
import BulkEnquiry from './components/BulkEnquiry';
import Footer from './components/Footer';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from './data/brand';

export default function App() {
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState(null);

  const handleOpenEnquiry = (productName = null) => {
    if (productName && typeof productName === 'string') {
      setSelectedProductForEnquiry(productName);
    }
    const enquiryElem = document.getElementById('enquiry');
    if (enquiryElem) {
      enquiryElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F4EBD8] text-[#173F32] flex flex-col selection:bg-[#173F32] selection:text-[#F4EBD8]">
      {/* Top Floating Navbar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Hero Section — The Wow Moment */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 02. The Brand Story — Problem and Idea */}
        <BrandStory />

        {/* 03. Immersive Scroll-Driven Product Experience (GSAP + ScrollTrigger) */}
        <ScrollExperience onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 04. Editorial Product Showcase */}
        <ProductShowcase onSelectProductForEnquiry={(prodName) => handleOpenEnquiry(prodName)} />

        {/* 05. Where CUP2EAT Belongs (B2B Use Cases & Zero-Waste Impact Calculator) */}
        <UseCases onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 06. Real Customer Experience & Instagram Social Proof */}
        <InstagramGallery />

        {/* 07. About CUP2EAT & Founder Varun Khera */}
        <About />

        {/* 08. B2B Bulk Enquiry & Sample Box Conversion Section */}
        <BulkEnquiry prefilledProduct={selectedProductForEnquiry} />
      </main>

      {/* 09. Final CTA & Footer */}
      <Footer onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Quick Mobile Floating Action Button */}
      <div className="fixed bottom-6 right-5 z-40 sm:hidden">
        <button
          onClick={() => handleOpenEnquiry()}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#173F32] text-[#F4EBD8] text-xs font-bold uppercase tracking-wider shadow-2xl border border-[#C5A66A]/40 active:scale-95 transition-transform"
          aria-label="Bulk Order & Samples"
        >
          <span className="w-2 h-2 rounded-full bg-[#C77C48] animate-ping" />
          <span>Bulk Order</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
