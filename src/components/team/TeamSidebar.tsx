"use client";

import {
  UserPlus,
  Crown,
  Users,
  UserRound,
  Eye,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

import { teamRoles } from "@/data/dashboard";
import type { TeamRoleInfo } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const roleIcon: Record<TeamRoleInfo["iconKind"], { icon: LucideIcon; style: string }> = {
  crown: { icon: Crown, style: "bg-amber-100/70 text-amber-500" },
  users: { icon: Users, style: "bg-primary/25 text-primary-dark" },
  user: { icon: UserRound, style: "bg-emerald-100/70 text-emerald-600" },
  eye: { icon: Eye, style: "bg-slate-200/70 text-slate-500" },
};

export default function TeamSidebar() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col">
      {/* Invite a Member */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/25 text-primary-dark ring-1 ring-inset ring-white/50">
            <UserPlus size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-ink">
              {t("Invite a Member")}</h3>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              {t("Invite team members to collaborate on projects, manage documents, and more.")}</p>
          </div>
        </div>
        <button className="mt-3 w-full rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[12px] font-semibold text-primary-dark shadow-sm transition-colors hover:bg-white/90">
          {t("Send Invitation")}</button>
      </section>

      {/* Team Roles */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-[13px] font-semibold text-ink">
            {t("Team Roles")}</h3>
          <button className="text-[11px] font-medium text-primary-dark transition-colors hover:text-primary-dark">
            {t("Manage Roles")}</button>
        </div>

        <ul className="mt-3 space-y-3">
          {teamRoles.map((role) => {
            const { icon: Icon, style } = roleIcon[role.iconKind];
            return (
              <li key={role.id} className="flex items-start gap-2.5">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/50 ${style}`}
                >
                  <Icon size={14} />
                </div>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold text-ink">
                    {t(role.role)}
                  </p>
                  <p className="text-[10.5px] leading-4 text-slate-400">
                    {t(role.description)}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Need Help */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-dark/15 text-primary-dark ring-1 ring-inset ring-white/50">
            <MessageCircle size={18} />
          </div>
          <div>
            <h3 className="text-[13px] font-semibold text-ink">
              {t("Need Help?")}</h3>
            <p className="mt-1 text-[11px] leading-4 text-slate-500">
              {t("Our team is here to help you manage your organization.")}</p>
          </div>
        </div>
        <button className="mt-3 w-full rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
          {t("Contact Support")}</button>
      </section>
    </div>
  );
}
