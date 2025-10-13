export default async function FAQ({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const qa = [
    {q:m["faq.q1"], a:m["faq.a1"]},
    {q:m["faq.q2"], a:m["faq.a2"]},
    {q:m["faq.q3"], a:m["faq.a3"]},
    {q:m["faq.q4"], a:m["faq.a4"]},
  ]
  return (<div className="mx-auto max-w-3xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["faq.title"]}</h1>
    <div className="mt-8 divide-y border rounded-xl bg-white">{qa.map((x,i)=>(
      <details key={i} className="p-5">
        <summary className="cursor-pointer font-medium">{x.q}</summary>
        <p className="mt-3 text-gray-700">{x.a}</p>
      </details>
    ))}</div>
  </div>)
}
