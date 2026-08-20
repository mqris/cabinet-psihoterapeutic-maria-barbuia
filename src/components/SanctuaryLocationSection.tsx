/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Phone, Mail, Sparkles, Shield, Coffee, VolumeX, Sun, Wifi, Calendar, MessageSquareHeart } from "lucide-react";
import { CABINET_LOCATION, DOCTOR_PROFILE } from "../data/cabinetData.ts";

interface SanctuaryLocationSectionProps {
  onOpenBooking: (type: "programare" | "cunoastere") => void;
}

export function SanctuaryLocationSection({ onOpenBooking }: SanctuaryLocationSectionProps) {
  return (
    <section id="locatie-cabinet" className="py-20 md:py-32 bg-[#F6E4CF] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/15">
            <Sparkles size={14} />
            <span>Sanctuarul Nostru & Locație</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Un mediu liniștit unde te poți{" "}
            <em className="instrument-serif not-italic">deschide în siguranță</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Cabinetul meu este conceput ca un refugiu cald și luminos, ferit de agitația cotidiană. Un loc în care atât tinerii, cât și adulții găsesc liniște, susținere empatică și un pilon de rezistență.
          </p>
        </div>

        {/* 2-Column Grid: Atmosphere & Location Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Atmosphere & Visual Safe Space */}
          <div className="lg:col-span-7 bg-[#FFF9F2] rounded-3xl p-8 sm:p-10 border border-[#321C04]/10 shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#F6E4CF] flex items-center justify-center text-[#321C04]">
                  <Sun size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#321C04]">Atmosfera din Cabinet</h3>
                  <p className="text-xs text-[#321C04]/70">Liniște, Înțelegere & Autocunoaștere</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#321C04]/85 leading-relaxed">
                {DOCTOR_PROFILE.sanctuaryPhilosophy}
              </p>

              {/* Sanctuary Pillars / Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <VolumeX size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Izolare fonică dedicată pentru confidențialitate absolută a gândurilor tale.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Coffee size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Ceaiuri calde calmante, cafea de specialitate și un ritm fără grabă.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Shield size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Fără judecată sau etichete rigide – ești ascultat și validat autentic.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Wifi size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Opțiune pentru sesiuni Online HD securizate dacă ești din alt oraș sau din diaspora.
                  </div>
                </div>
              </div>
            </div>

            {/* Dual CTAs Inside Atmosphere Box */}
            <div className="pt-6 border-t border-[#321C04]/10 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenBooking("programare")}
                className="w-full sm:w-auto bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <Calendar size={16} />
                <span>Programează o sesiune</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenBooking("cunoastere")}
                className="w-full sm:w-auto bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#321C04]/10"
              >
                <MessageSquareHeart size={16} />
                <span>Hai să ne cunoaștem</span>
              </button>
            </div>
          </div>

          {/* Right Column: Physical Address, Map & Details */}
          <div className="lg:col-span-5 bg-[#321C04] text-[#FFF9F2] rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Locație & Contact</h3>
                  <p className="text-xs text-white/70">Cluj-Napoca, Zonă Centrală</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-white/85 leading-relaxed">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#D9C4AA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Adresă:</strong>
                    <span>{CABINET_LOCATION.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-[#D9C4AA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Program de Lucru:</strong>
                    <span>{CABINET_LOCATION.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-[#D9C4AA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Telefon Direct:</strong>
                    <span>{CABINET_LOCATION.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-[#D9C4AA] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">Email Cabinet:</strong>
                    <span>{CABINET_LOCATION.email}</span>
                  </div>
                </div>
              </div>

              {/* Interactive simulated map card */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-2">
                <div className="text-xs font-semibold text-[#D9C4AA] uppercase tracking-wider">
                  Acces & Parcare Facilă
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Situat la 3 minute de mers pe jos de stațiile principale de transport în comun, cu parcare publică și privată disponibilă în proximitate.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => onOpenBooking("cunoastere")}
                className="w-full bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Solicită o discuție preliminară
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
