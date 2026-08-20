/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, Sparkles, ShieldCheck, HeartHandshake } from "lucide-react";
import { PRICING_PLANS, FIDELITY_PROGRAM } from "../data/cabinetData.ts";

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export function PricingSection({ onSelectPlan }: PricingSectionProps) {
  return (
    <section id="tarife" className="py-20 md:py-32 bg-[#F6E4CF] relative z-10 border-t border-[#321C04]/10">
      {/* Anchor alias */}
      <div id="tarife-sesiuni" className="absolute -top-20 left-0 w-0 h-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with single-word badge */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#321C04]/10 text-[#321C04] text-xs font-semibold uppercase tracking-widest border border-[#321C04]/15">
            <Sparkles size={14} />
            <span>Tarife</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#321C04] tracking-tight leading-tight">
            Transparență, predictibilitate și{" "}
            <em className="instrument-serif not-italic">reducere de 40%</em>
          </h2>
          <p className="text-base text-[#321C04]/80 leading-relaxed max-w-2xl mx-auto">
            {FIDELITY_PROGRAM.description}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-3xl p-8 transition-all flex flex-col justify-between relative ${
                plan.popular
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-2xl scale-102 border-2 border-[#D9C4AA]"
                  : "bg-[#FFF9F2] text-[#321C04] border border-[#321C04]/10 shadow-sm hover:shadow-md"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-[#321C04] font-bold text-[11px] uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md whitespace-nowrap">
                  Recomandat pentru procesare profundă
                </div>
              )}

              <div>
                {/* Title & Duration */}
                <div className="mb-6">
                  <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-[#321C04]"}`}>
                    {plan.title}
                  </h3>
                  <div className={`text-xs font-medium ${plan.popular ? "text-white/70" : "text-[#321C04]/70"}`}>
                    {plan.duration}
                  </div>
                  <p className={`text-xs mt-2 ${plan.popular ? "text-white/80" : "text-[#321C04]/80"} leading-relaxed`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-current/10">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      {plan.standardPrice} LEI
                    </span>
                    <span className={`text-xs font-semibold ${plan.popular ? "text-white/60" : "text-[#321C04]/60"}`}>
                      / sesiune standard
                    </span>
                  </div>

                  {/* Fidelity discount rate */}
                  <div className={`mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg ${
                    plan.popular
                      ? "text-amber-300 bg-amber-950/60"
                      : "text-emerald-800 bg-emerald-100"
                  }`}>
                    <Sparkles size={13} />
                    <span>{plan.fidelityPrice} LEI cu Fidelitate (-40%)</span>
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-3 mb-8 text-xs sm:text-sm">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className={`shrink-0 mt-0.5 ${plan.popular ? "text-amber-400" : "text-emerald-700"}`}
                      />
                      <span className={plan.popular ? "text-white/90" : "text-[#321C04]/85"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectPlan(plan.id)}
                className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm text-center ${
                  plan.popular
                    ? "bg-[#FFF9F2] text-[#321C04] hover:bg-white hover:shadow-lg"
                    : "bg-[#321C04] text-[#FFF9F2] hover:bg-[#1F1003]"
                }`}
              >
                {plan.popular ? "Selectează Sesiunea Extinsă" : "Selectează Sesiunea Standard"}
              </button>
            </div>
          ))}
        </div>

        {/* Fidelity program explanation box */}
        <div className="mt-12 max-w-4xl mx-auto bg-[#FFF9F2] rounded-3xl p-7 sm:p-8 border border-[#321C04]/10 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5 text-sm font-bold text-[#321C04]">
            <HeartHandshake size={18} className="text-[#321C04]" />
            <span>Cum funcționează reducerea de 40%?</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FIDELITY_PROGRAM.rules.map((rule, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-[#F6E4CF]/40 border border-[#321C04]/5">
                <div className="text-xs font-bold text-[#321C04] mb-1">{rule.title}</div>
                <p className="text-xs text-[#321C04]/80 leading-relaxed">{rule.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Financial Guarantee Note */}
        <div className="mt-8 max-w-2xl mx-auto text-center space-y-1 text-xs text-[#321C04]/70">
          <div className="flex items-center justify-center gap-2 font-semibold text-[#321C04]">
            <ShieldCheck size={16} className="text-emerald-800" />
            <span>Factură fiscală & Decontare pe bază de atestat Colegiul Psihologilor</span>
          </div>
          <p>Fără costuri ascunse. Reprogramarea este gratuită cu minimum 24 de ore înainte.</p>
        </div>

      </div>
    </section>
  );
}
