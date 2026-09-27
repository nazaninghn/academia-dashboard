import {
  FileText,
  FileType2,
  FileSpreadsheet,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

import type { ReportKind } from "@/types/dashboard";

const configByKind: Record<ReportKind, { icon: LucideIcon; style: string }> = {
  pdf: { icon: FileText, style: "bg-rose-100/80 text-rose-600" },
  doc: { icon: FileType2, style: "bg-primary/25 text-primary-dark" },
  xls: { icon: FileSpreadsheet, style: "bg-emerald-100/80 text-emerald-600" },
  chart: { icon: BarChart3, style: "bg-accent-dark/15 text-accent-dark" },
};

export default function ReportFileIcon({
  kind,
  size = 8,
}: {
  kind: ReportKind;
  size?: 8 | 9;
}) {
  const { icon: Icon, style } = configByKind[kind];
  const box = size === 9 ? "h-9 w-9" : "h-8 w-8";

  return (
    <div
      className={`flex ${box} shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/50 ${style}`}
    >
      <Icon size={size === 9 ? 17 : 16} />
    </div>
  );
}
