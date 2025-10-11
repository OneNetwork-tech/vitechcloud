import type { Metadata } from "next"
import "./../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "ViTech Cloud – Managed IT & Cloud Solutions",
  description: "Managed IT, open-source deployments, and cloud services for Swedish businesses.",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "ViTech Cloud",
    description: "Managed IT & Cloud in Sweden",
    url: "https://vitechcloud.se",
    siteName: "ViTech Cloud"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
