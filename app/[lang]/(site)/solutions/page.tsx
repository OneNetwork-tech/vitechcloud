export default async function Solutions({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const blocks = [
    {t:m["solutions.erp"], b:"ERP"},
    {t:m["solutions.crm"], b:"CRM"},
    {t:m["solutions.msp"], b:"MSP"},
    {t:m["solutions.collab"], b:"Collab"},
    {t:m["solutions.devops"], b:"DevOps"},
    {t:m["solutions.security"], b:"Security"},
  ]
  return (<div className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["solutions.title"]}</h1>
    <p className="text-gray-700 mt-2">{m["solutions.intro"]}</p>
    <div className="mt-8 grid md:grid-cols-3 gap-6">{blocks.map(x=> (
      <div key={x.b} className="rounded-xl border p-6 bg-white">
        <span className="badge">{x.b}</span>
        <p className="mt-3 text-gray-700">{x.t}</p>
      </div>
    ))}</div>
  </div>)
}
