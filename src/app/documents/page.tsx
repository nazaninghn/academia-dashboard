import DashboardShell from "@/components/dashboard/DashboardShell";
import DocumentsBanner from "@/components/documents/DocumentsBanner";
import DocStats from "@/components/documents/DocStats";
import DocumentsTable from "@/components/documents/DocumentsTable";
import UploadPanel from "@/components/documents/UploadPanel";
import RecentActivity from "@/components/documents/RecentActivity";
import DocumentsFooter from "@/components/documents/DocumentsFooter";

export default function DocumentsPage() {
  return (
    <DashboardShell>
      <DocumentsBanner />

      <DocStats />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_320px]">
        <DocumentsTable />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:flex xl:flex-col">
          <UploadPanel />
          <RecentActivity />
        </div>
      </div>

      <DocumentsFooter />
    </DashboardShell>
  );
}
