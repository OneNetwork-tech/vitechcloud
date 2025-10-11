export default function Services() {
  const services = [
    {t:"Managed IT", d:"Övervakning, patchning, backup och support."},
    {t:"Open-source-plattformar", d:"Nextcloud, ticketing/helpdesk (GLPI/Zammad/OSTicket)."},
    {t:"Molnimplementation", d:"Design, driftsättning och härdning i AWS/Azure/DO."},
    {t:"Säkerhet", d:"Antivirus, brandvägg, härdning, incidentrespons."},
    {t:"Underhåll & SLA", d:"Tjänstenivåer, responstider och rapportering."},
  ]
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="text-3xl font-semibold">Tjänster</h1>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {services.map(s => (
          <div key={s.t} className="rounded-xl border p-6 bg-white">
            <h2 className="text-xl font-semibold">{s.t}</h2>
            <p className="text-gray-700 mt-2">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
