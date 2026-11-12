import React, { useState } from 'react';
import { Send, MessageSquare, Mail, Sparkles, CheckCircle2, Phone, Building, User, HelpCircle, PackageCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { BRAND_CONFIG } from '../data/brand';

export default function BulkEnquiry({ prefilledProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    phone: '',
    enquiryType: 'Cafe / Restaurant',
    quantity: '1,000 to 2,500 cups',
    needSamples: true,
    message: prefilledProduct ? `Interested in bulk order for: ${prefilledProduct}` : '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const enquiryTypes = [
    'Cafe / Restaurant',
    'College Event',
    'Corporate Event',
    'Exhibition',
    'Distributor',
    'Other',
  ];

  const quantityRanges = [
    '500 to 1,000 cups',
    '1,000 to 2,500 cups',
    '2,500 to 5,000 cups',
    '5,000 to 10,000 cups',
    '10,000+ cups (Custom Batch)',
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact number.';
    }
    if (!formData.organisation.trim()) {
      errs.organisation = 'Please provide business or event name.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate reference code
    const generatedRef = 'C2E-' + Math.floor(100000 + Math.random() * 900000);
    setRefId(generatedRef);
    setSubmitted(true);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#173F32', '#C77C48', '#C5A66A', '#788B50'],
      });
    } catch {
      // safe fallback if confetti blocked
    }
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello CUP2EAT Team! I would like to inquire about bulk edible cups for:\nName: ${formData.name || 'Inquirer'}\nOrganisation: ${formData.organisation || 'N/A'}\nEnquiry Type: ${formData.enquiryType}\nQuantity: ${formData.quantity}\nNotes: ${formData.message || 'Looking for pricing and sample box.'}`
    );
    return `https://wa.me/${BRAND_CONFIG.contact.whatsapp}?text=${text}`;
  };

  return (
    <section id="enquiry" className="py-16 sm:py-24 lg:py-32 bg-[#173F32] text-[#F4EBD8] relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full border border-[#C5A66A]/10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full border border-[#C5A66A]/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 font-sans-manrope">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A66A]/20 text-[#C5A66A] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="eyebrow-label text-[#C5A66A]">Commercial & Bulk Partnerships</span>
          </div>

          <h2 className="font-serif-fraunces font-bold clamp-headline-section text-[#F4EBD8] uppercase leading-[1.05]">
            Make Your Next Event Unforgettable.
          </h2>

          <div className="font-calligraphy text-3xl sm:text-4xl text-[#C5A66A] capitalize mt-1">
            partner with us for zero waste
          </div>

          <p className="mt-4 text-base sm:text-lg text-[#F4EBD8]/80 leading-relaxed font-sans-manrope">
            Bring the CUP2EAT experience to your cafe, event, exhibition or business.
            Submit your requirements below or chat directly on WhatsApp for sample kits and custom batches.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Card (8 Columns) */}
          <div className="lg:col-span-8 bg-[#FAF6EE] text-[#173F32] rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl border border-[#C5A66A]/30 font-sans-manrope">
            {submitted ? (
              <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-[#788B50]/20 text-[#788B50] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <span className="text-xs font-mono uppercase tracking-widest text-[#C77C48] font-bold">
                  Enquiry Received
                </span>
                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#173F32] mt-2">
                  Thank You, {formData.name}!
                </h3>
                
                <p className="text-sm text-[#173F32]/80 max-w-md mx-auto mt-3 leading-relaxed">
                  Your bulk enquiry has been validated with reference code{' '}
                  <span className="font-mono font-bold text-[#173F32] bg-[#F4EBD8] px-2 py-0.5 rounded border border-[#173F32]/15">
                    {refId}
                  </span>
                  . Our team will review your requirements for {formData.organisation} within 24 hours.
                </p>

                {/* Direct instant WhatsApp option */}
                <div className="mt-8 p-6 rounded-2xl bg-[#F4EBD8] border border-[#173F32]/10 max-w-md mx-auto text-left">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-[#173F32] uppercase mb-2">
                    <MessageSquare className="w-4 h-4 text-[#788B50]" />
                    <span>Want an instant response?</span>
                  </div>
                  <p className="text-xs text-[#173F32]/75 mb-4 leading-relaxed">
                    You can connect directly with our sales desk on WhatsApp with your pre-filled inquiry details:
                  </p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-[#173F32] text-[#F4EBD8] text-xs font-bold uppercase tracking-wider hover:bg-[#C77C48] transition-colors"
                  >
                    <span>Send via WhatsApp</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      organisation: '',
                      email: '',
                      phone: '',
                      enquiryType: 'Cafe / Restaurant',
                      quantity: '1,000 to 2,500 cups',
                      needSamples: true,
                      message: '',
                    });
                  }}
                  className="mt-6 text-xs font-mono text-[#173F32]/60 hover:text-[#173F32] underline"
                >
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#173F32]/40 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Varun Khera"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white border ${
                          errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#173F32]/20'
                        } text-sm focus:outline-none focus:border-[#173F32]`}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Business / Organisation */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Business / Organisation *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-[#173F32]/40 absolute left-4 top-3.5" />
                      <input
                        type="text"
                        placeholder="e.g. Blue Tokai / Campus Fest / Tech Summit"
                        value={formData.organisation}
                        onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white border ${
                          errors.organisation ? 'border-red-500 ring-1 ring-red-500' : 'border-[#173F32]/20'
                        } text-sm focus:outline-none focus:border-[#173F32]`}
                      />
                    </div>
                    {errors.organisation && <p className="text-xs text-red-600 mt-1">{errors.organisation}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Work / Personal Email *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-[#173F32]/40 absolute left-4 top-3.5" />
                      <input
                        type="email"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white border ${
                          errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#173F32]/20'
                        } text-sm focus:outline-none focus:border-[#173F32]`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#173F32]/40 absolute left-4 top-3.5" />
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3 rounded-xl bg-white border ${
                          errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-[#173F32]/20'
                        } text-sm focus:outline-none focus:border-[#173F32]`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Enquiry Category
                    </label>
                    <select
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#173F32]/20 text-sm focus:outline-none focus:border-[#173F32]"
                    >
                      {enquiryTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Expected Quantity */}
                  <div>
                    <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                      Expected Quantity
                    </label>
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#173F32]/20 text-sm focus:outline-none focus:border-[#173F32]"
                    >
                      {quantityRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase font-bold text-[#173F32] mb-2">
                    Event Details or Special Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event date, expected beverages (coffee, chai, desserts), custom embossing needs, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-[#173F32]/20 text-sm focus:outline-none focus:border-[#173F32]"
                  ></textarea>
                </div>

                {/* Sample Box Request Checkbox */}
                <div className="flex items-center gap-3 p-4 rounded-xl bg-[#F4EBD8]/70 border border-[#173F32]/10">
                  <input
                    type="checkbox"
                    id="samples"
                    checked={formData.needSamples}
                    onChange={(e) => setFormData({ ...formData, needSamples: e.target.checked })}
                    className="w-4 h-4 accent-[#173F32] rounded"
                  />
                  <label htmlFor="samples" className="text-xs text-[#173F32] font-semibold cursor-pointer">
                    Send me a B2B Tasting & Sample Kit (Includes Espresso, Cappuccino, and Chocolate cups)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#173F32] text-[#F4EBD8] font-bold text-xs uppercase tracking-wider hover:bg-[#C77C48] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Official Bulk Enquiry</span>
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full border-2 border-[#173F32] text-[#173F32] font-bold text-xs uppercase tracking-wider hover:bg-[#173F32] hover:text-[#F4EBD8] transition-all duration-300"
                  >
                    <MessageSquare className="w-4 h-4 text-[#788B50]" />
                    <span>Quick Chat on WhatsApp</span>
                  </a>
                </div>

                <p className="text-[11px] font-mono text-[#173F32]/60 text-center">
                  * Instant client-side validation. Pre-formatted WhatsApp integration available.
                </p>
              </form>
            )}
          </div>

          {/* Quick Contact & B2B Assurance (4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0F2C23] border border-[#C5A66A]/20 text-[#F4EBD8]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5A66A] font-bold">
                Why Partner With CUP2EAT?
              </span>

              <ul className="mt-6 space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A66A]/20 text-[#C5A66A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>
                    <strong className="text-white block font-display">Zero Waste Sensation</strong>
                    Eliminates paper & plastic trash while delighting guests.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A66A]/20 text-[#C5A66A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>
                    <strong className="text-white block font-display">Barista Certified</strong>
                    Tested with commercial steam wands & boiling espresso extractions.
                  </span>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A66A]/20 text-[#C5A66A] flex items-center justify-center shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span>
                    <strong className="text-white block font-display">Fast Dispatch Across India</strong>
                    Bulk orders packaged in food-grade moisture-sealed cartons.
                  </span>
                </li>
              </ul>

              <div className="mt-8 pt-6 border-t border-[#F4EBD8]/10 space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C5A66A]" />
                  <a href={`mailto:${BRAND_CONFIG.contact.email}`} className="hover:text-[#C5A66A] transition-colors">
                    {BRAND_CONFIG.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C5A66A]" />
                  <span>{BRAND_CONFIG.contact.phone}</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#173F32]/60 border border-[#F4EBD8]/15">
              <span className="text-[11px] font-mono text-[#C5A66A] uppercase font-bold block mb-1">
                Founder Note
              </span>
              <p className="text-xs text-[#F4EBD8]/80 italic">
                "We personally review all bulk festival and cafe partnership inquiries to ensure timely batch baking."
                <br />
                <span className="text-white font-semibold not-italic mt-2 inline-block">
                  — Varun Khera, Founder
                </span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

