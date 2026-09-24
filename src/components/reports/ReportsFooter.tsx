"use client";

import { FileBarChart, MessageSquare, Lightbulb, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function ReportsFooter() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {/* Need a custom report */}
      <section className="glass motion hover-lift flex items-center gap-3 overflow-hidden rounded-2xl p-4">
        <div className="relative hidden h-[60px] w-[90px] shrink-0 overflow-hidden rounded-xl sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-teal/50 via-sky/40 to-sky-light/60" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-teal/50 to-transparent" />
          <div className="animate-floaty absolute -bottom-3 right-2 h-9 w-14 rounded-[50%] bg-gold/30 blur-md" />
        </div>

        <div className="min-w-0">
          <h3 className="text-[13px] font-semibold text-[#163b5b]">
            {t("Need a custom report?")}</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            {t("Request a tailored report for your specific needs.")}</p>
          <button className="mt-2 flex items-center gap-2 rounded-full bg-teal px-4 py-2 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f8291]">
            <FileBarChart size={14} />
            {t("Request Report")}</button>
        </div>
      </section>

      {/* Schedule a Review */}
      <section className="glass motion hover-lift rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky/25 text-teal ring-1 ring-inset ring-white/50">
            <MessageSquare size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-[#163b5b]">
              {t("Schedule a Review")}</h3>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              {t("Discuss your reports with your consultant and get expert insights.")}</p>
            <button className="mt-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-1.5 text-[11.5px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
              {t("Schedule a Call")}</button>
          </div>
        </div>
      </section>

      {/* Tip */}
      <section className="glass motion hover-lift rounded-2xl p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold/20 text-orange ring-1 ring-inset ring-white/50">
            <Lightbulb size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-[#163b5b]">{t("Tip")}</h3>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              {t("Regular reporting helps you track progress and stay compliant with international standards.")}</p>
            <button className="mt-2 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-teal transition-colors hover:text-[#3f8291]">
              {t("Learn More")}<ArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
