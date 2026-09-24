"use client";

import type { ProjectStatus } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const styleByStatus: Record<ProjectStatus, string> = {
  "On Track": "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
  "At Risk": "bg-amber-100/80 text-amber-700 ring-amber-200/70",
  Delayed: "bg-rose-100/80 text-rose-700 ring-rose-200/70",
  Planning: "bg-sky/20 text-teal ring-sky/30",
  "On Hold": "bg-slate-200/70 text-slate-600 ring-slate-300/60",
  Completed: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
};

export default function ProjectStatusBadge({
  status,
}: {
  status: ProjectStatus;
}) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${styleByStatus[status]}`}
    >
      {t(status)}
    </span>
  );
}
