"use client";

import { locales } from "@/i18n/config";
import { useI18n } from "@/i18n/I18nProvider";

const labels = { tr: "TR", en: "EN" } as const;
const names = { tr: "Türkçe", en: "English" } as const;

/** Segmented TR / EN toggle shown in the header. */
export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t("Language")}
      className="flex shrink-0 items-center rounded-full border border-white/60 bg-white/70 p-0.5 shadow-sm backdrop-blur-md"
    >
      {locales.map((code) => {
        const isActive = code === locale;

        return (
          <button
            key={code}
            type="button"
            lang={code}
            onClick={() => setLocale(code)}
            aria-pressed={isActive}
            title={names[code]}
            className={`rounded-full px-2.5 py-1 text-[11px] font-semibold transition-colors ${
              isActive
                ? "bg-teal text-white shadow-sm"
                : "text-slate-500 hover:text-teal"
            }`}
          >
            {labels[code]}
          </button>
        );
      })}
    </div>
  );
}
