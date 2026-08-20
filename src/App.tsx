/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { YouthLeadershipSection } from "./components/YouthLeadershipSection.tsx";
import { SanctuaryLocationSection } from "./components/SanctuaryLocationSection.tsx";
import { TestimonialsSection } from "./components/TestimonialsSection.tsx";
import { PricingSection } from "./components/PricingSection.tsx";
import { BookingModal } from "./components/BookingModal.tsx";
import { Footer } from "./components/Footer.tsx";

export default function App() {
  const [bookingModal, setBookingModal] = useState<{
    isOpen: boolean;
    type: "programare" | "cunoastere";
  }>({
    isOpen: false,
    type: "programare",
  });

  const handleOpenBooking = (type: "programare" | "cunoastere") => {
    setBookingModal({
      isOpen: true,
      type,
    });
  };

  const handleCloseBooking = () => {
    setBookingModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="w-full relative min-h-screen bg-[#FFF9F2] text-[#321C04] selection:bg-[#F6E4CF] selection:text-[#321C04] font-sans antialiased overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Landing Hero */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Secțiunea 1: Despre Psihologul Maria Barbuia, UBB, Doctorat, De ce Psihoterapia & Etapele Acreditării */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Secțiune Separată: Experiența de Liceu, Olimpiade, Robotică EngiNeerds, FJT, Interact, Consiliul Elevilor, EYP & CTR */}
        <YouthLeadershipSection />

        {/* Secțiunea 2 - Partea A: Locația Cabinetului & Sanctuar de Liniște pentru Tineri și Adulți */}
        <SanctuaryLocationSection onOpenBooking={handleOpenBooking} />

        {/* Secțiunea 2 - Partea B: Feedback Servicii / Mărturii (ADHD, Depresie/Anxietate, Traume vechi la bătrânețe) */}
        <TestimonialsSection onOpenBooking={handleOpenBooking} />

        {/* Secțiune Tarife & Reducere de 40% Fidelitate / Revenire */}
        <PricingSection onOpenBooking={handleOpenBooking} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking & Discovery Modal ("Programează o sesiune" / "Hai să ne cunoaștem") */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        initialType={bookingModal.type}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
