export default function Pricing() {
  const plans = [
    {
      name: "Start",
      price: "1 495 SEK/mo",
      desc: "For small teams getting started.",
      features: [
        "Helpdesk & ticketing (up to 5 agents)",
        "Basic ops & patching",
        "Daily backups (7 days)",
        "Email support (9–17 CET)",
      ],
    },
    {
      name: "Pro",
      price: "3 995 SEK/mo",
      desc: "For growing companies with higher demands.",
      featured: true,
      features: [
        "Everything in Start",
        "24/7 monitoring",
        "Priority support (SLA)",
        "Backup & restore (30 days)",
        "Quarterly security review",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Tailored for larger organizations.",
      features: [
        "Dedicated architecture",
        "High availability & scalability",
        "Compliance & audits",
        "Advanced incident response",
        "Extended support & training",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Pricing (SEK)</h1>
      <p className="mt-2 text-gray-700">
        Prices exclude VAT. Billing in SEK. Custom packages available.
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
              href="/en/contact/"
              className="mt-6 inline-block px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90"
            >
              Request quote
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 text-sm text-gray-600">
        <p>
          <strong>Add-ons:</strong> Install/migration, training, extra agents,
          extended backup retention.
        </p>
      </div>
    </div>
  );
}
