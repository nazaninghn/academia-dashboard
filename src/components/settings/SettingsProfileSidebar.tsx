"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  Globe,
  Pencil,
  ShieldCheck,
  Bell,
  Monitor,
  AlertTriangle,
} from "lucide-react";

import { profileSummary, securityToggles } from "@/data/dashboard";
import ConsultantAvatar from "@/components/projects/ConsultantAvatar";
import { useI18n } from "@/i18n/I18nProvider";

const toggleIcon = [ShieldCheck, Bell];

export default function SettingsProfileSidebar() {
  const { t } = useI18n();

  const [toggles, setToggles] = useState(securityToggles);

  const flip = (id: string) =>
    setToggles((prev) =>
      prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t)),
    );

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-col">
      {/* Your Profile */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <p className="text-[12px] font-semibold text-[#163b5b]">{t("Your Profile")}</p>

        <div className="mt-3 flex items-center gap-3">
          <div className="scale-110">
            <ConsultantAvatar name={profileSummary.name} />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[13px] font-semibold text-[#163b5b]">
              {t(profileSummary.name)}
            </p>
            <p className="truncate text-[10.5px] text-slate-400">
              {t(profileSummary.role)}
            </p>
          </div>
        </div>

        <dl className="mt-3 space-y-2 border-t border-white/50 pt-3">
          <div className="flex items-center gap-2">
            <Mail size={13} className="shrink-0 text-slate-400" />
            <dt className="w-16 text-[10.5px] text-slate-400">{t("Email")}</dt>
            <dd className="truncate text-[11px] text-slate-600">
              {t(profileSummary.email)}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={13} className="shrink-0 text-slate-400" />
            <dt className="w-16 text-[10.5px] text-slate-400">{t("Phone")}</dt>
            <dd className="text-[11px] text-slate-600">{t(profileSummary.phone)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={13} className="shrink-0 text-slate-400" />
            <dt className="w-16 text-[10.5px] text-slate-400">{t("Time Zone")}</dt>
            <dd className="text-[11px] text-slate-600">
              {t(profileSummary.timeZone)}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={13} className="shrink-0 text-slate-400" />
            <dt className="w-16 text-[10.5px] text-slate-400">{t("Language")}</dt>
            <dd className="text-[11px] text-slate-600">
              {t(profileSummary.language)}
            </dd>
          </div>
        </dl>

        <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-[12px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
          <Pencil size={13} />
          {t("Edit Profile")}</button>
      </section>

      {/* Security */}
      <section className="glass rounded-2xl p-4 sm:p-5">
        <div className="flex items-center justify-between">
          <p className="text-[12px] font-semibold text-[#163b5b]">{t("Security")}</p>
          <button className="rounded-full border border-white/60 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
            {t("Change Password")}</button>
        </div>

        <ul className="mt-3 space-y-3">
          {toggles.map((toggle, index) => {
            const Icon = toggleIcon[index] ?? ShieldCheck;
            return (
              <li key={toggle.id} className="flex items-start gap-2.5">
                <Icon size={15} className="mt-0.5 shrink-0 text-slate-400" />
                <div className="min-w-0 flex-1">
                  <p className="text-[11.5px] font-semibold text-[#163b5b]">
                    {t(toggle.label)}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {t(toggle.description)}
                  </p>
                </div>
                <button
                  role="switch"
                  aria-checked={toggle.enabled}
                  aria-label={t("Toggle {name}", { name: t(toggle.label) })}
                  onClick={() => flip(toggle.id)}
                  className={`relative mt-0.5 h-5 w-9 shrink-0 rounded-full transition-colors ${
                    toggle.enabled ? "bg-teal" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                      toggle.enabled ? "translate-x-4" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </li>
            );
          })}

          <li className="flex items-center gap-2.5 border-t border-white/50 pt-3">
            <Monitor size={15} className="shrink-0 text-slate-400" />
            <div className="min-w-0 flex-1">
              <p className="text-[11.5px] font-semibold text-[#163b5b]">
                {t("Active Sessions")}</p>
              <p className="text-[10px] text-slate-400">
                {t("Manage your active sessions.")}</p>
            </div>
            <button className="shrink-0 rounded-full border border-white/60 bg-white/70 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm transition-colors hover:bg-white/90">
              {t("View")}</button>
          </li>
        </ul>
      </section>

      {/* Danger Zone */}
      <section className="rounded-2xl border border-rose-200/70 bg-rose-50/60 p-5">
        <p className="flex items-center gap-2 text-[12px] font-semibold text-rose-600">
          <AlertTriangle size={15} />
          {t("Danger Zone")}</p>
        <p className="mt-1.5 text-[11px] leading-4 text-slate-500">
          {t("Permanently delete your account and all associated data. This action cannot be undone.")}</p>
        <button className="mt-3 w-full rounded-full border border-rose-300 bg-white/70 px-4 py-2 text-[12px] font-semibold text-rose-600 shadow-sm transition-colors hover:bg-rose-50">
          {t("Delete Account")}</button>
      </section>
    </div>
  );
}
