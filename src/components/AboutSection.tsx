/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Award, HeartHandshake, CheckCircle2, UserCheck, ShieldCheck, Sparkles } from "lucide-react";
import { ACCREDITATION_STEPS } from "../data/cabinetData.ts";

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<"biografie" | "acreditare">("biografie");

  return (
    <section id="despre" className="py-20 md:py-32 bg-[#FFF9F2] relative z-10 border-t border-[#321C04]/5">
      {/* Anchor alias for backwards compatibility */}
      <div id="despre-mine" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with single-word badge */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E4CF] text-[#321C04] text-xs font-semibold uppercase tracking-widest">
            <UserCheck size={14} />
            <span>Despre</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Formare, experiență și{" "}
            <em className="instrument-serif not-italic">rigoare academică</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Doctor în Psihologie (UBB) și psihoterapeut acreditat, îmbinând științele cognitive cu o prezență profund umană și empatică.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F6E4CF]/60 border border-[#321C04]/10 max-w-full">
            <button
              type="button"
              onClick={() => setActiveTab("biografie")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "biografie"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04] hover:bg-black/5"
              }`}
            >
              Parcurs Academic & Experiență
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("acreditare")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "acreditare"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04] hover:bg-black/5"
              }`}
            >
              Acreditare CPR (6 Etape)
            </button>
          </div>
        </div>

        {/* Tab 1: Biografie & Parcurs Academic */}
        {activeTab === "biografie" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-fade-in-down">
            {/* Left Col: Overview & Experience */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#F6E4CF]/50 rounded-3xl p-8 border border-[#321C04]/10 space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#321C04]">
                  <GraduationCap className="text-[#321C04]" size={22} />
                  <span>Formare Universitară de Elită la UBB Cluj-Napoca</span>
                </div>
                <p className="text-base text-[#321C04]/90 leading-relaxed">
                  Am <strong>35 de ani</strong> și am absolvit cursurile <strong>Facultății de Psihologie din cadrul Universității Babeș-Bolyai (UBB)</strong>, specializarea <strong>Științe Cognitive</strong>. Parcursul meu a continuat firesc cu un <strong>Masterat în Cercetare Avansată</strong> și un <strong>Doctorat (Ph.D.)</strong> în psihologie, în cadrul căruia am obținut o <strong>descoperire științifică majoră</strong> recunoscută în domeniu.
                </p>
                <p className="text-base text-[#321C04]/90 leading-relaxed">
                  Încă din anii de facultate, am desfășurat numeroase internship-uri în centre de cercetare de top și în cabinete psihoterapeutice prestigioase, acumulând echivalentul a <strong>doi ani de experiență clinică practică directă</strong> în momentul finalizării studiilor universitare.
                </p>
              </div>

              {/* Achievements Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-[#321C04]/10 flex items-start gap-4 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-[#321C04] text-[#FFF9F2] shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#321C04] text-base">Descoperire Științifică</h3>
                    <p className="text-xs text-[#321C04]/70 mt-1 leading-relaxed">
                      Cercetare doctorală validată pe autoreglare cognitiv-emoțională și flexibilitate mentală.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-[#321C04]/10 flex items-start gap-4 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-[#D9C4AA] text-[#321C04] shrink-0">
                    <HeartHandshake size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#321C04] text-base">250+ Oameni Ghidați</h3>
                    <p className="text-xs text-[#321C04]/70 mt-1 leading-relaxed">
                      Clienți care și-au redobândit autonomia, claritatea și pacea prin ghidaj terapeutic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Presence statement */}
              <div className="p-6 rounded-2xl bg-[#321C04] text-[#FFF9F2] space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <Sparkles size={18} />
                  <span>Un Pilon de Rezistență & Comunicare Deschisă</span>
                </h3>
                <p className="text-sm text-[#FFF9F2]/90 leading-relaxed font-normal">
                  Sunt o persoană caldă, comunicativă și profund deschisă. În lucrul cu mine nu există formalism rigid sau răceală clinică. Vei găsi un partener de dialog onest, care te ascultă activ și te susține să îți reconstruiești pas cu pas încrederea în propriile forțe.
                </p>
              </div>
            </div>

            {/* Right Col: Timeline & Core Credentials */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-7 border border-[#321C04]/10 shadow-sm space-y-6">
                <h3 className="text-lg font-bold text-[#321C04] border-b border-[#321C04]/10 pb-3">
                  Cronologia Formării
                </h3>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#321C04]/10 text-[#321C04] font-bold text-xs flex items-center justify-center shrink-0">
                      UBB
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#321C04]">Licență în Psihologie (Științe Cognitive)</div>
                      <div className="text-xs text-[#321C04]/70 mt-0.5">Specializare în procesare informațională & neuroștiințe.</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#321C04]/10 text-[#321C04] font-bold text-xs flex items-center justify-center shrink-0">
                      M.Sc
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#321C04]">Masterat în Cercetare Avansată</div>
                      <div className="text-xs text-[#321C04]/70 mt-0.5">Validare de protocoale clinice bazate pe dovezi empirice.</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#321C04] text-white font-bold text-xs flex items-center justify-center shrink-0">
                      Ph.D
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#321C04]">Doctorat în Psihologie</div>
                      <div className="text-xs text-[#321C04]/70 mt-0.5">Descoperire științifică majoră în adaptare cognitivă.</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#D9C4AA] text-[#321C04] font-bold text-xs flex items-center justify-center shrink-0">
                      CPR
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#321C04]">Atestat de Liberă Practică & Cabinet Individual</div>
                      <div className="text-xs text-[#321C04]/70 mt-0.5">Membru cu drepturi depline în Colegiul Psihologilor din România.</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/10 text-xs text-[#321C04]/80 space-y-1">
                  <div className="font-bold text-[#321C04] flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-700" />
                    <span>Practică Clinică Autorizată</span>
                  </div>
                  <p>Cabinetul funcționează cu aviz oficial și conform normelor deontologice CPR.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Etapele Acreditării Cabinetului (CPR) */}
        {activeTab === "acreditare" && (
          <div className="space-y-8 animate-fade-in-down">
            <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
              <h3 className="text-2xl font-bold text-[#321C04]">
                Rigurozitate Legală, Etică & Acreditare Oficială
              </h3>
              <p className="text-sm text-[#321C04]/80">
                Am parcurs cu strictețe fiecare etapă academică și normativă prevăzută de Legea 213/2004 și Colegiul Psihologilor din România pentru a deschide un cabinet cu standarde impecabile de siguranță.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACCREDITATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-white rounded-2xl p-6 border border-[#321C04]/10 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-8 h-8 rounded-full bg-[#321C04] text-white flex items-center justify-center font-bold text-xs">
                        0{step.step}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        <CheckCircle2 size={12} /> Acreditat
                      </span>
                    </div>
                    <h4 className="font-bold text-[#321C04] text-base mb-1">{step.title}</h4>
                    <p className="text-xs font-semibold text-[#321C04]/60 mb-3">{step.institution}</p>
                    <p className="text-xs text-[#321C04]/80 leading-relaxed">{step.description}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#321C04]/5 flex items-center gap-1 text-[11px] text-[#321C04]/60">
                    <ShieldCheck size={13} className="text-emerald-700" />
                    <span>Conformitate deontologică CPR</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
