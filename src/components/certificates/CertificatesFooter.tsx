"use client";

import { Mail, CalendarClock, MessageCircle, ArrowRight } from "lucide-react";

import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

export default function CertificatesFooter() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Your Consultant */}
      <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
        <p className="text-[12px] font-semibold text-ink">
          {t("Your Consultant")}</p>

        <div className="mt-3 flex items-center gap-3">
          <ConsultantAvatar name="Ahmet Yılmaz" />
          <div className="min-w-0">
            <p className="truncate text-[12.5px] font-semibold text-ink">
              {t("Ahmet Yılmaz")}</p>
            <p className="truncate text-[10.5px] text-slate-400">
              {t("Senior Consultant")}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <Mail size={13} />
            {t("Send Message")}</button>
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[11.5px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <CalendarClock size={13} />
            {t("Schedule a Call")}</button>
        </div>
      </section>

      {/* Need Help */}
      <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/25 text-primary-dark ring-1 ring-inset ring-white/50">
            <MessageCircle size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-ink">
              {t("Need Help?")}</h3>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              {t("Have questions about your certificates or need support with renewal? We're here to help.")}</p>
            <button className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-primary-dark transition-colors hover:text-primary-dark">
              {t("Contact Support")}<ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Compliance banner */}
      <section className="motion hover-lift relative flex items-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary-dark to-primary p-5">
        <div className="animate-floaty pointer-events-none absolute -bottom-8 right-2 h-24 w-44 rounded-[50%] bg-primary-dark/30 blur-2xl" />
        <div className="animate-floaty-slow pointer-events-none absolute -top-6 right-16 h-20 w-32 rounded-[50%] bg-accent/30 blur-2xl" />

        <div className="relative z-10">
          <p className="text-[13px] font-semibold text-white">
            {t("Compliance today.")}</p>
          <p className="text-[12px] text-white/70">
            {t("A more sustainable tomorrow.")}</p>
          <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-accent-dark to-accent" />
        </div>
      </section>
    </div>
  );
}
