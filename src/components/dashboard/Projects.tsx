"use client";

import { Leaf, BadgeCheck, Cloud, Globe } from "lucide-react";

import ProjectRow from "./ProjectRow";
import { projects } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const icons = [Leaf, BadgeCheck, Cloud, Globe];

export default function Projects() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-[#163b5b]">
          {t("My Projects")}</h2>

        <button className="rounded-full px-3 py-1 text-[12px] font-medium text-teal transition-colors hover:bg-teal/10">
          {t("View All")}</button>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {projects.map((project, index) => {
          const Icon = icons[index];

          return (
            <ProjectRow
              key={project.id}
              project={project}
              icon={<Icon size={20} />}
            />
          );
        })}
      </div>
    </section>
  );
}
