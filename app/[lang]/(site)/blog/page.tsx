export default async function Blog({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  return (<div className="mx-auto max-w-7xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["blog.title"]}</h1>
    <p className="text-gray-700 mt-2">{m["blog.soon"]}</p>
  </div>)
}
