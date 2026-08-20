/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { GraduationCap, Award, Compass, HeartHandshake, CheckCircle2, BookOpen, UserCheck, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";
import { DOCTOR_PROFILE, ACCREDITATION_STEPS } from "../data/cabinetData.ts";

interface AboutSectionProps {
  onOpenBooking: (type: "programare" | "cunoastere") => void;
}

export function AboutSection({ onOpenBooking }: AboutSectionProps) {
  const [activeTab, setActiveTab] = useState<"biografie" | "de-ce-psihoterapie" | "etape-cabinet">("biografie");

  return (
    <section id="despre-mine" className="py-20 md:py-32 bg-[#FFF9F2] relative z-10 border-t border-[#321C04]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with cognitive visual hierarchy */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E4CF] text-[#321C04] text-xs font-semibold uppercase tracking-widest">
            <UserCheck size={14} />
            <span>Despre Psihologul Tău</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Cine sunt, cum lucrez și{" "}
            <em className="instrument-serif not-italic">de ce sunt aici pentru tine</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Combin rigoarea academică de vârf cu o prezență profund umană, empatică și comunicativă, pentru ca tu să te simți în siguranță deplină.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#F6E4CF]/60 border border-[#321C04]/10 max-w-full overflow-x-auto">
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
              onClick={() => setActiveTab("de-ce-psihoterapie")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "de-ce-psihoterapie"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04] hover:bg-black/5"
              }`}
            >
              De Ce Am Ales Psihoterapia
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("etape-cabinet")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer whitespace-nowrap ${
                activeTab === "etape-cabinet"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04] hover:bg-black/5"
              }`}
            >
              Etapele Acreditării Cabinetului (CPR)
            </button>
          </div>
        </div>

        {/* Tab 1: Biografie & Parcurs Academic */}
        {activeTab === "biografie" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start animate-fade-in-down">
            {/* Left Col: Overview & Philosophy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-[#F6E4CF]/50 rounded-3xl p-8 border border-[#321C04]/10 space-y-4">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#321C04]">
                  <GraduationCap className="text-[#321C04]" size={22} />
                  <span>Formare Universitară de Elită la UBB Cluj-Napoca</span>
                </div>
                <p className="text-base text-[#321C04]/90 leading-relaxed">
                  Am <strong>35 de ani</strong> și am absolvit cursurile <strong>Facultății de Psihologie din cadrul Universității Babeș-Bolyai (UBB)</strong>, specializarea <strong>Științe Cognitive</strong>. Parcursul meu a continuat firesc cu un <strong>Masterat în Cercetare Avansată</strong> și un <strong>Doctorat (Ph.D.)</strong> în psihologie, în cadrul căruia am obținut un breakthrough științific semnificativ recunoscut în domeniu.
                </p>
                <p className="text-base text-[#321C04]/90 leading-relaxed">
                  Încă din primii ani de facultate, am refuzat să rămân doar la teorie. Am desfășurat <strong>numeroase internship-uri în centre de cercetare de top</strong> și în cabinete psihoterapeutice prestigioase, acumulând echivalentul a <strong>doi ani de experiență clinică practică directă</strong> în momentul în care am finalizat studiile universitare.
                </p>
              </div>

              {/* Achievements Highlight */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 border border-[#321C04]/10 flex items-start gap-4 shadow-2xs">
                  <div className="p-2.5 rounded-xl bg-[#321C04] text-[#FFF9F2] shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#321C04] text-base">Breakthrough Științific</h3>
                    <p className="text-xs text-[#321C04]/70 mt-1 leading-relaxed">
                      Cercetare doctorală validată internațional pe autoreglare cognitiv-emoțională și neuroplasticitate.
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
                      Clienți care și-au redobândit autonomia, claritatea și pacea prin colaborare terapeutică.
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
                  Cronologia Excelenței
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
                      <div className="text-xs text-[#321C04]/70 mt-0.5">Breakthrough științific în mecanisme de adaptare cognitivă.</div>
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

                <div className="pt-4 border-t border-[#321C04]/10 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenBooking("cunoastere")}
                    className="w-full bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
                  >
                    Hai să ne cunoaștem (15 min gratuit)
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: De Ce Am Ales Psihoterapia */}
        {activeTab === "de-ce-psihoterapie" && (
          <div id="de-ce-psihoterapie" className="max-w-4xl mx-auto space-y-8 animate-fade-in-down">
            <div className="bg-[#F6E4CF] rounded-3xl p-8 sm:p-12 border border-[#321C04]/10 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#321C04]/80">
                <Compass size={16} />
                <span>Misiune & Vocație Personală</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-normal text-[#321C04] leading-snug">
                „Am ales psihoterapia pentru că îmi doresc să ajut pe orice latură îmi stă în putință.”
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-[#321C04]/90 leading-relaxed font-normal">
                <p>
                  În laboratorul de cercetare am descoperit mecanismele fine prin care gândurile noastre modelează realitatea, emoțiile și comportamentul. Totuși, cunoașterea științifică capătă cu adevărat valoare doar atunci când este pusă în slujba sufletului uman.
                </p>
                <p>
                  Când nu mă aflu în fața datelor de cercetare, îmi dedic perioadele libere pentru a oferi <strong>consiliere dedicată și suport psihoterapeutic pentru cazuri excepționale</strong> — oameni care se confruntă cu crize profunde de identitate, dureri ascunse sau diagnostice care par insurmontabile.
                </p>
                <p>
                  Îmi doresc ca fiecare client să simtă că în cabinetul meu nu este doar un număr de fișă, ci o persoană respectată în totalitatea sa. Sunt aici să fiu acel pilon stabil atunci când simți că totul în jur se clatină.
                </p>
              </div>

              <div className="pt-6 border-t border-[#321C04]/15 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#321C04] text-white flex items-center justify-center font-serif font-bold text-lg">
                    MB
                  </div>
                  <div>
                    <div className="font-bold text-[#321C04] text-sm">Dr. Maria Barbuia</div>
                    <div className="text-xs text-[#321C04]/70">Psihoterapeut & Doctor în Psihologie</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking("programare")}
                  className="bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Programează o sesiune acum
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Etapele Acreditării Cabinetului (CPR) */}
        {activeTab === "etape-cabinet" && (
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
