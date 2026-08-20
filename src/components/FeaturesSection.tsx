/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo.tsx";

interface Feature {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

const features: Feature[] = [
  {
    id: "feature-1",
    title: "Built for ease, not urgency",
    description:
      "Drift strips away the noise that makes organizing feel draining. Every surface is made to be soft, quiet, and intuitive so you can move forward, not get stuck decoding.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260702_102608_5fa1187d-9ac6-44fb-82ab-54376200abc0.mp4",
  },
  {
    id: "feature-2",
    title: "The gentlest way to start",
    description:
      "Beginning your day should feel natural, not daunting. Drift eases you into motion with subtle cues and a quiet view of what deserves your energy right now.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260625_174131_395bc785-bb21-4e65-abf6-27c56f0764b6.mp4",
  },
  {
    id: "feature-3",
    title: "Deep, undivided focus",
    description:
      "No interruptions, no clutter. Drift holds you in the present task with a stripped-back layout that softens all else until you are truly ready to shift.",
    videoUrl:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260525_052706_d2e390fd-1846-4fe7-a4d8-8d2f1c875358.mp4",
  },
];

interface FeaturesSectionProps {
  onStartForFree?: () => void;
}

export function FeaturesSection({ onStartForFree }: FeaturesSectionProps) {
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [revealedCards, setRevealedCards] = useState<boolean[]>([false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const cardElements = cardRefs.current;

    // Active detection observer (threshold: 0.6)
    const activeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardElements.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveFeatureIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    // Reveal animation observer (threshold: 0.15)
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardElements.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setRevealedCards((prev) => {
                if (prev[index]) return prev;
                const updated = [...prev];
                updated[index] = true;
                return updated;
              });
            }
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cardElements.forEach((el) => {
      if (el) {
        activeObserver.observe(el);
        revealObserver.observe(el);
      }
    });

    return () => {
      activeObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const scrollToCard = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="features-section"
      className="relative px-5 md:px-10 lg:px-16 py-20 md:py-40 lg:py-48 min-h-screen"
    >
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 w-full h-full -z-10 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: `url('https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85')`,
        }}
        aria-hidden="true"
      />

      {/* Dark tint overlay for legibility */}
      <div className="fixed inset-0 w-full h-full -z-10 bg-black/40 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[400px_1fr] xl:grid-cols-[460px_1fr] gap-16 lg:gap-24 xl:gap-48 relative z-10">
        {/* Left Column (Sticky on Desktop) */}
        <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between lg:py-32">
          {/* Top Heading */}
          <div>
            <h2 className="text-white text-2xl sm:text-3xl lg:text-[46px] leading-[1.15] font-normal tracking-tight" id="features-main-heading">
              Software that flows with your mind, not over it
            </h2>

            {/* Feature Nav Buttons (hidden below lg) */}
            <div className="hidden lg:flex flex-col gap-3 mt-10" id="features-nav-container">
              {features.map((feature, idx) => {
                const isActive = activeFeatureIndex === idx;
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={() => scrollToCard(idx)}
                    className={`text-left px-5 py-3.5 rounded-2xl text-sm xl:text-base font-medium transition-all duration-300 backdrop-blur-sm cursor-pointer border ${
                      isActive
                        ? "bg-black/25 text-white border-white/20 shadow-md"
                        : "bg-black/20 text-white/40 border-transparent hover:text-white/70 hover:bg-black/30"
                    }`}
                    id={`feature-nav-btn-${idx + 1}`}
                  >
                    {feature.title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA (hidden below lg) */}
          <div className="hidden lg:block pt-8">
            <div className="bg-black/25 backdrop-blur-md rounded-xl flex items-center justify-between pl-5 pr-1.5 py-1.5 gap-4 border border-white/10 shadow-lg">
              <span className="text-white text-xs md:text-sm font-medium leading-snug">
                No noise. No complicated systems. Just your day, gently sorted.
              </span>
              <button
                type="button"
                onClick={onStartForFree}
                className="bg-white text-black text-xs md:text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white/90 shrink-0 transition-colors cursor-pointer"
                id="features-sidebar-cta-btn"
              >
                Start for free
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Scrolling Cards) */}
        <div className="flex flex-col gap-12 md:gap-16 pb-20">
          {features.map((feature, index) => {
            const isRevealed = revealedCards[index];
            return (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                id={`feature-card-${index + 1}`}
                className={`bg-black/20 backdrop-blur-sm rounded-3xl p-6 md:p-10 flex flex-col gap-6 border border-white/10 transition-all duration-700 ease-out transform ${
                  isRevealed
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-16"
                }`}
              >
                {/* Logo */}
                <div className="flex items-center">
                  <Logo
                    size={40}
                    fill="rgba(255, 255, 255, 0.8)"
                    className="w-10 h-10"
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-white text-xl md:text-2xl font-medium" id={`feature-title-${index + 1}`}>
                  {feature.title}
                </h3>

                {/* Card Video */}
                <div className="aspect-video rounded-2xl overflow-hidden bg-black/30 w-full relative shadow-lg">
                  <video
                    src={feature.videoUrl}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Card Description */}
                <p className="text-white/60 font-medium text-sm md:text-base leading-relaxed" id={`feature-desc-${index + 1}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
