"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

import { navigationItems } from "@/lib/navigation";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Path to your custom logo. Drop your file at `public/academia.png`
 * (or change this path) and it will show automatically. If the file
 * is missing, the sidebar falls back to the "ACADEMIA" wordmark.
 */
const LOGO_SRC = "/academia.png";

type SidebarProps = {
  /** Drawer open state (only relevant below the lg breakpoint). */
  isOpen?: boolean;
  /** Close handler used by the mobile drawer close button and nav items. */
  onClose?: () => void;
};

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const { t } = useI18n();

  // If the custom logo fails to load, fall back to the text wordmark.
  const [logoFailed, setLogoFailed] = useState(false);
  const pathname = usePathname();

  return (
    <aside
      className={`
        fixed left-0 top-0 z-50 flex h-dvh w-[185px] flex-col overflow-hidden
        border-r border-[#e6eef3] bg-white text-[#173b59]
        shadow-2xl shadow-[#173b59]/10
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Soft ambient tints, very subtle on white */}
      <div className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-sky/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-32 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />

      {/* Mobile-only close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label={t("Close menu")}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-[#173b59]/50 transition-colors hover:bg-[#173b59]/5 hover:text-[#173b59] lg:hidden"
      >
        <X size={18} />
      </button>

      {/* Logo area — links home, with a lift / glow / shine hover */}
      <div className="relative flex h-[115px] items-center justify-center">
        <Link
          href="/"
          onClick={onClose}
          aria-label={t("Dashboard")}
          className="logo-hover group relative isolate flex flex-col items-center rounded-2xl px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
        >
          {/* Soft halo that blooms behind the logo */}
          <span
            aria-hidden="true"
            className="logo-glow pointer-events-none absolute inset-0 -z-10 rounded-[40%] bg-[radial-gradient(closest-side,rgba(133,213,246,0.55),rgba(237,181,94,0.25)_60%,transparent)] opacity-0 blur-xl"
          />

          {!logoFailed ? (
            <span className="logo-mark relative block h-[70px] w-[150px]">
              <Image
                src={LOGO_SRC}
                alt={t("Company logo")}
                fill
                priority
                sizes="150px"
                className="object-contain"
                onError={() => setLogoFailed(true)}
              />
              {/* Light sweep, masked to the logo's own shape */}
              <span
                aria-hidden="true"
                className="logo-shine pointer-events-none absolute inset-0"
                style={{
                  maskImage: `url(${LOGO_SRC})`,
                  WebkitMaskImage: `url(${LOGO_SRC})`,
                }}
              />
            </span>
          ) : (
            <span className="logo-mark text-[25px] font-bold tracking-tight text-[#173b59]">
              ACADEMIA
            </span>
          )}

          <span className="logo-bar mt-2 h-[3px] w-10 rounded-full bg-gradient-to-r from-orange to-gold" />
        </Link>
      </div>

      {/* Navigation area */}
      <nav className="relative flex-1 overflow-y-auto px-3 py-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`
                group mb-1 flex w-full items-center gap-3 rounded-xl
                px-3 py-3 text-left text-[12px]
                transition-all duration-300 ease-out
                ${
                  isActive
                    ? "scale-[1.02] bg-gradient-to-r from-sky to-teal text-white shadow-lg shadow-teal/30"
                    : "text-[#173b59]/60 hover:bg-[#173b59]/5 hover:text-[#173b59] active:scale-[0.98]"
                }
              `}
            >
              <Icon
                size={18}
                className={`
                  shrink-0 transition-transform duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-[#173b59]/50 group-hover:scale-110 group-hover:text-teal"
                  }
                `}
              />

              <span className="truncate">{t(item.label)}</span>

              {item.badge != null && (
                <span
                  className={`
                    ml-auto flex h-5 w-5 items-center justify-center rounded-full text-[10px]
                    ${isActive ? "bg-white text-teal" : "bg-orange text-white"}
                  `}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom information area */}
      <div className="relative border-t border-[#e6eef3] p-4">
        <div className="rounded-2xl border border-[#e6eef3] bg-[#f6fafc] p-4">
          <p className="text-[11px] leading-5 text-[#173b59]/70">
            {t("Your Partner")}<br />
            {t("in a Sustainable")}<br />
            {t("Future")}</p>

          <div className="mt-3 h-[2px] w-8 bg-gradient-to-r from-orange to-gold" />
        </div>

        <p className="mt-5 text-center text-[10px] text-[#173b59]/40">
          {t("© 2024 Academia")}</p>
      </div>
    </aside>
  );
}
