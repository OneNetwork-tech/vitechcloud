export default function Cases() {
  const cases = [
    {
      title: "Skolstiftelsen – e-learning med Moodle",
      sector: "Utbildning",
      challenge:
        "Behov av distansundervisning och central hantering av kursmaterial.",
      solution:
        "Implementerade Moodle i kundens moln med SSO, automatiska backupper och monitorering.",
      result: "90% snabbare kurslansering, 99.95% tillgänglighet.",
      highlights: ["Moodle", "SSO/Keycloak", "Automatiserad backup", "SLA-rapportering"],
    },
    {
      title: "NordicTech – ärendehantering & support",
      sector: "IT-konsult",
      challenge: "Spridda kanaler och låg transparens i supportflöden.",
      solution:
        "Införde ticketing/helpdesk med SLA, kunskapsdatabas och dashboards.",
      result: "45% kortare lösningstid, 35% färre återöppnade ärenden.",
      highlights: ["Zammad", "GLPI", "Kunskapsdatabas", "Dashboards"],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Kundcase</h1>
      <p className="mt-2 text-gray-700">
        Några exempel på leveranser inom utbildning och IT.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <article key={c.title} className="card">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{c.sector}</p>
            <div className="mt-4 space-y-2 text-sm text-gray-800">
              <p>
                <strong>Utmaning:</strong> {c.challenge}
              </p>
              <p>
                <strong>Lösning:</strong> {c.solution}
              </p>
              <p>
                <strong>Resultat:</strong> {c.result}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {c.highlights.map((h) => (
                <span key={h} className="badge">
                  {h}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a
          className="px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90"
          href="/sv/contact/"
        >
          Boka konsultation
        </a>
      </div>
    </div>
  );
}
