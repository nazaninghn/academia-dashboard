"use client";

import { useState } from "react";
import {
  CheckCheck,
  Settings,
  Archive,
  LifeBuoy,
  Lightbulb,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import { notificationPreferences } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const quickActions: { id: string; label: string; icon: LucideIcon }[] = [
  { id: "read", label: "Mark all as read", icon: CheckCheck },
  { id: "settings", label: "Notification settings", icon: Settings },
  { id: "archived", label: "View archived", icon: Archive },
  { id: "help", label: "Help & Support", icon: LifeBuoy },
];

export default function NotificationSidebar() {
  const { t } = useI18n();

  const [prefs, setPrefs] = useState(notificationPreferences);

  const toggle = (id: string) =>
    setPrefs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)),
    );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col">
      {/* Notification Preferences */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <h3 className="text-[13px] font-semibold text-ink">
          {t("Notification Preferences")}</h3>
        <p className="mt-0.5 text-[11px] text-slate-400">
          {t("Choose what you want to be notified about.")}</p>

        <ul className="mt-3 space-y-3">
          {prefs.map((pref) => (
            <li key={pref.id} className="flex items-center justify-between gap-2">
              <span className="text-[12px] text-slate-600">{t(pref.label)}</span>
              <button
                role="switch"
                aria-checked={pref.enabled}
                aria-label={t("Toggle {name}", { name: t(pref.label) })}
                onClick={() => toggle(pref.id)}
                className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${
                  pref.enabled ? "bg-primary" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                    pref.enabled ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Quick Actions */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <h3 className="text-[13px] font-semibold text-ink">
          {t("Quick Actions")}</h3>
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

      {/* Stay in the Loop */}
      <section className="glass motion hover-lift relative overflow-hidden rounded-2xl p-4 sm:p-5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-primary/40 to-primary/40" />
        <div className="animate-floaty pointer-events-none absolute -bottom-6 right-2 h-20 w-32 rounded-[50%] bg-primary-dark/20 blur-2xl" />

        <div className="relative z-10">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/20 text-accent-dark ring-1 ring-inset ring-white/50">
              <Lightbulb size={16} />
            </div>
            <p className="text-[12.5px] font-semibold text-ink">
              {t("Stay in the Loop")}</p>
          </div>
          <p className="mt-2 text-[11px] leading-4 text-slate-500">
            {t("Enable notifications to never miss important updates.")}</p>
          <button className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/70 px-3.5 py-1.5 text-[11.5px] font-medium text-primary-dark shadow-sm transition-colors hover:bg-white/90">
            {t("Learn More")}<ArrowRight size={14} />
          </button>
        </div>
      </section>
    </div>
  );
}
