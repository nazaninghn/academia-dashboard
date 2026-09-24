"use client";

import { UploadCloud, CheckCircle2, XCircle, type LucideIcon } from "lucide-react";

import { recentActivity } from "@/data/dashboard";
import type { ActivityItem } from "@/types/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

const configByAction: Record<
  ActivityItem["action"],
  { icon: LucideIcon; style: string; verb: string }
> = {
  uploaded: {
    icon: UploadCloud,
    style: "bg-sky/25 text-teal",
    verb: "uploaded a document",
  },
  approved: {
    icon: CheckCircle2,
    style: "bg-emerald-100/80 text-emerald-600",
    verb: "approved a document",
  },
  rejected: {
    icon: XCircle,
    style: "bg-rose-100/80 text-rose-600",
    verb: "rejected a document",
  },
};

export default function RecentActivity() {
  const { t } = useI18n();

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-[13px] font-semibold text-[#163b5b]">
          {t("Recent Activity")}</h3>
        <button className="text-[11px] font-medium text-teal transition-colors hover:text-[#3f8291]">
          {t("View All")}</button>
      </div>

      <ul className="mt-3 flex flex-col gap-3">
        {recentActivity.map((item) => {
          const { icon: Icon, style, verb } = configByAction[item.action];

          return (
            <li key={item.id} className="flex items-start gap-3">
              <div className="relative shrink-0">
                <ConsultantAvatar name={item.person} />
                <span
                  className={`absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full ring-2 ring-white ${style}`}
                >
                  <Icon size={9} />
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[11.5px] leading-4 text-slate-600">
                  <span className="font-semibold text-[#163b5b]">
                    {t(item.person)}
                  </span>{" "}
                  {t(verb)}
                </p>
                <p className="truncate text-[10.5px] text-slate-400">
                  {t(item.target)}
                </p>
                <p className="mt-0.5 text-[10px] text-slate-400">{t(item.time)}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
