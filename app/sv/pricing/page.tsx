export default function Pricing() {
  const plans = [
    {
      name: "Start",
      price: "1 495 kr/mån",
      desc: "För små team som vill komma igång.",
      features: [
        "Helpdesk & ticketing (upp till 5 agenter)",
        "Grundläggande drift & patchning",
        "Daglig backup (7 dagar)",
        "E-postsupport (9–17 CET)",
      ],
    },
    {
      name: "Pro",
      price: "3 995 kr/mån",
      desc: "För växande bolag med högre krav.",
      featured: true,
      features: [
        "Allt i Start",
        "24/7 övervakning",
        "Prioriterad support (SLA)",
        "Backup & återställning (30 dagar)",
        "Säkerhetsgenomgång kvartalsvis",
      ],
    },
    {
      name: "Enterprise",
      price: "Offert",
      desc: "Skräddarsytt för större organisationer.",
      features: [
        "Dedikerad arkitektur",
        "Hög tillgänglighet och skalbarhet",
        "Compliance & revision",
        "Avancerad incidentrespons",
        "Utökad support & utbildning",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Priser (SEK)</h1>
      <p className="mt-2 text-gray-700">
        Priser anges exkl. moms. Fakturering i SEK. Anpassade paket vid behov.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div
            key={p.name}
            className={
              "card flex flex-col " +
              (p.featured ? "ring-2 ring-brand.primary" : "")
            }
          >
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p className="mt-1 text-gray-600">{p.desc}</p>
            <p className="mt-4 text-3xl font-bold">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {p.features.map((f) => (
                <li key={f}>✓ {f}</li>
              ))}
            </ul>
            <a
              href="/sv/contact/"
              className="mt-6 inline-block px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90"
            >
              Be om offert
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-gray-600">
        <p>
          <strong>Tillägg:</strong> Installation/migrering, utbildning, extra
          agenter, utökad backup-retention.
        </p>
      </div>
    </div>
  );
}
