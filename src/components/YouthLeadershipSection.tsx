/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Award, Cpu, HeartHandshake, Users, Globe, BookOpenCheck, Sparkles, CheckCircle } from "lucide-react";
import { YOUTH_ACHIEVEMENTS } from "../data/cabinetData.ts";

export function YouthLeadershipSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="text-[#321C04]" size={22} />;
      case "Cpu":
        return <Cpu className="text-[#321C04]" size={22} />;
      case "HeartHandshake":
        return <HeartHandshake className="text-[#321C04]" size={22} />;
      case "Users":
        return <Users className="text-[#321C04]" size={22} />;
      case "Globe":
        return <Globe className="text-[#321C04]" size={22} />;
      case "BookOpenCheck":
        return <BookOpenCheck className="text-[#321C04]" size={22} />;
      default:
        return <Award className="text-[#321C04]" size={22} />;
    }
  };

  return (
    <section id="tineret-leadership" className="py-20 md:py-28 bg-[#F6E4CF] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/15">
            <Sparkles size={14} />
            <span>Rădăcini, Formare & Implicare Civică</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Experiența din Liceu &{" "}
            <em className="instrument-serif not-italic">Leadership de Tineret</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Gândirea critică, empatia profundă și devotamentul pentru oameni nu au început în cabinet, ci s-au clădit încă din anii de liceu prin dezbateri, robotică, voluntariat și diplomație europeană de tineret.
          </p>
        </div>

        {/* 6 Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {YOUTH_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF9F2] rounded-3xl p-7 border border-[#321C04]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F6E4CF] flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#321C04]/60 bg-black/5 px-2.5 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#321C04] leading-snug mb-1">
                  {item.title}
                </h3>
                <p className="text-xs font-semibold text-[#321C04]/70 mb-3">
                  {item.organization}
                </p>
                <p className="text-xs sm:text-sm text-[#321C04]/85 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Impact / Reflection */}
              <div className="pt-3 border-t border-[#321C04]/10">
                <div className="text-[11px] font-semibold text-[#321C04] flex items-start gap-1.5 leading-relaxed bg-[#F6E4CF]/50 p-2.5 rounded-xl">
                  <CheckCircle size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on Youth Experience */}
        <div className="mt-12 bg-[#321C04] rounded-3xl p-8 text-[#FFF9F2] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#FFF9F2]">
              Înțeleg profund provocările tinerilor și adolescenților
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF9F2]/80 max-w-2xl leading-relaxed">
              Datorită anilor de reprezentare în Consiliul Elevilor și Parlamentul European al Tinerilor, cabinetul meu este un spațiu natural și deschis în care adolescenții și tinerii adulți se simt ascultați pe deplin, fără superioritate sau moralizări.
            </p>
          </div>
          <a
            href="#marturii-clienti"
            className="bg-[#FFF9F2] text-[#321C04] hover:bg-[#F6E4CF] px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer text-center"
          >
            Vezi poveștile de succes
          </a>
        </div>

      </div>
    </section>
  );
}
