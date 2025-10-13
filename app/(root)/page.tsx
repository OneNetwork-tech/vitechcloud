export default function RootRedirect() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <noscript><meta httpEquiv="refresh" content="0; url=/sv/" /></noscript>
      <script dangerouslySetInnerHTML={{ __html: `window.location.replace('/sv/');` }} />
      <p>Redirecting to <a href="/sv/">/sv/</a>…</p>
    </div>
  )
}
