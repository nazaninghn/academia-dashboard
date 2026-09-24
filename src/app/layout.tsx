import type { Metadata } from "next";
import { cookies } from "next/headers";

import { I18nProvider } from "@/i18n/I18nProvider";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { translate } from "@/i18n/translate";
import "./globals.css";

/** Reads the visitor's saved language, falling back to Turkish. */
async function getLocale(): Promise<Locale> {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(saved) ? saved : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: translate(locale, "Academia Dashboard"),
    description: translate(locale, "Academia Client Portal Dashboard"),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body>
        <I18nProvider initialLocale={locale}>{children}</I18nProvider>
      </body>
    </html>
  );
}
