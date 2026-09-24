"use client";

import { useState } from "react";
import {
  X,
  FolderKanban,
  Calendar,
  Flag,
  User,
  FileText,
  Plus,
} from "lucide-react";

import type { TaskListItem } from "@/types/dashboard";
import { TaskStatusBadge } from "./TaskBadges";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

type TaskDetailPanelProps = {
  task: TaskListItem;
  onClose: () => void;
};

const tabs = ["Details", "Comments", "Files", "Activity"] as const;

export default function TaskDetailPanel({
  task,
  onClose,
}: TaskDetailPanelProps) {
  const { t } = useI18n();

  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Details");

  const doneCount = task.subtasks.filter((s) => s.done).length;

  return (
    <aside className="glass flex h-full flex-col rounded-2xl">
      {/* Header */}
      <div className="border-b border-white/50 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <TaskStatusBadge status={task.status} />
            <h3 className="mt-2 text-[15px] font-semibold text-[#163b5b]">
              {t(task.title)}
            </h3>
            <p className="mt-1 text-[11px] leading-5 text-slate-500">
              {t(task.description)}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label={t("Close details")}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
          >
            <X size={16} />
          </button>
        </div>

        {/* Tabs */}
        <div className="mt-4 flex items-center gap-4 text-[12px]">
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            const count =
              tab === "Comments"
                ? task.commentsCount
                : tab === "Files"
                  ? task.filesCount
                  : null;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center gap-1 pb-1.5 font-medium transition-colors ${
                  isActive
                    ? "text-teal"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {t(tab)}
                {count != null && count > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-200/80 px-1 text-[9px] text-slate-500">
                    {count}
                  </span>
                )}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-teal" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-5">
        {activeTab === "Details" ? (
          <div className="space-y-4">
            <DetailRow icon={FolderKanban} label="Project">
              {t(task.project)} - {t(task.projectCategory)}
            </DetailRow>

            <DetailRow icon={Calendar} label="Due Date">
              {t(task.dueDate)}{" "}
              <span className="text-rose-500">({t(task.dueNote)})</span>
            </DetailRow>

            <DetailRow icon={Flag} label="Priority">
              {t(task.priority)}
            </DetailRow>

            <div className="flex items-start gap-3">
              <User size={15} className="mt-0.5 shrink-0 text-slate-400" />
              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  {t("Assigned To")}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <ConsultantAvatar name={task.assignee.name} />
                  <div>
                    <p className="text-[12px] font-medium text-[#163b5b]">
                      {t(task.assignee.name)}
                    </p>
                    <p className="text-[10px] text-slate-400">
                      {t(task.assignee.role)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FileText size={15} className="mt-0.5 shrink-0 text-slate-400" />
              <div>
                <p className="text-[10px] uppercase tracking-wide text-slate-400">
                  {t("Description")}</p>
                <p className="mt-1 text-[11.5px] leading-5 text-slate-600">
                  {t(task.description)}
                </p>
              </div>
            </div>

            {/* Subtasks */}
            <div className="border-t border-white/50 pt-4">
              <div className="flex items-center justify-between">
                <p className="text-[12px] font-semibold text-[#163b5b]">
                  {t("Subtasks")}{" "}
                  <span className="text-slate-400">
                    ({doneCount}/{task.subtasks.length})
                  </span>
                </p>
                <button className="flex items-center gap-1 text-[11px] font-medium text-teal hover:underline">
                  <Plus size={12} />
                  {t("Add Subtask")}</button>
              </div>

              <div className="mt-3 space-y-2">
                {task.subtasks.length === 0 && (
                  <p className="text-[11px] text-slate-400">{t("No subtasks yet.")}</p>
                )}
                {task.subtasks.map((sub) => (
                  <SubtaskItem key={sub.id} label={sub.label} done={sub.done} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex h-full items-center justify-center text-center text-[12px] text-slate-400">
            {t("{section} coming soon.", { section: t(activeTab) })}
          </div>
        )}
      </div>
    </aside>
  );
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Calendar;
  label: string;
  children: React.ReactNode;
}) {
  const { t } = useI18n();

  return (
    <div className="flex items-start gap-3">
      <Icon size={15} className="mt-0.5 shrink-0 text-slate-400" />
      <div>
        <p className="text-[10px] uppercase tracking-wide text-slate-400">
          {t(label)}
        </p>
        <p className="mt-1 text-[12px] text-slate-600">{children}</p>
      </div>
    </div>
  );
}

function SubtaskItem({ label, done }: { label: string; done: boolean }) {
  const { t } = useI18n();

  const [checked, setChecked] = useState(done);

  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((v) => !v)}
        className="h-4 w-4 shrink-0 rounded border-slate-300 accent-teal"
      />
      <span
        className={`text-[11.5px] ${
          checked ? "text-slate-400 line-through" : "text-slate-600"
        }`}
      >
        {t(label)}
      </span>
    </label>
  );
}
