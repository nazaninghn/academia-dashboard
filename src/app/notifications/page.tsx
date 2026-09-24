import DashboardShell from "@/components/dashboard/DashboardShell";
import NotificationsBanner from "@/components/notifications/NotificationsBanner";
import NotificationsList from "@/components/notifications/NotificationsList";
import NotificationSidebar from "@/components/notifications/NotificationSidebar";

export default function NotificationsPage() {
  return (
    <DashboardShell>
      <NotificationsBanner />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_300px]">
        <NotificationsList />

        <NotificationSidebar />
      </div>
    </DashboardShell>
  );
}
