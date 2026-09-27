"use client";

import { ArrowRight, ShieldCheck, Leaf, TrendingUp } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Compliance",
    subtitle: "Meet global standards",
    tone: "bg-primary/20 text-primary-dark",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    subtitle: "Build a greener future",
    tone: "bg-emerald-100/70 text-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    subtitle: "Unlock new opportunities",
    tone: "bg-accent/20 text-accent-dark",
  },
];

export default function ServicePromo() {
  const { t } = useI18n();

  return (
    <section className="glass motion hover-lift flex flex-col gap-4 overflow-hidden rounded-2xl p-4 lg:flex-row lg:items-center">
      {/* Left: image + copy + CTA */}
      <div className="flex flex-1 items-center gap-4">
        <div className="relative hidden h-[70px] w-[110px] shrink-0 overflow-hidden rounded-xl sm:block">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/50 via-primary/40 to-primary/60" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-dark/50 to-transparent" />
          <div className="animate-floaty absolute -bottom-3 right-2 h-10 w-16 rounded-[50%] bg-accent/30 blur-md" />
        </div>

        <div>
          <h3 className="text-[14px] font-semibold text-ink">
            {t("Need a new service?")}</h3>
          <p className="mt-1 text-[11px] text-slate-500">
            {t("Explore our services and start a new project with Academia.")}</p>
        </div>
      </div>

      {/* Middle: CTA */}
      <button className="flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
        {t("Explore Services")}<ArrowRight size={15} />
      </button>

      {/* Right: highlights */}
      <div className="flex flex-wrap items-center gap-4 lg:gap-6">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.title} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ring-1 ring-inset ring-white/50 ${item.tone}`}
              >
                <Icon size={16} />
              </div>
              <div>
                <p className="text-[11.5px] font-semibold text-ink">
                  {t(item.title)}
                </p>
                <p className="text-[10px] text-slate-400">{t(item.subtitle)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
