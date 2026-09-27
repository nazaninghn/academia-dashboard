"use client";

import {
  Mail,
  Phone,
  Leaf,
  ArrowRight,
  CalendarClock,
  CheckSquare,
  Handshake,
  FolderKanban,
  type LucideIcon,
} from "lucide-react";

import { messageSharedFiles } from "@/data/dashboard";
import type { Conversation } from "@/types/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import MessageFileChip from "./MessageFileChip";
import { useI18n } from "@/i18n/I18nProvider";

const quickActions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "call", label: "Schedule a Call", icon: CalendarClock },
  { id: "task", label: "Create a Task", icon: CheckSquare },
  { id: "service", label: "Request a Service", icon: Handshake },
  { id: "project", label: "View Project Details", icon: FolderKanban },
];

export default function ContactPanel({
  conversation,
}: {
  conversation: Conversation;
}) {
  const { t } = useI18n();

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto pr-1">
      {/* About */}
      <section className="glass rounded-2xl p-4">
        <p className="text-[12px] font-semibold text-ink">
          {t("About {name}", { name: conversation.name })}
        </p>

        <div className="mt-3 flex flex-col items-center text-center">
          <div className="scale-125">
            <ConsultantAvatar name={conversation.name} />
          </div>
          <p className="mt-3 text-[13px] font-semibold text-ink">
            {t(conversation.name)}
          </p>
          <p className="text-[10.5px] text-slate-400">{t(conversation.role)}</p>
        </div>

        <div className="mt-3 space-y-2 border-t border-white/50 pt-3">
          <p className="flex items-center gap-2 text-[11px] text-slate-500">
            <Leaf size={13} className="shrink-0 text-emerald-500" />
            {t("Compliance & Sustainability")}</p>
          {conversation.email && (
            <p className="flex items-center gap-2 text-[11px] text-slate-500">
              <Mail size={13} className="shrink-0 text-slate-400" />
              <span className="truncate">{t(conversation.email)}</span>
            </p>
          )}
          {conversation.phone && (
            <p className="flex items-center gap-2 text-[11px] text-slate-500">
              <Phone size={13} className="shrink-0 text-slate-400" />
              {t(conversation.phone)}
            </p>
          )}
        </div>
      </section>

      {/* Related Project */}
      {conversation.relatedProject && (
        <section className="glass rounded-2xl p-4">
          <p className="text-[12px] font-semibold text-ink">
            {t("Related Project")}</p>
          <div className="mt-3 flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-100/70 text-emerald-600 ring-1 ring-inset ring-white/50">
              <Leaf size={17} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-semibold text-ink">
                {t(conversation.relatedProject.name)}
              </p>
              <p className="text-[10px] text-slate-400">
                {t(conversation.relatedProject.code)}
              </p>
            </div>
          </div>
          <button className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-primary-dark transition-colors hover:text-primary-dark">
            {t("View Project")}<ArrowRight size={14} />
          </button>
        </section>
      )}

      {/* Shared Files */}
      <section className="glass rounded-2xl p-4">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-ink">
            {t("Shared Files")}</p>
          <button className="text-[11px] font-medium text-primary-dark transition-colors hover:text-primary-dark">
            {t("View All")}</button>
        </div>
        <div className="mt-3 space-y-3">
          {messageSharedFiles.map((file) => (
            <MessageFileChip key={file.id} file={file} variant="list" />
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="glass rounded-2xl p-4">
        <p className="text-[12px] font-semibold text-ink">{t("Quick Actions")}</p>
        <ul className="mt-2 flex flex-col">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <li key={action.id}>
                <button className="flex w-full items-center gap-2.5 rounded-lg px-1.5 py-2 text-left text-[11.5px] font-medium text-primary-dark transition-colors hover:bg-white/60">
                  <Icon size={15} className="shrink-0" />
                  {t(action.label)}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
