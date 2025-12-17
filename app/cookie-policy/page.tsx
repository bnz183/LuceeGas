import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Luce & Gas – Consulente Personale",
  description: "Informativa sui cookie del servizio Luce & Gas – Consulente Personale",
};

export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray space-y-6 text-dark-slate">
          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              1. Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che vengono salvati sul tuo
              dispositivo quando visiti un sito web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              2. Tipi di cookie utilizzati
            </h2>
            <p>
              Utilizziamo cookie tecnici necessari per il funzionamento del sito
              e cookie di consenso per ricordare le tue preferenze.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              3. Cookie di terze parti
            </h2>
            <p>
              Attualmente non utilizziamo cookie di terze parti per il tracking.
              Se in futuro implementeremo analytics, ti informeremo e richiederemo
              il consenso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              4. Gestione dei cookie
            </h2>
            <p>
              Puoi gestire le preferenze sui cookie tramite il banner di consenso
              o le impostazioni del browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-navy mb-4">
              5. Contatti
            </h2>
            <p>
              Per domande sui cookie, contattaci tramite WhatsApp o email.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

