"use client";

import Link from "next/link";
import { config } from "@/lib/config";
// import Image from "next/image"; // Uncomment when logo is available

export function Footer() {
  return (
    <footer className="bg-dark-navy text-light-offwhite py-12 px-4 border-t border-dark-slate">
      <div className="max-w-7xl mx-auto">
        {/* Collaboration section */}
        <div className="mb-8 pb-8 border-b border-dark-slate">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-semibold mb-2">
                In collaborazione con Tecnocasa
              </p>
              <p className="text-xs text-light-gray italic">
                {config.tecnocasa.disclaimer}
              </p>
            </div>
            <div className="flex-shrink-0">
              {/* Placeholder for Tecnocasa logo */}
              <div className="w-48 h-16 bg-dark-slate rounded-lg flex items-center justify-center border border-dark-slate">
                <span className="text-light-gray text-sm">
                  [Logo Tecnocasa]
                </span>
              </div>
              {/* Uncomment when logo is available:
              <Image
                src={config.tecnocasa.logoPath}
                alt="Tecnocasa Logo"
                width={192}
                height={64}
                className="object-contain"
              />
              */}
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
          <Link
            href="/privacy-policy"
            className="text-light-gray hover:text-accent-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/cookie-policy"
            className="text-light-gray hover:text-accent-primary transition-colors"
          >
            Cookie Policy
          </Link>
          <Link
            href="/termini"
            className="text-light-gray hover:text-accent-primary transition-colors"
          >
            Termini e Condizioni
          </Link>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-light-gray">
          <p>© {new Date().getFullYear()} Luce & Gas – Consulente Personale</p>
        </div>
      </div>
    </footer>
  );
}

