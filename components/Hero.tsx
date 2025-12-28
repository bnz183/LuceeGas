"use client";

import { Button } from "./ui/Button";
import { Check, MessageCircle, Phone } from "lucide-react";
import { openWhatsApp, trackWhatsAppClick } from "@/lib/whatsapp";
import { config } from "@/lib/config";

export function Hero() {
  const handleWhatsApp = () => {
    trackWhatsAppClick();
    openWhatsApp();
  };

  const handleCheckBolletta = () => {
    trackWhatsAppClick();
    openWhatsApp("Vorrei fare il Check Bolletta Gratuito");
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-light-offwhite px-4 py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/tecnocasa-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/85 via-dark-charcoal/80 to-dark-slate/85 z-0"></div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
          LUCE & GAS
          <br />
          <span className="text-accent-primary">CONSULENTE PERSONALE</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-light-gray font-medium">
          Servizio dedicato ai clienti Tecnocasa
        </p>

        {/* 3 Bullets */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-start sm:items-center mt-12">
          <div className="flex items-center gap-3 text-lg">
            <Check className="w-6 h-6 text-accent-secondary flex-shrink-0" />
            <span>Risparmio e chiarezza in bolletta</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Check className="w-6 h-6 text-accent-secondary flex-shrink-0" />
            <span>Attivazioni / volture / subentri senza stress</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <Check className="w-6 h-6 text-accent-secondary flex-shrink-0" />
            <span>Un referente unico fino alla prima bolletta</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <Button
            variant="primary"
            size="lg"
            onClick={handleWhatsApp}
            className="w-full sm:w-auto min-w-[280px]"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Scrivici su WhatsApp (slot limitati)
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={handleCheckBolletta}
            className="w-full sm:w-auto min-w-[280px]"
          >
            Fai il Check Bolletta Gratuito
          </Button>
        </div>

        {/* Micro-trust line */}
        <p className="text-light-gray text-sm sm:text-base mt-6">
          Basta 1 foto della bolletta per iniziare.
        </p>
      </div>
    </section>
  );
}

