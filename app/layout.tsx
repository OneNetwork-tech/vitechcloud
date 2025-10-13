import "./globals.css"
export const metadata = { title: "ViTech Cloud", description: "Managed IT, ERP/CRM and Cloud" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="sv"><body className="min-h-screen">{children}</body></html>)
}
