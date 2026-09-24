"use client";

import type { TaskStatus, TaskUrgency } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const priorityStyle: Record<TaskUrgency, string> = {
  High: "bg-rose-100/80 text-rose-700 ring-rose-200/70",
  Medium: "bg-amber-100/80 text-amber-700 ring-amber-200/70",
  Low: "bg-sky/20 text-teal ring-sky/30",
};

const statusStyle: Record<TaskStatus, string> = {
  Overdue: "bg-rose-100/80 text-rose-700 ring-rose-200/70",
  "In Progress": "bg-sky/20 text-teal ring-sky/30",
  Open: "bg-slate-200/70 text-slate-600 ring-slate-300/60",
  "Not Started": "bg-slate-200/70 text-slate-500 ring-slate-300/60",
  Completed: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
};

export function PriorityBadge({ priority }: { priority: TaskUrgency }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${priorityStyle[priority]}`}
    >
      {t(priority)}
    </span>
  );
}

export function TaskStatusBadge({ status }: { status: TaskStatus }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[status]}`}
    >
      {t(status)}
    </span>
  );
}
