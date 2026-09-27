"use client";

import {
  Handshake,
  CalendarCheck,
  UserRound,
  DownloadCloud,
  type LucideIcon,
} from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

type QuickLink = {
  id: string;
  label: string;
  icon: LucideIcon;
};

const links: QuickLink[] = [
  { id: "request", label: "Request a New Service", icon: Handshake },
  { id: "audit", label: "Schedule an Audit", icon: CalendarCheck },
  { id: "consultant", label: "Contact Your Consultant", icon: UserRound },
  { id: "download-all", label: "Download All Certificates", icon: DownloadCloud },
];

export default function QuickLinks() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift rounded-2xl p-4 sm:p-5">
      <h3 className="text-[13px] font-semibold text-ink">{t("Quick Links")}</h3>

      <ul className="mt-3 flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <li key={link.id}>
              <button className="flex w-full items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors hover:bg-white/60">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-dark/10 text-primary-dark ring-1 ring-inset ring-white/50">
                  <Icon size={15} />
                </span>
                <span className="text-[12px] font-medium text-slate-600">
                  {t(link.label)}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
