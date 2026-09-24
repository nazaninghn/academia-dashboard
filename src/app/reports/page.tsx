import DashboardShell from "@/components/dashboard/DashboardShell";
import ReportsBanner from "@/components/reports/ReportsBanner";
import ReportStats from "@/components/reports/ReportStats";
import ReportsTable from "@/components/reports/ReportsTable";
import ReportCategories from "@/components/reports/ReportCategories";
import RecentDownloads from "@/components/reports/RecentDownloads";
import ReportsFooter from "@/components/reports/ReportsFooter";

export default function ReportsPage() {
  return (
    <DashboardShell>
      <ReportsBanner />

      <ReportStats />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]">
        <ReportsTable />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:flex xl:flex-col">
          <ReportCategories />
          <RecentDownloads />
        </div>
      </div>

      <ReportsFooter />
    </DashboardShell>
  );
}
