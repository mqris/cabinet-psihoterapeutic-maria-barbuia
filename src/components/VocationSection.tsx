/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Compass, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";
import { DOCTOR_PROFILE } from "../data/cabinetData.ts";

export function VocationSection() {
  return (
    <section id="vocatie" className="py-20 md:py-28 bg-[#F6E4CF] relative z-10 border-t border-[#321C04]/10">
      {/* Anchor alias for backwards compatibility */}
      <div id="de-ce-psihoterapie" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/15">
            <Compass size={14} />
            <span>Vocație</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            De ce am ales{" "}
            <em className="instrument-serif not-italic">psihoterapia</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Științele cognitive oferă rigoarea, însă relația umană caldă, autentică și empatică este cea care deschide ușa vindecării reale.
          </p>
        </div>

        {/* Narrative Card */}
        <div className="max-w-4xl mx-auto bg-[#FFF9F2] rounded-3xl p-8 sm:p-12 border border-[#321C04]/10 shadow-sm space-y-6">
          <div className="flex items-center gap-4 pb-6 border-b border-[#321C04]/10">
            <div className="w-14 h-14 rounded-2xl bg-[#321C04] text-white flex items-center justify-center font-serif font-bold text-xl shrink-0 shadow-sm">
              MB
            </div>
            <div>
              <div className="font-bold text-lg text-[#321C04]">Dr. Maria Barbuia</div>
              <div className="text-xs sm:text-sm text-[#321C04]/70">Psihoterapeut & Doctor în Psihologie (UBB)</div>
            </div>
          </div>

          <div className="space-y-5 text-base sm:text-lg text-[#321C04]/90 leading-relaxed font-normal">
            <p>
              Am ales psihoterapia dintr-o nevoie profundă de a ajuta pe orice latură îmi stă în putință. Pentru mine, cercetarea și științele cognitive au adus instrumentele precise de a înțelege cum funcționează mintea umană, însă adevărata împlinire vine atunci când pot fi alături de un om în momentele sale de răscruce.
            </p>
            <p>
              Când nu mă aflu în fața datelor academice, îmi dedic timpul liber oferind <strong>consiliere dedicată și sprijin terapeutic pentru cazuri excepționale</strong> — oameni care se confruntă cu crize profunde de identitate, dureri ascunse sau diagnostice dificile.
            </p>
            <p>
              Cred cu tărie că fiecare persoană merită un spațiu sigur în care să nu fie judecată, ci ascultată cu răbdare, respect și căldură. Sunt aici să fiu un pilon stabil atunci când simți că totul în jur se clatină.
            </p>
          </div>

          <div className="pt-4 border-t border-[#321C04]/10 flex flex-wrap items-center justify-between gap-4 text-xs text-[#321C04]/80 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-700" />
              Confidențialitate garantată CPR
            </span>
            <span className="flex items-center gap-1.5">
              <HeartHandshake size={16} className="text-[#321C04]" />
              Empatie fără prejudecăți
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles size={16} className="text-[#321C04]" />
              Abordare fundamentată pe dovezi clinice
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
