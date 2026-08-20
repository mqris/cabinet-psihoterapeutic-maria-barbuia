/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Navbar } from "./components/Navbar.tsx";
import { HeroSection } from "./components/HeroSection.tsx";
import { AboutSection } from "./components/AboutSection.tsx";
import { VocationSection } from "./components/VocationSection.tsx";
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
      {/* Navigation Bar with top-level booking buttons */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Landing Hero */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* Secțiunea 1: Despre */}
        <AboutSection />

        {/* Secțiunea Vocație: De ce am ales psihoterapia */}
        <VocationSection />

        {/* Secțiunea Tineret: Experiență & Leadership */}
        <YouthLeadershipSection />

        {/* Secțiunea Sanctuar: Cabinet & Locație */}
        <SanctuaryLocationSection />

        {/* Secțiunea Mărturii: Povești reale de schimbare */}
        <TestimonialsSection />

        {/* Secțiunea Tarife & Pachet Fidelitate (-40%) */}
        <PricingSection onSelectPlan={() => handleOpenBooking("programare")} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        initialType={bookingModal.type}
        onClose={handleCloseBooking}
      />
    </div>
  );
}
