"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark-navy border-t border-dark-slate p-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1 text-light-offwhite text-sm">
          <p>
            Utilizziamo i cookie per migliorare la tua esperienza. Continuando a
            navigare, accetti il nostro uso dei cookie.{" "}
            <a
              href="/cookie-policy"
              className="underline hover:text-accent-primary transition-colors"
            >
              Maggiori informazioni
            </a>
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={rejectCookies}
            className="bg-transparent border-light-gray text-light-offwhite hover:bg-dark-slate"
          >
            Rifiuta
          </Button>
          <Button variant="primary" size="sm" onClick={acceptCookies}>
            Accetta
          </Button>
        </div>
      </div>
    </div>
  );
}

