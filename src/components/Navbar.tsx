/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Sparkles, Calendar, MessageSquareHeart, Menu, X, Phone, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenBooking: (type: "programare" | "cunoastere") => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF9F2]/95 backdrop-blur-md shadow-sm border-b border-[#321C04]/10 py-3"
          : "bg-transparent py-5"
      }`}
      id="main-header"
      ref={menuRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a
          href="#"
          className="flex items-center gap-3 group"
          id="nav-brand-link"
        >
          <div className="w-10 h-10 rounded-full bg-[#321C04] text-[#FFF9F2] flex items-center justify-center font-serif text-xl font-bold shadow-sm transition-transform group-hover:scale-105">
            M
          </div>
          <div className="flex flex-col">
            <span
              className={`font-semibold tracking-tight text-base sm:text-lg transition-colors ${
                scrolled ? "text-[#321C04]" : "text-[#321C04]"
              }`}
            >
              Dr. Maria Barbuia
            </span>
            <span className="text-[11px] tracking-wide text-[#321C04]/70 flex items-center gap-1 font-medium">
              <ShieldCheck size={12} className="text-emerald-700 inline" />
              Cabinet Psihoterapie & Științe Cognitive
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7" id="desktop-navigation">
          <button
            type="button"
            onClick={() => scrollTo("despre-mine")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Despre Mine
          </button>
          <button
            type="button"
            onClick={() => scrollTo("de-ce-psihoterapie")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            De Ce Psihoterapie
          </button>
          <button
            type="button"
            onClick={() => scrollTo("tineret-leadership")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Experiență Tineret
          </button>
          <button
            type="button"
            onClick={() => scrollTo("marturii-clienti")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Mărturii & Feedback
          </button>
          <button
            type="button"
            onClick={() => scrollTo("locatie-cabinet")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Cabinet & Sanctuar
          </button>
          <button
            type="button"
            onClick={() => scrollTo("tarife-sesiuni")}
            className="text-xs uppercase tracking-wider font-semibold text-[#321C04]/80 hover:text-[#321C04] transition-colors cursor-pointer"
          >
            Tarife
          </button>
        </nav>

        {/* Quick Action Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenBooking("cunoastere")}
            className="bg-[#D9C4AA]/70 hover:bg-[#D9C4AA] text-[#321C04] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 border border-[#321C04]/10"
            id="nav-btn-cunoastere"
          >
            <MessageSquareHeart size={14} />
            <span>Hai să ne cunoaștem</span>
          </button>
          <button
            type="button"
            onClick={() => onOpenBooking("programare")}
            className="bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow-sm hover:shadow-md cursor-pointer flex items-center gap-2"
            id="nav-btn-programare"
          >
            <Calendar size={14} />
            <span>Programează</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl text-[#321C04] hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Meniu principal"
          id="mobile-nav-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          className="lg:hidden bg-[#FFF9F2] border-b border-[#321C04]/10 px-6 py-6 shadow-xl animate-fade-in-down"
          id="mobile-nav-menu"
        >
          <div className="flex flex-col gap-4 mb-6">
            <button
              type="button"
              onClick={() => scrollTo("despre-mine")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              Despre Mine (Dr. Maria Barbuia)
            </button>
            <button
              type="button"
              onClick={() => scrollTo("de-ce-psihoterapie")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              De Ce Am Ales Psihoterapia
            </button>
            <button
              type="button"
              onClick={() => scrollTo("tineret-leadership")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              Experiență din Liceu & Leadership
            </button>
            <button
              type="button"
              onClick={() => scrollTo("marturii-clienti")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              Mărturii & Cazuri Vindecate
            </button>
            <button
              type="button"
              onClick={() => scrollTo("locatie-cabinet")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              Cabinet & Atmosferă
            </button>
            <button
              type="button"
              onClick={() => scrollTo("tarife-sesiuni")}
              className="text-left text-sm font-semibold text-[#321C04] py-2 border-b border-[#321C04]/5 cursor-pointer"
            >
              Tarife & Reducere Fidelitate 40%
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking("programare");
              }}
              className="w-full bg-[#321C04] text-[#FFF9F2] py-3 rounded-xl font-medium text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Calendar size={16} />
              <span>Programează o sesiune</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking("cunoastere");
              }}
              className="w-full bg-[#D9C4AA] text-[#321C04] py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquareHeart size={16} />
              <span>Hai să ne cunoaștem (Intro)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
