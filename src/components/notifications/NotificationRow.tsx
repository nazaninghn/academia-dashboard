"use client";

import { MoreHorizontal } from "lucide-react";

import type { NotificationItem } from "@/types/dashboard";
import NotificationIcon from "./NotificationIcon";
import { useI18n } from "@/i18n/I18nProvider";

export default function NotificationRow({
  notification,
}: {
  notification: NotificationItem;
}) {
  const { t } = useI18n();

  return (
    <div
      className={`group flex items-start gap-3 rounded-xl px-2 py-3 sm:px-3 transition-colors ${
        notification.unread ? "bg-primary/40" : "hover:bg-white/50"
      }`}
    >
      <NotificationIcon kind={notification.iconKind} />

      <div className="min-w-0 flex-1">
        <p className="text-[12.5px] font-semibold text-ink">
          {t(notification.title)}
        </p>
        <p className="mt-0.5 text-[11.5px] leading-4 text-slate-500">
          {t(notification.message)}
        </p>
        <p className="mt-1 text-[10.5px] text-slate-400 sm:hidden">
          {t(notification.time)}
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-1 sm:gap-2">
        <span className="hidden whitespace-nowrap text-[10.5px] text-slate-400 sm:inline">
          {t(notification.time)}
        </span>
        {notification.unread && (
          <span className="h-2 w-2 rounded-full bg-accent-dark" />
        )}
        <button
          aria-label={t("Notification actions")}
          className="inline-flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/70 hover:text-slate-600"
        >
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}
