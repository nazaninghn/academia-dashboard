"use client";

import { Camera, ChevronDown, CalendarDays, Leaf } from "lucide-react";

import {
  settingsPreferences,
  settingsIndustry,
  settingsCompanySize,
} from "@/data/dashboard";
import type { SettingsSelectField } from "@/types/dashboard";
import { useI18n } from "@/i18n/I18nProvider";

function SelectField({ field }: { field: SettingsSelectField }) {
  const { t } = useI18n();

  return (
    <div>
      <label className="text-[11px] text-slate-400">{t(field.label)}</label>
      <div className="relative mt-1">
        <select
          defaultValue={field.value}
          className="w-full appearance-none rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-[12px] text-slate-600 shadow-sm outline-none focus:border-primary-dark/50"
        >
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {t(opt)}
            </option>
          ))}
        </select>
        <ChevronDown
          size={14}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
        />
      </div>
    </div>
  );
}

export default function GeneralSettingsTab() {
  const { t } = useI18n();

  return (
    <section className="glass rounded-2xl p-4 sm:p-5">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-[16px] font-semibold text-ink">
            {t("General Settings")}</h2>
          <p className="mt-0.5 text-[11.5px] text-slate-400">
            {t("Manage your basic information and preferences.")}</p>
        </div>
        <button className="shrink-0 rounded-full bg-primary px-4 py-2 text-[12px] font-bold text-white shadow-sm transition-colors hover:bg-primary-dark">
          {t("Save Changes")}</button>
      </div>

      {/* Company Information */}
      <div className="mt-5">
        <h3 className="text-[13px] font-semibold text-ink">
          {t("Company Information")}</h3>

        <div className="mt-3 flex flex-col gap-4 sm:flex-row">
          {/* Logo uploader */}
          <div className="relative h-[92px] w-[130px] shrink-0">
            <div className="flex h-full w-full items-center justify-center rounded-xl border border-white/60 bg-white/80 shadow-sm">
              <div className="text-center leading-none">
                <p className="text-[16px] font-bold tracking-tight text-ink">
                  {t("ABC")}</p>
                <p className="mt-0.5 text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {t("Manufacturing")}</p>
              </div>
            </div>
            <button
              aria-label={t("Change logo")}
              className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shadow-md transition-colors hover:bg-primary-dark"
            >
              <Camera size={14} />
            </button>
          </div>

          {/* Fields grid */}
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="text-[11px] text-slate-400">{t("Company Name")}</label>
              <input
                type="text"
                defaultValue="ABC Manufacturing"
                className="mt-1 w-full rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-[12px] text-slate-600 shadow-sm outline-none focus:border-primary-dark/50"
              />
            </div>
            <SelectField field={settingsCompanySize} />
            <SelectField field={settingsIndustry} />
            <div>
              <label className="text-[11px] text-slate-400">{t("Founded Year")}</label>
              <div className="relative mt-1">
                <input
                  type="text"
                  defaultValue="2010"
                  className="w-full rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-[12px] text-slate-600 shadow-sm outline-none focus:border-primary-dark/50"
                />
                <CalendarDays
                  size={14}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Website + Description full width */}
        <div className="mt-3 grid grid-cols-1 gap-3">
          <div>
            <label className="text-[11px] text-slate-400">{t("Website")}</label>
            <input
              type="text"
              defaultValue="https://www.abcmanufacturing.com"
              className="mt-1 w-full rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-[12px] text-primary-dark shadow-sm outline-none focus:border-primary-dark/50"
            />
          </div>
          <div>
            <label className="text-[11px] text-slate-400">
              {t("Company Description")}</label>
            <div className="relative mt-1">
              <textarea
                rows={3}
                defaultValue="ABC Manufacturing is a leading manufacturer of industrial components, committed to quality, sustainability, and continuous improvement."
                className="w-full resize-none rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-[12px] text-slate-600 shadow-sm outline-none focus:border-primary-dark/50"
              />
              <span className="absolute bottom-2 right-3 text-[10px] text-slate-400">
                120/500
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="mt-5">
        <h3 className="text-[13px] font-semibold text-ink">{t("Preferences")}</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {settingsPreferences.map((field) => (
            <SelectField key={field.id} field={field} />
          ))}
        </div>
      </div>

      {/* Sustainable banner */}
      <div className="glass-row motion mt-5 flex items-center gap-3 rounded-xl bg-primary/30 p-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100/70 text-emerald-600 ring-1 ring-inset ring-white/50">
          <Leaf size={16} />
        </div>
        <div>
          <p className="text-[12px] font-semibold text-ink">
            {t("A More Sustainable Tomorrow")}</p>
          <p className="text-[10.5px] text-slate-500">
            {t("Your settings help us provide a more personalized and sustainable experience.")}</p>
        </div>
      </div>
    </section>
  );
}
