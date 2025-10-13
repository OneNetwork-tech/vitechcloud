export default async function Contact({ params }:{ params:{ lang:string }}){
  const m = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  return (<div className="mx-auto max-w-4xl px-4 py-14">
    <h1 className="text-3xl font-semibold">{m["contact.title"]}</h1>
    <p className="mt-3 text-gray-700">{m["contact.body"]}</p>
    <form action="https://formspree.io/f/your-id" method="POST" className="mt-6 grid gap-4">
      <input className="border rounded-md p-3" name="name" placeholder={params.lang==='sv'?'Namn':'Name'} required />
      <input className="border rounded-md p-3" name="email" type="email" placeholder="E‑post / Email" required />
      <textarea className="border rounded-md p-3 min-h-40" name="message" placeholder="Meddelande / Message" required />
      <button className="bg-brand.primary text-white px-5 py-3 rounded-md w-fit hover:opacity-90">{m["contact.send"]}</button>
    </form>
  </div>)
}
