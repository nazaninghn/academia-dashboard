"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function NotificationsBanner() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift relative min-h-[110px] overflow-hidden rounded-2xl flex flex-col justify-center">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/70 via-sky-light/40 to-sky/40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-teal/25 to-transparent" />
      <div className="animate-floaty pointer-events-none absolute -bottom-10 right-24 h-24 w-72 rounded-[50%] bg-teal/25 blur-2xl" />
      <div className="animate-floaty-slow pointer-events-none absolute -bottom-12 right-0 h-24 w-56 rounded-[50%] bg-gold/25 blur-2xl" />

      <div className="relative z-10 flex flex-col justify-center px-5 py-5 sm:px-8">
        <nav className="flex items-center gap-1 text-[11px] text-slate-500">
          <Link href="/" className="transition-colors hover:text-teal">
            {t("Home")}</Link>
          <ChevronRight size={12} className="text-slate-400" />
          <span className="font-medium text-slate-600">{t("Notifications")}</span>
        </nav>

        <div className="mt-1 flex items-end justify-between gap-4">
          <div>
            <h1 className="bg-gradient-to-r from-[#0f3552] to-[#2c6d80] bg-clip-text text-[22px] font-bold sm:text-[26px] text-transparent">
              {t("Notifications")}</h1>
            <p className="mt-1 text-[12px] text-slate-500">
              {t("Stay updated with the latest activities, updates, and important alerts.")}</p>
          </div>

          <div className="hidden text-right sm:block">
            <p className="text-[12px] font-medium text-slate-600">
              {t("Small updates")}</p>
            <p className="text-[12px] font-medium text-slate-600">
              {t("drive big progress.")}</p>
            <div className="mt-2 ml-auto h-[2px] w-10 rounded-full bg-gradient-to-r from-orange to-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
