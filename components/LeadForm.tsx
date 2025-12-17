"use client";

import { useState, FormEvent } from "react";
import { Button } from "./ui/Button";
import { MessageCircle, Loader2 } from "lucide-react";
import { openWhatsApp, trackWhatsAppClick } from "@/lib/whatsapp";
import { getAttribution } from "@/lib/attribution";
import { config } from "@/lib/config";

type FormData = {
  nome: string;
  cognome: string;
  telefono: string;
  indirizzo: string;
  richiesta: string;
  preferenza: string;
  note: string;
  privacy: boolean;
  honeypot: string; // Anti-spam
};

export function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    cognome: "",
    telefono: "",
    indirizzo: "",
    richiesta: "Check Bolletta",
    preferenza: "WhatsApp",
    note: "",
    privacy: false,
    honeypot: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Honeypot check
    if (formData.honeypot) {
      return; // Silent fail for bots
    }

    // Validation
    if (!formData.nome || !formData.cognome || !formData.telefono) {
      setError("Compila tutti i campi obbligatori");
      return;
    }

    if (!formData.privacy) {
      setError("Devi accettare l'informativa sulla privacy");
      return;
    }

    setIsSubmitting(true);

    try {
      const attribution = getAttribution();
      const leadData = {
        ...formData,
        timestamp: new Date().toISOString(),
        attribution,
      };

      // Send to endpoint
      const response = await fetch(config.form.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio del form");
      }

      setIsSubmitted(true);
      trackWhatsAppClick("form");
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Errore nell'invio. Riprova o contattaci direttamente su WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-light-gray text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-accent-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-accent-secondary" />
          </div>
          <h3 className="text-2xl font-bold text-dark-navy mb-2">
            Grazie per la tua richiesta!
          </h3>
          <p className="text-dark-slate mb-6">
            Ti contatteremo entro 2 ore. Nel frattempo, puoi scriverci direttamente
            su WhatsApp.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              trackWhatsAppClick();
              openWhatsApp(
                `Ciao, ho appena inviato il form. Nome: ${formData.nome} ${formData.cognome}`
              );
            }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Apri WhatsApp
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg border border-light-gray">
      <h3 className="text-2xl font-bold text-dark-navy mb-6">
        Compila il form (veloce)
      </h3>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Honeypot */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-dark-navy mb-2">
            Nome *
          </label>
          <input
            type="text"
            required
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-dark-navy mb-2">
            Cognome *
          </label>
          <input
            type="text"
            required
            value={formData.cognome}
            onChange={(e) =>
              setFormData({ ...formData, cognome: e.target.value })
            }
            className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-dark-navy mb-2">
          Telefono *
        </label>
        <input
          type="tel"
          required
          value={formData.telefono}
          onChange={(e) =>
            setFormData({ ...formData, telefono: e.target.value })
          }
          className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-dark-navy mb-2">
          Indirizzo fornitura (o comune) *
        </label>
        <input
          type="text"
          required
          value={formData.indirizzo}
          onChange={(e) =>
            setFormData({ ...formData, indirizzo: e.target.value })
          }
          className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-dark-navy mb-2">
          Richiesta *
        </label>
        <select
          required
          value={formData.richiesta}
          onChange={(e) =>
            setFormData({ ...formData, richiesta: e.target.value })
          }
          className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
        >
          <option value="Check Bolletta">Check Bolletta</option>
          <option value="Switch">Switch</option>
          <option value="Subentro">Subentro</option>
          <option value="Voltura">Voltura</option>
          <option value="Nuova attivazione">Nuova attivazione</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-dark-navy mb-2">
          Preferisci contatto
        </label>
        <select
          value={formData.preferenza}
          onChange={(e) =>
            setFormData({ ...formData, preferenza: e.target.value })
          }
          className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
        >
          <option value="WhatsApp">WhatsApp</option>
          <option value="Chiamata">Chiamata</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-dark-navy mb-2">
          Note (opzionale)
        </label>
        <textarea
          value={formData.note}
          onChange={(e) => setFormData({ ...formData, note: e.target.value })}
          rows={3}
          className="w-full px-4 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent"
        />
      </div>

      <div className="mb-6">
        <label className="flex items-start gap-2">
          <input
            type="checkbox"
            required
            checked={formData.privacy}
            onChange={(e) =>
              setFormData({ ...formData, privacy: e.target.checked })
            }
            className="mt-1"
          />
          <span className="text-sm text-dark-slate">
            Accetto l&apos;{" "}
            <a
              href="/privacy-policy"
              className="text-accent-primary hover:underline"
              target="_blank"
            >
              informativa sulla privacy
            </a>{" "}
            *
          </span>
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Invio in corso...
          </>
        ) : (
          "Invia richiesta"
        )}
      </Button>
    </form>
  );
}

