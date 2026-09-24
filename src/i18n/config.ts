export const locales = ["tr", "en"] as const;

export type Locale = (typeof locales)[number];

/** Visitors see Turkish until they pick another language. */
export const defaultLocale: Locale = "tr";

/** Cookie that remembers the visitor's language choice. */
export const LOCALE_COOKIE = "locale";

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
