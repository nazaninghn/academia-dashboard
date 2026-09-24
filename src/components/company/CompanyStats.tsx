"use client";

import {
  Users,
  FolderKanban,
  ShieldCheck,
  MapPin,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";

import { companyStats } from "@/data/dashboard";
import type { CompanyStatKind } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByKind: Record<CompanyStatKind, LucideIcon> = {
  employees: Users,
  projects: FolderKanban,
  certificates: ShieldCheck,
  locations: MapPin,
  established: CalendarDays,
};

const styleByKind: Record<CompanyStatKind, string> = {
  employees: "bg-sky/25 text-teal",
  projects: "bg-orange/15 text-orange",
  certificates: "bg-emerald-100/70 text-emerald-600",
  locations: "bg-teal/15 text-teal",
  established: "bg-violet-100/70 text-violet-600",
};

export default function CompanyStats() {
  const { t } = useI18n();

  return (
    <section className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {companyStats.map((stat) => {
        const Icon = iconByKind[stat.kind];

        return (
          <div
            key={stat.id}
            className="glass motion hover-lift flex h-[76px] items-center gap-3 rounded-2xl px-4"
          >
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByKind[stat.kind]}`}
            >
              <Icon size={19} />
            </div>

            <div className="min-w-0">
              <p className="text-[20px] font-bold leading-none text-[#163b5b]">
                {t(stat.value)}
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
