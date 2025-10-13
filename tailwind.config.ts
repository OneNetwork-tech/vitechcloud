import type { Config } from "tailwindcss"
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { primary: "#0055A4", light: "#E6EEF3", accent: "#00AEEF" }
      }
    }
  },
  plugins: []
} satisfies Config
