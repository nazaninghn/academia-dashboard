"use client";


import { useI18n } from "@/i18n/I18nProvider";export default function MessagesBanner() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift relative min-h-[110px] overflow-hidden rounded-2xl flex flex-col justify-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-sky-light/40 to-sky/40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal/25 to-transparent" />
      <div className="animate-floaty pointer-events-none absolute -bottom-10 right-24 h-24 w-72 rounded-[50%] bg-teal/25 blur-2xl" />
      <div className="animate-floaty-slow pointer-events-none absolute -bottom-12 right-0 h-24 w-56 rounded-[50%] bg-gold/25 blur-2xl" />

      <div className="relative z-10 flex items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <div>
          <h1 className="bg-gradient-to-r from-[#0f3552] to-[#2c6d80] bg-clip-text text-[22px] font-bold sm:text-[26px] text-transparent">
            {t("Messages")}</h1>
          <p className="mt-1 text-[12px] text-slate-500">
            {t("Stay connected with your consultant, project team, and Academia support.")}</p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-[12px] font-medium text-slate-600">{t("Better")}</p>
          <p className="text-[12px] font-medium text-slate-600">{t("communication")}</p>
          <p className="text-[12px] font-medium text-slate-600">
            {t("for a more sustainable tomorrow.")}</p>
        </div>
      </div>
    </section>
  );
}
