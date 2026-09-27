"use client";

import type { ReportStatus, ReportType } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const typeStyle: Record<ReportType, string> = {
  "Audit Report": "bg-primary/20 text-primary-dark",
  Compliance: "bg-violet-100/80 text-violet-600",
  Sustainability: "bg-emerald-100/80 text-emerald-600",
  "Project Report": "bg-amber-100/80 text-amber-600",
  "Certificate Report": "bg-rose-100/80 text-rose-600",
};

export function ReportTypeBadge({ type }: { type: ReportType }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium ${typeStyle[type]}`}
    >
      {t(type)}
    </span>
  );
}

const statusStyle: Record<ReportStatus, string> = {
  Completed: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
  "In Progress": "bg-primary/20 text-primary-dark ring-primary/30",
  Pending: "bg-amber-100/80 text-amber-700 ring-amber-200/70",
};

export function ReportStatusBadge({ status }: { status: ReportStatus }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[status]}`}
    >
      {t(status)}
    </span>
  );
}
