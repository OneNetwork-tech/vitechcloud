"use client";

import { useEffect } from "react";

export default function Contact() {
  // Load Cloudflare Turnstile script
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Kontakta oss</h1>
      <p className="mt-3 text-gray-700">
        Fyll i formuläret så återkommer vi. Formuläret skyddas av Cloudflare Turnstile.
      </p>

      <form action="/contact.php" method="POST" className="mt-6 grid gap-4">
        {/* Honeypot mot bottar */}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <label className="text-sm text-gray-700">
          Namn
          <input className="mt-1 border rounded-md p-3 w-full" name="name" placeholder="Ditt namn" required />
        </label>

        <label className="text-sm text-gray-700">
          E-post
          <input className="mt-1 border rounded-md p-3 w-full" name="email" type="email" placeholder="din@epost.se" required />
        </label>

        <label className="text-sm text-gray-700">
          Telefon
          <input className="mt-1 border rounded-md p-3 w-full" name="phone" type="tel" placeholder="+46 70 123 45 67" />
        </label>

        <label className="text-sm text-gray-700">
          Ärende
          <select
            name="subject"
            required
            className="mt-1 border rounded-md p-3 w-full bg-white"
            defaultValue=""
          >
            <option value="" disabled>Välj ämne</option>
            <option value="Hanterade IT-tjänster">Hanterade IT-tjänster</option>
            <option value="IT-support & installation">IT-support & installation</option>
            <option value="App-/webbutveckling">App-/webbutveckling</option>
            <option value="Digital marknadsföring">Digital marknadsföring</option>
          </select>
        </label>

        <label className="text-sm text-gray-700">
          Meddelande
          <textarea className="mt-1 border rounded-md p-3 w-full min-h-40" name="message" placeholder="Hur kan vi hjälpa er?" required />
        </label>

        {/* Cloudflare Turnstile */}
        <div className="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY"></div>

        <button
  type="submit"
  className="bg-brand.primary text-black px-5 py-3 rounded-md w-full sm:w-fit hover:opacity-90 border border-transparent focus:border-gray-500 focus:outline-none"
>
  Skicka
</button>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        Tips: Lägg till SPF, DKIM och DMARC i er DNS för bättre e-postleverans.
      </p>
    </div>
  );
}
