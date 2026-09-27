"use client";

import type { TeamMemberStatus, TeamRole } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const roleStyle: Record<TeamRole, string> = {
  "Company Admin": "bg-violet-100/80 text-violet-600",
  Manager: "bg-primary/20 text-primary-dark",
  User: "bg-slate-200/70 text-slate-600",
  Viewer: "bg-amber-100/70 text-amber-600",
};

export function TeamRoleBadge({ role }: { role: TeamRole }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-medium ${roleStyle[role]}`}
    >
      {t(role)}
    </span>
  );
}

const statusStyle: Record<TeamMemberStatus, string> = {
  Active: "bg-emerald-100/80 text-emerald-700 ring-emerald-200/70",
  Pending: "bg-amber-100/80 text-amber-700 ring-amber-200/70",
};

export function TeamStatusBadge({ status }: { status: TeamMemberStatus }) {
  const { t } = useI18n();

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[status]}`}
    >
      {t(status)}
    </span>
  );
}
