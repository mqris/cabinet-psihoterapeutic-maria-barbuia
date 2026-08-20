/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Clock, Phone, Mail, Sparkles, Shield, Coffee, VolumeX, Sun, Wifi } from "lucide-react";
import { CABINET_LOCATION, DOCTOR_PROFILE } from "../data/cabinetData.ts";

export function SanctuaryLocationSection() {
  return (
    <section id="sanctuar" className="py-20 md:py-32 bg-[#F6E4CF] relative z-10 border-t border-[#321C04]/10">
      {/* Anchor alias */}
      <div id="locatie-cabinet" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with single-word badge */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/15">
            <Sparkles size={14} />
            <span>Sanctuar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Un mediu liniștit unde te poți{" "}
            <em className="instrument-serif not-italic">deschide în siguranță</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Cabinetul este conceput ca un refugiu cald și luminos, ferit de agitație. Un loc în care atât tinerii, cât și adulții găsesc liniște, susținere empatică și claritate.
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
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <VolumeX size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Izolare fonică dedicată pentru confidențialitate absolută a gândurilor tale.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Coffee size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Ceaiuri calde calmante, cafea de specialitate și un ritm fără grabă.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Shield size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Fără judecată sau etichete rigide – ești ascultat și validat autentic.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                  <Wifi size={18} className="text-[#321C04] shrink-0 mt-0.5" />
                  <div className="text-xs text-[#321C04]/90 font-medium">
                    Opțiune pentru sesiuni Online HD securizate dacă ești din alt oraș sau din diaspora.
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#321C04]/10 text-xs text-[#321C04]/70">
              Cabinetul funcționează exclusiv pe bază de programare prealabilă pentru a asigura intimitatea fiecărei persoane.
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
                    <strong className="text-white block mb-0.5">Email Direct:</strong>
                    <a href="mailto:barbuiamaria@gmail.com" className="text-[#D9C4AA] hover:underline font-semibold">
                      barbuiamaria@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Transport info card */}
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1.5">
                <div className="text-xs font-semibold text-[#D9C4AA] uppercase tracking-wider">
                  Acces & Parcare Facilă
                </div>
                <p className="text-xs text-white/75 leading-relaxed">
                  Situat la 3 minute de mers pe jos de stațiile principale de transport în comun, cu locuri de parcare disponibile în proximitate.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
