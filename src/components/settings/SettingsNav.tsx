"use client";

import {
  Settings,
  UserRound,
  ShieldCheck,
  Bell,
  Palette,
  Globe,
  Plug,
  CreditCard,
  Lock,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

import { settingsNav } from "@/data/dashboard";
import type { SettingsNavItem } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByKind: Record<SettingsNavItem["iconKind"], LucideIcon> = {
  general: Settings,
  account: UserRound,
  security: ShieldCheck,
  notifications: Bell,
  appearance: Palette,
  language: Globe,
  integrations: Plug,
  billing: CreditCard,
  privacy: Lock,
  help: HelpCircle,
};

type SettingsNavProps = {
  activeKey: string;
  onSelect: (key: string) => void;
};

export default function SettingsNav({ activeKey, onSelect }: SettingsNavProps) {
  const { t } = useI18n();

  return (
    // Below `lg` the nav becomes a horizontally scrollable strip of pills.
    <nav className="glass min-w-0 self-start rounded-2xl p-2">
      <ul className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-0.5 lg:overflow-visible">
        {settingsNav.map((item) => {
          const Icon = iconByKind[item.iconKind];
          const isActive = item.key === activeKey;

          return (
            <li key={item.key} className="shrink-0 lg:shrink">
              <button
                onClick={() => onSelect(item.key)}
                className={`flex w-full items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-left transition-colors lg:gap-3 lg:whitespace-normal lg:py-2.5 ${
                  isActive
                    ? "bg-sky-light/50 ring-1 ring-inset ring-sky/40"
                    : "hover:bg-white/50"
                }`}
              >
                <Icon
                  size={17}
                  className={isActive ? "text-teal" : "text-slate-400"}
                />
                <div className="min-w-0">
                  <p
                    className={`text-[12.5px] font-semibold ${
                      isActive ? "text-teal" : "text-[#163b5b]"
                    }`}
                  >
                    {t(item.label)}
                  </p>
                  <p className="hidden truncate text-[10px] text-slate-400 lg:block">
                    {t(item.description)}
                  </p>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
