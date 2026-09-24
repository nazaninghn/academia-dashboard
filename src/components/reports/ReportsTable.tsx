"use client";

import { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  Calendar,
  Download,
  Eye,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { reportFilters, reportItems } from "@/data/dashboard";
import type { ReportItem } from "@/types/dashboard";
import ReportFileIcon from "./ReportFileIcon";
import { ReportTypeBadge, ReportStatusBadge } from "./ReportBadges";
import { useI18n } from "@/i18n/I18nProvider";

/** Maps a filter key to a predicate over a report. */
const matchers: Record<string, (r: ReportItem) => boolean> = {
  all: () => true,
  project: (r) => r.type === "Project Report",
  audit: (r) => r.type === "Audit Report",
  compliance: (r) => r.type === "Compliance",
  sustainability: (r) => r.type === "Sustainability",
  certificate: (r) => r.type === "Certificate Report",
};

const dropdowns = ["All Projects", "All Types", "All Statuses"];

export default function ReportsTable() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const matches = matchers[activeFilter] ?? matchers.all;
    const q = query.trim().toLowerCase();

    return reportItems.filter((report) => {
      const matchesFilter = matches(report);
      const matchesQuery =
        !q ||
        report.name.toLowerCase().includes(q) ||
        report.project.toLowerCase().includes(q) ||
        report.type.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {reportFilters.map((filter) => {
          const isActive = filter.key === activeFilter;

          return (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-medium transition-colors ${
                isActive
                  ? "bg-teal text-white shadow-sm"
                  : "border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
              }`}
            >
              {t(filter.label)}
              <span
                className={`flex h-4 min-w-4 items-center justify-center rounded-full px-1 text-[10px] ${
                  isActive
                    ? "bg-white/25 text-white"
                    : "bg-slate-200/80 text-slate-500"
                }`}
              >
                {filter.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Secondary toolbar: search + dropdowns + export */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:w-[180px]">
          <Search size={15} className="shrink-0 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("Search reports...")}
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

        <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-400 shadow-sm transition-colors hover:bg-white/90">
          <Calendar size={14} />
          {t("Select date range")}</button>

        <button className="ml-auto flex items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3.5 py-2 text-[12px] font-semibold text-teal shadow-sm transition-colors hover:bg-teal/20">
          <Download size={14} />
          {t("Export")}<ChevronDown size={13} />
        </button>
      </div>

      {/* Table */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[820px] border-collapse">
          <thead>
            <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="px-3 py-3 font-semibold">{t("Report Name")}</th>
              <th className="px-3 py-3 font-semibold">{t("Project")}</th>
              <th className="px-3 py-3 font-semibold">{t("Type")}</th>
              <th className="px-3 py-3 font-semibold">{t("Date")}</th>
              <th className="px-3 py-3 font-semibold">{t("Status")}</th>
              <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((report) => (
              <tr
                key={report.id}
                className="group border-b border-white/40 transition-colors hover:bg-white/50"
              >
                {/* Report Name */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2.5">
                    <ReportFileIcon kind={report.fileKind} />
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-semibold text-[#163b5b]">
                        {t(report.name)}
                      </p>
                      <p className="truncate text-[10px] text-slate-400">
                        {t(report.subtitle)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Project */}
                <td className="px-3 py-3">
                  <p className="text-[12px] font-medium text-slate-600">
                    {t(report.project)}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {t(report.projectCategory)}
                  </p>
                </td>

                {/* Type */}
                <td className="px-3 py-3">
                  <ReportTypeBadge type={report.type} />
                </td>

                {/* Date */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(report.date)}
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <ReportStatusBadge status={report.status} />
                </td>

                {/* Actions */}
                <td className="px-3 py-3">
                  <div className="flex items-center justify-end gap-1">
                    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-teal transition-colors hover:bg-white/70">
                      <Eye size={14} />
                      {t("View")}</button>
                    <button className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-medium text-slate-500 transition-colors hover:bg-white/70 hover:text-teal">
                      <Download size={14} />
                      {t("Download")}</button>
                    <button
                      aria-label={t("More actions")}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                    >
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-3 py-10 text-center text-[12px] text-slate-400"
                >
                  {t("No reports match your filters.")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer: count + pagination */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[11px] text-slate-400">
          {t("Showing 1-{shown} of {total} reports", {
            shown: filtered.length,
            total: reportItems.length,
          })}
        </p>

        <div className="flex items-center gap-1.5">
          <button
            aria-label={t("Previous page")}
            className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
          >
            <ChevronLeft size={15} />
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal text-[12px] font-semibold text-white">
            1
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-[12px] font-medium text-slate-500 transition-colors hover:bg-white/90">
            2
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-[12px] font-medium text-slate-500 transition-colors hover:bg-white/90">
            3
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
