"use client"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="ViTech Cloud" className="h-8 w-8" />
          <span className="font-semibold">ViTech Cloud</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/services/" className="hover:text-brand.primary">Tjänster</Link>
          <Link href="/about/" className="hover:text-brand.primary">Om oss</Link>
          <Link href="/contact/" className="px-4 py-2 rounded-md bg-brand.primary text-white hover:opacity-90">Kontakta oss</Link>
        </nav>
      </div>
    </header>
  )
}
