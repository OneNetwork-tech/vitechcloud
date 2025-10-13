export const SUPPORTED_LANGS = ["sv", "en"] as const
export type Lang = typeof SUPPORTED_LANGS[number]
export function isLang(v:string): v is Lang { return SUPPORTED_LANGS.includes(v as any) }
export async function getMessages(lang: Lang): Promise<Record<string,string>> {
  switch (lang) {
    case "en": return (await import("../messages/en.json")).default as any
    case "sv":
    default: return (await import("../messages/sv.json")).default as any
  }
}
