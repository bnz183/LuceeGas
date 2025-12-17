"use client";

import { MessageSquare, Clock, FileCheck, CheckCircle2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Invia contatto / richiesta",
    description: "WhatsApp o form",
  },
  {
    icon: Clock,
    title: "Ti rispondiamo entro 2 ore",
    description: "Risposta rapida garantita",
  },
  {
    icon: FileCheck,
    title: "Gestiamo tutta la pratica",
    description: "Documenti, invio, conferma",
  },
  {
    icon: CheckCircle2,
    title: "Ti seguiamo fino alla prima bolletta",
    description: "+ check programmato",
  },
];

export function ComeFunziona() {
  return (
    <section className="py-20 px-4 bg-light-offwhite text-dark-navy">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Come funziona
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-light-gray"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 bg-accent-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <div className="text-2xl font-bold text-dark-navy mb-2">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-dark-navy">
                    {step.title}
                  </h3>
                  <p className="text-dark-slate text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

