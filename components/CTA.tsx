import Link from "next/link"
export default function CTA() {
  return (
    <section className="bg-brand.primary text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold">Redo att modernisera er IT?</h3>
          <p className="opacity-90 mt-1">Vi hjälper er med drift, säkerhet och open-source i molnet.</p>
        </div>
        <Link href="/contact/" className="bg-white text-brand.primary px-5 py-3 rounded-md font-medium hover:opacity-90">
          Boka kostnadsfri konsultation
        </Link>
      </div>
    </section>
  )
}
