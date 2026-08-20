/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { X, Calendar, MessageSquareHeart, Clock, MapPin, CheckCircle2, ShieldCheck, HeartHandshake, Phone, Mail, User } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  initialType?: "programare" | "cunoastere";
  onClose: () => void;
}

export function BookingModal({ isOpen, initialType = "programare", onClose }: BookingModalProps) {
  const [activeTab, setActiveTab] = useState<"programare" | "cunoastere">(initialType);
  const [sessionDuration, setSessionDuration] = useState<"1h" | "2h">("1h");
  const [sessionFormat, setSessionFormat] = useState<"cabinet" | "online">("cabinet");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    preferredDate: "",
    preferredTime: "dimineata",
    reason: "",
    hasPriorTherapy: "nu",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setActiveTab(initialType);
    setIsSubmitted(false);
  }, [initialType, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#FFF9F2] rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#321C04]/10 relative animate-scale-up"
        id="booking-modal-container"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6E4CF] hover:bg-[#D9C4AA] text-[#321C04] flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Închide fereastra"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#F6E4CF] border-b border-[#321C04]/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-10 h-10 rounded-2xl bg-[#321C04] text-[#FFF9F2] flex items-center justify-center font-bold text-sm">
              MB
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#321C04]">
                Cabinet Dr. Maria Barbuia
              </h2>
              <p className="text-xs text-[#321C04]/70">Psihoterapeut & Doctor în Psihologie</p>
            </div>
          </div>

          {/* Toggle Type */}
          <div className="flex bg-white/70 p-1 rounded-2xl border border-[#321C04]/10 mt-5">
            <button
              type="button"
              onClick={() => {
                setActiveTab("programare");
                setIsSubmitted(false);
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "programare"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04]"
              }`}
            >
              <Calendar size={15} />
              <span>Programează o sesiune</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveTab("cunoastere");
                setIsSubmitted(false);
              }}
              className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === "cunoastere"
                  ? "bg-[#321C04] text-[#FFF9F2] shadow-sm"
                  : "text-[#321C04]/70 hover:text-[#321C04]"
              }`}
            >
              <MessageSquareHeart size={15} />
              <span>Hai să ne cunoaștem (Intro)</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#321C04]">
                  Solicitarea ta a fost primită cu drag!
                </h3>
                <p className="text-sm text-[#321C04]/80 max-w-md mx-auto leading-relaxed">
                  Îți mulțumesc pentru încredere, {formData.name || "dragă vizitator"}. Voi reveni personal către tine prin telefon sau email în cel mult 24 de ore pentru a confirma detaliile sesiunii.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6E4CF]/60 text-xs text-[#321C04]/90 max-w-md mx-auto text-left space-y-1.5 border border-[#321C04]/10">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-emerald-700" />
                  <span>Confidențialitate garantată</span>
                </div>
                <p>
                  Toate informațiile transmise sunt protejate prin secret profesional conform normelor Colegiului Psihologilor din România.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="bg-[#321C04] text-[#FFF9F2] px-8 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider hover:bg-[#1F1003] transition-colors cursor-pointer mt-4"
              >
                Închide fereastra
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === "cunoastere" && (
                <div className="p-4 rounded-2xl bg-[#F6E4CF]/60 border border-[#321C04]/10 text-xs text-[#321C04]/90 space-y-1">
                  <div className="font-bold text-sm text-[#321C04] flex items-center gap-1.5">
                    <HeartHandshake size={16} />
                    <span>Discuție preliminară de 15 minute (Fără costuri)</span>
                  </div>
                  <p className="leading-relaxed">
                    Dacă ai întrebări despre abordare, despre ADHD sau despre cum te pot ajuta cel mai bine, stabilim o scurtă convorbire video sau telefonică pentru a ne cunoaște.
                  </p>
                </div>
              )}

              {/* Format & Duration selectors (Only for full booking) */}
              {activeTab === "programare" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-2">
                      Durata Sesiunii
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSessionDuration("1h")}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          sessionDuration === "1h"
                            ? "bg-[#321C04] text-[#FFF9F2] border-[#321C04]"
                            : "bg-white text-[#321C04] border-[#321C04]/10 hover:bg-[#F6E4CF]/40"
                        }`}
                      >
                        <div className="text-xs font-bold">1 Oră</div>
                        <div className="text-[11px] opacity-80">300 LEI</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSessionDuration("2h")}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          sessionDuration === "2h"
                            ? "bg-[#321C04] text-[#FFF9F2] border-[#321C04]"
                            : "bg-white text-[#321C04] border-[#321C04]/10 hover:bg-[#F6E4CF]/40"
                        }`}
                      >
                        <div className="text-xs font-bold">2 Ore (Extins)</div>
                        <div className="text-[11px] opacity-80">500 LEI</div>
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-2">
                      Format Sesiune
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSessionFormat("cabinet")}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          sessionFormat === "cabinet"
                            ? "bg-[#321C04] text-[#FFF9F2] border-[#321C04]"
                            : "bg-white text-[#321C04] border-[#321C04]/10 hover:bg-[#F6E4CF]/40"
                        }`}
                      >
                        <div className="text-xs font-bold">La Cabinet</div>
                        <div className="text-[11px] opacity-80">Cluj-Napoca</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSessionFormat("online")}
                        className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                          sessionFormat === "online"
                            ? "bg-[#321C04] text-[#FFF9F2] border-[#321C04]"
                            : "bg-white text-[#321C04] border-[#321C04]/10 hover:bg-[#F6E4CF]/40"
                        }`}
                      >
                        <div className="text-xs font-bold">Online Securizat</div>
                        <div className="text-[11px] opacity-80">Zoom / Meet</div>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-1.5">
                    Nume și Prenume *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#321C04]/40" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Popescu"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#321C04]/15 bg-white text-sm text-[#321C04] focus:outline-none focus:border-[#321C04]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-1.5">
                    Număr de Telefon *
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#321C04]/40" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07xx xxx xxx"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#321C04]/15 bg-white text-sm text-[#321C04] focus:outline-none focus:border-[#321C04]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-1.5">
                    Adresă de Email *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#321C04]/40" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="adresa@exemplu.ro"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#321C04]/15 bg-white text-sm text-[#321C04] focus:outline-none focus:border-[#321C04]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-1.5">
                    Interval Orar Preferat
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#321C04]/15 bg-white text-sm text-[#321C04] focus:outline-none focus:border-[#321C04]"
                  >
                    <option value="dimineata">Dimineața (09:00 - 13:00)</option>
                    <option value="dupa-amiaza">După-amiaza (13:00 - 17:00)</option>
                    <option value="seara">Seara (17:00 - 20:00)</option>
                    <option value="sambata">Sâmbăta (10:00 - 15:00)</option>
                  </select>
                </div>
              </div>

              {/* Reason / Context */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-[#321C04] block mb-1.5">
                  Cu ce gând sau provocare vii la mine? (Opțional)
                </label>
                <textarea
                  rows={3}
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  placeholder="Ex: Dificultăți de concentrare / ADHD, stări de anxietate, epuizare emoțională, dorință de autocunoaștere..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#321C04]/15 bg-white text-sm text-[#321C04] focus:outline-none focus:border-[#321C04]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] py-4 rounded-2xl text-sm font-bold uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar size={18} />
                  <span>
                    {activeTab === "programare"
                      ? "Trimite cererea de programare"
                      : "Trimite solicitarea pentru discuția introductivă"}
                  </span>
                </button>
                <p className="text-center text-[11px] text-[#321C04]/60 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-700" />
                  <span>Răspuns garantat în maximum 24 de ore lucrătoare</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
