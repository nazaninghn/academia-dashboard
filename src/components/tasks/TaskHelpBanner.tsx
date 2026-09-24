"use client";

import { Mail, CalendarClock, Lightbulb } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function TaskHelpBanner() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
      {/* Need help card */}
      <section className="glass motion hover-lift flex flex-col gap-4 overflow-hidden rounded-2xl p-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative hidden h-[64px] w-[100px] shrink-0 overflow-hidden rounded-xl sm:block">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/50 via-sky/40 to-sky-light/60" />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal/50 to-transparent" />
            <div className="animate-floaty absolute -bottom-3 right-2 h-9 w-14 rounded-[50%] bg-gold/30 blur-md" />
          </div>

          <div>
            <h3 className="text-[14px] font-semibold text-[#163b5b]">
              {t("Need help with this task?")}</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              {t("Your consultant is here to support you.")}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <Mail size={14} />
            {t("Send a Message")}</button>
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <CalendarClock size={14} />
            {t("Schedule a Call")}</button>
        </div>
      </section>

      {/* Tip card */}
      <section className="glass motion hover-lift flex items-start gap-3 rounded-2xl p-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-orange ring-1 ring-inset ring-white/50">
          <Lightbulb size={18} />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-[#163b5b]">{t("Tip")}</p>
          <p className="mt-1 text-[11px] leading-5 text-slate-500">
            {t("Keep your environmental records up to date to ensure a smooth audit process.")}</p>
        </div>
      </section>
    </div>
  );
}
