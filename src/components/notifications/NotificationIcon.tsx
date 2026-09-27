import {
  FileText,
  CheckCircle2,
  MessageSquare,
  Users,
  ShieldCheck,
  FolderKanban,
  Settings,
  BarChart3,
  Bell,
  type LucideIcon,
} from "lucide-react";

import type { NotificationItem } from "@/types/dashboard";

const config: Record<
  NotificationItem["iconKind"],
  { icon: LucideIcon; style: string }
> = {
  document: { icon: FileText, style: "bg-primary/25 text-primary-dark" },
  check: { icon: CheckCircle2, style: "bg-emerald-100/80 text-emerald-600" },
  message: { icon: MessageSquare, style: "bg-primary/25 text-primary-dark" },
  team: { icon: Users, style: "bg-violet-100/70 text-violet-600" },
  certificate: { icon: ShieldCheck, style: "bg-accent-dark/15 text-accent-dark" },
  project: { icon: FolderKanban, style: "bg-rose-100/70 text-rose-500" },
  system: { icon: Settings, style: "bg-primary-dark/15 text-primary-dark" },
  report: { icon: BarChart3, style: "bg-emerald-100/80 text-emerald-600" },
  reminder: { icon: Bell, style: "bg-amber-100/70 text-amber-600" },
};

export default function NotificationIcon({
  kind,
}: {
  kind: NotificationItem["iconKind"];
}) {
  const { icon: Icon, style } = config[kind];

  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${style}`}
    >
      <Icon size={18} />
    </div>
  );
}
