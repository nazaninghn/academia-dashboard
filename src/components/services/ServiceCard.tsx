"use client";

import {
  ShieldCheck,
  Leaf,
  Users,
  GraduationCap,
  Search,
  Cpu,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";

import type { ServiceCard as ServiceCardType, ServiceIconKind } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const iconByKind: Record<ServiceIconKind, { icon: LucideIcon; style: string }> = {
  shield: { icon: ShieldCheck, style: "bg-sky/25 text-teal" },
  leaf: { icon: Leaf, style: "bg-emerald-100/80 text-emerald-600" },
  users: { icon: Users, style: "bg-orange/15 text-orange" },
  cap: { icon: GraduationCap, style: "bg-violet-100/80 text-violet-600" },
  search: { icon: Search, style: "bg-teal/15 text-teal" },
  chip: { icon: Cpu, style: "bg-rose-100/80 text-rose-500" },
};

export default function ServiceCard({ service }: { service: ServiceCardType }) {
  const { t } = useI18n();

  const { icon: Icon, style } = iconByKind[service.iconKind];

  return (
    <article className="glass motion hover-lift flex flex-col rounded-2xl p-4">
      {/* Top: icon + title + image */}
      <div className="flex gap-3">
        <div className="flex flex-1 flex-col">
          <div className="flex items-start gap-2.5">
            <div
              className={`card-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${style}`}
            >
              <Icon size={19} />
            </div>
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold text-[#163b5b]">
                {t(service.title)}
              </h3>
              <p className="text-[10.5px] text-slate-400">{t(service.tagline)}</p>
            </div>
          </div>

          <p className="mt-3 text-[11.5px] leading-5 text-slate-500">
            {t(service.description)}
          </p>
        </div>

        {/* Decorative image tile */}
        <div className="relative hidden h-[92px] w-[92px] shrink-0 overflow-hidden rounded-xl sm:block">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="animate-floaty absolute -bottom-3 right-2 h-8 w-12 rounded-[50%] bg-white/25 blur-md" />
          <Icon
            size={22}
            className="absolute right-2 top-2 text-white/70"
          />
        </div>
      </div>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {service.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-slate-100/80 px-2 py-0.5 text-[10px] font-medium text-slate-500"
          >
            {t(tag)}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-4 flex items-center gap-2">
        <button className="flex-1 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
          {t("Learn More")}</button>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-teal px-3 py-2 text-[12px] font-semibold text-white shadow-sm transition-colors hover:bg-[#3f8291]">
          {t("Request Service")}<ArrowRight size={14} />
        </button>
      </div>
    </article>
  );
}
