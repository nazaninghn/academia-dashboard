"use client";

import { Plus, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function RequestService() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift flex flex-col gap-4 rounded-2xl p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/30 to-primary-dark/25 text-primary-dark ring-1 ring-inset ring-white/50 shadow-[0_0_18px_-4px_rgba(8,124,154,0.6)]">
          <Plus size={24} />
        </div>

        <div>
          <h2 className="text-[13px] font-semibold text-ink">
            {t("Need a New Service?")}</h2>

          <p className="mt-1 text-[10px] text-slate-500">
            {t("Explore our services and start a new project with Academia.")}</p>
        </div>
      </div>

      <button className="group flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-[11px] font-bold text-white shadow-lg shadow-primary-dark/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary-dark/35">
        {t("Request a Service")}<ArrowRight
          size={14}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </button>
    </section>
  );
}
