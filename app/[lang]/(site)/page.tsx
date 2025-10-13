import CTA from "@/components/CTA"
export default async function Page({ params }:{ params:{ lang:string }}){
  const messages = (await import(`@/messages/${params.lang}.json`)).default as Record<string,string>
  const t = (k:string)=>messages[k] ?? k
  return (<>
    <section className="bg-gradient-to-b from-brand.light to-white">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">{t("hero.title")}</h1>
          <p className="mt-4 text-lg text-gray-700">{t("hero.subtitle")}</p>
          <div className="mt-6 flex gap-3">
            <a href={`/${params.lang}/contact/`} className="px-5 py-3 rounded-md bg-brand.primary text-white hover:opacity-90">{t("cta.contact")}</a>
            <a href={`/${params.lang}/solutions/`} className="px-5 py-3 rounded-md border hover:bg-brand.light">{t("cta.services")}</a>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div><div className="text-3xl font-bold">24/7</div><div className="text-xs">Ops</div></div>
            <div><div className="text-3xl font-bold">99.9%</div><div className="text-xs">Uptime mål</div></div>
            <div><div className="text-3xl font-bold">22%</div><div className="text-xs">Kostnadsminskning</div></div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="text-2xl font-semibold">{t("why.title")}</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {[{t:t("why.item1.t"),d:t("why.item1.d")},{t:t("why.item2.t"),d:t("why.item2.d")},{t:t("why.item3.t"),d:t("why.item3.d")}] .map(i=> (
          <div key={i.t} className="rounded-xl border p-6 bg-white"><h3 className="font-semibold">{i.t}</h3><p className="text-gray-700 mt-2">{i.d}</p></div>
        ))}
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 pb-16">
      <h2 className="text-2xl font-semibold">{t("home.testimonials")}</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
        <div className="rounded-xl border p-6 bg-white">“{t("home.t1") }”<div className="mt-3 text-gray-600">— {t("home.t1.by")}</div></div>
        <div className="rounded-xl border p-6 bg-white">“{t("home.t2") }”<div className="mt-3 text-gray-600">— {t("home.t2.by")}</div></div>
        <div className="rounded-xl border p-6 bg-white">“{t("home.t3") }”<div className="mt-3 text-gray-600">— {t("home.t3.by")}</div></div>
      </div>
    </section>
    <CTA lang={params.lang} messages={messages} />
  </>)
}
