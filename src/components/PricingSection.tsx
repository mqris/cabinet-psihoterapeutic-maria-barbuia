/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Check, Sparkles, Calendar, HelpCircle, ShieldCheck, HeartHandshake, Percent, Calculator } from "lucide-react";
import { PRICING_PLANS, FIDELITY_PROGRAM } from "../data/cabinetData.ts";

interface PricingSectionProps {
  onOpenBooking: (type: "programare" | "cunoastere") => void;
}

export function PricingSection({ onOpenBooking }: PricingSectionProps) {
  const [isFidelityView, setIsFidelityView] = useState(false);
  const [calculatorSessions, setCalculatorSessions] = useState(4);

  // Calculate investment
  const standardMonthly = calculatorSessions * 300;
  const fidelityMonthly = calculatorSessions * 180;
  const savings = standardMonthly - fidelityMonthly;

  return (
    <section id="tarife-sesiuni" className="py-20 md:py-32 bg-[#FFF9F2] relative z-10 border-t border-[#321C04]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F6E4CF] text-[#321C04] text-xs font-semibold uppercase tracking-widest">
            <Percent size={14} />
            <span>Investiția în Tine & Transparență</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Tarife etice și un program de{" "}
            <em className="instrument-serif not-italic">fidelitate sustenabil</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            Terapia funcționează cel mai bine prin consecvență. De aceea, răsplătesc implicarea ta pe termen mediu și lung printr-o reducere substanțială de 40%.
          </p>
        </div>

        {/* Toggle between Standard & Fidelity prices */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#F6E4CF]/60 p-1.5 rounded-2xl border border-[#321C04]/10 inline-flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsFidelityView(false)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                !isFidelityView
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04]"
              }`}
            >
              Tarife Standard
            </button>
            <button
              type="button"
              onClick={() => setIsFidelityView(true)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                isFidelityView
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04]"
              }`}
            >
              <span>Program Fidelitate (-40%)</span>
              <span className="bg-emerald-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                Redus
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {PRICING_PLANS.map((plan) => {
            const currentPrice = isFidelityView ? plan.fidelityPrice : plan.standardPrice;
            const originalPrice = plan.standardPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 sm:p-10 border transition-all flex flex-col justify-between relative ${
                  plan.popular
                    ? "bg-[#F6E4CF] border-[#321C04]/20 shadow-lg scale-102"
                    : "bg-white border-[#321C04]/10 shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#321C04] text-[#FFF9F2] text-[11px] uppercase font-bold tracking-widest px-4 py-1 rounded-full shadow-sm">
                    Recomandat pentru Terapie Aprofundată
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-[#321C04]">{plan.title}</h3>
                    <span className="text-xs font-semibold text-[#321C04]/70 bg-black/5 px-3 py-1 rounded-full">
                      {plan.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#321C04]/80 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price display */}
                  <div className="mb-8 pb-6 border-b border-[#321C04]/10">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-black text-[#321C04] tracking-tight">
                        {currentPrice} LEI
                      </span>
                      <span className="text-xs text-[#321C04]/70 font-semibold uppercase">
                        / sesiune
                      </span>
                    </div>

                    {isFidelityView && (
                      <div className="mt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
                        <span className="line-through text-[#321C04]/50">{originalPrice} LEI</span>
                        <span>Economisești {originalPrice - currentPrice} LEI (40% reducere)</span>
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#321C04]/60 block">
                      Ce include sesiunea:
                    </span>
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#321C04]/90">
                        <Check size={16} className="text-emerald-700 shrink-0 mt-0.5 font-bold" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking("programare")}
                  className={`w-full py-3.5 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md ${
                    plan.popular
                      ? "bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2]"
                      : "bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2]"
                  }`}
                >
                  <Calendar size={16} />
                  <span>Programează această sesiune</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Detailed Fidelity & Return Policy Explained */}
        <div className="bg-[#F6E4CF] rounded-3xl p-8 sm:p-12 border border-[#321C04]/10 max-w-4xl mx-auto space-y-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#321C04] text-white flex items-center justify-center shrink-0">
              <HeartHandshake size={24} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#321C04]">
                Cum funcționează reducerea de 40% (Fidelitate & Revenire)
              </h3>
              <p className="text-xs sm:text-sm text-[#321C04]/70">
                Transparență absolută fără condiții ascunse
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FIDELITY_PROGRAM.rules.map((rule, idx) => (
              <div key={idx} className="bg-white/80 rounded-2xl p-6 border border-[#321C04]/5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-[#321C04]">
                  <span className="w-6 h-6 rounded-full bg-[#321C04] text-white text-xs flex items-center justify-center font-bold">
                    {idx + 1}
                  </span>
                  <span>{rule.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#321C04]/80 leading-relaxed">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Interactive Calculator for monthly continuity */}
          <div className="bg-[#321C04] text-[#FFF9F2] rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D9C4AA]">
              <Calculator size={16} />
              <span>Simulator de Investiție Lunară</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3">
                <label className="text-sm font-medium text-white block">
                  Număr estimat de sesiuni de 1 oră pe lună: <strong>{calculatorSessions} sesiuni</strong>
                </label>
                <input
                  type="range"
                  min={2}
                  max={8}
                  step={1}
                  value={calculatorSessions}
                  onChange={(e) => setCalculatorSessions(Number(e.target.value))}
                  className="w-full accent-[#D9C4AA] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-white/60 font-semibold">
                  <span>2 sesiuni/lună</span>
                  <span>4 sesiuni/lună (frecvență optimă)</span>
                  <span>8 sesiuni/lună</span>
                </div>
              </div>

              <div className="sm:col-span-5 bg-white/10 rounded-xl p-4 border border-white/10 text-center sm:text-right">
                <div className="text-xs text-white/70">Cost lunar cu reducerea de 40%:</div>
                <div className="text-2xl sm:text-3xl font-black text-[#D9C4AA] mt-1">
                  {fidelityMonthly} LEI
                </div>
                <div className="text-[11px] text-emerald-300 font-semibold mt-1">
                  Economisești {savings} LEI / lună
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
