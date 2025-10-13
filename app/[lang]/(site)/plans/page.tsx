export default async function Plans({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const plans = [
    {k:"basic", price: params.lang==='sv'?'2 990':'249', currency: params.lang==='sv'?'SEK':'EUR', features:['24/7 support','Monitoring','Weekly backups']},
    {k:"grow", price: params.lang==='sv'?'5 990':'499', currency: params.lang==='sv'?'SEK':'EUR', features:['All in Basic','Security hardening','Daily backups']},
    {k:"pro", price: params.lang==='sv'?'9 990':'899', currency: params.lang==='sv'?'SEK':'EUR', features:['All in Growth','SLA priority','Consulting hours']},
  ]
  return (<div className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["plans.title"]}</h1>
    <p className="text-gray-700 mt-2">{m["plans.body"]}</p>
    <div className="mt-8 grid md:grid-cols-3 gap-6">{plans.map(p=>(
      <div key={p.k} className="rounded-xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">{m[`plans.${p.k}`]}</h2>
        <p className="mt-1 text-3xl font-bold">{p.price} <span className="text-base font-normal">{m["plans.permonth"]}</span></p>
        <ul className="mt-4 space-y-2 text-sm text-gray-700">{p.features.map(f=><li key={f}>• {f}</li>)}</ul>
        <a href={`/${params.lang}/contact/`} className="mt-6 inline-block px-5 py-3 rounded-md bg-brand.primary text-white hover:opacity-90">{m["plans.cta"]}</a>
      </div>
    ))}</div>
  </div>)
}
