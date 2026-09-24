"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { taskFilters, taskList } from "@/data/dashboard";
import type { TaskListItem } from "@/types/dashboard";
import { PriorityBadge, TaskStatusBadge } from "./TaskBadges";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import TaskDetailPanel from "./TaskDetailPanel";
import { useI18n } from "@/i18n/I18nProvider";

/** Maps a filter key to a predicate over a task. */
const matchers: Record<string, (t: TaskListItem) => boolean> = {
  all: () => true,
  mine: (t) => t.isMine,
  overdue: (t) => t.status === "Overdue",
  "due-soon": (t) => t.status === "Open" || t.status === "Not Started",
  "in-progress": (t) => t.status === "In Progress",
  completed: (t) => t.status === "Completed",
};

export default function TasksBoard() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>("tsk-1");
  // Below `xl` the detail panel is a slide-over drawer, opened on row click.
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filtered = useMemo(() => {
    const matches = matchers[activeFilter] ?? matchers.all;
    const q = query.trim().toLowerCase();

    return taskList.filter((task) => {
      const matchesQuery =
        !q ||
        task.title.toLowerCase().includes(q) ||
        task.project.toLowerCase().includes(q) ||
        task.assignee.name.toLowerCase().includes(q);

      return matches(task) && matchesQuery;
    });
  }, [activeFilter, query]);

  const selected = taskList.find((t) => t.id === selectedId) ?? null;

  return (
    <div
      className={`grid grid-cols-1 gap-4 ${
        selected ? "xl:grid-cols-[1fr_340px]" : ""
      }`}
    >
      {/* Left: table card */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        {/* Toolbar: filters + search */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {taskFilters.map((filter) => {
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

          <div className="flex w-full items-center gap-2 rounded-full border border-white/60 bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:w-[220px]">
            <Search size={15} className="shrink-0 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("Search tasks...")}
              className="w-full bg-transparent text-[12px] outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="border-b border-white/60 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                <th className="w-8 px-3 py-3">
                  <input
                    type="checkbox"
                    aria-label={t("Select all")}
                    className="h-3.5 w-3.5 rounded border-slate-300 accent-teal"
                  />
                </th>
                <th className="px-3 py-3 font-semibold">{t("Task")}</th>
                <th className="px-3 py-3 font-semibold">{t("Project")}</th>
                <th className="px-3 py-3 font-semibold">{t("Due Date")}</th>
                <th className="px-3 py-3 font-semibold">{t("Priority")}</th>
                <th className="px-3 py-3 font-semibold">{t("Status")}</th>
                <th className="px-3 py-3 font-semibold">{t("Assigned To")}</th>
                <th className="px-3 py-3 text-right font-semibold">{t("Actions")}</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((task) => {
                const isSelected = task.id === selectedId;

                return (
                  <tr
                    key={task.id}
                    onClick={() => {
                      setSelectedId(task.id);
                      setIsDrawerOpen(true);
                    }}
                    className={`group cursor-pointer border-b border-white/40 transition-colors ${
                      isSelected ? "bg-white/60" : "hover:bg-white/50"
                    }`}
                  >
                    <td className="px-3 py-3" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        aria-label={t("Select {name}", { name: t(task.title) })}
                        className="h-3.5 w-3.5 rounded border-slate-300 accent-teal"
                      />
                    </td>

                    <td className="px-3 py-3">
                      <p className="text-[12.5px] font-semibold text-[#163b5b]">
                        {t(task.title)}
                      </p>
                      <p className="mt-0.5 truncate text-[10px] text-slate-400">
                        {t(task.description)}
                      </p>
                    </td>

                    <td className="px-3 py-3">
                      <p className="text-[12px] font-medium text-slate-600">
                        {t(task.project)}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-400">
                        {t(task.projectCategory)}
                      </p>
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex items-center gap-1.5 text-[11.5px] text-slate-600">
                        <Calendar size={13} className="text-slate-400" />
                        {t(task.dueDate)}
                      </div>
                      <p
                        className={`mt-0.5 pl-[19px] text-[10px] ${
                          task.status === "Overdue"
                            ? "text-rose-500"
                            : "text-slate-400"
                        }`}
                      >
                        ({t(task.dueNote)})
                      </p>
                    </td>

                    <td className="px-3 py-3">
                      <PriorityBadge priority={task.priority} />
                    </td>

                    <td className="px-3 py-3">
                      <TaskStatusBadge status={task.status} />
                    </td>

                    <td className="px-3 py-3">
                      <div className="flex items-center gap-2">
                        <ConsultantAvatar name={task.assignee.name} />
                        <div className="min-w-0">
                          <p className="truncate text-[11.5px] font-medium text-[#163b5b]">
                            {t(task.assignee.name)}
                          </p>
                          <p className="truncate text-[10px] text-slate-400">
                            {t(task.assignee.role)}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td
                      className="px-3 py-3 text-right"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        aria-label={t("Task actions")}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
                      >
                        <MoreHorizontal size={16} />
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-3 py-10 text-center text-[12px] text-slate-400"
                  >
                    {t("No tasks match your filters.")}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer: count + pagination */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">
            {t("Showing {shown} of {total} tasks", {
              shown: filtered.length,
              total: taskList.length,
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
            <button
              aria-label={t("Next page")}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/60 bg-white/60 text-slate-400 transition-colors hover:bg-white/90"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Right: detail panel */}
      {selected && (
        <div
          onClick={() => setIsDrawerOpen(false)}
          className={`${
            isDrawerOpen
              ? "fixed inset-0 z-50 flex justify-end bg-black/40 p-2 backdrop-blur-sm sm:p-3"
              : "hidden"
          } xl:static xl:z-auto xl:block xl:bg-transparent xl:p-0 xl:backdrop-blur-none`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="h-full w-full max-w-sm overflow-hidden rounded-2xl bg-white/85 xl:max-w-none xl:overflow-visible xl:bg-transparent"
          >
            <TaskDetailPanel
              task={selected}
              onClose={() => {
                setSelectedId(null);
                setIsDrawerOpen(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
