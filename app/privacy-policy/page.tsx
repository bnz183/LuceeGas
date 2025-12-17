import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Luce & Gas – Consulente Personale",
  description: "Informativa sulla privacy del servizio Luce & Gas – Consulente Personale",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray space-y-6 text-dark-slate">
          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              1. Titolare del trattamento
            </h2>
            <p>
              Il titolare del trattamento dei dati personali è Luce & Gas –
              Consulente Personale.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              2. Dati raccolti
            </h2>
            <p>
              Raccogliamo i seguenti dati personali: nome, cognome, numero di
              telefono, indirizzo di fornitura, e altre informazioni fornite
              volontariamente tramite form o WhatsApp.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              3. Finalità del trattamento
            </h2>
            <p>
              I dati vengono utilizzati esclusivamente per: fornire il servizio
              di consulenza richiesto, contattare il cliente per l'attivazione
              del servizio, inviare comunicazioni relative al servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              4. Base giuridica
            </h2>
            <p>
              Il trattamento è basato sul consenso dell'interessato e sulla
              necessità di eseguire il contratto di servizio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              5. Conservazione dei dati
            </h2>
            <p>
              I dati vengono conservati per il tempo necessario a fornire il
              servizio e per gli obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              6. Diritti dell'interessato
            </h2>
            <p>
              Hai diritto di accedere, rettificare, cancellare i tuoi dati o
              opporti al trattamento. Per esercitare questi diritti, contattaci
              tramite WhatsApp o email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              7. Contatti
            </h2>
            <p>
              Per qualsiasi domanda sulla privacy, contattaci tramite WhatsApp o
              email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

