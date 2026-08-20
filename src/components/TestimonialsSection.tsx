/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Quote, Star, Heart, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data/cabinetData.ts";

export function TestimonialsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTestimonials = selectedCategory === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === selectedCategory);

  return (
    <section id="marturii" className="py-20 md:py-32 bg-[#FFF9F2] relative z-10 border-t border-[#321C04]/5">
      {/* Anchor alias */}
      <div id="marturii-clienti" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with single-word badge */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E4CF] text-[#321C04] text-xs font-semibold uppercase tracking-widest">
            <Heart size={14} className="text-rose-700 fill-rose-700" />
            <span>Mărturii</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Povești reale de{" "}
            <em className="instrument-serif not-italic">schimbare & vindecare</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Fiecare om care pășește în cabinet poartă o poveste unică. Iată trei dintre experiențele în care știința cognitivă și căldura umană au readus pacea.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              selectedCategory === "all"
                ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                : "bg-[#F6E4CF]/60 text-[#321C04] hover:bg-[#F6E4CF]"
            }`}
          >
            Toate Cazurile Reale ({TESTIMONIALS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("adhd")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              selectedCategory === "adhd"
                ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                : "bg-[#F6E4CF]/60 text-[#321C04] hover:bg-[#F6E4CF]"
            }`}
          >
            🧠 Gestionare ADHD
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("anxietate_depresie")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              selectedCategory === "anxietate_depresie"
                ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                : "bg-[#F6E4CF]/60 text-[#321C04] hover:bg-[#F6E4CF]"
            }`}
          >
            🌱 Depresie & Anxietate
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("trauma_seniori")}
            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              selectedCategory === "trauma_seniori"
                ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                : "bg-[#F6E4CF]/60 text-[#321C04] hover:bg-[#F6E4CF]"
            }`}
          >
            🕊️ Traume & Reconciliere
          </button>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#F6E4CF]/40 rounded-3xl p-7 sm:p-8 border border-[#321C04]/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <div>
                {/* Top Badge & Rating */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-[#321C04] text-[#FFF9F2] px-3 py-1 rounded-full">
                    {t.badge}
                  </span>
                  <div className="flex items-center gap-0.5 text-amber-600">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-600" />
                    ))}
                  </div>
                </div>

                {/* Main Quote */}
                <div className="relative mb-6">
                  <Quote size={32} className="text-[#321C04]/15 absolute -top-2 -left-2 -z-0" />
                  <blockquote className="text-base text-[#321C04] font-medium leading-relaxed italic relative z-10">
                    „{t.quote}”
                  </blockquote>
                </div>

                {/* Detailed Journey: Before vs Transformation */}
                <div className="space-y-3 mb-6 bg-white/70 rounded-2xl p-4 border border-[#321C04]/5">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-rose-800 tracking-wider block mb-0.5">
                      Punctul de plecare:
                    </span>
                    <p className="text-xs text-[#321C04]/80 leading-relaxed">{t.initialState}</p>
                  </div>

                  <div className="pt-2 border-t border-[#321C04]/10">
                    <span className="text-[11px] uppercase font-bold text-emerald-800 tracking-wider block mb-0.5">
                      Transformarea obținută:
                    </span>
                    <p className="text-xs text-[#321C04]/90 font-medium leading-relaxed">{t.transformation}</p>
                  </div>
                </div>
              </div>

              {/* Client Profile Footer */}
              <div className="pt-4 border-t border-[#321C04]/10 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-[#321C04]">{t.clientName}</div>
                  <div className="text-xs text-[#321C04]/70">
                    {t.clientRole}, {t.age} ani
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#321C04]/60 bg-[#D9C4AA]/50 px-2.5 py-1 rounded-lg">
                  {t.duration}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Confidentiality Footnote */}
        <div className="mt-12 text-center text-xs text-[#321C04]/70 flex items-center justify-center gap-2">
          <ShieldCheck size={15} className="text-emerald-700" />
          <span>Toate testimonialele respectă consimțământul informat și confidențialitatea conform codului deontologic CPR.</span>
        </div>

      </div>
    </section>
  );
}
