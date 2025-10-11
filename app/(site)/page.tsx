import CTA from "@/components/CTA"

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand.light to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Hanterade IT-tjänster & molnlösningar för svenska företag
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Vi designar, implementerar och driftar open-source-system som Nextcloud, helpdesk och ärendehantering – i er molnmiljö.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/contact/" className="px-5 py-3 rounded-md bg-brand.primary text-white hover:opacity-90">Kontakta oss</a>
              <a href="/services/" className="px-5 py-3 rounded-md border hover:bg-brand.light">Våra tjänster</a>
            </div>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm">
              <li>✓ 24/7 övervakning & support</li>
              <li>✓ Säkerhetsuppdateringar och backup</li>
              <li>✓ Nextcloud, ticketing & helpdesk</li>
              <li>✓ Molnimplementering (AWS/Azure/DO)</li>
              <li>✓ Förutsägbara kostnader</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-semibold">Varför ViTech Cloud?</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            {t:"Pålitligt", d:"Proaktiv drift minskar avbrott och höjer tillgängligheten."},
            {t:"Säkert", d:"Hårdare säkerhet, patchning och övervakning dygnet runt."},
            {t:"Kostnadseffektivt", d:"Tydliga månadspriser och skalbara paket."},
          ].map((i)=>(
            <div key={i.t} className="rounded-xl border p-6 bg-white">
              <h3 className="font-semibold">{i.t}</h3>
              <p className="text-gray-700 mt-2">{i.d}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  )
}
