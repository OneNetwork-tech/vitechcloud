export default function Cases() {
  const cases = [
    {
      title: "School Foundation – e-learning with Moodle",
      sector: "Education",
      challenge:
        "Needed remote teaching and centralized course content management.",
      solution:
        "Deployed Moodle in the client’s cloud with SSO, automated backups, and monitoring.",
      result: "90% faster course launches, 99.95% availability.",
      highlights: ["Moodle", "SSO/Keycloak", "Automated backups", "SLA reporting"],
    },
    {
      title: "NordicTech – ticketing & support",
      sector: "IT consulting",
      challenge: "Fragmented channels and low visibility in support flows.",
      solution:
        "Introduced ticketing/helpdesk with SLAs, knowledge base, and dashboards.",
      result: "45% shorter resolution time, 35% fewer re-opened tickets.",
      highlights: ["Zammad", "GLPI", "Knowledge base", "Dashboards"],
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Case studies</h1>
      <p className="mt-2 text-gray-700">Selected examples across education and IT.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {cases.map((c) => (
          <article key={c.title} className="card">
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="text-sm text-gray-600 mt-1">{c.sector}</p>
            <div className="mt-4 space-y-2 text-sm text-gray-800">
              <p>
                <strong>Challenge:</strong> {c.challenge}
              </p>
              <p>
                <strong>Solution:</strong> {c.solution}
              </p>
              <p>
                <strong>Results:</strong> {c.result}
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
          href="/en/contact/"
        >
          Book a consultation
        </a>
      </div>
    </div>
  );
}
