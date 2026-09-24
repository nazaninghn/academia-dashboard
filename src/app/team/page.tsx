import DashboardShell from "@/components/dashboard/DashboardShell";
import TeamBanner from "@/components/team/TeamBanner";
import TeamStats from "@/components/team/TeamStats";
import TeamTable from "@/components/team/TeamTable";
import TeamSidebar from "@/components/team/TeamSidebar";

export default function TeamPage() {
  return (
    <DashboardShell>
      <TeamBanner />

      <TeamStats />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]">
        <TeamTable />

        <TeamSidebar />
      </div>
    </DashboardShell>
  );
}
