"use client";

import { useState } from "react";
import { Search, Bell, ChevronDown, Menu, X } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import LanguageSwitcher from "./LanguageSwitcher";

type HeaderProps = {
  /** Opens the mobile navigation drawer. */
  onMenuClick?: () => void;
};

export default function Header({ onMenuClick }: HeaderProps) {
  const { t } = useI18n();

  // Below `sm` the search bar collapses into an icon that reveals a full-width row.
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/40 bg-white/50 backdrop-blur-xl">
      <div className="flex h-[62px] items-center justify-between gap-3 px-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          {/* Mobile menu button */}
          <button
            type="button"
            onClick={onMenuClick}
            aria-label={t("Open menu")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/70 text-slate-600 shadow-sm backdrop-blur-md transition-colors hover:bg-white/90 lg:hidden"
          >
            <Menu size={18} />
          </button>

          {/* Mobile search toggle */}
          <button
            type="button"
            onClick={() => setIsSearchOpen((open) => !open)}
            aria-label={isSearchOpen ? t("Close search") : t("Open search")}
            aria-expanded={isSearchOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/70 text-slate-600 shadow-sm backdrop-blur-md transition-colors hover:bg-white/90 sm:hidden"
          >
            {isSearchOpen ? <X size={17} /> : <Search size={17} />}
          </button>

          <div className="hidden w-[240px] items-center gap-3 rounded-full border border-white/60 bg-white/70 px-4 py-2.5 shadow-sm backdrop-blur-md sm:flex md:w-[310px]">
            <Search size={16} className="shrink-0 text-slate-400" />

            <input
              type="text"
              placeholder={t("Search projects, documents, or anything...")}
              className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2.5 sm:gap-5">
          <LanguageSwitcher />

          <button className="relative" aria-label={t("Notifications")}>
            <Bell size={19} />

            <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-orange" />
          </button>

          <div className="motion hover-row flex cursor-pointer items-center gap-2 rounded-full px-1 py-1 sm:gap-3 sm:px-2">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-sky text-sm text-white ring-2 ring-white/60 shadow-[0_0_14px_-3px_rgba(78,151,167,0.7)]">
              A
            </div>

            <div className="hidden sm:block">
              <p className="text-[12px] font-semibold">{t("ABC Manufacturing")}</p>

              <p className="text-[10px] text-slate-400">{t("Client Portal")}</p>
            </div>

            <ChevronDown size={15} className="hidden sm:block" />
          </div>
        </div>
      </div>

      {/* Mobile search row */}
      {isSearchOpen && (
        <div className="px-3 pb-3 sm:hidden">
          <div className="flex items-center gap-3 rounded-full border border-white/60 bg-white/80 px-4 py-2.5 shadow-sm">
            <Search size={16} className="shrink-0 text-slate-400" />

            <input
              type="text"
              autoFocus
              placeholder={t("Search projects, documents...")}
              className="w-full bg-transparent text-[13px] outline-none placeholder:text-slate-400"
            />
          </div>
        </div>
      )}
    </header>
  );
}
