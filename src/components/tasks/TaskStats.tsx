"use client";

import {
  CircleCheckBig,
  AlertCircle,
  Clock,
  CircleDot,
  CheckCircle2,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { taskSummaryStats } from "@/data/dashboard";
import type { TaskSummaryStat } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByTone: Record<TaskSummaryStat["tone"], LucideIcon> = {
  teal: CircleCheckBig,
  rose: AlertCircle,
  orange: Clock,
  green: CircleDot,
  slate: CheckCircle2,
};

const styleByTone: Record<TaskSummaryStat["tone"], string> = {
  teal: "bg-teal/15 text-teal",
  rose: "bg-rose-100/80 text-rose-600",
  orange: "bg-orange/15 text-orange",
  green: "bg-emerald-100/70 text-emerald-600",
  slate: "bg-slate-200/60 text-slate-500",
};

export default function TaskStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {taskSummaryStats.map((stat) => {
        const Icon = iconByTone[stat.tone];

        return (
          <div
            key={stat.id}
            className="glass motion hover-lift group flex h-[76px] items-center gap-3 rounded-2xl px-4"
          >
            <div
              className={`card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByTone[stat.tone]}`}
            >
              <Icon size={20} />
            </div>

            <div className="min-w-0">
              <p className="text-[20px] font-bold leading-none text-[#163b5b]">
                {stat.value}
              </p>
              <p className="mt-1.5 truncate text-[11px] text-slate-500">
                {t(stat.label)}
                {stat.sublabel && (
                  <span className="block text-[9px] text-slate-400">
                    {t(stat.sublabel)}
                  </span>
                )}
              </p>
            </div>

            <ArrowRight
              size={14}
              className="ml-auto shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5"
            />
          </div>
        );
      })}
    </section>
  );
}
