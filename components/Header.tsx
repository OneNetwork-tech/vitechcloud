"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header({ lang, messages }: { lang: string, messages: Record<string,string> }) {
  const t = (k:string) => messages[k] ?? k
  const pathname = usePathname() || ""
  function switchLangPath(to: "sv" | "en") {
    const re = /^\/(sv|en)(\/|$)/
    const current = pathname || "/"
    let next = current
    if (re.test(current)) next = current.replace(re, `/${to}/`)
    else next = `/${to}${current === "/" ? "/" : current}`
    if (!next.endsWith("/")) next += "/"
    return next
  }
  const base = `/${lang}`
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
        <Link href={`${base}/`} className="flex items-center gap-2">
          <img src="/logo.svg" alt="ViTech Cloud" className="h-8 w-8" />
          <span className="font-semibold">{t("brand")}</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href={`${base}/solutions/`} className="hover:text-brand.primary">{t("nav.solutions")}</Link>
          <Link href={`${base}/services/`} className="hover:text-brand.primary">{t("nav.services")}</Link>
          <Link href={`${base}/cases/`} className="hover:text-brand.primary">{t("nav.cases")}</Link>
          <Link href={`${base}/faq/`} className="hover:text-brand.primary">{t("nav.faq")}</Link>
          <Link href={`${base}/blog/`} className="hover:text-brand.primary">{t("nav.blog")}</Link>
          <Link href={`${base}/plans/`} className="hover:text-brand.primary">{t("nav.plans")}</Link>
          <Link href={`${base}/contact/`} className="px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90">{t("nav.contact")}</Link>
          <div className="ml-2 flex items-center gap-2">
            <Link href={switchLangPath("sv")} aria-label="Svenska" className={lang==="sv"?"opacity-100":"opacity-60 hover:opacity-100"}>🇸🇪</Link>
            <span className="text-gray-400">/</span>
            <Link href={switchLangPath("en")} aria-label="English" className={lang==="en"?"opacity-100":"opacity-60 hover:opacity-100"}>🇬🇧</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
