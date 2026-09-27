"use client";

import { Pencil, ExternalLink, UploadCloud } from "lucide-react";

import { companyProfile } from "@/data/dashboard";
import type { FocusArea, SocialLink } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

const focusToneStyle: Record<FocusArea["tone"], string> = {
  amber: "bg-amber-100/70 text-amber-600",
  green: "bg-emerald-100/70 text-emerald-600",
  teal: "bg-primary-dark/15 text-primary-dark",
  sky: "bg-primary/25 text-primary-dark",
};

const socialConfig: Record<
  SocialLink["platform"],
  { label: string; style: string }
> = {
  linkedin: { label: "in", style: "bg-[#0a66c2] text-white" },
  youtube: { label: "YT", style: "bg-[#ff0000] text-white" },
  x: { label: "X", style: "bg-black text-white" },
};

function SectionHeader({ title }: { title: string }) {
  const { t } = useI18n();

  return (
    <div className="flex items-center justify-between">
      <h3 className="text-[13px] font-semibold text-ink">{t(title)}</h3>
      <button className="flex items-center gap-1 text-[11px] font-medium text-primary-dark transition-colors hover:text-primary-dark">
        <Pencil size={12} />
        {t("Edit")}</button>
    </div>
  );
}

export default function GeneralInfoTab() {
  const { t } = useI18n();

  const { info, primaryIndustry, focusAreas, socials } = companyProfile;

  return (
    <div className="space-y-4">
      {/* Row 1: Company Information + Industry & Compliance Focus */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Company Information */}
        <section className="glass rounded-2xl p-4 sm:p-5">
          <SectionHeader title="Company Information" />

          <dl className="mt-3 space-y-3">
            {info.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[96px_1fr] items-start gap-2 sm:grid-cols-[120px_1fr]"
              >
                <dt className="text-[11px] text-slate-400">{t(row.label)}</dt>
                <dd className="min-w-0 break-words text-[11.5px] text-slate-600">
                  {row.isLink ? (
                    <a
                      href={row.value}
                      className="inline-flex items-center gap-1 break-all text-primary-dark transition-colors hover:text-primary-dark"
                    >
                      {t(row.value)}
                      <ExternalLink size={11} className="shrink-0" />
                    </a>
                  ) : (
                    t(row.value)
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Industry & Compliance Focus */}
        <section className="glass rounded-2xl p-4 sm:p-5">
          <SectionHeader title="Industry & Compliance Focus" />

          <p className="mt-3 text-[11px] text-slate-400">{t("Primary Industry")}</p>
          <span className="mt-1 inline-flex rounded-md bg-primary/20 px-2.5 py-1 text-[11px] font-medium text-primary-dark">
            {t(primaryIndustry)}
          </span>

          <p className="mt-4 text-[11px] text-slate-400">{t("Areas of Focus")}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area.id}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${focusToneStyle[area.tone]}`}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current" />
                {t(area.label)}
              </span>
            ))}
          </div>
        </section>
      </div>

      {/* Row 2: Company Logo + Social Media */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Company Logo */}
        <section className="glass rounded-2xl p-4 sm:p-5">
          <SectionHeader title="Company Logo" />

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="flex h-[92px] items-center justify-center rounded-xl border border-white/60 bg-white/80 shadow-sm">
              <div className="text-center leading-none">
                <p className="text-[18px] font-bold tracking-tight text-ink">
                  {t("ABC")}</p>
                <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {t("Manufacturing")}</p>
              </div>
            </div>

            <button className="flex h-[92px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-primary/50 bg-primary/30 text-center transition-colors hover:border-primary-dark/60 hover:bg-primary/50">
              <UploadCloud size={20} className="text-primary-dark" />
              <p className="mt-1 text-[11px] font-medium text-primary-dark">
                {t("Upload New Logo")}</p>
              <p className="text-[9px] text-slate-400">
                {t("PNG, JPG or SVG (max 2 MB)")}</p>
            </button>
          </div>
        </section>

        {/* Social Media */}
        <section className="glass rounded-2xl p-4 sm:p-5">
          <SectionHeader title="Social Media" />

          <ul className="mt-3 space-y-2.5">
            {socials.map((social) => {
              const config = socialConfig[social.platform];

              return (
                <li key={social.id} className="flex items-center gap-2.5">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${config.style}`}
                  >
                    {t(config.label)}
                  </span>
                  <a
                    href={social.url}
                    className="truncate text-[11px] text-slate-600 transition-colors hover:text-primary-dark"
                  >
                    {t(social.url)}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
