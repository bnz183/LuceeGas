"use client";

import { Zap, Shield, Heart } from "lucide-react";
import { Button } from "./ui/Button";
import { openWhatsApp, trackWhatsAppClick } from "@/lib/whatsapp";

const pacchetti = [
  {
    icon: Zap,
    title: "Check Bolletta Express",
    subtitle: "Lead magnet",
    features: [
      "Analisi rapida (5–10 min)",
      "Stima risparmio potenziale",
      "Scheda confronto semplice",
      "Costo annuo stimato",
      "Cosa cambia, tempi",
    ],
    cta: "Richiedi Check Gratuito",
    color: "accent-primary",
  },
  {
    icon: Shield,
    title: "Attivazione Protetta",
    subtitle: "Core",
    features: [
      "Gestione completa pratica",
      "Documenti, invio, conferma, monitoraggio",
      "Un unico referente WhatsApp/telefono",
      "Ti seguiamo fino alla prima bolletta",
    ],
    cta: "Attiva Servizio",
    color: "accent-secondary",
    featured: true,
  },
  {
    icon: Heart,
    title: "Assistenza Continuativa",
    subtitle: "Retention",
    features: [
      "Controllo annuale condizioni",
      "Alert su scadenze / variazioni",
      "Supporto problemi",
      "Letture, conguagli, reclami",
    ],
    cta: "Scopri di più",
    color: "accent-primary",
  },
];

export function Pacchetti() {
  const handleCTA = (packageName: string) => {
    trackWhatsAppClick();
    openWhatsApp(`Sono interessato al servizio: ${packageName}`);
  };

  return (
    <section className="py-20 px-4 bg-dark-charcoal text-light-offwhite">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Le nostre offerte
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pacchetti.map((pkg, index) => {
            const Icon = pkg.icon;
            return (
              <div
                key={index}
                className={`bg-dark-slate rounded-xl p-8 shadow-2xl border-2 ${
                  pkg.featured
                    ? "border-accent-secondary scale-105 md:scale-110"
                    : "border-dark-slate"
                } hover:border-accent-primary transition-all`}
              >
                {pkg.featured && (
                  <div className="text-center mb-4">
                    <span className="inline-block bg-accent-secondary text-white text-sm font-semibold px-4 py-1 rounded-full">
                      PIÙ POPOLARE
                    </span>
                  </div>
                )}
                <div className="flex flex-col items-center text-center space-y-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      pkg.color === "accent-primary"
                        ? "bg-accent-primary/20"
                        : "bg-accent-secondary/20"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        pkg.color === "accent-primary"
                          ? "text-accent-primary"
                          : "text-accent-secondary"
                      }`}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-light-gray mb-1">
                      {pkg.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold">{pkg.title}</h3>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent-secondary mt-1">✓</span>
                      <span className="text-light-gray text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.featured ? "secondary" : "primary"}
                  size="lg"
                  onClick={() => handleCTA(pkg.title)}
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

