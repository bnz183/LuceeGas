"use client";

import { Button } from "./ui/Button";
import { MessageCircle, Clock } from "lucide-react";
import { openWhatsApp, trackWhatsAppClick } from "@/lib/whatsapp";
import { LeadForm } from "./LeadForm";

export function FinalCTA() {
  const handleWhatsApp = () => {
    trackWhatsAppClick();
    openWhatsApp();
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-dark-navy via-dark-charcoal to-dark-slate text-light-offwhite">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Inizia subito
          </h2>
          <p className="text-xl text-light-gray mb-8">
            Slot limitati settimanali per clienti Tecnocasa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              variant="primary"
              size="lg"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto min-w-[280px]"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Scrivici su WhatsApp
            </Button>
            <div className="flex items-center gap-2 text-light-gray text-sm">
              <Clock className="w-4 h-4" />
              <span>Risposta entro 2 ore</span>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}

