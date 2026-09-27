"use client";

import {
  CheckCircle2,
  Clock,
  FileUp,
  XCircle,
  Send,
  type LucideIcon,
} from "lucide-react";

import type { DocStatus } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const configByStatus: Record<
  DocStatus,
  { icon: LucideIcon; style: string }
> = {
  Approved: {
    icon: CheckCircle2,
    style: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
  },
  Pending: {
    icon: Clock,
    style: "bg-amber-100/80 text-amber-700 ring-amber-200/70",
  },
  Required: {
    icon: FileUp,
    style: "bg-primary/20 text-primary-dark ring-primary/30",
  },
  Rejected: {
    icon: XCircle,
    style: "bg-rose-100/80 text-rose-700 ring-rose-200/70",
  },
  Submitted: {
    icon: Send,
    style: "bg-slate-200/70 text-slate-600 ring-slate-300/60",
  },
};

export default function DocStatusBadge({ status }: { status: DocStatus }) {
  const { t } = useI18n();

  const { icon: Icon, style } = configByStatus[status];

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${style}`}
    >
      <Icon size={11} />
      {t(status)}
    </span>
  );
}
