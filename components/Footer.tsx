export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} ViTech Cloud. Alla rättigheter förbehållna.</p>
          <p>Säkra och skalbara IT-tjänster i molnet.</p>
        </div>
      </div>
    </footer>
  )
}
