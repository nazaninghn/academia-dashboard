"use client";

import { useState } from "react";

import { profileTabs } from "@/data/dashboard";
import GeneralInfoTab from "./GeneralInfoTab";
import CompanySidebar from "./CompanySidebar";
import { useI18n } from "@/i18n/I18nProvider";

function PlaceholderTab({ label }: { label: string }) {
  const { t } = useI18n();

  return (
    <section className="glass rounded-2xl p-10 text-center">
      <p className="text-[13px] font-semibold text-ink">{t(label)}</p>
      <p className="mt-1 text-[11.5px] text-slate-400">
        {t("This section is coming soon.")}</p>
    </section>
  );
}

export default function CompanyProfileClient() {
  const { t } = useI18n();

  const [activeTab, setActiveTab] = useState("general");

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap items-center gap-1 border-b border-white/60">
        {profileTabs.map((tab) => {
          const isActive = tab.key === activeTab;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-3 py-2.5 text-[12px] font-medium transition-colors ${
                isActive ? "text-primary-dark" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {t(tab.label)}
              {isActive && (
                <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary" />
              )}
            </button>
          );
        })}
      </div>

      {/* Content + sidebar */}
      <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]">
        <div>
          {activeTab === "general" ? (
            <GeneralInfoTab />
          ) : (
            <PlaceholderTab
              label={
                profileTabs.find((t) => t.key === activeTab)?.label ?? "Section"
              }
            />
          )}
        </div>

        <CompanySidebar />
      </div>
    </div>
  );
}
