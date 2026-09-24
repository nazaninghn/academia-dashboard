"use client";

import { ArrowRight } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

type StatCardProps = {
  value: number;
  label: string;
  icon: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
};

export default function StatCard({
  value,
  label,
  icon,
  iconBg = "bg-sky/25",
  iconColor = "text-teal",
}: StatCardProps) {
  const { t } = useI18n();

  return (
    <div className="glass motion hover-lift group flex h-[86px] items-center gap-4 rounded-2xl px-4">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-xl ring-1 ring-inset ring-white/50 ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-[22px] font-bold leading-none text-[#163b5b]">
          {value}
        </p>

        <p className="mt-2 text-[10px] text-slate-500">{t(label)}</p>
      </div>

      <ArrowRight
        size={15}
        className={`ml-auto transition-transform group-hover:translate-x-0.5 ${iconColor}`}
      />
    </div>
  );
}
