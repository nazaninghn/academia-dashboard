"use client";

import {
  Database,
  FileUp,
  CircleCheck,
  Clock,
  AlertCircle,
  XCircle,
  type LucideIcon,
} from "lucide-react";

import { docSummaryStats } from "@/data/dashboard";
import type { DocSummaryStat } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByTone: Record<DocSummaryStat["tone"], LucideIcon> = {
  teal: Database,
  orange: FileUp,
  green: CircleCheck,
  amber: Clock,
  rose: AlertCircle,
  slate: XCircle,
};

const styleByTone: Record<DocSummaryStat["tone"], string> = {
  teal: "bg-teal/15 text-teal",
  orange: "bg-orange/15 text-orange",
  green: "bg-emerald-100/70 text-emerald-600",
  amber: "bg-amber-100/70 text-amber-600",
  rose: "bg-rose-100/70 text-rose-600",
  slate: "bg-slate-200/60 text-slate-500",
};

export default function DocStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
      {docSummaryStats.map((stat) => {
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

            <div className="min-w-0">
              <p className="text-[20px] font-bold leading-none text-[#163b5b]">
                {stat.value}
              </p>
              <p className="mt-1.5 truncate text-[11px] text-slate-500">
                {t(stat.label)}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
