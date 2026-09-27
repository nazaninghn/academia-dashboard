"use client";

import { Clock, ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export default function RenewalCard() {
  const { t } = useI18n();
  // Word order differs per language, so split the sentence around the highlight.
  const [before, after] = t(
    "Your ISO 45001 certificate expires in {days}.",
  ).split("{days}");

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100/70 text-amber-600 ring-1 ring-inset ring-white/50">
          <Clock size={18} />
        </div>
        <div>
          <h3 className="text-[13px] font-semibold text-ink">
            {t("Certificate Renewal")}</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            {t("Stay compliant without interruption.")}</p>
        </div>
      </div>

      <p className="mt-3 text-[11.5px] leading-5 text-slate-600">
        {before}
        <span className="font-semibold text-amber-600">{t("32 days")}</span>
        {after}
      </p>

      <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
        {t("Start Renewal Process")}<ArrowRight size={15} />
      </button>
    </section>
  );
}
