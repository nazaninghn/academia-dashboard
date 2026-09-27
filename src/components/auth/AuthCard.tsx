"use client";

import { useState } from "react";
import Image from "next/image";

import LanguageSwitcher from "@/components/dashboard/LanguageSwitcher";
import { useI18n } from "@/i18n/I18nProvider";

/**
 * Animated split-panel authentication card.
 *
 * A single card holds both the Sign In and Sign Up forms. An overlay panel
 * slides across to reveal the relevant form, echoing the classic
 * "double slider" pattern but painted with the Academia palette
 * (primary-dark -> primary gradient, accent highlights) instead of red.
 * On phones the overlay is hidden and a text link switches forms instead.
 */
export default function AuthCard() {
  const { t } = useI18n();
  // When true, the Sign Up form is active (overlay slid to the left).
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className={`
        auth-card relative mx-auto h-[520px] w-full max-w-[860px] overflow-hidden
        rounded-3xl bg-white shadow-2xl shadow-ink/25
        ${isSignUp ? "is-signup" : ""}
      `}
    >
      <div className="absolute left-4 top-4 z-[110]">
        <LanguageSwitcher />
      </div>

      {/* ---------- Sign In form ---------- */}
      <div
        className="auth-pane auth-pane--signin absolute left-0 top-0 flex h-full w-1/2 items-center justify-center px-8"
        inert={isSignUp}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-[300px] flex-col items-center text-center"
        >
          <h1 className="text-2xl font-bold text-ink">{t("Sign In")}</h1>

          <SocialRow />

          <span className="mt-4 text-[11px] text-ink/50">
            {t("or use your email & password")}
          </span>

          <input
            className="auth-input"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder={t("Email")}
            aria-label={t("Email")}
          />
          <input
            className="auth-input"
            type="password"
            name="password"
            autoComplete="current-password"
            required
            placeholder={t("Password")}
            aria-label={t("Password")}
          />

          <button
            type="button"
            className="mt-2 text-[11px] text-ink/50 transition-colors hover:text-primary-dark"
          >
            {t("Forgot your password?")}
          </button>

          <button type="submit" className="auth-btn mt-4">
            {t("Sign In")}
          </button>

          <p className="auth-switch mt-5 text-[12px] text-ink/60">
            {t("Don't have an account?")}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className="font-semibold text-primary-dark hover:underline"
            >
              {t("Sign Up")}
            </button>
          </p>
        </form>
      </div>

      {/* ---------- Sign Up form ---------- */}
      <div
        className="auth-pane auth-pane--signup absolute right-0 top-0 flex h-full w-1/2 items-center justify-center px-8"
        inert={!isSignUp}
      >
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full max-w-[300px] flex-col items-center text-center"
        >
          <h1 className="text-2xl font-bold text-ink">{t("Create Account")}</h1>

          <SocialRow />

          <span className="mt-4 text-[11px] text-ink/50">
            {t("or use your email for registration")}
          </span>

          <input
            className="auth-input"
            type="text"
            name="name"
            autoComplete="name"
            required
            placeholder={t("Name")}
            aria-label={t("Name")}
          />
          <input
            className="auth-input"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder={t("Email")}
            aria-label={t("Email")}
          />
          <input
            className="auth-input"
            type="password"
            name="password"
            autoComplete="new-password"
            required
            minLength={8}
            placeholder={t("Password")}
            aria-label={t("Password")}
          />

          <button type="submit" className="auth-btn mt-4">
            {t("Sign Up")}
          </button>

          <p className="auth-switch mt-5 text-[12px] text-ink/60">
            {t("Already have an account?")}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className="font-semibold text-primary-dark hover:underline"
            >
              {t("Sign In")}
            </button>
          </p>
        </form>
      </div>

      {/* ---------- Sliding overlay ---------- */}
      <div className="auth-overlay-container absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <div className="auth-overlay relative -left-full h-full w-[200%]">
          {/* Left overlay panel (shown while on Sign Up) */}
          <div className="auth-overlay-panel auth-overlay--left absolute top-0 flex h-full w-1/2 flex-col items-center justify-center px-10 text-center text-white">
            <Logo />
            <h2 className="text-2xl font-bold">{t("Welcome Back")}</h2>
            <p className="mt-3 text-[13px] leading-6 text-white/85">
              {t("Already have an account? Sign in to reach your Academia dashboard.")}
            </p>
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className="auth-ghost-btn mt-6"
            >
              {t("Sign In")}
            </button>
          </div>

          {/* Right overlay panel (shown while on Sign In) */}
          <div className="auth-overlay-panel auth-overlay--right absolute right-0 top-0 flex h-full w-1/2 flex-col items-center justify-center px-10 text-center text-white">
            <Logo />
            <h2 className="text-2xl font-bold">{t("Hello, Partner")}</h2>
            <p className="mt-3 text-[13px] leading-6 text-white/85">
              {t("New here? Create an account and start your sustainable journey.")}
            </p>
            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className="auth-ghost-btn mt-6"
            >
              {t("Sign Up")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Small copyright line under the card; lives here so it follows the language toggle. */
export function AuthFooter() {
  const { t } = useI18n();

  return (
    <p className="mt-6 text-center text-[11px] text-ink/45">
      © {new Date().getFullYear()} Academia · {t("Your Partner in a Sustainable Future")}
    </p>
  );
}

/** White Academia logo shown on the overlay panels. */
function Logo() {
  return (
    <div className="relative mb-4 h-12 w-32">
      <Image
        src="/academia.png"
        alt="Academia"
        fill
        sizes="128px"
        className="object-contain brightness-0 invert"
      />
    </div>
  );
}

/*
 * lucide-react v1 no longer ships brand logos, so the social marks are
 * drawn inline (simple-icons paths, 24x24 viewBox).
 */
const socials = [
  {
    name: "Google",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.08 1.08-2.77 2.26-5.7 2.26-4.54 0-8.1-3.66-8.1-8.2s3.56-8.2 8.1-8.2c2.45 0 4.24.97 5.56 2.2l2.31-2.31C18.75 1.97 16.02.5 12.48.5 6.2.5.97 5.6.97 11.88s5.23 11.38 11.51 11.38c3.4 0 5.96-1.12 7.96-3.2 2.06-2.06 2.7-4.95 2.7-7.28 0-.72-.05-1.39-.16-1.95z",
  },
  {
    name: "Facebook",
    path: "M9.1 23.7v-8h-2.5V12h2.5v-1.6c0-4.1 1.86-6 5.9-6 .77 0 2.1.15 2.64.3v3.35c-.29-.03-.78-.05-1.4-.05-1.98 0-2.75.75-2.75 2.7V12h3.95l-.68 3.67h-3.27v8.25C19.48 23.19 24 18.14 24 12c0-6.63-5.37-12-12-12S0 5.37 0 12c0 5.63 3.87 10.35 9.1 11.7z",
  },
  {
    name: "GitHub",
    path: "M12 .3a12 12 0 0 0-3.8 23.38c.6.12.83-.26.83-.57L9 21.07c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.74.09-.73.09-.73 1.2.09 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.1-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.64 1.66.24 2.88.12 3.18a4.65 4.65 0 0 1 1.23 3.22c0 4.61-2.8 5.63-5.48 5.92.42.36.81 1.1.81 2.22l-.01 3.29c0 .31.2.69.82.57A12 12 0 0 0 12 .3",
  },
  {
    name: "LinkedIn",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z",
  },
];

/** Compact row of social sign-in icons. */
function SocialRow() {
  const { t } = useI18n();

  return (
    <div className="mt-4 flex items-center gap-2.5">
      {socials.map(({ name, path }) => (
        <button
          key={name}
          type="button"
          aria-label={t("Continue with {name}", { name })}
          title={t("Continue with {name}", { name })}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary-dark hover:text-primary-dark"
        >
          <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" aria-hidden="true">
            <path d={path} />
          </svg>
        </button>
      ))}
    </div>
  );
}
