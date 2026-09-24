import DashboardShell from "@/components/dashboard/DashboardShell";
import SettingsBanner from "@/components/settings/SettingsBanner";
import SettingsClient from "@/components/settings/SettingsClient";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <SettingsBanner />

      <SettingsClient />
    </DashboardShell>
  );
}
