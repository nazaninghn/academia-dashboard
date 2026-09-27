"use client";

import { Mail, CalendarDays } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function ConsultantCard() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <h2 className="text-[13px] font-semibold text-ink">
        {t("Your Consultant")}</h2>

      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-dark to-primary text-sm font-bold text-white ring-2 ring-white/60 shadow-[0_0_18px_-4px_rgba(8,124,154,0.7)]">
          {t("AY")}</div>

        <div>
          <p className="text-[12px] font-semibold text-slate-700">
            {t("Ahmet Yilmaz")}</p>

          <p className="mt-0.5 text-[9px] text-slate-400">{t("Senior Consultant")}</p>
        </div>
      </div>

      <button className="glass-row motion hover-row mt-5 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-medium text-slate-600">
        <Mail size={15} className="text-primary-dark" />
        {t("Send a Message")}</button>

      <button className="glass-row motion hover-row mt-2.5 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-[10px] font-medium text-slate-600">
        <CalendarDays size={15} className="text-primary-dark" />
        {t("Schedule a Call")}</button>
    </section>
  );
}
