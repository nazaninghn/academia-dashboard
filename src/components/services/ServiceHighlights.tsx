"use client";

import { Leaf, Users, ShieldCheck, BarChart3, type LucideIcon } from "lucide-react";

import { serviceHighlights } from "@/data/dashboard";
import type { ServiceHighlight } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByKind: Record<ServiceHighlight["iconKind"], LucideIcon> = {
  leaf: Leaf,
  users: Users,
  shield: ShieldCheck,
  chart: BarChart3,
};

const styleByKind: Record<ServiceHighlight["iconKind"], string> = {
  leaf: "bg-emerald-100/70 text-emerald-600",
  users: "bg-sky/25 text-teal",
  shield: "bg-orange/15 text-orange",
  chart: "bg-teal/15 text-teal",
};

export default function ServiceHighlights() {
  const { t } = useI18n();

  return (
    <section className="glass rounded-2xl px-5 py-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {serviceHighlights.map((item) => {
          const Icon = iconByKind[item.iconKind];

          return (
            <div key={item.id} className="flex items-center gap-3">
              <div
                className={`card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${styleByKind[item.iconKind]}`}
              >
                <Icon size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-[12.5px] font-semibold text-[#163b5b]">
                  {t(item.title)}
                </p>
                <p className="truncate text-[10.5px] text-slate-400">
                  {t(item.subtitle)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
