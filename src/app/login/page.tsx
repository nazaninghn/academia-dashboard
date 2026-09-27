import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { cookies } from "next/headers";

import AuthCard, { AuthFooter } from "@/components/auth/AuthCard";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/i18n/config";
import { translate } from "@/i18n/translate";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

async function getLocale(): Promise<Locale> {
  const saved = (await cookies()).get(LOCALE_COOKIE)?.value;
  return isLocale(saved) ? saved : defaultLocale;
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  return {
    title: `${translate(locale, "Sign In")} · Academia`,
    description: translate(locale, "Sign in or create your Academia account."),
  };
}

export default function LoginPage() {
  return (
    <main
      className={`${montserrat.className} relative flex min-h-dvh items-center justify-center px-4 py-10`}
    >
      {/* Ambient floating orbs to match the dashboard's glass aesthetic */}
      <div className="animate-floaty pointer-events-none absolute left-[8%] top-[14%] h-40 w-40 rounded-full bg-primary-dark/25 blur-3xl" />
      <div className="animate-floaty-slow pointer-events-none absolute bottom-[12%] right-[10%] h-48 w-48 rounded-full bg-accent/25 blur-3xl" />
      <div className="animate-floaty pointer-events-none absolute right-[26%] top-[8%] h-28 w-28 rounded-full bg-primary/30 blur-3xl" />

      <div className="relative z-10 w-full animate-rise">
        <AuthCard />

        <AuthFooter />
      </div>
    </main>
  );
}
