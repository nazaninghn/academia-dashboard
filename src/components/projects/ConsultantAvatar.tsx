"use client";


import { useI18n } from "@/i18n/I18nProvider";const gradients = [
  "from-primary-dark to-primary",
  "from-primary to-primary-dark",
  "from-accent-dark to-accent",
  "from-emerald-400 to-primary-dark",
  "from-slate-400 to-slate-600",
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function ConsultantAvatar({ name }: { name: string }) {
  const { t } = useI18n();

  // Stable gradient per name so the same consultant keeps the same color.
  const index =
    name.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 0) %
    gradients.length;

  return (
    <div
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradients[index]} text-[11px] font-semibold text-white ring-2 ring-white/60`}
    >
      {t(initials(name))}
    </div>
  );
}
