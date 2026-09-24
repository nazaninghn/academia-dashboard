"use client";

import {
  Mail,
  Phone,
  MessageSquare,
  CalendarClock,
  FolderKanban,
  Handshake,
  FileDown,
  UserRound,
  Leaf,
  type LucideIcon,
} from "lucide-react";

import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

const quickLinks: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "projects", label: "View Active Projects", icon: FolderKanban },
  { id: "service", label: "Request a New Service", icon: Handshake },
  { id: "download", label: "Download Company Profile (PDF)", icon: FileDown },
  { id: "consultant", label: "Contact Your Consultant", icon: UserRound },
];

export default function CompanySidebar() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col">
      {/* Your Consultant */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <p className="text-[12px] font-semibold text-[#163b5b]">
          {t("Your Consultant")}</p>

        <div className="mt-3 flex items-center gap-3">
          <ConsultantAvatar name="Ahmet Yılmaz" />
          <div className="min-w-0">
            <p className="truncate text-[12.5px] font-semibold text-[#163b5b]">
              {t("Ahmet Yılmaz")}</p>
            <p className="truncate text-[10.5px] text-slate-400">
              {t("Senior Consultant")}</p>
          </div>
        </div>

        <div className="mt-3 space-y-1.5 border-t border-white/50 pt-3">
          <p className="flex items-center gap-2 text-[11px] text-slate-500">
            <Mail size={13} className="shrink-0 text-slate-400" />
            <span className="truncate">{t("ahmet.yilmaz@academia.com")}</span>
          </p>
          <p className="flex items-center gap-2 text-[11px] text-slate-500">
            <Phone size={13} className="shrink-0 text-slate-400" />
            +90 532 123 45 67
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-teal px-3 py-2 text-[11.5px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f8291]">
            <MessageSquare size={13} />
            {t("Send Message")}</button>
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[11.5px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            <CalendarClock size={13} />
            {t("Schedule a Call")}</button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <p className="text-[12px] font-semibold text-[#163b5b]">{t("Quick Links")}</p>
        <ul className="mt-2 flex flex-col">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.id}>
                <button className="flex w-full items-center gap-2.5 rounded-lg px-1.5 py-2 text-left text-[11.5px] font-medium text-teal transition-colors hover:bg-white/60">
                  <Icon size={15} className="shrink-0" />
                  {t(link.label)}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Sustainable banner */}
      <section className="glass motion hover-lift relative overflow-hidden rounded-2xl p-4 sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-sky-light/40 to-emerald-100/40" />
        <div className="animate-floaty pointer-events-none absolute -bottom-6 right-2 h-20 w-32 rounded-[50%] bg-emerald-300/25 blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100/70 text-emerald-600 ring-1 ring-inset ring-white/50">
              <Leaf size={16} />
            </div>
            <p className="text-[12px] font-semibold text-[#163b5b]">
              {t("Together for a")}<br />
              {t("More Sustainable Future")}</p>
          </div>
          <p className="mt-2 text-[11px] leading-4 text-slate-500">
            {t("Keep your company information up to date and help us serve you better.")}</p>
        </div>
      </section>
    </div>
  );
}
