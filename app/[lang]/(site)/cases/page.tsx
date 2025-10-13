export default async function Cases({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const items = [
    {t:m["cases.c1.t"], d:m["cases.c1.d"], k:"c1"},
    {t:m["cases.c2.t"], d:m["cases.c2.d"], k:"c2"},
    {t:m["cases.c3.t"], d:m["cases.c3.d"], k:"c3"},
  ]
  return (<div className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["cases.title"]}</h1>
    <p className="text-gray-700 mt-2">{m["cases.intro"]}</p>
    <div className="mt-8 grid md:grid-cols-3 gap-6">{items.map(x=>(
      <div key={x.k} className="rounded-xl border p-6 bg-white">
        <h2 className="text-xl font-semibold">{x.t}</h2>
        <p className="text-gray-700 mt-2">{x.d}</p>
      </div>
    ))}</div>
  </div>)
}
