"use client";

import { Leaf, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function DocumentsFooter() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
      {/* Template card */}
      <section className="glass motion hover-lift flex flex-col gap-4 overflow-hidden rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 ring-1 ring-inset ring-white/50">
            <Leaf size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-[#163b5b]">
              {t("Need a document template?")}</h3>
            <p className="mt-1 text-[11px] text-slate-500">
              {t("Access our template library to get started quickly.")}</p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-full bg-teal px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f8291]">
          {t("Browse Templates")}<ArrowRight size={15} />
        </button>
      </section>

      {/* Compliance card */}
      <section className="glass motion hover-lift relative flex items-center overflow-hidden rounded-2xl p-4">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-sky-light/40 to-sky/40" />
        <div className="animate-floaty pointer-events-none absolute -bottom-8 right-4 h-20 w-40 rounded-[50%] bg-teal/20 blur-2xl" />

        <div className="relative z-10">
          <p className="text-[12px] font-semibold text-[#163b5b]">
            {t("Compliance today.")}</p>
          <p className="text-[11px] text-slate-500">
            {t("A more sustainable tomorrow.")}</p>
          <div className="mt-3 h-[2px] w-10 rounded-full bg-gradient-to-r from-orange to-gold" />
        </div>
      </section>
    </div>
  );
}
