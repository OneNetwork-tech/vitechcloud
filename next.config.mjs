/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optional: If you're using internationalization
  // i18n: {
  //   locales: ['en', 'sv'],
  //   defaultLocale: 'en',
  // },
}

module.exports = nextConfig