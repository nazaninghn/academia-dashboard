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
        border-r border-border bg-surface text-ink
        shadow-2xl shadow-ink/10
        transition-transform duration-300 ease-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
    >
      {/* Soft ambient tints, very subtle on white */}
      <div className="pointer-events-none absolute -left-10 top-24 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-32 h-32 w-32 rounded-full bg-accent/10 blur-3xl" />

      {/* Mobile-only close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label={t("Close menu")}
        className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink lg:hidden"
      >
        <X size={18} />
      </button>

      {/* Logo area — links home, with a lift / glow / shine hover */}
      <div className="relative flex h-[115px] items-center justify-center">
        <Link
          href="/"
          onClick={onClose}
          aria-label={t("Dashboard")}
          className="logo-hover group relative isolate flex flex-col items-center rounded-2xl px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50"
        >
          {/* Soft halo that blooms behind the logo */}
          <span
            aria-hidden="true"
            className="logo-glow pointer-events-none absolute inset-0 -z-10 rounded-[40%] bg-[radial-gradient(closest-side,rgba(33,182,215,0.55),rgba(242,162,58,0.25)_60%,transparent)] opacity-0 blur-xl"
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
            <span className="logo-mark text-[25px] font-bold tracking-tight text-ink">
              ACADEMIA
            </span>
          )}

          <span className="logo-bar mt-2 h-[3px] w-10 rounded-full bg-gradient-to-r from-accent-dark to-accent" />
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
              aria-current={isActive ? "page" : undefined}
              className={`
                nav-item group relative isolate mb-1 flex w-full items-center gap-3
                overflow-hidden rounded-xl px-3 py-2 text-left text-[12px]
                outline-none focus-visible:ring-2 focus-visible:ring-primary-dark/50
                ${
                  isActive
                    ? "nav-item-active bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary-dark/30"
                    : "text-ink-secondary hover:text-ink focus-visible:text-ink"
                }
              `}
            >
              {isActive ? (
                // Light sweep across the active pill on hover
                <span aria-hidden="true" className="nav-shine pointer-events-none absolute inset-0" />
              ) : (
                <>
                  {/* Wash that slides in from the left */}
                  <span
                    aria-hidden="true"
                    className="nav-wash pointer-events-none absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-primary/15 via-primary/5 to-transparent"
                  />
                  {/* Accent bar on the leading edge */}
                  <span
                    aria-hidden="true"
                    className="nav-accent pointer-events-none absolute left-0 top-1/2 w-[3px] -translate-y-1/2 rounded-r-full bg-gradient-to-b from-primary to-primary-dark"
                  />
                </>
              )}

              <span
                className={`
                  nav-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-lg
                  ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-ink-muted group-hover:bg-primary/10 group-hover:text-primary-dark"
                  }
                `}
              >
                <Icon size={17} />
              </span>

              <span className="nav-label truncate">{t(item.label)}</span>

              {item.badge != null && (
                <span
                  className={`
                    nav-badge ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px]
                    ${isActive ? "bg-white text-primary-dark" : "bg-accent-dark text-white"}
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
      <div className="relative border-t border-border p-4">
        <div className="rounded-2xl border border-border bg-background p-4">
          <p className="text-[11px] leading-5 text-ink-secondary">
            {t("Your Partner")}<br />
            {t("in a Sustainable")}<br />
            {t("Future")}</p>

          <div className="mt-3 h-[2px] w-8 bg-gradient-to-r from-accent-dark to-accent" />
        </div>

        <p className="mt-5 text-center text-[10px] text-ink-muted">
          {t("© 2024 Academia")}</p>
      </div>
    </aside>
  );
}
