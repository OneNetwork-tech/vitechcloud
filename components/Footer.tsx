export default function Footer({ messages }: { messages: Record<string,string> }) {
  const t = (k:string) => messages[k] ?? k
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} ViTech Cloud</p>
          <p>{t("footer.tag")}</p>
        </div>
      </div>
    </footer>
  )
}
