"use client";

import { ArrowRight } from "lucide-react";

import type { Certificate } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

type CertificateRowProps = {
  certificate: Certificate;
  icon: React.ReactNode;
};

const statusStyles = {
  Valid: "bg-emerald-500/15 text-emerald-600 ring-1 ring-inset ring-emerald-500/25",
  "Expiring Soon": "bg-amber-500/15 text-amber-600 ring-1 ring-inset ring-amber-500/25",
} as const;

export default function CertificateRow({
  certificate,
  icon,
}: CertificateRowProps) {
  const { t } = useI18n();

  return (
    <div className="glass-row motion hover-row flex flex-col gap-2 rounded-2xl p-3 sm:p-4 lg:flex-row lg:items-center lg:gap-4">
      <div className="flex items-center gap-3 lg:contents">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-dark/15 text-primary-dark ring-1 ring-inset ring-primary-dark/20 shadow-[0_0_16px_-4px_rgba(8,124,154,0.5)]">
          {icon}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-semibold text-ink">
            {t(certificate.name)}
          </p>
          <p className="mt-1 truncate text-[10px] text-slate-500">
            {t(certificate.category)}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 pl-[56px] lg:contents lg:pl-0">
        <span
          className={`shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-medium ${statusStyles[certificate.status]}`}
        >
          {t(certificate.status)}
        </span>

        <div className="flex shrink-0 items-center gap-2 lg:contents">
          <p className="shrink-0 text-right text-[11px] text-slate-500 lg:w-24">
            {t(certificate.expires)}
          </p>

          <ArrowRight size={15} className="shrink-0 text-primary-dark" />
        </div>
      </div>
    </div>
  );
}
