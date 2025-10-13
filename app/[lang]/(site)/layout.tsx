import type { Metadata } from "next"
import "../../globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { SUPPORTED_LANGS, isLang, getMessages } from "@/lib/i18n"
export const metadata: Metadata = {
  title: "ViTech Cloud – Managed IT, ERP/CRM & Cloud",
  description: "Operations, security and cloud for modern businesses.",
  icons: { icon: "/logo.svg" },
}
export function generateStaticParams(){ return SUPPORTED_LANGS.map(l=>({lang:l})) }
export default async function LangLayout({ children, params }:{children:React.ReactNode, params:{lang:string}}){
  const lang = isLang(params.lang) ? params.lang : "sv"
  const messages = await getMessages(lang)
  return (
    <html lang={lang}><body className="min-h-screen flex flex-col">
      <Header lang={lang} messages={messages} />
      <main className="flex-1">{children}</main>
      <Footer messages={messages} />
    </body></html>
  )
}
