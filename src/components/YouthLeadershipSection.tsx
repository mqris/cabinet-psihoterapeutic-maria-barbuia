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
    <section id="tineret" className="py-20 md:py-28 bg-[#FFF9F2] relative z-10 border-t border-[#321C04]/5">
      {/* Anchor alias */}
      <div id="tineret-leadership" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with single-word badge */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E4CF] text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/10">
            <Sparkles size={14} />
            <span>Tineret</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Experiența din liceu &{" "}
            <em className="instrument-serif not-italic">leadership</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Gândirea critică, empatia profundă și devotamentul pentru oameni s-au clădit încă din anii de liceu prin dezbateri, robotică, voluntariat și diplomație europeană.
          </p>
        </div>

        {/* 6 Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {YOUTH_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="bg-[#F6E4CF]/40 rounded-3xl p-7 border border-[#321C04]/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF9F2] flex items-center justify-center transition-transform group-hover:scale-110 shadow-2xs">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#321C04]/70 bg-black/5 px-2.5 py-1 rounded-full">
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
                <div className="text-[11px] font-semibold text-[#321C04] flex items-start gap-1.5 leading-relaxed bg-[#FFF9F2] p-2.5 rounded-xl border border-[#321C04]/5">
                  <CheckCircle size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                  <span>{item.impact}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout without duplicate booking buttons */}
        <div className="mt-12 bg-[#321C04] rounded-3xl p-8 sm:p-10 text-[#FFF9F2] shadow-xl">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xl font-bold text-[#FFF9F2]">
              Un spațiu deschis pentru adolescenți și tineri adulți
            </h3>
            <p className="text-xs sm:text-sm text-[#FFF9F2]/85 leading-relaxed">
              Datorită experienței din Consiliul Elevilor și Parlamentul European al Tinerilor, cabinetul este un loc unde tinerii se simt cu adevărat ascultați și respectați, fără prejudecăți sau moralizări.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
