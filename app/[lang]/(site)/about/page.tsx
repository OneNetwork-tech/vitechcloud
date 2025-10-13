export default async function About({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  return (<div className="mx-auto max-w-4xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["about.title"]}</h1>
    <p className="mt-4 text-gray-700">{m["about.body"]}</p>
  </div>)
}
