"use client";

import { recentDownloads } from "@/data/dashboard";
import ReportFileIcon from "./ReportFileIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function RecentDownloads() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-semibold text-ink">
          {t("Recent Downloads")}</h3>
        <button className="text-[11px] font-medium text-primary-dark transition-colors hover:text-primary-dark">
          {t("View All")}</button>
      </div>

      <ul className="mt-3 flex flex-col gap-2.5">
        {recentDownloads.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <ReportFileIcon kind={item.fileKind} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11.5px] font-medium text-ink">
                {t(item.name)}
              </p>
              <p className="text-[10px] text-slate-400">{t(item.date)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
