"use client";

import type { Task } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

type TaskRowProps = {
  task: Task;
};

const priorityStyles = {
  High: {
    dot: "bg-red-500 shadow-[0_0_10px_1px_rgba(220,38,38,0.6)]",
    badge: "bg-red-500/15 text-red-600 ring-1 ring-inset ring-red-500/25",
  },
  Medium: {
    dot: "bg-amber-500 shadow-[0_0_10px_1px_rgba(245,158,11,0.6)]",
    badge: "bg-amber-500/15 text-amber-600 ring-1 ring-inset ring-amber-500/25",
  },
} as const;

export default function TaskRow({ task }: TaskRowProps) {
  const { t } = useI18n();

  const styles = priorityStyles[task.priority];

  return (
    <div className="glass-row motion hover-row flex flex-col gap-2 rounded-2xl p-3 sm:p-4 lg:flex-row lg:items-center lg:gap-4">
      <div className="flex items-center gap-3 lg:contents">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${styles.dot}`} />

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-ink">
            {t(task.title)}
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-500">
            {t(task.project)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pl-[22px] lg:contents lg:pl-0">
        <p className="shrink-0 text-[11px] text-slate-500 lg:w-24">
          {t(task.dueDate)}
        </p>

        <span
          className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${styles.badge}`}
        >
          {t(task.priority)}
        </span>
      </div>
    </div>
  );
}
