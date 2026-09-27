"use client";

import { Users, UserCheck, UsersRound, UserPlus, type LucideIcon } from "lucide-react";

import { teamSummaryStats } from "@/data/dashboard";
import type { TeamSummaryStat } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByTone: Record<TeamSummaryStat["tone"], LucideIcon> = {
  teal: Users,
  green: UserCheck,
  sky: UsersRound,
  slate: UserPlus,
};

const styleByTone: Record<TeamSummaryStat["tone"], string> = {
  teal: "bg-primary-dark/15 text-primary-dark",
  green: "bg-emerald-100/70 text-emerald-600",
  sky: "bg-primary/25 text-primary-dark",
  slate: "bg-slate-200/60 text-slate-500",
};

export default function TeamStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-2 gap-3 xl:grid-cols-[repeat(4,1fr)_auto]">
      {teamSummaryStats.map((stat) => {
        const Icon = iconByTone[stat.tone];

        return (
          <div
            key={stat.id}
            className="glass motion hover-lift flex h-[76px] items-center gap-3 rounded-2xl px-3 sm:px-4"
          >
            <div
              className={`card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByTone[stat.tone]}`}
            >
              <Icon size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[20px] font-bold leading-none text-ink">
                {stat.value}
              </p>
              <p className="mt-1.5 truncate text-[11px] text-slate-500">
                {t(stat.label)}
              </p>
            </div>
          </div>
        );
      })}

      {/* Invite Member action */}
      <div className="col-span-2 flex h-[76px] items-center xl:col-span-1">
        <button className="flex h-full flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
          <UserPlus size={16} />
          {t("Invite Member")}</button>
      </div>
    </section>
  );
}
