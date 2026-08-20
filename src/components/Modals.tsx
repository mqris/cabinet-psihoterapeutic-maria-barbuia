/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { X, Check, ArrowRight, Sparkles } from "lucide-react";
import { Logo } from "./Logo.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "start" | "hello" | "stay-informed" | "custom";
  title?: string;
  description?: string;
}

export function Modals({ isOpen, onClose, type, title, description }: ModalProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
      setMessage("");
      onClose();
    }, 2000);
  };

  const renderContent = () => {
    if (submitted) {
      return (
        <div className="py-8 flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center mb-4">
            <Check size={24} />
          </div>
          <h3 className="text-xl font-medium text-[#321C04] mb-2">You're on the list</h3>
          <p className="text-sm text-[#321C04]/70 max-w-xs">
            We will be in touch gently when your invite is ready.
          </p>
        </div>
      );
    }

    if (type === "start") {
      return (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#321C04]/10 rounded-xl">
              <Sparkles size={20} className="text-[#321C04]" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#321C04]">Experience Drift</h3>
              <p className="text-xs text-[#321C04]/70">Begin your calm, ADHD-friendly journey</p>
            </div>
          </div>
          <p className="text-sm text-[#321C04]/80 mb-6 leading-relaxed">
            Join early access to try the daily focus views and gentle task flow without overwhelm.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/30"
            />
            <button
              type="submit"
              className="w-full bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Get Free Early Access</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      );
    }

    if (type === "hello") {
      return (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={28} className="w-7 h-7" />
            <div>
              <h3 className="text-xl font-medium text-[#321C04]">Say Hello</h3>
              <p className="text-xs text-[#321C04]/70">We love hearing from thoughtful minds</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/30"
            />
            <textarea
              required
              rows={3}
              placeholder="How can we help your workflow?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/30 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Send Note</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      );
    }

    if (type === "stay-informed") {
      return (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#321C04]/10 rounded-xl">
              <Sparkles size={20} className="text-[#321C04]" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-[#321C04]">Stay Informed</h3>
              <p className="text-xs text-[#321C04]/70">Gentle updates, no spam</p>
            </div>
          </div>
          <p className="text-sm text-[#321C04]/80 mb-6 leading-relaxed">
            Receive occasional field notes about neurodiversity, focus craft, and upcoming releases.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-white border border-[#321C04]/15 text-sm text-[#321C04] placeholder:text-[#321C04]/40 focus:outline-none focus:ring-2 focus:ring-[#321C04]/30"
            />
            <button
              type="submit"
              className="w-full bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] font-medium text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Subscribe to Updates</span>
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      );
    }

    return (
      <div>
        <h3 className="text-xl font-medium text-[#321C04] mb-3">{title || "Information"}</h3>
        <p className="text-sm text-[#321C04]/80 leading-relaxed mb-6">{description}</p>
        <button
          type="button"
          onClick={onClose}
          className="w-full bg-[#321C04] hover:bg-[#1F1003] text-[#FFF9F2] font-medium text-sm py-2.5 rounded-xl transition-colors cursor-pointer"
        >
          Close
        </button>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in-down"
      onClick={onClose}
      id="modal-overlay"
    >
      <div
        className="bg-[#FFF9F2] rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl relative border border-[#321C04]/10"
        onClick={(e) => e.stopPropagation()}
        id="modal-content"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#321C04]/60 hover:text-[#321C04] transition-colors rounded-full hover:bg-black/5 cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>
        {renderContent()}
      </div>
    </div>
  );
}
