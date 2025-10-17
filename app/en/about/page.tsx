export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">About ViTech Cloud</h1>
      <p className="mt-4 text-gray-700">
        ViTech Cloud is a Sweden-based partner for managed IT services,
        open-source platforms, and cloud deployments. We help SMBs simplify
        operations, increase security, and scale efficiently with cost-effective solutions.
      </p>

      <h2 className="mt-8 text-xl font-semibold">What we do</h2>
      <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
        <li>Implement and operate open-source platforms (Nextcloud, ticketing, communications).</li>
        <li>Provide 24/7 monitoring, patching, backups, and incident response.</li>
        <li>Advise on architecture, compliance, and cost optimization.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">How we work</h2>
      <p className="mt-2 text-gray-700">
        We collaborate closely with clear SLAs and transparent SEK pricing.
        Deployments run in your cloud or our managed infrastructure with a strong focus on GDPR and data sovereignty.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Why ViTech Cloud?</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { t: "Swedish partner", d: "Based in Stockholm, aligned with local requirements and standards." },
          { t: "Open-source first", d: "Reduce vendor lock-in and licensing costs." },
          { t: "Security-focused", d: "Hardening, backups, and continuous monitoring." },
          { t: "Scalable", d: "Grow from pilot to enterprise at your pace." },
        ].map((i) => (
          <div key={i.t} className="card">
            <h3 className="font-semibold">{i.t}</h3>
            <p className="text-gray-700 mt-1">{i.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <a
          className="px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90"
          href="/en/contact/"
        >
          Contact us
        </a>
      </div>
    </div>
  );
}
