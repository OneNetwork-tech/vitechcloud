# ViTech Cloud – Next.js Static Site

Modern, Scandinavian-style website for ViTech Cloud. Built with Next.js (App Router) + Tailwind. Exported as static HTML for shared cPanel hosting.

## Local Dev

```bash
npm install
npm run dev
```

## Build (Static Export)

```bash
npm run build
# outputs to /out
```

## Deploy (cPanel via GitHub Actions)

1. Push to `main`.
2. In GitHub → Settings → Secrets and variables → Actions, add:
   - `CPANEL_FTP_SERVER`
   - `CPANEL_FTP_USERNAME`
   - `CPANEL_FTP_PASSWORD`
   - (Optional) `CPANEL_FTP_PORT` (21 for FTP, 990 for FTPS implicit)

3. The workflow builds and uploads `/out` to `/public_html/`.

> For SFTP-only hosts, switch the action as noted in the workflow YAML comments.

## Contact Form

Replace the `action` URL in `app/(site)/contact/page.tsx` with Formspree/Getform endpoint.

