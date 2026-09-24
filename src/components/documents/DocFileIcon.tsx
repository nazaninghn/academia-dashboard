import { FileText, FileSpreadsheet, FileType2, type LucideIcon } from "lucide-react";

import type { DocFileKind } from "@/types/dashboard";

const configByKind: Record<
  DocFileKind,
  { icon: LucideIcon; style: string }
> = {
  pdf: { icon: FileText, style: "bg-rose-100/80 text-rose-600" },
  doc: { icon: FileType2, style: "bg-sky/25 text-teal" },
  xls: { icon: FileSpreadsheet, style: "bg-emerald-100/80 text-emerald-600" },
};

export default function DocFileIcon({ kind }: { kind: DocFileKind }) {
  const { icon: Icon, style } = configByKind[kind];

  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/50 ${style}`}
    >
      <Icon size={16} />
    </div>
  );
}
