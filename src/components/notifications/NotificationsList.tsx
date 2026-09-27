"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  FolderKanban,
  CheckSquare,
  FileText,
  ShieldCheck,
  Users,
  Settings,
  CheckCheck,
  type LucideIcon,
} from "lucide-react";

import { notificationFilters, notifications } from "@/data/dashboard";
import type { NotificationGroup } from "@/types/dashboard";
import NotificationRow from "./NotificationRow";
import { useI18n } from "@/i18n/I18nProvider";

const filterIcon: Record<string, LucideIcon> = {
  all: CalendarDays,
  projects: FolderKanban,
  tasks: CheckSquare,
  documents: FileText,
  certificates: ShieldCheck,
  team: Users,
  system: Settings,
};

const groupOrder: NotificationGroup[] = ["Today", "Yesterday", "Earlier"];

export default function NotificationsList() {
  const { t } = useI18n();

  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return notifications;
    return notifications.filter((n) => n.category === activeFilter);
  }, [activeFilter]);

  const groups = useMemo(
    () =>
      groupOrder
        .map((group) => ({
          group,
          items: filtered.filter((n) => n.group === group),
        }))
        .filter((g) => g.items.length > 0),
    [filtered],
  );

  return (
    <div className="space-y-4">
      {/* Filter tabs + Mark all as read */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-4 flex items-center gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
          {notificationFilters.map((filter) => {
            const isActive = filter.key === activeFilter;
            const Icon = filterIcon[filter.key] ?? CalendarDays;

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
                <Icon size={13} />
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

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-primary-dark/30 bg-primary-dark/10 px-3.5 py-2 text-[12px] font-bold text-primary-dark shadow-sm transition-colors hover:bg-primary-dark/20">
          <CheckCheck size={15} />
          {t("Mark all as read")}</button>
      </div>

      {/* Grouped list */}
      <section className="glass rounded-2xl p-4">
        {groups.map(({ group, items }) => (
          <div key={group} className="mb-4 last:mb-0">
            <p className="px-3 pb-1 text-[12px] font-semibold text-ink">
              {t(group)}
            </p>
            <div className="space-y-1">
              {items.map((item) => (
                <NotificationRow key={item.id} notification={item} />
              ))}
            </div>
          </div>
        ))}

        {groups.length === 0 && (
          <p className="px-3 py-10 text-center text-[12px] text-slate-400">
            {t("No notifications in this category.")}</p>
        )}
      </section>
    </div>
  );
}
