"use client";

import {
  FileText,
  FileType2,
  FileSpreadsheet,
  Download,
  type LucideIcon,
} from "lucide-react";

import type { MessageAttachment } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const configByKind: Record<
  MessageAttachment["fileKind"],
  { icon: LucideIcon; style: string }
> = {
  pdf: { icon: FileText, style: "bg-rose-100/80 text-rose-600" },
  doc: { icon: FileType2, style: "bg-primary/25 text-primary-dark" },
  xls: { icon: FileSpreadsheet, style: "bg-emerald-100/80 text-emerald-600" },
};

export default function MessageFileChip({
  file,
  variant = "chat",
}: {
  file: MessageAttachment;
  variant?: "chat" | "list";
}) {
  const { t } = useI18n();

  const { icon: Icon, style } = configByKind[file.fileKind];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/50 ${style}`}
      >
        <Icon size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[11.5px] font-medium text-ink">
          {t(file.name)}
        </p>
        <p className="truncate text-[10px] text-slate-400">{t(file.size)}</p>
      </div>
      {variant === "chat" && (
        <button
          aria-label={t("Download {name}", { name: file.name })}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-primary-dark"
        >
          <Download size={15} />
        </button>
      )}
    </div>
  );
}
