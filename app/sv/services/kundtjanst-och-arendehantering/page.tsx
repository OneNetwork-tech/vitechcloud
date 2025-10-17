export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <p className="text-sm uppercase tracking-wide text-gray-500">Tjänster · Kundsupport</p>
          <h1 className="text-2xl sm:text-3xl font-semibold mt-1">Kundtjänst & ärendehantering</h1>
          <p className="mt-3 text-gray-800">
            ViTech Cloud levererar ett fullt hanterat, vitmärkt ticketing‑system för omnikanal kundsupport.
            E‑post, webbformulär och chatt samlas i en kö med SLA:er, automation och analys — driftat och säkrat av ViTech Cloud.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="badge">Omnikanal‑inkorg</span>
            <span className="badge">SLA & automation</span>
            <span className="badge">Self‑service‑portal</span>
            <span className="badge">Kunskapsdatabas</span>
            <span className="badge">SSO & roller</span>
            <span className="badge">GDPR/EU‑hosting</span>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            <li>✓ Intag via e‑post, webbformulär och chatt</li>
            <li>✓ SLA‑policy, prioritet, köer och triggers</li>
            <li>✓ Makron, mallar och svarsförslag</li>
            <li>✓ Kunskapsdatabas med artikelfeedback</li>
            <li>✓ Roller, team och attestflöden</li>
            <li>✓ Dashboards & rapporter (backlog, lösningstid)</li>
            <li>✓ SSO (OIDC), granskningsloggar, dagliga backupper</li>
            <li>✓ Drift i EU med personuppgiftsbiträdesavtal</li>
          </ul>

          <a href="/sv/contact/" className="mt-6 inline-block px-5 py-3 rounded-md bg-brand.primary text-white hover:opacity-90">
            Boka demo
          </a>
        </div>

        <div className="card">
          <img src="/services/customer-ticketing/hero.svg" alt="Kundtjänst & ärendehantering" className="w-48 h-48" />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card"><img src="/services/customer-ticketing/channels.svg" alt="Kanaler" className="w-16 h-16"/><p className="mt-2 text-sm font-semibold">Kanaler</p><p className="text-xs text-gray-700">E‑post · Formulär · Chatt</p></div>
            <div className="card"><img src="/services/customer-ticketing/analytics.svg" alt="Analys" className="w-16 h-16"/><p className="mt-2 text-sm font-semibold">Analys</p><p className="text-xs text-gray-700">SLA · Backlog · NKI</p></div>
          </div>
          <div className="mt-4">
            <h2 className="font-semibold">Förväntade effekter</h2>
            <ul className="mt-2 text-gray-800 space-y-1 text-sm">
              <li>• Snabbare första svar</li>
              <li>• Färre återöppnade ärenden</li>
              <li>• Bättre transparens mellan team</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <a href="/sv/services/" className="text-sm underline">← Tillbaka till Tjänster</a>
      </div>
    </div>
  )
}
