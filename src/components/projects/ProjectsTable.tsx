"use client";

import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Plus,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { projectFilters, projectList } from "@/data/dashboard";
import type { ProjectListItem } from "@/types/dashboard";
import ProgressBar from "@/components/dashboard/ProgressBar";
import ProjectStatusBadge from "./ProjectStatusBadge";
import ConsultantAvatar from "./ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

/** Maps a filter key to the statuses it should show. */
const statusesByFilter: Record<string, ProjectListItem["status"][] | null> = {
  all: null,
  active: ["On Track", "At Risk", "Delayed"],
  planning: ["Planning"],
  "on-hold": ["On Hold"],
  completed: ["Completed"],
};

export default function ProjectsTable() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const allowed = statusesByFilter[activeFilter];
    const q = query.trim().toLowerCase();

    return projectList.filter((project) => {
      const matchesFilter = !allowed || allowed.includes(project.status);
      const matchesQuery =
        !q ||
        project.name.toLowerCase().includes(q) ||
        project.code.toLowerCase().includes(q) ||
        project.service.toLowerCase().includes(q) ||
        project.consultant.name.toLowerCase().includes(q);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Toolbar: filters + search + actions */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {projectFilters.map((filter) => {
            const isActive = filter.key === activeFilter;

            return (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] transition-colors ${
                  isActive
                    ? "bg-primary font-bold text-white shadow-sm"
                    : "font-medium border border-white/60 bg-white/60 text-slate-600 hover:bg-white/90"
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

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:w-[220px]">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search projects...")}
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
            />
          </div>

          <button className="flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3.5 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <SlidersHorizontal size={14} />
            {t("Filter")}</button>

          <button className="flex items-center gap-2 rounded-full bg-primary px-3.5 py-2 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
            <Plus size={15} />
            {t("New Project")}</button>
        </div>
      </div>

      {/* Phones: stacked cards instead of the wide table */}
      <ul className="mt-4 space-y-2 md:hidden">
        {filtered.map((project) => (
          <li
            key={project.id}
            className="rounded-xl border border-white/60 bg-white/50 p-3"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-ink">
                  {t(project.name)}
                </p>
                <p className="mt-0.5 truncate text-[11px] text-slate-500">
                  {t(project.code)} · {t(project.service)}
                </p>
              </div>
              <ProjectStatusBadge status={project.status} />
            </div>

            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1">
                <ProgressBar
                  value={project.progress}
                  color={project.progressColor}
                />
              </div>
              <span className="text-[11px] font-semibold text-slate-500">
                {project.progress}%
              </span>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-1 text-[11px] text-slate-500">
              <span>{t(project.currentPhase)}</span>
              <span className="flex items-center gap-1">
                <Calendar size={12} className="shrink-0 text-slate-400" />
                {t(project.deadline)}
              </span>
            </div>

            <div className="mt-3 flex items-center gap-2 border-t border-white/60 pt-3">
              <ConsultantAvatar name={project.consultant.name} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-medium text-ink">
                  {t(project.consultant.name)}
                </p>
                <p className="truncate text-[10px] text-slate-400">
                  {t(project.consultant.role)}
                </p>
              </div>
              <button
                aria-label={t("Project actions")}
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
              >
                <MoreHorizontal size={16} />
              </button>
            </div>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="py-10 text-center text-[12px] text-slate-400">
            {t("No projects match your filters.")}
          </li>
        )}
      </ul>

      {/* Table (tablet and up) */}
      <div className="mt-4 hidden overflow-x-auto md:block">
        <table className="w-full min-w-[880px] border-collapse">
          <thead>
            <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
              <th className="px-3 py-3 font-semibold">{t("Project")}</th>
              <th className="px-3 py-3 font-semibold">{t("Service")}</th>
              <th className="px-3 py-3 font-semibold">{t("Progress")}</th>
              <th className="px-3 py-3 font-semibold">{t("Current Phase")}</th>
              <th className="px-3 py-3 font-semibold">{t("Deadline")}</th>
              <th className="px-3 py-3 font-semibold">{t("Status")}</th>
              <th className="px-3 py-3 font-semibold">{t("Consultant")}</th>
              <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((project) => (
              <tr
                key={project.id}
                className="group border-b border-white/40 transition-colors hover:bg-white/50"
              >
                {/* Project */}
                <td className="px-3 py-3">
                  <p className="text-[12.5px] font-semibold text-ink">
                    {t(project.name)}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {t(project.code)}
                  </p>
                </td>

                {/* Service */}
                <td className="px-3 py-3">
                  <p className="text-[12px] font-medium text-slate-600">
                    {t(project.service)}
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400">
                    {t(project.serviceCategory)}
                  </p>
                </td>

                {/* Progress */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-24">
                      <ProgressBar
                        value={project.progress}
                        color={project.progressColor}
                      />
                    </div>
                    <span className="w-8 text-right text-[11px] font-semibold text-slate-500">
                      {project.progress}%
                    </span>
                  </div>
                </td>

                {/* Current Phase */}
                <td className="px-3 py-3 text-[11.5px] text-slate-600">
                  {t(project.currentPhase)}
                </td>

                {/* Deadline */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-1.5 text-[11.5px] text-slate-600">
                    <Calendar size={13} className="text-slate-400" />
                    {t(project.deadline)}
                  </div>
                  <p className="mt-0.5 pl-[19px] text-[10px] text-slate-400">
                    ({t(project.deadlineNote)})
                  </p>
                </td>

                {/* Status */}
                <td className="px-3 py-3">
                  <ProjectStatusBadge status={project.status} />
                </td>

                {/* Consultant */}
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <ConsultantAvatar name={project.consultant.name} />
                    <div className="min-w-0">
                      <p className="truncate text-[11.5px] font-medium text-ink">
                        {t(project.consultant.name)}
                      </p>
                      <p className="truncate text-[10px] text-slate-400">
                        {t(project.consultant.role)}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Actions */}
                <td className="px-3 py-3 text-right">
                  <button
                    aria-label={t("Project actions")}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                  >
                    <MoreHorizontal size={16} />
                  </button>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-3 py-10 text-center text-[12px] text-slate-400"
                >
                  {t("No projects match your filters.")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer: count + pagination */}
      <div className="mt-4 flex flex-col-reverse items-center justify-between gap-3 sm:flex-row">
        <p className="text-[11px] text-slate-400">
          {t("Showing {shown} of {total} projects", {
            shown: filtered.length,
            total: projectList.length,
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
