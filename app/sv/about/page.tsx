export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h1 className="text-2xl sm:text-3xl font-semibold">Om ViTech Cloud</h1>
      <p className="mt-4 text-gray-700">
        ViTech Cloud är en svensk partner för hanterade IT-tjänster, open-source-system
        och molnimplementationer. Vi hjälper små och medelstora företag att
        förenkla drift, öka säkerheten och skala smart med kostnadseffektiva lösningar.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Vad vi gör</h2>
      <ul className="mt-2 text-gray-700 list-disc pl-5 space-y-1">
        <li>Implementerar och driver open-source-plattformar (Nextcloud, ticketing, kommunikation).</li>
        <li>Erbjuder 24/7 övervakning, patchning, backup och incidenthantering.</li>
        <li>Rådgivning kring arkitektur, compliance och kostnadsoptimering.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Vårt arbetssätt</h2>
      <p className="mt-2 text-gray-700">
        Vi arbetar nära kunden med tydliga SLA:er och transparenta SEK-priser.
        Leveranser sker i er molnmiljö eller vår hanterade infrastruktur med fokus på GDPR och datasuveränitet.
      </p>

      <h2 className="mt-8 text-xl font-semibold">Varför ViTech Cloud?</h2>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { t: "Svensk partner", d: "Bas i Stockholm, förståelse för lokala krav och standarder." },
          { t: "Open-source först", d: "Minska inlåsning och licenskostnader." },
          { t: "Säkerhet i fokus", d: "Hårdning, backup och kontinuerlig övervakning." },
          { t: "Skalbarhet", d: "Väx med behov – från pilot till enterprise." },
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
          href="/sv/contact/"
        >
          Kontakta oss
        </a>
      </div>
    </div>
  );
}
