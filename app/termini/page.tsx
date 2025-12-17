import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termini e Condizioni | Luce & Gas – Consulente Personale",
  description: "Termini e condizioni del servizio Luce & Gas – Consulente Personale",
};

export default function Termini() {
  return (
    <div className="min-h-screen bg-light-offwhite">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <Link
          href="/"
          className="text-accent-primary hover:underline mb-8 inline-block"
        >
          ← Torna alla home
        </Link>
        <h1 className="text-4xl font-bold text-dark-navy mb-8">
          Termini e Condizioni
        </h1>
        <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray space-y-6 text-dark-slate">
          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              1. Oggetto
            </h2>
            <p>
              I presenti termini e condizioni regolano l'utilizzo del servizio di
              consulenza Luce & Gas – Consulente Personale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              2. Servizio offerto
            </h2>
            <p>
              Il servizio consiste in consulenza per la gestione di utenze luce e
              gas, inclusi check bolletta, attivazioni, volture e subentri.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              3. Check Bolletta Gratuito
            </h2>
            <p>
              Il Check Bolletta è completamente gratuito e non comporta alcun
              obbligo di acquisto o attivazione.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              4. Attivazione servizio
            </h2>
            <p>
              L'attivazione del servizio a pagamento avviene solo previo consenso
              esplicito del cliente dopo la presentazione di tutte le condizioni,
              costi e tempi.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              5. Responsabilità
            </h2>
            <p>
              Il servizio di consulenza non garantisce risultati specifici di
              risparmio. I tempi di attivazione dipendono dagli operatori e dalle
              procedure burocratiche.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              6. Modifiche
            </h2>
            <p>
              Ci riserviamo il diritto di modificare questi termini. Le
              modifiche saranno comunicate tramite il sito web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              7. Legge applicabile
            </h2>
            <p>
              I presenti termini sono regolati dalla legge italiana.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

