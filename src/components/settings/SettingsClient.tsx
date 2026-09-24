"use client";

import { useState } from "react";

import { settingsNav } from "@/data/dashboard";
import SettingsNav from "./SettingsNav";
import GeneralSettingsTab from "./GeneralSettingsTab";
import SettingsProfileSidebar from "./SettingsProfileSidebar";
import { useI18n } from "@/i18n/I18nProvider";

function PlaceholderTab({ label }: { label: string }) {
  const { t } = useI18n();

  return (
    <section className="glass rounded-2xl p-10 text-center">
      <p className="text-[14px] font-semibold text-[#163b5b]">{t(label)}</p>
      <p className="mt-1 text-[11.5px] text-slate-400">
        {t("This section is coming soon.")}</p>
    </section>
  );
}

export default function SettingsClient() {
  const [activeKey, setActiveKey] = useState("general");

  const activeLabel =
    settingsNav.find((item) => item.key === activeKey)?.label ?? "Settings";

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[240px_1fr] xl:grid-cols-[240px_1fr_300px]">
      <SettingsNav activeKey={activeKey} onSelect={setActiveKey} />

      <div>
        {activeKey === "general" ? (
          <GeneralSettingsTab />
        ) : (
          <PlaceholderTab label={activeLabel} />
        )}
      </div>

      <div className="lg:col-span-2 xl:col-span-1">
        <SettingsProfileSidebar />
      </div>
    </div>
  );
}
