"use client";

import { CheckCircle2, Clock, AlertOctagon, type LucideIcon } from "lucide-react";

import type { CertificateItemStatus } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const configByStatus: Record<
  CertificateItemStatus,
  { icon: LucideIcon; style: string }
> = {
  Valid: {
    icon: CheckCircle2,
    style: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
  },
  "Expiring Soon": {
    icon: Clock,
    style: "bg-amber-100/80 text-amber-700 ring-amber-200/70",
  },
  Expired: {
    icon: AlertOctagon,
    style: "bg-rose-100/80 text-rose-700 ring-rose-200/70",
  },
};

export default function CertStatusBadge({
  status,
  note,
}: {
  status: CertificateItemStatus;
  note?: string | null;
}) {
  const { t } = useI18n();

  const { icon: Icon, style } = configByStatus[status];

  return (
    <div className="flex flex-col gap-0.5">
      <span
        className={`inline-flex w-fit items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${style}`}
      >
        <Icon size={11} />
        {t(status)}
      </span>
      {note && (
        <span className="pl-1 text-[10px] text-slate-400">({t(note)})</span>
      )}
    </div>
  );
}
