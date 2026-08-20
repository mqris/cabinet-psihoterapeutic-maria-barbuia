/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Heart, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { CABINET_LOCATION } from "../data/cabinetData.ts";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#321C04] text-[#FFF9F2] pt-16 pb-12 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FFF9F2] text-[#321C04] flex items-center justify-center font-serif text-xl font-bold">
                M
              </div>
              <div>
                <div className="text-lg font-bold text-white leading-tight">Dr. Maria Barbuia</div>
                <div className="text-xs text-[#D9C4AA]">Psihoterapeut & Doctor în Psihologie (UBB)</div>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-md font-normal">
              Cabinet individual de psihoterapie și psihologie clinică fundamentat pe științe cognitive. Un spațiu cald, empatic și deschis pentru tineri și adulți care caută un pilon de rezistență și claritate interioară.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold pt-1">
              <ShieldCheck size={16} />
              <span>Atestat de Liberă Practică • Colegiul Psihologilor din România (CPR)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#D9C4AA]">
              Secțiuni Principale
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-white/80 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("despre-mine")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Despre Mine & Formare UBB
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("de-ce-psihoterapie")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  De Ce Am Ales Psihoterapia
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("tineret-leadership")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Experiență Liceu & Tineret (EYP / CTR)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("locatie-cabinet")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cabinetul & Atmosfera
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("marturii-clienti")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mărturii Clienți (ADHD / Anxietate / Traume)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo("tarife-sesiuni")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tarife & Reducere Fidelitate (-40%)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#D9C4AA]">
              Contact Direct
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#D9C4AA] shrink-0 mt-0.5" />
                <span>{CABINET_LOCATION.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#D9C4AA] shrink-0" />
                <span>{CABINET_LOCATION.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#D9C4AA] shrink-0" />
                <span>{CABINET_LOCATION.email}</span>
              </div>
              <div className="pt-2 text-xs text-white/60">
                {CABINET_LOCATION.hours}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Dr. Maria Barbuia. Toate drepturile rezervate.</span>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Înapoi sus</span>
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
