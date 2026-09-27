"use client";

import { BookOpen, ArrowRight, Leaf } from "lucide-react";

import { processSteps } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

export default function ServicesFooter() {
  const { t } = useI18n();

  return (
    <>
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[340px_1fr]">
        {/* Not sure which service */}
        <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/25 text-primary-dark ring-1 ring-inset ring-white/50">
            <BookOpen size={18} />
          </div>
          <h3 className="mt-3 text-[13px] font-semibold text-ink">
            {t("Not sure which service is right for you?")}</h3>
          <p className="mt-1 text-[11px] leading-4 text-slate-500">
            {t("Our consultants are here to help you find the best solution for your needs.")}</p>
          <button className="mt-3 rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
            {t("Contact Your Consultant")}</button>
        </section>

        {/* Our Process */}
        <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
          <h3 className="text-[13px] font-semibold text-ink">
            {t("Our Process")}</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            {t("A simple and transparent process from consultation to success.")}</p>

          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start">
            {processSteps.map((step, index) => (
              <div key={step.id} className="flex flex-1 items-start gap-3">
                <div className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-[12px] font-semibold text-white">
                    {step.step}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-semibold text-ink">
                      {t(step.title)}
                    </p>
                    <p className="text-[10.5px] text-slate-400">
                      {t(step.description)}
                    </p>
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="mt-1 hidden shrink-0 text-slate-300 sm:block"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Closing banner */}
      <section className="glass motion hover-lift relative flex flex-col gap-3 overflow-hidden rounded-2xl p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/60 via-primary/40 to-primary/40" />
        <div className="animate-floaty pointer-events-none absolute -bottom-8 right-24 h-20 w-52 rounded-[50%] bg-primary-dark/20 blur-2xl" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 ring-1 ring-inset ring-white/50">
            <Leaf size={17} />
          </div>
          <div>
            <p className="text-[13px] font-semibold text-ink">
              {t("Together for a More Sustainable Tomorrow")}</p>
            <p className="text-[11px] text-slate-500">
              {t("Compliance today. A better tomorrow.")}</p>
          </div>
        </div>

        <button className="relative z-10 inline-flex shrink-0 items-center gap-1.5 text-[11.5px] font-semibold text-primary-dark transition-colors hover:text-primary-dark">
          {t("Learn More About Our Approach")}<ArrowRight size={14} />
        </button>
      </section>
    </>
  );
}
