"use client";

import TaskRow from "./TaskRow";
import { tasks } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

export default function TasksDue() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-[15px] font-semibold text-ink">
          {t("Tasks Due Soon")}</h2>

        <button className="shrink-0 rounded-full px-3 py-1 text-[12px] font-medium text-primary-dark transition-colors hover:bg-primary-dark/10">
          {t("View All")}</button>
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:gap-3">
        {tasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}
