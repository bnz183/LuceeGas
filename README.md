# Luce & Gas – Consulente Personale

Landing page ad alta conversione per il servizio di consulenza Luce & Gas dedicato ai clienti Tecnocasa.

## 🚀 Stack Tecnologico

- **Framework**: Next.js 14 (App Router)
- **Linguaggio**: TypeScript
- **Styling**: Tailwind CSS
- **Animazioni**: Framer Motion
- **Icone**: Lucide React

## 📋 Funzionalità

- ✅ Landing page responsive e mobile-first
- ✅ Hero section con CTAs multipli
- ✅ Sticky CTA mobile (WhatsApp + Chiamata)
- ✅ Sezione "Come funziona" (4 step)
- ✅ 3 pacchetti servizio (Check Bolletta, Attivazione, Assistenza)
- ✅ Form di contatto con anti-spam
- ✅ Deep link WhatsApp con messaggio precompilato
- ✅ Tracking attribuzione (UTM, ref params)
- ✅ FAQ interattive
- ✅ Pagine legali (Privacy, Cookie, Termini)
- ✅ Cookie consent banner (GDPR compliant)
- ✅ Footer con logo Tecnocasa e disclaimer
- ✅ SEO ottimizzato (metadata, OpenGraph)

## 🛠️ Setup

### Installazione dipendenze

```bash
npm install
```

### Configurazione

Modifica il file `lib/config.ts` con i tuoi valori:

```typescript
export const config = {
  whatsapp: {
    number: "393123456789", // Il tuo numero WhatsApp (senza +)
    defaultMessage: "Ciao, sono un cliente Tecnocasa...",
  },
  phone: {
    number: "+393123456789", // Il tuo numero telefono
    display: "+39 312 345 6789",
  },
  form: {
    endpoint: "/api/leads", // O webhook Google Sheets
  },
  tecnocasa: {
    logoPath: "/images/tecnocasa-logo.png",
    disclaimer: "Logo utilizzato per indicare...",
  },
};
```

### Logo Tecnocasa

1. Aggiungi il logo Tecnocasa in `public/images/tecnocasa-logo.png`
2. Oppure modifica il path in `lib/config.ts`

### Form Submission

Il form invia i lead all'endpoint `/api/leads` (default). Puoi:

**Opzione 1: Google Sheets Webhook**
1. Crea uno script Google Apps Script
2. Configura il webhook
3. Aggiorna `config.form.endpoint` con l'URL del webhook

**Opzione 2: Backend personalizzato**
1. Modifica `app/api/leads/route.ts`
2. Aggiungi la logica per salvare in database/inviare email

**Opzione 3: Firebase Cloud Functions**
1. Crea una Cloud Function per ricevere i lead
2. Salva in Firestore o invia notifiche

### Avvio sviluppo

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000)

### Build produzione

```bash
npm run build
npm start
```

## 📁 Struttura Progetto

```
├── app/
│   ├── api/leads/          # Endpoint form submission
│   ├── privacy-policy/     # Pagina privacy
│   ├── cookie-policy/      # Pagina cookie
│   ├── termini/            # Pagina termini
│   ├── layout.tsx          # Layout principale
│   ├── page.tsx            # Landing page
│   └── globals.css         # Stili globali
├── components/
│   ├── ui/                 # Componenti UI base
│   ├── Hero.tsx            # Sezione hero
│   ├── ComeFunziona.tsx    # Sezione 4 step
│   ├── Pacchetti.tsx       # 3 pacchetti servizio
│   ├── CosaServe.tsx       # Documenti necessari
│   ├── PersuasiveElements.tsx # Elementi persuasivi
│   ├── FAQ.tsx             # Domande frequenti
│   ├── LeadForm.tsx        # Form contatto
│   ├── FinalCTA.tsx        # CTA finale
│   ├── Footer.tsx          # Footer
│   ├── StickyMobileCTA.tsx # CTA mobile sticky
│   └── CookieConsent.tsx   # Banner cookie
├── lib/
│   ├── config.ts           # Configurazione
│   ├── whatsapp.ts         # Funzioni WhatsApp
│   ├── attribution.ts      # Tracking attribuzione
│   └── utils.ts            # Utility
└── public/
    └── images/             # Immagini (logo Tecnocasa)
```

## 🎨 Design System

Il design è ispirato a un volantino premium con:
- **Colori**: Dark navy/charcoal base, accent blue/green, off-white text
- **Tipografia**: Bold headlines, clean sans-serif
- **Spacing**: Generoso, sezioni ben separate
- **Contrasto**: Alto per leggibilità

## 📊 Tracking e Attribuzione

Il sistema traccia automaticamente:
- Parametri UTM (`utm_source`, `utm_campaign`, `utm_medium`)
- Parametro `ref` personalizzato
- Canale di conversione (WhatsApp o Form)
- Salvataggio in `sessionStorage` per persistenza

Esempio URL con tracking:
```
https://tuosito.it/?ref=tecnocasa&utm_source=tecnocasa&utm_campaign=agenzia
```

## 🔒 GDPR Compliance

- ✅ Cookie consent banner
- ✅ Privacy Policy page
- ✅ Cookie Policy page
- ✅ Termini e Condizioni page
- ✅ Consenso esplicito nel form
- ✅ Honeypot anti-spam nel form

## 📱 Mobile Optimization

- Sticky CTA bottom bar su mobile
- Touch-friendly button sizes
- Responsive grid layouts
- Fast loading (ottimizzato per mobile)

## 🚀 Deploy

### Vercel (Raccomandato)

1. Push su GitHub
2. Connetti repository a Vercel
3. Configura variabili ambiente se necessario
4. Deploy automatico

### Altri provider

Il progetto è compatibile con qualsiasi provider che supporta Next.js:
- Netlify
- AWS Amplify
- Railway
- Etc.

## 📝 Note

- **WhatsApp Number**: Deve essere in formato internazionale senza `+` (es: `393123456789`)
- **Form Endpoint**: Default è `/api/leads` (API route Next.js). Per produzione, considera un backend dedicato o webhook.
- **Logo Tecnocasa**: Aggiungi il logo in `public/images/` e aggiorna il path in `lib/config.ts`
- **Testimonials**: I testimonial sono placeholder. Sostituisci con recensioni reali in `components/PersuasiveElements.tsx`

## 🐛 Troubleshooting

**WhatsApp link non funziona?**
- Verifica il formato del numero in `lib/config.ts` (senza +, solo cifre)
- Testa il link manualmente: `https://wa.me/393123456789?text=test`

**Form non invia?**
- Controlla la console del browser per errori
- Verifica che l'endpoint in `config.form.endpoint` sia corretto
- Per sviluppo locale, l'endpoint `/api/leads` funziona automaticamente

**Logo non appare?**
- Verifica che il file esista in `public/images/tecnocasa-logo.png`
- Oppure decommenta il codice Image in `components/Footer.tsx` e commenta il placeholder

## 📞 Supporto

Per domande o modifiche, consulta la documentazione Next.js o contatta il team di sviluppo.

---

**Versione**: 1.0.0  
**Ultimo aggiornamento**: 2024

