"use client";

import {
  BadgeCheck,
  CircleCheck,
  Clock,
  AlertOctagon,
  Plus,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

import { certificateSummaryStats } from "@/data/dashboard";
import type { CertificateSummaryStat } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByTone: Record<CertificateSummaryStat["tone"], LucideIcon> = {
  teal: BadgeCheck,
  green: CircleCheck,
  amber: Clock,
  rose: AlertOctagon,
};

const styleByTone: Record<CertificateSummaryStat["tone"], string> = {
  teal: "bg-teal/15 text-teal",
  green: "bg-emerald-100/70 text-emerald-600",
  amber: "bg-amber-100/70 text-amber-600",
  rose: "bg-rose-100/70 text-rose-600",
};

export default function CertStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(4,1fr)_auto]">
      {certificateSummaryStats.map((stat) => {
        const Icon = iconByTone[stat.tone];

        return (
          <div
            key={stat.id}
            className="glass motion hover-lift flex h-[76px] items-center gap-3 rounded-2xl px-4"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByTone[stat.tone]}`}
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
              {stat.sublabel && (
                <p className="text-[9.5px] text-slate-400">{t(stat.sublabel)}</p>
              )}
            </div>
          </div>
        );
      })}

      {/* Add Certificate action */}
      <div className="flex h-[76px] items-center sm:col-span-2 xl:col-span-1">
        <button className="flex h-full flex-1 items-center justify-center gap-2 rounded-2xl bg-teal px-4 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f8291]">
          <Plus size={16} />
          {t("Add Certificate")}</button>
        <button
          aria-label={t("More add options")}
          className="ml-px flex h-full items-center justify-center rounded-2xl bg-teal px-2.5 text-white transition-colors hover:bg-[#3f8291]"
        >
          <ChevronDown size={16} />
        </button>
      </div>
    </section>
  );
}
