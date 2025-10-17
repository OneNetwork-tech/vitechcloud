"use client";

import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Contact us</h1>
      <p className="mt-3 text-gray-700">
        Fill out the form and we’ll get back to you. Protected by Cloudflare Turnstile.
      </p>

      <form action="/contact.php" method="POST" className="mt-6 grid gap-4">
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

        <input className="border rounded-md p-3 w-full" name="name" placeholder="Name" required />
        <input className="border rounded-md p-3 w-full" name="email" type="email" placeholder="Email" required />
        <textarea className="border rounded-md p-3 w-full min-h-40" name="message" placeholder="Message" required />

        <div className="cf-turnstile" data-sitekey="YOUR_TURNSTILE_SITE_KEY"></div>

        <button className="bg-brand.primary text-white px-5 py-3 rounded-md w-full sm:w-fit hover:opacity-90">
          Send
        </button>
      </form>

      <p className="mt-4 text-xs text-gray-500">
        Tip: Add SPF/DKIM/DMARC for reliable email delivery.
      </p>
    </div>
  );
}
