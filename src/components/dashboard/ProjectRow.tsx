"use client";

import { ArrowRight } from "lucide-react";

import ProgressBar from "./ProgressBar";
import type { Project } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

type ProjectRowProps = {
  project: Project;
  icon: React.ReactNode;
};

export default function ProjectRow({ project, icon }: ProjectRowProps) {
  const { t } = useI18n();

  return (
    <div className="glass-row motion hover-row flex flex-col gap-3 rounded-2xl p-4 lg:flex-row lg:items-center lg:gap-4">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-dark/15 text-primary-dark ring-1 ring-inset ring-primary-dark/20 shadow-[0_0_16px_-4px_rgba(8,124,154,0.5)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1 lg:w-40 lg:flex-none">
          <p className="truncate text-[13px] font-semibold text-ink">
            {t(project.name)}
          </p>
          <p className="mt-1 text-[10px] text-slate-500">{t(project.category)}</p>
        </div>

        <ArrowRight
          size={15}
          className="shrink-0 text-primary-dark transition-transform group-hover:translate-x-0.5 lg:hidden"
        />
      </div>

      <div className="flex items-center gap-3 lg:flex-1">
        <div className="flex-1">
          <ProgressBar value={project.progress} color={project.progressColor} />
        </div>

        <p className="w-10 shrink-0 text-right text-[11px] font-semibold text-slate-600">
          {project.progress}%
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:flex lg:shrink-0 lg:items-center lg:gap-6">
        <p className="text-[11px] text-slate-500 lg:w-32 lg:shrink-0">
          <span className="text-slate-400 lg:hidden">{t("Phase:")}{" "}</span>
          {t(project.currentPhase)}
        </p>

        <p className="text-[11px] text-slate-500 lg:w-24 lg:shrink-0">
          <span className="text-slate-400 lg:hidden">{t("Due:")}{" "}</span>
          {t(project.deadline)}
        </p>
      </div>

      <ArrowRight
        size={15}
        className="ml-auto hidden shrink-0 text-primary-dark transition-transform group-hover:translate-x-0.5 lg:block"
      />
    </div>
  );
}
