// Configuration file - Update these values as needed

export const config = {
  // WhatsApp Business number (format: 393XXXXXXXXX without +)
  whatsapp: {
    number: "393123456789", // CHANGE THIS
    defaultMessage:
      "Ciao, sono un cliente Tecnocasa. Vorrei il Check Bolletta Gratuito. Ecco la mia richiesta:",
  },
  // Phone number for click-to-call
  phone: {
    number: "+393123456789", // CHANGE THIS
    display: "+39 312 345 6789",
  },
  // Form submission endpoint (Google Sheets webhook or your backend)
  form: {
    endpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "/api/leads",
    // For Google Sheets webhook, use: https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
  },
  // Tecnocasa logo path
  tecnocasa: {
    logoPath: "/images/tecnocasa-logo.png", // Placeholder - replace with actual logo
    disclaimer:
      "Logo utilizzato per indicare la collaborazione commerciale (previa autorizzazione).",
  },
  // Site URLs
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://lucegas-consulente.it",
  },
};

