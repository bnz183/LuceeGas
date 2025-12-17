"use client";

import { MessageCircle, Phone } from "lucide-react";
import { openWhatsApp, trackWhatsAppClick } from "@/lib/whatsapp";
import { config } from "@/lib/config";

export function StickyMobileCTA() {
  const handleWhatsApp = () => {
    trackWhatsAppClick();
    openWhatsApp();
  };

  const handleCall = () => {
    window.location.href = `tel:${config.phone.number}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-dark-navy border-t border-dark-slate p-4 sm:hidden shadow-2xl">
      <div className="flex gap-3">
        <button
          onClick={handleWhatsApp}
          className="flex-1 bg-accent-primary text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </button>
        <button
          onClick={handleCall}
          className="flex-1 bg-accent-secondary text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-600 transition-colors"
        >
          <Phone className="w-5 h-5" />
          Chiama
        </button>
      </div>
    </div>
  );
}

