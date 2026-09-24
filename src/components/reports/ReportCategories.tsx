"use client";

import { reportCategories } from "@/data/dashboard";
import ReportFileIcon from "./ReportFileIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function ReportCategories() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <h3 className="text-[13px] font-semibold text-[#163b5b]">
        {t("Report Categories")}</h3>

      <ul className="mt-3 flex flex-col gap-1">
        {reportCategories.map((category) => (
          <li key={category.id}>
            <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white/60">
              <ReportFileIcon kind={category.kind} size={9} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] font-semibold text-[#163b5b]">
                  {t(category.label)}
                </p>
                <p className="truncate text-[10px] text-slate-400">
                  {t(category.description)}
                </p>
              </div>
              <span className="flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-slate-200/70 px-1.5 text-[10px] font-semibold text-slate-500">
                {category.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
