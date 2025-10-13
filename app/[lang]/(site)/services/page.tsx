export default async function Services({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const cards = [
    {k:"services.blocks.managed", d: params.lang==='sv' ? 'Övervakning, patchning, backup, helpdesk, nätverk.' : 'Monitoring, patching, backups, helpdesk, networking.'},
    {k:"services.blocks.erp", d: params.lang==='sv' ? 'Ekonomi, lager, produktion, rapporter, integrationer.' : 'Finance, inventory, production, reporting, integrations.'},
    {k:"services.blocks.crm", d: params.lang==='sv' ? '360° kundvy, säljflöden, kampanjer, e‑postkoppling.' : '360° customer view, pipelines, campaigns, email linking.'},
    {k:"services.blocks.cloud", d: params.lang==='sv' ? 'Design, provisionering, övervakning, kostnadsoptimering.' : 'Design, provisioning, monitoring, cost optimization.'},
    {k:"services.blocks.security", d: params.lang==='sv' ? 'Härdning, MFA, brandvägg, sårbarhetsscanning, DLP.' : 'Hardening, MFA, firewalling, vulnerability scanning, DLP.'},
    {k:"services.blocks.os", d: params.lang==='sv' ? 'Nextcloud, Zammad/GLPI, ONLYOFFICE, Git, m.m.' : 'Nextcloud, Zammad/GLPI, ONLYOFFICE, Git, etc.'},
  ]
  return (<div className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["services.title"]}</h1>
    <div className="mt-8 grid md:grid-cols-2 gap-6">{cards.map(c=>(
      <div key={c.k} className="rounded-xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">{m[c.k]}</h2>
        <p className="text-gray-700 mt-2">{c.d}</p>
      </div>
    ))}</div>
  </div>)
}
