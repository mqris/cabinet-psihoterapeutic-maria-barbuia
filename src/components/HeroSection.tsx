/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, MessageSquareHeart, Award, HeartHandshake, ShieldCheck, Sparkles, ArrowDown } from "lucide-react";
import { DOCTOR_PROFILE } from "../data/cabinetData.ts";

interface HeroSectionProps {
  onOpenBooking: (type: "programare" | "cunoastere") => void;
}

export function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#FFF9F2] via-[#F6E4CF]/60 to-[#F6E4CF]"
    >
      {/* Subtle organic background motifs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#D9C4AA]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#321C04]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Message & Visual Scan Anchor */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold tracking-wide border border-[#321C04]/15 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Cabinet Autorizat & Psihoterapie Bazată pe Științe Cognitive</span>
            </div>

            {/* Main Headline with Instrument Serif accent */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-normal text-[#321C04] leading-[1.12] tracking-tight"
              id="hero-main-title"
            >
              Spațiul tău de liniște, înțelegere și claritate{" "}
              <em className="instrument-serif not-italic font-normal text-[#321C04] block sm:inline">
                fără grabă sau vinovăție.
              </em>
            </h1>

            {/* Reassuring Subtitle */}
            <p className="text-base sm:text-lg text-[#321C04]/80 leading-relaxed max-w-2xl font-normal">
              Sunt <strong>Dr. Maria Barbuia</strong>, doctor în psihologie (UBB) și psihoterapeut. Te însoțesc cu deschidere, căldură autentică și rigoare științifică pentru a depăși anxietatea, ADHD-ul, traumele vechi sau perioadele copleșitoare de viață.
            </p>

            {/* Prominent Dual Action Buttons - Big & Visible */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              {/* Buton mare și tare: Programează o sesiune */}
              <button
                type="button"
                onClick={() => onOpenBooking("programare")}
                className="bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] px-8 py-4 rounded-2xl text-base font-semibold tracking-wide shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-3 cursor-pointer group"
                id="hero-btn-programare-mare"
              >
                <Calendar size={20} className="transition-transform group-hover:scale-110" />
                <span>Programează o sesiune</span>
              </button>

              {/* Buton: Hai să ne cunoaștem */}
              <button
                type="button"
                onClick={() => onOpenBooking("cunoastere")}
                className="bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] px-7 py-4 rounded-2xl text-base font-semibold tracking-wide shadow-sm hover:shadow transition-all flex items-center justify-center gap-3 cursor-pointer border border-[#321C04]/15"
                id="hero-btn-hai-sa-ne-cunoastem"
              >
                <MessageSquareHeart size={20} className="text-[#321C04]" />
                <span>Hai să ne cunoaștem</span>
              </button>
            </div>

            {/* Reassurance Micro-Copy */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#321C04]/75 pt-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={15} className="text-emerald-700" />
                Confidențialitate absolută
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake size={15} className="text-[#321C04]" />
                Fără prejudecăți sau etichete
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles size={15} className="text-[#321C04]" />
                Format Fizic & Online
              </span>
            </div>
          </div>

          {/* Right Column: Doctor Profile Card / Psychological Reassurance Frame */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FFF9F2] rounded-3xl p-7 sm:p-8 shadow-xl border border-[#321C04]/10 relative z-10">
              {/* Header inside card */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#321C04]/10">
                <div className="w-16 h-16 rounded-2xl bg-[#321C04] text-[#FFF9F2] flex items-center justify-center font-serif text-2xl font-bold shadow-md shrink-0">
                  MB
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#321C04] leading-tight">Dr. Maria Barbuia</h2>
                  <p className="text-xs text-[#321C04]/70 font-medium">35 ani • Doctor în Psihologie (UBB)</p>
                  <p className="text-xs text-emerald-800 font-semibold mt-0.5">Psihoterapeut Acreditat CPR</p>
                </div>
              </div>

              {/* Highlight Quote */}
              <blockquote className="text-sm text-[#321C04]/90 italic leading-relaxed mb-6 bg-[#F6E4CF]/40 p-4 rounded-2xl border-l-3 border-[#321C04]">
                „Vindecarea nu înseamnă să te schimbi forțat, ci să înțelegi cum funcționează propria minte și să găsești un pilon de sprijin care să nu te lase să cazi.”
              </blockquote>

              {/* Fast Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {DOCTOR_PROFILE.stats.map((st, i) => (
                  <div key={i} className="bg-white/80 rounded-xl p-3 border border-[#321C04]/5">
                    <div className="text-lg font-bold text-[#321C04]">{st.value}</div>
                    <div className="text-[11px] text-[#321C04]/70 leading-tight mt-0.5">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Quick links to explore */}
              <div className="flex items-center justify-between text-xs font-semibold text-[#321C04] pt-2 border-t border-[#321C04]/10">
                <button
                  type="button"
                  onClick={() => scrollTo("despre-mine")}
                  className="hover:underline flex items-center gap-1 cursor-pointer"
                >
                  Vezi formarea mea <ArrowDown size={12} />
                </button>
                <button
                  type="button"
                  onClick={() => scrollTo("marturii-clienti")}
                  className="hover:underline text-[#321C04]/80 cursor-pointer"
                >
                  3 Povești de Schimbare →
                </button>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -inset-2 bg-[#D9C4AA]/40 rounded-[32px] -rotate-1 -z-0" />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-8 flex items-center justify-center">
        <button
          type="button"
          onClick={() => scrollTo("despre-mine")}
          className="text-xs uppercase tracking-widest font-semibold text-[#321C04]/60 hover:text-[#321C04] flex items-center gap-2 transition-colors cursor-pointer"
        >
          <span>Descoperă parcursul & filosofia cabinetului</span>
          <ArrowDown size={14} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
