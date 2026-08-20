/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { X, Calendar, MessageSquareHeart, ShieldCheck, HeartHandshake, Phone, Mail, User, Send, CheckCircle2 } from "lucide-react";

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

    const subject = encodeURIComponent(
      activeTab === "programare"
        ? `[Programare Sesiune] ${formData.name || "Client nou"} - Cabinet Dr. Maria Barbuia`
        : `[Hai să ne cunoaștem - 15 min] ${formData.name || "Client nou"}`
    );

    const bodyText = encodeURIComponent(
      `Buna ziua Dr. Maria Barbuia,\n\nDoresc sa transmit urmatoarea solicitare de programare:\n\n` +
      `Tip solicitare: ${activeTab === "programare" ? "Programare Sesiune Terapeutica" : "Discutie introductiva (15 min gratuit)"}\n` +
      `Nume si Prenume: ${formData.name}\n` +
      `Telefon: ${formData.phone}\n` +
      `Email: ${formData.email}\n` +
      (activeTab === "programare" ? `Format sesiune: ${sessionFormat === "cabinet" ? "La Cabinet (Cluj-Napoca)" : "Online (Zoom / Meet)"}\n` : "") +
      (activeTab === "programare" ? `Durata sesiune: ${sessionDuration === "1h" ? "1 Ora (300 LEI)" : "2 Ore (500 LEI)"}\n` : "") +
      `Interval orar preferat: ${formData.preferredTime}\n` +
      (formData.reason ? `Mesaj / Provocare: ${formData.reason}\n` : "") +
      `\nVa multumesc!`
    );

    // Trigger mailto directly to barbuiamaria@gmail.com
    const mailtoUrl = `mailto:barbuiamaria@gmail.com?subject=${subject}&body=${bodyText}`;
    try {
      window.location.href = mailtoUrl;
    } catch {
      // fallback
    }
  };

  const openDirectGmail = () => {
    const subject = encodeURIComponent(
      activeTab === "programare"
        ? `[Programare Sesiune] ${formData.name || "Client nou"}`
        : `[Hai să ne cunoaștem] ${formData.name || "Client nou"}`
    );
    const body = encodeURIComponent(
      `Buna ziua Dr. Maria Barbuia,\n\nNume: ${formData.name}\nTelefon: ${formData.phone}\nEmail: ${formData.email}\nInterval: ${formData.preferredTime}\nMesaj: ${formData.reason}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=barbuiamaria@gmail.com&su=${subject}&body=${body}`,
      "_blank"
    );
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
              <p className="text-xs text-[#321C04]/70">barbuiamaria@gmail.com • Psihoterapie & Științe Cognitive</p>
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
              <span>Hai să ne cunoaștem</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 size={36} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#321C04]">
                  Solicitarea ta a fost transmisă!
                </h3>
                <p className="text-sm text-[#321C04]/85 max-w-md mx-auto leading-relaxed">
                  Mesajul ajunge direct la <strong>barbuiamaria@gmail.com</strong>. Îți mulțumesc pentru încredere, {formData.name || "dragă vizitator"}. Voi reveni personal către tine în cel mult 24 de ore.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={openDirectGmail}
                  className="bg-[#D9C4AA] hover:bg-[#CEBA9E] text-[#321C04] px-5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Mail size={15} />
                  <span>Deschide în Gmail (barbuiamaria@gmail.com)</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-[#321C04] text-[#FFF9F2] px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-[#1F1003] transition-colors cursor-pointer"
                >
                  Închide fereastra
                </button>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6E4CF]/60 text-xs text-[#321C04]/90 max-w-md mx-auto text-left space-y-1.5 border border-[#321C04]/10 mt-4">
                <div className="font-bold flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-emerald-700" />
                  <span>Confidențialitate garantată CPR</span>
                </div>
                <p>
                  Toate datele tale sunt tratate strict conform secretului profesional al Colegiului Psihologilor din România.
                </p>
              </div>
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
                    Dacă ai întrebări despre abordare, despre ADHD sau despre cum te pot sprijini cel mai bine, stabilim o scurtă convorbire video sau telefonică pentru a ne cunoaște.
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
                  <Send size={16} />
                  <span>
                    {activeTab === "programare"
                      ? "Trimite cererea de programare către barbuiamaria@gmail.com"
                      : "Trimite solicitarea pentru discuția introductivă"}
                  </span>
                </button>
                <p className="text-center text-[11px] text-[#321C04]/60 mt-3 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={13} className="text-emerald-700" />
                  <span>Programările ajung direct la Dr. Maria Barbuia (barbuiamaria@gmail.com)</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
