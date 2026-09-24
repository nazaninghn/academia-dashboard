"use client";

import {
  FileText,
  CircleCheck,
  Clock,
  AlertCircle,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { reportSummaryStats } from "@/data/dashboard";
import type { ReportSummaryStat } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByTone: Record<ReportSummaryStat["tone"], LucideIcon> = {
  teal: FileText,
  green: CircleCheck,
  amber: Clock,
  rose: AlertCircle,
};

const styleByTone: Record<ReportSummaryStat["tone"], string> = {
  teal: "bg-teal/15 text-teal",
  green: "bg-emerald-100/70 text-emerald-600",
  amber: "bg-orange/15 text-orange",
  rose: "bg-rose-100/70 text-rose-600",
};

export default function ReportStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {reportSummaryStats.map((stat) => {
        const Icon = iconByTone[stat.tone];

        return (
          <div
            key={stat.id}
            className="glass motion hover-lift flex h-[76px] items-center gap-3 rounded-2xl px-4"
          >
            <div
              className={`card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByTone[stat.tone]}`}
            >
              <Icon size={19} />
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <p className="text-[20px] font-bold leading-none text-[#163b5b]">
                  {stat.value}
                </p>
                {stat.trend && (
                  <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-600">
                    <TrendingUp size={11} />
                    {t(stat.trend)}
                  </span>
                )}
              </div>
              <p className="mt-1.5 truncate text-[11px] text-slate-500">
                {t(stat.label)}
              </p>
              {stat.trendNote && (
                <p className="text-[9.5px] text-slate-400">{t(stat.trendNote)}</p>
              )}
            </div>

            {stat.percent && (
              <span className="shrink-0 self-start text-[11px] font-semibold text-slate-400">
                {t(stat.percent)}
              </span>
            )}
          </div>
        );
      })}
    </section>
  );
}
