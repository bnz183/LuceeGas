"use client";

import { FileText, CreditCard, Building2, Shield } from "lucide-react";

const items = [
  {
    icon: FileText,
    text: "Documento + codice fiscale",
  },
  {
    icon: Building2,
    text: "POD/PDR (se disponibili)",
  },
  {
    icon: CreditCard,
    text: "IBAN (se domiciliazione)",
  },
];

export function CosaServe() {
  return (
    <section className="py-20 px-4 bg-light-offwhite text-dark-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Cosa ci serve
        </h2>
        <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray">
          <div className="space-y-6 mb-8">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-light-offwhite rounded-lg"
                >
                  <div className="w-12 h-12 bg-accent-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <span className="text-lg text-dark-navy">{item.text}</span>
                </div>
              );
            })}
          </div>
          <div className="bg-accent-primary/10 border-l-4 border-accent-primary p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-accent-primary flex-shrink-0 mt-1" />
              <p className="text-dark-navy font-medium">
                Ti spieghiamo tutto prima: tempi, costi, condizioni e cosa firmi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

