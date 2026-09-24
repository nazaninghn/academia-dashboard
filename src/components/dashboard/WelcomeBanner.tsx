"use client";


import { useI18n } from "@/i18n/I18nProvider";export default function WelcomeBanner() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift relative min-h-[140px] overflow-hidden rounded-2xl flex flex-col justify-center">
      {/* Dynamic gradient wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-light/70 via-sky/40 to-teal/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />

      {/* Floating glow orbs */}
      <div className="animate-floaty pointer-events-none absolute -bottom-8 right-24 h-32 w-72 rounded-[50%] bg-teal/25 blur-2xl" />
      <div className="animate-floaty-slow pointer-events-none absolute -bottom-10 right-0 h-32 w-48 rounded-[50%] bg-gold/30 blur-2xl" />
      <div className="animate-floaty pointer-events-none absolute -top-10 left-32 h-28 w-56 rounded-[50%] bg-sky/30 blur-3xl" />

      <div className="relative z-10 px-6 py-6 sm:px-8 sm:py-7">
        <p className="text-[13px] font-medium text-slate-600">{t("Good morning,")}</p>

        <h1 className="mt-1 bg-gradient-to-r from-[#0f3552] to-[#2c6d80] bg-clip-text text-[22px] font-bold text-transparent sm:text-[28px]">
          {t("ABC Manufacturing")}</h1>

        <p className="mt-1.5 text-[12px] text-slate-500">
          {t("Everything you need from Academia, in one place.")}</p>
      </div>

      <div className="absolute right-7 top-8 z-10 hidden text-right md:block">
        <p className="text-[12px] font-medium text-slate-600">
          {t("Standards today")}</p>

        <p className="text-[12px] font-medium text-slate-600">
          {t("for a better tomorrow")}</p>

        <div className="mt-3 ml-auto h-[2px] w-10 rounded-full bg-gradient-to-r from-orange to-gold" />
      </div>
    </section>
  );
}
