export default function Contact() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14">
      <h1 className="text-3xl font-semibold">Kontakta oss</h1>
      <p className="mt-3 text-gray-700">Skicka ett meddelande så återkommer vi.</p>
      {/* Replace action with your Formspree / Getform endpoint */}
      <form action="https://formspree.io/f/your-id" method="POST" className="mt-6 grid gap-4">
        <input className="border rounded-md p-3" name="name" placeholder="Namn" required />
        <input className="border rounded-md p-3" name="email" type="email" placeholder="E-post" required />
        <textarea className="border rounded-md p-3 min-h-40" name="message" placeholder="Meddelande" required />
        <button className="bg-brand.primary text-white px-5 py-3 rounded-md w-fit hover:opacity-90">Skicka</button>
      </form>
    </div>
  )
}
