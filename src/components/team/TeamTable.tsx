"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { teamMembers } from "@/data/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { TeamRoleBadge, TeamStatusBadge } from "./TeamBadges";
import { useI18n } from "@/i18n/I18nProvider";

const dropdowns = ["All Roles", "All Departments", "All Statuses"];
const PAGE_SIZE = 10;

export default function TeamTable() {
  const { t } = useI18n();

  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return teamMembers;

    return teamMembers.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.department.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q),
    );
  }, [query]);

  const visible = filtered.slice(0, PAGE_SIZE);

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm sm:w-[190px]">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("Search team members...")}
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
            />
          </div>

          {dropdowns.map((label) => (
            <button
              key={label}
              className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90"
            >
              {t(label)}
              <ChevronDown size={13} className="text-slate-400" />
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <SlidersHorizontal size={14} />
            {t("Filter")}</button>
          <span className="text-[11px] text-slate-400">{t("Sort by")}</span>
          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            {t("Name (A–Z)")}<ChevronDown size={13} className="text-slate-400" />
          </button>
        </div>
      </div>

      {/* Phones: stacked cards instead of the wide table */}
      <ul className="mt-4 space-y-2 md:hidden">
        {visible.map((member) => (
          <li
            key={member.id}
            className="rounded-xl border border-white/60 bg-white/50 p-3"
          >
            <div className="flex items-start gap-2.5">
              <ConsultantAvatar name={member.name} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13px] font-semibold text-ink">
                  {t(member.name)}
                </p>
                <p className="truncate text-[11px] text-slate-500">
                  {t(member.title)} · {t(member.department)}
                </p>
              </div>
              <button
                aria-label={t("Actions for {name}", { name: member.name })}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
              >
                <MoreHorizontal size={16} />
              </button>
            </div>

            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              <TeamRoleBadge role={member.role} />
              <TeamStatusBadge status={member.status} />
            </div>

            <div className="mt-2.5 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border-t border-white/60 pt-2 text-[11px] text-slate-500">
              <span className="min-w-0 truncate">{t(member.email)}</span>
              <span className="text-slate-400">{t(member.lastActive)}</span>
            </div>
          </li>
        ))}

        {visible.length === 0 && (
          <li className="py-10 text-center text-[12px] text-slate-400">
            {t("No team members match your search.")}
          </li>
        )}
      </ul>

      {/* Table (tablet and up) */}
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[860px] border-collapse">
          <thead>
            <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="w-8 px-3 py-3">
                <input
                  type="checkbox"
                  aria-label={t("Select all members")}
                  className="h-3.5 w-3.5 rounded border-slate-300 accent-primary-dark"
                />
              </th>
              <th className="px-3 py-3 font-semibold">{t("Name")}</th>
              <th className="px-3 py-3 font-semibold">{t("Role")}</th>
              <th className="px-3 py-3 font-semibold">{t("Department")}</th>
              <th className="px-3 py-3 font-semibold">{t("Email")}</th>
              <th className="px-3 py-3 font-semibold">{t("Status")}</th>
              <th className="px-3 py-3 font-semibold">{t("Last Active")}</th>
              <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
            </tr>
          </thead>

          <tbody>
            {visible.map((member) => (
              <tr
                key={member.id}
                className="group border-b border-white/40 transition-colors hover:bg-white/50"
              >
                <td className="px-3 py-3">
                  <input
                    type="checkbox"
                    aria-label={t("Select {name}", { name: member.name })}
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-primary-dark"
                  />
                </td>

                {/* Name */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <ConsultantAvatar name={member.name} />
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-ink">
                        {t(member.name)}
                      </p>
                      <p className="truncate text-[10px] text-slate-400">
                        {t(member.title)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className="px-3 py-3">
                  <TeamRoleBadge role={member.role} />
                </td>

                {/* Department */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(member.department)}
                </td>

                {/* Email */}
                <td className="px-3 py-3 text-[11.5px] text-slate-500">
                  {t(member.email)}
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <TeamStatusBadge status={member.status} />
                </td>

                {/* Last Active */}
                <td className="px-3 py-3 text-[11.5px] text-slate-500">
                  {t(member.lastActive)}
                </td>

                {/* Actions */}
                <td className="px-3 py-3 text-right">
                  <button
                    aria-label={t("Actions for {name}", { name: member.name })}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {visible.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-3 py-10 text-center text-[12px] text-slate-400"
                >
                  {t("No team members match your search.")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-4 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row">
        <p className="text-[11px] text-slate-400">
          {t("Showing 1-{shown} of {total} members", {
            shown: visible.length,
            total: teamMembers.length,
          })}
        </p>

        <div className="flex items-center gap-1.5">
          <button
            aria-label={t("Previous page")}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
          >
            <ChevronLeft size={15} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-[12px] font-bold text-white">
            1
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-[12px] font-medium text-slate-500 transition-colors hover:bg-white/90">
            2
          </button>
          <button
            aria-label={t("Next page")}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
          >
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}
