"use client";

import { Users, Award, Gift, Clock, Handshake, Heart } from "lucide-react";

const elements = [
  {
    icon: Users,
    title: "Riprova sociale",
    text: "Già scelto da clienti Tecnocasa",
  },
  {
    icon: Award,
    title: "Autorità",
    text: "Consulenti dedicati – specializzati in utenze casa",
  },
  {
    icon: Gift,
    title: "Reciprocità",
    text: "Check bolletta gratuito",
  },
  {
    icon: Clock,
    title: "Scarsità",
    text: "Slot limitati settimanali per clienti Tecnocasa",
  },
  {
    icon: Handshake,
    title: "Impegno/coerenza",
    text: "Basta 1 foto bolletta per iniziare",
  },
  {
    icon: Heart,
    title: "Simpatia",
    text: "Tono umano: ti seguiamo noi",
  },
];

export function PersuasiveElements() {
  return (
    <section className="py-20 px-4 bg-dark-navy text-light-offwhite">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Perché sceglierci
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {elements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div
                key={index}
                className="bg-dark-slate rounded-xl p-6 border border-dark-slate hover:border-accent-primary transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-accent-primary">
                      {element.title}
                    </h3>
                    <p className="text-light-gray text-sm">{element.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Testimonials placeholder */}
        <div className="mt-16 bg-dark-slate rounded-xl p-8 border border-dark-slate">
          <h3 className="text-2xl font-bold text-center mb-8">
            Cosa dicono i clienti Tecnocasa
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-dark-charcoal rounded-lg p-6 border border-dark-slate"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-light-gray text-sm mb-4 italic">
                  "Servizio eccellente, risparmio reale e assistenza sempre
                  disponibile."
                </p>
                <p className="text-light-offwhite text-xs font-semibold">
                  Cliente Tecnocasa
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

