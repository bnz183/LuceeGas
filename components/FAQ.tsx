"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Quanto tempo ci vuole per attivare il servizio?",
    answer:
      "Dopo l'invio della documentazione, l'attivazione avviene generalmente entro 5-7 giorni lavorativi. Ti teniamo aggiornato in ogni fase.",
  },
  {
    question: "Quali documenti servono?",
    answer:
      "Documento d'identità, codice fiscale, POD/PDR (se disponibili) e IBAN per la domiciliazione bancaria. Ti guidiamo passo passo.",
  },
  {
    question: "Ci sono costi nascosti?",
    answer:
      "No, ti spieghiamo tutto prima: tempi, costi, condizioni e cosa firmi. Trasparenza totale, nessuna sorpresa.",
  },
  {
    question: "Cosa firmo esattamente?",
    answer:
      "Firmi solo il contratto di fornitura con il nuovo operatore. Ti inviamo tutto via email e ti spieghiamo ogni clausola prima della firma.",
  },
  {
    question: "Cambio operatore?",
    answer:
      "Sì, gestiamo il passaggio completo dal vecchio al nuovo operatore, inclusi tutti gli adempimenti burocratici.",
  },
  {
    question: "E se ho problemi con conguagli o letture?",
    answer:
      "Ti seguiamo anche dopo l'attivazione. Assistenza per conguagli, letture, reclami e qualsiasi problema con le bollette.",
  },
  {
    question: "Il servizio è veramente gratuito?",
    answer:
      "Il Check Bolletta è completamente gratuito. Per l'attivazione, ti informiamo di tutti i costi prima di procedere.",
  },
  {
    question: "Sono obbligato a cambiare operatore?",
    answer:
      "No, dopo il Check Bolletta puoi decidere liberamente se procedere o meno. Nessun obbligo.",
  },
  {
    question: "Come funziona il follow-up fino alla prima bolletta?",
    answer:
      "Ti assegniamo un referente unico che ti segue passo passo: attivazione, conferma, monitoraggio e verifica della prima bolletta.",
  },
  {
    question: "Posso contattarvi anche dopo l'attivazione?",
    answer:
      "Assolutamente sì. Offriamo assistenza continuativa per controlli annuali, alert su scadenze e supporto per qualsiasi problema.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-light-offwhite text-dark-navy">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16">
          Domande frequenti
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-light-gray overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-light-offwhite transition-colors"
              >
                <span className="font-semibold text-lg text-dark-navy pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 text-accent-primary flex-shrink-0 transition-transform",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-dark-slate">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

