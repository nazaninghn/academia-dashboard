"use client";

import { ArrowRight } from "lucide-react";

import type { DocumentRequest } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

type DocumentRowProps = {
  document: DocumentRequest;
  icon: React.ReactNode;
};

const statusStyles = {
  Missing: "bg-red-500/15 text-red-600 ring-1 ring-inset ring-red-500/25",
  Pending: "bg-amber-500/15 text-amber-600 ring-1 ring-inset ring-amber-500/25",
} as const;

export default function DocumentRow({ document, icon }: DocumentRowProps) {
  const { t } = useI18n();

  return (
    <div className="glass-row motion hover-row flex flex-col gap-2 rounded-2xl p-3 sm:p-4 lg:flex-row lg:items-center lg:gap-4">
      <div className="flex items-center gap-3 lg:contents">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary-dark ring-1 ring-inset ring-primary/30 shadow-[0_0_16px_-4px_rgba(33,182,215,0.6)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-ink">
            {t(document.name)}
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-500">
            {t(document.project)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pl-[56px] lg:contents lg:pl-0">
        <p className="shrink-0 text-[11px] text-slate-500 lg:w-24">
          {t(document.dueDate)}
        </p>

        <span
          className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[document.status]}`}
        >
          {t(document.status)}
        </span>

        <ArrowRight size={15} className="shrink-0 text-primary-dark" />
      </div>
    </div>
  );
}
