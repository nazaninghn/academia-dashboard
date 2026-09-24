import {
  LayoutDashboard,
  FolderKanban,
  CheckSquare,
  FileText,
  BadgeCheck,
  BarChart3,
  MessageSquare,
  Handshake,
  Building2,
  Users,
  Bell,
  Settings,
  type LucideIcon,
} from "lucide-react";

export type NavigationItem = {
  label: string;
  icon: LucideIcon;
  href: string;
  /** Optional numeric badge (e.g. unread notifications). */
  badge?: number;
};

export const navigationItems: NavigationItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/" },
  { label: "Projects", icon: FolderKanban, href: "/projects" },
  { label: "Tasks", icon: CheckSquare, href: "/tasks" },
  { label: "Documents", icon: FileText, href: "/documents" },
  { label: "Certificates", icon: BadgeCheck, href: "/certificates" },
  { label: "Reports", icon: BarChart3, href: "/reports" },
  { label: "Messages", icon: MessageSquare, href: "/messages" },
  { label: "Services", icon: Handshake, href: "/services" },
  { label: "Company Profile", icon: Building2, href: "/company-profile" },
  { label: "Team", icon: Users, href: "/team" },
  { label: "Notifications", icon: Bell, href: "/notifications", badge: 3 },
  { label: "Settings", icon: Settings, href: "/settings" },
];
