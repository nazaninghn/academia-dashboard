"use client";

import { Factory, CalendarDays, Globe, Pencil } from "lucide-react";

import { companyProfile } from "@/data/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

export default function CompanyIdentity() {
  const { t } = useI18n();

  const { name, tagline, industry, established, website } = companyProfile;

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="flex h-[72px] w-[110px] shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/80 shadow-sm">
            <div className="text-center leading-none">
              <p className="text-[16px] font-bold tracking-tight text-[#163b5b]">
                {t("ABC")}</p>
              <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                {t("Manufacturing")}</p>
            </div>
          </div>

          <div className="min-w-0">
            <h2 className="text-[20px] font-bold text-[#163b5b]">{t(name)}</h2>
            <p className="mt-0.5 text-[12px] text-slate-500">{t(tagline)}</p>

            <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5">
                <Factory size={13} className="text-slate-400" />
                {t(industry)}
              </span>
              <span className="flex items-center gap-1.5">
                <CalendarDays size={13} className="text-slate-400" />
                {t(established)}
              </span>
              <a
                href={`https://${website}`}
                className="flex items-center gap-1.5 text-teal transition-colors hover:text-[#3f8291]"
              >
                <Globe size={13} />
                {t(website)}
              </a>
            </div>
          </div>
        </div>

        <button className="flex shrink-0 items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
          <Pencil size={14} />
          {t("Edit Profile")}</button>
      </div>
    </section>
  );
}
